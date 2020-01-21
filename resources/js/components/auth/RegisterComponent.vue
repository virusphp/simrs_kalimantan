

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Pendaftaran User Aplikasi Pesan Kamar</div>

                    <div class="card-body">
							<form method="POST" action="register_user" @submit.prevent="register">
								<div class="form-group row">
									<label for="name" class="col-md-4 col-form-label text-md-right">Nama</label>

									<div class="col-md-6">
										<input v-model="nama" id="name" type="text" v-bind:class="[ formControl, { 'is-invalid' : namaIsInvalid }]" name="name" required autocomplete="name" autofocus>

									</div>
								</div>

								<div class="form-group row">
									<label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

									<div class="col-md-6">
										<input @blur="checkValid" v-model="email" id="email" type="email" v-bind:class="[ formControl, { 'is-invalid': passwordIsInvalid }]" name="email" required autocomplete="email">

										<span v-if="emailExists" style="color: red;">
											<strong>{{ emailMessage }}</strong>
										</span>
									</div>
								</div>

								<div class="form-group row">
									<label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

									<div class="col-md-6">
										<input id="password" v-model="password" type="password" v-bind:class="[formControl, { 'is-invalid': passwordIsInvalid}]" name="password" required autocomplete="new-password">

									</div>
								</div>

								<div class="form-group row">
									<label for="password-confirm" class="col-md-4 col-form-label text-md-right">Konfirmasi Password</label>

									<div class="col-md-6">
										<input id="password-confirm" v-model="konfirmasi_password" type="password" v-bind:class="[formControl]" name="password_confirmation" required autocomplete="new-password">
									</div>
								</div>

								<div class="form-group row">
									<label for="" class="col-md-4 col-form-label text-md-right"></label>
									<div class="col-md-offset-4 col-md-6" v-bind:style="messageStyleObject">{{ getConfirmation }}</div>
								</div>
								
								<div class="form-group row">
									<label for="password" class="col-md-4 col-form-label text-md-right">Identitas</label>
									
									<div class="col-md-6">
										
										<v-select :options="identitas_type" v-model="identitas"></v-select>
									</div>
								</div>

								<div class="form-group row">
									<label for="password-confirm" class="col-md-4 col-form-label text-md-right">Nomor {{ identitas_selected  }}</label>

									<div class="col-md-6">
										<input id="nomor-identitas" v-model="no_identitas" v-bind:class="[formControl]" name="no_identitas" required>
									</div>
								</div>
								
								<div class="form-group row">
									<label for="alamat" class="col-md-4 col-form-label text-md-right">Alamat</label>

									<div class="col-md-6">
										<textarea id="alamat" v-bind:class="[formControl, { 'is-invalid': alamatIsInvalid }]" v-model="alamat" name="alamat" required></textarea>
									</div>
								</div>


								<div class="form-group row mb-0">
									<div class="col-md-6 offset-md-4">
										<button :disabled="disableSubmit" type="submit" class="btn btn-primary">Daftar</button>
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
	
	import vSelect from 'vue-select';

    export default {
        mounted() {
            console.log('Component mounted.')
			this.emailExists = false
			this.$store.dispatch("remove_interval")
        },
		components: {
			vSelect
		},
		props: [
		],
		data: function() {
			return {
				namaIsInvalid: false,
				emailIsInvalid: false,
				identitasIsInvalid: false,
				identitasTypeIsInvalid: false,
				alamatIsInvalid: false,
				passwordIsInvalid: false,
				formControl: 'form-control',
				identitas_selected: 'KTP',
				email:'',
				nama:'',
				alamat: '',
				identitas_type: [
					'KTP', 
					'SIM'
				],
				no_identitas:'',
				password:'',
				konfirmasi_password:'',
				messageStyleObject: {
					color: 'red',
				},
				disableSubmit: false,
				identitas:'',
				emailExists:1,
				emailMessage:'',
			}
		},
		methods: {
			register: function() {
				window.axios.post("/api/register", {
					email: this.email,
					password : this.password,
					password_confirmation : this.konfirmasi_password,
					nama : this.nama,
					alamat: this.alamat,
					no_identitas: this.no_identitas,
					identitas: this.identitas,
				}).then(response => {
					// this.$swal("success");
					this.$router.push('/login')
				});
			},
			fokusNoIdentitas: function() {
				this.no_identitas.focus
			},
			checkValid: function(event) {
				let currentObj = this
				this.emailExists = true
				this.emailMessage = 'Sedang mengecek ketersedian email...'
				window.axios.post("/api/checkvalidemail", {
					email: this.email
				}).then( response => {
					this.emailExists = false
					this.emailExists = response.data.email_exists
					this.emailMessage = response.data.message
				});
			}
		},
		computed: {
			getConfirmation: function() {
				console.log(this.password)
				if (this.password != this.konfirmasi_password) {
					this.messageStyleObject.color = 'red';
					return 'Password dan Konfirmasi password tidak sama';
				} else {
					if ( this.password.length != 0 ) {
						this.messageStyleObject.color = 'green';
						return 'Password dan Konfirmasi Sama'
					}
				}
			}
		}
    }

	/*<select class="[formControl]" v-model="identitas_selected" @change="fokusNoIdentitas()">
	<option v-for="identitas in identitas_type" v-bind:value="identitas.value">{{ identitas.text  }}</option>
	</select>*/

</script>
