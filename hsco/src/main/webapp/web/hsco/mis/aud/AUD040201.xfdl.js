﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD040201");this.set_classname("AUD040201");this.set_titletext("퀴즈관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_qustnrManageList</Col><Col id=\"colId\">SJ</Col><Col id=\"msgId\">제목</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_qustnrManageList</Col><Col id=\"colId\">QUSTNR_BGNDE</Col><Col id=\"msgId\">설문시작일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_qustnrManageList</Col><Col id=\"colId\">QUSTNR_ENDDE</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">설문종료일자</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row><Row><Col id=\"compId\">ds_qustnrManageList</Col><Col id=\"colId\">QUSTNR_BGNDE</Col><Col id=\"to\">QUSTNR_ENDDE</Col><Col id=\"msgId\">설문시작일자^설문종료일자</Col></Row><Row><Col id=\"compId\">ds_qustnrDtlsManageList</Col><Col id=\"colId\">QUEST_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">질의내용</Col></Row><Row><Col id=\"compId\">ds_qustnrDtlsManageList</Col><Col id=\"colId\">SORT_ORDR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">질의정렬순서</Col></Row><Row><Col id=\"compId\">ds_qustnrAswperManageList</Col><Col id=\"colId\">ASWPER_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">답안내용</Col></Row><Row><Col id=\"compId\">ds_qustnrAswperManageList</Col><Col id=\"colId\">SORT_ORDR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">답안정렬순서</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"QUSTNR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_qustnrDtlsManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"QUSTNR_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_DTLS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUEST_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLNA_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_qustnrAswperManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"QUSTNR_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_DTLS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_ASWPER_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ASWPER_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CNSR_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_qustnrManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"QUSTNR_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_ENDDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond3",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"QUSTNR_DTLS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_MANAGE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"QUSTNR_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"QUSTNR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0",null,null,"5","0","0",this.div_search);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ym","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("조회년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_ym","absolute","79","5","85","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("201801");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("12");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","621","0","10",null,null,"0",this);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static61","absolute","0","33","1032","10",null,null,this);_a.set_taborder("23");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult00","absolute","0","43","75","19",null,null,this);_a.set_taborder("24");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");_a.set_text("기본정보");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","62","1032","5",null,null,this);_a.set_taborder("25");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult01","absolute","0","218","75","19",null,null,this);_a.set_taborder("54");_a.set_text("질문관리");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("86");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","237","1032","5",null,null,this);_a.set_taborder("87");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_qustnrDtlsManageList","absolute","0","242",null,null,"438","0",this);_a.set_taborder("7");_a.set_binddataset("ds_qustnrDtlsManageList");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"질의내용\"/><Cell col=\"2\" text=\"해설내용\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:QUEST_CN\" editlimit=\"1000\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:EXPLNA_CN\" editlimit=\"1000\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"3\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:SORT_ORDR\" mask=\"##\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_qustnrAswperManageList","absolute",null,"242","400",null,"28","0",this);_a.set_taborder("11");_a.set_binddataset("ds_qustnrAswperManageList");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"답안내용\"/><Cell col=\"2\" text=\"정답여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ASWPER_CN\" editlimit=\"1000\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNSR_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult02","absolute",null,"218","75","19","353",null,this);_a.set_taborder("90");_a.set_text("답안관리");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_aswper_add","absolute",null,"217","64","21","160",null,this);_a.set_taborder("8");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_aswper_delete","absolute",null,"217","64","21","94",null,this);_a.set_taborder("9");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_aswper_cancel","absolute",null,"217","64","21","28",null,this);_a.set_taborder("10");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Button("btn_dtls_add","absolute",null,"217","64","21","570",null,this);_a.set_taborder("4");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_dtls_delete","absolute",null,"217","64","21","504",null,this);_a.set_taborder("5");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_dtls_cancel","absolute",null,"217","64","21","438",null,this);_a.set_taborder("6");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","208","1032","10",null,null,this);_a.set_taborder("102");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_qustnrManageList","absolute","0","67",null,"141","28",null,this);_a.set_taborder("103");_a.set_binddataset("ds_qustnrManageList");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_autoupdatetype("dateselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"500\"/><Column size=\"100\"/><Column size=\"10\"/><Column size=\"10\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"설문년월\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" colspan=\"2\" text=\"설문시작일자\"/><Cell col=\"5\" colspan=\"2\" text=\"설문종료일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:YM\" mask=\"####-##\" maskchar=\" \" editdisplay=\"edit\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:SJ\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:QUSTNR_BGNDE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" colspan=\"2\" text=\"~\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:QUSTNR_ENDDE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("AUD040201");_b.set_titletext("퀴즈관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.spn_year","value","ds_cond","APPLC_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("AUD040201.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD040201.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD040201.xfdl",function(){this.saveRow= -1;this.AUD040201_oninit=function(_a,_b){};this.AUD040201_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.div_search.div_ym.fn_setBind("ds_cond","YM");};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"QUSTNR_SE","01");this.ds_cond.setColumn(0,"YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));this.ds_cond.setColumn(0,"QUSTNR_MANAGE_SN","");this.fn_search();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_qustnrManageList)||Ex.util.isUpdated(this.ds_qustnrDtlsManageList)||Ex.util.isUpdated(this.ds_qustnrAswperManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_qustnrManageList.clearData();this.ds_qustnrDtlsManageList.clearData();this.ds_qustnrAswperManageList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectSjList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_qustnrManageList)&&!this.comUtils.isDatasetUpdated(this.ds_qustnrDtlsManageList)&&!this.comUtils.isDatasetUpdated(this.ds_qustnrAswperManageList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_qustnrManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_qustnrDtlsManageList,this.ds_validation)||!this.gfn_checkValidation_NoUpdChk(this.ds_qustnrAswperManageList,this.ds_validation)){return;}var _a=this.ds_qustnrManageList.rowposition;var _b=this.ds_qustnrManageList.getColumn(_a,"QUSTNR_BGNDE");var _c=this.ds_qustnrManageList.getColumn(_a,"QUSTNR_ENDDE");var _d=this.ds_qustnrManageList.getColumn(_a,"QUSTNR_MANAGE_SN");var _e=this.ds_qustnrAswperManageList.getCaseCount("CNSR_AT == '1'");if(this.ds_qustnrAswperManageList.rowcount>0&&_e<1){this.gfn_message("info.처리불가","답안의 정답 여부를 선택해주세요.");return false;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_insert=function(){var _a=this.ds_cond.getColumn(0,"YM");var _b=this.dateUtils.format(this.gfn_today(),"yyyymmdd");var _c=this.ds_qustnrManageList.addRow();this.ds_qustnrManageList.setColumn(_c,"QUSTNR_SE","01");this.ds_qustnrManageList.setColumn(_c,"YM",_a);this.ds_qustnrManageList.setColumn(_c,"QUSTNR_DE",_b);this.ds_qustnrDtlsManageList.clearData();this.ds_qustnrAswperManageList.clearData();};this.fn_delete=function(){if(this.ds_qustnrManageList.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){var _a=this.ds_qustnrManageList.rowposition;this.ds_qustnrManageList.deleteRow(_a);this.ds_qustnrDtlsManageList.clearData();this.ds_qustnrAswperManageList.clearData();}}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_qustnrManageList)||Ex.util.isUpdated(this.ds_qustnrDtlsManageList)||Ex.util.isUpdated(this.ds_qustnrAswperManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_qustnrAswperManageList.reset();this.ds_qustnrAswperManageList.applyChange();this.ds_qustnrDtlsManageList.reset();this.ds_qustnrDtlsManageList.applyChange();this.ds_qustnrManageList.reset();this.ds_qustnrManageList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectSjList":var _b="hsco/mis/aud/AUD040201/selectSjList.do";var _c="input1=ds_cond";var _d="ds_qustnrManageList=output1";break;case "select":var _b="hsco/mis/aud/AUD040201/select.do";var _c="input1=ds_cond2";var _d="ds_qustnrDtlsManageList=output2";break;case "selectAswper":var _b="hsco/mis/aud/AUD040201/selectAswper.do";var _c="input1=ds_cond3";var _d="ds_qustnrAswperManageList=output1";break;case "save":var _b="hsco/mis/aud/AUD040201/save.do";var _c="input1=ds_qustnrManageList:U input2=ds_qustnrDtlsManageList:U input3=ds_qustnrAswperManageList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectSjList":this.div_search.cmb_qustnrList.set_index(0);this.fn_search();case "select":break;case "selectAswper":break;case "save":this.fn_search();break;}}};this.ds_qustnrDtlsManageList_onrowposchanged=function(_a,_b){this.ds_qustnrAswperManageList.clearData();if(_b.newrow> -1){var _c=_a.rowposition;var _d=this.ds_qustnrDtlsManageList.getColumn(_c,"QUSTNR_MANAGE_SN");var _e=this.ds_qustnrDtlsManageList.getColumn(_c,"QUSTNR_SE");var _f=this.ds_qustnrDtlsManageList.getColumn(_c,"QUSTNR_DTLS_SN");this.ds_cond3.clearData();this.ds_cond3.addRow();this.ds_cond3.setColumn(0,"QUSTNR_MANAGE_SN",_d);this.ds_cond3.setColumn(0,"QUSTNR_SE",_e);this.ds_cond3.setColumn(0,"QUSTNR_DTLS_SN",_f);this.fn_transaction("selectAswper");}};this.ds_qustnrDtlsManageList_canrowposchange=function(_a,_b){if(Ex.util.isUpdated(this.ds_qustnrAswperManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_qustnrAswperManageList.reset();this.ds_qustnrAswperManageList.applyChange();};this.ds_qustnrManageList_canrowposchange=function(_a,_b){trace("ds_qustnrManageList_canrowposchange");if(Ex.util.isUpdated(this.ds_qustnrDtlsManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_qustnrDtlsManageList.reset();this.ds_qustnrDtlsManageList.applyChange();};this.ds_qustnrAswperManageList_cancolumnchange=function(_a,_b){if(_b.columnid=="CNSR_AT"){var _c=this.ds_qustnrAswperManageList.getCaseCount("CNSR_AT == '1'");if(_c==1&&_b.newvalue=='1'){this.gfn_message("info.처리불가","이미 정답이 존재합니다.");return false;}}};this.ds_qustnrManageList_onrowposchanged=function(_a,_b){this.ds_qustnrDtlsManageList.clearData();if(_b.newrow> -1){var _c=_a.rowposition;var _d=_a.getColumn(_c,"QUSTNR_MANAGE_SN");var _e=_a.getColumn(_c,"QUSTNR_SE");this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"QUSTNR_MANAGE_SN",_d);this.ds_cond2.setColumn(0,"QUSTNR_SE",_e);this.fn_transaction("select");}};this.btn_dtls_add_onclick=function(_a,_b){var _c=this.ds_qustnrManageList.rowposition;if(_c<0){this.gfn_message("comm.항목.선택.요청","기본정보 내역");return false;}if(this.ds_qustnrManageList.getRowType(_c)==2){this.gfn_message("comm.정보.저장.요청","기본정보 내역");return false;}var _d=this.ds_qustnrManageList.getColumn(_c,"QUSTNR_MANAGE_SN");var _e=this.ds_qustnrManageList.getColumn(_c,"QUSTNR_SE");var _f=this.ds_qustnrDtlsManageList.getMax("SORT_ORDR");var _g=this.ds_qustnrDtlsManageList.addRow();this.ds_qustnrDtlsManageList.setColumn(_g,"QUSTNR_MANAGE_SN",_d);this.ds_qustnrDtlsManageList.setColumn(_g,"QUSTNR_SE",_e);this.ds_qustnrDtlsManageList.setColumn(_g,"SORT_ORDR",this.fn_increseSortOrdr(_f));};this.btn_dtls_delete_onclick=function(_a,_b){if(this.ds_qustnrDtlsManageList.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){var _c=this.ds_qustnrDtlsManageList.rowposition;this.ds_qustnrDtlsManageList.deleteRow(_c);}}};this.btn_dtls_cancel_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_qustnrDtlsManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_qustnrDtlsManageList.reset();this.ds_qustnrDtlsManageList.applyChange();}};this.btn_aswper_add_onclick=function(_a,_b){var _c=this.ds_qustnrDtlsManageList.rowposition;if(_c<0){this.gfn_message("comm.항목.선택.요청","질문관리 내역");return false;}if(this.ds_qustnrDtlsManageList.getRowType(_c)==2){this.gfn_message("comm.정보.저장.요청","질문관리 내역");return false;}var _d=this.ds_qustnrDtlsManageList.getColumn(_c,"QUSTNR_MANAGE_SN");var _e=this.ds_qustnrDtlsManageList.getColumn(_c,"QUSTNR_SE");var _f=this.ds_qustnrDtlsManageList.getColumn(_c,"QUSTNR_DTLS_SN");var _g=this.ds_qustnrAswperManageList.addRow();this.ds_qustnrAswperManageList.setColumn(_g,"QUSTNR_MANAGE_SN",_d);this.ds_qustnrAswperManageList.setColumn(_g,"QUSTNR_SE",_e);this.ds_qustnrAswperManageList.setColumn(_g,"QUSTNR_DTLS_SN",_f);};this.btn_aswper_delete_onclick=function(_a,_b){if(this.ds_qustnrAswperManageList.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){var _c=this.ds_qustnrAswperManageList.rowposition;this.ds_qustnrAswperManageList.deleteRow(_c);}}};this.btn_aswper_cancel_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_qustnrAswperManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_qustnrAswperManageList.reset();this.ds_qustnrAswperManageList.applyChange();}};this.fn_increseSortOrdr=function(_a){var _b=!this.comUtils.isNull(_a)?nexacro.toNumber(_a):0;var _c=_b+1;return _c;};});this.on_initEvent=function(){this.ds_qustnrDtlsManageList.addEventHandler("onrowposchanged",this.ds_qustnrDtlsManageList_onrowposchanged,this);this.ds_qustnrDtlsManageList.addEventHandler("canrowposchange",this.ds_qustnrDtlsManageList_canrowposchange,this);this.ds_qustnrAswperManageList.addEventHandler("cancolumnchange",this.ds_qustnrAswperManageList_cancolumnchange,this);this.ds_qustnrManageList.addEventHandler("onrowposchanged",this.ds_qustnrManageList_onrowposchanged,this);this.ds_qustnrManageList.addEventHandler("canrowposchange",this.ds_qustnrManageList_canrowposchange,this);this.ds_cond3.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_cond2.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.AUD040201_onload,this);this.addEventHandler("oninit",this.AUD040201_oninit,this);this.Static00.addEventHandler("onclick",this.Static00_onclick,this);this.Static02.addEventHandler("onclick",this.Static00_onclick,this);this.btn_aswper_add.addEventHandler("onclick",this.btn_aswper_add_onclick,this);this.btn_aswper_delete.addEventHandler("onclick",this.btn_aswper_delete_onclick,this);this.btn_aswper_cancel.addEventHandler("onclick",this.btn_aswper_cancel_onclick,this);this.btn_dtls_add.addEventHandler("onclick",this.btn_dtls_add_onclick,this);this.btn_dtls_delete.addEventHandler("onclick",this.btn_dtls_delete_onclick,this);this.btn_dtls_cancel.addEventHandler("onclick",this.btn_dtls_cancel_onclick,this);};this.loadIncludeScript("AUD040201.xfdl");this.loadPreloadList();};})();