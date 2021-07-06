﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS010401");this.set_classname("CUS010401");this.set_titletext("고객통계조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cstmrGradList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CSTMR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_GRAD_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSTMR_GRAD_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSTMR_GRAD_3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cstmrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ALL\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","0",null,null,"28","0",this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Grid("grd_cstmrGradList","absolute","0","34",null,null,"0","10",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_cstmrGradList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"고객구분\"/><Cell col=\"1\" colspan=\"4\" text=\"고객수\"/><Cell row=\"1\" col=\"1\" text=\"우호\"/><Cell row=\"1\" col=\"2\" text=\"일반\"/><Cell row=\"1\" col=\"3\" text=\"악성\"/><Cell row=\"1\" col=\"4\" text=\"총계\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:CSTMR_SE\" combodataset=\"ds_cstmrSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CSTMR_GRAD_1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CSTMR_GRAD_2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CSTMR_GRAD_3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:SUM\"/></Band><Band id=\"summary\"><Cell text=\"총계 : \"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CSTMR_GRAD_1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CSTMR_GRAD_2&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CSTMR_GRAD_3&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SUM&quot;)\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AUDIT_TABLE","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("3");_a.set_text("고객등급별현황");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"10","25","19","0",null,this.div_work);_a.set_taborder("4");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_excel","absolute","8","466",null,null,"424","15",this.div_work);_a.set_taborder("5");_a.set_binddataset("ds_cstmrGradList");_a.set_autoenter("select");_a.set_autofittype("none");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" style=\"font:bold 24 맑은 고딕;\" text=\"고객등급별현황\"/><Cell row=\"1\" rowspan=\"2\" text=\"고객구분\"/><Cell row=\"1\" col=\"1\" colspan=\"4\" text=\"고객수\"/><Cell row=\"2\" col=\"1\" text=\"우호\"/><Cell row=\"2\" col=\"2\" text=\"일반\"/><Cell row=\"2\" col=\"3\" text=\"악성\"/><Cell row=\"2\" col=\"4\" text=\"총계\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:CSTMR_SE\" combodataset=\"ds_cstmrSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CSTMR_GRAD_1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CSTMR_GRAD_2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:CSTMR_GRAD_3\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:SUM\"/></Band><Band id=\"summary\"><Cell text=\"총계 : \"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CSTMR_GRAD_1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CSTMR_GRAD_2&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CSTMR_GRAD_3&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SUM&quot;)\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("0");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CUS010401");_b.set_titletext("고객통계조회");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CUS010401.xfdl","lib::comInclude.xjs");this.addIncludeScript("CUS010401.xfdl","mis_lib::misUtil.xjs");this.registerScript("CUS010401.xfdl",function(){this.checkDs=[this.ds_cstmrGradList];this.CUS010401_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CUS010401_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);var _a=[["ds_cstmrSe","CUS020",1,""],];var _b=function(_c,_d,_e){this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.fn_transaction("selectCstmrGradList");};this.fn_transaction=function(_a){switch(_a){case "selectCstmrGradList":this.ds_cond.clearData();this.ds_cond.addRow();var _b="hsco/mis/cus/CUS010401/selectCstmrGradList.do";var _c="input01=ds_cond";var _d="ds_cstmrGradList=output01";break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectCstmrGradList":break;}}};this.div_work_Button00_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grd_excel,"CstmrGradList");};});this.on_initEvent=function(){this.addEventHandler("onload",this.CUS010401_onload,this);this.addEventHandler("oninit",this.CUS010401_oninit,this);this.div_work.sta_AUDIT_TABLE.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.Button00.addEventHandler("onclick",this.div_work_Button00_onclick,this);};this.loadIncludeScript("CUS010401.xfdl");};})();