// About.vue
<template>
<body>
  <header
    class="masthead"
    :style="{'background-image': 'url(' + require('./assets/img/about-bg.jpg') + ')'}"
  >
    <div
      class="overlay"
      :style="{'background-image': 'url(' + require('./assets/img/work-with-us.jpg') + ')'}"
    ></div>
    <div class="container">
      <div class="row" style="background-image: url(&quot;assets/img/About-Us.jpg&quot;);">
        <div
          class="col-12 col-sm-8 col-md-11 col-lg-5 offset-10 align-self-center mx-auto"
          style="opacity: 0.86;background-color: #333333;background-size: cover;margin: -1px;padding: -36px;background-position: top;"
        >
          <div class="site-heading" style="width: 250px;">
            <h1
              class="text-center d-flex flex-grow-1 flex-shrink-1 flex-fill justify-content-center align-items-center align-content-center m-auto"
            >About Me</h1>
            <span class="subheading">This is what I do</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="team-boxed">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">Team</h2>
        <p class="text-center">Person responsable for this platform, and uploading medical content:</p>
      </div>
      <div class="row people" v-for="about in abouts" :key="about._id">
        <div class="col-md-6 col-lg-4 item"></div>
        <div class="col-md-6 col-lg-4 item">
          <div class="box">
            <img class="rounded-circle"  :src="'https://docs.google.com/uc?id=' + about.img" width="100px">
            <h3 class="name">{{about.name}}</h3>
            <p class="title">{{about.title}}</p>
            <p class="description">
              {{about.description}}&nbsp;
              <br>
              <br>
            </p>
            <div class="social">
              <a href="https://www.facebook.com/farah.dzankovic">
                <i class="fa fa-facebook-official"></i>
              </a>
              <!-- <a href="#">
                <i class="fa fa-twitter"></i>
              </a> -->
              <a href="https://www.instagram.com/agacya_a/?hl=sr">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 item"></div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-lg-8 mx-auto"></div>
    </div>
  </div>
  <hr>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <ul class="list-inline text-center">
            <!-- <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></li> -->
            <li class="list-inline-item">
              <a href="https://www.facebook.com/farah.dzankovic?fref=hovercard&hc_location=chat">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <!-- <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github fa-stack-1x fa-inverse"></i></span></li> -->
          </ul>
          <p class="text-muted copyright">Copyright&nbsp;©&nbsp;MedUni 2019</p>
        </div>
      </div>
    </div>
  </footer>
</body>
</template>

<script>
import image from "./assets/img/1.jpg"


export default {
    data: function () {
        return {
            image: image,
            abouts: [],

        }
    },
     created: function() {
    this.getAbout();
  },
    methods: {
    getAbout() {
      let uri = "http://localhost:3000/api/abouts";
      this.axios.get(uri).then(response => {
        this.abouts = response.data;
      });
    }
  }
}
</script>
