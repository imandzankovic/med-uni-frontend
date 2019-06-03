// Home.vue

<template>
<body>
  <header
    class="masthead"
    :style="{'background-image': 'url(' + require('./assets/img/home-bg.jpg') + ')'}"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <div class="site-heading">
            <h1>MedUNI Platform</h1>
            <span class="subheading">Platform for sharing knowledge in medical science.</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row">
      <div class="col-md-10 col-lg-8">
        <div class="post-preview" v-for="post in posts" :key="post._id">
          <router-link :to="{name: 'post',params: { id: post._id }}">
            <a>
              <h2 class="post-title">{{ post.title }}</h2>
            </a>
          </router-link>
          <br>
          <article class="post-subtitle">
            <i>{{ post.sumUp }}</i>
          </article>
          <p class="post-meta">
            <br>
            Posted by&nbsp;
            Farah Dzankovic on {{ post.timestamp | moment("dddd, MMMM Do YYYY") }}
          </p>
        </div>
        <hr>

        <hr>

        <hr>

        <hr>
        <div class="clearfix">
          <button class="btn btn-primary float-right" type="button">Older Posts&nbsp;⇒</button>
        </div>
      </div>
    </div>
  </div>
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
export default {
  data() {
    return {
      posts: []
    };
  },

  created: function() {
    this.fetchPosts();
  },

  methods: {
    fetchPosts() {
      let uri = "http://localhost:3000/api/posts";
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    }
  }
};
</script>