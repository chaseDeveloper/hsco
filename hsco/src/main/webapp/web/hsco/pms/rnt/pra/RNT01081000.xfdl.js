﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01081000");this.set_classname("RNT01081000");this.set_titletext("해약/유보금처리내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SearchVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CANCL_FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_TO_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CANCL_FROM_DE\"/><Col id=\"CANCL_TO_DE\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_canclList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESCI_RESN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"SEC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NPYM_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"OVDINTR\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_INCDNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NSEC_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_resrveProcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RESRVE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_PRECDNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ELCTY_CHRGE\" type=\"STRING\" size=\"256\"/><Column id=\"GAS_CHRGE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXR_AMR\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"MRENT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","0",null,"33","2.64%",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","79","5","137","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_houseSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_autoselect("true");_a=new Combo("cmb_rentHouseCode","absolute","295","5","191","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a.set_autoselect("true");_a=new Static("Static03","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("108");_a.set_text("주택구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","231","5","64","21",null,null,this.div_search);_a.set_taborder("109");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","501","5","64","21",null,null,this.div_search);_a.set_taborder("110");_a.set_text("해약일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_canclFromDe","absolute","565","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Calendar("cal_canclToDe","absolute","677","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static00","absolute","665","5","12","21",null,null,this.div_search);_a.set_taborder("113");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","792","5","64","21",null,null,this.div_search);_a.set_taborder("114");_a.set_text("계약자명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","856","5","77","21",null,null,this.div_search);_a.set_taborder("4");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0%","33",null,null,"2.64%","1",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0%","0",null,"10","0%",null,this.div_WORK);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","10",null,"21","70.71%",null,this.div_WORK);_a.set_taborder("15");_a.set_text("해약현황");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","31",null,"5","0%",null,this.div_WORK);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_canclList","absolute","0","36",null,null,"0","0",this.div_WORK);_a.set_taborder("17");_a.set_binddataset("ds_canclList");_a.style.set_border("2 solid #3a7ab8ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"69\"/><Column size=\"115\"/><Column size=\"124\"/><Column size=\"99\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"79\"/><Column size=\"140\"/><Column size=\"85\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"해약일자\"/><Cell col=\"1\" text=\"계약일자\"/><Cell col=\"2\" text=\"주택명\"/><Cell col=\"3\" text=\"동\"/><Cell col=\"4\" text=\"호\"/><Cell col=\"5\" text=\"평\"/><Cell col=\"6\" text=\"계약자\"/><Cell col=\"7\" text=\"주민번호\"/><Cell col=\"8\" text=\"자격구분\"/><Cell col=\"9\" text=\"해약사유\"/><Cell col=\"10\" text=\"세대원\"/><Cell col=\"11\" text=\"보증금\"/><Cell col=\"12\" text=\"임대료\"/><Cell col=\"13\" text=\"체납개월\"/><Cell col=\"14\" text=\"체납임대료\"/><Cell col=\"15\" text=\"체납연체료\"/><Cell col=\"16\" text=\"체납임대료계\"/><Cell col=\"17\" text=\"주소\"/><Cell col=\"18\" text=\"재공급일\"/><Cell col=\"19\" text=\"재공급보증금\"/><Cell col=\"20\" text=\"최초등록자\"/><Cell col=\"21\" text=\"최초등록일시\"/><Cell col=\"22\" text=\"소송일자\"/><Cell col=\"23\" text=\"사건번호\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CANCL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:FRST_CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:DONG\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:HO\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:AEA\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:NM\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#{######}'\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:QUALF_NM\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:RESCI_RESN_NM\"/><Cell col=\"10\" style=\"align: ;\" text=\"bind:FAMILY_CO\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SEC_AMT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NPYM_AMT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OVDINTR\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AMT\"/><Cell col=\"17\" style=\"align:left;\" text=\"bind:ADRES\" tooltiptext=\"bind:ADRES\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:CONT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NSEC_AMT\"/><Cell col=\"20\" style=\"align:center;\" text=\"bind:REGISTER_ID\"/><Cell col=\"21\" style=\"align:center;\" text=\"bind:REGIST_DT\"/><Cell col=\"22\" displaytype=\"date\" text=\"bind:LWST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"23\" style=\"align:left;\" text=\"bind:SEIZR_INCDNT_NO\"/></Band><Band id=\"summary\"><Cell colspan=\"11\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(SEC_AMT)||0')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RNTCHRG)||0')\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(CNT)||0')\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(NPYM_AMT)||0')\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(OVDINTR)||0')\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(TOT_AMT)||0')\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(NSEC_AMT)||0')\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1031,676,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01081000");_b.set_titletext("해약/유보금처리내역");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_canclFromDe","value","ds_SearchVal","CANCL_FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_canclToDe","value","ds_SearchVal","CANCL_TO_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT01081000.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01081000.xfdl",function(){this.RNT01081000_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01081000_onload=function(_a,_b){var _c=this.dateUtils.today();this.fn_load_combo();this.div_search.cal_canclFromDe.set_value('19000101');this.div_search.cal_canclToDe.set_value(_c);this.div_search.edt_dong.clearEventHandler("onkeydown");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_houseSe(this.ds_houseSeList,"전체");this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체");};this.div_search_cmb_houseSe_onitemchanged=function(_a,_b){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체",{HOUSE_SE:_b.postvalue});};this.div_search_cal_canclFromDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_canclFromDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_canclToDe.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_canclToDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_canclToDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_canclFromDe.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.fn_search=function(){this.ds_canclList.clearData();this.ds_resrveProcList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectCanclList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectCanclList":var _c="/hsco/pms/rnt/pra/RNT01081000/selectCanclList.do";var _d="input1=ds_cond00";var _e="ds_canclList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01081000_oninit,this);this.addEventHandler("onload",this.RNT01081000_onload,this);this.div_search.cmb_houseSe.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_search.cal_canclFromDe.addEventHandler("canchange",this.div_search_cal_canclFromDe_canchange,this);this.div_search.cal_canclToDe.addEventHandler("canchange",this.div_search_cal_canclToDe_canchange,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("RNT01081000.xfdl");};})();