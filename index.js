(function(){
	// 数组排序
	function inSort(arr) {
		var len = arr.length;
		for(var i = 0; i < len; i++) {
			for(var j = 0; j < len - 1 - i; j++) {
				if(arr[j] > arr[j+1]) {
					var temp = arr[j+1];
					arr[j+1] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr
	}
	var arr = [1,3,4,6,7,9,8,5,2];
	document.write(" -- " + inSort(arr));

	// 数组去重
	function noRepeat(arr) {
		var array = [],
			len = arr.length;
		for(var i = 0; i < len; i++) {
			if(array.indexOf(arr[i]) === -1) {
				array.push(arr[i]);
			}
		}
		return array;
	}
	var array = [1,1,2,2,3,3,4,4,5,5];
	document.write(" -- " + noRepeat(array))

	// 查找数组中是否有特定的值 inArray
	var arrayNeedle = ["red", "blue", "yellow"]
	Array.prototype.inArray = function(needle) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] === needle) {
				return true
			}
		}
		return false
	}
	document.write(" -- " + arrayNeedle.inArray("red"));
	document.write(" -- " + arrayNeedle.inArray("hello"));

	// 字符串反转
	String.prototype.reverse = function() {
		console.log("this string is " + this)
		return Array.prototype.reverse.
					apply(this.split("")).join("")
	}
	var str = "abcdrfg";
	document.write(" -- " + str.reverse());

	// 将字符串转换为驼峰表示法
	var strings = "a-ss-ddd-ffff-ggggg";
	function hump(msg) {
		var arr = msg.split("-"),
		massage = "";
		for(var i = 1; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length);
		}
		return massage = arr.join("");
	}
	document.write(" -- " + hump(strings));
}.call(this))