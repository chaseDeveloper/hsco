﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080306_P01");this.set_classname("HRM080306_P01");this.set_titletext("배정예산선택");this._setFormPosition(0,0,1024,500);}_a=new Dataset("ds_budgetAsign",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_budgetAsignCopy",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUT_BUDGET_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"0","0",this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","121",null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","179","21",null,null,this);_a.set_taborder("9");_a.set_text("예산선택");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"33","15",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_year","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","155","0","15","27",null,null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT","absolute","170","5","38","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");_a.set_wordwrap("char");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","208","5","195","21",null,null,this.div_search);_a.set_taborder("2");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","403","0","15",null,null,"26",this.div_search);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("edt_year","absolute","79","5","76","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","15","78",null,"10","55",null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40",null,"5","0",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_budgetAsign","absolute","15","88",null,null,"15","15",this);_a.set_taborder("5");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_binddataset("ds_budgetAsign");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"예산년도\"/><Cell col=\"1\" text=\"예산계정코드\"/><Cell col=\"2\" text=\"예산부서\"/><Cell col=\"3\" text=\"예산명\"/><Cell col=\"4\" text=\"부기코드\"/><Cell col=\"5\" text=\"부기명\"/><Cell col=\"6\" text=\"예산현액\"/><Cell col=\"7\" text=\"기집행금액\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:BUDGET_ACNT_CODE\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"4\" text=\"bind:BUKIP_CODE\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:BUKIP_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:EXECUT_BUDGET_AMT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DECSN_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1024,500,this,function(_b){_b.set_classname("HRM080306_P01");_b.set_titletext("배정예산선택");});this.addLayout(_a.name,_a);_a=new BindItem("item4","div_search.edt_year","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM080306_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM080306_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM080306_P01.xfdl",function(){this.chargerAt=false;this.HRM080306_P01_oninit=function(_a,_b){};this.HRM080306_P01_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_a,"DEPT_NM",this.gfn_getDeptName());if((this.gfn_authGrpId("HRM_ADMIN")!= -1)||(this.gfn_authGrpId("HRM_EDC")!= -1)){this.chargerAt=true;}if(this.chargerAt){this.div_search.div_dept.set_enable(true);}var _b=this.comUtils.getClientDate("YYYY");if(_b=='2017'){_b='2018';}this.ds_cond.setColumn(_a,"YEAR",_b);this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_budgetAsign.clearData();this.fn_transaction("selectBudgetAcntList");};this.fn_transaction=function(_a){switch(_a){case "selectBudgetAcntList":var _b="/hsco/mis/hrm/HRM080306/selectBudgetAcntList.do";var _c="input1=ds_cond";var _d="ds_budgetAsign=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectBudgetAcntList":break;}}};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){this.ds_budgetAsignCopy.clearData();var _c=this.ds_budgetAsignCopy.addRow();var _d;_d=this.ds_budgetAsignCopy.copyRow(_c,this.ds_budgetAsign,this.ds_budgetAsign.rowposition);this.close(this.ds_budgetAsignCopy.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};this.grd_budgetAsign_oncelldblclick=function(_a,_b){this.ds_budgetAsignCopy.clearData();var _c=this.ds_budgetAsignCopy.addRow();var _d;_d=this.ds_budgetAsignCopy.copyRow(_c,this.ds_budgetAsign,this.ds_budgetAsign.rowposition);this.close(this.ds_budgetAsignCopy.saveXML());};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="REQEST_SE"){if(_b.newvalue==""){this.ds_ctr023.filter("");}if(_b.newvalue=="1"){this.ds_ctr023.filter("CODE > 99 && CODE < 200 || CODE == ''");}else if(_b.newvalue=="2"){this.ds_ctr023.filter("CODE > 199 && CODE < 300 || CODE == ''");}else if(_b.newvalue=="3"){this.ds_ctr023.filter("CODE > 299 && CODE < 400 || CODE == ''");}this.ds_cond.setColumn(0,"DETAIL_SE","");}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM080306_P01_oninit,this);this.addEventHandler("onload",this.HRM080306_P01_onload,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_search.sta_year.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.grd_budgetAsign.addEventHandler("oncelldblclick",this.grd_budgetAsign_oncelldblclick,this);};this.loadIncludeScript("HRM080306_P01.xfdl");this.loadPreloadList();};})();