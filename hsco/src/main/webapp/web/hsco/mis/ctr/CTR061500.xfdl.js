﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR061500");this.set_classname("CTR061500");this.set_titletext("보증현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctAssrncDtls",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PBLICTE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSRNC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"ICNY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPCABL_MATTER\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_flawAssrncDtls",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FLAW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRTGG_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNST_ACCTO_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FLAW_ASSRNC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ASSRNC_BEGIN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSRNC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRSEC_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_entrpsAcctoSldrtyAssr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SLDRTY_ASSRNC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SLDRTY_GRNTR\" type=\"STRING\" size=\"256\"/><Column id=\"SLDRTY_GRNTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RELIS_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prj021",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cntrctNm","absolute","15","5","51","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("계약명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE02","absolute","281","6","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("거래처명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_cntrctNm","absolute","66","5","200","21",null,null,this.div_search);_a.set_taborder("0");_a.set_lengthunit("ascii");_a.set_maxlength("100");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","25.85%","0",null,null,"72.69%","0",this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bcncNm","absolute","345","5","200","21",null,null,this.div_search);_a.set_taborder("1");_a.set_lengthunit("ascii");_a.set_maxlength("100");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","33","1031","10",null,null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Tab("tab_assrncSttus","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.tab_assrncSttus);_a.set_text("계약보증");_a.set_url("mis_ctr::CTR061500_T01.xfdl");this.tab_assrncSttus.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.tab_assrncSttus);_a.set_text("하자보증");_a.set_url("mis_ctr::CTR061500_T02.xfdl");this.tab_assrncSttus.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.tab_assrncSttus);_a.set_text("업체별연대보증");_a.set_url("mis_ctr::CTR061500_T03.xfdl");this.tab_assrncSttus.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CTR061500");_b.set_titletext("보증현황");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search00.Cal_srch01","value","ds_cond","SRCH_ED_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search00.Cal_srch00","value","ds_cond","SRCH_ST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search00.div_bcnc_nm","value","ds_cond","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search00.Rdo_dt","value","ds_cond","SRCH_DS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_cntrctNm","value","ds_cond","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_bcncNm","value","ds_cond","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","mis_ctr::CTR061500_T01.xfdl");this._addPreloadList("fdl","mis_ctr::CTR061500_T02.xfdl");this._addPreloadList("fdl","mis_ctr::CTR061500_T03.xfdl");};this.addIncludeScript("CTR061500.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR061500.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR061500.xfdl",function(){this.CTR061500_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR061500_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();var _b=[["ds_prj021","PRJ021","Y","D","B"]];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_cntrctAssrncDtls.clearData();this.ds_flawAssrncDtls.clearData();this.ds_entrpsAcctoSldrtyAssr.clearData();this.fn_transaction("selectAssrncSttus");};this.fn_transaction=function(_a){switch(_a){case "selectAssrncSttus":var _b="hsco/mis/ctr/CTR061500/selectAssrncSttus.do";var _c="input1=ds_cond";var _d="ds_cntrctAssrncDtls=output1 ds_flawAssrncDtls=output2 ds_entrpsAcctoSldrtyAssr=output3";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}if(_b!=0){}else{switch(_a){case "selectAssrncSttus":break;}}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("oninit",this.CTR061500_oninit,this);this.addEventHandler("onload",this.CTR061500_onload,this);};this.loadIncludeScript("CTR061500.xfdl");this.loadPreloadList();};})();