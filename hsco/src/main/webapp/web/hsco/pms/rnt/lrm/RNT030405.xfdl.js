﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT030405");this.set_classname("RNT030405");this.set_titletext("자동신청 출금의뢰");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_atcng_rqest_rciv",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"OCCRRNC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DEFRAY_YM\" type=\"STRING\" size=\"6\"/><Column id=\"DEFRAY_SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"11\"/><Column id=\"DTA_SE\" type=\"STRING\" size=\"3\"/><Column id=\"TRANSFR_FILE_SE\" type=\"STRING\" size=\"4\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"20\"/><Column id=\"DEFRAY_REQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEFRAY_AT\" type=\"STRING\" size=\"1\"/><Column id=\"ERROR_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEFRAY_RESULT\" type=\"STRING\" size=\"100\"/><Column id=\"NEW_SE\" type=\"STRING\" size=\"4\"/><Column id=\"CPTAL_SE\" type=\"STRING\" size=\"4\"/><Column id=\"PAYER_NO\" type=\"STRING\" size=\"25\"/><Column id=\"CMPNY_RELATE_INFO\" type=\"STRING\" size=\"10\"/><Column id=\"TRANSFR_RQEST_APNTDT\" type=\"STRING\" size=\"10\"/><Column id=\"TRANSFR_REQEST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DEFRAY_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DECSN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"TRANSFR_PROCESS_SE\" type=\"STRING\" size=\"3\"/><Column id=\"AREA_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"HO\" type=\"STRING\" size=\"4\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"ACNUTNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEFRAY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFRAY_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IN_BILL_YM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TRANS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_area",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_bank",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEFRAY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFRAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prt1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TOT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","54","1031","10",null,null,this);_a.set_taborder("50");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid04","absolute","0","79","97.36%","620",null,null,this);_a.set_taborder("56");_a.set_autofittype("col");_a.set_binddataset("ds_atcng_rqest_rciv");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"지역\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"청구년월\"/><Cell col=\"5\" text=\"은행\"/><Cell col=\"6\" text=\"계좌번호\"/><Cell col=\"7\" text=\"청구금액\"/><Cell col=\"8\" text=\"출금일자\"/><Cell col=\"9\" text=\"신청계좌수\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:AREA_SE\" combodataset=\"ds_area\" combocodecol=\"VAL1\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" expr=\"bind:DONG\"/><Cell col=\"2\" expr=\"bind:HO\"/><Cell col=\"3\" text=\"bind:NM\"/><Cell col=\"4\" expr=\"bind:DEFRAY_YM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:BANK_CODE\" combodataset=\"ds_bank\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" text=\"bind:ACNUTNO\"/><Cell col=\"7\" text=\"bind:DEFRAY_REQEST_AMOUNT\"/><Cell col=\"8\" text=\"bind:DEFRAY_DE\"/><Cell col=\"9\" text=\"bind:ACNUTNO_CNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("68");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("69");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","21","97.36%","33",null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("28");_a.set_text("청구년월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","187","5","64","21",null,null,this.div_search);_a.set_taborder("30");_a.set_text("이체일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","251","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a=new Div("div_monCal","absolute","83","5","84","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static31","absolute","0%","60",null,"19","84.04%",null,this);_a.set_taborder("71");_a.set_text("자동신청");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","74",null,"5","2.64%",null,this);_a.set_taborder("72");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","0","0","105","21",null,null,this);_a.set_taborder("73");_a.set_text("청구자료생성");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","108","0","105","21",null,null,this);_a.set_taborder("74");_a.set_text("청구파일변환");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","216","0","105","21",null,null,this);_a.set_taborder("75");_a.set_text("의뢰서");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT030405");_b.set_titletext("자동신청 출금의뢰");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT030405.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT030405.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT030405.xfdl",function(){this.FILE_MANAGER=null;this.ENABLED_DOWN=false;this.SAM_ENTRPS_CODE="214001";this.SAM_ENTRPS_CODE_FIELD="ENTRPS_CODE";this.SAM_INSTT_CODE="1450000";this.SAM_INSTT_CODE_FIELD="FBS_MANAGE_NO";this.RNT030405_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT030405_onload=function(_a,_b){var _c=this.dateUtils.format(this.dateUtils.today(),'yyyymm');this.div_search.div_monCal.setValue(_c);var _d=this.dateUtils.format(this.dateUtils.today(),'yyyymmdd');this.div_search.Calendar01.set_value(this.gfn_lastDateNum(_d));this.fn_loadCombo();var _e={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.FILE_MANAGER=new this.fileManager(this,"PMS","LRM");this.FILE_MANAGER.init(_e);this.fn_setFileMappinfInfo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){var _a=[["ds_area","RNT004","1",""],["ds_bank","COM021","1","전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_search=function(){this.fn_transaction("selectSlaryList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectSlaryList":this.ds_cond00.clearData();var _c=this.ds_cond00.addRow();this.ds_cond00.setColumn(_c,"DEFRAY_YM",this.div_search.div_monCal.getValue("YYYYMM"));var _d="hsco/pms/rnt/rnt030405/getList.do";var _e="input1=ds_cond00";var _f="ds_atcng_rqest_rciv=output1";break;case "print":this.ds_cond00.clearData();var _c=this.ds_cond00.addRow();this.ds_cond00.setColumn(_c,"DEFRAY_YM",this.div_search.div_monCal.getValue("YYYYMM"));_b=false;var _d="hsco/pms/rnt/rnt030405/print.do";var _e="input1=ds_cond00";var _f="ds_prt1=output1";break;case "saveSlaryList":this.ds_cond01.clearData();var _c=this.ds_cond01.addRow();var _g=this.dateUtils.format(this.dateUtils.today(),'yyyymmdd');this.ds_cond01.setColumn(_c,"IN_BILL_YM",this.div_search.div_monCal.getValue("YYYYMM"));this.ds_cond01.setColumn(_c,"IN_REC_DATE",this.gfn_lastDateNum(_g));this.ds_cond01.setColumn(_c,"IN_TRANS_YMD",this.dateUtils.today());this.ds_cond01.setColumn(_c,"IN_REC_YMD",this.div_search.Calendar01.value);var _d="hsco/pms/rnt/rnt030405/listCUD.do";var _e="input1=ds_cond01";var _f="";break;}Ex.core.tran(this,_a,_d,_e,_f,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){if(_a=="saveSlaryList"){if(this.gfn_message("success.처리.성공")){}this.fn_transaction("selectSlaryList");this.gfn_callback_message(_a,_b,_c);}if(_b==0){return;}this.gfn_callback_message(_a,_b,_c);};this.Button00_onclick=function(_a,_b){this.fn_transaction("saveSlaryList");};this.Button03_onclick=function(_a,_b){this.fn_downloadAtcngReqstFile();};this.fn_downloadAtcngReqstFile=function(){this.pmsUtil.clearDataSet([this.ds_cond03]);var _a=this.div_search.div_monCal.getValue();var _b="RNT"+_a.substring(4,6)+".txt";this.ds_cond03.setColumn(0,"DEFRAY_YM",this.div_search.div_monCal.getValue("YYYYMM"));this.ds_cond03.setColumn(0,"DEFRAY_DE",this.div_search.Calendar01.value);this.ds_cond03.setColumn(0,"FILE_NM",_b);var _c="hsco/pms/rnt/rnt030405/downloadAtcngReqstFile.do";var _d="input1=ds_cond03";this.FILE_MANAGER.dataFileDownload(_c,_d,_b);};this.fn_onFileSuccess=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){this.fn_setSelFileInfoTitle();}if(_a==this.FILE_MANAGER.TYPE_DOWNLOADER){if(this.gfn_message("success.파일.다운로드.성공")){}}};this.Button04_onclick=function(_a,_b){this.fn_transaction("print");var _c=new this.cf_Opts();_c.setToolbar(false);_c.setScale(100);_c.setArgs("date",this.div_search.Calendar01.value);_c.setReportPath("/pms/rnt/lrm/RNT030405.jrf");_c.setSaveFilename("자동이체의뢰서");_c.setLocalDs(["ds_prt1",this.ds_prt1]);var _d={arg_0:this,opts:_c};this.gfn_popup("Popup_Report",884,735,"자동이체의뢰서",_d,"common::frmReportPopup.xfdl","report_callback");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT030405_oninit,this);this.addEventHandler("onload",this.RNT030405_onload,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button04.addEventHandler("onclick",this.Button04_onclick,this);};this.loadIncludeScript("RNT030405.xfdl");this.loadPreloadList();};})();