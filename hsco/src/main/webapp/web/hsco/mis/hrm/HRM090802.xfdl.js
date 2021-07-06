﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090802");this.set_classname("UI_HRM090802");this.set_titletext("복지포인트 계산");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_scoreCalc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CNWK_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CNWK_YYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DNTMY_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNTMY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_APPLC_MONTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REAL_WLFARE_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"WLFARE_SCORE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HEALTH_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">APPLC_YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년도</Col></Row><Row><Col id=\"compId\">ds_scoreCalc</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">사번</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_scoreStdrAdit",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"IEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADIT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WLFARE_SCORE_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HEALTH_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_calc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ADIT_STDR_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TAB_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrFamilyList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM_ENCPT\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"ACDMCR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OCCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TROBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPORT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_PYMNT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_familyRelateSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm002",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_com005",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("28");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("29");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("30");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","91","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("조회년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","9.33%","26",null,"5","86.98%",null,this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","9.33%","0",null,"5","86.98%",null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","5",null,"20","98.64%",null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","80","5","73","21",null,null,this.div_search);_a.set_taborder("10");_a.set_value("0");_a.set_max("2100");_a.set_min("1988");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","153","0","15","31",null,null,this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","168","5","35","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_emplnm","absolute","206","5","84","21",null,null,this.div_search);_a.set_taborder("13");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_scoreCalc","fixed","0","67",null,null,"28","232",this);_a.set_taborder("37");_a.set_binddataset("ds_scoreCalc");_a.set_autoenter("select");_a.set_createcellasync("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"사원정보\"/><Cell col=\"6\" rowspan=\"2\" text=\"소계\"/><Cell col=\"7\" rowspan=\"2\" text=\"기본&#13;&#10;점수\"/><Cell col=\"8\" rowspan=\"2\" text=\"건강&#13;&#10;관리\"/><Cell col=\"9\" colspan=\"2\" text=\"근속\"/><Cell col=\"11\" colspan=\"2\" text=\"부양가족\"/><Cell col=\"13\" rowspan=\"2\" text=\"실적용개월\"/><Cell col=\"14\" rowspan=\"2\" text=\"실제부여&#13;&#10;포인트\"/><Cell col=\"15\" rowspan=\"2\" text=\"복지포인트금액\"/><Cell col=\"16\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" text=\"부서\"/><Cell row=\"1\" col=\"1\" text=\"직급\"/><Cell row=\"1\" col=\"2\" text=\"성명\"/><Cell row=\"1\" col=\"3\" text=\"입사일\"/><Cell row=\"1\" col=\"4\" text=\"생년월일\"/><Cell row=\"1\" col=\"5\" text=\"성별\"/><Cell row=\"1\" col=\"9\" text=\"년수\"/><Cell row=\"1\" col=\"10\" text=\"점수\"/><Cell row=\"1\" col=\"11\" text=\"인원\"/><Cell row=\"1\" col=\"12\" text=\"점수\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:HR_CLSF_SE\" combodataset=\"ds_hrm002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:EMPNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hide'\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:ECNY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:BRTHDY\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:SEXDSTN\" combodataset=\"ds_com005\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TOT_SCORE\" mask=\"###,##0\" editdisplay=\"edit\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BASS_SCORE\" mask=\"##,##0.##\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:HEALTH_SCORE\" mask=\"##,##0.##\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:CNWK_YYCNT\" mask=\"#0\" editdisplay=\"display\" editlimitbymask=\"integer\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:CNWK_SCORE\" mask=\"##,##0.##\" editdisplay=\"display\" editlimitbymask=\"integer\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DNTMY_CO\" mask=\"#0\" editdisplay=\"display\" editlimitbymask=\"integer\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:DNTMY_SCORE\" mask=\"##,##0.##\" editdisplay=\"display\" editlimitbymask=\"integer\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:REAL_APPLC_MONTH\" mask=\"##\" editdisplay=\"display\" editlimitbymask=\"integer\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:REAL_WLFARE_SCORE\" mask=\"##,##0.##\" editdisplay=\"display\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:WLFARE_SCORE_AMOUNT\" mask=\"###,###,###,###,##0\" editdisplay=\"display\"/><Cell col=\"16\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\"/><Cell col=\"2\" displaytype=\"number\"/><Cell col=\"3\" displaytype=\"number\"/><Cell col=\"4\" displaytype=\"number\"/><Cell col=\"5\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum(&quot;TOT_SCORE&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;BASS_SCORE&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;HEALTH_SCORE&quot;)\"/><Cell col=\"9\" displaytype=\"number\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CNWK_SCORE&quot;)\"/><Cell col=\"11\" displaytype=\"number\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DNTMY_SCORE&quot;)\"/><Cell col=\"13\" displaytype=\"number\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;REAL_WLFARE_SCORE&quot;)\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;WLFARE_SCORE_AMOUNT&quot;)\"/><Cell col=\"16\" displaytype=\"number\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_calc","absolute",null,"43","70","19","28",null,this);_a.set_taborder("39");_a.set_text("일괄계산");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","249","19",null,null,this);_a.set_taborder("40");_a.set_text("복지포인트");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("41");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_hrFamilyList","absolute","0",null,null,"200","28","0",this);_a.set_taborder("43");_a.set_binddataset("ds_hrFamilyList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"가족관계\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"나이\"/><Cell col=\"4\" text=\"생년월일\"/><Cell col=\"5\" text=\"수당\"/><Cell col=\"6\" text=\"확인여부\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:FAMILY_RELATE_SE\" combodataset=\"ds_familyRelateSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:FAMILY_NM\"/><Cell col=\"3\" text=\"bind:AGE\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:BRTHDY\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ALLWNC_PYMNT_AT\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:CNFIRM_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","501","1031","10",null,null,this);_a.set_taborder("46");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","530","1031","5",null,null,this);_a.set_taborder("47");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0",null,"96","19",null,"205",this);_a.set_taborder("48");_a.set_text("가족사항");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("30");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_HRM090802");_b.set_titletext("복지포인트 계산");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond","APPLC_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_emplnm","value","ds_cond","EMPNM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM090802.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090802.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM090802.xfdl",function(){var _a= -1;this.HRM090802_onload=function(_b,_c){this.fn_init_form();this.fn_init_dataset();var _d=[["ds_familyRelateSe","HRM006","Y","D","B"],["ds_hrm002","HRM002","Y","D","B"],["ds_com005","COM005","Y","D","B"],];var _e=function(_f,_g,_h){this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"APPLC_YEAR",this.gfn_today().substr(0,4));this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_scoreCalc.clearData();this.ds_scoreStdrAdit.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}for(var _b=this.grd_scoreCalc.getCellCount("body");17<_b;_b-- ){this.grd_scoreCalc.deleteContentsCol(13);}this.fn_transaction("selectStdrAdit");};this.fn_insert=function(){var _b=this.ds_scoreCalc.addRow();this.ds_scoreCalc.setColumn(_b,"STDR_APPLC_YEAR",this.ds_scoreStdrAdit.getColumn(0,"STDR_APPLC_YEAR"));this.ds_scoreCalc.setColumn(_b,"APPLC_YEAR",this.ds_scoreStdrAdit.getColumn(0,"APPLC_YEAR"));this.ds_scoreCalc.setColumn(_b,"BASS_SCORE",this.ds_scoreStdrAdit.getColumn(0,"BASS_SCORE"));this.ds_scoreCalc.setColumn(_b,"WLFARE_SCORE_AMOUNT",this.ds_scoreStdrAdit.getColumn(0,"BASS_SCORE")*this.ds_scoreStdrAdit.getColumn(0,"WLFARE_SCORE_AMOUNT"));this.ds_scoreCalc.setColumn(_b,"REAL_APPLC_MONTH",12);for(i=1;i<this.ds_scoreStdrAdit.rowcount;i++ ){this.ds_scoreCalc.setColumn(_b,"ADIT_SCORE_"+i,0);}this.fn_searchSub();};this.fn_delete=function(){var _b=this.ds_scoreCalc.rowposition;if(_b> -1){if(this.gfn_message("confirm.삭제여부")){this.ds_scoreCalc.deleteRow(_b);this.fn_searchSub();}}};this.fn_cancel=function(){if(this.comUtils.isDatasetUpdated(this.ds_scoreCalc)){if(this.gfn_message("confirm.취소여부")){this.ds_scoreCalc.reset();this.ds_scoreCalc.applyChange();return;}};};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_scoreCalc,this.ds_validation)){return;}if(!this.comUtils.isDatasetUpdated(this.ds_scoreCalc)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_scoreCalc.rowposition;this.fn_transaction("saveScore");}};this.fn_transaction=function(_b){switch(_b){case "selectStdrAdit":var _c="hsco/mis/hrm/HRM090802/selectStdrAdit.do";var _d="input1=ds_cond";var _e="ds_scoreStdrAdit=output1";break;case "selectScore":var _c="hsco/mis/hrm/HRM090802/selectScore.do";var _d="input1=ds_cond";var _e="ds_scoreCalc=output1";break;case "selectEmplFamilyInfo":var _c="hsco/mis/hrm/HRM090802/selectEmplFamilyInfo.do";var _d="input1=ds_cond2";var _e="ds_hrFamilyList=output1";break;case "saveScore":var _c="hsco/mis/hrm/HRM090802/saveScore.do";var _d="input1=ds_scoreCalc:U input2=ds_scoreStdrAdit:A";var _e="";break;case "calc":var _c="hsco/mis/hrm/HRM090802/calc.do";var _d="input1=ds_calc:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "selectStdrAdit":var _e="expr:nexacro.toNumber(dataset.getColumn(currow, \"HEALTH_SCORE\"),0,0,0)+nexacro.toNumber(dataset.getColumn(currow, \"BASS_SCORE\"),0,0,0)+nexacro.toNumber(dataset.getColumn(currow, \"CNWK_SCORE\"),0,0,0)+nexacro.toNumber(dataset.getColumn(currow, \"DNTMY_SCORE\"),0,0,0)";var _f="expr:nexacro.toNumber(dataset.getSum(\"HEALTH_SCORE\"),0,0,0)+nexacro.toNumber(dataset.getSum(\"BASS_SCORE\"),0,0,0)+nexacro.toNumber(dataset.getSum(\"CNWK_SCORE\"),0,0,0)+nexacro.toNumber(dataset.getSum(\"DNTMY_SCORE\"),0,0,0)";this.grd_scoreCalc.setCellProperty("Head",8,"text","복지포인트금액\n(실제포인트*"+this.ds_scoreStdrAdit.getColumn(0,"WLFARE_SCORE_AMOUNT")+")");var _g=1;for(_g=1;_g<this.ds_scoreStdrAdit.rowcount;_g++ ){this.ds_scoreCalc.addColumn("ADIT_"+_g,"STRING");this.ds_scoreCalc.addColumn("ADIT_SCORE_"+_g,"BIGDECIMAL");var _h=this.grd_scoreCalc.insertContentsCol(12+_g);this.grd_scoreCalc.setCellProperty("Head",5+_g,"text",this.ds_scoreStdrAdit.getColumn(_g,"IEM_NM"));this.grd_scoreCalc.setCellProperty("Head",10+_g,"text",this.ds_scoreStdrAdit.getColumn(_g,"ADIT_SCORE")+"점");this.grd_scoreCalc.setCellProperty("body",_h,"text","bind:ADIT_"+_g);this.grd_scoreCalc.setFormatColProperty(_h,"size",130);this.grd_scoreCalc.setCellProperty("body",_h,"displaytype","checkbox");this.grd_scoreCalc.setCellProperty("body",_h,"edittype","checkbox");this.grd_scoreCalc.setCellProperty("Summ",_h,"displaytype","number");this.grd_scoreCalc.setCellProperty("Summ",_h,"text","expr:nexacro.toNumber(dataset.getSum(\"ADIT_SCORE_"+_g+"\"),0,0,0)");}this.grd_scoreCalc.setCellProperty("body",6,"text",_e);this.grd_scoreCalc.setCellProperty("Summ",6,"text",_f);this.fn_transaction("selectScore");break;case "selectScore":if(_a> -1){this.ds_scoreCalc.set_rowposition(_a);_a= -1;}break;case "saveScore":this.fn_search();this.gfn_message("success.처리.성공");break;case "calc":this.gfn_message("success.처리.성공");this.ds_scoreCalc.clearData();this.fn_transaction("selectScore");}}};this.ds_scoreCalc_onrowposchanged=function(_b,_c){this.fn_searchSub();};this.fn_searchSub=function(){var _b=this.ds_scoreCalc.rowposition;if(_b> -1){this.ds_cond2.clearData();var _c=this.ds_cond2.addRow();this.ds_cond2.setColumn(_c,"EMPNO",this.ds_scoreCalc.getColumn(_b,"EMPNO"));this.ds_cond2.setColumn(_c,"APPLC_YEAR",this.ds_scoreCalc.getColumn(_b,"APPLC_YEAR"));this.fn_transaction("selectEmplFamilyInfo");}else{this.ds_hrFamilyList.clearData();}};this.ds_scoreCalc_oncolumnchanged=function(_b,_c){var _d=_c.columnid.substr(5,_c.columnid.length);switch(_c.newvalue){case "1":var _e=this.ds_scoreStdrAdit.getColumn(nexacro.toNumber(_d),"ADIT_SCORE");var _f=_b.getColumn(_c.row,"DNTMY_SCORE");_b.setColumn(_c.row,"DNTMY_SCORE",nexacro.toNumber(_f,0,0,0)+nexacro.toNumber(_e,0,0,0));_b.setColumn(_c.row,"ADIT_SCORE_"+_d,nexacro.toNumber(_e,0,0,0));break;case "0":var _e=this.ds_scoreStdrAdit.getColumn(nexacro.toNumber(_d),"ADIT_SCORE");var _f=_b.getColumn(_c.row,"DNTMY_SCORE");_b.setColumn(_c.row,"DNTMY_SCORE",nexacro.toNumber(_f,0,0,0)-nexacro.toNumber(_e,0,0,0));_b.setColumn(_c.row,"ADIT_SCORE_"+_d,0);break;}if(_c.columnid=="EMPNO"){this.fn_searchSub();}else if(_c.columnid!="REAL_WLFARE_SCORE"&&_c.columnid!="WLFARE_SCORE_AMOUNT"){var _g=nexacro.toNumber(this.grd_scoreCalc.getCellValue(_c.row,6),0,0,0);var _h=Math.floor((_g/12))*_b.getColumn(_c.row,"REAL_APPLC_MONTH");_b.setColumn(_c.row,"REAL_WLFARE_SCORE",_h);_b.setColumn(_c.row,"WLFARE_SCORE_AMOUNT",_h*this.ds_scoreStdrAdit.getColumn(0,"WLFARE_SCORE_AMOUNT"));}else if(_c.columnid=="REAL_WLFARE_SCORE"){_b.setColumn(_c.row,"WLFARE_SCORE_AMOUNT",_c.newvalue*this.ds_scoreStdrAdit.getColumn(0,"WLFARE_SCORE_AMOUNT"));}};this.btn_calc_onclick=function(_b,_c){if(this.comUtils.isDatasetUpdated(this.ds_cond)){this.gfn_message("info.진행가능","조회 후");}if(this.ds_scoreCalc.getRowCount()>0){if(!this.gfn_message("confirm.삭제.진행","현재의 데이터를 모두 삭제하고 일괄계산합니다.")){return false;}}this.ds_calc.clearData();this.ds_calc.addRow();this.ds_calc.setColumn(0,"APPLC_YEAR",this.ds_scoreStdrAdit.getColumn(0,"APPLC_YEAR"));this.ds_calc.setColumn(0,"STDR_APPLC_YEAR",this.ds_scoreStdrAdit.getColumn(0,"STDR_APPLC_YEAR"));this.ds_calc.setColumn(0,"ADIT_STDR_CNT",this.ds_scoreStdrAdit.getRowCount()-1);this.fn_transaction("calc");};this.grd_scoreCalc_onexpanddown=function(_b,_c){this.gfn_popup("btn_empPopup",800,530,"","","com::empno_P01.xfdl","fn_popupCallback",true);};this.fn_popupCallback=function(_b,_c){if(_b=="btn_empPopup"){if(_c!=null&&_c.length>0){var _d=new Dataset();_d.loadXML(_c);this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"EMPNO",_d.getColumn(0,"EMPNO"));this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"EMPNM",_d.getColumn(0,"EMPNM"));this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"DEPT_NM",_d.getColumn(0,"DEPT_NM"));this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"HR_CLSF_SE",_d.getColumn(0,"HR_CLSF_SE"));this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"SEXDSTN",_d.getColumn(0,"SEXDSTN"));this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"ECNY_DE",_d.getColumn(0,"ECNY_DE"));this.ds_scoreCalc.setColumn(this.ds_scoreCalc.rowposition,"BRTHDY",_d.getColumn(0,"BRTHDY"));}}};});this.on_initEvent=function(){this.ds_scoreCalc.addEventHandler("oncolumnchanged",this.ds_scoreCalc_oncolumnchanged,this);this.ds_scoreCalc.addEventHandler("onrowposchanged",this.ds_scoreCalc_onrowposchanged,this);this.ds_calc.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.HRM090802_onload,this);this.div_search.spn_year.addEventHandler("ontextchanged",this.div_search_year1_ontextchanged,this);this.div_search.edt_emplnm.addEventHandler("onkeyup",this.div_search_edt_emplnm_onkeyup,this);this.grd_scoreCalc.addEventHandler("onsummclick",this.grd_scoreCalc_onsummclick,this);this.grd_scoreCalc.addEventHandler("onexpanddown",this.grd_scoreCalc_onexpanddown,this);this.grd_scoreCalc.addEventHandler("onheadclick",this.grd_scoreCalc_onheadclick,this);this.btn_calc.addEventHandler("onclick",this.btn_calc_onclick,this);this.grd_hrFamilyList.addEventHandler("oncellclick",this.div_work_div_detail00_tab_empInfo_tabpage2_Grid00_oncellclick,this);this.grd_hrFamilyList.addEventHandler("onheadclick",this.div_work_div_detail00_tab_empInfo_tabpage2_Grid00_onheadclick,this);};this.loadIncludeScript("HRM090802.xfdl");};})();