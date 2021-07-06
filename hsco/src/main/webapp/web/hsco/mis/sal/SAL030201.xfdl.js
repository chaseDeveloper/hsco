﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL030201");this.set_classname("SAL030201");this.set_titletext("급여명세서조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_mtSalaryPymntList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_yryc2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE1_1\" type=\"STRING\" size=\"256\"/><Column id=\"DATE3_1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1_1\" type=\"STRING\" size=\"256\"/><Column id=\"YRYC1\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mtSalaryDdcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_print",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_DDC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","96","0","38","5",null,null,this.div_search);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","351","5","38","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","388","5","162","21",null,null,this.div_search);_a.set_taborder("2");_a.set_enable("false");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","62","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("지급년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_pymntYm","absolute","78","5","85","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmSalMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","183","5","62","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("지급순번");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_sn","absolute","249","5","79","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_sn_innerdataset",this.div_search.cmb_sn);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("6");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("Static08","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","169","19",null,null,this);_a.set_taborder("2");_a.set_text("월 급여내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","53","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_mtSalaryDtls_pymnt","fixed","0","58","370","646",null,null,this);_a.set_taborder("213");_a.set_autofittype("col");_a.set_binddataset("ds_mtSalaryPymntList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"109\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"지급항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PYMNT_DDC_CODE_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:AMOUNT\"/></Band><Band id=\"summary\"><Cell text=\"지급액계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_mtSalaryDtls_ddc","fixed","370","58","370","646",null,null,this);_a.set_taborder("214");_a.set_autofittype("col");_a.set_binddataset("ds_mtSalaryDdcList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"122\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PYMNT_DDC_CODE_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:AMOUNT\"/></Band><Band id=\"summary\"><Cell text=\"공제액계\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"expr:expr:dataset.getSum(&quot;AMOUNT&quot;)\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_totalAmount","absolute","370","704","370","24",null,null,this);_a.set_taborder("217");_a.style.set_border("0 solid #808080ff");_a.style.set_font("bold 9 arial");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"172\"/><Column size=\"198\"/></Columns><Rows><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"summary\"><Cell text=\"총 수령액\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SAL030201");_c.set_titletext("급여명세서조회");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_sn","value","ds_cond","SN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");this._addPreloadList("fdl","common::frmSalMonCal.xfdl");};this.addIncludeScript("SAL030201.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL030201.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL030201.xfdl",function(){this.SAL030201_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SAL030201_onload=function(_a,_b){this.fn_loadCombo();this.fn_transaction("selectLastPymntYm");};this.fn_loadCombo=function(){if(this.gfn_authGrpId("SAL_ADMIN")> -1){this.div_search.div_EMP.set_enable(true);}};this.fn_init_form=function(){this.div_search.div_pymntYm.fn_setBind("ds_cond","PYMNT_YM");this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.gfn_initForm(this);};this.fn_init_dataset=function(){this.ds_mtSalaryPymntList.clearData();this.ds_mtSalaryDdcList.clearData();this.ds_cond.clearData();};this.fn_search=function(){this.fn_transaction("selectMtSalaryDtstmnList");};this.fn_print=function(){this.ds_print.clearData();this.ds_print.copyData(this.ds_cond);this.gfn_ReportPopup(this,"MIS/SAL/SAL030201_R01.crf",this.ds_print);};this.fn_transaction=function(_a){switch(_a){case "selectLastPymntYm":var _b="hsco/mis/sal/SAL030201/selectLastPymntYm.do";var _c="";var _d="ds_cond=output1";break;case "selectMtSalaryDtstmnList":var _b="hsco/mis/sal/SAL030201/selectMtSalaryDtstmnList.do";var _c="input1=ds_cond";var _d="ds_mtSalaryPymntList=output1 ds_mtSalaryDdcList=output2";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectLastPymntYm":if(this.ds_cond.getRowCount()==0){this.ds_cond.addRow();this.ds_cond.setColumn(0,"PYMNT_YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));}this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());this.ds_cond.setColumn(0,"SN",'%');this.fn_transaction("selectMtSalaryDtstmnList");break;case "selectMtSalaryDtstmnList":this.grd_totalAmount.setCellProperty("Summ",1,"text",this.ds_mtSalaryPymntList.getSum("AMOUNT")-this.ds_mtSalaryDdcList.getSum("AMOUNT"));break;}}};this.btn_mtSalaryDtstmn_onclick=function(_a,_b){if(this.Edit00.value){var _c=new this.cf_Opts();_c.setToolbar(false);_c.setScale(100);_c.setReportPath("/mis/sal/SAL030201_R02.jrf");_c.setSaveFilename("급여명세서");_c.setLocalDs(["ds_mtSalaryPymntList",this.ds_mtSalaryPymntList]);_c.setLocalDs(["ds_yryc2",this.ds_yryc2]);var _d={arg_0:this,opts:_c};this.gfn_popup("Popup_Report",884,735,"급여명세서",_d,"common::frmReportPopup.xfdl","report_callback");}else{this.alert("조회후 출력하세요!");}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL030201_oninit,this);this.addEventHandler("onload",this.SAL030201_onload,this);};this.loadIncludeScript("SAL030201.xfdl");this.loadPreloadList();};})();