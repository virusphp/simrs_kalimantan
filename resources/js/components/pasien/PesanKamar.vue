/*TODO*/

<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<div class="card">
						<div class="card-body">	
						<form @submit.prevent="getPasien">
							<div class="form-group row" v-if="showRekamMedis">
								<label for="no_rekam_medik" class="col-md-4 col-form-label text-md-right">No Rekam Medis</label>

								<div class="col-md-5">
									<input v-model="no_rekam_medik" id="no_rekam_medik" v-bind:class="[formControl, { 'is-invalid' : no_rekam_medikIsInvalid }]" name="no_rekam_medik" required autofocus placeholder="masukkan nomor rekam medis">
									
									<span class="invalid-feedback" role="alert">
											<strong>{{ message }}</strong>
										</span>		
								</div>
								<div class="col-md-3">
									<button class="btn btn-primary btn-block">Cari Pasien</button>
								</div>
							</div>
						</form>	
						<div class="form-group row max-auto" v-if="showPasien">
							<label for="no_rekam_medik" class="col-md-6 col-form-label text-md-right">Apakah benar data pasien berikut?</label>
							<div class="col-md-6 float-right">	
								<button class="btn btn-primary" @click="continueRegister">Lanjut</button>
							</div>
						</div>
						<div class="form-group row" v-if="showPasien">
							<div class="col-md-12 col-lg-6 mx-auto">	
								<data-pasien v-bind:rdata="{dataPasienDetail}"></data-pasien>
							</div>
						</div>
						<div class="form-group row" v-if="showFormBookingKamar">
							<div class="col-md-12 col-lg-6 mx-auto">	
									<form-booking-kamar v-bind:norm="no_rekam_medik" v-bind:dataPasien="{dataPasienDetail}" v-bind:rdata="{no_rekam_medik: no_rekam_medik}" v-bind:pasienid="pasienId"></form-booking-kamar>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>	
</template>

<script>
import DataPasien from './DataPasien.vue'
import FormBookingKamar from './FormBookingKamar.vue'

export default {
	mounted() {
		if (this.$store.state.isLogin == false) {
			this.$router.push('/login')
		}
	},
	data: function() {
		return {
			no_rekam_medik:'',
			no_rekam_medikIsInvalid:'',
			formControl: 'form-control',
			message: '',
			objStyles: {
				width: '100%' 
			},
			dataPasienDetail:{},
			showPasien: false,
			showRekamMedis: true,
			showFormBookingKamar: false,
			patientId:''
		}
	},
	components: {
		'data-pasien' : DataPasien,
		'form-booking-kamar': FormBookingKamar
	},
	methods: {
		getPasien: function() {
			let no_rekam_medik = this.no_rekam_medik
			this.$store.dispatch("access_api", {
				form: { 'no_rekam_medik' : no_rekam_medik },
				endpoint: "rmpasien"})
				.then(resp => {
					// console.log(resp)
					this.showPasien = true
					// this.showRekamMedis= false;
					this.dataPasienDetail = resp.data.res
					this.pasienId = resp.data.res.pasien_id
				})
				.catch(err => { console.log(err) })
		},
		continueRegister: function() {
			localStorage.setItem("pasien_id_register", this.pasien_id_register)	
			// this.$router.push('/continue_daftar')
			this.showPasien = false
			this.showFormBookingKamar = true
			this.showRekamMedis= false
		}
	}
}
</script>
