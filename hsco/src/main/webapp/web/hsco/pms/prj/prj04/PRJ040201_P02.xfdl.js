﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ040201_P02");this.set_classname("PRJ040201_P02");this.set_titletext("홈페이지연동(공정) 팝업");this._setFormPosition(0,0,500,500);}_a=new Dataset("ds_1",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"5\"/><Column id=\"TXT\" type=\"STRING\" size=\"1000\"/><Column id=\"IMG\" type=\"STRING\" size=\"512\"/><Column id=\"GB\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_GB",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\"/><Column id=\"CODE_NM\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_bg","absolute","0","0",null,"500","0",null,this);_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("sta_gud_v1","absolute","2","2","15",null,null,"2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_v2","absolute",null,"2","15",null,"2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_h1","absolute","17","2",null,"15","17",null,this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h2","absolute","17","42",null,"5","17",null,this);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h3","absolute","17","258",null,"5","17",null,this);_a.set_taborder("15");_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h4","absolute","17","287",null,"5","17",null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h9","absolute","17",null,null,"15","17","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","17","19","197","21",null,null,this);_a.set_text("공사진행현황(공정율)");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("sta_2","absolute","16","265","197","21",null,null,this);_a.set_taborder("14");_a.set_text("공사진행월별 사진 부문");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","123",null,this);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.set_visible("0");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"17","50","25","70",null,this);_a.set_taborder("3");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("4");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new TextArea("txt_1","absolute","17","47",null,"213","17",null,this);_a.set_taborder("12");this.addChild(_a.name,_a);_a=new ImageViewer("img_2","absolute","17","292",null,null,"17","17",this);_a.set_taborder("13");this.addChild(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("PRJ040201_P02");_b.set_titletext("홈페이지연동(공정) 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item0","txt_1","value","ds_cond1","TXT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","img_2","image","ds_cond1","IMG");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ040201_P02.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ040201_P02.xfdl",function(){this.TXT=this.parent.TXT;this.IMG=this.parent.IMG;this.PRJ040201_P02_oninit=function(_a,_b){this.fn_init();this.fn_init_form();};this.PRJ040201_P02_onload=function(_a,_b){this.fn_init_dataset();return;if(this.TXT){this.ds_cond1.setColumn(0,'TXT',this.TXT);}if(this.IMG){this.ds_cond1.setColumn(0,'IMG',this.IMG);}};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[['ds_PRJ009','PRJ009',1,'A'],['ds_PRJ012','PRJ012',1,'']];var _b=function(_c,_d,_e){this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("acntList");};this.fn_transaction=function(_a){var _b;var _c;var _d="hsco/pms/prj/"+_a+".do";var _e="";var _f="";switch(_a){case "acntList":_f="ds_1=output1";this.ds_1.clearData();break;}if(_b){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "acntList":this.grd_1.setFocus();if(this.AUTO_RET&&this.ds_1.rowcount==1){this.fn_confirm();}break;}};this.fn_confirm=function(){var _a=new Dataset();var _b=this.ds_1;var _c=_b.rowposition;_b.filter("RN=="+(_c+1));_a.copyData(_b,true);this.close(_a.saveXML());};this.grd_1_oncelldblclick=function(_a,_b){this.fn_confirm();};this.grd_1_onkeydown=function(_a,_b){if(_b.keycode==13){this.fn_confirm();}};});this.on_initEvent=function(){this.addEventHandler("onload",this.PRJ040201_P02_onload,this);this.addEventHandler("oninit",this.PRJ040201_P02_oninit,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.fn_confirm,this);this.btn_Close.addEventHandler("onclick",this.close,this);};this.loadIncludeScript("PRJ040201_P02.xfdl");};})();