﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CMP040100_P03");this.set_classname("CMP040100_P03");this.set_titletext("공문대상자 팝업");this._setFormPosition(0,0,550,600);}_a=new Dataset("ds_bsnsAreaCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_tbcmpBsnsbyUntpc",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"COMM_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"UNTPC_CL_NM\" type=\"STRING\" size=\"255\"/><Column id=\"UNTPC\" type=\"STRING\" size=\"255\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"255\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">선택</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_tbcmpThingCl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">DS_TBCMP_THING_WTNNC</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업지구</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_THING_WTNNC",this);_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_LOCPLC_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_OFLDC_INFO",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"OPERTN_SN\" type=\"INT\" size=\"10\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"100\"/><Column id=\"OPERTN_MTH\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","1160","16",null,"866","-119",null,this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","17","176",null,null,"17","14",this);_a.set_taborder("1");_a.set_text("Div01");_a.style.set_border("0 none crimson");this.addChild(_a.name,_a);_a=new Grid("grd_bsnsbyUntpcList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_cssclass("grd02_WF_blue");_a.set_taborder("0");_a.set_binddataset("DS_TBCMP_OFLDC_INFO");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"시행일자\"/><Cell col=\"2\" text=\"문서번호\"/><Cell col=\"3\" text=\"시행방법\"/><Cell col=\"4\" text=\"시행구분\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;\" text=\"bind:OPERTN_DE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DOC_NO\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:OPERTN_MTH\" maskchar=\"-\"/><Cell col=\"4\" text=\"bind:OPERTN_SE\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2",null,"34","2",null,this);_a.set_taborder("2");_a.set_text("공문정보");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"2","15",null,"2","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15",null,null,"0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0.4%","36",null,"15","0.4%",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("title","absolute","3.4%","53",null,"21","57.2%",null,this);_a.set_taborder("6");_a.set_text("공문정보");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_confim","absolute","420","51","56","25",null,null,this);_a.set_taborder("7");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","478","51",null,"25","16",null,this);_a.set_taborder("8");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","81",null,"85","15",null,this);_a.set_taborder("9");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_bsnsAreaCode","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_BSNS_AREA_CODE","absolute","79","5","180","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_bsnsAreaCode");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_enable("false");_a=new Static("sta_bsnsAreaCode00","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("공문종류");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bsnsAreaCode01","absolute","15","57","64","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("시행일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static20","absolute","74","0","5","83",null,null,this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","312","0","5","83",null,null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bsnsAreaCode02","absolute","253","57","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("문서번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_DOC_NO","absolute","317","57","180","22",null,null,this.div_search);_a.set_taborder("10");_a.set_maxlength("10");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_OFLDC_KIND","absolute","79","31","180","22",null,null,this.div_search);_a.set_taborder("14");_a.set_maxlength("10");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_OPERTN_DE","absolute","79","57","100","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("15");_a.set_dateformat("yyyy-MM-dd");_a=new Button("btn_search","absolute","361","51","56","25",null,null,this);_a.set_taborder("10");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2",null,null,"15","2","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","3.4%","76",null,"5","3.4%",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","166",null,"10","17",null,this);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","92%","8",null,"20","4%",null,this);_a.set_taborder("14");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div01");_b.style.set_border("0 none crimson");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,85,this.div_search,function(_b){_b.set_taborder("9");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",550,600,this,function(_b){_b.set_classname("CMP040100_P03");_b.set_titletext("공문대상자 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item21","div_search.cal_OPERTN_DE","value","DS_TBCMP_DSCSS_DOC","DSCSS_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CMP040100_P03.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP040100_P03.xfdl",function(){this.CMP040100_P03_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.CMP040100_P03_onload=function(_a,_b){this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_userBsnsArea(this.ds_bsnsAreaCode,"선택","","fn_callBack");};this.btn_search_onclick=function(_a,_b){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return;}this.DS_TBCMP_THING_WTNNC.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("tbcmpOfldcInfoListPop");};this.btn_confim_onclick=function(_a,_b){if(this.fn_confirm()==true){this.close();}};this.fn_confirm=function(){var _a=this.DS_TBCMP_OFLDC_INFO.rowposition;var _b=false;var _c=this.fn_dsToObj(this.DS_TBCMP_OFLDC_INFO,_a);var _d=this.opener;if(_d[this.parent.callback]==null){_d=this.opener.div_workFrame.div_main;}_b=_d[this.parent.callback](_c);return _b;};this.btn_close_onclick=function(_a,_b){this.close();};this.fn_transaction=function(_a,_b){var _c=true;switch(_a){case "tbcmpOfldcInfoListPop":var _d="hsco/pms/cmp/tdd/CMP040100/tbcmpOfldcInfoListPop.do";var _e="input1=ds_cond00";var _f="DS_TBCMP_OFLDC_INFO=output1";break;}if(this.fn_validate_tranasaction(_a,_d,_e,_f)==false){return;}Ex.core.tran(this,_a,_d,_e,_f,"",null,null,_c);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;switch(_a){case "bsnsAreaCode":this.div_search.cmb_BSNS_AREA_CODE.set_value(this.parent.bsnsAreaCode);break;}};this.div_work_grd_bsnsbyUntpcList_oncelldblclick=function(_a,_b){this.btn_confim_onclick();};});this.on_initEvent=function(){this.ds_tbcmpBsnsbyUntpc.addEventHandler("canrowposchange",this.DS_TBCMP_BSNSBY_UNTPC_canrowposchange,this);this.addEventHandler("oninit",this.CMP040100_P03_oninit,this);this.addEventHandler("onload",this.CMP040100_P03_onload,this);this.div_work.grd_bsnsbyUntpcList.addEventHandler("oncelldblclick",this.div_work_grd_bsnsbyUntpcList_oncelldblclick,this);this.btn_confim.addEventHandler("onclick",this.btn_confim_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("CMP040100_P03.xfdl");};})();