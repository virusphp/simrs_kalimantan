<template>
	<div class="container">
		<b-card-group deck>
			<b-card
				header="VIP"
				v-bind:bg-variant="vip_mark">
				<b-card-text>
					{{ vip }}
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas I"
				v-bind:bg-variant="kelas1_mark">
				<b-card-text>
					{{ kelas1}}
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas II"
				v-bind:bg-variant="kelas2_mark">
				<b-card-text>
					{{ kelas2 }}
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas III"
				v-bind:bg-variant="kelas3_mark">
				<b-card-text>
					{{ kelas3 }}
				</b-card-text>
			</b-card>
			<b-card
				header="ICU"
				v-bind:bg-variant="icu_mark">
				<b-card-text>
					{{ icu }}
				</b-card-text>
			</b-card>
		</b-card-group>
	</div>
</template>


<script>
export default {
	mounted() {
		// vip
		const Callback = () => {
			console.log("**** fetch data" + new Date())
			this.$store.dispatch("fetch", {
				params: { kelas: 'VIP' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.vip = resp.data.res.jumlah_kamar_open
				this.vip_mark = parseInt(this.vip) > 0 ? 'primary' : 'danger'
			})

			// kelas 1
			this.$store.dispatch("fetch", {
				params: { kelas: 'Kelas I' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.kelas1 = resp.data.res.jumlah_kamar_open
				this.kelas1_mark = parseInt(this.kelas1) > 0 ? 'primary' : 'danger'
			})

			// kelas 2
			this.$store.dispatch("fetch", {
				params: { kelas: 'Kelas II' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.kelas2 = resp.data.res.jumlah_kamar_open
				this.kelas2_mark = parseInt(this.kelas2) > 0 ? 'primary' : 'danger'
			})

			// kelas 3
			this.$store.dispatch("fetch", {
				params: { kelas: 'Kelas III' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.kelas3 = resp.data.res.jumlah_kamar_open
				this.kelas3_mark = parseInt(this.kelas3) > 0 ? 'primary' : 'danger'
			})

			// icu
			this.$store.dispatch("fetch", {
				params: { kelas: '' },
				endpoint: 'availableicurooms'
			})
			.then(resp => {
				this.icu = resp.data.res
				this.icu_mark = parseInt(this.icu) > 0 ? 'primary' : 'danger'
			}) 
		}

		Callback()
		let intvid = setInterval(Callback, 30000)
		this.$store.dispatch("set_interval_id", intvid)
	},
	data: function() {
		return { 
			vip:'0',
			kelas1:'0',
			kelas2:'0',
			kelas3:'0',
			icu:'0',
			vip_mark:'primary',
			kelas1_mark:'primary',
			kelas2_mark:'primary',
			kelas3_mark:'primary',	
			icu_mark:'primary',	
		}
	}
}
</script>
