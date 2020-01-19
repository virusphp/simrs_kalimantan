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
										<input v-model="email" id="email" type="email" v-bind:class="[formControl, { 'is-invalid' : emailIsInvalid }]" name="email" required autocomplete="email" autofocus>
											<span class="invalid-feedback" role="alert">
												<strong>{{ message }}</strong>
											</span>
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


<script>
export default {
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
					this.$router.push('/pesankamar')  
				
				} else {
					this.$bvModal.show('modal-error')
				}
			})
			.catch(error => {
					alert('Please check connections')
					console.log(error) 
			})
			/*this.$http.post('/api/login', {
				email : this.email,
				password: this.password
			}).then(response => {
				const token = response.data.token
				localStorage.setItem('token', token)
				this.$http.defaults.headers.common['Authorization'] = token
				this.$store.dispatch("login", response.token)
				this.$route.push('/');
				[>console.log(this.$store.state.token)<]
			})*/
		}
	}
}
</script>
