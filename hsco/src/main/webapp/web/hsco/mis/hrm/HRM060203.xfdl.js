﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060203");this.set_classname("HRM060203");this.set_titletext("경력평정집계관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curOdrInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_jssfcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_clsfSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("false");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_crevalSmList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_DEVA_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"BA_HFFC_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"BA_LMTT_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"BA_APPL_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"EX_HFFC_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"EX_LMTT_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"EX_APPL_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCESS_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DD\" type=\"STRING\" size=\"256\"/><Column id=\"SIMILR_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_ADDPNT\" type=\"STRING\" size=\"256\"/><Column id=\"RWARD_ADDPNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_ADDPNT\" type=\"STRING\" size=\"256\"/><Column id=\"DSCPL_DMRTR\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEVA_ALLOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCESS_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"SIMILR_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_ADDPNT\" type=\"STRING\" size=\"256\"/><Column id=\"RWARD_ADDPNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_ADDPNT\" type=\"STRING\" size=\"256\"/><Column id=\"DSCPL_DMRTR\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_DEVA_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVA_ALLOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HFFC_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"UPLMT_SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EX_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EX_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EX_JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EX_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EX_END_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print05",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"WRKPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print04",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EX_HFFC_MONTH_CO\" type=\"STRING\" size=\"256\"/><Column id=\"EX_UNIT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"EX_EXCESS_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"UPLMT_SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print06",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SI_APP_DD\" type=\"STRING\" size=\"256\"/><Column id=\"SI_UNIT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"SI_SIMILR_CAREER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"UPLMT_SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print07",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EDC_CRSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"CALC_SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print08",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_ALLOT\" type=\"STRING\" size=\"256\"/><Column id=\"CRTFC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_ADDPNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print09",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RWARD_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PBLEN_SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"RWARD_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RWARD_GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print10",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"WNPZ_GRAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"WNPZ_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("161");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear","absolute","15","6","64","19",null,null,this.div_search);_a.set_taborder("0");_a.set_text("평정년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear00","absolute","184","6","38","19",null,null,this.div_search);_a.set_taborder("2");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","222","6","90","19",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_enableevent("true");_a=new Combo("cmb_clsfSe","absolute","508","6","90","19",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_innerdataset("ds_clsfSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enableevent("true");_a=new Static("sta_stdrYear02","absolute","470","6","38","19",null,null,this.div_search);_a.set_taborder("6");_a.set_text("직급");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","79","6","90","19",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("2050");_a.set_min("1990");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear01","absolute","327","6","38","19",null,null,this.div_search);_a.set_taborder("4");_a.set_text("직종");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_jssfcSe","absolute","365","6","90","19",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("ds_jssfcSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enableevent("true");_a=new Div("div_deptCode","absolute","677","6","195","20",null,null,this.div_search);_a.set_taborder("9");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","613","6","64","19",null,null,this.div_search);_a.set_taborder("8");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"0","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","1","1","82","19",null,null,this.div_work);_a.set_taborder("0");_a.set_text("평정결과");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","19","1032","5",null,null,this.div_work);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_perevaSm","absolute",null,"0","89","19","163",null,this.div_work);_a.set_taborder("1");_a.set_text("기초자료생성");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_perevaSm00","absolute",null,"0","65","19","96",null,this.div_work);_a.set_taborder("2");_a.set_text("평정집계");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","24",null,null,"28","0",this.div_work);_a.set_taborder("4");_a.set_autofittype("col");_a.set_autoenter("select");_a.set_binddataset("ds_crevalSmList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"27\"/><Column size=\"107\"/><Column size=\"28\"/><Column size=\"38\"/><Column size=\"64\"/><Column size=\"54\"/><Column size=\"44\"/><Column size=\"40\"/><Column size=\"39\"/><Column size=\"40\"/><Column size=\"39\"/><Column size=\"40\"/><Column size=\"39\"/><Column size=\"40\"/><Column size=\"39\"/><Column size=\"40\"/><Column size=\"39\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"38\"/><Column size=\"38\"/><Column size=\"28\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"직급\"/><Cell col=\"4\" rowspan=\"2\" text=\"직종\"/><Cell col=\"5\" rowspan=\"2\" text=\"사번\"/><Cell col=\"6\" rowspan=\"2\" text=\"성명\"/><Cell col=\"7\" rowspan=\"2\" text=\"총점\"/><Cell col=\"8\" colspan=\"4\" text=\"기본경력\"/><Cell col=\"12\" colspan=\"4\" text=\"초과경력\"/><Cell col=\"16\" colspan=\"2\" text=\"유사경력\"/><Cell col=\"18\" colspan=\"4\" text=\"기타평정\"/><Cell col=\"22\" colspan=\"2\" text=\"확정\"/><Cell row=\"1\" col=\"8\" text=\"재직&#13;&#10;월수\"/><Cell row=\"1\" col=\"9\" text=\"징계&#13;&#10;월수\"/><Cell row=\"1\" col=\"10\" text=\"적용&#13;&#10;월수\"/><Cell row=\"1\" col=\"11\" text=\"평점\"/><Cell row=\"1\" col=\"12\" text=\"재직&#13;&#10;월수\"/><Cell row=\"1\" col=\"13\" text=\"징계&#13;&#10;월수\"/><Cell row=\"1\" col=\"14\" text=\"적용&#13;&#10;월수\"/><Cell row=\"1\" col=\"15\" text=\"평점\"/><Cell row=\"1\" col=\"16\" text=\"환산&#13;&#10;월수\"/><Cell row=\"1\" col=\"17\" text=\"평점\"/><Cell row=\"1\" col=\"18\" text=\"교육&#13;&#10;가점\"/><Cell row=\"1\" col=\"19\" text=\"포상&#13;&#10;가점\"/><Cell row=\"1\" col=\"20\" text=\"제안&#13;&#10;가점\"/><Cell row=\"1\" col=\"21\" text=\"징계&#13;&#10;감점\"/><Cell row=\"1\" col=\"22\" text=\"여부\"/><Cell row=\"1\" col=\"23\" text=\"일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:JSSFC_SE\" combodataset=\"ds_jssfcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:EMPNO\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNM\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:TOT_DEVA_SCORE\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BA_HFFC_MONTH_CO\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BA_LMTT_MONTH_CO\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BA_APPL_MONTH_CO\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BASS_CAREER_GRADE\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EX_HFFC_MONTH_CO\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EX_LMTT_MONTH_CO\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EX_APPL_MONTH_CO\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EXCESS_CAREER_GRADE\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:APP_DD\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SIMILR_CAREER_GRADE\"/><Cell col=\"18\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EDC_ADDPNT\"/><Cell col=\"19\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RWARD_ADDPNT\"/><Cell col=\"20\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PROPSE_ADDPNT\"/><Cell col=\"21\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DSCPL_DMRTR\"/><Cell col=\"22\" displaytype=\"checkbox\" text=\"bind:DCSN_AT\"/><Cell col=\"23\" displaytype=\"date\" text=\"bind:DCSN_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_dcsnAt","absolute",null,"0","65","19","29",null,this.div_work);_a.set_taborder("3");_a.set_text("확정처리");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM060203");_b.set_titletext("경력평정집계관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond00","DEVA_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_odrSe","value","ds_cond00","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_jssfcSe","value","ds_cond00","JSSFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_clsfSe","value","ds_cond00","CLSF_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM060203.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM060203.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM060203.xfdl",function(){this.HRM060203_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM060203_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_current=function(){this.ds_curOdrInfo.clearData();this.fn_transaction("selectCurDevaOdrInfo");};this.fn_loadCombo=function(){var _a=[["ds_clsfSe","HRM002","1","전체"],["ds_jssfcSe","HRM001","1","전체"],["ds_odrSe","_HRM223","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.ds_clsfSe.set_filterstr("CODE!='00'");this.ds_jssfcSe.set_filterstr("CODE!='000'");this.div_search.div_deptCode.fn_setBind("ds_cond00","DEPT_CODE","DEPT_NM");this.fn_init_current();};this.fn_search=function(){this.ds_crevalSmList.clearData();this.fn_transaction("selectCrevalSmList");};this.fn_crevalBass=function(_a,_b){var _c=0;for(var _e=0;_e<this.ds_crevalSmList.rowcount;_e++ ){if(this.ds_crevalSmList.getColumn(_e,"DCSN_AT")=='1'){_c=_c+1;if(_c>0){var _d=this.div_search.spn_year.value+"년 "+this.div_search.cmb_odrSe.text+" 경력평정집계가 확정되어 변경할 수 없습니다.";this.gfn_message("info.처리불가",_d);return false;}}}if(this.gfn_message("comm.행위여부","기존데이터를 삭제하고 기초자료를 새로 생성합니다.\n계속 진행")){this.ds_crevalSmList.clearData();this.fn_transaction("crevalSmCUD");}};this.fn_crevalSmList=function(_a,_b){var _c=0;for(var _e=0;_e<this.ds_crevalSmList.rowcount;_e++ ){if(this.ds_crevalSmList.getColumn(_e,"DCSN_AT")=='1'){_c=_c+1;if(_c>0){var _d=this.div_search.spn_year.value+"년 "+this.div_search.cmb_odrSe.text+" 경력평정집계가 확정되어 변경할 수 없습니다.";this.gfn_message("info.처리불가",_d);return false;}}}if(this.gfn_message("comm.행위여부","기존에 집계된 데이터를 삭제하고 새로 생성합니다.\n계속 진행")){this.ds_crevalSmList.clearData();this.fn_transaction("crevalSmListCUD");}};this.div_work_btn_dcsnAt_onclick=function(_a,_b){var _c=0;for(var _e=0;_e<this.ds_crevalSmList.rowcount;_e++ ){if(!this.ds_crevalSmList.getColumn(_e,"TOT_DEVA_SCORE")){_c=_c+1;if(_c>0){this.gfn_message("info.처리불가","집계데이터가 생성되지 않았습니다.");return false;}}}var _d=this.div_search.spn_year.value+"년 "+this.div_search.cmb_odrSe.text+"의 집계를 확정";if(this.gfn_message("comm.행위여부",_d)){this.fn_transaction("setDcsnList");}};this.fn_print=function(){this.ds_cond01.clearData();this.ds_cond01.addRow();this.ds_cond01.setColumn(0,"DEVA_YEAR",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"DEVA_YEAR"));this.ds_cond01.setColumn(0,"ODR_SE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"ODR_SE"));this.ds_cond01.setColumn(0,"CLSF_SE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"CLSF_SE"));this.ds_cond01.setColumn(0,"EMPNO",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"EMPNO"));this.ds_print00.clearData();this.ds_print00.addRow();this.ds_print00.setColumn(0,"DEVA_ALLOT",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"DEVA_ALLOT"));this.ds_print00.setColumn(0,"DEPT_CODE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"DEPT_CODE"));this.ds_print00.setColumn(0,"DEPT_NM",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"DEPT_NM"));this.ds_print00.setColumn(0,"JSSFC_SE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"JSSFC_NM"));this.ds_print00.setColumn(0,"CLSF_SE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"CLSF_SE"));this.ds_print00.setColumn(0,"EMPNM",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"EMPNM"));this.ds_print00.setColumn(0,"EMPNO",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"EMPNO"));this.ds_print00.setColumn(0,"BASS_CAREER_GRADE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"BASS_CAREER_GRADE"));this.ds_print00.setColumn(0,"EXCESS_CAREER_GRADE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"EXCESS_CAREER_GRADE"));this.ds_print00.setColumn(0,"SIMILR_CAREER_GRADE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"SIMILR_CAREER_GRADE"));this.ds_print00.setColumn(0,"CAREER_GRADE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"CAREER_GRADE"));this.ds_print00.setColumn(0,"EDC_ADDPNT",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"EDC_ADDPNT"));this.ds_print00.setColumn(0,"RWARD_ADDPNT",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"RWARD_ADDPNT"));this.ds_print00.setColumn(0,"PROPSE_ADDPNT",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"PROPSE_ADDPNT"));this.ds_print00.setColumn(0,"DSCPL_DMRTR",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"DSCPL_DMRTR"));this.ds_print00.setColumn(0,"TOT_DEVA_SCORE",this.ds_crevalSmList.getColumn(this.ds_crevalSmList.rowposition,"TOT_DEVA_SCORE"));this.fn_transaction("selectCrevalPrintList");};this.fn_print2=function(){var _a=new this.cf_Opts();_a.setToolbar(false);_a.setScale(100);_a.setReportPath("/mis/hrm/HRM060203_R1.jrf");_a.setSaveFilename("경력평정서");_a.setArgs("title","경력평정서");_a.setLocalDs(["ds_print00",this.ds_print00]);_a.setLocalDs(["ds_print01",this.ds_print01]);_a.setLocalDs(["ds_print02",this.ds_print02]);_a.setLocalDs(["ds_print03",this.ds_print03]);_a.setLocalDs(["ds_print04",this.ds_print04]);_a.setLocalDs(["ds_print05",this.ds_print05]);_a.setLocalDs(["ds_print06",this.ds_print06]);_a.setLocalDs(["ds_print07",this.ds_print07]);_a.setLocalDs(["ds_print08",this.ds_print08]);_a.setLocalDs(["ds_print09",this.ds_print09]);_a.setLocalDs(["ds_print10",this.ds_print10]);var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"경력평정서",_b,"common::frmReportPopup.xfdl","report_callback");};this.fn_transaction=function(_a){switch(_a){case "selectCurDevaOdrInfo":var _b="hsco/mis/hrm/HRMCommon/selectCurDevaOdrInfo.do";var _c="";var _d="ds_curOdrInfo=output1";break;case "selectCrevalSmList":var _b="hsco/mis/hrm/HRM060203/selectCrevalSmList.do";var _c="input1=ds_cond00";var _d="ds_crevalSmList=output1";break;case "crevalSmCUD":var _b="hsco/mis/hrm/HRM060203/crevalSmCUD.do";var _c="input1=ds_cond00";var _d="ds_crevalSmList=output1";break;case "crevalSmListCUD":var _b="hsco/mis/hrm/HRM060203/crevalSmListCUD.do";var _c="input1=ds_cond00";var _d="ds_crevalSmList=output1";break;case "setDcsnList":var _b="hsco/mis/hrm/HRM060203/setDcsnList.do";var _c="input1=ds_cond00";var _d="";break;case "selectCrevalPrintList":var _b="hsco/mis/hrm/HRM060203/selectCrevalPrintList.do";var _c="input1=ds_cond01";var _d="ds_print01=output1 ds_print02=output2 ds_print03=output3 ds_print04=output4 ds_print05=output5 ds_print06=output6 ds_print07=output7 ds_print08=output8 ds_print09=output9 ds_print10=output10";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectCurDevaOdrInfo":this.fn_setCurOdrInfo();break;case "selectCrevalSmList":break;case "crevalSmCUD":this.gfn_message("success.처리.성공");this.fn_search();break;case "crevalSmListCUD":this.gfn_message("success.처리.성공");this.fn_search();break;case "setDcsnList":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectCrevalPrintList":this.fn_print2();break;}}};this.fn_setCurOdrInfo=function(){if(this.ds_curOdrInfo.rowcount==1){var _a=this.ds_curOdrInfo.getColumn(0,"CUR_DEVA_YEAR");var _b=this.ds_curOdrInfo.getColumn(0,"CUR_ODR_SE");if(this.comUtils.isNull(_a)||this.comUtils.isNull(_b)){return false;}else{this.ds_cond00.set_enableevent(false);this.ds_cond00.setColumn(0,"DEVA_YEAR",_a);this.ds_cond00.setColumn(0,"ODR_SE",_b);this.ds_cond00.set_enableevent(true);}}else{return false;}this.fn_search();};this.ds_cond00_oncolumnchanged=function(_a,_b){this.fn_search();};this.div_work_Grid00_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};this.div_work_Grid00_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}this.gfn_gridSort(_a,_b);};});this.on_initEvent=function(){this.ds_cond00.addEventHandler("oncolumnchanged",this.ds_cond00_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM060203_oninit,this);this.addEventHandler("onload",this.HRM060203_onload,this);this.div_search.sta_stdrYear00.addEventHandler("onclick",this.div_search_sta_stdrYear00_onclick,this);this.div_search.cmb_odrSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);this.div_search.cmb_clsfSe.addEventHandler("onitemchanged",this.div_search_cmb_clsfSe_onitemchanged,this);this.div_search.cmb_jssfcSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);this.Static04.addEventHandler("onclick",this.Static04_onclick,this);this.div_work.sta_title.addEventHandler("onclick",this.Static03_onclick,this);this.div_work.Static02.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_work.btn_perevaSm.addEventHandler("onclick",this.fn_crevalBass,this);this.div_work.btn_perevaSm00.addEventHandler("onclick",this.fn_crevalSmList,this);this.div_work.Grid00.addEventHandler("oncellclick",this.div_work_Grid00_oncellclick,this);this.div_work.Grid00.addEventHandler("onheadclick",this.div_work_Grid00_onheadclick,this);this.div_work.btn_dcsnAt.addEventHandler("onclick",this.div_work_btn_dcsnAt_onclick,this);};this.loadIncludeScript("HRM060203.xfdl");this.loadPreloadList();};})();