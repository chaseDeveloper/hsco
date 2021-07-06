﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080210_P01");this.set_classname("HRM080210_P01");this.set_titletext("발령정보 조회팝업");this._setFormPosition(0,0,800,450);}_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gnfdDtlsList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GNFD_DE\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_BASIS\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_MATTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gnfdSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"33","14",null,this);_a.set_taborder("13");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_gnfdDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("조회년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_devaYear","absolute","79","5","65","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("2999");_a.set_cssclass("spn_WF_Essential");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","159","5","51","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("대상자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","210","5","166","21",null,null,this.div_search);_a.set_taborder("3");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","78",null,null,"15","15",this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","15","88",null,null,"15","15",this);_a.set_taborder("15");_a.set_binddataset("ds_gnfdDtlsList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발령근거\"/><Cell col=\"2\" text=\"발령일자\"/><Cell col=\"3\" text=\"발령구분\"/><Cell col=\"4\" text=\"대상자\"/><Cell col=\"5\" text=\"발령부서\"/><Cell col=\"6\" text=\"발령사업소\"/><Cell col=\"7\" text=\"발령직종\"/><Cell col=\"8\" text=\"발령직급\"/><Cell col=\"9\" text=\"발령직위\"/><Cell col=\"10\" text=\"발령사항\"/></Band><Band id=\"body\"><Cell text=\"expr:(currow)+1\"/><Cell col=\"1\" text=\"bind:GNFD_BASIS\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:GNFD_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:GNFD_SE\" combodataset=\"ds_gnfdSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:EMPNM\"/><Cell col=\"5\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" text=\"bind:BIZPLC_NM\"/><Cell col=\"7\" text=\"bind:JSSFC_NM\"/><Cell col=\"8\" text=\"bind:CLSF_NM\"/><Cell col=\"9\" text=\"bind:OFCPS_NM\"/><Cell col=\"10\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:GNFD_MATTER\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","121",null,this);_a.set_taborder("16");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("17");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("18");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("13");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",800,450,this,function(_b){_b.set_classname("HRM080210_P01");_b.set_titletext("발령정보 조회팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item28","div_search.spn_devaYear","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM080210_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM080210_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM080210_P01.xfdl",function(){var _a=this.parent.year;this.HRM080210_P01_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.HRM080210_P01_onload=function(_b,_c){this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");var _d=[["ds_gnfdSe","HRM025","Y","S","B"]];var _e=function(_f,_g,_h){this.ds_cond.clearData();var _i=this.ds_cond.addRow();this.ds_cond.setColumn(_i,"YEAR",_a);this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_gnfdDtlsList.clearData();this.fn_transaction("selectGnfdDtlsPopList");};this.fn_transaction=function(_b){switch(_b){case "selectGnfdDtlsPopList":var _c="hsco/mis/hrm/HRM080210/selectGnfdDtlsPopList.do";var _d="input1=ds_cond";var _e="ds_gnfdDtlsList=output1";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_d){this.gfn_callback_message(_b,_c,_d);}if(_c==0){switch(_b){case "selectEdcDutyPtList":break;}}};this.Grid01_oncelldblclick=function(_b,_c){var _d=new Dataset();_d.copyData(this.ds_gnfdDtlsList);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_gnfdDtlsList,this.ds_gnfdDtlsList.rowposition);this.close(_d.saveXML());};this.div_pop_btn_Search_onclick=function(_b,_c){this.fn_search();};this.btn_Close_onclick=function(_b,_c){this.close();};this.btn_Confirm_onclick=function(_b,_c){var _d=new Dataset();_d.copyData(this.ds_gnfdDtlsList);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_gnfdDtlsList,this.ds_gnfdDtlsList.rowposition);this.close(_d.saveXML());};});this.on_initEvent=function(){this.ds_gnfdDtlsList.addEventHandler("onrowposchanged",this.ds_gnfdDtlsList_onrowposchanged,this);this.ds_gnfdDtlsList.addEventHandler("oncolumnchanged",this.ds_gnfdDtlsList_oncolumnchanged,this);this.addEventHandler("onload",this.HRM080210_P01_onload,this);this.addEventHandler("oninit",this.HRM080210_P01_oninit,this);this.div_search.spn_devaYear.addEventHandler("ontextchanged",this.div_search_spn_evalYear_ontextchanged,this);this.Grid01.addEventHandler("onheadclick",this.div_work_Grid00_onheadclick,this);this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);};this.loadIncludeScript("HRM080210_P01.xfdl");this.loadPreloadList();};})();