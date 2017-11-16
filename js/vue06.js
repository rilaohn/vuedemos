/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 用-v-for-把一个数组对应为一组元素        https://cn.vuejs.org/v2/guide/list.html#用-v-for-把一个数组对应为一组元素
 */
var example1 = new Vue({
	el: '#example-1',
	data: {
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' }
		]
	}
});
var example2 = new Vue({
	el: '#example-2',
	data: {
		parentMessage: 'Parent',
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' }
		]
	}
});

/**
 * 一个对象的-v-for    https://cn.vuejs.org/v2/guide/list.html#一个对象的-v-for
 */
new Vue({
	el: '#v-for-object',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
});

new Vue({
	el: '#v-for-object2',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
});

new Vue({
	el: '#v-for-object3',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
});

/**
 * key    https://cn.vuejs.org/v2/guide/list.html#key
 * 变异方法   https://cn.vuejs.org/v2/guide/list.html#变异方法
 */
// fixme  这个对比并没有体现带key和没带key的区别
new Vue({
	el: "#list006",
	data:{
		items:[
			{
				message: "hello",
				id: "1"
			},
			{
				message: "world",
				id: "2"
			},
			{
				message: "I'am",
				id: "3"
			},
			{
				message: "studying",
				id: "4"
			},
			{
				message: "vue.js",
				id: "5"
			}
		]
	},
	methods:{
		raverseIndex:function () {
			this.items.reverse();
//				var len = this.items.length;
//				var temp = null;
//				for(var i = 0; i < Math.floor(len/2); i++){
//					temp = this.items[i];
//					this.items[i] = this.items[len - 1 - i];
//					this.items[len - 1 - i] = temp;
//				}
//				this.items = Object.assign([], this.items);
		}
	},
	computed:{
		reItems: function () {
			return this.items;
		}
	}
});

/**
 * 替换数组    https://cn.vuejs.org/v2/guide/list.html#替换数组
 */
new Vue({
	el: "#list007",
	data:{
		items:[
			{
				message: "hello",
				id: "1"
			},
			{
				message: "world",
				id: "2"
			},
			{
				message: "I'am",
				id: "3"
			},
			{
				message: "studying",
				id: "4"
			},
			{
				message: "vue.js",
				id: "5"
			}
		]
	},
	methods:{
		raverseIndex:function () {
			var len = this.items.length;
			var temp = null;
			for(var i = 0; i < Math.floor(len/2); i++){
				temp = this.items[i];
				this.items[i] = this.items[len - 1 - i];
				this.items[len - 1 - i] = temp;
			}
			this.items = Object.assign([], this.items);
		}
	},
	computed:{
		reItems: function () {
			return this.items;
		}
	}
});

/**
 * 注意事项         https://cn.vuejs.org/v2/guide/list.html#注意事项
 */
new Vue({
	el: "#list008",
	data:{
		items:[
			{
				message: "hello",
				id: "1"
			},
			{
				message: "world",
				id: "2"
			},
			{
				message: "I'am",
				id: "3"
			},
			{
				message: "studying",
				id: "4"
			},
			{
				message: "vue.js",
				id: "5"
			}
		]
	},
	methods:{
		raverseIndex:function () {
			this.items.reverse();
		},
		reduceLength: function () {
			this.items.splice(this.items.length - 1);
		},
		addValue: function () {
			this.items.splice(this.items.length, 1, {message: "new value" + (this.items.length + 1), id: ""+ (this.items.length + 1)});
		}
	},
	computed:{
		reItems: function () {
			return this.items;
		}
	}
});

/**
 * 显示过滤-排序结果         https://cn.vuejs.org/v2/guide/list.html#显示过滤-排序结果
 */
new Vue({
	el: "#list009",
	data: {
		numbers: [ 1, 2, 3, 4, 5 ]
	},
	computed: {
		evenNumbers: function () {
			return this.numbers.filter(function (number) {
				return number % 2 === 0
			})
		}
	}
});

new Vue({
	el: "#list010",
	data: {
		numbers: [ 1, 2, 3, 4, 5 ]
	},
	methods: {
		even: function (numbers) {
			return numbers.filter(function (number) {
				return number % 2 === 0
			})
		}
	}
});

/**
 * 一段取值范围的-v-for        https://cn.vuejs.org/v2/guide/list.html#一段取值范围的-v-for
 */
new Vue({
	el: "#list011"
});

/**
 * v-for-on-a-lt-template-gt     https://cn.vuejs.org/v2/guide/list.html#v-for-on-a-lt-template-gt
 */
new Vue({
	el:"#list012",
	data:{
		items:[
			{msg: "1"},
			{msg: "2"},
			{msg: "3"},
			{msg: "4"},
			{msg: "5"},
			{msg: "6"}
		]
	}
});

/**
 * v-for-with-v-if     https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if
 */
new Vue({
	el:"#list013",
	data:{
		todos:[
			{td: "1", isComplete: true},
			{td: "2", isComplete: false},
			{td: "3"},
			{td: "4"}
		]
	}
});

/**
 * 一个组件的-v-for     https://cn.vuejs.org/v2/guide/list.html#一个组件的-v-for
 */
Vue.component('todo-item', {
	props: ['title'],
	template: '<li>{{title}}<button @click="$emit(\'remove\')">X</button></li>'
});
new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: [
			{
				id: 1,
				title: 'Do the dishes'
			},
			{
				id: 2,
				title: 'Take out the trash'
			},
			{
				id: 3,
				title: 'Mow the lawn'
			}
		],
		nextTodoId: 4
	},
	methods: {
		addNewTodo: function () {
			this.todos.push({
				id: this.nextTodoId++,
				title: this.newTodoText
			});
			this.newTodoText = ''
		}
	}
});



