﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM040800");this.set_classname("Pattern_03");this.set_titletext("바로가기메뉴관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a._setContents("<ColumnInfo><Column id=\"MENU_NM\" type=\"STRING\" size=\"14\"/><Column id=\"V_USER_ID\" type=\"STRING\" size=\"12\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sysSeCode",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"16\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_myMenuList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"V_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_test",this);_a._setContents("<ColumnInfo><Column id=\"TEST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("3");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","90","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("메뉴명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","269","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","654","0",null,"31","367",null,this.div_search);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","367","0",null,"31","654",null,this.div_search);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","580","0","15","31",null,null,this.div_search);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","87","0",null,"31","934",null,this.div_search);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_innerSanctnMdlId","absolute","9.23%","5",null,"21","73.86%",null,this.div_search);_a.set_taborder("13");_a.set_inputmode("upper");_a.set_maxlength("14");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","15","735","13",null,this);_a.set_taborder("56");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static13","absolute",null,"0","13","735","0",null,this);_a.set_taborder("57");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0%","32",null,"703","0%",null,this);_a.set_taborder("58");_a.style.set_padding("0 0 0 0");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","0%","1",null,"10","2.64%",null,this.div_work);_a.set_taborder("84");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","10",null,"21","87.72%",null,this.div_work);_a.set_taborder("85");_a.set_text("바로가기메뉴 현황");_a.set_cssclass("sta_WF_Title01");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","0%","30",null,"5","2.64%",null,this.div_work);_a.set_taborder("86");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_myMenuList","absolute","0%","35",null,null,"2.64%","23",this.div_work);_a.set_taborder("87");_a.set_binddataset("ds_myMenuList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"299\"/><Column size=\"102\"/><Column size=\"153\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"시스템구분\"/><Cell col=\"1\" text=\"메뉴경로\"/><Cell col=\"2\" text=\"페이지ID\"/><Cell col=\"3\" text=\"메뉴명\"/><Cell col=\"4\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:SYS_SE_CODE\" combodataset=\"ds_sysSeCode\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" text=\"bind:MENU_PATH\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:PAGE_ID\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:MENU_NM\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:SORT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_delRow","absolute",null,"11","64","19","28",null,this.div_work);_a.set_taborder("91");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("3");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,703,this.div_work,function(_b){_b.set_taborder("58");_b.style.set_padding("0 0 0 0");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("바로가기메뉴관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_innerSanctnMdlId","value","ds_cond00","MENU_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SYM040800.xfdl","lib::comInclude.xjs");this.registerScript("SYM040800.xfdl",function(){this.SYM040800_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SYM040800_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);if(this.ds_cond00.rowcount==0){this.ds_cond00.addRow();}};this.fn_loadCombo=function(){var _a=[["ds_sysSeCode","COM024","1","전사"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_search=function(){this.ds_myMenuList.clearData();this.ds_myMenuList.addRow();this.ds_cond00.setColumn(0,"V_USER_ID",application.gv_userId);this.fn_transaction("SYM040800List");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_myMenuList)){this.gfn_message("comm.데이터.변경.없음");return;}if(this.gfn_message("comm.행위여부","저장")){this.fn_transaction("SYM040800CUD");}};this.div_work_btn_save_onclick=function(_a,_b){this.fn_save();};this.fn_delete=function(){if(this.gfn_message("comm.행위여부","삭제")){var _a=this.ds_myMenuList.rowposition;this.ds_myMenuList.deleteRow(_a);this.fn_transaction("SYM040800CUD");}};this.fn_checkUpdated=function(){if(this.comUtils.isDatasetUpdated(this.ds_myMenuList)){if(this.gfn_message("confirm.변경.저장.여부")){this.fn_transaction("SYM040800CUD");return false;}else{return true;}}else{return true;}};this.fn_transaction=function(_a){switch(_a){case "SYM040800List":var _b="hsco/com/sym/mnm/SYM040800/SYM040800List.do";var _c="input1=ds_cond00";var _d="ds_myMenuList=output1";break;case "SYM040800CUD":var _b="hsco/com/sym/mnm/SYM040800/SYM040800CUD.do";var _c="input1=ds_myMenuList:U";var _d="ds_myMenuList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callbackAfter=function(){};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "SYM040800List":this.gfn_loadMyMenu();break;case "SYM040800CUD":if(this.ds_myMenuList.getRowCount()>0){this.gfn_message("success.처리.성공");this.ds_myMenuList.applyChange();this.gfn_loadMyMenu();}break;}};this.div_work_grd_myMenuList_ontextchanged=function(_a,_b){this.ds_myMenuList.setColumn(this.ds_myMenuList.rowposition,"V_USER_ID",application.gv_userId);};});this.on_initEvent=function(){this.addEventHandler("onload",this.SYM040800_onload,this);this.addEventHandler("oninit",this.SYM040800_oninit,this);this.div_work.grd_myMenuList.addEventHandler("ontextchanged",this.div_work_grd_myMenuList_ontextchanged,this);this.div_work.btn_delRow.addEventHandler("onclick",this.fn_delete,this);};this.loadIncludeScript("SYM040800.xfdl");};})();