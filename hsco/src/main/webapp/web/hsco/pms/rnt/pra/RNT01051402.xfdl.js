﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01051402");this.set_classname("RNT01051402");this.set_titletext("자동이체청구");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"payTmlmt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_atcngJobSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_etcVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IN_BILL_YM\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TRANS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REC_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ATCNG_JOB_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_atcngRqestRciv",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFRAY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFRAY_REQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFRAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ATCNG_JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFRAY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFRAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAM_ENTRPS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_atcngReqstYm","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("358");_a.set_text("신청년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","85","5","84","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_atcngReqstYm00","absolute","184","5","64","21",null,null,this.div_search);_a.set_taborder("360");_a.set_text("업무구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_atcngJobSe","absolute","248","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_atcngJobSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Static("Static05","absolute","363","5","64","21",null,null,this.div_search);_a.set_taborder("362");_a.set_text("이체일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_transfrDe","absolute","427","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_titSelFile","absolute",null,"43","500","19","99",null,this);_a.set_taborder("3");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Button("btn_chgRqestData","absolute",null,"43","80","19","109",null,this);_a.set_taborder("4");_a.set_text("청구파일변환");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_atcngRqestRciv","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_atcngRqestRciv");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"청구년월\"/><Cell col=\"5\" text=\"은행\"/><Cell col=\"6\" text=\"계좌번호\"/><Cell col=\"7\" text=\"청구금액\"/><Cell col=\"8\" text=\"출금일자\"/><Cell col=\"9\" text=\"신청계좌수\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:DONG\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:HO\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:NM\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:DEFRAY_YM\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:BANK_CODE\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ACNUTNO\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEFRAY_REQEST_AMOUNT\"/><Cell col=\"8\" displaytype=\"date\" style=\"align:center;\" text=\"bind:DEFRAY_DE\"/><Cell col=\"9\" style=\"align:center;\" text=\"bind:ACNUTNO_CNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","713",null,"22","27",null,this);_a.set_taborder("8");_a.set_text("22");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_rqestPrint","absolute",null,"43","80","19","28",null,this);_a.set_taborder("11");_a.set_text("의뢰서");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_creRqestData","absolute",null,"43","80","19","190",null,this);_a.set_taborder("14");_a.set_text("청구자료생성");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","13","735","0",null,this);_a.set_taborder("16");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01051402");_b.set_titletext("자동이체청구");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_transfrDe","value","ds_etcVal","IN_REC_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_atcngJobSe","value","ds_etcVal","IN_ATCNG_JOB_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT01051402.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT01051402.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01051402.xfdl",function(){this.FILE_MANAGER=null;this.RNT01051402_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01051402_onload=function(_a,_b){var _c=this.dateUtils.today();this.ds_etcVal.setColumn(0,"IN_REC_DATE",_c);this.div_search.div_monCal.setValue(this.comUtils.getClientDate("YYYYMM"));var _d={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.FILE_MANAGER=new this.fileManager(this,"PMS","PRA");this.FILE_MANAGER.init(_d);this.fn_load_combo();};this.fn_load_combo=function(){this.fn_get_cmmCode(this.ds_atcngJobSe,"",{grpCode:"PCOM05",option1:"pra"});};this.fn_search=function(){this.ds_atcngRqestRciv.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectAtcngRqestRciv");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectAtcngRqestRciv":var _c="/hsco/pms/rnt/pra/RNT01051402/selectAtcngRqestRciv.do";var _d="input1=ds_cond00";var _e="ds_atcngRqestRciv=output1";break;case "saveAtcngRqestRciv":var _c="/hsco/pms/rnt/pra/RNT01051402/saveAtcngRqestRciv.do";var _d="input1=ds_etcVal";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.btn_saveFile_onclick=function(_a,_b){this.fn_downloadAtcngReqstFile();};this.fn_downloadAtcngReqstFile=function(){this.pmsUtil.clearDataSet([this.ds_cond01]);var _a=this.div_search.div_monCal.getValue();var _b="RNT_PRA"+_a.substring(4,6)+".txt";var _c=this.div_search.cmb_atcngJobSe.value;this.ds_cond01.setColumn(0,"ATCNG_JOB_SE",_c);this.ds_cond01.setColumn(0,"DEFRAY_YM",this.div_search.div_monCal.getValue("YYYYMM"));this.ds_cond01.setColumn(0,"DEFRAY_DE",this.ds_etcVal.getColumn(0,"DEFRAY_DE"));this.ds_cond01.setColumn(0,"FILE_NM",_b);if(_c=="01"){this.ds_cond01.setColumn(0,"SAM_ENTRPS_CODE","2141270");}else{this.ds_cond01.setColumn(0,"SAM_ENTRPS_CODE","2140020");}var _d="/hsco/pms/rnt/pra/RNT01051402/downloadAtcngReqstFile.do";var _e="input1=ds_cond01";this.debug(this.ds_cond01);this.FILE_MANAGER.dataFileDownload(_d,_e,_b);};this.fn_onFileSuccess=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){this.fn_setSelFileInfoTitle();}if(_a==this.FILE_MANAGER.TYPE_DOWNLOADER){alert("다운로드완료");}};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "selectAtcngRqestRciv":this.fn_callback_message(_a,_b,_c);break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.btn_creRqestData_onclick=function(_a,_b){var _c=this.dateUtils.format(this.dateUtils.today(),'yyyymmdd');this.ds_etcVal.setColumn(0,"IN_BILL_YM",this.div_search.div_monCal.getValue("YYYYMM"));this.ds_etcVal.setColumn(0,"IN_REC_YMD",this.gfn_lastDateNum(_c));this.ds_etcVal.setColumn(0,"IN_TRANS_YMD",this.dateUtils.today());this.fn_transaction("saveAtcngRqestRciv");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01051402_oninit,this);this.addEventHandler("onload",this.RNT01051402_onload,this);this.div_search.cmb_atcngJobSe.addEventHandler("canitemchange",this.div_search_cmb_atcngJobSe_canitemchange,this);this.btn_chgRqestData.addEventHandler("onclick",this.btn_saveFile_onclick,this);this.btn_rqestPrint.addEventHandler("onclick",this.btn_resultFile_onclick,this);this.btn_creRqestData.addEventHandler("onclick",this.btn_creRqestData_onclick,this);};this.loadIncludeScript("RNT01051402.xfdl");this.loadPreloadList();};})();