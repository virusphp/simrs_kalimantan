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
const RegisterPoli = () => import('./components/poli/RegisterPoli.vue');
const RegisterPoliLama = () => import('./components/poli/RegisterPoliLama.vue');
const AdminRs = () => import('./components/admin/AdminRs.vue');
const AdminRsLogin = () => import('./components/admin/AdminRsLogin.vue');

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
		{ 
			path: '/registerpoli',
			components:{
				default: RegisterPoli
			}	
		},
		{ path: '/home' , redirect: '/pesankamar'},
		{ 
			path: '/adminrs',
			components: {
				default: AdminRs,
				// menu: Menu
			}
		},
        {
            path: '/rsud',
            components: {
                default: AdminRsLogin,
            }
        },
        {
            path: '/registerpolilama',
            components: {
                default: RegisterPoliLama
            }
        }
	]
}
