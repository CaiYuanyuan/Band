addLoadEvent(prepareForms);
addLoadEvent(focusLabels);


//获取form对象，对文档中所有form对象，使用获得焦点和失去焦点事件，数据检查
function prepareForms(){
	//获得所有表单对象
	var forms = document.forms;
	//遍历所有表单对象
	for (var i=0; i<forms.length; i++ ){
		//去除占位文本
		resetFields(forms[i]);
		//表单被提交时，进行数据检查
		forms[i].onsubmit = function(){
			return validateForm(this);
		}
		
	}
}

//点击文本label，关联表单字段 获得焦点
function focusLabels(){
	//方法检测
	//元素检测
	//获取label元素
	var labels = document.getElementsByTagName("label");
	//遍历表单元素
	for (var i=0; i<labels.length; i++ ){
		//如果不存在for属性，则不执行获得焦点行为
		if(!labels[i].getAttribute("for")) continue;
		//单击label文本，相关表单字段 获得焦点
		labels[i].onclick = function(){
			var id = this.getAttribute("for");
			//如果关联字段不存在，不执行
			if(!document.getElementById(id)) return false;
			//获取关联字段
			var elem = document.getElementById(id);
			//获取焦点
			elem.focus();
		}
	}
}

//当表单元素获得焦点时，使默认值占位文本为空
function resetFields(whichform){
	//获取表单中所有表单元素
	var formelems = whichform.elements;
	for (var i=0; i<formelems.length; i++ ){
		//如果是提交按钮，就跳转到下次循环
		if (formelems[i].type=="submit") continue;
		//如果不存在默认值，就跳转到下次循环
		if(!formelems[i].defaultValue) continue;
		//表单元素的获得焦点事件
		formelems[i].onfocus = function(){
			//如果当前值与默认值相同，则清空
			if(this.value ==this.defaultValue){
			this.value = "";
			}		
		}
		//表单元素失去焦点事件
		formelems[i].onblur = function(){
			//如果当前值为空，即，用户未输入数据，则置为默认值
			if(this.value == ""){
			this.value =this.defaultValue;
			}		
		}	
	}
}


//数据合法性检查

//非空检查,为空，返回false
function isFilled(field){
	//如果为空=当前值长度小于1，或者没有填写数据=默认值,返回false，则提交不成功
	if(field.value.length<1||field.value==field.defaultValue) {
		return false;
	}
	else{
		return true;
	}
}
//电子邮件格式检查，不正确，返回false，参数：表单元素
function isEmail(field){
	//如果当前值不包含@和.，则返回false
	//indexOf，找不到字符串，返回-1
	if(field.value.indexOf("@")== -1||field.value.indexOf(".")== -1) {
		return false;
	}
	else {
		return true;   
	}
}

//表单验证函数,参数：表单元素
function validateForm(whichform){
	//获得所有表单元素
	var formelems = whichform.elements;
	//遍历所有表单元素
	for (var i=0; i<formelems.length; i++ ){
		//如果类名包含required，则进行非空检查
		if(formelems[i].className.indexOf(required)!= -1){
			//如果为空，终止函数，返回false+则执行为空的函数，弹出提示窗口
			if(!isFilled(formelems[i])){
			alert("请填写非空项");	
			return false;
			}
		}
		if(formelems[i].className.indexOf(email)!= -1){
			if(!isEmail(formelems[i])){
			alert("请输入正确的邮箱格式！");	
			return false;
			}
		}
	}
	//语句执行到此，说明非空和格式都满足，返回真值
	alert("发送成功！")
	return true;
}

