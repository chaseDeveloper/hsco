﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR060400");this.set_classname("CTR060400");this.set_titletext("하도급현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEARCH_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_GBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_entrpsAcctoSubcntrCnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCNTR_ENTRPS\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCNTR_CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUBCNTR_CNST\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PD_1\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PD_2\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr008",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr011",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr016",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_srchDs",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">의뢰번호</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">의뢰명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_entrpsAcctoSubcntrCnt","absolute","0","67",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_entrpsAcctoSubcntrCnt");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"20\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"2\" text=\"사업코드/명\"/><Cell col=\"3\" colspan=\"4\" text=\"원도급\"/><Cell col=\"7\" colspan=\"4\" text=\"하도급\"/><Cell col=\"11\" rowspan=\"2\" colspan=\"3\" text=\"계약기간\"/><Cell col=\"14\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"계약번호/명\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"계약상대자\"/><Cell row=\"1\" col=\"7\" text=\"하도급업체\"/><Cell row=\"1\" col=\"8\" text=\"하도급계약금액\"/><Cell row=\"1\" col=\"9\" text=\"하도급공종\"/><Cell row=\"1\" col=\"10\" text=\"계약일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BSNS_CODE\" suppress=\"1\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:BSNS_NM\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:CNTRCT_NO\" mask=\"####-#-#####\" suppress=\"2\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:CNTRCT_NM\" suppress=\"2\"/><Cell col=\"5\" text=\"bind:BCNC_CODE\" suppress=\"3\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:BCNC_NM\" suppress=\"3\"/><Cell col=\"7\" style=\"align:left middle;\" text=\"bind:SUBCNTR_ENTRPS\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SUBCNTR_CNTRCT_AMOUNT\"/><Cell col=\"9\" style=\"align:left middle;\" text=\"bind:SUBCNTR_CNST\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:CNTRCT_PD_1\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" text=\"~\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:CNTRCT_PD_2\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" style=\"align:left middle;\" text=\"bind:RM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"7\" text=\"합 계 :\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;SUBCNTR_CNTRCT_AMOUNT&quot;)\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","477","0",null,"5","404",null,this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","477",null,null,"5","404","0",this.div_search);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CNTRCT_NO00","absolute","15","5","104","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("하도급 계약년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","266","0","15",null,null,"26",this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CNTRCT_NO","absolute","281","5","64","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("계약번호");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCT_NO","absolute","345","5","101","21",null,null,this.div_search);_a.set_taborder("2");this.div_search.addChild(_a.name,_a);_a=new Button("searchCtrt","absolute","425","5","21","21",null,null,this.div_search);_a.set_taborder("3");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCT_NM","absolute","448","5","317","21",null,null,this.div_search);_a.set_taborder("4");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","266","5","15","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_CNTRCT_YEAR","absolute","204","5","60","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_YEAR_GBN","absolute","128","5","73","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_YEAR_GBN_innerdataset",this.div_search.cmb_YEAR_GBN);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">년도별</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("0");_a.set_value("0");_a.set_text("전체");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_index("0");_a=new Static("Static04","absolute",null,"0","15",null,"13","0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13",null,"0","0",this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","-1","43","150","19",null,null,this);_a.set_taborder("6");_a.set_text("하도급 현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","33",null,"10","28",null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelExport","absolute",null,"43","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("CTR060400");_c.set_titletext("하도급현황");});this.addLayout(_a.name,_a);_a=new BindItem("item10","div_search00.cmb_CNTRCT_MTH_CODE","value","ds_entrpsAcctoSubcntrCnt","CNTRCT_MTH_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_CNTRCT_NO","value","ds_cond","CNTRCT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item43","div_search.edt_CNTRCT_NM","value","ds_cond","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item36","div_search.spn_CNTRCT_YEAR","value","ds_cond","SEARCH_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_YEAR_GBN","value","ds_cond","YEAR_GBN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CTR060400.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR060400.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR060400.xfdl",function(){this.CTR060400_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR060400_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(0,"SEARCH_YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(0,"YEAR_GBN","0");this.div_search.spn_CNTRCT_YEAR.set_enable(false);this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_entrpsAcctoSubcntrCnt.clearData();this.fn_transaction("selectEntrpsAcctoSubcntrCnt");};this.fn_transaction=function(_a){switch(_a){case "selectEntrpsAcctoSubcntrCnt":var _b="/hsco/mis/ctr/CTR060400/selectEntrpsAcctoSubcntrCnt.do";var _c="input1=ds_cond";var _d="ds_entrpsAcctoSubcntrCnt=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectEntrpsAcctoSubcntrCnt":break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="CTR030100_P08"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"CNTRCT_NO");var _f=_c.getColumn(0,"CNTRCT_NM");this.ds_cond.setColumn(0,"CNTRCT_NO",_e);this.ds_cond.setColumn(0,"CNTRCT_NM",_f);this.fn_search();}}};this.div_search_searchCtrt_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("CTR030100_P08",800,530,"계약번호 선택",_c,"mis_ctr::CTR030100_P08.xfdl","fn_popupCallBack",true);};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_entrpsAcctoSubcntrCnt,"Excel File Download");};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="CNTRCT_NO"){if(!_b.newvalue){_a.setColumn(_b.row,"CNTRCT_NM","");}}};this.div_search_cmb_YEAR_GBN_onitemchanged=function(_a,_b){if("0"==_b.postvalue){this.div_search.spn_CNTRCT_YEAR.set_enable(false);}else{this.div_search.spn_CNTRCT_YEAR.set_enable(true);}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.CTR060400_onload,this);this.addEventHandler("oninit",this.CTR060400_oninit,this);this.div_search.searchCtrt.addEventHandler("onclick",this.div_search_searchCtrt_onclick,this);this.div_search.cmb_YEAR_GBN.addEventHandler("onitemchanged",this.div_search_cmb_YEAR_GBN_onitemchanged,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("CTR060400.xfdl");};})();