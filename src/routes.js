import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Contact from './components/Contact.vue';
import Post from './components/Post.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/about', component: About, name: 'about' },
    { path: '/post/:id', component: Post, name: 'post' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;