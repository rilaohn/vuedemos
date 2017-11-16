/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 对象语法   https://cn.vuejs.org/v2/guide/class-and-style.html#对象语法
 */
new Vue({
	el: "#style001",
	data: {
		isActive: null
	},
	methods: {
		toggleActive: function () {
			this.isActive = this.isActive ? null : "y";
		}
	}
});

new Vue({
	el:"#style002",
	data:{
		isActive: false,
		hasError: false
	},
	methods: {
		toggleActive: function () {
			this.isActive = this.isActive ? false : true;
		},
		toggleError: function () {
			this.hasError = this.hasError ? false : true;
		}
	}
});

new Vue({
	el:"#style003",
	data:{
		classObject: {
			active: false,
			textDanger: false
		}
	},
	methods: {
		toggleActive: function () {
			this.classObject.active = this.classObject.active ? false : true;
		},
		toggleError: function () {
			this.classObject.textDanger = this.classObject.textDanger ? false : true;
		}
	}
});

/**
 * 数组语法   https://cn.vuejs.org/v2/guide/class-and-style.html#数组语法
 */
new Vue({
	el: "#style004",
	data:{
		activeClass: 'active',
		errorClass: 'textDanger',
		isActive: true
	},
	methods: {
		toggleActive: function () {
			this.isActive = this.isActive ? false : true;
		},
	}
});

/**
 * 用在组件上   https://cn.vuejs.org/v2/guide/class-and-style.html#用在组件上
 */
Vue.component('my-component', {
	template: '<p class="foo bar"><span>Hi this is my component text!</span></p>'
});
new Vue({
	el: "#style005"
});

/**
 * 绑定内联样式   https://cn.vuejs.org/v2/guide/class-and-style.html#绑定内联样式
 */
/**
 * 对象语法     https://cn.vuejs.org/v2/guide/class-and-style.html#对象语法-1
 */
new Vue({
	el: "#style006",
	data:{
		activeColor: 'red',
		fontSize: 30
	}
});
new Vue({
	el: "#style00",
	data:{
		styleObject: {
			color: 'red',
			fontSize: '13px'
		}
	}
});

/**
 * 数组语法    https://cn.vuejs.org/v2/guide/class-and-style.html#数组语法-1
 */
/**
 * 多重值   https://cn.vuejs.org/v2/guide/class-and-style.html#多重值
 */