﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS010400");this.set_classname("SLS010400");this.set_titletext("주택지구별 계약서관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_tbpmsFormatManage",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"JOB_SE\" type=\"STRING\" size=\"255\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"FORMAT_SE\" type=\"STRING\" size=\"255\"/><Column id=\"FORMAT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"FORMAT_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_SN\" type=\"STRING\" size=\"255\"/><Column id=\"FORMAT_CN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/><Column id=\"COPY_FORMAT_ODR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_outputAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"DATA\">선택</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">출력</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">비출력</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dscssDocType",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bsnsAreaCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_jobSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_jobKey",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_formatSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_formatCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_ODR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_jobSe</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">업무구분</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_jobKey</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업지구</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_formatSe</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">서식구분</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_formatCode</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">서식유형</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">spn_formatOdr</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">차수</Col></Row><Row><Col id=\"compId\">ds_tbpmsFormatManage</Col><Col id=\"colId\">FORMAT_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">협의내용</Col></Row><Row><Col id=\"colId\">USE_AT</Col><Col id=\"compId\">ds_tbpmsFormatManage</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출력</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condCombo00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE_LVL_1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LVL_2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LVL_3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","59",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");_a.style.set_border("0 none crimson");this.addChild(_a.name,_a);_a=new Grid("grd_formatManageList","absolute","0","36",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_autofittype("col");_a.set_cssclass("grd02_WF_blue");_a.set_binddataset("ds_tbpmsFormatManage");_a.set_visible("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"859\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"협의내용\"/><Cell col=\"2\" text=\"출력\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:FORMAT_CN\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_AT\" combodataset=\"ds_outputAt\" combocodecol=\"CODE\" combodatacol=\"DATA\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","0","0","1031","10",null,null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_work.addChild(_a.name,_a);_a=new Static("dtl_guide00","absolute","0","31","1031","5",null,null,this.div_work);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.div_work.addChild(_a.name,_a);_a=new Button("btn_copy","absolute",null,"10","50","21","0",null,this.div_work);_a.set_taborder("3");_a.set_text("복사");this.div_work.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","207","21",null,null,this.div_work);_a.set_taborder("4");_a.set_text("협의내용");_a.set_cssclass("sta_WF_Title01");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("9");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_jobSe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("57");_a.set_text("업무구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_formatSe","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("58");_a.set_text("서식구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_formatCode","absolute","351","31","64","21",null,null,this.div_search);_a.set_taborder("63");_a.set_text("서식유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_jobKey","absolute","351","5","64","21",null,null,this.div_search);_a.set_taborder("64");_a.set_text("사업지구");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_formatOdr","absolute","688","31","64","21",null,null,this.div_search);_a.set_taborder("70");_a.set_text("차수");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_formatCode","absolute","415","31","257","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_text("선택");_a.set_innerdataset("@ds_dscssDocType");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Combo("cmb_jobKey","absolute","415","5","257","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_jobKey");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sts_char","absolute","683","3","210","25",null,null,this.div_search);_a.set_taborder("77");_a.set_text("( ※업무구분 선택 후 선택 가능 )");_a.style.set_color("blue");_a.style.set_font("bold 9 arial");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_formatOdr","absolute","751","31","110","21",null,null,this.div_search);_a.set_taborder("4");_a.set_value("0");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_jobSe","absolute","79","5","257","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_jobSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Combo("cmb_formatSe","absolute","79","31","257","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_formatSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Layout("default","",1027,620,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div00");_b.style.set_border("0 none crimson");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS010400");_b.set_titletext("주택지구별 계약서관리");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SLS010400.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("SLS010400.xfdl",function(){this.SLS010400_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS010400_onload=function(_a,_b){this.fn_load_combo();};this.fn_init_form=function(){this.div_search.btn_copy.set_visible(false);this.div_search.sta_formatOdr.set_visible(false);this.div_search.spn_formatOdr.set_visible(false);this.div_search.spn_formatOdr.set_min(1);};this.fn_init_dataset=function(){this.checkDs.push(this.ds_tbpmsFormatManage);this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_jobKey,"선택");this.fn_add_comboHeader(this,this.div_search.cmb_formatCode,"선택");this.fn_get_cmmCode(this.ds_jobSe,"선택",{grpCode:"PCOM01"});this.fn_get_cmmCode(this.ds_formatSe,"선택",{grpCode:"PCOM02"});};this.fn_loadComboDscssDocTypeList=function(_a,_b){var _c=[["ds_dscssDocType","ds_condCombo00","1","S","hsco/pms/cmp/CMP000000/dscssDocTypeList.do",0]];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.fn_callbackAfter=function(){};this.div_search_cmb_jobSe_onitemchanged=function(_a,_b){var _c=_a.value;if(_c!=""){if(_c=="CMP"){this.fn_get_bsnsArea(this.ds_jobKey,"선택");this.div_work.btn_copy.set_visible(true);this.div_search.sta_formatOdr.set_visible(true);this.div_search.spn_formatOdr.set_visible(true);}else if(_c=="LAD"){this.fn_fill_code(this.ds_jobKey,"/hsco/pms/cmp/CMP000000/ladCodeList.do","선택");this.div_work.btn_copy.set_visible(false);this.div_search.sta_formatOdr.set_visible(false);this.div_search.spn_formatOdr.set_visible(false);}else{if(_c=='HOU'){this.fn_fill_code(this.ds_jobKey,"/hsco/pms/cmp/CMP000000/houCodeList.do","선택");}else if(_c=='PRA'){this.fn_fill_code(this.ds_jobKey,"/hsco/pms/rnt/pra/RNT00000000/rentHouseCodeList.do","선택");}else if(_c=='PRM'){this.fn_fill_code(this.ds_jobKey,"/hsco/pms/rnt/prm/RNT02000000/puchasHouseCodeList.do","선택");}else if(_c=='LRM'){this.fn_fill_code(this.ds_jobKey,"/hsco/pms/rnt/prm/RNT02000000/puchasHouseCodeList.do","선택");}this.div_work.btn_copy.set_visible(false);this.div_search.sta_formatOdr.set_visible(false);this.div_search.spn_formatOdr.set_visible(false);}}};this.fn_save=function(_a){if(this.gfn_checkValidation(this.ds_tbpmsFormatManage,this.ds_validation)==false){return false;}if(this.confirm("S")){this.fn_transaction("dscssDocCUD");}};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return false;}var _a=this.div_search.cmb_jobSe.value;var _b=this.div_search.cmb_jobKey.value;var _c=this.div_search.cmb_formatSe.value;var _d=this.div_search.cmb_formatCode.value;var _e=this.div_search.spn_formatOdr.value;this.ds_cond00.setColumn(0,"JOB_SE",_a);this.ds_cond00.setColumn(0,"JOB_KEY",_b);this.ds_cond00.setColumn(0,"FORMAT_SE",_c);this.ds_cond00.setColumn(0,"FORMAT_CODE",_d);this.ds_cond00.setColumn(0,"FORMAT_ODR",_e);this.ds_tbpmsFormatManage.clearData();this.fn_transaction("selectDscssDocList");};this.div_SearchArea_btn_copy_onclick=function(_a,_b){if(this.gfn_checkValidation(this.ds_tbpmsFormatManage,this.ds_validation)==false){return false;}var _c=this.div_search.cmb_formatCode.text;var _d=this.div_search.spn_formatOdr.value;var _e=this.confirm(_c+"를 "+_d+"차  ->  "+copy_formatOdr+"차 로 복사합니다.\n진행하시겠습니까?");if(_e==true){this.fn_transaction("dscssDocCUD");}};this.div_search_cmb_formatSe_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_jobSe.value;var _d=this.div_search.cmb_formatSe.value;this.ds_condCombo00.setColumn(0,"CODE_LVL_1",'PCOM03');this.ds_condCombo00.setColumn(0,"CODE_LVL_2",_c);this.ds_condCombo00.setColumn(0,"CODE_LVL_3",_d);if(_c==''){this.alert("업무구분을 먼저 선택 해야합니다.");this.div_search.cmb_formatSe.set_index(0);}else{this.fn_loadComboDscssDocTypeList();}};this.fn_insert=function(_a,_b){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return false;}var _c=this.div_search.cmb_jobSe.value;var _d=this.div_search.cmb_jobKey.value;var _e=this.div_search.cmb_formatSe.value;var _f=this.div_search.cmb_formatCode.value;var _g=this.div_search.spn_formatOdr.value;var _h=this.ds_tbpmsFormatManage.addRow();this.ds_tbpmsFormatManage.setColumn(_h,"USE_AT","");this.ds_tbpmsFormatManage.setColumn(this.ds_tbpmsFormatManage.rowposition,"JOB_SE",_c);this.ds_tbpmsFormatManage.setColumn(this.ds_tbpmsFormatManage.rowposition,"FORMAT_SE",_e);this.ds_tbpmsFormatManage.setColumn(this.ds_tbpmsFormatManage.rowposition,"JOB_KEY",_d);this.ds_tbpmsFormatManage.setColumn(this.ds_tbpmsFormatManage.rowposition,"FORMAT_CODE",_f);this.ds_tbpmsFormatManage.setColumn(this.ds_tbpmsFormatManage.rowposition,"FORMAT_ODR",_g);};this.fn_delete=function(){this.ds_tbpmsFormatManage.deleteRow(this.ds_tbpmsFormatManage.rowposition);};this.fn_cancel=function(){if(this.confirm("C")){this.ds_tbpmsFormatManage.reset();this.ds_tbpmsFormatManage.applyChange();}};this.fn_close=function(){this.close();};this.fn_transaction=function(_a,_b){var _c=true;switch(_a){case "ladCodeList":var _d="hsco/pms/cmp/CMP000000/ladCodeList.do";var _e="";var _f="ds_jobKey=output1";break;case "houCodeList":var _d="hsco/pms/cmp/CMP000000/houCodeList.do";var _e="";var _f="ds_jobKey=output1";break;case "selectDscssDocList":var _d="hsco/pms/sls/hou/std/SLS010400/selectDscssDocList.do";var _e="input1=ds_cond00";var _f="ds_tbpmsFormatManage=output1";break;case "dscssDocCUD":var _d="hsco/pms/sls/hou/std/SLS010400/dscssDocCUD.do";var _e="input1=ds_tbpmsFormatManage:U";var _f="";break;}if(this.fn_validate_tranasaction(_a,_d,_e,_f)==false){return;}Ex.core.tran(this,_a,_d,_e,_f,"",null,null,_c);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.ds_tbpmsFormatManage.addEventHandler("canrowposchange",this.DS_TBPMS_FORMAT_MANAGE_canrowposchange,this);this.addEventHandler("oninit",this.SLS010400_oninit,this);this.addEventHandler("onload",this.SLS010400_onload,this);this.div_search.cmb_jobSe.addEventHandler("onitemchanged",this.div_search_cmb_jobSe_onitemchanged,this);this.div_search.cmb_formatSe.addEventHandler("onitemchanged",this.div_search_cmb_formatSe_onitemchanged,this);};this.loadIncludeScript("SLS010400.xfdl");};})();