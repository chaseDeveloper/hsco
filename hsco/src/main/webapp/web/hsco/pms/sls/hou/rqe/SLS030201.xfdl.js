﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS030201");this.set_classname("SLS030201");this.set_titletext("주택수납조정관리");this.set_scrollbars("none");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_validation00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search00</Col><Col id=\"colId\">edt_houseCodeFr</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택코드시작</Col></Row><Row><Col id=\"compId\">div_search00</Col><Col id=\"colId\">cal_payTmlmt</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부기한</Col></Row><Row><Col id=\"compId\">div_search00</Col><Col id=\"colId\">cal_mdatDe</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조정일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">edt_houseCodeFr</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택코드시작</Col></Row><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">edt_houseCodeTo</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택코드종료</Col></Row><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">edt_dongFr</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">동시작</Col></Row><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">edt_dongTo</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">동종료</Col></Row><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">edt_hoFr</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">호시작</Col></Row><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">edt_hoTo</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">호종료</Col></Row><Row><Col id=\"compId\">div_search01</Col><Col id=\"colId\">div_monCal</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조정년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_TO\" type=\"STRING\" size=\"256\"/><Column id=\"HO_FR\" type=\"STRING\" size=\"256\"/><Column id=\"HO_TO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_TO\" type=\"STRING\" size=\"256\"/><Column id=\"HO_FR\" type=\"STRING\" size=\"256\"/><Column id=\"HO_TO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PRV_RQEST_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseLttotPayList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:HOUSE_NM");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"주택별 소계\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"ARRRG_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YRINS_SALE_INTR\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseRentPayList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"소계\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\" prop=\"NONE\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\" prop=\"COUNT\"/><Column id=\"HO\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"세대\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"MT_RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"DEL_MT_RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"ARRRG_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"DFNNT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");this.addChild(_a.name,_a);_a=new Dataset("ds_mdatFileCreatYn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseRentPayLsmthCmpr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"DATE\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"DATE\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_SEC_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CORT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ADD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BASE_RENT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RENT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RENT_AMT1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHA_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:HOUSE_CODE");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ALL_HOUSE_NM\">전체</Col><Col id=\"HOUSE_NM\">전체</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"in_CRT_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"in_CORT_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"in_APT_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"in_BANK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"in_CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"in_billym\" type=\"STRING\" size=\"256\"/><Column id=\"in_dec_date\" type=\"STRING\" size=\"256\"/><Column id=\"in_tr_date\" type=\"STRING\" size=\"256\"/><Column id=\"in_tr_sdate\" type=\"STRING\" size=\"256\"/><Column id=\"in_tr_edate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","0","33",null,"10","28",null,this);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","0","43",null,null,"28","0",this);_a.set_taborder("2");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");_a.style.set_border("1 solid #6e9bc5ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");this.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.Tab00);_a.set_text("임대료대상자");this.Tab00.addChild(_a.name,_a);_a=new Static("Static20","absolute","0","0","1029","5",null,null,this.Tab00.tabpage2);_a.set_taborder("17");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Grid("grd_houseRentPayList","absolute","1","29",null,null,"1","1",this.Tab00.tabpage2);_a.set_taborder("18");_a.set_binddataset("ds_houseRentPayList");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택코드\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자명\"/><Cell col=\"4\" text=\"납부기한일\"/><Cell col=\"5\" text=\"임대료\"/><Cell col=\"6\" text=\"체납금액\"/><Cell col=\"7\" text=\"연체이자\"/><Cell col=\"8\" text=\"수납금액\"/><Cell col=\"9\" text=\"수납일자\"/><Cell col=\"10\" text=\"조정일자\"/><Cell col=\"11\" text=\"해약일자\"/><Cell col=\"12\" text=\"감액금액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:left;\" text=\"bind:HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CSTMR_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MT_RNTCHRG\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DEL_MT_RNTCHRG\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ARRRG_AMOUNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RCIV_AMOUNT\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:MDAT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:CANCL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DFNNT_AMOUNT\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount() + &quot; 건&quot;\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;MT_RNTCHRG&quot;)\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;DEL_MT_RNTCHRG&quot;)\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ARRRG_AMOUNT&quot;)\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;RCIV_AMOUNT&quot;)\" mask=\"#,###\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;DFNNT_AMOUNT&quot;)\" mask=\"#,###\"/></Band></Format></Formats>");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_mdatFileCreat","absolute",null,"5","92","19","190",null,this.Tab00.tabpage2);_a.set_taborder("19");_a.set_text("월임대료생성");_a.set_cssclass("btn_WF_Process");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","24","1029","5",null,null,this.Tab00.tabpage2);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_npymFileCreat","absolute",null,"5","92","19","466",null,this.Tab00.tabpage2);_a.set_taborder("21");_a.set_text("체납이자생성");_a.set_cssclass("btn_WF_Process");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_nht","absolute",null,"5","92","19","2",null,this.Tab00.tabpage2);_a.set_taborder("23");_a.set_text("고지서출력파일");_a.set_cssclass("btn_WF_Link");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_payReq","absolute",null,"5","92","19","96",null,this.Tab00.tabpage2);_a.set_taborder("24");_a.set_text("납부요청");_a.set_cssclass("btn_WF_Process");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("sta_schHouseSe03","absolute",null,"5","66","19","395",null,this.Tab00.tabpage2);_a.set_taborder("25");_a.set_text("조정일자");_a.set_cssclass("sta_WFSA_Label");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Calendar("cal_mdatDe","absolute",null,"5","110","19","285",null,this.Tab00.tabpage2);this.Tab00.tabpage2.addChild(_a.name,_a);_a.set_taborder("26");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Tabpage("tabpage3",this.Tab00);_a.set_text("임대료생성자료확인");this.Tab00.addChild(_a.name,_a);_a=new Static("Static20","absolute","0","0","1029","5",null,null,this.Tab00.tabpage3);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Tab00.tabpage3.addChild(_a.name,_a);_a=new Grid("grd_lttotRcivMdatList","absolute","1","5",null,null,"1","1",this.Tab00.tabpage3);_a.set_taborder("17");_a.set_binddataset("ds_houseRentPayLsmthCmpr");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"주택코드\"/><Cell col=\"2\" text=\"동\"/><Cell col=\"3\" text=\"호\"/><Cell col=\"4\" text=\"계약자명\"/><Cell col=\"5\" text=\"세대수\"/><Cell col=\"6\" text=\"계약일자\"/><Cell col=\"7\" text=\"임대시작일\"/><Cell col=\"8\" text=\"기본보증금\"/><Cell col=\"9\" text=\"납부보증금\"/><Cell col=\"10\" text=\"증액\"/><Cell col=\"11\" text=\"기본임대료\"/><Cell col=\"12\" text=\"월임대료\"/><Cell col=\"13\" text=\"적용임대료\"/><Cell col=\"14\" text=\"임대료차액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:left;\" text=\"bind:HOUSE_CODE\" suppress=\"1\" combodataset=\"ds_houseCodeSh\" combocodecol=\"HOUSE_CODE\" combodatacol=\"ALL_HOUSE_NM\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:HOUSE_CODE\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CSTMR_NM\"/><Cell col=\"5\" text=\"bind:CNT\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RENT_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:BASE_SEC_AMT\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:CORT_AMT\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:ADD_AMT\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:BASE_RENT_AMT\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:RENT_AMT\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:RENT_AMT1\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:CHA_AMT\" mask=\"#,##0\"/></Band></Format></Formats>");this.Tab00.tabpage3.addChild(_a.name,_a);_a=new Div("div_search00","absolute","0","0",null,"33","28",null,this);_a.set_taborder("9");_a.set_cssclass("div_WFSA_Box");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe","absolute","15","5","66","21",null,null,this.div_search00);_a.set_taborder("132");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Calendar("cal_payTmlmt","absolute","583","5","110","21",null,null,this.div_search00);this.div_search00.addChild(_a.name,_a);_a.set_taborder("133");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_schHouseSe00","absolute","310","5","53","21",null,null,this.div_search00);_a.set_taborder("136");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Edit("edt_dongFr","absolute","363","5","64","21",null,null,this.div_search00);_a.set_taborder("137");_a.set_lengthunit("utf8");_a.set_maxlength("4");_a.style.setStyleValue("border","focused","1 solid #bdbdbdff");this.div_search00.addChild(_a.name,_a);_a=new Static("Static01","absolute","434","5","17","21",null,null,this.div_search00);_a.set_taborder("138");_a.set_text("/");this.div_search00.addChild(_a.name,_a);_a=new Edit("edt_hoFr","absolute","446","5","65","21",null,null,this.div_search00);_a.set_taborder("139");_a.set_lengthunit("utf8");_a.set_maxlength("4");_a.style.setStyleValue("border","focused","1 solid #bdbdbdff");this.div_search00.addChild(_a.name,_a);_a=new Static("sta_schHouseSe02","absolute","517","5","66","21",null,null,this.div_search00);_a.set_taborder("140");_a.set_text("납부기한");_a.set_cssclass("sta_WFSA_Label");this.div_search00.addChild(_a.name,_a);_a=new Combo("cmb_houseCodeSh","absolute","83","5","212","21",null,null,this.div_search00);this.div_search00.addChild(_a.name,_a);_a.set_taborder("142");_a.set_autoselect("true");_a.set_innerdataset("ds_houseCodeSh");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_type("filter");_a=new Div("div_search01","absolute","0","0",null,"33","28",null,this);_a.set_taborder("10");_a.set_cssclass("div_WFSA_Box");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","584","5","84","21",null,null,this.div_search01);_a.set_taborder("1");_a.set_visible("false");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search01.addChild(_a.name,_a);_a=new Static("sta_schHouseSe02","absolute","518","5","66","21",null,null,this.div_search01);_a.set_taborder("2");_a.set_text("조정년월");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search01.addChild(_a.name,_a);_a=new Static("sta_schHouseSe","absolute","15","5","66","21",null,null,this.div_search01);_a.set_taborder("3");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search01.addChild(_a.name,_a);_a=new Combo("cmb_houseCodeSh","absolute","83","5","212","21",null,null,this.div_search01);this.div_search01.addChild(_a.name,_a);_a.set_taborder("4");_a.set_autoselect("true");_a.set_innerdataset("ds_houseCodeSh");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_type("filter");_a=new Static("sta_schHouseSe00","absolute","310","5","53","21",null,null,this.div_search01);_a.set_taborder("5");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");this.div_search01.addChild(_a.name,_a);_a=new Edit("edt_dongFr","absolute","363","5","64","21",null,null,this.div_search01);_a.set_taborder("6");_a.set_lengthunit("utf8");_a.set_maxlength("4");_a.style.setStyleValue("border","focused","1 solid #bdbdbdff");this.div_search01.addChild(_a.name,_a);_a=new Static("Static01","absolute","434","5","17","21",null,null,this.div_search01);_a.set_taborder("7");_a.set_text("/");this.div_search01.addChild(_a.name,_a);_a=new Edit("edt_hoFr","absolute","446","5","65","21",null,null,this.div_search01);_a.set_taborder("8");_a.set_lengthunit("utf8");_a.set_maxlength("4");_a.style.setStyleValue("border","focused","1 solid #bdbdbdff");this.div_search01.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage2,function(_b){_b.set_text("임대료대상자");});this.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage3,function(_b){_b.set_text("임대료생성자료확인");});this.Tab00.tabpage3.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search00,function(_b){_b.set_taborder("9");_b.set_cssclass("div_WFSA_Box");_b.set_visible("false");});this.div_search00.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search01,function(_b){_b.set_taborder("10");_b.set_cssclass("div_WFSA_Box");_b.set_visible("false");});this.div_search01.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS030201");_b.set_titletext("주택수납조정관리");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search00.edt_dongFr","value","ds_cond00","DONG_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search00.edt_hoFr","value","ds_cond00","HO_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search00.cal_payTmlmt","value","ds_cond00","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item39","div_search00.cmb_houseCodeSh","value","ds_cond00","HOUSE_CODE_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search01.cmb_houseCodeSh","value","ds_cond01","HOUSE_CODE_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search01.edt_dongFr","value","ds_cond00","DONG_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search01.edt_hoFr","value","ds_cond00","HO_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Tab00.tabpage2.cal_mdatDe","value","ds_cond00","MDAT_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("SLS030201.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS030201.xfdl",function(){this.DEFAULT_YM=this.gfn_today("NOW_YEAR_MONTH");this.nRowPos=0;this.SLS030201_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS030201_onload=function(_a,_b){this.fn_findDivSearch();this.fn_loadCombo();this.ds_cond00.setColumn(0,"PAY_TMLMT",this.dateUtils.getLastDay(this.gfn_today(),"s"));this.ds_cond00.setColumn(0,"MDAT_DE",this.gfn_today());var _c={};_c["value"]=this.DEFAULT_YM;_c["onchange"]=this.moncalOnChangeHandler;this.div_search01.div_monCal.fn_setBindValue(this,"div_search01.div_monCal","ds_cond01","RQEST_YM",_c);};this.moncalOnChangeHandler=function(_a,_b){var _c=this.dateUtils.addMonth(_b+"01", -1,"s");this.ds_cond01.setColumn(0,"PRV_RQEST_YM",_c.substr(0,6));};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search00);this.gfn_initCondDs(this,this.div_search01);};this.fn_loadCombo=function(){var _a=[{OUT_PUT:"ds_paySn",GRP_CODE:"HOU0A9",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_a);var _b={};_b["USE_AT"]="1";_b["HOUSE_SE"]="S2,S4";this.pmsUtil.getHouseCode(_b,"ds_houseCodeSh","fn_set");};this.fn_set=function(){var _a=this.ds_houseCodeSh;_a.insertRow(0);_a.setColumn(0,"HOUSE_CODE","%");_a.setColumn(0,"HOUSE_NM","전체");_a.setColumn(0,"ALL_HOUSE_NM","전체");_a.set_rowposition(0);this.div_search00.cmb_houseCodeSh.set_index(0);this.div_search01.cmb_houseCodeSh.set_index(0);};this.Tab00_onchanged=function(_a,_b){this.fn_findDivSearch();};this.fn_findDivSearch=function(){if(this.Tab00.tabindex==0){this.div_search00.set_visible(true);this.div_search01.set_visible(false);}else if(this.Tab00.tabindex==1){this.div_search00.set_visible(false);this.div_search01.set_visible(true);}};this.fn_search=function(){if(this.Tab00.tabindex==0){if(!this.gfn_checkValidation(this.div_search00,this.ds_validation00)){return;}this.pmsUtil.clearDataSet([this.ds_houseRentPayList]);this.fn_transaction("selectHouseRentPayList");}else if(this.Tab00.tabindex==1){if(!this.gfn_checkValidation(this.div_search00,this.ds_validation00)){return;}this.pmsUtil.clearDataSet([this.ds_houseRentPayLsmthCmpr]);this.fn_transaction("selectHouseRentPayLsmthCmpr");}};this.fn_transaction=function(_a){switch(_a){case "selectHouseLttotPayList":var _b="hsco/pms/sls/hou/rqe/SLS030201/selectHouseLttotPayList.do";var _c="input1=ds_cond00";var _d="ds_houseLttotPayList=output1";break;case "saveHouseLttotPayList":var _b="hsco/pms/sls/hou/rqe/SLS030201/saveHouseLttotPayList.do";var _c="input1=ds_cond00";var _d="";break;case "selectHouseRentPayList":var _b="hsco/pms/sls/hou/rqe/SLS030201/selectHouseRentPayList.do";var _c="input1=ds_cond00";var _d="ds_houseRentPayList=output1";break;case "saveNpymHouseRentPayList":var _b="hsco/pms/sls/hou/rqe/SLS030201/saveNpymHouseRentPayList.do";var _c="input1=ds_cond00";var _d="";break;case "selectMdatFileCreatYn":var _b="hsco/pms/sls/hou/rqe/SLS030201/selectMdatFileCreatYn.do";var _c="input1=ds_cond00";var _d="ds_mdatFileCreatYn=output1";break;case "saveMdaHouseRentPayList":var _b="hsco/pms/sls/hou/rqe/SLS030201/saveMdaHouseRentPayList.do";var _c="input1=ds_cond00";var _d="";break;case "selectHouseRentPayLsmthCmpr":var _b="hsco/pms/sls/hou/rqe/SLS030201/selectHouseRentPayLsmthCmpr.do";var _c="input1=ds_cond01";var _d="ds_houseRentPayLsmthCmpr=output1";break;case "selectSlaryList2":this.ds_cond02.clearData();var _e=this.ds_cond02.addRow();this.ds_cond02.setColumn(_e,"in_CRT_DIV",'SL');this.ds_cond02.setColumn(_e,"in_CORT_DIV",'RN');this.ds_cond02.setColumn(_e,"in_billym",this.dateUtils.format(this.dateUtils.today(),'yyyymm'));this.ds_cond02.setColumn(_e,"in_tr_date",this.dateUtils.today());this.ds_cond02.setColumn(_e,"in_tr_sdate",this.dateUtils.today());this.ds_cond02.setColumn(_e,"in_tr_edate",this.div_search00.cal_payTmlmt.value);var _b="hsco/pms/rnt/rnt030402/getList2.do";var _c="input2=ds_cond02";var _d="";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;var _f=null;switch(_a){case "selectCommonCode":break;case "selectHouseLttotPayList":if(this.ds_houseLttotPayList.rowcount>0){this.ds_houseLttotPayList.set_rowposition(nRowPos);nRowPos=0;}break;case "saveHouseLttotPayList":this.fn_search();this.alert("분양금 조정파일생성이 완료 되었습니다.");break;case "selectHouseRentPayList":if(this.ds_houseRentPayList.rowcount>0){this.ds_houseRentPayList.set_rowposition(nRowPos);nRowPos=0;}break;case "saveNpymHouseRentPayList":this.alert("체납파일생성이 완료 되었습니다.");break;case "selectMdatFileCreatYn":this.Tab00_tabpage2_btn_mdatFileCreat_onclick_callBack();break;case "saveMdaHouseRentPayList":this.fn_search();this.alert("임대료 조정파일생성이 완료 되었습니다.");break;case "selectHouseRentPayLsmthCmpr":break;case "selectSlaryList2":this.gfn_message("success.처리.성공");this.fn_transaction("selectSlaryList");break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.Tab00_tabpage2_btn_npymFileCreat_onclick=function(_a,_b){if(this.Tab00.tabindex==0){if(!this.gfn_checkValidation(this.div_search00,this.ds_validation00)){return;}if(this.confirm("임대료 체납파일을 생성 하시겠습니까?")){this.fn_transaction("saveNpymHouseRentPayList");}}};this.Tab00_tabpage2_btn_mdatFileCreat_onclick=function(_a,_b){if(this.Tab00.tabindex==0){if(!this.gfn_checkValidation(this.div_search00,this.ds_validation00)){return;}this.ds_cond00.setColumn(0,"RQEST_YM",this.ds_cond00.getColumn(0,"PAY_TMLMT").substr(0,6));this.fn_transaction("selectMdatFileCreatYn");}};this.Tab00_tabpage2_btn_mdatFileCreat_onclick_callBack=function(){if(this.ds_mdatFileCreatYn.getColumn(0,"CNT")=="0"){if(this.confirm("임대료 조정파일을 생성 하시겠습니까?")){this.fn_transaction("saveMdaHouseRentPayList");}}else{if(this.confirm("해당주택의 당월 조정내역이 존재합니다. 재생성 하시겠습니까?")){this.fn_transaction("saveMdaHouseRentPayList");}}};this.fn_popupNHT=function(){var _a=system.clientToScreenX(this,10);var _b=system.clientToScreenY(this,10);var _c=new ChildFrame;_c.init("NHT_Popup","absolute",_a,_b,1039,343,null,null,"pms_sls_hou_rqe::SLS030201_P02.xfdl");_c.set_openalign("center middle");_c.set_dragmovetype("all");if(this.Tab00.tabindex==0){var _d='2';var _e=0;var _f=this.ds_cond00.getColumn(_e,"HOUSE_CODE_FR");var _g=this.ds_houseRentPayList.getColumn(_e,"PAY_TMLMT");nRowPos=this.ds_houseRentPayList.rowposition;}else{return;}var _h=_f;var _i=_g;_c.showModal(this.getOwnerFrame(),{param1:_d,param2:_h,param4:_i},this,"fn_PopupCallback");};this.fn_PopupCallback=function(_a,_b){if(_a=="Rand_Popup"){this.fn_search();}else if(_a=="NHT_Popup"){this.fn_search();}};this.Tab00_tabpage1_btn_rand_onclick=function(_a,_b){this.fn_transaction("selectSlaryList2");};this.Tab00_tabpage2_btn_rand_onclick=function(_a,_b){this.fn_popupRand();};this.Tab00_tabpage2_btn_nht_onclick=function(_a,_b){this.fn_popupNHT();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS030201_oninit,this);this.addEventHandler("onload",this.SLS030201_onload,this);this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);this.Tab00.tabpage2.grd_houseRentPayList.addEventHandler("oncellclick",this.Tab00_tabpage1_grd_hcntrctrPayList_oncellclick,this);this.Tab00.tabpage2.grd_houseRentPayList.addEventHandler("onheadclick",this.Tab00_tabpage1_grd_hcntrctrPayList_onheadclick,this);this.Tab00.tabpage2.btn_mdatFileCreat.addEventHandler("onclick",this.Tab00_tabpage2_btn_mdatFileCreat_onclick,this);this.Tab00.tabpage2.btn_npymFileCreat.addEventHandler("onclick",this.Tab00_tabpage2_btn_npymFileCreat_onclick,this);this.Tab00.tabpage2.btn_nht.addEventHandler("onclick",this.Tab00_tabpage2_btn_nht_onclick,this);this.Tab00.tabpage2.btn_payReq.addEventHandler("onclick",this.Tab00_tabpage1_btn_rand_onclick,this);this.Tab00.tabpage3.grd_lttotRcivMdatList.addEventHandler("oncellclick",this.Tab00_tabpage1_grd_hcntrctrPayList_oncellclick,this);this.Tab00.tabpage3.grd_lttotRcivMdatList.addEventHandler("onheadclick",this.Tab00_tabpage1_grd_hcntrctrPayList_onheadclick,this);this.div_search00.cmb_houseCodeSh.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search01.cmb_houseCodeSh.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);};this.loadIncludeScript("SLS030201.xfdl");this.loadPreloadList();};})();