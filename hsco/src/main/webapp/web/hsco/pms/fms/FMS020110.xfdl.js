﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS020110");this.set_classname("form");this.set_titletext("제부도이용객관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_islndsUse",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CAR_QY\" type=\"STRING\" size=\"256\"/><Column id=\"MAN_QY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condPrint",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">FROM_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">조회시작일</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">TO_DE</Col><Col id=\"msgId\">조회종료일</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">OPER_DE</Col><Col id=\"compId\">ds_islndsUse</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"PK\">Y</Col><Col id=\"msgId\">일자</Col></Row><Row><Col id=\"compId\">ds_islndsUse</Col><Col id=\"colId\">CAR_QY</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">차량</Col></Row><Row><Col id=\"compId\">ds_islndsUse</Col><Col id=\"colId\">MAN_QY</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">인원</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_excel",this);_a.set_useclientlayout("true");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_islndsExcel",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"OPER_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_QY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("조회일자");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","15","34",null,null,this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","217","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Calendar("Calendar02","absolute","85","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("14");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("Static01","absolute","202","8","28","22",null,null,this.div_search);_a.set_taborder("15");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","169","19",null,null,this);_a.set_taborder("2");_a.set_text("제부도이용객 관리");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62",null,null,"28","0",this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","67",null,null,"28","0",this);_a.set_taborder("4");_a.set_binddataset("ds_islndsUse");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"년월일\"/><Cell col=\"1\" colspan=\"2\" text=\"이용객\"/><Cell row=\"1\" col=\"1\" text=\"차량\"/><Cell row=\"1\" col=\"2\" text=\"인원\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:OPER_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:CAR_QY\" mask=\"###,###\" editlimit=\"6\" editdisplay=\"display\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:MAN_QY\" mask=\"###,###\" editlimit=\"6\" editdisplay=\"display\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Gridexcelup","absolute",null,"43","25","19","28",null,this);_a.set_taborder("7");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Layout("default","",1031,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("form");_b.set_titletext("제부도이용객관리");});this.addLayout(_a.name,_a);_a=new BindItem("item9","div_SEARCH.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.Calendar02","value","ds_cond","FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.Calendar01","value","ds_cond","TO_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FMS020110.xfdl","lib::comInclude.xjs");this.addIncludeScript("FMS020110.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("FMS020110.xfdl","lib::comUpDownUtils.xjs");this.registerScript("FMS020110.xfdl",function(){this.saveRow= -1;this.FMS020110_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FMS020110_onload=function(_a,_b){this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"FROM_DE",this.comUtils.getClientDate("YYYY")+"0101");this.ds_cond.setColumn(_c,"TO_DE",this.comUtils.getClientDate("YYYYMMDD"));this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_islndsUse.clearData();this.fn_transaction("select");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_islndsUse,this.ds_validation)){return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_islndsUse.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/pms/fms/FMS020110/select.do";var _c="input1=ds_cond";var _d="ds_islndsUse=output1";break;case "save":var _b="/hsco/pms/fms/FMS020110/save.do";var _c="input1=ds_islndsUse:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.saveRow> -1){this.ds_islndsUse.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_insert=function(){var _a=this.ds_islndsUse.addRow();this.ds_islndsUse.setColumn(_a,"OPER_DE",this.comUtils.getClientDate("YYYYMMDD"));};this.fn_delete=function(){this.ds_islndsUse.deleteRow(this.ds_islndsUse.rowposition);};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_islndsUse)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_islndsUse.reset();};this.fn_print=function(){this.ds_condPrint.clearData();var _a=this.ds_condPrint.addRow();this.ds_condPrint.setColumn(0,"YEAR",this.ds_cond.getColumn(0,"FROM_DE").substr(0,4));this.gfn_ReportPopup(this,"PMS/FMS/FMS020110_R01.crf",this.ds_condPrint);};this.btn_Gridexcelup_onclick=function(_a,_b){if(this.gfn_message("comm.행위여부","현재 기간의 데이터를 모두 초기화 후 엑셀 업로드를 진행합니다.\n계속")){this.ds_excel.clearData();this.ds_islndsExcel.clearData();var _c={targetDs:this.ds_excel,headSet:false,callBack:function(){trace(this.ds_excel.saveXML());if(this.ds_excel.getRowCount()>1){for(fRow=1;i<this.ds_excel.rowcount;i++ ){var _d=this.ds_islndsExcel.addRow();this.ds_islndsExcel.setColumn(_d,"OPER_DE",this.ds_excel.getColumn(fRow,"Column0"));this.ds_islndsExcel.setColumn(_d,"USE_SE",this.ds_excel.getColumn(fRow,"Column1"));this.ds_islndsExcel.setColumn(_d,"USE_QY",this.ds_excel.getColumn(fRow,"Column2"));}}}};this.gfn_importExcel(_c);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.FMS020110_onload,this);this.div_search.sta_YEAR.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.btn_Gridexcelup.addEventHandler("onclick",this.btn_Gridexcelup_onclick,this);};this.loadIncludeScript("FMS020110.xfdl");};})();