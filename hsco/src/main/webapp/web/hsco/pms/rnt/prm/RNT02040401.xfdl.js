﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040401");this.set_classname("RNT02040401");this.set_titletext("자동이체신청등록");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_atcngJobSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_atcngReqstTrmnat",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DTA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CPTAL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"FBS_MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSFR_HOPE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_RESULT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_RESULT_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/><Column id=\"atcngJobSe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_atcngReqstTrmnatCnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NEW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CAN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"atcngJobSe\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"monCal\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_atcngReqstCntChck",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_CODE_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_CODE_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCNG_JOB_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DATA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ST_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"BT_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_atcngJobSe</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">업무구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("1");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_atcngReqstYm","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("358");_a.set_text("신청년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","85","5","84","21",null,null,this.div_search);_a.set_taborder("359");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_atcngReqstYm00","absolute","184","5","64","21",null,null,this.div_search);_a.set_taborder("360");_a.set_text("업무구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_atcngJobSe","absolute","248","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("361");_a.set_type("search");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_atcngJobSe");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static02","absolute","0","33",null,"10","28",null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","0",this);_a.set_taborder("4");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("sta_titHcntrctrList","absolute","0","0",null,"19","860",null,this.div_work);_a.set_taborder("0");_a.set_text("자동이체 신청내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Button("btn_readFile","absolute",null,"0","80","19","165",null,this.div_work);_a.set_taborder("1");_a.set_text("신청정보 읽기");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_saveFile","absolute",null,"0","80","19","83",null,this.div_work);_a.set_taborder("2");_a.set_text("신청정보 등록");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_resultFile","absolute",null,"0","80","19","1",null,this.div_work);_a.set_taborder("3");_a.set_text("결과파일생성");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Static("sta_infoBg","absolute","1","24",null,"27","1",null,this.div_work);_a.set_taborder("4");_a.set_cssclass("sta_WF_Data");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","19",null,"5","0",null,this.div_work);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sts_totalCnt","absolute","0","24","60","27",null,null,this.div_work);_a.set_taborder("6");_a.set_text("전체");_a.set_cssclass("sta_WF_DataTitle2");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo00","absolute","62","27","83","21",null,null,this.div_work);_a.set_taborder("7");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("sts_totalAmt","absolute","147","24","60","27",null,null,this.div_work);_a.set_taborder("8");_a.set_text("신규");_a.set_cssclass("sta_WF_DataTitle2");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo","absolute","209","27","80","21",null,null,this.div_work);_a.set_taborder("9");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("sts_defrayCnt","absolute","291","24","60","27",null,null,this.div_work);_a.set_taborder("10");_a.set_text("해지");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_DataTitle2");_a.style.set_align("center middle");_a.style.set_font("9 Gulim");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_cnclCo","absolute","353","27","80","21",null,null,this.div_work);_a.set_taborder("11");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","51",null,"10","-1",null,this.div_work);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_atcngRqestRciv","absolute","1","61",null,null,"1","1",this.div_work);_a.set_taborder("13");_a.set_binddataset("ds_atcngReqstTrmnat");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"82\"/><Column size=\"79\"/><Column size=\"83\"/><Column size=\"70\"/><Column size=\"105\"/><Column size=\"60\"/><Column size=\"88\"/><Column size=\"100\"/><Column size=\"104\"/><Column size=\"64\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"자료구분\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"은행코드\"/><Cell col=\"4\" text=\"지점\"/><Cell col=\"5\" text=\"계좌번호\"/><Cell col=\"6\" text=\"예금주\"/><Cell col=\"7\" text=\"FBS번호\"/><Cell col=\"8\" text=\"납부자번호\"/><Cell col=\"9\" text=\"이체일자\"/><Cell col=\"10\" text=\"신청구분\"/><Cell col=\"11\" text=\"처리결과\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DTA_SE\"/><Cell col=\"2\" displaytype=\"expr:REQST_DE == null  ? &quot;nomal&quot;  : 'date'\" style=\"align:center;\" text=\"bind:REQST_DE\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:BANK_CODE\"/><Cell col=\"4\" text=\"bind:REQST_SPOT_CODE\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ACNUTNO\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:DPSTR\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:FBS_MANAGE_NO\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:PAYER_NO\" mask=\"###-####-####\"/><Cell col=\"9\" displaytype=\"expr:TRANSFR_HOPE_DE == null  ? &quot;nomal&quot;  : 'date'\" style=\"align:center;\" text=\"bind:TRANSFR_HOPE_DE\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:REQST_SE_NM\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:REQST_RESULT_CODE\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","455","28","190","21",null,null,this.div_work);_a.set_taborder("14");_a.set_text("참고 :   은행 -> 공사");_a.style.set_color("cadetblue");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("4");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02040401");_b.set_titletext("자동이체신청등록");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_work.msk_newCo00","value","ds_atcngReqstTrmnatCnt","TOTAL_CNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.msk_newCo","value","ds_atcngReqstTrmnatCnt","NEW_CNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_work.msk_cnclCo","value","ds_atcngReqstTrmnatCnt","CAN_CNT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT02040401.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT02040401.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02040401.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT02040401.xfdl",function(){this.FILE_MANAGER=null;this.SAM_ENTRPS_CODE="1640010";this.SAM_ENTRPS_CODE_FIELD="ENTRPS_CODE";this.SAM_INSTT_CODE="1440000";this.SAM_INSTT_CODE_FIELD="FBS_MANAGE_NO";this.RNT02040401_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT02040401_onload=function(_a,_b){var _c=this.dateUtils.today();this.div_search.div_monCal.setValue(this.comUtils.getClientDate("YYYYMM"));this.fn_load_combo();var _d={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.FILE_MANAGER=new this.fileManager(this,"PMS","RNT");this.FILE_MANAGER.init(_d);this.fn_setFileMappinfInfo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_atcngJobSe,"선택");this.fn_get_cmmCode(this.ds_atcngJobSe,"",{grpCode:"PCOM05",option1:"prm"});};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return;}this.ds_atcngReqstTrmnat.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectAtcngReqstTrmnatList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectAtcngReqstTrmnatList":var _c="/hsco/pms/rnt/prm/RNT02040401/selectAtcngReqstTrmnatList.do";var _d="input1=ds_cond00";var _e="ds_atcngReqstTrmnat=output1 ds_atcngReqstTrmnatCnt=output2";break;case "selectAtcngReqstCntChck":var _c="/hsco/pms/rnt/prm/RNT02040401/selectAtcngReqstCntChck.do";var _d="input1=ds_cond00";var _e="ds_atcngReqstCntChck=output1";break;case "saveAtcngReqstTrmnat":var _c="/hsco/pms/rnt/prm/RNT02040401/saveAtcngReqstTrmnat.do";var _d="input1=ds_cond00";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){if(_a=="selectAtcngReqstCntChck"){this.fn_checkProcessCnt();this.fn_callback_message(_a,_b,_c);}else{this.fn_callback_message(_a,_b,_c);}if(_a=="saveAtcngReqstTrmnat"){this.gfn_callback_message(_a,_b,_c);this.fn_search();}var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.fn_onFileSelected=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){var _c=this.FILE_MANAGER.getfileCount();var _d=this.pmsUtil.isArray(_b);if(_d){}else{this.ds_atcngReqstCntChck.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectAtcngReqstCntChck");}}};this.fn_checkProcessCnt=function(){var _a=this.ds_atcngReqstCntChck.getColumn(0,"CHK_CNT");if(Number(_a)>0){var _b=this.div_search.div_monCal.value;var _c="해당 [신청월("+_b+")]로 처리된 자료가 있습니다.\n다시 처리하시겠습니까?";if(confirm(_c)){this.fn_uploadAtcngReqstFile();}else{this.fn_resetAtchFile();}}else{this.fn_uploadAtcngReqstFile();}};this.fn_uploadAtcngReqstFile=function(){var _a=this.FILE_MANAGER.hasFile();if(_a){this.ds_cond02.setColumn(0,"ATCNG_JOB_SE",this.div_search.cmb_atcngJobSe.value);this.ds_cond02.setColumn(0,"REQST_YM",this.div_search.div_monCal.value);this.ds_cond02.setColumn(0,"INSTT_CODE",this.SAM_INSTT_CODE);this.ds_cond02.setColumn(0,"ENTRPS_CODE",this.SAM_ENTRPS_CODE);this.ds_cond02.setColumn(0,"INSTT_CODE_FIELD",this.SAM_INSTT_CODE_FIELD);this.ds_cond02.setColumn(0,"ENTRPS_CODE_FIELD",this.SAM_ENTRPS_CODE_FIELD);this.pmsUtil.dumper(this.ds_cond02);this.pmsUtil.clearDataSet([this.ds_atcngReqstTrmnat,this.ds_atcngReqstTrmnatCnt]);var _b="hsco/pms/rnt/prm/RNT02040401/uploadAtcngReqstFile.do";var _c="input1=ds_cond02 inputField=ds_cond01";var _d="ds_atcngReqstTrmnatCnt=footInfo ds_atcngReqstTrmnat=bodyList";this.FILE_MANAGER.upload(_b,_c,_d);}else{alert("업로드 할 파일이 없습니다.");}};this.fn_setFileMappinfInfo=function(){var _a=[{DATA_SE:"S",FIELD_NAME:"DATA_SE",ST_IDX:"1",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"BANK_CODE",ST_IDX:"3",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"ENTRPS_CODE",ST_IDX:"5",BT_LENGTH:"7",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"TRAN_DATE",ST_IDX:"12",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"MIN_REQST_DATE",ST_IDX:"18",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"S",FIELD_NAME:"MAX_REQST_DATE",ST_IDX:"24",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"DTA_SE",ST_IDX:"0",BT_LENGTH:"1",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"REQST_DE",ST_IDX:"1",BT_LENGTH:"6",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"BANK_CODE",ST_IDX:"7",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"ACNUTNO",ST_IDX:"9",BT_LENGTH:"15",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"FBS_MANAGE_NO",ST_IDX:"24",BT_LENGTH:"7",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"HOUSE_CODE",ST_IDX:"31",BT_LENGTH:"3",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"PAYER_NO",ST_IDX:"31",BT_LENGTH:"23",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"REQST_SE",ST_IDX:"54",BT_LENGTH:"1",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"TRANSFR_HOPE_DE",ST_IDX:"55",BT_LENGTH:"2",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"REQST_SPOT_CODE",ST_IDX:"57",BT_LENGTH:"3",DATA_TYPE:"string"},{DATA_SE:"D",FIELD_NAME:"DPSTR",ST_IDX:"60",BT_LENGTH:"12",DATA_TYPE:"han"},{DATA_SE:"E",FIELD_NAME:"TOTAL_CNT",ST_IDX:"1",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"NEW_CNT",ST_IDX:"8",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"CAN_CNT",ST_IDX:"15",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"ETC_CNT",ST_IDX:"22",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT1",ST_IDX:"29",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT2",ST_IDX:"36",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT3",ST_IDX:"43",BT_LENGTH:"7",DATA_TYPE:"int"},{DATA_SE:"E",FIELD_NAME:"RESERV_CNT4",ST_IDX:"50",BT_LENGTH:"7",DATA_TYPE:"int"}];this.pmsUtil.putListToDataset(this.ds_cond01,_a);};this.btn_readFile_onclick=function(_a,_b){this.fn_addAtchFile();};this.fn_addAtchFile=function(){var _a=["txt"];this.FILE_MANAGER.addFiles(_a,false);};this.btn_resultFile_onclick=function(_a,_b){this.fn_downloadAtcngReqstFile();};this.btn_saveFile_onclick=function(_a,_b){if(this.ds_atcngReqstTrmnat.rowcount<0){this.alert("신청정보가 존재하지 않습니다.");return;}this.fn_transaction("saveAtcngReqstTrmnat");};this.fn_downloadAtcngReqstFile=function(){this.pmsUtil.clearDataSet([this.ds_cond03]);var _a=this.div_search.div_monCal.value;var _b="RNT"+_a.substring(4,6)+".txt";var _c=this.div_search.cmb_atcngJobSe.value;this.ds_cond03.setColumn(0,"monCal",_a);this.ds_cond03.setColumn(0,"FILE_NM",_b);this.ds_cond03.setColumn(0,"atcngJobSe",_c);var _d="/hsco/pms/rnt/prm/RNT02040401/downloadAtcngReqstFile.do";var _e="input1=ds_cond03";this.FILE_MANAGER.dataFileDownload(_d,_e,_b);};this.fn_onFileSuccess=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){this.alert("처리완료");this.fn_transaction("selectAtcngReqstTrmnatList");}if(_a==this.FILE_MANAGER.TYPE_DOWNLOADER){this.alert("다운로드완료");}};this.div_search_cmb_atcngJobSe_canitemchange=function(_a,_b){var _c=_b.postvalue;if(_c=="03"){this.SAM_ENTRPS_CODE="1640010";this.SAM_INSTT_CODE="1440000";}else{this.SAM_ENTRPS_CODE="2141270";this.SAM_INSTT_CODE="1430000";}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040401_oninit,this);this.addEventHandler("onload",this.RNT02040401_onload,this);this.div_search.cmb_atcngJobSe.addEventHandler("canitemchange",this.div_search_cmb_atcngJobSe_canitemchange,this);this.div_work.btn_readFile.addEventHandler("onclick",this.btn_readFile_onclick,this);this.div_work.btn_saveFile.addEventHandler("onclick",this.btn_saveFile_onclick,this);this.div_work.btn_resultFile.addEventHandler("onclick",this.btn_resultFile_onclick,this);this.div_work.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_work.msk_newCo.addEventHandler("oneditclick",this.msk_newCo_oneditclick,this);};this.loadIncludeScript("RNT02040401.xfdl");this.loadPreloadList();};})();