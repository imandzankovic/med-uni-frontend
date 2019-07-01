<template>
<body>
  <header
    class="masthead"
    :style="{'background-image': 'url(' + require('./assets/img/01-when-alternative-medicine-goes-wrong-doctor.jpg') + ')'}"
  >
    <div class="overlay" style="opacity: 0.87;"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <div class="post-heading">
            <h1>{{ post.title }}</h1>

            <span class="meta">
              Materials by&nbsp;
              <p>{{author.name + ' ' + author.surname }}</p>&nbsp;on
              <span>{{ post.timestamp | moment("dddd, MMMM Do YYYY") }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <article>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="box">
            <!-- <img
              class="rounded-circle"
              :src="'https://docs.google.com/uc?id=' + author.img"
              width="100px"
            > -->
             <img
              class="rounded-circle"
              :src="author.img"
              width="100px"
            >
            <h3 class="name">{{author.name + ' ' + author.surname }}</h3>
            <p class="title">{{author.profesion}}</p>
            <p class="description">
              {{author.bio}}&nbsp;
              <br>
              <br>
            </p>
            <!-- <div class="social">
              <a href="#">
                <i class="fa fa-facebook-official"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </div>-->
          </div>
        </div>
        <div
          class="col-md-10 col-lg-8 col-xl-9 offset-md-1 mx-auto"
          style="width: 555px;margin: -2px;margin-top: -11px;margin-left: 89px;"
        >
          {{ post.text }}
          <h2 class="section-heading">{{post.title2}}</h2>
          <p>{{post.text2}}</p>

          <div class="embed-responsive embed-responsive-16by9">
            <!-- <video
              controls="true"
              class="embed-responsive-item"
              :src="'https://docs.google.com/uc?id=' + post.video"
            ></video> -->
              <video
              controls="true"
              class="embed-responsive-item"
              :src="post.video"
            ></video> 
            
          </div>
          <blockquote class="blockquote">
            <p class="mb-0">{{post.sumUp}}</p>
          </blockquote>
          <p></p>
          <h2 class="section-heading">{{post.title3}}</h2>
          <p>{{post.text3}}</p>
          <br>
        </div>
      </div>
    </div>
  </article>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <ul class="list-inline text-center">
            <!-- <li class="list-inline-item">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </li>-->
            <li class="list-inline-item">
              <a href="https://www.facebook.com/farah.dzankovic?fref=hovercard&hc_location=chat">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <!-- <li class="list-inline-item">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </li>-->
          </ul>
          <p class="text-muted copyright">Copyright&nbsp;©&nbsp;MedUni 2019</p>
        </div>
      </div>
    </div>
  </footer>
</body>
</template>

<script>
import image from "./assets/img/1.jpg";
export default {
  data: function() {
    return {
      image: image,
      post: {},
      author: {}
    };
  },
  created: function() {
    this.getPost();
  },
  methods: {
    getPost() {
      let uri = "http://localhost:3000/api/posts/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.post = response.data;

        let uri1 = "http://localhost:3000/api/authors/" + this.post.author;
        this.axios.get(uri1).then(response => {
          this.author = response.data;
        });
      });
    }
  }
};
</script>
