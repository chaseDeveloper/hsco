﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT030404");this.set_classname("RNT030404");this.set_titletext("자동이체 신청/해지");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_ladDetailList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSIFICATION_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNN_AR\" type=\"STRING\" size=\"256\"/><Column id=\"BGNN_UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"BGNN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AR\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REMVL_FLFL_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"FYER_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FLPTH\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_AR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTNT_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSIFICATION_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSIFICATION_UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_CODE_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_CODE_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_reqstProcessCnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PROCESS_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_reqstSumInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TOTAL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CAN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_reqstList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"OCCRRNC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"DTA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"FBS_MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSFR_HOPE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_RESULT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RESERVE_COLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DATA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ST_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"BT_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","54","1031","10",null,null,this);_a.set_taborder("50");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("68");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("69");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","21","97.36%","33",null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","223","5","64","21",null,null,this.div_search);_a.set_taborder("28");_a.set_text("신청년월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","387","5","42","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("신규");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","430","5","40","21",null,null,this.div_search);_a.set_taborder("32");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static33","absolute","476","4","21","21",null,null,this.div_search);_a.set_taborder("33");_a.set_text("건");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","506","5","42","21",null,null,this.div_search);_a.set_taborder("34");_a.set_text("해지");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","549","5","40","21",null,null,this.div_search);_a.set_taborder("35");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","595","4","21","21",null,null,this.div_search);_a.set_taborder("36");_a.set_text("건");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","291","5","84","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","15","5","90","21",null,null,this.div_search);_a.set_taborder("37");_a.set_text("업무구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_jobSe","absolute","89","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("38");_a.set_innerdataset("ds_jobSeCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static31","absolute","0%","60",null,"19","84.04%",null,this);_a.set_taborder("71");_a.set_text("자동신청");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","74",null,"5","2.64%",null,this);_a.set_taborder("72");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","0","0","105","21",null,null,this);_a.set_taborder("73");_a.set_text("신청정보 읽기");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","108","0","105","21",null,null,this);_a.set_taborder("74");_a.set_text("신청정보 등록");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","216","0","105","21",null,null,this);_a.set_taborder("75");_a.set_text("결과파일생성");this.addChild(_a.name,_a);_a=new Grid("grd_reqst","absolute","0","79","97.45%",null,null,"0",this);_a.set_taborder("76");_a.set_binddataset("ds_reqstList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"신청일자\"/><Cell col=\"2\" text=\"은행\"/><Cell col=\"3\" text=\"계좌번호\"/><Cell col=\"4\" text=\"FBS관리번호\"/><Cell col=\"5\" text=\"납부자번호\"/><Cell col=\"6\" text=\"신청구분\"/><Cell col=\"7\" text=\"이체일자\"/><Cell col=\"8\" text=\"지점\"/><Cell col=\"9\" text=\"예금주명\"/><Cell col=\"10\" text=\"예비\"/><Cell col=\"11\" text=\"신청결과\"/><Cell col=\"12\" text=\"처리상태\"/><Cell col=\"13\" text=\"처리일자\"/></Band><Band id=\"body\"><Cell text=\"bind:DTA_SE\"/><Cell col=\"1\" text=\"bind:REQST_DE\"/><Cell col=\"2\" text=\"bind:BANK_CODE\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:ACNUTNO\"/><Cell col=\"4\" text=\"bind:FBS_MANAGE_NO\"/><Cell col=\"5\" text=\"bind:PAYER_NO\"/><Cell col=\"6\" text=\"bind:REQST_SE_NM\"/><Cell col=\"7\" text=\"bind:TRANSFR_HOPE_DE\"/><Cell col=\"8\" text=\"bind:REQST_SPOT_CODE\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:DPSTR\"/><Cell col=\"10\" text=\"bind:RESERVE_COLUMN\"/><Cell col=\"11\" text=\"bind:REQST_RESULT_CODE\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:REQST_RESULT\"/><Cell col=\"13\" text=\"bind:PROCESS_DE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT030404");_b.set_titletext("자동이체 신청/해지");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.MaskEdit00","value","ds_reqstSumInfo","NEW_CNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.MaskEdit01","value","ds_reqstSumInfo","CAN_CNT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT030404.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT030404.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT030404.xfdl",function(){this.FILE_MANAGER=null;this.ENABLED_DOWN=false;this.SAM_ENTRPS_CODE="214001";this.SAM_ENTRPS_CODE_FIELD="ENTRPS_CODE";this.SAM_INSTT_CODE="1450000";this.SAM_INSTT_CODE_FIELD="FBS_MANAGE_NO";this.RNT030404_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT030404_onload=function(_a,_b){this.fn_init_enterKeyEvent(this);var _c=this.dateUtils.format(this.dateUtils.today(),'yyyymm');this.div_search.div_monCal.setValue(_c);var _d={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.FILE_MANAGER=new this.fileManager(this,"PMS","LRM");this.FILE_MANAGER.init(_d);this.fn_setFileMappinfInfo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){var _a=[["ds_jobSeCode","PCOM06","1",""],["ds_jobSeCode","PCOM05","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){var _a=application.gv_curFormId.split("_")[1];switch(_a){case "302033000":this.ds_jobSeCode.filter("CODE == 'HOU'");this.div_search.cmb_jobSe.set_index(0);break;case "403020600":this.ds_jobSeCode.filter("CODE == 'RN1'");this.div_search.cmb_jobSe.set_index(0);break;case "2101010500":this.ds_jobSeCode.filter("CODE == 'RN2'");this.div_search.cmb_jobSe.set_index(0);break;case "1902010600":this.ds_jobSeCode.filter("CODE == 'RN3'");this.div_search.cmb_jobSe.set_index(0);break;}this.fn_transaction("selectSlaryList");};this.fn_search=function(){this.fn_transaction("selectSlaryList");};this.fn_transaction=function(_a){switch(_a){case "selectSlaryList":this.ds_cond00.clearData();var _b=this.ds_cond00.addRow();var _c=this.div_search.div_monCal.getValue();this.ds_cond00.setColumn(_b,"REQST_YM",_c);var _d="hsco/pms/rnt/rnt030404/selectAtcngReqstList.do";var _e="input1=ds_cond00";var _f="ds_reqstList=reqstList ds_reqstSumInfo=reqstSumInfo";break;case "selectAtcngProcessCnt":var _d="hsco/pms/rnt/rnt030404/selectAtcngProcessCnt.do";var _e="input1=ds_cond00";var _f="ds_reqstProcessCnt=reqstCntInfo";break;case "saveSlaryList":this.ds_cond00.clearData();var _b=this.ds_cond00.addRow();var _c=this.div_search.div_monCal.getValue();this.ds_cond00.setColumn(_b,"IN_REC_YYYYMM",_c);var _d="hsco/pms/rnt/rnt030404/listCUD.do";var _e="input1=ds_cond00";var _f="";break;}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){if(_a=="saveSlaryList"){if(this.gfn_message("success.처리.성공")){}this.fn_transaction("selectSlaryList");this.gfn_callback_message(_a,_b,_c);}if(_a=="selectSlaryList1"){this.gfn_callback_message(_a,_b,_c);}if(_a=="selectAtcngProcessCnt"){this.fn_checkProcessCnt();this.gfn_callback_message(_a,_b,_c);}if(_b==0){return;}this.gfn_callback_message(_a,_b,_c);};this.fn_checkProcessCnt=function(){var _a=this.ds_reqstProcessCnt.getColumn(0,"PROCESS_CNT");if(Number(_a)>0){var _b=this.pmsUtil.formatDate(this.ds_cond00.getColumn(0,"REQST_YM"));var _c="해당 [신청월("+_b+")]로 처리된 자료가 있습니다.\n다시 처리하시겠습니까?";if(confirm(_c)){this.fn_uploadAtcngReqstFile();}else{this.fn_resetAtchFile();}}else{this.fn_uploadAtcngReqstFile();}};this.Button00_onclick=function(_a,_b){this.pmsUtil.clearDataSet([this.ds_cond00]);var _c=this.div_search.div_monCal.getValue();this.ds_cond00.setColumn(0,"REQST_YM",_c);var _d=/^(19|20)\d{2}(0[1-9]|1[012])$/;var _e=_d.test(_c);if(!_e){this.gfn_message("info.형식.확인.요청","유효한 년/월이 아닙니다.\n신청월 입력");return;}this.pmsUtil.clearDataSet([this.ds_reqstProcessCnt]);this.fn_addAtchFile();};this.fn_addAtchFile=function(){var _a=["txt"];this.FILE_MANAGER.addFiles(_a,false);};this.fn_onFileSelected=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){var _c=this.FILE_MANAGER.getfileCount();var _d=this.pmsUtil.isArray(_b);if(_d){}else{this.fn_setSelFileInfoTitle(_b,_c);this.fn_transaction("selectAtcngProcessCnt");}}};this.fn_uploadAtcngReqstFile=function(){var _a=this.FILE_MANAGER.hasFile();if(_a){this.ds_cond00.setColumn(0,"INSTT_CODE",this.SAM_INSTT_CODE);this.ds_cond00.setColumn(0,"ENTRPS_CODE",this.SAM_ENTRPS_CODE);this.ds_cond00.setColumn(0,"INSTT_CODE_FIELD",this.SAM_INSTT_CODE_FIELD);this.ds_cond00.setColumn(0,"ENTRPS_CODE_FIELD",this.SAM_ENTRPS_CODE_FIELD);this.pmsUtil.dumper(this.ds_cond00);this.pmsUtil.clearDataSet([this.ds_reqstList,this.ds_reqstSumInfo]);var _b="hsco/pms/rnt/rnt030404/uploadAtcngReqstFile.do";var _c="input1=ds_cond00 inputField=ds_cond02";var _d="ds_reqstSumInfo=footInfo ds_reqstList=bodyList";this.FILE_MANAGER.upload(_b,_c,_d);}else{alert("업로드 할 파일이 없습니다.");}};this.fn_downloadAtcngReqstFile=function(){this.pmsUtil.clearDataSet([this.ds_cond03]);var _a=this.div_search.div_monCal.getValue();var _b="RNT"+_a.substring(4,6)+".txt";this.ds_cond03.setColumn(0,"REQST_YM",_a);this.ds_cond03.setColumn(0,"FILE_NM",_b);var _c="hsco/pms/rnt/rnt030404/downloadAtcngReqstFile.do";var _d="input1=ds_cond03";this.FILE_MANAGER.dataFileDownload(_c,_d,_b);};this.fn_setFileMappinfInfo=function(){var _a=[{DATA_SE:"S",FIELD_NAME:"DATA_SE",ST_IDX:"1",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"BANK_CODE",ST_IDX:"3",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"ENTRPS_CODE",ST_IDX:"5",BT_LENGTH:"7",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"TRAN_DATE",ST_IDX:"12",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"MIN_REQST_DATE",ST_IDX:"18",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"MAX_REQST_DATE",ST_IDX:"24",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"DTA_SE",ST_IDX:"0",BT_LENGTH:"1",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"REQST_DE",ST_IDX:"1",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"BANK_CODE",ST_IDX:"7",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"ACNUTNO",ST_IDX:"9",BT_LENGTH:"15",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"FBS_MANAGE_NO",ST_IDX:"24",BT_LENGTH:"7",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"HOUSE_CODE",ST_IDX:"31",BT_LENGTH:"3",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"PAYER_NO",ST_IDX:"31",BT_LENGTH:"23",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"REQST_SE",ST_IDX:"54",BT_LENGTH:"1",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"TRANSFR_HOPE_DE",ST_IDX:"55",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"REQST_SPOT_CODE",ST_IDX:"57",BT_LENGTH:"3",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"DPSTR",ST_IDX:"60",BT_LENGTH:"12",DATA_TYPE:"han"},{DATA_SE:"D",FIELD_NAME:"REQST_RESULT_CODE",ST_IDX:"72",BT_LENGTH:"8",DATA_TYPE:"string"},{DATA_SE:"E",FIELD_NAME:"TOTAL_CNT",ST_IDX:"1",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"NEW_CNT",ST_IDX:"8",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"CAN_CNT",ST_IDX:"15",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"ETC_CNT",ST_IDX:"22",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT1",ST_IDX:"29",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT2",ST_IDX:"36",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT3",ST_IDX:"43",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT4",ST_IDX:"50",BT_LENGTH:"7",DATA_TYPE:"int"}];this.pmsUtil.putListToDataset(this.ds_cond02,_a);};this.fn_onFileSuccess=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){if(this.gfn_message("success.처리.성공")){}this.fn_transaction("selectSlaryList");}if(_a==this.FILE_MANAGER.TYPE_DOWNLOADER){if(this.gfn_message("success.파일.다운로드.성공")){}}};this.fn_setSelFileInfoTitle=function(_a,_b){var _c="참고 : 은행->공사";var _d="";if(_a){_d=_c+" | 선택파일";if(_b){_d+=" ("+_b+"건)";}_d+=" : "+_a;}else{_d=_c;}};this.Button03_onclick=function(_a,_b){if(this.ds_reqstList.rowcount<0){this.alert("신청정보가 존재하지 않습니다.");return;}this.fn_transaction("saveSlaryList");};this.Button01_onclick=function(_a,_b){this.fn_downloadAtcngReqstFile();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT030404_oninit,this);this.addEventHandler("onload",this.RNT030404_onload,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button01.addEventHandler("onclick",this.Button01_onclick,this);};this.loadIncludeScript("RNT030404.xfdl");this.loadPreloadList();};})();