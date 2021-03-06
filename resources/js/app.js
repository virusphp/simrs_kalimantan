/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css'

window.Vue = require('vue');
import VueRouter from 'vue-router'
import VueSelect from 'vue-select'
import Vuex from 'vuex'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Argon from './argon/plugins/argon-kit'
import { FadeTransition } from "vue2-transitions";

window.Vue.use(VueRouter)
window.Vue.use(VueSelect)
window.Vue.use(Vuex)
window.Vue.use(BootstrapVue)
window.Vue.use(IconsPlugin)
window.Vue.use(Argon)

import store from './store.js'
import routes from './routes.js'

const router = new VueRouter({
	routes: routes.routes
})

router.beforeEach((to, from, next) => {
	next()
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('xb-menu', require('./components/MenuComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
	router,
	store,
	components: {	
		FadeTransition
	}
});
