﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02051000");this.set_classname("RNT02051000");this.set_titletext("해약현황&유보금처리내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseCode\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"stCntrctDe\" type=\"STRING\" size=\"256\"/><Column id=\"edCntrctDe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_resrveAmount",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_STRUCTURE\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"RESRVE_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_PRECDNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ELCTY_CHRGE\" type=\"STRING\" size=\"256\"/><Column id=\"GAS_CHRGE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXR_AMR\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MRENT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"M_BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"M_ACNUTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_canclList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_STRUCTURE\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESCI_RESN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NPYM_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"OVDINTR\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"NSEC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_INCDNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe00","absolute","16","5","80","21",null,null,this.div_search);_a.set_taborder("79");_a.set_text("주택코드/명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","100","5","198","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_displayrowcount("15");_a.set_autoselect("true");_a=new Static("sta_changeDe","absolute","501","5","64","21",null,null,this.div_search);_a.set_taborder("81");_a.set_text("해약일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stCanclDe","absolute","564","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Calendar("cal_edCanclDe","absolute","694","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static00","absolute","676","5","16","20",null,null,this.div_search);_a.set_taborder("84");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_schHouseSe01","absolute","314","5","64","21",null,null,this.div_search);_a.set_taborder("85");_a.set_text("계약자명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_cntrctrNm","absolute","375","5","110","21",null,null,this.div_search);_a.set_taborder("1");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","1","0","15","31",null,null,this.div_search);_a.set_taborder("86");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static18","absolute","9.23%","0",null,"32","90.38%",null,this.div_search);_a.set_taborder("87");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","299","0","15","31",null,null,this.div_search);_a.set_taborder("88");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","36.05%","0",null,"32","63.56%",null,this.div_search);_a.set_taborder("89");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","486","0","15","31",null,null,this.div_search);_a.set_taborder("90");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","54.32%","0",null,"32","45.29%",null,this.div_search);_a.set_taborder("91");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","65.6%","0",null,"32","34.01%",null,this.div_search);_a.set_taborder("92");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","66.96%","0",null,"32","32.65%",null,this.div_search);_a.set_taborder("93");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("dtl_guide00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","0",this);_a.set_taborder("5");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","1","0",null,null,"1","1",this.div_work);_a.set_taborder("0");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.div_work.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.div_work.Tab00);_a.set_text("해약내역");this.div_work.Tab00.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"5","0",null,this.div_work.Tab00.tabpage1);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static00","absolute","1","1","1",null,null,"1",this.div_work.Tab00.tabpage1);_a.set_taborder("5");_a.set_text("1");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static02","absolute","1",null,null,"1","1","1",this.div_work.Tab00.tabpage1);_a.set_taborder("7");_a.set_text("1");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Grid("grd_canclList","absolute","0","5",null,null,"0","0",this.div_work.Tab00.tabpage1);_a.set_taborder("8");_a.set_binddataset("ds_canclList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"85\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"45\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"85\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"해약일자\"/><Cell col=\"1\" text=\"계약일자\"/><Cell col=\"2\" text=\"주택명\"/><Cell col=\"3\" text=\"동\"/><Cell col=\"4\" text=\"호\"/><Cell col=\"5\" text=\"소재지\"/><Cell col=\"6\" text=\"주택형\"/><Cell col=\"7\" text=\"계약자\"/><Cell col=\"8\" text=\"자격구분\"/><Cell col=\"9\" text=\"해약사유\"/><Cell col=\"10\" text=\"세대원수\"/><Cell col=\"11\" text=\"보증금\"/><Cell col=\"12\" text=\"임대료\"/><Cell col=\"13\" text=\"체납개월\"/><Cell col=\"14\" text=\"체납임대료\"/><Cell col=\"15\" text=\"체납연체료\"/><Cell col=\"16\" text=\"체납임대료계\"/><Cell col=\"17\" text=\"주소\"/><Cell col=\"18\" text=\"재공급일\"/><Cell col=\"19\" text=\"재공급보증금\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CANCL_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CANCL_DE\"/><Cell col=\"1\" displaytype=\"expr:FRST_CNTRCT_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:FRST_CNTRCT_DE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"3\" text=\"bind:DONG\"/><Cell col=\"4\" text=\"bind:HO\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ADDR\" tooltiptext=\"bind:ADDR\"/><Cell col=\"6\" text=\"bind:ROOM_STRUCTURE\"/><Cell col=\"7\" text=\"bind:NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:QUALF_NM\"/><Cell col=\"9\" style=\"align: ;\" text=\"bind:RESCI_RESN_NM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FAMILY_CO\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:CNT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NPYM_AMT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OVDINTR\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AMT\"/><Cell col=\"17\" style=\"align:left;\" text=\"bind:ADRES\" tooltiptext=\"bind:ADRES\"/><Cell col=\"18\" displaytype=\"expr:CONT_DATE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CONT_DATE\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NSEC_AMT\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(FAMILY_CO)||0')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN)||0')\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RNTCHRG)||0')\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(CNT)||0')\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(NPYM_AMT)||0')\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(OVDINTR)||0')\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(TOT_AMT)||0')\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(NSEC_AMT)||0')\"/></Band></Format></Formats>");this.div_work.Tab00.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.div_work.Tab00);_a.set_text("유보금처리내역");this.div_work.Tab00.addChild(_a.name,_a);_a=new Static("Static60","absolute","0","0","1029","5",null,null,this.div_work.Tab00.tabpage2);_a.set_taborder("0");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Grid("grd_resrveAmountList","absolute","0","5",null,null,"0","0",this.div_work.Tab00.tabpage2);_a.set_taborder("1");_a.set_binddataset("ds_resrveAmount");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"주택명\"/><Cell col=\"1\" rowspan=\"2\" text=\"소재지\"/><Cell col=\"2\" rowspan=\"2\" text=\"동\"/><Cell col=\"3\" rowspan=\"2\" text=\"호\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"연락처\"/><Cell col=\"6\" rowspan=\"2\" text=\"유보금액\"/><Cell col=\"7\" rowspan=\"2\" text=\"선수금\"/><Cell col=\"8\" rowspan=\"2\" text=\"실지급액\"/><Cell col=\"9\" colspan=\"3\" text=\"관리비미납금\"/><Cell col=\"12\" rowspan=\"2\" text=\"임대료미납금\"/><Cell col=\"13\" rowspan=\"2\" text=\"해약일자\"/><Cell col=\"14\" rowspan=\"2\" text=\"확인일\"/><Cell col=\"15\" rowspan=\"2\" text=\"세대점검일\"/><Cell col=\"16\" colspan=\"4\" text=\"지출내역\"/><Cell col=\"20\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"9\" text=\"미납금액\"/><Cell row=\"1\" col=\"10\" text=\"은행\"/><Cell row=\"1\" col=\"11\" text=\"계좌번호\"/><Cell row=\"1\" col=\"16\" text=\"지출일자\"/><Cell row=\"1\" col=\"17\" text=\"은행\"/><Cell row=\"1\" col=\"18\" text=\"계좌번호\"/><Cell row=\"1\" col=\"19\" text=\"예금주\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ADRES\" tooltiptext=\"bind:ADRES\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:TEL_NO\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RESRVE_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MANAGECT_PRECDNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXR_AMR\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MANAGECT_AMT\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:M_BANK_NAME\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:M_ACNUTNO\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MRENT_AMT\"/><Cell col=\"13\" displaytype=\"expr:CANCL_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CANCL_DE\"/><Cell col=\"14\" displaytype=\"expr:CNFIRM_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CNFIRM_DE\"/><Cell col=\"15\" displaytype=\"expr:CHCK_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CHCK_DE\"/><Cell col=\"16\" displaytype=\"expr:EXPNDTR_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:EXPNDTR_DE\"/><Cell col=\"17\" text=\"bind:BANK_NAME\"/><Cell col=\"18\" text=\"bind:ACNUTNO\"/><Cell col=\"19\" text=\"bind:DPSTR\"/><Cell col=\"20\" style=\"align:left;\" text=\"bind:RM\" tooltiptext=\"bind:RM\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RESRVE_AMOUNT)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(MANAGECT_PRECDNT)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(EXR_AMR)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(MANAGECT_AMT)||0')\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(MRENT_AMT)||0')\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");this.div_work.Tab00.tabpage2.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.Tab00.tabpage1,function(_b){_b.set_text("해약내역");});this.div_work.Tab00.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.Tab00.tabpage2,function(_b){_b.set_text("유보금처리내역");});this.div_work.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("5");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02051000");_b.set_titletext("해약현황&유보금처리내역");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02051000.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02051000.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02051000.xfdl",function(){this.RNT02051000_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02051000_onload=function(_a,_b){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체",{USE_AT:"1"});this.div_search.cal_stCanclDe.set_value('19000101');this.div_search.cal_edCanclDe.set_value(this.gfn_today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectCanclList");this.fn_transaction("selectResrveAmountList");};this.fn_transaction=function(_a){switch(_a){case "selectCanclList":var _b="hsco/pms/rnt/prm/RNT02051000/selectCanclList.do";var _c="input1=ds_cond00";var _d="ds_canclList=output1";break;case "selectResrveAmountList":var _b="hsco/pms/rnt/prm/RNT02051000/selectResrveAmountList.do";var _c="input1=ds_cond00";var _d="ds_resrveAmount=output1";break;default:break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){try{this.fn_callback_message(_a,_b,_c);}catch(exception){}var _d=_b==0?true:false;if(_d){switch(_a){}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02051000_oninit,this);this.addEventHandler("onload",this.RNT02051000_onload,this);this.div_work.Tab00.addEventHandler("onchanged",this.div_work_Tab00_onchanged,this);};this.loadIncludeScript("RNT02051000.xfdl");};})();