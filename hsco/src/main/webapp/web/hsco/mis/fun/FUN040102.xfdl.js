﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN040102");this.set_classname("FUN040102");this.set_titletext("세부자금수지");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_balcDetailList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CLASS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg017",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">FDATE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">조회기간 시작일</Col><Col id=\"notNull\">Y</Col><Col id=\"from\">FDATE</Col><Col id=\"to\">TDATE</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">TDATE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회기간 종료일</Col><Col id=\"from\">FDATE</Col><Col id=\"to\">TDATE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_balcDetailList","absolute","0","67",null,null,"28","0",this);_a.set_taborder("3");_a.set_binddataset("ds_balcDetailList");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"계정구분\"/><Cell col=\"2\" text=\"계정과목\"/><Cell col=\"3\" colspan=\"2\" text=\"지출단위코드\"/><Cell col=\"5\" colspan=\"2\" text=\"부서\"/><Cell col=\"7\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:BALC_DE\" autosizerow=\"limitmin\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:ACCT_CLASS_NAME\"/><Cell col=\"2\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"3\" text=\"bind:EXPNDTR_UNIT_CODE\"/><Cell col=\"4\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:EXPNDTR_UNIT_NM\"/><Cell col=\"5\" text=\"bind:DEPT_CODE\"/><Cell col=\"6\" style=\"align:left;padding:0 0 0 10;\" text=\"bind:DEPT_NM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:AMOUNT\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"expr:dataset.getSum(&quot;AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("조회기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","74","0",null,"32","951",null,this.div_search);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","176","0","38","5",null,null,this.div_search);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","176","26","38","5",null,null,this.div_search);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","402","0","38","5",null,null,this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_fdate","absolute","78","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static01","absolute","178","5","26","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_tdate","absolute","203","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_budgetAcntSe","absolute","318","5","64","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("계정구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_budgetAcntSe","absolute","382","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_bdg017");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static05","absolute","36.64%","2",null,"34","62.88%",null,this.div_search);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","29.45%","1",null,"30","69.1%",null,this.div_search);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","496","5","38","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","535","5","195","21",null,null,this.div_search);_a.set_taborder("3");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","46.84%","2",null,"34","51.7%",null,this.div_search);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static11","absolute","51.51%","2",null,"34","48.01%",null,this.div_search);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("sta_tbfunDpstAcnutList","absolute","0%","43",null,"19","84.04%",null,this);_a.set_taborder("1");_a.set_text("세부자금수지 내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"43","26","19","27",null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","0%","62",null,"5","2.64%",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FUN040102");_b.set_titletext("세부자금수지");});this.addLayout(_a.name,_a);_a=new BindItem("item6","div_search.cmb_budgetAcntSe","value","ds_cond","ACCT_CLASS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cal_tdate","value","ds_cond","TDATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_fdate","value","ds_cond","FDATE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FUN040102.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN040102.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN040102.xfdl",function(){this.FUN040102_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN040102_onload=function(_a,_b){this.ds_cond.setColumn(0,"FDATE",this.dateUtils.addMonth(this.dateUtils.today(), -1,"s"));this.ds_cond.setColumn(0,"TDATE",this.dateUtils.today());this.ds_cond.setColumn(0,"DEPT_CODE","000000");this.ds_cond.setColumn(0,"DEPT_NM","화성도시공사");this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _c=[["ds_bdg017","BDG017","Y","A"]];var _d=function(_e,_f,_g){this.ds_cond.setColumn(0,"ACCT_CLASS_CODE","");this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectBalcDetailList");};this.fn_transaction=function(_a){switch(_a){case "selectBalcDetailList":var _b="hsco/mis/fun/FUN040102/selectBalcDetailList.do";var _c="input1=ds_cond";var _d="ds_balcDetailList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectBalcDetailList":break;}}};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_balcDetailList,"exportExl");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FUN040102_oninit,this);this.addEventHandler("onload",this.FUN040102_onload,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);};this.loadIncludeScript("FUN040102.xfdl");this.loadPreloadList();};})();