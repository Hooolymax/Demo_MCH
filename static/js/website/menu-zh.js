// menu-zh.js - 中文版共享菜单文件，带CSS动态加载功能

// CSS动态加载函数
function loadMenuCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '__system/__css/menu.css';
    link.id = 'dynamic-menu-css';
    document.head.appendChild(link);
}

function removeMenuCSS() {
    const existingCSS = document.getElementById('dynamic-menu-css');
    if (existingCSS) {
        existingCSS.remove();
    }
}

var sharedMenuHTML = `
<ul menu_position="top">
    <li class="first menu_1006560">
        <a href="homepagechinese.html" title="中文首页" id="menu_1006560" class="menu_1006560">主页</a>
    </li>
    
    <li class="menu_1006549">
        <a href="javascript:void(0)" id="menu_1006549" class="menu_1006549 parent_menu_item">关于我们</a>
        <ul menu_position="top" id="sub_menu_1006549" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006550"><a href="ourmissionchinese.html" title="我们的使命" style="float: none;" id="menu_1006550" class="menu_1006550">我们的使命</a></li>
            <li class="menu_1006551"><a href="ourvalueschinese.html" title="我们的价值观" style="float: none;" id="menu_1006551" class="menu_1006551">我们的价值</a></li>
            <li class="menu_1006553"><a href="usercommitteechinese.html" title="用户委员会" style="float: none;" id="menu_1006553" class="menu_1006553">使用者委员会</a></li>
            <li class="menu_1006554"><a href="coporationchinese.html" title="法人机构" style="float: none;" id="menu_1006554" class="menu_1006554">法人机构</a></li>
            <li class="menu_1006555"><a href="historychinese.html" title="历史" style="float: none;" id="menu_1006555" class="menu_1006555">历史</a></li>
            <li class="last menu_1006556">
                <a href="javascript:void(0)" style="float: none;" id="menu_1006556" class="menu_1006556 parent_menu_item">资料</a>
                <ul menu_position="top" id="sub_menu_1006556" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
                    <li class="menu_1006557"><a href="javascript:void(0)" style="float: none;" id="menu_1006557" class="menu_1006557">2012-2015年战略规划 (PDF to come)</a></li>
                    <li class="menu_1006558"><a href="javascript:void(0)" style="float: none;" id="menu_1006558" class="menu_1006558">2012-2013年年报 (PDF to come)</a></li>
                    <li class="last menu_1006559"><a href="javascript:void(0)" style="float: none;" id="menu_1006559" class="menu_1006559">伦理规范 (PDF to come)</a></li>
                </ul>
            </li>
        </ul>
    </li>
    
    <li class="menu_1006562">
        <a href="javascript:void(0)" id="menu_1006562" class="menu_1006562 parent_menu_item">服务项目</a>
        <ul menu_position="top" id="sub_menu_1006562" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006567"><a href="long-termcarechinese.html" title="长期护理" style="float: none;" id="menu_1006567" class="menu_1006567">长期护理</a></li>
            <li class="menu_1006568"><a href="daycentrechinese.html" title="老人日托中心" style="float: none;" id="menu_1006568" class="menu_1006568">老人日托中心</a></li>
            <li class="menu_1006569"><a href="outpatientclinicschinese.html" title="门诊" style="float: none;" id="menu_1006569" class="menu_1006569">门诊</a></li>
            <li class="menu_1006570"><a href="qualityandsafetychinese.html" title="服务质量与安全措施" style="float: none;" id="menu_1006570" class="menu_1006570">服务质量与安全措施</a></li>
            <li class="last menu_1006571"><a href="complaintschinese.html" title="投诉" style="float: none;" id="menu_1006571" class="menu_1006571">投诉</a></li>
        </ul>
    </li>
    
    <li class="menu_1006572">
        <a href="javascript:void(0)" id="menu_1006572" class="menu_1006572 parent_menu_item">生活环境</a>
        <ul menu_position="top" id="sub_menu_1006572" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006573"><a href="recreationandactivitieschinese.html" title="娱乐活动" style="float: none;" id="menu_1006573" class="menu_1006573">娱乐活动</a></li>
            <li class="menu_1006579"><a href="practicalinformationchinese.html" title="实用信息" style="float: none;" id="menu_1006579" class="menu_1006579">实用信息</a></li>
            <li class="last menu_1006582"><a href="visitorschinese.html" title="访客须知" style="float: none;" id="menu_1006582" class="menu_1006582">访客须知</a></li>
        </ul>
    </li>
    
    <li class="menu_1006584">
        <a href="javascript:void(0)" id="menu_1006584" class="menu_1006584 parent_menu_item">基金会</a>
        <ul menu_position="top" id="sub_menu_1006584" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006586"><a href="mandatechinese.html" title="使命" style="float: none;" id="menu_1006586" class="menu_1006586">使命</a></li>
            <li class="menu_1006587"><a href="upcomingeventschinese.html" title="活动" style="float: none;" id="menu_1006587" class="menu_1006587">活动</a></li>
            <li class="last menu_1006588"><a href="donatechinese.html" title="捐赠" style="float: none;" id="menu_1006588" class="menu_1006588">捐赠</a></li>
        </ul>
    </li>
    
    <li class="menu_1006589">
        <a href="javascript:void(0)" id="menu_1006589" class="menu_1006589 parent_menu_item">工作机会<br>与义工活动</a>
        <ul menu_position="top" id="sub_menu_1006589" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006590"><a href="whythemontrealchinesehospitalchinese.html" title="为什么到满地可中华医院来工作？" style="float: none;" id="menu_1006590" class="menu_1006590">为什么到满地可中华医院来工作？</a></li>
            <li class="menu_1006591"><a href="jobavailablechinese.html" title="工作机会" style="float: none;" id="menu_1006591" class="menu_1006591">工作机会</a></li>
            <li class="last menu_1006592"><a href="becomeavolunteerchinese.html" title="义工活动" style="float: none;" id="menu_1006592" class="menu_1006592">义工活动</a></li>
        </ul>
    </li>
    
    <li class="menu_1006593">
        <a href="womanauxilarychinese.html" title="妇女会" id="menu_1006593" class="menu_1006593">妇女会</a>
    </li>
    
    <li class="menu_1006595">
        <a href="educationalresourceschinese.html" title="教育资源" id="menu_1006595" class="menu_1006595">教育资源</a>
    </li>
    
    <li class="last menu_1006594">
        <a href="contactuschinese.html" title="联系方式" id="menu_1006594" class="menu_1006594">联系方式</a>
    </li>
</ul>
`;

