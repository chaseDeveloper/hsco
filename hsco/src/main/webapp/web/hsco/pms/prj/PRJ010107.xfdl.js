﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ010107");this.set_classname("PRJ010107");this.set_titletext("공사대장현황");this._setFormPosition(0,0,1059,735);}_a=new Div("div_ctr","absolute","0","0",null,null,"0","0",this);_a.set_taborder("2");_a.set_url("mis_ctr::CTR030100.xfdl");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ010107");_b.set_titletext("공사대장현황");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","mis_ctr::CTR030100.xfdl");};this.addIncludeScript("PRJ010107.xfdl","lib::comInclude.xjs");this.addIncludeScript("PRJ010107.xfdl","mis_lib::misUtil.xjs");this.registerScript("PRJ010107.xfdl",function(){this.isLoad=false;this.PRJ010107_oninit=function(_a,_b){};this.PRJ010107_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.PRJ010107_ontimer=function(_a,_b){if(this.isLoad==false&&this.div_ctr.ds_ctr022.getRowCount()>0){var _c=["searchCtrt"];this.fn_divInit(_c);this.isLoad=true;this.killTimer(0);}};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.setTimer(0,500);};this.fn_init_dataset=function(){};this.fn_search=function(){this.div_ctr.fn_search();};this.fn_divInit=function(_a){_fn_setButtonVisible=function(_b){var _c=_b;var _d=0;var _e=_b.components.length;while(_d<_e){_c=_b.components[_d];var _f=false;for(var _g=0;_g<_a.length;_g++ ){if(_c.name==_a[_g]){_f=true;}}switch(_c.toString()){case "[object Edit]":if(!_f){_c.set_cssclass("edt_WF_Readonly");_c.set_readonly(true);}break;case "[object MaskEdit]":if(!_f){_c.set_cssclass("msk_WF_Readonly");_c.set_readonly(true);}break;case "[object Spin]":if(!_f){_c.set_cssclass("spn_WF_Readonly");_c.set_readonly(true);}break;case "[object Combo]":if(!_f){_c.set_cssclass("cmb_WF_Readonly");_c.set_readonly(true);}break;case "[object Calendar]":if(!_f){_c.set_cssclass("cal_WF_Readonly");_c.set_readonly(true);}break;case "[object TextArea]":if(!_f){_c.set_cssclass("txt_WF_Readonly");_c.set_readonly(true);}break;case "[object CheckBox]":if(!_f){_c.set_enable(false);}break;case "[object Button]":if(!_f){switch(_c.cssclass){case "btn_WF_PopupClose":case "btn_WF_CRUD":break;default:_c.set_visible(false);break;}}else{_c.set_visible(true);}break;case "[object Form]":case "[object Div]":case "[object Tab]":case "[object Tabpage]":if(!_f){_fn_setButtonVisible(_c);}break;case "[object Grid]":if(!_f){for(var _h=0;_h<_c.getCellCount("Head");_h++ ){_c.setCellProperty("Head",_h,"edittype","none");}for(var _h=0;_h<_c.getCellCount("Body");_h++ ){_c.setCellProperty("Body",_h,"edittype","none");_c.setCellProperty("Body",_h,"expandshow","hide");_c.setCellProperty("Body",_h,"combodisplay","edit");_c.setCellProperty("Body",_h,"calendardisplay","edit");_c.setCellProperty("Body",_h,"editdisplay","edit");}}else{}break;}_d++ ;}};_fn_setButtonVisible(this);};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.PRJ010107_oninit,this);this.addEventHandler("onload",this.PRJ010107_onload,this);this.addEventHandler("ontimer",this.PRJ010107_ontimer,this);};this.loadIncludeScript("PRJ010107.xfdl");this.loadPreloadList();};})();