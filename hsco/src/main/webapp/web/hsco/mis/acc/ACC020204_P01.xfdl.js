﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020204_P01");this.set_classname("UI_ACC020204_P01");this.set_titletext("지출내역");this.set_scrollbars("none");this._setFormPosition(0,0,920,350);}_a=new Dataset("ds_expnddtrDtls",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CAUSE_ACTION_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUSE_ACTION_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEBT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","15","39",null,null,"15","15",this);_a.set_taborder("0");_a.set_binddataset("ds_expnddtrDtls");_a.set_treeinitstatus("expand,null");_a.set_treeusecheckbox("false");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"집행일자\"/><Cell col=\"1\" text=\"적요\"/><Cell col=\"2\" text=\"채주\"/><Cell col=\"3\" text=\"예산액\"/><Cell col=\"4\" text=\"원인행위액\"/><Cell col=\"5\" text=\"채무확정액\"/><Cell col=\"6\" text=\"지출액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:CAUSE_ACTION_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:SUMRY\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:BCNC_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:BUDGET_AMT\" suppress=\"1\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:CAUSE_ACTION_AMOUNT\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:DEBT_AMT\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DECSN_AMOUNT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getColumn(0, &quot;BUDGET_AMT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;CAUSE_ACTION_AMOUNT&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DEBT_AMT&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","15","15","132","19",null,null,this);_a.set_taborder("1");_a.set_text("지출내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","34",null,"5","0",null,this);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0",null,"15","0",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0",null,null,"15","0","0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",920,350,this,function(_b){_b.set_classname("UI_ACC020204_P01");_b.set_titletext("지출내역");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item15","div_detail03.Edit04","value","ds_actMastr","PRMPC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail00.Edit00","value","ds_actMastr","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_detail00.Edit01","value","ds_actMastr","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_detail03.Edit00","value","ds_actMastr","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC020204_P01.xfdl","lib::comInclude.xjs");this.registerScript("ACC020204_P01.xfdl",function(){this.ACC020204_P01_onload=function(_a,_b){this.ds_cond.loadXML(this.getOwnerFrame().ds_cond);this.fn_search();};this.fn_search=function(){this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC020204/expndtrDtlsList.do";var _c="input1=ds_cond";var _d="ds_expnddtrDtls=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;default:break;}}else{switch(_a){case "SRCH":break;default:break;}}this.gfn_callback_message(_a,_b,_c);};this.fn_close=function(){this.close();};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};});this.on_initEvent=function(){this.addEventHandler("onload",this.ACC020204_P01_onload,this);this.grd.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);};this.loadIncludeScript("ACC020204_P01.xfdl");};})();