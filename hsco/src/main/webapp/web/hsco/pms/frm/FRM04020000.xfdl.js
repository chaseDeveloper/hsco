﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM04020000");this.set_classname("FRM04020000");this.set_titletext("송수신연계관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cntcCycle",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">일간</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">월간</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">반기</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_frmCntcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_CNTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_TRSMRCV_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cntcCycle\" type=\"STRING\" size=\"256\"/><Column id=\"trnsmisDe\" type=\"STRING\" size=\"256\"/><Column id=\"endwCntcId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_CntcOdr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntcVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cntcCycle\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("42");_a.set_text("전송일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","196","5","38","21",null,null,this.div_search);_a.set_taborder("44");_a.set_text("차수");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_chasu","absolute","234","5","75","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("45");_a.set_innerdataset("@ds_CntcOdr");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","518","5","64","21",null,null,this.div_search);_a.set_taborder("46");_a.set_text("전송상태");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cntcTrsmrcvSe","absolute","582","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_cntcTrsmrcvSe_innerdataset",this.div_search.cmb_cntcTrsmrcvSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">성공</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실패</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("47");_a.set_text("전체");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Calendar("cal_tranDe","absolute","79","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("49");_a.set_dateformat("yyyy-MM-dd");_a=new Static("sta_basic","absolute","324","5","77","21",null,null,this.div_search);_a.set_taborder("50");_a.set_text("생성기준일");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_basicDe","absolute","401","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("51");_a.set_dateformat("yyyy-MM-dd");_a=new Div("div_monCal","absolute","401","5","100","21",null,null,this.div_search);_a.set_taborder("52");_a.set_visible("false");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bungi","absolute","389","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _c=new Dataset("cmb_bungi_innerdataset",this.div_search.cmb_bungi);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전반기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">하반기</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("53");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_text("전반기");_a.set_visible("false");_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","33",null,null,"28","2",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Grid("grd_frmCntcList","fixed","0","35","240",null,null,"3",this.Div00);_a.set_taborder("22");_a.set_binddataset("ds_frmCntcList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"141\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"연계명\"/><Cell col=\"2\" edittype=\"none\" text=\"연계ID\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:CNTC_NM\" expandshow=\"hide\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:ENDW_CNTC_ID\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.Div00);_a.set_taborder("23");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.Div00);_a.set_taborder("25");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","7","239","25",null,null,this.Div00);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.Div00.addChild(_a.name,_a);_a=new Radio("rad_cntcCycle","absolute","70","10","170","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("27");_a.set_innerdataset("@ds_cntcCycle");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_direction("vertical");_a.set_value("1");_a.style.set_buttonsize("13");_a=new Static("sta_NM18","absolute","0","7","65","25",null,null,this.Div00);_a.set_taborder("29");_a.set_text("연계주기 ");_a.set_cssclass("sta_WF_Label");this.Div00.addChild(_a.name,_a);_a=new Tab("tab_cntcCycle","absolute","240","34",null,null,"5","1",this.Div00);_a.set_taborder("30");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_buttonborder("0 solid #6e9bc5ff");_a.style.set_buttonpadding("0 0 0 0");_a.style.set_border("1 none #808080ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");this.Div00.addChild(_a.name,_a);_a=new Tabpage("tab_1",this.Div00.tab_cntcCycle);this.Div00.tab_cntcCycle.addChild(_a.name,_a);_a=new Edit("edt_schYn","absolute","690","11","56","18",null,null,this.Div00);_a.set_taborder("31");_a.set_value("0");_a.set_visible("false");this.Div00.addChild(_a.name,_a);_a=new Button("btn_cntcCreat","absolute",null,"11","90","20","6",null,this.Div00);_a.set_taborder("32");_a.set_text("연계생성");_a.set_cssclass("btn_WF_Grid");_a.style.set_font("8 Dotum");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_d){_d.set_taborder("0");_d.style.set_background("#f9fbffff");_d.style.set_font("bold 9 Verdana");_d.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00.tab_cntcCycle.tab_1,function(_d){});this.Div00.tab_cntcCycle.tab_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_d){_d.set_taborder("3");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_d){_d.set_classname("FRM04020000");_d.set_titletext("송수신연계관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.div_monCal","text","ds_schVal","accYearMon");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("FRM04020000.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM04020000.xfdl",function(){this.FRM040200000_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM040200000_onload=function(_a,_b){var _c=this.dateUtils.today();this.div_search.cal_tranDe.set_value(_c);this.div_search.cal_basicDe.set_value(_c);this.div_search.div_monCal.setValue(this.comUtils.getClientDate("YYYYMM"));this.fn_schCntcList();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_schCntcList=function(){var _a=this.Div00.rad_cntcCycle.value;this.ds_frmCntcList.clearData();this.ds_cntcVal.setColumn(0,"cntcCycle",_a);this.fn_transaction("selectFrmCntcList");};this.fn_schOdr=function(){this.ds_CntcOdr.clearData();this.ds_schVal.setColumn(0,"trnsmisDe",this.div_search.cal_tranDe.value);this.ds_schVal.setColumn(0,"endwCntcId",this.ds_frmCntcList.getColumn(this.ds_frmCntcList.rowposition,"ENDW_CNTC_ID"));this.fn_transaction("selectCntcOdr");};this.fn_search=function(){this.Div00.edt_schYn="1";this.Div00.tab_cntcCycle.tab_1.reload();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectFrmCntcList":var _c="/hsco/pms/frm/FRM04010100/selectFrmCntcList.do";var _d="input1=ds_cntcVal";var _e="ds_frmCntcList=output1";break;case "selectCntcOdr":var _c="/hsco/pms/frm/FRM04020000/selectCntcOdr.do";var _d="input1=ds_schVal";var _e="ds_CntcOdr=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.Div00_rad_cntcCycle_onitemchanged=function(_a,_b){var _c=_b.postvalue;if(_c=="1"){this.div_search.sta_basic.set_text("생성기준일");this.div_search.cal_basicDe.set_visible(true);this.div_search.div_monCal.set_visible(false);this.div_search.cmb_bungi.set_visible(false);}else if(_c=="2"){this.div_search.sta_basic.set_text("생성기준월");this.div_search.cal_basicDe.set_visible(false);this.div_search.div_monCal.set_visible(true);this.div_search.cmb_bungi.set_visible(false);}else{this.div_search.sta_basic.set_text("생성기준");this.div_search.cal_basicDe.set_visible(false);this.div_search.div_monCal.set_visible(false);this.div_search.cmb_bungi.set_visible(true);}this.fn_schCntcList();};this.ds_frmCntcList_onrowposchanged=function(_a,_b){this.Div00.tab_cntcCycle.tab_1.set_url(_a.getColumn(_b.newrow,"URL"));this.Div00.edt_schYn="0";this.fn_schOdr();};this.div_search_cal_tranDe_onchanged=function(_a,_b){this.fn_schOdr();};this.Div00_btn_cntcCreat_onclick=function(_a,_b){};});this.on_initEvent=function(){this.ds_frmCntcList.addEventHandler("onrowposchanged",this.ds_frmCntcList_onrowposchanged,this);this.addEventHandler("oninit",this.FRM040200000_oninit,this);this.addEventHandler("onload",this.FRM040200000_onload,this);this.div_search.cal_tranDe.addEventHandler("onchanged",this.div_search_cal_tranDe_onchanged,this);this.div_search.cal_basicDe.addEventHandler("canchange",this.div_search_cal_dongHoChgFromDe_canchange,this);this.Div00.grd_frmCntcList.addEventHandler("onexpanddown",this.Div00_grd_endwAccSta_onexpanddown,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.rad_cntcCycle.addEventHandler("onitemchanged",this.Div00_rad_cntcCycle_onitemchanged,this);this.Div00.btn_cntcCreat.addEventHandler("onclick",this.Div00_btn_cntcCreat_onclick,this);};this.loadIncludeScript("FRM04020000.xfdl");this.loadPreloadList();};})();