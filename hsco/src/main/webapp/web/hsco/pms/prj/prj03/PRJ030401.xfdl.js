﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ030401");this.set_classname("PRJ030401");this.set_titletext("PRJ030401_예정원가집계관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_bsns",this);_a.getSetter("useclientlayout2").set("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"3\"/><Column id=\"STRWRK_DE\" type=\"STRING\" size=\"8\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"8\"/><Column id=\"TOT_WCT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_S1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMTD\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AMT_S2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"LCLAS_NM\" type=\"STRING\" size=\"100\"/><Column id=\"MLSFC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_1",this);_a.getSetter("useclientlayout2").set("1");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_STEP\" type=\"STRING\" size=\"3\"/><Column id=\"ODR\" type=\"BIGDECIMAL\" size=\"2\"/><Column id=\"STD_PRMPC_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"YRYC\" type=\"BIGDECIMAL\" size=\"2\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"CL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.getSetter("useclientlayout2").set("1");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"BSNS_YY_ODR\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"BSNS_GB\" type=\"STRING\" size=\"3\"/><Column id=\"YEAR\" type=\"STRING\" size=\"3\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"DATA_SRC\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ012",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","7","62","20",null,null,this.div_search);_a.set_text("기준년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","231","7","61","20",null,null,this.div_search);_a.set_text("진행구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_1","absolute","81","6","80","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_2","absolute","297","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_PRJ009");_a.set_value("1");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("0");_a=new Button("btn_make","absolute",null,"5","40","21","5",null,this.div_search);_a.set_taborder("90");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkSrc","absolute",null,"5","50","21","50",null,this.div_search);_a.set_taborder("99");_a.set_text("원장");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,"290","0",null,this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work.div_1);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0",null,null,"5","0","33",this.div_work.div_1);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_1.addChild(_a.name,_a);_a=new Grid("grd_bsns","absolute","0","5",null,null,"0","38",this.div_work.div_1);_a.set_taborder("1");_a.set_binddataset("ds_bsns");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"210\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"18\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"사업코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업명\"/><Cell col=\"2\" rowspan=\"2\" text=\"사업유형\"/><Cell col=\"3\" colspan=\"2\" text=\"사업기간\"/><Cell col=\"5\" colspan=\"3\" text=\"기준년도 시점까지(억원)\"/><Cell col=\"8\" rowspan=\"2\" text=\"사업비계획대비&#13;&#10;실적차액\"/><Cell col=\"9\" colspan=\"3\" text=\"기준년도 시점까지(억원)\"/><Cell row=\"1\" col=\"3\" text=\"착공일자\"/><Cell row=\"1\" col=\"4\" text=\"완공일자\"/><Cell row=\"1\" col=\"5\" text=\"사업비계획\"/><Cell row=\"1\" col=\"6\" text=\"간접비외\"/><Cell row=\"1\" col=\"7\" text=\"합계\"/><Cell row=\"1\" col=\"9\" text=\"사업비실적\"/><Cell row=\"1\" col=\"10\" text=\"간접비외\"/><Cell row=\"1\" col=\"11\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_CODE\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:BSNS_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:BSNS_TY\" combodataset=\"ds_PRJ012\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:STRWRK_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT1\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT2\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT_S1\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMTD\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT3\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT4\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT_S2\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_i","absolute","0",null,null,"33","0","0",this.div_work.div_1);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.div_work.div_1.addChild(_a.name,_a);_a=new Static("sta_11","absolute","15","7","120","20",null,null,this.div_work.div_1.div_i);_a.set_text("당초계획 총사업비");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new Static("sta_12","absolute","189","7","40","20",null,null,this.div_work.div_1.div_i);_a.set_text("억원");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new Static("sta_21","absolute","247","7","160","20",null,null,this.div_work.div_1.div_i);_a.set_text("기준년도까지 실적사업비");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new Static("sta_22","absolute","460","7","40","20",null,null,this.div_work.div_1.div_i);_a.set_text("억원");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new Static("sta_31","absolute","535","7","160","20",null,null,this.div_work.div_1.div_i);_a.set_text("완공년도까지 계획사업비");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new Static("sta_32","absolute","748","7","40","20",null,null,this.div_work.div_1.div_i);_a.set_text("억원");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new MaskEdit("mae_1","absolute","134","6","60","21",null,null,this.div_work.div_1.div_i);_a.set_taborder("1");_a.set_mask("#,##0.00");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new MaskEdit("mae_2","absolute","405","6","60","21",null,null,this.div_work.div_1.div_i);_a.set_taborder("2");_a.set_mask("#,##0.00");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new MaskEdit("mae_3","absolute","693","6","60","21",null,null,this.div_work.div_1.div_i);_a.set_taborder("3");_a.set_mask("#,##0.00");this.div_work.div_1.div_i.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","290",null,null,"450","0",this.div_work);_a.set_taborder("3");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","29",null,null,"0","0",this.div_work.div_2);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"120\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"원가코드\"/><Cell col=\"1\" text=\"분류구분\"/><Cell col=\"2\" text=\"원가항목명\"/><Cell col=\"3\" text=\"기준년도 이후&#13;&#10;계획사업비 합계\"/></Band><Band id=\"body\"><Cell mask=\"@@-@@-@@\" text=\"bind:STD_PRMPC_CODE\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:CL_SE\" combodataset=\"ds_PRJ010\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5;\" text=\"bind:CODE_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT)||0')\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Div("div_3","absolute",null,"290","450",null,"0","0",this.div_work);_a.set_taborder("4");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gud_h01","absolute","0","0",null,"5","0",null,this.div_work.div_3);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_3.addChild(_a.name,_a);_a=new Static("sta_gud_h02","absolute","0","24",null,"5","0",null,this.div_work.div_3);_a.set_text("5");_a.set_visible("0");_a.style.set_background("#dc143c3c");this.div_work.div_3.addChild(_a.name,_a);_a=new Static("sta_1","absolute","10","5","200","19",null,null,this.div_work.div_3);_a.set_text("계획사업비 조정");_a.set_cssclass("sta_WF_Title02");this.div_work.div_3.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","10","29",null,null,"0","0",this.div_work.div_3);_a.set_taborder("1");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업&#13;&#10;년차\"/><Cell col=\"1\" text=\"사업년도\"/><Cell col=\"2\" text=\"계획원가&#13;&#10;(억원)\"/><Cell col=\"3\" text=\"구성비\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BSNS_YEAR\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:AMT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" text=\"bind:RT\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 0;\" text=\"bind:RM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(AMT)||0')\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0.00\" expr=\"dataset.getSum('parseFloat(RT)||0')\"/><Cell col=\"4\"/></Band></Format></Formats>");this.div_work.div_3.addChild(_a.name,_a);_a=new Button("btn_31","absolute",null,"5","60","19","67",null,this.div_work.div_3);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.div_3.addChild(_a.name,_a);_a=new Button("btn_32","absolute",null,"5","64","19","0",null,this.div_work.div_3);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.div_3.addChild(_a.name,_a);_a=new Button("btn_33","absolute",null,"5","40","19","130",null,this.div_work.div_3);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");_a.set_visible("0");this.div_work.div_3.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_work.div_1.div_i,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_work.div_1.div_i.addLayout(_a.name,_a);_a=new Layout("default","",0,290,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("3");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",450,0,this.div_work.div_3,function(_b){_b.set_taborder("4");});this.div_work.div_3.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ030401");_b.set_titletext("PRJ030401_예정원가집계관리");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.cmb_1","value","ds_cond1","BSNS_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item02","div_search.cmb_2","value","ds_cond1","BSNS_GB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_work.div_1.div_i.mae_1","value","ds_bsns","TOT_WCT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item99","div_search.chkSrc","value","ds_cond1","DATA_SRC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ030401.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ030401.xfdl",function(){this.PRJ030401_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.form_id=application.gv_curFormId+'_';};this.PRJ030401_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=this.gfn_today().substr(0,4);this.div_search.spn_1.set_value(_a);var _b=[['ds_PRJ009','PRJ009',1,'A'],['ds_PRJ010','PRJ010',1,''],['ds_PRJ012','PRJ012',1,'']];var _c=function(_d,_e,_f){this.div_search.cmb_2.set_value(2);this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("bsnsList");};this.fn_make=function(){if(this.gfn_message("confirm.생성.여부","||")){this.fn_transaction("make");}};this.fn_insert=function(){this.fn_make();};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/PRJ030401/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "bsnsList":this.ds_cond1.setColumn(0,'YEAR',this.div_search.spn_1.value);_f="ds_bsns=output1";break;case "mList":_b=this.ds_bsns;_c="BSNS_CODE=BSNS_CODE,";_f="ds_1=output1";break;case "rList":_b=this.ds_bsns;_c="BSNS_CODE=BSNS_CODE"+",BSNS_TY=BSNS_TY";_f="ds_2=output1";break;case "make":break;}if(_c){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}switch(_a){case "bsnsList":this.ds_bsns.clearData();case "mList":this.ds_1.clearData();case "rList":this.ds_2.clearData();}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "bsnsList":break;case "mList":break;case "rList":break;case "make":this.fn_search();break;}};this.fn_insertDS=function(_a){if(this.ds_1.rowposition<0){return;}var _b;var _c;var _d=_a.addRow();switch(_a){case this.ds_2:default:_b=this.ds_bsns;_c="BSNS_CODE=BSNS_CODE,"+"BSNS_STEP=BSNS_STEP,"+"JOB_CODE=JOB_CODE,";break;}var _e=(_d<1)?this.gfn_today().substr(0,4):''+(1+parseInt(_a.getMax('BSNS_YEAR')));_a.setColumn(_d,'BSNS_YEAR',_e);_a.copyRow(_d,_b,_b.rowposition,_c);};this.fn_deleteDS=function(_a){_a.deleteRow(_a.rowposition);};this.ds_onrowposchanged=function(_a,_b){this.debug('onrow:'+_a.name);if(_a.rowcount<1){return;}switch(_a){case this.ds_bsns:return this.fn_transaction("mList");case this.ds_1:return this.fn_transaction("rList");}};this.btn_31_onclick=function(_a,_b){this.fn_insertDS(this.ds_2);};this.btn_32_onclick=function(_a,_b){this.fn_deleteDS(this.ds_2);};});this.on_initEvent=function(){this.ds_bsns.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.ds_2.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.PRJ030401_onload,this);this.addEventHandler("oninit",this.PRJ030401_oninit,this);this.div_search.spn_1.addEventHandler("onspin",this.fn_search,this);this.div_search.btn_make.addEventHandler("onclick",this.fn_make,this);this.div_search.chkSrc.addEventHandler("onchanged",this.fn_search,this);this.div_work.div_3.btn_31.addEventHandler("onclick",this.btn_31_onclick,this);this.div_work.div_3.btn_32.addEventHandler("onclick",this.btn_32_onclick,this);this.div_work.div_3.btn_33.addEventHandler("onclick",this.btn_33_onclick,this);};this.loadIncludeScript("PRJ030401.xfdl");};})();