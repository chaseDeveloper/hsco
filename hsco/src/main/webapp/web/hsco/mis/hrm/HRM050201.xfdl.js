﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM050201");this.set_classname("HRM050201");this.set_titletext("호봉승급관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_promtPrsList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS_PROMT_STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT_STDR_MT\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS_PROMT_STDR_YY\" type=\"STRING\" size=\"256\"/><Column id=\"CNWK_YYCNT_STDR_YY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PROMT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_promtSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_jssfcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ofcpsSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rspofcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_procedure",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IN_INSERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ARG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ARG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_RESULT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_promtPrsList</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사번</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"compId\">ds_promtPrsList</Col><Col id=\"colId\">EMPNM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">성명</Col></Row><Row><Col id=\"compId\">ds_promtPrsList</Col><Col id=\"colId\">PROMT_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">승급구분</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"compId\">ds_promtPrsList</Col><Col id=\"colId\">PROMT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">승급일자</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">PROMT_SRCLS</Col><Col id=\"compId\">ds_promtPrsList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">승급호봉^현재의 다음 호봉</Col><Col id=\"from\">NEXT_STEP</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_clsfSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_srclsSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sanc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MIS_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"I_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_promtSeG",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_approve",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"I_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PROMT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_applcde","absolute","213","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("기준년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","722","5","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_deptCode","absolute","786","5","195","21",null,null,this.div_search);_a.set_taborder("4");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_promtSe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("승급구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_promtSe","absolute","79","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_promtSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_jssfcSe","absolute","376","5","38","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("직종");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_jssfcSe","absolute","414","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_jssfcSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_clsfSe","absolute","549","5","38","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("직급");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_clsfSe","absolute","587","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_clsfSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Div("div_monCal","absolute","277","5","84","21",null,null,this.div_search);_a.set_taborder("1");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_promtPrsList","absolute","0","43","120","19",null,null,this);_a.set_taborder("6");_a.set_text("승급대상자 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","67",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Grid("grd_promtPrsList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_autoenter("select");_a.set_binddataset("ds_promtPrsList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"소속\"/><Cell col=\"3\" rowspan=\"2\" text=\"사번\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"직종\"/><Cell col=\"6\" rowspan=\"2\" text=\"직급\"/><Cell col=\"7\" rowspan=\"2\" text=\"직위\"/><Cell col=\"8\" rowspan=\"2\" text=\"직책\"/><Cell col=\"9\" rowspan=\"2\" style=\"linespace:3;\" text=\"근속&#13;&#10;년수\"/><Cell col=\"10\" rowspan=\"2\" style=\"linespace:3;\" text=\"근속&#13;&#10;기준월\"/><Cell col=\"11\" rowspan=\"2\" style=\"linespace:3;\" text=\"호봉승급&#13;&#10;기준월\"/><Cell col=\"12\" rowspan=\"2\" text=\"근속년수&#13;&#10;기준년\"/><Cell col=\"13\" rowspan=\"2\" text=\"호봉&#13;&#10;(승급전)\"/><Cell col=\"14\" rowspan=\"2\" text=\"호봉승급일\"/><Cell col=\"15\" rowspan=\"2\" text=\"호봉&#13;&#10;(승급후)\"/><Cell col=\"16\" rowspan=\"2\" text=\"승급구분\"/><Cell col=\"17\" rowspan=\"2\" text=\"입사일자\"/><Cell col=\"18\" rowspan=\"2\" text=\"적용\"/><Cell col=\"19\" rowspan=\"2\" text=\"비고\"/><Cell col=\"20\" colspan=\"3\" text=\"전자결재\"/><Cell row=\"1\" col=\"20\" text=\"기안\"/><Cell row=\"1\" col=\"21\" text=\"결재\"/><Cell row=\"1\" col=\"22\" text=\"상세\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:EMPNO\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"4\" style=\"align:center;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNM\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:center;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:JSSFC_SE\" combodataset=\"ds_jssfcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:OFCPS_SE\" combodataset=\"ds_ofcpsSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RSPOFC_SE\" combodataset=\"ds_rspofcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CNWK_YYCNT\" maskchar=\" \"/><Cell col=\"10\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CNWK_YYCNT_STDR_MT\" maskchar=\" \"/><Cell col=\"11\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:SRCLS_PROMT_STDR_MT\" maskchar=\" \"/><Cell col=\"12\" text=\"bind:CNWK_YYCNT_STDR_YY\"/><Cell col=\"13\" text=\"bind:NOW_SRCLS\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"expr:comp.parent.parent.ds_cond.getColumn(0, &quot;PROMT_SE&quot;) == '001' ? 'date' : 'none'\" text=\"bind:PROMT_PROCESS_DE\" calendardisplay=\"expr:comp.parent.parent.ds_cond.getColumn(0, &quot;PROMT_SE&quot;) == '001' ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'text' : 'none'\" editfilter=\"digit\" text=\"bind:PROMT_SRCLS\" editlimit=\"3\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"combo\" text=\"bind:PROMT_SE\" combodataset=\"ds_promtSeG\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:ECNY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080 ;\" text=\"bind:PROMT_PROCESS_AT\"/><Cell col=\"19\" edittype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/><Cell col=\"20\" displaytype=\"image\" text=\"bind:DRFT_STS_IMG\" tooltiptext=\"bind:DRFT_DT\"/><Cell col=\"21\" displaytype=\"image\" text=\"bind:SANCTN_STS_IMG\" tooltiptext=\"bind:LAST_SANCTN_DT\"/><Cell col=\"22\" displaytype=\"expr:SANCTN_STS &gt;= '1' &amp;&amp; SANCTN_STS != 'NUL' ? 'image' : 'none'\" style=\"cursor:EXPR(SANCTN_STS &gt;= '1' &amp;&amp; SANCTN_STS != 'NUL' ? 'hand' : 'arrow');\" text=\"URL('theme://images/sanctn/ico_pop_dtl.png')\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_trgterCreat","absolute",null,"43","92","19","28",null,this);_a.set_taborder("2");_a.set_text("기초자료생성");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_promtAtC","absolute",null,"43","66","19","123",null,this);_a.set_taborder("1");_a.set_text("승급취소");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_promtAt","absolute",null,"43","66","19","192",null,this);_a.set_taborder("7");_a.set_text("승급적용");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM050201");_b.set_titletext("호봉승급관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_promtSe","value","ds_cond","PROMT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_jssfcSe","value","ds_cond","JSSFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_clsfSe","value","ds_cond","CLSF_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("HRM050201.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM050201.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM050201.xfdl",function(){this.checkDs=[this.ds_promtPrsList];this.saveRow= -1;this.HRM050201_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM050201_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){this.ds_cond.set_enableevent(false);var _a=[["ds_jssfcSe","HRM001","1","전체"],["ds_clsfSe","HRM002","1","전체"],["ds_ofcpsSe","HRM003","1","전체"],["ds_rspofcSe","_HRM214","1","전체"],["ds_srclsSe","_HRM243","1","D"],["ds_promtSe","_HRM240","1","전체"],["ds_promtSeG","_HRM240","1","D"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);this.ds_cond.set_enableevent(true);};this.fn_callbackAfter=function(){this.ds_cond.set_enableevent(false);this.div_search.div_deptCode.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_search.div_monCal.fn_setBind("ds_cond","APPLC_DE");this.div_search.div_monCal.msk_mon.set_cssclass("msk_WF_Essential");this.ds_cond.setColumn(0,'APPLC_DE',this.gfn_today().substr(0,6));this.ds_promtSe.deleteRow(4);this.ds_promtSe.deleteRow(3);this.ds_cond.set_enableevent(true);this.fn_search();};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("tbhrmPromtPrsList");};this.fn_save=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_promtPrsList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_promtPrsList.rowposition;this.fn_transaction("tbhrmPromtSave");}};this.btn_trgterCreat_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_promtPrsList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(!this.ds_cond.getColumn(0,'APPLC_DE')){this.gfn_message("comm.입력.요청.를","기준일자");}else{var _c=this.ds_cond.getColumn(0,"APPLC_DE");var _d='';_d+=_c.substr(0,4)+'년 ';_d+=_c.substr(4,2)+'월 ';_d+="일반승급대상자 기초자료를 생성합니다";if(this.gfn_message("confirm.삭제.진행",_d)){this.ds_procedure.clearData();this.ds_procedure.addRow();var _e=this.fn_getEmpno();var _c=this.ds_cond.getColumn(0,"APPLC_DE");this.ds_procedure.setColumn(0,"IN_INSERT_ID",_e);this.ds_procedure.setColumn(0,"ARG_TYPE",'000');this.ds_procedure.setColumn(0,"ARG_DATE",_c);this.fn_transaction("tbhrmTrgterCreat");}}};this.btn_promtAt_onclick=function(_a,_b){var _c=0;var _d='';for(var _h=0;_h<this.ds_promtPrsList.rowcount;_h++ ){var _e=this.ds_promtPrsList.getColumn(_h,"CHK");var _f=this.ds_promtPrsList.getColumn(_h,"NOW_SRCLS");var _g=this.ds_promtPrsList.getColumn(_h,"SANCTN_STS");if(_e=='1'){if(this.ds_promtPrsList.getColumn(_h,"PROMT_PROCESS_AT")=='1'||_f=='31'||_f==''){if(_d.length>0){_d+=", "+(_h+1);}else{_d+=(_h+1);}}_c+=1;}}if(_d.length>0){this.gfn_message("errors.값확인.요청",_d+" 행은 이미 승급 적용되었거나 승급 대상이|적용 항목 혹은 현재 호봉을");return false;}if(_d==0&&_c>0){if(this.gfn_message("comm.행위여부","승급을 적용")){this.fn_transaction("tbhrmPromtAt");}}else if(_c==0){this.gfn_message("comm.항목.다중선택.요청","승급을 적용할");return false;}};this.btn_promtAtC_onclick=function(_a,_b){var _c=0;var _d='';var _e=this.ds_promtPrsList.getColumn(i,"SANCTN_STS");for(var _h=0;_h<this.ds_promtPrsList.rowcount;_h++ ){var _f=this.ds_promtPrsList.getColumn(_h,"CHK");var _g=this.ds_promtPrsList.getColumn(_h,"PROMT_PROCESS_AT");if(_f=='1'){if(_g!='1'){if(_d.length>0){_d+=", "+(_h+1);}else{_d+=(_h+1);}}else{}_c+=1;}}if(_d.length>0){this.gfn_message("errors.값확인.요청",_d+" 행은 승급 취소 대상이|적용 항목을");return false;}if(_d==0&&_c>0){if(this.gfn_message("comm.행위여부","승급을 취소")){this.fn_transaction("tbhrmPromtAtC");}}else if(_c==0){this.gfn_message("comm.항목.다중선택.요청","승급을 취소할");false;}};this.fn_transaction=function(_a){switch(_a){case "tbhrmTrgterCreat":var _b="/hsco/mis/hrm/HRM050201/tbhrmTrgterCreat.do";var _c="input1=ds_procedure";var _d="";break;case "tbhrmPromtPrsList":var _b="/hsco/mis/hrm/HRM050201/tbhrmPromtPrsList.do";var _c="input1=ds_cond";var _d="ds_promtPrsList=output1";break;case "tbhrmPromtAt":var _b="/hsco/mis/hrm/HRM050201/tbhrmPromtAt.do";var _c="input1=ds_promtPrsList:U";var _d="";break;case "tbhrmPromtAtC":var _b="/hsco/mis/hrm/HRM050201/tbhrmPromtAtC.do";var _c="input1=ds_promtPrsList:U";var _d="";break;case "tbhrmPromtSave":var _b="/hsco/mis/hrm/HRM050201/tbhrmPromtSave.do";var _c="input1=ds_promtPrsList:U";var _d="";break;case "saveSanc":var _e="HRM";var _f="";var _g="";var _h="";var _i="";_f="001";_g="호봉승급";_h="호봉승급";this.ds_sanc.clearData();var _j=this.ds_sanc.addRow();this.ds_sanc.setColumn(_j,"MIS_KEY",_e);this.ds_sanc.setColumn(_j,"I_DIV",_f);this.ds_sanc.setColumn(_j,"TITLE",_g);this.ds_sanc.setColumn(_j,"DATA_TITLE",_h);this.ds_sanc.setColumn(_j,"DATA_VALUE",null);this.ds_sanc.setColumn(_j,"DEPT_CD",this.gfn_getDeptId());this.ds_sanc.setColumn(_j,"EMP_CD",this.fn_getEmpno());var _b="hsco/mis/hrm/HRM050201/saveSanc.do";var _c="input1=ds_sanc";var _d="ds_sanc=output1";break;case "approve":var _b="hsco/mis/hrm/HRM050201/approve.do";var _c="input1=ds_approve input2=ds_promtPrsList";var _d="ds_approve=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "tbhrmTrgterCreat":this.gfn_message("success.처리.성공");this.fn_search();break;case "tbhrmPromtPrsList":if(this.saveRow> -1){this.ds_promtPrsList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "tbhrmPromtAt":this.gfn_message("success.처리.성공");this.fn_search();break;case "tbhrmPromtAtC":this.gfn_message("success.처리.성공");this.fn_search();break;case "tbhrmPromtSave":this.gfn_message("success.처리.성공");this.fn_search();break;case "saveSanc":var _d=this.ds_sanc.getColumn(0,"O_URL");system.execBrowser(_d);break;case "approve":var _d=this.ds_approve.getColumn(0,"O_URL");this.gfn_exportExcel(this.div_work.grd_promtPrsList,"promtPrsList",_d);break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="empnoPop"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=this.ds_promtPrsList.rowposition;var _f=_c.getColumn(0,"EMPNM");var _g=_c.getColumn(0,"SRCLS");_g=nexacro.toNumber(!this.comUtils.isNull(_g)?_g:0);var _h=_c.getColumn(0,"DEPT_CODE");var _i=_c.getColumn(0,"DEPT_NM");var _j=_c.getColumn(0,"EMPNO");var _k=_c.getColumn(0,"JSSFC_SE");var _l=_c.getColumn(0,"CLSF_SE");var _m=_c.getColumn(0,"OFCPS");var _n=_c.getColumn(0,"RSPOFC_SE");var _o=_c.getColumn(0,"ECNY_DE");var _p=_c.getColumn(0,"CNWK_YYCNT");var _q=_c.getColumn(0,"CNWK_YYCNT_STDR_MT");var _r=_c.getColumn(0,"SRCLS_PROMT_STDR_MT");var _s=_c.getColumn(0,"CNWK_YYCNT_STDR_YY");var _t=_c.getColumn(0,"SRCLS_PROMT_STDR_YY");_p=!this.comUtils.isNull(_p)?_p+"년":"";_q=!this.comUtils.isNull(_q)?_q+"월":"";_r=!this.comUtils.isNull(_r)?_r+"월":"";_s=!this.comUtils.isNull(_s)?_s+"년":"";_t=!this.comUtils.isNull(_t)?_t+"년":"";var _u=this.ds_cond.getColumn(0,"APPLC_DE");var _v=this.gfn_today();var _w=(parseInt(_g)+1).toString();var _x=this.ds_promtPrsList.findRow("EMPNO",_j);if(_x> -1){var _y="해당연월에 중복된 사원이 존재합니다";_y+="\n";_y+="("+_i+" "+_f+")";alert(_y);return false;}this.ds_promtPrsList.setColumn(_e,"DEPT_CODE",_h);this.ds_promtPrsList.setColumn(_e,"DEPT_NM",_i);this.ds_promtPrsList.setColumn(_e,"EMPNO",_j);this.ds_promtPrsList.setColumn(_e,"EMPNM",_f);this.ds_promtPrsList.setColumn(_e,"JSSFC_SE",_k);this.ds_promtPrsList.setColumn(_e,"CLSF_SE",_l);this.ds_promtPrsList.setColumn(_e,"OFCPS_SE",_m);this.ds_promtPrsList.setColumn(_e,"RSPOFC_SE",_n);this.ds_promtPrsList.setColumn(_e,"NOW_SRCLS",_g);this.ds_promtPrsList.setColumn(_e,"ECNY_DE",_o);this.ds_promtPrsList.setColumn(_e,"PROMT_PROCESS_DE",_u+"01");this.ds_promtPrsList.setColumn(_e,"PROMT_SRCLS",_w);this.ds_promtPrsList.setColumn(_e,"NEXT_STEP",_w);var _z=this.ds_cond.getColumn(0,"PROMT_SE");this.ds_promtPrsList.setColumn(_e,"PROMT_SE",_z);this.ds_promtPrsList.setColumn(_e,"PROMT_DE",_v);this.ds_promtPrsList.setColumn(_e,"CNWK_YYCNT",_p);this.ds_promtPrsList.setColumn(_e,"CNWK_YYCNT_STDR_MT",_q);this.ds_promtPrsList.setColumn(_e,"SRCLS_PROMT_STDR_MT",_r);this.ds_promtPrsList.setColumn(_e,"CNWK_YYCNT_STDR_YY",_s);this.ds_promtPrsList.setColumn(_e,"SRCLS_PROMT_STDR_YY",_t);}}};this.div_work_grd_promtPrsList_onexpandup=function(_a,_b){if(_b.cell=='3'){var _c=system.clientToScreenX(this,10);var _d=system.clientToScreenY(this,10);var _e=new ChildFrame;_e.init("empnoPop","absolute",_c,_d,400,400,null,null,"com::empno_P01.xfdl");_e.set_openalign("center middle");_e.set_dragmovetype("all");_e.showModal(this.getOwnerFrame(),{deptCode:"",deptNm:"",empNo:"",empNm:"",jssfcSe:"",clsfCode:"",ofcpsSe:"",rspofcSe:"",nowSrcls:"",ecny_de:""},this,"fn_popupCallBack");}};this.div_work_grd_promtPrsList_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};this.div_work_grd_promtPrsList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}this.gfn_gridSort(_a,_b);};this.fn_insert=function(){var _a=this.ds_cond.getColumn(0,"PROMT_SE");if(this.comUtils.isNull(_a)){this.gfn_message("info.처리불가","승급구분을 선택해 주시기바랍니다.");return false;}else if(_a!='001'){this.gfn_message("errors.값확인.요청","승급구분이 '호봉획정(수시)'가|승급구분을");return false;}var _b=this.ds_promtPrsList.addRow();this.ds_promtPrsList.setColumn(_b,"PROMT_SE",_a);};this.fn_delete=function(){var _a="";var _b=this.ds_promtPrsList.getCaseCount("CHK == '1'");if(_b==0){this.gfn_message("info.처리불가","선택된 데이터가 없습니다.");return false;}for(var _e=0;_e<this.ds_promtPrsList.rowcount;_e++ ){var _c=this.ds_promtPrsList.getColumn(_e,"CHK");var _d=this.ds_promtPrsList.getColumn(_e,"PROMT_PROCESS_AT");if(_c=='1'){if(_d==1){if(_a.length>0){_a+=", "+(_e+1);}else{_a+=(_e+1);}}}}if(_a.length>0){this.gfn_message("fail.삭제.불가",_a+"행은 이미 승급 적용되어");return false;}else{this.gfn_delMultiRow(this.ds_promtPrsList);}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_promtPrsList.reset();this.ds_promtPrsList.applyChange();return;}};this.ds_cond_oncolumnchanged=function(_a,_b){if(!(this.comUtils.isNull(_b.newvalue)&&this.comUtils.isNull(_b.oldvalue))){this.fn_search();}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM050201_oninit,this);this.addEventHandler("onload",this.HRM050201_onload,this);this.div_work.grd_promtPrsList.addEventHandler("onheadclick",this.div_work_grd_promtPrsList_onheadclick,this);this.div_work.grd_promtPrsList.addEventHandler("oncellclick",this.div_work_grd_promtPrsList_oncellclick,this);this.div_work.grd_promtPrsList.addEventHandler("onexpandup",this.div_work_grd_promtPrsList_onexpandup,this);this.btn_trgterCreat.addEventHandler("onclick",this.btn_trgterCreat_onclick,this);this.btn_promtAtC.addEventHandler("onclick",this.btn_promtAtC_onclick,this);this.btn_promtAt.addEventHandler("onclick",this.btn_promtAt_onclick,this);};this.loadIncludeScript("HRM050201.xfdl");this.loadPreloadList();};})();