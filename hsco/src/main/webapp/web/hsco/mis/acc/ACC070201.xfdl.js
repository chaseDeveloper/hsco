﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020203");this.set_classname("UI_ACC020203");this.set_titletext("대행사업 수입결의서관리");this._setFormPosition(0,0,1198,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BPLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SANC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_incDsn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ATMC_JRNLZ_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ANACT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITNC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NHT_PBLICTE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"INC_BUDGET_ARNG_RGIST\" type=\"STRING\" size=\"256\"/><Column id=\"NHT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY1\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY2\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준일자</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DT</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준일자</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_com022",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0%","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","31","77","21",null,null,this.div_SEARCH);_a.set_taborder("34");_a.set_text("결의서구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo02","absolute","97","31","218","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("4");_a.set_displayrowcount("20");_a.set_innerdataset("@ds_acc001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Calendar("Calendar00","absolute","97","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","199","5","14","21",null,null,this.div_SEARCH);_a.set_taborder("39");_a.set_text("~");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","215","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_EMPL_SE03","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("41");_a.set_text("발의일자");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15","85",null,null,this.div_SEARCH);_a.set_taborder("55");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE02","absolute","607","5","35","21",null,null,this.div_SEARCH);_a.set_taborder("61");_a.set_text("적요");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","648","5","218","21",null,null,this.div_SEARCH);_a.set_taborder("63");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","341","5","38","21",null,null,this.div_SEARCH);_a.set_taborder("64");_a.set_text("부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute","384","5","195","21",null,null,this.div_SEARCH);_a.set_taborder("65");_a.set_async("false");_a.set_enable("false");_a.set_url("com::deptCode.xfdl");this.div_SEARCH.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","85",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_incDsn");_a.set_autosizingtype("row");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_extendsizetype("row");_a.style.set_cursor("hand");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"79\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"306\"/><Column size=\"120\"/><Column size=\"105\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"결재상태\"/><Cell col=\"2\" text=\"발의일자\"/><Cell col=\"3\" text=\"수입예산&#13;&#10;정리부등기\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"연도\"/><Cell col=\"6\" text=\"결의번호\"/><Cell col=\"7\" text=\"결의구분\"/><Cell col=\"8\" text=\"적요\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"납입자\"/><Cell col=\"11\" text=\"고지서&#13;&#10;번호\"/><Cell col=\"12\" text=\"계정구분\"/><Cell col=\"13\" text=\"계정과목\"/><Cell col=\"14\" text=\"계정과목명\"/><Cell col=\"15\" text=\"부기코드\"/><Cell col=\"16\" text=\"부기명\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"image\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);controlborder:1 none #808080ff ;\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND)\" suppress=\"0\"/><Cell col=\"2\" displaytype=\"date\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:ITNC_DE\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:INC_BUDGET_ARNG_RGIST\" suppress=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DECSN_YEAR\" suppress=\"0\"/><Cell col=\"6\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DECSN_NO\" suppress=\"0\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:ANACT_KND\" combodataset=\"ds_acc001\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" style=\"align:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;right&quot; : &quot;left&quot;);background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:SUMRY1\" wordwrap=\"char\" suppress=\"0\" autosizerow=\"limitmin\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DECSN_AMOUNT\" suppress=\"0\"/><Cell col=\"10\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BCNC_NM\" wordwrap=\"char\" suppress=\"0\" autosizerow=\"limitmin\"/><Cell col=\"11\" style=\"align:right;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:NHT_NO\" suppress=\"0\"/><Cell col=\"12\" displaytype=\"combo\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BSNS_SE\" suppress=\"0\" combodataset=\"ds_bdg001\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BUDGET_ACNT_CODE\" suppress=\"0\"/><Cell col=\"14\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BUDGET_ACNT_NM\" wordwrap=\"char\" suppress=\"0\" autosizerow=\"limitmin\"/><Cell col=\"15\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:EXPNDTR_UNIT_CODE\" suppress=\"0\"/><Cell col=\"16\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:EXPNDTR_UNIT_NM\" wordwrap=\"char\" suppress=\"0\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","66",null,"19","873",null,this);_a.set_taborder("15");_a.set_text("대행사업 수입결의서");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","80",null,"5","27",null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1171","0","15","735",null,null,this);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("18");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0%","59",null,"10","2.64%",null,this);_a.set_taborder("19");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1198,735,this,function(_b){_b.set_classname("UI_ACC020203");_b.set_titletext("대행사업 수입결의서관리");});this.addLayout(_a.name,_a);_a=new BindItem("item13","Div01.Edit04","value","DS_CPR_CARD_MANAGE","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Div01.Edit05","value","DS_CPR_CARD_MANAGE","DEPT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","Div01.Edit02","value","DS_CPR_CARD_MANAGE","EMPNO_2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","Div01.Edit03","value","DS_CPR_CARD_MANAGE","EMPNM_2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","Div01.Edit08","value","DS_CPR_CARD_MANAGE","EMPNO_3");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","Div01.Edit09","value","DS_CPR_CARD_MANAGE","EMPNM_3");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","Div01.Edit10","value","DS_CPR_CARD_MANAGE","CHANGE_SUMRY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Div01.CheckBox00","value","DS_CPR_CARD_MANAGE","CNRS_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_SEARCH.Combo02","value","ds_cond","ANACT_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Edit01","value","ds_cond","SRCH_TXT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("ACC070201.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC070201.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC070201.xfdl",function(){this.arrStrUrl={"21":"mis_acc::ACC070101_P01.xfdl","22":"mis_acc::ACC070101_P02.xfdl"};this.currow=0;this.scrollpos=0;this.ACC070201_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();if(this.gfn_authGrpId("DEV_GRP")!= -1){this.chargerAt=true;}if(this.chargerAt){this.div_SEARCH.div_srchDept.set_enable(true);}var _c=[["ds_acc001","ACC001","Y","S","B"],["ds_bdg001","BDG001","Y","D","B"],["ds_com022","COM022","Y","D","B"]];var _d=function(_e,_f,_g){this.div_SEARCH.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.ds_cond.setColumn(0,"PROCESS_SE",2);this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"BPLC_SE","");this.ds_cond.setColumn(0,"SRCH_ST_DE",String(_a).substr(0,4)+"0101");this.ds_cond.setColumn(0,"SRCH_ED_DE",_a);this.ds_cond.setColumn(0,"ANACT_KND","3");this.ds_cond.setColumn(0,"STDR_DE","3");this.ds_cond.setColumn(0,"SRCH_COND","1");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("SRCH");};this.fn_save=function(){this.fn_transaction("SAVE");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC070201/incDsnList.do";var _c="input1=ds_cond";var _d="ds_incDsn=output1";break;case "SAVE":var _b="hsco/mis/acc/ACC070201/incDsnD.do";var _c="input1=ds_incDsn:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;case "SAVE":break;default:break;}}};this.fn_insert=function(){var _a=this.ds_cond.getColumn(0,"ANACT_KND");if(this.comUtils.isNull(_a)){this.gfn_message("comm.항목.선택.요청","결의서구분");return;}var _b={arg_0:this,trgFormId:"ACC070201",trgFormId2:"MIS",anactKnd:this.ds_cond.getColumn(0,"ANACT_KND"),decsnYear:this.ds_cond.getColumn(0,"SRCH_ST_DE").substr(0,4),decsnNo:""};this.gfn_popup("expDsnPopup",903,842,"결의서",_b,this.arrStrUrl[_b.anactKnd],"fn_popupCallBack",true);};this.fn_delete=function(){if(this.ds_incDsn.rowposition> -1){if(this.gfn_message("confirm.삭제여부")){this.ds_incDsn.deleteRow(this.ds_incDsn.rowposition);}}};this.fn_cancel=function(){if(this.comUtils.isDatasetUpdated(this.ds_incDsn)){if(this.gfn_message("confirm.취소여부")){this.ds_incDsn.reset();this.ds_incDsn.applyChange();}}};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","지출결의서");_a.setSaveFilename("지출결의서");_a.clearLocalDs();_a.setGrid(this.grd);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"지출결의서",_b,"common::frmReportPopup.xfdl","");};this.fn_popup_onclick=function(_a,_b){switch(_a.name){case "btn_bsnsPopup":this.gfn_popup("btn_bsnsPopup",500,500,"사업지구","","pms_prj::popBsns.xfdl","fn_popupCallBack",true);break;case "btn_prmpcPopup":this.gfn_popup("btn_prmpcPopup",500,500,"원가항목",{year:this.ds_cond.getColumn(0,"SRCH_ST_DT").substr(0,4)},"mis_acc::ACC000000_P02.xfdl","fn_popupCallBack",true);break;}};this.grd_oncelldblclick=function(_a,_b){if(this.ds_incDsn.getRowType(this.ds_incDsn.rowposition)==Dataset.ROWTYPE_GROUP){return;}var _c=this.ds_incDsn.getColumn(_b.row,"ANACT_KND");var _d={arg_0:this,trgFormId:"ACC070201",decsnYear:this.ds_incDsn.getColumn(_b.row,"DECSN_YEAR"),decsnNo:this.ds_incDsn.getColumn(_b.row,"DECSN_NO")};this.gfn_popup("incDsnPopup",903,842,"대행사업 수입결의",_d,this.arrStrUrl[_c],"fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){switch(_a){case "incDsnPopup":if(_b=="I"||_b=="U"){this.fn_search();}break;case "btn_bsnsPopup":if(_b!=null&&_b.length>0){var _c=new Dataset();_c.loadXML(_b);this.ds_cond.setColumn(0,"BSNS_CODE",_c.getColumn(0,"BSNS_CODE"));this.ds_cond.setColumn(0,"BSNS_NM",_c.getColumn(0,"BSNS_NM"));}break;case "btn_prmpcPopup":if(_b!=null&&_b.length>0){var _c=new Dataset();_c.loadXML(_b);this.ds_cond.setColumn(0,"PRMPC_CODE",_c.getColumn(0,"ACCNUT_ACNT_CODE"));this.ds_cond.setColumn(0,"PRMPC_NM",_c.getColumn(0,"ACCNUT_ACNT_NM"));}break;}};this.div_SEARCH_edt_bsnsNm_onkeyup=function(_a,_b){if(_b.keycode=='8'){_a.set_value("");this.div_SEARCH.edt_bsnsCode.set_value("");}else if(_b.keycode=='46'){_a.set_value("");this.div_SEARCH.edt_bsnsCode.set_value("");}};this.div_SEARCH_edt_prmpcNm_onkeyup=function(_a,_b){if(_b.keycode=='8'){_a.set_value("");this.div_SEARCH.edt_prmpcCode.set_value("");}else if(_b.keycode=='46'){_a.set_value("");this.div_SEARCH.edt_prmpcCode.set_value("");}};this.fn_get_imgUrl=function(_a){return this.gfn_getSanctnImgUrl(_a);};});this.on_initEvent=function(){this.ds_acc001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_bdg001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC070201_onload,this);this.grd.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);};this.loadIncludeScript("ACC070201.xfdl");this.loadPreloadList();};})();