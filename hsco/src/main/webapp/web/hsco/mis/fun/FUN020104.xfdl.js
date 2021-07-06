﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN020104");this.set_classname("FUN020104");this.set_titletext("공사채승인신청");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_PBNCD_CONFM",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CONFM_NO\" type=\"STRING\" size=\"256\" sumtext=\"승인번호\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\" sumtext=\"사업지구코드\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\" sumtext=\"사업지구명\"/><Column id=\"CONFM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"승인금액\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\" sumtext=\"등록자ID\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\" sumtext=\"등록일시\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\" sumtext=\"수정자ID\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\" sumtext=\"수정일시\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_SEARCH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">DS_PBNCD_CONFM</Col><Col id=\"colId\">BSNS_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"msgId\">사업지구</Col></Row><Row><Col id=\"colId\">REQST_AMOUNT</Col><Col id=\"compId\">DS_PBNCD_CONFM</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/><Col id=\"msgId\">신청금액</Col><Col id=\"type\"/><Col id=\"nlength\">15</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"colId\">REQST_DE</Col><Col id=\"msgId\">신청일</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Grid("grd_PBNCD_CONFM","absolute","0","23",null,null,"408","0",this.div_Cont);_a.set_taborder("0");_a.set_binddataset("DS_PBNCD_CONFM");_a.set_autosizingtype("none");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"123\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"승인여부\"/><Cell col=\"2\" colspan=\"2\" text=\"사업지구\"/><Cell col=\"4\" text=\"신청금액\"/><Cell col=\"5\" text=\"신청일\"/><Cell col=\"6\" text=\"승인금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080 ;\" text=\"bind:CONFM_AT\"/><Cell col=\"2\" text=\"bind:BSNS_CODE\"/><Cell col=\"3\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BSNS_NM\" autosizerow=\"limitmin\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:REQST_AMOUNT\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:REQST_DE\" wordwrap=\"char\" calendardisplaynulltype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CONFM_AMOUNT\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REQST_AMOUNT')\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('CONFM_AMOUNT')\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Div("div_detail_00","absolute",null,"0","398",null,"0","0",this.div_Cont);_a.set_taborder("1");this.div_Cont.addChild(_a.name,_a);_a=new Div("div_detail_01","absolute","0","15",null,null,"0","0",this.div_Cont.div_detail_00);_a.set_taborder("64");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Static("dtl_guide01","absolute","0","0","103.09%","5",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("585");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","120","6",null,"27","0",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("594");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","120","58",null,"27","0",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("595");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","120","32",null,"27","0",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("609");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","126","61","102","21",null,null,this.div_Cont.div_detail_00.div_detail_01);this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Edit("edt_empno","absolute","126","9","69","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("0");_a.set_maxlength("8");_a.style.set_align("left middle");_a.set_readonly("true");_a.set_cssclass("edt_WF_Essential");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Edit("edt_ASSETS_CL_NM","absolute","196","9","199","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("1");_a.set_readonly("true");_a.set_cssclass("edt_WF_Essential");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new MaskEdit("msk_CONFM_AMOUNT","absolute","126","35","170","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("2");_a.set_limitbymask("integer");_a.set_mask("!###,###,###,###,###");_a.set_cssclass("msk_WF_Essential");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_BANK_NM00","absolute","0","32",null,"27","275",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("10");_a.set_text("신청금액");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_BANK_NM","absolute","0","6",null,"27","275",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("8");_a.set_text("사업지구");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO","absolute","0","58",null,"27","275",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("11");_a.set_text("신청일");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Button("btn_BSNS_CODE_01","absolute",null,"9","22","21","203",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("9");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");_a.set_enable("true");_a.set_cssclass("btn_WF_Search");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","120","110",null,"27","0",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("610");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label04","absolute","120","84",null,"27","0",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("611");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new MaskEdit("msk_CONFM_AMOUNT00","absolute","126","87","170","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("4");_a.set_mask("###,###.");_a.set_cssclass("msk_WF_Readonly");_a.set_readonly("true");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_BANK_NM01","absolute","0","84",null,"27","275",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("614");_a.set_text("승인금액");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO00","absolute","0","110",null,"27","275",null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("615");_a.set_text("승인여부");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","129","113","20","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("5");_a.set_readonly("true");_a.style.set_buttonborder("1 solid #bdbdbdff");_a.style.set_buttonbackground("lavender");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","-1","120","19",null,null,this.div_Cont.div_detail_00);_a.set_taborder("67");_a.set_text("기본정보");_a.set_cssclass("sta_WF_Title02");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Static("Static03","absolute","623","10","10","500",null,null,this.div_Cont);_a.set_taborder("5");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");_a.set_text("10");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","-1","150","19",null,null,this.div_Cont);_a.set_taborder("6");_a.set_text("공사채 승인 신청 내역");_a.set_cssclass("sta_WF_Title02");this.div_Cont.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN_INSTT","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("169");_a.set_text("사업지구");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","74","3","5","25",null,null,this.div_search);_a.set_taborder("171");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","173","5","250","21",null,null,this.div_search);_a.set_taborder("1");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","79","5","93","21",null,null,this.div_search);_a.set_taborder("0");_a.set_maxlength("5");_a.style.set_align("left middle");_a.set_inputmode("upper");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Button("btn_BSNS_CODE_00","absolute","150","5","22","21",null,null,this.div_search);_a.set_taborder("2");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","2","15","34",null,null,this.div_search);_a.set_taborder("180");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33","1038","10",null,null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("darkviolet");_a.style.set_color("black");_a.style.set_font("bold 11 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","28","733","0",null,this);_a.set_taborder("3");_a.set_text("28");_a.set_visible("false");_a.style.set_background("darkviolet");_a.style.set_color("black");_a.style.set_font("bold 11 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Layout("default","",389,245,this.div_Cont.div_detail_00.div_detail_01,function(_b){_b.set_taborder("64");});this.div_Cont.div_detail_00.div_detail_01.addLayout(_a.name,_a);_a=new Layout("default","",555,380,this.div_Cont.div_detail_00,function(_b){_b.set_taborder("1");});this.div_Cont.div_detail_00.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont,function(_b){_b.set_taborder("1");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FUN020104");_b.set_titletext("공사채승인신청");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.edt_BSNS_NM","value","DS_SEARCH","BSNS_DISTRICT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SearchArea.edt_BSNS_CODE","value","DS_SEARCH","BSNS_DISTRICT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_Cont.div_detail_00.div_detail_01.edt_empno","value","DS_PBNCD_CONFM","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_Cont.div_detail_00.div_detail_01.edt_ASSETS_CL_NM","value","DS_PBNCD_CONFM","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_Cont.div_detail_00.div_detail_01.Calendar00","value","DS_PBNCD_CONFM","REQST_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_Cont.div_detail_00.div_detail_01.msk_CONFM_AMOUNT","value","DS_PBNCD_CONFM","REQST_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.edt_BSNS_CODE","value","DS_SEARCH","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_search.edt_BSNS_NM","value","DS_SEARCH","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_Cont.div_detail_00.div_detail_01.msk_CONFM_AMOUNT00","value","DS_PBNCD_CONFM","CONFM_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_Cont.div_detail_00.div_detail_01.CheckBox00","value","DS_PBNCD_CONFM","CONFM_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN020104.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN020104.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN020104.xfdl",function(){this.saveRow= -1;this.checkDs=[this.DS_PBNCD_CONFM];this.FUN020104_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN020104_onload=function(_a,_b){this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(_a,_b){this.DS_PBNCD_CONFM.clearData();this.fn_transaction("selectPbncdConfmList");};this.fn_save=function(){if(Ex.util.isUpdated(this.DS_PBNCD_CONFM)){if(!this.gfn_checkValidation_NoUpdChk(this.DS_PBNCD_CONFM,this.ds_validation)){return false;}this.saveRow=this.DS_PBNCD_CONFM.rowposition;this.fn_transaction("savePbncdConfmList");}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_a){switch(_a){case "selectPbncdConfmList":var _b="hsco/mis/fun/FUN020104/selectPbncdConfmList.do";var _c="input1=DS_SEARCH";var _d="DS_PBNCD_CONFM=output1";break;case "savePbncdConfmList":var _b="hsco/mis/fun/FUN020104/PbncdConfmCUD.do";var _c="input1=DS_PBNCD_CONFM:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectPbncdConfmList":this.DS_PBNCD_CONFM.applyChange();if(this.saveRow> -1){this.DS_PBNCD_CONFM.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "savePbncdConfmList":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_PopBsnsCallback=function(_a,_b){var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(!nRowCnt){}else{if(_a=="Search"){this.DS_SEARCH.setColumn(0,"BSNS_CODE",_c.getColumn(0,"BSNS_CODE"));this.DS_SEARCH.setColumn(0,"BSNS_NM",_c.getColumn(0,"BSNS_NM"));}if(_a=="Detail"){this.DS_PBNCD_CONFM.setColumn(this.DS_PBNCD_CONFM.rowposition,"BSNS_CODE",_c.getColumn(0,"BSNS_CODE"));this.DS_PBNCD_CONFM.setColumn(this.DS_PBNCD_CONFM.rowposition,"BSNS_NM",_c.getColumn(0,"BSNS_NM"));}}};this.DS_PBNCD_CONFM_onrowposchanged=function(_a,_b){var _c=this.DS_PBNCD_CONFM.rowposition;var _d=this.DS_PBNCD_CONFM.getColumn(_c,"CONFM_AT");if(_d=="1"){this.div_Cont.div_detail_00.div_detail_01.btn_BSNS_CODE_01.set_visible(false);this.div_Cont.div_detail_00.div_detail_01.msk_CONFM_AMOUNT.set_readonly(true);this.div_Cont.div_detail_00.div_detail_01.Calendar00.set_readonly(true);this.div_Cont.div_detail_00.div_detail_01.Calendar00.set_cssclass("cal_WF_Readonly");this.div_Cont.div_detail_00.div_detail_01.msk_CONFM_AMOUNT.set_cssclass("msk_WF_Readonly");this.div_Cont.div_detail_00.div_detail_01.edt_empno.set_cssclass("edt_WF_Readonly");this.div_Cont.div_detail_00.div_detail_01.edt_ASSETS_CL_NM.set_cssclass("edt_WF_Readonly");}else{this.div_Cont.div_detail_00.div_detail_01.btn_BSNS_CODE_01.set_visible(true);this.div_Cont.div_detail_00.div_detail_01.msk_CONFM_AMOUNT.set_readonly(false);this.div_Cont.div_detail_00.div_detail_01.Calendar00.set_readonly(false);this.div_Cont.div_detail_00.div_detail_01.Calendar00.set_cssclass("cal_WF_Essential");this.div_Cont.div_detail_00.div_detail_01.msk_CONFM_AMOUNT.set_cssclass("msk_WF_Essential");this.div_Cont.div_detail_00.div_detail_01.edt_empno.set_cssclass("edt_WF_Essential");this.div_Cont.div_detail_00.div_detail_01.edt_ASSETS_CL_NM.set_cssclass("edt_WF_Essential");}};this.fn_insert=function(){var _a=this.DS_PBNCD_CONFM.addRow();this.DS_PBNCD_CONFM.setColumn(_a,"USE_CNT",0);this.DS_PBNCD_CONFM.setColumn(_a,"REQST_DE",this.dateUtils.today());};this.fn_delete=function(){var _a=this.DS_PBNCD_CONFM.getColumn(this.DS_PBNCD_CONFM.rowposition,"CONFM_AT");if(_a=="1"){this.gfn_message("fail.삭제.불가","승인된 신청 내역은");}else{if(this.gfn_message("confirm.삭제여부")){var _b=this.DS_PBNCD_CONFM.rowposition;this.DS_PBNCD_CONFM.deleteRow(_b);this.DS_PBNCD_CONFM_onrowposchanged();}}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.DS_PBNCD_CONFM.reset();this.DS_PBNCD_CONFM.applyChange();return;}};this.btn_BSNS_CODE_onclick=function(_a,_b){if(_a.name=="btn_BSNS_CODE_01"){this.gfn_popup("Detail","500","500","사업코드","","pms_prj::popBsns.xfdl","fn_PopBsnsCallback",true);}else{this.gfn_popup("Search","500","500","사업코드","","pms_prj::popBsns.xfdl","fn_PopBsnsCallback",true);}};});this.on_initEvent=function(){this.DS_PBNCD_CONFM.addEventHandler("canrowposchange",this.DS_PBNCD_CONFM_canrowposchange,this);this.DS_PBNCD_CONFM.addEventHandler("onrowposchanged",this.DS_PBNCD_CONFM_onrowposchanged,this);this.DS_PBNCD_CONFM.addEventHandler("oncolumnchanged",this.DS_PBNCD_CONFM_oncolumnchanged,this);this.addEventHandler("oninit",this.FUN020104_oninit,this);this.addEventHandler("onload",this.FUN020104_onload,this);this.div_Cont.div_detail_00.div_detail_01.btn_BSNS_CODE_01.addEventHandler("onclick",this.btn_BSNS_CODE_onclick,this);this.div_search.edt_BSNS_NM.addEventHandler("onkeyup",this.edt_BSNS_NM_onkeyup,this);this.div_search.edt_BSNS_CODE.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_search.btn_BSNS_CODE_00.addEventHandler("onclick",this.btn_BSNS_CODE_onclick,this);};this.loadIncludeScript("FUN020104.xfdl");};})();