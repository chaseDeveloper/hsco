﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("reportPopup");this.set_classname("reportPopup");this.set_titletext("보고서팝업");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFRIM_BDG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_POSBL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_budgetStats",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BUDGET_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DS_NM\" type=\"STRING\" size=\"10\"/><Column id=\"TOT_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_01_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_02_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BPLC_03_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new WebBrowser("wb_report","absolute","1","-7",null,null,"27","7",this);_a.set_taborder("8");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("reportPopup");_b.set_titletext("보고서팝업");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("reportPopup.xfdl","lib::comInclude.xjs");this.registerScript("reportPopup.xfdl",function(){this.reportPopup_oninit=function(_a,_b){};this.reportPopup_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.ds_print.copyData(this.parent.dsPrint);this.gfn_ReportOnWBControl(this,this.wb_report,this.parent.reportPth,this.ds_print);};this.fn_init_dataset=function(){};});this.on_initEvent=function(){this.ds_budgetStats.addEventHandler("onrowposchanged",this.ds_executBudget_onrowposchanged,this);this.ds_budgetStats.addEventHandler("canrowposchange",this.ds_executBudget_canrowposchange,this);this.addEventHandler("onload",this.reportPopup_onload,this);this.addEventHandler("oninit",this.reportPopup_oninit,this);};this.loadIncludeScript("reportPopup.xfdl");};})();