﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CMP010100_P06");this.set_classname("CMP010100_P06");this.set_titletext("사업지구 찾기");this._setFormPosition(0,0,500,500);}_a=new Dataset("ds_tbprjBsnsCode",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FULLCODE\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"20\"/><Column id=\"TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"REG_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"dummy\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bsnsType",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","15","114",null,null,"15","15",this);_a.set_taborder("1");_a.set_text("Div00");_a.style.set_border("0 none crimson");this.addChild(_a.name,_a);_a=new Grid("grd_businessDistrictList","absolute","0","10",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_autofittype("col");_a.set_binddataset("ds_tbprjBsnsCode");_a.set_cssclass("grd02_WF_blue");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"380\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업지구코드\"/><Cell col=\"1\" text=\"사업지구명\"/></Band><Band id=\"body\"><Cell text=\"bind:FULLCODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0","496","10",null,null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2","496","34",null,null,this);_a.set_taborder("6");_a.set_text("사업지구 찾기");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15","496",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","485","2","15","496",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2","485","496","15",null,null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36","496","15",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("title","absolute","17","53","197","21",null,null,this);_a.set_taborder("11");_a.set_text("사업지구 조회");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute",null,"51","50","25","121",null,this);_a.set_taborder("12");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_confim","absolute",null,"51","50","25","68",null,this);_a.set_taborder("13");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"51","50","25","15",null,this);_a.set_taborder("15");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","466","5",null,null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81",null,"33","15",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_name","absolute","15","5","67","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bsnsTy","absolute","82","5","132","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_bsnsType");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_BSNS_AREA_CODE00","absolute","229","5","75","22",null,null,this.div_search);_a.set_taborder("16");_a.set_text("사업지구명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bsnsNm","absolute","304","5","140","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","460","8","20","20",null,null,this);_a.set_taborder("17");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div00");_b.style.set_border("0 none crimson");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("CMP010100_P06");_b.set_titletext("사업지구 찾기");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CMP010100_P06.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP010100_P06.xfdl",function(){this.CMP010100_P06_oninit=function(_a,_b){this.fn_init(false);this.fn_init_dataset();};this.CMP010100_P06_onload=function(_a,_b){this.fn_load_combo();this.btn_search_onclick();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_cmmCode(this.ds_bsnsType,"전체",{grpCode:"PRJ012"});};this.btn_search_onclick=function(_a,_b){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectBusinessDistrictList");};this.btn_confim_onclick=function(_a,_b){var _c=this.div_work.grd_businessDistrictList.getSelectedRows();var _d=this.ds_tbprjBsnsCode.getColumn(_c,"TYPE");var _e=this.ds_tbprjBsnsCode.getColumn(_c,"FULLCODE");var _f=this.ds_tbprjBsnsCode.getColumn(_c,"CODE_NM");var _g=this.ds_tbprjBsnsCode.getColumn(_c,"REG_YN");var _h=this.opener;if(_h.fn_set_fnnc_instt==null){_h=this.opener.div_workFrame.div_main;}var _i=_h[this.parent.callback](_d,_e,_f,_g);if(_i==true){this.close();}};this.btn_close_onclick=function(_a,_b){this.close();};this.div_work_grd_businessDistrictList_oncelldblclick=function(_a,_b){this.btn_confim_onclick();};this.fn_transaction=function(_a){switch(_a){case "selectBusinessDistrictList":var _b="hsco/pms/cmp/CMP010100/businessDistrictList.do";var _c="input1=ds_cond00";var _d="ds_tbprjBsnsCode=output1";break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;};});this.on_initEvent=function(){this.addEventHandler("oninit",this.CMP010100_P06_oninit,this);this.addEventHandler("onload",this.CMP010100_P06_onload,this);this.div_work.grd_businessDistrictList.addEventHandler("oncelldblclick",this.div_work_grd_businessDistrictList_oncelldblclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.btn_confim.addEventHandler("onclick",this.btn_confim_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("CMP010100_P06.xfdl");};})();