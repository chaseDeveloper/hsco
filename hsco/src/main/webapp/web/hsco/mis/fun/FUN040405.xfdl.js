﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN040405");this.set_classname("FUN040405");this.set_titletext("일자별수입내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg017",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_deIncmeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_deIncmeDetailList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SDATE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"msgId\">조회 시작일</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">EDATE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">조회 종료일</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SDATE</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\"/><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">SDATE</Col><Col id=\"to\">EDATE</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">조회 시작일^조회 종료일</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_padding("0 0 0 0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","2","15","34",null,null,this.div_search);_a.set_taborder("138");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","9","0","1000","5",null,null,this.div_search);_a.set_taborder("139");_a.set_text("9");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","74","2","5","34",null,null,this.div_search);_a.set_taborder("140");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static09","absolute","9","32","1000","9",null,null,this.div_search);_a.set_taborder("141");_a.set_text("9");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE","absolute","15","5","77","21",null,null,this.div_search);_a.set_taborder("142");_a.set_text("기준일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_sDate","absolute","79","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static02","absolute","181","5","13","21",null,null,this.div_search);_a.set_taborder("144");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_eDate","absolute","196","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static04","absolute","296","2","15","34",null,null,this.div_search);_a.set_taborder("146");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","350","5","195","21",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BUDGET_SE00","absolute","566","5","64","21",null,null,this.div_search);_a.set_taborder("147");_a.set_text("사업지구");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bsnsAreaCode","absolute","637","5","104","21",null,null,this.div_search);_a.set_taborder("148");_a.set_imemode("alpha");_a.set_inputmode("upper");_a.set_inputtype("number,english,alpha");_a.set_lengthunit("utf8");_a.set_maxlength("7");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bsnsCode","absolute","722","5","21","21",null,null,this.div_search);_a.set_taborder("149");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","743","5","218","21",null,null,this.div_search);_a.set_taborder("150");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Button("btn_excelDn00","absolute",null,"43","25","19","28",null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_deIncmeList","absolute","0","67",null,null,"28","385",this);_a.set_taborder("3");_a.set_binddataset("ds_deIncmeList");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" colspan=\"2\" text=\"계정구분\"/><Cell col=\"3\" colspan=\"2\" text=\"계정과목\"/><Cell col=\"5\" text=\"실적금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:MDAT_DE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:ACCT_CLASS_CODE\"/><Cell col=\"2\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:ACCT_CLASS_NAME\"/><Cell col=\"3\" text=\"bind:BUDGET_ACNT_CODE\"/><Cell col=\"4\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ANACT_AMOUNT\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계:\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ANACT_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","312","6","38","21",null,null,this);_a.set_taborder("9");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","350","1031","10",null,null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","379","1031","5",null,null,this);_a.set_taborder("11");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_deIncmeDetailList","absolute","0",null,null,"351","28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_deIncmeDetailList");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"47\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" colspan=\"2\" text=\"계정구분\"/><Cell col=\"4\" colspan=\"2\" text=\"계정과목\"/><Cell col=\"6\" colspan=\"2\" text=\"지출단위\"/><Cell col=\"8\" text=\"사업지구\"/><Cell col=\"9\" text=\"실적금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:MDAT_DE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:ACCT_CLASS_CODE\"/><Cell col=\"3\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:ACCT_CLASS_NAME\"/><Cell col=\"4\" text=\"bind:BUDGET_ACNT_CODE\"/><Cell col=\"5\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"6\" text=\"bind:EXPNDTR_UNIT_CODE\"/><Cell col=\"7\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:EXPNDTR_UNIT_NM\"/><Cell col=\"8\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BSNS_NM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:ANACT_AMOUNT\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"합계:\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ANACT_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","41","120","22",null,null,this);_a.set_taborder("1");_a.set_text("일자별 집계내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0",null,"145","22",null,"355",this);_a.set_taborder("4");_a.set_text("일자별 상세집계내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Button("btn_excelDn01","absolute",null,null,"25","19","28","356",this);_a.set_taborder("5");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_padding("0 0 0 0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FUN040405");_b.set_titletext("일자별수입내역");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.cal_sDate","value","ds_cond","SDATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_eDate","value","ds_cond","EDATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item90","div_search.edt_bsnsAreaCode","value","ds_cond","DETAIL_BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_search.edt_BSNS_NM","value","ds_cond","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FUN040405.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN040405.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN040405.xfdl",function(){this.FUN040405_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN040405_onload=function(_a,_b){this.ds_cond.setColumn(0,"SDATE",this.dateUtils.addDate(this.dateUtils.today(), -7,"s"));this.ds_cond.setColumn(0,"EDATE",this.dateUtils.today());this.ds_cond.setColumn(0,"DEPT_CODE","000000");this.ds_cond.setColumn(0,"DEPT_NM","화성도시공사");this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_deIncmeList.clearData();this.ds_cond01.setColumn(0,"DEPT_CODE",this.ds_cond.getColumn(0,"DEPT_CODE"));this.fn_transaction("selectDeIncmeList");};this.fn_searchDetailList=function(){this.ds_deIncmeDetailList.clearData();var _a=this.ds_deIncmeList.rowposition;this.ds_cond01.setColumn(0,"BUDGET_ACNT_CODE",this.ds_deIncmeList.getColumn(_a,"BUDGET_ACNT_CODE"));this.ds_cond01.setColumn(0,"MDAT_DE",this.ds_deIncmeList.getColumn(_a,"MDAT_DE"));this.fn_transaction("selectDeIncmeDetailList");};this.fn_transaction=function(_a){switch(_a){case "selectDeIncmeList":var _b="hsco/mis/fun/FUN040405/selectDeIncmeList.do";var _c="input1=ds_cond";var _d="ds_deIncmeList=output1";break;case "selectDeIncmeDetailList":var _b="hsco/mis/fun/FUN040405/selectDeIncmeDetailList.do";var _c="input1=ds_cond01";var _d="ds_deIncmeDetailList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){trace(_a);if(_b!=0){}else{switch(_a){case "selectDeIncmeList":break;case "selectDeIncmeDetailList":break;}}this.gfn_callback_message(_a,_b,_c);};this.fn_PopupCallback=function(_a,_b){if(_a=="popBsns"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=this.ds_cond.rowposition;var _f=_c.getColumn(0,"BSNS_CODE");var _g=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(_e,"DETAIL_BSNS_CODE",_f);this.ds_cond.setColumn(_e,"BSNS_NM",_g);}}};this.ds_deIncmeList_onrowposchanged=function(_a,_b){this.fn_searchDetailList();};this.btn_excelDn_onclick=function(_a,_b){if(_a.name=="btn_excelDn00"){this.gfn_exportExcel(this.grd_deIncmeList,"exportExl");}if(_a.name=="btn_excelDn01"){this.gfn_exportExcel(this.grd_deIncmeDetailList,"exportExl");}};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setReportPath("/common/hscoLandscapeA4.jrf");_a.setSaveFilename("일자별수입내역"+"_"+this.dateUtils.today());_a.setArgs("title","일자별수입내역");_a.clearLocalDs();_a.setGrid(this.grd_resultList);var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"일자별수입내역",_b,"common::frmReportPopup.xfdl","report_callback");};this.div_search_btn_bsnsCode_onclick=function(_a,_b){var _c={BSNS_GB:1};this.gfn_popup("popBsns",500,500,"사업코드 선택",_c,"pms_prj::popBsns.xfdl","fn_PopupCallback",true);};this.div_search_edt_bsnsAreaCode_onchanged=function(_a,_b){if(this.comUtils.isNull(_b.postvalue)){this.div_search.edt_bsnsAreaCode.set_value("");this.div_search.edt_BSNS_NM.set_value("");}};});this.on_initEvent=function(){this.ds_deIncmeList.addEventHandler("onrowposchanged",this.ds_deIncmeList_onrowposchanged,this);this.addEventHandler("oninit",this.FUN040405_oninit,this);this.addEventHandler("onload",this.FUN040405_onload,this);this.div_search.edt_bsnsAreaCode.addEventHandler("onchanged",this.div_search_edt_bsnsAreaCode_onchanged,this);this.div_search.btn_bsnsCode.addEventHandler("onclick",this.div_search_btn_bsnsCode_onclick,this);this.div_search.edt_BSNS_NM.addEventHandler("onkeyup",this.edt_BSNS_NM_onkeyup,this);this.btn_excelDn00.addEventHandler("onclick",this.btn_excelDn_onclick,this);this.btn_excelDn01.addEventHandler("onclick",this.btn_excelDn_onclick,this);};this.loadIncludeScript("FUN040405.xfdl");this.loadPreloadList();};})();