﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01070100");this.set_classname("RNT01070100");this.set_titletext("보증금 지원관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_canclSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE_NM\">계약자</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">해약자</Col><Col id=\"CODE\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentCntrctList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE_2\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentCntrctDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_POSESN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEATH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RE_CNTRCT_IMPRTY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_PROGRS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"INCOME_EXCESS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE_2\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE_2\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_TRGET_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"SURLUS\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"NPYM_INTR_EXEMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTN_CHRGE_EXEMPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_RDCXPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_PREPAY_RQEST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_PREPAY_RQEST_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"DVR_AR\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRC_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"HSHLD_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_PRECDNT\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RESCI_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_RQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CDIT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gtnSportList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MI_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_TRGET_AT\" type=\"STRING\" size=\"256\"/><Column id=\"TODAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","79","5","190","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("69");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("filter");_a=new Static("Static05","absolute","535","5","64","21",null,null,this.div_search);_a.set_taborder("70");_a.set_text("계약자명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","599","5","85","21",null,null,this.div_search);_a.set_taborder("71");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("73");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","287","5","51","21",null,null,this.div_search);_a.set_taborder("74");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","338","5","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("75");_a.set_innerdataset("ds_dongList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Combo("cmb_ho","absolute","430","5","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("76");_a.set_innerdataset("ds_hoList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Static("Static06","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("81");_a.set_text("계약구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chk_sportTrgetAt","absolute","286","31","95","21",null,null,this.div_search);_a.set_taborder("83");_a.set_text("지원대상자");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","423","5","10","21",null,null,this.div_search);_a.set_taborder("84");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","430","5","85","21",null,null,this.div_search);_a.set_taborder("85");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","338","5","84","21",null,null,this.div_search);_a.set_taborder("86");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_canclSe","absolute","79","31","188","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("87");_a.set_rowcount("1");_a.set_innerdataset("@ds_canclSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("1");_a.set_index("1");_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","59",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("66");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("67");_a.set_text("고객 목록");_a.set_cssclass("sta_WF_Title01");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("68");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_rentCntrctList","absolute","0","36","316",null,null,"0",this.div_WORK);_a.set_taborder("69");_a.set_binddataset("ds_rentCntrctList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"58\"/><Column size=\"50\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(CANCL_DE == null ? 'black' : 'red');color2:EXPR(CANCL_DE == null ? 'black' : 'red' );\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" style=\"color:EXPR(CANCL_DE == null ? 'black' : 'red');color2:EXPR(CANCL_DE == null ? 'black' : 'red');\" text=\"bind:DONG\"/><Cell col=\"2\" style=\"color:EXPR(CANCL_DE == null ? 'black' : 'red');color2:EXPR(CANCL_DE == null ? 'black' : 'red');\" text=\"bind:HO\"/><Cell col=\"3\" style=\"color:EXPR(CANCL_DE == null ? 'black' : 'red');color2:EXPR(CANCL_DE == null ? 'black' : 'red');\" text=\"bind:NM\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static42","absolute","316","34","10",null,null,"0",this.div_WORK);_a.set_taborder("70");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","326","10","119","21",null,null,this.div_WORK);_a.set_taborder("71");_a.set_text("계약정보");_a.set_cssclass("sta_WF_Title01");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","326","36","705","27",null,null,this.div_WORK);_a.set_taborder("72");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","326","36","80","27",null,null,this.div_WORK);_a.set_taborder("73");_a.set_text("주택명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","561","36","80","27",null,null,this.div_WORK);_a.set_taborder("74");_a.set_text("동/호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit09","absolute","408","39","151","21",null,null,this.div_WORK);_a.set_taborder("75");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static13","absolute","326","62","705","27",null,null,this.div_WORK);_a.set_taborder("76");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM09","absolute","326","62","80","27",null,null,this.div_WORK);_a.set_taborder("77");_a.set_text("계약자명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM10","absolute","561","62","80","27",null,null,this.div_WORK);_a.set_taborder("78");_a.set_text("계약일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM11","absolute","796","36","80","27",null,null,this.div_WORK);_a.set_taborder("79");_a.set_text("면적");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit19","absolute","643","39","75","21",null,null,this.div_WORK);_a.set_taborder("80");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit20","absolute","720","39","74","21",null,null,this.div_WORK);_a.set_taborder("81");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit11","absolute","878","39","150","21",null,null,this.div_WORK);_a.set_taborder("83");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar03","absolute","643","65","120","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("85");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static15","absolute","326","88","705","27",null,null,this.div_WORK);_a.set_taborder("87");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM14","absolute","326","88","80","27",null,null,this.div_WORK);_a.set_taborder("88");_a.set_text("임대기간");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","408","91","120","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("90");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static17","absolute","326","114","705","27",null,null,this.div_WORK);_a.set_taborder("91");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM20","absolute","326","114","80","27",null,null,this.div_WORK);_a.set_taborder("92");_a.set_text("보증금");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM21","absolute","560","114","80","27",null,null,this.div_WORK);_a.set_taborder("93");_a.set_text("월임대료");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM22","absolute","796","62","80","27",null,null,this.div_WORK);_a.set_taborder("97");_a.set_text("해약일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static19","absolute","326","140","705","27",null,null,this.div_WORK);_a.set_taborder("99");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM23","absolute","326","140","80","27",null,null,this.div_WORK);_a.set_taborder("100");_a.set_text("지원금");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM24","absolute","560","140","80","27",null,null,this.div_WORK);_a.set_taborder("101");_a.set_cssclass("sta_WF_Label");_a.set_text("본인부담");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static21","absolute","326","166","705","27",null,null,this.div_WORK);_a.set_taborder("102");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM25","absolute","326","166","80","27",null,null,this.div_WORK);_a.set_taborder("103");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit23","absolute","408","169","492","21",null,null,this.div_WORK);_a.set_taborder("104");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","532","91","11","21",null,null,this.div_WORK);_a.set_taborder("105");_a.set_text("~");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar02","absolute","545","91","120","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("106");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a.set_dateformat("yyyy-MM-dd");_a=new MaskEdit("MaskEdit00","absolute","408","117","150","21",null,null,this.div_WORK);_a.set_taborder("107");_a.set_mask("9,999");_a.set_cssclass("msk_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","642","117","150","21",null,null,this.div_WORK);_a.set_taborder("109");_a.set_mask("9,999");_a.set_cssclass("msk_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","408","143","150","21",null,null,this.div_WORK);_a.set_taborder("110");_a.set_mask("9,999");_a.set_cssclass("msk_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar04","absolute","878","65","120","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("111");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a.set_dateformat("yyyy-MM-dd");_a=new Edit("Edit00","absolute","408","65","151","21",null,null,this.div_WORK);_a.set_taborder("112");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static09","absolute","326","193",null,"10","0",null,this.div_WORK);_a.set_taborder("113");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_relation00","absolute","326","203","165","19",null,null,this.div_WORK);_a.set_taborder("114");_a.set_text("지원 정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static10","absolute","326","222",null,"5","0",null,this.div_WORK);_a.set_taborder("115");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_gtnSportList","absolute","326","264",null,null,"0","0",this.div_WORK);_a.set_taborder("116");_a.set_binddataset("ds_gtnSportList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"123\"/><Column size=\"114\"/><Column size=\"134\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"청구년월\"/><Cell col=\"3\" text=\"납입기한\"/><Cell col=\"4\" text=\"청구금액\"/><Cell col=\"5\" text=\"수납일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:RQEST_YM\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RQEST_AMOUNT\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:dataset.getRowCount() + &quot; 건&quot;\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;RQEST_AMOUNT&quot;)\" mask=\"#,###\"/><Cell col=\"5\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","326","227","705","27",null,null,this.div_WORK);_a.set_taborder("117");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","796","227","80","27",null,null,this.div_WORK);_a.set_taborder("118");_a.set_text("수납일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","561","227","80","27",null,null,this.div_WORK);_a.set_taborder("119");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","326","227","80","27",null,null,this.div_WORK);_a.set_taborder("120");_a.set_text("청구금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit04","absolute","408","230","151","21",null,null,this.div_WORK);_a.set_taborder("121");_a.set_mask("9,999");_a.set_readonly("false");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","643","230","120","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("122");_a.set_readonly("false");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Calendar("Calendar05","absolute","878","230","120","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("123");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static03","absolute","326","254",null,"10","0",null,this.div_WORK);_a.set_taborder("124");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_regSport","absolute","934","10","95","21",null,null,this.div_WORK);_a.set_taborder("125");_a.set_text("지원내역등록");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_cyberAccountPop","absolute","858","10","74","21",null,null,this.div_WORK);_a.set_taborder("126");_a.set_text("가상계좌");_a.set_cssclass("btn_WF_Grid");_a.style.set_font("9 굴림");this.div_WORK.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","913","169","114","21",null,null,this.div_WORK);_a.set_taborder("127");_a.set_text("보증금지원");_a.set_falsevalue("0");_a.set_truevalue("1");_a.set_value("0");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","642","143","150","21",null,null,this.div_WORK);_a.set_taborder("128");_a.set_mask("9,999");_a.set_cssclass("msk_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("3");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01070100");_b.set_titletext("보증금 지원관리");});this.addLayout(_a.name,_a);_a=new BindItem("item24","div_WORK.Edit09","value","ds_rentCntrctDetail","RENT_HOUSE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item26","div_WORK.Edit19","value","ds_rentCntrctDetail","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","div_WORK.Edit20","value","ds_rentCntrctDetail","HO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_WORK.Edit11","value","ds_rentCntrctDetail","DVR_AR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item66","div_WORK.Calendar03","value","ds_rentCntrctDetail","CNTRCT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.Calendar01","value","ds_rentCntrctDetail","RENT_BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.Calendar02","value","ds_rentCntrctDetail","RENT_ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","div_WORK.MaskEdit00","value","ds_rentCntrctDetail","GTN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_WORK.MaskEdit02","value","ds_rentCntrctDetail","RNTCHRG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_WORK.MaskEdit03","value","ds_rentCntrctDetail","SPORT_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.Calendar04","value","ds_rentCntrctDetail","CANCL_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_WORK.Edit00","value","ds_rentCntrctDetail","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.Edit23","value","ds_rentCntrctDetail","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.MaskEdit04","value","ds_gtnSportList","RQEST_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.Calendar00","value","ds_gtnSportList","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_WORK.Calendar05","value","ds_gtnSportList","RCIV_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_WORK.CheckBox00","value","ds_rentCntrctDetail","SPORT_TRGET_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_WORK.MaskEdit01","value","ds_rentCntrctDetail","RQEST_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT01070100.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01070100.xfdl",function(){this.RNT01070100_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01070100_onload=function(_a,_b){this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체",{HOUSE_SE:"R1"});};this.div_search_cmb_rentHouseCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;};this.div_search_cmb_dong_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;};this.fn_search=function(){this.ds_rentCntrctList.clearData();this.ds_rentCntrctDetail.clearData();this.ds_gtnSportList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_get_rentCntrct(this.ds_rentCntrctList,this.ds_cond00);};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveSlaryList");}};this.div_WORK_grd_rentCntrctList_onselectchanged=function(_a,_b){this.ds_rentCntrctDetail.clearData();this.ds_gtnSportList.clearData();var _c=this.ds_rentCntrctList.getSelectColumn("CNTRCTR_NO");this.fn_get_rentCntrctDetail(this.ds_rentCntrctDetail,{cntrctrNo:_c});this.ds_cond01.setColumn(0,"cntrctrNo",_c);this.fn_transaction("gtnSportList");};this.div_WORK_btn_regSport_onclick=function(_a,_b){if(this.ds_gtnSportList.rowcount>0){this.alert("지원정보가 존재합니다.");return;}else{this.ds_cond02.copyRow(0,this.ds_rentCntrctDetail,this.ds_rentCntrctDetail.rowposition);this.ds_cond02.setColumn(0,"TODAY",this.dateUtils.today());this.fn_transaction("sprntRentSupportI");}};this.div_WORK_btn_cyberAccountPop_onclick=function(_a,_b){var _c=this.fn_dsToObj(this.ds_rentCntrctList,this.ds_rentCntrctList.rowposition);_c["CRT_DIV"]='BS';_c["CORT_CODE"]='BS';this.gfn_popup("cyberAccountPop",714,872,"가상계좌 결제요청",{objRentCntrctDetail:_c},"pms_rnt_pra::RNT00000000_P01.xfdl",null,true);};this.div_WORK_CheckBox00_onchanged=function(_a,_b){var _c=this.ds_rentCntrctDetail.getColumn(0,"ORG_RQEST_AMOUNT");if(_b.postvalue==true){if(_c>3000000){this.ds_rentCntrctDetail.setColumn(0,"SPORT_AMOUNT",1500000);this.ds_rentCntrctDetail.setColumn(0,"RQEST_AMOUNT",_c-1500000);}else{var _d=_c/2;var _e=_d%10000;_d=_d-_e;_c=_c-_d;this.ds_rentCntrctDetail.setColumn(0,"SPORT_AMOUNT",_d);this.ds_rentCntrctDetail.setColumn(0,"RQEST_AMOUNT",_c);}}else{this.ds_rentCntrctDetail.setColumn(0,"ORG_RQEST_AMOUNT",this.ds_rentCntrctDetail.getColumn(0,"RQEST_AMOUNT")+this.ds_rentCntrctDetail.getColumn(0,"SPORT_AMOUNT"));this.ds_rentCntrctDetail.setColumn(0,"RQEST_AMOUNT",this.ds_rentCntrctDetail.getColumn(0,"RQEST_AMOUNT")+this.ds_rentCntrctDetail.getColumn(0,"SPORT_AMOUNT"));this.ds_rentCntrctDetail.setColumn(0,"SPORT_AMOUNT",0);}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "gtnSportList":var _c="/hsco/pms/rnt/pra/RNT01070100/gtnSportList.do";var _d="input1=ds_cond01";var _e="ds_gtnSportList=output1";break;case "saveSlaryList":var _c="/hsco/pms/rnt/pra/RNT01070100/listCUD.do";var _f="input1=ds_gtnSportList:U";var _d=_f;var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d==true){switch(_a){case "sprntRentSupportI":this.ds_gtnSportList.clearData();var _e=this.ds_rentCntrctList.getSelectColumn("CNTRCTR_NO");this.fn_get_rentCntrctDetail(this.ds_rentCntrctDetail,{cntrctrNo:_e});this.ds_cond01.setColumn(0,"cntrctrNo",_e);this.fn_transaction("gtnSportList");break;case "save":this.ds_gtnSportList.clearData();var _e=this.ds_rentCntrctList.getSelectColumn("CNTRCTR_NO");this.fn_get_rentCntrctDetail(this.ds_rentCntrctDetail,{cntrctrNo:_e});this.ds_cond01.setColumn(0,"cntrctrNo",_e);this.fn_transaction("gtnSportList");break;case "saveSlaryList":this.ds_gtnSportList.clearData();this.fn_transaction("gtnSportList");break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.fn_delete=function(){var _a=this.ds_gtnSportList;if(_a.findRow("CHK","1")== -1){return;}if(this.gfn_message("confirm.삭제여부")){for(var _b=_a.rowcount;_b>=0;_b-- ){if(_a.getColumn(_b,"CHK")==1){_a.deleteRow(_b);}}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01070100_oninit,this);this.addEventHandler("onload",this.RNT01070100_onload,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.div_search_cmb_dong_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.grd_rentCntrctList.addEventHandler("onselectchanged",this.div_WORK_grd_rentCntrctList_onselectchanged,this);this.div_WORK.Static10.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_regSport.addEventHandler("onclick",this.div_WORK_btn_regSport_onclick,this);this.div_WORK.btn_cyberAccountPop.addEventHandler("onclick",this.div_WORK_btn_cyberAccountPop_onclick,this);this.div_WORK.CheckBox00.addEventHandler("onchanged",this.div_WORK_CheckBox00_onchanged,this);};this.loadIncludeScript("RNT01070100.xfdl");};})();