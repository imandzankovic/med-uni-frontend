<template>
  <div>
      <div>
           <!-- <h1>Posts</h1>-->
           <br><br> 
      </div>
   <div class="header">
       <br><br>
        <h1 style="margin-left:300px;">Posts Manager</h1>
           <br><br>
   </div>
     <div class="container">
      <table class="table">
        <thead class="thead">
          <tr>
            <th>ID</th>
            <td>Title</td>
            <td>Text</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="post in posts" :key="post._id">
            <!-- <td>{{ post._id }}</td> -->
            <td>{{ post.title }}</td>
            <td>{{ post.text }}</td>
            <td>
              <router-link
                :to="{name: 'Edit', params: { id: post._id }}"
                class="btn btn-primary"
              >Edit</router-link>
            </td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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