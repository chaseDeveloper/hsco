﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090301");this.set_classname("HRM090301");this.set_titletext("임대계약관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_rentCntrctList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LESSEE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PD\" type=\"STRING\" size=\"256\"/><Column id=\"FLOOR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_AR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVR_AR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RENT_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"MT_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_ARRRG_RT\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_SM\" type=\"STRING\" size=\"256\"/><Column id=\"CMNUSE_AR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PWRER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_ARRRG_RT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_SM\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_MANAGECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_mvnCmpnySe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">RENT_CNTRCT_NO</Col><Col id=\"msgId\">계약번호</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">LESSEE_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">입주사</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">CNTRCT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계약일자</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">CNTRCT_BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계약시작일자</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">CNTRCT_BGNDE</Col><Col id=\"to\">CNTRCT_ENDDE</Col><Col id=\"msgId\">계약시작일자^계약일자</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">CNTRCT_ENDDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계약종료일자</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">CNTRCT_ENDDE</Col><Col id=\"from\">CNTRCT_BGNDE</Col><Col id=\"msgId\">계약종료일자^계약시작일자</Col></Row><Row><Col id=\"msgId\">월임대료</Col><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">MT_RNTCHRG</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">DVR_AR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">전용면적</Col></Row><Row><Col id=\"msgId\">공용면적</Col><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">CMNUSE_AR</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">RENT_GTN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">임대보증금</Col></Row><Row><Col id=\"msgId\">임대료 납부일</Col><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">RNTCHRG_PAY_TMLMT</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"msgId\">임대료 연체율</Col><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">RNTCHRG_ARRRG_RT</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">GNRL_MANAGECT</Col><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"msgId\">일반관리비</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">MANAGECT_PAY_TMLMT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">관리비 납부일</Col></Row><Row><Col id=\"msgId\">관리비 연체율</Col><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">MANAGECT_ARRRG_RT</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">PWRER_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">전력계 번호</Col><Col id=\"nlength\">15</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_rentCntrctList</Col><Col id=\"colId\">FLOOR_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">층수</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGN_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"from\">BGN_DE</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_cntrctPd","absolute","15","5","77","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("계약일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","92","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","217","5","12","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","232","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_rentCntrctList","absolute","0","43","100","19",null,null,this);_a.set_taborder("4");_a.set_text("임대계약 내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("sta_pwrerNo","absolute","0",null,"100","27",null,"0",this.div_work);_a.set_taborder("21");_a.set_text("전력계 번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","99",null,"932","27",null,"78",this.div_work);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","99",null,"932","27",null,"52",this.div_work);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0",null,"1031","27",null,"26",this.div_work);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","99",null,"932","27",null,"0",this.div_work);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","99",null,"932","27",null,"104",this.div_work);_a.set_taborder("27");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_lesseeNo","absolute","0",null,"100","27",null,"104",this.div_work);_a.set_taborder("28");_a.set_text("입주사");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cntrctPd","absolute","514",null,"100","27",null,"104",this.div_work);_a.set_taborder("29");_a.set_text("계약기간");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rntchrgpayTmlmt","absolute","257",null,"100","27",null,"52",this.div_work);_a.set_taborder("30");_a.set_text("임대료 납부일");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_managectPayTmlmt","absolute","257",null,"100","27",null,"26",this.div_work);_a.set_taborder("31");_a.set_text("관리비 납부일");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rntchrgArrrgRt","absolute","514",null,"100","27",null,"52",this.div_work);_a.set_taborder("32");_a.set_text("임대료 연체율");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_managectArrrgRt","absolute","514",null,"100","27",null,"26",this.div_work);_a.set_taborder("33");_a.set_text("관리비 연체율");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rm","absolute","514",null,"100","27",null,"0",this.div_work);_a.set_taborder("34");_a.set_text("전력계 비고");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static05","absolute","738",null,"12","21",null,"107",this.div_work);_a.set_taborder("35");_a.set_text("~");this.div_work.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","616",null,"120","21",null,"107",this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("4");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Calendar("cal_endDe","absolute","752",null,"120","21",null,"107",this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("5");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("sta_DATE04","absolute","757",null,"12","21",null,"29",this.div_work);_a.set_taborder("36");_a.set_text("%");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DATE05","absolute","757",null,"12","21",null,"55",this.div_work);_a.set_taborder("37");_a.set_text("%");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_sn07","absolute","0",null,"100","27",null,"78",this.div_work);_a.set_taborder("38");_a.set_text("월임대료");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rntchrgSm","absolute","771",null,"100","27",null,"52",this.div_work);_a.set_taborder("39");_a.set_text("임대료합계");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_managectSm","absolute","771",null,"100","27",null,"26",this.div_work);_a.set_taborder("40");_a.set_text("관리비합계");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_rntchrgSm","absolute","873",null,"155","21",null,"55",this.div_work);_a.set_taborder("13");_a.set_inputtype("number");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");_a.style.set_align("right middle");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_managectSm","absolute","873",null,"155","21",null,"29",this.div_work);_a.set_taborder("17");_a.set_inputtype("number");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");_a.style.set_align("right middle");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_rm","absolute","615",null,"413","21",null,"3",this.div_work);_a.set_taborder("20");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_rentCntrctList","absolute","0","0",null,null,"0","191",this.div_work);_a.set_taborder("0");_a.set_autofittype("col");_a.set_binddataset("ds_rentCntrctList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"계약번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"계약일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"입주사\"/><Cell col=\"5\" colspan=\"3\" text=\"임대면적\"/><Cell col=\"8\" rowspan=\"2\" text=\"계약기간\"/><Cell col=\"9\" rowspan=\"2\" text=\"임대보증금\"/><Cell col=\"10\" rowspan=\"2\" text=\"월임대료\"/><Cell row=\"1\" col=\"5\" text=\"전용면적\"/><Cell row=\"1\" col=\"6\" text=\"공용면적\"/><Cell row=\"1\" col=\"7\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:RENT_CNTRCT_NO\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:LESSEE_NO\" combodataset=\"ds_mvnCmpnySe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVR_AR\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CMNUSE_AR\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RENT_AR\"/><Cell col=\"8\" text=\"bind:CNTRCT_PD\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RENT_GTN\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:MT_RNTCHRG\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_lesseeNo","absolute","102",null,"153","21",null,"107",this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_mvnCmpnySe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sta_floorSe","absolute","257",null,"100","27",null,"0",this.div_work);_a.set_taborder("42");_a.set_text("층수");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_rentAr","absolute","873",null,"139","21",null,"81",this.div_work);_a.set_taborder("9");_a.set_readonly("true");_a.set_inputtype("number");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("right middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DATE02","absolute","1014",null,"12","21",null,"81",this.div_work);_a.set_taborder("43");_a.set_text("평");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rentAr","absolute","771",null,"100","27",null,"78",this.div_work);_a.set_taborder("44");_a.set_text("임대면적");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DATE01","absolute","757",null,"12","21",null,"81",this.div_work);_a.set_taborder("45");_a.set_text("평");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cmnuseAr","absolute","514",null,"100","27",null,"78",this.div_work);_a.set_taborder("46");_a.set_text("공용면적");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_dvrAr","absolute","257",null,"100","27",null,"78",this.div_work);_a.set_taborder("47");_a.set_text("전용면적");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DATE00","absolute","498",null,"12","21",null,"81",this.div_work);_a.set_taborder("48");_a.set_text("평");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rentGtn","absolute","0",null,"100","27",null,"52",this.div_work);_a.set_taborder("49");_a.set_text("임대보증금");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rentCntrctDtl","absolute","0",null,"150","19",null,"162",this.div_work);_a.set_taborder("41");_a.set_text("임대계약 상세내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rentCntrctNo","absolute","0",null,"100","27",null,"130",this.div_work);_a.set_taborder("50");_a.set_text("계약번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","99",null,"932","27",null,"130",this.div_work);_a.set_taborder("51");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_rentCntrctNo","absolute","102",null,"153","21",null,"133",this.div_work);_a.set_taborder("1");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cntrctDe","absolute","257",null,"100","27",null,"104",this.div_work);_a.set_taborder("22");_a.set_text("계약일자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Calendar("cal_cntrctDe","absolute","359",null,"153","21",null,"107",this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("3");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("Static07","absolute","257",null,"774","27",null,"130",this.div_work);_a.set_taborder("52");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_MT_RNTCHRG","absolute","102",null,"153","21",null,"81",this.div_work);_a.set_taborder("6");_a.set_cssclass("msk_WF_Essential");_a.set_mask("#,###,###,###,###");_a.set_limitbymask("both");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_rentGtn","absolute","102",null,"153","21",null,"55",this.div_work);_a.set_taborder("10");_a.set_mask("#,###,###,###,###");_a.set_cssclass("msk_WF_Essential");_a.set_limitbymask("both");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_dvrAr","absolute","359",null,"137","21",null,"81",this.div_work);_a.set_taborder("7");_a.set_mask("##########.###");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_rntchrgpayTmlmt","absolute","387",null,"109","21",null,"55",this.div_work);_a.set_taborder("11");_a.set_mask("##");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_managectPayTmlmt","absolute","387",null,"109","21",null,"29",this.div_work);_a.set_taborder("15");_a.set_mask("##");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_floorSe","absolute","359",null,"137","21",null,"3",this.div_work);_a.set_taborder("19");_a.set_mask("###");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_managectArrrgRt","absolute","616",null,"139","21",null,"29",this.div_work);_a.set_taborder("16");_a.set_mask("###.#");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_rntchrgArrrgRt","absolute","616",null,"139","21",null,"55",this.div_work);_a.set_taborder("12");_a.set_mask("###.#");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_cmnuseAr","absolute","616",null,"139","21",null,"81",this.div_work);_a.set_taborder("8");_a.set_mask("##########.###");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_pwrerNo","absolute","102",null,"153","21",null,"3",this.div_work);_a.set_taborder("18");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_gnrlManagect","absolute","102",null,"153","21",null,"29",this.div_work);_a.set_taborder("14");_a.set_mask("#,###,###,###,###");_a.set_limitbymask("both");_a.set_cssclass("msk_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gnrlManagect","absolute","0",null,"100","27",null,"26",this.div_work);_a.set_taborder("53");_a.set_text("일반관리비");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DATE00","absolute","498",null,"12","21",null,"55",this);_a.set_taborder("5");_a.set_text("일");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_DATE01","absolute","498",null,"12","21",null,"29",this);_a.set_taborder("6");_a.set_text("일");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_DATE02","absolute","359",null,"26","21",null,"55",this);_a.set_taborder("7");_a.set_text("매월");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_DATE03","absolute","359",null,"26","21",null,"29",this);_a.set_taborder("8");_a.set_text("매월");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_DATE04","absolute","498",null,"12","21",null,"3",this);_a.set_taborder("9");_a.set_text("층");_a.style.set_border("0 none #808080ff");_a.style.set_align("middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM090301");_b.set_titletext("임대계약관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.edt_rentCntrctNo","value","ds_rentCntrctList","RENT_CNTRCT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.cmb_lesseeNo","value","ds_rentCntrctList","LESSEE_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.cal_bgnDe","value","ds_rentCntrctList","CNTRCT_BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.cal_endDe","value","ds_rentCntrctList","CNTRCT_ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.edt_rentAr","value","ds_rentCntrctList","RENT_AR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_work.edt_rm","value","ds_rentCntrctList","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_work.edt_rntchrgSm","value","ds_rentCntrctList","RNTCHRG_SM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_work.edt_managectSm","value","ds_rentCntrctList","MANAGECT_SM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_work.cal_cntrctDe","value","ds_rentCntrctList","CNTRCT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_search.cal_bgnDe","value","ds_cond","BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_search.cal_endDe","value","ds_cond","END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_work.msk_MT_RNTCHRG","value","ds_rentCntrctList","MT_RNTCHRG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.msk_rentGtn","value","ds_rentCntrctList","RENT_GTN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_work.msk_dvrAr","value","ds_rentCntrctList","DVR_AR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_work.msk_rntchrgpayTmlmt","value","ds_rentCntrctList","RNTCHRG_PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_work.msk_managectPayTmlmt","value","ds_rentCntrctList","MANAGECT_PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_work.msk_floorSe","value","ds_rentCntrctList","FLOOR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_work.msk_managectArrrgRt","value","ds_rentCntrctList","MANAGECT_ARRRG_RT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_work.msk_rntchrgArrrgRt","value","ds_rentCntrctList","RNTCHRG_ARRRG_RT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_work.msk_cmnuseAr","value","ds_rentCntrctList","CMNUSE_AR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.edt_pwrerNo","value","ds_rentCntrctList","PWRER_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.msk_gnrlManagect","value","ds_rentCntrctList","GNRL_MANAGECT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM090301.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090301.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM090301.xfdl",function(){this.checkDs=[this.ds_rentCntrctList];this.saveRow= -1;this.HRM090301_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM090301_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_mvnCmpnySe","_HRM215","","D"],];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){var _a=this.gfn_today();var _b=this.dateUtils.addMonth(_a, -1,'s');this.ds_cond.setColumn(0,"END_DE",_a);this.ds_cond.setColumn(0,"BGN_DE",_b);this.fn_search();};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_rentCntrctList.clearData();this.fn_transaction("rentCntrctList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_rentCntrctList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_rentCntrctList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_rentCntrctList.rowposition;this.fn_transaction("rentCntrctCUD");}};this.fn_transaction=function(_a){switch(_a){case "rentCntrctList":var _b="/hsco/mis/hrm/HRM090301/rentCntrctList.do";var _c="input1=ds_cond";var _d="ds_rentCntrctList=output1";break;case "rentCntrctCUD":var _b="/hsco/mis/hrm/HRM090301/rentCntrctCUD.do";var _c="input1=ds_rentCntrctList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "rentCntrctList":if(this.saveRow> -1){this.ds_rentCntrctList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "rentCntrctCUD":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.div_work_grd_rentCntrctList_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};this.div_work_grd_rentCntrctList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}this.gfn_gridSort(_a,_b);};this.ds_rentCntrctList_onrowposchanged=function(_a,_b){var _c=this.ds_rentCntrctList.rowposition;var _d=this.ds_rentCntrctList.getRowType(_c);if(_d=='2'){this.div_work.edt_rentCntrctNo.set_readonly(false);}else{this.div_work.edt_rentCntrctNo.set_readonly(true);}};this.fn_insert=function(){var _a=this.ds_rentCntrctList.addRow();};this.fn_delete=function(){this.gfn_delMultiRow(this.ds_rentCntrctList);};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_rentCntrctList.reset();this.ds_rentCntrctList.applyChange();return;}};this.ds_rentCntrctList_oncolumnchanged=function(_a,_b){if(_b.columnid=="DVR_AR"||_b.columnid=="CMNUSE_AR"){var _c=_b.columnid=="DVR_AR"?_b.newvalue:_a.getColumn(_b.row,"DVR_AR");var _d=_b.columnid=="CMNUSE_AR"?_b.newvalue:_a.getColumn(_b.row,"CMNUSE_AR");var _e=(_c+_d);_a.setColumn(_b.row,"RENT_AR",_e);}};});this.on_initEvent=function(){this.ds_rentCntrctList.addEventHandler("onrowposchanged",this.ds_rentCntrctList_onrowposchanged,this);this.ds_rentCntrctList.addEventHandler("oncolumnchanged",this.ds_rentCntrctList_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM090301_oninit,this);this.addEventHandler("onload",this.HRM090301_onload,this);this.div_work.grd_rentCntrctList.addEventHandler("oncellclick",this.div_work_grd_rentCntrctList_oncellclick,this);this.div_work.grd_rentCntrctList.addEventHandler("onheadclick",this.div_work_grd_rentCntrctList_onheadclick,this);};this.loadIncludeScript("HRM090301.xfdl");};})();