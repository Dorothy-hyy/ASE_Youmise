<template>
  <div id='account'>
    <!--- body -->

    <div id="send_cards" class="body_cont">

      <div class="send_cards_container">
        <h4 class="title">
          <i class="icon-home"></i>Account Information
        </h4>
        <div class="container_1">
          <div class="row">
           
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.user.userName,
      email: this.$store.user.email,
      url: "https://umise.me"
    };
  },
  name: "HelloSocial",
  components: {}
};
</script>

<style scoped>
@import "../assets/css/font-awesome.min.css";
@import "../assets/css/simple-line-icons.css";
.card_cont {
  /* background:#dcdcdc; */
  display: block;
  width: auto;
  padding: 0;
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.row {
  width: auto;
  padding: 0;
  margin: 0;
  margin-left: 20px;
  padding-bottom: 50px;
  margin-bottom: 200px;
}

.card_img {
  width: 220px;
  margin: 10px 25px;
  background: #dcdcdc;
  height: 320px;
  border-radius: 5px;
}

.card_img:hover {
  background: #3ac17e;
  opacity: 0.9;
  cursor: pointer;
  border: 2px dashed #fff;
  color: #fff;
}

.customize-icon-cont {
  border: 4px dashed #fff;
  width: 220px;
  margin: 10px 25px;
  background: rgba(0, 0, 0, 0.2);
  height: 320px;
  border-radius: 5px;
  color: #fff;
  color: #fff;
}

.customize-icon-cont i {
  font-size: 6em;
  text-align: center;
  position: relative;
  top: 80px;
}

.customize-icon {
  opacity: 0.8;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 180px;
}

.card_cont img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 260px;
}

.icon-home {
  padding: 10px;
}

.send_cards_container {
  height: auto;
  margin-top: 50px;
  margin-left: 0rem;
}

.title {
  text-align: left;
  font-size: 1.8em;
  color: #fff;
  margin-left: 50px;
}

.subTitle {
  color: #ddd;
  font-size: 0.9em;
  margin-left: 50px;
  text-align: left;
}

#account {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  background: #fff;
  background: url(/img/bg1.2bf8b4c8.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 800px;
  height: 100vh;
  overflow-x: hidden;
}

#hrstyle {
  border: 1px;
  height: 1px;
  width: 1000px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}

@media (min-width: 992px) {
  /* #nav_dashboard {
        padding-top: 0;
        padding-left: 17rem;
      } */
  .send_cards_container {
    height: auto;
    margin-top: 0px;
    margin-left: 0rem;
  }
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
}

.card_img h4 {
  margin-top: 15px;
  font-size: 0.9rem;
}

.card_img p {
  font-size: 0.7rem;
}

.subheading {
  font-weight: 500;
  font-size: 1.35rem;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 600;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .send_cards_container {
    width: auto;
    height: auto;
    margin-left: 0rem;
    margin-top: 55px;
  }
  .body_cont {
    height: 100%;
    position: relative;
    display: block;
    margin-left: 0rem;
  }
}

@media (min-width: 992px) {
  .body_cont {
    height: 100%;
    position: relative;
    display: block;
    margin-top: 0px !important;
    padding-left: 17rem !important;
  }
}

.bg-primary {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.body_cont {
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
  float: left;
  /* min-height: 775px;  */
}
</style>
