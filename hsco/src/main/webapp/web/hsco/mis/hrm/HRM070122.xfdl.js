﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070122");this.set_classname("HRM070122");this.set_titletext("휴일근무내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_parentalLeave",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("대상년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("9999");_a.style.set_buttonsize("15");this.div_search.addChild(_a.name,_a);_a=new Static("sta_altrtvWorkList","absolute","0","43","112","19",null,null,this);_a.set_taborder("4");_a.set_text("육아휴직대상자");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","99",null,"932","105",null,"0",this.div_work);_a.set_taborder("1");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_reqstDtl","absolute","0",null,"120","19",null,"110",this.div_work);_a.set_taborder("2");_a.set_text("경조사 상세내용");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("sta_ctsnnDtl","absolute","0",null,"100","105",null,"0",this.div_work);_a.set_taborder("3");_a.set_text("경조상세");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new TextArea("txt_ctsnnDtl","absolute","102",null,"926","99",null,"3",this.div_work);_a.set_taborder("4");_a.set_wordwrap("char");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_restDeWorkList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_parentalLeave");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"191\"/><Column size=\"219\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"210\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"대상자녀\"/><Cell col=\"5\" text=\"생년월일\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"2\" text=\"bind:EMPNO\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:EMPNM\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"4\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:FAMILY_NM\"/><Cell col=\"5\" expr=\"bind:BRTHDY\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_notice","absolute","109","43","356","19",null,null,this);_a.set_taborder("5");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070122");_b.set_titletext("휴일근무내역");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM070122.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070122.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070122.xfdl",function(){this.checkDs=[this.ds_parentalLeave];this.saveRow= -1;this.isAuth=false;this.HRM070122_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM070122_onload=function(_a,_b){this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"YEAR",this.comUtils.getClientDate("YYYY"));this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){};this.fn_search=function(){this.ds_parentalLeave.clearData();this.fn_transaction("selectParentalLeaveList");};this.fn_transaction=function(_a){switch(_a){case "selectParentalLeaveList":var _b="/hsco/mis/hrm/HRM070122/selectParentalLeaveList.do";var _c="input1=ds_cond";var _d="ds_parentalLeave=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectRestDeWorkList":if(this.saveRow> -1){this.ds_parentalLeave.set_rowposition(this.saveRow);this.saveRow= -1;}break;}}};});this.on_initEvent=function(){this.ds_parentalLeave.addEventHandler("oncolumnchanged",this.ds_restDeWorkList_oncolumnchanged,this);this.ds_parentalLeave.addEventHandler("cancolumnchange",this.ds_restDeWorkList_cancolumnchange,this);this.addEventHandler("oninit",this.HRM070122_oninit,this);this.addEventHandler("onload",this.HRM070122_onload,this);this.div_work.grd_restDeWorkList.addEventHandler("oncellclick",this.div_work_grd_restDeWorkList_oncellclick,this);this.div_work.grd_restDeWorkList.addEventHandler("onheadclick",this.div_work_grd_restDeWorkList_onheadclick,this);};this.loadIncludeScript("HRM070122.xfdl");};})();