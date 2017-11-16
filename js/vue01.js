/*
 * Create by JetBrains IDEA
 * User: Etertops
 * Date: 2017/11/15
 * Time: 17:17
 */
function init() {
	var data = {a: 1};
	var NV = new Vue({
		el: "#t01",
		data: data
	});
	if (vm.a === data.a)
		alert("vm.a === data.a 的结果是：true");
	else
		alert("vm.a === data.a 的结果是：false");
}