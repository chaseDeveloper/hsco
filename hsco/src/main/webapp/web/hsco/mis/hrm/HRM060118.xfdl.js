﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060118");this.set_classname("");this.set_titletext("근무평정조견표");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">spn_evalYear</Col><Col id=\"msgId\">평가년도</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_odrSe</Col><Col id=\"msgId\">구분</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">cmb_orgnztSe</Col><Col id=\"compId\">div_search</Col><Col id=\"PK\">Y</Col><Col id=\"msgId\">조직</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_appSe</Col><Col id=\"msgId\">적용범위</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("false");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_applcAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">적용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미적용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_getClosAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_viewList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"WGHTVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_kpiListMst",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IX_SE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_IX_VER\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_SCOPE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CHARCT\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"IX_ATRB\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_VALUE_MANAGE_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_INPUT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCP_RSLT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/><Column id=\"CORE_IX_MANAGE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SM_IX\" type=\"STRING\" size=\"256\"/><Column id=\"IX_MNGR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"IX_MANAGE_PD_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_MANAGE_PD_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"ACHIV_RT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/><Column id=\"MXMM_EVL_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"MUMM_EVL_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_DFN\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_REFRN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REFRN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"UN_USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"UN_MOTV_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDtl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_kpiListDtl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWPOINT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNZT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WGHTVAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOALVAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REFER_VAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_SCOPE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"IX_ATRB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curOdrInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gubun01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gubun02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");_a.style.set_background("#00000000");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("sta_BGN_DT00","absolute","102.37%","180","84","27",null,null,this.div_work);_a.set_taborder("1");_a.set_text("전략목표 ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DCLZ_SE00","absolute","102.37%","152","84","27",null,null,this.div_work);_a.set_taborder("2");_a.set_text("관점 ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE00","absolute","102.37%","208","84","27",null,null,this.div_work);_a.set_taborder("3");_a.set_text("CSF ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE01","absolute","102.37%","236","84","27",null,null,this.div_work);_a.set_taborder("4");_a.set_text("KPI ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Grid("ACH020302","absolute","103.22%","343",null,"635","-468",null,this.div_work);_a.set_taborder("5");_a.set_binddataset("ds_asignList");_a.set_autofittype("col");_a.getSetter("titletext").set("기본구조관리");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"209\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직코드\"/><Cell col=\"2\" text=\"조직명\"/><Cell col=\"3\" text=\"배정유무\"/></Band><Band id=\"body\"><Cell style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" expr=\"expr:currow + 1\"/><Cell col=\"1\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ORGNZT_CODE\"/><Cell col=\"2\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ORGNZT_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ASIGN_AT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Tab("tab_dtl","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");_a.set_preload("true");this.div_work.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.div_work.tab_dtl);_a.set_text("기준자료등록(평정자)");_a.set_url("mis_hrm::HRM060118_T1.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.div_work.tab_dtl);_a.set_text("조견표(평정자)");_a.set_url("mis_hrm::HRM060118_T2.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.div_work.tab_dtl);_a.set_text("등급기준등록(확인/조정자)");_a.set_url("mis_hrm::HRM060118_T3.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Tabpage("tabpage4",this.div_work.tab_dtl);_a.set_text("등급기준배분현황(확인/조정자)");_a.set_url("mis_hrm::HRM060118_T4.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_deva_year","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("평정년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_devaYear","absolute","79","5","65","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("1900");_a.set_max("2999");_a.set_min("1900");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("sta_odrSe","absolute","157","5","38","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","195","5","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_enableevent("true");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_gubun01");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Static("sta_odrSe00","absolute","326","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("평정대상");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_trgetSe","absolute","390","5","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_gubun02");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","496","28","38","5",null,null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","142","0","15","31",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","311","0","15","31",null,null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.style.set_background("#00000000");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1019,73,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("근무평정조견표");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","div_search.spn_devaYear","value","ds_cond","DEVA_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","div_search.cmb_odrSe","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_search.cmb_trgetSe","value","ds_cond","TRGET_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","mis_hrm::HRM060118_T1.xfdl");this._addPreloadList("fdl","mis_hrm::HRM060118_T2.xfdl");this._addPreloadList("fdl","mis_hrm::HRM060118_T3.xfdl");this._addPreloadList("fdl","mis_hrm::HRM060118_T4.xfdl");};this.addIncludeScript("HRM060118.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM060118.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM060118.xfdl",function(){this.sClosAt="";this.nRowPos=0;this.HRM060118_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM060118_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_current=function(){this.ds_curOdrInfo.clearData();this.fn_transaction("selectCurDevaOdrInfo");};this.fn_loadCombo=function(){var _a=[["ds_gubun01","_HRM223","1",""],["ds_gubun02","_HRM225","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.fn_init_current();};this.fn_search=function(){var _a=new Array();_a[0]=this.ds_cond.getColumn(0,"DEVA_YEAR");_a[1]=this.ds_cond.getColumn(0,"ODR_SE");_a[2]=this.ds_cond.getColumn(0,"TRGET_SE");trace("sParams[0] : "+_a[0]+" sParams[1] : "+_a[1]+" sParams[2] :: "+_a[2]);if(this.div_work.tab_dtl.tabindex==0){this.div_work.tab_dtl.tabpage1.fn_tab_cond(_a);this.div_work.tab_dtl.tabpage1.fn_search();}else if(this.div_work.tab_dtl.tabindex==1){this.div_work.tab_dtl.tabpage2.fn_tab_cond(_a);this.div_work.tab_dtl.tabpage2.fn_search();}else if(this.div_work.tab_dtl.tabindex==2){this.div_work.tab_dtl.tabpage3.fn_tab_cond(_a);this.div_work.tab_dtl.tabpage3.fn_search();}else if(this.div_work.tab_dtl.tabindex==3){this.div_work.tab_dtl.tabpage4.fn_tab_cond(_a);this.div_work.tab_dtl.tabpage4.fn_search();}};this.fn_save=function(){this.fn_tab_save();};this.fn_transaction=function(_a){switch(_a){case "selectCurDevaOdrInfo":var _b="hsco/mis/hrm/HRMCommon/selectCurDevaOdrInfo.do";var _c="";var _d="ds_curOdrInfo=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectCurDevaOdrInfo":this.fn_setCurOdrInfo();break;}}};this.fn_cancel=function(){if(this.div_work.tab_dtl.tabindex==0){this.div_work.tab_dtl.tabpage1.fn_cancel();}else if(this.div_work.tab_dtl.tabindex==1){this.div_work.tab_dtl.tabpage2.fn_cancel();}else if(this.div_work.tab_dtl.tabindex==2){this.div_work.tab_dtl.tabpage3.fn_cancel();}else if(this.div_work.tab_dtl.tabindex==3){this.div_work.tab_dtl.tabpage4.fn_cancel();}};this.fn_tab_delete=function(){if(this.div_work.tab_dtl.tabindex==0){this.div_work.tab_dtl.tabpage1.fn_delete();}};this.fn_tab_save=function(){if(this.div_work.tab_dtl.tabindex==0){this.div_work.tab_dtl.tabpage1.fn_save();}else if(this.div_work.tab_dtl.tabindex==2){this.div_work.tab_dtl.tabpage3.fn_save();}};this.fn_setCurOdrInfo=function(){this.ds_cond.set_enableevent(true);if(this.ds_curOdrInfo.rowcount==1){var _a=this.ds_curOdrInfo.getColumn(0,"CUR_DEVA_YEAR");var _b=this.ds_curOdrInfo.getColumn(0,"CUR_ODR_SE");if(this.comUtils.isNull(_a)||this.comUtils.isNull(_b)){return false;}else{this.ds_cond.set_enableevent(false);this.div_search.spn_devaYear.set_value(_a);this.div_search.cmb_odrSe.set_value(_b);this.ds_cond.set_enableevent(true);}}else{return false;}this.fn_search();};this.div_work_tab_dtl_canchange=function(_a,_b){if(this.div_work.tab_dtl.tabindex==0){if(Ex.util.isUpdated(this.div_work.tab_dtl.tabpage1.ds_raterList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}}else if(this.div_work.tab_dtl.tabindex==1){if(Ex.util.isUpdated(this.div_work.tab_dtl.tabpage2.ds_allotList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}}else if(this.div_work.tab_dtl.tabindex==2){if(Ex.util.isUpdated(this.div_work.tab_dtl.tabpage3.ds_raterList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}}else if(this.div_work.tab_dtl.tabindex==3){if(Ex.util.isUpdated(this.div_work.tab_dtl.tabpage4.ds_allotList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}}};this.div_work_tab_dtl_onchanged=function(_a,_b){this.fn_search();};this.fn_check=function(){if(Ex.util.isUpdated(this.div_work.tab_dtl.tabpage1.ds_raterList)||Ex.util.isUpdated(this.div_work.tab_dtl.tabpage2.ds_allotList)||Ex.util.isUpdated(this.div_work.tab_dtl.tabpage3.ds_raterList)||Ex.util.isUpdated(this.div_work.tab_dtl.tabpage4.ds_allotList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}else{return true;}}else{return true;}};this.ds_cond_cancolumnchange=function(_a,_b){if(!this.fn_check()){return false;}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("cancolumnchange",this.ds_cond_cancolumnchange,this);this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_viewList.addEventHandler("onrowposchanged",this.ds_viewList_onrowposchanged,this);this.ds_kpiListMst.addEventHandler("onrowposchanged",this.ds_kpiListMst_onrowposchanged,this);this.addEventHandler("oninit",this.HRM060118_oninit,this);this.addEventHandler("onload",this.HRM060118_onload,this);this.div_work.tab_dtl.addEventHandler("onchanged",this.div_work_tab_dtl_onchanged,this);this.div_work.tab_dtl.addEventHandler("canchange",this.div_work_tab_dtl_canchange,this);this.div_search.spn_devaYear.addEventHandler("onchanged",this.div_search_spn_evalYear_onchanged,this);this.div_search.spn_devaYear.addEventHandler("ontextchanged",this.div_search_spn_evalYear_ontextchanged,this);this.div_search.cmb_odrSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);this.div_search.cmb_trgetSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);};this.loadIncludeScript("HRM060118.xfdl");this.loadPreloadList();};})();