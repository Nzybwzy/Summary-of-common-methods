(function(){
	// 数组去重
	function noRepate(arr) {
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
	document.write(" -- " + noRepate(arr));

	// 数组排序
	function sort(arr) {
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
	document.write(" -- " + sort(array))

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
}.call(this))