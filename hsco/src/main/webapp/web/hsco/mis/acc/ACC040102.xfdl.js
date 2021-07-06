﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC040102");this.set_classname("UI_ACC040102");this.set_titletext("청구내역대사관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_catsBill",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAMT\" type=\"STRING\" size=\"256\"/><Column id=\"SETTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"BILAMT\" type=\"STRING\" size=\"256\"/><Column id=\"DIFFAMT\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ITNC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DET_DCSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ATDRN\" type=\"STRING\" size=\"256\"/><Column id=\"PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cprCard",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,null,"28","0",this);_a.set_taborder("13");_a.set_binddataset("ds_catsBill");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" rowspan=\"2\" text=\"카드번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"카드명\"/><Cell col=\"4\" rowspan=\"2\" text=\"가맹점\"/><Cell col=\"5\" text=\"승인일자\"/><Cell col=\"6\" text=\"승인금액\"/><Cell col=\"7\" rowspan=\"2\" text=\"차이금액\"/><Cell col=\"8\" rowspan=\"2\" text=\"승인시간\"/><Cell col=\"9\" rowspan=\"2\" text=\"결의일자\"/><Cell col=\"10\" rowspan=\"2\" text=\"지출일자\"/><Cell col=\"11\" rowspan=\"2\" text=\"참석자\"/><Cell col=\"12\" rowspan=\"2\" text=\"사유\"/><Cell col=\"13\" rowspan=\"2\" text=\"계정구분\"/><Cell col=\"14\" rowspan=\"2\" text=\"사업코드\"/><Cell col=\"15\" rowspan=\"2\" text=\"예산계정\"/><Cell col=\"16\" rowspan=\"2\" text=\"부기코드\"/><Cell col=\"17\" rowspan=\"2\" text=\"결의번호\"/><Cell row=\"1\" col=\"5\" text=\"결제(예정)일자\"/><Cell row=\"1\" col=\"6\" text=\"청구금액\"/></Band><Band id=\"body\"><Cell text=\"승인내역\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:DEPT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:CARD_NO\" wordwrap=\"char\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:CARD_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:MERCHNAME\" wordwrap=\"char\"/><Cell col=\"5\" text=\"bind:TRANSDATE\"/><Cell col=\"6\" text=\"bind:APPRAMT\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DIFFAMT\" mask=\"#,###\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:TRANSDATE\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"date\" text=\"bind:ITNC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" rowspan=\"2\" displaytype=\"date\" text=\"bind:DET_DCSN_DE\" calendardisplaynulltype=\"none\" autosizerow=\"default\"/><Cell col=\"11\" rowspan=\"2\" style=\"align:left;\" text=\"bind:ATDRN\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"12\" rowspan=\"2\" style=\"align:left;\" text=\"bind:PRVONSH\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\" rowspan=\"2\" text=\"bind:DECSN_NO\"/><Cell row=\"1\" text=\"청구내역\"/><Cell row=\"1\" col=\"5\" text=\"bind:SETTDATE\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" text=\"bind:BILAMT\" mask=\"#,###\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("14");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("33");_a.set_text("조회일자");_a.set_wordwrap("char");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","81","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("34");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Div("div_dept","absolute","357","5","195","21",null,null,this.div_SEARCH);_a.set_taborder("35");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","314","5","38","21",null,null,this.div_SEARCH);_a.set_taborder("36");_a.set_text("부서");_a.set_wordwrap("char");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","567","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("37");_a.set_text("카드번호");_a.set_wordwrap("char");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","636","5","296","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("38");_a.set_innerdataset("@ds_cprCard");_a.set_codecolumn("CARD_NO");_a.set_datacolumn("CARD_NM");_a.set_displayrowcount("20");_a=new Calendar("Calendar01","absolute","199","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("39");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static00","absolute","17.78%","5",null,"22","80.86%",null,this.div_SEARCH);_a.set_taborder("40");_a.set_text("~");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("16");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("17");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title04","absolute","0","43","132","19",null,null,this);_a.set_taborder("18");_a.set_text("승인/청구내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("19");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","289","184","391","78",null,null,this);_a.set_taborder("20");_a.set_text("메뉴 삭제예정 \r\n사유 : 법인카드 청구내역 데이트 연동불가");_a.style.set_color("#ff0000ff");_a.style.set_font("bold 12 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_b){_b.set_taborder("14");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC040102");_b.set_titletext("청구내역대사관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Combo00","value","ds_cond","CARD_NO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("ACC040102.xfdl","lib::comInclude.xjs");this.registerScript("ACC040102.xfdl",function(){this.ACC040102_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_getCprCombo("ds_cprCard");this.ds_cprCard.insertRow(0);this.ds_cprCard.setColumn(0,"CARD_NO","");this.ds_cprCard.setColumn(0,"CARD_NM","전체");this.div_SEARCH.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_ST_DT",this.dateUtils.addMonth(this.dateUtils.today(), -1,"s"));this.ds_cond.setColumn(0,"SRCH_ED_DT",this.dateUtils.today());this.ds_cond.setColumn(0,"CARD_NO","");};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){var _a="SRCH";var _b="hsco/mis/acc/ACC040102/catsBillList.do";var _c="input1=ds_cond";var _d="ds_catsBill=output1";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_save=function(){};this.fn_callBack=function(_a,_b,_c){if(_b<0){}switch(_a){case "SRCH":break;case "SAVE":break;default:break;}};this.fn_insert=function(){};this.fn_add=function(){};this.fn_delete=function(){};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_ST_DT",this.dateUtils.addMonth(this.dateUtils.today(), -1,"s"));this.ds_cond.setColumn(0,"SRCH_ED_DT",this.dateUtils.today());}};this.fn_getCprCombo=function(_a){var _b="SRCH_CODE";var _c="hsco/mis/acc/ACC040101/cprCardComboList.do";var _d="";var _e=_a+"=output1";var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f,"",false,false);};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC040102_onload,this);};this.loadIncludeScript("ACC040102.xfdl");this.loadPreloadList();};})();