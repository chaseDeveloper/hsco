﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM020100");this.set_classname("Pattern_03");this.set_titletext("그룹별사용자관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_AUTH_GRP",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DFLT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DFLT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_AUTH_USER",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_USER",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_COND",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUTH_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DFLT_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_SEARCH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_SYS_SE_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_JOB_SE_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_GROUP_SEARCH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUTH_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_DEPT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nLength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">DS_AUTH_USER</Col><Col id=\"colId\">AUTH_GRP_ID</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">그룹ID</Col></Row><Row><Col id=\"compId\">DS_AUTH_USER</Col><Col id=\"colId\">USER_ID</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"nLength\"/><Col id=\"msgId\">사용자ID</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_deptCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DEPT_LEVEL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BEFORE_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BPLC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"USE_BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"USE_ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTPT_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_searchDept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("3");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","80","21",null,null,this.div_search);_a.set_taborder("32");_a.set_text("그룹명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","260","5","80","21",null,null,this.div_search);_a.set_taborder("34");_a.set_text("시스템구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static18","absolute","505","5","80","21",null,null,this.div_search);_a.set_taborder("36");_a.set_cssclass("sta_WFSA_Label");_a.set_text("업무구분");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","100","5","145","21",null,null,this.div_search);_a.set_taborder("41");_a.set_imemode("hangul");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","345","5","145","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("44");_a.set_text("전체");_a.set_innerdataset("@DS_SYS_SE_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static00","absolute","750","5","80","21",null,null,this.div_search);_a.set_taborder("45");_a.set_text("디폴트 여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","845","5","110","21",null,null,this.div_search);_a.set_taborder("46");_a.set_text("디폴트 그룹");_a.set_tooltiptype("hover");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","590","5","145","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("47");_a.set_text("전체");_a.set_innerdataset("@DS_JOB_SE_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("56");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","1046","0","13","735",null,null,this);_a.set_taborder("57");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","32",null,"703","28",null,this);_a.set_taborder("59");_a.style.set_padding("0 0 0 0");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","0%","1",null,"10","0%",null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","10",null,"21","87.72%",null,this.div_work);_a.set_taborder("2");_a.set_text("권한그룹");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","0%","30",null,"5","0%",null,this.div_work);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_authGrp","absolute","-1","35","433","653",null,null,this.div_work);_a.set_taborder("88");_a.set_binddataset("DS_AUTH_GRP");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"102\"/><Column size=\"88\"/><Column size=\"147\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹ID\"/><Cell col=\"1\" text=\"그룹명\"/><Cell col=\"2\" text=\"업무구분\"/><Cell col=\"3\" text=\"권한코드\"/></Band><Band id=\"body\"><Cell text=\"bind:AUTH_GRP_ID\"/><Cell col=\"1\" text=\"bind:AUTH_GRP_NM\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:JOB_SE_NM\"/><Cell col=\"3\" text=\"bind:AUTH_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","442","393","57.03%","10",null,null,this.div_work);_a.set_taborder("89");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","439","422","57.32%","7",null,null,this.div_work);_a.set_taborder("91");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_authUser","absolute","442","35",null,"358","0",null,this.div_work);_a.set_taborder("142");_a.set_binddataset("DS_AUTH_USER");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"89\"/><Column size=\"62\"/><Column size=\"60\"/><Column size=\"81\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"그룹명\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"사용자ID\"/><Cell col=\"4\" text=\"사용자명\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"직책\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:AUTH_GRP_NM\"/><Cell col=\"2\" text=\"bind:EMPNO\"/><Cell col=\"3\" text=\"bind:USER_ID\"/><Cell col=\"4\" text=\"bind:USER_NM\"/><Cell col=\"5\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" text=\"bind:HR_CLSF_SE\"/><Cell col=\"7\" text=\"bind:RSPOFC_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static42","absolute","432","-8","10","724",null,null,this.div_work);_a.set_taborder("143");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static09","absolute","442","10","89","21",null,null,this.div_work);_a.set_taborder("159");_a.set_text("그룹사용자");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static13","absolute","946","403","3","19",null,null,this.div_work);_a.set_taborder("166");_a.set_text("3");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_work.addChild(_a.name,_a);_a=new Button("Button100","absolute",null,"403","82","19","1",null,this.div_work);_a.set_taborder("195");_a.set_text("사용자추가");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("Button37","absolute",null,"403","40","19","86",null,this.div_work);_a.set_taborder("196");_a.set_text("조회");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit02","absolute",null,"403","81","19","135",null,this.div_work);_a.set_taborder("197");this.div_work.addChild(_a.name,_a);_a=new Static("Static19","absolute",null,"403","67","19","217",null,this.div_work);_a.set_taborder("198");_a.set_text("사용자명");_a.set_cssclass("sta_WFSA_Label");this.div_work.addChild(_a.name,_a);_a=new Combo("cmbDept","absolute",null,"403","161","19","295",null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("199");_a.set_innerdataset("@ds_deptCode");_a.set_codecolumn("DEPT_CODE");_a.set_datacolumn("DEPT_CODE_NM");_a=new Static("Static11","absolute",null,"403","41","19","463",null,this.div_work);_a.set_taborder("200");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_userList","absolute","442","427",null,null,"0","7",this.div_work);_a.set_taborder("203");_a.set_binddataset("DS_USER");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"63\"/><Column size=\"70\"/><Column size=\"79\"/><Column size=\"144\"/><Column size=\"99\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"직책\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EMPNO\"/><Cell col=\"2\" text=\"bind:USER_ID\"/><Cell col=\"3\" text=\"bind:USER_NM\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:HR_CLSF_SE\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:RSPOFC_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_delRow","absolute",null,"11","64","19","0",null,this.div_work);_a.set_taborder("209");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","441","403","93","21",null,null,this.div_work);_a.set_taborder("210");_a.set_text("사용자목록");_a.set_cssclass("sta_WF_Title03");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("3");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,703,this.div_work,function(_b){_b.set_taborder("59");_b.style.set_padding("0 0 0 0");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("그룹별사용자관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.Edit02","value","DS_COND","AUTH_GRP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.Combo00","value","DS_COND","SYS_SE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.Combo01","value","DS_COND","JOB_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.CheckBox00","value","DS_COND","DFLT_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.CheckBox00","truevalue","1","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.CheckBox00","falsevalue","0","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.cmbDept","value","DS_SEARCH","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.Edit02","value","DS_SEARCH","USER_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SYM020200.xfdl","lib::comInclude.xjs");this.registerScript("SYM020200.xfdl",function(){this.form_oninit=function(_a,_b){this.gfn_initForm(this);};this.form_onload=function(_a,_b){this.fn_initCombo();};this.fn_chkJobse=function(){var _a=application.gv_curFormId;if(_a!="SYS_16020200"){var _b=application.gv_curFormId.split("_")[1];var _c=application.gds_menu.findRow("MENU_ID",_b);var _d=application.gds_menu.getColumn(_c,"SYS_SE_CODE");var _e=application.gds_menu.getColumn(_c,"JOB_SE");var _f=this.DS_SYS_SE_CODE.findRow("CODE",_d);var _g=this.DS_SYS_SE_CODE.getColumn(_f,"CODE_NM");var _h=this.DS_JOB_SE_CODE.findRow("CODE",_e);var _i=this.DS_JOB_SE_CODE.getColumn(_h,"CODE_NM");this.DS_SYS_SE_CODE.clearData();this.DS_JOB_SE_CODE.clearData();var _j=this.DS_SYS_SE_CODE.addRow();this.DS_SYS_SE_CODE.setColumn(_j,"CODE",_d);this.DS_SYS_SE_CODE.setColumn(_j,"CODE_NM",_g);var _k=this.DS_JOB_SE_CODE.addRow();this.DS_JOB_SE_CODE.setColumn(_k,"CODE",_e);this.DS_JOB_SE_CODE.setColumn(_k,"CODE_NM",_i);this.DS_COND.addRow();this.DS_COND.setColumn(_k,"JOB_SE",_e);this.DS_COND.setColumn(_k,"SYS_SE_CODE",_d);}};this.fn_initCombo=function(_a,_b){var _c=[["DS_SYS_SE_CODE","COM024","1","전체"],["DS_JOB_SE_CODE","COM025","1","전체"]];this.gfn_comboLoad(_c,this.fn_callbackAfter);};this.fn_loadDeptCombo=function(_a,_b){if(this.ds_searchDept.rowcount==0){this.ds_searchDept.addRow();}this.ds_searchDept.setColumn(0,"USE_AT","1");var _c=[["ds_deptCode","ds_searchDept","","전체","hsco/com/sym/cdm/deptCode/selectDeptCode.do",1],];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.fn_search=function(){var _a="getListGrp";var _b="hsco/com/sym/aum/SYM020200/getListGrp.do";var _c="input1=DS_COND";var _d="DS_AUTH_GRP=output1";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_grpUserSearch=function(){this.DS_AUTH_USER.clearData();var _a="getListGrp";var _b="hsco/com/sym/aum/SYM020200/getListGrpUser.do";var _c="input1=DS_GROUP_SEARCH";var _d="DS_AUTH_USER=output1";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);this.div_work.grd_authUser.setCellProperty("head",0,"text",'0');};this.fn_UserSearch=function(){this.DS_USER.clearData();var _a="getListUser";var _b="hsco/com/sym/aum/SYM020200/getListUser.do";var _c=this.DS_AUTH_GRP.getColumn(this.DS_AUTH_GRP.rowposition,"AUTH_GRP_ID");var _d=this.DS_AUTH_GRP.getColumn(this.DS_AUTH_GRP.rowposition,"AUTH_GRP_NM");this.DS_SEARCH.setColumn(0,"AUTH_GRP_ID",_c);this.DS_SEARCH.setColumn(0,"AUTH_GRP_NM",_d);var _e="input1=DS_SEARCH";var _f="DS_USER=output1";var _g="";Ex.core.tran(this,_a,_b,_e,_f,_g);this.div_work.grd_userList.setCellProperty("head",0,"text",'0');};this.fn_save=function(){var _a="save";var _b="hsco/com/sym/aum/SYM020200/SYM020200CUD.do";var _c="input1=DS_AUTH_USER:U";var _d="";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.DS_AUTH_USER.reset();this.DS_AUTH_USER.applyChange();this.DS_USER.reset();this.DS_USER.applyChange();this.div_work.grd_userList.setCellProperty("head",0,"text",'0');return;}};this.fn_callbackAfter=function(_a){this.fn_chkJobse();};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "save":this.gfn_message("success.처리.성공");this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.div_work_Button37_onclick=function(_a,_b){this.fn_UserSearch();};this.div_work_Button100_onclick=function(_a,_b){this.gfn_moveCheckDataset(this.div_work.grd_userList,this.DS_AUTH_USER);if(!this.gfn_checkValidation(this.DS_AUTH_USER,this.DS_VALIDATION)){return;}};this.div_work_Button103_onclick=function(_a,_b){this.gfn_moveCheckDataset(this.div_work.grd_authUser,this.DS_USER);if(!this.gfn_checkValidation(this.DS_USER,this.DS_VALIDATION)){return;}};this.div_work_btn_save_onclick=function(_a,_b){this.fn_save();};this.fn_delete=function(_a,_b){this.gfn_delMultiRow(this.DS_AUTH_USER);};this.div_work_grd_userList_onheadclick=function(_a,_b){this.gfn_setGridCheckAll(_a,_b);};this.div_work_grd_authUser_onheadclick=function(_a,_b){this.gfn_setGridCheckAll(_a,_b);};this.DS_AUTH_GRP_onrowposchanged=function(_a,_b){var _c=this.DS_AUTH_GRP.getColumn(this.DS_AUTH_GRP.rowposition,"AUTH_GRP_ID");this.DS_GROUP_SEARCH.setColumn(0,"AUTH_GRP_ID",_c);this.fn_grpUserSearch();};});this.on_initEvent=function(){this.DS_AUTH_GRP.addEventHandler("onrowposchanged",this.DS_AUTH_GRP_onrowposchanged,this);this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("oninit",this.form_oninit,this);this.div_work.grd_authUser.addEventHandler("onheadclick",this.div_work_grd_authUser_onheadclick,this);this.div_work.Button100.addEventHandler("onclick",this.div_work_Button100_onclick,this);this.div_work.Button37.addEventHandler("onclick",this.div_work_Button37_onclick,this);this.div_work.grd_userList.addEventHandler("onheadclick",this.div_work_grd_userList_onheadclick,this);this.div_work.btn_delRow.addEventHandler("onclick",this.fn_delete,this);};this.loadIncludeScript("SYM020200.xfdl");};})();