﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("EIS030101");this.set_classname("");this.set_titletext("결산정보");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">EVL_YEAR</Col><Col id=\"msgId\">평가년도</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ODR_SE</Col><Col id=\"msgId\">구분</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">REFRN_SE</Col><Col id=\"msgId\">참조번호</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_refrnSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_orgnztSeCond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_EVL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","0",null,null,"28","0",this);_a.set_taborder("37");_a.style.set_background("#00000000");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("sta_BGN_DT00","absolute","102.37%","180","84","27",null,null,this.div_work);_a.set_taborder("8");_a.set_text("전략목표 ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_DCLZ_SE00","absolute","102.37%","152","84","27",null,null,this.div_work);_a.set_taborder("9");_a.set_text("관점 ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE00","absolute","102.37%","208","84","27",null,null,this.div_work);_a.set_taborder("10");_a.set_text("CSF ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AM_PM_SE01","absolute","102.37%","236","84","27",null,null,this.div_work);_a.set_taborder("16");_a.set_text("KPI ");_a.set_cssclass("sta_WFDA_labelB");_a.style.set_align("left middle");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Grid("EIS030101","absolute","103.22%","343",null,"635","-468",null,this.div_work);_a.set_taborder("22");_a.set_binddataset("ds_asignList");_a.set_autofittype("col");_a.getSetter("titletext").set("기본구조관리");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"209\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직코드\"/><Cell col=\"2\" text=\"조직명\"/><Cell col=\"3\" text=\"배정유무\"/></Band><Band id=\"body\"><Cell style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" expr=\"expr:currow + 1\"/><Cell col=\"1\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ORGNZT_CODE\"/><Cell col=\"2\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ORGNZT_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"font:EXPR(ASIGN_AT!= '1' ? '' : 'bold 9 Dotum');\" text=\"bind:ASIGN_AT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Tab("tab_dtl","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("23");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");_a.set_preload("true");this.div_work.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.div_work.tab_dtl);_a.set_text("재무상태표");_a.set_url("mis_acc::ACC050301.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.div_work.tab_dtl);_a.set_text("손익계산서");_a.set_url("mis_acc::ACC050302.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.div_work.tab_dtl);_a.set_text("현금흐름표");_a.set_url("mis_acc::ACC050305.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Tabpage("tabpage4",this.div_work.tab_dtl);_a.set_text("경영지표분석");_a.set_url("eis_eis::EIS030101_T04.xfdl");this.div_work.tab_dtl.addChild(_a.name,_a);_a=new Static("sta_unit","absolute",null,"12","125","15","0",null,this.div_work);_a.set_taborder("24");_a.set_text("[ 단위 : 백만원 ]");_a.style.set_align("right");this.div_work.addChild(_a.name,_a);_a=new Div("div_search","absolute","1","743",null,"33","27",null,this);_a.set_taborder("29");_a.set_cssclass("div_WFSA_Box");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("sta_stdrYear","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("기준연도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_stdrYear","absolute","89","5","67","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("1900");_a.set_max("10000");_a.set_min("0");_a.style.set_font("9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this.div_search);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","496","28","38","5",null,null,this.div_search);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("39");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("37");_b.style.set_background("#00000000");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1019,73,this.div_search,function(_b){_b.set_taborder("29");_b.set_cssclass("div_WFSA_Box");_b.set_visible("false");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("결산정보");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","div_search.spn_stdrYear","value","ds_cond","STDR_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","mis_acc::ACC050301.xfdl");this._addPreloadList("fdl","mis_acc::ACC050302.xfdl");this._addPreloadList("fdl","mis_acc::ACC050305.xfdl");this._addPreloadList("fdl","eis_eis::EIS030101_T04.xfdl");};this.addIncludeScript("EIS030101.xfdl","lib::comInclude.xjs");this.addIncludeScript("EIS030101.xfdl","mis_lib::misUtil.xjs");this.registerScript("EIS030101.xfdl",function(){this.nRowPos=0;this.EIS030101_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();var _c=4;for(var _g=1;_g<_c;_g++ ){var _d=this.div_work.tab_dtl['tabpage'+_g];var _e=_d.components.length;for(var _h=0;_h<_e;_h++ ){var _f=_d.components.get_item(_h);if(_f.toString()=="[object Div]"){_f.set_right(0);_f.set_top(5);}else if(_f.toString()=="[object Grid]"){_f.set_right(0);}}}};this.EIS030101_onload=function(_a,_b){this.fn_loadCombo();this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){};this.fn_callbackAfterLoad=function(){};this.fn_loadComboNonCodeTbl=function(_a,_b){};this.fn_callbackAfter=function(_a){};this.fn_search=function(){this.fn_tab_search();};this.fn_transaction=function(_a){};this.fn_callBack=function(_a,_b,_c){};this.fn_tab_search=function(){if(this.div_work.tab_dtl.tabindex==0){this.div_work.tab_dtl.tabpage1.fn_search();}else if(this.div_work.tab_dtl.tabindex==1){this.div_work.tab_dtl.tabpage2.fn_search();}else if(this.div_work.tab_dtl.tabindex==2){this.div_work.tab_dtl.tabpage3.fn_search();}else if(this.div_work.tab_dtl.tabindex==3){this.div_work.tab_dtl.tabpage4.fn_search();}};this.div_search_spn_stdrYear_ontextchanged=function(_a,_b){this.ds_cond.setColumn(0,"STDR_YEAR",_b.posttext);this.fn_search();};this.div_work_tab_dtl_onchanged=function(_a,_b){this.div_work.sta_unit.set_text('');switch(_b.postindex){case 0:this.div_work.sta_unit.set_text('[ 단위 : 백만원 ]');this.fn_tab_search();break;case 1:this.div_work.sta_unit.set_text('[ 단위 : 백만원 ]');this.fn_tab_search();break;case 2:this.div_work.sta_unit.set_text('[ 단위 : 백만원 ]');this.fn_tab_search();break;case 3:this.div_work.sta_unit.set_text('[ 단위 : 백분율 ]');this.fn_tab_search();break;}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.EIS030101_oninit,this);this.addEventHandler("onload",this.EIS030101_onload,this);this.div_work.tab_dtl.addEventHandler("canchange",this.div_work_tab_dtl_canchange,this);this.div_work.tab_dtl.addEventHandler("onchanged",this.div_work_tab_dtl_onchanged,this);this.div_search.spn_stdrYear.addEventHandler("ontextchanged",this.div_search_spn_stdrYear_ontextchanged,this);};this.loadIncludeScript("EIS030101.xfdl");this.loadPreloadList();};})();