******************************************jquery��ȡҳ��Ԫ��***********************************************************
$("p") : ��ȡp��ǩ
$("p.class")
$("p#id")
$(":empty") : ѡȡ��Ԫ��
$("tr:even") : ѡȡż����tr��ǩ (evenż��)
$("tr:odd") : ѡȡ������tr��ǩ (odd����)
$("tr:eq(2)") : ѡ���3��<tr>Ԫ��
$("tr:gt(2)") : ѡ���3��֮�������<tr>Ԫ��
$("tr:lt(2)") : ѡ���3��֮ǰ������<tr>Ԫ��

$("p:contains(is)") ��ѡ�����а���is��pԪ��
$(":button") : ѡ�� type="button"��<button>Ԫ�غ�<input>Ԫ��
$("body *") : ѡȡbody����Ԫ��
$("body :visible") : <body>Ԫ����ÿ���ɼ���Ԫ��
$("body :disabled") : <body>Ԫ����ÿ�����ɼ���Ԫ��

$("[href]") :ѡȡ���д���href���Ե�Ԫ�ء�
$("[href!='#']") : ѡȡ���д���hrefֵ������"#"��Ԫ��
$("[href$='.jpg']") : ѡȡ����hrefֵ��".jpg"��β��Ԫ��

$("ul li:first") : ÿ��<ul>�ĵ�һ��<li>Ԫ��
$("ul li:last") : ÿ��<ul>�����һ��<li>Ԫ��
$("div#intro .head") : id="intro"��<div>Ԫ���е�����class="head" ��Ԫ��

***********************************************jquery html*************************************************************
$("p").html("") :
$(selector).append(content) : ��ѡԪ�صģ��ڲ���HTML ׷������
$(selector).prepend(content) : ��ѡԪ�صģ��ڲ���HTML ��Ԥ�á���Prepend������
$(selector).after(content) : �ڱ�ѡԪ��(��ǩ)֮����� HTML���±�ǩ��
$(selector).before(content) : �ڱ�ѡԪ��֮ǰ��� HTML

$(selector).text(content)
$(selector).val(value) ������ֵ

************************************************jquery�¼�*************************************************************
$("divID").click(function(){
	$("").load(url,data,callback);	 : ���¼�
});    //---AJAX����

$(selector).trigger(event,params) : �����¼� event:(click,change,flur������) prams:����   //���¼���ʹ��
$("").hide("",callback())  : �漰�����ĺ���֮�󡢲�������ִ�еĶ���callback
$(selector).blur(function) : ʧȥ����
$(selector).focus(function) : ��ý���
$(selector).error(function) : Ԫ���������ʱ��������Ϊͼ��δ������ 
$(selector).change(function)����
$(selector).keydown(function) : ���·ſ��Ŵ�������Լ���
$(selector).keyup(function) : ���´�������Լ���
$(selector).keypress(function) : ���´���������ַ�
$(selector).submit(function) ��: �ύ��
$("ul li").each(function) 






