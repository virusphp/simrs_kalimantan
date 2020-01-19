/*import Menu from './components/MenuComponent.vue'
import Login from './components/LoginComponent.vue'
import Register from './components/auth/RegisterComponent.vue'
import RegisterPasien from './components/pasien/RegistrasiPasienComponent.vue'
import PesanKamar from './components/pasien/PesanKamar.vue'*/

const Menu = () =>  import('./components/MenuComponent.vue')
const Login = () => import('./components/LoginComponent.vue')
const Register = () => import('./components/auth/RegisterComponent.vue')
const RegisterPasien = () => import('./components/pasien/RegistrasiPasienComponent.vue')
const PesanKamar = () => import('./components/pasien/PesanKamar.vue')
const Public = () => import('./components/public/PublicComponent.vue')

export default {
	routes :[
	{ path: '/', component: Public },
	{ path: '/register', component: Register },
	{ path: '/login', component: Login },
	{ path: '/pesankamar', component: PesanKamar }
	]
}
