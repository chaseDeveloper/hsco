﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02010300_P01");this.set_classname("FRM02010300_P01");this.set_titletext("전년도코드복사");this._setFormPosition(0,0,600,400);}_a=new Dataset("ds_frmEndwAcntctgr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DBRT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_STACNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"JRNLZ_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_copyYear",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"acntYear\" type=\"STRING\" size=\"256\"/><Column id=\"tarYear\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"acntYear\">2016</Col><Col id=\"tarYear\">2016</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_stacntSeGrd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">대차</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">손익</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_jrnlzAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">분개</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">비분개</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_printYn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">출력</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">비출력</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dbrtSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("0");_a.set_text("전년도코드복사");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","563","9","20","20",null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","81",null,null,"15","0",this);_a.set_taborder("6");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_frmEndwAcntctgr","absolute","0","0",null,null,"0","0",this.div_WORK);_a.set_taborder("0");_a.set_binddataset("ds_frmEndwAcntctgr");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"15\" band=\"head\"/><Row size=\"15\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계정과목코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"계정과목명\"/><Cell col=\"2\" rowspan=\"2\" text=\"출력계정과목명\"/><Cell col=\"3\" rowspan=\"2\"><Cell text=\"차대\"/><Cell row=\"1\" text=\"구분\"/></Cell><Cell col=\"4\" rowspan=\"2\"><Cell text=\"결산\"/><Cell row=\"1\" text=\"구분\"/></Cell><Cell col=\"5\" rowspan=\"2\"><Cell text=\"출력\"/><Cell row=\"1\" text=\"여부\"/></Cell><Cell col=\"6\" rowspan=\"2\"><Cell text=\"출력\"/><Cell row=\"1\" text=\"레벨\"/></Cell><Cell col=\"7\" rowspan=\"2\"><Cell text=\"분개\"/><Cell row=\"1\" text=\"여부\"/></Cell></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:ACNT_CODE\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ACNTCTGR_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:OUTPT_ACNTCTGR_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DBRT_SE\" combodataset=\"ds_dbrtSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ENDW_STACNT_SE\" combodataset=\"ds_stacntSeGrd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:OUTPT_AT\" combodataset=\"ds_printYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:OUTPT_LEVEL\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:JRNLZ_AT\" combodataset=\"ds_jrnlzAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","2","388",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_print","absolute","536","51","49","25",null,null,this);_a.set_taborder("9");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","53","113","21",null,null,this);_a.set_taborder("10");_a.set_text("복사대상 회계년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.addChild(_a.name,_a);_a=new Spin("spn_acntYear","absolute","130","53","70","21",null,null,this);_a.set_taborder("11");_a.set_value("2016");_a.set_max("2100");_a.set_min("1900");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","215","53","113","21",null,null,this);_a.set_taborder("12");_a.set_text("복사받는 회계년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.addChild(_a.name,_a);_a=new Spin("spn_acntYear00","absolute","330","53","70","21",null,null,this);_a.set_taborder("13");_a.set_value("2016");_a.set_max("2100");_a.set_min("1900");this.addChild(_a.name,_a);_a=new Button("btn_copy","absolute","486","51","49","25",null,null,this);_a.set_taborder("14");_a.set_text("복사");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute","436","51","49","25",null,null,this);_a.set_taborder("15");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("6");_b.set_text("Div00");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",600,400,this,function(_b){_b.set_classname("FRM02010300_P01");_b.set_titletext("전년도코드복사");});this.addLayout(_a.name,_a);_a=new BindItem("item0","spn_acntYear","value","ds_copyYear","acntYear");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","spn_acntYear00","value","ds_copyYear","tarYear");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FRM02010300_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02010300_P01.xfdl",function(){this.fv_objForm;this.FRM02010300_P01_oninit=function(_a,_b){this.fn_init();};this.FRM02010300_P01_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;var _c=this.parent.arg_1.getColumn(0,"acntYear");this.ds_copyYear.setColumn(0,"acntYear",_c);this.ds_copyYear.setColumn(0,"tarYear",Number(_c)+1);};this.fn_load_combo=function(){this.fn_get_frmCmmCode(this.ds_dbrtSe,"",{grpCode:"FRM002"});this.fn_get_frmCmmCode(this.ds_stacntSeGrd,"",{grpCode:"FRM003"});};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectFrmEndwAcntctgr":var _c="/hsco/pms/frm/FRM02010300/selectFrmEndwAcntctgr.do";var _d="input1=ds_copyYear";var _e="ds_frmEndwAcntctgr=output1";break;case "copyFrmEndwAcntctgr":var _c="/hsco/pms/frm/FRM02010300/copyFrmEndwAcntctgr.do";var _d="input1=ds_copyYear";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){case "copyFrmEndwAcntctgr":break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.btn_print_onclick=function(_a,_b){this.close();};this.btn_search_onclick=function(_a,_b){this.ds_frmEndwAcntctgr.clearData();this.fn_transaction("selectFrmEndwAcntctgr");};this.btn_copy_onclick=function(_a,_b){if(this.gfn_message("comm.행위여부","복사받는 연도의 계정코드가 삭제됩니다. \n진행")){this.fn_transaction("copyFrmEndwAcntctgr");}else{return;}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM02010300_P01_oninit,this);this.addEventHandler("onload",this.FRM02010300_P01_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);};this.loadIncludeScript("FRM02010300_P01.xfdl");};})();