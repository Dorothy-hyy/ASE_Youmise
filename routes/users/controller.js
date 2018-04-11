const ServerError = require('../../utils/ServerError');
const config = require('../../config');

exports.getUsernameFromEmail = async (User, email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if(!user){
      throw new Error('User not found!');
    }
    const username = user.get('username');
    return username;
  } catch(err) {
    throw new ServerError(400, err.message);
  }
}


exports.dbCreateUser = async (User, username, email) => {
  let result;
  try {
    let raw = await User.create({
      username,
      email,
    });
    result = raw.get({ plain: true });
    console.log(result);
    return result;
  } catch (err) {
    const message = err.errors.reduce((prev, { message }) => {
      return `${prev}${message}; `;
    }, '');
    throw new ServerError(400, message);
  }
}

exports.signup = async (User, cognito, username, email, password) => {
  const result = await exports.dbCreateUser(User, username, email);

  let params = {
    ClientId: config.CLIENT_ID,
    Password: password,
    Username: username,
    UserAttributes: [
      {
        Name: 'custom:uid',
        Value: result.uid
      },
      {
        Name: 'email',
        Value: email
      }
    ]
  };

  try {
    await cognito.signUp(params).promise();
    return { username: result.username };
  } catch (err) {
    User.destroy({
      where: { uid: result.uid }
    }).then(() => console.log(`delete success, uid: ${result.uid}`))
    throw new ServerError(400, err.message);
  }
};

exports.verification = async (cognito, confirmationCode, username) => {
  const params = {
    ClientId: config.CLIENT_ID,
    ConfirmationCode: confirmationCode,
    Username: username,
  };

  try {
    await cognito.confirmSignUp(params).promise();
    return { username: username };
  } catch (err) {
    throw new ServerError(400, err.message);
  }
}

exports.resendConfirmation = async (cognito, username) => {
  try {
    const params = {
      ClientId: config.CLIENT_ID,
      Username: username,
    };
    await cognito.resendConfirmationCode(params).promise();
    return { username: username };
  } catch (err) {
    throw new ServerError(400, err.message);
  }
};

exports.forgetPassword = async (cognito, username) => {
  let params = {
    ClientId: config.CLIENT_ID,
    Username: username,
  };
  try {
    await cognito.forgotPassword(params).promise();
    return { username: username};
  } catch (err) {
    throw new ServerError(400, err.message);
  }

};

exports.confirmforgetPassword = async (cognito, confirmationCode, password, username) => {
  let params = {
    ClientId: config.CLIENT_ID,
    ConfirmationCode: confirmationCode,
    Password: password,
    Username: username,
  };

  try {
    await cognito.confirmForgotPassword(params).promise();
    return { username: username};
  } catch (err) {
    throw new ServerError(400, err.message);
  }
};

exports.dbFetchAll = async (User) => {
  try {
    const result = await User.findAll({ raw: true });
      if (!result){
        console.log('There is no record in Card Table.');
      } else {
          console.log('Successfully find all cards.');
          return result;
      }
  } catch (err) {
    throw new ServerError(400, err.message);
  }
};

exports.addAvatar = async (User, s3, uid, avatar) => {
  try{
    const user = await User.findOne({ where: { uid } });
    if(!user){
      throw new Error('User not found!');
    }
    const base64Data = new Buffer(avatar.replace(/^data:image\/\w+;base64,/, ""),'base64')
    const data = {
      Bucket: config.S3_bucket,
      Key: uid,
      Body: base64Data,
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg',
      ACL: 'public-read',
    };
    await s3.putObject(data).promise();
    const url = `https://${data.Bucket}.s3.amazonaws.com/${data.Key}`;
    const result = await user.updateAttributes({ avatarUrl: url });
    return result;
  } catch(err){
    throw new ServerError(400, err.message);
  }
}

exports.getUserAvatar = async (User, uid) => {
  try{
    const user = await User.findOne({ where: { uid } });
    if(!user){
      throw new Error('User not found!');
    }
    const avatarUrl = user.get('avatarUrl');
    return {avatarUrl};
  } catch(err) {
    throw new ServerError(400, err.message);
  }
}
