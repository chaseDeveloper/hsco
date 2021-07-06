﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACH030302_P1");this.set_classname("Guide_10");this.set_titletext("등급기준표");this._setFormPosition(0,0,500,466);}_a=new Dataset("ds_evlGradSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_evlScoreList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condPop",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_MAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ACH025",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","500","466",null,null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15","496",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","483","2","15","496",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","2","496","15",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2","449","496","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","443","426",null,"23","17",null,this);_a.set_taborder("7");_a.set_text("닫기");_a.getSetter("oninit").set("ACH030302_P1_oninit");_a.getSetter("onload").set("ACH030302_P1_onload");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","17","91","466","325",null,null,this);_a.set_taborder("41");_a.set_binddataset("ds_evlScoreList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"171\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"등급\"/><Cell col=\"3\" text=\"평가점수\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:EVL_SE\" combodataset=\"ds_ACH025\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:EVL_GRAD\" combodataset=\"ds_evlGradSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:EVL_SCORE\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","42","466","5",null,null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","440","426","3","24",null,null,this);_a.set_taborder("53");_a.set_text("3");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","19","197","21",null,null,this);_a.set_taborder("54");_a.set_cssclass("sta_WF_Title01");_a.set_text("등급정보");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","47",null,"33","17",null,this);_a.set_taborder("55");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("평가연도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_evalYear","absolute","84","5","80","21",null,null,this.div_search);_a.set_taborder("13");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","179","5","64","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static18","absolute","79","-2","5","32",null,null,this.div_search);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","248","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("17");_a.set_cssclass("cmb_WF_Readonly");_a.set_readonly("true");_a.set_innerdataset("@ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static07","absolute","17","80","466","10",null,null,this);_a.set_taborder("56");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","2","416","496","10",null,null,this);_a.set_taborder("57");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("55");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,466,this,function(_b){_b.set_classname("Guide_10");_b.set_titletext("등급기준표");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_evalYear","value","ds_condPop","EVL_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_odrSe","value","ds_condPop","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACH030302_P1.xfdl","lib::comInclude.xjs");this.registerScript("ACH030302_P1.xfdl",function(){this.fv_objForm;this.ACH030302_P1_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.ACH030302_P1_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_condPop.copyData(this.parent.arg_1);this.fn_loadCombo();this.fn_loadComboNonCodeTbl();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){this.gfn_loadCodeComboWithDs(this,"",this.ds_evlGradSe,"ACH016","","Y"," ","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_ACH025,"ACH025","","Y"," ","N","");};this.fn_loadComboNonCodeTbl=function(_a,_b){var _c=[["ds_odrSe","ds_condPop","","","hsco/mis/ach/ACHCommon/selectOdrList.do",0]];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.fn_callbackAfter=function(_a){switch(_a){case "ds_odrSe":this.fn_search();break;}};this.fn_search=function(){this.ds_evlScoreList.clearData();this.fn_transaction("selectEvlScoreList");};this.fn_transaction=function(_a){switch(_a){case "selectEvlScoreList":var _b="hsco/mis/ach/ACHCommon/selectEvlScoreList.do";var _c="input1=ds_condPop";var _d="ds_evlScoreList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectEvlScoreList":break;}}};this.btn_end_onclick=function(_a,_b){this.close();};this.btn_close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.ACH030302_P1_oninit,this);this.addEventHandler("onload",this.ACH030302_P1_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("ACH030302_P1.xfdl");};})();