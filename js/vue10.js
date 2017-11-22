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

