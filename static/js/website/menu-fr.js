// menu-fr.js - 法语版共享菜单文件，带CSS动态加载功能

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
        <a href="index.html" title="page d'accueil français" id="menu_1006560" class="menu_1006560">Accueil</a>
    </li>
    
    <li class="menu_1006549">
        <a href="javascript:void(0)" id="menu_1006549" class="menu_1006549 parent_menu_item">À propos</a>
        <ul menu_position="top" id="sub_menu_1006549" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006550"><a href="ourmission_fr.html" title="notre mission" style="float: none;" id="menu_1006550" class="menu_1006550">Notre mission</a></li>
            <li class="menu_1006551"><a href="nosvaleurs.html" title="Nos valeurs" style="float: none;" id="menu_1006551" class="menu_1006551">Nos valeurs</a></li>
            <li class="menu_1006553"><a href="comitédesusagers.html" title="Comité des usagers" style="float: none;" id="menu_1006553" class="menu_1006553">Comité des usagers</a></li>
            <li class="menu_1006554"><a href="corporation.html" title="Corporation" style="float: none;" id="menu_1006554" class="menu_1006554">Corporation</a></li>
            <li class="menu_1006555"><a href="historique.html" title="Historique" style="float: none;" id="menu_1006555" class="menu_1006555">Historique</a></li>
            <li class="last menu_1006556">
                <a href="javascript:void(0)" style="float: none;" id="menu_1006556" class="menu_1006556 parent_menu_item">Documents et rapports</a>
                <ul menu_position="top" id="sub_menu_1006556" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
                    <li class="menu_1006557"><a href="file/Strategic-Plan.pdf" target="_blank" style="float: none;" id="menu_1006557" class="menu_1006557">Plan stratégique 2012-2015</a></li>
                    <li class="menu_1006558"><a href="file/HCM_rapport_annuel_2014-2015.pdf" style="float: none;" id="menu_1006558" class="menu_1006558">Rapport annuel 2014-2015</a></li>
                    <li class="last menu_1006559"><a href="javascript:void(0)" style="float: none;" id="menu_1006559" class="menu_1006559">Code d'éthique</a></li>
                </ul>
            </li>
        </ul>
    </li>
    
    <li class="menu_1006562">
        <a href="javascript:void(0)" id="menu_1006562" class="menu_1006562 parent_menu_item">Services</a>
        <ul menu_position="top" id="sub_menu_1006562" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006567"><a href="soinsdelongueduree.html" title="Soins de longue durée" style="float: none;" id="menu_1006567" class="menu_1006567">Soins de longue durée</a></li>
            <li class="menu_1006568"><a href="centredejour.html" title="Centre de jour" style="float: none;" id="menu_1006568" class="menu_1006568">Centre de jour</a></li>
            <li class="menu_1006569"><a href="cliniquemedicaleexterne.html" title="Clinique médicale externe" style="float: none;" id="menu_1006569" class="menu_1006569">Clinique médicale externe</a></li>
            <li class="menu_1006570"><a href="qualiteetsecurite.html" title="Qualité et sécurité" style="float: none;" id="menu_1006570" class="menu_1006570">Qualité et sécurité</a></li>
            <li class="last menu_1006571"><a href="plaintes.html" title="Plaintes" style="float: none;" id="menu_1006571" class="menu_1006571">Plaintes</a></li>
        </ul>
    </li>
    
    <li class="menu_1006572">
        <a href="javascript:void(0)" id="menu_1006572" class="menu_1006572 parent_menu_item">Milieu de vie</a>
        <ul menu_position="top" id="sub_menu_1006572" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006573"><a href="Activitesetloisirs.html" title="Activités et loisirs" style="float: none;" id="menu_1006573" class="menu_1006573">Activités et loisirs</a></li>
            <li class="menu_1006579"><a href="Informationspratiques.html" title="Informations pratiques" style="float: none;" id="menu_1006579" class="menu_1006579">Informations pratiques</a></li>
            <li class="last menu_1006582"><a href="visiteurs.html" title="Visiteurs" style="float: none;" id="menu_1006582" class="menu_1006582">Visiteurs</a></li>
        </ul>
    </li>
    
    <li class="menu_1006584">
        <a href="javascript:void(0)" id="menu_1006584" class="menu_1006584 parent_menu_item">Fondation</a>
        <ul menu_position="top" id="sub_menu_1006584" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006586"><a href="mandat.html" title="Mandat" style="float: none;" id="menu_1006586" class="menu_1006586">Mandat</a></li>
            <li class="menu_1006587"><a href="evenementsavenir.html" title="Événements à venir" style="float: none;" id="menu_1006587" class="menu_1006587">Événements à venir</a></li>
            <li class="last menu_1006588"><a href="faitesundon.html" title="Faites un don" style="float: none;" id="menu_1006588" class="menu_1006588">Faites un don</a></li>
        </ul>
    </li>
    
    <li class="menu_1006589">
        <a href="javascript:void(0)" id="menu_1006589" class="menu_1006589 parent_menu_item">Carrières<br>et bénévolat</a>
        <ul menu_position="top" id="sub_menu_1006589" class="sub_menu" style="display:none; visibility: hidden; position: absolute;">
            <li class="menu_1006590"><a href="pourquoichoisir.html" title="Pourquoi choisir" style="float: none;" id="menu_1006590" class="menu_1006590">Pourquoi choisir l'Hôpital chinois?</a></li>
            <li class="menu_1006591"><a href="emploisdisponibles.html" title="Emplois disponibles" style="float: none;" id="menu_1006591" class="menu_1006591">Emplois disponibles</a></li>
            <li class="last menu_1006592"><a href="devenirbenevole.html" title="Devenir bénévole" style="float: none;" id="menu_1006592" class="menu_1006592">Devenir bénévole</a></li>
        </ul>
    </li>
    
    <li class="menu_1006593">
        <a href="damesauxiliaires.html" title="Dames auxiliaires" id="menu_1006593" class="menu_1006593">Dames<br>auxiliaires</a>
    </li>
    
    <li class="menu_1006595">
        <a href="educativesressources.html" title="Ressources éducatives" id="menu_1006595" class="menu_1006595">Ressources<br>éducatives</a>
    </li>
    
    <li class="last menu_1006594">
        <a href="nousjoindre.html" title="Nous joindre" id="menu_1006594" class="menu_1006594">Nous joindre</a>
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
        
        // À propos 子菜单事件
        jQuery("#sub_menu_1006549").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006550").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006551").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006553").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006554").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006555").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006556").mouseover(function () { _show_sub_menu(this, "1006549") }).mouseout(function () { _hide_sub_menus() }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Documents et rapports 子菜单事件
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
        
        // Milieu de vie 子菜单事件
        jQuery("#sub_menu_1006572").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006573").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006579").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006582").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Fondation 子菜单事件
        jQuery("#sub_menu_1006584").mouseout(function () { _hide_sub_menus() });
        jQuery("#menu_1006586").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006587").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        jQuery("#menu_1006588").mouseover(function () { _hide_sub_menus(1) }).mouseover(function () { current_menu_item = this; }).mouseout(function () { current_menu_item = null; });
        
        // Carrières et bénévolat 子菜单事件
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