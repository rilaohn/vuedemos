/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 概述    https://cn.vuejs.org/v2/guide/transitions.html#概述
 *
 * Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。 包括以下工具：
 * 1.在 CSS 过渡和动画中自动应用 class 2.可以配合使用第三方 CSS 动画库，如 Animate.css
 * 3.在过渡钩子函数中使用 JavaScript 直接操作 DOM 4.可以配合使用第三方 JavaScript 动画库，如 Velocity.js
 * 在这里，我们只会讲到进入、离开和列表的过渡，你也可以看下一节的 管理过渡状态。
 */

/**
 * 单元素-组件的过渡    https://cn.vuejs.org/v2/guide/transitions.html#单元素-组件的过渡
 *
 * 当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
 * 1.自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
 * 2.如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
 * 3.如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
 */
new Vue({
	el: "#transitions001",
	data: {
		show: true
	}
});

/**
 * 过渡的类名    https://cn.vuejs.org/v2/guide/transitions.html#过渡的类名
 *
 * 在进入/离开的过渡中，会有 6 个 class 切换。
 * 1.v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
 * 2.v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。
 * 		这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
 * 3.v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，
 * 		在 transition/animation 完成之后移除。
 * 4.v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
 * 5.v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，
 * 		在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
 * 6.v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，
 * 		在 transition/animation 完成之后移除。
 */

/**
 * CSS-过渡    https://cn.vuejs.org/v2/guide/transitions.html#CSS-过渡
 */
new Vue({
	el: "#transitions002",
	data: {
		show: true
	}
});

/**
 * CSS-动画    https://cn.vuejs.org/v2/guide/transitions.html#CSS-动画
 */
new Vue({
	el: '#transitions003',
	data: {
		show: true
	}
});

/**
 * 自定义过渡的类名    https://cn.vuejs.org/v2/guide/transitions.html#自定义过渡的类名
 *
 * 我们可以通过以下特性来自定义过渡类名：
 * 1.enter-class 	2.enter-active-class 	3.enter-to-class (2.1.8+)
 * 4.leave-class 	5.leave-active-class 	6.leave-to-class (2.1.8+)
 * 他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用
 */
new Vue({
	el: '#transitions004',
	data: {
		show: true
	}
});

/**
 * 同时使用过渡和动画    https://cn.vuejs.org/v2/guide/transitions.html#同时使用过渡和动画
 *
 * Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 transitionend 或 animationend ，
 * 这取决于给元素应用的 CSS 规则。如果你使用其中任何一种，Vue 能自动识别类型并设置监听。
 * 但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 animation 很快的被触发并完成了，而 transition 效果还没结束。
 * 在这种情况中，你就需要使用 type 特性并设置 animation 或 transition 来明确声明你需要 Vue 监听的类型。
 */
new Vue({
	el: '#transitions005',
	data: {
		show: true,
		showAT: true,
		showATM: true
	}
});

/**
 * 显性的过渡持续时间    https://cn.vuejs.org/v2/guide/transitions.html#显性的过渡持续时间
 *
 * 在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 transitionend
 * 或 animationend 事件。然而也可以不这样设定——比如，我们可以拥有一个精
 * 在这种情况下你可以用 <transition> 组件上的 duration 属性定制一个显性的过渡持续时间 (以毫秒计)
 */
new Vue({
	el: '#transitions006',
	data: {
		show: true,
		show1: true,
	}
});

/**
 * JavaScript-钩子    https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-钩子
 */
new Vue({
	el: '#transitions007',
	data: {
		show: true,
		showB: false,
		str: ''
	},
	methods: {
		// --------
		// 进入中
		// --------
		beforeEnter: function (el) {
			el.style.opacity = 0;
			el.style.transformOrigin = 'left';
			this.str = this.str + "A ";
			console.log("beforeEnter");
			console.log(el);
		},
		// 此回调函数是可选项的设置
		// 与 CSS 结合时使用
		enter: function (el, done) {
			Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
			Velocity(el, { fontSize: '1em' }, { complete: done })
			this.str = this.str + "B ";
			console.log("enter");
			console.log(el);
			done()
		},
		afterEnter: function (el) {
			this.str = this.str + "C ";
			console.log("afterEnter");
			console.log(el);
		},
		enterCancelled: function (el) {
			this.str = this.str + "D ";
			console.log("enterCancelled");
			console.log(el);
		},
		// --------
		// 离开时
		// --------
		beforeLeave: function (el) {
			this.str = this.str + 1 + " ";
			console.log("beforeLeave");
			console.log(el);
		},
		// 此回调函数是可选项的设置
		// 与 CSS 结合时使用
		leave: function (el, done) {
			this.str = this.str + 2 + " ";
			console.log("leave");
			console.log(el);
			Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
			Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
			Velocity(el, {
				rotateZ: '45deg',
				translateY: '30px',
				translateX: '30px',
				opacity: 0
			}, { complete: done })
		},
		afterLeave: function (el) {
			this.str = this.str + 3 + " ";
			console.log("afterLeave");
			console.log(el);
		},
		// leaveCancelled 只用于 v-show 中
		leaveCancelled: function (el) {
			this.str = this.str + 4 + " ";
			console.log("leaveCancelled");
			console.log(el);
		},
	}
});

/**
 * 初始渲染的过渡    https://cn.vuejs.org/v2/guide/transitions.html#初始渲染的过渡
 */
