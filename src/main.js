import axios from 'axios';

import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';
import SimpleJWTAuth from "../packages/simple-jwt-auth/src/SimpleJWTAuth";
import VModal from "vue-js-modal";
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.prototype.$http = axios;
Vue.prototype.$auth = new SimpleJWTAuth(router);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
});

//Custom Components
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);

//Alerts
const closeButton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

Vue.component('alert-primary',{
    props:['message'],
    template: '<div class="alert alert-primary" role="alert"><div class="alert-text">{{ message }}</div>' + closeButton + '</div>'
});
Vue.component('alert-secondary',{
    props:['message'],
    template: '<div class="alert alert-secondary" role="alert"><div class="alert-text">{{ message }}</div>' + closeButton + '</div>'
});
Vue.component('alert-success',{
    props:['message'],
    template: '<div class="alert alert-success" role="alert"><div class="alert-text">{{ message }}</div>' + closeButton + '</div>'
});
Vue.component('alert-danger',{
    props:['message'],
    template: '<div class="alert alert-danger" role="alert"><div class="alert-text">{{ message }}</div>' + closeButton + '</div>'
});
Vue.component('alert-warning',{
    props:['message'],
    template: '<div class="alert alert-warning" role="alert"><div class="alert-text">{{ message }}</div>' + closeButton + '</div>'
});
Vue.component('alert-info',{
    props:['message'],
    template: '<div class="alert alert-info" role="alert"><div class="alert-text">{{ message }}</div>' + closeButton + '</div>'
});

// // Setup the API client.
// Vue.http.options.root = process.env.VUE_APP_TLSAPI_HOST;
Vue.axios.defaults.baseURL = process.env.VUE_APP_TLSAPI_HOST;
(()=> {
    let token = localStorage.getItem('jwt');
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
        /*if setting null does not remove `Authorization` header then try
          delete axios.defaults.headers.common['Authorization'];
        */
    }
})();
// Vue.axios.defaults.baseURL = 'http://localhost:8000';

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
