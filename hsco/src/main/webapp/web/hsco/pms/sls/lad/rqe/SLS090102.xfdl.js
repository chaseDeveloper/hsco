﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS090102");this.set_classname("SLS090102");this.set_titletext("우편라벨출력");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_ladCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_1\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_ladCodeSh</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">토지코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_infoType",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladLcntrctrPostLabelList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladLcntrctrPostLabelPrintList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_ladLcntrctrPostLabelList","absolute","0","69",null,null,"28","0",this);_a.set_taborder("3");_a.set_autofittype("none");_a.set_binddataset("ds_ladLcntrctrPostLabelList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"normal\" text=\"토지\"/><Cell col=\"3\" displaytype=\"normal\" text=\"BLT\"/><Cell col=\"4\" displaytype=\"normal\" text=\"용도\"/><Cell col=\"5\" displaytype=\"normal\" text=\"성명\"/><Cell col=\"6\" displaytype=\"normal\" text=\"주민번호\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" displaytype=\"normal\" text=\"주소\"/><Cell col=\"9\" displaytype=\"normal\" text=\"상세주소\"/><Cell col=\"10\" displaytype=\"normal\" text=\"전화번호\"/><Cell col=\"11\" displaytype=\"normal\" text=\"휴대폰\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ALL_LAD_NM\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:BLCK_LOT_TY\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:PRPOS_SE_NM\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:CSTMR_NM\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:IHIDNUM\"/><Cell col=\"7\" text=\"bind:ZIP\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ADRES\" tooltiptext=\"bind:ADRES\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ADRES_DETAIL\" tooltiptext=\"bind:ADRES_DETAIL\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:TELNO\"/><Cell col=\"11\" displaytype=\"normal\" text=\"bind:MBTLNO\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseCode01","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("87");_a.set_text("토지코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ladCodeSh","absolute","79","5","238","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("90");_a.set_innerdataset("ds_ladCodeSh");_a.set_codecolumn("LAD_CODE");_a.set_datacolumn("ALL_LAD_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_autoselect("true");_a.set_type("search");_a=new Static("Static00","absolute","332","5","51","21",null,null,this.div_search);_a.set_taborder("92");_a.set_text("용도별");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_infoType","absolute","383","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("93");_a.set_innerdataset("ds_infoType");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("true");_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","-16","33",null,"10","44",null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","43",null,"21","964",null,this);_a.set_taborder("8");_a.set_text("계약자 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS090102");_b.set_titletext("우편라벨출력");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_infoType","value","ds_cond","PRPOS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_ladCodeSh","value","ds_cond","LAD_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS090102.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS090102.xfdl",function(){this.SLS090102_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS090102_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_infoType","LAD003","1","전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);var _b={};_b["UASE_AT"]="1";this.pmsUtil.getLadCodeList(_b,"ds_ladCodeSh","fn_callbackAfter2");};this.fn_callbackAfter=function(){this.div_search.cmb_infoType.set_index(0);};this.fn_callbackAfter2=function(){this.ds_ladCodeSh.insertRow(0);this.ds_ladCodeSh.setColumn(0,"ALL_LAD_NM","선택");this.ds_ladCodeSh.setColumn(0,"LAD_NM","선택");this.div_search.cmb_ladCodeSh.set_index(0);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectLadLcntrctrPostLabelList");};this.fn_print=function(){var _a=0;this.ds_ladLcntrctrPostLabelPrintList.clearData();for(i=0;i<this.ds_ladLcntrctrPostLabelList.rowcount;i++ ){var _b=this.ds_ladLcntrctrPostLabelList.getColumn(i,"CHK");var _c=this.ds_ladLcntrctrPostLabelList.getColumn(i,"ADRES");var _d=this.ds_ladLcntrctrPostLabelList.getColumn(i,"ADRES_DETAIL");if(_b==1&&(!this.comUtils.isNullEmpty(_c)||!this.comUtils.isNullEmpty(_d))){var _e=this.ds_ladLcntrctrPostLabelPrintList.addRow();this.ds_ladLcntrctrPostLabelPrintList.copyRow(_e,this.ds_ladLcntrctrPostLabelList,i);_a++ ;}else{this.ds_ladLcntrctrPostLabelList.setColumn(i,"CHK",0);}}if(_a==0){this.gfn_message("info.선택데이터.없음.선택.요청");return;}var _f=new this.cf_Opts();var _g="/pms/sls/SLS090102_R01.jrf";var _h="우편라벨출력";var _i="우편라벨출력";_f.setLocalDs(["ds_ladLcntrctrPostLabelPrintList",this.ds_ladLcntrctrPostLabelPrintList]);_f.setToolbar(false);_f.setScale(100);_f.setReportPath(_g);_f.setSaveFilename(_h);_f.setArgs("title",_i);var _j={arg_0:this,opts:_f};this.gfn_popup("Popup_Report",884,735,_h,_j,"common::frmReportPopup.xfdl","report_callback");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectLadLcntrctrPostLabelList":var _c="/hsco/pms/sls/lad/rqe/SLS090102/selectLadLcntrctrPostLabelList.do";var _d="input1=ds_cond";var _e="ds_ladLcntrctrPostLabelList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "selectLadLcntrctrPostLabelList":if(this.ds_ladLcntrctrPostLabelList.getRowCount()>0){}else{this.alert("조회된 데이터가 없습니다.");}break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};});this.on_initEvent=function(){this.ds_ladLcntrctrPostLabelList.addEventHandler("onrowposchanged",this.ds_ladLcntrctrList_onrowposchanged,this);this.ds_ladLcntrctrPostLabelPrintList.addEventHandler("onrowposchanged",this.ds_ladLcntrctrList_onrowposchanged,this);this.addEventHandler("onload",this.SLS090102_onload,this);this.addEventHandler("oninit",this.SLS090102_oninit,this);};this.loadIncludeScript("SLS090102.xfdl");};})();