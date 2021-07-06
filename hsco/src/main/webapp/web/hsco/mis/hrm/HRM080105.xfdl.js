﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080105");this.set_classname("HRM080105");this.set_titletext("지정학습구분관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_code",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_JSSFC_2\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_JSSFC_3\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_JSSFC_4\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_JSSFC_5\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_JSSFC_6\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_JSSFC\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ECNY\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_code</Col><Col id=\"colId\">CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">코드</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_code</Col><Col id=\"colId\">CODE_NM</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">코드명</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm064",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_codeNm","absolute","140","5","50","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("코드명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_codeNm","absolute","195","5","148","21",null,null,this.div_search);_a.set_taborder("0");_a.set_lengthunit("utf8");_a.set_maxlength("20");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_year","absolute","15","6","38","19",null,null,this.div_search);_a.set_taborder("3");_a.set_text("년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","53","6","72","19",null,null,this.div_search);_a.set_taborder("4");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","125","0","15","33",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_useAt","absolute","359","6","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("사용여부");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_lwstTy","absolute","423","6","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_innerdataset("@ds_hrm064");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","344","0","15","33",null,null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Button("btn_copy","absolute",null,"5","80","21","15",null,this.div_search);_a.set_taborder("9");_a.set_text("전년도복사");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_lawCodeList","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("6");_a.set_text("지정학습구분목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_code","absolute","0","34",null,null,"0","10",this.div_work);_a.set_taborder("4");_a.set_binddataset("ds_code");_a.set_autoenter("select");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"코드\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"코드명\"/><Cell col=\"3\" text=\"일반직2급\"/><Cell col=\"4\" text=\"일반직3급\"/><Cell col=\"5\" text=\"일반직4급\"/><Cell col=\"6\" text=\"일반직5급\"/><Cell col=\"7\" text=\"일반직6급\"/><Cell col=\"8\" text=\"무기계약직\"/><Cell col=\"9\" text=\"신규입사자\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"정렬순서\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사용여부\"/><Cell col=\"12\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'normal':'none'\" text=\"bind:CODE\" editlimit=\"10\" editlengthunit=\"utf8\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:CODE_NM\" editlimit=\"150\" editlengthunit=\"utf8\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:GNRL_JSSFC_2\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:GNRL_JSSFC_3\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:GNRL_JSSFC_4\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:GNRL_JSSFC_5\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:GNRL_JSSFC_6\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNTRCT_JSSFC\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:NEW_ECNY\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"digit\" text=\"bind:CODE_ORDR\" mask=\"###\" editlimit=\"3\" editlengthunit=\"utf8\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/><Cell col=\"12\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RM\" editlimit=\"200\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("1");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM080105");_b.set_titletext("지정학습구분관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.spn_year","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cmb_lwstTy","value","ds_cond","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_codeNm","value","ds_cond","CODE_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM080105.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM080105.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM080105.xfdl",function(){var _a= -1;this.chargerAt=false;this.checkDs=[this.ds_code];this.HRM080105_onload=function(_b,_c){this.fn_init_form();this.fn_init_dataset();var _d=[["ds_hrm064","HRM064","Y","A","B"]];var _e=function(_f,_g,_h){if(this.gfn_authGrpId("HRM_EDC")!= -1){this.chargerAt=true;}this.ds_cond.clearData();var _i=this.ds_cond.addRow();this.ds_cond.setColumn(_i,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_i,"USE_AT","");this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_search=function(){this.ds_code.clearData();this.fn_transaction("selectCodeList");};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_code,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_code.rowposition;this.fn_transaction("codeListCUD");}};this.fn_transaction=function(_b){switch(_b){case "selectCodeList":var _c="hsco/mis/hrm/HRM080105/selectCodeList.do";var _d="input1=ds_cond";var _e="ds_code=output1";break;case "codeListCUD":var _c="hsco/mis/hrm/HRM080105/codeListCUD.do";var _d="input1=ds_code:U";var _e="";break;case "COPY":var _c="hsco/mis/hrm/HRM080105/saveCopyPrvYear.do";var _d="input1=ds_cond";var _e="";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "codeListCUD":this.gfn_message("success.처리.성공");if(_a!= -1){this.ds_code.set_rowposition(_a);_a= -1;}break;case "COPY":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.btn_copy_onclick=function(_b,_c){if(Ex.util.isUpdated(this.ds_cond)){this.gfn_message("info.진행가능","검색조건이 변경되었습니다. 조회");return false;}if(this.gfn_message("comm.행위여부","현재의 자료들을 모두 삭제한 후 전년도의 정보로 덮어씁니다. 진행")){this.fn_transaction("COPY");return false;}};this.fn_insert=function(){var _b=this.ds_code.addRow();this.ds_code.setColumn(_b,"YEAR",this.ds_cond.getColumn(0,"YEAR"));this.ds_code.setColumn(_b,"USE_AT",1);};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){var _b=this.ds_code.rowposition;this.ds_code.deleteRow(_b);}};this.fn_cancel=function(){if(!this.comUtils.isDatasetUpdated(this.ds_code)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_code.reset();this.ds_code.applyChange();return;}}};this.div_work_grd_code_onheadclick=function(_b,_c){this.gfn_gridSort(_b,_c);};});this.on_initEvent=function(){this.ds_code.addEventHandler("oncolumnchanged",this.ds_code_oncolumnchanged,this);this.addEventHandler("onload",this.HRM080105_onload,this);this.div_search.cmb_lwstTy.addEventHandler("onitemchanged",this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged,this);this.div_search.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);this.div_work.sta_lawCodeList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_code.addEventHandler("onheadclick",this.div_work_grd_code_onheadclick,this);};this.loadIncludeScript("HRM080105.xfdl");};})();