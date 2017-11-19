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
	el: "#components007"
});

/**
 * 动态-Prop https://cn.vuejs.org/v2/guide/components.html#动态-Prop
 *
 * 与绑定到任何普通的 HTML 特性相类似，我们可以用 v-bind 来动态地将 prop 绑定到父组件的数据。每当父组件的数据变化时，该变化也会传导给子组件
 */
Vue.component("todo-item", {
	props:["text","isComplete"],
	template: '<span>text = "{{text}}", is-complete = "{{isComplete}}"</span>'
});
new Vue({
	el: "#components008",
	data: {
		parentMsg: '输入内容测试',
		todo: {
			text: 'Learn Vue',
			isComplete: false
		}
	}
});

/**
 * 字面量语法-vs-动态语法     https://cn.vuejs.org/v2/guide/components.html#字面量语法-vs-动态语法
 */
Vue.component("cop", {
	props:["propA"],
	template: '<div>字面量语法：5 + prop-a = {{5 + propA}}</div>'
});
new Vue({
	el: "#components009"
});

/**
 * 单向数据流    https://cn.vuejs.org/v2/guide/components.html#单向数据流
 *
 * Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。
 * 另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。
 * 在两种情况下，我们很容易忍不住想去修改 prop 中数据：
 * 1.Prop 作为初始值传入后，子组件想把它当作局部数据来用；
 * 2.Prop 作为原始数据传入，由子组件处理成其它数据输出
 */
new Vue({
	el: "#components010",
	components: {
		"mc01": {
			props: ["pa", "size"],
			template: '<div><div>pa + 1 = {{pa + 1}}, pa = {{counter}}</div><div>{{normalizedSize}}</div></div>',
			data: function () {
				return {counter: this.pa}
			},
			computed: {
				normalizedSize: function () {
					return this.size.trim().toLowerCase()
				}
			}
		}
	}
});

/**
 * Prop-验证    https://cn.vuejs.org/v2/guide/components.html#Prop-验证
 *
 * 我们可以为组件的 prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告。这对于开发给他人使用的组件非常有用。
 * 要指定验证规则，需要用对象的形式来定义 prop，而不能用字符串数组
 * type 可以是下面原生构造器：String  Number  Boolean  Function  Object  Array  Symbol
 * type 也可以是一个自定义构造器函数，使用 instanceof 检测。当 prop 验证失败，Vue 会抛出警告 (如果使用的是开发版本)。
 * 注意 prop 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用
 */
Vue.component("prop-validate", {
	props: {
		pa: String,
		pb: [String, Number],
		pc: {
			type: String,
			required: true
		},
		pd: {
			type: Boolean,
			default: false
		},
		pe: {
			type: Object,
			default: function () {
				return { message: 'hello' }
			}
		},
		pf: {
			validator: function (value) {
				return value > 10
			}
		}
	},
	template: "<div>pa={{pa}},pb={{pb}},pc={{pc}},pd={{pd}},pe={{pe}},pf={{pf}}</div>"
});

Vue.component("prop-test", {
	template: '<input :value="value" :checked="checked" type="checkbox"/>',
	model: {
		prop: 'checked',
		event: 'change',
	},
	props: {
		checked: {
			type: Boolean,
			default: false
		},
		value: String
	},
	created: function () {
		console.log(this.checked)
	},
});
new Vue({
	el:"#components011",
	data: {
		obj: {
			message: 'world',
			id: '456'
		}
	}
});

/**
 * 非-Prop-特性    https://cn.vuejs.org/v2/guide/components.html#非-Prop-特性
 *
 * 试例中newp自动追加到了div上
 */
new Vue({
	el:"#components012",
	data: {
		obj: {
			message: 'world',
			id: '456'
		}
	}
});

/**
 * 替换-合并现有的特性    https://cn.vuejs.org/v2/guide/components.html#替换-合并现有的特性
 *
 * 试例中class="aaa bbb"
 */
new Vue({
	el: "#components013",
	components: {
		"mc01": {
			props: ["pa", "size"],
			template: '<div class="aaa">456</div>',
		}
	}
});

/**
 * 自定义事件    https://cn.vuejs.org/v2/guide/components.html#自定义事件
 * 我们知道，父组件使用 prop 传递数据给子组件。但子组件怎么跟父组件通信呢？这个时候 Vue 的自定义事件系统就派得上用场了。
 */

/**
 * 使用-v-on-绑定自定义事件    https://cn.vuejs.org/v2/guide/components.html#使用-v-on-绑定自定义事件
 *
 * 每个 Vue 实例都实现了事件接口，即： 使用 $on(eventName) 监听事件，使用 $emit(eventName) 触发事件
 * Vue 的事件系统与浏览器的 EventTarget API 有所不同。尽管它们的运行起来类似，但是 $on 和 $emit 并不是addEventListener 和 dispatchEvent 的别名。
 * 另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。
 * 不能用 $on 侦听子组件释放的事件，而必须在模板里直接用 v-on 绑定
 */
Vue.component('button-counter', {
	template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		incrementCounter: function () {
			this.counter += 1;
			this.$emit('increment')
		}
	},
});
new Vue({
	el: '#components014',
	data: {
		total: 0
	},
	methods: {
		incrementTotal: function () {
			this.total += 1
		}
	}
});

/**
 * 给组件绑定原生事件   https://cn.vuejs.org/v2/guide/components.html#给组件绑定原生事
 *
 * 有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 v-on 的修饰符 .native
 * 通过结果是components015 doo，也就是使用.native并不会调用组件自身的方法，而是Vue实例的相应方法
 */