// 初始化菜单事件的函数
function initializeMenuEvents() {
    jQuery(document).ready(function() {
        // 主菜单项事件
        jQuery("#menu_1006560").mouseover(function () { _hide_sub_menus(1) });
        jQuery("#menu_1006549").mouseover(function () { _show_sub_menu(this) }).mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006562").mouseover(function () { _show_sub_menu(this) }).mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006572").mouseover(function () { _show_sub_menu(this) }).mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006584").mouseover(function () { _show_sub_menu(this) }).mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006589").mouseover(function () { _show_sub_menu(this) }).mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006593").mouseover(function () { _hide_sub_menus(1) });
        jQuery("#menu_1006595").mouseover(function () { _hide_sub_menus(1) });
        jQuery("#menu_1006594").mouseover(function () { _hide_sub_menus(1) });
        
        // About us 子菜单事件
        jQuery("#sub_menu_1006549").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006550").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006551").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006553").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006554").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006555").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006556").mouseover(function () { _show_sub_menu(this, "1006549") }).mouseout(function () { _hide_sub_menus() }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Documents and Reports 子菜单事件
        jQuery("#sub_menu_1006556").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006557").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006558").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006559").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Services 子菜单事件
        jQuery("#sub_menu_1006562").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006567").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006568").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006569").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006570").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006571").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Life at HCM 子菜单事件
        jQuery("#sub_menu_1006572").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006573").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006579").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006582").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Foundation 子菜单事件
        jQuery("#sub_menu_1006584").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006586").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006587").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006588").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Career and Volunteer 子菜单事件
        jQuery("#sub_menu_1006589").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006590").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006591").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006592").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
    });
}

// 初始化菜单的函数
function initializeSharedMenu() {
    try {
        var menuContainer = document.getElementById('rot_ctr1_bod_ctr2_bod');
        if (menuContainer) {
            loadMenuCSS();
            menuContainer.innerHTML = '<!--UdmComment-->' + sharedMenuHTML + '<!--/UdmComment-->';
            initializeMenuEvents();
        }
    } catch (error) {
        removeMenuCSS();
    }
}

// 页面加载完成后自动初始化菜单
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSharedMenu);
} else {
    initializeSharedMenu();
}