﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02050100");this.set_classname("FRM02050100");this.set_titletext("분개장");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"schFrDe\" type=\"STRING\" size=\"256\"/><Column id=\"schToDe\" type=\"STRING\" size=\"256\"/><Column id=\"sortSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">schFrDe</Col><Col id=\"compId\">ds_schVal</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회일자</Col><Col id=\"from\">schFrDe</Col><Col id=\"to\">schToDe</Col></Row><Row><Col id=\"colId\">schToDe</Col><Col id=\"compId\">ds_schVal</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회일자</Col><Col id=\"from\">schFrDe</Col><Col id=\"to\">schToDe</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_jrnlzprList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEBTOR_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CRDIT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHIT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_chitTy",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("27");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE06","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("28");_a.set_text("조회일자");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","84","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("29");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","186","5","13","21",null,null,this.div_SEARCH);_a.set_taborder("30");_a.set_text("~");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","201","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("31");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_EMPL_SE00","absolute","316","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("32");_a.set_text("정렬기준");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Radio("Radio00","absolute","385","5","172","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.div_SEARCH.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전표번호별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계정과목별</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("33");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_direction("vertical");_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","132","19",null,null,this);_a.set_taborder("4");_a.set_text("분개장");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_jrnlzprList","absolute","0","67",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_jrnlzprList");_a.set_extendsizetype("row");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"275\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"회계일자\"/><Cell col=\"1\" text=\"전표번호\"/><Cell col=\"2\" text=\"계정과목\"/><Cell col=\"3\" text=\"차변\"/><Cell col=\"4\" text=\"대변\"/><Cell col=\"5\" text=\"적요\"/><Cell col=\"6\" text=\"전표유형\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CHIT_DE\"/><Cell col=\"1\" text=\"bind:CHIT_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ACNTCTGR_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getColumn(currow, &quot;DEBTOR_AMOUNT&quot;)==0 ? '' : DEBTOR_AMOUNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getColumn(currow, &quot;CRDIT_AMOUNT&quot;)==0 ? '' : CRDIT_AMOUNT\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:CHIT_TY\" combodataset=\"ds_chitTy\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DEBTOR_AMOUNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CRDIT_AMOUNT&quot;)\"/><Cell col=\"5\" colspan=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_c){_c.set_taborder("0");_c.set_text("Div00");_c.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("FRM02050100");_c.set_titletext("분개장");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_schVal","schFrDe");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Calendar01","value","ds_schVal","schToDe");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Radio00","value","ds_schVal","sortSe");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FRM02050100.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02050100.xfdl",function(){this.FRM02050100_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM02050100_onload=function(_a,_b){var _c=this.dateUtils.today();this.ds_schVal.setColumn(0,"schFrDe",this.dateUtils.addMonth(_c, -1,"s"));this.ds_schVal.setColumn(0,"schToDe",_c);this.ds_schVal.setColumn(0,"sortSe","1");this.fn_load_combo();};this.fn_load_combo=function(){this.fn_get_frmCmmCode(this.ds_chitTy,"",{grpCode:"FRM004"});};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_schVal,this.ds_validation)){return false;}this.ds_jrnlzprList.clearData();this.fn_transaction("selectJrnlzprList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectJrnlzprList":var _c="/hsco/pms/frm/FRM02050100/selectJrnlzprList.do";var _d="input1=ds_schVal";var _e="ds_jrnlzprList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM02050100_oninit,this);this.addEventHandler("onload",this.FRM02050100_onload,this);};this.loadIncludeScript("FRM02050100.xfdl");};})();