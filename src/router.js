import Vue from 'vue';
import Router from 'vue-router';
// Components
import Dashboard       from "@/components/Dashboard";
import Login           from '@/components/users/Login';
import Register        from '@/components/users/Register';
import ForgotPassword  from '@/components/users/ForgotPassword';
import Profile         from "@/components/users/Profile";
import PersonalInfo    from "@/components/users/profile/PersonalInfo";
import AddressInfo     from "@/components/users/profile/AddressInfo";
import ChangePassword  from "@/components/users/profile/ChangePassword";
import Invoices        from "@/components/users/profile/Invoices";
import BillingAccount  from "@/components/users/profile/BillingAccount";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
            meta: {auth: true},
            name: "dashboard"
        },
        {
            path: '/login',
            component: Login,
            meta: {auth: false}
        },
        {
            path: '/register',
            component: Register,
            meta: {auth: false}
        },
        {
            path: '/reset-password',
            component: ForgotPassword,
            meta: {auth: false}
        },
        {
            path: '/reset-password/:token',
            component: ForgotPassword,
            meta: {auth: false}
        },
        {
            path: '/profile',
            component: Profile,
            meta: {auth: true},
            children: [
                {
                    path: '',
                    component: PersonalInfo,
                    alias: 'personal-info'
                },
                {
                    path: 'address-info',
                    component: AddressInfo
                },
                {
                    path: 'change-password',
                    component: ChangePassword
                },
                {
                    path: 'invoices',
                    component: Invoices
                },
                {
                    path: 'billing',
                    component: BillingAccount
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth === true)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: {nextUrl: to.fullPath}
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.auth === false)) {
        if (localStorage.getItem('jwt') == null) {
            next();
        } else {
            next({name: 'dashboard'});
        }
    } else {
        next();
    }
});

export default router;
