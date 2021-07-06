﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS010407");this.set_classname("CUS010407");this.set_titletext("산정표점수관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grpCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"256\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE_DC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_grpCode</Col><Col id=\"colId\">MSTK_PREPAR_VALUE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">실수예비값</Col><Col id=\"expr\"/><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_grpCode</Col><Col id=\"colId\">GRP_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"msgId\">GRPCODE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","19",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_codeNm00","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("코드구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_grpSe","absolute","84","2","288","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("rdo_grpSe_innerdataset",this.div_search.rdo_grpSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">VOC(해피콜)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">방문평가</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("6");_a.set_direction("vertical");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_columncount("-1");_a.style.set_textpadding("0 5 0 7");_a.set_rowcount("-1");_a.set_index("0");_a=new Static("Static00","absolute","0","-1","15",null,null,"13",this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_grpCode","absolute","0","34",null,null,"0","10",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_grpCode");_a.set_autoenter("select");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드명\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"실수예비값\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:left;\" text=\"bind:GRP_CODE_DC\" suppress=\"1\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:CODE\" maskchar=\" \" editlimit=\"2\" editlimitbymask=\"decimal\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left;\" text=\"bind:CODE_NM\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:MSTK_PREPAR_VALUE\" wordwrap=\"char\" editlimit=\"5\" editdisplay=\"display\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_lawCodeList","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("6");_a.set_text("산정표점수목록");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.style.set_color("transparent");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_c){_c.set_taborder("1");_c.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("CUS010407");_c.set_titletext("산정표점수관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.rdo_grpSe","value","ds_cond","GRP_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CUS010407.xfdl","lib::comInclude.xjs");this.addIncludeScript("CUS010407.xfdl","mis_lib::misUtil.xjs");this.registerScript("CUS010407.xfdl",function(){var _a= -1;this.CUS010407_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.CUS010407_onload=function(_b,_c){this.div_search.rdo_grpSe.set_index(0);this.fn_search();};this.fn_search=function(){this.ds_grpCode.clearData();this.fn_transaction("selectCodeList");};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_grpCode,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_grpCode.rowposition;this.fn_transaction("codeU");}};this.fn_transaction=function(_b){switch(_b){case "selectCodeList":var _c="hsco/mis/cus/CUS010407/selectCodeList.do";var _d="input1=ds_cond";var _e="ds_grpCode=output1";break;case "codeU":var _c="hsco/mis/cus/CUS010407/codeU.do";var _d="input1=ds_grpCode:U";var _e="";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "selectNtcnCodeList":if(_a> -1){this.ds_grpCode.set_rowposition(_a);_a= -1;}break;case "ntcnCUD":_a=this.ds_grpCode.rowposition;this.fn_search();break;}}};this.fn_cancel=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grpCode)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_grpCode.reset();this.ds_grpCode.applyChange();return;}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.CUS010407_oninit,this);this.addEventHandler("onload",this.CUS010407_onload,this);this.div_search.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);this.div_work.sta_lawCodeList.addEventHandler("onclick",this.Static00_onclick,this);};this.loadIncludeScript("CUS010407.xfdl");};})();