﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090401_P1");this.set_classname("UI_HRM090401_P1");this.set_titletext("차량목록");this._setFormPosition(0,0,500,457);}_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_registList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VHCTY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MAKR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YRIDNW\" type=\"STRING\" size=\"256\"/><Column id=\"INTGR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TKCAR_PSNCPA\" type=\"STRING\" size=\"256\"/><Column id=\"LDADNG_FDQNT\" type=\"STRING\" size=\"256\"/><Column id=\"VIN\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_REGIST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_DSUSE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0",null,"15","0",null,this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button02","absolute",null,"15","50","25","68",null,this);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_cond","absolute","15","45",null,"59","15",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_BIZPLC_CDNM","absolute","289","5","102","20",null,null,this.div_cond);_a.set_taborder("0");_a.set_text("차량명");_a.set_cssclass("sta_WFSA_Label");this.div_cond.addChild(_a.name,_a);_a=new Edit("edt_vhcleNm","absolute","351","5","102","21",null,null,this.div_cond);_a.set_taborder("1");_a.set_imemode("hangul");_a.set_autoselect("true");this.div_cond.addChild(_a.name,_a);_a=new Static("Static03","absolute","270","0","19","31",null,null,this.div_cond);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_cond.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","17","5","64","21",null,null,this.div_cond);_a.set_taborder("3");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_cond.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","81","5","189","21",null,null,this.div_cond);_a.set_taborder("4");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_cond.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","26",null,"5","0",null,this.div_cond);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_cond.addChild(_a.name,_a);_a=new Static("Static02","absolute","0",null,null,"5","0","0",this.div_cond);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_cond.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","0",null,"5","0",null,this.div_cond);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_cond.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","19",null,null,"0",this.div_cond);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_cond.addChild(_a.name,_a);_a=new Static("sta_searchDept00","absolute","17","31","64","21",null,null,this.div_cond);_a.set_taborder("9");_a.set_text("사용여부");_a.set_cssclass("sta_WFSA_Label");this.div_cond.addChild(_a.name,_a);_a=new Combo("cmb_useAt","absolute","80","31","77","21",null,null,this.div_cond);this.div_cond.addChild(_a.name,_a);var _b=new Dataset("cmb_useAt_innerdataset",this.div_cond.cmb_useAt);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("10");_a.set_text("사용");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("Static00","absolute","15","17","344","21",null,null,this);_a.set_taborder("12");_a.set_text("차량조회");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Grid("grd_bizplcList","absolute","15","104",null,null,"15","0",this);_a.set_taborder("13");_a.set_binddataset("ds_registList");_a.set_autofittype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리부서\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"차량명\"/><Cell col=\"3\" text=\"차량코드\"/><Cell col=\"4\" text=\"차량명\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NM\" editlimit=\"6\" editautoselect=\"true\" editlengthunit=\"utf8\" treestartlevel=\"1\" treelevel=\"bind:BIZPLC_LEVEL_SE\"/><Cell col=\"1\" text=\"bind:VHCLE_NO\"/><Cell col=\"2\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 10;\" text=\"bind:VHCLE_NM\" editlimit=\"50\" editautoselect=\"true\" editlengthunit=\"utf8\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:BEFORE_BIZPLC_CODE\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:BIZPLC_NM\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_cond,function(_c){_c.set_taborder("4");_c.set_cssclass("div_WFSA_Box");});this.div_cond.addLayout(_a.name,_a);_a=new Layout("default","",500,457,this,function(_c){_c.set_classname("UI_HRM090401_P1");_c.set_titletext("차량목록");});this.addLayout(_a.name,_a);_a=new BindItem("item24","Div00.edt_BIZPLC_CDNM","value","ds_cond","BIZPLC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_cond.edt_vhcleNm","value","ds_cond","VHCLE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_cond.cmb_useAt","value","ds_cond","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM090401_P1.xfdl","lib::comInclude.xjs");this.registerScript("HRM090401_P1.xfdl",function(){this.isAuth=false;this.form_oninit=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"USE_AT","1");this.ds_cond.setColumn(0,"DEPT_CODE",this.parent.arg_1);this.ds_cond.setColumn(0,"DEPT_NM",this.parent.arg_2);if(this.gfn_authGrpId("HRM_ADMIN")!= -1){this.isAuth=true;}else{this.isAuth=false;}this.div_cond.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_cond.div_DEPT.fn_setCssclass("edt_WF_Readonly");this.div_cond.div_DEPT.div_Search.btn_dept.set_visible(true);};this.form_onload=function(_a,_b){this.fn_search();};this.fn_search=function(){this.fn_transaction("tbhrmRegistList");};this.fn_transaction=function(_a){switch(_a){case "tbhrmRegistList":var _b="/hsco/mis/hrm/HRM090401/tbhrmRegistPopupList.do";var _c="input1=ds_cond";var _d="ds_registList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "tbhrmRegistList":if(this.saveRow> -1){this.ds_registList.set_rowposition(this.saveRow);this.saveRow= -1;}break;}}};this.fn_close=function(_a,_b){this.close();};this.grd_bizplcList_oncelldblclick=function(_a,_b){if(_b.row>=0&&_a.rowcount>0){var _c=new Dataset();_c.copyData(this.ds_registList);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_registList,this.ds_registList.rowposition);this.close(_c.saveXML());}};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("oninit",this.form_oninit,this);this.Button02.addEventHandler("onclick",this.fn_search,this);this.Button00.addEventHandler("onclick",this.fn_close,this);this.div_cond.edt_vhcleNm.addEventHandler("onkeyup",this.div_search_edt_BIZPLC_CDNM_onkeyup,this);this.grd_bizplcList.addEventHandler("oncelldblclick",this.grd_bizplcList_oncelldblclick,this);};this.loadIncludeScript("HRM090401_P1.xfdl");this.loadPreloadList();};})();