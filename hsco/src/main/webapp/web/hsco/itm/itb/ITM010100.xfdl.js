﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("form");this.set_classname("ITM010100");this.set_titletext("IT 기본코드관리");this._setFormPosition(0,0,1056,856);}this.getSetter("inheritanceid").set("");_a=new Dataset("DS_SAYONG_COMBO",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBITM_IT_CL_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BACKUP_STORAGE\" type=\"STRING\" size=\"3\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ERROR_BEGIN_DT\" type=\"DATE\" size=\"7\"/><Column id=\"ERROR_END_DT\" type=\"DATE\" size=\"7\"/><Column id=\"ERROR_CAUSE\" type=\"STRING\" size=\"3\"/><Column id=\"PROCESS_CN\" type=\"STRING\" size=\"200\"/><Column id=\"CHARGER\" type=\"STRING\" size=\"20\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"SAMENSS_ERROR_AT\" type=\"STRING\" size=\"1\"/><Column id=\"PLAN_BACKUP_ENNC\" type=\"STRING\" size=\"1\"/><Column id=\"EVL_SCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ERROR_TIME\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"100\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"DCSN_ENNC\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("st_Title","absolute","17","15","204","15",null,null,this);_a.set_taborder("6");_a.set_text("IT 기본코드관리");_a.set_wordwrap("english");_a.set_cssclass("sta_WF_title");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","60","25","330",null,this);_a.set_taborder("8");_a.style.set_background("URL('theme://Images/btn01_search.png') repeat-x");_a.style.set_border("0 none #808080ff");_a.style.set_bordertype("normal 0 0");this.addChild(_a.name,_a);_a=new Button("btn_Insert","absolute",null,"15","60","25","268",null,this);_a.set_taborder("12");_a.style.set_background("URL('theme://Images/btn01_insert.png') repeat-x");_a.style.set_border("0 none #808080ff");_a.style.set_bordertype("normal 0 0");_a.style.set_font("bold 8 dotum");_a.getSetter("userdata").set("A:I;");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"15","60","25","206",null,this);_a.set_taborder("13");_a.style.set_background("URL('theme://Images/btn01_delete.png') repeat-x");_a.style.set_border("0 none #808080ff");_a.style.set_bordertype("normal 0 0");_a.style.set_font("bold 8 dotum");_a.getSetter("userdata").set("A:D;");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute",null,"15","60","25","82",null,this);_a.set_taborder("14");_a.style.set_background("URL('theme://Images/btn01_save.png') repeat-x");_a.style.set_border("0 none #808080ff");_a.style.set_bordertype("normal 0 0");_a.style.set_font("bold 8 dotum");_a.getSetter("userdata").set("A:T;");this.addChild(_a.name,_a);_a=new Grid("grd_TBITM_IT_CL_CODE00","absolute","17","123",null,null,"73.39%","15",this);_a.set_taborder("15");_a.set_binddataset("DS_TBITM_IT_CL_CODE");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"15","60","25","144",null,this);_a.set_taborder("25");_a.style.set_background("URL('theme://images/btn01_cancel.png') repeat-x");_a.style.set_border("0 none #808080ff");_a.style.set_bordertype("normal 0 0");_a.style.set_font("bold 8 dotum");_a.getSetter("userdata").set("A:D;");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","60","25","20",null,this);_a.set_taborder("26");_a.style.set_background("URL('theme://images/btn01_close.png') repeat-x");_a.style.set_border("0 none #808080ff");_a.style.set_bordertype("normal 0 0");_a.style.set_font("bold 8 dotum");_a.getSetter("userdata").set("A:T;");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","17","49",null,"41","20",null,this);_a.set_taborder("29");_a.style.set_background("#f2f3f7ff");_a.style.set_border("1 solid #e0e0e0ff");this.addChild(_a.name,_a);_a=new Static("sta_00","absolute","33","9","102","20",null,null,this.div_SEARCH);_a.set_taborder("0");_a.set_text("사용여부(구분)");_a.style.set_align("right middle");_a.style.set_font("bold 9 Dotum");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("cmb_00","absolute","140","8","102","22",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_codecolumn("CD");_a.set_datacolumn("CD_NM");_a.set_innerdataset("@DS_SAYONG_COMBO");_a.set_index("-1");_a=new CheckBox("chk_00","absolute","321","9","119","20",null,null,this.div_SEARCH);_a.set_taborder("2");_a.style.set_align("left middle");_a.set_text("사용여부(코드)");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_TBITM_IT_CL_CODE00","absolute","17","99","204","15",null,null,this);_a.set_taborder("30");_a.set_text("IT 기본코드");_a.set_wordwrap("english");_a.set_cssclass("sta_WF_title");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_TBITM_IT_CL_CODE01","absolute","27.65%","99","204","15",null,null,this);_a.set_taborder("31");_a.set_text("IT 기본코드 상세");_a.set_wordwrap("english");_a.set_cssclass("sta_WF_title");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Grid("grd_TBITM_IT_CL_CODE01","absolute","27.65%","123",null,null,"20","15",this);_a.set_taborder("32");_a.set_binddataset("DS_TBITM_IT_CL_CODE");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"문자예비값1\"/><Cell col=\"3\" text=\"문자예비값2\"/><Cell col=\"4\" text=\"정수예비값\"/><Cell col=\"5\" text=\"실수예비값\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,41,this.div_SEARCH,function(_b){_b.set_taborder("29");_b.style.set_background("#f2f3f7ff");_b.style.set_border("1 solid #e0e0e0ff");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1056,856,this,function(_b){_b.set_classname("ITM010100");_b.getSetter("inheritanceid").set("");_b.set_titletext("IT 기본코드관리");});this.addLayout(_a.name,_a);_a=new BindItem("item17","Search.S_COMBO","value","DS_SEARCH","SEARCH_CONDITION");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM010100.xfdl","lib::comLib.xjs");this.registerScript("ITM010100.xfdl",function(){this.form_onload=function(_a,_b){};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Insert_onclick=function(_a,_b){var _c=this.TBITM_IT_CL_CODE.addRow();};this.btn_Save_onclick=function(_a,_b){this.fn_save("groupCodeU");};this.btn_Delete_onclick=function(_a,_b){var _c=this.TBITM_IT_CL_CODE.rowposition;var _d=this.TBITM_IT_CL_CODE.getRowType(_c);this.TBITM_IT_CL_CODE.deleteRow(_c);};this.fn_search=function(){trace("fn_search !!");};this.fn_save=function(_a){trace("fn_save !!");};this.fn_callBack=function(_a,_b,_c){if(_b<0){return ExtNx.core.comMsg("alert",_c);}else{if(_a=="groupCodeList"){}if(_a=="codeList"){alert("정상적으로 조회되었습니다");}if(_a=="save"){}}};this.btn_Cancel_onclick=function(_a,_b){trace("btn Cancel Click !!");};this.btn_Close_onclick=function(_a,_b){trace("btn Close Click !!");};});this.on_initEvent=function(){this.addEventHandler("onload",this.form_onload,this);this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Insert.addEventHandler("onclick",this.btn_Insert_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);};this.loadIncludeScript("ITM010100.xfdl");};})();