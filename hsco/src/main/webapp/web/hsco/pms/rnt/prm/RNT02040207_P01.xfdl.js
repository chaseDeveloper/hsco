﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040207_P01");this.set_classname("RNT02040207_P01");this.set_titletext("체납 안내문");this._setFormPosition(0,0,600,269);}_a=new Dataset("ds_damdangjaList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CENTJANG_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CENTJANG_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GDCC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gubun",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">체납</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">최고</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_notice01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_INT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"SEC_AMT1\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MCNT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_PROGRS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"JUDMN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_STRUCTURE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_notice02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"JANG\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STD_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_infoDoc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GDCC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DPRLR\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"INCRSE_RT\" type=\"STRING\" size=\"256\"/><Column id=\"CNCLS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","129","21",null,null,this);_a.set_taborder("5");_a.set_text("체납 안내문");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","45",null,"224","15",null,this);_a.set_taborder("7");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","570","27",null,null,this.div_WORK);_a.set_taborder("73");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","0","0","100","27",null,null,this.div_WORK);_a.set_taborder("74");_a.set_text("우편번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","26","570","27",null,null,this.div_WORK);_a.set_taborder("75");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","0","26","100","27",null,null,this.div_WORK);_a.set_taborder("76");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_adres","absolute","102","29","465","21",null,null,this.div_WORK);_a.set_taborder("1");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","52","570","27",null,null,this.div_WORK);_a.set_taborder("78");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON03","absolute","0","52","100","27",null,null,this.div_WORK);_a.set_taborder("79");_a.set_text("전화");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON04","absolute","285","52","100","27",null,null,this.div_WORK);_a.set_taborder("80");_a.set_text("팩스");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_telno","absolute","102","55","181","21",null,null,this.div_WORK);_a.set_taborder("2");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_fax","absolute","387","55","180","21",null,null,this.div_WORK);_a.set_taborder("3");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","78","570","27",null,null,this.div_WORK);_a.set_taborder("83");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON05","absolute","0","78","100","27",null,null,this.div_WORK);_a.set_taborder("84");_a.set_text("부서장");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON06","absolute","285","78","100","27",null,null,this.div_WORK);_a.set_taborder("85");_a.set_text("담당자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_jang","absolute","102","81","181","21",null,null,this.div_WORK);_a.set_taborder("4");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_damdang","absolute","387","81","180","21",null,null,this.div_WORK);_a.set_taborder("5");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","130","570","27",null,null,this.div_WORK);_a.set_taborder("88");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON09","absolute","0","130","100","27",null,null,this.div_WORK);_a.set_taborder("89");_a.set_text("문서번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_docNo","absolute","102","133","465","21",null,null,this.div_WORK);_a.set_taborder("90");_a.set_value("주거복지처 - ");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","156","570","27",null,null,this.div_WORK);_a.set_taborder("91");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON11","absolute","0","156","100","27",null,null,this.div_WORK);_a.set_taborder("92");_a.set_text("시행일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","182","570","27",null,null,this.div_WORK);_a.set_taborder("93");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON13","absolute","0","182","100","27",null,null,this.div_WORK);_a.set_taborder("94");_a.set_text("관리번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_stDe","absolute","102","159","181","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_stdrDe","absolute","387","185","180","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("11");_a.set_dateformat("yyyy-MM-dd");_a=new Edit("edt_zip","absolute","102","3","181","21",null,null,this.div_WORK);_a.set_taborder("0");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_title","absolute","102","107","465","21",null,null,this.div_WORK);_a.set_taborder("7");_a.set_value("영구임대주택 임대차 계약체결 안내");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","104","570","27",null,null,this.div_WORK);_a.set_taborder("99");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON07","absolute","0","104","100","27",null,null,this.div_WORK);_a.set_taborder("100");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_subject","absolute","102","107","465","21",null,null,this.div_WORK);_a.set_taborder("6");_a.set_value("임대료 장기체납 납부독촉");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON00","absolute","285","156","100","27",null,null,this.div_WORK);_a.set_taborder("102");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_payTmlmt","absolute","387","159","180","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("9");_a.set_dateformat("yyyy-MM-dd");_a=new Static("sta_TLPHON02","absolute","285","182","100","27",null,null,this.div_WORK);_a.set_taborder("104");_a.set_text("기준일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_manageNo","absolute","102","185","181","21",null,null,this.div_WORK);_a.set_taborder("10");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","2","254",null,"15","0",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_print","absolute","483","15","49","25",null,null,this);_a.set_taborder("9");_a.set_text("출력");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Radio("rdo_gubun","absolute","350","17","122","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("10");_a.set_rowcount("1");_a.set_innerdataset("@ds_gubun");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("0");_a.set_index("0");_a=new Button("btn_print00","absolute","535","15","49","25",null,null,this);_a.set_taborder("11");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Layout("default","",0,224,this.div_WORK,function(_b){_b.set_taborder("7");_b.set_text("Div00");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",600,269,this,function(_b){_b.set_classname("RNT02040207_P01");_b.set_titletext("체납 안내문");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.edt_zip","value","ds_infoDoc","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.edt_adres","value","ds_infoDoc","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.edt_telno","value","ds_infoDoc","TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.edt_fax","value","ds_infoDoc","FAX");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.edt_jang","value","ds_infoDoc","DPRLR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.edt_damdang","value","ds_infoDoc","CHARGER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.edt_subject","value","ds_infoDoc","SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_WORK.edt_docNo","value","ds_infoDoc","DOC_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_WORK.cal_stDe","value","ds_infoDoc","OPERTN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_WORK.edt_manageNo","value","ds_infoDoc","MANAGE_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_WORK.cal_payTmlmt","value","ds_infoDoc","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_WORK.cal_stdrDe","value","ds_infoDoc","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT02040207_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040207_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT02040207_P01.xfdl",function(){this.RNT02040207_P01_oninit=function(_a,_b){};this.RNT02040207_P01_onload=function(_a,_b){this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"GDCC_NO","5");this.ds_cond00.setColumn(0,"GDCC_KND","1");this.fn_transaction("selectInfoDocList");var _c=this.parent.ds_notice01.rowcount;for(var _e=0;_e<_c;_e++ ){var _d=this.ds_notice01.addRow();this.ds_notice01.copyRow(_d,this.parent.ds_notice01,_e);}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectInfoDocList":var _c="/hsco/pms/rnt/prm/RNT02000000/selectInfoDocList.do";var _d="input1=ds_cond00";var _e="ds_infoDoc=output1";break;case "infoDocListU":var _c="/hsco/pms/rnt/prm/RNT02000000/infoDocListU.do";var _d="input1=ds_infoDoc:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "selectInfoDocList":var _e=this.gfn_today();this.div_WORK.cal_stDe.set_value(_e);this.div_WORK.cal_payTmlmt.set_value(this.fn_last_yyyymmdd(_e));break;case "infoDocListU":this.fn_print();break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_print_onclick=function(_a,_b){this.fn_transaction("infoDocListU");};this.fn_print=function(){if(this.rdo_gubun.value==0){var _a="/pms/rnt/prm/RNT02040207_P01R01.jrf";}else{var _a="/pms/rnt/prm/RNT02040207_P01R02.jrf";}var _b=this.parent.ds_notice01.rowcount;for(var _e=0;_e<_b;_e++ ){this.ds_notice01.setColumn(_e,"DOC_NO",this.div_WORK.edt_docNo.value);this.ds_notice01.setColumn(_e,"ST_DE",this.div_WORK.cal_stDe.value);this.ds_notice01.setColumn(_e,"SUBJECT",this.div_WORK.edt_subject.value);this.ds_notice01.setColumn(_e,"MANAGE_NO",this.div_WORK.edt_manageNo.value);this.ds_notice01.setColumn(_e,"STD_DE",this.div_WORK.cal_stdrDe.value);}this.ds_notice02.clearData();this.ds_notice02.addRow();this.ds_notice02.setColumn(0,"ZIP",this.div_WORK.edt_zip.value);this.ds_notice02.setColumn(0,"ADRES",this.div_WORK.edt_adres.value);this.ds_notice02.setColumn(0,"TEL_NO",this.div_WORK.edt_telno.value);this.ds_notice02.setColumn(0,"FAX",this.div_WORK.edt_fax.value);this.ds_notice02.setColumn(0,"JANG",this.div_WORK.edt_jang.value);this.ds_notice02.setColumn(0,"DAMDANG",this.div_WORK.edt_damdang.value);this.ds_notice02.setColumn(0,"SUBJECT",this.div_WORK.edt_subject.value);this.ds_notice02.setColumn(0,"DOC_NO",this.div_WORK.edt_docNo.value);this.ds_notice02.setColumn(0,"ST_DE",this.div_WORK.cal_stDe.value);this.ds_notice02.setColumn(0,"PAY_TMLMT",this.div_WORK.cal_payTmlmt.value);this.ds_notice02.setColumn(0,"MANAGE_NO",this.div_WORK.edt_manageNo.value);this.ds_notice02.setColumn(0,"STD_DE",this.div_WORK.cal_stdrDe.value);var _c=new this.cf_Opts();_c.setToolbar(false);_c.setScale(100);_c.setReportPath(_a);_c.setSaveFilename("강제집행 안내문");_c.setLocalDs(["ds_notice01",this.ds_notice01]);_c.setLocalDs(["ds_notice02",this.ds_notice02]);var _d={arg_0:this,opts:_c};this.gfn_popup("Popup_Report",884,735,"강제집행 안내문",_d,"common::frmReportPopup.xfdl","report_callback");};this.rdo_gubun_onitemchanged=function(_a,_b){if(this.rdo_gubun.value==0){this.ds_cond00.setColumn(0,"GDCC_KND",1);this.fn_transaction("selectInfoDocList");}else{this.ds_cond00.setColumn(0,"GDCC_KND",2);this.fn_transaction("selectInfoDocList");}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040207_P01_oninit,this);this.addEventHandler("onload",this.RNT02040207_P01_onload,this);this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);this.rdo_gubun.addEventHandler("onitemchanged",this.rdo_gubun_onitemchanged,this);this.btn_print00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT02040207_P01.xfdl");};})();