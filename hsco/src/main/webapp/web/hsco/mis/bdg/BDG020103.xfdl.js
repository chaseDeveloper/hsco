﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG020103");this.set_classname("BDG020103");this.set_titletext("예비비관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"SE\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SE\" type=\"STRING\" size=\"1\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mvmnBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SE\" type=\"STRING\" size=\"3\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DSCN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"MVMN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"MVMN_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MVMN_PRVONSH\" type=\"STRING\" size=\"400\"/><Column id=\"MVMN_BUDGET_DEPT\" type=\"STRING\" size=\"6\"/><Column id=\"MVMN_BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"MVMN_BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"MVMN_DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"MVMN_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"MVMN_EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"MVMN_BUDGET_CRNTAM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MVMN_EXCUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MVMN_BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MVMN_DEMAND_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROVD_BUDGET_DEPT\" type=\"STRING\" size=\"6\"/><Column id=\"PROVD_BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"PROVD_BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"PROVD_DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"PROVD_ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"PROVD_EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"PROVD_BUDGET_CRNTAM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROVD_EXCUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROVD_BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PROVD_DEMAND_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mvmnDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SE\" type=\"STRING\" size=\"1\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MVMN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_DEPT\" type=\"STRING\" size=\"6\"/><Column id=\"BUDGET_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DETAIL_BSNS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DETAIL_BSNS_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"ACNT_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"EXPNDTR_UNIT_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BUDGET_CRNTAM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXCUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEMAND_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_deptCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DEPT_LEVEL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BEFORE_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BPLC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"USE_BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"USE_ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTPT_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sanc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">예산년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BSNS_SE</Col><Col id=\"msgId\">사업구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"msgId\">부서코드</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DEPT_NM</Col><Col id=\"msgId\">부서명</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_com022",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg025",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dscnData",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Grid("grd_mvmnDetail","absolute","0","431",null,null,"28","0",this);_a.set_taborder("9");_a.set_binddataset("ds_mvmnDetail");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"예산부서코드/명\"/><Cell col=\"2\" text=\"세부사업코드/명\"/><Cell col=\"3\" text=\"계정코드\"/><Cell col=\"4\" text=\"부기코드\"/><Cell col=\"5\" text=\"예산현액\"/><Cell col=\"6\" text=\"집행액\"/><Cell col=\"7\" text=\"예산잔액\"/><Cell col=\"8\" text=\"이동액\"/></Band><Band id=\"body\"><Cell text=\"expr:MVMN_AT == '0' ? '제공' : '이동'\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:DEPT_CODE_NM\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:DETAIL_BSNS_CODE_NM\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:ACNT_CODE_NM\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:EXPNDTR_UNIT_CODE_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BUDGET_CRNTAM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:EXCUT_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BUDGET_BLCE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DEMAND_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","428","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BSNS_SE","absolute","492","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("8");_a.set_innerdataset("@ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static36","absolute","488","0","38","5",null,null,this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","488",null,"38","5",null,"0",this.div_search);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","413","5","15",null,null,"5",this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("신청부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT_CODE","absolute","218","5","195","21",null,null,this.div_search);_a.set_taborder("5");_a.set_async("false");_a.set_enable("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_max("9999");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","592","5","15",null,null,"5",this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_SE","absolute","607","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("변경구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_SE","absolute","671","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("13");_a.set_innerdataset("ds_bdg025");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("false");_a=new Static("sta_mvmnBudget","absolute","0","43","120","19",null,null,this);_a.set_taborder("3");_a.set_text("예비비신청 리스트");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","33",null,"10","28",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","62",null,"5","28",null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_executBudget","absolute",null,"6","105","21","28",null,this);_a.set_taborder("1");_a.set_text("예비비요청확정");_a.set_cssclass("btn_WF_Process");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","397",null,"10","28",null,this);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_mvmnDetail","absolute","0","407","120","19",null,null,this);_a.set_taborder("7");_a.set_text("상세내용 리스트");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","426",null,"5","28",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("11");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","133","43","512","19",null,null,this);_a.set_taborder("12");_a.set_text("(신청건의 수정은 결재상태가 기안되기 이전과 승인되지 않았을 경우만 가능합니다.)");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute",null,"43","309","19","28",null,this);_a.set_taborder("13");_a.set_text("(예비비요청확정시, 승인된 건이 자동 반영됩니다.)");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("right middle");_a.style.set_font("bold 9 Gulim");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute",null,"408","81","19","28",null,this);_a.set_taborder("14");_a.set_text("(단위 : 원)");_a.style.set_padding("0 0 0 0");_a.style.set_align("right middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Grid("grd_mvmnBudget","absolute","0","67",null,"330","28",null,this);_a.set_taborder("15");_a.set_binddataset("ds_mvmnBudget");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"수정\"/><Cell col=\"2\" rowspan=\"2\" text=\"승인여부\"/><Cell col=\"3\" rowspan=\"2\" text=\"예비비신청일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"예비비신청금액\"/><Cell col=\"5\" rowspan=\"2\" text=\"예비비신청사유\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"expr:DSCN_AT=='1'||DRFT_STS=='1'||DRFT_STS=='9'?'none':'button'\" edittype=\"expr:DSCN_AT=='1'||DRFT_STS=='1'||DRFT_STS=='9'?'none':'button'\" text=\"expr:DSCN_AT=='1'?'':'수정'\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DSCN_AT\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:MVMN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:MVMN_AM\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" style=\"align:left middle;padding:0 5 0 5;\" text=\"bind:MVMN_PRVONSH\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG020103");_b.set_titletext("예비비관리");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.cbo_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cbo_SE","value","ds_cond","SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("BDG020103.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG020103.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG020103.xfdl",function(){this.chargerAt=false;this.BDG020103_oninit=function(_a,_b){};this.BDG020103_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_DEPT_CODE.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"YEAR",this.comUtils.getClientDate("YYYY"));if(this.gfn_authGrpId("BDG_ADMIN")!= -1){this.chargerAt=true;}if(this.chargerAt){this.div_search.div_DEPT_CODE.set_enable(true);this.ds_cond.setColumn(_a,"DEPT_CODE","000000");this.ds_cond.setColumn(_a,"DEPT_NM","화성도시공사");this.btn_executBudget.set_visible(true);this.sta_title00.set_visible(true);}else{this.ds_cond.setColumn(_a,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_a,"DEPT_NM",this.gfn_getDeptName());}var _b=[["ds_bdg001","BDG001","Y","D","B"],["ds_bdg025","BDG025","Y","D","B"],["ds_com022","COM022","Y","D","B"]];var _c=function(_d,_e,_f){this.ds_bdg025.filter("CODE == '0'");this.ds_cond.setColumn(_a,"BSNS_SE","1");this.ds_cond.setColumn(_a,"SE","0");this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.ds_mvmnBudget.clearData();this.ds_mvmnDetail.clearData();var _c=this.ds_cond.getColumn(0,"YEAR");this.ds_dscnData.clearData();this.ds_dscnData.addRow();this.ds_dscnData.setColumn(0,"YEAR",_c);this.fn_transaction("selectMvmnBudget");};this.fn_search_sub=function(){this.ds_mvmnDetail.clearData();this.fn_transaction("selectMvmnDetail");};this.fn_transaction=function(_a){switch(_a){case "selectMvmnBudget":var _b="/hsco/mis/bdg/BDG020103/selectMvmnBudget.do";var _c="input1=ds_cond";var _d="ds_mvmnBudget=output1";break;case "selectMvmnDetail":var _e=this.ds_mvmnBudget.rowposition;var _f=this.ds_mvmnBudget.getColumn(_e,"YEAR");var _g=this.ds_mvmnBudget.getColumn(_e,"SE");var _h=this.ds_mvmnBudget.getColumn(_e,"SN");this.ds_condSub.clearData();var _i=this.ds_condSub.addRow();this.ds_condSub.setColumn(_i,"YEAR",_f);this.ds_condSub.setColumn(_i,"SE",_g);this.ds_condSub.setColumn(_i,"SN",_h);var _b="/hsco/mis/bdg/BDG020103/selectMvmnDetail.do";var _c="input1=ds_condSub";var _d="ds_mvmnDetail=output1";break;case "saveExecutBudget":var _b="/hsco/mis/bdg/BDG020103/saveExecutBudget.do";var _c="input1=ds_mvmnBudget:U input2=ds_cond";var _d="";break;case "saveMvmnMaster":var _b="/hsco/mis/bdg/BDG020103/saveMvmnMaster.do";var _c="input1=ds_mvmnBudget:U input2=ds_cond";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectMvmnBudget":break;case "selectMvmnDetail":break;case "saveExecutBudget":this.fn_search();break;case "saveMvmnMaster":this.fn_search();break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="BDG020103_P01"){this.fn_search();}};this.ds_mvmnBudget_cancolumnchange=function(_a,_b){if(_b.columnid=="DSCN_AT"){if(!this.chargerAt){this.gfn_message("fail.수정.불가","'예산담당자'가 아니므로 승인여부를");_a.set_updatecontrol(false);_a.setColumn(_b.row,_b.columnid,_b.oldvalue);_a.set_updatecontrol(true);return false;}}};this.ds_mvmnBudget_onrowposchanged=function(_a,_b){if(_b.newrow> -1){this.fn_search_sub();}};this.btn_executBudget_onclick=function(_a,_b){if(!this.chargerAt){this.gfn_message("fail.실행.불가","'예산담당자'가 아니므로 예비비요청확정을");return;}if(this.ds_mvmnBudget.getRowCount()==0){this.gfn_message("info.확인.진행가능","확정할 요청이 존재함을 ");return false;}var _c="현재 승인여부가 승인된 예비비요청을 실행예산에 반영하시겠습니까?";if(confirm(_c)){this.fn_transaction("saveExecutBudget");}};this.fn_insert=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}var _a={arg_0:this,year:this.ds_cond.getColumn(0,"YEAR"),bsnsSe:this.ds_cond.getColumn(0,"BSNS_SE"),deptCode:this.ds_cond.getColumn(0,"DEPT_CODE"),deptNm:this.ds_cond.getColumn(0,"DEPT_NM"),se:this.ds_cond.getColumn(0,"SE")};this.gfn_popup("BDG020103_P01",800,530,"",_a,"mis_bdg::BDG020103_P01.xfdl","fn_popupCallBack",true);};this.fn_delete=function(){var _a=this.ds_mvmnBudget.rowposition;var _b=this.ds_mvmnBudget.getOrgColumn(_a,"DSCN_AT");if(_b=='1'){this.gfn_message("fail.삭제.실패","승인된 건이므로 ");return false;}if(this.gfn_message("confirm.삭제여부")){this.ds_mvmnBudget.deleteRow(_a);this.fn_transaction("saveMvmnMaster");}};this.fn_sanction=function(){};this.grd_mvmnBudget_oncellclick=function(_a,_b){var _c=_a.getCurEditType();if(_c=="button"&&_b.col=='1'){var _d=this.ds_mvmnBudget.rowposition;var _e=this.ds_mvmnBudget.getOrgColumn(_d,"DSCN_AT");if(_e=='1'){this.gfn_message("fail.수정.불가","승인된 건이므로");return false;}var _f={arg_0:this,year:this.ds_cond.getColumn(0,"YEAR"),bsnsSe:this.ds_cond.getColumn(0,"BSNS_SE"),deptCode:this.ds_cond.getColumn(0,"DEPT_CODE"),deptNm:this.ds_cond.getColumn(0,"DEPT_NM"),mvmnYear:this.ds_mvmnBudget.getColumn(_d,"YEAR"),mvmnSe:this.ds_mvmnBudget.getColumn(_d,"SE"),mvmnSn:this.ds_mvmnBudget.getColumn(_d,"SN")};this.gfn_popup("BDG020103_P01",800,530,"예산예비비등록",_f,"mis_bdg::BDG020103_P01.xfdl","fn_popupCallBack",true);}};});this.on_initEvent=function(){this.ds_mvmnBudget.addEventHandler("onrowposchanged",this.ds_mvmnBudget_onrowposchanged,this);this.ds_mvmnBudget.addEventHandler("cancolumnchange",this.ds_mvmnBudget_cancolumnchange,this);this.addEventHandler("onload",this.BDG020103_onload,this);this.addEventHandler("oninit",this.BDG020103_oninit,this);this.btn_executBudget.addEventHandler("onclick",this.btn_executBudget_onclick,this);this.grd_mvmnBudget.addEventHandler("oncellclick",this.grd_mvmnBudget_oncellclick,this);};this.loadIncludeScript("BDG020103.xfdl");this.loadPreloadList();};})();