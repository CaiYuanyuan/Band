addLoadEvent(stripeTable);

//给表格画斑马线—— 直接通过js的style属性，改变元素的样式
function stripeTable(){
	//对象检测
	if(!document.getElementsByTagName) return false;
	//找到所有表格
	var tables = document.getElementsByTagName("table");
	//遍历表格
	for (var i=0; i<tables.length; i++)
	{
		//设置控制变量初始值
		var odd = false;
		//找到表格的所有行
		var rows = tables[i].getElementsByTagName("tr");
		//遍历行
		for (var j=0; j<rows.length; j++)
		{
			rows[j].onmouseover = function(){
				//鼠标悬停的那一行，字体变粗
				this.style.fontWeight = "bold";
			}
			rows[j].onmouseout = function(){
				//不加这句，鼠标会保持悬停时的样式，即使已经不在悬停状态
				this.style.fontWeight = "normal";
			}
			if(odd==true){
				//直接设置元素样式
				//rows[j].style.backgroundColor = "#ffc";

				//通过添加类，来设置元素样式，样式信息，写在css文件中
				addClass(rows[j],"odd");
				//设置一次颜色后，重置控制变量值
				odd = false;
			}
			else{
			  odd = true;
			}


		}
		
	}
}