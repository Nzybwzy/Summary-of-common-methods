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
	document.write("<br/>" + arr + " 数组排序 " + inSort(arr) + "<br/>");

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
	document.write(array + " 数组去重 " + noRepeat(array) + "<br/>")

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
	document.write(arrayNeedle + " 数组中有没有red " + arrayNeedle.inArray("red") + "<br/>");
	document.write(arrayNeedle + " 数组中有没有hello " + arrayNeedle.inArray("") + "<br/>");

	// 字符串反转
	String.prototype.reverse = function() {
		console.log("this string is " + this)
		return Array.prototype.reverse.
					apply(this.split("")).join("")
	}
	var str = "abcdrfg";
	document.write(str + " 字符串反转 " + str.reverse() + "<br/>");

	// 将字符串转换为驼峰表示法
	var strings = "a-ss-ddd-ffff-ggggg";
	function hump(msg) {
		var arr = msg.split("-"),
		massage = "";
		for(var i = 1; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
		}
		return massage = arr.join("");
	}
	document.write(strings + " 串转换为驼峰 " + hump(strings) + "<br/>");

	// 实现 start - end 之间的随机数
	var iArray = [];
	function getRandom(istart, iend) {
		var iChoice = iend - istart + 1;
		return istart + Math.floor(Math.random() * iChoice)
	}
	for(var i = 0; i < 10; i++) {
		iArray.push(getRandom(12, 20))
	}
	document.write(" 10-20 随机数和排序 " + iArray.sort() + "<br/>");

	// 闭包
	for(var i = 0; i < 10; i++) {
		(function(j) {
			setTimeout(function timer() {
				console.log(" 闭包 " + j)
			}, j * 1000)
		})(i)
	}
	// 重复输出给定字符串
	function repeatOutputString(str, times) {
		var strarr = [];
		while(times--) {
			strarr.push(str);
		}
		return strarr.join("");
		}
	document.write(" 重复输出三次abc " + repeatOutputString("abc", 3) + "<br/>");
}.call(this))