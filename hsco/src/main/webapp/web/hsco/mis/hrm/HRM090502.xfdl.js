﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM030502");this.set_classname("HRM030502");this.set_titletext("제증명발행관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_crtfList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CRTF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_QY\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"CRTF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CRTF_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ofcpsSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_crtfSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_confmAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE_NM\">처리중</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"CODE_NM\">승인</Col><Col id=\"CODE\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_prposSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_grdConfmAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">처리중</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"CODE_NM\">승인</Col><Col id=\"CODE\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGN_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"from\">BGN_DE</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_temp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"64","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_applcde","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("조회기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","79","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","184","5","12","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","199","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_confmAt","absolute","15","32","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("승인여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_confmSe","absolute","79","32","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_confmAt");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_crtfSe","absolute","247","32","77","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("증명서구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_crtfSe","absolute","324","32","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_crtfSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_searchDept","absolute","354","5","64","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","418","5","195","21",null,null,this.div_search);_a.set_taborder("9");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","635","5","51","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("사번");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","699","5","166","21",null,null,this.div_search);_a.set_taborder("11");_a.set_visible("true");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_crtfList","absolute","0","70","120","19",null,null,this);_a.set_taborder("5");_a.set_text("증명서발행 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","94",null,null,"28","-1",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Grid("grd_crtfList","absolute","0","0",null,null,"0","1",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_crtfList");_a.set_autoenter("select");_a.set_autoupdatetype("itemselect");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"31\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청일자\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"증명서구분\"/><Cell col=\"7\" text=\"신청번호\"/><Cell col=\"8\" text=\"승인&#13;&#10;여부\"/><Cell col=\"9\" text=\"승인일자\"/><Cell col=\"10\" text=\"출력&#13;&#10;여부\"/><Cell col=\"11\" text=\"발행&#13;&#10;수량\"/><Cell col=\"12\" text=\"용도구분\"/><Cell col=\"13\" text=\"발급사유\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:REQST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:EMPNO\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:OFCPS_SE\" combodataset=\"ds_ofcpsSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CRTF_SE\" combodataset=\"ds_crtfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" text=\"bind:REQST_NO\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"EXPR((CONFM_AT == 0)?&quot;combo&quot;:&quot;&quot;)\" text=\"bind:CONFM_AT\" combodataset=\"ds_grdConfmAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"EXPR((CONFM_AT == 0)?&quot;display&quot;:&quot;&quot;)\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:CONFM_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"checkbox\" text=\"bind:OUTPT_AT\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ISSU_QY\"/><Cell col=\"12\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PRPOS_SE\" combodataset=\"ds_prposSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ISSU_PRVONSH\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,64,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM030502");_b.set_titletext("제증명발행관리");});this.addLayout(_a.name,_a);_a=new BindItem("item4","div_search.cal_bgnDe","value","ds_cond","BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_search.cal_endDe","value","ds_cond","END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_crtfSe","value","ds_cond","CRTF_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_confmSe","value","ds_cond","CONFM_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM090502.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090502.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM090502.xfdl",function(){this.checkDs=[this.ds_crtfList];this.saveRow= -1;this.isAuth=false;this.HRM030502_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM030502_onload=function(_a,_b){if(this.gfn_authcode("005")> -1||this.gfn_authcode("006")> -1){this.isAuth=true;}this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_crtfSe","_HRM007","1","전체"],["ds_prposSe","_HRM017","1","전체"],["ds_ofcpsSe","HRM003","1","전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(!this.isAuth){this.div_search.div_DEPT.fn_set_enable(false);this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_EMP.fn_set_enable(false);this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());}var _a=this.gfn_today();var _b=this.dateUtils.addMonth(_a, -1,'s');this.ds_cond.setColumn(0,"END_DE",_a);this.ds_cond.setColumn(0,"BGN_DE",_b);this.div_search.cmb_confmSe.set_index(0);this.fn_search();};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_crtfList.clearData();this.fn_transaction("tbhrmCrtfList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_crtfList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_crtfList.rowposition;this.fn_transaction("tbhrmCrtfSave");}};this.fn_transaction=function(_a){switch(_a){case "tbhrmCrtfList":var _b="/hsco/mis/hrm/HRM030502/tbhrmCrtfList.do";var _c="input1=ds_cond";var _d="ds_crtfList=output1";break;case "tbhrmCrtfSave":var _b="/hsco/mis/hrm/HRM030502/tbhrmCrtfSave.do";var _c="input1=ds_crtfList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "tbhrmCrtfList":this.ds_temp.setColumn(0,"BGN_DE",this.ds_cond.getColumn(0,"BGN_DE"));this.ds_temp.setColumn(0,"END_DE",this.ds_cond.getColumn(0,"END_DE"));if(this.saveRow> -1){this.ds_crtfList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "tbhrmCrtfSave":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_crtfList.reset();this.ds_crtfList.applyChange();return;}};this.fn_print=function(){var _a=new this.cf_Opts();_a.setToolbar(false);_a.setScale(100);_a.setReportPath("/mis/hrm/HRM030502_R1.jrf");_a.setSaveFilename("발행대장");_a.setArgs("BGN_DE",this.ds_temp.getColumn(0,"BGN_DE"));_a.setArgs("END_DE",this.ds_temp.getColumn(0,"END_DE"));_a.setLocalDs(["ds_crtfList",this.ds_crtfList]);var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"발행대장",_b,"common::frmReportPopup.xfdl","report_callback");};this.ds_crtfList_oncolumnchanged=function(_a,_b){if(_b.columnid=="CONFM_AT"){if(_b.newvalue=='1'){var _c=this.gfn_today();_a.setColumn(_b.row,"CONFM_DE",_c);}else{var _c=_a.getOrgColumn(_b.row,"CONFM_DE");_a.setColumn(_b.row,"CONFM_DE",_c);}}};this.div_work_grd_crtfList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}this.gfn_gridSort(_a,_b);};});this.on_initEvent=function(){this.ds_crtfList.addEventHandler("oncolumnchanged",this.ds_crtfList_oncolumnchanged,this);this.addEventHandler("onload",this.HRM030502_onload,this);this.addEventHandler("oninit",this.HRM030502_oninit,this);this.div_work.grd_crtfList.addEventHandler("onheadclick",this.div_work_grd_crtfList_onheadclick,this);};this.loadIncludeScript("HRM090502.xfdl");this.loadPreloadList();};})();