﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020500_P01");this.set_classname("SLS020500_P01");this.set_titletext("입주대기자일괄등록");this._setFormPosition(0,0,778,500);}_a=new Dataset("ds_houseCodeListCmb",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SNDDNG_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_AEA\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"END_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCodeSh</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택코드</Col><Col id=\"type\"/></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\">10</Col><Col id=\"msgId\">접수일</Col><Col id=\"colId\">cal_waitRceptDe</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseAea</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">타입</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_excelTmp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_houseMvnWaitrList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WAIT_RCEPT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"WAIT_RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MST_CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MST_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WAIT_RCEPT_SN\">1</Col><Col id=\"QUALF_SE\">선착순</Col><Col id=\"MST_CSTMR_NM\">홍길동</Col><Col id=\"MST_IHIDNUM\">800000-1000000</Col><Col id=\"CSTMR_NM\">홍길동</Col><Col id=\"IHIDNUM\">800000-1000000</Col><Col id=\"ZIP\">12345</Col><Col id=\"ADRES\">화성광역시 북구 침산로 73</Col><Col id=\"TELNO\"/><Col id=\"MBTLNO\">01011112222</Col><Col id=\"FAMILY_RELATE\">본인</Col></Row><Row><Col id=\"WAIT_RCEPT_SN\">1</Col><Col id=\"QUALF_SE\">선착순</Col><Col id=\"MST_CSTMR_NM\">홍길동</Col><Col id=\"MST_IHIDNUM\">800000-1000000</Col><Col id=\"CSTMR_NM\">홍부인</Col><Col id=\"IHIDNUM\">800000-2000000</Col><Col id=\"ZIP\">12345</Col><Col id=\"ADRES\">화성광역시 북구 침산로 73</Col><Col id=\"TELNO\"/><Col id=\"MBTLNO\">01011113333</Col><Col id=\"FAMILY_RELATE\">처</Col></Row><Row><Col id=\"WAIT_RCEPT_SN\">1</Col><Col id=\"QUALF_SE\">선착순</Col><Col id=\"MST_CSTMR_NM\">홍길동</Col><Col id=\"MST_IHIDNUM\">800000-1000000</Col><Col id=\"CSTMR_NM\">홍아들</Col><Col id=\"IHIDNUM\">100000-3000000</Col><Col id=\"ZIP\">12345</Col><Col id=\"ADRES\">화성광역시 북구 침산로 73</Col><Col id=\"TELNO\"/><Col id=\"MBTLNO\">01011114444</Col><Col id=\"FAMILY_RELATE\">자</Col></Row><Row><Col id=\"WAIT_RCEPT_SN\">2</Col><Col id=\"QUALF_SE\">선착순</Col><Col id=\"MST_CSTMR_NM\">임꺽정</Col><Col id=\"MST_IHIDNUM\">700000-1000000</Col><Col id=\"CSTMR_NM\">임꺽정</Col><Col id=\"IHIDNUM\">700000-1000000</Col><Col id=\"ZIP\">12345</Col><Col id=\"ADRES\">화성광역시 북구 침산로 74</Col><Col id=\"TELNO\"/><Col id=\"MBTLNO\">01011115555</Col><Col id=\"FAMILY_RELATE\">본인</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_aeaListCmb",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"AEA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0",null,"34","0",null,this);_a.set_taborder("5");_a.set_text("입주대기자 일괄등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36","761","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15","496",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","765","2","15","496",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","667","5",null,null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","114","668","10",null,null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2","483","683","15",null,null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute",null,"51","50","25","123",null,this);_a.set_taborder("2");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute",null,"51","50","25","70",null,this);_a.set_taborder("3");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_exit","absolute",null,"51","50","25","17",null,this);_a.set_taborder("4");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","81",null,"33","17",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","7","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","413","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("접수일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCodeSh","absolute","71","5","190","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_houseCodeListCmb");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_codecolumn("HOUSE_CODE");_a.set_displaynulltext("선택");_a.set_cssclass("cmb_WF_Essential");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a.set_type("filter");_a.set_index("-1");_a=new Calendar("cal_waitRceptDe","absolute","478","5","101","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a.set_cssclass("cal_WF_Essential");_a=new Button("btn_fileLoad","absolute","588","5","70","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("파일읽기");this.div_search.addChild(_a.name,_a);_a=new Static("sta_houseCodeSh01","absolute","270","5","38","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("타입");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseAea","absolute","307","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_aeaListCmb");_a.set_codecolumn("AEA");_a.set_datacolumn("AEA_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_displaynulltext("선택");_a=new Button("btn_excelDown","absolute","663","5","70","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("양식다운");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","641","460","3","24",null,null,this);_a.set_taborder("20");_a.set_text("3");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_houseMvnWaitrList","absolute","15","124",null,null,"15","15",this);_a.set_taborder("1");_a.set_binddataset("ds_houseMvnWaitrList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"79\"/><Column size=\"93\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"66\"/><Column size=\"92\"/><Column size=\"71\"/><Column size=\"136\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"접수순번\" wordwrap=\"both\"/><Cell col=\"1\" text=\"세대주\" wordwrap=\"both\"/><Cell col=\"2\" text=\"세대주주민번호\" wordwrap=\"both\"/><Cell col=\"3\" text=\"이름\" wordwrap=\"both\"/><Cell col=\"4\" text=\"주민번호\" wordwrap=\"both\"/><Cell col=\"5\" text=\"관계\" wordwrap=\"both\"/><Cell col=\"6\" text=\"자격구분\" wordwrap=\"both\"/><Cell col=\"7\" text=\"우편번호\" wordwrap=\"both\"/><Cell col=\"8\" text=\"주소\" wordwrap=\"both\"/><Cell col=\"9\" text=\"상세주소\" wordwrap=\"both\"/><Cell col=\"10\" text=\"전화번호\" wordwrap=\"both\"/><Cell col=\"11\" text=\"휴대전화\"/></Band><Band id=\"body\"><Cell text=\"bind:WAIT_RCEPT_SN\"/><Cell col=\"1\" text=\"bind:MST_CSTMR_NM\"/><Cell col=\"2\" text=\"bind:MST_IHIDNUM\"/><Cell col=\"3\" text=\"bind:CSTMR_NM\"/><Cell col=\"4\" text=\"bind:IHIDNUM\"/><Cell col=\"5\" text=\"bind:FAMILY_RELATE\"/><Cell col=\"6\" text=\"bind:QUALF_SE\"/><Cell col=\"7\" text=\"bind:ZIP\"/><Cell col=\"8\" text=\"bind:ADRES\"/><Cell col=\"9\" text=\"bind:ADRES_DETAIL\"/><Cell col=\"10\" text=\"bind:TELNO\"/><Cell col=\"11\" text=\"bind:MBTLNO\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",778,500,this,function(_b){_b.set_classname("SLS020500_P01");_b.set_titletext("입주대기자일괄등록");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SLS020500_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020500_P01.xfdl",function(){this.HOUSE_SE="S2,S4,R1,R2,R3,R9";this.SLS020500_P01_oninit=function(_a,_b){this.fn_init_allGrid(this);this.fn_init_form();this.fn_init_dataset();};this.SLS020500_P01_onload=function(_a,_b){this.fn_loadComboNonCodeTbl();this.div_search.cal_waitRceptDe.set_value(this.gfn_dateInfo("NOW_DATE"));};this.fn_loadComboNonCodeTbl=function(_a,_b){var _c={};_c["HOUSE_SE"]=this.HOUSE_SE;_c["USE_AT"]="1";this.pmsUtil.getHouseCode(_c,"ds_houseCodeListCmb");};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_comboOnItemChangeHandler=function(_a,_b){var _c=_a.name;var _d=_b?_b.postvalue:_a.value;var _e=_b?_b.postindex:_a.index;var _f={};switch(_c){case "cmb_houseCodeSh":_f["HOUSE_CODE"]=_d;this.pmsUtil.getHouseAea(_f,"ds_aeaListCmb");break;default:break;}this.ds_houseMvnWaitrList.clearData();};this.fn_transaction=function(_a){switch(_a){case "saveHouseMvnWaitrPopUp":var _b="hsco/pms/sls/hou/ctr/SLS020500/saveHouseMvnWaitrPopUp.do";var _c="input1=ds_houseMvnWaitrList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "saveHouseMvnWaitrPopUp":break;}}else{var _d=null;switch(_a){case "houseCodeListCmb":_d={type:this.pmsUtil.PROMPT_SELECT,noNullText:"코드없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseCodeSh,_d,true);break;case "saveHouseMvnWaitrPopUp":this.fn_sucess();break;}}};this.div_search_btn_fileLoad_onclick=function(_a,_b){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_importExcel(this.ds_excelTmp,this.grd_houseMvnWaitrList,1);};this.fn_finish_importExcel=function(){var _a=this.ds_houseMvnWaitrList.rowcount;var _b=this.div_search.cmb_houseCodeSh.value;var _c=this.div_search.cmb_houseAea.value;var _d=this.div_search.cal_waitRceptDe.value;if(_a>0){for(var _e=0;_e<_a;_e++ ){this.ds_houseMvnWaitrList.setColumn(_e,"HOUSE_CODE",_b);this.ds_houseMvnWaitrList.setColumn(_e,"WAIT_RCEPT_DE",_d);this.ds_houseMvnWaitrList.setColumn(_e,"AEA",_c);}}};this.div_search_btn_excelDown_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_houseMvnWaitrList,"exceldown");};this.btn_cancel_onclick=function(_a,_b){this.ds_houseMvnWaitrList.clearData();};this.btn_exit_onclick=function(_a,_b){this.close();};this.btn_save_onclick=function(_a,_b){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}if(this.confirm("저장하시겠습니까?")){this.fn_transaction("saveHouseMvnWaitrPopUp");}};this.fn_sucess=function(){this.gfn_message("success.정상등록");this.ds_houseMvnWaitrList.clearData();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020500_P01_oninit,this);this.addEventHandler("onload",this.SLS020500_P01_onload,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);this.div_search.cmb_houseCodeSh.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.btn_fileLoad.addEventHandler("onclick",this.div_search_btn_fileLoad_onclick,this);this.div_search.cmb_houseAea.addEventHandler("onitemchanged",this.fn_finish_importExcel,this);this.div_search.btn_excelDown.addEventHandler("onclick",this.div_search_btn_excelDown_onclick,this);};this.loadIncludeScript("SLS020500_P01.xfdl");};})();