﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD040102_P01");this.set_classname("AUD040102_P01");this.set_titletext("제외대상자등록팝업");this._setFormPosition(0,0,800,600);}_a=new Dataset("DS_IMET",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"30\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"10\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","800","600",null,null,this);_a.set_taborder("1");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_SearchArea","absolute","17","52",null,"33","17",null,this);_a.set_taborder("6");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Spin("spn_APPLC_YEAR","absolute","15","5","80","21",null,null,this.div_SearchArea);_a.set_taborder("1");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","100","5","20","21",null,null,this.div_SearchArea);_a.set_taborder("0");_a.set_text("년");this.div_SearchArea.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","17","91",null,null,"17","0",this);_a.set_taborder("7");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","0",null,null,"0","17",this.div_Cont);_a.set_taborder("0");_a.set_binddataset("DS_IMET");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"소속\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"직종\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"직위\"/><Cell col=\"7\" text=\"직렬\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.rowposition == currow ? &quot;☞&quot; : &quot;&quot;)\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:EMPNO\"/><Cell col=\"3\" style=\"align: ;\" text=\"bind:EMPNM\"/><Cell col=\"4\" text=\"bind:JSSFC_NM\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:HR_CLSF_NM\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:OFCPS_NM\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:JBLN_NM\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","229",null,this);_a.set_taborder("0");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Insert","absolute",null,"17","50","25","176",null,this);_a.set_taborder("2");_a.set_text("등록");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"17","50","25","123",null,this);_a.set_taborder("3");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute",null,"17","50","25","70",null,this);_a.set_taborder("4");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("5");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","2","792","15",null,null,this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15","496","2",null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","16","15","496",null,null,this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN","absolute","17","20","120","19",null,null,this);_a.set_taborder("14");_a.set_text("제외대상자등록");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","25","85","658","5",null,null,this);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","42","634","10",null,null,this);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_SearchArea,function(_b){_b.set_taborder("6");_b.set_cssclass("div_WFSA_Box");});this.div_SearchArea.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont,function(_b){_b.set_taborder("7");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){_b.set_classname("AUD040102_P01");_b.set_titletext("제외대상자등록팝업");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("AUD040102_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD040102_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD040102_P01.xfdl",function(){this.checkDs=[this.DS_IMET];this.AUD040102_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.AUD040102_P01_onload=function(_a,_b){this.div_SearchArea.spn_APPLC_YEAR.setFocus(true);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_SearchArea.spn_APPLC_YEAR.set_value(this.gfn_today().substring(0,4));this.fn_transaction("selectIMETList");};this.fn_init_dataset=function(){};this.div_SearchArea_btn_Insert_onclick=function(_a,_b){var _c=system.clientToScreenX(this,10);var _d=system.clientToScreenY(this,10);var _e=new ChildFrame;_e.init("Popup2","absolute",_c,_d,400,400,null,null,"com::empno_P01.xfdl");_e.set_openalign("center middle");_e.set_dragmovetype("all");_e.showModal(this.getOwnerFrame(),{},this,"fn_callback2");};this.fn_callback2=function(_a,_b){if(_a=="Popup2"){var _c=new Dataset();var _d=_c.loadXML(_b);var _e=0;if(_c.rowcount!=0){for(var _f=0;_f<this.DS_IMET.rowcount;_f++ ){if(_c.getColumn(0,'EMPNO')==this.DS_IMET.getColumn(_f,'EMPNO')){_e=1;this.gfn_message("comm.사원.등록.존재","제외대상으");}}if(_e==0){nRow=this.DS_IMET.addRow();this.DS_IMET.setColumn(nRow,"APPLC_YEAR",this.div_SearchArea.spn_APPLC_YEAR.value);this.DS_IMET.setColumn(nRow,'DEPT_CODE',_c.getColumn(0,'DEPT_CODE'));this.DS_IMET.setColumn(nRow,'DEPT_NM',_c.getColumn(0,'DEPT_NM'));this.DS_IMET.setColumn(nRow,'EMPNO',_c.getColumn(0,'EMPNO'));this.DS_IMET.setColumn(nRow,'EMPNM',_c.getColumn(0,'EMPNM'));this.DS_IMET.setColumn(nRow,'JSSFC_NM',_c.getColumn(0,'JSSFC_NM'));this.DS_IMET.setColumn(nRow,'HR_CLSF_NM',_c.getColumn(0,'HR_CLSF_NM'));this.DS_IMET.setColumn(nRow,'OFCPS_NM',_c.getColumn(0,'OFCPS_NM'));this.DS_IMET.setColumn(nRow,'JBLN_NM',_c.getColumn(0,'JBLN_NM'));}}}};this.fn_transaction=function(_a){switch(_a){case "selectIMETList":this.ds_cond2.clearData();var _b=this.ds_cond2.addRow();this.ds_cond2.setColumn(_b,"APPLC_YEAR",this.div_SearchArea.spn_APPLC_YEAR.value);var _c="hsco/mis/aud/AUD040102_P01/selectIMETList.do";var _d="input01=ds_cond2";var _e="DS_IMET=output01";break;case "IMETListCUD":var _c="hsco/mis/aud/AUD040102_P01/IMETListCUD.do";var _d="input02=DS_IMET:U";var _e="";break;}var _f="";Ex.core.tran(this,_a,_c,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "IMETListCUD":this.fn_transaction("selectIMETList");break;}}};this.div_SearchArea_btn_Delete_onclick=function(_a,_b){if(this.gfn_message("confirm.삭제여부")){var _c=this.DS_IMET.rowposition;this.DS_IMET.deleteRow(_c);}};this.div_SearchArea_btn_Save_onclick=function(_a,_b){if(Ex.util.isUpdated(this.DS_IMET)){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("IMETListCUD");}}else{this.gfn_message("comm.내역.변경.없음");}};this.div_SearchArea_btn_Close_onclick=function(_a,_b){this.close();};this.div_SearchArea_btn_Search_onclick=function(_a,_b){this.fn_transaction("selectIMETList");};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD040102_P01_onload,this);this.addEventHandler("oninit",this.AUD040102_P01_oninit,this);this.div_SearchArea.spn_APPLC_YEAR.addEventHandler("ontextchanged",this.div_SearchArea_spn_ESTBS_YEAR_ontextchanged,this);this.btn_Search.addEventHandler("onclick",this.div_SearchArea_btn_Search_onclick,this);this.btn_Insert.addEventHandler("onclick",this.div_SearchArea_btn_Insert_onclick,this);this.btn_Delete.addEventHandler("onclick",this.div_SearchArea_btn_Delete_onclick,this);this.btn_Save.addEventHandler("onclick",this.div_SearchArea_btn_Save_onclick,this);this.btn_Close.addEventHandler("onclick",this.div_SearchArea_btn_Close_onclick,this);this.sta_AUDIT_PLAN.addEventHandler("onclick",this.Static00_onclick,this);};this.loadIncludeScript("AUD040102_P01.xfdl");};})();