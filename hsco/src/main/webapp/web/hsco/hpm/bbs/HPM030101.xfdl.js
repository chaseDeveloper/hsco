﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM030101");this.set_classname("HPM030101");this.set_titletext("게시판생성");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_bbsMaster",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BBS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BBS_INTRCN\" type=\"STRING\" size=\"256\"/><Column id=\"BBS_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BBS_ATTRB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_POSBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ROW_CO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ATCH_POSBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_POSBL_FILE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_POSBL_FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_REDNG_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REDNG_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTNG_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_UPLOAD_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DWLD_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKBCK_WRTNG_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER_WRTNG_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HTML_WRTNG_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_AUTHOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RSS_INDICT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_INDICT_PD\" type=\"STRING\" size=\"256\"/><Column id=\"HOT_INDICT_RDCNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRHIBT_WRD_FILTRNG_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PRHIBT_WRD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"APPLCDE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_DEPT_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BBS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_DeptCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_BbsTyCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_BoardDeptAuth",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_bbsMaster</Col><Col id=\"colId\">BBS_ID</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">게시판ID</Col></Row><Row><Col id=\"compId\">ds_bbsMaster</Col><Col id=\"colId\">BBS_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">게시판명</Col></Row><Row><Col id=\"compId\">ds_bbsMaster</Col><Col id=\"colId\">BBS_TY_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">게시판구분</Col></Row><Row><Col id=\"compId\">ds_bbsMaster</Col><Col id=\"colId\">BOARD_KIND</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">게시물구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_hpm011",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9f9f9ff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","295","5","80","21",null,null,this.div_search);_a.set_taborder("38");_a.set_text("게시판명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Edit("BBS_NM","absolute","367","5","288","21",null,null,this.div_search);_a.set_taborder("39");_a.set_readonly("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("40");_a.set_text("권한부서");_a.set_cssclass("sta_WFSA_Label");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","85","5","195","21",null,null,this.div_search);_a.set_taborder("41");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("42");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","280","0","15",null,null,"0",this.div_search);_a.set_taborder("43");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_work);_a.set_taborder("65");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.div_work);_a.set_taborder("66");_a.set_text("게시판 목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_work);_a.set_taborder("67");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","634","9","148","21",null,null,this.div_work);_a.set_taborder("69");_a.set_text("게시판 정보");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Div("div_BBS_DETAIL","absolute","634","36","394",null,null,"20",this.div_work);_a.set_taborder("161");_a.style.set_border("1 solid #808080ff");this.div_work.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","50","392","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("189");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","101","392","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("188");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","25","392","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("153");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","-1","392","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("152");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("S_BBS_ID","absolute","0","-1","100","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("130");_a.set_text("게시판ID");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Edit("BBS_ID","absolute","102","2","288","21",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("195");_a.set_readonly("false");_a.set_cssclass("edt_WF_Essential");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("S_BBS_NM","absolute","0","25","100","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("151");_a.set_text("게시판명");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Edit("BBS_NM","absolute","102","28","288","21",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("204");_a.set_maxlength("255");_a.set_cssclass("edt_WF_Essential");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("S_USE_AT","absolute","0","50","100","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("214");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new CheckBox("USE_AT","absolute","102","54","80","21",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("215");_a.set_text("");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("S_BOARD_KIND","absolute","0","102","100","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("216");_a.set_text("게시물구분");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","328",null,null,"0","0",this.div_work.div_BBS_DETAIL);_a.set_taborder("217");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new TextArea("BBS_INTCN","absolute","102","331","288",null,null,"2",this.div_work.div_BBS_DETAIL);_a.set_taborder("193");_a.set_maxlength("2400");_a.set_wordwrap("char");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","128",null,"201","0",null,this.div_work.div_BBS_DETAIL);_a.set_taborder("220");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("BOARD_DEPT_AUTH","absolute","0","128","100","201",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("219");_a.set_text("게시물권한");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("S_BBS_INTCN","absolute","0","328","100",null,null,"0",this.div_work.div_BBS_DETAIL);_a.set_taborder("186");_a.set_text("게시판소개");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Grid("GridBoardDepthAuth","absolute","102","150","288","176",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("221");_a.set_binddataset("ds_BoardDeptAuth");_a.set_autosizingtype("none");_a.set_cellsizingtype("none");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"230\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"권한부서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:DEPT_CODE\" combodataset=\"ds_DeptCode\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NM\"/></Band></Format></Formats>");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Button("btn_addBoardDeptAuth","absolute","267","130","60","19",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("222");_a.set_text("등록");_a.set_cssclass("btn_WF_Gridadd");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Button("btn_delBoardDeptAuth","absolute","329","130","60","19",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("223");_a.set_text("삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","76","392","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("224");_a.set_cssclass("sta_WF_Labelbg");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Static("S_USE_AT00","absolute","0","76","100","27",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("225");_a.set_text("게시판구분");_a.set_cssclass("sta_WF_Label");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Combo("BBS_TY_CODE","absolute","102","79","288","21",null,null,this.div_work.div_BBS_DETAIL);this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a.set_taborder("226");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_BbsTyCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static05","absolute","127","341","150","31",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("228");_a.set_text("BBS_INTRCN 매핑X");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Combo("BOARD_KIND","absolute","102","104","288","21",null,null,this.div_work.div_BBS_DETAIL);this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a.set_taborder("229");_a.set_innerdataset("ds_hpm011");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static04","absolute","127","109","111","15",null,null,this.div_work.div_BBS_DETAIL);_a.set_taborder("227");_a.set_text("BOARD_KIND -> 3");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_work.div_BBS_DETAIL.addChild(_a.name,_a);_a=new Grid("grd_bbsMaster","absolute","0","36","630",null,null,"20",this.div_work);_a.set_taborder("162");_a.set_binddataset("ds_bbsMaster");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"219\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell celltype=\"head\" text=\"순번\"/><Cell col=\"1\" text=\"게시판ID\"/><Cell col=\"2\" text=\"게시판명\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"게시판소개\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BBS_ID\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:BBS_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USE_AT\" combodataset=\"ds_useAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:BBS_INTRCN\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9f9f9ff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",753,653,this.div_work.div_BBS_DETAIL,function(_b){_b.set_taborder("161");_b.style.set_border("1 solid #808080ff");});this.div_work.div_BBS_DETAIL.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HPM030101");_b.set_titletext("게시판생성");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.BBS_NM","value","ds_cond","BBS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.div_BBS_DETAIL.BBS_ID","value","ds_bbsMaster","BBS_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.div_BBS_DETAIL.BBS_NM","value","ds_bbsMaster","BBS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.div_BBS_DETAIL.USE_AT","value","ds_bbsMaster","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.div_BBS_DETAIL.BBS_TY_CODE","value","ds_bbsMaster","BBS_TY_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.div_BBS_DETAIL.BBS_INTCN","value","ds_bbsMaster","BBS_INTRCN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.div_BBS_DETAIL.BOARD_KIND","value","ds_bbsMaster","BOARD_KIND");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HPM030101.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("HPM030101.xfdl",function(){this.HPM030101_oninit=function(_a,_b){this.fn_init();this.gfn_initCondDs(this,this.div_search);};this.HPM030101_onload=function(_a,_b){this.enableBoardDepthAuth(false);this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _c=function(){if(this.ds_DeptCode.rowcount==0){this.ds_DeptCode.addRow();}this.ds_DeptCode.setColumn(0,"USE_AT","1");var _d=[["ds_DeptCode","ds_DeptCode","","전체","hsco/com/sym/cdm/deptCode/selectDeptCode.do",1]];this.gfn_comboLoadNonCodeTbl(_d);this.fn_search();};var _d=[["ds_BbsTyCode","HPM010","1",""],["ds_hpm011","HPM011","1",""]];this.gfn_comboLoad(_d,_c);};this.fn_search=function(){this.ds_bbsMaster.clearData();this.ds_BoardDeptAuth.clearData();this.enableBoardDepthAuth(false);if(this.ds_cond.rowcount==0){this.ds_cond.addRow();}this.ds_cond.setColumn(0,"BBS_NM",this.div_search.BBS_NM.value);this.fn_transaction("selectBbsMaster");};this.fn_save=function(){if(!this.ds_bbsMaster.isUpdated()){this.gfn_message("comm.내역.변경.없음");return;}if(!this.gfn_checkValidation(this.ds_bbsMaster,this.ds_validation)){return;}if(this.gfn_message("comm.행위여부","저장")){this.fn_transaction("saveBbsMaster");}};this.fn_insert=function(){var _a=this.ds_bbsMaster.addRow();this.ds_bbsMaster.setColumn(_a,"USE_AT","1");this.ds_bbsMaster.setColumn(_a,"BBS_TY_CODE","001");};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.ds_bbsMaster.reset();this.ds_bbsMaster.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectBbsMaster":var _b="/hsco/hpm/bbs/HPM030101/selectBbsMaster.do";var _c="input1=ds_cond";var _d="ds_bbsMaster=output1";break;case "saveBbsMaster":var _b="/hsco/hpm/bbs/HPM030101/saveBbsMaster.do";var _c="input1=ds_bbsMaster:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "selectBbsMaster":break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectBbsMaster":break;case "saveBbsMaster":this.fn_search();break;}}};this.div_work_div_BBS_DETAIL_btn_addBoardDeptAuth_onclick=function(_a,_b){var _c={arg_0:this};var _d=function(_e,_f){var _g=new Dataset();nRowCnt=_g.loadXML(_f);if(nRowCnt){if( -1==this.ds_BoardDeptAuth.findRow("DEPT_CODE",_g.getColumn(0,"DEPT_CODE"))){var _h=this.ds_BoardDeptAuth.addRow();this.ds_BoardDeptAuth.setColumn(_h,"DEPT_CODE",_g.getColumn(0,"DEPT_CODE"));this.updateBoardDeptAuthToMaster();}}};this.gfn_popup("BOARD_DEPT_AUTH",400,400,"",_c,"com::deptCode_P01.xfdl",_d,true);};this.div_work_div_BBS_DETAIL_btn_delBoardDeptAuth_onclick=function(_a,_b){var _c="CHK==1";var _d=this.ds_BoardDeptAuth.findRowExpr(_c);if(_d== -1){this.gfn_message("comm.데이터.선택.없음");return;}if(this.gfn_message("confirm.선택파일.삭제여부","들")){this.gfn_delMultiDsRow(this.ds_BoardDeptAuth);this.updateBoardDeptAuthToMaster();}};this.updateBoardDeptAuthToMaster=function(){var _a=new Array();for(var _b=0,_c=this.ds_BoardDeptAuth.rowcount;_b<_c;_b++ ){_a[_b]=this.ds_BoardDeptAuth.getColumn(_b,"DEPT_CODE");}this.ds_bbsMaster.setColumn(this.ds_bbsMaster.rowposition,"BOARD_DEPT_AUTH",_a.join(","));};this.div_work_grd_bbsMaster_onselectchanged=function(_a,_b){var _c=_a.getDatasetRow(_b.row);if(_c> -1){this.enableBoardDepthAuth(true);var _d=this.ds_bbsMaster.getColumn(_c,"BOARD_DEPT_AUTH");this.ds_BoardDeptAuth.clearData();var _e=_d.split(",");for(var _h=0,_i=_e.length;_h<_i;_h++ ){var _f=_e[_h];if(_f==undefined||_f==""){continue;}var _g=this.ds_BoardDeptAuth.addRow();this.ds_BoardDeptAuth.setColumn(_g,"CHK","0");this.ds_BoardDeptAuth.setColumn(_g,"DEPT_CODE",_f);}}else{this.enableBoardDepthAuth(false);}};this.enableBoardDepthAuth=function(_a){this.div_work.div_BBS_DETAIL.GridBoardDepthAuth.set_enable(_a);this.div_work.div_BBS_DETAIL.btn_addBoardDeptAuth.set_enable(_a);this.div_work.div_BBS_DETAIL.btn_delBoardDeptAuth.set_enable(_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.HPM030101_oninit,this);this.addEventHandler("onload",this.HPM030101_onload,this);this.div_search.addEventHandler("onkeydown",this.div_search_onkeydown,this);this.div_work.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_work.div_BBS_DETAIL.btn_addBoardDeptAuth.addEventHandler("onclick",this.div_work_div_BBS_DETAIL_btn_addBoardDeptAuth_onclick,this);this.div_work.div_BBS_DETAIL.btn_delBoardDeptAuth.addEventHandler("onclick",this.div_work_div_BBS_DETAIL_btn_delBoardDeptAuth_onclick,this);this.div_work.grd_bbsMaster.addEventHandler("onselectchanged",this.div_work_grd_bbsMaster_onselectchanged,this);};this.loadIncludeScript("HPM030101.xfdl");this.loadPreloadList();};})();