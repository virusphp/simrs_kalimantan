<template>
	<div class="container">
		<div class="mt-4">
            <b-modal id="modal-loading" title="Sedang Proses">
                    Tunggu, sedang proses penyimpanan	
            </b-modal>
            <b-modal id="modal-1" title="Konfirmasi" @ok="submitKonfirmasiAction" >
                Anda ingin meneruskan Mengganti Poli dari Calon Pasien {{ nama_pasien }}?	
            </b-modal>
            <b-modal id="modal-error" title="Perhatian">
                Isi semua data di dalam formulir	
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
                                <section v-if="dataPasien">
                                    <table class="table table-striped text-center">
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
                                </section>
                                <section v-if="pilihPoli">
                                    <div class="form-group row">
                                        <label for="Poli" class="col-md-12 col-form-label">Poli</label>
                                            
                                        <div class="col-md-12">
                                        <v-select v-bind:class="[ 'white-box mb-3', { 'is-invalid' : ruanganIsInvalid  }]" :options="nama_poli_lists" 
                                        v-model="nama_poli" label="ruangan_nama" autofocus @input="getDokter"></v-select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Poli" class="col-md-12 col-form-label">Dokter</label>
                                            
                                        <div class="col-md-12">
                                        <v-select v-bind:class="[ 'white-box mb-3', {'is-invalid' : pegawaiIsInvalid} ]" :options="nama_dokter_lists" 
                                        v-model="nama_dokter" label="nama_pegawai" autofocus @input="getJadwalPoli"></v-select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="hari_jam" class="col-md-12 col-form-label">Pilih Hari dan Jam</label>
                                            
                                        <div class="col-md-12">
                                            <v-select v-bind:class="[ 'white-box mb-3', { 'is-invalid' : hariJamIsInvlid } ]" :options="polibuka_lists" 
                                                v-model="hari_jam" label="buka" autofocus></v-select>
                                        </div>
                                    </div>	
                                    <div class="form-group row">
                                        <label for="tanggal_pesan" class="col-md-12 col-form-label">Tanggal</label>
                                            
                                        <div class="col-md-12">
                                            <input type="date" v-model="tanggal_pesan" v-bind:class="[formControl, { 'is-invalid': tanggalPesanIsInvalid }]" >
                                        </div>
                                    </div>	
                                    <div class="row">
                                        <div class="col-6">
                                            <base-button type="danger" class="my-4" @click.prevent="goBack">&lt; Kembali</base-button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <base-button type="primary" class="my-4 text-right" @click.prevent="gantiPoliConfirm"> Ganti Poli</base-button>
                                        </div>
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
import vSelect from 'vue-select';

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
		this.getPoliLists()
    },
    components: {
        vSelect,        
    },
    data() {
        return {
            dataPasien: true,
            nama_pasien: '',
            id_daftar_poli: 0,
            dataFetch: {},
            dataCalonPasien: {},
            loaded: true,
			pilihPoli: false,
			nama_poli: [{ ruangan_id : '', ruangan_nama: ''}],
			nama_poli_lists: [{ ruangan_id:-1, ruangan_nama: 'Loading ....'}],
			nama_dokter_lists: [{ pegawai_id:-1, nama_pegawai: 'Pilih Dokter'}],
			polibuka_lists: [{ jadwalbukapoli_id:-1, buka: 'Pilih Jadwal'}],
            propinsi_lists : [{ propinsi_id: -1, propinsi_nama: 'Loading...'}],
			ruanganIsInvalid: false,
            pegawaiIsInvalid: false,
            hariJamIsInvlid: false,
			nama_dokter:[{ pegawai_id: '', nama_pegawai: '' }],
			hari_jam:[{ jadwaldokter_id: '', buka: '' }],
			tanggal_pesan:'',
			debugOny: false,
            formControl: 'form-control',
            tanggalPesanIsInvalid:false,
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
        gantiPoli() {
            this.pilihPoli = true
            this.dataPasien = false
        },
        goBack() {
            this.pilihPoli = false
            this.dataPasien = true
        },
        gantiPoliConfirm() {
            if ( this.validAll() ) {
                this.$bvModal.show('modal-1')
            }
        },

        validAll() {
			if (this.hari_jam == '' || this.nama_dokter.pegawai_id == '' || this.hari_jam.jadwaldokter_id == ''  || this.tanggal_pesan == '' || this.nama_poli.ruangan_id == '') {
                this.$bvModal.show('modal-error')
                this.tanggalPesanIsInvalid = this.tanggal_pesan == '' ? true : false
                this.ruanganIsInvalid = this.nama_poli.ruangan_id == '' ? true : false
                this.pegawaiIsInvalid = this.nama_dokter.pegawai_id == '' ? true : false
                this.hariJamIsInvlid = this.hari_jam.jadwaldokter_id == '' ? true : false

                return false
			}
            
            return true
        },

        submitKonfirmasiAction() {
            this.$bvModal.show('modal-loading')

			let data = new FormData()
			data.append('id_daftar_poli', this.id_daftar_poli)
            data.append('ruangan_id', this.nama_poli.ruangan_id)
            data.append('pegawai_id', this.nama_dokter.pegawai_id)
            data.append('jadwaldokter_id', this.hari_jam.jadwaldokter_id)
            data.append('tanggal_pesan', this.tanggal_pesan)
			this.$store.dispatch('submit_action', {
				endpoint: 'gantiPoli',
				form:data
			}).then(resp => {
                console.log(resp.data.status)
                if (resp.data.status == 'Success') {
					this.$bvModal.msgBoxOk("Anda berhasil merubah Poli")
							.then(value => {
								this.goToList()
							})
                }
                this.$bvModal.hide('modal-loading')
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
