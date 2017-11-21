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



