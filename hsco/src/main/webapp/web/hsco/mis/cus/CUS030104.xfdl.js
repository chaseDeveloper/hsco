﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS030104");this.set_classname("CUS030104");this.set_titletext("안내정보메시지발송관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cstmrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_indvdlTy",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">공무원/공공기관</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">법률</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">학계</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">언론인</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">일반개인</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cstmrGrad",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">우호</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">보통</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">악성</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cstmrList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CSTMR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sndngCnList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CSTMR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTN_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_chrctrCnInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHRCTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cus030",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_smsClient1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RECIPIENT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RECIPIENT_NUM\">010</Col><Col id=\"CHANGE_WORD5\">이동석</Col></Row><Row><Col id=\"RECIPIENT_NUM\">019</Col><Col id=\"CHANGE_WORD5\">정윤원</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_chrctrCnInfo</Col><Col id=\"colId\">SEND_TEL_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">발신번호</Col></Row><Row><Col id=\"colId\">CHRCTR_CN</Col><Col id=\"compId\">ds_chrctrCnInfo</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">문자내용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_smsList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MBTLNO\" type=\"STRING\" size=\"12\"/><Column id=\"NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD0\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD1\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD2\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD3\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD4\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"200\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cus039",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"100\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_smsSendList",this);_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTN_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_RESVE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_CN\" type=\"STRING\" size=\"256\"/><Column id=\"RCVER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_customerType",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">아파트분양</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">상가분양</Col></Row><Row><Col id=\"CODE_NM\">공공임대</Col><Col id=\"CODE\">3</Col></Row><Row><Col id=\"CODE_NM\">영구임대 (매입, 전세)</Col><Col id=\"CODE\">4</Col></Row><Row><Col id=\"CODE_NM\">토지</Col><Col id=\"CODE\">5</Col></Row><Row><Col id=\"CODE_NM\">홍보 및 마케팅</Col><Col id=\"CODE\">6</Col></Row><Row><Col id=\"CODE_NM\">기타</Col><Col id=\"CODE\">7</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","123","26","50","5",null,null,this.div_search);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cstmrNm","absolute","402","5","40","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_cstmrNm","absolute","447","5","110","21",null,null,this.div_search);_a.set_taborder("3");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cstmrGrad","absolute","203","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("고객등급");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cstmrGrad","absolute","272","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_cstmrGrad");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_text("전체");_a.set_index("0");_a=new Static("sta_cstmrSe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("고객구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cstmrSe","absolute","78","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_cstmrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sta_cstmrSe00","absolute","582","5","64","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("관심분야");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_customerType","absolute","645","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("9");_a.set_innerdataset("@ds_customerType");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_text("전체");_a.set_index("0");_a=new Static("Static01","absolute","0","0","15","32",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("4");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_cstmhrlList","absolute","0","9","130","19",null,null,this.div_work);_a.set_taborder("7");_a.set_text("고객목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_cstmrList","absolute","0","33",null,"300","0",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_cstmrList");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_cellsizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"고객명\"/><Cell col=\"3\" text=\"고객구분\"/><Cell col=\"4\" text=\"고객등급\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"이메일\"/><Cell col=\"7\" text=\"주소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:CSTMR_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CSTMR_SE\" combodataset=\"ds_cstmrSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:CSTMR_GRAD\" combodataset=\"ds_cstmrGrad\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:MBTLNO\" mask=\"expr:MBTLNO.length == 11 ? '@@@-@@@@-@@@@' : MBTLNO.length == 10 ? '@@@-@@@-@@@@' : MBTLNO.length == 9 ? '@@-@@@-@@@@' : ''\"/><Cell col=\"6\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:EMAIL\"/><Cell col=\"7\" style=\"align:left;padding:3 0 3 5;\" text=\"bind:ADRES\" wordwrap=\"char\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","28","1031","5",null,null,this.div_work);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","690","1031","10",null,null,this.div_work);_a.set_taborder("10");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_sendSMS","absolute",null,"9","66","19","30",null,this.div_work);_a.set_taborder("5");_a.set_text("문자발송");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"9","25","19","0",null,this.div_work);_a.set_taborder("0");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","-1","376","1031","10",null,null,this.div_work);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cstmhrlList00","absolute","0","385","130","19",null,null,this.div_work);_a.set_taborder("12");_a.set_text("메세지 발송내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","404","1031","5",null,null,this.div_work);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","343",null,"33","0",null,this.div_work);_a.set_taborder("14");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","123","26","50","5",null,null,this.div_work.div_search);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_work.div_search.addChild(_a.name,_a);_a=new Static("sta_cstmrNm","absolute","338","5","60","21",null,null,this.div_work.div_search);_a.set_taborder("16");_a.set_text("고객명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_work.div_search.addChild(_a.name,_a);_a=new Edit("edt_cstmrNm","absolute","391","5","110","21",null,null,this.div_work.div_search);_a.set_taborder("17");this.div_work.div_search.addChild(_a.name,_a);_a=new Static("sta_inqryknd03","absolute","15","5","64","21",null,null,this.div_work.div_search);_a.set_taborder("18");_a.set_text("발송일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_work.div_search.addChild(_a.name,_a);_a=new Calendar("cal_sdtDt","absolute","79","5","105","21",null,null,this.div_work.div_search);this.div_work.div_search.addChild(_a.name,_a);_a.set_taborder("19");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","184","5","21","21",null,null,this.div_work.div_search);_a.set_taborder("20");_a.set_text("~");_a.style.set_align("center middle");this.div_work.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDt","absolute","205","5","105","21",null,null,this.div_work.div_search);this.div_work.div_search.addChild(_a.name,_a);_a.set_taborder("21");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Edit("edt_cstmrNm00","absolute","584","5","110","21",null,null,this.div_work.div_search);_a.set_taborder("22");this.div_work.div_search.addChild(_a.name,_a);_a=new Static("sta_mbtlno","absolute","515","5","60","21",null,null,this.div_work.div_search);_a.set_taborder("23");_a.set_text("전화번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_work.div_search.addChild(_a.name,_a);_a=new Combo("cmb_srcManID","absolute","771","5","120","21",null,null,this.div_work.div_search);this.div_work.div_search.addChild(_a.name,_a);_a.set_taborder("24");_a.set_innerdataset("ds_cus039");_a.set_codecolumn("CODE_NM");_a.set_datacolumn("CODE_CN");_a=new Static("sta_EMPL_SE03","absolute","707","5","66","21",null,null,this.div_work.div_search);_a.set_taborder("25");_a.set_text("상담자");_a.set_cssclass("sta_WFSA_Label");this.div_work.div_search.addChild(_a.name,_a);_a=new Button("Button01","absolute","912","6","40","19",null,null,this.div_work.div_search);_a.set_taborder("26");_a.set_text("조회");_a.set_cssclass("btn_WF_Process");this.div_work.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","-1","333","1031","10",null,null,this.div_work);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_smsSendList","absolute","0","409",null,"275","0",null,this.div_work);_a.set_taborder("16");_a.set_binddataset("ds_smsSendList");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_cellsizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"555\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"고객명\"/><Cell col=\"2\" text=\"수신번호\"/><Cell col=\"3\" text=\"발신자\"/><Cell col=\"4\" text=\"발신일자\"/><Cell col=\"5\" text=\"발신내용\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RCVER_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RECPTN_TELNO\" mask=\"@@@-@@@@-@@@@\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:USER_NM\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:SNDNG_RESVE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" style=\"align:left;padding:3 0 3 5;\" text=\"bind:SNDNG_CN\" wordwrap=\"char\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_work.div_search,function(_b){_b.set_taborder("14");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_work.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("4");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CUS030104");_b.set_titletext("안내정보메시지발송관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.cmb_cstmrGrad","value","ds_cond","CSTMR_GRAD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.edt_cstmrNm","value","ds_cond","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_search.cmb_cstmrSe","value","ds_cond","CSTMR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_work.div_search.cal_sdtDt","value","ds_cond2","SDT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_work.div_search.cal_endDt","value","ds_cond2","END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_work.div_search.cmb_srcManID","value","ds_cond2","USER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_work.div_search.edt_cstmrNm","value","ds_cond2","RCVER_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.div_search.edt_cstmrNm00","value","ds_cond2","RECPTN_TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_customerType","value","ds_cond","CUSTOMER_TYPE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CUS030104.xfdl","lib::comInclude.xjs");this.addIncludeScript("CUS030104.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("CUS030104.xfdl","lib::comSms.xjs");this.registerScript("CUS030104.xfdl",function(){this.checkDs=[this.ds_cstmrList];this.CUS030104_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.CUS030104_onload=function(_a,_b){this.div_search.cmb_cstmrGrad.setFocus(true);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"SDT_DE",this.gfn_today().substring(0,6)+"01");this.ds_cond2.setColumn(0,"END_DE",this.gfn_today());this.ds_chrctrCnInfo.addRow();this.ds_chrctrCnInfo.setColumn(0,"REGISTER_ID",this.fn_getEmpnm());var _a=[["ds_cstmrSe","CUS020",1,""],["ds_indvdlTy","CUS025",1,"전체"],["ds_cstmrGrad","CUS021",1,"전체"],["ds_cus030","CUS030",1,""],["ds_cus039","CUS039",1,""]];var _b=function(_c,_d,_e){this.ds_cus030.filter("CODE == 'TEL'");this.ds_cus039.insertRow(0);this.ds_cus039.setColumn(0,"CODE_CN","전체");this.div_work.div_search.cmb_srcManID.set_index(0);var _f=this.ds_cus030.getColumn(0,"VAL0");this.ds_chrctrCnInfo.setColumn(0,"SEND_TEL_NO",_f);};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.fn_transaction("selectCstmrList");};this.div_work_btn_Attach_onclick=function(_a,_b){if(!this.gfn_checkValidation_NoUpdChk(this.ds_chrctrCnInfo,this.ds_validation)){return;}this.ds_smsClient1.clearData();var _c=this.ds_cstmrList.rowcount;for(var _u=0;_u<_c;_u++ ){var _d=this.ds_cstmrList.getColumn(_u,"CHK");if(_d=='1'){var _e=this.ds_cstmrList.getColumn(_u,"MBTLNO");if(!_e){this.gfn_message("info.처리불가","고객 연락처 정보가 존재하지 않습니다.");return;}var _f=this.ds_smsClient1.addRow();this.ds_smsClient1.setColumn(_f,"RECIPIENT_NUM",_e.replace('-',''));this.ds_smsClient1.setColumn(_f,"CHANGE_WORD5",this.ds_cstmrList.getColumn(_u,"CSTMR_NM"));}}var _g=this.ds_chrctrCnInfo.getColumn(0,"CHRCTR_CN");var _h=this.ds_chrctrCnInfo.getColumn(0,"SEND_TEL_NO");var _i=this.gfn_getDeptId();var _j=this.div_work.txt_chrctrCn.getLength("ascii");if(_j>80){var _k="2";}else{var _k="0";}var _l=_i;var _m=_h;var _n=_k;var _o=_g;var _p="";var _q="";var _r="";var _s="";var _t="";this.sms_MultiMessage(this,_l,_m,_n,_o,this.ds_smsClient1,_p,_q,_r,_s,_t);if(this.div_work.chk_saveCn.value==true){this.fn_transaction("chrctrCnC");}};this.fn_transaction=function(_a){switch(_a){case "selectCstmrList":var _b="hsco/mis/cus/CUS030104/selectCstmrList.do";var _c="input01=ds_cond";var _d="ds_cstmrList=output01";break;case "selectSmsSendList":var _b="hsco/mis/cus/CUS030104/selectSmsSendList.do";var _c="input01=ds_cond2";var _d="ds_smsSendList=output01";break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectCstmrList":this.fn_transaction("selectSmsSendList");break;case "selectSmsSendList":break;}}};this.div_work_grd_sndngCnList_oncellclick=function(_a,_b){var _c=this.ds_sndngCnList.getColumn(this.ds_sndngCnList.rowposition,"CHRCTR_CN");this.div_work.txt_chrctrCn.set_value(_c);};this.div_work_Button00_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grd_cstmrList,"CstmrList");};this.div_work_grd_cstmrList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else{this.gfn_gridSort(_a,_b);}};this.div_search_cmb_cstmrSe_ontextchanged=function(_a,_b){if(this.ds_cond.getColumn(0,"CSTMR_SE")=="09"){this.div_search.cmb_customerType.set_enable(true);}else{this.div_search.cmb_customerType.set_enable(false);}};this.div_work_btn_sendSMS_onclick=function(_a,_b){var _c=this.ds_cstmrList.rowposition;var _d=this.ds_cstmrList.getColumn(_c,"MBTLNO");var _e=this.ds_cstmrList.getColumn(_c,"CSTMR_NM");this.ds_smsList.clearData();for(var _i=0;_i<this.ds_cstmrList.rowcount;_i++ ){if(this.ds_cstmrList.getColumn(_i,"CHK")==1){if(!this.comUtils.isNullEmpty(_d)){var _f=this.ds_smsList.addRow();this.ds_smsList.setColumn(_f,"MBTLNO",this.ds_cstmrList.getColumn(_i,"MBTLNO"));this.ds_smsList.setColumn(_f,"NM",this.ds_cstmrList.getColumn(_i,"CSTMR_NM"));}}}var _g="테스트 문자 메세지 발송";var _h={CONTENT:_g,JOB_SE:"CUS",ds:this.ds_smsList};this.gfn_popup("COM010700_P01.xfdl",800,500,"SMS발송",_h,"com::COM010700_P01.xfdl","sms_callback");};this.sms_callback=function(){};this.div_work_div_search_onkeyup=function(_a,_b){if(_b.keycode==13){this.fn_search_sub();}};this.fn_search_sub=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_work.div_search.cal_sdtDt.value)&&this.comUtils.isNullEmpty(this.div_work.div_search.cal_endDt.value)){this.div_work.div_search.cal_sdtDt.setFocus();this.gfn_message("info.처리불가","검색일자를 입력해 주세요.");return false;}else{this.fn_transaction("selectSmsSendList");}};});this.on_initEvent=function(){this.ds_indvdlTy.addEventHandler("onrowposchanged",this.ds_indvdlTy_onrowposchanged,this);this.ds_smsList.addEventHandler("onrowposchanged",this.ds_lfsts_cntrct_onrowposchanged,this);this.ds_smsList.addEventHandler("oncolumnchanged",this.ds_lfsts_cntrct_oncolumnchanged,this);this.addEventHandler("onload",this.CUS030104_onload,this);this.addEventHandler("oninit",this.CUS030104_oninit,this);this.div_search.addEventHandler("onkeyup",this.div_search_onkeyup,this);this.div_search.Static01.addEventHandler("onclick",this.Static47_onclick,this);this.div_search.cmb_cstmrGrad.addEventHandler("onitemchanged",this.div_search_cmb_inqryKnd_onitemchanged,this);this.div_search.cmb_cstmrSe.addEventHandler("oncloseup",this.div_search_cmb_cstmrSe_ontextchanged,this);this.div_work.sta_cstmhrlList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_cstmrList.addEventHandler("onheadclick",this.div_work_grd_cstmrList_onheadclick,this);this.div_work.btn_sendSMS.addEventHandler("onclick",this.div_work_btn_sendSMS_onclick,this);this.div_work.Button00.addEventHandler("onclick",this.div_work_Button00_onclick,this);this.div_work.sta_cstmhrlList00.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.div_search.addEventHandler("onkeyup",this.div_search_onkeyup,this);this.div_work.div_search.Static01.addEventHandler("onclick",this.Static47_onclick,this);this.div_work.div_search.edt_cstmrNm.addEventHandler("onkeyup",this.div_work_div_search_onkeyup,this);this.div_work.div_search.cal_sdtDt.addEventHandler("onkeyup",this.div_work_div_search_onkeyup,this);this.div_work.div_search.cal_endDt.addEventHandler("onkeyup",this.div_work_div_search_onkeyup,this);this.div_work.div_search.edt_cstmrNm00.addEventHandler("onkeyup",this.div_work_div_search_onkeyup,this);this.div_work.div_search.cmb_srcManID.addEventHandler("onkeyup",this.div_work_div_search_onkeyup,this);this.div_work.div_search.Button01.addEventHandler("onclick",this.fn_search_sub,this);this.div_work.grd_smsSendList.addEventHandler("onheadclick",this.div_work_grd_cstmrList_onheadclick,this);};this.loadIncludeScript("CUS030104.xfdl");};})();