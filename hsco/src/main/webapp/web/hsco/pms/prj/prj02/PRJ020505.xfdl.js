﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ020505");this.set_classname("PRJ020505");this.set_titletext("PRJ020505_사업별추정매출산정");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_1",this);_a.getSetter("useclientlayout2").set("1");_a._setContents("<ColumnInfo><Column id=\"STDR_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"SUPLY_TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"TY_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"HSHLD_CO\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"AR\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"LTTOT_UNTPC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRSMP_SELNG_AM\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_2",this);_a.getSetter("useclientlayout2").set("1");_a._setContents("<ColumnInfo><Column id=\"STDR_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"SUPLY_TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"TY_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"HSHLD_CO\" type=\"BIGDECIMAL\" size=\"6\"/><Column id=\"AR\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"LTTOT_UNTPC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRSMP_SELNG_AM\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\"/><Col id=\"colId\"/><Col id=\"notNull\"/><Col id=\"msgId\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"STDR_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"SUPLY_TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"TY_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BSNS_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BSNS_GB\" type=\"STRING\" size=\"3\"/><Column id=\"DATA_SRC\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ009",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" size=\"1\"/><Column id=\"CODE_NM\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">진행사업</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">완료사업</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ010",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_PRJ016",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"0","28",null,"0","0",this);_a.set_text("28");_a.set_visible("0");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_1","absolute","15","5","75","21",null,null,this.div_search);_a.set_text("사업선택 : ");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_2","absolute","390","6","61","20",null,null,this.div_search);_a.set_text("보고년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_PRJ","absolute","90","5","243","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_PRJ009");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("1");_a.set_direction("vertical");_a=new Div("cal_2","absolute","453","5","84","21",null,null,this.div_search);_a.set_taborder("5");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Button("btn_make","absolute",null,"5","40","21","5",null,this.div_search);_a.set_taborder("90");_a.set_text("생성");_a.set_cssclass("btn_WF_Process");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chkSrc","absolute",null,"5","50","21","50",null,this.div_search);_a.set_taborder("99");_a.set_text("원장");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("0");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Div("div_1","absolute","0","0",null,"400","0",null,this.div_work);_a.set_taborder("1");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_1","absolute","0","5",null,null,"0","0",this.div_work.div_1);_a.set_taborder("1");_a.set_binddataset("ds_1");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업코드\"/><Cell col=\"1\" text=\"사업명\"/><Cell col=\"2\" text=\"토지(주택)명\"/><Cell col=\"3\" text=\"공급유형\"/><Cell col=\"4\" text=\"타입(블럭)\"/><Cell col=\"5\" text=\"세대수(LOT)\"/><Cell col=\"6\" text=\"면적(㎡)\"/><Cell col=\"7\" text=\"분양단가\"/><Cell col=\"8\" text=\"추정매출액\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_CODE\"/><Cell col=\"1\" style=\"align:left;padding:0 5 0 5\" text=\"bind:BSNS_NM\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5\" text=\"bind:HOUSE_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5\" text=\"bind:SUPLY_TY_NM\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5\" text=\"bind:TY_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:HSHLD_CO\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AR\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:LTTOT_UNTPC\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:PRSMP_SELNG_AM\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(HSHLD_CO)||0')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AR)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(LTTOT_UNTPC)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(PRSMP_SELNG_AM)||0')\"/></Band></Format></Formats>");this.div_work.div_1.addChild(_a.name,_a);_a=new Div("div_2","absolute","0","400",null,null,"0","0",this.div_work);_a.set_taborder("2");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_2","absolute","0","5",null,null,"0","0",this.div_work.div_2);_a.set_taborder("0");_a.set_binddataset("ds_2");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"55\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업년도\"/><Cell col=\"1\" text=\"사업코드\"/><Cell col=\"2\" text=\"사업명\"/><Cell col=\"3\" text=\"토지(주택)명\"/><Cell col=\"4\" text=\"공급유형\"/><Cell col=\"5\" text=\"타입(블럭)\"/><Cell col=\"6\" text=\"세대수(LOT)\"/><Cell col=\"7\" text=\"면적(㎡)\"/><Cell col=\"8\" text=\"분양단가\"/><Cell col=\"9\" text=\"추정매출액\"/></Band><Band id=\"body\"><Cell text=\"bind:BSNS_YEAR\"/><Cell col=\"1\" text=\"bind:BSNS_CODE\"/><Cell col=\"2\" style=\"align:left;padding:0 5 0 5\" text=\"bind:BSNS_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 5 0 5\" text=\"bind:HOUSE_NM\"/><Cell col=\"4\" style=\"align:left;padding:0 5 0 5\" text=\"bind:SUPLY_TY_NM\"/><Cell col=\"5\" style=\"align:left;padding:0 5 0 5\" text=\"bind:TY_CODE_NM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:HSHLD_CO\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:AR\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:LTTOT_UNTPC\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" text=\"bind:PRSMP_SELNG_AM\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(HSHLD_CO)||0')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(AR)||0')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(LTTOT_UNTPC)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" mask=\"#,##0\" expr=\"dataset.getSum('parseInt(PRSMP_SELNG_AM)||0')\"/></Band></Format></Formats>");this.div_work.div_2.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,400,this.div_work.div_1,function(_b){_b.set_taborder("1");});this.div_work.div_1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work.div_2,function(_b){_b.set_taborder("2");});this.div_work.div_2.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ020505");_b.set_titletext("PRJ020505_사업별추정매출산정");});this.addLayout(_a.name,_a);_a=new BindItem("item01","div_search.rdo_PRJ","value","ds_cond1","BSNS_GB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item99","div_search.chkSrc","value","ds_cond1","DATA_SRC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("PRJ020505.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("PRJ020505.xfdl",function(){this.PRJ020505_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.div_search.cal_2.fn_setBind('ds_cond1','STDR_YM');this.form_id=application.gv_curFormId+'_';};this.PRJ020505_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=this.gfn_today().substr(0,6);this.div_search.cal_2.setValue(_a);var _b=[['ds_PRJ009','PRJ009',1,'A'],['ds_PRJ010','PRJ010',1,''],['ds_PRJ016','PRJ016',1,'']];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("mList");};this.fn_make=function(){if(this.gfn_message("confirm.생성.여부","||")){this.fn_transaction("make");}};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("save");}};this.fn_transaction=function(_a){if(this.ds_cond1.rowcount<1){return;}var _b;var _c;var _d="hsco/pms/prj/PRJ020505/"+_a+".do";var _e="input1=ds_cond1";var _f="";switch(_a){case "mList":_c="BSNS_CODE=BSNS_CODE,";_f="ds_1=output1";this.ds_1.clearData();this.ds_2.clearData();break;case "rList":_b=this.ds_1;_c="BSNS_CODE=BSNS_CODE,"+"HOUSE_CODE=HOUSE_CODE,"+"SUPLY_TY_CODE=SUPLY_TY_CODE,"+"TY_CODE=TY_CODE,"+"BSNS_YEAR=BSNS_YEAR,";_f="ds_2=output1";this.ds_2.clearData();break;}if(_b){this.ds_cond1.copyRow(0,_b,_b.rowposition,_c);}Ex.core.tran(this,_a,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){this.debug("fn_callBack() - "+_a+','+_b+','+_c);if(_b!=0){return this.gfn_callback_message(_a,_b,_c);}switch(_a){case "mList":break;case "rList":break;}};this.ds_onrowposchanged=function(_a,_b){if(_a.rowcount<1){return;}switch(_a){case this.ds_1:return this.fn_transaction("rList");}};});this.on_initEvent=function(){this.ds_1.addEventHandler("onrowposchanged",this.ds_onrowposchanged,this);this.addEventHandler("onload",this.PRJ020505_onload,this);this.addEventHandler("oninit",this.PRJ020505_oninit,this);this.div_search.rdo_PRJ.addEventHandler("onitemchanged",this.fn_search,this);this.div_search.btn_make.addEventHandler("onclick",this.fn_make,this);this.div_search.chkSrc.addEventHandler("onchanged",this.fn_search,this);};this.loadIncludeScript("PRJ020505.xfdl");this.loadPreloadList();};})();