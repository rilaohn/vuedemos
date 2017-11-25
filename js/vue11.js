/**
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/22
 * Time: 1:26
 */
/**
 * 状态动画与观察者		https://cn.vuejs.org/v2/guide/transitioning-state.html#状态动画与观察者
 */
new Vue({
	el: '#transitioning001',
	data: {
		number: 0,
		animatedNumber: 0
	},
	watch: {
		number: function(newValue, oldValue) {
			var vm = this;
			function animate () {
				if (TWEEN.update()) {
					requestAnimationFrame(animate);
				}
			}
			new TWEEN.Tween({ tweeningNumber: oldValue })
				.easing(TWEEN.Easing.Quadratic.Out)
				.to({ tweeningNumber: newValue }, 500)
				.onUpdate(function () {
					vm.animatedNumber = this.tweeningNumber.toFixed(0)
				})
				.start();
			animate();
		}
	}
});

var Color = net.brehaut.Color;
new Vue({
	el: '#transitioning002',
	data: {
		colorQuery: '',
		color: {
			red: 0,
			green: 0,
			blue: 0,
			alpha: 1
		},
		tweenedColor: {}
	},
	created: function () {
		this.tweenedColor = Object.assign({}, this.color)
	},
	watch: {
		color: function () {
			function animate () {
				if (TWEEN.update()) {
					requestAnimationFrame(animate)
				}
			}
			new TWEEN.Tween(this.tweenedColor)
				.to(this.color, 750)
				.start();
			animate()
		}
	},
	computed: {
		tweenedCSSColor: function () {
			return new Color({
				red: this.tweenedColor.red,
				green: this.tweenedColor.green,
				blue: this.tweenedColor.blue,
				alpha: this.tweenedColor.alpha
			}).toCSS()
		}
	},
	methods: {
		updateColor: function () {
			this.color = new Color(this.colorQuery).toRGB();
			this.colorQuery = ''
		}
	}
});

/**
 * 动态状态过渡		https://cn.vuejs.org/v2/guide/transitioning-state.html#动态状态过渡
 */
new Vue({
	el: '#transitioning003',
	data: function () {
		var defaultSides = 10;
		var stats = Array.apply(null, { length: defaultSides })
			.map(function () { return 100 });
		return {
			stats: stats,
			points: generatePoints(stats),
			sides: defaultSides,
			minRadius: 50,
			interval: null,
			updateInterval: 500
		}
	},
	watch: {
		sides: function (newSides, oldSides) {
			var sidesDifference = newSides - oldSides;
			if (sidesDifference > 0) {
				for (var i = 1; i <= sidesDifference; i++) {
					this.stats.push(this.newRandomValue())
				}
			} else {
				var absoluteSidesDifference = Math.abs(sidesDifference);
				for (var i = 1; i <= absoluteSidesDifference; i++) {
					this.stats.shift()
				}
			}
		},
		stats: function (newStats) {
			TweenLite.to(
				this.$data,
				this.updateInterval / 1000,
				{ points: generatePoints(newStats) }
			)
		},
		updateInterval: function () {
			this.resetInterval()
		}
	},
	mounted: function () {
		this.resetInterval()
	},
	methods: {
		randomizeStats: function () {
			var vm = this;
			this.stats = this.stats.map(function () {
				return vm.newRandomValue()
			})
		},
		newRandomValue: function () {
			return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
		},
		resetInterval: function () {
			var vm = this;
			clearInterval(this.interval);
			this.randomizeStats();
			this.interval = setInterval(function () {
				vm.randomizeStats()
			}, this.updateInterval)
		}
	}
})

function valueToPoint (value, index, total) {
	var x = 0;
	var y = -value * 0.9;
	var angle = Math.PI * 2 / total * index;
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var tx = x * cos - y * sin + 100;
	var ty = x * sin + y * cos + 100;
	return { x: tx, y: ty }
}

function generatePoints (stats) {
	var total = stats.length;
	return stats.map(function (stat, index) {
		var point = valueToPoint(stat, index, total);
		return point.x + ',' + point.y
	}).join(' ')
}

/**
 * 把过渡放到组件里		https://cn.vuejs.org/v2/guide/transitioning-state.html#把过渡放到组件里
 */
