﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC060302");this.set_classname("ACC060302");this.set_titletext("구분회계손익계산서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YM\" type=\"STRING\" size=\"6\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_seAccnutAcntCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_CODENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YM\" type=\"STRING\" size=\"6\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_HSMP\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_TY\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACCNUT_YM</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"msgId\">회계년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_seAcnt4",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_seAcnt2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_seAcnt3",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_seAcnt1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_result",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THSTRM_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"THSTRM_SM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FRMTRM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FRMTRM_SM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRDS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"IRDS_SM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_seAccExcel",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_result","absolute","385","67",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_result");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"2\" text=\"계정과목\"/><Cell col=\"3\" colspan=\"2\"/><Cell col=\"5\" colspan=\"2\"/><Cell col=\"7\" colspan=\"2\" text=\"증감\"/><Cell row=\"1\" col=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"금액\"/><Cell row=\"1\" col=\"5\" text=\"금액\"/><Cell row=\"1\" col=\"6\" text=\"금액\"/><Cell row=\"1\" col=\"7\" text=\"(당기 - 전기)\"/><Cell row=\"1\" col=\"8\" text=\"(당기 - 전기)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ACCNUT_ACNT_CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ACCNUT_ACNT_NM\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:THSTRM_AMOUNT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:THSTRM_SM\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:FRMTRM_AMOUNT\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:FRMTRM_SM\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:IRDS_AMOUNT\"/><Cell col=\"8\" text=\"bind:IRDS_SM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("회계년월");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","450","0","38","5",null,null,this.div_search);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","450",null,"38","5",null,"0",this.div_search);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","84","5","86","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","0","43",null,"19","908",null,this);_a.set_taborder("6");_a.set_text("구분회계코드");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","385","43","151","19",null,null,this);_a.set_taborder("9");_a.set_text("손익계산서");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_excel_down","absolute",null,"43","25","19","28",null,this);_a.set_taborder("10");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","67","11.8%",null,null,"0",this);_a.set_taborder("11");_a.set_binddataset("ds_seAcnt1");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업지구\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CODENM\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","11.8%","67","11.8%",null,null,"0",this);_a.set_taborder("12");_a.set_binddataset("ds_seAcnt2");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업단지\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CODENM\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","11.8%","67","11.8%",null,null,"0",this);_a.set_taborder("13");_a.set_binddataset("ds_seAcnt3");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공급유형\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CODENM\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid03","absolute","23.61%","67","11.8%",null,null,"0",this);_a.set_taborder("14");_a.set_binddataset("ds_seAcnt4");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업유형\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CODENM\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid04","absolute","0","67","376",null,null,"0",this);_a.set_taborder("15");_a.set_binddataset("ds_seAccnutAcntCode");_a.set_extendsizetype("row");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"258\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"구분회계코드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SE_ACCNUT_ACNT_CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SE_ACCNUT_ACNT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_seAccExcel","absolute",null,"43","117","21","35",null,this);_a.set_taborder("16");_a.set_text("세부내역 엑셀다운");_a.set_cssclass("btn_WF_Process");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Grid("grd_excel","absolute","59","424",null,null,"379","122",this);_a.set_taborder("17");_a.set_binddataset("ds_seAccExcel");_a.set_autofittype("col");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"180\"/><Column size=\"75\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"계정명\"/><Cell col=\"2\" colspan=\"2\" text=\"구분회계명\"/><Cell col=\"4\" text=\"차변\"/><Cell col=\"5\" text=\"대변\"/><Cell col=\"6\" text=\"당기금액\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:ACCNUT_ACNT_CODE\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:ACCNUT_ACNT_NM\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:SE_ACCNUT_ACNT_CODE\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:SE_ACCNUT_ACNT_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DR_AMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CR_AMT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:JAN_AMT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("ACC060302");_b.set_titletext("구분회계손익계산서");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.div_monCal","cssclass","ds_cond","DPRC_YM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("ACC060302.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC060302.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC060302.xfdl",function(){this.bSeLoaded=false;this.ACC060302_oninit=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();};this.ACC060302_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.div_search.div_monCal.fn_setBind("ds_cond","ACCNUT_YM");this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"ACCNUT_YM",this.dateUtils.today().substr(0,6));};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_cond.setColumn(0,"ACCNUT_YEAR",String(this.ds_cond.getColumn(0,"ACCNUT_YM")).substr(0,4));this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"ACCNUT_YM",this.ds_cond.getColumn(0,"ACCNUT_YM"));var _c=Number(this.ds_cond.getColumn(0,"ACCNUT_YM").substr(0,4));this.grd_result.setCellProperty('Head',2,'text',_c+"년(당기)");this.grd_result.setCellProperty('Head',3,'text',(_c-1)+"년(전기)");this.bSeLoaded=false;this.ds_cond.setColumn(0,"YYYY",String(this.ds_cond.getColumn(0,"ACCNUT_YM")).substr(0,4));this.fn_transaction("seAccnutAcntCodeList");};this.fn_transaction=function(_a){switch(_a){case "select":var _b="hsco/mis/acc/ACC060302/select.do";var _c="input1=ds_cond2";var _d="ds_result=output1";break;case "seAccnutAcntCodeList":var _b="hsco/mis/acc/ACC000000/seAccnutAcntCodeList.do";var _c="input1=ds_cond";var _d="ds_seAccnutAcntCode=output1";break;case "seAccExcelDown":var _b="hsco/mis/acc/ACC060302/seAccExcelDown.do";var _c="input1=ds_cond";var _d="ds_seAccExcel=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "select":break;case "seAccnutAcntCodeList":this.ds_seAccnutAcntCode.insertRow(0);this.ds_seAccnutAcntCode.setColumn(0,"SE_ACCNUT_ACNT_CODE","");this.ds_seAccnutAcntCode.setColumn(0,"SE_ACCNUT_ACNT_NM","화성도시공사 전체");this.ds_cond.setColumn(0,"SE_ACCNUT_ACNT_CODE","");break;case "seAccExcelDown":this.btn_excelExport_onclick();break;}}};this.ds_onrowposchanged=function(_a,_b){switch(_a.name){case "ds_seAcnt1":this.ds_cond2.setColumn(0,"BSNS_DISTRICT",_a.getColumn(_b.newrow,"CODE"));break;case "ds_seAcnt2":this.ds_cond2.setColumn(0,"BSNS_HSMP",_a.getColumn(_b.newrow,"CODE"));break;case "ds_seAcnt3":this.ds_cond2.setColumn(0,"SUPLY_TY",_a.getColumn(_b.newrow,"CODE"));break;case "ds_seAcnt4":this.ds_cond2.setColumn(0,"BSNS_TY",_a.getColumn(_b.newrow,"CODE"));break;}if(this.bSeLoaded){this.fn_transaction("select");}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_excel,"Excel File Download");};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","구분회계 손익계산서");_a.setSaveFilename("구분회계 손익계산서");_a.clearLocalDs();_a.setGrid(this.grd_result);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"구분회계 손익계산서",_b,"common::frmReportPopup.xfdl","");};this.ds_seAccnutAcntCode_onrowsetchanged=function(_a,_b){this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"ACCNUT_YM",this.ds_cond.getOrgColumn(0,"ACCNUT_YM"));this.fn_transaction("select");};this.ds_seAccnutAcntCode_onrowposchanged=function(_a,_b){this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"ACCNUT_YM",this.ds_cond.getOrgColumn(0,"ACCNUT_YM"));this.ds_cond2.setColumn(0,"SE_ACCNUT_ACNT_CODE",this.ds_seAccnutAcntCode.getColumn(this.ds_seAccnutAcntCode.rowposition,"SE_ACCNUT_ACNT_CODE"));this.fn_transaction("select");};this.div_search_btn_seAccExcel_onclick=function(_a,_b){this.fn_transaction("seAccExcelDown");};});this.on_initEvent=function(){this.ds_seAccnutAcntCode.addEventHandler("onrowposchanged",this.ds_seAccnutAcntCode_onrowposchanged,this);this.ds_seAccnutAcntCode.addEventHandler("onrowsetchanged",this.ds_seAccnutAcntCode_onrowsetchanged,this);this.ds_seAcnt4.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_seAcnt2.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_seAcnt3.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_seAcnt1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.ACC060302_onload,this);this.addEventHandler("oninit",this.ACC060302_oninit,this);this.btn_excel_down.addEventHandler("onclick",this.btn_excelExport_onclick,this);this.btn_seAccExcel.addEventHandler("onclick",this.div_search_btn_seAccExcel_onclick,this);};this.loadIncludeScript("ACC060302.xfdl");this.loadPreloadList();};})();