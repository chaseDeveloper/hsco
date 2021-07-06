﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG040205");this.set_classname("BDG040205");this.set_titletext("지출결산보고서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_ExpndtrStacntReprt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_BUDGET_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORIBDGT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RVSPBGT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRTINT_YEAR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAUSE_ACTION_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAUSE_ACTION_INCMP_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEBT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DFFRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNPAY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CYFD_DEMAND_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CYFD_DCSN_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CYFD_BUDGET_EXPNDTR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORIBDGT_EXPNDTR_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년도</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"from\">BGNDE</Col><Col id=\"msgId\">조회종료일^조회시작일</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_KND\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_KND\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg029",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg030",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_KND\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_KND\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_print",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_KND\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_KND\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","59","1031","10",null,null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","69","188","19",null,null,this);_a.set_taborder("50");_a.set_text("지출결산보고서");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_excel_down","absolute",null,"69","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("120");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("130");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("조회년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BSNS_SE","absolute","218","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_BALC_SE","absolute","323","5","77","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("수/지구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_BALC_SE","absolute","400","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_bdg002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a.set_enable("false");_a=new Static("Static02","absolute","500","5","15",null,null,"5",this.div_search);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","323","31","38","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute","361","31","195","21",null,null,this.div_search);_a.set_taborder("7");_a.set_async("false");_a.set_enable("true");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","669","5","15",null,null,"5",this.div_search);_a.set_taborder("19");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","571","31","38","21",null,null,this.div_search);_a.set_taborder("20");_a.set_text("사업");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","609","31","70","21",null,null,this.div_search);_a.set_taborder("8");this.div_search.addChild(_a.name,_a);_a=new Button("searchBsns","absolute","658","31","21","21",null,null,this.div_search);_a.set_taborder("9");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","681","31","120","21",null,null,this.div_search);_a.set_taborder("10");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bsnsKnd","absolute","515","5","64","21",null,null,this.div_search);_a.set_taborder("21");_a.set_text("사업종류");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetKnd","absolute","685","5","64","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("예산종류");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_expndtrDe","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("23");_a.set_text("지출일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnde","absolute","79","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("Static03","absolute","179","31","13","21",null,null,this.div_search);_a.set_taborder("24");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endde","absolute","192","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Combo("cbo_budgetKnd","absolute","749","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("26");_a.set_innerdataset("@ds_bdg030");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("cbo_bsnsKnd","absolute","579","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("27");_a.set_innerdataset("ds_bdg029");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_DEPT_CODE00","absolute","817","33","71","21",null,null,this.div_search);_a.set_taborder("28");_a.set_text("지출계좌");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","556","28","15",null,null,"0",this.div_search);_a.set_taborder("29");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","308","0","15",null,null,"28",this.div_search);_a.set_taborder("31");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","308","24","15",null,null,"4",this.div_search);_a.set_taborder("32");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","801","28","15",null,null,"0",this.div_search);_a.set_taborder("33");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACNUTNO","absolute","882","31","145","21",null,null,this.div_search);_a.set_taborder("34");_a.set_readonly("false");this.div_search.addChild(_a.name,_a);_a=new Button("searchAcnutno","absolute","1005","31","21","21",null,null,this.div_search);_a.set_taborder("35");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","88","1031","5",null,null,this);_a.set_taborder("172");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_ExpndtrStacntReprt","absolute","0","93",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_ExpndtrStacntReprt");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_treeinitstatus("expand,null");_a.set_treeusecheckbox("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"예산과목\"/><Cell col=\"5\" rowspan=\"2\" text=\"사업\"/><Cell col=\"6\" rowspan=\"2\" text=\"부서\"/><Cell col=\"7\" colspan=\"6\" text=\"예　　산　　액\"/><Cell col=\"13\" rowspan=\"2\" text=\"지출원인&#13;&#10;행위액(B)\"/><Cell col=\"14\" rowspan=\"2\" text=\"지출원인행위&#13;&#10;미필액(B-C)\"/><Cell col=\"15\" rowspan=\"2\" text=\"결산액(C)&#13;&#10;(채무확정액)\"/><Cell col=\"16\" rowspan=\"2\" text=\"예산액대결산액&#13;&#10;차이(A-C)\"/><Cell col=\"17\" rowspan=\"2\" text=\"이월예산&#13;&#10;지출액\"/><Cell col=\"18\" rowspan=\"2\" text=\"본예산&#13;&#10;지출액\"/><Cell col=\"19\" rowspan=\"2\" text=\"지출액&#13;&#10;(D)\"/><Cell col=\"20\" rowspan=\"2\" text=\"미지급금 (C-D)\"/><Cell col=\"21\" colspan=\"2\" text=\"익년도 이월\"/><Cell col=\"23\" rowspan=\"2\" text=\"불용액(A-(C+E)\"/><Cell row=\"1\" text=\"관\"/><Cell row=\"1\" col=\"1\" text=\"항\"/><Cell row=\"1\" col=\"2\" text=\"세항\"/><Cell row=\"1\" col=\"3\" text=\"목\"/><Cell row=\"1\" col=\"4\" text=\"세목\"/><Cell row=\"1\" col=\"7\" text=\"이월예산\"/><Cell row=\"1\" col=\"8\" text=\"본예산(1)\"/><Cell row=\"1\" col=\"9\" text=\"추경예산(2)\"/><Cell row=\"1\" col=\"10\" text=\"전용증감(3)\"/><Cell row=\"1\" col=\"11\" text=\"당해년도계(1+2+3)\"/><Cell row=\"1\" col=\"12\" text=\"계(A)\"/><Cell row=\"1\" col=\"21\" text=\"이월요구액\"/><Cell row=\"1\" col=\"22\" text=\"이월확정액(E)\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:GWAN_NM\" tooltiptext=\"bind:GWAN_NM\"/><Cell col=\"1\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:HANG_NM\" tooltiptext=\"bind:HANG_NM\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:SEHANG_NM\" tooltiptext=\"bind:SEHANG_NM\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:MOK_NM\" tooltiptext=\"bind:MOK_NM\"/><Cell col=\"4\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:SEMOK_NM\" tooltiptext=\"bind:SEMOK_NM\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DETAIL_BSNS_NM2\"/><Cell col=\"6\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM2\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CYFD_BUDGET_AMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:ORIBDGT_AMT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:RVSPBGT_AMT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DVR_AMT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:PRTINT_YEAR_AM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:EXECUT_BUDGET_AM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CAUSE_ACTION_AMOUNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CAUSE_ACTION_INCMP_AMOUNT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DEBT_AMT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DFFRNC_AMOUNT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CYFD_BUDGET_EXPNDTR_AM\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:ORIBDGT_EXPNDTR_AM\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:UNPAY_AMOUNT\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CYFD_DEMAND_AM\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:CYFD_DCSN_AM\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;\" text=\"bind:DISUSE_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_print","absolute",null,"808","191","125","425",null,this);_a.set_taborder("173");_a.style.set_background("#ffffffff");_a.style.set_font("8 Gulim");_a.style.set_shadow("outer 5,5 10 gray");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","0","0",null,"26","0",null,this.div_print);_a.set_taborder("0");_a.set_text("인쇄 설정");_a.set_cssclass("sta_WF_PopupTitle");_a.style.set_font("bold 9 Gulim");this.div_print.addChild(_a.name,_a);_a=new Button("btn_destroy","absolute",null,"4","20","20","6",null,this.div_print);_a.set_taborder("4");_a.set_cssclass("btn_WF_PopupClose");this.div_print.addChild(_a.name,_a);_a=new Radio("rdo_print","absolute","40","37","113","51",null,null,this.div_print);this.div_print.addChild(_a.name,_a);var _b=new Dataset("rdo_print_innerdataset",this.div_print.rdo_print);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">합산</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">개별</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_direction("vertical");_a.set_value("1");_a.set_index("0");_a=new Button("btn_copy","absolute",null,"95","84","19","54",null,this.div_print);_a.set_taborder("6");_a.set_text("인    쇄");_a.set_cssclass("btn_WF_Process");this.div_print.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");_c.set_text("Div00");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",191,125,this.div_print,function(_c){_c.set_taborder("173");_c.style.set_background("#ffffffff");_c.style.set_font("8 Gulim");_c.style.set_shadow("outer 5,5 10 gray");_c.set_visible("false");});this.div_print.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("BDG040205");_c.set_titletext("지출결산보고서");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cbo_bsnsKnd","value","ds_cond","BSNS_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cbo_budgetKnd","value","ds_cond","BUDGET_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.cbo_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.rdo_BALC_SE","value","ds_cond","BALC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_BSNS_CODE","value","ds_cond","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.edt_BSNS_NM","value","ds_cond","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_bgnde","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_endde","value","ds_cond","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_print.rdo_print","value","ds_print","PRINT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.edt_ACNUTNO","value","ds_cond","ACNUTNO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("BDG040205.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG040205.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG040205.xfdl",function(){this.BDG040205_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.div_search.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.fn_init_dataset();this.div_print.set_visible(false);var _d=[["ds_bdg001","BDG001","Y","A","B"],["ds_bdg002","BDG002","Y","D","B"],["ds_bdg029","BDG029","Y","A","B"],["ds_bdg030","BDG030","Y","A","B"]];var _e=function(_f,_g,_h){var _i=this.comUtils.getClientDate("YYYY");var _j=this.comUtils.getClientDate("YYYYMMDD");this.ds_cond.setColumn(_c,"YEAR",_i);this.ds_cond.setColumn(_c,"BGNDE",_i+"0101");this.ds_cond.setColumn(_c,"ENDDE",_j);this.ds_cond.setColumn(_c,"BSNS_SE","1");this.ds_cond.setColumn(_c,"BALC_SE","2");this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_ExpndtrStacntReprt.clearData();this.div_print.set_visible(false);var _a=this.ds_cond.getColumn(0,"YEAR");var _b=nexacro.toNumber(_a,0);if(_b<2018){this.ds_cond.setColumn(0,"YEAR_SE","1");}else{this.ds_cond.setColumn(0,"YEAR_SE","2");}this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/bdg/BDG040205/ExpndtrStacntReprt.do";var _c="input1=ds_cond";var _d="ds_ExpndtrStacntReprt=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.div_search_searchBsns_onclick=function(_a,_b){var _c=this.div_search.spn_YEAR.value;var _d={arg_0:this,year:_c};this.gfn_popup("popBsns",500,465,"사업코드 선택",_d,"mis_acc::ACC000000_P04.xfdl","fn_popupCallBack",true);};this.div_search_searchAcnutno_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("btn_branchAcnut",563,500,"브런치계좌조회",_c,"mis_fun::FUN010103_P01.xfdl","fn_popupCallBack",true);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":var _d=this.ds_cond.getColumn(0,"DEPT_CODE");var _e=this.ds_cond.getColumn(0,"BSNS_CODE");if(this.comUtils.isNull(_e)){this.grd_ExpndtrStacntReprt.setFormatColProperty(5,"size",0);}else{this.grd_ExpndtrStacntReprt.setFormatColProperty(5,"size",200);}if(this.comUtils.isNull(_d)||_d=='000000'){this.grd_ExpndtrStacntReprt.setFormatColProperty(6,"size",0);}else{this.grd_ExpndtrStacntReprt.setFormatColProperty(6,"size",200);}break;default:break;}}};this.fn_popupCallBack=function(_a,_b){switch(_a){case "popBsns":if(_b!=null&&_b.length>0){var _c=new Dataset();_c.loadXML(_b);var _d=_c.getColumn(0,"BSNS_CODE");var _e=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(0,"BSNS_CODE",_d);this.ds_cond.setColumn(0,"BSNS_NM",_e);}break;case "btn_branchAcnut":if(_b!=null&&_b.length>0){var _c=new Dataset();_c.loadXML(_b);this.ds_cond.setColumn(0,"ACNUTNO",_c.getColumn(0,"ACNUTNO"));}break;}};this.btn_excel_down_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_ExpndtrStacntReprt,"exportExl");};this.div_search_edt_BSNS_CODE_onchanged=function(_a,_b){var _c=this.div_search.edt_BSNS_CODE.value;if(_c==null||_c==""){this.div_search.edt_BSNS_NM.set_value("");}};this.grd_oncelldblclick=function(_a,_b){var _c=this.ds_ExpndtrStacntReprt.rowposition;if(this.ds_ExpndtrStacntReprt.getColumn(_b.row,"LVL")!="5"){this.gfn_message("comm.항목.선택.요청","세목단위");return;}if(this.ds_ExpndtrStacntReprt.getColumn(_b.row,"DEBT_AMT")=="0"){this.gfn_message("info.처리불가","채무확정액이 존재하지 않습니다");return;}var _d={arg_0:this,trgFormId:"BDG040205",year:this.ds_cond2.getColumn(0,"YEAR"),bsnsSe:this.ds_cond2.getColumn(0,"BSNS_SE"),balcSe:this.ds_cond2.getColumn(0,"BALC_SE"),bgnde:this.ds_cond2.getColumn(0,"BGNDE"),endde:this.ds_cond2.getColumn(0,"ENDDE"),deptCode:this.ds_cond2.getColumn(0,"DEPT_CODE"),deptNm:this.ds_cond2.getColumn(0,"DEPT_NM"),bsnsCode:this.ds_cond2.getColumn(0,"BSNS_CODE"),bsnsNm:this.ds_cond2.getColumn(0,"BSNS_NM"),bsnsKnd:this.ds_cond2.getColumn(0,"BSNS_KND"),budgetKnd:this.ds_cond2.getColumn(0,"BUDGET_KND"),budgetAcntCode:this.ds_cond2.getColumn(0,"BUDGET_ACNT_CODE"),acnutno:this.ds_cond2.getColumn(0,"ACNUTNO")};this.gfn_popup("expPopup",1100,730,"결의서",_d,"mis_bdg::BDG040205_P01.xfdl","fn_popupCallBack",true);};this.ds_ExpndtrStacntReprt_onrowposchanged=function(_a,_b){if(_b.newrow> -1){this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.copyRow(0,this.ds_cond,0);this.ds_cond2.setColumn(0,"BUDGET_ACNT_CODE",_a.getColumn(_b.newrow,"BUDGET_ACNT_CODE"));}};this.fn_print=function(){this.div_print.set_top(10);this.div_print.set_right(40);this.div_print.set_visible(true);};this.div_pop_btn_destroy_onclick=function(_a,_b){this.div_print.set_visible(false);};this.btn_copy_onclick=function(_a,_b){var _c=this.ds_print.getColumn(0,"PRINT_SE");this.div_print.set_visible(false);if(_c=="1"){this.gfn_ReportPopup(this,"BDG/BDG040205.crf",this.ds_cond);}else{this.gfn_ReportPopup(this,"BDG/BDG040205_R01.crf",this.ds_cond);}};});this.on_initEvent=function(){this.ds_ExpndtrStacntReprt.addEventHandler("onrowposchanged",this.ds_ExpndtrStacntReprt_onrowposchanged,this);this.addEventHandler("onload",this.BDG040205_onload,this);this.sta_title01.addEventHandler("onclick",this.sta_title01_onclick,this);this.btn_excel_down.addEventHandler("onclick",this.btn_excel_down_onclick,this);this.div_search.edt_BSNS_CODE.addEventHandler("onchanged",this.div_search_edt_BSNS_CODE_onchanged,this);this.div_search.searchBsns.addEventHandler("onclick",this.div_search_searchBsns_onclick,this);this.div_search.searchAcnutno.addEventHandler("onclick",this.div_search_searchAcnutno_onclick,this);this.Static51.addEventHandler("onclick",this.Static51_onclick,this);this.grd_ExpndtrStacntReprt.addEventHandler("oncloseup",this.grd_accNutStacnt_oncloseup,this);this.grd_ExpndtrStacntReprt.addEventHandler("onexpanddown",this.grd_accNutStacnt_onexpanddown,this);this.grd_ExpndtrStacntReprt.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);this.div_print.sta_title.addEventHandler("onmousemove",this.div_pop_sta_title_onmousemove,this);this.div_print.sta_title.addEventHandler("onlbuttondown",this.div_pop_sta_title_onlbuttondown,this);this.div_print.sta_title.addEventHandler("onclick",this.div_print_sta_title_onclick,this);this.div_print.btn_destroy.addEventHandler("onclick",this.div_pop_btn_destroy_onclick,this);this.div_print.rdo_print.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.div_print.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);};this.loadIncludeScript("BDG040205.xfdl");this.loadPreloadList();};})();