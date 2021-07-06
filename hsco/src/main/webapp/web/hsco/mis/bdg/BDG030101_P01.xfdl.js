﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG030101_P01");this.set_classname("BDG030101_P01");this.set_titletext("예산계정 및 부기 선택");this._setFormPosition(0,0,900,620);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\"/><Column id=\"CODE_NM\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\"/><Column id=\"CODE_NM\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bsnsCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acntCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bukipCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bukipPopup",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN\" type=\"STRING\" size=\"256\"/><Column id=\"HANG\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG\" type=\"STRING\" size=\"256\"/><Column id=\"MOK\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"MOK2\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK2\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","67",null,this);_a.set_taborder("3");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("4");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","48",null,"59","15",null,this);_a.set_taborder("6");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BSNS_SE","absolute","218","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("@ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("filter");_a.set_index("-1");_a=new Radio("rdo_BALC_SE","absolute","400","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("8");_a.set_innerdataset("@ds_bdg002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a=new Static("sta_BALC_SE","absolute","323","5","77","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("수/지구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ACNT_CODE","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("계정과목");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_ACNT_CODE","absolute","79","31","229","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("10");_a.set_innerdataset("@ds_acntCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("filter");_a.set_index("-1");_a=new Static("Static05","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","350","0","38","5",null,null,this.div_search);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","350",null,"38","5",null,"0",this.div_search);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","350","26","38","5",null,null,this.div_search);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","139","5","15","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","308","5","15","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","308","31","15","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ACNT_CODE00","absolute","323","31","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("부기");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_expndtrUnitCode","absolute","387","31","363","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_innerdataset("@ds_bukipCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("filterlike");_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ExpndtrUnitPopup","absolute","15","117","140","19",null,null,this);_a.set_taborder("8");_a.set_text("계정별 부기코드");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_ExpndtrUnitPopup","absolute","15","141",null,null,"15","15",this);_a.set_taborder("10");_a.set_binddataset("ds_bukipPopup");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_treeinitstatus("collapse,null");_a.set_treeusecheckbox("true");_a.set_treeusebutton("use");_a.set_treeuseexpandkey("false");_a.set_treeuseimage("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"260\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관\"/><Cell col=\"1\" text=\"항\"/><Cell col=\"2\" text=\"세항\"/><Cell col=\"3\" text=\"목\"/><Cell col=\"4\" text=\"세목\"/><Cell col=\"5\" text=\"부기\"/><Cell col=\"6\" text=\"부기\"/></Band><Band id=\"body\" style=\"cellline: ;\"><Cell style=\"align:left middle;selectline: ;\" text=\"bind:GWAN\" suppress=\"1\" suppressalign=\"first,over\" tooltiptext=\"bind:GWAN\"/><Cell col=\"1\" style=\"align:left middle;selectline: ;\" text=\"bind:HANG\" suppress=\"2\" suppressalign=\"first,over\" tooltiptext=\"bind:HANG\"/><Cell col=\"2\" style=\"align:left middle;selectline: ;\" text=\"bind:SEHANG\" suppress=\"3\" suppressalign=\"first,over\" tooltiptext=\"bind:SEHANG\"/><Cell col=\"3\" style=\"align:left middle;selectline: ;\" text=\"bind:MOK\" suppress=\"4\" suppressalign=\"first,over\" tooltiptext=\"bind:MOK\"/><Cell col=\"4\" style=\"align:left middle;selectline: ;\" text=\"bind:SEMOK\" suppress=\"5\" suppressalign=\"first,over\" tooltiptext=\"bind:SEMOK\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:BUKIP_NM2\" maskchar=\" \" tooltiptext=\"bind:BUKIP_NM2\"/><Cell col=\"6\" style=\"align:left middle;selectline: ;\" text=\"bind:EXPNDTR_UNIT_NM\" tooltiptext=\"bind:EXPNDTR_UNIT_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","107",null,"10","15",null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","136",null,"5","15",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("6");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",900,620,this,function(_b){_b.set_classname("BDG030101_P01");_b.set_titletext("예산계정 및 부기 선택");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.rdo_BALC_SE","value","ds_cond","BALC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cbo_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cbo_ACNT_CODE","value","ds_cond","BUDGET_ACNT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cbo_expndtrUnitCode","value","ds_cond","BUKIP_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG030101_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG030101_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG030101_P01.xfdl",function(){var _a=null;this.BDG030101_P01_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.BDG030101_P01_onload=function(_b,_c){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);var _b=this.getOwnerFrame().strObj+"";if(_b.indexOf("edt_YEAR")> -1){this.div_search.spn_YEAR.set_cssclass("spn_WF_Readonly");this.div_search.spn_YEAR.set_readonly(true);}if(_b.indexOf("cbo_BSNS_SE")> -1){this.div_search.cbo_BSNS_SE.set_cssclass("cmb_WF_Readonly");this.div_search.cbo_BSNS_SE.set_readonly(true);this.div_search.cbo_BSNS_SE.style.set_buttonsize(0);}if(_b.indexOf("rdo_BALC_SE")> -1){this.div_search.rdo_BALC_SE.set_readonly(true);}if(_b.indexOf("cbo_ACNT_CODE")> -1){this.div_search.cbo_ACNT_CODE.set_cssclass("cmb_WF_Readonly");this.div_search.cbo_ACNT_CODE.set_readonly(true);this.div_search.cbo_ACNT_CODE.style.set_buttonsize(0);}var _c=this.comUtils.getClientDate("YYYY");var _d="1";var _e="2";var _f=new Dataset();var _g=_f.loadXML(this.getOwnerFrame().searchStr);if(_g){if(!this.comUtils.isNull(_f.getColumn(0,"YEAR"))){_c=_f.getColumn(0,"YEAR");}if(!this.comUtils.isNull(_f.getColumn(0,"BSNS_SE"))){_d=_f.getColumn(0,"BSNS_SE");}if(!this.comUtils.isNull(_f.getColumn(0,"BALC_SE"))){_e=_f.getColumn(0,"BALC_SE");}if(!this.comUtils.isNull(_f.getColumn(0,"BUDGET_ACNT_CODE"))){_a=_f.getColumn(0,"BUDGET_ACNT_CODE");}}this.ds_cond.clearData();var _h=this.ds_cond.addRow();var _i=[["ds_bdg001","BDG001","Y","D","B"],["ds_bdg002","BDG002","Y","D","B"]];var _j=function(_k,_l,_m){this.ds_cond.set_enableevent(false);this.ds_cond.setColumn(_h,"YEAR",_c);this.ds_cond.setColumn(_h,"BSNS_SE",_d);this.ds_cond.setColumn(_h,"BALC_SE",_e);this.ds_cond.setColumn(_h,"BUDGET_ACNT_CODE",_a);this.ds_cond.set_enableevent(true);this.fn_init();};this.gfn_comboLoad(_i,_j);};this.fn_init_dataset=function(){};this.fn_search=function(_b,_c){this.ds_bukipPopup.clearData();this.fn_transaction("selectExpndtrUnitPopup");};this.fn_init=function(){this.ds_acntCode.clearData();this.ds_bukipCode.clearData();this.fn_transaction("initCode");};this.fn_transaction=function(_b){switch(_b){case "selectExpndtrUnitPopup":var _c="/hsco/mis/bdg/BDG030101/selectExpndtrUnitPopup.do";var _d="input1=ds_cond";var _e="ds_bukipPopup=output1";break;case "initCode":var _c="/hsco/mis/bdg/BDG030101/initCode.do";var _d="input1=ds_cond";var _e="ds_acntCode=output1 ds_bukipCode=output2";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c==0){switch(_b){case "selectExpndtrUnitPopup":var _e=this.ds_bukipPopup.getMax("ACNT_LEVEL");if(_e=='5'){this.grd_ExpndtrUnitPopup.setFormatColProperty(4,"size",160);}else{this.grd_ExpndtrUnitPopup.setFormatColProperty(4,"size",0);}break;case "initCode":var _f=this.ds_acntCode.insertRow();this.ds_acntCode.setColumn(_f,"CODE","");this.ds_acntCode.setColumn(_f,"CODE_NM","전체");var _g=this.ds_bukipCode.insertRow();this.ds_bukipCode.setColumn(_g,"CODE","");this.ds_bukipCode.setColumn(_g,"CODE_NM","전체");this.ds_cond.set_enableevent(false);this.ds_cond.setColumn(0,"BSNS_CODE","");this.ds_cond.setColumn(0,"BUKIP_CODE","");if(this.comUtils.isNull(_a)){this.ds_cond.setColumn(0,"BUDGET_ACNT_CODE","");}this.ds_cond.set_enableevent(true);this.fn_search();break;}}};this.ds_cond_oncolumnchanged=function(_b,_c){if(_c.columnid=="YEAR"||_c.columnid=="BSNS_SE"||_c.columnid=="BALC_SE"){this.fn_init();}if(_c.columnid=="BUKIP_CODE"){if(this.comUtils.isNull(_c.newvalue)){this.ds_cond.setColumn(0,"BUDGET_ACNT_CODE","");}else{var _d=this.div_search.cbo_expndtrUnitCode.text;var _e=this.ds_bukipCode.getColumn(this.ds_bukipCode.findRow("CODE_NM",_d),"BUDGET_ACNT_CODE");var _f=_e.substr(0,6)+'00';this.ds_cond.setColumn(0,"BUDGET_ACNT_CODE",_f);}}if(_c.columnid=="BUDGET_ACNT_CODE"||_c.columnid=="BUKIP_CODE"){this.fn_search();}};this.grd_ExpndtrUnitPopup_oncelldblclick=function(_b,_c){var _d=this.ds_bukipPopup.rowposition;var _e=this.ds_bukipPopup.getColumn(_d,"BUKIP_CODE");if(this.comUtils.isNull(_e)){this.gfn_message("errors.없음.요청","선택하신 행에 '부기코드'가|다시");return false;}var _f=new Dataset();_f.copyData(this.ds_bukipPopup);_f.clearData();var _g=_f.addRow();_f.copyRow(_g,this.ds_bukipPopup,this.ds_bukipPopup.rowposition);this.close(_f.saveXML());};this.btn_Search_onclick=function(_b,_c){this.fn_search();};this.btn_Close_onclick=function(_b,_c){this.close();};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_bsnsCode.addEventHandler("onrowposchanged",this.ds_bsnsCode_onrowposchanged,this);this.ds_bsnsCode.addEventHandler("cancolumnchange",this.ds_bsnsCode_cancolumnchange,this);this.ds_acntCode.addEventHandler("cancolumnchange",this.ds_acntCode_cancolumnchange,this);this.ds_bukipCode.addEventHandler("cancolumnchange",this.ds_bukipCode_cancolumnchange,this);this.addEventHandler("onload",this.BDG030101_P01_onload,this);this.addEventHandler("oninit",this.BDG030101_P01_oninit,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.grd_ExpndtrUnitPopup.addEventHandler("oncelldblclick",this.grd_ExpndtrUnitPopup_oncelldblclick,this);};this.loadIncludeScript("BDG030101_P01.xfdl");};})();