﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080302");this.set_classname("HRM080302");this.set_titletext("주요교육실적현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">STDR_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">기준일자</Col></Row><Row><Col id=\"colId\">STDR_DE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">기준일자^2016-01-01</Col><Col id=\"from\">20160101</Col></Row><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">기준년도</Col><Col id=\"from\">[Undefined]</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"msgId\">기준년도^2016</Col><Col id=\"from\">2016</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_evl_trgter",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_NN\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JBLN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_CLSF_EMPLMN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_COMPL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CNFRM_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_EDC_COMPL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUFFCN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_EDC_COMPL_TIME_REGLTN\" type=\"STRING\" size=\"256\"/><Column id=\"YR_EDC_COMPL_TIME_REGLTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_indvdlz_acmslt",this);_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_LCLAS\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_MLSFC\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_SCLAS\" type=\"STRING\" size=\"256\"/><Column id=\"RCOGN_TIME_STDR\" type=\"STRING\" size=\"256\"/><Column id=\"FYER_MXMM_RCOGN_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR01_EDC_CNFRM_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR01_EDC_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR02_EDC_CNFRM_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR02_EDC_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR03_EDC_CNFRM_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR03_EDC_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR04_EDC_CNFRM_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR04_EDC_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR05_EDC_CNFRM_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEAR05_EDC_TIME\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_sub",this);_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_registDe","absolute","204","5","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("기준년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","361","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("대상부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","425","5","195","21",null,null,this.div_search);_a.set_taborder("5");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","635","5","51","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("대상자");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","686","5","166","21",null,null,this.div_search);_a.set_taborder("7");_a.set_visible("true");_a.set_enable("false");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","268","5","78","21",null,null,this.div_search);_a.set_taborder("9");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_STDR_DE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("기준일자");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_STDR_DE","absolute","79","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("12");_a.set_dateformat("yyyy-MM-dd");_a.style.set_align("center middle");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","189","5","15",null,null,"5",this.div_search);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_pblancList","absolute","0","42","150","19",null,null,this);_a.set_taborder("4");_a.set_text("대상자 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","57","1031","5",null,null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_evl_trgter","absolute","0","62","405",null,null,"0",this);_a.set_taborder("20");_a.set_binddataset("ds_evl_trgter");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"79\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직위\"/><Cell col=\"1\" text=\"직렬\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:OFCPS_NM\"/><Cell col=\"1\" text=\"bind:JBLN_NM\"/><Cell col=\"2\" text=\"bind:CLSF_NN\"/><Cell col=\"3\" text=\"bind:EMPNM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","405","209","10",null,null,"0",this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_indvdlz_acmslt","absolute","415","208",null,null,"28","0",this);_a.set_taborder("22");_a.set_binddataset("ds_indvdlz_acmslt");_a.set_autoenter("select");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"83\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대분류\"/><Cell col=\"1\" rowspan=\"2\" text=\"중분류\"/><Cell col=\"2\" rowspan=\"2\" text=\"소분류\"/><Cell col=\"3\" rowspan=\"2\" text=\"인정기준\"/><Cell col=\"4\" rowspan=\"2\" text=\"연간최대&#13;&#10;인정시간\"/><Cell col=\"5\" rowspan=\"2\" text=\"인정시간&#13;&#10;(누적시간)\"/></Band><Band id=\"body\"><Cell style=\"selectbackground:#ffffffff;\" text=\"bind:EDC_TY_LCLAS\" suppress=\"1\" suppressalign=\"middle\" tooltiptext=\"bind:EDC_TY_LCLAS\"/><Cell col=\"1\" style=\"selectbackground:#ffffffff;\" text=\"bind:EDC_TY_MLSFC\" suppress=\"2\" suppressalign=\"middle\" tooltiptext=\"bind:EDC_TY_MLSFC\"/><Cell col=\"2\" style=\"selectbackground:#ffffffff;\" text=\"bind:EDC_TY_SCLAS\" suppress=\"3\" suppressalign=\"middle\" tooltiptext=\"bind:EDC_TY_SCLAS\"/><Cell col=\"3\" text=\"bind:RCOGN_TIME_STDR\" suppress=\"4\"/><Cell col=\"4\" style=\"align:right middle;\" text=\"bind:FYER_MXMM_RCOGN_TIME\"/><Cell col=\"5\" style=\"align:right middle;\" text=\"expr:YEAR01_EDC_CNFRM_TIME + YEAR02_EDC_CNFRM_TIME + YEAR03_EDC_CNFRM_TIME + YEAR04_EDC_CNFRM_TIME + YEAR05_EDC_CNFRM_TIME\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"소    계\"/><Cell col=\"5\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;YEAR01_EDC_CNFRM_TIME&quot;) + dataset.getSum(&quot;YEAR02_EDC_CNFRM_TIME&quot;) + dataset.getSum(&quot;YEAR03_EDC_CNFRM_TIME&quot;) + dataset.getSum(&quot;YEAR04_EDC_CNFRM_TIME&quot;) + dataset.getSum(&quot;YEAR05_EDC_CNFRM_TIME&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","414","41","214","21",null,null,this);_a.set_taborder("23");_a.set_text("교육대상자 정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Div("div_dtls","absolute","415","67",null,"183","28",null,this);_a.set_taborder("24");this.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel04","absolute","0","52",null,"27","0",null,this.div_dtls);_a.set_taborder("91");_a.set_cssclass("sta_WF_Labelbg");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel03","absolute","0","78",null,"27","0",null,this.div_dtls);_a.set_taborder("92");_a.set_cssclass("sta_WF_Labelbg");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel00","absolute","0","26",null,"27","0",null,this.div_dtls);_a.set_taborder("93");_a.set_cssclass("sta_WF_Labelbg");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel","absolute","0","0",null,"27","0",null,this.div_dtls);_a.set_taborder("94");_a.set_cssclass("sta_WF_Labelbg");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle01","absolute","0","0","93","27",null,null,this.div_dtls);_a.set_taborder("95");_a.set_text("사원번호");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle04","absolute","0","26","93","27",null,null,this.div_dtls);_a.set_taborder("96");_a.set_text("직종");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO","absolute","95","3","84","21",null,null,this.div_dtls);_a.set_taborder("97");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle06","absolute","300","0","109","27",null,null,this.div_dtls);_a.set_taborder("98");_a.set_text("부서");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_TELNO_01","absolute","181","3","117","21",null,null,this.div_dtls);_a.set_taborder("99");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle05","absolute","205","26","93","27",null,null,this.div_dtls);_a.set_taborder("100");_a.set_text("직급");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle07","absolute","410","26","93","27",null,null,this.div_dtls);_a.set_taborder("101");_a.set_text("직위");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO00","absolute","411","3","76","21",null,null,this.div_dtls);_a.set_taborder("102");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_TELNO_00","absolute","489","3","124","21",null,null,this.div_dtls);_a.set_taborder("103");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle00","absolute","0","52","93","27",null,null,this.div_dtls);_a.set_taborder("104");_a.set_text("직렬");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle08","absolute","0","78","93","27",null,null,this.div_dtls);_a.set_taborder("105");_a.set_text("입사일");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle12","absolute","410","78","93","27",null,null,this.div_dtls);_a.set_taborder("106");_a.set_text("생년월일");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Static("sta_empTitle13","absolute","205","78","93","27",null,null,this.div_dtls);_a.set_taborder("107");_a.set_text("현직급임용일");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO01","absolute","95","29","108","21",null,null,this.div_dtls);_a.set_taborder("108");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO02","absolute","300","29","108","21",null,null,this.div_dtls);_a.set_taborder("109");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO03","absolute","505","29","108","21",null,null,this.div_dtls);_a.set_taborder("110");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Calendar("cal_STDR_DE","absolute","95","81","108","21",null,null,this.div_dtls);this.div_dtls.addChild(_a.name,_a);_a.set_taborder("111");_a.set_readonly("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.style.set_align("center middle");_a=new Calendar("cal_STDR_DE00","absolute","300","81","108","21",null,null,this.div_dtls);this.div_dtls.addChild(_a.name,_a);_a.set_taborder("112");_a.set_readonly("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.style.set_align("center middle");_a=new Calendar("cal_STDR_DE01","absolute","505","81","108","21",null,null,this.div_dtls);this.div_dtls.addChild(_a.name,_a);_a.set_taborder("113");_a.set_readonly("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.style.set_align("center middle");_a=new Static("sta_empTitle02","absolute","205","52","93","27",null,null,this.div_dtls);_a.set_taborder("114");_a.set_text("상태");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO04","absolute","300","55","108","21",null,null,this.div_dtls);_a.set_taborder("115");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Edit("edt_EMPNO05","absolute","95","55","108","21",null,null,this.div_dtls);_a.set_taborder("116");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_align("center middle");this.div_dtls.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"203","616","5","28",null,this);_a.set_taborder("25");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","415","182","214","21",null,null,this);_a.set_taborder("26");_a.set_text("대상자별 교육실적");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static09","absolute",null,"172","616","10","28",null,this);_a.set_taborder("27");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,183,this.div_dtls,function(_b){_b.set_taborder("24");});this.div_dtls.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM080302");_b.set_titletext("주요교육실적현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_dtls.edt_TELNO_01","value","ds_evl_trgter","EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_dtls.edt_EMPNO","value","ds_evl_trgter","EMPNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_dtls.edt_EMPNO00","value","ds_evl_trgter","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_dtls.edt_TELNO_00","value","ds_evl_trgter","DEPT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_dtls.edt_EMPNO01","value","ds_evl_trgter","JSSFC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_dtls.edt_EMPNO02","value","ds_evl_trgter","CLSF_NN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_dtls.edt_EMPNO03","value","ds_evl_trgter","OFCPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_dtls.cal_STDR_DE","value","ds_evl_trgter","ECNY_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_dtls.cal_STDR_DE00","value","ds_evl_trgter","NOW_CLSF_EMPLMN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_dtls.cal_STDR_DE01","value","ds_evl_trgter","BRTHDY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_dtls.edt_EMPNO04","value","ds_evl_trgter","STTUS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_dtls.edt_EMPNO05","value","ds_evl_trgter","JBLN_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_search.cal_STDR_DE","value","ds_cond","STDR_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM080307.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM080307.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM080307.xfdl",function(){this.isAuth=false;this.HRM080302_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM080302_onload=function(_a,_b){if((this.gfn_authGrpId("HRM_ADMIN")!= -1)||(this.gfn_authGrpId("HRM_EDC")!= -1)){this.isAuth=true;}else{this.isAuth=false;}this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();this.ds_cond.addRow();if(this.isAuth){this.div_search.div_DEPT.set_enable(true);this.div_search.div_EMP.set_enable(true);}else{this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());}this.ds_cond.setColumn(0,"STDR_DE",this.gfn_today().substr(0,4)+"1231");this.ds_cond.setColumn(0,"YEAR",this.gfn_today().substr(0,4));this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_indvdlz_acmslt.clearData();this.ds_evl_trgter.clearData();this.fn_crossTab();this.fn_transaction("selectEmpList");};this.fn_search_dtl=function(){this.ds_indvdlz_acmslt.clearData();var _a=this.ds_evl_trgter.rowposition;var _b=this.ds_evl_trgter.getColumn(_a,"YEAR");var _c=this.ds_evl_trgter.getColumn(_a,"EMPNO");this.ds_cond_sub.clearData();var _d=this.ds_cond_sub.addRow();this.ds_cond_sub.setColumn(_d,"YEAR",_b);this.ds_cond_sub.setColumn(_d,"EMPNO",_c);this.fn_transaction("selectEdcList");};this.fn_transaction=function(_a){switch(_a){case "selectEmpList":var _b="/hsco/mis/hrm/HRM080307/selectEmpList.do";var _c="input1=ds_cond";var _d="ds_evl_trgter=output1";break;case "selectEdcList":var _b="/hsco/mis/hrm/HRM080307/selectEdcList.do";var _c="input1=ds_cond_sub";var _d="ds_indvdlz_acmslt=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectEmpList":break;case "selectEdcList":break;}}};this.div_work_grd_pblancList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.ds_evl_trgter_onrowposchanged=function(_a,_b){if(_b.newrow> -1){this.fn_search_dtl();}};this.fn_crossTab=function(){var _a=this.grd_indvdlz_acmslt;for(var _j=_a.getFormatColCount("Head")-1;_j>=6;_j-- ){_a.deleteContentsCol(_j);}var _b=this.ds_cond.getColumn(0,"YEAR");var _c=0;var _d= -1;var _e="";var _f="";_a.set_enableredraw(false);for(_j=_b;_j>=2016;_j-- ){var _g=1;var _h=0;for(_g;_g<=2;_g++ ){_h=_a.appendContentsCol();var _i=_h+(_c+1);_c++ ;_a.setFormatColProperty(_h,"size",60);if(_g==1){_a.setCellProperty("Head",_i,"text","인정");_a.setCellProperty("Body",_h,"text","bind:YR_"+_j+"_EDC_CNFRM_TIME");_a.setCellProperty("Summ",_h-4,"text","expr:dataset.getSum('YR_"+_j+"_EDC_CNFRM_TIME') >= 160 ? 160 : dataset.getSum('YR_"+_j+"_EDC_CNFRM_TIME')");_a.setCellProperty("Summ",_h-4,"align","center");if(_f.length==0){_f="expr:YR_"+_j+"_EDC_CNFRM_TIME";_e="expr:(dataset.getSum('YR_"+_j+"_EDC_CNFRM_TIME') >= 160 ? 160 : dataset.getSum('YR_"+_j+"_EDC_CNFRM_TIME'))";}else{_f+=" + YR_"+_j+"_EDC_CNFRM_TIME";_e+=" + (dataset.getSum('YR_"+_j+"_EDC_CNFRM_TIME') >= 160 ? 160 : dataset.getSum('YR_"+_j+"_EDC_CNFRM_TIME'))";}}else{_a.setCellProperty("Head",_i,"text","실적");_a.setCellProperty("Body",_h,"text","bind:YR_"+_j+"_EDC_TIME");_a.setCellProperty("Summ",_h-4,"text","expr:dataset.getSum('YR_"+_j+"_EDC_TIME')");_a.setCellProperty("Summ",_h-4,"align","center");}}_d++ ;}_a.setCellProperty("Body",5,"text",_f);_a.setCellProperty("Summ",1,"text",_e);for(z=0;z<=_d;z++ ){_a.mergeContentsCell("Head",0,6+((_d-z)*2),0,7+((_d-z)*2),6+((_d-z)*2),false);_a.setCellProperty("Head",6+((_d-z)*2),"text",2016+z+"년");}_a.set_enableredraw(true);};this.grd_indvdlz_acmslt_oncelldblclick=function(_a,_b){var _c=this.ds_indvdlz_acmslt.getColumn(_b.row,"YEAR");var _d=this.ds_indvdlz_acmslt.getColumn(_b.row,"EMPNO");var _e=this.ds_indvdlz_acmslt.getColumn(_b.row,"SN");var _f={arg_0:this,year:_c,empno:_d,sn:_e};this.gfn_popup("popEdcTy",500,465,"",_f,"mis_hrm::HRM080307_P01.xfdl","fn_popEdcCallBack",true);};});this.on_initEvent=function(){this.ds_evl_trgter.addEventHandler("onrowposchanged",this.ds_evl_trgter_onrowposchanged,this);this.addEventHandler("onload",this.HRM080302_onload,this);this.addEventHandler("oninit",this.HRM080302_oninit,this);this.div_search.spn_year.addEventHandler("onspin",this.div_search_spn_year_onspin,this);this.grd_indvdlz_acmslt.addEventHandler("oncelldblclick",this.grd_indvdlz_acmslt_oncelldblclick,this);};this.loadIncludeScript("HRM080307.xfdl");this.loadPreloadList();};})();