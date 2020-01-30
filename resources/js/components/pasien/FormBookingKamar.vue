<template>
	<card shadow>
		<div>
			<!-- <b-button @click="$bvToast.show('pesan-penyimpanan')">klik toast</b-button>	
			<b-toast id="pesan-penyimpanan" title="Informasi Penyimpanan" static auto-hide>
					Data berhasil di simpan No Boking {{ no_booking   }}
			</b-toast>-->
			<b-alert variant="success" :show="dismissCountDown" dismissible
					@dismissed="dismissCountDown=0"
					@dimiss-count-down="countDownChanged">
					Anda berhasil memesan kamar dengan nomor booking: {{ no_booking }}	
			</b-alert>		

			<b-modal id="modal-loading" title="Sedang Proses">
					Tunggu, sedang proses penyimpanan	
			</b-modal>
			<b-modal id="modal-success" title="Konfirmasi">
					Anda berhasil memesan kamar dengan nomor booking: <b>{{ no_booking }}</b>
			</b-modal>
			<b-modal id="modal-error-2" title="Konfirmasi">
					Anda berhasil memesan kamar dengan nomor booking: {{ no_booking }}	
			</b-modal>
			<b-modal id="modal-1" title="Konfirmasi" @ok="handleSubmitPesanKamar" >
				Anda ingin meneruskan Pesan Kamar?	
			</b-modal>
			<b-modal id="modal-error" title="Konfirmasi" @ok="handleSubmitPesanKamar" >
				Ruangan, Kamar dan Kelas Pelayanan tidak boleh kosong	
			</b-modal>
			<form v-if="inputPilihan">
                <div class="text-center text-muted mb-4">
					<strong>Pilih Ruangan dan Kamar</strong>
                </div>
				<div class="form-group row">
					<label for="" class="col-sm-4 col-form-label">Ruangan</label>
					<div class="col-sm-6">
							<v-select label="ruangan_nama" :options="ruangan_option" :reduce="ruangan_option => ruangan_option.ruangan_id" v-model="ruangan" @input="loadKamar"></v-select>
					</div>
				</div>
				<div class="form-group row">
					<label for="" class="col-sm-4 col-form-label">Kamar</label>
					<div class="col-sm-6">
							<v-select label="kamarruangan_nokamar" :options="kamar_option" :reduce="kamar_option => kamar_option.kamarruangan_id" v-model="kamar" @input="loadPelayanan"></v-select>
							<span v-if="kamar_option_ln" style="color: red;">
								<strong>{{ kamar_message }}</strong>
							</span>

					</div>
				</div>
				<div class="form-group row">
					<label for="" class="col-sm-4 col-form-label">Kelas Pelayanan</label>
					<div class="col-sm-6">
							<v-select label="kelaspelayanan_nama" :options="kelaspelayanan_option" :reduce="kelaspelayanan_option => kelaspelayanan_option.kelaspelayanan_id" v-model="kelaspelayanan"></v-select>
					</div>
				</div>
				<div class="form-group row">
					<label for="" class="col-sm-4 col-form-label sr-only"></label>
					<div class="col-sm-6">
						<b-button variant="primary" @click="previewPilihan">Pesan Kamar</b-button>
					</div>
					<div class="col-sm-6">
						<b-button variant="link" @click="confirmCancel">Batal</b-button>
					</div>
				</div>
			</form>
			<div v-if="previewAll">
				<div></div>
			</div>
		</div>
	</card>	
</template>

<script>

import vSelect from 'vue-select';

