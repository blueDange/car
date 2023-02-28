/**
 * 随机数的生成模块
 * */
module.exports = {
	/*返回指定范围内的随机整数*/
	randomNum(min, max) {
		let n = Math.random() //0-1随机小数
		n = n * (max - min) //0~(max-min) 间的随机小数
		n += min //min~max 间的随机小数
		n = Math.floor(n) //min~max 间的随机数，可能为min，不可能为max
		return n
	},
	/*返回一个随机的颜色值，行如：#ab5c9d*/
	randomColor(min, max) {
		let red = this.randomNum(min, max)
		let green = this.randomNum(min, max)
		let blue = this.randomNum(min, max)

		red = red.toString(16) // 将十进制转换为十六进制
		green = green.toString(16) // 将十进制转换为十六进制
		blue = blue.toString(16) // 将十进制转换为十六进制

		red = red.length < 2 ? "0" + red : red
		green = red.length < 2 ? "0" + green : green
		blue = red.length < 2 ? "0" + blue : blue

		return '#' + red + green + blue
	},
	/*返回一个随机的文件名
		参数：oldName表示该文件原始文件名 例如：2.png
		返回值：时间戳.png
	*/
	randFileName(oldName) {
		let f = Date.now() //时间戳
		f = String(f); //转换为字符串
		f += this.randomNum(100000, 1000000)//六位的随机数
		f += oldName.substring(oldName.lastIndexOf('.'))//源文件的后缀名
		return f
	}
}