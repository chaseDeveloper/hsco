﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM010101_P01");this.set_classname("HRM010101_P01");this.set_titletext("부서코드선택");this._setFormPosition(0,0,430,450);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_deptCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"GW_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm007",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_DEPT_CODE","absolute","15","88",null,null,"15","15",this);_a.set_taborder("4");_a.set_binddataset("ds_deptCode");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_treeusebutton("no");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"부서구분\"/><Cell col=\"4\" text=\"사용\"/></Band><Band id=\"body\" style=\"cellline: ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:DEPT_CODE\" treestartlevel=\"1\" treelevel=\"bind:DEPT_LEVEL\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" displaytype=\"combo\" style=\"selectline: ;\" text=\"bind:DEPT_SE\" combodataset=\"ds_hrm007\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","67",null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","119",null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","78",null,"10","15",null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"33","15",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_DEPT_CDNM","absolute","15","5","88","20",null,null,this.div_search);_a.set_taborder("9");_a.set_text("부서코드(명)");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_USE_ENNC","absolute","228","5","64","20",null,null,this.div_search);_a.set_taborder("10");_a.set_text("사용유무");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_DEPT_CNM","absolute","103","5","110","20",null,null,this.div_search);_a.set_taborder("0");_a.set_imemode("hangul");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","213","0","15","31",null,null,this.div_search);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","383","0","15","31",null,null,this.div_search);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","292","5","91","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_useAt");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",430,450,this,function(_b){_b.set_classname("HRM010101_P01");_b.set_titletext("부서코드선택");});this.addLayout(_a.name,_a);_a=new BindItem("item24","div_search.edt_DEPT_CNM","value","ds_cond","DEPT_CNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.Combo00","value","ds_cond","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM010101_P1.xfdl","lib::comInclude.xjs");this.registerScript("HRM010101_P1.xfdl",function(){this.HRM010101_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM010101_P01_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);var _a=[["ds_hrm007","HRM007","Y","D","B"]];var _b=function(_c,_d,_e){this.ds_cond.clearData();var _f=this.ds_cond.addRow();this.ds_cond.setColumn(_f,"USE_AT",'1');this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_deptCode.clearData();this.fn_transaction("selectDeptCode");};this.fn_transaction=function(_a){switch(_a){case "selectDeptCode":var _b="hsco/mis/hrm/HRM010101/selectDeptList.do";var _c="input1=ds_cond";var _d="ds_deptCode=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_c){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectDeptCode":break;}}};this.div_pop_grd_DEPT_CODE_oncelldblclick=function(_a,_b){if(_b.col!='0'){var _c=new Dataset();_c.copyData(this.ds_deptCode);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_deptCode,this.ds_deptCode.rowposition);this.close(_c.saveXML());}};this.edit_onkeydown=function(_a,_b){};this.div_search_chk_USE_AT_onchanged=function(_a,_b){};this.div_pop_btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_deptCode);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_deptCode,this.ds_deptCode.rowposition);this.close(_c.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM010101_P01_onload,this);this.addEventHandler("oninit",this.HRM010101_P01_oninit,this);this.grd_DEPT_CODE.addEventHandler("oncelldblclick",this.div_pop_grd_DEPT_CODE_oncelldblclick,this);this.grd_DEPT_CODE.addEventHandler("onheadclick",this.grd_DEPT_CODE_onheadclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Search.addEventHandler("onclick",this.div_pop_btn_Search_onclick,this);};this.loadIncludeScript("HRM010101_P1.xfdl");};})();