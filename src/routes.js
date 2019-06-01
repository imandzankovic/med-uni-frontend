import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Contact from './components/Contact.vue';
import CreatePost from './components/posts/CreatePost.vue';
import EditPost from './components/posts/EditPost.vue';
import ListPosts from './components/posts/ListPosts.vue';
import Admin from './components/admin/Admin.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/createPost', component: CreatePost, name: 'createPost' },
    { path: '/editPost', component: EditPost, name: 'editPost' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/about', component: About, name: 'about' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/admin', component: Admin, name: 'admin' },
    { path: '/posts', component: ListPosts, name: 'posts' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;