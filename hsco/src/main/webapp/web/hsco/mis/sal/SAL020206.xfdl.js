﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL020205");this.set_classname("SAL020204");this.set_titletext("동호회관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CLB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_clbManage",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CLB_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FOND_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CLB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHIRMN_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHIRMN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHIRMN_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"GRFR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"GRFR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRFR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FOND_ABL_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"ABL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MBER_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_empno",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_operAt",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_clbManage</Col><Col id=\"notNull\">Y</Col><Col id=\"colId\">FOND_DE</Col><Col id=\"msgId\">설립일자</Col><Col id=\"PK\">N</Col><Col id=\"nlength\"/><Col id=\"lengthChkGb\"/><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_clbManage</Col><Col id=\"colId\">CLB_NM</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">동호회명</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","10.11%","53",null,"5","86.2%",null,this.div_search);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","15","5","67","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("동호회명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","2",null,"20","98.64%",null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_clbNm","absolute","79","5","110","21",null,null,this.div_search);_a.set_taborder("0");_a.set_lengthunit("ascii");_a.set_maxlength("30");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","18.37%","5",null,"20","80.27%",null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_operAt","absolute","267","5","82","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_operAt");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static02","absolute","0%","33",null,"10","2.64%",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","53",null,"5","2.64%",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,null,"1.23%","0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,null,"0%","0",this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","252","19",null,null,this);_a.set_taborder("6");_a.set_text("동호회정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_clbManage","absolute","0","57",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_clbManage");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"84\"/><Column size=\"93\"/><Column size=\"95\"/><Column size=\"99\"/><Column size=\"82\"/><Column size=\"276\"/><Column size=\"95\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"설립일자\" suppress=\"1\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"동호회명\" suppress=\"1\"/><Cell col=\"2\" colspan=\"2\" text=\"회장\"/><Cell col=\"4\" colspan=\"2\" text=\"총무\"/><Cell col=\"6\" rowspan=\"2\" text=\"운영여부\"/><Cell col=\"7\" rowspan=\"2\" text=\"설립/폐지사유\"/><Cell col=\"8\" rowspan=\"2\" text=\"폐지일자\"/><Cell col=\"9\" rowspan=\"2\" text=\"회원수\"/><Cell row=\"1\" col=\"2\" text=\"부서\"/><Cell row=\"1\" col=\"3\" text=\"성명\"/><Cell row=\"1\" col=\"4\" text=\"부서\"/><Cell row=\"1\" col=\"5\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:FOND_DE\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CLB_NM\" editlimit=\"30\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CHIRMN_DEPT_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CHIRMN_EMPNM\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:GRFR_DEPT_NM\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:GRFR_EMPNM\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:OPER_AT\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:FOND_ABL_RESN\" editlimit=\"200\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:ABL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MBER_CNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","205","6","73","21",null,null,this);_a.set_taborder("7");_a.set_text("운영여부");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL020204");_b.set_titletext("동호회관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_clbNm","value","ds_cond","CLB_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_operAt","value","ds_cond","OPER_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SAL020206.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL020206.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL020206.xfdl",function(){var _a=0;this.checkDs=[this.ds_clbManage];this.SAL020206_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.SAL020206_onload=function(_b,_c){this.fn_loadCombo();this.ds_cond.setColumn(0,"OPER_AT","");this.fn_search();};this.fn_init_form=function(){this.fn_misFormInit(this);this.gfn_initForm(this);this.ds_cond.clearData();this.ds_clbManage.clearData();this.ds_operAt.clearData();var _b=this.ds_operAt.addRow();this.ds_operAt.setColumn(_b,"CODE","");this.ds_operAt.setColumn(_b,"CODE_NM","전체");_b=this.ds_operAt.addRow();this.ds_operAt.setColumn(_b,"CODE","0");this.ds_operAt.setColumn(_b,"CODE_NM","미운영");_b=this.ds_operAt.addRow();this.ds_operAt.setColumn(_b,"CODE","1");this.ds_operAt.setColumn(_b,"CODE_NM","운영");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_clbManage)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(!this.gfn_checkValidation_NoUpdChk(this.ds_clbManage,this.ds_validation)){return;}this.ds_clbManage.clearData();this.fn_transaction("selectClbList");};this.fn_insert=function(){var _b=this.ds_clbManage.addRow();this.ds_clbManage.setColumn(_b,"FOND_DE",this.dateUtils.format(this.gfn_today(),"yyyymmdd"));};this.fn_delete=function(){if(this.ds_clbManage.getColCount()>0){var _b=this.ds_clbManage.rowposition;if(this.ds_clbManage.getRowType(_b)!="2"){alert("해당 행은 삭제 불가합니다.");}else if(this.gfn_message("confirm.삭제여부")){this.ds_clbManage.deleteRow(_b);}}};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_clbManage)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation(this.ds_clbManage,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("clbCU");}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_clbManage)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(!this.comUtils.isDatasetUpdated(this.ds_clbManage)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.취소여부")){this.ds_clbManage.reset();this.ds_clbManage.applyChange();}};this.fn_transaction=function(_b){switch(_b){case "selectClbList":var _c="/hsco/mis/sal/SAL020206/selectClbList.do";var _d="input1=ds_cond";var _e="ds_clbManage=output1";break;case "clbCU":var _c="/hsco/mis/sal/SAL020206/clbCU.do";var _d="input1=ds_clbManage:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "clbCU":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.grd_clbManage_onexpandup=function(_b,_c){_a=this.grd_clbManage.getCellPos();var _d=system.clientToScreenX(this,10);var _e=system.clientToScreenY(this,10);var _f=new ChildFrame;_f.init("Popup1","absolute",_d,_e,400,400,null,null,"com::empno_P01.xfdl");_f.set_openalign("center middle");_f.set_dragmovetype("all");_f.set_showtitlebar(true);_f.showModal(this.getOwnerFrame(),{},this,"fn_callback2");};this.fn_callback2=function(_b,_c){if(_b=="Popup1"){this.ds_empno.clearData();nRowCnt=this.ds_empno.loadXML(_c);if(this.ds_empno.getColumn(0,"EMPNO")){var _d=this.ds_clbManage.rowposition;var _e=(_a==3?_a="CHIRMN":"GRFR");this.ds_clbManage.setColumn(_d,_e+"_EMPNO",this.ds_empno.getColumn(0,"EMPNO"));this.ds_clbManage.setColumn(_d,_e+"_DEPT_NM",this.ds_empno.getColumn(0,"DEPT_NM"));this.ds_clbManage.setColumn(_d,_e+"_EMPNM",this.ds_empno.getColumn(0,"EMPNM"));}}};this.cmb_operAt_onitemchanged=function(_b,_c){};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL020206_oninit,this);this.addEventHandler("onload",this.SAL020206_onload,this);this.div_search.cmb_operAt.addEventHandler("onitemchanged",this.cmb_operAt_onitemchanged,this);this.grd_clbManage.addEventHandler("onexpandup",this.grd_clbManage_onexpandup,this);};this.loadIncludeScript("SAL020206.xfdl");};})();