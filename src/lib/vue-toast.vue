<template>
	<section class="toast-container">
		<div class="toast" :class="[visible ? 'fade-in' : 'fade-out']" :style="{backgroundColor:backgroundColor||'rgba(0,0,0,0.62)'}">
			{{message}}
		</div>
	</section>
</template>

<script>
export default {
	data(){
		return {
			message: '这里是提示信息',
			visible: false,
			backgroundColor: ''
		}
	}
}
</script>

<style lang="less">
	@keyframes fade-in{
		0% {
			opacity: 0;
			transform: scale(0.7);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes fade-out{
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0.7);
		}
	}
	.toast-container {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 2000;
		display: flex;
		justify-content: center;
		align-items: center;
		.toast{
			min-width: 120px;
			height: 60px;
			line-height: 60px;
			text-align: center;
			color: white;
			border-radius: 5px;
		}
		.fade-in{
			animation-name: fade-in;
			animation-duration: 300ms;
			animation-fill-mode: both;
		}
		.fade-out{
			animation-name: fade-out;
			animation-duration: 300ms;
			animation-fill-mode: both;
		}
	}
</style>