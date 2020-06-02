<template>
    <section>
        <div class="container pt-0 white-box">
			<div class="card">
				<div class="card-body">
					<div class="card-title">Daftar Riwayat Pasien</div>
                    <div class="row">
                        <div class="col-6">
                            <base-button type="danger" class="my-4" @click.prevent="goToList">&lt; Kembali</base-button>
                        </div>
                    </div>
                    <template>
                        <section>
                            <span v-if="loaded">Loading...</span>
                            <table v-if="pasienLoaded" class="table table-striped text-center">
                                <tbody>
                                    <tr>
                                        <td>Nomor Rekam Medik</td><td>{{ listPasien.no_rekam_medik }}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Pasien</td><td>{{ listPasien.namadepan }} {{ listPasien.nama_pasien }}</td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Kelamin</td><td>{{ listPasien.jeniskelamin }}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat Pasien</td><td>{{ listPasien.alamat_pasien }}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Kel. {{ listPasien.kelurahan.kelurahan_nama }},
                                            Kec. {{ listPasien.kecamatan.kecamatan_nama }},
                                            Kab. {{ listPasien.kabupaten.kabupaten_nama }},
                                            {{ listPasien.provinsi.propinsi_nama }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Warga Negara</td><td>{{ listPasien.warga_negara }}</td>
                                    </tr>
                                </tbody>
                            </table>	
                        </section>
                    </template>
                    <span>Data Riwayat</span>
					<table class="table table-responsive table-striped">
						<thead>
							<tr>
								<th>Ruangan</th>
								<th>No Pendaftaran</th>
								<th>Tanggal Pendaftaran</th>
								<th>Status Masuk</th>
								<th>Jenis Kasus Penyakit</th>
								<!-- <th>Aksi</th> -->
							</tr>
						</thead>
						<tbody>
							<tr v-if="notLoaded">
								<td colspan="7" style="text-align:left !important;"><center>{{ loadingText }}</center></td>
							</tr>
							<tr v-for="(item, index) in listDaftarRiwayatPasien" :key="item.pendaftaran_id">
								<td>{{ item.ruangan.ruangan_nama }}</td>
								<td>{{ item.no_pendaftaran }}</td>
								<td>{{ item.tgl_pendaftaran }}</td>
								<td>{{ item.statusmasuk }}</td>
								<td>{{ item.jeniskasuspenyakit.jeniskasuspenyakit_nama }}</td>
								
                                <!-- <td>
                                    <div class="btn-group">
                                        <base-button type="primary" class="my-4" @click.prevent="konfirmasi(item, index)">Konfirmasi</base-button>
                                        <base-button v-if="item.no_rm" type="success" class="my-4" @click.prevent="riwayatPasien(item, index)">Riwayat Pasien</base-button>
                                        <base-button type="danger" class="my-4" @click.prevent="gantiPoli(item, index)">Ganti Poli</base-button>
                                    </div>
                                </td>
                                -->
							</tr>
						</tbody>
					</table>
				</div>	
			</div>
		</div>

    </section>
</template>

<script>
    export default {
        mounted() {
            if (this.$store.state.isAdminLogin == false) {
                this.$router.push('/')
            }
            this.no_rm = this.$store.state.no_rm_curr
            this.loadDaftarRiwayatPasien()
            this.loadDataPasien()
        },
        data() {
            return {
                no_rm:'',
                notLoaded: true,
                loaded: true,
                listDaftarRiwayatPasien: {},
                loadingText:'',
                listPasien:{},
                pasienLoaded: false,
            }
        },
        methods:{
            loadDaftarRiwayatPasien() {
                this.$store.dispatch('fetch', {
                    endpoint: 'riwayatpasien',
                    params:{
                        no_rekam_medik: this.no_rm
                    }
                }).then(resp => {
                    this.listDaftarRiwayatPasien = resp.data
                    if (parseInt(this.listDaftarRiwayatPasien.length) > 0 ) {
                        this.notLoaded = false
                    } else {
                        this.loadingText="Tidak ada record"
                    }
                })
                
            },
            goToList() {
                this.$router.push('/adminrs')
            },
            loadDataPasien() {
                this.$store.dispatch('fetch', {
                    endpoint: 'pasien',
                    params:{
                        no_rekam_medik: this.no_rm
                    }
                }).then(resp => {
                    this.listPasien = resp.data
                    this.pasienLoaded = true
                    this.loaded = false
                })
            
            }
        }
    }
</script>

<style>
</style>
