﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CMP040700_P01");this.set_classname("CMP040700_P01");this.set_titletext("입력회차 일괄변경");this._setFormPosition(0,0,1054,400);}_a=new Dataset("ds_bsnsAreaCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_locplcCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_thingCl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ownerThingWtnncList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"THING_SN\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_LOCPLC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THING_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THING_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_STNDRD\" type=\"STRING\" size=\"256\"/><Column id=\"AR_INCRPR\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"dummy\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_bsnsAreaCode</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">사업지구</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_ALTRTV_ACQS",this);_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"255\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ACQS_SN\" type=\"STRING\" size=\"255\"/><Column id=\"ALTRTV_ACQS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALTRTV_ACQS_SE\" type=\"STRING\" size=\"255\"/><Column id=\"LOCPLC\" type=\"STRING\" size=\"255\"/><Column id=\"STRCT_STNDRD\" type=\"STRING\" size=\"255\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_UNIT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_ACEPTNC_THING",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"9\"/><Column id=\"OWNER_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DOC_ISSU_NO\" type=\"STRING\" size=\"10\"/><Column id=\"ACQS_SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"20\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_ALTRTV_ACQS_I",this);_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"255\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ACQS_SN\" type=\"STRING\" size=\"255\"/><Column id=\"ALTRTV_ACQS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALTRTV_ACQS_SE\" type=\"STRING\" size=\"255\"/><Column id=\"LOCPLC\" type=\"STRING\" size=\"255\"/><Column id=\"STRCT_STNDRD\" type=\"STRING\" size=\"255\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ISSU_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"2","15",null,"0","0",this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","2",null,this);_a.set_taborder("2");_a.set_text("대체취득 물건 내역 선택");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","1018","8","20","20",null,null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","197","21",null,null,this);_a.set_taborder("5");_a.set_text("대체취득 물건 내역 선택");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute","883","51","50","25",null,null,this);_a.set_taborder("7");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute","936","51","50","25",null,null,this);_a.set_taborder("8");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_cancel");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","989","51","50","25",null,null,this);_a.set_taborder("9");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_close");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","216",null,null,"15","0",this);_a.set_taborder("11");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute","830","51","50","25",null,null,this);_a.set_taborder("12");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Grid("grd_DS_TBCMP_ALTRTV_ACQS","absolute","15","81","1024","305",null,null,this);_a.set_cssclass("grd02_WF_blue");_a.set_taborder("13");_a.set_binddataset("DS_TBCMP_ALTRTV_ACQS");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"63\"/><Column size=\"220\"/><Column size=\"103\"/><Column size=\"102\"/><Column size=\"56\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"취득구분\"/><Cell col=\"2\" text=\"소재지\"/><Cell col=\"3\" text=\"지목\"/><Cell col=\"4\" text=\"수량면적\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:ALTRTV_ACQS_SE\" combodataset=\"DS_ALTRTV_ACQS_SE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:LOCPLC\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:STRCT_STNDRD\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AR\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:UNIT\" combodataset=\"DS_UNIT\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0.19%","385",null,"15","0%",null,this);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("11");_b.set_text("Div00");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1054,400,this,function(_b){_b.set_classname("CMP040700_P01");_b.set_titletext("입력회차 일괄변경");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CMP040801_P01.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP040801_P01.xfdl",function(){this.CMP040700_P01_oninit=function(_a,_b){this.fn_init();};this.CMP040700_P01_onload=function(_a,_b){this.ds_cond00.copyData(this.parent.arg_1);this.fn_transaction("altrtvAcqsList");this.fn_transaction("aceptncThingList");this.fn_init_form();this.fn_init_dataset();this.fn_load_combo();};this.fn_init_form=function(){};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_cmmCode(this.DS_UNIT,"",{grpCode:"CMP002"});};this.btn_Search_onclick=function(_a,_b){this.fn_transaction("altrtvAcqsList");};this.btn_Save_onclick=function(_a,_b){var _c=this.DS_TBCMP_ALTRTV_ACQS;var _d=this.DS_TBCMP_ALTRTV_ACQS_I;_d.clearData();for(var _f=0;_f<_c.rowcount;_f++ ){if(_c.getColumn(_f,"CHK")==1){var _e=_d.addRow();_d.copyRow(_e,_c,_f);_d.setColumn(_e,"DOC_ISSU_NO",this.ds_cond00.getColumn(0,"DOC_ISSU_NO"));}}this.fn_transaction("aceptncThingCUD");};this.btn_Cancel_onclick=function(_a,_b){if(this.confirm("c")==true){this.DS_TBCMP_ALTRTV_ACQS.cancel();}};this.btn_Close_onclick=function(_a,_b){this.close();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "aceptncThingList":var _c="hsco/pms/cmp/tdd/CMP040801/aceptncThingList.do";var _d="input1=ds_cond00";var _e="DS_TBCMP_ACEPTNC_THING=output1";_b=false;break;case "altrtvAcqsList":var _c="hsco/pms/cmp/tdd/CMP040801/altrtvAcqsList.do";var _d="input1=ds_cond00";var _e="DS_TBCMP_ALTRTV_ACQS=output1";_b=false;break;case "aceptncThingCUD":var _c="hsco/pms/cmp/tdd/CMP040801/aceptncThingCUD.do";var _d="input1=DS_TBCMP_ALTRTV_ACQS_I:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;switch(_a){case "aceptncThingList":ds=this.DS_TBCMP_ACEPTNC_THING;ds1=this.DS_TBCMP_ALTRTV_ACQS;for(var _e=0;_e<ds.rowcount;_e++ ){if(ds1.findRow("ACQS_SN",ds.getColumn(_e,"ACQS_SN"))!= -1){trace("i ="+_e);ds1.setColumn(ds1.findRow("ACQS_SN",ds.getColumn(_e,"ACQS_SN")),"CHK",1);}}break;}this.fn_callback_message(_a,_b,_c);};});this.on_initEvent=function(){this.DS_TBCMP_ALTRTV_ACQS.addEventHandler("cancolumnchange",this.DS_TBCMP_ALTRTV_ACQS_cancolumnchange,this);this.DS_TBCMP_ALTRTV_ACQS.addEventHandler("onvaluechanged",this.DS_TBCMP_ALTRTV_ACQS_onvaluechanged,this);this.DS_TBCMP_ALTRTV_ACQS_I.addEventHandler("cancolumnchange",this.DS_TBCMP_ALTRTV_ACQS_cancolumnchange,this);this.DS_TBCMP_ALTRTV_ACQS_I.addEventHandler("onvaluechanged",this.DS_TBCMP_ALTRTV_ACQS_onvaluechanged,this);this.addEventHandler("oninit",this.CMP040700_P01_oninit,this);this.addEventHandler("onload",this.CMP040700_P01_onload,this);this.btn_close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.grd_DS_TBCMP_ALTRTV_ACQS.addEventHandler("onheadclick",this.div_DETAIL_grd_DS_TBCMP_ALTRTV_ACQS_onheadclick,this);};this.loadIncludeScript("CMP040801_P01.xfdl");};})();