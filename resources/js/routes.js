/*import Menu from './components/MenuComponent.vue'
import Login from './components/LoginComponent.vue'
import Register from './components/auth/RegisterComponent.vue'
import RegisterPasien from './components/pasien/RegistrasiPasienComponent.vue'
import PesanKamar from './components/pasien/PesanKamar.vue'*/

const Menu = () =>  import('./components/MenuComponent.vue')
const Login = () => import('./components/LoginComponent.vue')
const Register = () => import('./components/auth/RegisterComponent.vue')
const PesanKamar = () => import('./components/pasien/PesanKamar.vue')
const Public = () => import('./components/public/PublicComponent.vue')
const RegisterPasienBaru = () => import('./components/pasien/RegisterPasienBaru.vue')

export default {
	routes :[
		{ 
			path: '/', 
			components: {
				menu: Menu,	
				default: Public 
			}		
		},
		{ path: '/register', component: Register },
		{ path: '/login', component: Login },
		{ 
			path: '/pesankamar', 
			components:{
				default: PesanKamar,
				menu:Menu
			}
		},
		{ 
			path: '/registerpasien',
			components:{
				default: RegisterPasienBaru
			}	
		},
		{ path: '/home' , redirect: '/pesankamar'}
	]
}
