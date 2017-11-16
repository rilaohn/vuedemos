/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 基础例子   https://cn.vuejs.org/v2/guide/computed.html#基础例子
 */
new Vue({
	el: '#computed001',
	data: {
		message: 'Hello world!'
	},
	methods: {
		reversedMessage: function () {
			return this.message.split('').reverse().join('')
		},
		nowtime: function () {
			return Date.now();
		},
		nowtime2: function () {
			return this.now;
		}
	},
	computed: {
		// 计算属性的 getter
		reversedMessage: function () {
			// `this` 指向 vm 实例
			return this.message.split('').reverse().join('')
		},
		now: function () {
			return Date.now()
		}
	}
});

/**
 * 计算属性的-setter     https://cn.vuejs.org/v2/guide/computed.html#计算属性的-setter
 */
var vm = new Vue({
	el:"#computed002",
	data: {
		firstName: 'Foo',
		lastName: 'Bar',
		tempName: ""
	},
	computed: {
		fullName: {
			get: function () {
				return this.firstName + ' ' + this.lastName
			},
			set: function (newValue) {
				var names = newValue.split(' ');
				this.firstName = names[0];
				if (names.length > 1)
					this.lastName = names[names.length - 1];
				else
					this.lastName = '';
			}
		}
	},
	methods:{
		handleChange: function () {
			this.fullName = this.tempName;
		}
	}
});


/**
 * 侦听器   https://cn.vuejs.org/v2/guide/computed.html#侦听器
 */
var watchExampleVM = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!',
		imagepath: ""
	},
	watch: {
		// 如果 `question` 发生改变，这个函数就会运行
		question: function (newQuestion) {
			this.answer = 'Waiting for you to stop typing...'
			this.getAnswer()
		}
	},
	methods: {
		// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
		// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
		// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
		// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
		// 请参考：https://lodash.com/docs#debounce
		getAnswer: _.debounce(
			function () {
				if (this.question.indexOf('?') === -1) {
					this.answer = 'Questions usually contain a question mark. ;-)';
					return
				}
				this.answer = 'Thinking...';
				var vm = this;
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer);
						vm.imagepath = _.capitalize(response.data.image);
					})
					.catch(function (error) {
						vm.answer = 'Error! Could not reach the API. ' + error
						vm.imagepath = "";
					})
			},
			// 这是我们为判定用户停止输入等待的毫秒数
			500
		)
	}
});