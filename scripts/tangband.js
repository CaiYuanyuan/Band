addLoadEvent(highlightPage);

//突出当前页面+链接悬停动画

function highlightPage(){
	//确保浏览器支持此方法
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	//确保元素存在
	if(!document.getElementById("navigation")) return false;

	//获取链接容器元素
	var nav = document.getElementById("navigation");
	//获取所有链接
	var links = nav.getElementsByTagName("a");

	//遍历每个链接
	for (var i=0;i<links.length ;i++ )
	{
        //链接悬停动画
		links[i].onmouseover = function(){
			
			  var destination = this.getAttribute("href");
			
			  if(destination.indexOf("index.html")!= -1){
					moveElement("preview",0,0,10);
			  
			  }
			  if(destination.indexOf("about.html")!= -1){
					moveElement("preview",-158,0,10);
			  
			  }
			  if(destination.indexOf("photos.html")!= -1){

				moveElement("preview",-316,0,10);
			  }
			  if(destination.indexOf("live.html")!= -1){

				moveElement("preview",-474,0,10);
			  }
			  if(destination.indexOf("contact.html")!= -1){

				moveElement("preview",-632,0,10);		  
			  }
		}
		//获取每个链接的href属性，即页面url
		var linkurl = links[i].getAttribute("href");
		//获取当前页面的url
		var currenturl = window.location.href;

		//判断链接对应的url是不是 当前页面的url：字符串比较
		//当前url中有linkurl字符串，则所代表的链接，就是当前页面的链接

		if(currenturl.indexOf(linkurl)!=-1)
		{
		  links[i].className = "here";	  	  
		 
		}
		
	}

}
