<template>
  <div id="app" class="app">
		<star-fall />
		<div class="pixel">
			<h1 class="pixel__title">
				Pixel GAME
			</h1>
		</div>
		<slot-machine />
  </div>
</template>

<script>
import SlotMachine from './components/SlotMachine.vue'
import StarFall from './components/StarFall.vue'

export default {
  name: 'App',
	components: {
		SlotMachine,
		StarFall
	},
  data: () => ({
	}),
}
</script>

<style lang="scss">
.app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	overflow: hidden;
	padding: 0 15px 40px;
	position: relative;
	background: url('~@/assets/images/background.jpg') 0 0/cover no-repeat;
	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		top: 10vh;
		left: 4vw;
		width: 200px;
		height: 200px;
		background: url('~@/assets/images/planet.png') 0 0/cover no-repeat;
	}
}
.pixel {
	color: #fff;
	margin-bottom: 45px;
	margin-top: 20px;
	position: relative;
	z-index: 2;
	
	&__title {
		text-shadow: 1px 1px 5px #fff;
		font-family: 'Montserrat-700';
		font-weight: 700;
		font-size: 46px;
		@media screen and (max-width: 420px) {
			font-size: 36px;
		}
	}
}
</style>
