/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 全局注册   https://cn.vuejs.org/v2/guide/components.html#全局注册
 */
Vue.component('my-component', {
	template: '<div>A custom component!</div>'
});

new Vue({
	el: '#components001'
});

/**
 * 局部注册    https://cn.vuejs.org/v2/guide/components.html#局部注册
 */
new Vue({
	el: '#components002',
	components: {
		'my-component2': {
			template: '<div>A custom component 2!</div>'
		}
	}
});

/**
 * DOM-模板解析注意事项    https://cn.vuejs.org/v2/guide/components.html#DOM-模板解析注意事项
 *
 * 当使用 DOM 作为模板时 (例如，使用 el 选项来把 Vue 实例挂载到一个已有内容的元素上)，你会受到 HTML 本身的一些限制，
 * 因为 Vue 只有在浏览器解析、规范化模板之后才能获取其内容。尤其要注意，像 <ul>、<ol>、<table>、<select> 这样的元素里允许包含的元素有限制，
 * 而另一些像 <option> 这样的元素只能出现在某些特定元素的内部。
 * 应当注意，如果使用来自以下来源之一的字符串模板，则没有这些限制： <script type="text/x-template">  JavaScript 内联模板字符串  .vue 组件
 */
Vue.component("my-tr", {
	template: "<tr style='color: brown'>my row test text</tr>"
});

Vue.component("my-tr2", {
	template: "#scriptXTemplate"
});
new Vue({
	el: "#components003"
});

/**
 * data-必须是函数    https://cn.vuejs.org/v2/guide/components.html#data-必须是函数
 *
 * 构造 Vue 实例时传入的各种选项大多数都可以在组件里使用。只有一个例外：data 必须是函数
 * 否则 Vue 会停止运行，并在控制台发出警告，告诉你在组件实例中 data 必须是一个函数
 */
var data = { counter: 0 }
Vue.component('simple-counter', {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	// 技术上 data 的确是一个函数了，因此 Vue 不会警告，
	// 但是我们却给每个组件实例返回了同一个对象的引用
	data: function () {
		return data
	}
});
new Vue({
	el: '#components004'
});
Vue.component('simple-counter2', {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	data: function () {
		return { counter: 0 };
	}
});
new Vue({
	el: '#components005'
});

/**
 * 组件组合    https://cn.vuejs.org/v2/guide/components.html#组件组合
 *
 * 组件设计初衷就是要配合使用的，最常见的就是形成父子组件的关系：组件 A 在它的模板中使用了组件 B。
 * 它们之间必然需要相互通信：父组件可能要给子组件下发数据，子组件则可能要将它内部发生的事情告知父组件。
 * 然而，通过一个良好定义的接口来尽可能将父子组件解耦也是很重要的。这保证了每个组件的代码可以在相对隔离的环境中书写和理解，
 * 从而提高了其可维护性和复用性。在 Vue 中，父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，
 * 子组件通过事件给父组件发送消息。看看它们是怎么工作的。
 */

/**
 * 使用-Prop-传递数据 https://cn.vuejs.org/v2/guide/components.html#使用-Prop-传递数据
 *
 * 所有属性都必须是组件上的属性，比如 下面child组件中，必须是<child message="xxx"></child>,不是<div message="xxx"><child></child></div>,
 * 所以不是child组件接收父组件的数据，而是组件本身向组件的子元素传递数据
 * 组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。父组件的数据需要通过 prop 才能下发到子组件中
 */
Vue.component('child', {
	// 声明 props
	props: ['message'],
	// 就像 data 一样，prop 也可以在模板中使用
	// 同样也可以在 vm 实例中通过 this.message 来使用
	template: '<span>{{ message }}</span>'
});
new Vue({
	el: "#components006"
});

/**
 * camelCase-vs-kebab-case       https://cn.vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case
 *
 * HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)
 */
Vue.component('child2', {
	// 在 JavaScript 中使用 camelCase
	props: ['myMessage'],
	template: '<span>{{ myMessage }}</span>'
});
new Vue({
	el: "#ex06"
});

/**
 * 动态-Prop https://cn.vuejs.org/v2/guide/components.html#动态-Prop
 */
var parentMsg;
new Vue({
	el: "#ex07",
	data: {
		parentMsg: '输入内容测试'
	}
});