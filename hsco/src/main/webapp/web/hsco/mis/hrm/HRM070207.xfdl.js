﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070207");this.set_classname("HRM070207");this.set_titletext("관내출장신청");this._setFormPosition(0,0,1059,735);}_a=new Div("div_lnk","absolute","0","0",null,null,"0","0",this);_a.set_taborder("0");_a.set_visible("false");_a.set_url("mis_hrm::HRM070202.xfdl");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070207");_b.set_titletext("관내출장신청");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","mis_hrm::HRM070202.xfdl");};this.addIncludeScript("HRM070207.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070207.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070207.xfdl",function(){this.isLoad=false;this.HRM070207_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM070207_onload=function(_a,_b){this.setTimer(0,500);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.HRM070207_ontimer=function(_a,_b){if(this.isLoad==false&&this.div_lnk.ds_cond.getRowCount()>0){this.div_lnk.set_visible(true);this.isLoad=true;this.killTimer(0);this.div_lnk.whthrcAt="1";this.div_lnk.ds_cond.setColumn(0,"WHTHRC_AT","1");this.div_lnk.grd_indvdl.setFormat("whthrc");this.parent.parent.set_enableevent(false);this.div_lnk.tab_bsrp.removeTabpage(0);this.parent.parent.set_enableevent(true);this.div_lnk.sta_bsrpDtls01.set_text("개인별 관내출장내역");this.fn_search();}};this.fn_init_dataset=function(){};this.fn_search=function(){this.div_lnk.fn_search();};this.fn_save=function(){this.div_lnk.fn_save();};this.fn_insert=function(){this.div_lnk.fn_insert();};this.fn_delete=function(){this.div_lnk.fn_delete();};this.fn_cancel=function(){this.div_lnk.fn_cancel();};this.fn_sanction=function(){this.div_lnk.fn_sanction();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.HRM070207_oninit,this);this.addEventHandler("onload",this.HRM070207_onload,this);this.addEventHandler("ontimer",this.HRM070207_ontimer,this);};this.loadIncludeScript("HRM070207.xfdl");this.loadPreloadList();};})();