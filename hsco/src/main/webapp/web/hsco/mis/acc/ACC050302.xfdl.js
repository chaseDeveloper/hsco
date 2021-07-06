﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050302");this.set_classname("UI_ACC050302");this.set_titletext("손익계산서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YYYYMM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회계년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_prflosBillKgaap",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THSTRM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"THSTRM_SM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FRMTRM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FRMTRM_SM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IRDS_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IRDS_SM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_kgaap","absolute","0%","67",null,null,"2.64%","0",this);_a.set_taborder("8");_a.set_binddataset("ds_prflosBillKgaap");_a.set_visible("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"230\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"2\" text=\"계정과목\"/><Cell col=\"3\" colspan=\"2\"/><Cell col=\"5\" colspan=\"2\"/><Cell col=\"7\" colspan=\"2\" text=\"증감\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"(당기)\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"(전기)\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"(당기 - 전기)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ACCNUT_ACNT_CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ACCNUT_ACNT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:THSTRM_AMOUNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:THSTRM_SM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FRMTRM_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FRMTRM_SM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IRDS_AMOUNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IRDS_SM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","84","5","84","21",null,null,this.div_SEARCH);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("2");_a.set_text("회계년월");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","132","19",null,null,this);_a.set_taborder("6");_a.set_text("손익계산서");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"43","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC050302");_b.set_titletext("손익계산서");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("ACC050302.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050302.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050302.xfdl",function(){this.ACC050302_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.div_SEARCH.div_monCal.fn_setBind("ds_cond","YYYYMM");this.div_SEARCH.div_monCal.msk_mon.set_cssclass("msk_WF_Essential");var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"YYYYMM",_a.substr(0,6));this.ds_cond.setColumn(0,"THIS_TITLE","2014");};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}var _a=Number(this.ds_cond.getColumn(0,"YYYYMM").substr(0,4));this.grd_kgaap.setCellProperty('Head',2,'text',_a+"년");this.grd_kgaap.setCellProperty('Head',3,'text',(_a-1)+"년");this.fn_transaction("prflosBillList");};this.fn_transaction=function(_a){switch(_a){case "prflosBillList":var _b="hsco/mis/acc/ACC050302/prflosBillList.do";var _c="input1=ds_cond";var _d="ds_prflosBillKgaap=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b==0){switch(_a){case "prflosBillList":var _d=new String(this.div_SEARCH.div_monCal.getValue());var _e=_d.substring(0,4);if(Number(_e)==2016){var _f=this.ds_prflosBillKgaap.findRow("ACCNUT_ACNT_CODE","42000000");var _g=this.ds_prflosBillKgaap.getColumn(_f,"FRMTRM_SM");var _h=this.ds_prflosBillKgaap.findRow("ACCNUT_ACNT_CODE","41000000");this.ds_prflosBillKgaap.setColumn(_h,"FRMTRM_SM",this.ds_prflosBillKgaap.getColumn(_h,"FRMTRM_SM")-_g);var _h=this.ds_prflosBillKgaap.findRow("ACCNUT_ACNT_CODE","41500000");this.ds_prflosBillKgaap.setColumn(_h,"FRMTRM_SM",this.ds_prflosBillKgaap.getColumn(_h,"FRMTRM_SM")+_g);var _h=this.ds_prflosBillKgaap.findRow("ACCNUT_ACNT_CODE","42500000");this.ds_prflosBillKgaap.setColumn(_h,"FRMTRM_SM",this.ds_prflosBillKgaap.getColumn(_h,"FRMTRM_SM")+_g);var _h=this.ds_prflosBillKgaap.findRow("ACCNUT_ACNT_CODE","46000000");this.ds_prflosBillKgaap.setColumn(_h,"FRMTRM_SM",this.ds_prflosBillKgaap.getColumn(_h,"FRMTRM_SM")+_g);var _h=this.ds_prflosBillKgaap.findRow("ACCNUT_ACNT_CODE","47000000");this.ds_prflosBillKgaap.setColumn(_h,"FRMTRM_SM",this.ds_prflosBillKgaap.getColumn(_h,"FRMTRM_SM")+_g);}break;default:break;}}else{this.gfn_callback_message(_a,_b,_c);switch(_a){case "prflosBillList":break;default:break;}}};this.fn_print=function(){this.gfn_ReportPopup(this,"MIS/ACC/ACC050302_R01.crf",this.ds_cond);};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_kgaap,"exportExl");};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC050302_onload,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);};this.loadIncludeScript("ACC050302.xfdl");this.loadPreloadList();};})();