﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("popPrcOdr");this.set_classname("popPrcOdr");this.set_titletext("원가차수 팝업");this._setFormPosition(0,0,500,500);}_a=new Dataset("ds_1",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_Ret",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"ODR\" type=\"STRING\" size=\"11\"/><Column id=\"DRW_ODR\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"REGIST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNO_CHARGER\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"RN\" type=\"INT\" size=\"10\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"5\"/><Column id=\"ODR\" type=\"STRING\" size=\"11\"/><Column id=\"ODR_DTLS\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_bg","absolute","0","0",null,"500","0",null,this);_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("sta_gud_v1","absolute","2","2","15",null,null,"2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_v2","absolute",null,"2","15",null,"2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_h1","absolute","2","2",null,"15","2",null,this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h2","absolute","17","42",null,"5","17",null,this);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h3","absolute","17","104",null,"5","17",null,this);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h4","absolute","2",null,null,"15","2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","19","197","21",null,null,this);_a.set_text("차수 팝업");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","47",null,"57","17",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_gud_v3","absolute","0","0","15",null,null,"0",this.div_search);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.div_search.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","5","60","21",null,null,this.div_search);_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","183","5","60","21",null,null,this.div_search);_a.set_text("사 업 명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_3","absolute","15","29","60","21",null,null,this.div_search);_a.set_text("원가차수");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_4","absolute","183","29","60","21",null,null,this.div_search);_a.set_text("차수내역");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_1","absolute","78","5","90","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_2","absolute","245","5",null,"21","5",null,this.div_search);_a.set_taborder("2");_a.set_enable("0");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_3","absolute","140","5","28","21",null,null,this.div_search);_a.set_taborder("3");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_4","absolute","78","29","90","21",null,null,this.div_search);_a.set_taborder("4");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_5","absolute","245","29",null,"21","5",null,this.div_search);_a.set_taborder("5");_a.set_enable("0");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","123",null,this);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("visible2").set("0");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"17","50","25","70",null,this);_a.set_taborder("3");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("4");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","17","135",null,null,"17","17",this);_a.set_taborder("9");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"원가코드\"/><Cell col=\"2\" text=\"분류구분\"/><Cell col=\"3\" text=\"원가항목명\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"금액(억원)\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:STD_PRMPC_CODE\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:CL_SE\" combodataset=\"ds_PRJ010\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:CODE_NM\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:UNIT_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title2","absolute","17","109","197","21",null,null,this);_a.set_taborder("12");_a.set_text("복사대상 추정원가 내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("sta_gud_h5","absolute","17","130",null,"5","17",null,this);_a.set_taborder("13");_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Layout("default","",0,57,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("popPrcOdr");_b.set_titletext("원가차수 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.edt_1","value","ds_cond1","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.edt_2","value","ds_cond1","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item03","div_search.edt_3","value","ds_cond1","BSNS_STEP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item04","div_search.edt_4","value","ds_cond1","ODR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item05","div_search.edt_5","value","ds_cond1","ODR_DTLS");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("popPrcOdr.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("popPrcOdr.xfdl",function(){this.AUTO_RET=this.parent.AUTO_RET;this.BSNS_CODE=this.parent.BSNS_CODE;this.BSNS_NM=this.parent.BSNS_NM;this.BSNS_STEP=this.parent.BSNS_STEP;this.ODR=this.parent.ODR;this.ODR_DTLS=this.parent.ODR_DTLS;this.DS_1=this.parent.DS_1;this.popPrcOdr_oninit=function(_a,_b){this.fn_init();this.fn_init_form();};this.popPrcOdr_onload=function(_a,_b){this.fn_init_dataset();this.div_search.edt_1.set_value(this.BSNS_CODE);this.div_search.edt_2.set_value(this.BSNS_NM);this.div_search.edt_3.set_value(this.BSNS_STEP);this.div_search.edt_3.set_visible(!this.BSNS_STEP);this.div_search.edt_4.set_value(this.ODR);this.div_search.edt_5.set_value(this.ODR_DTLS);this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[['ds_PRJ010','PRJ010',1,'']];var _b=function(_c,_d,_e){this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("prcOdrList");};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "prcOdrList":_f="ds_1=output1";this.ds_1.clearData();break;}if(_b){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "prcOdrList":this.grd_1.setFocus();if(this.AUTO_RET&&this.ds_1.rowcount==1){this.fn_confirm();}break;}};this.fn_confirm=function(){var _a=new Dataset();var _b=this.ds_1;var _c=_b.rowposition;_b.filter("RN=="+(_c+1));_a.copyData(_b,true);this.close(_a.saveXML());};this.grd_1_oncelldblclick=function(_a,_b){this.fn_confirm();};this.grd_1_onkeydown=function(_a,_b){if(_b.keycode==13){this.fn_confirm();}};});this.on_initEvent=function(){this.addEventHandler("onload",this.popPrcOdr_onload,this);this.addEventHandler("oninit",this.popPrcOdr_oninit,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.fn_confirm,this);this.btn_Close.addEventHandler("onclick",this.close,this);this.grd_1.addEventHandler("oncelldblclick",this.grd_1_oncelldblclick,this);this.grd_1.addEventHandler("onkeydown",this.grd_1_onkeydown,this);};this.loadIncludeScript("popPrcOdr.xfdl");};})();