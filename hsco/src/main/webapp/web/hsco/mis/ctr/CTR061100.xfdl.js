﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR061100");this.set_classname("CTR061100");this.set_titletext("지체상금현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEARCH_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_TO_DE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_GBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr022",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_delayIndmnty",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"string\" size=\"32\"/><Column id=\"DDC_DAYCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CNTRCT_SE\" type=\"string\" size=\"32\"/><Column id=\"CNTRCT_SE_NM\" type=\"string\" size=\"32\"/><Column id=\"LEVY_DE\" type=\"string\" size=\"32\"/><Column id=\"CNTRCT_NM\" type=\"string\" size=\"32\"/><Column id=\"CNTRCT_NO\" type=\"string\" size=\"32\"/><Column id=\"LEVY_ENTRPS\" type=\"string\" size=\"32\"/><Column id=\"LEVY_TRGET_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"COMPET_TMLMT\" type=\"string\" size=\"32\"/><Column id=\"REAL_COMPET_DE\" type=\"string\" size=\"32\"/><Column id=\"CNTRCT_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DELAY_DAYCNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BSNS_NM\" type=\"string\" size=\"32\"/><Column id=\"LEVY_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CNTRCT_DE\" type=\"string\" size=\"32\"/><Column id=\"BCNC_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search00","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search00);_a.set_taborder("0");_a.set_text("부과년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Static("Static03","absolute","247","5","64","21",null,null,this.div_search00);_a.set_taborder("2");_a.set_text("계약번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search00.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","648","5","56","21",null,null,this.div_search00);_a.set_taborder("6");_a.set_text("계약일");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Calendar("Cal_CNT_ST","absolute","704","5","110","21",null,null,this.div_search00);this.div_search00.addChild(_a.name,_a);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static04","absolute","814","5","21","21",null,null,this.div_search00);_a.set_taborder("8");_a.set_text("~");_a.style.set_align("center");this.div_search00.addChild(_a.name,_a);_a=new Calendar("Cal_CNT_ED","absolute","835","5","110","21",null,null,this.div_search00);this.div_search00.addChild(_a.name,_a);_a.set_taborder("9");_a.set_dateformat("yyyy-MM-dd");_a=new Spin("Spin00","absolute","160","5","71","21",null,null,this.div_search00);_a.set_taborder("1");_a.set_value("0");this.div_search00.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","247","31","64","21",null,null,this.div_search00);_a.set_taborder("12");_a.set_text("부과업체");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Edit("div_bcnc_cd","absolute","316","31","99","21",null,null,this.div_search00);_a.set_taborder("13");this.div_search00.addChild(_a.name,_a);_a=new Edit("div_bcnc_nm","absolute","417","31","216","21",null,null,this.div_search00);_a.set_taborder("15");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search00.addChild(_a.name,_a);_a=new Combo("cbo_CNT_SE","absolute","84","31","147","21",null,null,this.div_search00);this.div_search00.addChild(_a.name,_a);_a.set_taborder("11");_a.set_innerdataset("@ds_ctr022");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_BUDGET_SE","absolute","15","31","64","21",null,null,this.div_search00);_a.set_taborder("10");_a.set_text("계약구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Button("btn_bcncPopup","absolute","394","31","21","21",null,null,this.div_search00);_a.set_taborder("14");_a.set_cssclass("btn_WF_Search");this.div_search00.addChild(_a.name,_a);_a=new Edit("div_bcnc_cd00","absolute","316","5","99","21",null,null,this.div_search00);_a.set_taborder("3");this.div_search00.addChild(_a.name,_a);_a=new Button("btn_cntrctPopup","absolute","394","5","21","21",null,null,this.div_search00);_a.set_taborder("4");_a.set_cssclass("btn_WF_Search");this.div_search00.addChild(_a.name,_a);_a=new Edit("div_bcnc_nm00","absolute","417","5","216","21",null,null,this.div_search00);_a.set_taborder("5");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search00.addChild(_a.name,_a);_a=new Combo("cmb_YEAR_GBN","absolute","84","5","73","21",null,null,this.div_search00);this.div_search00.addChild(_a.name,_a);var _b=new Dataset("cmb_YEAR_GBN_innerdataset",this.div_search00.cmb_YEAR_GBN);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">년도별</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("16");_a.set_value("0");_a.set_text("전체");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_index("0");_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("7");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","93",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_delayIndmnty");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"130\"/><Column size=\"180\"/><Column size=\"177\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"계약번호\"/><Cell col=\"2\" text=\"계약일\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"계약명\"/><Cell col=\"5\" text=\"계약금액\"/><Cell col=\"6\" text=\"사업명\"/><Cell col=\"7\" text=\"부과업체\"/><Cell col=\"8\" text=\"부과일자\"/><Cell col=\"9\" text=\"준공기한\"/><Cell col=\"10\" text=\"실제준공일\"/><Cell col=\"11\" text=\"공제일수\"/><Cell col=\"12\" text=\"지체일수\"/><Cell col=\"13\" text=\"부과대상금액\"/><Cell col=\"14\" text=\"부과금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CNTRCT_NO\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CNTRCT_SE_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CNTRCT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:CNTRCT_AMOUNT\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:BSNS_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:BCNC_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:LEVY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:COMPET_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:REAL_COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:DDC_DAYCNT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:DELAY_DAYCNT\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:LEVY_TRGET_AMOUNT\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:LEVY_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats","absolute","0","69","100","19",null,null,this);_a.set_taborder("2");_a.set_text("계약현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","59",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","88",null,"5","28",null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelExport","absolute",null,"69","25","19","28",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search00,function(_c){_c.set_taborder("0");_c.set_text("Div00");_c.set_cssclass("div_WFSA_Box");});this.div_search00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("CTR061100");_c.set_titletext("지체상금현황");});this.addLayout(_a.name,_a);_a=new BindItem("item3","div_search00.cbo_CNT_SE","value","ds_cond","CNTRCT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search00.Cal_CNT_ST","value","ds_cond","CNTRCT_FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search00.Cal_CNT_ED","value","ds_cond","CNTRCT_TO_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search00.Spin00","value","ds_cond","SEARCH_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search00.div_bcnc_cd","value","ds_cond","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search00.div_bcnc_nm","value","ds_cond","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search00.div_bcnc_cd00","value","ds_cond","CNTRCT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search00.div_bcnc_nm00","value","ds_cond","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search00.cmb_YEAR_GBN","value","ds_cond","YEAR_GBN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CTR061100.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR061100.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR061100.xfdl",function(){this.CTR061100_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CTR061100_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SEARCH_YEAR",this.comUtils.getClientDate("YYYY"));var _a=[["ds_ctr022","CTR022","Y","A","B"]];var _b=function(_c,_d,_e){this.ds_cond.setColumn(0,"CNTRCT_SE","");this.ds_cond.setColumn(0,"YEAR_GBN","0");this.div_search00.Spin00.set_enable(false);this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/ctr/CTR061100/delayIndmntyList.do";var _c="input1=ds_cond";var _d="ds_delayIndmnty=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;default:break;}}};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","지체상금현황");_a.setSaveFilename("지체상금현황");_a.clearLocalDs();_a.setGrid(this.grd);_a.setReportPath("/common/hscoLandscapeA4.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"지체상금현황",_b,"common::frmReportPopup.xfdl","report_callback");};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"Excel File Download");};this.fn_popup_onclick=function(_a,_b){switch(_a.name){case "btn_cntrctPopup":var _c={arg_0:this,searchStr:this.ds_cond.saveXML()};this.gfn_popup("btn_cntrctPopup",600,500,"계약번호 선택",_c,"mis_ctr::CTR030100_P08.xfdl","fn_popupCallBack",true);break;case "btn_bcncPopup":var _c={arg_0:this,searchStr:this.ds_cond.saveXML()};this.gfn_popup("btn_bcncPopup",600,500,"거래업체 선택",_c,"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);break;}};this.fn_popupCallBack=function(_a,_b){var _c=new Dataset();switch(_a){case "btn_cntrctPopup":if(!this.comUtils.isNull(_b)){_c.loadXML(_b);this.ds_cond.setColumn(0,"CNTRCT_NO",_c.getColumn(0,"CNTRCT_NO"));this.ds_cond.setColumn(0,"CNTRCT_NM",_c.getColumn(0,"CNTRCT_NM"));}break;case "btn_bcncPopup":if(!this.comUtils.isNull(_b)){_c.loadXML(_b);this.ds_cond.setColumn(0,"BCNC_CODE",_c.getColumn(0,"BCNC_CODE"));this.ds_cond.setColumn(0,"BCNC_NM",_c.getColumn(0,"BCNC_NM"));}break;}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="CNTRCT_NO"){if(!_b.newvalue){_a.setColumn(_b.row,"CNTRCT_NM","");}}else if(_b.columnid=="BCNC_CODE"){if(!_b.newvalue){_a.setColumn(_b.row,"BCNC_NM","");}}};this.div_search00_cmb_YEAR_GBN_onitemchanged=function(_a,_b){if("0"==_b.postvalue){this.div_search00.Spin00.set_enable(false);}else{this.div_search00.Spin00.set_enable(true);}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_ctr022.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.CTR061100_onload,this);this.addEventHandler("oninit",this.CTR061100_oninit,this);this.div_search00.sta_YEAR.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.div_search00.btn_bcncPopup.addEventHandler("onclick",this.fn_popup_onclick,this);this.div_search00.btn_cntrctPopup.addEventHandler("onclick",this.fn_popup_onclick,this);this.div_search00.cmb_YEAR_GBN.addEventHandler("onitemchanged",this.div_search00_cmb_YEAR_GBN_onitemchanged,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("CTR061100.xfdl");};})();