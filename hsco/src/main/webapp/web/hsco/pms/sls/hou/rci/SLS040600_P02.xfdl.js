﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS040600_P02");this.set_classname("SLS040600_P02");this.set_titletext("임대예산매핑 팝업");this._setFormPosition(0,0,733,482);}_a=new Dataset("ds_budgetAcntRentMapng",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("0");_a.set_text("예산매핑");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","692","9","20","20",null,null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","53","205","21",null,null,this);_a.set_taborder("5");_a.set_text("예산매핑");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute","566","51","49","25",null,null,this);_a.set_taborder("7");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_confirm","absolute","617","51","49","25",null,null,this);_a.set_taborder("8");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","668","51","50","25",null,null,this);_a.set_taborder("9");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81",null,"33","15",null,this);_a.set_taborder("10");_a.style.set_background("#f9fbffff");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","14","5","64","21",null,null,this.div_search);_a.set_taborder("38");_a.set_text("예산년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_BUDGET_YEAR","absolute","78","5","70","21",null,null,this.div_search);_a.set_taborder("39");_a.set_value("0");_a.set_min("1900");_a.set_max("2099");this.div_search.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","114",null,"368","15",null,this);_a.set_taborder("11");_a.style.set_background("white");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","0",null,"10","0",null,this.div_WORK);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static38","absolute","0","10","130","21",null,null,this.div_WORK);_a.set_taborder("11");_a.set_text("예산매핑");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static18","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","358",null,"10","0",null,this.div_WORK);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_budgetAcntRentMapngList","absolute","0%","36",null,null,"0%","10",this.div_WORK);_a.set_taborder("16");_a.set_binddataset("ds_budgetAcntRentMapng");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"사업구분\"/><Cell col=\"2\" text=\"예산계정\"/><Cell col=\"3\" text=\"지출단위\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:NM\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:BSNS_NM\"/><Cell col=\"2\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"3\" text=\"bind:EXPNDTR_UNIT_NM\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("10");_b.style.set_background("#f9fbffff");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,368,this.div_WORK,function(_b){_b.set_taborder("11");_b.style.set_background("white");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",733,482,this,function(_b){_b.set_classname("SLS040600_P02");_b.set_titletext("임대예산매핑 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.spn_BUDGET_YEAR","value","ds_cond00","BUDGET_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.registerScript("SLS040600_P02.xfdl",function(){this.fv_objForm;this.SLS040600_P02_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS040600_P02_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_cond00.copyData(this.parent.arg_1);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){};this.btn_search_onclick=function(_a,_b){this.ds_budgetAcntRentMapng.clearData();this.fn_transaction("budgetAcntRentMapngList");};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_confirm_onclick=function(_a,_b){this.div_WORK_grd_budgetAcntRentMapngList_oncelldblclick();};this.div_WORK_grd_budgetAcntRentMapngList_oncelldblclick=function(_a,_b){this.fv_objForm.ds_decsnList.copyRow(this.fv_objForm.ds_decsnList.rowposition,this.ds_budgetAcntRentMapng,this.ds_budgetAcntRentMapng.rowposition,'BSNS_SE_NM=BSNS_NM,'+'BUDGET_ACNT_NM=BUDGET_ACNT_NM,'+'EXPNDTR_UNIT_NM=EXPNDTR_UNIT_NM,'+'BUDGET_ACNT_CODE=BUDGET_ACNT_CODE,'+'EXPNDTR_UNIT_CODE=EXPNDTR_UNIT_CODE,'+'BSNS_SE=BSNS_SE,'+'BALC_SE=BALC_SE,'+'BUDGET_YEAR=BUDGET_YEAR,'+'DEPT_CODE=DEPT_CODE,');this.close();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "budgetAcntRentMapngList":var _c="hsco/pms/sls/hou/SLS040600/budgetAcntRentMapngList.do";var _d="input1=ds_cond00";var _e="ds_budgetAcntRentMapng=output1";break;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.debug(this.ds_budgetAcntRentMapng,true);this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS040600_P02_oninit,this);this.addEventHandler("onload",this.SLS040600_P02_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);this.div_WORK.grd_budgetAcntRentMapngList.addEventHandler("oncelldblclick",this.div_WORK_grd_budgetAcntRentMapngList_oncelldblclick,this);};this.loadIncludeScript("SLS040600_P02.xfdl");};})();