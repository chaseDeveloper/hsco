﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT030307_P03");this.set_classname("RNT030307_P03");this.set_titletext("소명자료 제출 안내문 팝업");this._setFormPosition(0,0,600,357);}_a=new Dataset("ds_damdangjaList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CENTJANG_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CENTJANG_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STDE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gubun",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">1차</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">독촉</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentPosesnThingMasterList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentPosesnThingDetailList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prtM",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLCNT_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prtD",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLCNT_CNTRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLCNT_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"LFSTS_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSFR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRESENTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REFER\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_LFSTS\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL_LFSTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("0");_a.set_text("소명자료 제출 안내문");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","563","9","20","20",null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","53","158","21",null,null,this);_a.set_taborder("5");_a.set_text("소명자료 제출 안내문");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","81",null,"276","15",null,this);_a.set_taborder("7");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","570","27",null,null,this.div_WORK);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","0","0","100","27",null,null,this.div_WORK);_a.set_taborder("15");_a.set_text("우편번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_zip","absolute","102","3","181","21",null,null,this.div_WORK);_a.set_taborder("0");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","26","570","27",null,null,this.div_WORK);_a.set_taborder("16");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","0","26","100","27",null,null,this.div_WORK);_a.set_taborder("17");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_adres","absolute","102","29","465","21",null,null,this.div_WORK);_a.set_taborder("1");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","52","570","27",null,null,this.div_WORK);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON03","absolute","0","52","100","27",null,null,this.div_WORK);_a.set_taborder("19");_a.set_text("전화");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON04","absolute","285","52","100","27",null,null,this.div_WORK);_a.set_taborder("20");_a.set_text("팩스");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_telno","absolute","102","55","181","21",null,null,this.div_WORK);_a.set_taborder("2");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_fax","absolute","387","55","180","21",null,null,this.div_WORK);_a.set_taborder("3");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","78","570","27",null,null,this.div_WORK);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON05","absolute","0","78","100","27",null,null,this.div_WORK);_a.set_taborder("22");_a.set_text("센터장");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON06","absolute","285","78","100","27",null,null,this.div_WORK);_a.set_taborder("23");_a.set_text("담당자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_centjangNm","absolute","102","81","181","21",null,null,this.div_WORK);_a.set_taborder("4");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_waitrNm","absolute","387","81","180","21",null,null,this.div_WORK);_a.set_taborder("5");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","104","570","27",null,null,this.div_WORK);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON07","absolute","0","104","100","27",null,null,this.div_WORK);_a.set_taborder("25");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_title","absolute","102","107","465","21",null,null,this.div_WORK);_a.set_taborder("6");_a.set_value("주택소유에 따른 소명자료 제출 안내");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","130","570","27",null,null,this.div_WORK);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON09","absolute","0","130","100","27",null,null,this.div_WORK);_a.set_taborder("27");_a.set_text("문서번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON10","absolute","285","130","100","27",null,null,this.div_WORK);_a.set_taborder("28");_a.set_text("관리번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_docNo","absolute","102","133","181","21",null,null,this.div_WORK);_a.set_taborder("7");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_mgrNo","absolute","387","133","180","21",null,null,this.div_WORK);_a.set_taborder("8");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","156","570","27",null,null,this.div_WORK);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON11","absolute","0","156","100","27",null,null,this.div_WORK);_a.set_taborder("30");_a.set_text("시행일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","182","570","27",null,null,this.div_WORK);_a.set_taborder("31");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON13","absolute","0","182","100","27",null,null,this.div_WORK);_a.set_taborder("32");_a.set_text("조회년월");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_stDe","absolute","102","159","181","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("9");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("sta_TLPHON00","absolute","285","182","100","27",null,null,this.div_WORK);_a.set_taborder("33");_a.set_text("제출기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_presentnDe","absolute","387","185","180","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("11");_a.set_dateformat("yyyy-MM-dd");_a=new Div("div_inqireDe","absolute","102","185","86","21",null,null,this.div_WORK);_a.set_taborder("10");_a.set_text("Div00");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","208","570","27",null,null,this.div_WORK);_a.set_taborder("34");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON02","absolute","0","208","100","27",null,null,this.div_WORK);_a.set_taborder("35");_a.set_text("문서번호(1차)");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_docNo1","absolute","102","211","465","21",null,null,this.div_WORK);_a.set_taborder("12");_a.set_value("「주거복지처-0644(2009.03.05)」");_a.set_enable("false");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","234","570","27",null,null,this.div_WORK);_a.set_taborder("36");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON08","absolute","0","234","100","27",null,null,this.div_WORK);_a.set_taborder("37");_a.set_text("제출기한(1차)");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","261",null,"15","0",null,this.div_WORK);_a.set_taborder("39");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_presentnDe1","absolute","102","237","181","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("13");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("false");_a=new Button("btn_print","absolute","483","51","49","25",null,null,this);_a.set_taborder("10");_a.set_text("출력");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Radio("rdo_gubun","absolute","365","51","101","25",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("11");_a.set_innerdataset("@ds_gubun");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_value("1");_a.set_rowcount("1");_a.set_index("0");_a=new Button("btn_close00","absolute","535","51","50","25",null,null,this);_a.set_taborder("12");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Layout("default","",0,276,this.div_WORK,function(_b){_b.set_taborder("7");_b.set_text("Div00");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",600,357,this,function(_b){_b.set_classname("RNT030307_P03");_b.set_titletext("소명자료 제출 안내문 팝업");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT030307_P03.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT030307_P03.xfdl",function(){this.fv_objForm;this.RNT030307_P03_oninit=function(_a,_b){};this.RNT030307_P03_onload=function(_a,_b){var _c=this.dateUtils.today();this.div_WORK.edt_zip.set_value('702-073');this.div_WORK.edt_telno.set_value("350-0232");this.div_WORK.edt_fax.set_value("350-0399");this.div_WORK.cal_stDe.set_value(_c);this.div_WORK.cal_presentnDe.set_value(_c);this.div_WORK.edt_adres.set_value("화성광역시 북구 침산로 73(고성3가 1-1번지)주거복지처");this.div_WORK.edt_waitrNm.set_value("박선영");this.div_WORK.edt_centjangNm.set_value("김찬수");this.div_WORK.div_inqireDe.setValue(_c.substring(0,6));this.fv_objForm=this.parent.arg_0;this.ds_prtM.copyData(this.parent.arg_1);this.ds_prtD.copyData(this.parent.arg_2);};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_print_onclick=function(_a,_b){var _c='';if(this.rdo_gubun.value=='1'){_c="/pms/rnt/lrm/RNT030307_P03R01.jrf";}else{_c="/pms/rnt/pra/RNT030307_P03R02.jrf";}this.ds_damdangjaList.addRow();this.ds_damdangjaList.setColumn(0,"TITLE",this.div_WORK.edt_title.value);this.ds_damdangjaList.setColumn(0,"DOC_NO",this.div_WORK.edt_docNo.value);this.ds_damdangjaList.setColumn(0,"STDE",this.div_WORK.cal_stDe.value);this.ds_damdangjaList.setColumn(0,"PAY_TMLMT",this.div_WORK.cal_presentnDe.value);this.ds_damdangjaList.setColumn(0,"MGR_NO",this.div_WORK.edt_mgrNo.value);this.ds_damdangjaList.setColumn(0,"DOC_NO1",this.div_WORK.edt_docNo1.value);this.ds_damdangjaList.setColumn(0,"PAY_TMLMT1",this.div_WORK.cal_presentnDe1.value);var _d=new this.cf_Opts();_d.setToolbar(false);_d.setScale(100);_d.setReportPath(_c);_d.setSaveFilename("소명자료 제출 안내문");_d.setLocalDs(["ds_damdangjaList",this.ds_damdangjaList]);_d.setLocalDs(["ds_prtM",this.ds_prtM]);_d.setLocalDs(["ds_prtD",this.ds_prtD]);var _e={arg_0:this,opts:_d};this.gfn_popup("Popup_Report",884,735,"소명자료 제출 안내문",_e,"common::frmReportPopup.xfdl","report_callback");};this.rdo_gubun_onitemchanged=function(_a,_b){this.div_WORK.edt_docNo1.set_enable(_b.postvalue=='1'?false:true);this.div_WORK.cal_presentnDe1.set_enable(_b.postvalue=='1'?false:true);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT030307_P03_oninit,this);this.addEventHandler("onload",this.RNT030307_P03_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);this.rdo_gubun.addEventHandler("onitemchanged",this.rdo_gubun_onitemchanged,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT030307_P03.xfdl");this.loadPreloadList();};})();