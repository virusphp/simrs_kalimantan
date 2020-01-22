<template>
    <section class="section section-shaped section-lg my-0">
		<b-modal id="modal-error" title="Error Login" >
			Email atau Password salah
		</b-modal>
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <div class="container pt-0">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <form role="form">
                            <div class="text-center text-muted mb-4">
                                <small>Masuk</small>
                            </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83" v-model="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open" v-model="password">
                                </base-input>
                                <!-- <base-checkbox>
                                    Remember me
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click.prevent="LoginSubmit">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small><router-link to="/">Home</router-link></small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small><router-link to="/register">Daftar</router-link></small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!--
<template>
	<div class="container">
		<b-modal id="modal-error" title="Error Login" >
			Email atau Password salah
		</b-modal>
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">Login</div>

					<div class="card-body">
						<form @submit.prevent="LoginSubmit">
								<div class="form-group row">
									<label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

									<div class="col-md-6">
										<base-input v-model="email" id="email" type="email" v-bind:class="[formControl, { 'is-invalid' : emailIsInvalid }]" name="email" required autocomplete="email" autofocus>
											<span class="invalid-feedback" role="alert">
												<strong>{{ message }}</strong>
											</span>
										</base-input>	
									</div>
								</div>

								<div class="form-group row">
									<label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

									<div class="col-md-6">
										<input v-model="password" id="password" type="password" v-bind:class="[formControl, {'is-invalid' : passwordIsInvalid }]" required autocomplete="current-password">

											<span class="invalid-feedback" role="alert">
												<strong>{{ message }}</strong>
											</span>
									</div>
								</div>

								<div class="form-group row">
									<div class="col-md-6 offset-md-4">
										<div class="form-check">
											<input v-model="remember" class="form-check-input" type="checkbox" name="remember" id="remember">

											<label class="form-check-label" for="remember">
												Remember Me
											</label>
										</div>
									</div>
								</div>

								<div class="form-group row mb-0">
									<div class="col-md-8 offset-md-4">
										<button type="submit" class="btn btn-primary">
											Login
										</button>
										<div v-if="hasPasswordRequest">
											<router-link to="/register">
												Register
											</router-link>
										</div>

										<div v-if="hasPasswordRequest">
											<router-link to="/password_request">
												Forgot Your Password
											</router-link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			</div>
</template>
-->

<script>
export default {
	mounted() {
		this.$store.dispatch("remove_interval")
	},
	data: function() {
		return {
			email:'',
			password:'',
			output:'',
			emailIsInvalid:'',
			passwordIsInvalid:'',
			formControl: 'form-control',
			message:'',
			remember:'',
			hasPasswordRequest: false
		};	
	},
	methods:{
		LoginSubmit: function() {
			let email = this.email
			let password = this.password;
			this.$store.dispatch("login", {email, password})
			.then(response => { 				
				if (response.data.result == "Success" ) {
					this.$store.dispatch("save_information", {
						nama: response.data.nama
					})
					this.$router.push('/pesankamar')  
				
				} else {
					this.$bvModal.show('modal-error')
				}
			})
			.catch(error => {
					alert('Please check connections')
					console.log(error) 
			})
		}
	}
}
</script>
