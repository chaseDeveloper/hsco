﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_P04");this.set_classname("CTR030100_P04");this.set_titletext("보증선택");this._setFormPosition(0,0,700,400);}_a=new Dataset("ds_cond_pop",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctAssrncDtls",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PBLICTE_DE\" type=\"STRING\" size=\"8\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ASSRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSRNC_BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"INSRNC_ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"ICNY_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SPCABL_MATTER\" type=\"STRING\" size=\"1000\"/><Column id=\"CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNTRCT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_flawAssrncDtls",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FLAW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRTGG_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNST_ACCTO_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FLAW_ASSRNC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ASSRNC_BEGIN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSRNC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr004",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prj021",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_entrpsAcctoSubcntrCnt","absolute","15","423",null,null,"15","-104",this);_a.set_taborder("57");_a.set_binddataset("ds_flawAssrncDtls");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"73\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"업체\"/><Cell col=\"2\" text=\"공종\"/><Cell col=\"3\" text=\"담보년수\"/><Cell col=\"4\" text=\"공종별금액\"/><Cell col=\"5\" text=\"하자보증금액\"/><Cell col=\"6\" text=\"보증시작일\"/><Cell col=\"7\" text=\"보증만료일\"/><Cell col=\"8\" colspan=\"2\" text=\"검사부서\"/></Band><Band id=\"body\"><Cell text=\"bind:BCNC_CODE\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:BCNC_NM\"/><Cell col=\"2\" text=\"bind:CNST_NM\"/><Cell col=\"3\" text=\"bind:MRTGG_YYCNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CNST_ACCTO_AMOUNT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:FLAW_ASSRNC_AMOUNT\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:ASSRNC_BEGIN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:ASSRNC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" style=\"align: ;\" text=\"bind:PRSEC_DEPT_CODE\"/><Cell col=\"9\" style=\"align:left middle;\" text=\"bind:PRSEC_DEPT_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","16","104",null,"5","16",null,this);_a.set_taborder("60");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("61");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("62");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("65");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","67",null,this);_a.set_taborder("66");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("67");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("68");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"59","15",null,this);_a.set_taborder("69");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","79","5","75","21",null,null,this.div_search);_a.set_taborder("170");_a.set_readonly("true");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("171");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","230","0",null,"5","275",null,this.div_search);_a.set_taborder("172");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","230",null,null,"5","275","0",this.div_search);_a.set_taborder("174");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CNTRCT_NO","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("178");_a.set_text("계약번호");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCT_NM","absolute","196","31","457","21",null,null,this.div_search);_a.set_taborder("180");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","156","5","497","21",null,null,this.div_search);_a.set_taborder("183");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("185");_a.set_text("사     업");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_CNTRCT_NO","absolute","79","31","115","21",null,null,this.div_search);_a.set_taborder("189");_a.set_readonly("true");_a.set_type("string");_a.set_mask("####-###-###");_a.set_maskchar(" ");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","230","26",null,"5","275",null,this.div_search);_a.set_taborder("190");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_entrpsAcctoCntrctDtls","absolute","15","519",null,null,"15","-200",this);_a.set_taborder("70");_a.set_binddataset("ds_cntrctAssrncDtls");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"업체\"/><Cell col=\"2\" text=\"보증채권자\"/><Cell col=\"3\" text=\"공종\"/><Cell col=\"4\" text=\"발행일자\"/><Cell col=\"5\" text=\"하자업체계약금액\"/><Cell col=\"6\" text=\"하자보증금액\"/><Cell col=\"7\" text=\"보증시작일\"/><Cell col=\"8\" text=\"보증만료일\"/><Cell col=\"9\" text=\"보증사명\"/><Cell col=\"10\" text=\"보증만료구분\"/><Cell col=\"11\" colspan=\"2\" text=\"보증만료처리자\"/><Cell col=\"13\" text=\"보험만료처리일\"/><Cell col=\"14\" text=\"보증책임시작일\"/><Cell col=\"15\" text=\"보증책임마감일\"/><Cell col=\"16\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:BCNC_CODE\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:BCNC_NM\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:ASSRNC_CRDTR\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:CNST_CODE\" combodataset=\"ds_prj021\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:PBLICTE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:FLAW_ENTRPS_CNTRCT_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:FLAW_ASSRNC_AMOUNT\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:ASSRNC_BEGIN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:ASSRNC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:ASSRNC_PROFS_NM\"/><Cell col=\"10\" text=\"bind:INSRNC_END_SE\"/><Cell col=\"11\" text=\"bind:INSRNC_END_OPETR_EMPNO\"/><Cell col=\"12\" text=\"bind:INSRNC_END_OPETR_EMPNM\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:INSRNC_END_PROCESS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:ASSRNC_RSPNSBL_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:ASSRNC_RSPNSBL_CLOS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" style=\"align:left middle;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("69");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",700,400,this,function(_b){_b.set_classname("CTR030100_P04");_b.set_titletext("보증선택");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.msk_CNTRCT_NO","value","ds_cond_pop","CNTRCT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_BSNS_CODE","value","ds_cond_pop","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_CNTRCT_NM","value","ds_cond_pop","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_BSNS_NM","value","ds_cond_pop","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CTR030100_P04.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030100_P04.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030100_P04.xfdl",function(){var _a="";this.CTR030100_P04_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_P04_onload=function(_b,_c){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);_a=this.parent.popMode;if(_a=="계약보증"){this.grd_entrpsAcctoCntrctDtls.set_top(109);this.grd_entrpsAcctoCntrctDtls.set_bottom(0);this.grd_entrpsAcctoCntrctDtls.set_visible(true);}else if(_a=="하자보증"){this.grd_entrpsAcctoSubcntrCnt.set_top(109);this.grd_entrpsAcctoSubcntrCnt.set_bottom(0);this.grd_entrpsAcctoSubcntrCnt.set_visible(true);}this.ds_cond_pop.clearData();var _b=this.ds_cond_pop.addRow();this.ds_cond_pop.setColumn(_b,"BSNS_CODE",this.parent.bsnsCode);this.ds_cond_pop.setColumn(_b,"BSNS_NM",this.parent.bsnsNm);this.ds_cond_pop.setColumn(_b,"CNTRCT_NO",this.parent.cntrctNo);this.ds_cond_pop.setColumn(_b,"CNTRCT_NM",this.parent.cntrctNm);var _c=[["ds_ctr004","CTR004","Y","D","B"],["ds_prj021","PRJ021","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_cntrctAssrncDtls.clearData();this.ds_flawAssrncDtls.clearData();this.fn_transaction("select");};this.fn_transaction=function(_b){switch(_b){case "select":var _c="/hsco/mis/ctr/CTR030100_P04/select.do";var _d="input1=ds_cond_pop";var _e="ds_cntrctAssrncDtls=output1 ds_flawAssrncDtls=output2";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "select":break;}}};this.grd_entrpsAcctoSubcntrCnt_oncelldblclick=function(_b,_c){var _d=new Dataset();if(_a=="계약보증"){_d.copyData(this.ds_cntrctAssrncDtls);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_cntrctAssrncDtls,this.ds_cntrctAssrncDtls.rowposition);}else if(_a=="하자보증"){_d.copyData(this.ds_flawAssrncDtls);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_flawAssrncDtls,this.ds_flawAssrncDtls.rowposition);}this.close(_d.saveXML());};this.btn_Search_onclick=function(_b,_c){this.fn_search();};this.btn_Close_onclick=function(_b,_c){this.close();};});this.on_initEvent=function(){this.addEventHandler("onload",this.CTR030100_P04_onload,this);this.addEventHandler("oninit",this.CTR030100_P04_oninit,this);this.grd_entrpsAcctoSubcntrCnt.addEventHandler("oncelldblclick",this.grd_entrpsAcctoSubcntrCnt_oncelldblclick,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.grd_entrpsAcctoCntrctDtls.addEventHandler("oncelldblclick",this.grd_entrpsAcctoSubcntrCnt_oncelldblclick,this);};this.loadIncludeScript("CTR030100_P04.xfdl");};})();