﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG030408");this.set_classname("BDG030408");this.set_titletext("사업별예산집행현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg003",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_taxitmExcutBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:+BSNS_NM");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ELPD_EXCUT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ORIBDGT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_BUDGET\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CAUSE_ACTION_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEBT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT_ORI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT_CYFD\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEBT_JANAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_JANAMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BUDGET_SE\" type=\"STRING\" size=\"1\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_ACTION_DE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_ACTION_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_taxitmExcutBudget","absolute","-3","91",null,null,"28","-17",this);_a.set_taborder("4");_a.set_binddataset("ds_taxitmExcutBudget");_a.set_cellsizingtype("col");_a.set_treeinitstatus("expand,all");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업\"/><Cell col=\"1\" text=\"예산계정\"/><Cell col=\"2\" text=\"부기\"/><Cell col=\"3\" text=\"예산현액\"/><Cell col=\"4\" text=\"본예산\"/><Cell col=\"5\" text=\"이월예산\"/><Cell col=\"6\" text=\"원인행위액\"/><Cell col=\"7\" text=\"채무확정액\"/><Cell col=\"8\" text=\"본예산지출액\"/><Cell col=\"9\" text=\"이월예산지출액\"/><Cell col=\"10\" text=\"지출총액\"/><Cell col=\"11\" text=\"채무행위잔액\"/><Cell col=\"12\" text=\"집행잔액\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;selectbackground:#ffffffff;\" text=\"bind:BSNS_NM\" suppress=\"1\" suppressalign=\"first,over\" tooltiptext=\"bind:BSNS_NM\"/><Cell col=\"1\" style=\"align:left middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:BUDGET_ACNT_NM\" suppress=\"2\" suppressalign=\"first,over\" tooltiptext=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"2\" style=\"align:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'right middle' : 'left middle');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소계 :' : EXPNDTR_UNIT_NM\" suppressalign=\"first\" tooltiptext=\"bind:EXPNDTR_UNIT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:EXECUT_AM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:ORIBDGT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:CYFD_BUDGET\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:CAUSE_ACTION_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:DEBT_AMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:DECSN_AMOUNT_ORI\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:DECSN_AMOUNT_CYFD\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:DEBT_JANAMT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');selectbackground:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#f6f7ffff' : '');\" text=\"bind:DECSN_JANAMT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합 계 :\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;EXECUT_AM&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;ORIBDGT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;CYFD_BUDGET&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;CAUSE_ACTION_AMOUNT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DEBT_AMT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT_ORI&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT_CYFD&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DEBT_JANAMT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DECSN_JANAMT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_deptExcutBudget","absolute","0","67","140","19",null,null,this);_a.set_taborder("2");_a.set_text("사업별예산집행현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"58","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BSNS_SE","absolute","218","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("@ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_BALC_SE","absolute","333","5","77","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("수/지구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_BALC_SE","absolute","410","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("8");_a.set_innerdataset("@ds_bdg002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a.set_enable("false");_a=new Static("Static36","absolute","450","0","38","5",null,null,this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","450",null,"38","5",null,"-24",this.div_search);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","318","5","15",null,null,"5",this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_max("9999");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","528","5","38","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("사업");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","568","5","123","21",null,null,this.div_search);_a.set_taborder("12");this.div_search.addChild(_a.name,_a);_a=new Button("searchBsns","absolute","672","5","21","21",null,null,this.div_search);_a.set_taborder("13");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","693","5","241","21",null,null,this.div_search);_a.set_taborder("14");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","513","5","15",null,null,"5",this.div_search);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","26",null,"5","28",null,this.div_search);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("17");_a.set_text("대상일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","78","31","111","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("18");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static03","absolute","191","31","13","21",null,null,this.div_search);_a.set_taborder("19");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","207","31","111","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("20");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static05","absolute","0","52",null,"5","28",null,this.div_search);_a.set_taborder("21");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","57",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","86",null,"5","28",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelExport","absolute",null,"67","25","19","28",null,this);_a.set_taborder("7");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,58,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG030408");_b.set_titletext("사업별예산집행현황");});this.addLayout(_a.name,_a);_a=new BindItem("item9","div_search.cbo_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.rdo_BALC_SE","value","ds_cond","BALC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.edt_BSNS_CODE","value","ds_cond","DETAIL_BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_BSNS_NM","value","ds_cond","DETAIL_BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.Calendar00","value","ds_cond","CAUSE_ACTION_DE_FROM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.Calendar01","value","ds_cond","CAUSE_ACTION_DE_TO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG030408.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG030408.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG030408.xfdl",function(){this.BDG030408_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG030408_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_a,"BUDGET_TYPE","1");var _b=[["ds_bdg001","BDG001","Y","D","B"],["ds_bdg002","BDG002","Y","D","B"],["ds_bdg003","BDG003","Y","D","B"]];var _c=function(_d,_e,_f){this.ds_bdg003.filter("CODE < 10");this.ds_cond.setColumn(_a,"BSNS_SE","1");this.ds_cond.setColumn(_a,"BALC_SE","2");this.ds_cond.setColumn(_a,"BUDGET_SE","0");var _g=this.dateUtils.today();this.ds_cond.setColumn(_a,"CAUSE_ACTION_DE_FROM",this.comUtils.getClientDate("YYYY")+"0101");this.ds_cond.setColumn(_a,"CAUSE_ACTION_DE_TO",_g);this.ds_cond.setColumn(0,"YEAR_SE","2");this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.ds_taxitmExcutBudget.clearData();var _c=this.ds_cond.getColumn(0,"YEAR");if(_c<2018){this.ds_cond.setColumn(0,"YEAR_SE","1");}else{this.ds_cond.setColumn(0,"YEAR_SE","2");}this.fn_transaction("selectBsnsExcutBudget");};this.fn_transaction=function(_a){switch(_a){case "selectBsnsExcutBudget":var _b="/hsco/mis/bdg/BDG030408/selectBsnsExcutBudget.do";var _c="input1=ds_cond";var _d="ds_taxitmExcutBudget=output1 ds_inpYn=output2";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectBsnsExcutBudget":break;}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_taxitmExcutBudget,"Excel File Download");};this.div_search_searchBsns_onclick=function(_a,_b){var _c=this.div_search.spn_YEAR.value;var _d={arg_0:this,year:_c};this.gfn_popup("popBsns",800,530,"사업코드 선택",_d,"mis_acc::ACC000000_P04.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){if(_a=="popBsns"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BSNS_CODE");var _f=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(0,"DETAIL_BSNS_CODE",_e);this.ds_cond.setColumn(0,"DETAIL_BSNS_NM",_f);}}};this.div_search_edt_BSNS_CODE_onchanged=function(_a,_b){var _c=this.div_search.edt_BSNS_CODE.value;if(_c==null||_c==""){this.div_search.edt_BSNS_NM.set_value("");}};});this.on_initEvent=function(){this.ds_taxitmExcutBudget.addEventHandler("onrowposchanged",this.ds_executBudget_onrowposchanged,this);this.ds_taxitmExcutBudget.addEventHandler("canrowposchange",this.ds_executBudget_canrowposchange,this);this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.BDG030408_onload,this);this.addEventHandler("oninit",this.BDG030408_oninit,this);this.div_search.edt_BSNS_CODE.addEventHandler("onchanged",this.div_search_edt_BSNS_CODE_onchanged,this);this.div_search.searchBsns.addEventHandler("onclick",this.div_search_searchBsns_onclick,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("BDG030408.xfdl");};})();