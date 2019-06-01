<template>
<body>
  <div class="container">
        <div class="contact">
        <div class="card">
            <div class="card-header">
                   <br><br>
            </div>
            <div class="card-body">
                 <div class="card-header">
                <h3>Create Post</h3>
                
            </div>

               <form v-on:submit.prevent="createPost">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="post.title">
            </div>
            <div class="form-group">
              <label>Img:</label>
              <input type="text" class="form-control" v-model="post.img">
            </div>
            <div class="form-group">
              <label>Video:</label>
              <input type="text" class="form-control" v-model="post.video">
            </div>
            <div class="form-group">
              <textarea class="form-control" name="text" placeholder="Text" rows="14" v-model="post.text"></textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Author</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Select Author</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Category</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Create Post">
            </div>
          </form>
            </div>
        </div>
    </div>
  </div>
</body>
</template>


<script>
export default {
  components: {
      name: 'createPost'
  },
  data() {
      return {
          post: {}
      }
  },
  methods: {
      createPost() {
           let uri = 'http://localhost:3000/api/posts';
            this.axios.post(uri, this.post).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>