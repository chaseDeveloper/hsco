﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SUP010201");this.set_classname("UI_SUP010201");this.set_titletext("경영평가 실적등록");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mngmtEvlStdr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EVL_CN_DFN\" type=\"string\" size=\"32\"/><Column id=\"ALLOT\" type=\"string\" size=\"32\"/><Column id=\"SORT_ORDR\" type=\"string\" size=\"32\"/><Column id=\"STDR_YEAR\" type=\"string\" size=\"32\"/><Column id=\"GPA\" type=\"string\" size=\"32\"/><Column id=\"IX_CODE\" type=\"INT\" size=\"32\"/><Column id=\"RSLT_PYMNT_RT\" type=\"string\" size=\"32\"/><Column id=\"IX_NM\" type=\"string\" size=\"32\"/><Column id=\"EVL_MTH\" type=\"string\" size=\"32\"/><Column id=\"GTSR\" type=\"string\" size=\"32\"/><Column id=\"DETAIL_EVL_MTH\" type=\"string\" size=\"32\"/><Column id=\"ELV_IX_CHARCT\" type=\"string\" size=\"32\"/><Column id=\"EVL_WGHTVAL\" type=\"string\" size=\"32\"/><Column id=\"CL_STEP\" type=\"INT\" size=\"16\"/><Column id=\"UPPER_IX_CODE\" type=\"INT\" size=\"32\"/><Column id=\"IX_DFN\" type=\"string\" size=\"32\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mngmtEvlStdrDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_IEM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_EVL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_DETAIL_RM\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_REGIST_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sup002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mngmEvlManageDept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ACMSLT_COMPT_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_file",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_sub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">STDR_YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">검색 기준년도</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("132");_a.set_text("기준년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","84","5","71","21",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","208","5","195","21",null,null,this.div_search);_a.set_taborder("1");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","170","5","38","21",null,null,this.div_search);_a.set_taborder("135");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","155","2","15","34",null,null,this.div_search);_a.set_taborder("136");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("15");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats","absolute","0","43","143","19",null,null,this);_a.set_taborder("1");_a.set_text("평가지표");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("17");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,null,"539","0",this);_a.set_taborder("2");_a.set_autofittype("col");_a.set_binddataset("ds_mngmtEvlStdr");_a.set_treeinitstatus("expand,null");_a.set_treeusecheckbox("false");_a.set_treeuseexpandkey("true");_a.set_treeuseimage("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"301\"/><Column size=\"70\"/><Column size=\"64\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"평가지표\"/><Cell col=\"1\" text=\"평가방법\"/><Cell col=\"2\" text=\"지표성격\"/><Cell col=\"3\" text=\"배점\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"align:left;background:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');background2:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');selectbackground:EXPR(DEPT_CODE ? '#f6f7ffff' : '#e8f6fdff');\" text=\"bind:IX_NM\" treestartlevel=\"0\" treelevel=\"bind:CL_STEP\"/><Cell col=\"1\" style=\"background:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');background2:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');selectbackground:EXPR(DEPT_CODE ? '#f6f7ffff' : '#e8f6fdff');\" text=\"bind:EVL_MTH\"/><Cell col=\"2\" displaytype=\"combo\" style=\"background:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');background2:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');selectbackground:EXPR(DEPT_CODE ? '#f6f7ffff' : '#e8f6fdff');\" text=\"bind:ELV_IX_CHARCT\" combodataset=\"ds_sup002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" style=\"background:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');background2:EXPR(DEPT_CODE ? '#f6f7ffff' : '#ffffffff');selectbackground:EXPR(DEPT_CODE ? '#f6f7ffff' : '#e8f6fdff');\" text=\"bind:ALLOT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합     계\"/><Cell col=\"3\" text=\"expr:dataset.getCaseSum(&quot;ELV_IX_CHARCT == '1' || ELV_IX_CHARCT == '2'&quot;, &quot;ALLOT&quot;)\"/><Cell row=\"1\" colspan=\"3\" text=\"정량지표\"/><Cell row=\"1\" col=\"3\" text=\"expr:dataset.getCaseSum(&quot;ELV_IX_CHARCT == '2'&quot;, &quot;ALLOT&quot;)\"/><Cell row=\"2\" colspan=\"3\" text=\"정성지표\"/><Cell row=\"2\" col=\"3\" text=\"expr:dataset.getCaseSum(&quot;ELV_IX_CHARCT == '1'&quot;, &quot;ALLOT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats00","absolute",null,"43","143","19","386",null,this);_a.set_taborder("3");_a.set_text("평가기준");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute",null,"238","501",null,"28","356",this);_a.set_taborder("6");_a.set_autofittype("col");_a.set_binddataset("ds_mngmtEvlStdrDetail");_a.set_autoenter("select");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a.set_enable("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"442\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"평가내용\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:DETAIL_EVL_CN\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell row=\"1\" colspan=\"2\" style=\"align:left;padding:5 0 5 10;\" text=\"bind:EVL_DETAIL_RM\" wordwrap=\"char\" autosizerow=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new TextArea("TextArea00","absolute",null,null,"501","60","28","184",this);_a.set_taborder("10");_a.set_wordwrap("char");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("txt_WF_Readonly");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats01","absolute",null,null,"143","19","386","244",this);_a.set_taborder("9");_a.set_text("세부평가방법");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats02","absolute",null,null,"143","19","386","330",this);_a.set_taborder("7");_a.set_text("평가내용 조직적정의");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new TextArea("TextArea01","absolute",null,null,"501","60","28","270",this);_a.set_taborder("8");_a.set_wordwrap("char");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("txt_WF_Readonly");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats03","absolute",null,"222","143","13","386",null,this);_a.set_taborder("5");_a.set_text("세부평가내용");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Div("div_detail1","absolute",null,"67","502","145","27",null,this);_a.set_taborder("4");_a.set_cssclass("div_detailBox");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","94","52",null,"53","0",null,this.div_detail1);_a.set_taborder("46");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static12","absolute","94","104",null,"41","0",null,this.div_detail1);_a.set_taborder("48");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static05","absolute","94","26",null,"27","0",null,this.div_detail1);_a.set_taborder("50");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static37","absolute","94","0",null,"27","0",null,this.div_detail1);_a.set_taborder("51");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","26","95","27",null,null,this.div_detail1);_a.set_taborder("2");_a.set_cssclass("sta_WF_Label");_a.set_text("평가방법");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static15","absolute","367","26","85","27",null,null,this.div_detail1);_a.set_taborder("6");_a.set_cssclass("sta_WF_Label");_a.set_text("배점");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","104","95","41",null,null,this.div_detail1);_a.set_taborder("10");_a.set_cssclass("sta_WF_Label");_a.set_text("비고");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","95","27",null,null,this.div_detail1);_a.set_taborder("0");_a.set_cssclass("sta_WF_Label");_a.set_text("지표명");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","52","95","53",null,null,this.div_detail1);_a.set_taborder("8");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");_a.set_text("지표정의");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static10","absolute","192","26","85","27",null,null,this.div_detail1);_a.set_taborder("4");_a.set_text("지표성격");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","97","3","402","21",null,null,this.div_detail1);_a.set_taborder("1");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","454","29","45","21",null,null,this.div_detail1);_a.set_taborder("7");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("msk_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","279","29","86","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("5");_a.set_innerdataset("@ds_sup002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("cmb_WF_Readonly");_a=new TextArea("TextArea00","absolute","97","55","402","47",null,null,this.div_detail1);_a.set_taborder("9");_a.set_wordwrap("char");_a.set_readonly("true");_a.set_cssclass("txt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new TextArea("TextArea01","absolute","97","107","402","34",null,null,this.div_detail1);_a.set_taborder("11");_a.set_wordwrap("char");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("txt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","97","29","93","21",null,null,this.div_detail1);_a.set_taborder("3");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"212","501","10","28",null,this);_a.set_taborder("32");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"379","501","10","28",null,this);_a.set_taborder("33");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"465","501","10","28",null,this);_a.set_taborder("34");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute",null,"233","501","5","28",null,this);_a.set_taborder("35");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"400","501","5","28",null,this);_a.set_taborder("36");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute",null,"486","501","5","28",null,this);_a.set_taborder("37");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","520","33","10",null,null,"0",this);_a.set_taborder("38");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_budgetStats04","absolute",null,null,"143","19","386","155",this);_a.set_taborder("11");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static11","absolute",null,"551","501","10","28",null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute",null,"580","501","5","28",null,this);_a.set_taborder("41");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute",null,null,"501","151","28","0",this);_a.set_taborder("14");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"51\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new CheckBox("chk_comptAt","absolute",null,null,"94","21","261","153",this);_a.set_taborder("12");_a.set_text("실적완료여부");_a.set_truevalue("1");_a.set_falsevalue("0");this.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute",null,null,"67","19","188","155",this);_a.set_taborder("42");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute",null,null,"68","19","116","155",this);_a.set_taborder("43");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,null,"85","19","28","155",this);_a.set_taborder("44");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",476,122,this.div_detail1,function(_b){_b.set_taborder("4");_b.set_cssclass("div_detailBox");});this.div_detail1.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_SUP010201");_b.set_titletext("경영평가 실적등록");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search00.Spin00","value","ds_cond","STDR_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail1.Edit00","value","ds_mngmtEvlStdr","IX_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail1.Edit01","value","ds_mngmtEvlStdr","EVL_MTH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail1.MaskEdit00","value","ds_mngmtEvlStdr","ALLOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail1.Combo01","value","ds_mngmtEvlStdr","ELV_IX_CHARCT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail1.TextArea00","value","ds_mngmtEvlStdr","IX_DFN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","TextArea01","value","ds_mngmtEvlStdr","EVL_CN_DFN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","TextArea00","value","ds_mngmtEvlStdr","DETAIL_EVL_MTH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_detail1.TextArea01","value","ds_mngmtEvlStdr","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.Spin00","value","ds_cond","STDR_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","chk_comptAt","value","ds_mngmEvlManageDept","ACMSLT_COMPT_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("SUP010201.xfdl","lib::comInclude.xjs");this.addIncludeScript("SUP010201.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("SUP010201.xfdl","lib::comUpDownUtils.xjs");this.registerScript("SUP010201.xfdl",function(){this.saveRow= -1;this.checkDs=[this.ds_mngmEvlManageDept];this.File_UpDownManager=null;this.SUP010201_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SUP010201_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();if(this.gfn_authGrpId("SUP1_USER")!= -1){this.div_search.div_dept.set_enable(true);this.ds_cond.setColumn(0,"DEPT_CODE","000000");this.ds_cond.setColumn(0,"DEPT_NM","화성도시공사");}else{this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());}this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _a=[["ds_sup002","SUP002","Y","D","B"]];var _b=function(_c,_d,_e){this.ds_cond.setColumn(0,"STDR_YEAR",this.dateUtils.today().substr(0,4));this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","SUP");this.File_UpDownManager.init(_a);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("mngmtEvlStdrList");};this.fn_save=function(){if(Ex.util.isUpdated(this.ds_mngmEvlManageDept)){this.saveRow=this.ds_mngmtEvlStdr.rowposition;this.fn_transaction("mngmEvlManageDeptCUD");}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_a){switch(_a){case "mngmtEvlStdrList":this.ds_mngmtEvlStdr.clearData();this.ds_mngmtEvlStdrDetail.clearData();this.ds_mngmEvlManageDept.clearData();var _b="hsco/mis/sup/SUP010201/mngmtEvlStdrList.do";var _c="input1=ds_cond";var _d="ds_mngmtEvlStdr=output1";break;case "mngmtEvlStdrDetailList":this.ds_mngmtEvlStdrDetail.clearData();this.ds_mngmEvlManageDept.clearData();var _b="hsco/mis/sup/SUP010201/mngmtEvlStdrDetailList.do";var _c="input1=ds_cond_sub";var _d="ds_mngmtEvlStdrDetail=output1 ds_mngmEvlManageDept=output2";break;case "selectFileList":this.ds_fileList.clearData();var _b="hsco/mis/sup/SUP010201/selectFileList.do";var _c="input1=ds_cond_file";var _d="ds_fileList=output1";break;case "mngmEvlManageDeptCUD":var _b="hsco/mis/sup/SUP010201/mngmEvlManageDeptCUD.do";var _c="input1=ds_mngmEvlManageDept:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);switch(_a){case "mngmtEvlStdrList":break;case "mngmtEvlStdrDetailList":break;case "mngmEvlManageDeptCUD":break;default:break;}}else{switch(_a){case "mngmtEvlStdrList":if(this.saveRow> -1){this.ds_mngmtEvlStdr.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "mngmtEvlStdrDetailList":break;case "mngmEvlManageDeptCUD":this.gfn_message("success.처리.성공");this.fn_transaction("mngmtEvlStdrDetailList");break;default:break;}}};this.btn_delFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _i=this.ds_fileList.getRowCount()-1;_i>=0;_i-- ){var _d=this.ds_fileList.getColumn(_i,"CHK");if(_d=='1'){this.ds_fileList.deleteRow(_i);}}var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_fileList:U";var _h="ds_fileList=output1";Ex.core.tran(this,_e,_f,_g,_h);};this.btn_uploadFiles_onclick=function(_a,_b){this.fn_autoFileSn("MIS","SUP",this.File_UpDownManager,this.ds_fileList,this.ds_mngmEvlManageDept,"TBSUP_MNGMT_EVL_MANAGE_DEPT","FILE_SN",["STDR_YEAR","IX_CODE","DEPT_CODE"]);};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList.getRowCount();_h++ ){var _d=this.ds_fileList.getColumn(_h,"FILE_SN");var _e=this.ds_fileList.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.ds_mngmtEvlStdr_canrowposchange=function(_a,_b){if(Ex.util.isUpdated(this.ds_mngmEvlManageDept)){if(this.gfn_message("confirm.변경.취소.여부")){return true;}else{return false;}}};this.ds_mngmtEvlStdr_onrowposchanged=function(_a,_b){if(this.ds_mngmtEvlStdr.getColumn(this.ds_mngmtEvlStdr.rowposition,"IX_CODE")==0){this.ds_mngmtEvlStdr.setColumn(this.ds_mngmtEvlStdr.rowposition,"DEPT_CODE","000000");}var _c=this.ds_mngmtEvlStdr.getColumn(this.ds_mngmtEvlStdr.rowposition,"DEPT_CODE");if(_c){this.btn_delFiles.set_enable(true);this.btn_uploadFiles.set_enable(true);this.btn_downFiles.set_enable(true);this.chk_comptAt.set_enable(true);}else{this.btn_delFiles.set_enable(false);this.btn_uploadFiles.set_enable(false);this.btn_downFiles.set_enable(false);this.chk_comptAt.set_enable(false);}this.grd_cmmnAtchmnfl.setCellProperty("Head",0,"text","0");this.ds_cond_sub.setColumn(0,"STDR_YEAR",this.ds_mngmtEvlStdr.getColumn(this.ds_mngmtEvlStdr.rowposition,"STDR_YEAR"));this.ds_cond_sub.setColumn(0,"IX_CODE",this.ds_mngmtEvlStdr.getColumn(this.ds_mngmtEvlStdr.rowposition,"IX_CODE"));this.ds_cond_sub.setColumn(0,"DEPT_CODE",this.ds_mngmtEvlStdr.getColumn(this.ds_mngmtEvlStdr.rowposition,"DEPT_CODE"));this.fn_transaction("mngmtEvlStdrDetailList");};this.ds_mngmEvlManageDept_onrowposchanged=function(_a,_b){var _c=this.ds_mngmEvlManageDept.rowposition;var _d=this.ds_mngmEvlManageDept.getColumn(_c,"FILE_SN");this.ds_cond_file.clearData();var _e=this.ds_cond_file.addRow();this.ds_cond_file.setColumn(_e,"FILE_SN",_d);this.fn_transaction("selectFileList");};this.div_Cont_grd_cmmnAtchmnfl_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}};this.div_Cont_grd_cmmnAtchmnfl_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};});this.on_initEvent=function(){this.ds_mngmtEvlStdr.addEventHandler("onrowposchanged",this.ds_mngmtEvlStdr_onrowposchanged,this);this.ds_mngmtEvlStdr.addEventHandler("canrowposchange",this.ds_mngmtEvlStdr_canrowposchange,this);this.ds_sup002.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_mngmEvlManageDept.addEventHandler("onrowposchanged",this.ds_mngmEvlManageDept_onrowposchanged,this);this.addEventHandler("oninit",this.SUP010201_oninit,this);this.addEventHandler("onload",this.SUP010201_onload,this);this.div_search.sta_YEAR.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.grd_cmmnAtchmnfl.addEventHandler("oncellclick",this.div_Cont_grd_cmmnAtchmnfl_oncellclick,this);this.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.div_Cont_grd_cmmnAtchmnfl_onheadclick,this);this.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);};this.loadIncludeScript("SUP010201.xfdl");this.loadPreloadList();};})();