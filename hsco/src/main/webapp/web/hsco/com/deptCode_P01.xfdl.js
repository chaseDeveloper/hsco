﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("deptCode_P01");this.set_classname("deptCode_P01");this.set_titletext("부서조회");this._setFormPosition(0,0,430,400);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRSN_SCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_deptCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DEPT_LEVEL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BEFORE_DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"BPLC_SE\" type=\"STRING\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"USE_BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"USE_ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"OUTPT_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"LAST_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm007",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"33","15",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_deptCode","absolute","15","5","38","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("코드");_a.style.set_align("center middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_deptCode","absolute","53","5","80","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_deptNm","absolute","186","5","80","21",null,null,this.div_search);_a.set_taborder("2");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chk_USE_AT","absolute","281","5","110","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("사용부서만 조회");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","133","5","15","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_deptNm","absolute","148","5","38","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("명칭");_a.style.set_align("center middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","266","5","15","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","200",null,"38","5",null,"0",this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","200","0","38","5",null,null,this.div_search);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_DEPT_CODE","absolute","15","88",null,null,"15","0",this);_a.set_taborder("4");_a.set_binddataset("ds_deptCode");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_treeusebutton("no");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"35\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"[부서코드] 부서명\"/><Cell col=\"2\" text=\"부서구분\"/><Cell col=\"3\" text=\"사용\"/></Band><Band id=\"body\" style=\"cellline: ;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"tree\" edittype=\"none\" style=\"padding: ;\" text=\"bind:DEPT_CODE_NM\" treestartlevel=\"1\" treelevel=\"bind:DEPT_LEVEL\" tooltiptext=\"bind:DEPT_CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" style=\"selectline: ;\" text=\"bind:DEPT_SE\" combodataset=\"ds_hrm007\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"image\" style=\"line:0 none #808080ff,0 solid #ececeeff,1 solid #ececeeff,0 none #808080ff;selectbackground:#ffffffff;selectline:0 none #808080ff,0 solid #ececeeff,1 solid #ececeeff,0 none #808080ff;\" text=\"expr:USE_AT=='1' ? &quot;image::ok.png&quot; : &quot;image::no.png&quot;\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("5");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","67",null,this);_a.set_taborder("6");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","119",null,this);_a.set_taborder("7");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","78",null,"10","15",null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",430,400,this,function(_b){_b.set_classname("deptCode_P01");_b.set_titletext("부서조회");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("deptCode_P01.xfdl","lib::comInclude.xjs");this.registerScript("deptCode_P01.xfdl",function(){this.onlySelectLast=false;this.deptCode_P01_oninit=function(_a,_b){};this.deptCode_P01_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);var _a=[["ds_hrm007","HRM007","Y","D","B"]];var _b=function(_c,_d,_e){this.div_search.edt_deptCode.set_value(this.parent.deptCode);this.div_search.edt_deptNm.set_value(this.parent.deptNm);this.div_search.chk_USE_AT.set_enableevent(false);var _f=this.parent.preAt;this.onlySelectLast=this.parent.onlySelectLast;if(typeof _f=="undefined"){_f="0";}if(_f=="0"){useAtChk="1";}else{useAtChk="0";}this.div_search.chk_USE_AT.set_value(useAtChk);this.div_search.chk_USE_AT.set_enableevent(true);this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"DEPT_CODE",this.div_search.edt_deptCode.value);this.ds_cond.setColumn(_a,"DEPT_NM",this.div_search.edt_deptNm.value);var _b=this.parent.preAt;var _c=this.div_search.chk_USE_AT.value;this.ds_cond.setColumn(_a,"PRE_AT",_b);this.ds_cond.setColumn(_a,"USE_AT",_c);if(this.parent.authorCtrlAt){if(this.gfn_authGrpId("HRM_ADMIN")!= -1||this.gfn_authGrpId("AUD_ADMIN")!= -1||this.gfn_authGrpId("HRM_NOMU")!= -1||this.gfn_authGrpId("ALL_ADMIN")!= -1||this.gfn_authGrpId("SAL_ADMIN")!= -1||this.gfn_authGrpId("SECRTRY")!= -1){}else if(this.gfn_authGrpId("GRFRS")!= -1){this.ds_cond.setColumn(_a,"EXPRSN_SCOPE","PARENT");}else{this.ds_cond.setColumn(_a,"EXPRSN_SCOPE","SELF");}}if(!this.comUtils.isNull(this.parent.parentFormId)){this.ds_cond.setColumn(_a,"FORM_ID",this.parent.parentFormId);this.ds_cond.setColumn(_a,"USER_DEPT_CODE",this.gfn_getDeptId());}this.ds_deptCode.clearData();this.fn_transaction("selectDeptCode");};this.fn_transaction=function(_a){switch(_a){case "selectDeptCode":var _b="hsco/com/sym/cdm/deptCode/selectDeptCode.do";var _c="input1=ds_cond";var _d="ds_deptCode=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_c){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectDeptCode":if(!this.comUtils.isNull(this.parent.inpDsColCd)){var _d=new Dataset();var _e=_d.loadXML(this.parent.inpDs);if(_e||this.parent.inpDsColCd=="DEPT_CODE_MULTI"){this.grd_DEPT_CODE.setFormatColProperty(0,"size","40");for(var _h=0;_h<_d.getRowCount();_h++ ){var _f=_d.getColumn(_h,this.parent.inpDsColCd);var _g=this.ds_deptCode.findRow("DEPT_CODE",_f);if(_g> -1){this.ds_deptCode.setColumn(_g,"CHK","1");}}}}break;}}};this.ds_deptCode_cancolumnchange=function(_a,_b){if(_b.columnid=="CHK"){var _c=this.ds_deptCode.findRow("DEPT_CODE","000000");if(_c> -1){if(_c==_b.row&&_b.newvalue=='1'){_a.set_enableevent(false);for(var _f=0;_f<_a.getRowCount();_f++ ){_a.setColumn(_f,"CHK","");}_a.set_enableevent(true);}var _d=this.ds_deptCode.getColumn(_c,"CHK");if(_d=='1'&&_b.newvalue=='1'&&_b.row!=_c){var _e="'화성도시공사'가 선택된 경우, 다른 부서를 선택하실 수 없습니다.";alert(_e);return false;}}}};this.div_pop_grd_DEPT_CODE_oncelldblclick=function(_a,_b){if(_b.col!='0'){var _c=this.ds_deptCode.rowposition;var _d=this.ds_deptCode.getColumn(_c,"LAST_AT");var _e=this.ds_deptCode.getColumn(_c,"DEPT_LEVEL");if(this.onlySelectLast){if(_d=="0"&&_e!="1"){this.gfn_message("info.처리불가","최상위 혹은 최하위 부서만 선택할 수 있습니다.");return false;}}var _f=new Dataset();_f.copyData(this.ds_deptCode);_f.clearData();var _c=_f.addRow();_f.copyRow(_c,this.ds_deptCode,this.ds_deptCode.rowposition);this.close(_f.saveXML());}};this.grd_DEPT_CODE_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);var _c=this.ds_deptCode.findRowExpr("DEPT_CODE == '000000' && CHK == '1'");if(_c> -1){this.ds_deptCode.set_enableevent(false);this.ds_deptCode.setColumn(_c,"CHK","");this.ds_deptCode.set_enableevent(true);}}};this.edit_onkeydown=function(_a,_b){if(_b.keycode=='13'){this.fn_search();}};this.div_search_chk_USE_AT_onchanged=function(_a,_b){this.fn_search();};this.div_pop_btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){var _c=this.ds_deptCode.rowposition;var _d=this.ds_deptCode.getColumn(_c,"LAST_AT");var _e=this.ds_deptCode.getColumn(_c,"DEPT_LEVEL");if(this.onlySelectLast){if(_d=="0"&&_e!="1"){this.gfn_message("info.처리불가","최상위 혹은 최하위 부서만 선택할 수 있습니다.");return false;}}var _f=new Dataset();_f.copyData(this.ds_deptCode);_f.clearData();var _g=this.grd_DEPT_CODE.getFormatColProperty(0,"size");if(_g==0){var _c=_f.addRow();_f.copyRow(_c,this.ds_deptCode,this.ds_deptCode.rowposition);}else{for(var _i=0;_i<this.ds_deptCode.getRowCount();_i++ ){var _h=this.ds_deptCode.getColumn(_i,"CHK");if(_h=='1'){var _c=_f.addRow();_f.copyRow(_c,this.ds_deptCode,_i);}}}this.close(_f.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_deptCode.addEventHandler("cancolumnchange",this.ds_deptCode_cancolumnchange,this);this.addEventHandler("onload",this.deptCode_P01_onload,this);this.addEventHandler("oninit",this.deptCode_P01_oninit,this);this.div_search.edt_deptCode.addEventHandler("onkeydown",this.edit_onkeydown,this);this.div_search.edt_deptNm.addEventHandler("onkeydown",this.edit_onkeydown,this);this.div_search.chk_USE_AT.addEventHandler("onchanged",this.div_search_chk_USE_AT_onchanged,this);this.div_search.chk_USE_AT.addEventHandler("onclick",this.div_search_chk_USE_AT_onclick,this);this.grd_DEPT_CODE.addEventHandler("oncelldblclick",this.div_pop_grd_DEPT_CODE_oncelldblclick,this);this.grd_DEPT_CODE.addEventHandler("onheadclick",this.grd_DEPT_CODE_onheadclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Search.addEventHandler("onclick",this.div_pop_btn_Search_onclick,this);};this.loadIncludeScript("deptCode_P01.xfdl");};})();