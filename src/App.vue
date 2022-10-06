<template>
  <div id="app">
		<div class="random" :class="{ active: isActive }">{{ firstStr }}</div>
		<button :disabled='disabled' @click="onEventRandomize">123321</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
		firstRandonArray: [
			'Страсная',
			'Хладнокровная',
			'Озорная',
			'Романтичная',
			'Горячая',
			'Пьяная',
			'Игривая',
			'Веселая',
			'Сексуальная',
			'Любопытная',
			'Шальная',
			'Яростная',
		],
		secondRandonArray: [
			'императрица',
			'медсестричка',
			'стюардесса',
			'лисичка',
			'принцесса',
			'певица',
			'балерина',
			'ангелочек',
			'волшебница',
			'учительница',
			'соблазнительница',
			'пчелка',
			'любовница',
			'домохозяйка',
			'барыня',
			'королева',
			'крестьянка',
			'секретарша',
			'директриса',
			'нинзя',
			'богиня',
			'снегурочка',
			'амазонка',
			'спортсменка',
			'куртизанка',
			'фея',
			'снежинка',
			'стриптизерша',
			'ведьма',
			'иностранка',
			'монашка',
		],
		trihdRandomArray: [
			'на самокате',
			'в дырявых носках',
			'с бутылкой пивасика',
			'с бутылкой спиртного',
			'танцующая на шесте',
			'на белом коне',
			'с ядерным оружием',
			'в сауне',
			'в позе лотоса',
			'с тазиком оливье',
			'на розовом мотоцикле',
		],
		firstStr: '',
		disabled: false,
		isActive: false,
	}),
	methods: {
		randomSpinner(arr) {
			let random = Math.floor(Math.random() * arr.length);
			console.log(random)
			for (let i = 0; i < arr.length; i++) {
				if (random === i) {
					console.log(arr[i])
					this.firstStr += ` ${arr[i]}`
				}
			}
		},
		onEventRandomize() {
			this.firstStr = '';
			this.disabled = true;
			this.isActive = false;
			this.randomSpinner(this.firstRandonArray);
			this.randomSpinner(this.secondRandonArray);
			this.randomSpinner(this.trihdRandomArray);
			setTimeout(() => {this.disabled = false}, 1000);
			setTimeout(() => {this.isActive = true}, 1000);
		}
	}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.random {
	font-size: 60px;
	opacity: 0;
	&.active {
		transition: all .5s ease;
		opacity: 1;
	}
}

</style>
