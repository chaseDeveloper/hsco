﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC040201");this.set_classname("UI_ACC040201");this.set_titletext("카드별집계관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_catsApproval",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSTIME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAMT\" type=\"STRING\" size=\"256\"/><Column id=\"DET_DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cprCard",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"PK\"/><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회일자</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회일자</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("16");_a.set_text("조회일자");_a.style.set_align("left middle");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","84","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("0");_a.set_cssclass("cal_WF_Essential");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Div("div_dept","absolute","356","5","195","21",null,null,this.div_SEARCH);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","314","5","38","21",null,null,this.div_SEARCH);_a.set_taborder("26");_a.set_text("부서");_a.set_wordwrap("char");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","566","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("27");_a.set_text("카드번호");_a.set_wordwrap("char");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","635","5","296","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_cprCard");_a.set_codecolumn("CARD_NO");_a.set_datacolumn("CARD_NM");_a.set_displayrowcount("20");_a=new Calendar("Calendar01","absolute","199","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_cssclass("cal_WF_Essential");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static09","absolute","183","0","16",null,null,"0",this.div_SEARCH);_a.set_taborder("33");_a.set_text("~");_a.set_visible("true");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Grid("grd_fnncInstt","absolute","0","67",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_catsApproval");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"카드번호\"/><Cell col=\"2\" text=\"카드명\"/><Cell col=\"3\" text=\"가맹점\"/><Cell col=\"4\" text=\"승인번호\"/><Cell col=\"5\" text=\"취소여부\"/><Cell col=\"6\" text=\"승인일자\"/><Cell col=\"7\" text=\"승인시간\"/><Cell col=\"8\" text=\"결재금액\"/><Cell col=\"9\" text=\"지출일자\"/><Cell col=\"10\" text=\"사유\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CARD_NO\" mask=\"@@@@-@@@@-@@@@-@@@@\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CARD_NM\" suppress=\"1\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:MERCHNAME\" wordwrap=\"char\" tooltiptext=\"bind:MERCHNAME\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:APPR_NO\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:CANCEL_YN\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:TRANSDATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:TRANSTIME\" mask=\"@@:@@.@@\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:APPRAMT\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:DET_DCSN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"합  계\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;APPRAMT&quot;)\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("15");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title04","absolute","0","43","132","19",null,null,this);_a.set_taborder("17");_a.set_text("카드별집계내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excel_down","absolute",null,"41","25","21","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC040201");_b.set_titletext("카드별집계관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Combo00","value","ds_cond","CARD_NO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("ACC040201.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC040201.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC040201.xfdl",function(){this.ACC040201_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();this.fn_getCprCombo("ds_cprCard");this.ds_cprCard.insertRow(0);this.ds_cprCard.setColumn(0,"CARD_NO","");this.ds_cprCard.setColumn(0,"CARD_NM","전체");};this.fn_init_form=function(){this.gfn_initForm(this);this.div_SEARCH.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_ST_DT",this.dateUtils.addMonth(this.dateUtils.today(), -1,"s"));this.ds_cond.setColumn(0,"SRCH_ED_DT",this.dateUtils.today());this.ds_cond.setColumn(0,"CARD_NO","");};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}var _a="SRCH";var _b="hsco/mis/acc/ACC040201/catsApprovalList.do";var _c="input1=ds_cond";var _d="ds_catsApproval=output1";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b<0){}switch(_a){case "SRCH":break;case "SAVE":break;default:break;}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_ST_DT",this.dateUtils.addMonth(this.dateUtils.today(), -1,"s"));this.ds_cond.setColumn(0,"SRCH_ED_DT",this.dateUtils.today());}};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","카드별집계관리");_a.setSaveFilename("카드별집계관리");_a.clearLocalDs();_a.setGrid(this.grd_fnncInstt);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"카드별집계관리",_b,"common::frmReportPopup.xfdl","");};this.fn_getCprCombo=function(_a){var _b="SRCH_CODE";var _c="hsco/mis/acc/ACC040101/cprCardComboList.do";var _d="";var _e=_a+"=output1";var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f,"",false,false);};this.btn_excel_down_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_fnncInstt,"exportExl");};this.grd_fnncInstt_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC040201_onload,this);this.grd_fnncInstt.addEventHandler("onheadclick",this.grd_fnncInstt_onheadclick,this);this.btn_excel_down.addEventHandler("onclick",this.btn_excel_down_onclick,this);};this.loadIncludeScript("ACC040201.xfdl");this.loadPreloadList();};})();