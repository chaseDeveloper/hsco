﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020206");this.set_classname("SLS020206");this.set_titletext("상호전환");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseDongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseHoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCode</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_intrt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INTRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rntchrgChangeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_YM\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"AFTCH_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"GTN_MARGIN\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"AFTCH_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_MARGIN\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_RENT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"INDVDL_ADIT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_RNTCHRG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"58","28",null,this);_a.set_taborder("4");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","311","31","64","21",null,null,this.div_search);_a.set_taborder("71");_a.set_text("적용년월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");_a.style.set_font("Verdana,9,bold");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("75");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_color("#3f3f3fb3");_a.style.set_align("right");_a.style.set_font("Verdana,9,bold");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","92","5","204","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("76");_a.set_innerdataset("ds_houseCodeList");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.style.set_font("Verdana,9,bold");_a=new Static("Static02","absolute","311","5","51","21",null,null,this.div_search);_a.set_taborder("79");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");_a.style.set_font("Verdana,9,bold");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("84");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("85");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","52",null,"5","0",null,this.div_search);_a.set_taborder("86");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","375","5","69","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("87");_a.set_innerdataset("ds_houseDongList");_a.set_codecolumn("DONG");_a.set_datacolumn("DONG_NM");_a.style.set_font("Verdana,9,bold");_a=new Combo("cmb_ho","absolute","446","5","67","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("88");_a.set_innerdataset("ds_houseHoList");_a.set_codecolumn("HO");_a.set_datacolumn("HO_NM");_a.style.set_font("Verdana,9,bold");_a=new Static("Static08","absolute","15","31","77","21",null,null,this.div_search);_a.set_taborder("89");_a.set_text("재계약회차");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");_a.style.set_font("Verdana,9,bold");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dataGubun","absolute","92","31","94","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("90");_a.set_value("0");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("Verdana,9,bold");_a.set_index("0");_a=new Static("Static05","absolute","528","31","64","21",null,null,this.div_search);_a.set_taborder("91");_a.set_text("적용일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");_a.style.set_font("Verdana,9,bold");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_applcDe","absolute","618","31","94","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("92");_a=new Edit("edt_ratio","absolute","618","5","70","21",null,null,this.div_search);_a.set_taborder("93");_a.style.set_font("Verdana,9,bold");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","528","5","90","21",null,null,this.div_search);_a.set_taborder("94");_a.set_text("상호전환이율");_a.set_cssclass("sta_WFSA_Label");_a.style.set_color("#3f3f3fb3");_a.style.set_align("right");_a.style.set_font("Verdana,9,bold");this.div_search.addChild(_a.name,_a);_a=new Div("div_applcYm","absolute","375","31","94","21",null,null,this.div_search);_a.set_taborder("95");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","58",null,null,"28","13",this);_a.set_taborder("5");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","0","10",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_tabindex("0");_a.set_scrollbars("autoboth");this.div_work.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.div_work.Tab00);_a.set_text("상호전환");this.div_work.Tab00.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","34",null,null,"0","0",this.div_work.Tab00.tabpage1);_a.set_taborder("6");_a.set_autofittype("col");_a.set_binddataset("ds_rntchrgChangeList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"34\"/><Column size=\"34\"/><Column size=\"56\"/><Column size=\"56\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"56\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" rowspan=\"2\" text=\"자료구분\" wordwrap=\"both\"/><Cell col=\"2\" rowspan=\"2\" text=\"적용년월\" wordwrap=\"both\"/><Cell col=\"3\" colspan=\"4\" text=\"기준\"/><Cell col=\"7\" colspan=\"4\" text=\"보증금\"/><Cell col=\"11\" colspan=\"4\" text=\"임대료\"/><Cell row=\"1\" col=\"3\" text=\"주택코드\" wordwrap=\"both\"/><Cell row=\"1\" col=\"4\" text=\"동\"/><Cell row=\"1\" col=\"5\" text=\"호\"/><Cell row=\"1\" col=\"6\" text=\"계약자\"/><Cell row=\"1\" col=\"7\" text=\"기준\"/><Cell row=\"1\" col=\"8\" text=\"변경전\"/><Cell row=\"1\" col=\"9\" text=\"변경후\"/><Cell row=\"1\" col=\"10\" text=\"차액\"/><Cell row=\"1\" col=\"11\" text=\"기준\"/><Cell row=\"1\" col=\"12\" text=\"변경전\"/><Cell row=\"1\" col=\"13\" text=\"변경후\"/><Cell row=\"1\" col=\"14\" text=\"차액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:APPLC_YM\"/><Cell col=\"3\" text=\"bind:HOUSE_CODE_NAME\"/><Cell col=\"4\" text=\"bind:DONG\"/><Cell col=\"5\" text=\"bind:HO\"/><Cell col=\"6\" text=\"bind:CSTMR_NM\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"bind:BFCHG_GTN\"/><Cell col=\"9\" text=\"bind:AFTCH_GTN\"/><Cell col=\"10\" text=\"bind:GTN_MARGIN\"/><Cell col=\"11\" text=\"bind:BASS_RNTCHRG\"/><Cell col=\"12\" text=\"bind:BFCHG_RNTCHRG\"/><Cell col=\"13\" text=\"bind:APPLC_RENT_AMT\"/><Cell col=\"14\" text=\"bind:RNTCHRG_MARGIN\"/></Band></Format></Formats>");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_work.Tab00.tabpage1);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","29",null,"5","0",null,this.div_work.Tab00.tabpage1);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Button("btn_AddRow","absolute","939","10","38","19",null,null,this.div_work.Tab00.tabpage1);_a.set_taborder("9");_a.set_text("전환");_a.set_cssclass("btn_WF_Grid");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Button("btn_DelRow","absolute","979","10","38","19",null,null,this.div_work.Tab00.tabpage1);_a.set_taborder("10");_a.set_text("취소");_a.set_cssclass("btn_WF_Grid");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.div_work.Tab00);_a.set_text("보증금환불");this.div_work.Tab00.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","151",null,null,"0","0",this.div_work.Tab00.tabpage2);_a.set_taborder("6");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"79\"/><Column size=\"50\"/><Column size=\"32\"/><Column size=\"32\"/><Column size=\"56\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"40\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" rowspan=\"2\" text=\"적용년월\" taborder=\"undefined\"/><Cell col=\"2\" colspan=\"4\" text=\"기준\" taborder=\"undefined\"/><Cell col=\"6\" colspan=\"4\" text=\"보증금\" taborder=\"undefined\"/><Cell col=\"10\" colspan=\"3\" text=\"임대료\" taborder=\"undefined\"/><Cell row=\"1\" displaytype=\"checkbox\"/><Cell row=\"1\" col=\"2\" text=\"주택코드\"/><Cell row=\"1\" col=\"3\" text=\"동\" taborder=\"undefined\"/><Cell row=\"1\" col=\"4\" text=\"호\" taborder=\"undefined\"/><Cell row=\"1\" col=\"5\" text=\"계약자\"/><Cell row=\"1\" col=\"6\" text=\"기본\"/><Cell row=\"1\" col=\"7\" text=\"증액\"/><Cell row=\"1\" col=\"8\" text=\"환불\"/><Cell row=\"1\" col=\"9\" text=\"환불후\"/><Cell row=\"1\" col=\"10\" text=\"기본\"/><Cell row=\"1\" col=\"11\" text=\"감액\"/><Cell row=\"1\" col=\"12\" text=\"환불후\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_work.Tab00.tabpage2);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","10",null,"107","0",null,this.div_work.Tab00.tabpage2);_a.set_taborder("12");_a.set_text("Div00");_a.style.set_border("0 none #808080ff");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static37","absolute","99","0","930","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("0");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","0","100","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("1");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static05","absolute","99","26","930","53",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("2");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static25","absolute","0","26","100","53",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("3");_a.set_text("보증금");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","0","78","100","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("4");_a.set_text("환불금액");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","99","78","930","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("5");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static28","absolute","50","26","50","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("6");_a.set_text("기본");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static53","absolute","50","52","50","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("7");_a.set_text("증액");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","345","0","100","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("8");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","691","0","100","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("9");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","345","26","100","53",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("10");_a.set_text("임대료");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static02","absolute","395","26","50","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("11");_a.set_text("기본");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static03","absolute","395","52","50","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("12");_a.set_text("증액");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","691","26","100","53",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("13");_a.set_text("환불후");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static06","absolute","741","26","50","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("14");_a.set_text("보증금");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static07","absolute","741","52","50","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("15");_a.set_text("임대료");_a.set_cssclass("sta_WF_Label");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","99","52","247","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("16");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static15","absolute","99","26","247","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("17");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static09","absolute","444","52","248","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static10","absolute","444","26","248","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static11","absolute","790","52","239","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("20");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static12","absolute","790","26","239","27",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit14","absolute","102","3","241","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("22");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","102","29","241","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("23");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","102","55","241","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("24");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","447","55","242","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("25");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","447","29","242","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("26");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","447","3","242","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("27");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","793","55","233","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("28");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit06","absolute","793","29","233","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("29");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit07","absolute","793","3","233","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("30");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Edit("Edit08","absolute","102","81","241","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("31");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Button("Button13","absolute","345","81","40","21",null,null,this.div_work.Tab00.tabpage2.Div00);_a.set_taborder("32");_a.set_text("환불");this.div_work.Tab00.tabpage2.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","117","1031","10",null,null,this.div_work.Tab00.tabpage2);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_AddRow","absolute","987","127","38","19",null,null,this.div_work.Tab00.tabpage2);_a.set_taborder("14");_a.set_text("전환");_a.set_cssclass("btn_WF_Grid");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","146",null,"5","0",null,this.div_work.Tab00.tabpage2);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,58,this.div_search,function(_b){_b.set_taborder("4");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.Tab00.tabpage1,function(_b){_b.set_text("상호전환");});this.div_work.Tab00.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,107,this.div_work.Tab00.tabpage2.Div00,function(_b){_b.set_taborder("12");_b.set_text("Div00");_b.style.set_border("0 none #808080ff");});this.div_work.Tab00.tabpage2.Div00.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.Tab00.tabpage2,function(_b){_b.set_text("보증금환불");});this.div_work.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("5");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS020206");_b.set_titletext("상호전환");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_ratio","value","ds_intrt","INTRT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("SLS020206_copy.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020206_copy.xfdl",function(){this.SLS020206_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS020206_onload=function(_a,_b){this.fn_get_codeList();};this.fn_init_form=function(){this.div_search.div_applcYm.setValue(null);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_showSvcID=function(){this.fn_add_arrShowMsgId("");};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return;}this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("rntchrgChangeList");};this.fn_comboOnItemChangeHandler=function(_a,_b){var _c=_a.name;var _d=_b?_b.postvalue:_a.value;var _e=_b?_b.postindex:_a.index;var _f={};switch(_c){case "cmb_houseCode":_f["HOUSE_CODE"]=_d;this.pmsUtil.getHouseDong(_f,"ds_houseDongList");this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("intrtR");break;case "cmb_dong":_f["HOUSE_CODE"]=this.ds_houseDongList.getColumn(_e,"HOUSE_CODE");_f["DONG"]=_d;this.pmsUtil.getHouseHo(_f,"ds_houseHoList");break;default:break;}};this.fn_get_codeList=function(){var _a={};_a["USE_AT"]="1";this.pmsUtil.getHouseCode(_a,"ds_houseCodeList");this.fn_loadCombo();};this.fn_loadCombo=function(){};this.fn_transaction=function(_a){var _b=true;switch(_a){case "intrtR":var _c="/hsco/pms/sls/hou/ctr/SLS020206/intrtR.do";var _d="input1=ds_cond00";var _e="ds_intrt=output1";break;case "rntchrgChangeList":var _c="/hsco/pms/sls/hou/ctr/SLS020206/rntchrgChangeList.do";var _d="input1=ds_cond00";var _e="ds_rntchrgChangeList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "houseCodeList":_e={type:this.pmsUtil.PROMPT_SELECT,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseCode,_e,true);break;case "houseDongList":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_dong,_e,true);break;case "houseHoList":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_ho,_e,true);break;case "intrtR":this.debug(this.ds_intrt);break;case "rntchrgChangeList":break;default:break;}}else{this.gfn_callback_message(_a,_b,_c);}};this.div_work_Tab00_tabpage1_Grid00_oncellclick=function(_a,_b){if(_b.cell==0){this.fn_checkHead(_a);}};this.div_work_Tab00_tabpage1_Grid00_onheadclick=function(_a,_b){if(_b.col==0){this.fn_checkAll(_a);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020206_oninit,this);this.addEventHandler("onload",this.SLS020206_onload,this);this.div_search.Static04.addEventHandler("onclick",this.Static04_onclick,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.Static00.addEventHandler("onclick",this.Static04_onclick,this);this.div_work.Tab00.tabpage1.Grid00.addEventHandler("oncellclick",this.div_work_Tab00_tabpage1_Grid00_oncellclick,this);this.div_work.Tab00.tabpage1.Grid00.addEventHandler("onheadclick",this.div_work_Tab00_tabpage1_Grid00_onheadclick,this);this.div_work.Tab00.tabpage1.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_work.Tab00.tabpage1.btn_AddRow.addEventHandler("onclick",this.div_DETAIL00_btn_AddRow_onclick,this);this.div_work.Tab00.tabpage1.btn_DelRow.addEventHandler("onclick",this.div_DETAIL00_btn_DelRow_onclick,this);this.div_work.Tab00.tabpage2.btn_AddRow.addEventHandler("onclick",this.div_DETAIL00_btn_AddRow_onclick,this);this.div_work.Tab00.tabpage2.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("SLS020206_copy.xfdl");this.loadPreloadList();};})();