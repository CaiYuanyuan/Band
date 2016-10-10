//函数添加到加载事件,参数：函数名
addLoadEvent(prepareGallery);
//addLoadEvent(preparePlaceholder);

//创建占位图片
function preparePlaceholder(){
	//确保浏览器理解方法，不理解也不会报错
	if(!document.createElement) return false;
	if(!document.getElementById) return false;

	//确保元素存在，不存在也不会报错
	if(!document.getElementById("imagegallery")) return false;
	//创建图片元素
	var placeholder = document.createElement("img");
	//创建图片的属性
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/bandimg1.png");
	placeholder.setAttribute("alt","my image gallery");
	
	//查找一元素，新建元素放在它的后面
	var gallery = document.getElementById("imagegallery");
	gallery.insertAfter(placeholder,gallery);

}

//替换图片
function showPic(whichpic){

    //确保浏览器理解此方法，不理解则执行 点击链接的默认行为
	if(!document.getElementById) return true;
	//确保元素存在，占位图片不存在，则执行 点击链接的默认行为
	if(!document.getElementById("placeholder")) return true;

	//获取图片存储路径，存储在链接的href属性里
    var source = whichpic.getAttribute("href");
	var altvalue = whichpic.getAttribute("title");
	//找到要被替换的图片，修改它的src属性
    var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	placeholder.setAttribute("alt",altvalue );
	/*最后的语句，执行到这里，说明此函数各项检查都满足，并执行成功了
	所以图片替换成功，取消点击链接时的默认跳转行为*/
	return false;

}



//点击图片所在连接，触发单击事件，替换图片
function prepareGallery(){
	//确保浏览器理解方法，不理解也不会报错
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;

	//确保元素存在，不存在也不会报错
	if(!document.getElementById("imagegallery")) return false;

	//获取链接所在容器元素
	var gallery = document.getElementById("imagegallery");
	//获取链接
	var links = gallery.getElementsByTagName("a");
	//遍历链接
	for (var i=0; i<links.length; i++ ){
		//链接单击事件
		links[i].onclick = function(){
		//调用替换函数，返回值
		return showPic(this);
		}
	}
}


