<template>
  <div class='hello'>
    <Navbar></Navbar>

    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h2 class="mb-5">Fun Way to Chat with Friend</h2>
              <div class="page-content">
                Sometimes in life, your friend may invite you for a dinner, but something happens by accident and your friend could not make it. 
                In general, he may say something like, “I'm sorry, something just came out. Maybe some other time?” Then, in most cases, your
                friend may feel really sorry or just forget about it and you may feel somewhat awkward to remind him.
                <br />
                <br /> Our purpose is to avoid this kind of embarrassment and make interactions and invitations between friends more interesting.
              </div>
  
              <router-link to="/dashboard">
                <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger" style="color:#fff">
                  Try it now !</a>
              </router-link>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../assets/img/proto/6.png" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <section class="features" id="Features" style="color:#fff;">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../assets/img/proto/1.png" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-screen-smartphone text-primary"></i>
                    <h3>Unlimited Fun</h3>
                    <p class="text-muted">unlimited card, unlimited fun !</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p class="text-muted">Put an image, text, send to your Umise friends or facebook friends </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p class="text-muted">As always, this theme is free to use for any purpose!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-lock-open text-primary"></i>
                    <h3>We make friend closer </h3>
                    <p class="text-muted">It is such a wonderful journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="cta contact" id="About">
      <div class="cta-content">
        <div class="container">
          <h2>We Make Friends Closer</h2>
          <div class="page-content">
            Under the condition mentioned above, if using our application, your friend could just send you a dinner card when he or she could not make it. The dinner card means having a meal together. And this card could be used only within a period of validity.
            <br />
            <br /> Through this operation, not only neither of you would forget this appointment and have a great time together, but you would also feel more interesting and natural to send invitation.
          </div>
          <a href="#" class="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
        </div>
      </div>
  
      <div class="container media_cont">
        <h4>We
          <i class="fa fa-heart"></i> new friends!</h4>
        <ul class="list-inline list-social">
          <li class="list-inline-item social-twitter">
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-facebook" @click="shareToFacebook">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item social-google-plus">
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
  
      <div class="overlay"></div>
    </section>
  
    <footer>
      <div class="container">
        <p>&copy; Umise 2018. All Rights Reserved. Cat Named Doggie</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <a href="https://app.termly.io/document/privacy-policy-for-website/57e6a742-786e-4532-aa58-3c276bef31ca">Privacy Policy</a>
  
    </footer>
  </div>
</template>

<script>
  import Navbar from './Navbar';
  
  export default {
    name: 'HelloWorld',
    components: {
      Navbar,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    methods:{
      shareToFacebook() {
        FB.ui({
          method: 'share',
          href: 'https://umise.me',
          picture: 'https://s3.us-east-2.amazonaws.com/umisefrontendimages/Chance_Card.jpg',
          title: 'This is my page',
          description: "Hello, this is just a test",
          caption: "picture caption"
        }, function(response) {
          console.log("feed:", response);
        });
      },
    },
    created: function() {
      this.$store.state.isLogin = false;
    },
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/font-awesome.min.css";
  @import "../assets/css/simple-line-icons.css";
  @import "../assets/css/new-age.css";
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
