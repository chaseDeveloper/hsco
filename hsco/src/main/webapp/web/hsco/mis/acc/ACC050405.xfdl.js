﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050405");this.set_classname("UI_ACC050405");this.set_titletext("영업미수금관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_select",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PLUS_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MINUS_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YYYYMM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회계년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE06","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("3");_a.set_text("회계년월");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","84","5","84","21",null,null,this.div_SEARCH);_a.set_taborder("4");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("17");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","203","19",null,null,this);_a.set_taborder("19");_a.set_text("영업미수금명세서");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"43","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","725","1031","10",null,null,this);_a.set_taborder("25");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDnDtls","absolute",null,"247","25","19","28",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,null,"28","0",this);_a.set_taborder("28");_a.set_autofittype("none");_a.set_binddataset("ds_select");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"전기이월\"/><Cell col=\"2\" text=\"당기증가\"/><Cell col=\"3\" text=\"당기감소\"/><Cell col=\"4\" text=\"기말잔액\"/></Band><Band id=\"body\"><Cell style=\"align:left;background: ;\" text=\"bind:ACCNUT_YEAR\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:PRE_AMT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:PLUS_AMT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:MINUS_AMT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:JAN_AMT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC050405");_b.set_titletext("영업미수금관리");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("ACC050405.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050405.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050405.xfdl",function(){this.ACC050405_onload=function(_a,_b){this.fn_misFormInit(this);this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.div_SEARCH.div_monCal.fn_setBind("ds_cond","YYYYMM");this.div_SEARCH.div_monCal.msk_mon.set_cssclass("msk_WF_Essential");var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"YYYYMM",_a.substr(0,6));};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_select.clearData();this.fn_transaction("SRCH");};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","영업미수금명세서");_a.setSaveFilename("영업미수금명세서");_a.clearLocalDs();_a.setGrid(this.grd);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"영업미수금명세서",_b,"common::frmReportPopup.xfdl","");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC050405/select.do";var _c="input1=ds_cond";var _d="ds_select=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;default:break;}}};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};});this.on_initEvent=function(){this.ds_select.addEventHandler("onrowposchanged",this.ds_totAcntLedgr_onrowposchanged,this);this.addEventHandler("onload",this.ACC050405_onload,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);this.btn_excelDnDtls.addEventHandler("onclick",this.btn_excelDnDtls_onclick,this);};this.loadIncludeScript("ACC050405.xfdl");this.loadPreloadList();};})();