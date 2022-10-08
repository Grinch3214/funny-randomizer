<template>
  <div id="app" class="app">
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

export default {
  name: 'App',
	components: {
		SlotMachine
	},
  data: () => ({
		isActive: false,
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
	padding: 0 15px 40px;
}
.pixel {
	color: #fff;
	margin-bottom: 45px;
	
	&__title {
		text-shadow: 1px 1px 5px #fff;
		font-family: 'Montserrat-700';
		font-weight: 700;
		font-size: 54px;
	}
}
</style>
