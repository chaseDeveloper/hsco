﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC030201");this.set_classname("UI_ACC030201");this.set_titletext("원천세현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WHTAX_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_wthtxSmrizePay",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SBJECT_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"IHNTS\" type=\"bigdecimal\" size=\"16\"/><Column id=\"INCMTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DECSN_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SBJECT_CODE\" type=\"string\" size=\"32\"/><Column id=\"DECSN_AMOUNT\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_wthtxSttus",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"WHTAX_KND\" type=\"string\" size=\"32\"/><Column id=\"IHNTS\" type=\"bigdecimal\" size=\"16\"/><Column id=\"RCPT_MAN\" type=\"string\" size=\"32\"/><Column id=\"WHTAX_NM\" type=\"string\" size=\"32\"/><Column id=\"SUMRY\" type=\"string\" size=\"32\"/><Column id=\"DECSN_NO\" type=\"string\" size=\"32\"/><Column id=\"INCMTAX\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DECSN_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DECSN_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DECSN_YEAR\" type=\"string\" size=\"32\"/><Column id=\"CPTAL_EXPNDTR_ACNTBK_DE\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"msgId\">조회일자</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DT</Col><Col id=\"msgId\">조회일자</Col><Col id=\"notNull\">Y</Col><Col id=\"from\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","84","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","186","5","13","21",null,null,this.div_SEARCH);_a.set_taborder("19");_a.set_text("~");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","201","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_EMPL_SE03","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("28");_a.set_text("조회일자");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("17");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("23");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","43","132","19",null,null,this);_a.set_taborder("24");_a.set_text("원천징수 총괄납부");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62","1031","5",null,null,this);_a.set_taborder("25");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"43","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","68",null,"267","28",null,this);_a.set_taborder("2");_a.set_autofittype("col");_a.set_binddataset("ds_wthtxSmrizePay");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"349\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"인원\"/><Cell col=\"3\" rowspan=\"2\" text=\"지급금액\"/><Cell col=\"4\" colspan=\"2\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"소득세\"/><Cell row=\"1\" col=\"5\" text=\"지방소득세\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SBJECT_CODE_NM\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:DECSN_CNT\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:INCMTAX\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:IHNTS\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_CNT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;INCMTAX&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;IHNTS&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_dtls","absolute","0","369",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_wthtxSttus");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"지급일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"원천세구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"적요\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"인원\"/><Cell col=\"6\" rowspan=\"2\" text=\"지급금액\"/><Cell col=\"7\" colspan=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"7\" text=\"소득세\"/><Cell row=\"1\" col=\"8\" text=\"지방소득세\"/><Cell row=\"1\" col=\"9\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:CPTAL_EXPNDTR_ACNTBK_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:WHTAX_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RCPT_MAN\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:DECSN_CNT\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:INCMTAX\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:IHNTS\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:INCMTAX+IHNTS\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_CNT&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;INCMTAX&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;IHNTS&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;INCMTAX&quot;) + dataset.getSum(&quot;IHNTS&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","335","1031","10",null,null,this);_a.set_taborder("35");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","0","345","132","19",null,null,this);_a.set_taborder("36");_a.set_text("원천징수현황");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","364","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDnDtls","absolute",null,"345","25","19","28",null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC030201");_b.set_titletext("원천세현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","SRCH_ST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Calendar01","value","ds_cond","SRCH_ED_DT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC030201.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC030201.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC030201.xfdl",function(){this.ACC030201_oninit=function(_a,_b){};this.ACC030201_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_ST_DT",this.dateUtils.today().substr(0,4)+"0101");this.ds_cond.setColumn(0,"SRCH_ED_DT",this.dateUtils.today());};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("wthtxSmrizePayList");};this.fn_transaction=function(_a){switch(_a){case "wthtxSmrizePayList":var _b="hsco/mis/acc/ACC030201/wthtxSmrizePayList.do";var _c="input1=ds_cond";var _d="ds_wthtxSmrizePay=output1";break;case "wthtxSttusList":var _b="hsco/mis/acc/ACC030201/wthtxSttusList.do";var _c="input1=ds_cond";var _d="ds_wthtxSttus=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b==0){switch(_a){case "wthtxSmrizePayList":break;case "wthtxSttusList":break;default:break;}}else{this.gfn_callback_message(_a,_b,_c);}};this.fn_print=function(){if(this.ds_wthtxSttus.rowcount==0){this.gfn_message("comm.출력.데이터.없음");return;}var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","원천세현황");_a.setSaveFilename("원천세현황");_a.clearLocalDs();_a.setReportPath("/common/hscoLandscapeA4_1.jrf");_a.setSaveFilename("자금지출기록부");_a.setLocalDs(["ds_wthtxSttus",this.ds_wthtxSttus]);var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"원천세현황",_b,"common::frmReportPopup.xfdl","");};this.btn_excelDn_onclick=function(_a,_b){switch(_a.name){case "btn_excelDn":this.gfn_exportExcel(this.grd,"exportExl");break;case "btn_excelDnDtls":this.gfn_exportExcel(this.grd_dtls,"exportExl");break;}};this.ds_wthtxSmrizePay_onrowposchanged=function(_a,_b){this.ds_cond.setColumn(0,"WHTAX_KND",_a.getColumn(_b.newrow,"SBJECT_CODE"));this.fn_transaction("wthtxSttusList");};});this.on_initEvent=function(){this.ds_wthtxSmrizePay.addEventHandler("onrowposchanged",this.ds_wthtxSmrizePay_onrowposchanged,this);this.addEventHandler("onload",this.ACC030201_onload,this);this.addEventHandler("oninit",this.ACC030201_oninit,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);this.btn_excelDnDtls.addEventHandler("onclick",this.btn_excelDn_onclick,this);};this.loadIncludeScript("ACC030201.xfdl");};})();