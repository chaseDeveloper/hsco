﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02050200");this.set_classname("FRM02050200");this.set_titletext("총계정원장");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"schFrMon\" type=\"STRING\" size=\"256\"/><Column id=\"schToMon\" type=\"STRING\" size=\"256\"/><Column id=\"acntCodeFr\" type=\"STRING\" size=\"256\"/><Column id=\"acntCodeTo\" type=\"STRING\" size=\"256\"/><Column id=\"acntCtrgFrNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntCtrgToNm\" type=\"STRING\" size=\"256\"/><Column id=\"acntCode\" type=\"STRING\" size=\"256\"/><Column id=\"accnutYear\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_totAcntLedgr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SUM_JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BEF_CYFD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_totAcntLedgrDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"JAN_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHIT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_param",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"acntYear\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"acntYear\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_popRtnAcnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DBRT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE06","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("조회년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","170","5","13","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCalFr","absolute","84","5","84","21",null,null,this.div_search);_a.set_taborder("10");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCalTo","absolute","185","5","84","21",null,null,this.div_search);_a.set_taborder("11");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","284","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("회계계정");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_acntCodeFr","absolute","348","5","103","21",null,null,this.div_search);_a.set_taborder("13");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACNT_NM","absolute","453","5","176","21",null,null,this.div_search);_a.set_taborder("14");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","634","5","13","21",null,null,this.div_search);_a.set_taborder("15");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_acntCodeTo","absolute","652","5","103","21",null,null,this.div_search);_a.set_taborder("16");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ACNT_NM00","absolute","757","5","176","21",null,null,this.div_search);_a.set_taborder("17");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Button("searchAcntFr","absolute","432","5","21","21",null,null,this.div_search);_a.set_taborder("18");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Button("searchAcntTo","absolute","737","5","21","21",null,null,this.div_search);_a.set_taborder("19");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","132","19",null,null,this);_a.set_taborder("4");_a.set_text("총계정원장");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,"410","28",null,this);_a.set_taborder("7");_a.set_binddataset("ds_totAcntLedgr");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"330\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"계정과목\"/><Cell col=\"2\" text=\"전기이월\"/><Cell col=\"3\" text=\"차변\"/><Cell col=\"4\" text=\"대변\"/><Cell col=\"5\" text=\"계정잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACNT_CODE_PRT\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ACNTCTGR_NM\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:BEF_CYFD_AMT\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:DR_AMT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:CR_AMT\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:SUM_JAN_AMT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;BEF_CYFD_AMT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DR_AMT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CR_AMT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_dtls","absolute","0","511",null,null,"28","0",this);_a.set_taborder("8");_a.set_binddataset("ds_totAcntLedgrDetail");_a.set_extendsizetype("row");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"적요\"/><Cell col=\"2\" text=\"차변\"/><Cell col=\"3\" text=\"대변\"/><Cell col=\"4\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CHIT_DE\" calendardisplaynulltype=\"none\" autosizecol=\"default\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"default\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:DR_AMT\" autosizecol=\"default\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:CR_AMT\" autosizecol=\"default\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:JAN_AMT\" autosizecol=\"default\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DR_AMT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CR_AMT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;JAN_AMT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","477","1031","10",null,null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","487","132","19",null,null,this);_a.set_taborder("10");_a.set_text("내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","506","1031","5",null,null,this);_a.set_taborder("11");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM02050200");_b.set_titletext("총계정원장");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_SEARCH.div_monCalFr","text","ds_schVal","schFrMon");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_SEARCH.div_monCalTo","text","ds_schVal","schToMon");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_SEARCH.edt_acntCodeFr","value","ds_schVal","acntCodeFr");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_SEARCH.edt_ACNT_NM","value","ds_schVal","acntCtrgNm");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.edt_acntCodeTo","value","ds_schVal","acntCodeTo");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_SEARCH.edt_ACNT_NM00","value","ds_schVal","acntCtrgNm");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.edt_acntCodeFr","value","ds_schVal","acntCodeFr");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.edt_ACNT_NM","value","ds_schVal","acntCtrgFrNm");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.edt_acntCodeTo","value","ds_schVal","acntCodeTo");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.edt_ACNT_NM00","value","ds_schVal","acntCtrgToNm");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("FRM02050200.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02050200.xfdl",function(){this.FRM02050200_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM02050200_onload=function(_a,_b){this.div_search.div_monCalFr.setValue(this.comUtils.getClientDate("YYYY")+"01");this.div_search.div_monCalTo.setValue(this.comUtils.getClientDate("YYYYMM"));};this.fn_search=function(){this.ds_totAcntLedgr.clearData();this.ds_schVal.setColumn(0,"schFrMon",this.div_search.div_monCalFr.getValue());this.ds_schVal.setColumn(0,"schToMon",this.div_search.div_monCalTo.getValue());this.fn_transaction("selectTotAcntLedgr");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectTotAcntLedgr":var _c="/hsco/pms/frm/FRM02050200/selectTotAcntLedgr.do";var _d="input1=ds_schVal";var _e="ds_totAcntLedgr=output1";break;case "selectTotAcntLedgrDetail":var _c="/hsco/pms/frm/FRM02050200/selectTotAcntLedgrDetail.do";var _d="input1=ds_schVal";var _e="ds_totAcntLedgrDetail=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.ds_totAcntLedgr_onrowposchanged=function(_a,_b){this.ds_totAcntLedgrDetail.clearData();this.ds_schVal.setColumn(0,"accnutYear",_a.getColumn(_b.newrow,"ACCNUT_YEAR"));this.ds_schVal.setColumn(0,"acntCode",_a.getColumn(_b.newrow,"ACNT_CODE"));this.ds_schVal.setColumn(0,"month",_a.getColumn(_b.newrow,"MONTH"));this.fn_transaction("selectTotAcntLedgrDetail");};this.div_search_searchAcnt_onclick=function(_a,_b){var _c=this.div_search.div_monCalFr.getValue().substr(0,4);this.ds_param.setColumn(0,"acntYear",_c);var _d={arg_0:this,arg_1:this.ds_param};this.gfn_popup("popup_acntCode",351,176,"계정코드팝업",_d,"pms_frm::FRM02010100_P01.xfdl","fn_frAcntCodeCallback");};this.div_search_searchAcntTo_onclick=function(_a,_b){var _c=this.div_search.div_monCalFr.getValue().substr(0,4);this.ds_param.setColumn(0,"acntYear",_c);var _d={arg_0:this,arg_1:this.ds_param};this.gfn_popup("popup_acntCode",351,176,"계정코드팝업",_d,"pms_frm::FRM02010100_P01.xfdl","fn_toAcntCodeCallback");};this.fn_frAcntCodeCallback=function(_a,_b){this.ds_popRtnAcnt.loadXML(_b);var _c=this.ds_popRtnAcnt.getColumn(0,"ACNT_CODE");var _d=this.ds_popRtnAcnt.getColumn(0,"ACNTCTGR_NM");this.ds_schVal.setColumn(0,"acntCodeFr",_c);this.ds_schVal.setColumn(0,"acntCtrgFrNm",_d);};this.fn_toAcntCodeCallback=function(_a,_b){this.ds_popRtnAcnt.loadXML(_b);var _c=this.ds_popRtnAcnt.getColumn(0,"ACNT_CODE");var _d=this.ds_popRtnAcnt.getColumn(0,"ACNTCTGR_NM");this.ds_schVal.setColumn(0,"acntCodeTo",_c);this.ds_schVal.setColumn(0,"acntCtrgToNm",_d);};});this.on_initEvent=function(){this.ds_totAcntLedgr.addEventHandler("onrowposchanged",this.ds_totAcntLedgr_onrowposchanged,this);this.addEventHandler("oninit",this.FRM02050200_oninit,this);this.addEventHandler("onload",this.FRM02050200_onload,this);this.div_search.searchAcntFr.addEventHandler("onclick",this.div_search_searchAcnt_onclick,this);this.div_search.searchAcntTo.addEventHandler("onclick",this.div_search_searchAcntTo_onclick,this);};this.loadIncludeScript("FRM02050200.xfdl");this.loadPreloadList();};})();