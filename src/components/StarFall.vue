<template>
	<div class="star-fall">
		<span class="star-fall__item" v-for="n in 10" :key="n" />
	</div>
</template>

<script>
export default {
	name: 'StarFall'
}
</script>

<style lang="scss" scoped>
.star-fall {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	animation: animateBackground 50s linear infinite;

	&__item {
		position: absolute;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255,255,255,.1),
        0 0 0 8px rgba(255,255,255,.1),
        0 0 20px rgba(255,255,255,1);
    animation: animate 3s linear infinite;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 300px;
			height: 1px;
			background: linear-gradient(90deg,#fff,transparent);
		}

		&:nth-child(1) {
			top: 0;
			right: 0;
			animation-delay: 0;
			animation-duration: 1s;
		}

		&:nth-child(2) {
			top: 0;
			right: 80px;
			animation-delay: 0.2s;
			animation-duration: 3s;
		}

		&:nth-child(3) {
			top: 80px;
			right: 0;
			animation-delay: 0.4s;
			animation-duration: 2s;
		}

		&:nth-child(4) {
			top: 0;
			right: 180px;
			animation-delay: 0.6s;
			animation-duration: 1.5s;
		}

		&:nth-child(5) {
			top: 0;
			right: 400px;
			animation-delay: 0.8s;
			animation-duration: 2.5s;
		}

		&:nth-child(6) {
			top: 0;
			right: 600px;
			animation-delay: 1s;
			animation-duration: 3s;
		}

		&:nth-child(7) {
			top: 300px;
			right: 0;
			animation-delay: 1.2s;
			animation-duration: 1.75s;
		}

		&:nth-child(8) {
			top: 0;
			right: 700px;
			animation-delay: 1.4s;
			animation-duration: 1.25s;
		}

		&:nth-child(9) {
			top: 0;
			right: 1000px;
			animation-delay: 0.75s;
			animation-duration: 2.25s;
		}

		&:nth-child(10) {
			top: 0;
			right: 450px;
			animation-delay: 2.75s;
			animation-duration: 2.25s;
		}
	}
}

@keyframes animateBackground{
    0%  {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
		100% {
			transform: scale(1);
		}
} 

@keyframes animate{
    0% {
      transform: rotate(-45deg) translateX(0);
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translateX(-1000px);
      opacity: 0;
    }
}  
</style>