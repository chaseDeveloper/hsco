﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070301_P1");this.set_classname("HRM070301_P1");this.set_titletext("당직자 선택");this._setFormPosition(0,0,500,500);}_a=new Dataset("DS_EMP",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_BNDT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_SEARCH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_EMP_COPY1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_BNDT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_EMP_COPY",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BNDT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_BNDT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,"500","0",null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute","327","51","50","25",null,null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute","380","51","50","25",null,null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","433","51","50","25",null,null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_EMP","absolute","17","124","466","359",null,null,this);_a.set_taborder("5");_a.set_binddataset("DS_EMP");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"94\"/><Column size=\"175\"/><Column size=\"94\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원성명\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"최근당직일자\"/><Cell col=\"4\" text=\"당직일자\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPNO\"/><Cell col=\"1\" text=\"bind:EMPNM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:LAST_BNDT_DE\" mask=\"####-##-##\"/><Cell col=\"4\" text=\"bind:LAST_BNDT_DE\" mask=\"####-##-##\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2",null,"34","2",null,this);_a.set_taborder("6");_a.set_text("사원조회");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","468","8",null,"20","12",null,this);_a.set_taborder("7");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","2",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2",null,"496","483",null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","483","2",null,"496","2",null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53",null,"21","286",null,this);_a.set_taborder("11");_a.set_text("사원조회");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","81",null,"33","17",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("사원번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_emplno","absolute","81","5","80","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","176","5","51","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("사원명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_emplnm","absolute","226","5","120","21",null,null,this.div_search);_a.set_taborder("3");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","18","82",null,"31","467",null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","179","82",null,"31","306",null,this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","114",null,"10","17",null,this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","2","483",null,"15","2",null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76",null,"5","17",null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("HRM070301_P1");_b.set_titletext("당직자 선택");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("HRM070301_P1.xfdl","lib::comLib.xjs");this.registerScript("HRM070301_P1.xfdl",function(){this.fv_objForm;this.HRM070301_P1_onload=function(_a,_b){this.fn_search();};this.div_pop_btn_Search_onclick=function(_a,_b){this.fn_search();};this.fn_search=function(){this.DS_EMP.clearData();this.fv_objForm=this.parent.arg_0;var _a=this.parent.arg_1;var _b=this.parent.arg_2;var _c=this.parent.arg_3;var _d=this.parent.arg_4;var _e=this.parent.arg_5;var _f=this.parent.arg_6;var _g=this.parent.searchYm;this.DS_SEARCH.clearData();var _h=this.DS_SEARCH.addRow();this.DS_SEARCH.setColumn(_h,"EMPNO",this.div_search.edt_emplno.value);this.DS_SEARCH.setColumn(_h,"EMPNM",this.div_search.edt_emplnm.value);if(_b){this.grd_EMP.setFormatColProperty(4,"size",0);this.DS_SEARCH.setColumn(_h,"BNDT_SE",_b);var _i="selectEmpnoList";var _j="/hsco/mis/hrm/HRM070302/selectEmpnoList.do";var _k="input1=DS_SEARCH";var _l="DS_EMP=output1";var _m="";}else if(_a){this.grd_EMP.setFormatColProperty(3,"size",0);this.grd_EMP.setFormatColProperty(4,"size",0);this.DS_SEARCH.setColumn(_h,"BNDT_SE",_a);var _i="selectEmpnoList";var _j="/hsco/mis/hrm/HRM070301/selectEmpnoList.do";var _k="input1=DS_SEARCH";var _l="DS_EMP=output1";var _m="";}else if(_d){this.grd_EMP.setFormatColProperty(3,"size",0);this.DS_SEARCH.setColumn(_h,"BNDT_SE",_d);this.DS_SEARCH.setColumn(_h,"BNDT_DE",_e);this.DS_SEARCH.setColumn(_h,"SEARCH_YM",_g);var _i="selectEmpnoList";var _j="/hsco/mis/hrm/HRM070304/selectEmpnoList.do";var _k="input1=DS_SEARCH";var _l="DS_EMP=output1";var _m="";}else if(_f){this.grd_EMP.setFormatColProperty(3,"size",0);this.DS_SEARCH.setColumn(_h,"SEARCH_YM",_g);var _i="selectEmpnoList";var _j="/hsco/mis/hrm/HRM070304/selectCurEmpnoList.do";var _k="input1=DS_SEARCH";var _l="DS_EMP=output1";var _m="";}Ex.core.tran(this,_i,_j,_k,_l,_m);};this.btn_Confirm_onclick=function(_a,_b){this.DS_EMP_COPY.clearData();var _c=this.DS_EMP_COPY.addRow();var _d;_d=this.DS_EMP_COPY.copyRow(_c,this.DS_EMP,this.DS_EMP.rowposition);this.close(this.DS_EMP_COPY.saveXML());};this.div_pop_grd_EMP_oncelldblclick=function(_a,_b){this.DS_EMP_COPY.clearData();var _c=this.DS_EMP_COPY.addRow();var _d;_d=this.DS_EMP_COPY.copyRow(_c,this.DS_EMP,this.DS_EMP.rowposition);this.close(this.DS_EMP_COPY.saveXML());};this.fn_callBack=function(_a,_b,_c){if(_b<0){}if(_a=="selectEmpnoList"){}};this.div_pop_grd_EMP_onheadclick=function(_a,_b){LGV_COL_SORT=_b.col;this._gridSort(_a,_b);};this.btn_Close_onclick=function(_a,_b){this.close();};this.div_search_edt_emplno_onkeyup=function(_a,_b){if(_b.keycode==13){this.fn_search();}};this.div_search_edt_emplnm_onkeyup=function(_a,_b){if(_b.keycode==13){this.fn_search();}};this.Button00_onclick=function(_a,_b){this.close();};this.btn_Search_onclick=function(_a,_b){this.fn_search();};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM070301_P1_onload,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.grd_EMP.addEventHandler("onheadclick",this.div_pop_grd_EMP_onheadclick,this);this.grd_EMP.addEventHandler("oncelldblclick",this.div_pop_grd_EMP_oncelldblclick,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.div_search.edt_emplno.addEventHandler("onkeyup",this.div_search_edt_emplno_onkeyup,this);this.div_search.edt_emplnm.addEventHandler("onkeyup",this.div_search_edt_emplnm_onkeyup,this);};this.loadIncludeScript("HRM070301_P1.xfdl");};})();