import Vue from 'vue';
import App from './app.vue';
import store from './store/store';
import Router from './Routers';


new Vue({
    el: '#app',
    router: Router,
    store: store,
    render: h => {
        return h(App)
    }
});