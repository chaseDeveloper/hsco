﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01010100");this.set_classname("RNT01010100");this.set_titletext("임대주택정보관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_useAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE_NM\">미사용</Col><Col id=\"CODE\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLN_CT_LEVY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BILDNG_STRCT\" type=\"STRING\" size=\"256\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CN_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"HMPG_USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BILDNG_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PLOT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_CHARGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_CHARGER_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGARD_RNTCHRG_QU_1\" type=\"STRING\" size=\"256\"/><Column id=\"REGARD_RNTCHRG_QU_2\" type=\"STRING\" size=\"256\"/><Column id=\"REGARD_RNTCHRG_QU_3\" type=\"STRING\" size=\"256\"/><Column id=\"REGARD_RNTCHRG_QU_4\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_PLOT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_PRMPC\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"HSHLD_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"PORTAL_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"rentHouseNm\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_areaSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hmptUseAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE_NM\">미사용</Col><Col id=\"CODE\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseDongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"200\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"25\"/><Column id=\"HSMP_IDNTFR\" type=\"STRING\" size=\"15\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentHouseList</Col><Col id=\"colId\">RENT_HOUSE_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택코드</Col></Row><Row><Col id=\"compId\">ds_rentHouseList</Col><Col id=\"colId\">RENT_HOUSE_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">임대주택명</Col></Row><Row><Col id=\"compId\">ds_rentHouseList</Col><Col id=\"colId\">HOUSE_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택구분</Col></Row><Row><Col id=\"compId\">ds_rentHouseDongList</Col><Col id=\"colId\">RENT_HOUSE_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택코드</Col></Row><Row><Col id=\"compId\">ds_rentHouseDongList</Col><Col id=\"colId\">DONG</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">동</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bsnsCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Radio("rdo_useAt","absolute","79","5","177","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_useAt");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_rowcount("1");_a.set_index("-1");_a=new Static("Static08","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("사용유무");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","463","5","51","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("주택명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","271","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("주택구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","335","5","113","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_houseSeList00");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Combo("cmb_rentHouseCode","absolute","514","5","244","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("25");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("26");_a.set_text("임대주택목록");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("27");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static42","absolute","359","34","10",null,null,"0",this.div_WORK);_a.set_taborder("28");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","369","36",null,"27","0",null,this.div_WORK);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","369","36","93","27",null,null,this.div_WORK);_a.set_taborder("30");_a.set_text("주택구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","369","62",null,"27","0",null,this.div_WORK);_a.set_taborder("31");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","369","62","93","27",null,null,this.div_WORK);_a.set_taborder("32");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","700","62","93","27",null,null,this.div_WORK);_a.set_taborder("33");_a.set_text("주택명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","464","65","234","21",null,null,this.div_WORK);_a.set_taborder("2");_a.set_cssclass("edt_WF_Essential");_a.set_maxlength("4");_a.set_enable("true");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","795","65","233","21",null,null,this.div_WORK);_a.set_taborder("3");_a.set_cssclass("edt_WF_Essential");_a.set_maxlength("50");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","369","88",null,"54","0",null,this.div_WORK);_a.set_taborder("34");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","369","88","93","54",null,null,this.div_WORK);_a.set_taborder("35");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","464","91","78","21",null,null,this.div_WORK);_a.set_taborder("4");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","544","91","484","21",null,null,this.div_WORK);_a.set_taborder("5");_a.set_maxlength("200");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","544","118","484","21",null,null,this.div_WORK);_a.set_taborder("6");_a.set_maxlength("200");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","369","141",null,"27","0",null,this.div_WORK);_a.set_taborder("39");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","369","167",null,"27","0",null,this.div_WORK);_a.set_taborder("40");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","369","219",null,"27","0",null,this.div_WORK);_a.set_taborder("41");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static09","absolute","369","245",null,"27","0",null,this.div_WORK);_a.set_taborder("42");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static10","absolute","369","271",null,"27","0",null,this.div_WORK);_a.set_taborder("43");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static11","absolute","369","297",null,"27","0",null,this.div_WORK);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM03","absolute","369","141","93","27",null,null,this.div_WORK);_a.set_taborder("46");_a.set_text("건축구조");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM04","absolute","369","167","93","27",null,null,this.div_WORK);_a.set_taborder("47");_a.set_text("착공일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","369","193","93","27",null,null,this.div_WORK);_a.set_taborder("48");_a.set_text("준공일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM06","absolute","369","219","93","27",null,null,this.div_WORK);_a.set_taborder("49");_a.set_text("건축연도");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","369","245","93","27",null,null,this.div_WORK);_a.set_taborder("51");_a.set_text("사업코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM09","absolute","369","271","93","27",null,null,this.div_WORK);_a.set_taborder("52");_a.set_text("담당자명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM10","absolute","369","297","93","27",null,null,this.div_WORK);_a.set_taborder("53");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","464","170","100","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Edit("Edit05","absolute","464","144","564","21",null,null,this.div_WORK);_a.set_taborder("7");_a.set_maxlength("100");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar02","absolute","464","196","123","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("54");_a=new Static("sta_NM13","absolute","700","193","93","27",null,null,this.div_WORK);_a.set_taborder("55");_a.set_text("주택명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM15","absolute","700","219","93","27",null,null,this.div_WORK);_a.set_taborder("57");_a.set_text("대지비");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","369","193",null,"27","0",null,this.div_WORK);_a.set_taborder("59");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM11","absolute","369","193","93","27",null,null,this.div_WORK);_a.set_taborder("60");_a.set_text("준공일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM17","absolute","700","167","93","27",null,null,this.div_WORK);_a.set_taborder("63");_a.set_text("내용년수");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM18","absolute","700","193","93","27",null,null,this.div_WORK);_a.set_taborder("64");_a.set_text("홈페이지");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM19","absolute","700","245","93","27",null,null,this.div_WORK);_a.set_taborder("65");_a.set_text("전화번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","464","196","100","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("10");_a.set_dateformat("yyyy-MM-dd");_a=new Combo("Combo00","absolute","795","196","233","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("11");_a.set_innerdataset("@ds_hmptUseAt");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Combo("Combo03","absolute","464","248","234","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("14");_a.set_innerdataset("@ds_bsnsCodeList");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Edit("Edit06","absolute","464","274","234","21",null,null,this.div_WORK);_a.set_taborder("16");_a.set_maxlength("30");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit10","absolute","795","248","234","21",null,null,this.div_WORK);_a.set_taborder("15");_a.set_maxlength("15");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit11","absolute","464","300","565","21",null,null,this.div_WORK);_a.set_taborder("17");_a.set_maxlength("200");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","464","39","124","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_houseSeList");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static16","absolute","359","323","1031","10",null,null,this.div_WORK);_a.set_taborder("77");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_rentHouseList","absolute","0","36","359",null,null,"0",this.div_WORK);_a.set_taborder("80");_a.set_binddataset("ds_rentHouseList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"주택코드\"/><Cell col=\"2\" text=\"주택명\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: ;\" text=\"bind:HOUSE_SE\" combodataset=\"ds_houseSeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" style=\"align: ;padding:0 10 0 0;\" text=\"bind:RENT_HOUSE_CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","795","170","67","21",null,null,this.div_WORK);_a.set_taborder("9");_a.set_value("0");_a.set_max("100");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static17","absolute","862","170","22","21",null,null,this.div_WORK);_a.set_taborder("82");_a.set_text("년");this.div_WORK.addChild(_a.name,_a);_a=new Spin("Spin01","absolute","464","222","96","21",null,null,this.div_WORK);_a.set_taborder("12");_a.set_value("0");_a.set_max("2015");_a.set_min("1900");this.div_WORK.addChild(_a.name,_a);_a=new Radio("rdo_useAt","absolute","663","39","117","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("1");_a.set_rowcount("1");_a.set_innerdataset("@ds_useAt00");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("1");_a.set_index("0");_a=new Static("Static18","absolute","591","39","64","21",null,null,this.div_WORK);_a.set_taborder("87");_a.set_text("사용유무");_a.style.set_align("right middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_ZIP","absolute","523","91","21","21",null,null,this.div_WORK);_a.set_taborder("18");_a.set_cssclass("btn_WF_Search");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","795","222","233","21",null,null,this.div_WORK);_a.set_taborder("13");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_relation01","absolute","369","333","150","19",null,null,this.div_WORK);_a.set_taborder("101");_a.set_text("건축물(동) 정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static20","absolute","368","352",null,"5","0",null,this.div_WORK);_a.set_taborder("102");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_saveDong","absolute",null,"333","79","19","0",null,this.div_WORK);_a.set_taborder("103");_a.set_text("건축물저장");_a.set_cssclass("btn_WF_Process");_a.set_visible("true");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_insertDong","absolute",null,"333","63","19","146",null,this.div_WORK);_a.set_taborder("104");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_deleteDong","absolute",null,"333","63","19","81",null,this.div_WORK);_a.set_taborder("105");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.style.set_font("-11 Dotum");this.div_WORK.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","368","357",null,null,"0","0",this.div_WORK);_a.set_taborder("107");_a.set_binddataset("ds_rentHouseDongList");_a.set_readonly("false");_a.set_autosizingtype("none");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"동\"/><Cell col=\"1\" text=\"우편번호\"/><Cell col=\"2\" text=\"주소\"/><Cell col=\"3\" text=\"주소상세\"/><Cell col=\"4\" text=\"임대포털\"/></Band><Band id=\"body\"><Cell edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'text' : 'none'\" style=\"align: ;\" text=\"bind:DONG\" editlimit=\"0\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:ZIP\" editlimit=\"0\" editdisplay=\"display\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left;\" text=\"bind:ADRES\" editlimit=\"0\" editdisplay=\"display\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:ADRES_DETAIL\" editlimit=\"0\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:HSMP_IDNTFR\" editlimit=\"0\" editdisplay=\"display\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static12","absolute","368","10","119","21",null,null,this.div_WORK);_a.set_taborder("108");_a.set_text("임대주택정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01010100");_b.set_titletext("임대주택정보관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.cmb_houseSe","value","ds_rentHouseList","HOUSE_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.Edit00","value","ds_rentHouseList","RENT_HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.Edit01","value","ds_rentHouseList","RENT_HOUSE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.Edit02","value","ds_rentHouseList","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.Edit03","value","ds_rentHouseList","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.Edit04","value","ds_rentHouseList","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.Edit05","value","ds_rentHouseList","BILDNG_STRCT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_WORK.Calendar00","value","ds_rentHouseList","STRWRK_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_WORK.Calendar01","value","ds_rentHouseList","COMPET_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_WORK.Combo00","value","ds_rentHouseList","HMPG_USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_WORK.Combo03","value","ds_rentHouseList","BSNS_AREA_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_WORK.Edit06","value","ds_rentHouseList","MANAGE_CHARGER_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_WORK.Edit10","value","ds_rentHouseList","MANAGE_CHARGER_TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_WORK.Edit11","value","ds_rentHouseList","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_WORK.Spin00","value","ds_rentHouseList","CN_YYCNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_WORK.Spin01","value","ds_rentHouseList","BILDNG_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item26","div_WORK.rdo_useAt","value","ds_rentHouseList","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_WORK.MaskEdit01","value","ds_rentHouseList","LAD_PRMPC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT01010100.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01010100.xfdl",function(){this.RNT01010100_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01010100_onload=function(_a,_b){this.fn_load_combo();this.fn_search();};this.fn_init_dataset=function(){this.checkDs.push(this.ds_rentHouseList);this.checkDs.push(this.ds_rentHouseDongList);this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_houseSe(this.ds_houseSeList);this.fn_get_houseSe(this.ds_houseSeList00,"전체");this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체");this.fn_get_cmmCode(this.ds_areaSeList,"",{grpCode:"RNT004"});this.fn_fill_code(this.ds_bsnsCodeList,"/hsco/pms/rnt/pra/RNT00000000/bsnsCodeList.do","선택");this.div_search.rdo_useAt.set_value("1");};this.div_search_cmb_houseSe_onitemchanged=function(_a,_b){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체",{HOUSE_SE:_b.postvalue});};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("rentHouseList");};this.fn_save=function(){if(this.fn_checkUpdate(this.ds_rentHouseList)==false&&this.fn_checkUpdate(this.ds_rentHouseDongList)==false){this.alert("comm.데이터.변경.없음");return false;}if(this.gfn_checkValidation_NoUpdChk(this.ds_rentHouseList,this.ds_validation)==false){return;}if(this.gfn_checkValidation_NoUpdChk(this.ds_rentHouseDongList,this.ds_validation)==false){return;}if(this.confirm("저장 하시겠습니까?")){this.fn_transaction("rentHouseAllCUD");}};this.fn_insert=function(){this.ds_rentHouseList.addRow();this.div_WORK.rdo_useAt.set_value(1);};this.fn_delete=function(){var _a=this.ds_rentHouseList.getSelectColumn("CNT");if(_a>0){this.alert("선택한 주택(상가)는 계약정보가 존재하므로 삭제할 수 없습니다.");return false;}if(this.confirm("선택한 주택(상가)를 삭제하시겠습니까?")){this.ds_rentHouseList.deleteRow(this.ds_rentHouseList.rowposition);this.ds_cond01.setColumn(0,"RENT_HOUSE_CODE",this.ds_rentHouseList.getColumn(this.ds_rentHouseList.rowposition,"RENT_HOUSE_CODE"));this.fn_transaction("rentHouseDongList");}};this.fn_cancel=function(){if(this.confirm("변경하신 모든 사항이 취소됩니다")){var _a=this.ds_rentHouseList;_a.reset();_a.applyChange();}};this.div_WORK_grd_rentHouseList_onselectchanged=function(_a,_b){this.ds_cond01.setColumn(0,"RENT_HOUSE_CODE",this.ds_rentHouseList.getColumn(this.ds_rentHouseList.rowposition,"RENT_HOUSE_CODE"));this.debug(this.ds_cond01,true);this.fn_transaction("rentHouseDongList");};this.ds_rentHouseList_canrowposchange=function(_a,_b){if(this.fn_checkUpdate(this.ds_rentHouseList,_b.newrow,false)||this.fn_checkUpdate(this.ds_rentHouseDongList)){if(this.confirm("confirm.변경.취소.여부")==true){var _c=this.ds_rentHouseList;_c.reset();_c.applyChange();return true;}else{return false;}}return true;};this.div_WORK_Tab00_tabpage2_btn_saveDong_onclick=function(_a,_b){if(this.gfn_checkValidation(this.ds_rentHouseDongList,this.ds_validation)==false){return;}if(Ex.util.isUpdated(this.ds_rentHouseDongList)==true){if(this.confirm("저장 하시겠습니까?")){this.fn_transaction("rentHouseDongCUD");}}};this.div_WORK_Tab00_tabpage2_btn_insertDong_onclick=function(_a,_b){if(this.ds_rentHouseList.rowposition> -1){if(this.ds_rentHouseList.getRowType(this.ds_rentHouseList.rowposition)!=2){var _c=this.ds_rentHouseList.rowposition;var _d=this.ds_rentHouseDongList.addRow();this.ds_rentHouseDongList.setColumn(_d,"RENT_HOUSE_CODE",this.ds_rentHouseList.getColumn(_c,"RENT_HOUSE_CODE"));this.ds_rentHouseDongList.setColumn(_d,"ZIP",this.ds_rentHouseList.getColumn(_c,"ZIP"));this.ds_rentHouseDongList.setColumn(_d,"ADRES",this.ds_rentHouseList.getColumn(_c,"ADRES"));this.ds_rentHouseDongList.setColumn(_d,"ADRES_DETAIL",this.ds_rentHouseList.getColumn(_c,"ADRES_DETAIL"));this.pmsUtil.setFocusGridBindComp(this.div_WORK.Grid00,_d,"DONG");}else{this.alert("임대주택정보 등록중입니다.");}}else{this.alert("선택된 임대주택정보가 없습니다.");}};this.div_WORK_Tab00_tabpage2_btn_deleteDong_onclick=function(_a,_b){this.ds_rentHouseDongList.deleteRow(this.ds_rentHouseDongList.rowposition);};this.div_WORK_btn_ZIP_onclick=function(_a,_b){var _c={};_c.zipField="ZIP";_c.jibunField="ADRES";this.pmsUtil.popupZipCode(this.ds_rentHouseList,_c);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "rentHouseList":var _c="/hsco/pms/rnt/pra/RNT01010100/rentHouseList.do";var _d="input1=ds_cond00";var _e="ds_rentHouseList=output1";break;case "rentHouseCUD":var _c="/hsco/pms/rnt/pra/RNT01010100/rentHouseCUD.do";var _d="input1=ds_rentHouseList:U";var _e="";break;case "rentHouseDongList":var _c="/hsco/pms/rnt/pra/RNT01010100/rentHouseDongList.do";var _d="input1=ds_cond01";var _e="ds_rentHouseDongList=output1";break;case "rentHouseDongCUD":var _c="/hsco/pms/rnt/pra/RNT01010100/rentHouseDongCUD.do";var _d="input1=ds_rentHouseDongList:U";var _e="";break;case "rentHouseAllCUD":var _c="/hsco/pms/rnt/pra/RNT01010100/rentHouseAllCUD.do";var _d="input1=ds_rentHouseList:U"+" input2=ds_rentHouseDongList:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){case "rentHouseDongCUD":this.ds_cond01.setColumn(0,"RENT_HOUSE_CODE",this.ds_rentHouseList.getColumn(this.ds_rentHouseList.rowposition,"RENT_HOUSE_CODE"));this.fn_transaction("rentHouseDongList");break;case "rentHouseAllCUD":this.fn_transaction("rentHouseList");break;}}else{this.fn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.ds_rentHouseList.addEventHandler("canrowposchange",this.ds_rentHouseList_canrowposchange,this);this.addEventHandler("oninit",this.RNT01010100_oninit,this);this.addEventHandler("onload",this.RNT01010100_onload,this);this.div_search.cmb_houseSe.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.grd_rentHouseList.addEventHandler("onselectchanged",this.div_WORK_grd_rentHouseList_onselectchanged,this);this.div_WORK.btn_ZIP.addEventHandler("onclick",this.div_WORK_btn_ZIP_onclick,this);this.div_WORK.Static20.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_saveDong.addEventHandler("onclick",this.div_WORK_Tab00_tabpage2_btn_saveDong_onclick,this);this.div_WORK.btn_insertDong.addEventHandler("onclick",this.div_WORK_Tab00_tabpage2_btn_insertDong_onclick,this);this.div_WORK.btn_deleteDong.addEventHandler("onclick",this.div_WORK_Tab00_tabpage2_btn_deleteDong_onclick,this);};this.loadIncludeScript("RNT01010100.xfdl");};})();