Vue.component('animated-integer', {
	template: '<span>{{ tweeningValue }}</span>',
	props: {
		value: {
			type: Number,
			required: true
		}
	},
	data: function () {
		return {
			tweeningValue: 0
		}
	},
	watch: {
		value: function (newValue, oldValue) {
			this.tween(oldValue, newValue)
		}
	},
	mounted: function () {
		this.tween(0, this.value)
	},
	methods: {
		tween: function (startValue, endValue) {
			var vm = this;
			function animate () {
				if (TWEEN.update()) {
					requestAnimationFrame(animate)
				}
			}
			new TWEEN.Tween({ tweeningValue: startValue })
				.to({ tweeningValue: endValue }, 500)
				.onUpdate(function () {
					vm.tweeningValue = this.tweeningValue.toFixed(0)
				})
				.start();
			animate()
		}
	}
});
// 所有的复杂度都已经从 Vue 的主实例中移除！
new Vue({
	el: '#transitioning004',
	data: {
		firstNumber: 20,
		secondNumber: 40
	},
	computed: {
		result: function () {
			return this.firstNumber + this.secondNumber
		}
	}
});

/**
 * 
 */
new Vue({
	el: '#transitioning005',
	data() {
		return {
			startX: 0,
			x: 0,
			y: 0,
			flip: false,
			audioPlay: false,
			startArms: 0
		}
	},
	methods: {
		armsTL() {
			let tl = new TimelineMax();
			tl.add('startarms')
			tl.to('#backhand', 2, {
				x: -16,
				rotation: 150,
				transformOrigin: '50% 50%'
			}, 'startarms');
			tl.to('#rightarm', 2, {
				rotation: 30,
				transformOrigin: '100% 0'
			}, 'startarms');
			tl.to('#newrightarm', 2, {
				x: -94,
				y: -918,
				rotation: 10,
				transformOrigin: '100% 100%'
			}, 'startarms');

			tl.to('#hand', 2, {
				x: -15,
				y: -7,
				rotation: 90,
				transformOrigin: '50% 50%'
			}, 'startarms');
			tl.to('#leftarm', 2, {
				rotation: 20,
				transformOrigin: '100% 0'
			}, 'startarms');
			tl.to('#newleftarm', 2, {
				x: -100,
				y: -924,
				transformOrigin: '100% 100%'
			}, 'startarms');

			return tl;
		},
		coordinates(e) {
			const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/Whoa.mp3'),
				walleBox = document.getElementById('walle').getBoundingClientRect(),
				walleCoords = walleBox.width / 2 + walleBox.left;

			if (this.startArms == 0) {
				this.startArms = this.armsTL();
			}

			this.y = e.clientY / 80 - 2;
			if (e.clientX > walleCoords) {
				this.x = -(e.clientX / 200);
				this.flip = true;
				if (this.audioPlay === false) {
					audio.play();
					this.audioPlay = true;
				}
			} else {
				this.audioPlay = false;
				this.x = e.clientX / 200 - 5;
				this.flip = false;

				TweenMax.set("#righteyeb2", {
					scaleX: 1 + (1 - e.clientX / walleCoords) / 5
				});
				TweenMax.set("#lefteyeb2", {
					scaleX: 1 + (1 - e.clientX / walleCoords) / 5
				});
				TweenMax.set("#walle", {
					x: ((e.clientX / walleCoords) * 50) - 40
				});

				this.startArms.progress(1 - (e.clientX / walleCoords)).pause();

			}
		},
	},
	mounted() {
		let tl = new TimelineMax({
			repeat: -1,
			repeatDelay: 2
		});

		tl.add('redo')
		tl.to('#lefteye', 0.5, {
			rotation: 5,
			repeat: 3,
			yoyo: true,
			transformOrigin: '100% 50%',
			ease: Sine.easeOut
		}, 'redo');
		tl.to('#righteye', 0.5, {
			rotation: -5,
			repeat: 3,
			yoyo: true,
			transformOrigin: '0% 30%',
			ease: Sine.easeOut
		}, 'redo+=0');
		tl.fromTo('#lefteyeball', 0.05, {
			scaleY: 1
		}, {
			scaleY: 0,
			repeat: 3,
			yoyo: true,
			transformOrigin: '50% 50%',
			ease: Circ.easeOut
		}, 'redo+=4');
		tl.fromTo('#righteyeball', 0.05, {
			scaleY: 1
		}, {
			scaleY: 0,
			repeat: 3,
			yoyo: true,
			transformOrigin: '50% 50%',
			ease: Circ.easeOut
		}, 'redo+=4');
		tl.to('#eyecontain', 0.4, {
			rotation: -15,
			repeat: 1,
			yoyo: true,
			transformOrigin: '50% 50%',
			ease: Sine.easeInOut
		}, 'redo+=2');
	}
});

TweenMax.to('p', 0.5, {
	opacity: 0,
	delay: 2,
	ease: Sine.easeIn
});

