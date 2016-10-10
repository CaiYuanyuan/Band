//������ӵ������¼�,������������
addLoadEvent(prepareGallery);
//addLoadEvent(preparePlaceholder);

//����ռλͼƬ
function preparePlaceholder(){
	//ȷ���������ⷽ���������Ҳ���ᱨ��
	if(!document.createElement) return false;
	if(!document.getElementById) return false;

	//ȷ��Ԫ�ش��ڣ�������Ҳ���ᱨ��
	if(!document.getElementById("imagegallery")) return false;
	//����ͼƬԪ��
	var placeholder = document.createElement("img");
	//����ͼƬ������
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/bandimg1.png");
	placeholder.setAttribute("alt","my image gallery");
	
	//����һԪ�أ��½�Ԫ�ط������ĺ���
	var gallery = document.getElementById("imagegallery");
	gallery.insertAfter(placeholder,gallery);

}

//�滻ͼƬ
function showPic(whichpic){

    //ȷ����������˷������������ִ�� ������ӵ�Ĭ����Ϊ
	if(!document.getElementById) return true;
	//ȷ��Ԫ�ش��ڣ�ռλͼƬ�����ڣ���ִ�� ������ӵ�Ĭ����Ϊ
	if(!document.getElementById("placeholder")) return true;

	//��ȡͼƬ�洢·�����洢�����ӵ�href������
    var source = whichpic.getAttribute("href");
	var altvalue = whichpic.getAttribute("title");
	//�ҵ�Ҫ���滻��ͼƬ���޸�����src����
    var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	placeholder.setAttribute("alt",altvalue );
	/*������䣬ִ�е����˵���˺��������鶼���㣬��ִ�гɹ���
	����ͼƬ�滻�ɹ���ȡ���������ʱ��Ĭ����ת��Ϊ*/
	return false;

}



//���ͼƬ�������ӣ����������¼����滻ͼƬ
function prepareGallery(){
	//ȷ���������ⷽ���������Ҳ���ᱨ��
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;

	//ȷ��Ԫ�ش��ڣ�������Ҳ���ᱨ��
	if(!document.getElementById("imagegallery")) return false;

	//��ȡ������������Ԫ��
	var gallery = document.getElementById("imagegallery");
	//��ȡ����
	var links = gallery.getElementsByTagName("a");
	//��������
	for (var i=0; i<links.length; i++ ){
		//���ӵ����¼�
		links[i].onclick = function(){
		//�����滻����������ֵ
		return showPic(this);
		}
	}
}


