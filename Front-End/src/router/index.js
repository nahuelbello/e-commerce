import { createRouter, createWebHistory } from 'vue-router';
import { ItemDetail } from '@/components';
import { Cart, Contact, Error404, Home, Login, Products, Profile, Signup } from '@/views';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/products', component: Products },
        { path: '/products/:category', component: Products },
        { path: '/product/:pid', component: ItemDetail },
        { path: '/cart', component: Cart },
        { path: '/contact', component: Contact },
        { path: '/login', component: Login },
        { path: '/signup', component: Signup },
        { path: '/profile', component: Profile },
        { path: '/:notFound(.*)', component: Error404 }
    ]
});

export default router;