﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT040301");this.set_classname("RNT040301");this.set_titletext("");this.set_scrollbars("none");this._setFormPosition(0,0,900,700);}_a=new Dataset("ds_gnrl_rpairs",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"HO\" type=\"STRING\" size=\"4\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"11\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"REQUST_CN\" type=\"STRING\" size=\"200\"/><Column id=\"CNTRWK_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRWK_KND\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRWK_CN\" type=\"STRING\" size=\"100\"/><Column id=\"THNG_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"THNG_STNDRD\" type=\"STRING\" size=\"3\"/><Column id=\"THNG_QY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REQUST_SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RPAIRS_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CNSTRCT_ENTRPS\" type=\"STRING\" size=\"100\"/><Column id=\"RPAIRS_CN\" type=\"STRING\" size=\"200\"/><Column id=\"PROCESS_SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"FILE_SN2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"FILE_SN1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"20\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rpairs_photo",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"255\"/><Column id=\"PHOTO_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"COURS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"DONG\" type=\"STRING\" size=\"255\"/><Column id=\"HO\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_SE\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQUST_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHNG_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHNG_DE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_house_knd",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"255\"/><Column id=\"PHOTO_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"COURS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"DONG\" type=\"STRING\" size=\"255\"/><Column id=\"HO\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_SE\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">Calendar00</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">div_search</Col><Col id=\"msgId\">요청일자</Col><Col id=\"from\"/><Col id=\"to\">Calendar01</Col></Row><Row><Col id=\"colId\">Calendar01</Col><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">요청일자</Col><Col id=\"to\"/></Row><Row><Col id=\"colId\">CNTRWK_KND</Col><Col id=\"compId\">grd_gnrl_rpairs</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공종구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond05",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sanction",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sanctnSttus",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sanctnerNmDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"S1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S5_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S6_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S7_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_innerSanctnParam",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"16\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond04",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"DONG\" type=\"STRING\" size=\"255\"/><Column id=\"HO\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"EXCHNG_DE1\" type=\"STRING\" size=\"255\"/><Column id=\"EXCHNG_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prt",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CNTRWK_KND\" type=\"STRING\" size=\"100\"/><Column id=\"CNSTRCT_ENTRPS\" type=\"STRING\" size=\"100\"/><Column id=\"RPAIRS_CN\" type=\"STRING\" size=\"200\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CONFM_SE_SANCTN\" type=\"STRING\" size=\"3\"/><Column id=\"RETURN_PRVONSH\" type=\"STRING\" size=\"200\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"8\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RPAIRS_DE\" type=\"STRING\" size=\"8\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"HO\" type=\"STRING\" size=\"4\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"11\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INS_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGJA\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"GWANRIJA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond06",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"DONG\" type=\"STRING\" size=\"255\"/><Column id=\"HO\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"EXCHNG_DE1\" type=\"STRING\" size=\"255\"/><Column id=\"EXCHNG_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("gds_apprline",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"APPRLINE_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","872","-15","15","723",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","723","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","15","111","210","15",null,null,this);_a.set_taborder("59");_a.set_text("요청내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","39","800","5",null,null,this);_a.set_taborder("299");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","44",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","440","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("요청일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","612","5","17","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","505","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("Calendar01","absolute","625","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static19","absolute","182","5","42","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("주택");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","230","5","200","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_type("filter");_a.set_readonly("false");_a.set_index("-1");_a=new Radio("Radio00","absolute","0.58%","5",null,"21","78.48%",null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.div_search.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("23");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_direction("vertical");_a.set_index("0");_a=new Grid("grd_gnrl_rpairs","absolute","15","130",null,"554","29",null,this);_a.set_taborder("382");_a.set_binddataset("ds_gnrl_rpairs");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"수선구분\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"주택명\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"동\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"호\"/><Cell col=\"5\" style=\"font:9 돋움;\" text=\"공종구분\"/><Cell col=\"6\" style=\"font:9 돋움;\" text=\"요청일자\"/><Cell col=\"7\" style=\"font:9 돋움;\" text=\"요청내역\"/><Cell col=\"8\" style=\"font:9 돋움;\" text=\"규격\"/><Cell col=\"9\" style=\"font:9 돋움;\" text=\"수량\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" text=\"expr:RPAIRS_SE == &quot;1&quot; ? &quot;개별&quot;  : &quot;공용&quot;\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:HOUSE_CODE\" combodataset=\"ds_rentHouseCodeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:DONG\"/><Cell col=\"4\" text=\"bind:HO\"/><Cell col=\"5\" text=\"bind:CNTRWK_KND\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:REQUST_DE\"/><Cell col=\"7\" text=\"bind:REQUST_CN\"/><Cell col=\"8\" text=\"bind:THNG_STNDRD\"/><Cell col=\"9\" text=\"bind:THNG_QY\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","735",null,null,this);_a.set_taborder("435");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","370",null,"10","400",null,"-41",this);_a.set_taborder("444");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","690",null,"10","400",null,"-49",this);_a.set_taborder("445");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","2.13%","17",null,"21","73.25%",null,this);_a.set_taborder("446");_a.set_text("승인요청 대상 선택");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","0",null,"15","1.75%",null,this);_a.set_taborder("447");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","698","15","56","25",null,null,this);_a.set_taborder("448");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","816","15","56","25",null,null,this);_a.set_taborder("449");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","685",null,"15","1.78%",null,this);_a.set_taborder("450");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","1.33%","104",null,"5","0%",null,this);_a.set_taborder("453");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","0%","125",null,"6","1.67%",null,this);_a.set_taborder("454");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","757","15","56","25",null,null,this);_a.set_taborder("455");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","21","83","64","21",null,null,this);_a.set_taborder("456");_a.set_text("요청구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","204","83","64","21",null,null,this);_a.set_taborder("458");_a.set_text("요청일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","270","83","102","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("459");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("false");_a=new Static("Static07","absolute","378","83","64","21",null,null,this);_a.set_taborder("460");_a.set_text("문서번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.addChild(_a.name,_a);_a=new Edit("edt_cntrwk_knd01","absolute","445","83","110","21",null,null,this);_a.set_taborder("461");_a.set_autoselect("true");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","561","83","40","21",null,null,this);_a.set_taborder("462");_a.set_text("제목");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.addChild(_a.name,_a);_a=new Edit("edt_cntrwk_knd02","absolute","604","83","267","21",null,null,this);_a.set_taborder("463");_a.set_autoselect("true");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Edit("edt_cntrwk_knd00","absolute","9.78%","83",null,"21","78%",null,this);_a.set_taborder("464");_a.set_autoselect("true");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",900,700,this,function(_c){_c.set_classname("RNT040301");_c.set_titletext("");_c.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT040301_P1.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT040301_P1.xfdl","lib::comInclude.xjs");this.registerScript("RNT040301_P1.xfdl",function(){this.fv_objForm;this.RNT040301_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT040301_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.fn_transaction("houseCode3");var _c=new String(this.dateUtils.today());this.div_search.Radio00.set_index(0);this.div_search.Calendar00.set_value(_c.substring(0,4)+"1");this.div_search.Calendar01.set_value(this.dateUtils.today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.checkDs.push(this.ds_gnrl_rpairs);};this.fn_load_combo=function(){this.fn_get_rentHouseCode(this.div_search.Combo00,"");};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.ds_gnrl_rpairs.clearData();this.ds_rpairs_photo.clearData();this.ds_cond01.clearData();var _a=this.ds_cond01.addRow();this.ds_cond01.setColumn(_a,"HOUSE_CODE",this.div_search.Combo00.value);this.ds_cond01.setColumn(_a,"REQUST_DE1",this.div_search.Calendar00.value);this.ds_cond01.setColumn(_a,"REQUST_DE2",this.div_search.Calendar01.value);this.ds_cond01.setColumn(_a,"RPAIRS_SE",this.div_search.Radio00.value);this.fn_transaction("selectSlaryList2");};this.fn_save=function(){if(!this.gfn_checkValidation(this.grd_gnrl_rpairs,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveSlaryList");}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "houseCode3":var _c="hsco/pms/rnt/rnt040401/houseCode3.do";var _d="";var _e="ds_rentHouseCodeList=output1";break;case "selectSlaryList2":var _c="hsco/pms/rnt/rnt040301/getListR1.do";var _d="input2=ds_cond01";var _e="ds_gnrl_rpairs=output2";break;}if(_c==null){return;}var _f=typeof (_d);if(_f=="object"){this.pmsUtil.pmsComTran(_a,_c,_d,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null,_b);}};this.fn_callBack=function(_a,_b,_c){if(_a=="houseCode3"){var _d=this.parent.arg_1;this.div_search.Combo00.set_value(_d.getColumn(0,"HOUSE_CODE"));this.edt_cntrwk_knd00.set_value(_d.getColumn(0,"REQUST_SE"));this.Calendar00.set_value(_d.getColumn(0,"REQUST_DE"));this.edt_cntrwk_knd01.set_value(_d.getColumn(0,"DOC_NO"));this.edt_cntrwk_knd02.set_value(_d.getColumn(0,"REQUST_SJ"));this.fn_search();}if(_b!=0){this.gfn_callback_message(_a,_b,_c);}};this.Button00_onclick=function(_a,_b){var _c=this.fv_objForm.ds_gnrl_rpairs;var _d=this.fv_objForm.ds_rpairs_requst;for(i=0;i<this.ds_gnrl_rpairs.rowcount;i++ ){if(this.ds_gnrl_rpairs.getColumn(i,"CHK")==1){var _e=_c.addRow();_c.copyRow(_e,this.ds_gnrl_rpairs,i);_c.setColumn(_e,"REQUST_SN",_d.getColumn(_d.rowposition,"REQUST_SN"));}}this.close();};this.Button02_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.ds_rpairs_photo.addEventHandler("onrowposchanged",this.ds_rpairs_photo_onrowposchanged,this);this.ds_prt.addEventHandler("onrowposchanged",this.ds_gnrl_rpairs_onrowposchanged,this);this.addEventHandler("oninit",this.RNT040301_oninit,this);this.addEventHandler("onload",this.RNT040301_onload,this);this.Static28.addEventHandler("onclick",this.Static28_onclick,this);this.grd_gnrl_rpairs.addEventHandler("oncellclick",this.grd_gnrl_rpairs_oncellclick,this);this.Button05.addEventHandler("onclick",this.fn_search,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);};this.loadIncludeScript("RNT040301_P1.xfdl");};})();