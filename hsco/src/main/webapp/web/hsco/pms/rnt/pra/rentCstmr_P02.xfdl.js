﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("rentCstmr");this.set_classname("rentCstmr");this.set_titletext("임대고객 수정 팝업");this._setFormPosition(0,0,640,227);}_a=new Dataset("ds_rentCstmrList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"NM\" type=\"STRING\" size=\"255\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"prmanentCstmrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_houseCstmrList</Col><Col id=\"colId\">NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">성명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_DETAIL","absolute","15","81",null,"133","15",null,this);_a.set_taborder("1");_a.style.set_background("white");_a.style.set_border("0 none #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","-1","100","27",null,null,this.div_DETAIL);_a.set_taborder("47");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","0","25","100","27",null,null,this.div_DETAIL);_a.set_taborder("48");_a.set_text("전화번호");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","0","51","100","54",null,null,this.div_DETAIL);_a.set_taborder("49");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static37","absolute","99","-1","509","27",null,null,this.div_DETAIL);_a.set_taborder("51");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_NM","absolute","102","2","200","21",null,null,this.div_DETAIL);_a.set_taborder("0");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_DETAIL.addChild(_a.name,_a);_a=new MaskEdit("msk_IHIDNUM","absolute","406","2","199","21",null,null,this.div_DETAIL);_a.set_taborder("1");_a.set_type("string");_a.set_mask("######-#######");_a.set_cssclass("msk_WF_Readonly");_a.set_readonly("true");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static01","absolute","99","25","509","27",null,null,this.div_DETAIL);_a.set_taborder("54");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_TLPHON00","absolute","304","25","100","27",null,null,this.div_DETAIL);_a.set_taborder("56");_a.set_text("휴대폰번호");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static03","absolute","99","51","509","54",null,null,this.div_DETAIL);_a.set_taborder("58");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_ADRES","absolute","193","54","412","21",null,null,this.div_DETAIL);_a.set_taborder("5");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_ADRES_DETAIL","absolute","193","81","412","21",null,null,this.div_DETAIL);_a.set_taborder("6");this.div_DETAIL.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","-77","92",null,"21","489",null,this.div_DETAIL);_a.set_taborder("61");_a.set_text("상동");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","0","104","100","27",null,null,this.div_DETAIL);_a.set_taborder("62");_a.set_text("이메일");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static04","absolute","99","104","509","27",null,null,this.div_DETAIL);_a.set_taborder("63");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_EMAIL","absolute","102","107","503","21",null,null,this.div_DETAIL);_a.set_taborder("7");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM","absolute","304","-1","100","27",null,null,this.div_DETAIL);_a.set_taborder("65");_a.set_text("주민등록번호");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edi_zip","absolute","102","54","89","21",null,null,this.div_DETAIL);_a.set_taborder("4");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_DETAIL.addChild(_a.name,_a);_a=new Button("btn_ZIP","absolute","172","54","21","21",null,null,this.div_DETAIL);_a.set_taborder("67");_a.set_cssclass("btn_WF_Search");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_TELNO","absolute","102","28","200","21",null,null,this.div_DETAIL);_a.set_taborder("2");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_MBTLNO","absolute","406","28","199","21",null,null,this.div_DETAIL);_a.set_taborder("3");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("3");_a.set_text("임대고객 수정");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","601","9","20","20",null,null,this);_a.set_taborder("5");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","205","21",null,null,this);_a.set_taborder("8");_a.set_text("임대고객 수정");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_confirm","absolute","419","51","49","25",null,null,this);_a.set_taborder("10");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute","471","51","49","25",null,null,this);_a.set_taborder("12");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute","523","51","49","25",null,null,this);_a.set_taborder("13");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_cancel");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","575","51","50","25",null,null,this);_a.set_taborder("15");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","10","212",null,"15","-8",null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,133,this.div_DETAIL,function(_b){_b.set_taborder("1");_b.style.set_background("white");_b.style.set_border("0 none #808080ff");});this.div_DETAIL.addLayout(_a.name,_a);_a=new Layout("default","",640,227,this,function(_b){_b.set_classname("rentCstmr");_b.set_titletext("임대고객 수정 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_DETAIL.edt_NM","value","ds_rentCstmrList","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_DETAIL.msk_IHIDNUM","value","ds_rentCstmrList","IHIDNUM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_DETAIL.edt_TELNO","value","ds_rentCstmrList","TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_DETAIL.edt_MBTLNO","value","ds_rentCstmrList","MBTLNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_DETAIL.edi_zip","value","ds_rentCstmrList","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_DETAIL.edt_ADRES","value","ds_rentCstmrList","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL.edt_ADRES_DETAIL","value","ds_rentCstmrList","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_DETAIL.edt_EMAIL","value","ds_rentCstmrList","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("rentCstmr_P02.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("rentCstmr_P02.xfdl",function(){this.edtNm="";this.callback=null;this.rentCstmr_oninit=function(_a,_b){this.fn_init(false);this.fn_init_form();this.fn_init_dataset();};this.rentCstmr_onload=function(_a,_b){if(this.parent.prmanentCstmrNo!=null){this.ds_cond00.setColumn(0,"prmanentCstmrNo",this.parent.prmanentCstmrNo);this.fn_transaction("rentCstmrList");}};this.fn_init_form=function(){this.callback=this.parent.callback;};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.btn_save_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_rentCstmrList)==true){if(this.confirm("저장 하시겠습니까?")){this.fn_transaction("rentCstmrCUD");}}};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_cancel_onclick=function(_a,_b){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_rentCstmrList.cancel();}};this.btn_confirm_onclick=function(_a,_b){if(this.fn_confirm()==true){this.close();}};this.div_DETAIL_btn_ZIP_onclick=function(_a,_b){this.gfn_popup('zipPopup',500,500,'',null,"common::frmZipAddressPopup.xfdl",this.fn_callbackZip);};this.fn_confirm=function(){var _a=this.fn_dsToObj(this.ds_rentCstmrList,this.ds_rentCstmrList.rowposition);var _b=this.opener;if(_b[this.callback]==null){_b=this.opener.div_workFrame.div_main;}bResult=_b[this.callback](_a);return bResult;};this.fn_callbackZip=function(_a,_b){if(Eco.isEmpty(_b)){return;}trace('OK\n'+_b);var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(nRowCnt<1){return;}var _d="ZIP=ZIPNO,"+"ADRES=ROADADDRPART1,"+"ADRES_DETAIL=ROADADDRPART2,";;var _e=this.ds_rentCstmrList;_e.copyRow(_e.rowposition,_c,0,_d);};this.fn_transaction=function(_a){switch(_a){case "rentCstmrList":var _b="/hsco/pms/rnt/pra/rentCstmr/rentCstmrList.do";var _c="input1=ds_cond00";var _d="ds_rentCstmrList=output1";break;case "rentCstmrCUD":var _b="/hsco/pms/rnt/pra/rentCstmr/rentCstmrCUD.do";var _c="input1=ds_rentCstmrList:U";var _d="";break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d==true){switch(_a){case "rentCstmrCUD":this.fn_transaction("rentCstmrList");break;case "rentCstmrList":if(this.ds_rentCstmrList.rowcount>0){this.ds_rentCstmrList.set_rowposition(0);}}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.rentCstmr_oninit,this);this.addEventHandler("onload",this.rentCstmr_onload,this);this.div_DETAIL.btn_ZIP.addEventHandler("onclick",this.div_DETAIL_btn_ZIP_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("rentCstmr_P02.xfdl");};})();