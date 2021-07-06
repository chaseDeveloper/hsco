﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040305");this.set_classname("RNT02040305");this.set_titletext("관리비체납현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_managectGenerationNpym",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_INT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AMT1\" type=\"STRING\" size=\"256\"/><Column id=\"AMT2\" type=\"STRING\" size=\"256\"/><Column id=\"AMT3\" type=\"STRING\" size=\"256\"/><Column id=\"MCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_managectHouseNpym",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_INT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"MRENT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1045","0",null,"735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","133","30",null,"21","884",null,this.div_search);_a.set_taborder("103");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("sta_schHouseSe00","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("109");_a.set_text("납입기한");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","586","5","176","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_displayrowcount("15");_a.set_autoselect("true");_a=new Static("sta_changeDe01","absolute","501","5","88","21",null,null,this.div_search);_a.set_taborder("113");_a.set_text("주택코드/명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_changeDe02","absolute","218","5","64","21",null,null,this.div_search);_a.set_taborder("114");_a.set_text("기준일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_payTmlmt","absolute","79","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static01","absolute","788","5","64","21",null,null,this.div_search);_a.set_taborder("117");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_stNpymMm","absolute","79","31","50","21",null,null,this.div_search);_a.set_taborder("5");_a.set_value("1");_a.style.set_align("right middle");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("sta_changeDe00","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("121");_a.set_text("체납개월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_changeDe03","absolute","218","31","64","21",null,null,this.div_search);_a.set_taborder("122");_a.set_text("체납금액");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edNpymMm","absolute","145","31","50","21",null,null,this.div_search);_a.set_taborder("6");_a.set_value("9999");_a.style.set_align("right middle");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","375","30",null,"21","643",null,this.div_search);_a.set_taborder("125");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Radio("rad_cntrctSe","absolute","586","30","178","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("rad_cntrctSe_innerdataset",this.div_search.rad_cntrctSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약자</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">해약자</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("9");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("1");_a=new Static("Static05","absolute","501","31","59","21",null,null,this.div_search);_a.set_taborder("128");_a.set_text("계약구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stdDe","absolute","282","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Edit("edt_dong","absolute","834","5","51","21",null,null,this.div_search);_a.set_taborder("3");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","897","5","51","21",null,null,this.div_search);_a.set_taborder("4");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","888","5","15","21",null,null,this.div_search);_a.set_taborder("132");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_edNpymAmt","absolute","388","31","91","21",null,null,this.div_search);_a.set_taborder("8");_a.set_value("999999999");_a.set_mask("9,999");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_stNpymAmt","absolute","282","31","91","21",null,null,this.div_search);_a.set_taborder("7");_a.set_value("1");_a.set_mask("9,999");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","59","1031","10",null,null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","69",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("4");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.div_work.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.div_work.Tab00);_a.set_text("세대별");this.div_work.Tab00.addChild(_a.name,_a);_a=new Static("Static00","absolute","1","1","1",null,null,"1",this.div_work.Tab00.tabpage1);_a.set_taborder("1");_a.set_text("1");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static02","absolute","1",null,null,"1","1","1",this.div_work.Tab00.tabpage1);_a.set_taborder("2");_a.set_text("1");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"1","1",null,"0","1",this.div_work.Tab00.tabpage1);_a.set_taborder("3");_a.set_text("1");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Grid("grd_managectGenerationNpymList","absolute","0","36",null,null,"0","0",this.div_work.Tab00.tabpage1);_a.set_taborder("4");_a.set_binddataset("ds_managectGenerationNpym");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"연락처1\"/><Cell col=\"5\" text=\"연락처2\"/><Cell col=\"6\" text=\"체납개월\"/><Cell col=\"7\" text=\"체납금액\"/><Cell col=\"8\" text=\"해약여부\"/><Cell col=\"9\" text=\"임대료\"/><Cell col=\"10\" text=\"연체이자(임대료)\"/><Cell col=\"11\" text=\"임대료계\"/><Cell col=\"12\" text=\"체납개월(임대료)\"/><Cell col=\"13\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" style=\"color:EXPR(CANCL_DE == null ? 'black' : 'red');color2:EXPR(CANCL_DE == null ? 'black' : 'red');selectcolor:EXPR(CANCL_DE == null ? 'black' : 'red');\" text=\"bind:NM\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:TELNO\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:MBTLNO\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:CNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL\"/><Cell col=\"8\" text=\"bind:CANCL_DE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT1\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT2\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMT3\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MCNT\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:RM\" tooltiptext=\"bind:RM\" autosizerow=\"limitmin\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(CNT)||0&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(TOTAL)||0&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(AMT1)||0&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(AMT2)||0&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(AMT3)||0&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(MCNT)||0&quot;)\"/><Cell col=\"13\"/></Band></Format></Formats>");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","31",null,"5","0",null,this.div_work.Tab00.tabpage1);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_work.Tab00.tabpage1);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Button("btn_infoPop","absolute",null,"10","105","21","0",null,this.div_work.Tab00.tabpage1);_a.set_taborder("7");_a.set_text("안내문");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.div_work.Tab00);_a.set_text("주택별");this.div_work.Tab00.addChild(_a.name,_a);_a=new Grid("grd_managectHouseNpymList","absolute","0","5",null,null,"0","0",this.div_work.Tab00.tabpage2);_a.set_taborder("0");_a.set_binddataset("ds_managectHouseNpym");_a.set_nodatatext("자료가 존재하지 않습니다.");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택코드\"/><Cell col=\"1\" text=\"주택명\"/><Cell col=\"2\" text=\"체납세대수\"/><Cell col=\"3\" text=\"체납금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RENT_HOUSE_CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:DEL_AMT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(DEL_AMT)||0&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(TOTAL)||0&quot;)\"/></Band></Format></Formats>");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"5","0",null,this.div_work.Tab00.tabpage2);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_c){_c.set_taborder("0");_c.style.set_background("#f9fbffff");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.Tab00.tabpage1,function(_c){_c.set_text("세대별");});this.div_work.Tab00.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.Tab00.tabpage2,function(_c){_c.set_text("주택별");});this.div_work.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_c){_c.set_taborder("1");_c.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("RNT02040305");_c.set_titletext("관리비체납현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02040305.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040305.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02040305.xfdl",function(){this.RNT02040305_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT02040305_onload=function(_a,_b){this.div_search.cal_stdDe.set_value(this.gfn_today());this.div_search.cal_payTmlmt.set_value(this.gfn_dateInfo("NOW_LAST_DATE"));this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체",{USE_AT:"1"});};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.ds_managectGenerationNpym.clearData();this.ds_managectHouseNpym.clearData();this.fn_transaction("selectManagectGenerationNpymList");this.fn_transaction("selectManagectHouseNpymList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectManagectGenerationNpymList":var _c="hsco/pms/rnt/prm/RNT02040305/selectManagectGenerationNpymList.do";var _d="input1=ds_cond00";var _e="ds_managectGenerationNpym=output1";break;case "selectManagectHouseNpymList":var _c="hsco/pms/rnt/prm/RNT02040305/selectManagectHouseNpymList.do";var _d="input1=ds_cond00";var _e="ds_managectHouseNpym=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){}}};this.div_work_btn_infoPop_onclick=function(_a,_b){var _c=this.div_search.cal_payTmlmt.value;this.gfn_popup("RNT02040305_P01",600,243,"",{ds_managectGenerationNpym:this.ds_managectGenerationNpym,payTmlmt:_c},"pms_rnt_prm::RNT02040305_P01.xfdl","",true);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040305_oninit,this);this.addEventHandler("onload",this.RNT02040305_onload,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.div_search_cmb_houseCode_onitemchanged,this);this.div_search.rad_cntrctSe.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.div_work.Tab00.tabpage1.btn_infoPop.addEventHandler("onclick",this.div_work_btn_infoPop_onclick,this);};this.loadIncludeScript("RNT02040305.xfdl");};})();