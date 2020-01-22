import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		status: '',
		token: localStorage.getItem('token') || '',
		user: {},
		isLogin: false,
		intervalId:0,
		nama:''
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, token, user) {
			state.status = 'success'
			state.token = token,
			state.user = user
			state.isLogin = true
		},
		auth_error(state) {
			state.status = 'error'
			state.isLogin = false	
		},
		auth_logout(state) {
			state.status = ''
			state.token = ''
			state.isLogin = false
		},
		add_interval_id(state, payload) {
			state.intervalId = payload
		},
		remove_interval_id(state) {
			clearInterval(state.intervalId)
		},
		save_info(state, payload) {
			state.nama = payload.nama
		}
	},
	actions: {
		login({commit}, user){
			return new Promise((resolve, reject) => {
				commit("auth_request")
				commit("remove_interval_id")
				axios.post('/api/login', user)
					.then(response => {
						const token = response.data.token
						axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
						localStorage.setItem('token', token)
						commit("auth_success", token, user)
						resolve(response)
					})
					.catch(error => {
						commit("auth_error")
						localStorage.removeItem('token')
						reject(error)
					})
				})		
		},
		// access api
		access_api({commit}, data) {
			console.log(data)
			return new Promise((resolve, reject) => {
				axios.post('/api/' + data.endpoint, data.form)
					.then(response => {
						resolve(response)
					})
			})
		},
		get_options({commit}, data){
			return new Promise((resolve, reject) => {
				axios.post('/api/' + data.endpoint, data.form)
					.then(response => {
						resolve(response)
					})
			})
		},
		submit_action({commit}, data){
			return new Promise((resolve, reject) => {
				axios.post('/api/' + data.endpoint, data.form)
				.then(response => {
					resolve(response)

				})	
			})
		},
		delay({commit}, data) {
			router = data.router
			routes = data.routes
			return new Promise((resolve, reject) => {
				setTimeout(function(){
					router.push(routes)
				}, timer)
			})
		},
		fetch({commit}, data){
			return new Promise((resolve, reject) => {
				axios.get('/api/' + data.endpoint, { params: data.params })
				.then(response => {
					resolve(response)
				})
			})
		},
		remove_interval({commit}) {
			console.log('************** Remove Interval ID')	
			commit('remove_interval_id')
		},
		set_interval_id({commit}, intvid) {
			console.log('***** ADD INTV ID *****')	
			commit('add_interval_id', intvid);
		},
		save_information({commit}, data) {
			commit("save_info", data)
		},
		logout({commit}) {
			commit('auth_logout')
		}
	},
	getters: {
		getStatus: state => {
			return state.isLogin
		}
	}
})
