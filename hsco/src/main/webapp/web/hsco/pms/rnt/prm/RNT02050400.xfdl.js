﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02050400");this.set_classname("RNT02050400");this.set_titletext("소송내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE01\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE02\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lawsuitDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_INCDNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"JUDMN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"WTHDRW_DE\" type=\"STRING\" size=\"256\"/><Column id=\"WTHDRW_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MINAB\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_MCNT\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_MAMT\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lwstSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lwstSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_searchDe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LWST_FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_TO_DE\" type=\"STRING\" size=\"256\"/><Column id=\"JUDMN_FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"JUDMN_TO_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LWST_FROM_DE\"/><Col id=\"JUDMN_FROM_DE\"/><Col id=\"LWST_TO_DE\"/><Col id=\"JUDMN_TO_DE\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcivMiGb",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">수납</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">미납</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe00","absolute","15","5","80","21",null,null,this.div_search);_a.set_taborder("45");_a.set_text("주택코드/명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","103","5","200","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_displayrowcount("15");_a.set_autoselect("true");_a=new Static("sta_schHouseSe02","absolute","318","5","51","21",null,null,this.div_search);_a.set_taborder("48");_a.set_text("소송비");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("49");_a.set_text("소송구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_lwstSeList","absolute","103","31","200","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_lwstSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_autoselect("true");_a=new Static("Static10","absolute","318","31","89","21",null,null,this.div_search);_a.set_taborder("51");_a.set_text("소송의뢰일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_lwstFromDe","absolute","411","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static01","absolute","516","31","12","21",null,null,this.div_search);_a.set_taborder("53");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_lwstToDe","absolute","529","31","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static02","absolute","647","31","65","21",null,null,this.div_search);_a.set_taborder("55");_a.set_text("판결일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_judmnFromDe","absolute","711","31","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static03","absolute","817","31","12","21",null,null,this.div_search);_a.set_taborder("57");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_judmnToDe","absolute","829","31","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Radio("rdo_rcivMiGb","absolute","411","5","189","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_rowcount("1");_a.set_innerdataset("@ds_rcivMiGb");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("%");_a.set_index("0");_a=new Static("dtl_guide00","absolute","0","59",null,"10","28",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","70",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Grid("grd_lawsuitDetailList","absolute","0","25",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_lawsuitDetail");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"150\"/><Column size=\"87\"/><Column size=\"150\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"연락처1\"/><Cell col=\"5\" text=\"연락처2\"/><Cell col=\"6\" text=\"소송의뢰일자\"/><Cell col=\"7\" text=\"사건번호\"/><Cell col=\"8\" text=\"소송비\"/><Cell col=\"9\" text=\"판결일자\"/><Cell col=\"10\" text=\"취하일자\"/><Cell col=\"11\" text=\"취하사유\"/><Cell col=\"12\" text=\"소송구분\"/><Cell col=\"13\" text=\"비고\"/><Cell col=\"14\" text=\"수납일자\"/><Cell col=\"15\" text=\"수납금액\"/><Cell col=\"16\" text=\"미납금액\"/><Cell col=\"17\" text=\"임대료체납개월\"/><Cell col=\"18\" text=\"임대료체납액\"/><Cell col=\"19\" text=\"소송건수\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:NM\"/><Cell col=\"4\" text=\"bind:TELNO\"/><Cell col=\"5\" text=\"bind:MBTLNO\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:LWST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:SEIZR_INCDNT_NO\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LWST_AMOUNT\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:JUDMN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:WTHDRW_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:WTHDRW_PRVONSH\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:LWST_SE\" combodataset=\"ds_lwstSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:RM\" tooltiptext=\"bind:RM\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RCIV_AMOUNT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MINAB\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:RENT_MCNT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RENT_MAMT\"/><Cell col=\"19\" displaytype=\"number\" text=\"bind:LAW_CNT\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(LWST_AMOUNT)||0')\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RCIV_AMOUNT)||0')\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(MINAB)||0')\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RENT_MCNT)||0')\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RENT_MAMT)||0')\"/><Cell col=\"19\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","20",null,"5","0",null,this.div_work);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","-1",null,"21","882",null,this.div_work);_a.set_taborder("3");_a.set_text("소송 내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02050400");_b.set_titletext("소송내역");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_lwstFromDe","value","ds_searchDe","LWST_FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_lwstToDe","value","ds_searchDe","LWST_TO_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_judmnFromDe","value","ds_searchDe","JUDMN_FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_judmnToDe","value","ds_searchDe","JUDMN_TO_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT02050400.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02050400.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02050400.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02050400.xfdl",function(){this.RNT02050400_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02050400_onload=function(_a,_b){var _c=this.dateUtils.today();this.ds_searchDe.setColumn(0,"LWST_FROM_DE","19000101");this.ds_searchDe.setColumn(0,"JUDMN_FROM_DE","19000101");this.ds_searchDe.setColumn(0,"LWST_TO_DE",_c);this.ds_searchDe.setColumn(0,"JUDMN_TO_DE",_c);this.fn_get_houseCode(this.div_search.cmb_rentHouseCode,"전체",{USE_AT:"1"});this.fn_get_cmmCode(this.ds_lwstSeList,"전체",{grpCode:"RNT029"});this.fn_get_cmmCode(this.ds_lwstSe,"",{grpCode:"RNT029"});};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectLawsuitDetail");};this.fn_transaction=function(_a){switch(_a){case "selectLawsuitDetail":var _b="hsco/pms/rnt/prm/RNT02050400/selectLawsuitDetailList.do";var _c="input1=ds_cond00";var _d="ds_lawsuitDetail=output1";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){}}};this.div_WORK_btn_excelDownload_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grd_lawsuitDetailList,"exportExl");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02050400_oninit,this);this.addEventHandler("onload",this.RNT02050400_onload,this);this.div_search.cmb_lwstSeList.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_search.cal_lwstFromDe.addEventHandler("canchange",this.div_search_cal_contRactFromDe_canchange,this);this.div_search.cal_lwstToDe.addEventHandler("canchange",this.div_search_cal_contRactToDe_canchange,this);this.div_search.cal_judmnFromDe.addEventHandler("canchange",this.div_search_cal_contRactFromDe_canchange,this);this.div_search.cal_judmnToDe.addEventHandler("canchange",this.div_search_cal_contRactToDe_canchange,this);this.div_work.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("RNT02050400.xfdl");};})();