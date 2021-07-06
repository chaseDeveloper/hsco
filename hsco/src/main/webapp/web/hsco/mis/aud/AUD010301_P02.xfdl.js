﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD010301_P02");this.set_classname("AUD010301_P02");this.set_titletext("계약심사선택");this._setFormPosition(0,0,1011,600);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctJdgmn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_JDGMN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_JDGMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_WCT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_TRGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTSET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQESTER_EMPL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQESTER_EMPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"1500\"/><Column id=\"ADTOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_RESULT_DTLS\" type=\"STRING\" size=\"1500\"/><Column id=\"REDCN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OFLDC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_FILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">REQST_BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">REQST_ENDDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">REQST_ENDDE</Col><Col id=\"from\">REQST_BGNDE</Col><Col id=\"msgId\">요청종료일자^요청시작일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud015",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","1011","600",null,null,this);_a.set_taborder("3");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_SearchArea","absolute","17","47",null,"33","17",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","129",null,"7","20",null,this.div_SearchArea);_a.set_taborder("8");_a.set_text("7");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","15",null,"0","0",this.div_SearchArea);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_year","absolute","15","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("16");_a.set_text("요청일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Calendar("cal_rceptBgnDe","absolute","79","5","100","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("17");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static02","absolute","184","5","10","21",null,null,this.div_SearchArea);_a.set_taborder("18");_a.set_text("~");this.div_SearchArea.addChild(_a.name,_a);_a=new Calendar("cal_rceptEndDe","absolute","199","5","100","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("19");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_DEPT_CODE","absolute","314","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("20");_a.set_text("담당부서");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Div("div_dept","absolute","378","5","200","22",null,null,this.div_SearchArea);_a.set_taborder("21");_a.set_cssclass("edt_WF_Readonly");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_insttAcctoCl00","absolute","593","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("22");_a.set_text("계약분류");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_EDAY_AUDIT_NM","absolute","772","5","38","21",null,null,this.div_SearchArea);_a.set_taborder("24");_a.set_text("건명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Edit("edt_EDAY_AUDIT_NM","absolute","810","5","150","21",null,null,this.div_SearchArea);_a.set_taborder("25");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static00","absolute","299","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("26");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static03","absolute","578","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("27");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static04","absolute","757","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("28");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_INSTT_ACCTO_CL","absolute","657","5","100","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("29");_a.set_innerdataset("@ds_aud015");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Button("btn_Close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("2");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"17","50","25","70",null,this);_a.set_taborder("1");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","17","90",null,null,"17","14",this);_a.set_taborder("5");this.addChild(_a.name,_a);_a=new Grid("grd_AUDIT_TABLE","absolute","0","24",null,null,"0","0",this.div_Cont);_a.set_taborder("1");_a.set_binddataset("ds_cntrctJdgmn");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"심사번호\"/><Cell col=\"1\" text=\"요청일자\"/><Cell col=\"2\" text=\"사업명\"/><Cell col=\"3\" text=\"담당부서\"/><Cell col=\"4\" text=\"종류\"/><Cell col=\"5\" text=\"건명\"/><Cell col=\"6\" text=\"총사업비\"/><Cell col=\"7\" text=\"심사대상액\"/><Cell col=\"8\" text=\"착수일자\"/><Cell col=\"9\" text=\"준공일자\"/><Cell col=\"10\" text=\"문서번호\"/><Cell col=\"11\" text=\"심사금액\"/><Cell col=\"12\" text=\"절감금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CNTRCT_JDGMN_NO\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:REQUST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BSNS_NM2\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:REQUST_DEPT_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:CNTRCT_KND\" combodataset=\"ds_aud015\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:CNTRCT_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:TOT_WCT\" mask=\"###,###,###,###,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:AUDIT_TRGET_AMOUNT\" mask=\"###,###,###,###,###\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:OUTSET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:OFLDC_NO\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:AUDIT_AMOUNT\" mask=\"###,###,###,###,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:REDCN_AMOUNT\" mask=\"###,###,###,###,###\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN","absolute","0","0","100","19",null,null,this.div_Cont);_a.set_taborder("0");_a.set_text("계약심사목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","19",null,"5","0",null,this.div_Cont);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_Cont.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN","absolute","17","20","120","19",null,null,this);_a.set_taborder("6");_a.set_text("계약심사선택");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","2",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","123",null,this);_a.set_taborder("0");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","32","15","496",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"16","15","496","2",null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","42","770","5",null,null,this);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","0","80",null,"10","0",null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",766,59,this.div_SearchArea,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_SearchArea.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont,function(_b){_b.set_taborder("5");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",1011,600,this,function(_b){_b.set_classname("AUD010301_P02");_b.set_titletext("계약심사선택");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.cal_rceptBgnDe","value","ds_cond","REQST_BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item26","div_SearchArea.cal_rceptEndDe","value","ds_cond","REQST_ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_SearchArea.edt_EDAY_AUDIT_NM","value","ds_cond","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SearchArea.cmb_INSTT_ACCTO_CL","value","ds_cond","CNTRCT_KND");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("AUD010301_P02.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD010301_P02.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD010301_P02.xfdl",function(){this.chargerAt=false;this.AUD010301_P02_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.AUD010301_P02_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"REQST_BGNDE",this.gfn_today().substring(0,4)+'0101');this.ds_cond.setColumn(0,"REQST_ENDDE",this.gfn_today());this.div_SearchArea.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _a=[["ds_aud015","AUD015","Y","A","B"]];var _b=function(_c,_d,_e){this.ds_aud015.filter("CODE > 20 && CODE < 30 || CODE == ''");if(this.chargerAt){this.div_SearchArea.div_dept.set_enable(true);}else{this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());}this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_cntrctJdgmn.clearData();this.fn_transaction("selectCntrctJdgmnList");};this.fn_init=function(){};this.fn_transaction=function(_a){switch(_a){case "selectCntrctJdgmnList":var _b="/hsco/mis/aud/AUD010301/selectCntrctJdgmnList.do";var _c="input1=ds_cond";var _d="ds_cntrctJdgmn=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectCntrctJdgmnList":break;}}};this.div_Cont_grd_AUDIT_TABLE_oncelldblclick=function(_a,_b){var _c=this.ds_cntrctJdgmn.rowposition;var _d=new Dataset();_d.copyData(this.ds_cntrctJdgmn);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_cntrctJdgmn,_c);this.close(_d.saveXML());};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){var _c=this.ds_cntrctJdgmn.rowposition;var _d=new Dataset();_d.copyData(this.ds_cntrctJdgmn);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_cntrctJdgmn,_c);this.close(_d.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD010301_P02_onload,this);this.addEventHandler("oninit",this.AUD010301_P02_oninit,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.div_Cont.grd_AUDIT_TABLE.addEventHandler("oncelldblclick",this.div_Cont_grd_AUDIT_TABLE_oncelldblclick,this);this.div_Cont.sta_AUDIT_PLAN.addEventHandler("onclick",this.Static00_onclick,this);this.sta_AUDIT_PLAN.addEventHandler("onclick",this.Static00_onclick,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);};this.loadIncludeScript("AUD010301_P02.xfdl");this.loadPreloadList();};})();