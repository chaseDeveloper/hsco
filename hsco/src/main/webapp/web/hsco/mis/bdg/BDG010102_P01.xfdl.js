﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG010102_P01");this.set_classname("BDG010102_P01");this.set_titletext("부기코드팝업");this._setFormPosition(0,0,410,370);}_a=new Dataset("ds_bdg019",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEARCH_CND\" type=\"STRING\" size=\"1\"/><Column id=\"SEARCH_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bukipList",this);_a._setContents("<ColumnInfo><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bukipListCopy",this);_a._setContents("<ColumnInfo><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","0",null,"370","0%",null,this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","121",null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","179","21",null,null,this);_a.set_taborder("8");_a.set_text("부기코드");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"33","15",null,this);_a.set_taborder("9");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_searchCn","absolute","180","5","180","21",null,null,this.div_search);_a.set_taborder("12");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("검색항목");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_searchCnd","absolute","79","5","98","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("14");_a.set_innerdataset("@ds_bdg019");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("10 Gulim");_a=new Static("Static07","absolute","15","78",null,"10","55",null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","3.32%","40",null,"5","3.32%",null,this);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","46","15","31",null,null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Grid("grd_bukipList","absolute","15","88",null,null,"15","15",this);_a.set_taborder("16");_a.set_binddataset("ds_bukipList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"260\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부기코드\"/><Cell col=\"1\" text=\"부기명\"/></Band><Band id=\"body\"><Cell text=\"bind:BUKIP_CODE\"/><Cell col=\"1\" text=\"bind:BUKIP_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("9");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",410,370,this,function(_b){_b.set_classname("BDG010102_P01");_b.set_titletext("부기코드팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_searchCn","value","ds_cond","SEARCH_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_searchCnd","value","ds_cond","SEARCH_CND");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG010102_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG010102_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG010102_P01.xfdl",function(){this.BDG010102_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG010102_P01_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();var _b=[["ds_bdg019","BDG019","Y","A","B"]];var _c=function(_d,_e,_f){this.ds_cond.setColumn(_a,"SEARCH_CND","");this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_bukipList.clearData();this.fn_transaction("selectBukipListP");};this.fn_transaction=function(_a){switch(_a){case "selectBukipListP":var _b="/hsco/mis/bdg/BDG010102/selectBukipListP.do";var _c="input1=ds_cond";var _d="ds_bukipList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectBukipListP":break;}}};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){this.ds_bukipListCopy.clearData();var _c=this.ds_bukipListCopy.addRow();var _d;_d=this.ds_bukipListCopy.copyRow(_c,this.ds_bukipList,this.ds_bukipList.rowposition);this.close(this.ds_bukipListCopy.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};this.grd_bukipList_oncelldblclick=function(_a,_b){this.ds_bukipListCopy.clearData();var _c=this.ds_bukipListCopy.addRow();var _d;_d=this.ds_bukipListCopy.copyRow(_c,this.ds_bukipList,this.ds_bukipList.rowposition);this.close(this.ds_bukipListCopy.saveXML());};});this.on_initEvent=function(){this.addEventHandler("oninit",this.BDG010102_P01_oninit,this);this.addEventHandler("onload",this.BDG010102_P01_onload,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_search.edt_searchCn.addEventHandler("onkeyup",this.div_search_edt_emplnm_onkeyup,this);this.div_search.cmb_searchCnd.addEventHandler("onitemchanged",this.div_search_cmb_EMPL_SE_onitemchanged,this);this.grd_bukipList.addEventHandler("oncelldblclick",this.grd_bukipList_oncelldblclick,this);};this.loadIncludeScript("BDG010102_P01.xfdl");};})();