<template>
	<section>
    
        <b-modal id="modal-1" title="Konfirmasi" @ok="submitKonfirmasiAction" >
            Anda ingin meneruskan Registrasi Calon Pasien {{ nama_pasien }}?	
        </b-modal>
        <b-modal id="modal-s" title="Info" @ok="" >
            Berhasil di konfirmasi	
        </b-modal>
        <div class="container pt-0 white-box">
			<div class="card">
				<div class="card-body">
					<div class="card-title">Halaman Konfirmasi Daftar Poli</div>
					<table class="table table-responsive table-striped">
						<thead>
							<tr>
								<th rowspan="2">No. Rekam Medik</th>
								<th rowspan="2">Nama Pasien</th>
								<th rowspan="2">Keluhan Pasien</th>
								<th rowspan="2">Alamat</th>
								<th colspan="3">Info Poli</th>
								<th rowspan="2">Tanggal</th>
								<th rowspan="2">No Telp/No Hp</th>
								<th rowspan="2">Aksi</th>
							</tr>
							<tr>
								<th>Poli</th>
								<th>Dokter</th>
								<th>Jadwal</th>
							</tr>
						</thead>
						<tbody>
							<tr v-if="notLoaded">
								<td colspan="7" style="text-align:left !important;"><center>{{ loadingText }}</center></td>
							</tr>
							<tr v-for="(item, index) in listDaftarPoli" :key="item.id" :row="row">
								<td>{{ item.no_rm ? item.no_rm : ' - '}}</td>
								<td>{{ item.nama_depan }} {{ item.nama_pasien }}</td>
								<td>{{ item.keluhan_pasien }}</td>
								<td>{{ item.alamat_pasien }}</td>
								<td>{{ item.ruangan.ruangan_nama }}</td>
								<td>{{ item.pegawai.nama_pegawai }}</td>
								<td>{{ item.jadwaldokter.jadwaldokter_hari }} {{ item.jadwaldokter.jadwaldokter_buka }}</td>
								<td>{{ item.tanggal_pesan }}</td>
								<td>{{ item.no_hp }}<br>{{ item.no_mobile }}</td>
								<td>
                                    <div class="btn-group">
                                        <base-button type="primary" class="my-4" @click.prevent="konfirmasi(item, index)">Konfirmasi</base-button>
                                        <base-button v-if="item.no_rm" type="success" class="my-4" @click.prevent="riwayatPasien(item, index)">Riwayat Pasien</base-button>
                                        <base-button type="danger" class="my-4" @click.prevent="gantiPoli(item, index)">Ganti Poli</base-button>
                                    </div>
                                </td>
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
		console.log('admin mounted')
		this.loadDataDaftarPoli()
	},
	data() {
		return {
			listDaftarPoli: {},
			item:{},
			notLoaded: true,
			loadingText:'Loading...',
			nama_pasien:'',
			currentIdDaftarPoli:-1,
            row:{},
		}
	},
	methods: {
		loadDataDaftarPoli() {
			this.$store.dispatch('fetch', {
				endpoint: 'listdaftarpoli',
				params:{}
			}).then(resp => {
				this.listDaftarPoli = resp.data
				if (parseInt(this.listDaftarPoli.length) > 0 ) {
					this.notLoaded = false
				} else {
					this.loadingText="Tidak ada yang pesan."
				}
			})
		},
		konfirmasi(item, index) {
			console.log(item)
			this.nama_pasien = item.nama_depan + ' ' + item.nama_pasien
            this.$bvModal.show('modal-1')
			this.currentIdDaftarPoli = item.id
            this.row.splice(index, 1)

		},
		submitKonfirmasiAction() {
			let data = new FormData()
			data.append('id_daftar_poli', this.currentIdDaftarPoli)
			this.$store.dispatch('submit_action', {
				endpoint: 'addAsPasien',
				form:data
			}).then(resp => {
                this.loadingText = 'Loading...'
                this.listDaftarPoli = {}
                this.loadDataDaftarPoli()
                if (resp.status == 'Success') {
                    this.$bvModal.show('modal-s')
                }
            })
		},
        riwayatPasien(item, index) {
            this.$store.commit('set_curr_rekam_medis', item.no_rm)
            console.log(this.$store.state.no_rm_curr)
            this.$router.push('/riwayatpasien')
        },
        gantiPoli(item, index) {
            this.$store.commit('set_curr_id', item.id)
            console.log(this.$store.state.curr_id)
            this.$router.push('/gantipoli')
        }
	}
}
</script>

<style>
.white-box {
	background: #fff;
}
</style>
