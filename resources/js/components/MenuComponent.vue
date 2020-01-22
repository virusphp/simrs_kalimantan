<template>
<div style="position: relative">
<base-nav type="danger" effect="dark" expand>
	<a class="navbar-brand">{{ appname }}</a>
	<div class="row" slot="content-header" slot-scope="{closeMenu}">
		<div class="col-6 collapse-brand-">			
			<a href="#"></a>
		</div>
		<div class="col-6 collapse-close">
			<close-button @click="closeMenu"></close-button>
		</div>
	</div> <!-- row -->
	<ul class="navbar-nav ml-lg-auto">
		<li class="nav-item" v-if="notLogin">
			<a class="nav-link nav-link-icon"><router-link to="/login">Login</router-link></a>
		</li>
		<li class="nav-item" v-if="notLogin">
			<a class="nav-link nav-link-icon"><router-link to="/register">Daftar</router-link></a>
		</li>
		<base-dropdown tag="li" :title="nama" v-if="status">
			<a class="dropdown-item">Logout</a>
		</base-dropdown>
	</ul>
</base-nav>
</div>
</template>

<!-- <template>
<div style="position: relative">
	<b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand><router-link to="/">{{ appname }}</router-link></a></b-navbar-brand>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item></b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav class="ml-auto">
				<b-nav-item v-if="notLogin">
					<a class="nav-link"><router-link to="/login">Login</router-link></a>						
				</b-nav-item>
				<b-nav-item v-if="notLogin">
					<a class="nav-link"><router-link to="/register">Daftar</router-link></a>						
				</b-nav-item>
				<b-nav-item-dropdown right v-if="status">
					<template v-slot:button-content>
						<em>{{ nama }}</em>
					</template>
					<b-dropdown-item></b-dropdown-item>
					<b-dropdown-item></b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</div>
</template>
-->
<!--
	<b-navbar class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand"><router-link to="/">{{ appname }}</router-link></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
						<li class="nav-item" v-if="notLogin">
							<a class="nav-link"><router-link to="/login">Login</router-link></a>						
                        </li>
						<li class="nav-item" v-if="notLogin">
							<a class="nav-link"><router-link to="/register">Daftar</router-link></a>						
                        </li>
                        <li class="nav-item" v-if="status">
							Selamat Datang {{ nama }}
                        </li>
                        <li class="nav-item dropdown" v-if="status">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a>Nomor Boking terakhir: {{ no_booking }}</a>
                             </div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" @click.stop="logout">Logout</a>
                             </div>
                        </li>
                    </ul>
                </div>
            </div>
        </b-navbar>
</div>
</template>
-->

<script>

import BaseNav from '../argon/components/BaseNav.vue'
import BaseDropdown from '../argon/components/BaseDropdown.vue'
import CloseButton from '../argon/components/CloseButton.vue'

export default {
	mounted() {
		this.status = this.$store.state.isLogin
		this.notLogin = ! this.status
		console.log(this.status)
		this.nama = this.$store.state.nama
		this.no_booking = ''
	},
	components: {
		'base-nav' : BaseNav,
		'base-dropdown' : BaseDropdown,
		'close-button': CloseButton
	},
	props:{
		appname:''
	},
	data() {
		return {
			notLogin:true,
			status:true,
			nama:'',
			no_bookin:''
		}
	},
	methods: {
		logout() {
			this.$bvModal.msgBoxConfirm("Anda ingin keluar")
			.then(resp => {
				if (resp) {
					this.$store.dispatch('logout')
					this.$router.push('/')
				}
			})

		}
	}
}
</script>

<style>
a, a:hover {
	color:#FFFFFF !important
}
</style>
