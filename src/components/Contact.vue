<template>
<body>
  <header
    class="masthead"
    :style="{'background-image': 'url(' + require('./assets/img/contact-bg.jpg') + ')'}"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <div class="site-heading">
            <h1>Contact Me</h1>
            <span class="subheading">Have questions? I have answers.</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-lg-8 mx-auto">
        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
        <form id="contactForm" name="sentMessage" novalidate="novalidate"  v-on:submit.prevent="addContact">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Name</label>
              <input class="form-control" type="text" id="name" required placeholder="Name"
              v-model="contact.name">
              <small class="form-text text-danger help-block"></small>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Email Address</label>
              <input
                class="form-control"
                type="email"
                id="email"
                required
                placeholder="Email Address"
                v-model="contact.email"
              >
              <small class="form-text text-danger help-block"></small>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Phone Number</label>
              <input
                class="form-control"
                type="tel"
                id="phone"
                required
                placeholder="Phone Number"
                v-model="contact.phone"
              >
              <small class="form-text text-danger help-block"></small>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls mb-3">
              <label>Message</label>
              <textarea
                class="form-control"
                id="message"
                data-validation-required-message="Please enter a message."
                required
                placeholder="Message"
                rows="5"
                v-model="contact.msg"
              ></textarea>
              <small class="form-text text-danger help-block"></small>
            </div>
          </div>
          <div id="success"></div>
          <div class="form-group">
            <button class="btn btn-primary" id="sendMessageButton" type="submit">Send</button>
        
          </div>
        </form>
      </div>
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
 <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/clean-blog.js"></script>
<script>
export default {
  components: {
      name: 'Add Contact'
  },
  data() {
      return {
          contact: {}
      }
  },
  methods: {
      addContact() {
           let uri = 'http://localhost:3000/api/contacts';
            this.axios.post(uri, this.contact).then((response) => {
            });
             event.target.reset();
              
      https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#Parameters
      this.$notification.show('Message sent', {
        body: 'Your message is successfully sent!'
      }, {})
     
    
        }
       
    }
}
</script>