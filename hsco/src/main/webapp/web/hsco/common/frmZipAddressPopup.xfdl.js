﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("frmZipAddressPopup");this.set_classname("frmZipAddress");this.set_titletext("주소 찾기");this._setFormPosition(0,0,666,705);}_a=new Dataset("ds_zipAddress",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ENGADDR\" type=\"string\" size=\"32\"/><Column id=\"ZIPNO\" type=\"string\" size=\"32\"/><Column id=\"ROADADDRPART2\" type=\"string\" size=\"32\"/><Column id=\"JIBUNADDR\" type=\"string\" size=\"32\"/><Column id=\"ROADADDRPART1\" type=\"string\" size=\"32\"/><Column id=\"RNMGTSN\" type=\"string\" size=\"32\"/><Column id=\"ADMCD\" type=\"string\" size=\"32\"/><Column id=\"BDMGTSN\" type=\"string\" size=\"32\"/><Column id=\"ROADADDR\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_zipAddress_m",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TOTALCOUNT\" type=\"string\" size=\"32\"/><Column id=\"CURRENTPAGE\" type=\"string\" size=\"32\"/><Column id=\"COUNTPERPAGE\" type=\"string\" size=\"32\"/><Column id=\"ERRORCODE\" type=\"string\" size=\"32\"/><Column id=\"ERRORMESSAGE\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_return",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ENGADDR\" type=\"string\" size=\"32\"/><Column id=\"ZIPNO\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_CNT\" type=\"string\" size=\"32\"/><Column id=\"ROADADDRPART2\" type=\"string\" size=\"32\"/><Column id=\"JIBUNADDR\" type=\"string\" size=\"32\"/><Column id=\"ROADADDRPART1\" type=\"string\" size=\"32\"/><Column id=\"RNMGTSN\" type=\"string\" size=\"32\"/><Column id=\"ADMCD\" type=\"string\" size=\"32\"/><Column id=\"BDMGTSN\" type=\"string\" size=\"32\"/><Column id=\"ROADADDR\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"KEYWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">edt_roadName</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지번 / 도로명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_headTitle","absolute","3","2",null,"34","3",null,this);_a.set_taborder("0");_a.set_text("주소 찾기");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_headClose","absolute",null,"8","20","20","12",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","197","21",null,null,this);_a.set_taborder("15");_a.set_text("주소찾기");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute","601","51","50","25",null,null,this);_a.set_taborder("16");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","81",null,"35","15",null,this);_a.set_taborder("8");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","10","5","90","25",null,null,this.div_search);_a.set_taborder("12");_a.set_text("지번 / 도로명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_roadName","absolute","110","4","320","25",null,null,this.div_search);_a.set_taborder("13");_a.set_cssclass("edt_WF_Essential");_a.set_displaynulltext("지번 또는 도로명을 입력하십시요.");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_zipAddress","absolute","17","130",null,null,"15","49",this);_a.set_taborder("10");_a.set_binddataset("ds_zipAddress");_a.set_autosizingtype("none");_a.set_cellsizebandtype("allband");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"552\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"주소\"/></Band><Band id=\"body\" style=\"cellbackground2:#f0f0f0ff;cellcolor2:#444444ff;\"><Cell rowspan=\"2\" style=\"align:center middle;\" text=\"bind:ZIPNO\"/><Cell col=\"1\" style=\"align:left;\" expr=\"&quot;[도로명] &quot;+ROADADDR\"/><Cell row=\"1\" col=\"1\" style=\"align:left;\" expr=\"&quot;[지번] &quot;+JIBUNADDR\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_paging","absolute","17",null,null,"22","15","17",this);_a.set_taborder("11");_a.style.set_border("0 none #808080ff");_a.set_text("div_paging");_a.set_async("false");_a.set_url("common::paging.xfdl");this.addChild(_a.name,_a);_a=new Button("btn_ok","absolute",null,null,"50","23","67","15",this);_a.set_taborder("13");_a.set_text("확인");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,null,"50","23","14","15",this);_a.set_taborder("14");_a.set_text("종료");this.addChild(_a.name,_a);_a=new Layout("default","",0,35,this.div_search,function(_b){_b.set_taborder("8");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",666,705,this,function(_b){_b.set_classname("frmZipAddress");_b.set_titletext("주소 찾기");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::paging.xfdl");};this.addIncludeScript("frmZipAddressPopup.xfdl","lib::comInclude.xjs");this.registerScript("frmZipAddressPopup.xfdl",function(){this.LIST_COUNT=10;this.PAGE_COUNT=10;this.fv_objForm;this.isSearchBtnOnClick=false;this.frmZipAddressPopup_oninit=function(_a,_b){this.div_paging.USE_INPUT_PAGE=false;};this.frmZipAddressPopup_onload=function(_a,_b){this.div_paging.initPaging(this.LIST_COUNT,this.PAGE_COUNT,this.onChangePage,_a);this.fv_objForm=this.parent.art_0;if(!this.comUtils.isNullEmpty(this.parent.arg_addr)){this.div_search.edt_roadName.set_value(this.parent.arg_addr);}this.div_search.edt_roadName.setFocus();};this.fn_search=function(_a){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}var _b="ZipAddressSearch";var _c="/hsco/com/ZipCode.do";var _d="input1=ds_cond";var _e="ds_zipAddress=output1 ds_zipAddress_m=output2";var _f="";if(this.ds_cond.rowcount==0){this.ds_cond.addRow();}this.ds_cond.setColumn(0,"PAGE_NO",_a);this.ds_cond.setColumn(0,"SHOW_CNT",this.LIST_COUNT);this.ds_cond.setColumn(0,"KEYWORD",this.div_search.edt_roadName.value);Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_message("info.처리불가.실패",_c);return;}switch(_a){case "ZipAddressSearch":var _d=this.ds_zipAddress_m.getColumn(0,"TOTALCOUNT");if(isSearchBtnOnClick){this.div_paging.setCurrentPage(1);}this.div_paging.setPage(_d);if(this.ds_zipAddress.rowcount==0){this.grd_zipAddress.set_nodatatext("자료가 존재하지 않습니다.");}break;}};this.btn_search_onclick=function(_a,_b){isSearchBtnOnClick=true;this.fn_search(1);};this.btn_ok_onclick=function(_a,_b){this.fn_result();};this.grd_zipAddress_oncelldblclick=function(_a,_b){this.fn_result();};this.fn_result=function(){var _a=this.ds_zipAddress.rowposition;var _b=this.ds_return;_b.clearData();_b.addRow();_b.copyRow(0,this.ds_zipAddress,_a);var _c=_b.getColumn(0,'ZIPNO');_b.setColumn(0,'ZIPNO',_c.replace('-',''));this.close(_b.saveXML());};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_headClose_onclick=function(_a,_b){this.close();};this.onChangePage=function(_a){isSearchBtnOnClick=false;this.fn_search(_a);};this.fv_cX;this.fv_cY;this.sta_headTitle_onlbuttondown=function(_a,_b){this.fv_cX=_b.screenX;this.fv_cY=_b.screenY;};this.sta_headTitle_onmousemove=function(_a,_b){if(_b.button=="none"){return;}var _c=_b.screenX;var _d=_b.screenY;this.parent.set_left(parseInt(this.parent.left)-(this.fv_cX-_c));this.parent.set_top(parseInt(this.parent.top)-(this.fv_cY-_d));this.fv_cX=_b.screenX;this.fv_cY=_b.screenY;};this.div_search_edt_roadName_onkeydown=function(_a,_b){if(_b.keycode==13){isSearchBtnOnClick=true;this.fn_search(1);}if(_b.keycode==40){this.grd_zipAddress.setFocus();}};this.grd_zipAddress_onkeydown=function(_a,_b){if(_b.keycode==13){this.fn_result();}};this.div_search_edt_roadName_onsetfocus=function(_a,_b){_a.setSelect();};});this.on_initEvent=function(){this.addEventHandler("onload",this.frmZipAddressPopup_onload,this);this.addEventHandler("oninit",this.frmZipAddressPopup_oninit,this);this.sta_headTitle.addEventHandler("onmousemove",this.sta_headTitle_onmousemove,this);this.sta_headTitle.addEventHandler("onlbuttondown",this.sta_headTitle_onlbuttondown,this);this.btn_headClose.addEventHandler("onclick",this.btn_headClose_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.div_search.edt_roadName.addEventHandler("onkeydown",this.div_search_edt_roadName_onkeydown,this);this.div_search.edt_roadName.addEventHandler("onsetfocus",this.div_search_edt_roadName_onsetfocus,this);this.grd_zipAddress.addEventHandler("oncelldblclick",this.grd_zipAddress_oncelldblclick,this);this.grd_zipAddress.addEventHandler("onkeydown",this.grd_zipAddress_onkeydown,this);this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("frmZipAddressPopup.xfdl");this.loadPreloadList();};})();