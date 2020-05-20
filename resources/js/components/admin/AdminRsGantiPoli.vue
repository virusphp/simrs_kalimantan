<template>
	<div class="container">
		<div class="mt-4">
            <b-modal id="modal-1" title="Konfirmasi" @ok="submitKonfirmasiAction" >
                Anda ingin meneruskan Mengganti Poli dari Calon Pasien {{ nama_pasien }}?	
            </b-modal>
            <b-modal id="modal-s" title="Info" @ok="goToList" >
                Berhasil di konfirmasi, Lakukan Konfirmasi Lagi untuk Memasukkan Calon Pasien Menjadi Pasien
            </b-modal>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <card type="secondary" shadow
                            header-clases="bg-white pb-5"
                            body-classes="px-lg-5 py-lg-5"
                            class="border-0">
                            <template>
                                <table class="table table-striped text-center`">
                                    <tbody>
                                        <tr v-if="loaded"><td colspan="2">Loading...</td></tr>
                                        <tr v-for="(value, name) in dataCalonPasien">
                                        <td>{{ name.replace('_', ' ') }}</td>
                                            <td>{{ value }}</td>
                                        </tr>
                                    </tbody>
                                </table>	
								<div class="row">
									<div class="col-6">
										<base-button type="danger" class="my-4" @click.prevent="goToList">&lt; Kembali</base-button>
									</div>
									<div class="col-6 text-right">
										<base-button type="primary" class="my-4 text-right" @click.prevent="gantiPoli"> Ganti Poli</base-button>
									</div>
								</div>
                                <section v-if="pilihPoli">
                                    <div class="form-group row">
                                        <label for="Poli" class="col-md-12 col-form-label">Poli</label>
                                            
                                        <div class="col-md-12">
                                        <v-select v-bind:class="[ 'white-box mb-3' ]" :options="nama_poli_lists" 
                                        v-model="nama_poli" label="ruangan_nama" autofocus @input="getDokter"></v-select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Poli" class="col-md-12 col-form-label">Dokter</label>
                                            
                                        <div class="col-md-12">
                                        <v-select v-bind:class="[ 'white-box mb-3' ]" :options="nama_dokter_lists" 
                                        v-model="nama_dokter" label="nama_pegawai" autofocus @input="getJadwalPoli"></v-select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="hari_jam" class="col-md-12 col-form-label">Pilih Hari dan Jam</label>
                                            
                                        <div class="col-md-12">
                                            <v-select v-bind:class="[ 'white-box mb-3' ]" :options="polibuka_lists" 
                                                v-model="hari_jam" label="buka" autofocus></v-select>
                                        </div>
                                    </div>	
                                    <div class="form-group row">
                                        <label for="tanggal_pesan" class="col-md-12 col-form-label">Tanggal</label>
                                            
                                        <div class="col-md-12">
                                            <input type="date" v-model="tanggal_pesan" v-bind:class="[formControl, { 'is-invalid': tanggalPesanIsInvalid }]" >
                                        </div>
                                    </div>	
                                    <div class="form-group row">
                                        <label for="hari_jam" class="col-md-12 col-form-label">Upload Foto/Scan Rujukan BPJS</label>
                                            
                                        <div class="col-md-12">
                                            <input type="file" v-on:change="handleFileUpload()" id="file" ref="file">
                                        </div>
                                    </div>	
                                    <div class="form-group row">
                                        <label for="alamat" class="col-md-12 col-form-label">Keluhan</label>

                                        <div class="col-md-12">
                                            <textarea id="keluhan" style="width:100%" cols="100" rows="2" v-bind:class="[formControl, { 'is-invalid': keluhanIsInvalid }]" v-model="keluhan" name="keluhan" required></textarea>
                                            <span v-if="keluhanIsInvalid" style="color: red;">
                                                <small>Keluhan tidak boleh kosong</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <base-button type="primary" class="my-4" @click.prevent="nextPage(1)">Lanjut &gt;</base-button>
                                    </div>
                                </section>

                            </template>
                        </card>
                   </div>     
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
		if (this.$store.state.isAdminLogin == false) {
			this.$router.push('/')
		}
        console.log('Current Id: ', this.$store.state.curr_id)
        this.id_daftar_poli = this.$store.state.curr_id
        this.$store.dispatch('fetch', {
            endpoint: 'listdaftarpolibyid',
            params: { id: this.id_daftar_poli }
        }).then(resp => {
            this.dataFetch = resp.data
            this.dataCalonPasien = this.filtered()
            this.nama_pasien = this.dataFetch.nama_depan + ' ' + this.dataFetch.nama_pasien
            console.log(this.dataFetch)
            this.loaded = false
        })
    },
    data() {
        return {
            nama_pasien: '',
            id_daftar_poli: 0,
            dataFetch: {},
            dataCalonPasien: {},
            loaded: true,
			pilihPoli: true,
			nama_poli: '',
			nama_poli_lists: [{ ruangan_id:-1, ruangan_nama: 'Loading ....'}],
			nama_dokter_lists: [{ pegawai_id:-1, nama_pegawai: 'Pilih Dokter'}],
			polibuka_lists: [{ jadwalbukapoli_id:-1, buka: 'Pilih Jadwal'}],
            propinsi_lists : [{ propinsi_id: -1, propinsi_nama: 'Loading...'}],
			namaPoliIsInvalid: false,
			nama_dokter:'',
			hari_jam:'',
			tanggal_pesan:'',
			debugOny: false,
        }
    },
    methods: {
        filtered() {
            let data = this.dataFetch
            console.log(data)
            return {
                No_Rekam_Medis: data.no_rm ? data.no_rm : '-',
                Nama: data.nama_depan + ' ' + data.nama_pasien,
                Keluhan: data.keluhan,
                Alamat : data.alamat_pasien,
                Ruangan : data.ruangan.ruangan_nama,
			    Nama_Dokter: data.pegawai.nama_pegawai,
			    Jadwal_Dokter: data.jadwaldokter.jadwaldokter_hari + ' ' + data.jadwaldokter.jadwaldokter_buka,
                Tanggal_Pesan : data.tanggal_pesan,
				No_Telepon: data.no_hp,
                No_HP: data.no_mobile,
            }
        },
        gantiPoliConfirm() {
            this.$bvModal.show('modal-1')
        },
        submitKonfirmasiAction() {
			let data = new FormData()
			data.append('id_daftar_poli', this.currentIdDaftarPoli)
			this.$store.dispatch('submit_action', {
				endpoint: 'gantiPoli',
				form:data
			}).then(resp => {
                if (resp.status == 'Success') {
                    this.$bvModal.show('modal-s')
                }
            })
        },
        goToList() {
            this.$router.push('/adminrs')
        },
		getPoliLists() {
			this.nama_dokter_lists = [{ pegawai_id:-1, nama_pegawai: 'Loading...'}]
			this.polibuka_lists = [{ jadwaldokter_id: -1, buka: "Loading..."  }]
			this.nama_dokter = ''
			this.hari_jam = ''
			this.$store.dispatch('fetch', {
				endpoint:'poli',
				params:{}
			}).then(resp => {
				this.nama_poli_lists = resp.data
				this.nama_dokter_lists = [{ pegawai_id:-1, nama_pegawai: 'Loading...'}]
				this.nama_dokter = ''
				this.hari_jam = ''
			})
			
		},
		getDokter(ruangan) {
			this.nama_dokter_lists = [{ pegawai_id:-1, nama_pegawai: 'Loading...'}]
			this.polibuka_lists = [{ jadwaldokter_id: -1, buka: "Loading..."  }]
			this.hari_jam = ''
			this.nama_dokter = ''
			this.$store.dispatch('fetch', {
				endpoint: 'getdokter',
				params:{'ruangan_id' : ruangan.ruangan_id }
			}).then(resp => {
				this.nama_dokter_lists = resp.data
				this.hari_jam = ''
			})
		},
		getJadwalPoli(pegawai) {
			this.polibuka_lists = [{ jadwalbukapoli_id:-1, buka: 'Loading...'}],
			this.$store.dispatch('fetch', {
				endpoint: 'jadwaldokter',
				params:{'pegawai_id' : pegawai.pegawai_id, 'ruangan_id' : this.nama_poli.ruangan_id}
			}).then(resp => {
				this.polibuka_lists = resp.data
			})

		},

    }
}
</script>
