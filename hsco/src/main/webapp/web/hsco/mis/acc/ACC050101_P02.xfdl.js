﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050101_P02");this.set_classname("UI_ACC050101_P02");this.set_titletext("배부기준");this.set_scrollbars("none");this._setFormPosition(0,0,800,510);}_a=new Dataset("ds_seAccnutDlryStdrIem",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DLRY_STDR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DLRY_STDR_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"DLRY_STDR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLRY_RATE_CALC_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLRY_RATE_CALC_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","40","450","5",null,null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","450","15",null,null,this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","510",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","510","0",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","495","465","15",null,null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button02","absolute",null,"15","50","25","17",null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","152","21",null,null,this);_a.set_taborder("1");_a.set_text("배부기준");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","15","45",null,null,"15","15",this);_a.set_taborder("10");_a.set_binddataset("ds_seAccnutDlryStdrIem");_a.set_autoenter("select");_a.set_extendsizetype("row");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"670\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"배부번호\"/><Cell col=\"1\" text=\"배부기준\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:DLRY_STDR_CODE\" editlimit=\"4\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:DLRY_STDR_IEM\" editlimit=\"100\" autosizerow=\"limitmin\" autosizecol=\"default\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",800,510,this,function(_b){_b.set_classname("UI_ACC050101_P02");_b.set_titletext("배부기준");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item15","div_detail03.Edit04","value","ds_actMastr","PRMPC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail00.Edit00","value","ds_actMastr","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_detail00.Edit01","value","ds_actMastr","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_detail03.Edit00","value","ds_actMastr","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC050101_P02.xfdl","lib::comInclude.xjs");this.registerScript("ACC050101_P02.xfdl",function(){this.ACC050101_P02_oninit=function(_a,_b){};this.ACC050101_P02_onload=function(_a,_b){this.fn_search();};this.fn_search=function(){this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC060201/seAccnutDlryStdrIemList.do";var _c="";var _d="ds_seAccnutDlryStdrIem=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;default:break;}}else{switch(_a){case "SRCH":break;default:break;}}this.gfn_callback_message(_a,_b,_c);};this.fn_close=function(){this.close();};this.grd_oncelldblclick=function(_a,_b){var _c;_c=this.ds_seAccnutDlryStdrIem.getColumn(this.ds_seAccnutDlryStdrIem.rowposition,"DLRY_STDR_CODE");this.close(_c);};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC050101_P02_onload,this);this.addEventHandler("oninit",this.ACC050101_P02_oninit,this);this.Button02.addEventHandler("onclick",this.fn_close,this);this.grd.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);};this.loadIncludeScript("ACC050101_P02.xfdl");};})();