<template>
	<div class="container">
		<b-card-group deck>
			<b-card
				header="VIP"
				bg-variant="danger"	
				:title="vip">
				<b-card-text>
					{{ vip }}
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas I">
				<b-card-text>
					{{ kelas1}}
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas II">
				<b-card-text>
					{{ kelas2 }}
				</b-card-text>
			</b-card>
			<b-card
				header="Kelas III">
				<b-card-text>
					{{ kelas3 }}
				</b-card-text>
			</b-card>
			<b-card
				header="ICU">
				<b-card-text>
					{{ icu }}
				</b-card-text>
			</b-card>
			<b-card
				header="Tanpa Kelas">
				<b-card-text>
					{{ vip }}
				</b-card-text>
			</b-card>
		</b-card-group>
	</div>
</template>


<script>
export default {
	mounted() {
		this.$store.dispatch("fetch", {
			form: { kelas: 'VIP' },
			endpoint: 'availablerooms'
		})
		.then(resp => {
			data = resp.data.res
		})
	},
	data: function() {
		return { 
			vip:'0',
			kelas1:'0',
			kelas2:'0',
			kelas3:'0',
			icu:'0',
			vip_0:false	
		}
	}
}
</script>
