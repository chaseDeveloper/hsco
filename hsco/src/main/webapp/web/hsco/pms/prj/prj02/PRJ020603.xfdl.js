﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ020603");this.set_classname("PRJ020603");this.set_titletext("PRJ020603_연차별투자회수현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"STDR_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"INVT_PLAN_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"INVT_ACMSLT_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CNTRWK_CT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REWARD_CT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DSGN_CT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ETC_CT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RTRVL_PLAN_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RTRVL_ACMSLT_AMOUNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RTRVL_DFNNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DIFF1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DIFF2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DIFF3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DIFF4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_S\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RTRVL_PLAN_AMOUNT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"200\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"200\"/></ColumnInfo><Rows><Row><Col id=\"RTRVL_PLAN_AMOUNT2\">147</Col><Col id=\"AMT_S\">388</Col><Col id=\"BSNS_CODE\">A0901</Col><Col id=\"ETC_CT\">127</Col><Col id=\"DSGN_CT\">107</Col><Col id=\"REWARD_CT\">87</Col><Col id=\"BSNS_YEAR\">2015</Col><Col id=\"HOUSE_CODE\">101</Col><Col id=\"RTRVL_PLAN_AMOUNT\">143</Col><Col id=\"RTRVL_DFNNT\">183</Col><Col id=\"INVT_ACMSLT_AMOUNT\">43</Col><Col id=\"BSNS_NM\">학정지구 구획정리사업</Col><Col id=\"INVT_PLAN_AMOUNT\">23</Col><Col id=\"RTRVL_ACMSLT_AMOUNT\">163</Col><Col id=\"CNTRWK_CT\">67</Col><Col id=\"DIFF4\">-241</Col><Col id=\"DIFF3\">0</Col><Col id=\"DIFF2\">20</Col><Col id=\"DIFF1\">20</Col></Row><Row><Col id=\"BSNS_CODE\">C0200</Col><Col id=\"BSNS_YEAR\">2016</Col><Col id=\"HOUSE_CODE\">101</Col><Col id=\"RTRVL_PLAN_AMOUNT\">74</Col><Col id=\"RTRVL_DFNNT\">94</Col><Col id=\"INVT_ACMSLT_AMOUNT\">24</Col><Col id=\"BSNS_NM\">지산1단지아파트</Col><Col id=\"INVT_PLAN_AMOUNT\">14</Col><Col id=\"RTRVL_ACMSLT_AMOUNT\">84</Col><Col id=\"DIFF3\">0</Col><Col id=\"DIFF2\">10</Col><Col id=\"DIFF1\">10</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_GB\" type=\"STRING\" size=\"4\"/><Column id=\"STDR_YM\" type=\"STRING\" size=\"6\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Acnt",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"1\"/><Column id=\"CODE_NM\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">진행사업</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">완료사업</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ016",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","5","60","21",null,null,this.div_search);_a.set_text("사업선택");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","246","6","61","20",null,null,this.div_search);_a.set_text("기준년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_1","absolute","80","5","140","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_PRJ009");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("0");_a=new Div("cal_2","absolute","309","5","84","21",null,null,this.div_search);_a.set_taborder("5");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Button("btn_make","absolute",null,"5","40","21","5",null,this.div_search);_a.set_taborder("90");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkSrc","absolute",null,"5","50","21","50",null,this.div_search);_a.set_taborder("99");_a.set_text("원장");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,"400","0",null,this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","5",null,null,"0","0",this.div_work.div_1);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"56\"/><Column size=\"113\"/><Column size=\"88\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"사업명\"/><Cell col=\"3\" rowspan=\"2\" text=\"토지(주택)명\"/><Cell col=\"4\" colspan=\"3\" text=\"투자계획\"/><Cell col=\"7\" colspan=\"3\" text=\"회수계획\"/><Cell col=\"10\" rowspan=\"2\" text=\"투자대비&#13;&#10;회수차액\"/><Cell row=\"1\" col=\"4\" text=\"계획금액\"/><Cell row=\"1\" col=\"5\" text=\"실적금액\"/><Cell row=\"1\" col=\"6\" text=\"차액\"/><Cell row=\"1\" col=\"7\" text=\"계획금액\"/><Cell row=\"1\" col=\"8\" text=\"실적금액\"/><Cell row=\"1\" col=\"9\" text=\"차액\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_YEAR\"/><Cell col=\"1\" text=\"bind:BSNS_CODE\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:BSNS_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:HOUSE_NM\"/><Cell col=\"4\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:INVT_PLAN_AMOUNT\"/><Cell col=\"5\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:INVT_ACMSLT_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:DIFF1\"/><Cell col=\"7\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:RTRVL_PLAN_AMOUNT\"/><Cell col=\"8\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:RTRVL_ACMSLT_AMOUNT\"/><Cell col=\"9\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:DIFF2\"/><Cell col=\"10\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:DIFF3\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(INVT_PLAN_AMOUNT)||0')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(INVT_ACMSLT_AMOUNT)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(DIFF1)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(RTRVL_PLAN_AMOUNT)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(RTRVL_ACMSLT_AMOUNT)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(DIFF2)||0')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(DIFF3)||0')\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","400",null,null,"0","0",this.div_work);_a.set_taborder("2");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","0","5",null,null,"0","0",this.div_work.div_2);_a.set_taborder("0");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"56\"/><Column size=\"116\"/><Column size=\"92\"/><Column size=\"90\"/><Column size=\"99\"/><Column size=\"92\"/><Column size=\"88\"/><Column size=\"80\"/><Column size=\"87\"/><Column size=\"100\"/></Columns><Rows><Row size=\"16\" band=\"head\"/><Row size=\"16\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업년도\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"사업명\"/><Cell col=\"3\" rowspan=\"2\" text=\"토지(주택)명\"/><Cell col=\"4\" colspan=\"5\" text=\"투자계획\"/><Cell col=\"9\" rowspan=\"2\" text=\"회수계획\"/><Cell col=\"10\" rowspan=\"2\" text=\"투자회수차액\"/><Cell row=\"1\" col=\"4\" text=\"공사(건축)비\"/><Cell row=\"1\" col=\"5\" text=\"보상(대지)비\"/><Cell row=\"1\" col=\"6\" text=\"설계(사업)비\"/><Cell row=\"1\" col=\"7\" text=\"기타비용\"/><Cell row=\"1\" col=\"8\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_YEAR\"/><Cell col=\"1\" text=\"bind:BSNS_CODE\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:BSNS_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:HOUSE_NM\"/><Cell col=\"4\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:CNTRWK_CT\"/><Cell col=\"5\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:REWARD_CT\"/><Cell col=\"6\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:DSGN_CT\"/><Cell col=\"7\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:ETC_CT\"/><Cell col=\"8\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AMT_S\"/><Cell col=\"9\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:RTRVL_PLAN_AMOUNT2\"/><Cell col=\"10\" displaytype=\"number\" edittype2=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:DIFF4\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(CNTRWK_CT)||0')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(REWARD_CT)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(DSGN_CT)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(ETC_CT)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AMT_S)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(RTRVL_PLAN_AMOUNT2)||0')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(DIFF4)||0')\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,400,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("2");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ020603");_b.set_titletext("PRJ020603_연차별투자회수현황");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_1","value","ds_cond1","BSNS_GB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.cmb_2","value","ds_cond1","STDR_YM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("PRJ020603.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ020603.xfdl",function(){this.PRJ020603_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';this.div_search.cal_2.fn_setBind('ds_cond1','STDR_YM');};this.PRJ020603_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);};this.fn_loadCombo=function(){var _a=this.gfn_today().substr(0,6);this.div_search.cal_2.setValue(_a);var _b=[['ds_PRJ010','PRJ010',1,''],['ds_PRJ016','PRJ016',1,''],['ds_PRJ009','PRJ009',1,'']];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("mList");};this.fn_make=function(){if(this.gfn_message("confirm.생성.여부","||")){this.fn_transaction("make");}};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/PRJ020603/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "mList":_f="ds_1=output1";this.ds_1.clearData();break;case "make":ds=this.ds_cond_ctr;_e="input1=ds_cond1";}if(_c){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "mList":break;case "make":this.fn_search();break;}};this.ds_onrowposchanged=function(_a,_b){return;this.debug('onrow:'+_a.name);if(_a.rowcount<1){return;}switch(_a){case this.ds_1:return;}};});this.on_initEvent=function(){this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.PRJ020603_onload,this);this.addEventHandler("oninit",this.PRJ020603_oninit,this);this.div_search.btn_make.addEventHandler("onclick",this.fn_make,this);this.div_search.chkSrc.addEventHandler("onchanged",this.fn_search,this);};this.loadIncludeScript("PRJ020603.xfdl");this.loadPreloadList();};})();