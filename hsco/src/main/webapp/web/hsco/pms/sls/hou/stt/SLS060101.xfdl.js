﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS060101");this.set_classname("SLS060101");this.set_titletext("계약및납부현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseDongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseHoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCode</Col><Col id=\"notNull\">N</Col><Col id=\"to\"/><Col id=\"msgId\">주택</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houstTotalInfoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_DVR_AR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AEA\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LTTOT_CNVRS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_MVN_PRARNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"LTTOT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GYEYAK_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GYEYAK_RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JUNGDO_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JUNGDO_RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOT_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOT_RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ALTRV_LON_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"SUBLS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM2\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctrlInfoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_DVR_AR\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CMNUSE_AR\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_LTTOT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_LTTOT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_LTTOT_CNVRS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE_RPT\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM_MASK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_qualfSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cprInfoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JURIRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_RN\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"58","28",null,this);_a.set_taborder("2");_a.set_text("Div00");_a.style.set_background("#f9fbffff");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("86");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("87");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("88");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","16","62",null,"5","-16",null,this.div_search);_a.set_taborder("89");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","52",null,"5","0",null,this.div_search);_a.set_taborder("90");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","15","7","64","21",null,null,this.div_search);_a.set_taborder("91");_a.set_text("계약일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stCntrctDe","absolute","79","5","105","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("92");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Calendar("cal_edCntrctDe","absolute","200","5","105","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("93");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static05","absolute","184","8","16","21",null,null,this.div_search);_a.set_taborder("94");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","626","5","64","21",null,null,this.div_search);_a.set_taborder("95");_a.set_text("자격구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_qualfSe","absolute","690","5","181","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("96");_a.set_value("0");_a.set_innerdataset("@ds_qualfSeList");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_index("0");_a=new Static("Static09","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("99");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_color("#3f3f3fb3");_a.style.set_align("left");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","79","31","226","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("100");_a.set_innerdataset("@ds_houseCodeList");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_codecolumn("HOUSE_CODE");_a=new Static("Static10","absolute","322","31","51","21",null,null,this.div_search);_a.set_taborder("101");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","386","31","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("105");_a.set_innerdataset("@ds_houseDongList");_a.set_datacolumn("DONG_NM");_a.set_codecolumn("DONG");_a=new Combo("cmb_ho","absolute","478","31","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("106");_a.set_innerdataset("@ds_houseHoList");_a.set_codecolumn("HO");_a.set_datacolumn("HO_NM");_a=new CheckBox("chk_incAll","absolute","583","31","93","21",null,null,this.div_search);_a.set_taborder("109");_a.set_text("해약세대포함");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_value("1");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","322","7","64","21",null,null,this.div_search);_a.set_taborder("110");_a.set_text("전환일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stRentLttotCvDe","absolute","386","5","105","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("111");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static11","absolute","491","8","16","21",null,null,this.div_search);_a.set_taborder("112");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_edRentLttotCvDe","absolute","507","5","105","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("113");_a.set_dateformat("yyyy-MM-dd");_a=new CheckBox("chk_incAll00","absolute","694","31","94","21",null,null,this.div_search);_a.set_taborder("114");_a.set_text("주민번호표시");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","58",null,null,"28","7",this);_a.set_taborder("3");_a.set_text("Div00");_a.style.set_background("#ffffffff");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0",null,"10","0",null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","9","10",null,"21","866",null,this.div_work);_a.set_taborder("2");_a.set_text("계약납부현황");_a.set_cssclass("sta_WF_Title01");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","-23","31",null,"5","0",null,this.div_work);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_output","absolute",null,"9","77","21","2",null,this.div_work);_a.set_taborder("4");_a.set_text("계약확인서");this.div_work.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","1","36",null,null,"3","16",this.div_work);_a.set_taborder("5");_a.set_binddataset("ds_houstTotalInfoList");_a.style.set_border("1 solid #3a7ab8ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"53\"/><Column size=\"49\"/><Column size=\"56\"/><Column size=\"41\"/><Column size=\"56\"/><Column size=\"56\"/><Column size=\"72\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"86\"/><Column size=\"72\"/><Column size=\"95\"/><Column size=\"90\"/><Column size=\"88\"/><Column size=\"98\"/><Column size=\"96\"/><Column size=\"94\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"84\"/><Column size=\"86\"/><Column size=\"99\"/><Column size=\"85\"/><Column size=\"82\"/><Column size=\"84\"/><Column size=\"54\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"주택정보\" wordwrap=\"both\"/><Cell col=\"5\" colspan=\"10\" text=\"계약자정보\"/><Cell col=\"15\" colspan=\"4\" text=\"계약정보\" wordwrap=\"both\"/><Cell col=\"19\" colspan=\"3\" text=\"계약변경정보\" wordwrap=\"both\"/><Cell col=\"22\" colspan=\"3\" text=\"입주일자\" wordwrap=\"both\"/><Cell col=\"25\" text=\"분양금\"/><Cell col=\"26\" colspan=\"2\" text=\"계약금\" wordwrap=\"both\"/><Cell col=\"28\" colspan=\"2\" text=\"중도금\"/><Cell col=\"30\" colspan=\"2\" text=\"잔금\" wordwrap=\"both\"/><Cell col=\"32\" colspan=\"2\" text=\"총금액\" wordwrap=\"both\"/><Cell col=\"34\"/><Cell row=\"1\" text=\"주택명\" wordwrap=\"both\"/><Cell row=\"1\" col=\"1\" text=\"동\" wordwrap=\"both\"/><Cell row=\"1\" col=\"2\" text=\"호\" wordwrap=\"both\"/><Cell row=\"1\" col=\"3\" text=\"전용면적\" wordwrap=\"both\"/><Cell row=\"1\" col=\"4\" text=\"타입\" wordwrap=\"both\"/><Cell row=\"1\" col=\"5\" text=\"최초자격\" wordwrap=\"both\"/><Cell row=\"1\" col=\"6\" text=\"현재자격\" wordwrap=\"both\"/><Cell row=\"1\" col=\"7\" text=\"계약자명1\" wordwrap=\"both\"/><Cell row=\"1\" col=\"8\" text=\"주민등록번호1\" wordwrap=\"both\"/><Cell row=\"1\" col=\"9\" text=\"우편번호\"/><Cell row=\"1\" col=\"10\" text=\"주소\" wordwrap=\"both\"/><Cell row=\"1\" col=\"11\" text=\"전화번호\" wordwrap=\"both\"/><Cell row=\"1\" col=\"12\" text=\"휴대전화\" wordwrap=\"both\"/><Cell row=\"1\" col=\"13\" text=\"계약자명2\"/><Cell row=\"1\" col=\"14\" text=\"주민등록번호2\"/><Cell row=\"1\" col=\"15\" text=\"계약일자\" wordwrap=\"both\"/><Cell row=\"1\" col=\"16\" text=\"분양전환일자\"/><Cell row=\"1\" col=\"17\" text=\"대환일자\" wordwrap=\"both\"/><Cell row=\"1\" col=\"18\" text=\"해약일자\" wordwrap=\"both\"/><Cell row=\"1\" col=\"19\" text=\"명의변경일자\" wordwrap=\"both\"/><Cell row=\"1\" col=\"20\" text=\"임차권양도일자\" wordwrap=\"both\"/><Cell row=\"1\" col=\"21\" text=\"전대일자\" wordwrap=\"both\"/><Cell row=\"1\" col=\"22\" text=\"입주지정일\" wordwrap=\"both\"/><Cell row=\"1\" col=\"23\" text=\"임대시작일\" wordwrap=\"both\"/><Cell row=\"1\" col=\"24\" text=\"임대종료일\" wordwrap=\"both\"/><Cell row=\"1\" col=\"25\" text=\"총분양금\"/><Cell row=\"1\" col=\"26\" text=\"납부금액\" wordwrap=\"both\"/><Cell row=\"1\" col=\"27\" text=\"수납금액\" wordwrap=\"both\"/><Cell row=\"1\" col=\"28\" text=\"납부금액\"/><Cell row=\"1\" col=\"29\" text=\"수납금액\" wordwrap=\"both\"/><Cell row=\"1\" col=\"30\" text=\"납부금액\" wordwrap=\"both\"/><Cell row=\"1\" col=\"31\" text=\"수납금액\" wordwrap=\"both\"/><Cell row=\"1\" col=\"32\" text=\"납부금액\"/><Cell row=\"1\" col=\"33\" text=\"수납금액\" wordwrap=\"both\"/><Cell row=\"1\" col=\"34\"/></Band><Band id=\"body\"><Cell text=\"bind:HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:HOUSE_DVR_AR\"/><Cell col=\"4\" text=\"bind:TY_AEA\"/><Cell col=\"5\" text=\"bind:FIRST_QUALF_SE\"/><Cell col=\"6\" text=\"bind:QUALF_SE\"/><Cell col=\"7\" text=\"bind:CSTMR_NM\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:IHIDNUM\" mask=\"######-#{######}\" tooltiptext=\"expr:IHIDNUM.substr(0,6)+ '-' + IHIDNUM.substr(6)\"/><Cell col=\"9\" text=\"bind:ZIP\"/><Cell col=\"10\" text=\"bind:ADRES\"/><Cell col=\"11\" text=\"bind:TELNO\"/><Cell col=\"12\" text=\"bind:MBTLNO\"/><Cell col=\"13\" text=\"bind:CSTMR_NM2\"/><Cell col=\"14\" text=\"bind:IHIDNUM2\" mask=\"######-#{######}\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:LTTOT_CNVRS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:ALTRV_LON_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:CANCL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"date\" text=\"bind:CHANGE_DE1\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"date\" text=\"bind:CHANGE_DE2\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" displaytype=\"date\" text=\"bind:SUBLS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"22\" displaytype=\"date\" text=\"bind:RENT_MVN_PRARNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"23\" displaytype=\"date\" text=\"bind:RENT_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"24\" displaytype=\"date\" text=\"bind:RENT_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LTTOT_AMOUNT\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GYEYAK_PAYAMT\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GYEYAK_RCIV_AMOUNT\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JUNGDO_PAYAMT\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JUNGDO_RCIV_AMOUNT\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JAN_PAYAMT\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JAN_RCIV_AMOUNT\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_PAYAMT\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_RCIV_AMOUNT\"/><Cell col=\"34\"/></Band><Band id=\"summary\"><Cell colspan=\"24\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('LTTOT_AMOUNT')\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GYEYAK_PAYAMT')\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('GYEYAK_RCIV_AMOUNT')\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('JUNGDO_PAYAMT')\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('JUNGDO_RCIV_AMOUNT')\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('JAN_PAYAMT')\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('JAN_RCIV_AMOUNT')\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('TOT_PAYAMT')\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('TOT_RCIV_AMOUNT')\"/><Cell col=\"34\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,58,this.div_search,function(_b){_b.set_taborder("2");_b.set_text("Div00");_b.style.set_background("#f9fbffff");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");_b.set_text("Div00");_b.style.set_background("#ffffffff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS060101");_b.set_titletext("계약및납부현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SLS060101.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS060101.xfdl",function(){this.SLS060101_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS060101_onload=function(_a,_b){this.fn_get_codeList();this.fn_fill_code(this.ds_cprInfoList,"/hsco/pms/com/PMS000000/cprInfoList.do","","");};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.div_search.cal_stCntrctDe.set_value("19000101");this.div_search.cal_edCntrctDe.set_value(this.gfn_today());};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return;}this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("houstTotalInfoList");};this.fn_comboOnItemChangeHandler=function(_a,_b){var _c=_a.name;var _d=_b?_b.postvalue:_a.value;var _e=_b?_b.postindex:_a.index;var _f={};switch(_c){case "cmb_houseCode":_f["HOUSE_CODE"]=_d;this.pmsUtil.getHouseDong(_f,"ds_houseDongList");break;case "cmb_dong":_f["HOUSE_CODE"]=this.ds_houseDongList.getColumn(_e,"HOUSE_CODE");_f["DONG"]=_d;this.pmsUtil.getHouseHo(_f,"ds_houseHoList");break;default:break;}};this.fn_get_codeList=function(){var _a={};_a["USE_AT"]="1";_a["HOUSE_SE"]="S1,S2,S3,S4,S5,S9,R1,R2,R3,R9";this.pmsUtil.getHouseCode(_a,"ds_houseCodeList");this.fn_loadCombo();};this.fn_loadCombo=function(){var _a=[["ds_qualfSeList","HOU004","1","A"]];this.gfn_comboLoad(_a);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "houstTotalInfoList":var _c="/hsco/pms/sls/hou/stt/SLS060101/houstTotalInfoList.do";var _d="input1=ds_cond00";var _e="ds_houstTotalInfoList=output1";break;case "cntrctrlInfoList":var _c="/hsco/pms/sls/hou/stt/SLS060101/cntrctrlInfoList.do";var _d="input1=ds_cond00";var _e="ds_cntrctrlInfoList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "houseCodeList":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseCode,_e,true);break;case "houseDongList":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_dong,_e,true);break;case "houseHoList":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_ho,_e,true);break;default:break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.div_work_btn_output_onclick=function(_a,_b){var _c={};_c["path"]="/pms/sls/SLS060101_R01.jrf";_c["title"]="계약확인서";_c["filename"]="계약확인서";_c["dataset"]=[["ds_cntrctrlInfoList",this.ds_cntrctrlInfoList],["ds_cprInfoList",this.ds_cprInfoList]];_c["arguments"]={test:"ABCDEF"};this.pmsUtil.popupReportView(this,_c);return true;};this.div_search_chk_incAll00_onchanged=function(_a,_b){var _c=this.div_work.Grid00;this.ihd3=this.ihd3?0:1;var _d=this.ihd3?'######-#######':'######-#{######}';_c.setCellProperty("body",_c.getBindCellIndex("body","IHIDNUM"),"mask",_d);_c.setCellProperty("body",_c.getBindCellIndex("body","IHIDNUM2"),"mask",_d);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS060101_oninit,this);this.addEventHandler("onload",this.SLS060101_onload,this);this.div_search.Static09.addEventHandler("onclick",this.Static04_onclick,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.chk_incAll00.addEventHandler("onchanged",this.div_search_chk_incAll00_onchanged,this);this.div_work.Static00.addEventHandler("onclick",this.div_work_Static00_onclick,this);this.div_work.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_work.btn_output.addEventHandler("onclick",this.div_work_btn_output_onclick,this);};this.loadIncludeScript("SLS060101.xfdl");};})();