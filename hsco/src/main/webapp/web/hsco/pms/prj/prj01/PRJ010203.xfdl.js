﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ010203");this.set_classname("PRJ010203");this.set_titletext("PRJ010203_사업비실적집계관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_1",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"3\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"ODR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"100\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_3",this);_a.set_useclientlayout("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"16\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"3\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BS_GB\" type=\"STRING\" size=\"3\"/><Column id=\"GB\" type=\"STRING\" size=\"3\"/><Column id=\"DATA_SRC\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","7","64","20",null,null,this.div_search);_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","231","7","61","20",null,null,this.div_search);_a.set_text("진행구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_1","absolute","76","5","130","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_PRJ012");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("cmb_2","absolute","297","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_PRJ009");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("0");_a=new Button("btn_make","absolute",null,"5","40","21","5",null,this.div_search);_a.set_taborder("90");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkSrc","absolute",null,"5","50","21","50",null,this.div_search);_a.set_taborder("99");_a.set_text("원장");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","5",null,"290","230",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업명\"/><Cell col=\"2\" rowspan=\"2\" text=\"사업단계\"/><Cell col=\"3\" rowspan=\"2\" text=\"사업유형\"/><Cell col=\"4\" colspan=\"2\" text=\"사업기간\"/><Cell col=\"6\" rowspan=\"2\" text=\"총사업비&#13;&#10;(억원)\"/><Cell row=\"1\" col=\"4\" text=\"착공일자\"/><Cell row=\"1\" col=\"5\" text=\"완공일자\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_CODE\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:BSNS_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BSNS_STEP\" combodataset=\"ds_PRJ014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BSNS_TY\" combodataset=\"ds_PRJ012\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:STRWRK_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT)||0')\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_2","absolute",null,"5","220","290","0",null,this.div_work);_a.set_taborder("2");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"90\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업년차\"/><Cell col=\"1\" text=\"사업년도\"/><Cell col=\"2\" text=\"연간합계&#13;&#10;(억원)\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BSNS_YEAR\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT)||0')\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_3","absolute","0","300",null,null,"0","0",this.div_work);_a.set_taborder("3");_a.set_binddataset("ds_3");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"110\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"원가코드\"/><Cell col=\"1\" text=\"원가항목(대분류)\"/><Cell col=\"2\" text=\"원가항목(중분류)\"/><Cell col=\"3\" text=\"원가항목(소분류)\"/><Cell col=\"4\" text=\"사업비실적(억원)\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:STD_PRMPC_CODE\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:LCLAS_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:MLSFC_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:SCLAS_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT\"/><Cell col=\"5\" text=\"bind:RM\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT)||0')\"/><Cell col=\"5\" text=\"\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ010203");_b.set_titletext("PRJ010203_사업비실적집계관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_1","value","ds_cond1","BSNS_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.cmb_2","value","ds_cond1","BS_GB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item99","div_search.chkSrc","value","ds_cond1","DATA_SRC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ010203.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ010203.xfdl",function(){var _a='2';var _b='2';this.PRJ010203_oninit=function(_c,_d){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';};this.PRJ010203_onload=function(_c,_d){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_1);};this.fn_loadCombo=function(){var _c=this.ds_cond1;_c.setColumn(0,'GB',_a);_c.setColumn(0,'SRC',_b);var _d=[['ds_PRJ009','PRJ009',1,''],['ds_PRJ012','PRJ012',1,'']];var _e=function(_f,_g,_h){this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("mList");};this.fn_make=function(){if(this.gfn_message("confirm.생성.여부","||")){this.fn_transaction("make");}};this.fn_insert=function(){this.fn_make();};this.fn_transaction=function(_c){if(this.ds_cond1.rowcount<1){return;}var _d;var _e;var _f="hsco/pms/prj/PRJ010202/"+_c+".do";var _g="input1=ds_cond1";var _h="";switch(_c){case "mList":_h="ds_1=output1";break;case "rList":_d=this.ds_1;_e="BSNS_CODE=BSNS_CODE,";_h="ds_2=output1";break;case "r2List":_d=this.ds_2;_e="BSNS_CODE=BSNS_CODE,"+"BSNS_YEAR=BSNS_YEAR,";_h="ds_3=output1";break;case "make":_g="input1=ds_1:U";break;}if(_e){this.ds_cond1.copyRow(0,_d,_d.rowposition,_e);}switch(_c){case "mList":this.ds_1.clearData();case "rList":this.ds_2.clearData();case "r2List":this.ds_3.clearData();}Ex.core.tran(this,_c,_f,_g,_h);};this.fn_callBack=function(_c,_d,_e){this.debug("fn_callBack() - "+_c+','+_d+','+_e);if(_d!=0){return this.gfn_callback_message(_c,_d,_e);}switch(_c){case "mList":break;case "rList":break;case "r2List":break;case "make":this.fn_search();break;}};this.ds_onrowposchanged=function(_c,_d){if(_c.rowcount<1){return;}switch(_c){case this.ds_1:return this.fn_transaction("rList");case this.ds_2:return this.fn_transaction("r2List");}};});this.on_initEvent=function(){this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_2.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.PRJ010203_onload,this);this.addEventHandler("oninit",this.PRJ010203_oninit,this);this.div_search.cmb_1.addEventHandler("onitemchanged",this.fn_search,this);this.div_search.btn_make.addEventHandler("onclick",this.fn_make,this);this.div_search.chkSrc.addEventHandler("onchanged",this.fn_search,this);};this.loadIncludeScript("PRJ010203.xfdl");};})();