﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG030511");this.set_classname("BDG030511");this.set_titletext("자본적수입(대행사업수입)");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg003",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_taxitmExcutBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:+BSNS_NM");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ELPD_EXCUT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ORIBDGT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_BUDGET\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CAUSE_ACTION_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEBT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT_ORI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT_CYFD\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEBT_JANAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_JANAMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_session",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_max("9999");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("예산구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BUDGET_SE","absolute","218","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("@ds_bdg003");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","318","5","15",null,null,"5",this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","333","5","38","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute","371","5","179","21",null,null,this.div_search);_a.set_taborder("8");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bdgOutputStdrYear","absolute",null,"5","150","21","7",null,this.div_search);_a.set_taborder("9");_a.set_text("예산서 출력기준년도 설정");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new WebBrowser("clipreport","absolute","0","43",null,null,"28","0",this);_a.set_taborder("7");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG030511");_b.set_titletext("자본적수입(대행사업수입)");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.cbo_BUDGET_SE","value","ds_cond","BUDGET_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("BDG030511.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG030511.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG030511.xfdl",function(){this.BDG030511_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG030511_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.div_search.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.setColumn(_a,"BUDGET_TYPE","1");var _b=[["ds_bdg001","BDG001","Y","D","B"],["ds_bdg002","BDG002","Y","D","B"],["ds_bdg003","BDG003","Y","D","B"]];var _c=function(_d,_e,_f){this.ds_cond.setColumn(_a,"BSNS_SE","2");this.ds_cond.setColumn(_a,"BALC_SE","1");this.ds_cond.setColumn(_a,"BUDGET_SE","0");this.ds_cond.setColumn(_a,"DETAIL_BSNS_CODE","A");this.fn_searchBdgOutputStdrYear();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_searchBdgOutputStdrYear=function(){this.fn_transaction("selectBdgOutputStdrYear");};this.fn_search=function(_a,_b){this.ds_taxitmExcutBudget.clearData();var _c=this.ds_cond.getColumn(0,"BUDGET_SE");if(_c=="0"||_c=="8"||_c=="9"||_c=="A"||_c=="B"){this.gfn_ReportOnWBControl(this,this.clipreport,"BDG/BDG000000.crf",this.ds_cond);}else{this.gfn_ReportOnWBControl(this,this.clipreport,"BDG/BDG000000_RVSPBGT.crf",this.ds_cond);}};this.fn_transaction=function(_a){switch(_a){case "selectBdgOutputStdrYear":var _b="hsco/mis/bdg/BDG030501/selectBdgOutputStdrYear.do";var _c="";var _d="ds_session=output1";break;case "saveBdgOutputStdrYear":var _b="hsco/mis/bdg/BDG030501/saveBdgOutputStdrYear.do";var _c="input1=ds_cond";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectBdgOutputStdrYear":var _d=this.ds_session.getColumn(0,"YEAR");if(!this.comUtils.isNullEmpty(_d)){this.ds_cond.setColumn(0,"YEAR",_d);}else{this.ds_cond.setColumn(0,"YEAR",this.comUtils.getClientDate("YYYY"));}this.fn_search();break;case "saveBdgOutputStdrYear":this.gfn_message("success.처리.성공");break;}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_taxitmExcutBudget,"Excel File Download");};this.div_search_searchBsns_onclick=function(_a,_b){var _c=this.div_search.spn_YEAR.value;var _d={arg_0:this,year:_c};this.gfn_popup("popBsns",800,530,"사업코드 선택",_d,"mis_acc::ACC000000_P04.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){if(_a=="popBsns"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BSNS_CODE");var _f=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(0,"DETAIL_BSNS_CODE",_e);this.ds_cond.setColumn(0,"DETAIL_BSNS_NM",_f);}}};this.div_search_edt_BSNS_CODE_onchanged=function(_a,_b){var _c=this.div_search.edt_BSNS_CODE.value;if(_c==null||_c==""){this.div_search.edt_BSNS_NM.set_value("");}};this.div_search_btn_bdgOutputStdrYear_onclick=function(_a,_b){if(this.gfn_message("comm.행위여부","현재 설정된 예산년도를 예산출력기준년도로 설정합니다.\n진행")){this.fn_transaction("saveBdgOutputStdrYear");}};});this.on_initEvent=function(){this.ds_taxitmExcutBudget.addEventHandler("onrowposchanged",this.ds_executBudget_onrowposchanged,this);this.ds_taxitmExcutBudget.addEventHandler("canrowposchange",this.ds_executBudget_canrowposchange,this);this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.BDG030511_onload,this);this.addEventHandler("oninit",this.BDG030511_oninit,this);this.div_search.btn_bdgOutputStdrYear.addEventHandler("onclick",this.div_search_btn_bdgOutputStdrYear_onclick,this);};this.loadIncludeScript("BDG030511.xfdl");this.loadPreloadList();};})();