﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("popCtrDtl");this.set_classname("popCtrDtl");this.set_titletext("계약코드 팝업");this._setFormPosition(0,0,800,500);}_a=new Dataset("ds_all",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_1",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_Ret",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"4\"/><Column id=\"CNTRCT_SE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"MNGT_AT\" type=\"STRING\" size=\"1\"/><Column id=\"QOTA_RT\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"13\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"CD1\" type=\"STRING\" size=\"6\"/><Column id=\"NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CL\" type=\"STRING\" size=\"1\"/><Column id=\"CD1\" type=\"STRING\" size=\"6\"/><Column id=\"NM\" type=\"STRING\" size=\"100\"/><Column id=\"LVL\" type=\"INT\" size=\"1\"/><Column id=\"LCLAS_NM\" type=\"string\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cd1",this);_a._setContents("<ColumnInfo><Column id=\"CD1\" size=\"16\"/><Column id=\"LCLAS_NM\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BSNS_CL\">1</Col><Col id=\"CD1\">101</Col><Col id=\"LCLAS_NM\">용도코드</Col></Row><Row><Col id=\"BSNS_CL\">1</Col><Col id=\"CD1\">02</Col><Col id=\"LCLAS_NM\">공급코드</Col></Row><Row><Col id=\"BSNS_CL\">2</Col><Col id=\"CD1\">01</Col><Col id=\"LCLAS_NM\">방향코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ011",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\"/><Column id=\"CODE_NM\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">토지</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">주택</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_bg","absolute","0","0",null,"500","0",null,this);_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("sta_gud_v1","absolute","2","2","15",null,null,"2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_v2","absolute",null,"2","15",null,"2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.addChild(_a.name,_a);_a=new Static("sta_gud_h1","absolute","2","2",null,"15","2",null,this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h2","absolute","17","42",null,"5","17",null,this);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h3","absolute","17","80",null,"10","17",null,this);_a.set_text("10");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_gud_h4","absolute","2",null,null,"15","2","2",this);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","19","197","21",null,null,this);_a.set_text("계약코드");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","47",null,"33","17",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_gud_v3","absolute","0","0","15",null,null,"0",this.div_search);_a.set_text("15");_a.set_visible("0");_a.style.set_background("#1b3cd23c");this.div_search.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","5","60","21",null,null,this.div_search);_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_2","absolute","80","5","90","21",null,null,this.div_search);_a.set_taborder("3");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_3","absolute","172","5",null,"21","5",null,this.div_search);_a.set_taborder("4");_a.set_enable("0");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","123",null,this);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"17","50","25","70",null,this);_a.set_taborder("3");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("4");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","17","90",null,null,"17","17",this);_a.set_taborder("9");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"280\"/><Column size=\"190\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약코드\"/><Cell col=\"1\" text=\"계약명\"/><Cell col=\"2\" text=\"수급자\"/><Cell col=\"3\" text=\"계약금액\"/><Cell col=\"4\" text=\"착공일자\"/><Cell col=\"5\" text=\"완공일자\"/></Band><Band id=\"body\"><Cell/><Cell text=\"bind:CNTRCT_NO\"/><Cell col=\"1\" text=\"bind:CNTRCT_NM\" style=\"align:left;padding:0 5 0 5;\"/><Cell col=\"2\" text=\"bind:BCNC_NM\" style=\"align:left;padding:0 5 0 5;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:CNTRCT_AMOUNT\"/><Cell col=\"4\" text=\"bind:STRWRK_DE\" displaytype=\"date\" edittype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:COMPET_DE\" displaytype=\"date\" edittype=\"date\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",800,500,this,function(_b){_b.set_classname("popCtrDtl");_b.set_titletext("계약코드 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.edt_2","value","ds_cond1","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("popCtrDtl.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("popCtrDtl.xfdl",function(){this.AUTO_RET=this.parent.AUTO_RET;this.BSNS_CODE=this.parent.BSNS_CODE;this.BSNS_NM=this.parent.BSNS_NM;this.popCtrDtl_oninit=function(_a,_b){this.fn_init();this.fn_init_form();};this.popCtrDtl_onload=function(_a,_b){this.fn_init_dataset();this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[['ds_PRJ011','PRJ011',1,'A']];var _b=function(_c,_d,_e){this.div_search.edt_2.set_value(this.BSNS_CODE);this.div_search.edt_3.set_value(this.BSNS_NM);this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("ctrDtlList");};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "ctrDtlList":_f="ds_1=output1";this.ds_1.clearData();break;}if(_b){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "ctrDtlList":this.grd_1.setFocus();if(this.AUTO_RET&&this.ds_1.rowcount==1){this.fn_confirm();}break;}};this.fn_confirm=function(){var _a=new Dataset();var _b=this.ds_1;var _c=_b.rowposition;_b.filter("RN=="+(_c+1));_a.copyData(_b,true);this.close(_a.saveXML());};this.grd_1_oncelldblclick=function(_a,_b){this.fn_confirm();};this.grd_1_onkeydown=function(_a,_b){if(_b.keycode==13){this.fn_confirm();}};});this.on_initEvent=function(){this.addEventHandler("onload",this.popCtrDtl_onload,this);this.addEventHandler("oninit",this.popCtrDtl_oninit,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.fn_confirm,this);this.btn_Close.addEventHandler("onclick",this.close,this);this.grd_1.addEventHandler("oncelldblclick",this.grd_1_oncelldblclick,this);this.grd_1.addEventHandler("onkeydown",this.grd_1_onkeydown,this);};this.loadIncludeScript("popCtrDtl.xfdl");};})();