export default {
	mounted() {
		console.log(this.ruangan)	
		// get ruangan
		this.ruangan_option = [
			{ruangan_id: -1, ruangan_nama: 'Loading...'}
		]
		this.$store.dispatch("get_options", {
			form: {},
			endpoint: 'ruangan'} )
			.then(resp => {
				// this.ruangan = resp.data[0].ruangan_id
				this.ruangan_option = resp.data
				this.ruangan_valid = 1;
				this.arrRuangan = []
				let i = 0
				for (i in resp.data) {
					this.arrRuangan[resp.data.ruangan_id] = resp.data.ruangan_nama
				}
				console.log(this.arrRuangan)	
			})
		this.dismissCountDown = 0	
	},
	components: {
		vSelect
	},
	props:{
		'pasienid' : Number,
		'rdata': Object,
		'norm' : String,
		'dataPasien' : Object
	},
	data() {
		return {
			ruangan:'',
			kamar:'',
			ruangan_option:[
				{ruangan_id: -1, ruangan_nama: 'Loading...'}
			],
			kamar_option:[
				{kamarruangan_id: -1, kamarruangan_nokamar: 'Loading...'}
			],
			kelaspelayanan_option:[
				{kelaspelayanan_id: -1, kelaspelayanan_nama: 'Loading...'}
			],
			showOptionKamar: false,
			showOptionRuangan: false,
			kelaspelayanan:'',
			inputPilihan: true,
			previewAll: false,	
			items : [],
			fields: [],	
			arrRuangan: [],
			no_booking:'',
			dismissCountDown: 0,
			showDimissibleAlert: false,
			dismissSecs: 100,
			submitted: false,
			ruangan_valid: 0,
			kamar_valid: 0,
			kelas_valid: 0,
			kamar_message:'',
			kamar_option_ln: false,
		}
	},
	methods: {
		loadKamar(value) {
			this.kamar_option = [
				{kamarruangan_id: -1, kamarruangan_nokamar: 'Loading...'}
			],
			// console.log(value)		
			this.$store.dispatch("get_options", {
				form: { ruangan_id : value },
				endpoint: 'kamarruangan'} )
				.then(resp => {
					// this.kamar = resp.data[0].kamarruangan_id
					if (parseInt(resp.data.status_code) == 510) {
						this.$router.push('/');
					} else {
						console.log(resp.data.length)
						if (parseInt(resp.data.length) > 0) {
							this.kamar_option = resp.data	
							this.kamar_valid = 1
							this.kamar_option_ln = false
							this.kamar_message = ''
						} else {
							this.kamar_valid = 0
							this.kamar_option = [
								{kamarruangan_id: -1, kamarruangan_nokamar: 'Tidak ada kamar yang kosong.'}
							];
							this.kamar_option_ln = true
							this.kamar_message = 'Tidak ada kamar yang kosong'
						}
					}
				})

		},

		loadPelayanan(value) {
			this.kelaspelayanan_option = [
				{kelaspelayanan_id: -1, kelaspelayanan_nama: 'Loading...'}
			],
			
			this.$store.dispatch("get_options", {
			form:{ kamarruangan_id : value  },
			endpoint: 'kamarpelayanan' })
			.then(resp => {
				if (parseInt(resp.data.status_code) == 510) {
					this.$router.push('/');
				} else {
					this.kelaspelayanan_option = resp.data
				}
			})
		},

		previewPilihan() {
			if (this.ruangan == '' || this.kamar == '' || this.kelaspelayanan == '' ) {
				this.$bvModal.show('modal-error')	
				return false;
			} 


			let data = this.dataPasien.dataPasienDetail
			let kelurahan = data.kelurahan.kelurahan_nama
			let kecamatan = data.kecamatan.kecamatan_nama
			let kabupaten = data.kabupaten.kabupaten_nama 
			let provinsi = data.provinsi.propinsi_nama	
			this.fields = [ '', '' ]
			this.items = [
				{ field: 'No Rekam Medis', value: this.norm },
				{ field: 'Nama', value: data.nama_pasien },
				{ field: 'TTL', value: data.tempat_lahir + ', ' + data.tanggal_lahir },
				{ field: 'Alamat', value: data.alamat_pasien + '<br>' +  kelurahan + 
					'<br>Kec. ' + kecamatan + ', Kab. ' + kabupaten + ' ' +
					provinsi },
				{ field: 'Memesan ', value: '' },
				{ field: 'Ruangan ', value: this.arrRuangan[this.ruangan] },
				{ field: 'Kamar ', value: this.kamar },
				{ field: 'Kelas Pelayanan ', value: this.kelaspelayanan },
			]
			this.$bvModal.show('modal-1')	
		},

		handleSubmitPesanKamar() {
			this.$bvModal.show('modal-loading')
			this.$store.dispatch("submit_action", {
				form:{
					ruangan_id: this.ruangan,
					kamarruangan_id: this.kamar,
					no_rekam_medik: this.norm,
					kelaspelayanan_id: this.kelaspelayanan	
				},
				endpoint:'pesankamarsubmit'	
			})
			.then(resp => {
				this.$bvModal.hide('modal-loading')	
				if (resp.data.status == 'Success') {
					this.no_booking = resp.data.no_booking
					console.log(resp.data.no_booking)	
					this.submitted = true
					// this.$bvToast.show('pesan-penyimpanan');
					// alert('Kamar telah berhasil di pesan')
					this.dismissCountDown = 5	
					this.$bvModal.msgBoxOk("Anda berhasil memesan kamar dengan nomor booking: " + 
							resp.data.no_booking )
							.then(value => {
								this.$router.push('/pesankamar')
							})

					// this.$bvModal.show('modal-success')
					// setTimeout(function(){
					//	this.$router.push('/pesankamar')
					// }, 1000)
				} else {
					this.$bvModal.show('modal-error-1')
					
					setTimeout(() => {
						this.$router.push('/pesankamar')
					}, 1000)
				}
			})
		},

		countDownChanged(dismissCountDown) {
			this.dismissCountDown = this.dismissSecs
		},

		confirmCancel() {
			const drouter = this.$router
			this.$bvModal.msgBoxConfirm("Anda ingin membatalkan pesanan ?")
			.then( value => {
				console.log(this.kamar_valid)
				
				if (value == true) {
					console.log('Direct to Home')
					drouter.push('/home')
				}
			})
		}
	},
	computed: {
		disableButton: function() {
			if ( this.ruangan_valid && this.kamar_valid && this.kelas_valid) {
				return ""
			} else return "disabled"
		}
	}
}

</script>
