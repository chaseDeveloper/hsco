﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01040205");this.set_classname("RNT01040205");this.set_titletext("수납파일변환");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_ocrRcivList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REC_DATE\" type=\"STRING\" size=\"7\"/><Column id=\"PAY_DIV\" type=\"STRING\" size=\"4\"/><Column id=\"APT_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"HO\" type=\"STRING\" size=\"4\"/><Column id=\"PAYEND_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"PAY_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BK_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"BK_SCODE\" type=\"STRING\" size=\"4\"/><Column id=\"REC_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MISS_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REC_CLASS\" type=\"STRING\" size=\"4\"/><Column id=\"REC_GUBUN\" type=\"STRING\" size=\"4\"/><Column id=\"REC_SEQ\" type=\"STRING\" size=\"4\"/><Column id=\"WORK_DIV\" type=\"STRING\" size=\"1\"/><Column id=\"STMP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RECP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CRT_YN\" type=\"STRING\" size=\"10\"/><Column id=\"CRT_PAYNUM\" type=\"STRING\" size=\"5\"/><Column id=\"TRANS_DATE\" type=\"DATE\" size=\"7\"/><Column id=\"TRANS_USERID\" type=\"STRING\" size=\"12\"/><Column id=\"OCRBAND\" type=\"STRING\" size=\"50\"/><Column id=\"OCR_MADE\" type=\"STRING\" size=\"20\"/><Column id=\"OCR_DATE\" type=\"STRING\" size=\"7\"/><Column id=\"SEQ_ID\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DIV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bankList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_allRentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_allHoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_allDongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">HOUSE_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택코드</Col></Row><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">DONG</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">동</Col></Row><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">HO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">호</Col></Row><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">PAY_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부구분</Col></Row><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">PAY_TMLMT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납입기한</Col></Row><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">RCIV_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">수납일자</Col></Row><Row><Col id=\"compId\">ds_ocrRcivList</Col><Col id=\"colId\">RCIV_AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">수납금</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","79","5","190","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a=new Static("Static05","absolute","532","5","64","21",null,null,this.div_search);_a.set_taborder("84");_a.set_text("수납일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("86");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","284","5","51","21",null,null,this.div_search);_a.set_taborder("87");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","335","5","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_dongList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Combo("cmb_ho","absolute","427","5","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_hoList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Calendar("cal_rcivDe","absolute","596","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static00","absolute","420","5","10","21",null,null,this.div_search);_a.set_taborder("92");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","335","5","84","21",null,null,this.div_search);_a.set_taborder("93");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","427","5","85","21",null,null,this.div_search);_a.set_taborder("94");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","9","10","148","21",null,null,this.div_WORK);_a.set_taborder("9");_a.set_text("수납파일 목록");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","0","36","1031","27",null,null,this.div_WORK);_a.set_taborder("11");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","36","80","27",null,null,this.div_WORK);_a.set_taborder("12");_a.set_text("납부구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","261","36","80","27",null,null,this.div_WORK);_a.set_taborder("13");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","522","36","80","27",null,null,this.div_WORK);_a.set_taborder("14");_a.set_text("동/호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_paySe","absolute","82","39","177","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_paySeList");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_cssclass("cmb_WF_Essential");_a.set_type("filter");_a=new Static("Static01","absolute","0","62","1031","27",null,null,this.div_WORK);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","261","62","80","27",null,null,this.div_WORK);_a.set_taborder("16");_a.set_text("수납일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM03","absolute","0","62","80","27",null,null,this.div_WORK);_a.set_taborder("17");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","522","62","80","27",null,null,this.div_WORK);_a.set_taborder("19");_a.set_text("수납금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_payTmlmt","absolute","82","65","177","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("cal_rcivDe","absolute","343","65","177","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new MaskEdit("MaskEdit00","absolute","604","65","162","21",null,null,this.div_WORK);_a.set_taborder("7");_a.set_mask("9,999");_a.set_cssclass("msk_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","89","1031","10",null,null,this.div_WORK);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_ocrRcivList","absolute","0","99",null,null,"0","0",this.div_WORK);_a.set_taborder("22");_a.set_autofittype("col");_a.set_binddataset("ds_ocrRcivList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"152\"/><Column size=\"65\"/><Column size=\"62\"/><Column size=\"81\"/><Column size=\"84\"/><Column size=\"77\"/><Column size=\"83\"/><Column size=\"78\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택코드\"/><Cell col=\"1\" text=\"주택명\"/><Cell col=\"2\" text=\"동\"/><Cell col=\"3\" text=\"호\"/><Cell col=\"4\" text=\"납부구분\"/><Cell col=\"5\" text=\"납부기한\"/><Cell col=\"6\" text=\"수납일자\"/><Cell col=\"7\" text=\"수납금액\"/><Cell col=\"8\" text=\"작업구분\"/><Cell col=\"9\" text=\"중복건수\"/></Band><Band id=\"body\"><Cell text=\"bind:APT_CODE\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:APT_CODE\" combodataset=\"ds_allRentHouseCodeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:PAY_DIV\" combodataset=\"ds_paySeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:PAYEND_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:REC_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:REC_AMT\"/><Cell col=\"8\" text=\"bind:WORK_DIV_NM\"/><Cell col=\"9\" text=\"bind:CNT\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount() + &quot; 건&quot;\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;REC_AMT&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","343","39","177","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_allRentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_type("filter");_a=new Edit("edt_dong","absolute","605","39","80","21",null,null,this.div_WORK);_a.set_taborder("23");_a.set_readonly("false");_a.set_cssclass("edt_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","687","39","80","21",null,null,this.div_WORK);_a.set_taborder("24");_a.set_readonly("false");_a.set_cssclass("edt_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01040205");_b.set_titletext("수납파일변환");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.cmb_paySe","value","ds_ocrRcivList","PAY_DIV");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.cmb_rentHouseCode","value","ds_ocrRcivList","APT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.MaskEdit00","value","ds_ocrRcivList","REC_AMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.cal_rcivDe","value","ds_ocrRcivList","REC_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.cal_payTmlmt","value","ds_ocrRcivList","PAYEND_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.edt_dong","value","ds_ocrRcivList","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.edt_ho","value","ds_ocrRcivList","HO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT01040205.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01040205.xfdl",function(){this.RNT01040205_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01040205_onload=function(_a,_b){var _c=this.gfn_today();this.div_search.cal_rcivDe.set_value(_c);this.div_WORK.cal_payTmlmt.set_value(_c);this.div_WORK.cal_rcivDe.set_value(_c);this.div_search.edt_dong.clearEventHandler("onkeydown");this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체/%");this.fn_get_cmmCode(this.ds_paySeList,"선택",{grpCode:"RNT009"});this.fn_get_rentHouseCode(this.div_WORK.cmb_rentHouseCode,"선택");};this.div_search_cmb_rentHouseCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;this.fn_get_rentDong(this.div_search.cmb_dong,"전체/%",{rentHouseCode:_c});};this.fn_search=function(){this.ds_ocrRcivList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("ocrRcivList");};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_ocrRcivList,this.ds_validation)==false){return;}this.fn_transaction("ocrRcivCUD");};this.fn_insert=function(){var _a=this.ds_ocrRcivList.addRow();this.ds_ocrRcivList.setColumn(_a,"OPERT_SE","I");};this.fn_delete=function(){if(this.confirm("D")==true){this.ds_ocrRcivList.deleteSelectRow();}};this.fn_cancel=function(){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_ocrRcivList.cancel();}};this.div_WORK_grd_ocrRcivList_onselectchanged=function(_a,_b){this.ds_allDongList.filter("CODE_NM == '선택' || ( RENT_HOUSE_CODE == "+this.ds_ocrRcivList.getColumn(this.ds_ocrRcivList.rowposition,"HOUSE_CODE")+")");this.ds_allHoList.filter("CODE_NM == '선택' || ( RENT_HOUSE_CODE == "+this.ds_ocrRcivList.getColumn(this.ds_ocrRcivList.rowposition,"HOUSE_CODE")+" AND DONG == "+this.ds_ocrRcivList.getColumn(this.ds_ocrRcivList.rowposition,"DONG")+")");};this.div_WORK_cmb_rentHouseCode_onitemchanged=function(_a,_b){this.debug(this.ds_allDongList,true);this.ds_allDongList.filter("CODE_NM == '선택' || RENT_HOUSE_CODE == "+_b.postvalue);this.ds_allHoList.filter("CODE_NM == '선택' || ( RENT_HOUSE_CODE == "+_b.postvalue+" && DONG == "+null+")");this.ds_ocrRcivList.setColumn(this.ds_ocrRcivList.rowposition,"DONG",null);this.ds_ocrRcivList.setColumn(this.ds_ocrRcivList.rowposition,"HO",null);this.debug(this.ds_allDongList,8);};this.div_WORK_cmb_dong_onitemchanged=function(_a,_b){this.ds_allHoList.filter("CODE_NM == '선택' || ( RENT_HOUSE_CODE == '"+this.ds_ocrRcivList.getColumn(this.ds_ocrRcivList.rowposition,"HOUSE_CODE")+"' && DONG == '"+_b.postvalue+"')");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "ocrRcivList":var _c="/hsco/pms/rnt/pra/RNT01040205/ocrRcivList.do";var _d="input1=ds_cond00";var _e="ds_ocrRcivList=output1";break;case "ocrRcivCUD":var _c="/hsco/pms/rnt/pra/RNT01040205/ocrRcivCUD.do";var _d="input1=ds_ocrRcivList:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01040205_oninit,this);this.addEventHandler("onload",this.RNT01040205_onload,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.div_search_cmb_dong_onitemchanged,this);this.div_search.cal_rcivDe.addEventHandler("canchange",this.div_search_cal_stRceptDe_canchange,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.grd_ocrRcivList.addEventHandler("onselectchanged",this.div_WORK_grd_ocrRcivList_onselectchanged,this);this.div_WORK.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_WORK_cmb_rentHouseCode_onitemchanged,this);};this.loadIncludeScript("RNT01040205.xfdl");};})();