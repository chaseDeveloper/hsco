﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG040306");this.set_classname("BDG040306");this.set_titletext("예산성질별결산");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_KND\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_disposStacnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("true");_a._setContents("<ColumnInfo><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AM_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEBT_AMT_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DFNNT_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DECSN_AMOUNT_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IRDS_RT_1\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AM_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEBT_AMT_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DFNNT_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DECSN_AMOUNT_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IRDS_RT_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg029",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년도</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","450","0","38","5",null,null,this.div_search);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","450",null,"38","5",null,"0",this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("조회년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BSNS_SE","absolute","218","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static02","absolute","308","5","15",null,null,"5",this.div_search);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bsnsKnd","absolute","323","5","64","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("사업종류");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_bsnsKnd","absolute","387","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_bdg029");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","487","5","15",null,null,"5",this.div_search);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","502","5","38","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute","540","5","195","21",null,null,this.div_search);_a.set_taborder("3");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","735","5","15",null,null,"5",this.div_search);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","750","5","38","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("사업");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","788","5","76","21",null,null,this.div_search);_a.set_taborder("4");this.div_search.addChild(_a.name,_a);_a=new Button("searchBsns","absolute","845","5","21","21",null,null,this.div_search);_a.set_taborder("5");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","866","5","140","21",null,null,this.div_search);_a.set_taborder("6");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelExport","absolute",null,"43","25","19","28",null,this);_a.set_taborder("5");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd_disposStacnt","absolute","0","67",null,null,"28","0",this);_a.set_taborder("7");_a.set_binddataset("ds_disposStacnt");_a.set_cellsizingtype("col");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"예     산     과     목\"/><Cell col=\"3\" colspan=\"4\" text=\"당        년        도\"/><Cell col=\"7\" colspan=\"4\" text=\"전        년        도\"/><Cell col=\"11\" colspan=\"2\" text=\"증      감\"/><Cell row=\"1\" text=\"세항\"/><Cell row=\"1\" col=\"1\" text=\"목\"/><Cell row=\"1\" col=\"2\" text=\"세목\"/><Cell row=\"1\" col=\"3\" text=\"예산액(A)\"/><Cell row=\"1\" col=\"4\" text=\"채무확정액(B)\"/><Cell row=\"1\" col=\"5\" text=\"차액(A-B)\"/><Cell row=\"1\" col=\"6\" text=\"지출액(C)\"/><Cell row=\"1\" col=\"7\" text=\"예산액(D)\"/><Cell row=\"1\" col=\"8\" text=\"채무확정액(E)\"/><Cell row=\"1\" col=\"9\" text=\"차액(D-E)\"/><Cell row=\"1\" col=\"10\" text=\"지출액(F)\"/><Cell row=\"1\" col=\"11\" text=\"( A / D )\"/><Cell row=\"1\" col=\"12\" text=\"( B / E )\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:SEHANG_NM\" tooltiptext=\"bind:SEHANG_NM\"/><Cell col=\"1\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:MOK_NM\" tooltiptext=\"bind:MOK_NM\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:SEMOK_NM\" tooltiptext=\"bind:SEMOK_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:EXECUT_BUDGET_AM_1\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DEBT_AMT_1\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DFNNT_1\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DECSN_AMOUNT_1\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:EXECUT_BUDGET_AM_2\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DEBT_AMT_2\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DFNNT_2\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DECSN_AMOUNT_2\"/><Cell col=\"11\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:IRDS_RT_1\"/><Cell col=\"12\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:IRDS_RT_2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","0","43",null,"19","908",null,this);_a.set_taborder("2");_a.set_text("예산성질별결산");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG040306");_b.set_titletext("예산성질별결산");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.cbo_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cbo_bsnsKnd","value","ds_cond","BSNS_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_BSNS_CODE","value","ds_cond","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.edt_BSNS_NM","value","ds_cond","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("BDG040306.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG040306.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG040306.xfdl",function(){this.BDG040306_oninit=function(_a,_b){};this.BDG040306_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();var _a=this.ds_cond.addRow();var _b=[["ds_bdg001","BDG001","Y","A","B"],["ds_bdg002","BDG002","Y","D","B"],["ds_bdg029","BDG029","Y","A","B"]];var _c=function(_d,_e,_f){this.ds_cond.setColumn(_a,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_a,"BSNS_SE","1");this.ds_cond.setColumn(_a,"BALC_SE","2");this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_disposStacnt.clearData();var _c=this.ds_cond.getColumn(0,"YEAR");var _d=nexacro.toNumber(_c,0);if(_d<2018){this.ds_cond.setColumn(0,"YEAR_SE","1");}else{this.ds_cond.setColumn(0,"YEAR_SE","2");}this.fn_transaction("select");};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/mis/bdg/BDG040306/select.do";var _c="input1=ds_cond";var _d="ds_disposStacnt=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "select":break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="popBsns"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BSNS_CODE");var _f=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(0,"BSNS_CODE",_e);this.ds_cond.setColumn(0,"BSNS_NM",_f);}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_disposStacnt,"Excel File Download");};this.div_search_edt_BSNS_CODE_onchanged=function(_a,_b){var _c=this.div_search.edt_BSNS_CODE.value;if(_c==null||_c==""){this.div_search.edt_BSNS_NM.set_value("");}};this.div_search_searchBsns_onclick=function(_a,_b){var _c=this.div_search.spn_YEAR.value;var _d={arg_0:this,year:_c};this.gfn_popup("popBsns",500,465,"사업코드 선택",_d,"mis_acc::ACC000000_P04.xfdl","fn_popupCallBack",true);};});this.on_initEvent=function(){this.addEventHandler("onload",this.BDG040306_onload,this);this.addEventHandler("oninit",this.BDG040306_oninit,this);this.div_search.edt_BSNS_CODE.addEventHandler("onchanged",this.div_search_edt_BSNS_CODE_onchanged,this);this.div_search.searchBsns.addEventHandler("onclick",this.div_search_searchBsns_onclick,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("BDG040306.xfdl");this.loadPreloadList();};})();