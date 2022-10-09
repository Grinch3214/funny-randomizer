<template>
	<div class="slot">
		<div class="slot__confim" :class="{ active: confirm }">
			{{ confirm }}
		</div>
		<div class="slot__money">
			<span>{{ allMoney }}</span>$
		</div>
		<ul class="slot__list">
			<li class="slot__item">
				<img :src="slotPhotoOne" alt="default img">
			</li>
			<li class="slot__item">
				<img :src="slotPhotoTwo" alt="default img">
			</li>
			<li class="slot__item">
				<img :src="slotPhotoThree" alt="default img">
			</li>
		</ul>
		<button :disabled="disabled" class="slot__btn" @click="goSlot">SLOT</button>
	</div>
</template>

<script>

export default {
	name: 'SlotMachine',
	data: () => ({
		images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
		slotOne: null,
		slotTwo: null,
		slotThree: null,
		confirm: null,
		disabled: false,
		allMoney: 100
	}),
	computed: {
		slotPhotoOne() {
			if (this.slotOne) {
				return require(`../assets/images/${this.images[this.slotOne -1]}`)
			} else {
				return require(`../assets/images/default.png`)
			}
		},

		slotPhotoTwo() {
			if (this.slotTwo) {
				return require(`../assets/images/${this.images[this.slotTwo -1]}`)
			} else {
				return require(`../assets/images/default.png`)
			}
		},

		slotPhotoThree() {
			if (this.slotThree) {
				return require(`../assets/images/${this.images[this.slotThree -1]}`)
			} else {
				return require(`../assets/images/default.png`)
			}
		}
	},
	methods: {

		goSlot() {
			this.confirm = null;
			this.slotOne = this.randonNumbers();
			this.slotTwo = this.randonNumbers();
			this.slotThree = this.randonNumbers();
			this.isSlotWin();
			this.disabledButton();
			this.counterSlotMoney();
		},

		randonNumbers() {
			return Math.floor(Math.random() * (6) + 1);
		},

		isSlotWin() {
			if (this.slotOne === this.slotTwo && this.slotTwo === this.slotThree) {
				this.allMoney += 100
				this.confirm = null
				this.confirm = 'You are win! Full combo!'
				return null;
			}

			if(this.slotOne === this.slotThree) {
				this.allMoney += 30
				this.confirm = null
				this.confirm = 'You are win! Combo x2'
				return null
			}
		},

		disabledButton() {
			if(this.allMoney <= 10) {
				return this.disabled = true;
			}
			this.disabled = true;
			setTimeout(() => (this.disabled = false), 600)
		},

		counterSlotMoney() {

			if(this.allMoney <= 10) {
				return this.allMoney = 0;
			}

			this.allMoney -= 10;
		}
	}
}
</script>

<style lang="scss">
.slot {
	color: #fff;
	background: rgba(255, 255, 255, 0.3);
	border-radius: 8px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(6.3px);
	-webkit-backdrop-filter: blur(6.3px);
	border: 1px solid rgba(255, 255, 255, .5);
	padding: 20px;
	text-align: center;

	&__confim {
		min-height: 25px;
		margin-bottom: 10px;
		transition: all 2.5s ease;
		text-align: center;
		font-size: 22px;
		text-transform: uppercase;
		font-family: 'Montserrat-700';
		font-weight: 700;
		text-shadow: 0 0 5px #000;
		&.active {
			animation: 4s opacity-title forwards;
		}
	}

	&__money {
		margin-bottom: 15px;
		font-size: 20px;
		text-align: right;
		font-family: 'Montserrat-700';
		font-weight: 700;
	}

	&__list{
		display: flex;
		gap: 15px;
		margin-bottom: 25px;
	}

	&__item {
		width: 100px;
		height: 120px;
		background: #000;
		border: 2px solid rgba(255, 255, 255, 0.8);
		border-radius: 4px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	}

	&__btn {
		font-family: 'Montserrat-700';
		font-weight: 700;
		border: 0;
		padding: 10px 40px;
		border-radius: 4px;
		font-size: 16px;
		color: #fff;
		text-transform: uppercase;
		background: rgb(57, 0, 104);
		transition: all .4s ease;
		cursor: pointer;
		&:hover {
			box-shadow: 1px 1px 10px #000;
		}
		&:disabled {
			background: rgb(84, 62, 102);
			color:rgba(255, 255, 255, 0.527);
			box-shadow: 1px 1px 10px #000;
			cursor: default;
		}
	}
}

@keyframes opacity-title {
	0% {
		opacity: 1;
	}
	70% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>