﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD020106");this.set_classname("AUD020106");this.set_titletext("예산모니터링");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_budgetList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ORIBDGT\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_JANAMT\" type=\"STRING\" size=\"256\"/><Column id=\"RVSPBGT_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_dept","absolute","179","5","50","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("부서명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_year","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("회계년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","84","5","80","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","449","5","64","22",null,null,this.div_search);_a.set_taborder("5");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbm_BSNS_SE","absolute","518","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_BALC_SE","absolute","633","5","77","22",null,null,this.div_search);_a.set_taborder("7");_a.set_text("수/지구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_BALC_SE","absolute","715","5","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_innerdataset("ds_bdg002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a=new Div("div_dept","absolute","234","5","200","22",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_budgetList","absolute","0","34",null,null,"0","10",this.div_work);_a.set_taborder("4");_a.set_autoenter("select");_a.set_autofittype("none");_a.set_binddataset("ds_budgetList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"4\" text=\"계정\"/><Cell col=\"5\" colspan=\"7\" text=\"예산\"/><Cell row=\"1\" col=\"1\" text=\"사업\"/><Cell row=\"1\" col=\"2\" text=\"부서\"/><Cell row=\"1\" col=\"3\" text=\"예산계정\"/><Cell row=\"1\" col=\"4\" text=\"지출단위\"/><Cell row=\"1\" col=\"5\" text=\"총액\"/><Cell row=\"1\" col=\"6\" text=\"본예산\"/><Cell row=\"1\" col=\"7\" text=\"추경예산\"/><Cell row=\"1\" col=\"8\" text=\"이월액\"/><Cell row=\"1\" col=\"9\" text=\"이동액\"/><Cell row=\"1\" col=\"10\" text=\"수입 및 집행총액\"/><Cell row=\"1\" col=\"11\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BSNS_NM\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM\" suppress=\"2\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BUDGET_ACNT_NM\" suppress=\"3\" suppressalign=\"first\"/><Cell col=\"4\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EXPNDTR_UNIT_NM\" suppress=\"4\" suppressalign=\"first\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:EXECUT_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:ORIBDGT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:RVSPBGT_ODR\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CYFD_BUDGET\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:MVMN_AM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DECSN_JANAMT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AUDIT_TABLE","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("2");_a.set_text("예산집행목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"10","25","19","0",null,this.div_work);_a.set_taborder("0");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("1");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("AUD020106");_b.set_titletext("예산모니터링");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cbm_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.rdo_BALC_SE","value","ds_cond","BALC_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("AUD020106.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD020106.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD020106.xfdl",function(){this.checkDs=[this.ds_budgetList];this.AUD020106_oninit=function(_a,_b){};this.AUD020106_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.div_search.spn_year.set_value(this.gfn_today().substring(0,4));this.ds_cond.setColumn(0,"ALL",1);this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _a=[["ds_bdg001","BDG001","Y","D","B"],["ds_bdg002","BDG002","Y","D","B"]];var _b=function(_c,_d,_e){this.ds_cond.setColumn(0,"BSNS_SE","1");this.ds_cond.setColumn(0,"BALC_SE","2");this.div_search.spn_year.setFocus(true);this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.fn_transaction("selectBudgetList");};this.fn_transaction=function(_a){switch(_a){case "selectBudgetList":var _b="hsco/mis/aud/AUD020106/selectBudgetList.do";var _c="input01=ds_cond";var _d="ds_budgetList=output01";break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}};this.div_work_grd_budgetList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_work_btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grd_budgetList,"budgetList");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.AUD020106_oninit,this);this.addEventHandler("onload",this.AUD020106_onload,this);this.div_work.grd_budgetList.addEventHandler("onheadclick",this.div_work_grd_budgetList_onheadclick,this);this.div_work.sta_AUDIT_TABLE.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.btn_excelDn.addEventHandler("onclick",this.div_work_btn_excelDn_onclick,this);};this.loadIncludeScript("AUD020106.xfdl");this.loadPreloadList();};})();