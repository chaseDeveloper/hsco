﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040207_P02");this.set_classname("RNT02040207_P02");this.set_titletext("스티커 안내문");this._setFormPosition(0,0,429,165);}_a=new Dataset("ds_notice01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_INT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"SEC_AMT1\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MCNT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_PROGRS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"JUDMN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_STRUCTURE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_notice02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GDCC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_infoDoc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GDCC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DPRLR\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"INCRSE_RT\" type=\"STRING\" size=\"256\"/><Column id=\"CNCLS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","414","0","15",null,null,"0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","129","21",null,null,this);_a.set_taborder("5");_a.set_text("스티커 안내문");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","45","399","120",null,null,this);_a.set_taborder("7");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","399","27",null,null,this.div_WORK);_a.set_taborder("68");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","0","0","100","27",null,null,this.div_WORK);_a.set_taborder("69");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","26","399","27",null,null,this.div_WORK);_a.set_taborder("70");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","0","26","100","27",null,null,this.div_WORK);_a.set_taborder("71");_a.set_text("전화");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_tel","absolute","102","29","126","21",null,null,this.div_WORK);_a.set_taborder("1");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","52","399","27",null,null,this.div_WORK);_a.set_taborder("73");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON03","absolute","0","52","100","27",null,null,this.div_WORK);_a.set_taborder("74");_a.set_text("발송일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","78","399","27",null,null,this.div_WORK);_a.set_taborder("75");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON05","absolute","0","78","100","27",null,null,this.div_WORK);_a.set_taborder("76");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_title","absolute","102","3","294","21",null,null,this.div_WORK);_a.set_taborder("0");_a.set_value("임대료 납부독촉 스티커 부착등 예고");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_sndngDe","absolute","102","55","126","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_payTmlmt","absolute","102","81","126","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static02","absolute","1","105",null,"15","1",null,this.div_WORK);_a.set_taborder("80");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_print","absolute","313","15","49","25",null,null,this);_a.set_taborder("8");_a.set_text("출력");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_print00","absolute","365","15","49","25",null,null,this);_a.set_taborder("9");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Layout("default","",399,120,this.div_WORK,function(_b){_b.set_taborder("7");_b.set_text("Div00");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",429,165,this,function(_b){_b.set_classname("RNT02040207_P02");_b.set_titletext("스티커 안내문");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.edt_title","value","ds_infoDoc","SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.edt_tel","value","ds_infoDoc","TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.cal_payTmlmt","value","ds_infoDoc","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.cal_sndngDe","value","ds_infoDoc","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT02040207_P02.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040207_P02.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT02040207_P02.xfdl",function(){this.RNT02040207_P02_oninit=function(_a,_b){};this.RNT02040207_P02_onload=function(_a,_b){this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"GDCC_NO","6");this.ds_cond00.setColumn(0,"GDCC_KND","1");this.fn_transaction("selectInfoDocList");var _c=this.parent.ds_notice01.rowcount;for(var _e=0;_e<_c;_e++ ){var _d=this.ds_notice01.addRow();this.ds_notice01.copyRow(_d,this.parent.ds_notice01,_e);}this.debug(this.ds_notice01,true);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectInfoDocList":var _c="/hsco/pms/rnt/prm/RNT02000000/selectInfoDocList.do";var _d="input1=ds_cond00";var _e="ds_infoDoc=output1";break;case "infoDocListU":var _c="/hsco/pms/rnt/prm/RNT02000000/infoDocListU.do";var _d="input1=ds_infoDoc:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "selectInfoDocList":var _e=this.gfn_today();this.div_WORK.cal_sndngDe.set_value(_e);this.div_WORK.cal_payTmlmt.set_value(this.fn_last_yyyymmdd(_e));break;case "infoDocListU":this.fn_print();break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_print_onclick=function(_a,_b){this.fn_transaction("infoDocListU");};this.fn_print=function(){this.ds_notice02.clearData();this.ds_notice02.addRow();this.ds_notice02.setColumn(0,"TEL_NO",this.div_WORK.edt_tel.value);this.ds_notice02.setColumn(0,"SNDNG_DE",this.div_WORK.cal_sndngDe.value);this.ds_notice02.setColumn(0,"PAY_TMLMT",this.div_WORK.cal_payTmlmt.value);var _a=new this.cf_Opts();_a.setToolbar(false);_a.setScale(100);_a.setReportPath("/pms/rnt/prm/RNT02040207_P02R01.jrf");_a.setSaveFilename("체납 스티커 안내문");this.debug(this.ds_notice01,true);this.debug(this.ds_notice02,true);_a.setLocalDs(["ds_notice01",this.ds_notice01]);_a.setLocalDs(["ds_notice02",this.ds_notice02]);var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"체납 스티커 안내문",_b,"common::frmReportPopup.xfdl","report_callback");};});this.on_initEvent=function(){this.addEventHandler("onload",this.RNT02040207_P02_onload,this);this.addEventHandler("oninit",this.RNT02040207_P02_oninit,this);this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);this.btn_print00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT02040207_P02.xfdl");};})();