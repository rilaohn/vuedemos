/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 基础用法     https://cn.vuejs.org/v2/guide/forms.html#基础用法
 *
 * 你可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，
 * 但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。
 * v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值。因为它会选择 Vue 实例数据来作为具体的值。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
 * 对于要求 IME (如中文、日语、韩语等) (IME 意为“输入法”)的语言，你会发现 v-model 不会在 ime 输入中得到更新。如果你也想实现更新，请使用 input 事件。
 */
new Vue({
	el: "#forms001",
	data: {
		message: ""
	}
});

/**
 * 多行文本   https://cn.vuejs.org/v2/guide/forms.html#多行文本
 */
new Vue({
	el: "#forms002",
	data: {
		message: ""
	}
});

/**
 * 复选框    https://cn.vuejs.org/v2/guide/forms.html#复选框
 */
new Vue({
	el: "#forms003",
	data:{
		checked: true
	}
});

new Vue({
	el: "#forms004",
	data: {
		checkedNames: []
	}
});

/**
 * 单选按钮    https://cn.vuejs.org/v2/guide/forms.html#单选按钮
 */
new Vue({
	el: "#forms005",
	data: {
		picked: null
	}
});

/**
 * 选择列表    https://cn.vuejs.org/v2/guide/forms.html#选择列表
 */
new Vue({
	el: "#forms006",
	data:{
		selected: "A"
	}
});

new Vue({
	el: "#forms007",
	data:{
		selected: []
	}
});

new Vue({
	el: "#forms008",
	data: {
		selected: "A",
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
		]
	}
});

/**
 * 值绑定   https://cn.vuejs.org/v2/guide/forms.html#值绑定
 *
 * 对于单选按钮，勾选框及选择列表选项，v-model 绑定的 value 通常是静态字符串 (对于勾选框是逻辑值)
 * 但是有时我们想绑定 value 到 Vue 实例的一个动态属性上，这时可以用 v-bind 实现，并且这个属性的值可以不是字符串。
 */
new Vue({
	el: "#forms009",
	data: {
		toggle: "选值A",
		a: "选值A",
		b: "选值B",
		c: "选值C",
		d: "选值D",
		e: {number: 123},
		pick: "",
		selected: ''
	},
	methods: {
	}
});

/**
 * 修饰符    https://cn.vuejs.org/v2/guide/forms.html#修饰符
 *
 * .lazy 在默认情况下，v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步
 * .number 如果想自动将用户的输入值转为 Number 类型 (如果原值的转换结果为 NaN 则返回原值)，可以添加一个修饰符 number 给 v-model 来处理输入值
 * .trim 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入
 */
new Vue({
	el: "#forms010",
	data: {
		msg: "",
		msg1: "",
		msg2: 1,
		msg3: "",
	}
})


