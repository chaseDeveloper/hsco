﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070129");this.set_classname("HRM070129");this.set_titletext("출/퇴근현황(공개용)");this._setFormPosition(0,0,1059,735);}_a=new Div("Div_lnk","absolute","0","0",null,null,"0","3",this);_a.set_taborder("0");_a.set_applystyletype("cascade,keep");_a.set_visible("false");_a.set_url("mis_hrm::HRM070124.xfdl");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070129");_b.set_titletext("출/퇴근현황(공개용)");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","mis_hrm::HRM070124.xfdl");};this.addIncludeScript("HRM070129.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070129.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070129.xfdl",function(){this.isLoad=false;this.HRM070129_oninit=function(_a,_b){this.fn_init_form();};this.HRM070129_onload=function(_a,_b){this.setTimer(0,500);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.HRM070129_ontimer=function(_a,_b){if(this.isLoad==false&&this.Div_lnk.ds_cond.getRowCount()>0){this.Div_lnk.div_work.Static00.set_visible(false);this.Div_lnk.div_work.btn_dclzDtlsTrnsfer.set_visible(false);this.Div_lnk.set_visible(true);this.isLoad=true;this.killTimer(0);}};this.fn_search=function(){this.Div_lnk.fn_search();};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM070129_onload,this);this.addEventHandler("oninit",this.HRM070129_oninit,this);this.addEventHandler("ontimer",this.HRM070129_ontimer,this);};this.loadIncludeScript("HRM070129.xfdl");this.loadPreloadList();};})();