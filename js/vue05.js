/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * v-if    https://cn.vuejs.org/v2/guide/conditional.html#v-if
 */
new Vue({
	el: "#conditional001",
	data:{
		ok: false
	},
	methods: {
		toggleOk: function () {
			this.ok = this.ok ? false : true;
		}
	}
});

/**
 * 在-lt-template-gt-元素上使用-v-if-条件渲染分组    https://cn.vuejs.org/v2/guide/conditional.html#在-lt-template-gt-元素上使用-v-if-条件渲染分组
 */
new Vue({
	el: "#conditional002",
	data: {
		ok: true
	}
});

/**
 * v-else       https://cn.vuejs.org/v2/guide/conditional.html#v-else
 */
new Vue({
	el: "#conditional003",
	data:{
		randomNumber: Math.random()
	},
	methods:{
		random: function () {
			this.randomNumber = Math.random();
		}
	}
});

/**
 * v-else-if         https://cn.vuejs.org/v2/guide/conditional.html#v-else-if
 */
new Vue({
	el: "#conditional004",
	data:{
		type: null
	},
	mounted: function () {
		this.type = this.generateABCD();
	},
	methods: {
		generateABCD: function () {
			var arr = ["A","B","C","D"];
			return arr[this.randomByTwoNumber(0, 4)];
		},
		randomByTwoNumber: function (min, max) {
			var range = Math.abs(max - min);
			var random = Math.random();
			if (min > max){
				min = min + max;
				max = min - max;
				min = min - max;
			}
			return min +  Math.floor(range * random);
		},
		generate: function () {
			this.type = this.generateABCD();
		}
	}
});

/**
 * 用-key-管理可复用的元素     https://cn.vuejs.org/v2/guide/conditional.html#用-key-管理可复用的元素
 */
new Vue({
	el: "#conditional005",
	data:{
		loginType: null
	},
	mounted: function () {
		this.loginType = this.generateLoginType();
	},
	methods: {
		toggleLoginType: function () {
			this.loginType = this.loginType == "username" ? "email": "username";
		},
		generateLoginType: function () {
			var arr = ["username", "email"];
			return arr[Math.floor(Math.random() * 2)];
		}
	}
});

new Vue({
	el: "#conditional006",
	data:{
		loginType: null
	},
	mounted: function () {
		this.loginType = this.generateLoginType();
	},
	methods: {
		toggleLoginType: function () {
			this.loginType = this.loginType == "username" ? "email": "username";
		},
		generateLoginType: function () {
			var arr = ["username", "email"];
			return arr[Math.floor(Math.random() * 2)];
		}
	}
});

/**
 * v-show    https://cn.vuejs.org/v2/guide/conditional.html#v-show
 */
new Vue({
	el: "#conditional007",
	data: {
		ok: true
	},
	methods: {
		toggleOk: function () {
			this.ok = this.ok ? false : true;
		}
	}
});

/**
 * v-if-vs-v-show    https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show
 *
 * v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
 * v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
 * 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
 * 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
 */

/**
 * v-if-与-v-for-一起使用       https://cn.vuejs.org/v2/guide/conditional.html#v-if-与-v-for-一起使用
 * 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
 */