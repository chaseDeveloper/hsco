﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070119");this.set_classname("HRM070119");this.set_titletext("근태기매핑정보관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPING_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_dclzMappingManage</Col><Col id=\"colId\">DCLZ_ID</Col><Col id=\"PK\">Y</Col><Col id=\"msgId\">근태기ID</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_dclzMappingManage</Col><Col id=\"colId\">EMPNO</Col><Col id=\"PK\">Y</Col><Col id=\"msgId\">사원번호</Col></Row><Row><Col id=\"colId\">GRPWR_NO</Col><Col id=\"compId\">ds_dclzMappingManage</Col><Col id=\"PK\">Y</Col><Col id=\"msgId\">그룹웨어번호</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dclzMappingManage",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_AT\" type=\"STRING\" size=\"256\"/><Column id=\"GRPWR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_ID_ORGINL\" type=\"STRING\" size=\"256\"/><Column id=\"GRPWR_NO_ORGINL\" type=\"STRING\" size=\"256\"/><Column id=\"CTS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_param",this);_a._setContents("<ColumnInfo><Column id=\"DCLZ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DCLZ_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm005",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm101",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","13","5","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","47.81%","1",null,null,"50.73%","0",this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept00","absolute","507","5","64","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("직원상태");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","676","0","15","33",null,null,this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_dclzSe","absolute","691","6","64","19",null,null,this.div_search);_a.set_taborder("11");_a.set_text("매핑구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_hrm101","absolute","755","5","105","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("12");_a.set_displaynulltext("전체");_a.set_innerdataset("@ds_hrm101");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("cmb_hrm005","absolute","571","5","105","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_hrm005");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Edit("edt_empnm","absolute","324","5","168","21",null,null,this.div_search);_a.set_taborder("14");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_deptNm","absolute","77","5","195","21",null,null,this.div_search);_a.set_taborder("15");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ovTimeWorkList","absolute","0","43","150","19",null,null,this);_a.set_taborder("4");_a.set_text("근태기매핑관리");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Grid("grd_dclzMappingManage","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("5");_a.set_binddataset("ds_dclzMappingManage");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"154\"/><Column size=\"134\"/><Column size=\"107\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"106\"/><Column size=\"60\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"사원번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"사원명\"/><Cell col=\"3\" rowspan=\"2\" text=\"근태기&#13;&#10;없음\"/><Cell col=\"4\" colspan=\"3\" text=\"근태기등록명칭\"/><Cell col=\"7\" colspan=\"2\" text=\"그룹웨어정보\"/><Cell row=\"1\" col=\"4\" text=\"근태기ID\"/><Cell row=\"1\" col=\"5\" text=\"부서\"/><Cell row=\"1\" col=\"6\" text=\"이름\"/><Cell row=\"1\" col=\"7\" text=\"겸직여부\"/><Cell row=\"1\" col=\"8\" text=\"그룹웨어번호\"/></Band><Band id=\"body\"><Cell style=\"selectbackground:#ffffffff;\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"1\" style=\"selectbackground:#ffffffff;\" text=\"bind:EMPNO\" suppress=\"2\"/><Cell col=\"2\" style=\"selectbackground:#ffffffff;\" text=\"bind:EMPNM\" suppress=\"2\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DCLZ_AT\"/><Cell col=\"4\" text=\"expr:DCLZ_AT == 1 ? &quot;-&quot; : DCLZ_ID\" expandshow=\"expr:DCLZ_AT == 1 ? 'hide' :  'show'\"/><Cell col=\"5\" text=\"expr:DCLZ_AT == 1 || DCLZ_ID == '' ? &quot;-&quot; : DCLZ_DEPT_NM\"/><Cell col=\"6\" text=\"expr:DCLZ_AT == 1 || DCLZ_ID == '' ? &quot;-&quot; : DCLZ_NM\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"expr:dataset.getCaseCount(&quot;EMPNO == '&quot;+EMPNO+&quot;'&quot;, &quot;EMPNO&quot;) &gt; 1\"/><Cell col=\"8\" edittype=\"expr:DCLZ_AT == 1 || dataset.getCaseCount(&quot;EMPNO == '&quot;+EMPNO+&quot;'&quot;, &quot;EMPNO&quot;) &gt; 1 ? 'normal' :  'none'\" editfilter=\"digit\" style=\"align:center;\" text=\"bind:GRPWR_NO\" editlimit=\"30\" editdisplay=\"expr:DCLZ_AT == 1 || dataset.getCaseCount(&quot;EMPNO == '&quot;+EMPNO+&quot;'&quot;, &quot;EMPNO&quot;) &gt; 1 ?  'display' :  'edit'\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","62","1031","5",null,null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","288","6","38","21",null,null,this);_a.set_taborder("10");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","273","0","15","33",null,null,this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Button("btn_updateDclzData","absolute",null,"43","105","19","228",null,this);_a.set_taborder("12");_a.set_text("근태기 정보갱신");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("sta_dcsnSum02","absolute",null,"43","258","19","339",null,this);_a.set_taborder("13");_a.set_text("근태기 선택팝업의 정보를 갱신합니다.");_a.style.set_align("right");this.addChild(_a.name,_a);_a=new Button("btn_Can_R","absolute",null,"43","64","19","28",null,this);_a.set_taborder("16");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Button("btn_Add_R","absolute",null,"43","64","19","162",null,this);_a.set_taborder("17");_a.set_text("행복사");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Del_R","absolute",null,"43","64","19","95",null,this);_a.set_taborder("18");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070119");_b.set_titletext("근태기매핑정보관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.cmb_hrm101","value","ds_cond","MAPPING_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_hrm005","value","ds_cond","STTUS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_empnm","value","ds_cond","EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_deptNm","value","ds_cond","DEPT_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM070119.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070119.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070119.xfdl",function(){this.checkDs=[];this.HRM070119_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();var _c=[["ds_hrm005","HRM005","Y","A","B"],["ds_hrm101","HRM101","Y","A","B"],];var _d=function(_e,_f,_g){this.ds_cond.setColumn(0,"STTUS_SE","000");this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){};this.fn_search=function(){this.fn_transaction("selectDclzMappingManageList");};this.fn_save=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_dclzMappingManage,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveDclzMappingManage");}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_dclzMappingManage.reset();this.ds_dclzMappingManage.applyChange();return;}};this.fn_transaction=function(_a){switch(_a){case "selectDclzMappingManageList":var _b="hsco/mis/hrm/HRM070119/selectDclzMappingManageList.do";var _c="input1=ds_cond";var _d="ds_dclzMappingManage=output1";break;case "saveDclzMappingManage":var _b="hsco/mis/hrm/HRM070119/dclzMappingManageCU.do";var _c="input1=ds_dclzMappingManage:U";var _d="";break;case "updateDclzData":var _b="hsco/mis/hrm/HRM070119/updateDclzData.do";var _c="";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectDclzMappingManageList":break;case "saveDclzMappingManage":this.gfn_message("success.처리.성공");this.fn_search();break;case "updateDclzData":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.div_search_chk_noMapping_onclick=function(_a,_b){this.ds_cond.setColumn(0,"NO_MAPPING",this.div_search.chk_noMapping.value);};this.btn_updateDclzData_onclick=function(_a,_b){if(this.gfn_message("comm.행위여부","최근정보를 갱신합니다. 계속")){this.fn_transaction("updateDclzData");}};this.div_work_grd_dclzMappingManage_onexpandup=function(_a,_b){var _c=system.clientToScreenX(this,10);var _d=system.clientToScreenY(this,10);var _e=new ChildFrame;_e.init("popup1","absolute",_c,_d,400,400,null,null,"mis_hrm::HRM070119_P01.xfdl");_e.set_openalign("center middle");_e.set_dragmovetype("all");_e.set_showtitlebar(true);_e.showModal(this.getOwnerFrame(),{},this,"fn_callback2");};this.fn_callback2=function(_a,_b){if(_a=="popup1"){this.ds_param.clearData();this.ds_param.loadXML(_b);if(this.ds_param.getColumn(0,"DCLZ_ID")){var _c=this.ds_dclzMappingManage.rowposition;this.ds_dclzMappingManage.set_enableevent(false);this.ds_dclzMappingManage.setColumn(_c,"DCLZ_ID",this.ds_param.getColumn(0,"DCLZ_ID"));this.ds_dclzMappingManage.setColumn(_c,"DCLZ_NM",this.ds_param.getColumn(0,"DCLZ_NM"));this.ds_dclzMappingManage.setColumn(_c,"DCLZ_DEPT_NM",this.ds_param.getColumn(0,"DCLZ_DEPT_NM"));this.ds_dclzMappingManage.setColumn(_c,"GRPWR_NO",this.ds_param.getColumn(0,"GRPWR_NO"));this.ds_dclzMappingManage.set_enableevent(true);}}};this.ds_dclzMappingManage_oncolumnchanged=function(_a,_b){if(_b.columnid=="DCLZ_AT"){if(_b.newvalue=="1"){this.ds_dclzMappingManage.setColumn(_b.row,"DCLZ_ID","000");}else{this.ds_dclzMappingManage.setColumn(_b.row,"DCLZ_ID","");this.ds_dclzMappingManage.setColumn(_b.row,"GRPWR_NO","");}}else if(_b.columnid=="GRPWR_NO"){this.ds_dclzMappingManage.setColumn(_b.row,"DCLZ_AT","1");this.ds_dclzMappingManage.setColumn(_b.row,"DCLZ_ID","000");}};this.btn_Add_R_onclick=function(_a,_b){var _c=this.ds_dclzMappingManage.rowposition;var _d=this.ds_dclzMappingManage.insertRow(_c+1);var _e=this.ds_dclzMappingManage.getColumn(_c,"EMPNO");var _f=this.ds_dclzMappingManage.getColumn(_c,"EMPNM");var _g=this.ds_dclzMappingManage.getColumn(_c,"DEPT_NM");this.ds_dclzMappingManage.setColumn(_d,"EMPNO",_e);this.ds_dclzMappingManage.setColumn(_d,"EMPNM",_f);this.ds_dclzMappingManage.setColumn(_d,"DEPT_NM",_g);};this.btn_Del_R_onclick=function(_a,_b){if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_dclzMappingManage.deleteRow(this.ds_dclzMappingManage.rowposition);};this.btn_Can_R_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_dclzMappingManage)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_dclzMappingManage.reset();this.ds_dclzMappingManage.applyChange();};});this.on_initEvent=function(){this.ds_dclzMappingManage.addEventHandler("oncolumnchanged",this.ds_dclzMappingManage_oncolumnchanged,this);this.addEventHandler("onload",this.HRM070119_onload,this);this.addEventHandler("oninit",this.HRM070119_oninit,this);this.div_search.edt_empnm.addEventHandler("onkeydown",this.edit_onkeydown,this);this.div_search.edt_empnm.addEventHandler("onkeyup",this.edit_onkeyup,this);this.div_search.edt_empnm.addEventHandler("onchanged",this.edit_onchanged,this);this.div_search.edt_deptNm.addEventHandler("onkeydown",this.edit_onkeydown,this);this.div_search.edt_deptNm.addEventHandler("onkeyup",this.edit_onkeyup,this);this.div_search.edt_deptNm.addEventHandler("onchanged",this.edit_onchanged,this);this.div_work.grd_dclzMappingManage.addEventHandler("onexpandup",this.div_work_grd_dclzMappingManage_onexpandup,this);this.btn_updateDclzData.addEventHandler("onclick",this.btn_updateDclzData_onclick,this);this.btn_Can_R.addEventHandler("onclick",this.btn_Can_R_onclick,this);this.btn_Add_R.addEventHandler("onclick",this.btn_Add_R_onclick,this);this.btn_Del_R.addEventHandler("onclick",this.btn_Del_R_onclick,this);};this.loadIncludeScript("HRM070119.xfdl");};})();