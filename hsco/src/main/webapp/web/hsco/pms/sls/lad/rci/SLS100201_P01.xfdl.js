﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS100201_P01");this.set_classname("SLS100201_P01");this.set_titletext("토지수납및소인처리");this._setFormPosition(0,0,800,600);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RCIV_DE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RCIV_DE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"REPAY_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_1\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladRcivPstmrkList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMTHD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OCR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PSTMRK_OPERT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTMRK_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"OPETR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_CO\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_PREV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_1\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_paymthd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bankCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_payCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_payOdr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">RCIV_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\"> 수납일자</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">LAD_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">토지코드</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">BLCK</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">블록코드</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">LOT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">롯트코드</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">LOT_TY</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">롯트타입</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">PAY_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부코드</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">PAY_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부구분</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">PAY_SN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부순번</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">RCIV_AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">수납금액</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">PAY_TMLMT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부기한</Col></Row><Row><Col id=\"compId\">ds_ladRcivPstmrkList</Col><Col id=\"colId\">PAYMTHD</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">입력방법</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladJobSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation04",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_ladRcivFaltList</Col><Col id=\"colId\">EXPNDTR_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">지급예정일자</Col></Row><Row><Col id=\"compId\">ds_ladRcivFaltList</Col><Col id=\"colId\">DPSTR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">예금주명</Col></Row><Row><Col id=\"compId\">ds_ladRcivFaltList</Col><Col id=\"colId\">BANK_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출금은행</Col></Row><Row><Col id=\"compId\">ds_ladRcivFaltList</Col><Col id=\"colId\">DEFRAY_ACNUTNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">출금계좌번호</Col></Row><Row><Col id=\"compId\">ds_ladRcivFaltList</Col><Col id=\"colId\">OVERRPAY_AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">과오납금액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_rcivDeFrSh</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">수납일자시작</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_rcivDeToSh</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">수납일자종료</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcivSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">정상</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">과오납</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">확인요망</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static63","absolute","0%","725",null,"10","0.19%",null,this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","0",null,null,"0","0",this);_a.set_taborder("27");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81",null,"33","15",null,this);_a.set_taborder("28");_a.set_cssclass("div_WFSA_Box");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0.89%","5",null,"21","90.93%",null,this.div_search);_a.set_taborder("107");_a.set_text("수납일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_rcivDeSh","absolute","25.8%","5",null,"21","61.17%",null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("108");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static10","absolute","23.37%","5",null,"21","74.97%",null,this.div_search);_a.set_taborder("109");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_rcivDeToSh","absolute","9.58%","5",null,"21","77.39%",null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("110");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static16","absolute","40.74%","5",null,"21","51.09%",null,this.div_search);_a.set_taborder("111");_a.set_text("토지코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ladCodeSh","absolute","49.17%","5",null,"21","33.59%",null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("112");_a.set_innerdataset("@ds_ladCodeSh");_a.set_codecolumn("LAD_CODE");_a.set_datacolumn("ALL_LAD_NM");_a.set_type("filter");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static17","absolute","68.2%","5",null,"21","25.54%",null,this.div_search);_a.set_taborder("113");_a.set_text("B.L.T");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_blckSh","absolute","579","5","50","21",null,null,this.div_search);_a.set_taborder("114");_a.set_lengthunit("utf8");_a.set_maxlength("3");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_lotSh","absolute","632","5","50","21",null,null,this.div_search);_a.set_taborder("115");_a.set_lengthunit("utf8");_a.set_maxlength("3");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_lotTySh","absolute","685","5","50","21",null,null,this.div_search);_a.set_taborder("116");_a.set_lengthunit("utf8");_a.set_maxlength("2");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_lttotRcivMdatList","absolute","15","332",null,null,"1.63%","15",this);_a.set_taborder("29");_a.set_binddataset("ds_ladRcivPstmrkList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"200\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처리\"/><Cell col=\"1\" text=\"토지코드\"/><Cell col=\"2\" text=\"B\"/><Cell col=\"3\" text=\"L\"/><Cell col=\"4\" text=\"T\"/><Cell col=\"5\" text=\"계약자명\"/><Cell col=\"6\" text=\"납부번호\"/><Cell col=\"7\" text=\"납부기한일\"/><Cell col=\"8\" text=\"수납일자\"/><Cell col=\"9\" text=\"납부방법\"/><Cell col=\"10\" text=\"수납은행\"/><Cell col=\"11\" text=\"수납금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CHANGE_SE\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:LAD_CODE\" combodataset=\"ds_ladCode\" combocodecol=\"LAD_CODE\" combodatacol=\"ALL_LAD_NM\"/><Cell col=\"2\" text=\"bind:BLCK\"/><Cell col=\"3\" text=\"bind:LOT\"/><Cell col=\"4\" text=\"bind:LOT_TY\"/><Cell col=\"5\" text=\"bind:CSTMR_NM\"/><Cell col=\"6\" text=\"bind:PAY_NO\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:PAYMTHD\" combodataset=\"ds_paymthd\" combocodecol=\"CODE\" combodatacol=\"ALL_CODE_NM\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:BANK_CODE\" combodataset=\"ds_bankCode\" combocodecol=\"CODE\" combodatacol=\"ALL_CODE_NM\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:RCIV_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","114",null,"10","2.63%",null,this);_a.set_taborder("30");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0%","135",null,"5","34%",null,this);_a.set_taborder("31");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","15","120",null,"21","87.88%",null,this);_a.set_taborder("32");_a.set_text("수입정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","15","128",null,null,"15","277",this);_a.set_taborder("33");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Div("div_detail","absolute","0%","12",null,"183","0%",null,this.Div00);_a.set_taborder("0");this.Div00.addChild(_a.name,_a);_a=new Static("Static45","absolute","0%","0",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("213");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","26",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("214");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","26","75","27",null,null,this.Div00.div_detail);_a.set_taborder("215");_a.set_text("토지코드");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Combo("cmb_ladCode","absolute","76","29","183","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("216");_a.set_innerdataset("@ds_ladCode");_a.set_codecolumn("LAD_CODE");_a.set_datacolumn("ALL_LAD_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_readonly("true");_a=new Static("Static03","absolute","0%","52",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("217");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static01","absolute","298","26","74","27",null,null,this.Div00.div_detail);_a.set_taborder("218");_a.set_text("B.L.T");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Edit("edt_blck","absolute","374","29","38","21",null,null,this.Div00.div_detail);_a.set_taborder("219");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");this.Div00.div_detail.addChild(_a.name,_a);_a=new Edit("edt_lot","absolute","413","29","37","21",null,null,this.Div00.div_detail);_a.set_taborder("220");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");this.Div00.div_detail.addChild(_a.name,_a);_a=new Edit("edt_lotTy","absolute","451","29","38","21",null,null,this.Div00.div_detail);_a.set_taborder("221");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static05","absolute","0%","78",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("224");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static07","absolute","0%","104",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("227");_a.set_cssclass("sta_WF_Labelbg");_a.set_text("(할부, 임대료, 분양만 적용) 기타는 [0]정상");_a.style.set_padding("1 8 0 200");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","104","75","27",null,null,this.Div00.div_detail);_a.set_taborder("228");_a.set_text("납부차수");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Combo("cmb_payOdr","absolute","76","107","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("229");_a.set_innerdataset("@ds_payOdr");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static09","absolute","0%","130",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("230");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","130","75","27",null,null,this.Div00.div_detail);_a.set_taborder("231");_a.set_text("수납금액");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new MaskEdit("mse_rcivAmount","absolute","76","133","115","21",null,null,this.Div00.div_detail);_a.set_taborder("232");_a.set_mask("999,999,999,999,999");_a.set_cssclass("msk_WF_Essential");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static12","absolute","0%","156",null,"27","0%",null,this.Div00.div_detail);_a.set_taborder("233");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","156","75","27",null,null,this.Div00.div_detail);_a.set_taborder("234");_a.set_text("납부기한");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Calendar("cal_payTmlmt","absolute","76","159","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("235");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("cal_rciv_de","absolute","76","3","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("236");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static55","absolute","0","0","75","27",null,null,this.Div00.div_detail);_a.set_taborder("237");_a.set_text("수납일자");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Combo("cmb_paymthd","absolute","374","133","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("238");_a.set_innerdataset("@ds_paymthd");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Combo("cmb_bankCode","absolute","374","159","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("239");_a.set_innerdataset("@ds_bankCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a=new Static("Static14","absolute","298","156","74","27",null,null,this.Div00.div_detail);_a.set_taborder("240");_a.set_text("납부은행");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static13","absolute","298","130","74","27",null,null,this.Div00.div_detail);_a.set_taborder("241");_a.set_text("입력방법");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Static("Static15","absolute","298","0","74","27",null,null,this.Div00.div_detail);_a.set_taborder("242");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Calendar("cal_rciv_de00","absolute","374","3","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("243");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static04","absolute","0","52","75","27",null,null,this.Div00.div_detail);_a.set_taborder("244");_a.set_text("납부코드");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Combo("cmb_payCode","absolute","76","55","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("245");_a.set_innerdataset("@ds_payCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static16","absolute","0","78","75","27",null,null,this.Div00.div_detail);_a.set_taborder("246");_a.set_text("납부구분");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Combo("cmb_payCode00","absolute","9.87%","81",null,"21","75.19%",null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("247");_a.set_innerdataset("@ds_paySe");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static17","absolute","298","52","74","27",null,null,this.Div00.div_detail);_a.set_taborder("248");_a.set_text("수납처리");_a.set_cssclass("sta_WF_Label");this.Div00.div_detail.addChild(_a.name,_a);_a=new Combo("cmb_payCode01","absolute","374","55","115","21",null,null,this.Div00.div_detail);this.Div00.div_detail.addChild(_a.name,_a);_a.set_taborder("249");_a.set_innerdataset("@ds_rcivSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static00","absolute","0%","322",null,"10","2.63%",null,this);_a.set_taborder("34");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0%","0",null,"34","0%",null,this);_a.set_taborder("35");_a.set_text("수납자료관리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","34",null,"15","1.75%",null,this);_a.set_taborder("36");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","98.13%","-1",null,"600","0%",null,this);_a.set_taborder("37");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","91.88%","51",null,"25","1.88%",null,this);_a.set_taborder("38");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button23","absolute","85.25%","51",null,"25","8.5%",null,this);_a.set_taborder("39");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","78.63%","51",null,"25","15.13%",null,this);_a.set_taborder("40");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","72%","51",null,"25","21.75%",null,this);_a.set_taborder("41");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","65.38%","51",null,"25","28.38%",null,this);_a.set_taborder("42");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","53",null,"21","74.88%",null,this);_a.set_taborder("43");_a.set_text("수납자료관리");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","2.13%","76",null,"5","1.88%",null,this);_a.set_taborder("44");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0.13%","7",null,"600","98.13%",null,this);_a.set_taborder("45");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("28");_b.set_cssclass("div_WFSA_Box");_b.set_visible("true");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,183,this.Div00.div_detail,function(_b){_b.set_taborder("0");});this.Div00.div_detail.addLayout(_a.name,_a);_a=new Layout("default","",770,195,this.Div00,function(_b){_b.set_taborder("33");_b.set_text("Div00");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){_b.set_classname("SLS100201_P01");_b.set_titletext("토지수납및소인처리");});this.addLayout(_a.name,_a);_a=new BindItem("item6","div_search01.chk_recptYn","value","ds_cond01","RCIV_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search01.cal_rcivDeSh","value","ds_cond01","RCIV_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Div00.div_detail.cal_rciv_de","value","ds_ladRcivPstmrkList","RCIV_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.div_detail.cmb_ladCode","value","ds_ladRcivPstmrkList","LAD_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div00.div_detail.edt_blck","value","ds_ladRcivPstmrkList","BLCK");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Div00.div_detail.edt_lot","value","ds_ladRcivPstmrkList","LOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Div00.div_detail.edt_lotTy","value","ds_ladRcivPstmrkList","LOT_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Div00.div_detail.cmb_payOdr","value","ds_ladRcivPstmrkList","PAY_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Div00.div_detail.mse_rcivAmount","value","ds_ladRcivPstmrkList","RCIV_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Div00.div_detail.cal_payTmlmt","value","ds_ladRcivPstmrkList","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Div00.div_detail.cmb_paymthd","value","ds_ladRcivPstmrkList","PAYMTHD");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Div00.div_detail.cmb_bankCode","value","ds_ladRcivPstmrkList","BANK_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.cal_rcivDeToSh","value","ds_cond00","RCIV_DE_FR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_search.cal_rcivDeSh","value","ds_cond00","RCIV_DE_TO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_search.cmb_ladCodeSh","value","ds_cond00","LAD_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_search.edt_blckSh","value","ds_cond00","BLCK");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_search.edt_lotSh","value","ds_cond00","LOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_search.edt_lotTySh","value","ds_cond00","LOT_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","Div00.div_detail.cal_rciv_de00","value","ds_ladRcivPstmrkList","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Div00.div_detail.cmb_payCode","value","ds_ladRcivPstmrkList","PAY_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","Div00.div_detail.cmb_payCode00","value","ds_ladRcivPstmrkList","PAY_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","Div00.div_detail.cmb_payCode01","value","ds_ladRcivPstmrkList","PROCESS_STTUS_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS100201_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS100201_P01.xfdl",function(){this.fv_objForm;this.SLS100201_P01_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS100201_P01_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_ladRcivPstmrkList.copyData(this.parent.arg_1);this.ds_cond00.setColumn(0,"RCIV_DE_FR",this.fv_objForm.div_search.cal_rcivDeSh.value);this.ds_cond00.setColumn(0,"RCIV_DE_TO",this.fv_objForm.div_search.cal_rcivDeSh00.value);this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[{OUT_PUT:"ds_paymthd",GRP_CODE:"LAD0A7",USE_AT:"1"},{OUT_PUT:"ds_bankCode",GRP_CODE:"COM021",USE_AT:"1"},{OUT_PUT:"ds_payCode",GRP_CODE:"LAD0A1",USE_AT:"1"},{OUT_PUT:"ds_paySe",GRP_CODE:"LAD0A8",USE_AT:"1"},{OUT_PUT:"ds_payOdr",GRP_CODE:"LAD0A9",USE_AT:"1"},{OUT_PUT:"ds_paySeList",GRP_CODE:"LAD0B5",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_a);var _b={};_b["UASE_AT"]="1";this.pmsUtil.getLadCodeList(_b,"ds_ladCodeSh");};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation00)){return;}this.pmsUtil.clearDataSet([this.ds_ladRcivPstmrkList]);this.fn_transaction("selectLadRcivPstmrkList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_ladRcivPstmrkList,this.ds_validation03)){return;}if(this.confirm("저장하시겠습니까?")){this.fn_transaction("saveLadRcivPstmrkList");}};this.fn_transaction=function(_a){switch(_a){case "selectLadRcivPstmrkList":var _b="hsco/pms/sls/lad/rci/SLS100201/selectLadRcivPstmrkList.do";var _c="input1=ds_cond00";var _d="ds_ladRcivPstmrkList=output1";break;case "saveLadRcivPstmrkList":var _b="hsco/pms/sls/lad/rci/SLS100201/saveLadRcivPstmrkList.do";var _c="input1=ds_ladRcivPstmrkList:U";var _d="";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_insert=function(_a,_b){var _c={arg_0:this,key:'2'};this.gfn_popup("popup1",900,600,"기타수입 관리",_c,"pms_sls_com::SLS000201.xfdl","fn_PopCallback");};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;var _f=null;switch(_a){case "selectCommonCode":break;case "ladCodeSh":this.ds_ladCode.copyData(this.ds_ladCodeSh);_f=this.div_search.cmb_ladCodeSh;_e={};_e["type"]=this.pmsUtil.PROMPT_ALL;_e["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(_f,_e);break;case "selectLadRcivPstmrkList":break;case "saveLadRcivPstmrkList":this.fn_search();break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.Button02_onclick=function(_a,_b){this.close();};this.ds_ladRcivPstmrkList_cancolumnchange=function(_a,_b){if(_b.columnid=="RCIV_DE"){var _c=_a.getColumn(_a.rowposition,"RCIV_DE");_a.setColumn(_a.rowposition,"RCIV_DE_PREV",_c);}};});this.on_initEvent=function(){this.ds_ladRcivPstmrkList.addEventHandler("onrowposchanged",this.ds_ladLcntrctrList_onrowposchanged,this);this.ds_ladRcivPstmrkList.addEventHandler("cancolumnchange",this.ds_ladRcivPstmrkList_cancolumnchange,this);this.addEventHandler("oninit",this.SLS100201_P01_oninit,this);this.addEventHandler("onload",this.SLS100201_P01_onload,this);this.Static07.addEventHandler("onclick",this.Static00_onclick,this);this.grd_lttotRcivMdatList.addEventHandler("oncellclick",this.Tab00_tabpage1_grd_hcntrctrPayList_oncellclick,this);this.grd_lttotRcivMdatList.addEventHandler("onheadclick",this.Tab00_tabpage1_grd_hcntrctrPayList_onheadclick,this);this.Static31.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Static30.addEventHandler("onclick",this.Static03_onclick,this);this.Div00.div_detail.Static07.addEventHandler("onclick",this.Div00_div_detail_Static07_onclick,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.Button23.addEventHandler("onclick",this.fn_save,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button04.addEventHandler("onclick",this.fn_insert,this);this.Button05.addEventHandler("onclick",this.fn_search,this);};this.loadIncludeScript("SLS100201_P01.xfdl");};})();