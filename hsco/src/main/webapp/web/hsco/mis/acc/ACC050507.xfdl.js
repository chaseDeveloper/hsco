﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050507");this.set_classname("ACC050507");this.set_titletext("수선충당부채명세서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YYYYMM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">회계년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_repSupDebt",this);_a._setContents("<ColumnInfo><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("21");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","84","5","84","21",null,null,this.div_SEARCH);_a.set_taborder("22");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("23");_a.set_text("회계년월");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","132","19",null,null,this);_a.set_taborder("2");_a.set_text("수선충당부채");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","67",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_repSupDebt");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"500\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업명\"/><Cell col=\"1\" rowspan=\"2\" text=\"적요\"/><Cell col=\"2\" colspan=\"4\" text=\"금    액\"/><Cell row=\"1\" col=\"2\" text=\"전기이월\"/><Cell row=\"1\" col=\"3\" text=\"증가\"/><Cell row=\"1\" col=\"4\" text=\"감소\"/><Cell row=\"1\" col=\"5\" text=\"잔액\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:BSNS_NM\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRE_AMT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DR_AMT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CR_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JAN_AMT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;PRE_AMT&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DR_AMT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CR_AMT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;JAN_AMT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("ACC050507");_b.set_titletext("수선충당부채명세서");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("ACC050507.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050507.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050507.xfdl",function(){this.ACC050507_onload=function(_a,_b){this.fn_misFormInit(this);this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.div_SEARCH.div_monCal.fn_setBind("ds_cond","YYYYMM");this.div_SEARCH.div_monCal.msk_mon.set_cssclass("msk_WF_Essential");var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"YYYYMM",_a.substr(0,6));this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_repSupDebt.clearData();this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC050507/repSupDebtList.do";var _c="input1=ds_cond";var _d="ds_repSupDebt=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;default:break;}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC050507_onload,this);};this.loadIncludeScript("ACC050507.xfdl");this.loadPreloadList();};})();