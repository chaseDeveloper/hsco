﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG010106");this.set_classname("BDG010106");this.set_titletext("부기코드관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bukipInfoList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USE_AT\" type=\"INT\" size=\"1\"/><Column id=\"BUDGET_ACNT_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acntCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"100\"/><Column id=\"UPPER_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"GWAN\" type=\"STRING\" size=\"256\"/><Column id=\"HANG\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG\" type=\"STRING\" size=\"256\"/><Column id=\"MOK\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BUKIP_CODE</Col><Col id=\"compId\">ds_bukipInfoList</Col><Col id=\"msgId\">부기코드</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">BUKIP_NM</Col><Col id=\"compId\">ds_bukipInfoList</Col><Col id=\"msgId\">부기명</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this.div_search);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","488",null,"38","5",null,"0",this.div_search);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BUKIP_NM","absolute","15","5","51","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("부기명");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BUKIP_NM","absolute","66","5","200","21",null,null,this.div_search);_a.set_taborder("0");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_bukipCode","absolute","0","43",null,"19","940",null,this);_a.set_taborder("5");_a.set_text("부기코드리스트");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0","15","735",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("7");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","62",null,"5","28",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_bukipList","absolute","0","67","460",null,null,"0",this);_a.set_taborder("3");_a.set_binddataset("ds_bukipInfoList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"240\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부기코드\"/><Cell col=\"1\" text=\"부기명\"/><Cell col=\"2\" text=\"사용여부\"/><Cell col=\"3\" text=\"예산과목\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none'\" editfilter=\"none\" text=\"bind:BUKIP_CODE\" editlimit=\"4\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" editlengthunit=\"utf8\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none'\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BUKIP_NM\" editlimit=\"150\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/><Cell col=\"3\" text=\"expr:BUDGET_ACNT_CNT &gt; 0 ? BUDGET_ACNT_CNT : ''\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","460","33","10",null,null,"0",this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","470","43","120","19",null,null,this);_a.set_taborder("10");_a.set_text("예산계정리스트");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","470","67",null,null,"28","0",this);_a.set_taborder("4");_a.set_binddataset("ds_acntCode");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산년도\"/><Cell col=\"1\" text=\"예산과목코드\"/><Cell col=\"2\" text=\"예산과목\"/><Cell col=\"3\" text=\"관\"/><Cell col=\"4\" text=\"항\"/><Cell col=\"5\" text=\"세항\"/><Cell col=\"6\" text=\"목\"/><Cell col=\"7\" text=\"세목\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:BUDGET_ACNT_CODE\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:GWAN\"/><Cell col=\"4\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:HANG\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:SEHANG\"/><Cell col=\"6\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:MOK\"/><Cell col=\"7\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:SEMOK\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute",null,"43","60","19","28",null,this);_a.set_taborder("2");_a.set_value("0");_a.set_max("9999");_a.style.set_buttonsize("15");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute",null,"43","64","19","88",null,this);_a.set_taborder("11");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG010106");_b.set_titletext("부기코드관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_BUKIP_NM","value","ds_cond","BUKIP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG010106.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG010106.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG010106.xfdl",function(){this.checkDs=[this.ds_bukipInfoList,this.ds_acntCode];var _a= -1;this.BDG010106_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.BDG010106_onload=function(_b,_c){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.ds_cond.setColumn(_b,"YEAR",this.comUtils.getClientDate("YYYY"));this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_bukipInfoList.clearData();this.fn_transaction("selectBukipList");};this.fn_search_sub=function(){this.ds_acntCode.clearData();if(this.ds_bukipInfoList.getRowCount()>0){this.fn_transaction("selectBudgetAcntCode");}};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_bukipInfoList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_bukipInfoList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_bukipInfoList.rowposition;this.fn_transaction("saveBukipCode");}};this.fn_transaction=function(_b){switch(_b){case "selectBukipList":var _c="/hsco/mis/bdg/BDG010106/selectBukipList.do";var _d="input1=ds_cond";var _e="ds_bukipInfoList=output1";break;case "selectBudgetAcntCode":var _f=this.ds_bukipInfoList.rowposition;var _g=this.ds_bukipInfoList.getColumn(_f,"BUKIP_CODE");var _h=this.ds_cond.getColumn(0,"YEAR");this.ds_condSub.clearData();var _i=this.ds_condSub.addRow();this.ds_condSub.setColumn(_i,"YEAR",_h);this.ds_condSub.setColumn(_i,"BUKIP_CODE",_g);var _c="/hsco/mis/bdg/BDG010106/selectBudgetAcntCode.do";var _d="input1=ds_condSub";var _e="ds_acntCode=output1";break;case "saveBukipCode":var _c="/hsco/mis/bdg/BDG010106/saveBukipCode.do";var _d="input1=ds_bukipInfoList:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "selectBukipList":break;case "selectBudgetAcntCode":break;case "saveBukipCode":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.ds_bukipInfoList_onrowposchanged=function(_b,_c){this.fn_search_sub();};this.fn_insert=function(){var _b=this.ds_bukipInfoList.addRow();};this.fn_delete=function(){var _b=this.ds_bukipInfoList.rowposition;var _c=this.ds_bukipInfoList.getColumn(_b,"BUDGET_ACNT_CNT");if(_b<0){this.gfn_message("comm.데이터.선택.없음");return false;}if(_c>0){this.gfn_message("fail.삭제.불가","해당 부기코드가 연결된 예산계정코드가 존재합니다.");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_bukipInfoList.deleteRow(_b);};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_bukipInfoList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}this.ds_bukipInfoList.reset();}};});this.on_initEvent=function(){this.ds_bukipInfoList.addEventHandler("onrowposchanged",this.ds_bukipInfoList_onrowposchanged,this);this.addEventHandler("oninit",this.BDG010106_oninit,this);this.addEventHandler("onload",this.BDG010106_onload,this);};this.loadIncludeScript("BDG010106.xfdl");};})();