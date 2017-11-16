/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 监听事件     https://cn.vuejs.org/v2/guide/events.html#监听事件
 */
new Vue({
	el: '#events001',
	data: {
		counter: 0
	}
});

/**
 * 事件处理方法          https://cn.vuejs.org/v2/guide/events.html#事件处理方法
 */
new Vue({
	el: '#events002',
	data: {
		name: 'Vue.js'
	},
	// 在 `methods` 对象中定义方法
	methods: {
		greet: function (event) {
			// `this` 在方法里指向当前 Vue 实例
			alert('Hello ' + this.name + '!')
			// `event` 是原生 DOM 事件
			if (event) {
				alert(event.target.tagName)
			}
		}
	}
});

/**
 * 内联处理器中的方法   https://cn.vuejs.org/v2/guide/events.html#内联处理器中的方法
 */
new Vue({
	el: '#events003',
	methods: {
		say: function (message) {
			alert(message)
		}
	}
});

new Vue({
	el: "#events004",
	methods: {
		warn: function (message, event) {
			// 现在我们可以访问原生事件对象
			if (event) event.preventDefault()
			alert(message)
		}
	}
});
/**
 * 事件修饰符    https://cn.vuejs.org/v2/guide/events.html#事件修饰符
 *
 * 在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
 * 尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
 * 为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
 * event.preventDefault()  取消默认动作
 * event.stopPropagation()  阻止事件冒泡
 * .stop 阻止事件继续传播  阻止事件冒泡
 * .prevent 阻止默认事件
 * .capture 捕获模式，内部元素触发时，先执行此事件，在执行内部元素的事件
 * .self 自身事件，点击子元素不会触发此事件
 * .once 只执行一次
 * 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 @click.prevent.self 会阻止所有的点击，而 @click.self.prevent 只会阻止对元素自身的点击。
 */
new Vue({
	el: "#events005",
	methods: {
		doThis:function () {
			alert("doThis 函数");
		},
		onSubmit: function () {
			alert("onSubmit 函数");
		},
		doThat: function () {
			alert("doThat 函数");
		},
		doOnce: function () {
			alert("doOnce 函数");
		}
	}
});

/**
 * 按键修饰符    https://cn.vuejs.org/v2/guide/events.html#按键修饰符
 *
 * 在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
 * 下面是常用键的Vue别称（keyup, keypress, keydown）
 * .enter 回车键
 * .tab TAB键
 * .delete (捕获“删除”和“退格”键)
 * .esc
 * .space 空格
 * .up
 * .down
 * .left
 * .right
 */
Vue.config.keyCodes.f1 = 17;
new Vue({
	el:"#events006",
	methods: {
		keyEvent: function () {
			alert("event");
		},
	}
});

/**
 * 系统修饰键   https://cn.vuejs.org/v2/guide/events.html#系统修饰键
 *
 * .ctrl
 * .alt
 * .shift
 * .meta
 * 这些单独使用在键盘事(keyup, keydown, keypress)件上无效
 */
new Vue({
	el:"#events007",
	methods: {
		clear: function () {
			alert("clear");
		},
		doSomething: function () {
			alert("do something");
		}
	}
});

/**
 * .exact-修饰符     https://cn.vuejs.org/v2/guide/events.html#exact-修饰符
 */
new Vue({
	el: "#events008",
	methods: {
		onClick: function () {
			alert("on click");
		}
	}
});

/**
 * 鼠标按钮修饰符    https://cn.vuejs.org/v2/guide/events.html#鼠标按钮修饰符
 */
new Vue({
	el: "#event009",
	methods: {
		events: function () {
			alert("events");
		}
	}
});


