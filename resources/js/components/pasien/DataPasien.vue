<template>
	<table class="table table-striped text-center`">
		<tbody>
			<tr v-for="(value, name) in filtered()">
			<td>{{ name.replace('_', ' ') }}</td>
				<td>{{ value }}</td>
			</tr>
		</tbody>	
	</table>	
</template>

<script>
export default {
	props: {
		'rdata': Object
	},

	methods: {
		filtered(){
			let data = this.rdata.dataPasienDetail
			return { 
				Nama: data.nama_pasien,
				Jenis_kelamin: data.jeniskelamin,
				Tempat_lahir: data.tempat_lahir,
				Tanggal_lahir: data.tanggal_lahir,
				Alamat: data.alamat_pasien,	
				Kelurahan: data.kelurahan.kelurahan_nama,
				Kecamatan: data.kecamatan.kecamatan_nama,
				Kabupaten: data.kabupaten.kabupaten_nama,
				Provinsi: data.provinsi.propinsi_nama,
			}
		}
	}
}
</script>
