﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM080101");this.set_classname("HPM080101");this.set_titletext("시설매출관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_CND\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_CND2\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_CND3\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"SETLE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcpmnyDtlsManageList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SETLE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SETLE_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"SETLE_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"SETLE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHSR\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODS_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DELNG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RCPMNY_DTLS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RCPMNY_DTLS_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_setleSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">BGNDE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결제시작일자</Col></Row><Row><Col id=\"colId\">ENDDE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결제종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"nlength\">LE</Col><Col id=\"msgId\">결제종료일자^결제시작일자</Col><Col id=\"to\">ENDDE</Col><Col id=\"from\">BGNDE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bizplcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_TY\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"GW_BIZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","59","1031","10",null,null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","69","130","19",null,null,this);_a.set_taborder("5");_a.set_text("시설매출관리 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","88",null,"5","28",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_rcpmnyDtlsManageList","absolute","0","93",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_rcpmnyDtlsManageList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"96\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"담당부서\"/><Cell col=\"2\" text=\"상점ID\"/><Cell col=\"3\" text=\"결제구분\"/><Cell col=\"4\" text=\"결제기관\"/><Cell col=\"5\" text=\"결제일자\"/><Cell col=\"6\" text=\"매출금액\"/><Cell col=\"7\" text=\"주문번호\"/><Cell col=\"8\" text=\"구매자\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"상품정보\"/><Cell col=\"11\" text=\"거래번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORE_ID\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:SETLE_SE\" combodataset=\"ds_setleSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SETLE_INSTT\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:SETLE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:AMOUNT\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ORDER_NO\"/><Cell col=\"8\" text=\"bind:PURCHSR\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:GOODS_INFO\"/><Cell col=\"11\" text=\"bind:DELNG_NO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"거래기준합계\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("77");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("78");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","82",null,"5","0",null,this.div_search);_a.set_taborder("79");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","279","0","15",null,null,"0",this.div_search);_a.set_taborder("81");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("82");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0",null,null,"5","0","0",this.div_search);_a.set_taborder("83");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("85");_a.set_text("담당부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_setleSe","absolute","363","31","103","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_setleSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("null");_a=new Static("sta_searchCnd2","absolute","14","31","64","21",null,null,this.div_search);_a.set_taborder("96");_a.set_text("검색조건");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_searchCnd23","absolute","84","31","76","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_searchCnd23_innerdataset",this.div_search.cmb_searchCnd23);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">구매자</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">상품정보</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("4");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("001");_a.set_text("구매자");_a=new Edit("edt_searchVal","absolute","162","31","118","21",null,null,this.div_search);_a.set_taborder("5");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","85","5","195","21",null,null,this.div_search);_a.set_taborder("0");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe05","absolute","294","31","64","21",null,null,this.div_search);_a.set_taborder("104");_a.set_text("결제구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","713","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_visible("true");_a=new Static("Static03","absolute","699","9","10","16",null,null,this.div_search);_a.set_taborder("106");_a.set_text("~");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","595","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_visible("true");_a=new Static("sta_searchCnd","absolute","527","5","64","21",null,null,this.div_search);_a.set_taborder("109");_a.set_text("결제일자");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","513","0","15",null,null,"0",this.div_search);_a.set_taborder("111");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bizplcCode","absolute","294","5","51","21",null,null,this.div_search);_a.set_taborder("112");_a.set_text("사업소");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bizplcList","absolute","363","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("113");_a.set_innerdataset("@ds_bizplcList");_a.set_codecolumn("BIZPLC_CODE");_a.set_datacolumn("BIZPLC_NM");_a=new Grid("grd_rcpmnyDtlsManageList00","absolute","1","761",null,null,"27","-273",this);_a.set_taborder("8");_a.set_binddataset("ds_rcpmnyDtlsManageList");_a.set_readonly("true");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"담당부서\"/><Cell col=\"2\" text=\"상점ID\"/><Cell col=\"3\" text=\"매출일자\"/><Cell col=\"4\" text=\"지급일자\"/><Cell col=\"5\" text=\"결제구분\"/><Cell col=\"6\" text=\"처리상태\"/><Cell col=\"7\" text=\"결제기관\"/><Cell col=\"8\" text=\"주문번호\"/><Cell col=\"9\" text=\"결제일자\"/><Cell col=\"10\" text=\"승인번호\"/><Cell col=\"11\" text=\"매출금액\"/><Cell col=\"12\" text=\"결제번호\"/><Cell col=\"13\" text=\"정산금액\"/><Cell col=\"14\" text=\"구매자\"/><Cell col=\"15\" text=\"반송사유\"/><Cell col=\"16\" text=\"매입/취소요청일\"/><Cell col=\"17\" text=\"비고\"/><Cell col=\"18\" text=\"상품정보\"/><Cell col=\"19\" text=\"거래번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORE_ID\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:SELNG_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:PYMNT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SETLE_SE\" combodataset=\"ds_setleSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PROCESS_STTUS\" combodataset=\"ds_setleProcessSttusSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SETLE_INSTT\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ORDER_NO\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:SETLE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:CONFM_NO\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SETLE_AM\"/><Cell col=\"12\" text=\"bind:SETLE_NO\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EXCCLC_AM\"/><Cell col=\"14\" text=\"bind:PURCHSR\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RETRN_RESN\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:PUCHAS_CANCL_RQESTDE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/><Cell col=\"18\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:GOODS_INFO\"/><Cell col=\"19\" text=\"bind:DELNG_NO\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","737","210","270","180",null,null,this);_a.set_taborder("9");_a.set_binddataset("ds_bizplcList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"CHK\"/><Cell col=\"1\" disptype=\"normal\" text=\"BIZPLC_CODE\"/><Cell col=\"2\" disptype=\"normal\" text=\"BIZPLC_NM\"/><Cell col=\"3\" disptype=\"normal\" text=\"BIZPLC_TY\"/><Cell col=\"4\" disptype=\"normal\" text=\"BIZPLC_PLACE\"/><Cell col=\"5\" disptype=\"normal\" text=\"MANAGE_DEPT_CODE\"/><Cell col=\"6\" disptype=\"normal\" text=\"MANAGE_DEPT_NM\"/><Cell col=\"7\" disptype=\"normal\" text=\"TELNO\"/><Cell col=\"8\" disptype=\"normal\" text=\"USE_AT\"/><Cell col=\"9\" disptype=\"normal\" text=\"OUTPT_ORDR\"/><Cell col=\"10\" disptype=\"normal\" text=\"RM\"/><Cell col=\"11\" disptype=\"normal\" text=\"GW_BIZPLC_ID\"/><Cell col=\"12\" disptype=\"normal\" text=\"REGISTER_ID\"/><Cell col=\"13\" disptype=\"normal\" text=\"REGIST_DT\"/><Cell col=\"14\" disptype=\"normal\" text=\"UPDUSR_ID\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:CHK\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:BIZPLC_CODE\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:BIZPLC_NM\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:BIZPLC_TY\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:BIZPLC_PLACE\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:MANAGE_DEPT_CODE\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:TELNO\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:USE_AT\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:OUTPT_ORDR\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:RM\"/><Cell col=\"11\" disptype=\"normal\" text=\"bind:GW_BIZPLC_ID\"/><Cell col=\"12\" disptype=\"normal\" text=\"bind:REGISTER_ID\"/><Cell col=\"13\" disptype=\"normal\" text=\"bind:REGIST_DT\"/><Cell col=\"14\" disptype=\"normal\" text=\"bind:UPDUSR_ID\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("HPM080101");_c.set_titletext("시설매출관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_bgnDe","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_endDe","value","ds_cond","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.cmb_setleSe","value","ds_cond","SETLE_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_search.cmb_searchCnd23","value","ds_cond","SEARCH_CND2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_search.edt_searchVal","value","ds_cond","SEARCH_VAL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.cmb_bizplcList","value","ds_cond","BIZPLC_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HPM080101.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM080101.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM080101.xfdl",function(){this.saveRow= -1;this.HPM080101_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HPM080101_onload=function(_a,_b){this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.ds_cond.setColumn(0,"SEARCH_CND","003");this.ds_cond.setColumn(0,"SEARCH_VAL","");this.ds_cond.setColumn(0,"SEARCH_CND2","001");this.ds_cond.setColumn(0,"SEARCH_CND3","001");this.ds_cond.setColumn(0,"BGNDE",this.dateUtils.format(this.gfn_today(),"yyyymmdd"));this.ds_cond.setColumn(0,"ENDDE",this.dateUtils.format(this.gfn_today(),"yyyymmdd"));this.ds_cond.setColumn(0,"SETLE_SE","");this.ds_cond.setColumn(0,"USE_AT","1");var _a=[["ds_setleSe","HPM009","1","전체"]];var _b=function(_c,_d,_e){if(this.gfn_authGrpId("DEV_GRP")!= -1){this.chargerAt=true;}if(this.gfn_authGrpId("HPM_ADMIN")!= -1){this.chargerAt=true;}if(this.gfn_authGrpId("ALL_ADMIN")!= -1){this.chargerAt=true;}if(this.gfn_authGrpId("HSCO_ADMIN")!= -1){this.chargerAt=true;}if(this.chargerAt){this.div_search.div_dept.set_enable(true);}this.fn_transaction("selectBizplcCode");};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_rcpmnyDtlsManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_rcpmnyDtlsManageList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectRcpmnyDtlsManageList");};this.fn_transaction=function(_a){switch(_a){case "selectBizplcCode":var _b="hsco/mis/hrm/HRM010102/bizplcSearchList.do";var _c="input1=ds_cond";var _d="ds_bizplcList=output1";break;case "selectRcpmnyDtlsManageList":var _b="hsco/hpm/ctm/HPM080101/selectRcpmnyDtlsManageList.do";var _c="input1=ds_cond";var _d="ds_rcpmnyDtlsManageList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectBizplcCode":var _d=this.ds_bizplcList.addRow();this.ds_bizplcList.setColumn(_d,"BIZPLC_CODE","9999");this.ds_bizplcList.setColumn(_d,"BIZPLC_NM","해당없음");this.fn_search();break;case "selectRcpmnyDtlsManageList":if(this.saveRow!= -1){this.ds_rcpmnyDtlsManageList.set_rowposition(this.saveRow);this.saveRow= -1;}}}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="DEPT_CODE"){trace("ds_cond_oncolumnchanged -- DEPT_CODE");var _c=_b.newvalue;if(!this.comUtils.isNull(_c)){this.ds_bizplcList.set_filterstr("");var _d=this.ds_bizplcList.getCaseCount("MANAGE_DEPT_CODE == '"+_c+"'");trace(_d);if(_d>0){trace("ds_cond_oncolumnchanged -- 1");this.ds_bizplcList.set_filterstr("MANAGE_DEPT_CODE == '"+_c+"' || BIZPLC_CODE == ''");this.div_search.cmb_bizplcList.set_index(0);}else{trace("ds_cond_oncolumnchanged -- 2");this.ds_bizplcList.set_filterstr("BIZPLC_CODE == '9999'");_a.setColumn(0,"BIZPLC_CODE","9999");}}else{trace("ds_cond_oncolumnchanged -- 3");this.ds_bizplcList.set_filterstr("BIZPLC_CODE == '9999'");_a.setColumn(0,"BIZPLC_CODE","9999");}}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_rcpmnyDtlsManageList.addEventHandler("onrowposchanged",this.ds_delbrSttus_onrowposchanged,this);this.ds_bizplcList.addEventHandler("cancolumnchange",this.ds_bizplcList_cancolumnchange,this);this.addEventHandler("oninit",this.HPM080101_oninit,this);this.addEventHandler("onload",this.HPM080101_onload,this);this.div_search.cmb_searchCnd23.addEventHandler("onitemchanged",this.div_search_cmb_searchCnd_onitemchanged,this);};this.loadIncludeScript("HPM080101.xfdl");this.loadPreloadList();};})();