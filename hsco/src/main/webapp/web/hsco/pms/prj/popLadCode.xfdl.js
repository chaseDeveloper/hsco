﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("popLadCode");this.set_classname("popLadCode");this.set_titletext("토지코드 팝업");this._setFormPosition(0,0,500,500);}_a=new Dataset("ds_1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"string\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"string\" size=\"100\"/><Column id=\"LAD_CODE\" type=\"string\" size=\"3\"/><Column id=\"LAD_CODE_NM\" type=\"string\" size=\"100\"/><Column id=\"PRPOS_CODE\" type=\"string\" size=\"6\"/><Column id=\"PRPOS_CODE_NM\" type=\"string\" size=\"100\"/><Column id=\"SUPLY_CODE\" type=\"string\" size=\"6\"/><Column id=\"SUPLY_CODE_NM\" type=\"string\" size=\"100\"/><Column id=\"GB\" type=\"bigdecimal\" size=\"1\"/><Column id=\"RN\" type=\"bigdecimal\" size=\"10\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Ret",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"3\"/><Column id=\"GB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\"/><Column id=\"CODE_NM\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">진행사업</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">완료사업</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_bg","absolute","0","0",null,"500","0",null,this);_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("sta_gud_v1","absolute","2","2","15",null,null,"2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_v2","absolute",null,"2","15",null,"2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_h1","absolute","2","2",null,"15","2",null,this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h2","absolute","17","42",null,"5","17",null,this);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h3","absolute","17","80",null,"10","17",null,this);_a.set_text("10");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h4","absolute","2",null,null,"15","2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","19","197","21",null,null,this);_a.set_text("토지코드");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","47",null,"33","17",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_gud_v3","absolute","0","0","15",null,null,"0",this.div_search);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.div_search.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","65","21",null,null,this.div_search);_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_PRJ","absolute","80","5","230","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_PRJ009");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a.set_index("1");_a=new Button("btn_Search","absolute",null,"17","50","25","123",null,this);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"17","50","25","70",null,this);_a.set_taborder("3");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("4");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","17","90",null,null,"17","17",this);_a.set_taborder("9");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업코드\"/><Cell col=\"2\" text=\"사업명\"/><Cell col=\"3\" text=\"토지코드\"/><Cell col=\"4\" text=\"토지코드명\"/><Cell col=\"5\" text=\"용도코드\"/><Cell col=\"6\" text=\"용도코드명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BSNS_CODE\"/><Cell col=\"2\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:BSNS_NM\"/><Cell col=\"3\" text=\"bind:LAD_CODE\"/><Cell col=\"4\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:LAD_CODE_NM\"/><Cell col=\"5\" text=\"bind:PRPOS_CODE\"/><Cell col=\"6\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:PRPOS_CODE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("popLadCode");_b.set_titletext("토지코드 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.rdo_PRJ","value","ds_cond1","GB");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("popLadCode.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("popLadCode.xfdl",function(){this.AUTO_RET=this.parent.AUTO_RET;this.BSNS_GB=this.parent.BSNS_GB;this.popLadCode_oninit=function(_a,_b){this.fn_init();this.fn_init_form();};this.popLadCode_onload=function(_a,_b){this.BSNS_GB=this.BSNS_GB?this.BSNS_GB:1;this.fn_init_dataset();this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[['ds_PRJ009','PRJ009',1,'A'],['ds_PRJ012','PRJ012',1,'']];var _b=function(_c,_d,_e){this.div_search.rdo_PRJ.set_index(this.BSNS_GB);this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("ladCdList");};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "ladCdList":_f="ds_1=output1";this.ds_1.clearData();break;}if(_b){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "ladCdList":this.grd_1.setFocus();if(this.AUTO_RET&&this.ds_1.rowcount==1){this.fn_confirm();}break;}};this.fn_confirm=function(){var _a=new Dataset();var _b=this.ds_1;var _c=_b.rowposition;_b.filter("RN=="+(_c+1));_a.copyData(_b,true);this.close(_a.saveXML());};this.grd_1_oncelldblclick=function(_a,_b){this.fn_confirm();};this.grd_1_onkeydown=function(_a,_b){if(_b.keycode==13){this.fn_confirm();}};});this.on_initEvent=function(){this.addEventHandler("onload",this.popLadCode_onload,this);this.addEventHandler("oninit",this.popLadCode_oninit,this);this.div_search.rdo_PRJ.addEventHandler("onitemchanged",this.fn_search,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.fn_confirm,this);this.btn_Close.addEventHandler("onclick",this.close,this);this.grd_1.addEventHandler("oncelldblclick",this.grd_1_oncelldblclick,this);this.grd_1.addEventHandler("onkeydown",this.grd_1_onkeydown,this);};this.loadIncludeScript("popLadCode.xfdl");};})();