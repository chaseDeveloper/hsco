﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR020100_P02");this.set_classname("CTR020100_P02");this.set_titletext("계약의뢰선택");this._setFormPosition(0,0,1024,500);}_a=new Dataset("ds_cntrctReqest",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_SN\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_MTH_SE\" type=\"STRING\" size=\"256\"/><Column id=\"COPERTN_OUTSRC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRVCNTR_ENTRPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRVCNTR_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr022",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr023",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr049",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr030",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQEST_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"REQEST_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DETAIL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"SEARCH_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"REQEST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctReqestCopy",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"REQEST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_SN\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQEST_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_MTH_SE\" type=\"STRING\" size=\"256\"/><Column id=\"COPERTN_OUTSRC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRVCNTR_ENTRPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRVCNTR_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_com052",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_searchSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">의뢰번호</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">의뢰명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"0","0",this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","121",null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","179","21",null,null,this);_a.set_taborder("9");_a.set_text("계약의뢰선택");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"57","15",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("의뢰년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","155","0","15","27",null,null,this.div_search);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR00","absolute","170","5","64","21",null,null,this.div_search);_a.set_taborder("15");_a.set_text("의뢰구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_searchCnd","absolute","234","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_ctr022");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("10 Gulim");_a=new Static("Static05","absolute","324","0","15","27",null,null,this.div_search);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR01","absolute","339","5","64","21",null,null,this.div_search);_a.set_taborder("17");_a.set_text("상세구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_searchCnd00","absolute","403","5","179","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_ctr023");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("10 Gulim");_a=new Static("sta_YEAR02","absolute","597","5","64","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("검색항목");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","582","0","15","27",null,null,this.div_search);_a.set_taborder("19");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("20");_a.set_text("의뢰부서");_a.set_cssclass("sta_WFSA_Label");_a.set_wordwrap("char");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","79","31","195","21",null,null,this.div_search);_a.set_taborder("6");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","281","26","15",null,null,"0",this.div_search);_a.set_taborder("22");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","296","31","38","21",null,null,this.div_search);_a.set_taborder("23");_a.set_text("사업");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","334","31","91","21",null,null,this.div_search);_a.set_taborder("8");this.div_search.addChild(_a.name,_a);_a=new Button("btn_searchBsns","absolute","406","31","21","21",null,null,this.div_search);_a.set_taborder("9");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","427","31","155","21",null,null,this.div_search);_a.set_taborder("10");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","582","26","15",null,null,"0",this.div_search);_a.set_taborder("25");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT00","absolute","597","31","64","21",null,null,this.div_search);_a.set_taborder("26");_a.set_text("승인여부");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_searchCnd01","absolute","661","31","92","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("11");_a.set_innerdataset("@ds_com052");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("10 Gulim");_a=new Spin("div_YEAR","absolute","79","5","76","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_SRCH_DS","absolute","661","5","92","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("@ds_searchSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Edit("edt_SRCH_NM","absolute","755","5","236","21",null,null,this.div_search);_a.set_taborder("5");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","15","102",null,"10","55",null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40",null,"5","0",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_cntrct","absolute","15","112",null,null,"15","15",this);_a.set_taborder("5");_a.set_binddataset("ds_cntrctReqest");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"승인여부\"/><Cell col=\"1\" text=\"의뢰년도\"/><Cell col=\"2\" text=\"의뢰번호\"/><Cell col=\"3\" text=\"의뢰명\"/><Cell col=\"4\" style=\"color: ;\" text=\"의뢰구분\"/><Cell col=\"5\" text=\"의뢰일\"/><Cell col=\"6\" colspan=\"2\" text=\"의뢰부서\"/><Cell col=\"8\" colspan=\"2\" text=\"담당자\"/><Cell col=\"10\" colspan=\"2\" text=\"사업코드\"/><Cell col=\"12\" text=\"금액\"/><Cell col=\"13\" text=\"공급가액\"/><Cell col=\"14\" text=\"부가세액\"/><Cell col=\"15\" style=\"color: ;\" text=\"공동도급구분\"/><Cell col=\"16\" text=\"착공일자\"/><Cell col=\"17\" text=\"준공일자\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: ;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:CONFM_AT\" combodataset=\"ds_com052\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_YEAR\"/><Cell col=\"2\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_NO\" mask=\"####-#-#####\"/><Cell col=\"3\" style=\"align:left middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_NM\" tooltiptext=\"bind:REQEST_NM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_SE\" combodataset=\"ds_ctr022\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"date\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_DEPT_CODE\"/><Cell col=\"7\" style=\"align:left middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_DEPT_NM\"/><Cell col=\"8\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:CLIENT_EMPNO\"/><Cell col=\"9\" style=\"align:left middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:CLIENT_EMPNM\"/><Cell col=\"10\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:BSNS_CODE\"/><Cell col=\"11\" style=\"align:left middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:BSNS_NM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:REQEST_AMOUNT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:SUPLY_AMOUNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:VAT_AM\"/><Cell col=\"15\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:COPERTN_OUTSRC_SE\"/><Cell col=\"16\" displaytype=\"date\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:STRWRK_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" displaytype=\"date\" style=\"color:EXPR(comp.parent.fn_getTextColor(currow));color2:EXPR(comp.parent.fn_getTextColor(currow));selectcolor:EXPR(comp.parent.fn_getTextColor(currow));\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","128","18","232","19",null,null,this);_a.set_taborder("13");_a.set_text("(저장된 계약의뢰를 선택합니다)");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",0,57,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1024,500,this,function(_b){_b.set_classname("CTR020100_P02");_b.set_titletext("계약의뢰선택");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.cmb_searchCnd","value","ds_cond","REQEST_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_searchCnd00","value","ds_cond","DETAIL_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_BSNS_CODE","value","ds_cond","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_BSNS_NM","value","ds_cond","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.cmb_searchCnd01","value","ds_cond","CONFM_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.div_YEAR","value","ds_cond","REQEST_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_SRCH_DS","value","ds_cond","SEARCH_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.edt_SRCH_NM","value","ds_cond","SEARCH_VAL");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("CTR020100_P02.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR020100_P02.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR020100_P02.xfdl",function(){this.chargerAt=false;this.CTR020100_P02_oninit=function(_a,_b){};this.CTR020100_P02_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_dept.fn_setBind("ds_cond","REQEST_DEPT_CODE","REQEST_DEPT_NM");this.ds_cond.clearData();var _a=this.ds_cond.addRow();var _b=[["ds_ctr022","CTR022","Y","A","B"],["ds_ctr023","CTR023","Y","A","B"],["ds_ctr049","CTR049","Y","A","B"],["ds_ctr030","CTR030","Y","A","B"],["ds_com052","COM052","Y","A","B"]];var _c=function(_d,_e,_f){var _g=this.dateUtils.format(this.gfn_today(),"yyyy");if(_g=='2017'){_g='2018';}this.ds_cond.setColumn(_a,"REQEST_YEAR",_g);this.ds_cond.setColumn(_a,"SEARCH_SE",'0');if(this.gfn_authGrpId("CTR_ADMIN")!= -1){this.chargerAt=true;}if(this.chargerAt){this.div_search.div_dept.set_enable(true);this.ds_cond.setColumn(_a,"REQEST_DEPT_CODE","000000");this.ds_cond.setColumn(_a,"REQEST_DEPT_NM","화성도시공사");}else{this.ds_cond.setColumn(_a,"REQEST_DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_a,"REQEST_DEPT_NM",this.gfn_getDeptName());}this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_cntrctReqest.clearData();this.fn_transaction("selectCntrctReqestList");};this.fn_transaction=function(_a){switch(_a){case "selectCntrctReqestList":var _b="/hsco/mis/ctr/CTR020100/selectCntrctReqestList.do";var _c="input1=ds_cond";var _d="ds_cntrctReqest=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectCntrctReqestList":break;}}};this.fn_popupCallBack=function(_a,_b){var _c=new Dataset();var _d=_c.loadXML(_b);if(!_d){return false;}var _e=this.ds_cond.rowposition;switch(_a){case "btn_bsnsPopup":this.ds_cond.setColumn(_e,"BSNS_NM",_c.getColumn(0,"BSNS_NM"));this.ds_cond.setColumn(_e,"BSNS_CODE",_c.getColumn(0,"BSNS_CODE"));break;}};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){this.ds_cntrctReqestCopy.clearData();var _c=this.ds_cntrctReqestCopy.addRow();var _d;_d=this.ds_cntrctReqestCopy.copyRow(_c,this.ds_cntrctReqest,this.ds_cntrctReqest.rowposition);this.close(this.ds_cntrctReqestCopy.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};this.grd_cntrct_oncelldblclick=function(_a,_b){this.ds_cntrctReqestCopy.clearData();var _c=this.ds_cntrctReqestCopy.addRow();var _d;_d=this.ds_cntrctReqestCopy.copyRow(_c,this.ds_cntrctReqest,this.ds_cntrctReqest.rowposition);this.close(this.ds_cntrctReqestCopy.saveXML());};this.div_search_btn_searchBsns_onclick=function(_a,_b){this.gfn_popup("btn_bsnsPopup",500,465,"",null,"mis_acc::ACC000000_P04.xfdl","fn_popupCallBack",true);};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="REQEST_SE"){if(_b.newvalue==""){this.ds_ctr023.filter("");}if(_b.newvalue=="1"){this.ds_ctr023.filter("CODE > 99 && CODE < 200 || CODE == ''");}else if(_b.newvalue=="2"){this.ds_ctr023.filter("CODE > 199 && CODE < 300 || CODE == ''");}else if(_b.newvalue=="3"){this.ds_ctr023.filter("CODE > 299 && CODE < 400 || CODE == ''");}this.ds_cond.setColumn(0,"DETAIL_SE","");}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("oninit",this.CTR020100_P02_oninit,this);this.addEventHandler("onload",this.CTR020100_P02_onload,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_search.sta_YEAR.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.div_search.sta_YEAR00.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.div_search.sta_YEAR01.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.div_search.cmb_searchCnd00.addEventHandler("onitemchanged",this.div_search_cmb_EMPL_SE_onitemchanged,this);this.div_search.sta_YEAR02.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.div_search.edt_BSNS_CODE.addEventHandler("onchanged",this.div_search_edt_BSNS_CODE_onchanged,this);this.div_search.btn_searchBsns.addEventHandler("onclick",this.div_search_btn_searchBsns_onclick,this);this.div_search.cmb_searchCnd01.addEventHandler("onitemchanged",this.div_search_cmb_EMPL_SE_onitemchanged,this);this.grd_cntrct.addEventHandler("oncelldblclick",this.grd_cntrct_oncelldblclick,this);};this.loadIncludeScript("CTR020100_P02.xfdl");this.loadPreloadList();};})();