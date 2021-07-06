﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CMP050600");this.set_classname("CMP050600");this.set_titletext("용지매입 및 보상현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_shetPuchasRewardSttus",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("false");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TOTAL_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T_MCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T_NMPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T_AR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"J_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"J_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_locplcCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bsnsAreaCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_bsnsAreaCode</Col><Col id=\"msgId\">사업지구</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bsnsAreaCodeNm",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_THING_WTNNC",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div01");this.addChild(_a.name,_a);_a=new Grid("grd_shetPuchasRewardSttusList","absolute","0","35",null,null,"0","16",this.div_work);_a.set_taborder("0");_a.set_autofittype("none");_a.set_binddataset("ds_shetPuchasRewardSttus");_a.set_cssclass("grd02_WF_blue");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"보상금액계\"/><Cell col=\"1\" colspan=\"4\" text=\"토지\"/><Cell col=\"5\" colspan=\"2\" text=\"지장물\"/><Cell row=\"1\" col=\"1\" text=\"인원\"/><Cell row=\"1\" col=\"2\" text=\"필지\"/><Cell row=\"1\" col=\"3\" text=\"면적\"/><Cell row=\"1\" col=\"4\" text=\"금액\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TOTAL_AMT\" mask=\"9,999\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:T_MCNT\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:T_NMPR\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:T_AR\" mask=\"9,999,99\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:T_AMOUNT\" mask=\"9,999\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:J_CNT\" mask=\"9,999\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:J_AMOUNT\" mask=\"9,999\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("dtl_guide01","absolute","0","30",null,"5","0",null,this.div_work);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_work.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","0","0","1031","10",null,null,this.div_work);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","13","735","0",null,this);_a.set_taborder("11");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_bsnsAreaCode","absolute","15","5","64",null,null,"5",this.div_search);_a.set_taborder("2");_a.set_text("사업지구");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bsnsAreaCode","absolute","79","5","200","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_bsnsAreaCode");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sta_locplcCode","absolute","294","5","51","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("소재지");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_locplcCode","absolute","345","5","200","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_locplcCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div01");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CMP050600");_b.set_titletext("용지매입 및 보상현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CMP050600.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP050600.xfdl",function(){this.CMP050600_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.CMP050600_onload=function(_a,_b){this.fn_load_combo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_bsnsAreaCode,"선택");this.fn_add_comboHeader(this,this.div_search.cmb_locplcCode,"전체");this.fn_get_userBsnsArea(this.ds_bsnsAreaCode,"선택");};this.div_search_cmb_bsnsAreaCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_bsnsAreaCode.value;this.fn_get_locplcCode(this.ds_locplcCode,"전체",{bsnsAreaCode:_c});};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return false;}this.ds_shetPuchasRewardSttus.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectTotalVolmWtnncList");};this.fn_cancel=function(){if(this.confirm("C")){this.ds_shetPuchasRewardSttus.reset();this.ds_shetPuchasRewardSttus.applyChange();}};this.fn_close=function(){this.close();};this.fn_print=function(){if(this.ds_shetPuchasRewardSttus.rowcount==0){this.alert("조회된 내역이 없습니다.");return;}var _a=this.ds_bsnsAreaCode.findRow("CODE",this.div_search.cmb_bsnsAreaCode.value);var _b=this.ds_bsnsAreaCode.getColumn(_a,"CODE_NM");var _c=new this.cf_Opts();_c.setToolbar(false);_c.setScale(100);_c.setArgs('bsns_area_nm',_b);_c.setReportPath("/pms/cmp/CMP050600_R01.jrf");_c.setSaveFilename("용지매입 및 보상 현황");_c.setLocalDs(["ds_shetPuchasRewardSttus",this.ds_shetPuchasRewardSttus]);var _d={arg_0:this,opts:_c};this.gfn_popup("Popup_Report",884,735,"용지매입 및 보상 현황",_d,"common::frmReportPopup.xfdl","report_callback");};this.dtn_print_onclick=function(_a,_b){this.fn_print();};this.div_work_btn_excelDown_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grd_shetPuchasRewardSttusList,"export");};this.fn_transaction=function(_a,_b){var _c=true;switch(_a){case "selectTotalVolmWtnncList":var _d="hsco/pms/cmp/CMP050500/selectTotalVolmWtnncList.do";var _e="input1=ds_cond00";var _f="DS_TBCMP_THING_WTNNC=output1";break;}if(this.fn_validate_tranasaction(_a,_d,_e,_f)==false){return;}Ex.core.tran(this,_a,_d,_e,_f,"",null,null,_c);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "selectTotalVolmWtnncList":var _e= -1;this.ds_shetPuchasRewardSttus.clearData();_e=this.ds_shetPuchasRewardSttus.addRow();this.ds_shetPuchasRewardSttus.setColumn(_e,"TOTAL_AMT",this.DS_TBCMP_THING_WTNNC.getColumn(0,"T_AMT"));this.ds_shetPuchasRewardSttus.setColumn(_e,"T_MCNT",this.DS_TBCMP_THING_WTNNC.getColumn(0,"L_OWNER_CNT"));this.ds_shetPuchasRewardSttus.setColumn(_e,"T_NMPR",this.DS_TBCMP_THING_WTNNC.getColumn(0,"L_CNT"));this.ds_shetPuchasRewardSttus.setColumn(_e,"T_AR",this.DS_TBCMP_THING_WTNNC.getColumn(0,"L_AR_AMT"));this.ds_shetPuchasRewardSttus.setColumn(_e,"T_AMOUNT",this.DS_TBCMP_THING_WTNNC.getColumn(0,"L_AMT"));this.ds_shetPuchasRewardSttus.setColumn(_e,"J_CNT",Number(this.DS_TBCMP_THING_WTNNC.getColumn(0,"M_CNT"))+Number(this.DS_TBCMP_THING_WTNNC.getColumn(0,"N_CNT"))+Number(this.DS_TBCMP_THING_WTNNC.getColumn(0,"O_CNT")));this.ds_shetPuchasRewardSttus.setColumn(_e,"J_AMOUNT",Number(this.DS_TBCMP_THING_WTNNC.getColumn(0,"M_AMT"))+Number(this.DS_TBCMP_THING_WTNNC.getColumn(0,"N_AMT"))+Number(this.DS_TBCMP_THING_WTNNC.getColumn(0,"O_AMT")));break;}}this.fn_callback_message(_a,_b,_c);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.CMP050600_oninit,this);this.addEventHandler("onload",this.CMP050600_onload,this);this.div_search.cmb_bsnsAreaCode.addEventHandler("onitemchanged",this.div_search_cmb_bsnsAreaCode_onitemchanged,this);};this.loadIncludeScript("CMP050600.xfdl");};})();