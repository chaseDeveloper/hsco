﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM070300_P01");this.set_classname("codeMng");this.set_titletext("프로그램목록 팝업");this._setFormPosition(0,0,500,500);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SERVC_ENTRPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IT_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"IT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"IT_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT_NM\" type=\"USE_AT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ENTRPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_STLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_returnList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SERVC_ENTRPS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IT_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"IT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"IT_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT_NM\" type=\"USE_AT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","0",null,"500","0%",null,this);_a.set_taborder("1");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0.4%","2",null,"496","96.6%",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","93.6%","8",null,"20","2.4%",null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","96.6%","2",null,"496","0.4%",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0.4%","2",null,"15","0.4%",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0.4%","483",null,"15","0.4%",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button50","absolute","88.6%","460",null,"23","3.4%",null,this);_a.set_taborder("8");_a.set_text("취소");this.addChild(_a.name,_a);_a=new Button("BtnOK","absolute","80%","460",null,"23","12%",null,this);_a.set_taborder("9");_a.set_text("확인");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0.4%","450",null,"10","0.4%",null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","3.4%","42",null,"5","3.4%",null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","88%","460",null,"24","11.4%",null,this);_a.set_taborder("26");_a.set_text("3");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","3.4%","19",null,"21","57.2%",null,this);_a.set_taborder("27");_a.set_text("업체및직원선택");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("Button23","absolute",null,"17","50","25","70",null,this);_a.set_taborder("34");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button02","absolute",null,"17","50","25","17",null,this);_a.set_taborder("35");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_excel_down01","absolute","348","19","26","21",null,null,this);_a.set_taborder("36");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","3.6%","46",null,"33","3.6%",null,this);_a.set_taborder("38");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("ENTRPS_NM","absolute","12.34%","5",null,"21","53.68%",null,this.div_search);_a.set_taborder("0");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","1.3%","5",null,"21","78.57%",null,this.div_search);_a.set_taborder("1");_a.set_text("업체명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","51.52%","5",null,"21","28.35%",null,this.div_search);_a.set_taborder("2");_a.set_text("직원명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("IT_EMP_NM","absolute","62.77%","5",null,"21","3.46%",null,this.div_search);_a.set_taborder("3");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_list","absolute","3.4%","89",null,null,"3.4%","50",this);_a.set_taborder("39");_a.set_binddataset("ds_grid");_a.set_autofittype("col");_a.set_treeuseline("false");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeuseexpandkey("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"257\"/><Column size=\"141\"/><Column size=\"89\"/><Column size=\"79\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"업체명\"/><Cell col=\"1\" text=\"직원명\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"담당업무\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:ENTRPS_NM\" treestartlevel=\"0\"/><Cell col=\"1\" text=\"bind:IT_EMP_NM\"/><Cell col=\"2\" text=\"bind:OFCPS\"/><Cell col=\"3\" text=\"bind:IT_JOB\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("38");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("codeMng");_b.set_titletext("프로그램목록 팝업");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("ITM070300_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM070300_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM070300_P01.xfdl",function(){var _a=this.parent.sport_stle;this.nCurRow=0;this.treeStatus=0;this.ITM070300_P01_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();this.fn_search();};this.ITM070300_P01_onload=function(_b,_c){};this.fn_init_form=function(){this.gfn_initForm(this);var _b=function(_c,_d,_e){};};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.ds_cond.setColumn(_b,"ENTRPS_NM",this.div_search.ENTRPS_NM.value);this.ds_cond.setColumn(_b,"IT_EMP_NM",this.div_search.IT_EMP_NM.value);this.ds_cond.setColumn(_b,"SPORT_STLE",_a);trace("ITM070300_P01 - selectList : "+this.ds_cond.getColumn(_b,"SPORT_STLE"));this.ds_grid.clearData();this.fn_transaction("selectList");};this.fn_transaction=function(_b){switch(_b){case "selectList":var _c="/hsco/etc/itm/ITM070300/ITM070300List_P.do";var _d="input1=ds_cond";var _e="ds_grid=output1";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c<0){this.gfn_callBackMsg(_b,_c,_d);return;}switch(_b){case "saveList":this.gfn_callBackMsg(_b,_c,_d);break;default:break;}};this.btn_excel_down01_onclick=function(_b,_c){this.gfn_exportExcel(this.Grid01,"exportExl");};this.Grid01_onheadclick=function(_b,_c){this.gfn_gridSort(_b,_c);};this.Button23_onclick=function(_b,_c){this.fn_search();};this.Button50_onclick=function(_b,_c){this.close();};this.Button02_onclick=function(_b,_c){this.close();};this.edit_onkeydown=function(_b,_c){if(_c.keycode=='13'){this.fn_search();}};this.grd_list_oncelldblclick=function(_b,_c){if(_c.col!='0'){var _d=new Dataset();_d.copyData(this.ds_grid);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_grid,this.ds_grid.rowposition);this.close(_d.saveXML());}};this.BtnOK_onclick=function(_b,_c){if(_c.col!='0'){var _d=new Dataset();_d.copyData(this.ds_grid);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_grid,this.ds_grid.rowposition);this.close(_d.saveXML());}};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_Menu_onrowposchanged,this);this.ds_grid.addEventHandler("cancolumnchange",this.ds_Menu_cancolumnchange,this);this.ds_returnList.addEventHandler("onrowposchanged",this.ds_Menu_onrowposchanged,this);this.ds_returnList.addEventHandler("cancolumnchange",this.ds_Menu_cancolumnchange,this);this.addEventHandler("oninit",this.ITM070300_P01_oninit,this);this.addEventHandler("onload",this.ITM070300_P01_onload,this);this.Button50.addEventHandler("onclick",this.Button50_onclick,this);this.BtnOK.addEventHandler("onclick",this.BtnOK_onclick,this);this.Button23.addEventHandler("onclick",this.Button23_onclick,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.btn_excel_down01.addEventHandler("onclick",this.btn_excel_down01_onclick,this);this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);};this.loadIncludeScript("ITM070300_P01.xfdl");};})();