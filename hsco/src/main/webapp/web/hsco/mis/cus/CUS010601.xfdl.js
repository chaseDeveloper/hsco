﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS010601");this.set_classname("CUS010601");this.set_titletext("홍보고객관리");this._setFormPosition(0,0,1059,700);}_a=new Dataset("ds_prCstmrList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"MSCMNC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OXPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPRSNT_TLPHON\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"HMPG\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER_CTTPC\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER_RSPOFC\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGER_BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MSCMNC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OXPR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sndngCnList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHRCTR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mscmncSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_chrctrCnInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHRCTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">MSCMNC_SE</Col><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"msgId\">언론구분</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/></Row><Row><Col id=\"colId\">OXPR_NM</Col><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"msgId\">언론사명</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/></Row><Row><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"colId\">REPRSNT_TLPHON</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">대표전화</Col><Col id=\"nlength\">11</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"colId\">ADRES</Col><Col id=\"nlength\">200</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">주소</Col></Row><Row><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"colId\">FAX</Col><Col id=\"nlength\">11</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">팩스</Col></Row><Row><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"colId\">HMPG</Col><Col id=\"nlength\">30</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">홈페이지</Col></Row><Row><Col id=\"colId\">CHARGER_NM</Col><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"msgId\">담당자명</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"colId\">CHARGER_CTTPC</Col><Col id=\"nlength\">11</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">연락처</Col></Row><Row><Col id=\"compId\">ds_prCstmrList</Col><Col id=\"colId\">CHARGER_EMAIL</Col><Col id=\"nlength\">50</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">이메일</Col></Row><Row><Col id=\"compId\">ds_chrctrCnInfo</Col><Col id=\"colId\">SEND_TEL_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">발신번호</Col></Row><Row><Col id=\"compId\">ds_chrctrCnInfo</Col><Col id=\"colId\">CHRCTR_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">문자내용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_excelExport",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_mscmncSeSearch",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sms",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RECIPIENT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_WORD5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RECIPIENT_NUM\">010</Col><Col id=\"CHANGE_WORD5\">이동석</Col></Row><Row><Col id=\"RECIPIENT_NUM\">019</Col><Col id=\"CHANGE_WORD5\">정윤원</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_session",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"LXTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_smsList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MBTLNO\" type=\"STRING\" size=\"12\"/><Column id=\"NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD0\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD1\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD2\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD3\" type=\"STRING\" size=\"200\"/><Column id=\"CHANGE_WORD4\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"200\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"200\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_oxprNm","absolute","202","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("언론사명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_mscmncSe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("언론구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","123","26","50","5",null,null,this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_oxprNm","absolute","271","5","250","21",null,null,this.div_search);_a.set_taborder("2");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_mscmncSe","absolute","77","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_mscmncSeSearch");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Static("Static01","absolute","0","0","15","32",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1025","0","21","448",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","19","446","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","3",this);_a.set_taborder("4");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_prCstmrList","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("8");_a.set_text("홍보고객목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_prCstmrList","absolute","0","34",null,null,"0","10",this.div_work);_a.set_taborder("2");_a.set_binddataset("ds_prCstmrList");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_autosizingtype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"언론구분\" combodataset=\"ds_mscmncSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"언론사명\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"대표전화\"/><Cell col=\"5\" text=\"주소\"/><Cell col=\"6\" text=\"팩스\"/><Cell col=\"7\" text=\"홈페이지\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"담당자명\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"연락처\"/><Cell col=\"10\" text=\"이메일\"/><Cell col=\"11\" text=\"직책\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MSCMNC_SE\" combodataset=\"ds_mscmncSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" edittype=\"normal\" style=\"padding: ;\" text=\"bind:OXPR_NM\"/><Cell col=\"4\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:REPRSNT_TLPHON\" mask=\"expr:REPRSNT_TLPHON.length == 11 ? '@@@-@@@@-@@@@' : REPRSNT_TLPHON.length == 10 ? '@@@-@@@-@@@@' : REPRSNT_TLPHON.length == 9 ? '@@-@@@-@@@@' : REPRSNT_TLPHON.length == 8 ? '@@@@-@@@@' : ''\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:ADRES\" tooltiptext=\"bind:ADRES\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" editfilter=\"number\" text=\"bind:FAX\" mask=\"expr:FAX.length == 11 ? '@@@-@@@@-@@@@' : FAX.length == 10 ? '@@@-@@@-@@@@' : FAX.length == 9 ? '@@-@@@-@@@@' : ''\" tooltiptext=\"bind:FAX\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:HMPG\" tooltiptext=\"bind:HMPG\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:CHARGER_NM\" tooltiptext=\"bind:CHARGER_NM\"/><Cell col=\"9\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:CHARGER_CTTPC\" mask=\"expr:CHARGER_CTTPC.length == 11 ? '@@@-@@@@-@@@@' : CHARGER_CTTPC.length == 10 ? '@@@-@@@-@@@@' : CHARGER_CTTPC.length == 9 ? '@@-@@@-@@@@' : CHARGER_CTTPC.length == 8 ? '@@@@-@@@@' : ''\" tooltiptext=\"bind:CHARGER_CTTPC\"/><Cell col=\"10\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:CHARGER_EMAIL\" tooltiptext=\"bind:CHARGER_EMAIL\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:CHARGER_RSPOFC\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","652","1031","10",null,null,this.div_work);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"10","25","19","1",null,this.div_work);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Button("Button01","absolute",null,"10","25","19","31",null,this.div_work);_a.set_taborder("0");_a.set_cssclass("btn_WF_Gridexcelup");this.div_work.addChild(_a.name,_a);_a=new Button("btn_SMSPop","absolute",null,"10","105","19","61",null,this.div_work);_a.set_taborder("12");_a.set_text("문자메세지");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_excel","absolute","109","622",null,"228","496",null,this);_a.set_taborder("5");_a.set_binddataset("ds_prCstmrList");_a.set_autoenter("select");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"11\" style=\"font:bold 24 맑은 고딕;\" text=\"홍보고객관리\"/><Cell row=\"1\" text=\"순번\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"언론구분\" combodataset=\"ds_mscmncSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"언론사명\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"대표전화\"/><Cell row=\"1\" col=\"4\" text=\"주소\"/><Cell row=\"1\" col=\"5\" text=\"팩스\"/><Cell row=\"1\" col=\"6\" text=\"홈페이지\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"담당자명\"/><Cell row=\"1\" col=\"8\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"연락처\"/><Cell row=\"1\" col=\"9\" text=\"이메일\"/><Cell row=\"1\" col=\"10\" text=\"직책\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MSCMNC_SE\" combodataset=\"ds_mscmncSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" edittype=\"normal\" style=\"padding: ;\" text=\"bind:OXPR_NM\"/><Cell col=\"3\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:REPRSNT_TLPHON\" mask=\"expr:REPRSNT_TLPHON.length == 11 ? '@@@-@@@@-@@@@' : REPRSNT_TLPHON.length == 10 ? '@@@-@@@-@@@@' : REPRSNT_TLPHON.length == 9 ? '@@-@@@-@@@@' : ''\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:ADRES\" tooltiptext=\"bind:ADRES\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" editfilter=\"number\" text=\"bind:FAX\" mask=\"expr:FAX.length == 11 ? '@@@-@@@@-@@@@' : FAX.length == 10 ? '@@@-@@@-@@@@' : FAX.length == 9 ? '@@-@@@-@@@@' : ''\" tooltiptext=\"bind:FAX\"/><Cell col=\"6\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:HMPG\" tooltiptext=\"bind:HMPG\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:CHARGER_NM\" tooltiptext=\"bind:CHARGER_NM\"/><Cell col=\"8\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:CHARGER_CTTPC\" mask=\"expr:CHARGER_CTTPC.length == 11 ? '@@@-@@@@-@@@@' : CHARGER_CTTPC.length == 10 ? '@@@-@@@-@@@@' : CHARGER_CTTPC.length == 9 ? '@@-@@@-@@@@' : ''\" tooltiptext=\"bind:CHARGER_CTTPC\"/><Cell col=\"9\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:CHARGER_EMAIL\" tooltiptext=\"bind:CHARGER_EMAIL\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:CHARGER_RSPOFC\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("4");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,700,this,function(_b){_b.set_classname("CUS010601");_b.set_titletext("홍보고객관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_mscmncSe","value","ds_cond","MSCMNC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_oxprNm","value","ds_cond","OXPR_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CUS010601.xfdl","lib::comInclude.xjs");this.addIncludeScript("CUS010601.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("CUS010601.xfdl","lib::comSms.xjs");this.registerScript("CUS010601.xfdl",function(){this.checkDs=[this.ds_prCstmrList];var _a= -1;this.CUS010601_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.CUS010601_onload=function(_b,_c){this.div_search.cmb_mscmncSe.setFocus(true);var _d=[["ds_mscmncSeSearch","CUS061",1,"전체"],["ds_mscmncSe","CUS061",1,""],];var _e=function(_f,_g,_h){this.fn_userInfo();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_userInfo=function(){this.ds_cond01.clearData();this.ds_cond01.addRow();this.ds_cond01.setColumn(0,"EMPNO",application.gds_userInfo.getColumn(0,"EMPNO"));this.fn_transaction("selectUserInfo");};this.fn_search=function(){this.fn_transaction("selectPrCstmrList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_prCstmrList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_prCstmrList.rowposition;this.fn_transaction("prCstmrListCUD");}};this.fn_transaction=function(_b){switch(_b){case "selectUserInfo":var _c="hsco/mis/cus/CUS000000/selectUserInfo.do";var _d="input01=ds_cond01";var _e="ds_session=output01";break;case "selectPrCstmrList":var _c="hsco/mis/cus/CUS010601/selectPrCstmrList.do";var _d="input01=ds_cond";var _e="ds_prCstmrList=output01";break;case "prCstmrListCUD":var _c="hsco/mis/cus/CUS010601/prCstmrListCUD.do";var _d="input02=ds_prCstmrList:U";var _e="";break;case "selectSndngCnList":this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"CHRCTR_SE","03");var _c="hsco/mis/cus/CUS010104/selectSndngCnList.do";var _d="input01=ds_cond2";var _e="ds_sndngCnList=output01";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "selectUserInfo":var _e=this.ds_session.getColumn(0,"TELNO_1");this.ds_chrctrCnInfo.clearData();this.ds_chrctrCnInfo.addRow();this.ds_chrctrCnInfo.setColumn(0,"SEND_TEL_NO",_e);this.fn_search();break;case "selectPrCstmrList":if(_a!= -1){this.ds_prCstmrList.set_rowposition(_a);_a= -1;}this.fn_transaction("selectSndngCnList");this.div_work.grd_prCstmrList.setCellProperty("Head",0,"text","0");break;case "prCstmrListCUD":this.fn_search();break;}}};this.fn_insert=function(){var _b=this.ds_prCstmrList.addRow();this.ds_prCstmrList.setColumn(_b,"WRITNG_DE",this.gfn_today());};this.fn_delete=function(){var _b=this.ds_prCstmrList.rowcount;var _c=0;for(var _d=_b;_d>=0;_d-- ){if(this.ds_prCstmrList.getColumn(_d,"CHK")=="1"){_c=_c+1;}}if(_c<1){this.gfn_message("comm.데이터.선택.없음");}else{if(this.gfn_message("confirm.삭제여부")){for(var _d=_b;_d>=0;_d-- ){if(this.ds_prCstmrList.getColumn(_d,"CHK")=="1"){this.ds_prCstmrList.deleteRow(_d);}}}}this.div_work.grd_prCstmrList.setCellProperty("Head",0,"text","0");};this.fn_cancel=function(){if(!this.comUtils.isDatasetUpdated(this.ds_prCstmrList)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_prCstmrList.reset();this.ds_prCstmrList.applyChange();return;}}};this.div_work_grd_prCstmrList_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};this.div_work_Button01_onclick=function(_b,_c){this.ds_prCstmrList.clearData();var _d={targetDs:this.ds_excelExport,headSet:false,callBack:function(){if(this.ds_excelExport.rowcount>1){var _e=this.ds_excelExport.getRowCount();for(i=1;i<_e;i++ ){this.ds_prCstmrList.addRow();if(this.ds_excelExport.getColumn(i,"Column1").substring(0,2)=="중앙"){this.ds_prCstmrList.setColumn(i-1,"MSCMNC_SE",1);}else if(this.ds_excelExport.getColumn(i,"Column1").substring(0,2)=="지방"){this.ds_prCstmrList.setColumn(i-1,"MSCMNC_SE",2);}else{this.ds_prCstmrList.setColumn(i-1,"MSCMNC_SE","");}this.ds_prCstmrList.setColumn(i-1,"OXPR_NM",this.ds_excelExport.getColumn(i,"Column2"));this.ds_prCstmrList.setColumn(i-1,"REPRSNT_TLPHON",this.comUtils.isNullEmpty(this.ds_excelExport.getColumn(i,"Column3"))?"":this.ds_excelExport.getColumn(i,"Column3").replace(/-/g,""));this.ds_prCstmrList.setColumn(i-1,"ADRES",this.ds_excelExport.getColumn(i,"Column4"));this.ds_prCstmrList.setColumn(i-1,"FAX",this.comUtils.isNullEmpty(this.ds_excelExport.getColumn(i,"Column5"))?"":this.ds_excelExport.getColumn(i,"Column5").replace(/-/g,""));this.ds_prCstmrList.setColumn(i-1,"HMPG",this.ds_excelExport.getColumn(i,"Column6"));this.ds_prCstmrList.setColumn(i-1,"CHARGER_NM",this.ds_excelExport.getColumn(i,"Column7"));this.ds_prCstmrList.setColumn(i-1,"CHARGER_CTTPC",this.comUtils.isNullEmpty(this.ds_excelExport.getColumn(i,"Column8"))?"":this.ds_excelExport.getColumn(i,"Column8").replace(/-/g,""));this.ds_prCstmrList.setColumn(i-1,"CHARGER_EMAIL",this.ds_excelExport.getColumn(i,"Column9"));this.ds_prCstmrList.setColumn(i-1,"CHARGER_RSPOFC",this.ds_excelExport.getColumn(i,"Column10"));this.ds_prCstmrList.setRowType(i-1,"I");}}}};this.gfn_importExcel(_d);};this.div_work_Button00_onclick=function(_b,_c){this.gfn_exportExcel(this.grd_excel,"prCstmrList");};this.div_work_btn_SMSPop_onclick=function(_b,_c){var _d=this.ds_prCstmrList.rowposition;var _e=this.ds_prCstmrList.getColumn(_d,"CHARGER_CTTPC");var _f=this.ds_prCstmrList.getColumn(_d,"CHARGER_NM");this.ds_smsList.clearData();if(!this.comUtils.isNullEmpty(_e)){var _g=this.ds_smsList.addRow();this.ds_smsList.setColumn(_g,"MBTLNO",_e);this.ds_smsList.setColumn(_g,"NM",_f);}var _h="테스트 문자 메세지 발송";var _i={CONTENT:_h,JOB_SE:"CUS",ds:this.ds_smsList};this.gfn_popup("COM010700_P01.xfdl",800,500,"SMS발송",_i,"com::COM010700_P01.xfdl","sms_callback");};this.sms_callback=function(){};});this.on_initEvent=function(){this.ds_smsList.addEventHandler("onrowposchanged",this.ds_lfsts_cntrct_onrowposchanged,this);this.ds_smsList.addEventHandler("oncolumnchanged",this.ds_lfsts_cntrct_oncolumnchanged,this);this.addEventHandler("oninit",this.CUS010601_oninit,this);this.addEventHandler("onload",this.CUS010601_onload,this);this.div_search.Static01.addEventHandler("onclick",this.Static47_onclick,this);this.div_search.cmb_mscmncSe.addEventHandler("onitemchanged",this.div_search_cmb_inqryKnd_onitemchanged,this);this.div_work.sta_prCstmrList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_prCstmrList.addEventHandler("onheadclick",this.div_work_grd_prCstmrList_onheadclick,this);this.div_work.Button00.addEventHandler("onclick",this.div_work_Button00_onclick,this);this.div_work.Button01.addEventHandler("onclick",this.div_work_Button01_onclick,this);this.div_work.btn_SMSPop.addEventHandler("onclick",this.div_work_btn_SMSPop_onclick,this);this.grd_excel.addEventHandler("onheadclick",this.div_work_grd_prCstmrList_onheadclick,this);};this.loadIncludeScript("CUS010601.xfdl");};})();