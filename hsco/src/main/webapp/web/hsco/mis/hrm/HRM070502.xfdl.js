﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070502");this.set_classname("HRM070502");this.set_titletext("현장체재비마감일관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_sptScstClosM",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YR\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_YM\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_CLOS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_registDe","absolute","15","6","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("기준년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","79","6","78","21",null,null,this.div_search);_a.set_taborder("3");_a.set_inputtype("number");_a.set_maxlength("4");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_pblancList","absolute","0","43","170","19",null,null,this);_a.set_taborder("4");_a.set_text("현장체재비 마감일자 현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_pblancList","absolute","0","67",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_sptScstClosM");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"450\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"기준연월\"/><Cell col=\"3\" text=\"등록마감일자\"/><Cell col=\"4\" text=\"적용여부\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:STDR_YM\" mask=\"####-##\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;\" text=\"bind:REGIST_CLOS_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:APPLC_YN\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62","1031","5",null,null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_newCloseDe","absolute",null,"43","100","19","28",null,this);_a.set_taborder("8");_a.set_text("마감일 기준 생성");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070502");_b.set_titletext("현장체재비마감일관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.Edit00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM070502.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070502.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070502.xfdl",function(){this.HRM070502_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM070502_onload=function(_a,_b){this.ds_cond.clearData();this.ds_cond.addRow();this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_sptScstClosM.clearData();this.fn_transaction("selectSptScstClosList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_sptScstClosM)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_sptScstClosM,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveSptScstClosCUD");}};this.fn_transaction=function(_a){switch(_a){case "selectSptScstClosList":var _b="/hsco/mis/hrm/HRM070502/selectSptScstClosList.do";var _c="input1=ds_cond";var _d="ds_sptScstClosM=output1";break;case "saveSptScstClosCUD":var _b="/hsco/mis/hrm/HRM070502/saveSptScstClosCUD.do";var _c="input1=ds_sptScstClosM:U";var _d="";break;case "insertNewCloseDe":var _b="/hsco/mis/hrm/HRM070502/insertNewCloseDe.do";var _c="input1=ds_cond";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectSptScstClosList":break;case "saveSptScstClosCUD":this.gfn_message("success.처리.성공");this.fn_search();break;case "insertNewCloseDe":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.div_work_grd_pblancList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.fn_insert=function(){};this.fn_delete=function(){var _a=this.ds_sptScstClosM.rowposition;var _b=this.ds_sptScstClosM.getColumn(_a,"APPLC_YN");if(_b!="1"){if(this.gfn_message("confirm.삭제여부")){this.ds_sptScstClosM.deleteRow(_a);}}else{this.gfn_message("fail.삭제.불가","적용여부가 선택된 건은");}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_sptScstClosM.reset();this.ds_sptScstClosM.applyChange();return;}};this.btn_newCloseDe_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"YEAR");if(!this.comUtils.isNull(_c)){if(this.gfn_message("confirm.삭제.진행","해당년도의 기존데이터가 있을 경우 초기화 됩니다.")){this.fn_transaction("insertNewCloseDe");}}else{this.gfn_message("info.처리불가","기준년도를 입력해 주시기 바랍니다.");}};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM070502_onload,this);this.addEventHandler("oninit",this.HRM070502_oninit,this);this.grd_pblancList.addEventHandler("onheadclick",this.div_work_grd_pblancList_onheadclick,this);this.btn_newCloseDe.addEventHandler("onclick",this.btn_newCloseDe_onclick,this);};this.loadIncludeScript("HRM070502.xfdl");};})();