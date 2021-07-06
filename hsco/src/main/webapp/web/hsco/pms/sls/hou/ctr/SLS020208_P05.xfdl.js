﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020101_P03");this.set_classname("SLS020101_P03");this.set_titletext("잔금납부일자 일괄등록");this._setFormPosition(0,0,500,189);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCode</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택코드</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_applcDe</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">적용일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2","496","34",null,null,this);_a.set_taborder("0");_a.set_text("잔금납부일자 일괄등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36","496","15",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15","194",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","483","2","15","194",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"51","50","25","17",null,this);_a.set_taborder("4");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","466","5",null,null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","81",null,"59","17",null,this);_a.set_taborder("6");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("적용일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","79","5",null,"21","105",null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("15");_a.set_innerdataset("@ds_houseCode");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Calendar("cal_applcDe","absolute","79","31","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("17");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static03","absolute","2","173","496","15",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","2","140","496","10",null,null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_xClose","absolute","472","9","20","20",null,null,this);_a.set_taborder("12");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Button("btn_confrim","absolute","349","51","78","25",null,null,this);_a.set_taborder("13");_a.set_text("변경처리");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("6");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",500,189,this,function(_b){_b.set_classname("SLS020101_P03");_b.set_titletext("잔금납부일자 일괄등록");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_area01.cal_applcDe","value","ds_cond","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_area01.cmb_houseCode","value","ds_cond","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_houseCode","value","ds_cond00","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_applcDe","value","ds_cond00","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS020208_P05.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020208_P05.xfdl",function(){this.callback=null;this.SLS020101_P03_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS020101_P03_onload=function(_a,_b){this.callback=this.parent.callback;this.ds_cond00.setColumn(0,"PAY_TMLMT",this.gfn_today());this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a={};_a["USE_AT"]="1";_a["HOUSE_SE"]="S1,S2,S3,S4,S5,S9";this.pmsUtil.getHouseCode(_a,"ds_houseCode");};this.fn_transaction=function(_a){switch(_a){case "saveRemndrPayDe":var _b="hsco/pms/sls/hou/ctr/SLS020101/saveRemndrPayDe.do";var _c="input1=ds_cond00";var _d="";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;var _f=null;switch(_a){case "houseCode":_f=this.div_search.cmb_houseCode;_e={};_e["type"]=this.pmsUtil.PROMPT_SELECT;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(_f,_e);break;case "saveRemndrPayDe":this.alert("잔금납부일이 변경 되었습니다.");break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.btn_confrim_onclick=function(_a,_b){if(!this.gfn_checkValidation(this.div_search,this.ds_validation00)){return;}if(this.confirm("해당주택의 잔금납부일을 변경하시겠습니까?")){this.fn_transaction("saveRemndrPayDe");}};this.btn_close_onclick=function(_a,_b){if(this.fn_confirm()==true){this.close();}};this.fn_confirm=function(){var _a=this.opener;if(_a[this.callback]==null){_a=this.opener.div_workFrame.div_main;}var _b=_a[this.callback]();return _b;};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020101_P03_oninit,this);this.addEventHandler("onload",this.SLS020101_P03_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_xClose.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_confrim.addEventHandler("onclick",this.btn_confrim_onclick,this);};this.loadIncludeScript("SLS020208_P05.xfdl");};})();