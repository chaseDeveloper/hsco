﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CMP010400");this.set_classname("CMP010400");this.set_titletext("보상물분류코드등록");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_code",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"GRP_CODE_SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"OLD_GRP_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ORDR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"100\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"FLOAT\" size=\"22\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"20\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"OLD_CODE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_tbcmpLndcgrCode</Col><Col id=\"colId\">LNDCGR_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지목코드</Col></Row><Row><Col id=\"colId\">LNDCGR_NM</Col><Col id=\"compId\">ds_tbcmpLndcgrCode</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지목명</Col></Row><Row><Col id=\"colId\">LNDCGR_ABRV</Col><Col id=\"compId\">ds_tbcmpLndcgrCode</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지목약어</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"DATA\">감평대상</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">비감평대상</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">토지</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">지장물</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">분묘</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">영업권</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">지장물(실농)</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"DATA\">지장물(이사/주거)</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">L</Col><Col id=\"DATA\">토지</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">분묘</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"DATA\">기타</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","0","1031",null,null,"13",this);_a.set_taborder("1");_a.set_text("Div00");_a.style.set_border("0 none crimson");this.addChild(_a.name,_a);_a=new Grid("grd_lndcgrCodeList","absolute","0","36",null,null,"0","0",this.div_WORK);_a.set_taborder("0");_a.set_autofittype("col");_a.set_cssclass("grd02_WF_blue");_a.set_binddataset("ds_code");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"감평구분\"/><Cell col=\"3\" text=\"분류(협의내역)\"/><Cell col=\"4\" text=\"분류(수용확인)\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CHRCTR_PREPAR_VALUE_0\" editlimit=\"30\" editlengthunit=\"utf8\" combodataset=\"ds_useAt\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CHRCTR_PREPAR_VALUE_2\" editlimit=\"200\" editlengthunit=\"utf8\" combodataset=\"ds_useAt00\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:CODE_ETC_1\" combodataset=\"ds_useAt01\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","207","21",null,null,this.div_WORK);_a.set_taborder("2");_a.set_text("보상물분류코드 목록");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("dtl_guide00","absolute","0","31","1031","5",null,null,this.div_WORK);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("8");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,0,this.div_WORK,function(_b){_b.set_taborder("1");_b.set_text("Div00");_b.style.set_border("0 none crimson");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CMP010400");_b.set_titletext("보상물분류코드등록");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CMP010400.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP010400.xfdl",function(){this.CMP010400_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.CMP010400_onload=function(_a,_b){this.fn_search();};this.fn_init_dataset=function(){this.checkDs.push(this.ds_tbcmpLndcgrCode);this.gfn_initCondDs(this,this.div_search);};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_tbcmpLndcgrCode,this.ds_validation)==false){return false;}if(this.confirm("S")){this.fn_transaction("CodeCUD");}};this.fn_search=function(){this.ds_code.clearData();this.ds_cond.clearData();this.ds_cond.addRow();this.fn_transaction("selectCodeList");};this.fn_insert=function(_a,_b){var _c=this.ds_code.addRow();this.ds_code.setColumn(_c,"GRP_CODE_SN",this.ds_code.getColumn(this.ds_code.rowposition-1,"GRP_CODE_SN"));this.ds_code.setColumn(_c,"USE_AT","1");};this.fn_delete=function(){if(this.confirm("D")){if(this.ds_cnt.getColumn(this.ds_cnt.rowposition,"CNT")==0){this.ds_code.deleteRow(this.ds_code.rowposition);}else{this.alert("사용중인 코드입니다.");return;}}};this.fn_cancel=function(){if(this.confirm("C")){this.ds_code.reset();this.ds_code.applyChange();}};this.fn_close=function(){this.close();};this.fn_transaction=function(_a,_b){var _c=true;switch(_a){case "selectCodeList":var _d="hsco/pms/cmp/CMP010400/selectCodeList.do";var _e="input1=ds_cond";var _f="ds_code=output1";break;case "selectCodeCnt":var _d="hsco/pms/cmp/CMP010400/selectCodeCnt.do";var _e="input1=ds_cond";var _f="ds_cnt=output1";break;case "CodeCUD":var _d="hsco/pms/cmp/CMP010400/CodeCUD.do";var _e="input1=ds_code:U";var _f="";break;}if(this.fn_validate_tranasaction(_a,_d,_e,_f)==false){return;}Ex.core.tran(this,_a,_d,_e,_f,"",null,null,_c);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;};this.ds_code_onrowposchanged=function(_a,_b){this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"CODE",this.ds_code.getColumn(this.ds_code.rowposition,"CODE"));this.fn_transaction("selectCodeCnt");};});this.on_initEvent=function(){this.ds_code.addEventHandler("onrowposchanged",this.ds_code_onrowposchanged,this);this.addEventHandler("oninit",this.CMP010400_oninit,this);this.addEventHandler("onload",this.CMP010400_onload,this);};this.loadIncludeScript("CMP010400.xfdl");};})();