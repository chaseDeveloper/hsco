﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090404");this.set_classname("HRM090404");this.set_titletext("배차현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_vhcleList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_reqstList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_TM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DSTN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS_STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFMER_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONFMER_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFMER_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFMER_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sttusSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_reqstCond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">USE_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사용일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_vhcleNm","absolute","244","5","51","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("차량명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_useDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("사용일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_useDe","absolute","79","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Edit("edt_vhcleNm","absolute","295","5","150","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Static("sta_vhcleList","absolute","0","43","100","19",null,null,this);_a.set_taborder("5");_a.set_text("차량목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work00","absolute","0","67","200",null,null,"0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Grid("grd_vhcleList","absolute","0","0",null,null,"0","0",this.div_work00);_a.set_taborder("0");_a.set_binddataset("ds_vhcleList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차량명\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:VHCLE_NM\"/></Band></Format></Formats>");this.div_work00.addChild(_a.name,_a);_a=new Static("sta_reqstList","absolute","210","43","100","19",null,null,this);_a.set_taborder("6");_a.set_text("배차내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work01","absolute","210","67",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Grid("grd_reqstList","absolute","0","0",null,null,"0","0",this.div_work01);_a.set_taborder("0");_a.set_binddataset("ds_reqstList");_a.set_autoenter("select");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"상태\"/><Cell col=\"2\" colspan=\"4\" text=\"사용내역\"/><Cell col=\"6\" colspan=\"5\" text=\"승인정보\"/><Cell row=\"1\" col=\"2\" text=\"시작시간\"/><Cell row=\"1\" col=\"3\" text=\"종료시간\"/><Cell row=\"1\" col=\"4\" text=\"사용자\"/><Cell row=\"1\" col=\"5\" text=\"행선지\"/><Cell row=\"1\" col=\"6\" text=\"승인여부\"/><Cell row=\"1\" col=\"7\" text=\"승인일자\"/><Cell row=\"1\" col=\"8\" text=\"승인자사번\"/><Cell row=\"1\" col=\"9\" text=\"승인자명\"/><Cell row=\"1\" col=\"10\" text=\"승인자부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PROGRS_STTUS_SE\" combodataset=\"ds_sttusSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:USE_DT\"/><Cell col=\"3\" text=\"bind:END_DT\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:USER_NM\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DSTN\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CONFM_AT\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:CONFM_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:CONFMER_EMPNO\"/><Cell col=\"9\" text=\"bind:CONFMER_EMPNM\"/><Cell col=\"10\" text=\"bind:CONFMER_DEPT_NM\"/></Band></Format></Formats>");this.div_work01.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",200,0,this.div_work00,function(_b){_b.set_taborder("1");});this.div_work00.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work01,function(_b){_b.set_taborder("2");});this.div_work01.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM090404");_b.set_titletext("배차현황");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.cal_useDe","value","ds_cond","USE_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_vhcleNm","value","ds_cond","VHCLE_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM090604.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090604.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM090604.xfdl",function(){this.checkDs=[this.ds_reqstList];this.HRM090404_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM090404_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_sttusSe","HRM253","1","D"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.ds_cond.setColumn(0,"USE_DE",this.gfn_today());this.fn_search();};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_reqstList.clearData();this.fn_transaction("getVhcleList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_reqstList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_reqstList.rowposition;this.fn_transaction("tbhrmReqstSave");}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_reqstList.reset();this.ds_reqstList.applyChange();return;}};this.fn_transaction=function(_a){switch(_a){case "getVhcleList":var _b="/hsco/mis/hrm/HRM090404/getVhcleList.do";var _c="input1=ds_cond";var _d="ds_vhcleList=output1";break;case "tbhrmReqstList":var _b="/hsco/mis/hrm/HRM090404/tbhrmReqstList.do";var _c="input1=ds_reqstCond";var _d="ds_reqstList=output1";break;case "tbhrmReqstSave":var _b="/hsco/mis/hrm/HRM090404/tbhrmReqstSave.do";var _c="input1=ds_reqstList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "getVhcleList":break;case "tbhrmImprmnList":break;case "tbhrmReqstSave":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.ds_vhcleList_onrowposchanged=function(_a,_b){var _c=this.ds_reqstList.rowposition;var _d=this.ds_vhcleList.rowposition;var _e=this.ds_vhcleList.getColumn(_d,"VHCLE_CODE");var _f=this.ds_vhcleList.getColumn(_d,"VHCLE_NM");var _g=this.ds_vhcleList.getColumn(_d,"USE_DE");this.ds_reqstCond.clearData();this.ds_reqstCond.addRow();this.ds_reqstCond.setColumn(0,"VHCLE_CODE",_e);this.ds_reqstCond.setColumn(0,"VHCLE_NM",_f);this.ds_reqstCond.setColumn(0,"USE_DE",_g);this.ds_reqstList.clearData();this.fn_transaction("tbhrmReqstList");};this.div_work00_grd_vhcleList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_work01_grd_reqstList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.ds_reqstList_oncolumnchanged=function(_a,_b){if(_b.columnid=="CONFM_AT"){var _c="";var _d="";var _e="";var _f="";var _g="";var _h=_a.getOrgColumn(_b.row,_b.columnid);if(_b.newvalue==_h){_c=_a.getOrgColumn(_b.row,"CONFMER_EMPNO");_d=_a.getOrgColumn(_b.row,"CONFMER_EMPNM");_e=_a.getOrgColumn(_b.row,"CONFMER_DEPT_CODE");_g=_a.getOrgColumn(_b.row,"CONFM_DT");}else if(_b.newvalue=='1'){_c=this.fn_getEmpno();_d=this.fn_getEmpnm();_e=this.gfn_getDeptId();_f=this.gfn_getDeptName();_g=this.gfn_today();}_a.setColumn(_b.row,"CONFMER_EMPNO",_c);_a.setColumn(_b.row,"CONFMER_EMPNM",_d);_a.setColumn(_b.row,"CONFMER_DEPT_CODE",_e);_a.setColumn(_b.row,"CONFMER_DEPT_NM",_f);_a.setColumn(_b.row,"CONFM_DT",_g);}};});this.on_initEvent=function(){this.ds_vhcleList.addEventHandler("onrowposchanged",this.ds_vhcleList_onrowposchanged,this);this.ds_reqstList.addEventHandler("oncolumnchanged",this.ds_reqstList_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM090404_oninit,this);this.addEventHandler("onload",this.HRM090404_onload,this);this.div_search.cal_useDe.addEventHandler("oneditclick",this.div_search_cal_BEGIN_APPLCDE_oneditclick,this);this.div_work00.grd_vhcleList.addEventHandler("onheadclick",this.div_work00_grd_vhcleList_onheadclick,this);this.div_work01.grd_reqstList.addEventHandler("onheadclick",this.div_work01_grd_reqstList_onheadclick,this);};this.loadIncludeScript("HRM090604.xfdl");};})();