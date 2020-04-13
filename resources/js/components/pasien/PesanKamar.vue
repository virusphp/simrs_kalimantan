/*TODO*/

<template>
	<div class="container">
		
		<div class="mt-4">
		<b-modal id="modal-pesan-kamar">
			<div class="pt-4">
				<template v-if="no_booking.length">
					<div class="row">
						<div class="col-12">
							
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                </base-button>

                                <base-button type="neutral">
                                </base-button>
                            </div>
							<b-card class="pb-3" v-for="nobooking in no_booking" v-if="no_booking.length" :key="no_booking.bookingkamar_no"
								header="No Boking">
								<b-card-text>
									<strong>{{ nobooking.bookingkamar_no }}</strong>
									<small>{{ nobooking.create_time }}</small>
								</b-card-text>
							</b-card>
						</div>
					</div>
				</template>	
				<div class="d-block text-center" v-else><h3>Belum ada Kamar yang dipesan</h3></div>
			</div>
		</b-modal>
		<b-modal id="modal-loading-search" title="Sedang Proses">
			Tunggu, sedang proses pencarian...
		</b-modal>
		<div class="row justify-content-center">
			<div class="col-md-12">
				<card type="secondary" shadow
					header-clases="bg-white pb-5"
					body-classes="px-lg-5 py-lg-5"
					class="border-0">
					<template>
						<template v-if="showRekamMedis">
							<form role="form">
								<base-input alternative
								   class="mb-3"
								   placeholder="No Rekam Medis"
								   addon-left-icon="ni ni-archive-2" v-model="no_rekam_medik" @keyup.return="getPasien">
								</base-input>
								<base-button block type="primary" class="my-4" @click.prevent="getPasien">Cari Pasien</base-button>
								<hr />
								<base-button v-if="!showPasien" block type="danger" class="my-4" @click.prevent="daftarPasien">Daftarkan Pasien Baru</base-button>
								<base-button v-if="!showPasien" block type="success" class="my-4" @click="daftarBookingKamar">Daftar Pesan Kamar</base-button>
							</form>
						</template>

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
					</template>
				</card>
			</div>	
		</div>
		</div>
	</div>	
</template>

<script>
import DataPasien from './DataPasien.vue'
import FormBookingKamar from './FormBookingKamar.vue'
import Modal from '../../argon/components/Modal.vue'

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
			patientId:'',
			modals:{},
			dataBooking:{},
			no_booking:[]
		}
	},
	components: {
		'data-pasien' : DataPasien,
		'form-booking-kamar': FormBookingKamar,
		'modal' : Modal,
	},
	methods: {
		getPasien: function() {
			let no_rekam_medik = this.no_rekam_medik
			this.$bvModal.show('modal-loading-search')
			this.$store.dispatch("access_api", {
				form: { 'no_rekam_medik' : no_rekam_medik },
				endpoint: "rmpasien"})
				.then(resp => {
					this.$bvModal.hide('modal-loading-search')
					if (resp.data.status == 'Success') {
						// console.log(resp)
						this.showPasien = true
						// this.showRekamMedis= false;
						this.dataPasienDetail = resp.data.res
						this.pasienId = resp.data.res.pasien_id
					} else {
						this.$bvModal.msgBoxOk('No Rekam Medis: ' + no_rekam_medik  + ' tidak ditemukan')
					}
				})
				.catch(err => { console.log(err) })
		},
		continueRegister: function() {
			localStorage.setItem("pasien_id_register", this.pasien_id_register)	
			// this.$router.push('/continue_daftar')
			this.showPasien = false
			this.showFormBookingKamar = true
			this.showRekamMedis= false
		},

		daftarPasien: function() {
			this.$router.push('/registerpoli')
		},

		daftarBookingKamarGet: function() {
			// fecthing data booking
			this.$bvModal.msgBoxOk("Sedang Proses, mohon tunggu...");
			this.$store.dispatch('fetch', { 
				params:{},
				endpoint:'nomorbooking'
			})
			.then(resp => {
				this.no_booking = resp.data
				this.$bvModal.show('modal-pesan-kamar')
			})
		},
		daftarBookingKamar: function(){
			this.daftarBookingKamarGet()
		}
	}
}
</script>
