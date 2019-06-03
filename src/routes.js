import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';
import Post from './components/Post.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/post/:id', component: Post, name: 'post' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/about', component: About, name: 'about' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;