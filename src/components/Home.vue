// Home.vue

<template>
<body>
     <header class="masthead" :style="{'background-image': 'url(' + require('./assets/img/home-bg.jpg') + ')'}">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1>MedUNI Platform</h1><span class="subheading">Platform for sharing knowledge in medical science.</span></div>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8">
                <div class="post-preview">
                     <router-link :to="{name: 'post', params: {id: 2}}">
                    <a>
                        <h2 class="post-title">Risk of cardiovascular diseases increased by several factors</h2>
                        <h3 class="post-subtitle">Unhealthy habbits are...</h3>
                    </a>
                </router-link>
                    <p class="post-meta">Posted by&nbsp;<a href="#">Amra Dzankovic on September 24, 2018</a></p>
                </div>
                <hr>
                <div class="post-preview">
                    <a href="#">
                        <h2 class="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2>
                    </a>
                    <p class="post-meta">Posted by&nbsp;<a href="#">Start Bootstrap on September 18, 2018</a></p>
                </div>
                <hr>
                <div class="post-preview">
                    <a href="#">
                        <h2 class="post-title"> Science has not yet mastered prophecy</h2>
                        <h3 class="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
                    </a>
                    <p class="post-meta">Posted by&nbsp;<a href="#">Start Bootstrap on August 24, 2018</a></p>
                </div>
                <hr>
                <div class="post-preview">
                    <a href="#">
                        <h2 class="post-title">Failure is not an option</h2>
                        <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                    </a>
                    <p class="post-meta">Posted by&nbsp;<a href="#">Start Bootstrap on July 8, 2018</a></p>
                </div>
                <hr>
                <div class="clearfix"><button class="btn btn-primary float-right" type="button">Older Posts&nbsp;⇒</button></div>
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <ul class="list-inline text-center">
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></li>
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></li>
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github fa-stack-1x fa-inverse"></i></span></li>
                    </ul>
                    <p class="text-muted copyright">Copyright&nbsp;©&nbsp;MedUni 2018</p>
                </div>
            </div>
        </div>
    </footer>
</body>
</template>
<script>
export default {
    
}
</script>