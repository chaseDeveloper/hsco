﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL020116");this.set_classname("SAL020115");this.set_titletext("가족수당지급조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_familyAllwncManage",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:EMPNM");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"TROBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPORT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_PYMNT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLWNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXT_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">PYMNT_YM</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_familyRelateSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_clsf",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","30.22%","2",null,"20","68.42%",null,this.div_search);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","10.11%","53",null,"5","86.2%",null,this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","326","5","41","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","363","5","168","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","2",null,"20","98.64%",null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","15","5","68","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("조회년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_pymntYm","absolute","76","5","87","21",null,null,this.div_search);_a.set_taborder("10");_a.set_async("false");_a.set_url("common::frmSalMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","15.45%","5",null,"20","83.19%",null,this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","33",null,"10","2.64%",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","252","19",null,null,this);_a.set_taborder("3");_a.set_text("가족수당지급 정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","53",null,"5","2.64%",null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,null,"1.23%","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,null,"0%","0",this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_FAMILY_ALLWNC_MANAGE","absolute","0","58",null,null,"28","0",this);_a.set_taborder("7");_a.set_binddataset("ds_familyAllwncManage");_a.set_autofittype("col");_a.set_autoenter("select");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"77\"/><Column size=\"119\"/><Column size=\"73\"/><Column size=\"82\"/><Column size=\"64\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"121\"/><Column size=\"278\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"지급년월\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"사번\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"가족관계\"/><Cell col=\"6\" text=\"가족명\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"수당금액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PYMNT_YM\" suppress=\"1\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:EMPNO\" expandshow=\"hide\" expandsize=\"20\" suppress=\"1\"/><Cell col=\"4\" edittype=\"none\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소 계 :' : EMPNM\" suppress=\"1\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:FAMILY_RELATE_SE\" combodataset=\"ds_familyRelateSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FAMILY_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:BRTHDY\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:ALLWNC_AMOUNT\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:RM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('ALLWNC_AMOUNT')\"/><Cell col=\"9\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","172","7","66","21",null,null,this);_a.set_taborder("8");_a.set_text("직급");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Combo("cmb_clseCode","absolute","212","6","102","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("9");_a.set_innerdataset("@ds_clsf");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("-1");_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL020115");_b.set_titletext("가족수당지급조회");});this.addLayout(_a.name,_a);_a=new BindItem("item1","cmb_clseCode","value","ds_cond","CLSF_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");this._addPreloadList("fdl","common::frmSalMonCal.xfdl");};this.addIncludeScript("SAL020116.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL020116.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL020116.xfdl",function(){this.checkDs=[];this.SAL020116_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SAL020116_onload=function(_a,_b){this.fn_loadCombo();this.div_search.div_pymntYm.setValue(this.dateUtils.format(this.gfn_today(),"yyyymm"));this.fn_search();};this.fn_init_form=function(){this.fn_misFormInit(this);this.gfn_initForm(this);this.ds_familyAllwncManage.clearData();this.ds_cond.clearData();this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_pymntYm.fn_setBind("ds_cond","PYMNT_YM");this.div_search.div_pymntYm.setFocus(true);this.ds_cond.addRow();this.ds_cond.setColumn(0,"CLSF_CODE","");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_familyRelateSe","HRM006",1,""],["ds_clsf","HRM002",1,"전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectFamilyAllwncList");};this.fn_transaction=function(_a){switch(_a){case "selectFamilyAllwncList":trace(this.ds_cond.saveXML());var _b="hsco/mis/sal/SAL020116/selectFamilyAllwncList.do";var _c="input1=ds_cond";var _d="ds_familyAllwncManage=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectfamilyallwncList":break;}}};this.grd_FAMILY_ALLWNC_MANAGE_onheadclick=function(_a,_b){LGV_COL_SORT=_b.col;this._gridSort(_a,_b);};this.Excel_down_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_FAMILY_ALLWNC_MANAGE,"FAMILY_ALLWNC_MANAGE");};this.div_search_rad_excclcSe_onitemchanged=function(_a,_b){this.fn_search();};this.div_search_rad_excclcSe_onitemclick=function(_a,_b){};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL020116_oninit,this);this.addEventHandler("onload",this.SAL020116_onload,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.grd_FAMILY_ALLWNC_MANAGE.addEventHandler("onheadclick",this.grd_FAMILY_ALLWNC_MANAGE_onheadclick,this);this.cmb_clseCode.addEventHandler("onitemchanged",this.div_search_cmb_CLSF_CODE_onitemchanged,this);};this.loadIncludeScript("SAL020116.xfdl");this.loadPreloadList();};})();