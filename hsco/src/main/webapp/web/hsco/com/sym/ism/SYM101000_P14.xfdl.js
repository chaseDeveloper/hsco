﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM101000_P14");this.set_classname("Pattern_03");this.set_titletext("결재PDF변환");this._setFormPosition(0,0,120,30);}_a=new Dataset("ds_innerSanctnList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTNER_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTNER_STEP_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_EMPID\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_EMPID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_SANCTNER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnDtlsU",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CURR_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SanctnSttusCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnCond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"16\"/><Column id=\"MASTR_U\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnMastr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_TY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"NEXT_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTNER_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN2\" type=\"BIGDECIMAL\" size=\"20\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innserSanctnReprtInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_URL\" type=\"STRING\" size=\"512\"/><Column id=\"INPUT_DATA_SET\" type=\"STRING\" size=\"512\"/><Column id=\"OUTPUT_DATA_SET\" type=\"STRING\" size=\"512\"/><Column id=\"REPRT_URL\" type=\"STRING\" size=\"512\"/><Column id=\"REPRT_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnReprtData",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_URL\" type=\"STRING\" size=\"512\"/><Column id=\"DATA_SET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_SET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DATA\" type=\"STRING\" size=\"4000\"/><Column id=\"OUTPUT_XML\" type=\"STRING\" size=\"4000\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_apprline",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"APPRLINE_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL3\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTNER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","100%",null,null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","15","100%","0",null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","15","5",null,null,"15","5",this);_a.set_text("pdf 변환중");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",120,30,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("결재PDF변환");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SYM101000_P14.xfdl","lib::comInclude.xjs");this.addIncludeScript("SYM101000_P14.xfdl","lib::comInnerSanct.xjs");this.addIncludeScript("SYM101000_P14.xfdl","lib::comFile.xjs");this.addIncludeScript("SYM101000_P14.xfdl","lib::comUpDownUtils.xjs");this.registerScript("SYM101000_P14.xfdl",function(){this.SYM101000_P14_oninit=function(_a,_b){this.gfn_initForm(this);this.ds_innerSanctnCond.clearData();if(this.ds_innerSanctnCond.rowcount==0){this.ds_innerSanctnCond.addRow();}this.ds_SanctnSttusCode.clearData();this.ds_innerSanctnMastr.clearData();this.ds_apprline.clearData();this.ds_innserSanctnReprtInfo.clearData();this.ds_innerSanctnReprtData.clearData();};this.SYM101000_P14_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_innerSanctnCond.setColumn(0,"INNER_SANCTN_ID",this.parent.innerSanctnId);this.ds_innerSanctnCond.setColumn(0,"MASTR_U","Y");this.fn_search();};this.fn_search=function(){this.fn_transaction("innerSanctnInfo");};this.fn_transaction=function(_a,_b){var _c="";var _d="fn_callBack";var _e=true;var _f=false;var _g="";var _h="";var _i="";switch(_a){case "innerSanctnInfo":this.isViewMode=false;_g="hsco/com/sym/ism/SYM090200/innerSanctnInfo.do";_h="input1=ds_innerSanctnCond";_i="ds_innerSanctnMastr=innerSanctnMastr "+"ds_apprline=innerSanctnReprtApprline "+"ds_innserSanctnReprtInfo=innerSanctnReprtInfo "+"ds_innerSanctnReprtData=innerSanctnReprtData "+"ds_SanctnSttusCode=sanctnSttusCode ";break;}Ex.core.tran(this,_a,_g,_h,_i,_c,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "innerSanctnInfo":break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "innerSanctnInfo":var _d=this.ds_innerSanctnMastr.getColumn(0,"INNER_SANCTN_ID");if(this.ds_innserSanctnReprtInfo.getRowCount()>0&&this.ds_innerSanctnReprtData.getRowCount()>0){this.gfn_makeRptDatasets(this.ds_innerSanctnReprtData,this.ds_apprline);this.gfn_selectReportDs(this.ds_innserSanctnReprtInfo,this.ds_innerSanctnReprtData);}this.gfn_exportRptToPdf(this.ds_innerSanctnMastr.getColumn(0,"INNER_SANCTN_ID"),this.ds_innserSanctnReprtInfo.getColumn(0,"REPRT_URL"),this.ds_innerSanctnMastr.getColumn(0,"JOB_SE"),this.parent.sanctn_sttus,this.ds_innerSanctnMastr.getColumn(0,"LAST_SANCTNER_ID")==this.ds_innerSanctnMastr.getColumn(0,"CURR_SANCTNER_ID"),this.vOpts.getLocalDs(),this.ds_SanctnSttusCode);this.close("0000");break;}}};this.btn_exit_onclick=function(_a,_b){this.close("");};});this.on_initEvent=function(){this.ds_innerSanctnList.addEventHandler("onrowposchanged",this.ds_innerSanctnSttusList_onrowposchanged,this);this.addEventHandler("oninit",this.SYM101000_P14_oninit,this);this.addEventHandler("onload",this.SYM101000_P14_onload,this);};this.loadIncludeScript("SYM101000_P14.xfdl");};})();