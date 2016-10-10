//被反复多次用到的函数

//把函数，绑定到加载事件处理函数上，参数：函数名
function addLoadEvent(func){
	//获取现有的加载时间函数的值
	var oldload = window.onload;

	//如果事件上没绑定函数，则直接把函数添加到加载时间上
	if(typeof oldload != "function"){
		window.onload = func;
	}
	// 如果加载事件上，已经绑定函数，把新函数，追加在后面
	else {
		//创建一个匿名函数，来容纳多个函数
		window.onload = function(){
		oldload();
		func();
		}
	}
}
/*
//突出当前页面+css中设置样式
function highlightPage(elementID){
	//确保浏览器支持此方法
	if(!document.getElementById) return false;
	//确保元素存在
	if(!document.getElementById(elementID)) return false;
	//获取链接容器元素
	var nav = document.getElementById("elementID");
	//获取所有链接
	var links = nav.getElementsByTagName("a");
	//遍历每个链接
	for (var i=0;i<links.length ;i++ )
	{
		//获取每个链接的href属性，即页面url
		var linkurl = links[i].getAttribute("href");
		//获取当前页面的url
		var currenturl = window.location.href;
		//判断链接对应的url是不是 当前页面的url：字符串比较
		//当前url中有linkurl字符串，则所代表的链接，就是当前页面的链接
		if(currenturl.indexOf(linkurl)!= -1)
		{
		  links[i].className = "here";
		 
		}
	}

}

*/
//在元素的后面插入一个元素
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement)
  {
	  parent.appendChild(newElement);
  }
  else{
   parent.insertBefore(newElement,targetElement.nextSibling);
  }
    
}

//给元素添加或追加 类名
function addClass(element,value){
	//如果元素还未设置类名，就是没有类
    if(!element.className){
		element.className = value;
	}
	else{
		//如果元素已经设置类名，就追加一个类名，防止覆盖原来的类
		var newClassName = element.className;
		newClassName += " ";//类名之间的空格
		newClassName += value;
		element.className = newClassName;
	}

}
//移动元素，即改变元素的位置
//四个参数要移动的元素的id，left、top值，间隔时间
function moveElement(elementID,final_left,final_top,interval){
	//对象和元素检测
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);

	//防止鼠标快速移动时，试图把同一个物体移向两个方向，这样会使动画产生滞后
	//如果已经有movement属性，即存在延迟函数，即移动操作，就清除延迟,即复位
	//不管移动的是哪个元素，都将总有一个movement属性
	if(elem.movement){
    clearTimeout(elem.movement);
    
	}

	//如果left,top值未设置，如何防止报错:给它一个初始值，或直接终止函数
	if(!elem.style.left){
	//切记，给属性赋值，属性值一定要加双引号
		elem.style.left = "0px";
	}
	if(!elem.style.top){
		elem.style.top = "0px";
	}
	//提取位置信息,并将提取 位置字符串中 的整数值
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);


	//如果函数到达目标位置，则终止函数，并返回真值
	if(xpos==final_left && ypos==final_top){

		return true;
	}

	/*1.如果比需要的left的数值大或小，则减一，加一
	2.如果离得较远，就前进一大步，如果离得较近，就前进一小步
	算出相差的距离,让元素前进这个距离的十分之一
	当距离小于10时，十分之一小于1，
	是无法移动小于1像素的距离的，
	解决办法:把值向大于方向，舍苏为一个整数，如0.3，舍入为1*/
	if(xpos<final_left){
	
		var distance = Math.ceil((final_left-xpos)/10);
		xpos=xpos+distance;
		//xpos++;
	}
	if(xpos>final_left){
		var distance = Math.ceil((xpos-final_left)/10);
		xpos=xpos-distance;
		//xpos--;
	}

	if(ypos<final_top){
		var distance = Math.ceil((final_top-ypos)/10);
		ypos=ypos+distance;
		//ypos++;
	}
	if(ypos>final_top){
		var distance = Math.ceil((ypos-final_top)/10);
		ypos=ypos-distance;		
		//ypos--;
	}
	//把改变后的数值，重新赋值给left和top属性
	elem.style.left = xpos+"px";
	elem.style.top = ypos+"px";
	//让函数在1秒后，即1000毫秒后才去调用moveMessage函数
	//自己调用自己：递归调用：每隔1秒，调用一次函数
	//movement = setTimeout("moveElement()",1000);
	//'"+字符串+"',"+非字符串+"
	//为什么不是moveElement(elementID,final_left,final_top,interval)？
	var repeat = "moveElement('"+elementID+"',"+final_left+","+final_top+","+interval+")";
	
	elem.movement = setTimeout(repeat,interval);

}

