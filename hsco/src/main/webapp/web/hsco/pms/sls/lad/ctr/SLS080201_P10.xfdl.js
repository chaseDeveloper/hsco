﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("rentCstmrBsnm");this.set_classname("rentCstmrBsnm");this.set_titletext("임대사업자 검색 및 등록 팝업");this._setFormPosition(0,0,640,255);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_ladCstmrInfo</Col><Col id=\"colId\">MTLTY_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">상호명</Col></Row><Row><Col id=\"compId\">ds_ladCstmrInfo</Col><Col id=\"colId\">BIZRNO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">사업자번호</Col></Row><Row><Col id=\"compId\">ds_ladCstmrInfo</Col><Col id=\"colId\">CSTMR_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">대표자명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladCstmrInfo",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNM_SN\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BSNM_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","13","71",null,"184","17",null,this);_a.set_taborder("0");_a.style.set_background("white");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","0",null,"10","0",null,this.div_WORK);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_Bsnm","absolute","0","10","300","19",null,null,this.div_WORK);_a.set_taborder("3");_a.set_text("사업자 정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","29",null,"5","0",null,this.div_WORK);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","0","34","608","27",null,null,this.div_WORK);_a.set_taborder("5");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","34","100","27",null,null,this.div_WORK);_a.set_taborder("9");_a.set_text("상호명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","86","608","27",null,null,this.div_WORK);_a.set_taborder("10");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","0","86","100","27",null,null,this.div_WORK);_a.set_taborder("11");_a.set_text("업태");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM01","absolute","304","86","100","27",null,null,this.div_WORK);_a.set_taborder("12");_a.set_text("업종");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_MTLTY_NM","absolute","102","37","200","21",null,null,this.div_WORK);_a.set_taborder("0");_a.set_cssclass("edt_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","239",null,"10","0",null,this.div_WORK);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","60","608","27",null,null,this.div_WORK);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","0","112","100","54",null,null,this.div_WORK);_a.set_taborder("15");_a.set_text("사업장주소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edi_zip","absolute","102","116","111","21",null,null,this.div_WORK);_a.set_taborder("16");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM00","absolute","0","60","100","27",null,null,this.div_WORK);_a.set_taborder("17");_a.set_text("사업자번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_BIZRNO","absolute","102","63","199","21",null,null,this.div_WORK);_a.set_inputtype("number");_a.set_taborder("2");_a.set_cssclass("edt_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ADRES_DETAIL","absolute","102","141","503","21",null,null,this.div_WORK);_a.set_taborder("8");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ADRES_DETAIL00","absolute","219","116","386","21",null,null,this.div_WORK);_a.set_taborder("7");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_ZIP","absolute","187","116","24","21",null,null,this.div_WORK);_a.set_taborder("19");_a.set_cssclass("btn_WF_Search");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("2");_a.set_text("사업자 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","601","9","20","20",null,null,this);_a.set_taborder("6");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","317","131","100","27",null,null,this);_a.set_taborder("9");_a.set_text("대표자명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","-2","253",null,"12","2",null,this);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("11");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Edit("edt_bizcnd","absolute","115","160","200","21",null,null,this);_a.set_taborder("4");this.addChild(_a.name,_a);_a=new Edit("edt_item","absolute","419","160","199","21",null,null,this);_a.set_taborder("5");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute",null,"51","50","25","68",null,this);_a.set_taborder("12");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.set_visible("true");_a.set_tooltiptext("단축키안내(Ctrl+F9)");_a.set_hotkey("CTRL+F9");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute",null,"51","50","25","15",null,this);_a.set_taborder("13");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.set_tooltiptext("단축키정보(Crtl+F10)");_a.set_hotkey("CTRL+F10");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Edit("edt_NM00","absolute","419","134","198","21",null,null,this);_a.set_taborder("1");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");_a.style.set_background("#ffffffff URL('theme://images/img_WF_Essential.png') left top");this.addChild(_a.name,_a);_a=new Button("btn_ZIP00","absolute","593","135","21","19",null,null,this);_a.set_taborder("14");_a.set_cssclass("btn_WF_Search");_a.style.set_background("#ffffffff");this.addChild(_a.name,_a);_a=new Layout("default","",0,184,this.div_WORK,function(_b){_b.set_taborder("0");_b.style.set_background("white");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",640,255,this,function(_b){_b.set_classname("rentCstmrBsnm");_b.set_titletext("임대사업자 검색 및 등록 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item18","div_WORK.edt_ADRES_DETAIL","value","ds_ladCstmrInfo","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_NM00","value","ds_ladCstmrInfo","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_WORK.edt_MTLTY_NM","value","ds_ladCstmrInfo","MTLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","edt_bizcnd","value","ds_ladCstmrInfo","BIZCND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","edt_item","value","ds_ladCstmrInfo","INDUTY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_WORK.edi_zip","value","ds_ladCstmrInfo","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_WORK.edt_BIZRNO","value","ds_ladCstmrInfo","BIZRNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_WORK.edt_ADRES_DETAIL00","value","ds_ladCstmrInfo","ADRES");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS080201_P10.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("SLS080201_P10.xfdl",function(){this.edtNm="";this.cntrctrNo=null;this.bsnm_sn=null;this.callback=null;this.rentCstmrBsnm_oninit=function(_a,_b){this.fn_init(false);this.fn_init_form();this.fn_init_dataset();};this.rentCstmrBsnm_onload=function(_a,_b){this.ds_cond00.clear();this.ds_cond00.copyData(this.parent.arg_1);this.fn_transaction("ladCstmrList");};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.btn_search_onclick=function(_a,_b){this.btn_search_onclick();this.ds_ladCstmrInfo.clearData();if(this.comUtils.isNullEmpty(this.edtNm)==false){this.alert(this.edtNm);}this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("ladCstmrList");};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_save_onclick=function(_a,_b){if(this.gfn_checkValidation(this.ds_ladCstmrInfo,this.ds_validation)==false){return;}if(this.edt_NM00.value==undefined||this.div_WORK.edt_BIZRNO.value==undefined||this.div_WORK.edt_MTLTY_NM.value==undefined){this.alert("필수 입력값을 확인해주세요");return;}if(Ex.util.isUpdated(this.ds_ladCstmrInfo)==true){if(this.confirm("토지 사업자를 저장 하시겠습니까?")){this.fn_transaction("ladCstmrCUD");}}};this.fn_confirm=function(){var _a=this.opener;if(_a[this.callback]==null){_a=this.opener.div_workFrame.div_main;}bResult=_a[this.callback]();return bResult;};this.fn_insertBsnm=function(){if(this.ds_rentCstmrList.rowposition<0){this.alert("주택고객을 선택해주세요.");return;}if(this.fn_check_duplidateBsnm()==true){return;}if(this.ds_rentBsnmList.rowcount<1){this.ds_rentBsnmList.addRow();this.ds_rentBsnmList.setColumn(0,"CNTRCTR_NO",this.cntrctrNo);this.ds_rentCstmrList.set_rowposition(0);}this.ds_rentBsnmList.copyRow(0,this.ds_rentCstmrList,this.ds_rentCstmrList.rowposition);};this.fn_check_duplidateBsnm=function(){var _a=this.ds_rentCstmrList.getColumn(this.ds_rentCstmrList.rowposition,"PRMANENT_CSTMR_NO");var _b=this.ds_rentBsnmList.rowcount;for(var _c=0;_c<_b;_c++ ){if(this.ds_rentBsnmList.getColumn(_c,'PRMANENT_CSTMR_NO')==_a){this.alert("동일한 사람이 사업자로 이미 등록되어 있습니다.");return true;}}return false;};this.fn_transaction=function(_a){switch(_a){case "ladCstmrList":var _b="/hsco/pms/sls/com/LadCstmr/selectLadLcntrctrBnsmList.do";var _c="input1=ds_cond00";var _d="ds_ladCstmrInfo=output1";break;case "ladCstmrCUD":var _b="/hsco/pms/sls/com/LadCstmr/saveLadLcntrctrBsnmList.do";var _c="input1=ds_ladCstmrInfo:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d==true){switch(_a){case "ladCstmrList":if(this.ds_ladCstmrInfo.rowcount==0){var _e=this.ds_ladCstmrInfo.addRow();this.ds_ladCstmrInfo.setColumn(_e,"CNTRCTR_NO",this.ds_cond00.getColumn(this.ds_cond00.rowposition,"CNTRCTR_NO"));this.ds_ladCstmrInfo.setColumn(_e,"BSNM_SN",this.ds_cond00.getColumn(this.ds_cond00.rowposition,"BSNM_SN"));}break;case "ladCstmrCUD":this.alert("저장 완료");break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.div_detail_btn_zipDmSearch_onclick=function(_a,_b){var _c=function(_e,_f){if(Eco.isEmpty(_f)){return;}trace('OK\n'+_f);var _g=new Dataset();nRowCnt=_g.loadXML(_f);if(nRowCnt<1){return;}var _h="ZIP=ZIPNO,"+"ADRES=ROADADDRPART1,"+"ADRES_DETAIL=ROADADDRPART2,";;var _i=this.ds_ladCstmrInfo;_i.copyRow(_i.rowposition,_g,0,_h);};var _d=this.div_WORK.edt_ADRES_DETAIL.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_d},"common::frmZipAddressPopup.xfdl",_c);};this.div_detail_btn_ladCstmr_onclick=function(_a,_b){var _c=this.ds_ladCstmrInfo.getColumn(0,"LAD_CSTMR_NO");var _d=this.edt_NM00.value;if(_d==undefined){_d='';}this.gfn_popup("popup_ladCstmr",600,470,"토지계약자 검색 및 등록",{cstmrNm:_d,ladCstmrNo:_c,callback:"fn_ladCstmr_callBack"},"pms_sls_com::ladCstmr_P01.xfdl");};this.fn_ladCstmr_callBack=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){var _j=this.ds_ladCstmrInfo.rowposition;this.ds_ladCstmrInfo.setColumn(_j,"LAD_CSTMR_NO",_a);this.ds_ladCstmrInfo.setColumn(_j,"CSTMR_NM",_b);this.ds_ladCstmrInfo.setColumn(_j,"IHIDNUM",_c);this.ds_ladCstmrInfo.setColumn(_j,"ZIP",_d);this.ds_ladCstmrInfo.setColumn(_j,"ADRES",_e);this.ds_ladCstmrInfo.setColumn(_j,"ADRES_DETAIL",_f);return true;};});this.on_initEvent=function(){this.addEventHandler("oninit",this.rentCstmrBsnm_oninit,this);this.addEventHandler("onload",this.rentCstmrBsnm_onload,this);this.div_WORK.sta_Bsnm.addEventHandler("onclick",this.div_WORK_Static01_onclick,this);this.div_WORK.btn_ZIP.addEventHandler("onclick",this.div_detail_btn_zipDmSearch_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_ZIP00.addEventHandler("onclick",this.div_detail_btn_ladCstmr_onclick,this);};this.loadIncludeScript("SLS080201_P10.xfdl");};})();