Vue.component('mc03', {
	template: "<div>{{text}}</div>",
	data: function () {
		return {
			text: 'test text'
		};
	},
	methods: {
		doo: function () {
			alert("mc03 doo");
		}
	},
});
new Vue({
	el: "#components015",
	methods: {
		doo: function () {
			alert("components015 doo");
		}
	},
});
new Vue({
	el: "#components015-1",
});

/**
 * sync-修饰符    https://cn.vuejs.org/v2/guide/components.html#sync-修饰符
 *
 * 使用updateFooByEmit一切正常，但使用updateFoo时，虽然更新的foo的值，但是报错：
 * [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component
 * re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "foo"
 */
Vue.component("comp", {
	props: ["foo"],
	template: '<div><div>foo = "{{foo}}"</div><button @click="updateFoo">update foo</button>' +
	'<button @click="updateFooByEmit">update foo by $emit</button></div>',
	methods: {
		updateFoo: function () {
			this.foo = this.foo.toUpperCase();
		},
		updateFooByEmit: function () {
			this.$emit('update:foo', this.foo.toUpperCase())
		}
	},
});
new Vue({
	el: "#components016",
	data: {
		bar: "bar"
	}
});

/**
 * 使用自定义事件的表单输入组件    https://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件
 */
Vue.component('currency-input', {
	template: '<span>$<input type="number" ref="input123" :value="value" @input="updateValue($event.target.value)"/></span>',
	props: ['value'],
	methods: {
		// 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
		updateValue: function (value) {
			var formattedValue = value.trim()
				.slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3);
			// 如果值尚不合规，则手动覆盖为合规的值
			if (formattedValue !== value) {
				this.$refs.input123.value = formattedValue
			}
			// 通过 input 事件带出数值
			this.$emit('input', Number(formattedValue));
		}
	}
})

new Vue({
	el: "#components017",
	data: {
		price: ''
	}
});

/**
 * 自定义组件的-v-model    https://cn.vuejs.org/v2/guide/components.html#自定义组件的-v-model
 *
 * 默认情况下，一个组件的 v-model 会使用 value prop 和 input 事件。但是诸如单选框、复选框之类的输入类型可能把
 * value 用作了别的目的。model 选项可以避免这样的冲突
 *
 * 在html中通过:checked="false"给my-checkbox设置checked并没有效果，my-checkbox的checked prop值来自于
 *  v-model="checked"，new Vue({el: "#components018", data: {checked: ""}中的checked值，所以当使用自定义组件
 *  中有model时，v-model将会动态的与组件中的model属性中的prop数据动态绑定，如果组件中的model属性中prop是props时,
 *  如：model: {props: ['checked', 'aa'], event: 'change',}将不会动态绑定到props的checked属性上，并警告应返回value
 *  此时在html中通过:checked="false"给my-checkbox设置checked并有效果,在model中设置props会导致无法获取value.
 *  model中的prop和event有很强的耦合，当使用this.$emit('change', 返回值)返回是，会根据prop的类型做判断，所以当你返回value时，
 *  会抛出异常，说Expected Boolean, got Array，当在html中重复使用my-checkbox，返回的还是checkbos，与原有组件返回value值不同
});
 */
Vue.component('my-checkbox', {
	template: '<input :value="value" type="checkbox" v-model="inputCheck" @change="hasChange">',
	model: {
		prop: 'checked',
		event: 'change',
	},
	props: {
		checked: {
			type: Boolean,
			default: false
		},
		// 这样就允许拿 `value` 这个 prop 做其它事了
		value: String
	},
	mounted: function () {
		console.log("mounted: checked = " + this.checked);
		if (this.checked)
			this.inputCheck = true;
	},
	data: function () {
		return {inputCheck: false}
	},
	methods: {
		hasChange: function () {
			console.log(this.inputCheck);
			this.$emit('change', this.inputCheck)
		}
	}
});
new Vue({
	el: "#components018",
	data: {
		checked: ""
	}
});


/**
 * 非父子组件的通信     https://cn.vuejs.org/v2/guide/components.html#非父子组件的通信
 */


/**
 * 使用插槽分发内容    https://cn.vuejs.org/v2/guide/components.html#使用插槽分发内容
 */
/**
 * 编译作用域    https://cn.vuejs.org/v2/guide/components.html#编译作用域
 */
/**
 * 单个插槽    https://cn.vuejs.org/v2/guide/components.html#单个插槽
 */
Vue.component("comp01",{
	template: '<div>123</div>'
});
Vue.component("comp02",{
	template: '<div>123<slot>789</slot></div>'
});
new Vue({
	el: "#components020",
	data: {
		message: "456"
	}
});

/**
 * 具名插槽    https://cn.vuejs.org/v2/guide/components.html#具名插槽
 * <slot> 元素可以用一个特殊的特性 name 来进一步配置如何分发内容。多个插槽可以有不同的名字。具名插槽将匹配内容片段中有对应 slot 特性的元素。
 * 仍然可以有一个匿名插槽，它是默认插槽，作为找不到匹配的内容片段的备用插槽。如果没有默认插槽，这些找不到匹配的内容片段将被抛弃。
 */
Vue.component("comp03",{
	template: '<div><slot></slot><slot name="s1"></slot><slot name="s2"></slot></div>'
});
new Vue({
	el: "#components021",
});

/**
 * 作用域插槽    https://cn.vuejs.org/v2/guide/components.html#作用域插槽
 */
Vue.component("comp04",{
	template: '<div class="child"><slot text="hello from child"></slot></div>'
});
Vue.component("comp05",{
	template: '<ul><slot name="item" v-for="item in items" :text="item.text"></slot></ul>',
	props: {
		items: Array
	}
});
new Vue({
	el: "#components022",
	data: {
		items: [
			{text: "aaaa"},
			{text: "bbbb"},
			{text: "cccc"},
			{text: "dddd"},
			{text: "eeee"},
			{text: "ffff"},
		]
	}
});



