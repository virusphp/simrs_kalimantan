<template>
	<section>
		<modal :show.sync="modals.modal2">
			:gradient="gradient"
			:modal-classess="modal danger modal-dialog-centered">
			<h6 slot=""></h6>
		</modal>
	</section>
</template>
