﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG040206");this.set_classname("BDG040206");this.set_titletext("부서별지출결산현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"YEAR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년도</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_deptExcutBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:GRP_KEY,S:SN+");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_BUDGET_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORIBDGT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RVSPBGT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRTINT_YEAR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAUSE_ACTION_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAUSE_ACTION_INCMP_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEBT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DFFRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNPAY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DISUSE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CYFD_DEMAND_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CYFD_DCSN_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRP_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","59","1031","10",null,null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","69","188","19",null,null,this);_a.set_taborder("4");_a.set_text("부서별지출결산현황");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_excel_down","absolute",null,"69","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("조회년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_SE","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("사업구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_BSNS_SE","absolute","218","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_BALC_SE","absolute","331","5","77","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("수/지구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","316","5","15",null,null,"5",this.div_search);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_BALC_SE","absolute","408","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_bdg002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a.set_enable("false");_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BUDGET_SE00","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("예산계정");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_budgetAcntCode","absolute","79","31","85","21",null,null,this.div_search);_a.set_taborder("3");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bdgAcntPop","absolute","143","31","21","21",null,null,this.div_search);_a.set_taborder("4");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_budgetAcntNm","absolute","166","31","150","21",null,null,this.div_search);_a.set_taborder("5");_a.set_readonly("true");_a.style.set_align("left middle");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("17");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BUDGET_SE01","absolute","331","31","38","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("부기");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bukipCode","absolute","395","31","85","21",null,null,this.div_search);_a.set_taborder("6");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bukipPop","absolute","459","31","21","21",null,null,this.div_search);_a.set_taborder("7");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bukipNm","absolute","482","31","150","21",null,null,this.div_search);_a.set_taborder("8");_a.set_readonly("true");_a.style.set_align("left middle");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","647","31","38","21",null,null,this.div_search);_a.set_taborder("19");_a.set_text("부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute","685","31","179","21",null,null,this.div_search);_a.set_taborder("9");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","632","5","15",null,null,"5",this.div_search);_a.set_taborder("20");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","88","1031","5",null,null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_ExpndtrStacntReprt","absolute","0","93",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_deptExcutBudget");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_treeusecheckbox("false");_a.set_treeinitstatus("expand,null");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"예산과목\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" colspan=\"6\" text=\"예　　산　　액\"/><Cell col=\"8\" rowspan=\"2\" text=\"지출원인&#13;&#10;행위액(B)\"/><Cell col=\"9\" rowspan=\"2\" text=\"지출원인행위&#13;&#10;미필액(B-C)\"/><Cell col=\"10\" rowspan=\"2\" text=\"결산액(C)&#13;&#10;(채무확정액)\"/><Cell col=\"11\" rowspan=\"2\" text=\"예산액대결산액&#13;&#10;차이(A-C)\"/><Cell col=\"12\" rowspan=\"2\" text=\"지출액&#13;&#10;(D)\"/><Cell col=\"13\" rowspan=\"2\" text=\"미지급금 (C-D)\"/><Cell col=\"14\" colspan=\"2\" text=\"익년도 이월\"/><Cell col=\"16\" rowspan=\"2\" text=\"불용액(A-(C+E)\"/><Cell row=\"1\" col=\"2\" text=\"이월예산\"/><Cell row=\"1\" col=\"3\" text=\"본예산(1)\"/><Cell row=\"1\" col=\"4\" text=\"추경예산(2)\"/><Cell row=\"1\" col=\"5\" text=\"전용증감(3)\"/><Cell row=\"1\" col=\"6\" text=\"당해년도계(1+2+3)\"/><Cell row=\"1\" col=\"7\" text=\"계(A)\"/><Cell row=\"1\" col=\"14\" text=\"이월요구액\"/><Cell row=\"1\" col=\"15\" text=\"이월확정액(E)\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" style=\"align:left middle;padding:0 0 0 5;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:BUDGET_ACNT_NM3\" treestartlevel=\"1\" treelevel=\"bind:LVL\" tooltiptext=\"bind:BUDGET_ACNT_NM3\"/><Cell col=\"1\" style=\"align:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'right middle' : 'left middle');padding:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '0 5 0 0' : '0 0 0 5');line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소계' : DEPT_NM2\" tooltiptext=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '' : DEPT_NM2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CYFD_BUDGET_AMT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:ORIBDGT_AMT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:RVSPBGT_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:DVR_AMT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:PRTINT_YEAR_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:EXECUT_BUDGET_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CAUSE_ACTION_AMOUNT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CAUSE_ACTION_INCMP_AMOUNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:DEBT_AMT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:DFFRNC_AMOUNT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:UNPAY_AMOUNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CYFD_DEMAND_AM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CYFD_DCSN_AM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:DISUSE_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG040206");_b.set_titletext("부서별지출결산현황");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.cbo_BSNS_SE","value","ds_cond","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.rdo_BALC_SE","value","ds_cond","BALC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_search.edt_budgetAcntCode","value","ds_cond","BUDGET_ACNT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item43","div_search.edt_budgetAcntNm","value","ds_cond","BUDGET_ACNT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_bukipCode","value","ds_cond","BUKIP_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_bukipNm","value","ds_cond","BUKIP_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("BDG040206.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG040206.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG040206.xfdl",function(){this.BDG040206_oninit=function(_a,_b){};this.BDG040206_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _a=[["ds_bdg001","BDG001","Y","A","B"],["ds_bdg002","BDG002","Y","D","B"]];var _b=function(_c,_d,_e){this.ds_cond.clearData();var _f=this.ds_cond.addRow();this.ds_cond.setColumn(_f,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_f,"BSNS_SE","1");this.ds_cond.setColumn(_f,"BALC_SE","2");this.ds_cond.setColumn(_f,"DEPT_CODE","000000");this.ds_cond.setColumn(_f,"DEPT_NM","화성도시공사");this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_deptExcutBudget.clearData();var _c=this.ds_cond.getColumn(0,"YEAR");var _d=nexacro.toNumber(_c,0);if(_d<2018){this.ds_cond.setColumn(0,"YEAR_SE","1");}else{this.ds_cond.setColumn(0,"YEAR_SE","2");}this.fn_transaction("selectDeptExpndtrStacnt");};this.fn_transaction=function(_a){switch(_a){case "selectDeptExpndtrStacnt":var _b="hsco/mis/bdg/BDG040206/selectDeptExpndtrStacnt.do";var _c="input1=ds_cond";var _d="ds_deptExcutBudget=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectDeptExpndtrStacnt":var _d=this.ds_cond.getColumn(0,"DEPT_CODE");if(this.comUtils.isNull(_d)||_d=="000000"){this.ds_deptExcutBudget.set_keystring("G:GRP_KEY,S:SN+");}else{this.ds_deptExcutBudget.set_keystring("");}break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="bdgAcntPop"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BUDGET_ACNT_CODE");var _f=_c.getColumn(0,"BUDGET_ACNT_NM");this.ds_cond.setColumn(0,"BUDGET_ACNT_CODE",_e);this.ds_cond.setColumn(0,"BUDGET_ACNT_NM",_f);}}if(_a=="bukipPop"){var _g=new Dataset();var _d=_g.loadXML(_b);if(_d){var _h=_g.getColumn(0,"BUKIP_CODE");var _i=_g.getColumn(0,"BUKIP_NM");this.ds_cond.setColumn(0,"BUKIP_CODE",_h);this.ds_cond.setColumn(0,"BUKIP_NM",_i);}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_deptExcutBudget,"deptExcutBudget");};this.div_search_btn_bdgAcntPop_onclick=function(_a,_b){var _c={arg_0:this,acntPopup:true};this.gfn_popup("bdgAcntPop",900,635,"예산선택팝업",_c,"com::bdgAcntPop.xfdl","fn_popupCallBack",true);};this.div_search_btn_bukipPop_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("bukipPop",410,370,"부기코드팝업",_c,"mis_bdg::BDG010102_P01.xfdl","fn_popupCallBack",true);};this.div_search_edt_budgetAcntCode_onchanged=function(_a,_b){var _c=this.div_search.edt_budgetAcntCode.value;if(_c==null||_c==""){this.div_search.edt_budgetAcntNm.set_value("");}};this.div_search_edt_bukipCode_onchanged=function(_a,_b){var _c=this.div_search.edt_bukipCode.value;if(_c==null||_c==""){this.div_search.edt_bukipNm.set_value("");}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.BDG040206_oninit,this);this.addEventHandler("onload",this.BDG040206_onload,this);this.sta_title01.addEventHandler("onclick",this.sta_title01_onclick,this);this.btn_excel_down.addEventHandler("onclick",this.btn_excel_down_onclick,this);this.div_search.edt_budgetAcntCode.addEventHandler("onchanged",this.div_search_edt_budgetAcntCode_onchanged,this);this.div_search.btn_bdgAcntPop.addEventHandler("onclick",this.div_search_btn_bdgAcntPop_onclick,this);this.div_search.edt_budgetAcntNm.addEventHandler("oneditclick",this.div_DetailBase_edt_YEAR_oneditclick,this);this.div_search.edt_bukipCode.addEventHandler("onchanged",this.div_search_edt_bukipCode_onchanged,this);this.div_search.btn_bukipPop.addEventHandler("onclick",this.div_search_btn_bukipPop_onclick,this);this.div_search.edt_bukipNm.addEventHandler("oneditclick",this.div_DetailBase_edt_YEAR_oneditclick,this);this.Static51.addEventHandler("onclick",this.Static51_onclick,this);this.grd_ExpndtrStacntReprt.addEventHandler("oncloseup",this.grd_accNutStacnt_oncloseup,this);this.grd_ExpndtrStacntReprt.addEventHandler("onexpanddown",this.grd_accNutStacnt_onexpanddown,this);};this.loadIncludeScript("BDG040206.xfdl");this.loadPreloadList();};})();