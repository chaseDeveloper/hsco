﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PMS000008");this.set_classname("PMS000008");this.set_titletext("과년도미수금관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_pstyrAtmpAmountList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ANACT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNTCTGR\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bgtYear",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGT_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_occrrntGb",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_houseMaping",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("true");_a.set_keystring("G:SLE_SE");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTYR_BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTYR_BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTYR_BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTYR_BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTYR_EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTYR_EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"7\"/><Column id=\"SEMOK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"8\"/><Column id=\"PLAN_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseNmCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"ALL_CODE_NM\">전체</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_jobSeCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_tmpPstyrAtmpAmountList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ANACT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNTCTGR\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRPOS_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("false");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_pstyrAtmpAmountList</Col><Col id=\"colId\">JOB_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">업무구분</Col></Row><Row><Col id=\"compId\">ds_pstyrAtmpAmountList</Col><Col id=\"colId\">MDAT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결의일자</Col></Row><Row><Col id=\"compId\">ds_pstyrAtmpAmountList</Col><Col id=\"colId\">BUDGET_YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">예산년</Col></Row><Row><Col id=\"compId\">ds_pstyrAtmpAmountList</Col><Col id=\"colId\">BUDGET_ACNT_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/><Col id=\"msgId\">예산계정구분</Col></Row><Row><Col id=\"compId\">ds_pstyrAtmpAmountList</Col><Col id=\"colId\">BUDGET_ACNTCTGR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">예산계정과목</Col></Row><Row><Col id=\"compId\">ds_pstyrAtmpAmountList</Col><Col id=\"colId\">BUKIP_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/><Col id=\"msgId\">부기코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","700","7","64","21",null,null,this.div_search);_a.set_taborder("115");_a.set_text("예산년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Spin("cmb_year","absolute","764","7","71","21",null,null,this.div_search);_a.set_taborder("116");_a.set_max("9999");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","844","7","25","21",null,null,this.div_search);_a.set_taborder("117");_a.set_text("년");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_jobSe","absolute","91","5","147","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("118");_a.set_innerdataset("ds_jobSeCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_type("search");_a=new Static("sta_atcngReqstYm00","absolute","27","5","64","21",null,null,this.div_search);_a.set_taborder("119");_a.set_text("업무구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","427","5","174","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("120");_a.set_innerdataset("ds_houseNmCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_type("search");_a=new Static("Static04","absolute","363","5","64","21",null,null,this.div_search);_a.set_taborder("121");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0",null,"10","0",null,this.div_WORK);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10",null,"21","882",null,this.div_WORK);_a.set_taborder("11");_a.set_text("과년도미수금내역");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_pstyrAtmpAmountList","absolute","0","36","612",null,null,"0",this.div_WORK);_a.set_taborder("13");_a.set_binddataset("ds_pstyrAtmpAmountList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"80\"/><Column size=\"256\"/><Column size=\"165\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"발생일자\"/><Cell col=\"1\" text=\"예산년도\"/><Cell col=\"2\" text=\"계정과목\"/><Cell col=\"3\" text=\"발생금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:left;\" text=\"bind:MDAT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:BUDGET_YEAR\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\" mask=\"#,###\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","622","36","409","27",null,null,this.div_WORK);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static42","absolute","612","36","10",null,null,"-2",this.div_WORK);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","622","62","409","27",null,null,this.div_WORK);_a.set_taborder("16");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","622","88","409","27",null,null,this.div_WORK);_a.set_taborder("17");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","622","114","409","27",null,null,this.div_WORK);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","622","140","409","27",null,null,this.div_WORK);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","622","166","409","27",null,null,this.div_WORK);_a.set_taborder("20");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static09","absolute","622","192","409","27",null,null,this.div_WORK);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static10","absolute","622","243","409","27",null,null,this.div_WORK);_a.set_taborder("22");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","622","36","80","27",null,null,this.div_WORK);_a.set_taborder("23");_a.set_text("발생일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","622","62","80","27",null,null,this.div_WORK);_a.set_taborder("24");_a.set_text("예산년도");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","622","243","80","27",null,null,this.div_WORK);_a.set_taborder("25");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","622","114","80","27",null,null,this.div_WORK);_a.set_taborder("26");_a.set_text("계정과목");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM03","absolute","622","192","80","27",null,null,this.div_WORK);_a.set_taborder("27");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM04","absolute","622","88","80","27",null,null,this.div_WORK);_a.set_taborder("28");_a.set_text("계정구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","622","166","80","27",null,null,this.div_WORK);_a.set_taborder("29");_a.set_text("발생금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM06","absolute","622","140","80","27",null,null,this.div_WORK);_a.set_taborder("30");_a.set_text("부기코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static11","absolute","622","218","409","27",null,null,this.div_WORK);_a.set_taborder("31");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","622","218","80","27",null,null,this.div_WORK);_a.set_taborder("32");_a.set_text("발생구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_occrrncDt","absolute","704","39","150","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("false");_a.set_readonly("false");_a=new Spin("cmb_bgtYear","absolute","704","65","71","21",null,null,this.div_WORK);_a.set_taborder("1");_a.set_value("0");_a.set_max("9999");_a.style.set_align("center middle");_a.set_readonly("false");_a.set_enable("false");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_acntGb","absolute","704","91","245","21",null,null,this.div_WORK);_a.set_taborder("2");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_search","absolute","927","91","21","21",null,null,this.div_WORK);_a.set_taborder("33");_a.set_cssclass("btn_WF_Search");_a.set_enable("true");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_acntCode","absolute","704","117","245","21",null,null,this.div_WORK);_a.set_taborder("3");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_unitCode","absolute","704","143","245","21",null,null,this.div_WORK);_a.set_taborder("4");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("edt_occrrntAmount","absolute","704","169","150","21",null,null,this.div_WORK);_a.set_taborder("5");_a.set_mask("999,999,990");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_rm","absolute","704","195","324","21",null,null,this.div_WORK);_a.set_taborder("6");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","704","247","243","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("8");_a.set_innerdataset("@ds_houseNmCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Combo("cmb_occrrntGb","absolute","704","221","243","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("7");_a.set_innerdataset("@ds_occrrntGb");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static12","absolute","622","269","409","27",null,null,this.div_WORK);_a.set_taborder("34");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_border("1 solid #c9ced9ff");_a.set_visible("false");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","622","269","80","27",null,null,this.div_WORK);_a.set_taborder("35");_a.set_text("용도코드");_a.set_cssclass("sta_WF_Label");_a.set_visible("false");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_PROPS_CODE","absolute","704","272","243","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("9");_a.set_innerdataset("@ds_PRPOS_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Button("btn_insertAll","absolute",null,"42","66","21","32",null,this);_a.set_taborder("4");_a.set_text("일괄등록");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1031,676,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PMS000008");_b.set_titletext("과년도미수금관리");});this.addLayout(_a.name,_a);_a=new BindItem("item10","div_WORK.cal_occrrncDt","value","ds_pstyrAtmpAmountList","MDAT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.edt_acntGb","value","ds_pstyrAtmpAmountList","BUDGET_ACNT_SE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.edt_acntCode","value","ds_pstyrAtmpAmountList","BUDGET_ACNT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_WORK.edt_unitCode","value","ds_pstyrAtmpAmountList","EXPNDTR_UNIT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_WORK.edt_occrrntAmount","value","ds_pstyrAtmpAmountList","AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_WORK.edt_rm","value","ds_pstyrAtmpAmountList","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.cmb_rentHouseCode","value","ds_pstyrAtmpAmountList","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.cmb_occrrntGb","value","ds_pstyrAtmpAmountList","PAY_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.cmb_bgtYear","value","ds_pstyrAtmpAmountList","BUDGET_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cmb_year","value","ds_bgtYear","BGT_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_WORK.cmb_PROPS_CODE","value","ds_pstyrAtmpAmountList","PRPOS_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PMS000008.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("PMS000008.xfdl",function(){var _a=this.dateUtils.today();this.JOB_SE="";this.PMS000008_oninit=function(_b,_c){this.fn_init();this.fn_init_dataset();var _d=application.gv_curFormId.split("_")[1];if(_d=="2003040204"){this.div_WORK.Static12.visible=true;this.div_WORK.sta_NM08.visible=true;this.div_WORK.cmb_PROPS_CODE.visible=true;}};this.PMS000008_onload=function(_b,_c){this.ds_bgtYear.setColumn(0,"BGT_YEAR",_a.substr(0,4));this.ds_cond.setColumn(0,"YEAR",_a.substr(0,4));this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_cmmCode(this.ds_occrrntGb,"선택/%",{grpCode:"HOU0B2"});var _b=[{OUT_PUT:"ds_jobSeCode",GRP_CODE:"PCOM06",USE_AT:"1"},{OUT_PUT:"ds_PRPOS_CODE",GRP_CODE:"LAD003",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_b);};this.fn_search=function(){this.ds_cond00.clearData();var _b=this.ds_cond00.addRow();this.ds_cond00.setColumn(_b,"JOB_SE",this.div_search.cmb_jobSe.value);this.ds_cond00.setColumn(_b,"HOUSE_CODE",this.div_search.cmb_houseCode.value);this.ds_cond00.setColumn(_b,"YEAR",this.div_search.cmb_year.value);this.fn_transaction("pstyrAtmpAmountList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_pstyrAtmpAmountList,this.ds_validation)){return false;}else{if(this.ds_pstyrAtmpAmountList.isUpdated()==true){if(this.confirm("저장 하시겠습니까?")){this.fn_transaction("pstyrAtmpAmountSave");}}}};this.fn_insert=function(){var _b=this.ds_pstyrAtmpAmountList.addRow();this.ds_pstyrAtmpAmountList.setColumn(_b,"MDAT_DE",_a);this.ds_pstyrAtmpAmountList.setColumn(_b,"BUDGET_YEAR",this.div_search.cmb_year.value);this.ds_pstyrAtmpAmountList.setColumn(_b,"ANACT_SE","1");this.ds_pstyrAtmpAmountList.setColumn(_b,"JOB_SE",this.JOB_SE);};this.fn_delete=function(){if(application.confirm("삭제하시겠습니까?")){this.fn_transaction("delePstyrAtmpAmountList");}};this.fn_componentEnable=function(_b){this.div_WORK.cal_occrrncDt.set_enable(_b);this.div_WORK.cmb_bgtYear.set_enable(_b);this.div_WORK.edt_acntGb.set_enable(_b);};this.ds_pstyrAtmpAmountList_onrowposchanged=function(_b,_c){if(_b.getRowType(_c.newrow)==2){this.fn_componentEnable(true);}else{this.fn_componentEnable(false);}};this.fn_transaction=function(_b){var _c=true;switch(_b){case "pstyrAtmpAmountList":var _d="/hsco/pms/com/PMS000008/selectPstyrAtmpAmountList.do";var _e="input1=ds_cond00";var _f="ds_pstyrAtmpAmountList=output1";break;case "pstyrAtmpAmountSave":var _d="/hsco/pms/com/PMS000008/savePstyrAtmpAmountList.do";var _e="input1=ds_pstyrAtmpAmountList:U";var _f="";break;case "delePstyrAtmpAmountList":this.ds_tmpPstyrAtmpAmountList.addRow();this.ds_tmpPstyrAtmpAmountList.copyRow(0,this.ds_pstyrAtmpAmountList,this.ds_pstyrAtmpAmountList.rowposition);var _d="/hsco/pms/com/PMS000008/delePstyrAtmpAmountList.do";var _e="input1=ds_tmpPstyrAtmpAmountList";var _f="";break;delePstyrAtmpAmountList;case "selectHouseCodeList":var _d="hsco/pms/com/PMS000008/selectHouseCodeList.do";var _e="input1=ds_cond02";var _f="ds_houseNmCode=output1";break;}if(this.fn_validate_tranasaction(_b,_d,_e,_f)==false){return;}Ex.core.tran(this,_b,_d,_e,_f,"",null,null,_c);};this.fn_callBack=function(_b,_c,_d){var _e=_c==0?true:false;if(_e){if(_b=="selectCommonCode"){var _f=application.gv_curFormId.split("_")[1];switch(_f){case "2003040204":this.ds_jobSeCode.filter("CODE == 'LAD'");this.div_search.cmb_jobSe.set_index(0);this.JOB_SE='LAD';break;case "3020607100":this.ds_jobSeCode.filter("CODE == 'HOU'");this.div_search.cmb_jobSe.set_index(0);this.JOB_SE='HOU';break;case "403050703":this.ds_jobSeCode.filter("CODE == 'RN1'");this.div_search.cmb_jobSe.set_index(0);this.JOB_SE='RN1';break;case "2101060104":this.ds_jobSeCode.filter("CODE == 'RN2'");this.div_search.cmb_jobSe.set_index(0);this.JOB_SE='RN2';break;case "1902060002":this.ds_jobSeCode.filter("CODE == 'RN3'");this.div_search.cmb_jobSe.set_index(0);this.JOB_SE='RN3';break;}this.ds_cond02.setColumn(0,"JOB_SE",this.JOB_SE);this.fn_transaction("selectHouseCodeList");}else if(_b=="selectHouseCodeList"){this.fn_add_comboHeader(this,this.div_search.cmb_houseCode,"전체");}else if(_b=="delePstyrAtmpAmountList"){this.alert("삭제되었습니다.");this.fn_search();}else if(_b=="pstyrAtmpAmountSave"){this.alert("처리되었습니다.");this.fn_search();}}else{this.gfn_callback_message(_b,_c,_d);}this.debug((_e==true?"Success : ":"Fail : ")+_b);};this.div_WORK_btn_search_onclick=function(_b,_c){var _d=this.ds_cond.getColumn(0,"YEAR");var _e={arg_0:this,strObj:"edt_YEAR",year_S:_d,bsnsSe_S:null,balcSe_S:null,deptCode_S:null,jobSeCode_S:this.JOB_SE};this.gfn_popup("pstyrPopup",600,500,"예산선택팝업(과년도)",_e,"pms_com::PMS000008_P01.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_b,_c){if(!_c){return false;}var _d=new Dataset();_d.loadXML(_c);var _e=this.ds_pstyrAtmpAmountList.rowposition;switch(_b){case "pstyrPopup":this.ds_pstyrAtmpAmountList.setColumn(_e,"BUDGET_ACNT_SE_NM",_d.getColumn(0,"GWAN_NM"));this.ds_pstyrAtmpAmountList.setColumn(_e,"BUDGET_ACNT_SE",_d.getColumn(0,"BSNS_SE")+_d.getColumn(0,"BALC_SE"));this.ds_pstyrAtmpAmountList.setColumn(_e,"BUDGET_ACNTCTGR",_d.getColumn(0,"BUDGET_ACNT_CODE"));this.ds_pstyrAtmpAmountList.setColumn(_e,"BUDGET_ACNT_NM",_d.getColumn(0,"BUDGET_ACNT_NM"));this.ds_pstyrAtmpAmountList.setColumn(_e,"BUKIP_CODE",_d.getColumn(0,"EXPNDTR_UNIT_CODE"));this.ds_pstyrAtmpAmountList.setColumn(_e,"EXPNDTR_UNIT_NM",_d.getColumn(0,"EXPNDTR_UNIT_NM"));break;}};this.fn_btnOnClickHandler=function(_b,_c){this.fn_popup_saveAllDetailInfo();};this.fn_popup_saveAllDetailInfo=function(){var _b=this.ds_cond.getColumn(0,"YEAR");var _c={caller:this,year_S:_b,jobSe_S:this.JOB_SE,callBack:this.callBackSaveAllDetail};this.gfn_popup("popup_saveAllDetail",800,500,"과년도미수금 일괄등록",_c,"pms_com::PMS000008_P02.xfdl");};this.callBackSaveAllDetail=function(_b,_c){if(_c==true){_b.OPENER.fn_search();}_b.close();};});this.on_initEvent=function(){this.ds_pstyrAtmpAmountList.addEventHandler("onrowposchanged",this.ds_pstyrAtmpAmountList_onrowposchanged,this);this.ds_houseMaping.addEventHandler("cancolumnchange",this.ds_houseMaping_cancolumnchange,this);this.ds_houseMaping.addEventHandler("oncolumnchanged",this.ds_houseMaping_oncolumnchanged,this);this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_houseNmCode.addEventHandler("onrowposchanged",this.ds_jobSeCode_onrowposchanged,this);this.ds_jobSeCode.addEventHandler("onrowposchanged",this.ds_jobSeCode_onrowposchanged,this);this.ds_tmpPstyrAtmpAmountList.addEventHandler("onrowposchanged",this.ds_pstyrAtmpAmountList_onrowposchanged,this);this.addEventHandler("oninit",this.PMS000008_oninit,this);this.addEventHandler("onload",this.PMS000008_onload,this);this.div_search.cmb_year.addEventHandler("onspin",this.div_search_cmb_year_onspin,this);this.div_search.cmb_jobSe.addEventHandler("canitemchange",this.div_search_cmb_jobSe_canitemchange,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.cal_occrrncDt.addEventHandler("canchange",this.div_search_cal_decsnFromDe_canchange,this);this.div_WORK.edt_acntGb.addEventHandler("oneditclick",this.div_WORK_edt_acntGb_oneditclick,this);this.div_WORK.btn_search.addEventHandler("onclick",this.div_WORK_btn_search_onclick,this);this.div_WORK.cmb_rentHouseCode.addEventHandler("canitemchange",this.div_WORK_cmb_rentHouseCode_canitemchange,this);this.div_WORK.cmb_occrrntGb.addEventHandler("canitemchange",this.div_WORK_cmb_rentHouseCode_canitemchange,this);this.div_WORK.cmb_occrrntGb.addEventHandler("onitemchanged",this.div_WORK_cmb_rentHouseCode_onitemchanged,this);this.btn_insertAll.addEventHandler("onclick",this.fn_btnOnClickHandler,this);};this.loadIncludeScript("PMS000008.xfdl");};})();