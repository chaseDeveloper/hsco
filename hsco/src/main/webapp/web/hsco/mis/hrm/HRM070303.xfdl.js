﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070303");this.set_classname("HRM070303");this.set_titletext("당직내역관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("false");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGNDE1\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bndtSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rspofcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dalyBndtList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGNDE1</Col><Col id=\"compId\">ds_cond00</Col><Col id=\"msgId\">조회시작일자</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">BGNDE2</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col><Col id=\"from\"/><Col id=\"to\"/></Row><Row><Col id=\"compId\">ds_cond00</Col><Col id=\"colId\">BGNDE2</Col><Col id=\"from\">BGNDE1</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sexdstn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">남자</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">여자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("41");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bndtDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("조회기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnde1","absolute","79","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("cal_bgnde2","absolute","197","5","104","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_bndtSe","absolute","316","7","38","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bndtSe","absolute","354","5","93","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("@ds_bndtSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_dept","absolute","462","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_deptCode","absolute","526","5","195","22",null,null,this.div_search);_a.set_taborder("6");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_empnm","absolute","736","5","38","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_empnm","absolute","774","5","121","21",null,null,this.div_search);_a.set_taborder("8");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","184","9","10","16",null,null,this.div_search);_a.set_taborder("42");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","42",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Static("sta_frntnInspnSdytrn","absolute","0","1","147","19",null,null,this.div_work);_a.set_taborder("0");_a.set_text("당직내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_bsrpDtlsList","absolute","0","20",null,null,"0","5",this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_dalyBndtList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"40\"/><Column size=\"142\"/><Column size=\"96\"/><Column size=\"85\"/><Column size=\"78\"/><Column size=\"83\"/><Column size=\"124\"/><Column size=\"157\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"직책\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"당직일자\"/><Cell col=\"8\" text=\"구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:EMPNO\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:RSPOFC_SE\" combodataset=\"ds_rspofcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:SEXDSTN\" combodataset=\"ds_sexdstn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:BNDT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:BNDT_SE\" combodataset=\"ds_bndtSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070303");_b.set_titletext("당직내역관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.edt_empnm","value","ds_cond00","EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cal_bgnde1","value","ds_cond00","BGNDE1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_bgnde2","value","ds_cond00","BGNDE2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_bndtSe","value","ds_cond00","BNDT_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM070303.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070303.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070303.xfdl",function(){this.HRM070303_oninit=function(_a,_b){this.fn_init_form();this.div_search.div_deptCode.fn_setBind("ds_cond00","DEPT_CODE","DEPT_NM");this.fn_init_dataset();};this.HRM070303_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_rspofcSe","_HRM214","1",""],["ds_bndtSe","_HRM252","1","전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){var _a=this.gfn_today().substr(0,4);var _b=this.gfn_today().substr(4,2);this.ds_cond00.setColumn(0,"BGNDE1",_a+_b+'01');this.ds_cond00.setColumn(0,"BGNDE2",this.gfn_today());this.ds_cond00.set_enableevent(true);this.fn_search();};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond00,this.ds_validation)){return;}this.ds_dalyBndtList.clearData();this.fn_transaction("selectTbhrmDalyBndt");};this.fn_transaction=function(_a){switch(_a){case "selectTbhrmDalyBndt":var _b="hsco/mis/hrm/HRM070303/tbhrmDalyBndtList.do";var _c="input1=ds_cond00";var _d="ds_dalyBndtList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}if(_b!=0){}else{switch(_a){case "selectTbhrmDalyBndt":trace(this.ds_dalyBndtList.saveXML());break;}}};this.ds_cond00_oncolumnchanged=function(_a,_b){if(_b.columnid=="BGNDE1"){this.fn_search();}if(_b.columnid=="BGNDE2"){this.fn_search();}if(_b.columnid=="BNDT_SE"){this.fn_search();}if(_b.columnid=="DEPT_CODE"){this.fn_search();}};this.div_work_grd_bsrpDtlsList_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};this.div_work_grd_bsrpDtlsList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}this.gfn_gridSort(_a,_b);};});this.on_initEvent=function(){this.ds_cond00.addEventHandler("oncolumnchanged",this.ds_cond00_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM070303_oninit,this);this.addEventHandler("onload",this.HRM070303_onload,this);this.div_search.edt_empnm.addEventHandler("oneditclick",this.div_SearchArea_Edit00_oneditclick,this);this.div_work.grd_bsrpDtlsList.addEventHandler("oncellclick",this.div_work_grd_bsrpDtlsList_oncellclick,this);this.div_work.grd_bsrpDtlsList.addEventHandler("onheadclick",this.div_work_grd_bsrpDtlsList_onheadclick,this);};this.loadIncludeScript("HRM070303.xfdl");this.loadPreloadList();};})();