new Vue({
	el: '#transitions008',
	data: {
		showA: true,
		showB: true,
	},
	methods: {
		customBeforeAppearHook: function (el) {
			console.log("customBeforeAppearHook");
			console.log(el);
			el.style.opacity = 0;
			el.style.transformOrigin = 'left';
		},
		customAppearHook: function (el, done) {
			console.log("customAppearHook");
			console.log(el);
			Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
			Velocity(el, { fontSize: '1em' }, { complete: done });
		},
		customAfterAppearHook: function (el) {
			console.log("customAfterAppearHook");
			console.log(el);
		},
		customAppearCancelledHook: function (el) {
			console.log("customAppearCancelledHook");
			console.log(el);
		}
	}
});

/**
 * 多个元素的过渡    https://cn.vuejs.org/v2/guide/transitions.html#多个元素的过渡
 */
new Vue({
	el: "#transitions009",
	data: {
		items: [
			{id: 1},
			{id: 2},
			{id: 3},
		],
		aaa: "shuju"
	}
});

/**
 * 过渡模式    https://cn.vuejs.org/v2/guide/transitions.html#过渡模式
 *
 * 同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了 过渡模式 transition 标签的mode
 * 1.in-out：新元素先进行过渡，完成之后当前元素过渡离开。 2.out-in：当前元素先进行过渡，完成之后新元素过渡进入。
 */
new Vue({
	el: "#transitions010",
	data:{
		show: true,
		show2: true
	}
});

/**
 * 多个组件的过渡		https://cn.vuejs.org/v2/guide/transitions.html#多个组件的过渡
 */
new Vue({
	el: '#transitions011',
	data: {
		view: 'v-a'
	},
	components: {
		'v-a': {
			template: '<div>Component A</div>'
		},
		'v-b': {
			template: '<div>Component B</div>'
		}
	}
});

/**
 * 列表过渡		https://cn.vuejs.org/v2/guide/transitions.html#列表过渡
 *
 * 目前为止，关于过渡我们已经讲到：单个节点,同一时间渲染多个节点中的一个
 * 那么怎么同时渲染整个列表，比如使用 v-for ？在这种场景中，使用 <transition-group> 组件。在我们深入例子之前，
 * 先了解关于这个组件的几个特点：不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>。
 * 你也可以通过 tag 特性更换为其他元素。内部元素 总是需要 提供唯一的 key 属性值
 */

/**
 * 列表的进入-离开过渡		https://cn.vuejs.org/v2/guide/transitions.html#列表的进入-离开过渡
 */
new Vue({
	el: '#transitions012',
	data: {
		items: [1,2,3,4,5,6,7,8,9],
		nextNum: 10
	},
	methods: {
		randomIndex: function () {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function () {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function () {
			this.items.splice(this.randomIndex(), 1)
		},
	}
});

/**
 * 列表的排序过渡		https://cn.vuejs.org/v2/guide/transitions.html#列表的排序过渡
 *
 * <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 v-move 特性，
 * 它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 name 属性来自定义前缀，也可以通过 move-class 属性手动设置。
 * v-move 对于设置过渡的切换时机和过渡曲线非常有用
 * Vue 使用了一个叫 FLIP 简单的动画队列,使用 transforms 将元素从之前的位置平滑过渡新的位置
 * 要注意的是使用 FLIP 过渡的元素不能设置为 display: inline 。作为替代方案，可以设置为 display: inline-block 或者放置于 flex 中
 */
new Vue({
	el: '#transitions013',
	data: {
		items: [1,2,3,4,5,6,7,8,9]
	},
	methods: {
		shuffle: function () {
			this.items = _.shuffle(this.items)
		}
	}
});
new Vue({
	el: '#transitions014',
	data: {
		items: [1,2,3,4,5,6,7,8,9],
		nextNum: 10
	},
	methods: {
		randomIndex: function () {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function () {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function () {
			this.items.splice(this.randomIndex(), 1)
		},
		shuffle: function () {
			this.items = _.shuffle(this.items)
		}
	}
});

/**
 * 列表的交错过渡		https://cn.vuejs.org/v2/guide/transitions.html#列表的交错过渡
 */
new Vue({
	el: '#transitions015',
	data: {
		query: '',
		list: [
			{ msg: 'Bruce Lee' },
			{ msg: 'Jackie Chan' },
			{ msg: 'Chuck Norris' },
			{ msg: 'Jet Li' },
			{ msg: 'Kung Fury' }
		]
	},
	computed: {
		computedList: function () {
			var vm = this
			return this.list.filter(function (item) {
				return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
			})
		}
	},
	methods: {
		beforeEnter: function (el) {
			el.style.opacity = 0
			el.style.height = 0
		},
		enter: function (el, done) {
			var delay = el.dataset.index * 150
			setTimeout(function () {
				Velocity(
					el,
					{ opacity: 1, height: '1.6em' },
					{ complete: done }
				)
			}, delay)
		},
		leave: function (el, done) {
			var delay = el.dataset.index * 150
			setTimeout(function () {
				Velocity(
					el,
					{ opacity: 0, height: 0 },
					{ complete: done }
				)
			}, delay)
		}
	}
});

/**
 * 可复用的过渡		https://cn.vuejs.org/v2/guide/transitions.html#可复用的过渡
 *
 * 过渡可以通过 Vue 的组件系统实现复用。要创建一个可复用过渡组件，你需要做的就是将 <transition> 或者
 * <transition-group> 作为根组件，然后将任何子组件放置在其中就可以了。
 */
Vue.component('my-special-transition', {
	template: '\
    <transition\
      name="very-special-transition"\
      mode="out-in"\
      v-on:before-enter="beforeEnter"\
      v-on:after-enter="afterEnter"\
    >\
      <slot></slot>\
    </transition>\
  ',
	methods: {
		beforeEnter: function (el) {
			// ...
		},
		afterEnter: function (el) {
			// ...
		}
	}
});

