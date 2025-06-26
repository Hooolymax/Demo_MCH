// menu.js - 共享菜单文件，带CSS动态加载功能

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
        <a href="home_en.html" title="home page english" id="menu_1006560" class="menu_1006560">Home</a>
    </li>
    
    <li class="menu_1006549">
        <a href="javascript:void(0)" id="menu_1006549" class="menu_1006549 parent_menu_item">About us</a>
        <ul menu_position="top" id="sub_menu_1006549" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006550"><a href="ourmission.html" title="our mission" style="float: none;" id="menu_1006550" class="menu_1006550">Our mission</a></li>
            <li class="menu_1006551"><a href="ourvalues.html" title="Our Values" style="float: none;" id="menu_1006551" class="menu_1006551">Our Values</a></li>
            <li class="menu_1006553"><a href="userscommittee.html" title="Users' Committee" style="float: none;" id="menu_1006553" class="menu_1006553">Users' Committee</a></li>
            <li class="menu_1006554"><a href="corporation.html" title="Corporation" style="float: none;" id="menu_1006554" class="menu_1006554">Corporation</a></li>
            <li class="menu_1006555"><a href="history.html" title="History" style="float: none;" id="menu_1006555" class="menu_1006555">History</a></li>
            <li class="last menu_1006556">
                <a href="javascript:void(0)" style="float: none;" id="menu_1006556" class="menu_1006556 parent_menu_item">Documents and Reports</a>
                <ul menu_position="top" id="sub_menu_1006556" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
                    <li class="menu_1006557"><a href="javascript:void(0)" style="float: none;" id="menu_1006557" class="menu_1006557">Strategic Plan 2012-2015 (Document to come)</a></li>
                    <li class="menu_1006558"><a href="javascript:void(0)" style="float: none;" id="menu_1006558" class="menu_1006558">Annual Report 2012-2013 (Document to come)</a></li>
                    <li class="last menu_1006559"><a href="javascript:void(0)" style="float: none;" id="menu_1006559" class="menu_1006559">Code of ethics(Document to come)</a></li>
                </ul>
            </li>
        </ul>
    </li>
    
    <li class="menu_1006562">
        <a href="javascript:void(0)" id="menu_1006562" class="menu_1006562 parent_menu_item">Services</a>
        <ul menu_position="top" id="sub_menu_1006562" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006567"><a href="long-termcare.html" title="Long-Term Care" style="float: none;" id="menu_1006567" class="menu_1006567">Long-Term Care</a></li>
            <li class="menu_1006568"><a href="daycentre.html" title="Day Centre" style="float: none;" id="menu_1006568" class="menu_1006568">Day Centre</a></li>
            <li class="menu_1006569"><a href="outpatientclinics.html" title="out patient clinics" style="float: none;" id="menu_1006569" class="menu_1006569">Outpatient Clinic</a></li>
            <li class="menu_1006570"><a href="qualityandsafety.html" title="Quality and Safety" style="float: none;" id="menu_1006570" class="menu_1006570">Quality and Safety</a></li>
            <li class="last menu_1006571"><a href="complaints.html" title="Complaints" style="float: none;" id="menu_1006571" class="menu_1006571">Complaints Commissioner</a></li>
        </ul>
    </li>
    
    <li class="menu_1006572">
        <a href="javascript:void(0)" id="menu_1006572" class="menu_1006572 parent_menu_item">Life at HCM</a>
        <ul menu_position="top" id="sub_menu_1006572" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006573"><a href="recreationandactivities.html" title="Recreation and activities" style="float: none;" id="menu_1006573" class="menu_1006573">Recreation and Activities</a></li>
            <li class="menu_1006579"><a href="practicalinformation.html" title="Practical information" style="float: none;" id="menu_1006579" class="menu_1006579">Practical Information</a></li>
            <li class="last menu_1006582"><a href="visitors.html" title="visitors" style="float: none;" id="menu_1006582" class="menu_1006582">Visitors</a></li>
        </ul>
    </li>
    
    <li class="menu_1006584">
        <a href="javascript:void(0)" id="menu_1006584" class="menu_1006584 parent_menu_item">foundation</a>
        <ul menu_position="top" id="sub_menu_1006584" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006586"><a href="mandate.html" title="Mandate" style="float: none;" id="menu_1006586" class="menu_1006586">Mandate</a></li>
            <li class="menu_1006587"><a href="upcomingevents.html" title="Upcoming Events" style="float: none;" id="menu_1006587" class="menu_1006587">upcoming events</a></li>
            <li class="last menu_1006588"><a href="donate.html" title="donate" style="float: none;" id="menu_1006588" class="menu_1006588">Donate</a></li>
        </ul>
    </li>
    
    <li class="menu_1006589">
        <a href="javascript:void(0)" id="menu_1006589" class="menu_1006589 parent_menu_item">Career and <br>Volunteer</a>
        <ul menu_position="top" id="sub_menu_1006589" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006590"><a href="whythemontrealchinesehospital.html" title="Why the Montreal Chinese Hospital" style="float: none;" id="menu_1006590" class="menu_1006590">Why choose MCH</a></li>
            <li class="menu_1006591"><a href="jobsavailable.html" title=" Jobs Available" style="float: none;" id="menu_1006591" class="menu_1006591">Job opportunities</a></li>
            <li class="last menu_1006592"><a href="becomeavolunteer.html" title="Become a volunteer" style="float: none;" id="menu_1006592" class="menu_1006592">Become a Volunteer</a></li>
        </ul>
    </li>
    
    <li class="menu_1006593">
        <a href="Womansauxiliary.html" title="Woman AUXILIARY" id="menu_1006593" class="menu_1006593">Women's <br>Auxiliary</a>
    </li>
    
    <li class="menu_1006595">
        <a href="educationalresources.html" title="Educational Resources" id="menu_1006595" class="menu_1006595">Educational <br>Resources</a>
    </li>
    
    <li class="last menu_1006594">
        <a href="contactus.html" title="Contact" id="menu_1006594" class="menu_1006594">Contact us</a>
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