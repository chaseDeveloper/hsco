﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050203");this.set_classname("ACC050203");this.set_titletext("보조원장");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_result",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHIT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY_1\" type=\"STRING\" size=\"256\"/><Column id=\"DR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RN\" type=\"INT\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc023",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회계년도</Col></Row><Row><Col id=\"colId\">ST_DT</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회기간</Col><Col id=\"from\">ST_DT</Col><Col id=\"to\">ED_DT</Col></Row><Row><Col id=\"colId\">ED_DT</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회기간</Col><Col id=\"from\">ST_DT</Col><Col id=\"to\">ED_DT</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACNT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회계계정</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_acnut",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"60","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_ACNT_CODE","absolute","517","5","107","21",null,null,this.div_search);_a.set_taborder("4");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("30");_a.set_text("회계년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","458","0","38","5",null,null,this.div_search);_a.set_taborder("56");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","46",null,null,this.div_search);_a.set_taborder("58");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","458","26","38","5",null,null,this.div_search);_a.set_taborder("59");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR00","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("61");_a.set_text("조회기간");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ST_DT","absolute","218","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_wave","absolute","320","5","16","21",null,null,this.div_search);_a.set_taborder("63");_a.set_text("~");_a.set_wordwrap("char");_a.style.set_align("center middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ED_DT","absolute","336","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_value("null");_a=new Static("Static01","absolute","139","5","15","21",null,null,this.div_search);_a.set_taborder("65");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","438","5","15","21",null,null,this.div_search);_a.set_taborder("68");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","664","0","2",null,null,"26",this.div_search);_a.set_taborder("69");_a.set_text("2");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACNT_NM","absolute","627","5","156","21",null,null,this.div_search);_a.set_taborder("5");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Button("searchAcnt","absolute","603","5","21","21",null,null,this.div_search);_a.set_taborder("71");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","453","5","64","21",null,null,this.div_search);_a.set_taborder("73");_a.set_text("회계계정");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","783","5","15","21",null,null,this.div_search);_a.set_taborder("74");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO","absolute","798","5","40","21",null,null,this.div_search);_a.set_taborder("75");_a.set_text("계좌");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACNUTNO","absolute","838","5","183","21",null,null,this.div_search);_a.set_taborder("77");_a.getSetter("innerdataset").set("@ds_acnut");_a.getSetter("codecolumn").set("ACNUTNO");_a.getSetter("datacolumn").set("CODE_NM");_a.getSetter("type").set("search");_a.set_visible("false");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Button("searchAcntno","absolute","1000","5","21","21",null,null,this.div_search);_a.set_taborder("78");_a.set_cssclass("btn_WF_Search");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_sanctn00","absolute","15","34","63","21",null,null,this.div_search);_a.set_taborder("79");_a.set_text("거래처");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","79","33","90","21",null,null,this.div_search);_a.set_taborder("80");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bcncPopup","absolute","148","33","21","21",null,null,this.div_search);_a.set_taborder("81");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","171","33","150","21",null,null,this.div_search);_a.set_taborder("82");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("35");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("36");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","0","70",null,"19","908",null,this);_a.set_taborder("39");_a.set_text("보조원장");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","89",null,"5","28",null,this);_a.set_taborder("41");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","60",null,"10","28",null,this);_a.set_taborder("42");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_result","absolute","0","94",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_result");_a.set_autoenter("select");_a.set_cellsizingtype("row");_a.set_cellmovingtype("col");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,null");_a.set_treeuseexpandkey("true");_a.set_autosizingtype("none");_a.set_extendsizetype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"300\"/><Column size=\"0\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"전표일자\"/><Cell col=\"1\" colspan=\"2\" text=\"회계계정\"/><Cell col=\"3\" text=\"결의번호\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"전표구분\"/><Cell col=\"6\" colspan=\"2\" text=\"부서\"/><Cell col=\"8\" colspan=\"2\" text=\"사업\"/><Cell col=\"10\" text=\"거래처명\"/><Cell col=\"11\" text=\"적요1\"/><Cell col=\"12\" text=\"계좌번호\"/><Cell col=\"13\" text=\"계좌번호\"/><Cell col=\"14\" text=\"차변금액\"/><Cell col=\"15\" text=\"대변금액\"/><Cell col=\"16\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:CHIT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:ACCNUT_ACNT_CODE\"/><Cell col=\"2\" style=\"align:left middle;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:ACCNUT_ACNT_NM\"/><Cell col=\"3\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:DECSN_NO\"/><Cell col=\"4\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:CHIT_NO\"/><Cell col=\"5\" displaytype=\"combo\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:CHIT_SE\" combodataset=\"ds_acc023\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:DEPT_CODE\"/><Cell col=\"7\" style=\"align:left middle;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:DEPT_NM\"/><Cell col=\"8\" style=\"line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:BSNS_CODE\"/><Cell col=\"9\" style=\"align:left;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:BSNS_NM\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:BCNC_NM\"/><Cell col=\"11\" style=\"align:left middle;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"expr:CHIT_DE == null?'':SUMRY_1\" tooltiptext=\"bind:SUMRY_1\"/><Cell col=\"12\" text=\"bind:ACNUTNO\"/><Cell col=\"13\" text=\"bind:ACNUTNO\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:DR_AMT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:CR_AMT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;line:EXPR((RN&gt;888888887)?'1 solid #d9ddf8':'');background:EXPR(RN&gt;888888887?'#f6f7ff':'');background2:EXPR(RN&gt;888888887?'#f6f7ff':'');color:EXPR(RN&gt;888888887?'#333333':'');color2:EXPR(RN&gt;888888887?'#333333':'');selectfont:EXPR((RN&gt;888888887)?'9 Gulim bold':'');\" text=\"bind:BLCE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"70","25","19","28",null,this);_a.set_taborder("43");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",0,60,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("ACC050203");_b.set_titletext("보조원장");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_ACNT_NM","value","ds_cond","ACNT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_ACNT_CODE","value","ds_cond","ACNT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_ST_DT","value","ds_cond","ST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cal_ED_DT","value","ds_cond","ED_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item36","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_ACNUTNO","value","ds_cond","ACNUTNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item32","div_search.Edit04","value","ds_cond","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item61","div_search.Edit05","value","ds_cond","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC050203.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050203.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050203.xfdl",function(){this.ACC050203_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();var _c=[["ds_acc023","ACC023","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_transaction("acnutList",false);};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);var _a=new Date(this.comUtils.getClientDate("YYYY")+"-"+this.comUtils.getClientDate("MM")+"-01");var _b=_a.getDay();var _c=this.dateUtils.getLastDay(_a).getDate();this.ds_cond.clearData();var _d=this.ds_cond.addRow();this.ds_cond.setColumn(_d,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_d,"ST_DT",this.comUtils.getClientDate("YYYYMM")+"01");this.ds_cond.setColumn(_d,"ED_DT",this.comUtils.getClientDate("YYYYMM")+_c);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}if(this.ds_cond.getColumn(0,"YEAR")!=this.ds_cond.getColumn(0,"ST_DT").substr(0,4)){this.gfn_message("errors.항목값.범위.동일","회계년도|조회기간의 년도");return;}if(this.ds_cond.getColumn(0,"YEAR")!=this.ds_cond.getColumn(0,"ED_DT").substr(0,4)){this.gfn_message("errors.항목값.범위.동일","회계년도|조회기간의 년도");return;}this.ds_result.clearData();this.fn_transaction("select");};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","보조원장");_a.setSaveFilename("보조원장");_a.clearLocalDs();_a.setGrid(this.grd_result);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"보조원장",_b,"common::frmReportPopup.xfdl","");};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/mis/acc/ACC050203/select.do";var _c="input1=ds_cond";var _d="ds_result=output1";break;case "acnutList":var _b="hsco/mis/acc/ACC020502/selectAcnutList.do";var _c="";var _d="ds_acnut=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "select":break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="ACC010103_P01"){var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(nRowCnt){var _d=_c.getColumn(0,"ACCNUT_ACNT_CODE");var _e=_c.getColumn(0,"ACCNUT_ACNT_NM");this.ds_cond.setColumn(0,"ACNT_CODE",_d);this.ds_cond.setColumn(0,"ACNT_NM",_e);}}if(_a=="FUN010103_P01"){var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(nRowCnt){var _d=_c.getColumn(0,"ACNUTNO");this.ds_cond.setColumn(0,"ACNUTNO",_d);}}if(_a=="CTR010101_P02"){if(_b!=null&&_b.length>0){var _f=new Dataset();_f.loadXML(_b);this.ds_cond.setColumn(0,"BCNC_CODE",_f.getColumn(0,"BCNC_CODE"));this.ds_cond.setColumn(0,"BCNC_NM",_f.getColumn(0,"BCNC_NM"));}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_result,"Excel File Download");};this.div_search_searchAcnt_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"YEAR");this.gfn_popup("ACC010103_P01",465,510,"회계코드 팝업",{year:_c},"mis_acc::ACC010103_P01.xfdl","fn_popupCallBack",true);};this.div_search_searchAcntno_onclick=function(_a,_b){this.gfn_popup("FUN010103_P01",465,510,"계좌번호 팝업",'',"mis_fun::FUN010103_P01.xfdl","fn_popupCallBack",true);};this.div_search_btn_bcncPopup_onclick=function(_a,_b){this.gfn_popup("CTR010101_P02",600,500,"거래처",{searchDs:this.ds_cond.saveXML(),bAcnutPop:true},"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);};this.ds_cond_cancolumnchange=function(_a,_b){if(_b.columnid=="YEAR"){var _c=this.ds_cond.getColumn(0,"ST_DT");var _d=this.ds_cond.getColumn(0,"ED_DT");if(null!=_c){this.ds_cond.setColumn(0,"ST_DT",_b.newvalue+_c.substr(4,4));}if(null!=_d){this.ds_cond.setColumn(0,"ED_DT",_b.newvalue+_d.substr(4,4));}}if(_b.columnid=="ST_DT"||_b.columnid=="ED_DT"){if(this.ds_cond.getColumn(0,"YEAR")!=_b.newvalue.substr(0,4)){this.gfn_message("info.처리불가","회계년도와 조회기간의 년도가 다릅니다.");return false;}}if(_b.columnid=="ACNT_CODE"){var _e=_b.newvalue;if(_e.substr(0,6)=="111010"){this.div_search.sta_ACNUTNO.set_visible(true);this.div_search.edt_ACNUTNO.set_visible(true);this.div_search.searchAcntno.set_visible(true);this.grd_result.setFormatColProperty(11,"size",150);}else{this.ds_cond.setColumn(0,"ACNUTNO","");this.div_search.sta_ACNUTNO.set_visible(false);this.div_search.edt_ACNUTNO.set_visible(false);this.div_search.searchAcntno.set_visible(false);var _f=_b.oldvalue;if(_f.substr(0,6)=="111010"){this.grd_result.setFormatColProperty(11,"size",0);}}}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("cancolumnchange",this.ds_cond_cancolumnchange,this);this.addEventHandler("onload",this.ACC050203_onload,this);this.div_search.searchAcnt.addEventHandler("onclick",this.div_search_searchAcnt_onclick,this);this.div_search.searchAcntno.addEventHandler("onclick",this.div_search_searchAcntno_onclick,this);this.div_search.btn_bcncPopup.addEventHandler("onclick",this.div_search_btn_bcncPopup_onclick,this);this.grd_result.addEventHandler("oncelldblclick",this.grd_result_oncelldblclick,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("ACC050203.xfdl");};})();