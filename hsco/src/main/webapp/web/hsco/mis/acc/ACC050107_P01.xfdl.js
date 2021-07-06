﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050107_P01");this.set_classname("UI_ACC050107_P01");this.set_titletext("계약자");this.set_scrollbars("none");this._setFormPosition(0,0,465,460);}_a=new Dataset("ds_viaacBcncInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_pcom06",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","15","114","435",null,null,"15",this);_a.set_taborder("0");_a.set_autofittype("col");_a.set_binddataset("ds_viaacBcncInfo");_a.set_treeinitstatus("expand,null");_a.set_treeusecheckbox("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"계약자코드\"/><Cell col=\"2\" text=\"계약자명\"/><Cell col=\"3\" text=\"계약정보\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:left;\" text=\"bind:JOB_SE\" combodataset=\"ds_pcom06\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CNTRCTR_NO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CNTRCTR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CNTRCTR_INFO\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","450","15",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","460",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","450","0","15","460",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","445","465","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","197","21",null,null,this);_a.set_taborder("7");_a.set_text("거래처");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","121",null,this);_a.set_taborder("8");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("9");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("10");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"59","15",null,this);_a.set_taborder("11");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_gud_v3","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");this.div_search.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","33","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","94","5","112","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_pcom06");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static00","absolute","15","31","73","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("계약자번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCTR_NO","absolute","94","31","112","21",null,null,this.div_search);_a.set_taborder("2");_a.set_maxlength("10");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","223","31","65","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("계약정보");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCTR_INFO","absolute","294","31","120","21",null,null,this.div_search);_a.set_taborder("3");_a.set_maxlength("10");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","223","5","65","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("계약자명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCTR_NM","absolute","294","5","120","21",null,null,this.div_search);_a.set_taborder("1");_a.set_maxlength("10");this.div_search.addChild(_a.name,_a);_a=new Static("sta_gud_h3","absolute","15","104",null,"10","15",null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("11");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",465,460,this,function(_b){_b.set_classname("UI_ACC050107_P01");_b.set_titletext("계약자");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item15","div_detail03.Edit04","value","ds_actMastr","PRMPC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail00.Edit00","value","ds_actMastr","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_detail00.Edit01","value","ds_actMastr","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_detail03.Edit00","value","ds_actMastr","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_search.Combo00","value","ds_cond","JOB_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_CNTRCTR_NO","value","ds_cond","CNTRCTR_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_CNTRCTR_INFO","value","ds_cond","CNTRCTR_INFO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_CNTRCTR_NM","value","ds_cond","CNTRCTR_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC050107_P01.xfdl","lib::comInclude.xjs");this.registerScript("ACC050107_P01.xfdl",function(){this.ACC050107_P01_onload=function(_a,_b){var _c=[["ds_pcom06","PCOM06","Y","D","B"]];var _d=function(_e,_f,_g){};this.gfn_comboLoad(_c,_d);this.ds_cond.clearData();this.ds_cond.addRow();};this.fn_transaction=function(_a){switch(_a){case "viaacBcncInfoList":var _b="hsco/mis/acc/ACC050107/viaacBcncInfoList.do";var _c="input1=ds_cond";var _d="ds_viaacBcncInfo=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b==0){switch(_a){case "viaacBcncInfoList":break;}}else{this.gfn_callback_message(_a,_b,_c);}};this.fn_search=function(){this.ds_viaacBcncInfo.clearData();this.fn_transaction("viaacBcncInfoList");};this.fn_close=function(){this.close();};this.grd_oncelldblclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_viaacBcncInfo);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_viaacBcncInfo,this.ds_viaacBcncInfo.rowposition);this.close(_c.saveXML());};this.btn_Confirm_onclick=function(_a,_b){this.grd_oncelldblclick();};});this.on_initEvent=function(){this.ds_pcom06.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC050107_P01_onload,this);this.grd.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.close,this);};this.loadIncludeScript("ACC050107_P01.xfdl");};})();