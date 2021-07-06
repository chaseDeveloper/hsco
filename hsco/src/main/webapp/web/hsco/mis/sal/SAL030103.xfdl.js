﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL030103");this.set_classname("SAL030103");this.set_titletext("급여지급부서설정");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mtSalaryPymnt",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"32\"/><Column id=\"SN\" type=\"STRING\" size=\"16\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"32\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"32\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"32\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY_DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY_DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"32\"/><Column id=\"PYMNT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DDC_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","62","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("지급년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_pymntYm","absolute","78","5","85","21",null,null,this.div_search);_a.set_taborder("1");_a.set_async("false");_a.set_url("common::frmSalMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","178","5","62","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("지급순번");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_sn","absolute","245","5","62","21",null,null,this.div_search);_a.set_taborder("3");_a.set_value("0");_a.set_max("9");_a.set_min("1");_a.set_cssclass("spn_WF_Essential");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","324","5","44","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","367","5","162","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","169","19",null,null,this);_a.set_taborder("5");_a.set_text("월급여대상자");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_mtSalaryPymnt","absolute","0","58",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_mtSalaryPymnt");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"77\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"사업유형\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직종\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"호봉\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"지급액\"/><Cell col=\"9\" text=\"공제액\"/><Cell col=\"10\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"expr:BSNS_TY == 'A' ? '대행' : (BSNS_TY == 'B' ? '자체' : '')\"/><Cell col=\"2\" text=\"bind:SALARY_DEPT_CODE\" expandshow=\"show\"/><Cell col=\"3\" text=\"bind:SALARY_DEPT_NM\"/><Cell col=\"4\" text=\"bind:JSSFC_NM\"/><Cell col=\"5\" text=\"bind:CLSF_NM\"/><Cell col=\"6\" text=\"bind:SRCLS\"/><Cell col=\"7\" text=\"bind:EMPNM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PYMNT_AMT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DDC_AMT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AMT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;PYMNT_AMT&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DDC_AMT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;TOT_AMT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL030103");_b.set_titletext("급여지급부서설정");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_sn","value","ds_cond","SN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmSalMonCal.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("SAL030103.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL030103.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL030103.xfdl",function(){this.SAL030103_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.div_search.div_pymntYm.fn_setBind("ds_cond","PYMNT_YM");this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"PYMNT_YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));this.ds_cond.setColumn(0,"SN","1");this.fn_search();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_mtSalaryPymnt)){if(this.gfn_message("confirm.변경.저장.여부")){this.fn_save();return;}}this.fn_transaction("selectMtSalaryPymntList");};this.fn_save=function(){if(!Ex.util.isUpdated(this.ds_mtSalaryPymnt)){return;}this.fn_transaction("saveMtSalaryPymntList");};this.fn_transaction=function(_a){switch(_a){case "selectMtSalaryPymntList":var _b="hsco/mis/sal/SAL030103/selectMtSalaryPymntList.do";var _c="input1=ds_cond";var _d="ds_mtSalaryPymnt=output1";break;case "saveMtSalaryPymntList":var _b="hsco/mis/sal/SAL030103/saveMtSalaryPymntList.do";var _c="input1=ds_mtSalaryPymnt:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){}switch(_a){case "selectMtSalaryPymntList":break;case "saveMtSalaryPymntList":this.fn_transaction("selectMtSalaryPymntList");break;default:break;}};this.fn_insert=function(){};this.fn_delete=function(){};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_mtSalaryPymnt.reset();}};this.fn_print=function(){};this.grd_mtSalaryPymnt_onexpandup=function(_a,_b){if(_b.cell==2){this.gfn_popup("salaryDeptPopup",903,842,"급여부서",null,"mis_sal::SAL030103_P01.xfdl","fn_popupCallback",true);}};this.fn_popupCallback=function(_a,_b){if(_a=="salaryDeptPopup"){var _c=new Dataset();_c.loadXML(_b);if(_c.getRowCount()>0){var _d=this.ds_mtSalaryPymnt.rowposition;this.ds_mtSalaryPymnt.setColumn(_d,"SALARY_DEPT_CODE",_c.getColumn(0,"SALARY_DEPT_CODE"));this.ds_mtSalaryPymnt.setColumn(_d,"SALARY_DEPT_NM",_c.getColumn(0,"SALARY_DEPT_NM"));this.ds_mtSalaryPymnt.setColumn(_d,"BSNS_TY",_c.getColumn(0,"BSNS_TY"));}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL030103_oninit,this);this.addEventHandler("onload",this.SAL030103_onload,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.grd_mtSalaryPymnt.addEventHandler("onexpandup",this.grd_mtSalaryPymnt_onexpandup,this);};this.loadIncludeScript("SAL030103.xfdl");this.loadPreloadList();};})();