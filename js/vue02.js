/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:18
 */
/**
 * 文本    https://cn.vuejs.org/v2/guide/syntax.html#文本
 */
new Vue({
	el: "#syntax001",
	data: {
		msg: ["hello", "world", "!"]
	}
});

/**
 * 原始 HTML   https://cn.vuejs.org/v2/guide/syntax.html#原始-HTML
 */
new Vue({
	el: "#syntax002",
	data: {
		rawHtml: "<div><label style='color: rebeccapurple'>hello</label> world!</div>"
	}
});

// 文本 与 原始HTML 插入对比
new Vue({
	el: "#syntax003",
	data: {
		contrast: "<div><label style='color: rebeccapurple'>hello</label> world!</div>"
	}
});

new Vue({
	el: "#syntax004",
	data: {
		rawHtml: "<div><label style='color: rebeccapurple'>hello</label> world!</div>"
	}
});

/**
 * 特性 https://cn.vuejs.org/v2/guide/syntax.html#特性
 */
new Vue({
	el: '.temp_class001',
	data:{
		dynamicId: "id000"
	}
});

/**
 * 使用-JavaScript-表达式  https://cn.vuejs.org/v2/guide/syntax.html#使用-JavaScript-表达式
 */
new Vue({
	el: ".temp_class002",
	data: {
		id: "test_id",
		ok: "y",
		message: 'hello'
	}
});
new Vue({
	el: "#syntax007",
	data:{
		ok: "y",
		message: 'hello'
	}
});
new Vue({
	el: "#syntax0071",
	data:{
		ok: "y",
		message: 'hello'
	}
});
new Vue({
	el: "#syntax008",
});

/**
 * 指令   https://cn.vuejs.org/v2/guide/syntax.html#指令
 */
new Vue({
	el: "#syntax009",
	data: {
		show: "yes"
	}
});

/**
 * 修饰符  https://cn.vuejs.org/v2/guide/syntax.html#修饰符
 */


/**
 * 缩写    https://cn.vuejs.org/v2/guide/syntax.html#缩写
 */
new Vue({
	el: "#syntax010",
	methods:{
		aclick: function () {
			alert(111);
		}
	}
});