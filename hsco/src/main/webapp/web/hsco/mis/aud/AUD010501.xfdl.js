﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD010501");this.set_classname("AUD010501");this.set_titletext("감사공개관리");this._setFormPosition(0,0,1075,735);}_a=new Dataset("ds_aud034",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUDUT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"OTHBC_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_auditInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUDUT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_audit_knwldg</Col><Col id=\"colId\">OTHBC_TY</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공개유형</Col></Row><Row><Col id=\"compId\">ds_audit_knwldg</Col><Col id=\"colId\">KNWLDG_SJ</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지식제목</Col></Row><Row><Col id=\"compId\">ds_audit_knwldg</Col><Col id=\"colId\">KNWLDG_DLIV_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공개전달내용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rtn_1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_auditSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">내외부감사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">일상감사</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_audit_knwldg",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_KNWLDG_SN\" type=\"STRING\" size=\"10\"/><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"7\"/><Column id=\"AUDIT_INSTT\" type=\"STRING\" size=\"2\"/><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AUDIT_PLAN_NO\" type=\"STRING\" size=\"8\"/><Column id=\"AUDIT_PLAN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AUDUT_SE\" type=\"STRING\" size=\"2\"/><Column id=\"AUDIT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OTHBC_TY\" type=\"STRING\" size=\"2\"/><Column id=\"KNWLDG_SJ\" type=\"STRING\" size=\"100\"/><Column id=\"KNWLDG_DLIV_CN\" type=\"STRING\" size=\"200\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"10\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"10\"/><Column id=\"BOARD_IDX\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"BOARD_KIND_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condAud034",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_audit_knwldgHp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AUDIT_KNWLDG_SN\" type=\"STRING\" size=\"10\"/><Column id=\"AUDIT_NO\" type=\"STRING\" size=\"7\"/><Column id=\"AUDIT_INSTT\" type=\"STRING\" size=\"2\"/><Column id=\"AUDIT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AUDIT_PLAN_NO\" type=\"STRING\" size=\"8\"/><Column id=\"AUDIT_PLAN_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"AUDUT_SE\" type=\"STRING\" size=\"2\"/><Column id=\"AUDIT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OTHBC_TY\" type=\"STRING\" size=\"2\"/><Column id=\"KNWLDG_SJ\" type=\"STRING\" size=\"100\"/><Column id=\"KNWLDG_DLIV_CN\" type=\"STRING\" size=\"200\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"10\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"10\"/><Column id=\"BOARD_IDX\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"BOARD_KIND_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hpgBoard",this);_a._setContents("<ColumnInfo><Column id=\"BOARD_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"APP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2.02%","752",null,"13","1.44%",null,this.div_work);_a.set_taborder("14");_a.set_text("7");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_audit_knwldg","absolute","0","36",null,"264","430",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_audit_knwldg");_a.set_autofittype("none");_a.set_autoenter("select");_a.set_cellsizingtype("none");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"530\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"공표유형\"/><Cell col=\"2\" text=\"지식제목\"/><Cell col=\"3\" text=\"공개전달내용\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:OTHBC_TY\" wordwrap=\"char\" combodataset=\"ds_aud034\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:KNWLDG_SJ\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:KNWLDG_DLIV_CN\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_registHomepage","absolute",null,"10","86","21","0",null,this.div_work);_a.set_taborder("0");_a.set_text("홈페이지등록");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Static("sta_auditKnwldgList","absolute","0","11","100","19",null,null,this.div_work);_a.set_taborder("15");_a.set_text("감사공개목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("sta_auditKnwldg","absolute","0","307","100","19",null,null,this.div_work);_a.set_taborder("16");_a.set_text("감사공개내용");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","299","1031","10",null,null,this.div_work);_a.set_taborder("17");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","322","1031","5",null,null,this.div_work);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_othbcTy","absolute","0","327","100","27",null,null,this.div_work);_a.set_taborder("27");_a.set_text("공표구분");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static08","absolute","99","327","568","27",null,null,this.div_work);_a.set_taborder("28");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_othbcTy","absolute","102","330","200","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("7");_a.set_innerdataset("@ds_aud034");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_displayrowcount("8");_a=new Static("sta_knwldgSj","absolute","0","353","100","27",null,null,this.div_work);_a.set_taborder("29");_a.set_text("지식제목");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static09","absolute","99","353","568","27",null,null,this.div_work);_a.set_taborder("30");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_knwldgSj","absolute","102","356","562","21",null,null,this.div_work);_a.set_taborder("8");_a.set_cssclass("edt_WF_Essential");_a.set_maxlength("100");_a.set_lengthunit("utf8");this.div_work.addChild(_a.name,_a);_a=new Static("sta_knwldgDlivCn","absolute","0","379","100",null,null,"8",this.div_work);_a.set_taborder("31");_a.set_text("공개전달내용");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","99","379","568",null,null,"10",this.div_work);_a.set_taborder("32");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new TextArea("txt_knwldgDlivCn","absolute","102","382","562",null,null,"13",this.div_work);_a.set_taborder("9");_a.set_cssclass("txt_WF_Essential");_a.set_wordwrap("char");_a.set_maxlength("1000");_a.set_lengthunit("utf8");this.div_work.addChild(_a.name,_a);_a=new Static("Static23","absolute","810","346","240","5",null,null,this.div_work);_a.set_taborder("33");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_EDAY_AUDIT_LIST03","absolute","672","328","130","19",null,null,this.div_work);_a.set_taborder("35");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title03");_a.getSetter("titletext").set("내외부감사실시관리");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute","672","351","375",null,null,"10",this.div_work);_a.set_taborder("13");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" celltype=\"head\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_EXTSN\"/><Cell col=\"3\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute","962","327","85","19",null,null,this.div_work);_a.set_taborder("12");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute","891","327","68","19",null,null,this.div_work);_a.set_taborder("11");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute","821","327","67","19",null,null,this.div_work);_a.set_taborder("10");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Static("sta_auditKnwldgList00","absolute",null,"11","100","19","320",null,this.div_work);_a.set_taborder("39");_a.set_text("홈페이지목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","617","3","10","687",null,null,this.div_work);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_hpgBoard","absolute",null,"35","419","265","0%",null,this.div_work);_a.set_taborder("41");_a.set_binddataset("ds_hpgBoard");_a.set_enable("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"410\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/></Band><Band id=\"body\"><Cell style=\"align:left;padding:0 0 0 5;\" text=\"bind:BOARD_TITLE\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_AUDI_PLAN_YEAR","absolute","15","5","60","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("감사년도");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_auditNo","absolute","183","5","60","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("공표구분");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_auditNo","absolute","481","5","300","21",null,null,this.div_search);_a.set_taborder("1");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","82","5","85","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");_a.set_max("2050");_a.set_min("1950");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_auditSe","absolute","249","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("10");_a.set_text("전체");_a.set_innerdataset("ds_condAud034");_a.set_codecolumn("code");_a.set_datacolumn("CODE_NM");_a.set_index("0");_a=new Static("sta_auditSe","absolute","414","5","60","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("지식제목");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","33","1031","10",null,null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","64","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("0");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1075,735,this,function(_b){_b.set_classname("AUD010501");_b.set_titletext("감사공개관리");});this.addLayout(_a.name,_a);_a=new BindItem("item9","div_search.cmb_auditSe","value","ds_cond01","AUDUT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.cmb_othbcTy","value","ds_audit_knwldg","OTHBC_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.edt_knwldgSj","value","ds_audit_knwldg","KNWLDG_SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.txt_knwldgDlivCn","value","ds_audit_knwldg","KNWLDG_DLIV_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.spn_year","value","ds_cond01","AUDIT_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.edt_auditNo","value","ds_cond01","AUDIT_NO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("AUD010501.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD010501.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("AUD010501.xfdl","lib::comUpDownUtils.xjs");this.registerScript("AUD010501.xfdl",function(){this.checkDs=[this.ds_audit_knwldg];var _a= -1;this.File_UpDownManager=null;this.AUD010501_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.AUD010501_onload=function(_b,_c){this.div_search.spn_year.setFocus(true);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond01.clearData();this.ds_cond01.addRow();this.div_search.spn_year.set_value(this.gfn_today().substring(0,4));var _b=[["ds_condAud034","AUD034",1,"전체"],["ds_aud034","AUD034",1,""],];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){var _b={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","AUD");this.File_UpDownManager.init(_b);};this.fn_search=function(){this.fn_transaction("selectAuditKnwldgList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_audit_knwldg,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_audit_knwldg.rowposition;this.fn_transaction("AuditKnwldgListCUD");}};this.fn_transaction=function(_b){switch(_b){case "selectAuditKnwldgList":this.ds_audit_knwldg.clearData();this.ds_fileList.clearData();var _c="hsco/mis/aud/AUD010501/selectAuditKnwldgList.do";var _d="input01=ds_cond01";var _e="ds_audit_knwldg=output01";break;case "AuditKnwldgListCUD":var _c="hsco/mis/aud/AUD010501/AuditKnwldgListCUD.do";var _d="input03=ds_audit_knwldg:U";var _e="";break;case "selectAtchFile":this.div_work.grd_cmmnAtchmnfl.setCellProperty("head",0,"text","0");this.ds_fileList.clearData();this.ds_fileList.addRow();this.ds_fileList.setColumn(0,"FILE_SN",this.ds_audit_knwldg.getColumn(this.ds_audit_knwldg.rowposition,"ATCH_FILE"));var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_fileList";var _e="ds_fileList=output1";break;case "saveHpgCU":var _c="hsco/mis/aud/AUD010501/saveHpgCU.do";var _d="input04=ds_audit_knwldgHp:U";var _e="";break;case "selectHpgBoardList":var _c="hsco/mis/aud/AUD010501/selectHpgBoardList.do";var _d="input01=ds_cond01";var _e="ds_hpgBoard=output01";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){}else{switch(_b){case "selectAuditList":for(var _f=0;_f<this.ds_auditInfo.rowcount;_f++ ){if(_f==0){this.ds_audit_knwldg.setColumn(this.ds_audit_knwldg.rowposition,"AUDIT_NO",this.ds_auditInfo.getColumn(_f,"AUDIT_NO"));this.ds_audit_knwldg.setColumn(this.ds_audit_knwldg.rowposition,"AUDIT_SE",this.ds_auditInfo.getColumn(_f,"AUDIT_SE"));this.ds_audit_knwldg.setColumn(this.ds_audit_knwldg.rowposition,"AUDIT_NM",this.ds_auditInfo.getColumn(_f,"AUDIT_NM"));this.ds_audit_knwldg.setColumn(this.ds_audit_knwldg.rowposition,"AUDIT_INSTT",this.ds_auditInfo.getColumn(_f,"AUDIT_INSTT"));this.ds_audit_knwldg.setColumn(this.ds_audit_knwldg.rowposition,"AUDIT_YEAR",this.ds_auditInfo.getColumn(_f,"AUDIT_YEAR"));}else{var _e=this.ds_audit_knwldg.addRow();this.ds_audit_knwldg.setColumn(_e,"AUDIT_NO",this.ds_auditInfo.getColumn(_f,"AUDIT_NO"));this.ds_audit_knwldg.setColumn(_e,"AUDIT_SE",this.ds_auditInfo.getColumn(_f,"AUDIT_SE"));this.ds_audit_knwldg.setColumn(_e,"AUDIT_NM",this.ds_auditInfo.getColumn(_f,"AUDIT_NM"));this.ds_audit_knwldg.setColumn(_e,"AUDIT_INSTT",this.ds_auditInfo.getColumn(_f,"AUDIT_INSTT"));this.ds_audit_knwldg.setColumn(_e,"AUDIT_YEAR",this.ds_auditInfo.getColumn(_f,"AUDIT_YEAR"));}}break;case "AuditKnwldgListCUD":this.gfn_message("success.처리.성공");this.fn_transaction("selectAuditKnwldgList");break;case "selectAuditKnwldgList":if(this.ds_audit_knwldg.getRowCount()==0){this.div_work.btn_search.set_enable(false);}else{if(_a!= -1){this.ds_audit_knwldg.set_rowposition(_a);_a= -1;}}this.fn_transaction("selectHpgBoardList");break;case "saveHpgCU":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){var _b=this.ds_audit_knwldg.rowposition;this.ds_audit_knwldg.deleteRow(_b);}};this.fn_cancel=function(){if(!this.comUtils.isDatasetUpdated(this.ds_audit_knwldg)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_audit_knwldg.reset();this.ds_audit_knwldg.applyChange();return;}}};this.ds_audit_knwldg_onrowposchanged=function(_b,_c){var _d=this.ds_audit_knwldg.rowposition;if(!this.comUtils.isNull(this.ds_audit_knwldg.getColumn(_d,"BOARD_IDX"))){this.div_work.btn_registHomepage.set_enable(false);}else{this.div_work.btn_registHomepage.set_enable(true);}if(this.comUtils.isNotNull(this.ds_audit_knwldg.getColumn(this.ds_audit_knwldg.rowposition,"REGIST_DT"))){this.fn_transaction("selectAtchFile");}else{this.ds_fileList.clearData();}};this.fn_insert=function(){var _b=this.ds_audit_knwldg.addRow();this.ds_audit_knwldg.setColumn(_b,"AUDIT_YEAR",this.ds_cond01.getColumn(0,"AUDIT_YEAR"));};this.fn_popupAfter2=function(_b,_c){if(_b=="Popup1"){this.ds_rtn_1.clearData();this.ds_rtn_1.loadXML(_c);if(this.ds_rtn_1.rowcount!=0){var _d=this.ds_audit_knwldg.addRow();;this.ds_audit_knwldg.setColumn(_d,"AUDIT_NO",this.ds_rtn_1.getColumn(this.ds_rtn_1.rowposition,"AUDIT_NO"));this.ds_audit_knwldg.setColumn(_d,"AUDIT_YEAR",this.ds_rtn_1.getColumn(this.ds_rtn_1.rowposition,"AUDIT_YEAR"));this.ds_audit_knwldg.setColumn(_d,"AUDIT_SE",this.ds_rtn_1.getColumn(this.ds_rtn_1.rowposition,"AUDIT_SE"));this.ds_audit_knwldg.setColumn(_d,"AUDIT_INSTT",this.ds_rtn_1.getColumn(this.ds_rtn_1.rowposition,"AUDIT_INSTT"));this.ds_audit_knwldg.setColumn(_d,"AUDIT_NM",this.ds_rtn_1.getColumn(this.ds_rtn_1.rowposition,"AUDIT_NM"));}}};this.btn_delFiles_onclick=function(_b,_c){var _d=this.ds_fileList.findRow("CHK","1");if(_d<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _j=this.ds_fileList.getRowCount()-1;_j>=0;_j-- ){var _e=this.ds_fileList.getColumn(_j,"CHK");if(_e=='1'){this.ds_fileList.deleteRow(_j);}}var _f="deleteFile";var _g="hsco/cmm/file/deleteFile.do";var _h="input1=ds_fileList:U";var _i="ds_fileList=output1";Ex.core.tran(this,_f,_g,_h,_i);};this.btn_uploadFiles_onclick=function(_b,_c){this.fn_autoFileSn("MIS","AUD",this.File_UpDownManager,this.ds_fileList,this.ds_audit_knwldg,"TBAUD_AUDIT_KNWLDG","ATCH_FILE",["AUDIT_KNWLDG_SN","AUDIT_NO","AUDIT_YEAR"]);};this.btn_downFiles_onclick=function(_b,_c){var _d=this.ds_fileList.findRow("CHK","1");if(_d<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _i=0;_i<this.ds_fileList.getRowCount();_i++ ){var _e=this.ds_fileList.getColumn(_i,"FILE_SN");var _f=this.ds_fileList.getColumn(_i,"FILE_ORDR");var _g=this.ds_fileList.getColumn(_i,"ORGINL_FILE_NM");var _h=this.ds_fileList.getColumn(_i,"CHK");if(_h=='1'){this.File_UpDownManager.download(_e,_f,_g);}}};this.grd_cmmnAtchmnfl_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};this.div_work_btn_registHomepage_onclick=function(_b,_c){var _d=this.ds_audit_knwldg.rowposition;if(!this.comUtils.isNull(this.ds_audit_knwldg.getColumn(_d,"BOARD_IDX"))){this.gfn_message("info.처리불가","이미 홈페이지 등록되어 있습니다.");return false;}if(this.gfn_message("confirm.등록여부")){var _e=this.ds_audit_knwldgHp.addRow();this.ds_audit_knwldgHp.copyRow(_e,this.ds_audit_knwldg,_d);this.ds_audit_knwldgHp.setColumn(_e,"BOARD_KIND_NM",this.div_work.cmb_othbcTy.text);this.fn_transaction("saveHpgCU");}};this.div_work_cmb_othbcTy_onitemchanged=function(_b,_c){this.ds_audit_knwldg.setColumn(this.ds_audit_knwldg.rowposition,"BOARD_KIND_NM",_b.text);};});this.on_initEvent=function(){this.ds_audit_knwldg.addEventHandler("onrowposchanged",this.ds_audit_knwldg_onrowposchanged,this);this.ds_audit_knwldgHp.addEventHandler("onrowposchanged",this.ds_audit_knwldg_onrowposchanged,this);this.addEventHandler("oninit",this.AUD010501_oninit,this);this.addEventHandler("onload",this.AUD010501_onload,this);this.div_work.btn_registHomepage.addEventHandler("onclick",this.div_work_btn_registHomepage_onclick,this);this.div_work.sta_auditKnwldgList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.sta_auditKnwldg.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.cmb_othbcTy.addEventHandler("onitemchanged",this.div_work_cmb_othbcTy_onitemchanged,this);this.div_work.sta_EDAY_AUDIT_LIST03.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);this.div_work.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.div_work.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.div_work.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.div_work.sta_auditKnwldgList00.addEventHandler("onclick",this.Static00_onclick,this);this.div_search.addEventHandler("onkeyup",this.div_search_onkeyup,this);};this.loadIncludeScript("AUD010501.xfdl");};})();