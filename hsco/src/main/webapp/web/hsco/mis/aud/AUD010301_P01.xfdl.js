﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD010301_P01");this.set_classname("AUD010301_P01");this.set_titletext("일상감사불러오기");this._setFormPosition(0,0,900,526);}_a=new Dataset("DS_EDAY_AUDIT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"7\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"2\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"2\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"EDAY_AUDIT_CN\" type=\"STRING\" size=\"200\"/><Column id=\"ATCH_FILE_1\" type=\"STRING\" size=\"10\"/><Column id=\"INNER_SANCTN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"10\"/><Column id=\"RCEPT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SN_2\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE_2\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_DSPTH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_2_1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_2_2\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_INSTT_ACCTO_CL",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">용역</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">공사</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">구매</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">기타</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_PUBLIC_AUDIT_CL",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_edayAuditresultSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_close",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"7\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"8\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"2\"/><Column id=\"INSTT_ACCTO_CL\" type=\"STRING\" size=\"2\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"EDAY_AUDIT_CN\" type=\"STRING\" size=\"200\"/><Column id=\"ATCH_FILE_1\" type=\"STRING\" size=\"10\"/><Column id=\"INNER_SANCTN_NO\" type=\"STRING\" size=\"10\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"10\"/><Column id=\"RCEPT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SN_2\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE_2\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_DSPTH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_2_1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_2_2\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQST_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_KND\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","835","17","50","25",null,null,this);_a.set_taborder("3");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","8","15","296",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"8","15","296","2",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","25","2","672","15",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN","absolute","17","20","180","19",null,null,this);_a.set_taborder("11");_a.set_text("일상감사불러오기");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","40","98","650","2",null,null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","17","116",null,null,"17","15",this);_a.set_taborder("13");this.addChild(_a.name,_a);_a=new Grid("grd_edcTraingCompl","absolute","0","0",null,null,"0","0",this.div_Cont);_a.set_taborder("0");_a.set_binddataset("DS_EDAY_AUDIT");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"접수번호\"/><Cell col=\"2\" text=\"접수일자\"/><Cell col=\"3\" text=\"소관부서\"/><Cell col=\"4\" text=\"계약분류\"/><Cell col=\"5\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"사업\"/><Cell row=\"1\" style=\"align:top;\" text=\"코드\"/></Cell><Cell col=\"6\" text=\"사업명\"/><Cell col=\"7\" text=\"건명\"/><Cell col=\"8\" text=\"감사자\"/><Cell col=\"9\" rowspan=\"2\" text=\"결과통보여부\"/><Cell row=\"1\" colspan=\"3\" text=\"감사결과\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"의견내용\"/><Cell row=\"1\" col=\"6\" text=\"사업비\"/><Cell row=\"1\" col=\"7\" text=\"조치결과\"/><Cell row=\"1\" col=\"8\" text=\"조치일자\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:EDAY_AUDIT_NO\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:RCEPT_DE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NM\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" text=\"bind:INSTT_ACCTO_CL\" combodataset=\"DS_INSTT_ACCTO_CL\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:BSNS_CODE\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:BSNS_NM\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_NM\" tooltiptext=\"bind:EDAY_AUDIT_NM\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:ADTOR_EMPNM\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:RESULT_DSPTH_AT\" combodataset=\"ds_resultDspthAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_edayAuditresultSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:OPINION_CN\" wordwrap=\"char\" tooltiptext=\"bind:OPINION_CN\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSNS_AMOUNT\"/><Cell row=\"1\" col=\"7\" edittype=\"none\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:MANAGT_RESULT\" wordwrap=\"char\" tooltiptext=\"bind:MANAGT_RESULT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"8\" displaytype=\"date\" text=\"bind:MANAGT_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static01","absolute","23",null,"650","15",null,"0",this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","49",null,"59","15",null,this);_a.set_taborder("15");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_de","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("60");_a.set_text("접수기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","59",null,null,this.div_search);_a.set_taborder("61");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_de1","absolute","79","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("62");_a.set_value("20160101");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static04","absolute","183","8","14","16",null,null,this.div_search);_a.set_taborder("63");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_de2","absolute","200","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("64");_a.set_value("20160101");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","300","-1","15","59",null,null,this.div_search);_a.set_taborder("69");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_edcNm00","absolute","15","29","62","21",null,null,this.div_search);_a.set_taborder("70");_a.set_text("건명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edcNm","absolute","79","29","411","21",null,null,this.div_search);_a.set_taborder("71");this.div_search.addChild(_a.name,_a);_a=new Static("sta_insttAcctoCl00","absolute","315","5","60","21",null,null,this.div_search);_a.set_taborder("72");_a.set_text("계약분류");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_insttAcctoCl","absolute","380","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("73");_a.set_innerdataset("DS_INSTT_ACCTO_CL");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_DEPT_CODE","absolute","504","5","61","21",null,null,this.div_search);_a.set_taborder("74");_a.set_text("소관부서");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("right middle");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","570","5","200","22",null,null,this.div_search);_a.set_taborder("75");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","490","-1","15","59",null,null,this.div_search);_a.set_taborder("76");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","68",null,this);_a.set_taborder("16");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Layout("default","",700,234,this.div_Cont,function(_b){_b.set_taborder("13");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("15");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",900,526,this,function(_b){_b.set_classname("AUD010301_P01");_b.set_titletext("일상감사불러오기");});this.addLayout(_a.name,_a);_a=new BindItem("item12","Div00.edt_UPLMT_SCORE","value","DS_INTGTY_MLG_REGIST","UPLMT_SCORE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","Div00.edt_SCORE","value","DS_INTGTY_MLG_REGIST","SCORE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.edt_CSBY_ALLOT","value","DS_INTGTY_MLG_REGIST","CSBY_ALLOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Div00.cal_APPLC_DE","value","DS_INTGTY_MLG_REGIST","APPLC_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Div00.edt_ATCH_FILE","value","DS_INTGTY_MLG_REGIST","ATCH_FILE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","Div00.edt_RM","value","DS_INTGTY_MLG_REGIST","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Div00.edt_MLG_DETAIL","value","DS_INTGTY_MLG_REGIST","MLG_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Div00.edt_MLG_KND","value","DS_INTGTY_MLG_REGIST","MLG_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div00.edt_MLG_SE","value","DS_INTGTY_MLG_REGIST","MLG_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Div00.cmb_JSSFC_SE","value","DS_INTGTY_MLG_REGIST","JSSFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Div00.cmb_RSPOFC_SE","value","DS_INTGTY_MLG_REGIST","RSPOFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Div00.cmb_DEPT_CODE","value","DS_INTGTY_MLG_REGIST","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Div00.edt_RSPOFC_SE","value","DS_REGIST_INFO","RSPOFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cal_de1","value","ds_cond","REQST_BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_de2","value","ds_cond","REQST_ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_search.edt_edcNm","value","ds_cond","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_search.cmb_insttAcctoCl","value","ds_cond","CNTRCT_KND");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("AUD010301_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD010301_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD010301_P01.xfdl",function(){this.AUD010301_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.AUD010301_P01_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _a=[["DS_PUBLIC_AUDIT_CL","AUD014",1,"전체"],["DS_INSTT_ACCTO_CL","AUD015",1,"전체"],["ds_edayAuditresultSe","AUD016",1,""],];var _b=function(_c,_d,_e){this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.copyData(this.parent.arg_1);this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){trace(this.ds_cond.saveXML());this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/aud/AUD010301/selectAuditDiary.do";var _c="input01=ds_cond";var _d="DS_EDAY_AUDIT=output01";break;break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;}}};this.div_SearchArea_btn_Close_onclick=function(_a,_b){this.close();};this.fn_confirm=function(_a,_b){this.ds_search.clearData();this.ds_edcTraingComplList.filter("CHK == 1");this.ds_search.copyData(this.ds_edcTraingComplList,true);if(this.ds_search.rowcount>0){this.fn_transaction("selectEmpnoList");}else{this.close();}};this.div_Cont_grd_edcTraingCompl_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else{this.gfn_gridSort(_a,_b);}};this.div_Cont_grd_edcTraingCompl_oncelldblclick=function(_a,_b){this.ds_close.clearData();this.ds_close.addRow();this.ds_close.copyRow(0,this.DS_EDAY_AUDIT,_b.row);this.close(this.ds_close.saveXML());};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD010301_P01_onload,this);this.addEventHandler("oninit",this.AUD010301_P01_oninit,this);this.btn_Close.addEventHandler("onclick",this.div_SearchArea_btn_Close_onclick,this);this.sta_AUDIT_PLAN.addEventHandler("onclick",this.Static00_onclick,this);this.div_Cont.grd_edcTraingCompl.addEventHandler("oncelldblclick",this.div_Cont_grd_edcTraingCompl_oncelldblclick,this);this.div_Cont.grd_edcTraingCompl.addEventHandler("onheadclick",this.div_Cont_grd_edcTraingCompl_onheadclick,this);this.div_search.cal_de1.addEventHandler("onchanged",this.cal_DT1_onchanged,this);this.div_search.cal_de1.addEventHandler("oneditclick",this.div_search_cal_ACQS_DE1_oneditclick,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);};this.loadIncludeScript("AUD010301_P01.xfdl");this.loadPreloadList();};})();