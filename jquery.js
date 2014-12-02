******************************************jquery获取页面元素***********************************************************
$("p") : 获取p标签
$("p.class")
$("p#id")
$(":empty") : 选取空元素
$("tr:even") : 选取偶数的tr标签 (even偶数)
$("tr:odd") : 选取奇数的tr标签 (odd奇数)
$("tr:eq(2)") : 选择第3个<tr>元素
$("tr:gt(2)") : 选择第3个之后的所有<tr>元素
$("tr:lt(2)") : 选择第3个之前的所有<tr>元素

$("p:contains(is)") ：选择所有包含is的p元素
$(":button") : 选择 type="button"的<button>元素和<input>元素
$("body *") : 选取body所有元素
$("body :visible") : <body>元素中每个可见的元素
$("body :disabled") : <body>元素中每个不可见的元素

$("[href]") :选取所有带有href属性的元素。
$("[href!='#']") : 选取所有带有href值不等于"#"的元素
$("[href$='.jpg']") : 选取所有href值以".jpg"结尾的元素

$("ul li:first") : 每个<ul>的第一个<li>元素
$("ul li:last") : 每个<ul>的最后一个<li>元素
$("div#intro .head") : id="intro"的<div>元素中的所有class="head" 的元素

***********************************************jquery html*************************************************************
$("p").html("") :
$(selector).append(content) : 向被选元素的（内部）HTML 追加内容
$(selector).prepend(content) : 向被选元素的（内部）HTML “预置”（Prepend）内容
$(selector).after(content) : 在被选元素(标签)之后添加 HTML（新标签）
$(selector).before(content) : 在被选元素之前添加 HTML

$(selector).text(content)
$(selector).val(value) ：设置值

************************************************jquery事件*************************************************************
$("divID").click(function(){
	$("").load(url,data,callback);	 : 绑定事件
});    //---AJAX请求

$(selector).trigger(event,params) : 触发事件 event:(click,change,flur···) prams:数组   //在事件中使用
$("").hide("",callback())  : 涉及动画的函数之后、不是立即执行的动作callback
$(selector).blur(function) : 失去焦点
$(selector).focus(function) : 获得焦点
$(selector).error(function) : 元素载入错误时触发，多为图像未能载入 
$(selector).change(function)　：
$(selector).keydown(function) : 按下放开才触发，针对键盘
$(selector).keyup(function) : 按下触发，针对键盘
$(selector).keypress(function) : 按下触发，针对字符
$(selector).submit(function) ：: 提交表单
$("ul li").each(function) 






