﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070301");this.set_classname("HRM070301");this.set_titletext("당직순번관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bndtSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_AT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_BNDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHILD3_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bndtSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rspofcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sexdstn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">남자</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">여자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bndtSnAuto",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_AT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_BNDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">EMPNO</Col><Col id=\"compId\">ds_bndtSn</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사번</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">BNDT_SE</Col><Col id=\"compId\">ds_bndtSn</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col><Col id=\"msgId\">당직구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp_sort",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("41");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bndtSe","absolute","15","5","38","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bndtSe","absolute","53","5","93","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_bndtSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_mfSe","absolute","161","5","38","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("성별");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_sexdstn","absolute","199","5","93","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_sexdstn");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_trgetAt","absolute","307","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("대상여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_trgetAt","absolute","371","5","93","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_trgetAt_innerdataset",this.div_search.cmb_trgetAt);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">대상</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">비대상</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("sta_dept","absolute","479","5","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_deptCode","absolute","543","5","195","22",null,null,this.div_search);_a.set_taborder("7");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_empnm","absolute","753","5","38","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_empnm","absolute","791","5","121","21",null,null,this.div_search);_a.set_taborder("9");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","42",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Static("sta_trgetList","absolute","0","1","147","19",null,null,this.div_work);_a.set_taborder("0");_a.set_text("대상자 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_trgetList","absolute","0","24",null,null,"0","5",this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_bndtSn");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"117\"/><Column size=\"70\"/><Column size=\"132\"/><Column size=\"62\"/><Column size=\"40\"/><Column size=\"61\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"당직구분\"/><Cell col=\"3\" displaytype=\"normal\" text=\"소속\"/><Cell col=\"4\" text=\"직종\"/><Cell col=\"5\" text=\"직책\"/><Cell col=\"6\" text=\"사번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"3자녀\"/><Cell col=\"10\" text=\"대상\"/><Cell col=\"11\" text=\"최종당직일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:BNDT_SE\" combodataset=\"ds_bndtSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_CODE\" combodataset=\"ds_dept\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:JSSFC_SE\" combodataset=\"ds_hrm001\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RSPOFC_SE\" combodataset=\"ds_rspofcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" text=\"bind:EMPNO\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow)==2 ? &quot;normal&quot; : &quot;none&quot;\" text=\"bind:EMPNM\" expandshow=\"expr:dataset.getRowType(currow)==2 ? &quot;show&quot; : &quot;hide&quot;\" combodataset=\"ds_emp\" combocodecol=\"CODE_NM\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:SEXDSTN\" combodataset=\"ds_sexdstn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080 ;\" text=\"bind:CHILD3_AT\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:TRGET_AT\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"none\" text=\"bind:LAST_BNDT_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_trgetAdd","absolute",null,"1","105","19","1",null,this.div_work);_a.set_taborder("2");_a.set_text("대상자 자동입력");_a.set_cssclass("btn_WF_Process");_a.set_tooltiptext("당직순번에 없는 재직중인 업무직,기술직,기능직 사원 추가(당직은 여자 제외)");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","19","1031","5",null,null,this.div_work);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_c){_c.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("HRM070301");_c.set_titletext("당직순번관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.edt_empnm","value","ds_cond00","EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_bndtSe","value","ds_cond00","BNDT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_sexdstn","value","ds_cond00","SEXDSTN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_trgetAt","value","ds_cond00","TRGET_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM070301.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070301.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070301.xfdl",function(){var _a="";var _b="";var _c="N";this.checkDs=[this.ds_bndtSn];this.saveRow= -1;this.HRM070301_oninit=function(_d,_e){this.fn_init_form();this.div_search.div_deptCode.fn_setBind("ds_cond00","DEPT_CODE","DEPT_NM");this.fn_init_dataset();};this.HRM070301_onload=function(_d,_e){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _d=[["ds_bndtSe","_HRM252","1","전체"],["ds_rspofcSe","_HRM214","1"," "],["ds_hrm001","_HRM001","1",""]];this.gfn_comboLoad(_d,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.ds_cond00.clearData();this.ds_cond00.addRow();this.fn_transaction("selectdeptcodeList");};this.fn_search=function(){this.ds_bndtSn.clearData();this.fn_transaction("selectBndtSnList");};this.fn_autoTrget=function(_d,_e){if(!this.ds_cond00.getColumn(0,"BNDT_SE")){this.gfn_message("info.항목.선택.알림","구분");return false;}this.fn_transaction("selectAutoBndtSnList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_bndtSn)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_bndtSn,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_bndtSn.rowposition;this.fn_transaction("saveBndtSnCUD");}};this.fn_transaction=function(_d){switch(_d){case "selectBndtSnList":var _e="hsco/mis/hrm/HRM070301/bndtSnList.do";var _f="input1=ds_cond00";var _g="ds_bndtSn=output1";break;case "selectAutoBndtSnList":var _e="hsco/mis/hrm/HRM070301/autoBndtSnList.do";var _f="input1=ds_cond00";var _g="ds_bndtSnAuto=output1";break;case "saveBndtSnCUD":var _e="hsco/mis/hrm/HRM070301/bndtSnCUD.do";var _f="input1=ds_bndtSn:U";var _g="";break;case "selectdeptcodeList":var _e="hsco/mis/sal/SAL030112/selectdeptcodeList.do";var _f="input1=ds_cond00";var _g="ds_dept=output1";break;}Ex.core.tran(this,_d,_e,_f,_g);};this.fn_callBack=function(_d,_e,_f){if(_e!=0){this.gfn_callback_message(_d,_e,_f);}if(_e!=0){}else{switch(_d){case "selectBndtSnList":if(this.saveRow> -1){this.ds_bndtSn.set_rowposition(this.saveRow);this.saveRow= -1;}this.fn_filter_combo();break;case "saveBndtSnCUD":this.fn_search();break;case "selectAutoBndtSnList":for(var _h=0;_h<this.ds_bndtSnAuto.rowcount;_h++ ){var _g=this.ds_bndtSn.addRow();this.ds_bndtSn.setColumn(_g,"DEPT_NM",this.ds_bndtSnAuto.getColumn(_h,"DEPT_NM"));this.ds_bndtSn.setColumn(_g,"EMPNO",this.ds_bndtSnAuto.getColumn(_h,"EMPNO"));this.ds_bndtSn.setColumn(_g,"EMPNM",this.ds_bndtSnAuto.getColumn(_h,"EMPNM"));this.ds_bndtSn.setColumn(_g,"RSPOFC_SE",this.ds_bndtSnAuto.getColumn(_h,"RSPOFC_SE"));this.ds_bndtSn.setColumn(_g,"SEXDSTN",this.ds_bndtSnAuto.getColumn(_h,"SEXDSTN"));this.ds_bndtSn.setColumn(_g,"DEPT_CODE",this.ds_bndtSnAuto.getColumn(_h,"DEPT_CODE"));this.ds_bndtSn.setColumn(_g,"TRGET_AT",this.ds_bndtSnAuto.getColumn(_h,"TRGET_AT"));this.ds_bndtSn.setColumn(_g,"LAST_BNDT_DE",this.ds_bndtSnAuto.getColumn(_h,"LAST_BNDT_DE"));this.ds_bndtSn.setColumn(_g,"RM",this.ds_bndtSnAuto.getColumn(_h,"RM"));this.ds_bndtSn.setColumn(_g,"BNDT_SE",this.ds_cond00.getColumn(0,"BNDT_SE"));}this.fn_filter_combo();break;case "saveBndtSnCUD":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectdeptcodeList":this.ds_cond00.setColumn(0,"BNDT_SE","");this.ds_cond00.setColumn(0,"SEXDSTN","");this.ds_cond00.setColumn(0,"TRGET_AT","");_c="Y";this.fn_search();break;}}};this.fn_insert=function(){if(!this.ds_cond00.getColumn(0,"BNDT_SE")){this.gfn_message("info.항목.선택.알림","구분");return false;}var _d=this.ds_bndtSn.addRow();this.ds_bndtSn.setColumn(_d,"BNDT_SE",this.ds_cond00.getColumn(0,"BNDT_SE"));var _e={arg_0:this,arg_1:this.ds_cond00.getColumn(0,"BNDT_SE"),arg_2:null,arg_3:null};this.gfn_popup("HRM070301_p1",500,500,"당직자 선택",_e,"mis_hrm::HRM070301_P1.xfdl","fn_callback1");};this.fn_delete=function(){this.gfn_delMultiRow(this.ds_bndtSn);};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_bndtSn.reset();this.ds_bndtSn.applyChange();return;}};this.fn_check=function(){if(Ex.util.isUpdated(this.ds_bndtSn)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}else{return true;}}else{return true;}};this.div_work_grd_trgetList_onexpandup=function(_d,_e){var _f={arg_0:this,arg_1:this.ds_cond00.getColumn(0,"BNDT_SE"),arg_2:null,arg_3:null};this.gfn_popup("HRM070301_p1",500,500,"당직자 선택",_f,"mis_hrm::HRM070301_P1.xfdl","fn_callback1");};this.fn_callback1=function(_d,_e){if(_d=="HRM070301_p1"){var _f=new Dataset();nRowCnt=_f.loadXML(_e);if(nRowCnt){this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"EMPNO",_f.getColumn(0,"EMPNO"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"EMPNM",_f.getColumn(0,"EMPNM"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"DEPT_CODE",_f.getColumn(0,"DEPT_CODE"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"DEPT_NM",_f.getColumn(0,"DEPT_NM"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"RSPOFC_SE",_f.getColumn(0,"RSPOFC_SE"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"JSSFC_SE",_f.getColumn(0,"JSSFC_SE"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"SEXDSTN",_f.getColumn(0,"SEXDSTN"));this.ds_bndtSn.setColumn(this.ds_bndtSn.rowposition,"TRGET_AT","1");}}};this.div_work_grd_trgetList_onheadclick=function(_d,_e){if(_e.col==0){this.gfn_setGridCheckAll(_d,_e);}this.gfn_gridSort(_d,_e);};this.ds_cond00_cancolumnchange=function(_d,_e){if(_e.columnid=="BNDT_SE"){if(!this.fn_check()){return false;}}if(_e.columnid=="SEXDSTN"){if(!this.fn_check()){return false;}}if(_e.columnid=="TRGET_AT"){if(!this.fn_check()){return false;}}this.ds_bndtSn.clearData();};this.ds_cond00_oncolumnchanged=function(_d,_e){if(_e.columnid=="BNDT_SE"&&_c=="Y"){this.fn_search();}if(_e.columnid=="SEXDSTN"&&_c=="Y"){this.fn_search();}if(_e.columnid=="TRGET_AT"&&_c=="Y"){this.fn_search();}};this.div_work_grd_trgetList_oncellclick=function(_d,_e){if(_e.cell==0){_d.setCellProperty("Head",_e.cell,"text","0");}};this.fn_filter_combo=function(){var _d=this.ds_bndtSn.getRowCount();var _e=0;for(var _j=0;_j<_d;_j++ ){_e=this.ds_emp_sort.addRow();this.ds_emp_sort.copyRow(_e,this.ds_bndtSn,_j,"CODE=EMPNO, CODE_NM=EMPNM");}this.ds_emp_sort.set_keystring("S:+CODE_NM");var _f="";var _g="";var _h=this.ds_emp_sort.getRowCount();var _i=0;for(var _j=0;_j<_h;_j++ ){_f=this.ds_emp_sort.getColumn(_j,"CODE_NM");if(_f!=_g){_i=this.ds_emp.addRow();this.ds_emp.copyRow(_i,this.ds_emp_sort,_j,"CODE=CODE, CODE_NM=CODE_NM");_g=_f;}}};});this.on_initEvent=function(){this.ds_cond00.addEventHandler("cancolumnchange",this.ds_cond00_cancolumnchange,this);this.ds_cond00.addEventHandler("oncolumnchanged",this.ds_cond00_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM070301_oninit,this);this.addEventHandler("onload",this.HRM070301_onload,this);this.div_work.grd_trgetList.addEventHandler("onexpandup",this.div_work_grd_trgetList_onexpandup,this);this.div_work.grd_trgetList.addEventHandler("onheadclick",this.div_work_grd_trgetList_onheadclick,this);this.div_work.grd_trgetList.addEventHandler("oncellclick",this.div_work_grd_trgetList_oncellclick,this);this.div_work.btn_trgetAdd.addEventHandler("onclick",this.fn_autoTrget,this);};this.loadIncludeScript("HRM070301.xfdl");this.loadPreloadList();};})();