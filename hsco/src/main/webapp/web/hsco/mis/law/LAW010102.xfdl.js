﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("LAW010102");this.set_classname("LAW010102");this.set_titletext("법무코드관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><ConstColumn id=\"pageIndex\" type=\"INT\" size=\"30\" value=\"1\"/><ConstColumn id=\"pageSize\" type=\"INT\" size=\"30\" value=\"5\"/><ConstColumn id=\"pageUnit\" type=\"INT\" size=\"30\" value=\"5\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"100\"/><Column id=\"GRP_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRP_CODE_NM\"/><Col id=\"GRP_CODE\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_grpCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"JOB_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"GRP_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GRP_CODE_DC\" type=\"STRING\" size=\"1000\"/><Column id=\"GRP_CODE_LVL\" type=\"INT\" size=\"3\"/><Column id=\"GRP_CODE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_code",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"CODE\" type=\"STRING\" size=\"6\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"100\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"INT\" size=\"10\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"FLOAT\" size=\"8\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_GRP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_grpCode</Col><Col id=\"colId\">GRP_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">코드</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_grpCode</Col><Col id=\"colId\">GRP_CODE_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">코드명</Col></Row><Row><Col id=\"compId\">ds_code</Col><Col id=\"colId\">CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">상세코드</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_code</Col><Col id=\"colId\">CODE_NM</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">상세코드명</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_code</Col><Col id=\"colId\">CODE_ORDR</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">정렬순서</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_codeNm","absolute","15","5","50","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("코드명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_codeNm","absolute","70","5","110","21",null,null,this.div_search);_a.set_taborder("0");_a.set_lengthunit("utf8");_a.set_maxlength("20");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_grpCode","absolute","0","34","307",null,null,"10",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_grpCode");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:GRP_CODE\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:GRP_CODE_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_lawCodeList","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("6");_a.set_text("법무코드목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_Add_Row","absolute",null,"10","64","19","133",null,this.div_work);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.addChild(_a.name,_a);_a=new Button("btn_Del_Row","absolute",null,"10","64","19","67",null,this.div_work);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.addChild(_a.name,_a);_a=new Button("btn_Can_Row","absolute",null,"10","64","19","0",null,this.div_work);_a.set_taborder("3");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","307","7","10","680",null,null,this.div_work);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_code","absolute","317","34",null,null,"0","10",this.div_work);_a.set_taborder("4");_a.set_binddataset("ds_code");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"상세코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"상세코드명\"/><Cell col=\"3\" text=\"비고\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"정렬순서\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:CODE\" editimemode=\"alpha\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:CODE_NM\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:CODE_CN\"/><Cell col=\"4\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:CODE_ORDR\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute","282","10","25","19",null,null,this.div_work);_a.set_taborder("9");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("1");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("LAW010102");_b.set_titletext("법무코드관리");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("LAW010102.xfdl","lib::comInclude.xjs");this.addIncludeScript("LAW010102.xfdl","mis_lib::misUtil.xjs");this.registerScript("LAW010102.xfdl",function(){var _a= -1;this.checkDs=[this.ds_grpCode,this.ds_code];this.LAW010102_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.LAW010102_onload=function(_b,_c){this.div_search.edt_codeNm.setFocus(true);this.fn_search();};this.fn_search=function(){this.ds_grpCode.clearData();this.ds_code.clearData();this.fn_transaction("selectLawCodeList");};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grpCode)&&!this.comUtils.isDatasetUpdated(this.ds_code)){this.gfn_message("comm.내역.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_grpCode,this.ds_validation)){return;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_code,this.ds_validation)){return;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_code,this.ds_validation2)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_grpCode.rowposition;this.fn_transaction("lawCodeListCUD");}};this.fn_transaction=function(_b){switch(_b){case "selectLawCodeList":this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"GRP_CODE","LAW");this.ds_cond.setColumn(0,"GRP_CODE_NM",this.div_search.edt_codeNm.value);this.ds_cond.setColumn(0,"SYS_SE_CODE","MIS");this.ds_cond.setColumn(0,"USE_AT","1");var _c="hsco/mis/law/LAW010102/selectLawCodeList.do";var _d="input01=ds_cond";var _e="ds_grpCode=output01";break;case "lawCodeListCUD":var _c="hsco/mis/law/LAW010102/lawCodeListCUD.do";var _d="input02=ds_grpCode:U input04=ds_code:U";var _e="";break;case "selectLawDetailCodeList":this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"GRP_CODE_SN",this.ds_grpCode.getColumn(this.ds_grpCode.rowposition,"GRP_CODE_SN"));this.ds_cond2.setColumn(0,"GRP_CODE",this.ds_grpCode.getColumn(this.ds_grpCode.rowposition,"GRP_CODE"));var _c="hsco/mis/law/LAW010102/selectLawDetailCodeList.do";var _d="input03=ds_cond2";var _e="ds_code=output03";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "lawCodeListCUD":this.fn_search();break;case "selectLawDetailCodeList":if(_a!= -1){this.ds_grpCode.set_rowposition(_a);_a= -1;}break;}}};this.fn_insert=function(){var _b=this.ds_grpCode.addRow();this.ds_grpCode.setColumn(_b,"USE_AT","1");var _c=this.ds_grpCode.getColumn(_b-1,"GRP_CODE");var _d=nexacro.toNumber(_c.substring(3,6))+1;if(_d<100){_d="0"+_d;}this.ds_grpCode.setColumn(_b,"GRP_CODE","LAW"+_d);};this.fn_delete=function(){if(this.ds_code.rowcount>0){this.gfn_message("fail.삭제.불가","상세코드목록이 존재하는 코드는");}else{if(this.gfn_message("confirm.삭제여부")){var _b=this.ds_grpCode.rowposition;this.ds_grpCode.deleteRow(_b);}}};this.fn_cancel=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grpCode)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_grpCode.reset();this.ds_grpCode.applyChange();return;}}};this.div_Cont_btn_Add_Row01_onclick=function(_b,_c){if(this.comUtils.isNull(this.ds_grpCode.getColumn(this.ds_grpCode.rowposition,"REGIST_DT"))){this.gfn_message("comm.정보.저장.요청","먼저 그룹코드");}else{var _d=this.ds_code.addRow();this.ds_code.setColumn(_d,"GRP_CODE_SN",this.ds_grpCode.getColumn(this.ds_grpCode.rowposition,"GRP_CODE_SN"));this.ds_code.setColumn(_d,"GRP_CODE",this.ds_grpCode.getColumn(this.ds_grpCode.rowposition,"GRP_CODE"));this.ds_code.setColumn(_d,"GRP_CODE_NM",this.ds_grpCode.getColumn(this.ds_grpCode.rowposition,"GRP_CODE_NM"));this.ds_code.setColumn(_d,"CODE_ORDR",this.ds_code.rowposition+1);this.ds_code.setColumn(_d,"USE_AT",1);}};this.div_Cont_btn_Del_Row01_onclick=function(_b,_c){if(this.gfn_message("confirm.삭제여부")){var _d=this.ds_code.rowposition;this.ds_code.deleteRow(_d);}};this.div_Cont_btn_Can_Row01_onclick=function(_b,_c){if(!this.comUtils.isDatasetUpdated(this.ds_code)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_code.reset();this.ds_code.applyChange();return;}}};this.ds_grpCode_onrowposchanged=function(_b,_c){this.fn_transaction("selectLawDetailCodeList");};this.div_work_grd_grpCode_onheadclick=function(_b,_c){this.gfn_gridSort(_b,_c);};this.div_work_grd_code_onheadclick=function(_b,_c){this.gfn_gridSort(_b,_c);};this.ds_grpCode_canrowposchange=function(_b,_c){if(Ex.util.isUpdated(this.ds_code)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}else{this.ds_code.reset();return true;}}};this.ds_code_oncolumnchanged=function(_b,_c){this.ds_code.set_updatecontrol(false);if(_c.columnid=="CODE"){var _d=_c.newvalue;var _e=_b.findRow(_c.columnid,_c.newvalue,0,_c.row);var _f=_b.findRow(_c.columnid,_c.newvalue,_c.row+1,_b.rowcount);if(_e> -1||_f> -1){this.gfn_message("info.항목.중복","상세코드");_b.setColumn(_c.row,_c.columnid,_c.oldvalue);}}if(_c.columnid=="CODE_ORDR"){var _g=_c.newvalue;var _h=_b.findRow(_c.columnid,_c.newvalue,0,_c.row);var _i=_b.findRow(_c.columnid,_c.newvalue,_c.row+1,_b.rowcount);if(_h> -1||_i> -1){this.gfn_message("info.항목.중복","정렬순서");_b.setColumn(_c.row,_c.columnid,_c.oldvalue);}}this.ds_code.set_updatecontrol(true);};this.ds_grpCode_oncolumnchanged=function(_b,_c){this.ds_grpCode.set_updatecontrol(false);if(_c.columnid=="GRP_CODE"){var _d=_c.newvalue;var _e=_b.findRow(_c.columnid,_c.newvalue,0,_c.row);var _f=_b.findRow(_c.columnid,_c.newvalue,_c.row+1,_b.rowcount);if(_e> -1||_f> -1){this.gfn_message("info.항목.중복","코드");_b.setColumn(_c.row,_c.columnid,_c.oldvalue);}}this.ds_grpCode.set_updatecontrol(true);};this.div_work_btn_excelDn_onclick=function(_b,_c){this.gfn_exportExcel(this.div_work.grd_grpCode,"grpCode");};});this.on_initEvent=function(){this.ds_grpCode.addEventHandler("onrowposchanged",this.ds_grpCode_onrowposchanged,this);this.ds_grpCode.addEventHandler("canrowposchange",this.ds_grpCode_canrowposchange,this);this.ds_grpCode.addEventHandler("oncolumnchanged",this.ds_grpCode_oncolumnchanged,this);this.ds_code.addEventHandler("oncolumnchanged",this.ds_code_oncolumnchanged,this);this.addEventHandler("oninit",this.LAW010102_oninit,this);this.addEventHandler("onload",this.LAW010102_onload,this);this.div_work.grd_grpCode.addEventHandler("onheadclick",this.div_work_grd_grpCode_onheadclick,this);this.div_work.sta_lawCodeList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.btn_Add_Row.addEventHandler("onclick",this.div_Cont_btn_Add_Row01_onclick,this);this.div_work.btn_Del_Row.addEventHandler("onclick",this.div_Cont_btn_Del_Row01_onclick,this);this.div_work.btn_Can_Row.addEventHandler("onclick",this.div_Cont_btn_Can_Row01_onclick,this);this.div_work.grd_code.addEventHandler("onheadclick",this.div_work_grd_code_onheadclick,this);this.div_work.btn_excelDn.addEventHandler("onclick",this.div_work_btn_excelDn_onclick,this);};this.loadIncludeScript("LAW010102.xfdl");};})();