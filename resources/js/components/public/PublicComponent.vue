<template>
<div class="container">
	<div class="pt-4">
		<!-- <div><small>Update terakhir: {{ last_update  }}</small></div> -->
		<b-card-group deck id="infoavailablerooms">
			<b-card
				header="VIP"
				bg-variant=""
				border-variant="danger">
				<b-card-text>
					<span>{{ vip }}</span><br>
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas I"
				v-bind:bg-variant="kelas1_mark">
				<b-card-text>
					<span>{{ kelas1}}</span>
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas II"
				v-bind:bg-variant="kelas2_mark">
				<b-card-text>
					<span>{{ kelas2 }}</span>
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas III"
				v-bind:bg-variant="kelas3_mark">
				<b-card-text>
					<span>{{ kelas3 }}</span>
				</b-card-text>
			</b-card>
			<b-card
				header="ICU"
				v-bind:bg-variant="icu_mark">
				<b-card-text>
					<span>{{ icu }}</span>
				</b-card-text>
			</b-card>
		</b-card-group>
	</div>
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
				this.vip_mark = parseInt(this.vip) > 0 ? this.default : 'danger'
			})

			// kelas 1
			this.$store.dispatch("fetch", {
				params: { kelas: 'Kelas I' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.kelas1 = resp.data.res.jumlah_kamar_open
				this.kelas1_mark = parseInt(this.kelas1) > 0 ? this.default : 'danger'
			})

			// kelas 2
			this.$store.dispatch("fetch", {
				params: { kelas: 'Kelas II' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.kelas2 = resp.data.res.jumlah_kamar_open
				this.kelas2_mark = parseInt(this.kelas2) > 0 ? this.default : 'danger'
			})

			// kelas 3
			this.$store.dispatch("fetch", {
				params: { kelas: 'Kelas III' },
				endpoint: 'availablerooms'
			})
			.then(resp => {
				this.kelas3 = resp.data.res.jumlah_kamar_open
				this.kelas3_mark = parseInt(this.kelas3) > 0 ? this.default : 'danger'
			})

			// icu
			this.$store.dispatch("fetch", {
				params: { kelas: '' },
				endpoint: 'availableicurooms'
			})
			.then(resp => {
				this.icu = resp.data.res
				this.icu_mark = parseInt(this.icu) > 0 ? this.default : 'danger'
			}) 

			let n = new Date()
			this.last_update = new Date();
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
			vip_mark:'',
			kelas1_mark:'',
			kelas2_mark:'',
			kelas3_mark:'',	
			icu_mark:'',
			default:'',
			last_update:'',
		}
	}
}
</script>

<style>
div#infoavailablerooms.card-deck > div.card , div.card-header{
	background: #f04806;
	color: #FFFFFF;
	text-align: center;
}
div#infoavailablerooms.card-deck > div.card > div.card-body > p.card-text > span {
	color:#FFFFFF;
	font-size:2em;
	text-align: center;
	font-weight: bold;
}
</style>
