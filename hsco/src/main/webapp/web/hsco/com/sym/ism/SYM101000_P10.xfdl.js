﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM101000_P10");this.set_classname("Pattern_03");this.set_titletext("내부결재 상세(진행건)");this._setFormPosition(0,0,1100,730);}_a=new Dataset("ds_innerSanctnMastr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_TY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"NEXT_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTNER_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN2\" type=\"BIGDECIMAL\" size=\"20\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnDtlsU",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innserSanctnReprtInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_URL\" type=\"STRING\" size=\"512\"/><Column id=\"INPUT_DATA_SET\" type=\"STRING\" size=\"512\"/><Column id=\"OUTPUT_DATA_SET\" type=\"STRING\" size=\"512\"/><Column id=\"REPRT_URL\" type=\"STRING\" size=\"512\"/><Column id=\"REPRT_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnReprtData",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_URL\" type=\"STRING\" size=\"512\"/><Column id=\"DATA_SET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_SET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DATA\" type=\"STRING\" size=\"4000\"/><Column id=\"OUTPUT_XML\" type=\"STRING\" size=\"4000\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_recomInfo",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"16\"/><Column id=\"MASTR_U\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_apprline",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"APPRLINE_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL3\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTNER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SanctnSttusCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_innerSanctnMastr</Col><Col id=\"colId\">INNER_SANCTN_ID</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">결재ID</Col></Row><Row><Col id=\"compId\">ds_innerSanctnMastr</Col><Col id=\"colId\">INNER_SANCTN_MDL_ID</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결재모형</Col></Row><Row><Col id=\"colId\">SANCTN_SJ</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_innerSanctnMastr</Col><Col id=\"msgId\">결재제목</Col></Row><Row><Col id=\"compId\">ds_recomInfo</Col><Col id=\"colId\">INNER_SANCTN_MDL_ID</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_recomInfo</Col><Col id=\"colId\">SANCTN_SJ</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"FILE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"2000\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"20\"/><Column id=\"FILE_CN\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_MG\" type=\"INT\" size=\"8\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"INT\" size=\"5\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"INT\" size=\"5\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"DELETE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_CAN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","15","100%","0",null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","35","100%","15",null,null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","100%","35",null,null,this);_a.set_text("내부결재관리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_exit","absolute",null,"0","50","35","5",null,this);_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","100%",null,null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","80","100%","5",null,null,this);_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","50","100%","30",null,null,this);this.addChild(_a.name,_a);_a=new Static("Static33","absolute","15",null,"80","30",null,"0",this.div_work);_a.set_text("결재제목");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","95","0",null,"30","190",null,this.div_work);_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("SANCTN_SJ","absolute","97","2",null,"26","192",null,this.div_work);_a.set_cssclass("edt_WF_Readonly");_a.set_enable("true");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Button("btn_InnerSantnDtls","absolute",null,"3","80","25","100",null,this.div_work);_a.set_text("결재정보");_a.set_cssclass("btn_WF_CRUD");this.div_work.addChild(_a.name,_a);_a=new Button("btn_InnerSantnDtlsU","absolute",null,"3","80","25","15",null,this.div_work);_a.set_text("결재처리");_a.set_cssclass("btn_WF_CRUD");this.div_work.addChild(_a.name,_a);_a=new Div("div_ubiReport","absolute","13","90",null,"500","13",null,this);_a.set_async("false");_a.set_url("common::frmReport2.xfdl");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","0","590",null,"5","0",null,this);_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","15","595","150","25",null,null,this);_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_fileList","absolute","15","620",null,"100","15",null,this);_a.set_binddataset("ds_fileList");_a.set_autosizingtype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"1025\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_filedown","absolute",null,"597","60","21","15",null,this);_a.set_text("파일다운");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",982,606,this.div_work,function(_b){});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1100,730,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("내부결재 상세(진행건)");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmReport2.xfdl");};this.addIncludeScript("SYM101000_P10.xfdl","lib::comInclude.xjs");this.addIncludeScript("SYM101000_P10.xfdl","lib::comInnerSanct.xjs");this.addIncludeScript("SYM101000_P10.xfdl","lib::comFile.xjs");this.addIncludeScript("SYM101000_P10.xfdl","lib::comUpDownUtils.xjs");this.registerScript("SYM101000_P10.xfdl",function(){this.fileSn;this.fv_objForm;this.fv_param="";this.File_UpDownManager=null;this.saveFlag=true;this.SYM101000_P10_oninit=function(_a,_b){this.gfn_initForm(this);};this.SYM101000_P10_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;var _c=this.parent.arg_1;var _d=[["ds_SanctnSttusCode","COM032","1",""]];this.gfn_comboLoad(_d);var _e={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"SYS","ISM");this.File_UpDownManager.init(_e);this.File_UpDownManager.cancelAllFile();this.ds_recomInfo.clearData();if(this.ds_recomInfo.rowcount==0){this.ds_recomInfo.addRow();}this.ds_recomInfo.setColumn(0,"INNER_SANCTN_ID",_c);this.ds_recomInfo.setColumn(0,"MASTR_U","Y");this.fn_search();};this.fn_search=function(){this.fn_transaction("innerSanctnInfo");};this.fn_transaction=function(_a){var _b="";var _c="fn_callBack";var _d=true;var _e=false;var _f="";var _g="";var _h="";switch(_a){case "innerSanctnInfo":_f="hsco/com/sym/ism/SYM090200/innerSanctnInfo.do";_g="input1=ds_recomInfo";_h="ds_innerSanctnMastr=innerSanctnMastr "+"ds_fileList=innerSanctnFileList "+"ds_apprline=innerSanctnReprtApprline "+"ds_innserSanctnReprtInfo=innerSanctnReprtInfo "+"ds_innerSanctnReprtData=innerSanctnReprtData ";break;case "innerSanctnDtlsU":this.ds_innerSanctnDtlsU.setColumn(0,"INNER_SANCTN_ID",this.parent.arg_1);this.ds_innerSanctnDtlsU.setColumn(0,"CURR_SANCTNER_ID",this.ds_innerSanctnMastr.getColumn(0,"CURR_SANCTNER_ID"));_f="hsco/com/sym/ism/SYM090200/innerSanctnDtlsU.do";_g="input1=ds_innerSanctnDtlsU";_h="";break;case "innerSanctnDtlsU_S3":if(this.ds_innerSanctnDtlsU.rowcount==0){this.ds_innerSanctnDtlsU.addRow();}this.ds_innerSanctnDtlsU.setColumn(0,"INNER_SANCTN_ID",this.parent.arg_1);_f="hsco/com/sym/ism/SYM090200/innerSanctnDtlsU_S3.do";_g="input1=ds_innerSanctnDtlsU";_h="";break;}Ex.core.tran(this,_a,_f,_g,_h);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "innerSanctnInfo":break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "innerSanctnInfo":this.div_work.SANCTN_SJ.set_value(this.ds_innerSanctnMastr.getColumn(0,"SANCTN_SJ"));this.gfn_showOutputDsToXml(this.ds_innserSanctnReprtInfo,this.ds_innerSanctnReprtData,this.ds_apprline);if("S3"==this.ds_innerSanctnMastr.getColumn(0,"SANCTNER_STEP")){this.div_work.btn_InnerSantnDtlsU.set_enable(false);this.fn_transaction("innerSanctnDtlsU_S3");}break;case "innerSanctnDtlsU":this.gfn_message("info.정상처리","정상처리되었습니다.","","",function(){this.close("0000");});break;case "innerSanctnDtlsU_S3":break;}}};this.div_work_btn_InnerSantnDtls_onclick=function(_a,_b){var _c={arg_0:this,innerSanctnId:this.parent.arg_1,innerSanctnMdlNm:this.ds_innerSanctnMastr.getColumn(0,"INNER_SANCTN_MDL_NM")};this.gfn_popup("SYM101000_P11",342,310,"결재정보",_c,"com_sym_ism::SYM101000_P11.xfdl");};this.div_work_btn_InnerSantnDtlsU_onclick=function(_a,_b){var _c=function(_d,_e){var _f=new Dataset();var _g=_f.loadXML(_e);if(_g){this.ds_innerSanctnDtlsU.copyData(_f);this.fn_transaction("innerSanctnDtlsU");}};this.gfn_popup("SYM101000_P12",342,310,"결재처리","","com_sym_ism::SYM101000_P12.xfdl",_c);};this.btn_exit_onclick=function(_a,_b){if("S3"==this.ds_innerSanctnMastr.getColumn(0,"SANCTNER_STEP")){this.close("0000");}else{this.close(null);}};this.btn_fileUpload_onclick=function(_a,_b){var _c=null;var _d=true;this.File_UpDownManager.addFiles(_c,_d);};this.fn_onFileSelected=function(_a,_b){if(_a==this.File_UpDownManager.TYPE_UPLOADER){var _c=this.comUtils.isArray(_b);if(_c){var _d=_b.length;for(var _g=0;_g<_d;_g++ ){var _e=this.ds_fileList.addRow();this.ds_fileList.setColumn(_e,"ORGINL_FILE_NM",_b[_g]);}}else{var _f=this.ds_fileList.addRow();this.ds_fileList.setColumn(_f,"ORGINL_FILE_NM",_b);}}};this.btn_filedown_onclick=function(_a,_b){var _c={};_c["viewRow"]="expr:CHK == '1'";var _d=this.gfn_datasetToObject(this.ds_fileList,_c,true);var _e=this.comUtils.isArray(_d);if(_e){var _f=_d==null?0:_d.length;if(_f==0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _j=0;_j<_f;_j++ ){var _g=_d[_j].FILE_SN;var _h=_d[_j].FILE_ORDR;var _i=_d[_j].ORGINL_FILE_NM;this.File_UpDownManager.download(_g,_h,_i);}}else{var _g=_d.FILE_SN;var _h=_d.FILE_ORDR;var _i=_d.ORGINL_FILE_NM;this.File_UpDownManager.download(_g,_h,_i);}};this.grd_fileList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}};this.grd_fileList_oncelldblclick=function(_a,_b){var _c=this.ds_fileList.getColumn(this.ds_fileList.rowposition,"FILE_SN");var _d=this.ds_fileList.getColumn(this.ds_fileList.rowposition,"FILE_ORDR");var _e=this.ds_fileList.getColumn(this.ds_fileList.rowposition,"ORGINL_FILE_NM");this.File_UpDownManager.download(_c,_d,_e);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SYM101000_P10_oninit,this);this.addEventHandler("onload",this.SYM101000_P10_onload,this);this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);this.div_work.btn_InnerSantnDtls.addEventHandler("onclick",this.div_work_btn_InnerSantnDtls_onclick,this);this.div_work.btn_InnerSantnDtlsU.addEventHandler("onclick",this.div_work_btn_InnerSantnDtlsU_onclick,this);this.grd_fileList.addEventHandler("onheadclick",this.grd_fileList_onheadclick,this);this.grd_fileList.addEventHandler("oncelldblclick",this.grd_fileList_oncelldblclick,this);this.btn_filedown.addEventHandler("onclick",this.btn_filedown_onclick,this);};this.loadIncludeScript("SYM101000_P10.xfdl");this.loadPreloadList();};})();