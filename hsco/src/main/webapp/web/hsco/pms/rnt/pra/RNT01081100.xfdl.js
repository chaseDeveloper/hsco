﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01081100");this.set_classname("RNT01081100");this.set_titletext("자격변경현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_searchDe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"QUALF_CHG_FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_CHG_TO_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"QUALF_CHG_FROM_DE\"/><Col id=\"QUALF_CHG_TO_DE\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_qualfChgList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><ConstColumn id=\"CHANGE_DE\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"CNTRCT_DE\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"DONG\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"HO\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"AEA\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"NM\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"IHIDNUM\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"RENT_BGNDE\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"RENT_ENDDE\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"QUALF_SE_BFCHG_NM\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"GTN_BFCHG\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"RNTCHRG_BFCHG\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"QUALF_SE_AFTCH_NM\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"GTN_AFTCH\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"RNTCHRG_AFTCH\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"GTN_DFNNT\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"DDCAMOUNT\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"REFND_AMOUNT\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"PYMNT_DE\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"RM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_qualfSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","0",null,"33","2.64%",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","79","5","137","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_houseSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_autoselect("true");_a=new Combo("cmb_rentHouseCode","absolute","295","5","190","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a.set_autoselect("true");_a=new Static("Static03","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("139");_a.set_text("주택구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","231","5","64","21",null,null,this.div_search);_a.set_taborder("140");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","500","5","64","21",null,null,this.div_search);_a.set_taborder("141");_a.set_text("변경일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_qualfChgFromDe","absolute","564","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static02","absolute","664","5","12","21",null,null,this.div_search);_a.set_taborder("143");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_qualfChgToDe","absolute","676","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new CheckBox("chk_RdRegNumInc","absolute","795","5","125","21",null,null,this.div_search);_a.set_taborder("144");_a.set_text("주민번호미표기");_a.set_value("true");_a.set_cssclass("chk_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0%","33",null,null,"2.64%","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0%","0",null,"10","0%",null,this.div_WORK);_a.set_taborder("28");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","10",null,"21","85.55%",null,this.div_WORK);_a.set_taborder("29");_a.set_text("자격변경현황");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","31",null,"5","0%",null,this.div_WORK);_a.set_taborder("30");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_qualfChangedList","absolute","0","36",null,null,"0","0",this.div_WORK);_a.set_taborder("31");_a.set_binddataset("ds_qualfChgList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"변경일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"계약일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"주택명\"/><Cell col=\"3\" rowspan=\"2\" text=\"동\"/><Cell col=\"4\" rowspan=\"2\" text=\"호\"/><Cell col=\"5\" rowspan=\"2\" text=\"계약자\"/><Cell col=\"6\" rowspan=\"2\" text=\"주민번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"임대시작일\"/><Cell col=\"8\" rowspan=\"2\" text=\"임대종료일\"/><Cell col=\"9\" colspan=\"3\" text=\"변경전\"/><Cell col=\"12\" colspan=\"3\" text=\"변경후\"/><Cell col=\"15\" rowspan=\"2\" text=\"보증금차액\"/><Cell col=\"16\" rowspan=\"2\" text=\"공제액\"/><Cell col=\"17\" rowspan=\"2\" text=\"지급액\"/><Cell col=\"18\" rowspan=\"2\" text=\"지급일자\"/><Cell col=\"19\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"9\" text=\"자격구분\"/><Cell row=\"1\" col=\"10\" text=\"보증금\"/><Cell row=\"1\" col=\"11\" text=\"임대료\"/><Cell row=\"1\" col=\"12\" text=\"자격구분\"/><Cell row=\"1\" col=\"13\" text=\"보증금\"/><Cell row=\"1\" col=\"14\" text=\"임대료\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CHANGE_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CHANGE_DE\"/><Cell col=\"1\" displaytype=\"expr:CNTRCT_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CNTRCT_DE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"3\" text=\"bind:DONG\"/><Cell col=\"4\" text=\"bind:HO\"/><Cell col=\"5\" text=\"bind:NM\"/><Cell col=\"6\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#{######}'\"/><Cell col=\"7\" displaytype=\"expr:RENT_BGNDE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:RENT_BGNDE\"/><Cell col=\"8\" displaytype=\"expr:RENT_ENDDE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:RENT_ENDDE\"/><Cell col=\"9\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:QUALF_SE_BFCHG\" combodataset=\"ds_qualfSeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN_BFCHG\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG_BFCHG\"/><Cell col=\"12\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:QUALF_SE_AFTCH\" combodataset=\"ds_qualfSeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN_AFTCH\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG_AFTCH\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN_DFNNT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DDCAMOUNT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REFND_AMOUNT\"/><Cell col=\"18\" displaytype=\"expr:PYMNT_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:PYMNT_DE\"/><Cell col=\"19\" style=\"align:left;\" text=\"bind:RM\" tooltiptext=\"bind:RM\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN_BFCHG)||0')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RNTCHRG_BFCHG)||0')\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN_AFTCH)||0')\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RNTCHRG_AFTCH)||0')\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN_DFNNT)||0')\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(DDCAMOUNT)||0')\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(REFND_AMOUNT)||0')\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1031,676,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01081100");_b.set_titletext("자격변경현황");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.cal_qualfChgFromDe","value","ds_searchDe","QUALF_CHG_FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_qualfChgToDe","value","ds_searchDe","QUALF_CHG_TO_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT01081100.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01081100.xfdl",function(){this.RNT01081100_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01081100_onload=function(_a,_b){var _c=this.dateUtils.today();this.div_search.cal_qualfChgFromDe.set_value(this.fn_first_yyyymmdd(_c));this.div_search.cal_qualfChgFromDe.set_value('19000101');this.div_search.cal_qualfChgToDe.set_value(_c);this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_houseSe(this.ds_houseSeList,"전체/");this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체/");this.fn_get_cmmCode(this.ds_qualfSeList,"",{grpCode:"RNT001"});};this.div_search_cmb_houseSe_onitemchanged=function(_a,_b){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체",{HOUSE_SE:_b.postvalue});};this.div_search_cal_qualfChgFromDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_qualfChgFromDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_qualfChgToDe.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_qualfChgToDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_qualfChgToDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_qualfChgFromDe.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.fn_search=function(){this.ds_qualfChgList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectQualfChgList");};this.div_search_chk_RdRegNumInc_onclick=function(_a,_b){var _c=this.div_WORK.grd_qualfChangedList;var _d="";if(this.div_search.chk_RdRegNumInc.value==1){_d='expr:IHIDNUM == null  ? ""  : "######-#{######}"';}else{_d='expr:IHIDNUM == null  ? ""  : "######-#######"';}_c.setCellProperty("body",_c.getBindCellIndex("body","IHIDNUM"),"mask",_d);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectQualfChgList":var _c="/hsco/pms/rnt/pra/RNT01081100/selectQualfChgList.do";var _d="input1=ds_cond00";var _e="ds_qualfChgList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01081100_oninit,this);this.addEventHandler("onload",this.RNT01081100_onload,this);this.div_search.cmb_houseSe.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cal_qualfChgFromDe.addEventHandler("canchange",this.div_search_cal_qualfChgFromDe_canchange,this);this.div_search.cal_qualfChgToDe.addEventHandler("canchange",this.div_search_cal_qualfChgToDe_canchange,this);this.div_search.chk_RdRegNumInc.addEventHandler("onclick",this.div_search_chk_RdRegNumInc_onclick,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("RNT01081100.xfdl");};})();