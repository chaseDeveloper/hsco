﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050105");this.set_classname("UI_ACC050105");this.set_titletext("결산자료이월관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_CYFD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_stacntCyfd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:ACCNUT_ACNT_CODE");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\" sumtext=\"소계\"/><Column id=\"DEBTOR_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CRDIT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">ACCNUT_YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결산회계년도</Col><Col id=\"from\"/><Col id=\"to\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE06","absolute","15","5","90","21",null,null,this.div_SEARCH);_a.set_taborder("22");_a.set_text("결산회계년도");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Button("btn_process","absolute",null,"5","107","21","6",null,this.div_SEARCH);_a.set_taborder("2");_a.set_text("이월처리 실행");_a.set_cssclass("btn_WF_Process");this.div_SEARCH.addChild(_a.name,_a);_a=new CheckBox("chk_cyfd","absolute","181","5","122","21",null,null,this.div_SEARCH);_a.set_taborder("1");_a.set_text("이월금액 존재여부");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_SEARCH.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","110","5","66","21",null,null,this.div_SEARCH);_a.set_taborder("0");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("17");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","132","19",null,null,this);_a.set_taborder("19");_a.set_text("결산이월내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"43","25","19","28",null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,null,"28","0",this);_a.set_taborder("3");_a.set_binddataset("ds_stacntCyfd");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"회계계정\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"2\" text=\"사업명\"/><Cell col=\"4\" rowspan=\"2\" colspan=\"2\" text=\"부서\"/><Cell col=\"6\" rowspan=\"2\" colspan=\"2\" text=\"거래처\"/><Cell col=\"8\" rowspan=\"2\" text=\"계좌번호\"/><Cell col=\"9\" colspan=\"2\" text=\"전기이월\"/><Cell row=\"1\" col=\"9\" text=\"차변금액\"/><Cell row=\"1\" col=\"10\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:ACCNUT_ACNT_CODE\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:ACCNUT_ACNT_NM\" suppress=\"1\"/><Cell col=\"2\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BSNS_CODE\"/><Cell col=\"3\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BSNS_NM\" suppress=\"2\"/><Cell col=\"4\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DEPT_CODE\"/><Cell col=\"5\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BCNC_CODE\"/><Cell col=\"7\" style=\"align:left;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:BCNC_NM\"/><Cell col=\"8\" style=\"background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:ACNUTNO\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'none':'masknumber'\" style=\"align:right;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:DEBTOR_AMOUNT\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'none':'masknumber'\" style=\"align:right;background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? &quot;floralwhite&quot; : &quot;&quot;);\" text=\"bind:CRDIT_AMOUNT\" mask=\"###,###,###,###,###\" editlimit=\"15\" editlimitbymask=\"integer\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DEBTOR_AMOUNT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CRDIT_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_reset","absolute",null,"43","64","19","56",null,this);_a.set_taborder("1");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC050105");_b.set_titletext("결산자료이월관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Spin00","value","ds_cond","ACCNUT_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.chk_cyfd","value","ds_cond","CHK_CYFD");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC050105.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050105.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050105.xfdl",function(){this.ACC050105_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"ACCNUT_YEAR",_a.substr(0,4));};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("stacntCyfdList");};this.fn_save=function(){if(this.fn_isAccClosAt(this.ds_cond.getOrgColumn(0,"ACCNUT_YEAR")+"01","S")){this.gfn_message("info.처리불가","결산마감된 자료입니다.");return;}this.fn_transaction("stacntCyfdU");};this.fn_transaction=function(_a){switch(_a){case "stacntCyfdList":var _b="hsco/mis/acc/ACC050105/stacntCyfdList.do";var _c="input1=ds_cond";var _d="ds_stacntCyfd=output1";break;case "stacntCyfdU":var _b="hsco/mis/acc/ACC050105/stacntCyfdU.do";var _c="input1=ds_stacntCyfd:U";var _d="";break;case "callSpaccSyfd01":var _b="hsco/mis/acc/ACC050105/callSpaccSyfd01.do";var _c="input1=ds_cond";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "stacntCyfdList":break;case "stacntCyfdU":break;case "callSpaccSyfd01":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "stacntCyfdList":break;case "stacntCyfdU":break;case "callSpaccSyfd01":break;default:break;}}};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","결산자료이월관리");_a.setSaveFilename("결산자료이월관리");_a.clearLocalDs();_a.setGrid(this.grd);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"결산자료이월관리",_b,"common::frmReportPopup.xfdl","");};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_stacntCyfd.reset();this.ds_stacntCyfd.applyChange();}};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};this.btn_reset_onclick=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.ds_stacntCyfd.reset();this.ds_stacntCyfd.applyChange();}};this.div_SEARCH_btn_process_onclick=function(_a,_b){if(this.fn_isAccClosAt(this.ds_cond.getColumn(0,"ACCNUT_YEAR")+"01","S")){this.gfn_message("info.처리불가","결산마감된 자료입니다.");return;}if(this.gfn_message("comm.행위여부","["+this.ds_cond.getColumn(0,"ACCNUT_YEAR")+"]년 이월처리를 실행")){this.fn_transaction("callSpaccSyfd01");}};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC050105_onload,this);this.div_SEARCH.btn_process.addEventHandler("onclick",this.div_SEARCH_btn_process_onclick,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);};this.loadIncludeScript("ACC050105.xfdl");};})();