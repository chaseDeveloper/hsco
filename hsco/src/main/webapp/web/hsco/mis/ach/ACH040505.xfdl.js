﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACH040505");this.set_classname("");this.set_titletext("개인별 총괄성과순위");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">EVL_YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">평가년도</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ODR_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_refrnList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCORE2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCORE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCORE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCORE5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOT_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACMTL_RANK\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_refrnSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mesure_unit_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acmsltValueMSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_me_cycle_se",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_kpiInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REFRN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IX_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESURE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_VALUE_MANAGE_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_CALC_FRMLA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ixNmSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ubiReport01",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ubiReport00",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("29");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_eval_year","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("평가년도");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_evalYear","absolute","79","5","67","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("1900");_a.set_max("10000");_a.set_min("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("sta_se","absolute","161","5","38","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("구분");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","199","5","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_odrSe");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static36","absolute","36","0","284","5",null,null,this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","36","26","284","5",null,null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","146","4","15","31",null,null,this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_closeInfo","absolute","333","6","265","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("Static00");_a.style.set_color("red");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("44");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("45");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("46");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","42","150","21",null,null,this);_a.set_taborder("47");_a.set_text("개인별 총괄 성과순위");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("48");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excel","absolute",null,"43","25","19","28",null,this);_a.set_taborder("50");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd_list","absolute","0","67",null,null,"28","0",this);_a.set_taborder("51");_a.set_binddataset("ds_refrnList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"직종\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"전화친절도\"/><Cell col=\"5\" text=\"사회공헌\"/><Cell col=\"6\" text=\"교육ㆍ역량\"/><Cell col=\"7\" text=\"제안\"/><Cell col=\"8\" text=\"청렴마일리지\"/><Cell col=\"9\" text=\"총괄\"/><Cell col=\"10\" text=\"순위\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"selectbackground: ;\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JSSFC_NM\"/><Cell col=\"2\" text=\"bind:CLSF_NM\"/><Cell col=\"3\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:SCORE1\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:SCORE2\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:SCORE3\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:SCORE4\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:SCORE5\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:TOT_SCORE\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:ACMTL_RANK\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("29");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("개인별 총괄성과순위");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_search.spn_evalYear","value","ds_cond","EVL_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_search.cmb_odrSe","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACH040505.xfdl","lib::comInclude.xjs");this.registerScript("ACH040505.xfdl",function(){this.sClosAt="";this.nRowPos=0;this.nSetInit=0;this.toggleView=0;this.ACH040505_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.ACH040505_onload=function(_a,_b){this.fn_init_current();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_current=function(){this.ds_curInfo.clearData();this.fn_transaction("selectCurEvlOdrInfo");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadComboNonCodeTbl=function(_a,_b){var _c=[["ds_odrSe","ds_cond","","","hsco/mis/ach/ACHCommon/selectOdrList.do",0]];this.gfn_comboLoadNonCodeTbl(_c,this.fn_callbackAfter,_a,_b);};this.fn_callbackAfter=function(_a){switch(_a){case "ds_odrSe":this.div_search.sta_closeInfo.set_text("집계 기준일 : ");this.ds_refrnList.clearData();if(this.ds_odrSe.rowcount>0){var _b=this.ds_odrSe.getColumn(0,"CODE_CN");this.div_search.sta_closeInfo.set_text("집계 기준일 : "+_b);if(nSetInit==1){this.fn_setCurInfo("odrSe");nSetInit=0;}this.fn_search();}else{this.gfn_message("info.처리불가","해당년도의 등록된 평가차수가 없습니다.");}break;}};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_refrnList.clearData();this.fn_transaction("selectList");};this.fn_transaction=function(_a){switch(_a){case "selectList":var _b="hsco/mis/ach/ACH040505/selectList.do";var _c="input1=ds_cond";var _d="ds_refrnList=output1";break;case "selectCurEvlOdrInfo":var _b="hsco/mis/ach/ACHCommon/selectCurEvlOdrInfo.do";var _c="";var _d="ds_curInfo=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectList":break;case "selectCurEvlOdrInfo":this.fn_setCurInfo("evalYear");nSetInit=1;break;}}};this.btn_excel_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_list,"exportExl");};this.div_search_spn_evalYear_ontextchanged=function(_a,_b){this.ds_cond.setColumn(0,"EVL_YEAR",_b.posttext);this.fn_loadComboNonCodeTbl();};this.div_search_cmb_odrSe_onitemchanged=function(_a,_b){this.ds_cond.setColumn(0,"ODR_SE",_b.postvalue);var _c=this.ds_odrSe.getColumn(_b.postindex,"CODE_CN");this.div_search.sta_closeInfo.set_text("집계 기준일 : "+_c);};this.fn_setCurInfo=function(_a){if(this.ds_curInfo.rowcount==1){if(_a=="evalYear"){var _b=this.ds_curInfo.getColumn(0,"CUR_EVL_YEAR");this.ds_cond.setColumn(0,"EVL_YEAR",_b);this.fn_loadComboNonCodeTbl();}else if(_a=="odrSe"){var _c=this.ds_curInfo.getColumn(0,"CUR_ODR_SE");this.div_search.cmb_odrSe.set_value(_c);var _d=this.ds_odrSe.findRow("CODE",_c);var _e=this.ds_odrSe.getColumn(_d,"CODE_CN");this.div_search.sta_closeInfo.set_text("집계 기준일 : "+_e);}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.ACH040505_oninit,this);this.addEventHandler("onload",this.ACH040505_onload,this);this.div_search.spn_evalYear.addEventHandler("ontextchanged",this.div_search_spn_evalYear_ontextchanged,this);this.div_search.cmb_odrSe.addEventHandler("onitemchanged",this.div_search_cmb_odrSe_onitemchanged,this);this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);};this.loadIncludeScript("ACH040505.xfdl");};})();