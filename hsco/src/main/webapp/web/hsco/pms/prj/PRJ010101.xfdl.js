﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ010101");this.set_classname("PRJ010101");this.set_titletext("표준문서분류");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DOC_CS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sdDocCsCd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DOC_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"UPP_DOC_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"UPP_DOC_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CS_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CS_NM_CAT\" type=\"STRING\" size=\"256\"/><Column id=\"PRR_RNK\" type=\"STRING\" size=\"256\"/><Column id=\"US_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CTGRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"FST_INP_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"FST_INP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LST_CHG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"LST_CHG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_sdDocCsCd</Col><Col id=\"colId\">DOC_CS_NM</Col><Col id=\"msgId\">문서분류 명</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_sdDocCsCd</Col><Col id=\"colId\">DOC_CS_LVL</Col><Col id=\"msgId\">문서레벨</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_sdDocCsCd</Col><Col id=\"colId\">PRR_RNK</Col><Col id=\"msgId\">우선순위</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this.div_search);_a.set_taborder("29");_a.set_text("5");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","488",null,"38","5",null,"0",this.div_search);_a.set_taborder("30");_a.set_text("5");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ACNT_CODE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("문서명");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_docCsNm","absolute","79","5","279","21",null,null,this.div_search);_a.set_taborder("32");_a.set_lengthunit("utf8");_a.set_maxlength("150");this.div_search.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","0","43",null,"19","940",null,this);_a.set_taborder("3");_a.set_text("표준문서분류");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"93","563","27","28",null,this);_a.set_taborder("27");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"119","563","27","28",null,this);_a.set_taborder("28");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static37","absolute",null,"67","563","27","28",null,this);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute",null,"67","97","27","494",null,this);_a.set_taborder("7");_a.set_text("문서분류코드");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_UPPER_ACNT_CODE","absolute",null,"93","97","27","494",null,this);_a.set_taborder("13");_a.set_text("상위문서코드");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL","absolute",null,"119","97","27","494",null,this);_a.set_taborder("21");_a.set_text("레벨");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_BUDGET_ACNT_NM","absolute",null,"70","279","21","31",null,this);_a.set_taborder("20");_a.set_lengthunit("utf8");_a.set_maxlength("300");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","458","33","10",null,null,"0",this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0","15","735",null,null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("25");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Edit("edt_YEAR","absolute",null,"70","94","21","398",null,this);_a.set_taborder("8");_a.getSetter("type").set("string");_a.getSetter("limitbymask").set("both");_a.style.set_align("center middle");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_UPPER_ACNT_CODE","absolute",null,"96","94","21","398",null,this);_a.set_taborder("14");_a.getSetter("type").set("string");_a.getSetter("limitbymask").set("both");_a.style.set_padding("1 21 0 6");_a.style.set_align("center middle");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Static("sta_UPPER_ACNT_NM","absolute",null,"93","84","27","312",null,this);_a.set_taborder("15");_a.set_text("상위문서명");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Button("btn_pop","absolute",null,"96","14","21","398",null,this);_a.set_taborder("31");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","468","198",null,"10","28",null,this);_a.set_taborder("34");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"145","563","27","28",null,this);_a.set_taborder("35");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL00","absolute",null,"145","97","27","494",null,this);_a.set_taborder("36");_a.set_text("사용여부");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE00","absolute",null,"67","84","27","312",null,this);_a.set_taborder("37");_a.set_text("문서분류 명");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static09","absolute",null,"171","563","27","28",null,this);_a.set_taborder("39");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL01","absolute",null,"171","97","27","494",null,this);_a.set_taborder("38");_a.set_text("우선순위");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute",null,"148","17","21","475",null,this);_a.set_taborder("40");_a.set_falsevalue("N");_a.set_truevalue("Y");this.addChild(_a.name,_a);_a=new Spin("Spin00","absolute",null,"174","94","21","398",null,this);_a.set_taborder("41");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");_a.set_max("99");this.addChild(_a.name,_a);_a=new Spin("Spin01","absolute",null,"122","94","21","398",null,this);_a.set_taborder("42");_a.set_cssclass("spn_WF_Readonly");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute",null,"175","208","19","186",null,this);_a.set_taborder("43");_a.set_text("※ 같은 레벨의 우선순위 입니다.");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"43","64","19","735",null,this);_a.set_taborder("44");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("true");_a.set_enable("true");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"43","64","19","668",null,this);_a.set_taborder("45");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_enable("true");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"43","64","19","601",null,this);_a.set_taborder("46");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Edit("edt_BUDGET_ACNT_NM00","absolute",null,"96","279","21","31",null,this);_a.set_taborder("47");_a.set_lengthunit("utf8");_a.set_maxlength("300");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Grid("grd_sdDocCsCd","absolute","0","67",null,null,"601","0",this);_a.set_taborder("48");_a.set_binddataset("ds_sdDocCsCd");_a.set_autoenter("select");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"표준문서분류\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"align:left middle;background: ;\" text=\"bind:DOC_CS_NM_CAT\" expandshow=\"hide\" treelevel=\"bind:DOC_CS_LVL\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ010101");_b.set_titletext("표준문서분류");});this.addLayout(_a.name,_a);_a=new BindItem("item3","edt_BUDGET_ACNT_NM","value","ds_sdDocCsCd","DOC_CS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","edt_YEAR","value","ds_sdDocCsCd","DOC_CS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","edt_UPPER_ACNT_CODE","value","ds_sdDocCsCd","UPP_DOC_CS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_docCsNm","value","ds_cond","DOC_CS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Spin00","value","ds_sdDocCsCd","PRR_RNK");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","CheckBox00","value","ds_sdDocCsCd","US_YN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Spin01","value","ds_sdDocCsCd","DOC_CS_LVL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_BUDGET_ACNT_NM00","value","ds_sdDocCsCd","UPP_DOC_CS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ010101.xfdl","lib::comInclude.xjs");this.addIncludeScript("PRJ010101.xfdl","mis_lib::misUtil.xjs");this.registerScript("PRJ010101.xfdl",function(){var _a= -1;this.PRJ010101_oninit=function(_b,_c){};this.PRJ010101_onload=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_sdDocCsCd.clearData();this.fn_transaction("selectDsMain");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_sdDocCsCd,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_sdDocCsCd.rowposition;this.fn_transaction("saveDsMain");}};this.fn_transaction=function(_b){switch(_b){case "selectDsMain":var _c="hsco/pms/prj/PRJ010101/selectDsMain.do";var _d="input1=ds_cond";var _e="ds_sdDocCsCd=output1";break;case "saveDsMain":var _c="hsco/pms/prj/PRJ010101/saveDsMain.do";var _d="input1=ds_sdDocCsCd:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "selectDsMain":if(_a> -1){this.ds_sdDocCsCd.set_rowposition(_a);_a= -1;}break;case "saveDsMain":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.btn_Add_onclick=function(_b,_c){var _d=this.ds_sdDocCsCd.rowposition;var _e=this.ds_sdDocCsCd.insertRow(nexacro.toNumber(_d)+1);this.ds_sdDocCsCd.setColumn(_e,"UPP_DOC_CS_SN",this.ds_sdDocCsCd.getColumn(_d,"DOC_CS_SN"));this.ds_sdDocCsCd.setColumn(_e,"UPP_DOC_CS_NM",this.ds_sdDocCsCd.getColumn(_d,"DOC_CS_NM"));this.ds_sdDocCsCd.setColumn(_e,"US_YN","N");this.ds_sdDocCsCd.setColumn(_e,"DOC_CS_LVL",nexacro.toNumber(this.ds_sdDocCsCd.getColumn(_d,"DOC_CS_LVL"),0,0,0)+1);};this.btn_Delete_onclick=function(_b,_c){if(!this.gfn_message("confirm.삭제여부")){return false;}var _d=this.ds_sdDocCsCd.rowposition;var _e=this.ds_sdDocCsCd.getColumn(_d,"DOC_CS_SN");var _f=this.ds_sdDocCsCd.getColumn(_d+1,"UPP_DOC_CS_SN");if(_e==_f){this.gfn_message("fail.삭제.불가","하위문서가 존재하는 문서는");return false;}this.ds_sdDocCsCd.deleteRow(this.ds_sdDocCsCd.rowposition);};this.btn_Cancel_onclick=function(_b,_c){if(Ex.util.isUpdated(this.ds_sdDocCsCd)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_sdDocCsCd.reset();this.ds_sdDocCsCd.applyChange();};this.fn_popup_onclick=function(_b,_c){var _d={arg_0:this};this.gfn_popup(_b.name,600,500,"표준문서분류",_d,"pms_prj::PRJ010101_P01.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_b,_c){var _d=new Dataset();_d.loadXML(_c);if(_d.rowcount==0){return;}switch(_b){case "btn_pop":var _e=this.ds_sdDocCsCd.rowposition;if(this.ds_sdDocCsCd.getColumn(_e,"DOC_CS_SN")==_d.getColumn(0,"DOC_CS_LVL")){alert("현재 문서분류와 상위 분서문류가 같습니다");return false;}else{this.ds_sdDocCsCd.setColumn(_e,"UPP_DOC_CS_SN",_d.getColumn(0,"DOC_CS_SN"));this.ds_sdDocCsCd.setColumn(_e,"UPP_DOC_CS_NM",_d.getColumn(0,"DOC_CS_NM"));this.ds_sdDocCsCd.setColumn(_e,"DOC_CS_LVL",nexacro.toNumber(this.ds_sdDocCsCd.getColumn(0,"DOC_CS_LVL"))+1);}break;}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.PRJ010101_onload,this);this.addEventHandler("oninit",this.PRJ010101_oninit,this);this.btn_pop.addEventHandler("onclick",this.fn_popup_onclick,this);this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.edt_BUDGET_ACNT_NM00.addEventHandler("oneditclick",this.edt_BUDGET_ACNT_NM00_oneditclick,this);};this.loadIncludeScript("PRJ010101.xfdl");};})();