﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL030117");this.set_classname("SAL030117");this.set_titletext("부서별급여내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("8");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new WebBrowser("clipreport","absolute","0","43",null,null,"28","0",this);_a.set_taborder("9");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("10");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","88","26","38","5",null,null,this.div_search);_a.set_taborder("19");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","96","0","38","5",null,null,this.div_search);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","62","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("지급년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_pymntYm","absolute","78","5","85","21",null,null,this.div_search);_a.set_taborder("1");_a.set_async("false");_a.set_url("common::frmSalMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","325","6","62","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("부서코드");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","178","5","62","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("지급번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_sn","absolute","245","5","62","21",null,null,this.div_search);_a.set_taborder("3");_a.set_value("0");_a.set_max("9");_a.set_min("1");_a.set_cssclass("spn_WF_Essential");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_DEPT_CODE","absolute","387","6","118","21",null,null,this.div_search);_a.set_taborder("5");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33","1031","10",null,null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("10");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL030117");_b.set_titletext("부서별급여내역");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_sn","value","ds_cond","SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_DEPT_CODE","value","ds_cond","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmSalMonCal.xfdl");};this.addIncludeScript("SAL030117.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL030117.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL030117.xfdl",function(){this.SAL030117_oninit=function(_a,_b){};this.SAL030117_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_pymntYm.fn_setBind("ds_cond","PYMNT_YM");this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"PYMNT_YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));this.ds_cond.setColumn(0,"SN","1");this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.gfn_ReportOnWBControl(this,this.clipreport,"MIS/SAL/SAL030117_R01.crf",this.ds_cond);};});this.on_initEvent=function(){this.addEventHandler("onload",this.SAL030117_onload,this);this.addEventHandler("oninit",this.SAL030117_oninit,this);};this.loadIncludeScript("SAL030117.xfdl");this.loadPreloadList();};})();