﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02030300_P02");this.set_classname("RNT02030300_P02");this.set_titletext("재계약 안내문 출력");this._setFormPosition(0,0,600,399);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GDCC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_noticeSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">1차안내문</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">촉구안내문</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">사전안내문</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_infoDoc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GDCC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DPRLR\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"INCRSE_RT\" type=\"STRING\" size=\"256\"/><Column id=\"CNCLS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_2\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_PLACE_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_damdangjaList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CENTJANG_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CENTJANG_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"WAITR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STDE\" type=\"STRING\" size=\"256\"/><Column id=\"STOKDE\" type=\"STRING\" size=\"256\"/><Column id=\"EDOKDE\" type=\"STRING\" size=\"256\"/><Column id=\"STOKDE2\" type=\"STRING\" size=\"256\"/><Column id=\"OK_RM\" type=\"STRING\" size=\"256\"/><Column id=\"PLACE1\" type=\"STRING\" size=\"256\"/><Column id=\"PLACE2\" type=\"STRING\" size=\"256\"/><Column id=\"PLACE3\" type=\"STRING\" size=\"256\"/><Column id=\"TIME_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"TODAY\" type=\"STRING\" size=\"256\"/><Column id=\"INCRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sms",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD0\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD1\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD2\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD3\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD4\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_smsCn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MSSAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSSAGE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MSSAGE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MXTR_WRD0\" type=\"STRING\" size=\"256\"/><Column id=\"MXTR_WRD1\" type=\"STRING\" size=\"256\"/><Column id=\"MXTR_WRD2\" type=\"STRING\" size=\"256\"/><Column id=\"MXTR_WRD3\" type=\"STRING\" size=\"256\"/><Column id=\"MXTR_WRD4\" type=\"STRING\" size=\"256\"/><Column id=\"RESVE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RESVE_HM\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_CLOS_HM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GDCC_KND\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","0",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","129","21",null,null,this);_a.set_taborder("4");_a.set_text("재계약 안내문");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40",null,"5","0",null,this);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","45",null,null,"15","10",this);_a.set_taborder("6");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","26","570","27",null,null,this.div_WORK);_a.set_taborder("141");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","0","26","100","27",null,null,this.div_WORK);_a.set_taborder("142");_a.set_text("우편번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","52","570","27",null,null,this.div_WORK);_a.set_taborder("143");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","0","52","100","27",null,null,this.div_WORK);_a.set_taborder("144");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_adres","absolute","102","55","465","21",null,null,this.div_WORK);_a.set_taborder("145");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","78","570","27",null,null,this.div_WORK);_a.set_taborder("146");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON03","absolute","0","78","100","27",null,null,this.div_WORK);_a.set_taborder("147");_a.set_text("전화");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON04","absolute","285","78","100","27",null,null,this.div_WORK);_a.set_taborder("148");_a.set_text("팩스");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_telno","absolute","102","81","181","21",null,null,this.div_WORK);_a.set_taborder("149");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_fax","absolute","387","81","180","21",null,null,this.div_WORK);_a.set_taborder("150");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","104","570","27",null,null,this.div_WORK);_a.set_taborder("151");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON05","absolute","0","104","100","27",null,null,this.div_WORK);_a.set_taborder("152");_a.set_text("센터장");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON06","absolute","285","104","100","27",null,null,this.div_WORK);_a.set_taborder("153");_a.set_text("담당자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_centjangNm","absolute","102","107","181","21",null,null,this.div_WORK);_a.set_taborder("154");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_waitrNm","absolute","387","107","180","21",null,null,this.div_WORK);_a.set_taborder("155");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","156","570","27",null,null,this.div_WORK);_a.set_taborder("156");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON09","absolute","0","156","100","27",null,null,this.div_WORK);_a.set_taborder("157");_a.set_text("문서번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_docNo","absolute","102","159","181","21",null,null,this.div_WORK);_a.set_taborder("158");_a.set_value("주거복지처 - ");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","182","570","27",null,null,this.div_WORK);_a.set_taborder("159");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON11","absolute","0","182","100","27",null,null,this.div_WORK);_a.set_taborder("160");_a.set_text("시행일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","208","570","27",null,null,this.div_WORK);_a.set_taborder("161");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_stDe","absolute","102","185","100","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("163");_a.set_dateformat("yyyy-MM-dd");_a=new Edit("edt_zip","absolute","102","29","181","21",null,null,this.div_WORK);_a.set_taborder("164");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","130","570","27",null,null,this.div_WORK);_a.set_taborder("165");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON07","absolute","0","130","100","27",null,null,this.div_WORK);_a.set_taborder("166");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_title","absolute","102","133","465","21",null,null,this.div_WORK);_a.set_taborder("167");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON00","absolute","204","182","100","27",null,null,this.div_WORK);_a.set_taborder("168");_a.set_text("납부영수증");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON08","absolute","285","156","100","27",null,null,this.div_WORK);_a.set_taborder("169");_a.set_text("관리번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_mgrNo","absolute","387","159","180","21",null,null,this.div_WORK);_a.set_taborder("170");this.div_WORK.addChild(_a.name,_a);_a=new Calendar("cal_stOkDe","absolute","102","211","100","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("171");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_edOkDe","absolute","216","211","100","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("172");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static02","absolute","205","211","8","21",null,null,this.div_WORK);_a.set_taborder("173");_a.set_text("~");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_timeLmt","absolute","330","211","237","21",null,null,this.div_WORK);_a.set_taborder("174");_a.set_value("오후 4:30분까지");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON02","absolute","408","182","68","27",null,null,this.div_WORK);_a.set_taborder("175");_a.set_text("인상률");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Spin("spin_incrt","absolute","478","185","66","21",null,null,this.div_WORK);_a.set_taborder("176");_a.set_value("0");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","549","185","12","21",null,null,this.div_WORK);_a.set_taborder("177");_a.set_text("%");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","234","570","27",null,null,this.div_WORK);_a.set_taborder("178");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_okRm","absolute","102","237","465","21",null,null,this.div_WORK);_a.set_taborder("179");_a.set_value("(토,일요일은 제외, 점심시간:12시-1시)");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","260","570","27",null,null,this.div_WORK);_a.set_taborder("180");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_place1","absolute","102","263","465","21",null,null,this.div_WORK);_a.set_taborder("181");_a.set_value("화성도시공사 2층 주거복지처 (전화:350-0363)");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","286","570","27",null,null,this.div_WORK);_a.set_taborder("182");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_place2","absolute","102","289","465","21",null,null,this.div_WORK);_a.set_taborder("183");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","312","570","27",null,null,this.div_WORK);_a.set_taborder("184");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_place3","absolute","102","315","465","21",null,null,this.div_WORK);_a.set_taborder("185");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON10","absolute","0","260","100","79",null,null,this.div_WORK);_a.set_taborder("186");_a.set_text("체결장소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","0","570","27",null,null,this.div_WORK);_a.set_taborder("189");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON14","absolute","0","0","100","27",null,null,this.div_WORK);_a.set_taborder("190");_a.set_text("안내문종류");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Radio("rdo_noticeSe","absolute","102","3","337","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("192");_a.set_rowcount("1");_a.set_innerdataset("@ds_noticeSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("0");_a.set_index("0");_a=new Div("div_monCal","absolute","306","185","95","21",null,null,this.div_WORK);_a.set_taborder("193");_a.set_text("Div00");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON13","absolute","0","208","100","53",null,null,this.div_WORK);_a.set_taborder("162");_a.set_text("체결기간");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","2","384",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_confirm","absolute","483","15","49","25",null,null,this);_a.set_taborder("8");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","535","15","50","25",null,null,this);_a.set_taborder("9");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new CheckBox("chk_print","absolute","305","19","95","21",null,null,this);_a.set_taborder("11");_a.set_text("안내문출력");_a.set_value("1");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_cssclass("chk_WF_Readonly");this.addChild(_a.name,_a);_a=new CheckBox("chk_sms","absolute","400","19","85","21",null,null,this);_a.set_taborder("12");_a.set_text("문자발송");_a.set_value("1");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_cssclass("chk_WF_Readonly");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("6");_b.set_text("Div00");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",600,399,this,function(_b){_b.set_classname("RNT02030300_P02");_b.set_titletext("재계약 안내문 출력");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.edt_zip","value","ds_damdangjaList","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.edt_adres","value","ds_damdangjaList","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.edt_telno","value","ds_damdangjaList","WAITR_TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.edt_fax","value","ds_damdangjaList","FAX");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.edt_centjangNm","value","ds_damdangjaList","CENTJANG_EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.edt_waitrNm","value","ds_damdangjaList","WAITR_EMPNM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT02030300_P02.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT02030300_P02.xfdl",function(){this.RNT02030300_P02_onload=function(_a,_b){this.today=this.gfn_today();this.div_WORK.cal_stDe.set_value(this.today);this.div_WORK.cal_stOkDe.set_value(this.today);this.div_WORK.cal_edOkDe.set_value(this.today);this.div_WORK.div_monCal.msk_mon.set_value(this.gfn_today("NOW_YEAR_MONTH"));this.fn_fill_code(this.ds_damdangjaList,"/hsco/pms/com/PMS000000/damdangjaList.do","",{damdangjaCode:'RN2003'});this.fn_fill_code(this.ds_smsCn,"/hsco/cmm/ums/mssageManageList.do","",{CODE:"RNT002"});this.div_WORK_rdo_noticeSe_onitemchanged(this.div_WORK.rdo_noticeSe.value);};this.btn_close_onclick=function(_a,_b){this.close();};this.div_WORK_rdo_noticeSe_onitemchanged=function(_a,_b){var _c=this.div_WORK.rdo_noticeSe.value;var _d='';var _e='(토,일요일은 제외, 점심시간:12시-1시)';var _f='화성도시공사 2층 주거복지처 (전화:350-0363)';switch(_c){case '0':_d="매입임대 임대차 계약갱신 안내";this.chk_sms.set_enable(true);break;case '1':_d="매입임대 임대차 계약갱신 촉구";this.chk_sms.set_enable(false);this.chk_sms.set_value('0');break;case '2':_d="매입임대 임대차 계약갱신 사전안내";this.chk_sms.set_enable(false);this.chk_sms.set_value('0');break;}this.div_WORK.edt_title.set_value(_d);this.div_WORK.edt_okRm.set_value(_e);this.div_WORK.edt_place1.set_value(_f);this.div_WORK.edt_place2.set_value('');this.div_WORK.edt_place3.set_value('');};this.btn_confirm_onclick=function(_a,_b){if(this.chk_print.value=='0'&&this.chk_sms.value=='0'){this.alert("출력 유형이 선택되지 않았습니다.");return;}if(this.chk_print.value=='1'){this.fn_printExecut();}else{this.fn_smsExecut();}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "gdccSndngHistC":var _c="/hsco/pms/rnt/pra/RNT00000000/gdccSndngHistC.do";var _d="input1=ds_cond01";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_printExecut=function(){var _a="";var _b="";switch(this.div_WORK.rdo_noticeSe.value){case '0':_a="/pms/rnt/prm/RNT02030300_P02R01.jrf";_b="매입임대 1차안내문";break;case '1':_a="/pms/rnt/prm/RNT02030300_P02R01.jrf";_b="매입임대 촉구안내문";break;case '2':_a="/pms/rnt/prm/RNT02030300_P02R02.jrf";_b="매입임대 사전안내문";break;}this.ds_damdangjaList.setColumn(0,"TITLE",this.div_WORK.edt_title.value);this.ds_damdangjaList.setColumn(0,"STDE",this.div_WORK.cal_stDe.text);this.ds_damdangjaList.setColumn(0,"STOKDE",this.div_WORK.cal_stOkDe.text);this.ds_damdangjaList.setColumn(0,"EDOKDE",this.div_WORK.cal_edOkDe.text);this.ds_damdangjaList.setColumn(0,"TIME_LMT",this.div_WORK.edt_timeLmt.value);this.ds_damdangjaList.setColumn(0,"OK_RM",this.div_WORK.edt_okRm.value);this.ds_damdangjaList.setColumn(0,"PLACE1",this.div_WORK.edt_place1.value);this.ds_damdangjaList.setColumn(0,"PLACE2",this.div_WORK.edt_place2.value);this.ds_damdangjaList.setColumn(0,"PLACE3",this.div_WORK.edt_place3.value);this.ds_damdangjaList.setColumn(0,"DOC_NO",this.div_WORK.edt_docNo.value);this.ds_damdangjaList.setColumn(0,"MGR_NO",this.div_WORK.edt_mgrNo.value);this.ds_damdangjaList.setColumn(0,"INCRT",this.div_WORK.spin_incrt.value);this.ds_damdangjaList.setColumn(0,"TODAY",this.today.substring(0,4));var _c=new this.cf_Opts();_c.setToolbar(false);_c.setScale(100);_c.setReportPath(_a);_c.setSaveFilename(_b);_c.setLocalDs(["ds_damdangjaList",this.ds_damdangjaList]);_c.setLocalDs(["ds_reCntrctList",this.parent.ds_reCntrctList]);var _d={arg_0:this,opts:_c};this.gfn_popup("Popup_Report",884,735,"안내문",_d,"common::frmReportPopup.xfdl","fn_smsExecut");};this.fn_smsExecut=function(){if(this.chk_print.value=='1'){if(this.ds_cond01.rowcount==0){this.ds_cond01.addRow();}this.ds_cond01.clearData();var _a="";if(this.div_WORK.rdo_noticeSe.value=="0"){_a="002";}else if(this.div_WORK.rdo_noticeSe.value=="1"){_a="003";}else{_a="004";}for(var _t=0;_t<this.parent.ds_reCntrctList.getRowCount();_t++ ){var _b=this.ds_cond01.addRow();this.ds_cond01.setColumn(_b,"CSTMR_NO",this.parent.ds_reCntrctList.getColumn(_t,"PUCHAS_CSTMR_NO"));this.ds_cond01.setColumn(_b,"JOB_SE_CODE","PRA");this.ds_cond01.setColumn(_b,"GDCC_KND",_a);this.ds_cond01.setColumn(_b,"ADRES",this.parent.ds_reCntrctList.getColumn(_t,"CONT_ADRES"));this.ds_cond01.setColumn(_b,"ADRES_DETAIL",this.parent.ds_reCntrctList.getColumn(_t,"HOUSE_ADRES"));this.ds_cond01.setColumn(_b,"TELNO",this.parent.ds_reCntrctList.getColumn(_t,"TELNO"));this.ds_cond01.setColumn(_b,"MBTLNO",this.parent.ds_reCntrctList.getColumn(_t,"MBTLNO"));}this.fn_transaction("gdccSndngHistC");}if(this.chk_sms.value=='0'){return;}var _c=this.parent.ds_reCntrctList;var _d=_c.rowcount;var _e=this.ds_smsCn.getColumn(0,"MSSAGE_CN")||'';var _f=this.div_WORK.cal_stOkDe;var _g=this.div_WORK.cal_edOkDe;var _h=_f.getYear()+'년 '+_f.getMonth()+'월 '+_f.getDay()+'일';var _i=_g.getYear()+'년 '+_g.getMonth()+'월 '+_g.getDay()+'일';var _j=_h+' ~ '+_i;this.ds_sms.clearData();for(var _t=0;_t<_d;_t++ ){var _k=_c.getColumn(_t,"NM")||'';var _l=_c.getColumn(_t,"TELNO")||'';var _m=_c.getColumn(_t,"MBTLNO")||'';var _n=_c.getColumn(_t,"RENT_BGNDE")||'';var _o=_c.getColumn(_t,"CNTRCTR_NO")||'';_l=this.fn_getTelNo(_l);_l=_l==''?this.fn_getTelNo(_m):_l;var _p=_n.substr(0,4);var _q=_n.substr(4,2);var _r=0;if(!isNaN(_q)){_r=Math.floor(parseInt(_q)/3+1);}_n=_p+'년 '+_r+'분기';var _s=this.ds_sms.addRow();this.ds_sms.setColumn(_s,"MBTLNO",_l);this.ds_sms.setColumn(_s,"NM",_k);this.ds_sms.setColumn(_s,"CHANGE_WORD0",_k);this.ds_sms.setColumn(_s,"CHANGE_WORD1",' ');this.ds_sms.setColumn(_s,"CHANGE_WORD2",_n);this.ds_sms.setColumn(_s,"CHANGE_WORD3",_j);this.ds_sms.setColumn(_s,"CHANGE_WORD4",' ');this.ds_sms.setColumn(_s,"CHRCTR_PREPAR_VALUE_0","2");this.ds_sms.setColumn(_s,"CHRCTR_PREPAR_VALUE_1",_o);}this.gfn_popup("COM010700_P01.xfdl",1000,600,"SMS발송",{CONTENT:_e,MXTR_WRD0:"고객명",MXTR_WRD1:"",MXTR_WRD2:"계약월/분기",MXTR_WRD3:"재계약마감일",MXTR_WRD4:"",JOB_SE:"RNT002",ds:this.ds_sms},"com::COM010700_P01.xfdl","sms_callback",true);};});this.on_initEvent=function(){this.addEventHandler("onload",this.RNT02030300_P02_onload,this);this.div_WORK.rdo_noticeSe.addEventHandler("onitemchanged",this.div_WORK_rdo_noticeSe_onitemchanged,this);this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT02030300_P02.xfdl");this.loadPreloadList();};})();