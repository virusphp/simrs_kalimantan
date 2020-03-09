<template>
    <section class="section section-shaped section-lg my-0 py-4">
        <!-- <div class="spinner" v-show="spinner">Loding...</div> -->
        <b-alert variant="success" :show="dismissCountDown" dismissible
					@dismissed="dismissCountDown=0"
					@dimiss-count-down="countDownChanged">
					Anda berhasil mendaftarkan pasien dengan nomor rekam medis: {{ no_rekam_medis }}	
        </b-alert>		

        <b-modal id="modal-loading" title="Sedang Proses">
                Tunggu, sedang proses penyimpanan	
        </b-modal>
        <b-modal id="modal-success" title="Konfirmasi">
                Anda berhasil mendaftarkan pasien dengan nomor rekam_medis: <b>{{ no_rekam_medis }}</b>
        </b-modal>
        <b-modal id="modal-error-2" title="Konfirmasi">
                Anda berhasil mendaftarkan pasien dengan nomor rekam_medis: {{ no_rekam_medis }}	
        </b-modal>
        <b-modal id="modal-1" title="Konfirmasi" @ok="submitRegistrationAction" >
            Anda ingin meneruskan Registrasi Pasien {{ nama_depan }} {{ nama }}?	
        </b-modal>
        <b-modal id="modal-error" title="Perhatian">
            Isi semua data di dalam formulir	
        </b-modal>
        <div class="shape shape-style-1 bg-gradient-default">
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
                            <div class="text-center text-muted mb-4">
                                <small>Pendaftaran Pasien Baru</small>
                            </div>
                            <form>
                                <small style="color: red;" v-if="infoFormulir">Isi semua data dalam formulir</small>
                                <section v-if="pageOneOpen">
                                    <div class="form-group row">
                                        <label for="name" class="col-md-12 col-form-label">Nama</label>
                                        <div class="col-md-4">
                                            <v-select v-bind:class="[ 'white-box mb-3', {'is-invalid' : namaDepanIsInvalid} ]" :options="['An.', 'By.', 'Nn.', 'Ny.', 'Tn.']" 
                                            v-model="nama_depan"
                                            autofocus></v-select>
                                        </div>
                                        <span v-if="namaDepanIsInvalid" style="color: red;">
											<small>Nama Depan tidak boleh kosong</small>
										</span>
                                        <div class="col-md-12">
                                            <input v-model="nama" id="name" type="text" 
                                            v-bind:class="[ formControl, { 'is-invalid' : namaIsInvalid }]" 
                                            name="name" required autocomplete="name" autofocus>
                                            <span v-if="namaIsInvalid" style="color: red;">
											    <small>Nama tidak boleh kosong</small>
										    </span>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="tgl_lahir" class="col-md-12 col-form-label">Tanggal Lahir</label>

                                        <div class="col-md-12">
                                            <div v-bind:class="[ 'row', {'is-invalid-box row' : tanggalLahirIsInvalid } ]">
                                                <div class="col-4 pr-1">
                                                    <v-select class="white-box" :options="days" v-model="day"></v-select>
                                                </div>
                                                <div class="col-4 pl-0 pr-1">
                                                    <v-select class="white-box" :options="months" v-model="month"></v-select>
                                                </div>
                                                <div class="col-4 pr-1 pl-0">
                                                    <v-select class="white-box" :options="years" v-model="year"></v-select>
                                                </div>
                                            </div>
                                            <span v-if="tanggalLahirIsInvalid" style="color: red;">
											    <small>Tanggal lahir harus diisi semua</small>
										    </span>
                                        </div>
                                        

                                    </div>
                                    <div class="form-group row">
                                        <label for="Agama" class="col-md-12 col-form-label">Agama</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select v-bind:class="['white-box' , {'not-filled' : agamaData }]" placeholder="Pilih Agama" 
                                            :options="agama_lists" v-model="agama"></v-select>

                                            <span v-if="agamaData" style="color: red;">
                                                <small>Agama tidak boleh kosong</small>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="gender" class="col-md-12 col-form-label">Gender</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select v-bind:class="[ 'white-box', {'is-invalid' : genderIsInvalid} ]" placeholder="Pilih Jenis Kelamin" :options="gender_type" v-model="gender"></v-select>
                                            <span v-if="genderIsInvalid" style="color: red;">
                                                <small>Jenis kelamin tidak boleh kosong</small>
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="text-right">
                                        <base-button type="primary" class="my-4" @click.prevent="nextPage(2)">Lanjut &gt;</base-button>
                                    </div>
                                </section>

                                <section v-if="pageTwoOpen">
                                    <div class="form-group row">
                                        <label for="alamat" class="col-md-12 col-form-label">Alamat</label>

                                        <div class="col-md-12">
                                            <textarea id="alamat" style="width:100%" cols="100" rows="2" v-bind:class="[formControl, { 'is-invalid': alamatIsInvalid }]" v-model="alamat" name="alamat" required></textarea>
                                            <span v-if="alamatIsInvalid" style="color: red;">
											    <small>Alamat tidak boleh kosong</small>
										    </span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Propinsi" class="col-md-12 col-form-label">Propinsi</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select label="propinsi_nama" 
                                            v-bind:class="[ 'white-box', {'is-invalid' : propinsiIsInvalid} ]"
                                             placeholder="Pilih Propinsi" 
                                            :options="propinsi_lists" 
                                            v-model="propinsi" @input="loadKabupaten"></v-select>
                                        
                                            <span v-if="propinsiIsInvalid" style="color: red;">
											    <small>Propinsi tidak boleh kosong</small>
										    </span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Kabupaten" class="col-md-12 col-form-label">Kabupaten</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select label="kabupaten_nama"
                                            v-bind:class="[ 'white-box', {'is-invalid' : kabupatenIsInvalid} ]"
                                            placeholder="Pilih Kabupaten" 
                                            :options="kabupaten_lists" 
                                            v-model="kabupaten" @input="loadKecamatan"></v-select>

                                            <span v-if="kabupatenIsInvalid" style="color: red;">
											    <small>Kabupaten tidak boleh kosong</small>
										    </span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Kecamatan" class="col-md-12 col-form-label">Kecamatan</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select label="kecamatan_nama"
                                            v-bind:class="[ 'white-box', {'is-invalid' : kecamatanIsInvalid} ]"
                                            placeholder="Pilih Kecamatan" 
                                            :options="kecamatan_lists" 
                                            v-model="kecamatan" @input="loadKelurahan"></v-select>

                                            <span v-if="kecamatanIsInvalid" style="color: red;">
											    <small>Kecamatan tidak boleh kosong</small>
										    </span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Kelurahan" class="col-md-12 col-form-label">Kelurahan</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select v-bind:class="[ 'white-box', {'is-invalid' : kelurahanIsInvalid} ]" 
                                            placeholder="Pilih Kelurahan" 
                                            label="kelurahan_nama" :options="kelurahan_lists" 
                                            v-model="kelurahan"></v-select>

                                            <span v-if="kelurahanIsInvalid" style="color: red;">
											    <small>Kelurahan tidak boleh kosong</small>
										    </span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <base-button type="danger" class="my-4" @click.prevent="prevPage(1)">&lt; Kembali</base-button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <base-button type="primary" class="my-4 text-right" @click.prevent="nextPage(3)">Lanjut &gt;</base-button>
                                        </div>
                                    </div>
                                </section>

                                <section v-if="pageThreeOpen">
                                    <div class="form-group row">
                                        <label for="Pekerjaaan" class="col-md-12 col-form-label">Pekerjaaan</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select label="pekerjaan_nama" v-bind:class="[ 'white-box', { 'is-invalid' : pekerjaanIsInvalid } ]" 
                                            placeholder="Pilih Pekerjaan" 
                                            :options="pekerjaan_lists" 
                                            v-model="pekerjaan"></v-select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="WargaNegara" class="col-md-12 col-form-label">Warga Negara</label>
                                        
                                        <div class="col-md-12">
                                            
                                            <v-select v-bind:class="[ 'white-box', {'is-invalid' : warganegaraIsInvalid} ]" placeholder="Pilih warganegara" 
                                            :options="warganegara_lists" v-model="warganegara"></v-select>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-6">
                                            <base-button type="danger" class="my-4" @click.prevent="prevPage(2)">&lt; Kembali</base-button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <base-button type="primary" class="my-4" @click.prevent="nextPage(4)">Lanjut &gt;</base-button>
                                        </div>
                                    </div>    
                                </section>

                                <section v-if="summaryPage">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <p>Tolong Periksa Kembali data yang diisikan di dalam formulir, apabila telah yakin dapat melanjutkan
                                                dengan menekan tombol "Submit" di bawah ini
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">    
                                        <div class="col-5">Nama</div><div class="col-7">{{ nama_depan }}{{ nama }}</div>
                                        <div class="col-5">Tanggal Lahir</div><div class="col-7">{{ day }} {{ month.label }} {{ year.label }}</div>
                                        <div class="col-5">Agama</div><div class="col-7">{{ agama }}</div>
                                        <div class="col-5">Jenis Kelamin</div><div class="col-7">{{ gender }}</div>
                                        <div class="col-5">Alamat</div><div class="col-7">{{ alamat }}</div>
                                        <div class="col-5">Propinsi</div><div class="col-7">{{ propinsi.propinsi_nama }}</div>
                                        <div class="col-5">Kabupaten</div><div class="col-7">{{ kabupaten.kabupaten_nama }}</div>
                                        <div class="col-5">Kecamatan</div><div class="col-7">{{ kecamatan.kecamatan_nama }}</div>
                                        <div class="col-5">Kelurahan</div><div class="col-7">{{ kelurahan.kelurahan_nama }}</div>
                                        <div class="col-5">Pekerjaan</div><div class="col-7">{{ pekerjaan.pekerjaan_nama }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <base-button type="danger" class="my-4" @click.prevent="prevPage(3)">&lt; Kembali</base-button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <base-button type="primary" class="my-4" @click.prevent="confirmSubmitRegistration">Submit</base-button>
                                        </div>
                                    </div>
                                </section>

                                <!-- <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox> -->
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import vSelect from 'vue-select';

export default {
    mounted() {
        console.log('Pendaftaran Pasien')
        this.getYear()
        this.propinsiLists()
        this.pekerjaanLists()
    },
    components: {
			vSelect
		},
    data () {
        return {
            nama:'',
            nama_depan:'',
            day:'',
            month:'',
            year:'',
            namaDepanIsInvalid:false,
            namaIsInvalid:false,
            tanggalLahirIsInvalid: false,
            genderIsInvalid:false,
            gender:'',
            alamat:'',
            alamatIsInvalid: false,
            disableSubmit: false,
            formControl: 'form-control',
            pageOneOpen: true,
            pageTwoOpen: false,
            pageThreeOpen: false,
            summaryPage: false,
            submitRegistration: false,
            gender_type: [
					'Laki-laki', 
					'Perempuan'
                ],
            days: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 
                    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31' ],
            months: [
                    { value: '01' , label:'Januari' },
                    { value: '02' , label:'Februari' },
                    { value: '03' , label:'Maret' },
                    { value: '04' , label:'April' },
                    { value: '05' , label:'Mei' },
                    { value: '06' , label:'Juni' },
                    { value: '07' , label:'Juli' },
                    { value: '08' , label:'Agustus' },
                    { value: '09' , label:'September' },
                    { value: '10' , label:'Oktober' },
                    { value: '11' , label:'Nopember' },
                    { value: '12' , label:'Desember'}
            ],
            years: [],
            propinsi_lists : [{ propinsi_id: -1, propinsi_nama: 'Loading...'}],
            kabupaten_lists: [{ kabupaten_id: -1, kabupaten_nama: 'Loading...'}],
            kecamatan_lists: [{ kecamatan_id: -1, kecamatan_nama: 'Loading...'}],
            kelurahan_lists: [{ kelurahan_id: -1, kelurahan_nama: 'Loading...'}],
            propinsi:'',
            kabupaten:'',
            kecamatan:'',
            kelurahan:'',
            propinsiIsInvalid: false,
            kabupatenIsInvalid: false,
            kecamatanIsInvalid: false,
            kelurahanIsInvalid: false,
            pekerjaanIsInvalid: false,
            warganegaraIsInvalid: false,
            pekerjaan_lists:[{ pekerjaan_id: -1, pekerjaan_nama: 'Loading...'}],
            warganegara_lists:['INDONESIA', 'ASING'],
            agama_lists:['ISLAM', 'BUDHA', 'HINDU', 'KATOLIK', 'PROTESTAN', 'KONGHUCU'],
            pekerjaan:'',
            warganegara:'',
            agama:'',
            dismissCountDown: 0,
			showDimissibleAlert: false,
			dismissSecs: 100,
            submitted: false,
            allValid: false,
            no_rekam_medis:'',
            agamaData: false,
            infoFormulir:true,
        }
    },
    methods: {
        getYear() {
            let d = new Date
            let cy = d.getFullYear()
            for (let i=cy; i>= 1880; i--) {
                this.years.push({
                    label : i,
                    year : i
                })
            }
        },

        confirmSubmitRegistration() {
            console.log('all valid', this.allValid)
            if ( this.allValid ) {
                this.$bvModal.show('modal-1')
            }
        },

        allValidCheck() {
            if ( this.allValid ) {
				this.$bvModal.show('modal-error')	
				return false;
			} 
        },

        submitRegistrationAction() {
            // TODO
            this.$bvModal.show('modal-loading')
            let day = this.day.length < 2 ? '0' + this.day : this.day
			this.$store.dispatch("submit_action", {
				form:{
					namadepan: this.nama_depan,
                    nama_pasien: this.nama,
                    tanggal_lahir: this.year.label + '-' + this.month.value + '-' + day,
                    jeniskelamin: this.gender,
                    alamat_pasien: this.alamat,
                    propinsi_id: this.propinsi.propinsi_id,
                    kabupaten_id: this.kabupaten.kabupaten_id,
                    kecamatan_id: this.kecamatan.kecamatan_id,
                    kelurahan_id: this.kelurahan.kelurahan_id,
                    pekerjaan_id: this.pekerjaan.pekerjaan_id,
                    warga_negara: this.warganegara,
                    agama: this.agama,	
				},
				endpoint:'registerpasienbaru'	
			})
			.then(resp => {
				this.$bvModal.hide('modal-loading')	
				if (resp.data.status == 'Success') {
					this.no_rekam_medik = resp.data.no_rekam_medik
					console.log(resp.data.no_rekam_medik)	
					this.submitted = true
					// this.$bvToast.show('pesan-penyimpanan');
					// alert('Kamar telah berhasil di pesan')
					this.dismissCountDown = 5	
					this.$bvModal.msgBoxOk("Anda berhasil mendaftarkan Pasien dengan rekam medis: " + 
							resp.data.no_rekam_medik )
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

        regiterPasien() {
            //  TODO
        
        },

        nextPage(page) {
            switch (page) {
                case 1:
                    this.pageTwoOpen = false
                    this.pageOneOpen = true
                    this.allValid = false;
                    break
                case 2:
                    if ( this.checkValidationPageOne() ) {
                        this.pageOneOpen = false
                        this.pageTwoOpen = true
                        this.pageThreeOpen = false
                        this.allValid = false
                    }
                    break
                case 3:
                    if ( this.checkValidationPageTwo() ) {
                        this.pageTwoOpen = false
                        this.pageThreeOpen = true
                        this.infoFormulir = true
                        this.summaryPage = false
                        this.allValid = false
                    }
                    break
                default:
                    if ( this.checkValidationPageThree() ) {
                        this.pageThreeOpen = false
                        this.summaryPage = true
                        this.infoFormulir = false
                        this.allValid = true
                    }
            }
        },

        prevPage(page) {
            switch (page) {
                case 1:
                    this.pageTwoOpen = false
                    this.pageOneOpen = true
                    break
                case 2:
                    this.pageOneOpen = false
                    this.pageTwoOpen = true
                    this.pageThreeOpen = false
                    break
                case 3:
                    this.pageTwoOpen = false
                    this.pageThreeOpen = true
                    this.infoFormulir = true
                    this.summaryPage = false
                    break
                default:
                    this.pageThreeOpen = false
                    this.summaryPage = true
                    this.infoFormulir = false    
            }
        },

        checkValidationPageOne() {

            if (this.nama_depan == '' || this.nama == '' || this.day == '' || this.month == '' || this.year == '' || this.gender == '' || this.agama == '') {
                this.namaDepanIsInvalid = (this.nama_depan == '')  ? true : false
                this.namaIsInvalid = this.nama == '' ? true : false
                this.tanggalLahirIsInvalid =  (this.day == '' || this.month == '' || this.year == '') ? true : false
                this.genderIsInvalid = this.gender == '' ? true : false
                this.agamaData = this.agama == '' ? true : false
                console.log('Modal Error show...')
                this.$bvModal.show('modal-error')

                return false
            } 

            return true
        },

        checkValidationPageTwo() {

            if (this.alamat == '' || this.propinsi == '' || this.kabupaten == '' || this.kecamatan == '' || this.kelurahan == '') {
                this.alamatIsInvalid = (this.alamat == '')  ? true : false
                this.propinsiIsInvalid = this.propinsi == '' ? true : false
                this.kabupatenIsInvalid =  this.kabupaten == '' ? true : false
                this.kecamatanIsInvalid = this.kecamatan == '' ? true : false
                this.kelurahanIsInvalid = this.kelurahan == '' ? true : false
                this.$bvModal.show('modal-error')

                return false
            } 

            return true
        },

        checkValidationPageThree() {

            if (this.pekerjaan == '' || this.warganegara == '') {
                this.pekerjaanIsInvalid = (this.pekerjaan == '')  ? true : false
                this.warganegaraIsInvalid = this.warganegara == '' ? true : false
                this.$bvModal.show('modal-error')

                return false
            } 

            return true
        },

        propinsiLists() {
            window.axios.get('/api/provinsi', {})
            .then((response) => {
                this.propinsi_lists = response.data
            })
        },

        refresh_state() {
            console.log('Refresh state');
            this.kecamatan_lists = [{ 'kecamatan_id' : -1, 'kecamatan_nama' : 'Loading...' }]
            this.kelurahan_lists = [{ 'kelurahan_id' : -1, 'kelurahan_nama' : 'Loading...' }]
        },

        loadKabupaten(value) {
            console.log('Load Kabupaten' , value)
            this.refresh_state()
            this.kabupaten_lists = [{ 'kabupaten_id' : -1, 'kabupaten_nama' : 'Loading...' }]
            this.$store.dispatch('fetch', {
                endpoint:'kabupaten',
                params:{ propinsi_id:value.propinsi_id }
            }).then((response) => {
                this.kabupaten_lists = response.data
            })
        },

        loadKecamatan(value) {
            console.log('Load Kecamatan' , value)
            this.kelurahan_lists = [{ 'kelurahan_id' : -1, 'kelurahan_nama' : 'Loading...' }]

            this.kecamatan_lists = [{ 'kecamatan_id' : -1, 'kecamatan_nama' : 'Loading...' }]
            this.$store.dispatch('fetch', {
                endpoint:'kecamatan',
                params:{ kabupaten_id:value.kabupaten_id }
            }).then((response) => {
                this.kecamatan_lists = response.data
            })
        },

        loadKelurahan(value) {
            console.log('Load Kelurahan' , value)
            this.kelurahan_lists = [{ 'kelurahan_id' : -1, 'kelurahan_nama' : 'Loading...' }]
            this.$store.dispatch('fetch', {
                endpoint:'kelurahan',
                params:{ kecamatan_id:value.kecamatan_id }
            }).then((response) => {
                this.kelurahan_lists = response.data
            })
        },

        pekerjaanLists() {
            this.$store.dispatch('fetch', {
                endpoint:'pekerjaan',
                params:{}
            }).then((resp) => {
                this.pekerjaan_lists = resp.data
            })
        },

        countDownChanged(dismissCountDown) {
			this.dismissCountDown = this.dismissSecs
		},

    }
}
</script>

<style>
    .white-box .vs__search::placeholder,
    .white-box .vs__dropdown-toggle,
    .white-box .vs__dropdown-menu {
        background: #ffffff;
    }

    .is-invalid .vs__search::placeholder,
    .is-invalid .vs__dropdown-toggle,
    .is-invalid .vs__dropdown-menu {
        background: #ffffff;
        border: 1px solid #ff0000;
    }

    .is-invalid-box {
        border: 1px solid #ff0000;
        margin: 0px;
        padding: 3px;
    }

    .not-filled .vs__search::placeholder,
    .not-filled .vs__dropdown-toggle,
    .not-filled .vs__dropdown-menu {
        border: 1px solid #ff0000;
    }
</style>
