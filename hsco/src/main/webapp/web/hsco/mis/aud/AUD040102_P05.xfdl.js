﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD040102_P05");this.set_classname("AUD040102_P05");this.set_titletext("청렴교육조회");this._setFormPosition(0,0,800,526);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CRSE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EDC_NM\"/><Col id=\"EDC_CRSE_NM\">청렴교육</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_edcTraingComplList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CRSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CRSE_DETAIL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPL_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CRTFC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CMPNY_SPRMNY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CRTFC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CALC_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_search",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_close",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CRTFC_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","733","17","50","25",null,null,this);_a.set_taborder("3");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","8","15","296",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"8","15","296","2",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","25","2","672","15",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_AUDIT_PLAN","absolute","17","20","180","19",null,null,this);_a.set_taborder("11");_a.set_text("청렴교육조회");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","40","98","650","2",null,null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","17","116",null,null,"17","15",this);_a.set_taborder("13");this.addChild(_a.name,_a);_a=new Grid("grd_edcTraingCompl","absolute","0","0",null,null,"0","0",this.div_Cont);_a.set_taborder("0");_a.set_binddataset("ds_edcTraingComplList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"94\" band=\"left\"/><Column size=\"72\" band=\"left\"/><Column size=\"59\" band=\"left\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"소속\"/><Cell col=\"2\" rowspan=\"2\" text=\"사번\"/><Cell col=\"3\" rowspan=\"2\" text=\"성명\"/><Cell col=\"4\" colspan=\"5\" text=\"교육훈련이수내역\"/><Cell col=\"9\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"교육\"/><Cell row=\"1\" style=\"align:top;\" text=\"시간\"/></Cell><Cell col=\"10\" rowspan=\"2\"><Cell style=\"align:bottom;\" text=\"훈련\"/><Cell row=\"1\" style=\"align:top;\" text=\"시간\"/></Cell><Cell row=\"1\" col=\"4\" text=\"시작일자\"/><Cell row=\"1\" col=\"5\" text=\"종료일자\"/><Cell row=\"1\" col=\"6\" text=\"교육과정\"/><Cell row=\"1\" col=\"7\" text=\"교육명\"/><Cell row=\"1\" col=\"8\" text=\"시행처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNO\"/><Cell col=\"3\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:EDC_CRSE_NM\"/><Cell col=\"7\" edittype=\"none\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EDC_NM\"/><Cell col=\"8\" edittype=\"none\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OPERTN_INSTT_NM\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" editfilter=\"digit\" style=\"align:middle;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EDC_TIME\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" editfilter=\"digit\" style=\"align:middle;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CRTFC_TIME\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static01","absolute","23",null,"650","15",null,"0",this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","49",null,"59","15",null,this);_a.set_taborder("15");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_de","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("60");_a.set_text("조회기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","59",null,null,this.div_search);_a.set_taborder("61");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_de1","absolute","79","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("62");_a.set_value("20160101");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static04","absolute","183","8","14","16",null,null,this.div_search);_a.set_taborder("63");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_de2","absolute","200","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("64");_a.set_value("20160101");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_edcNm","absolute","15","29","62","21",null,null,this.div_search);_a.set_taborder("65");_a.set_text("교육과정");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edcCrseㅊm","absolute","79","29","221","21",null,null,this.div_search);_a.set_taborder("66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_empnm","absolute","316","5","51","21",null,null,this.div_search);_a.set_taborder("67");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_emp","absolute","379","5","166","21",null,null,this.div_search);_a.set_taborder("68");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","300","-1","15","59",null,null,this.div_search);_a.set_taborder("69");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_edcNm00","absolute","315","29","62","21",null,null,this.div_search);_a.set_taborder("70");_a.set_text("교육과정");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edcNm","absolute","379","29","300","21",null,null,this.div_search);_a.set_taborder("71");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"17","50","25","70",null,this);_a.set_taborder("16");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"17","50","25","123",null,this);_a.set_taborder("17");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Layout("default","",700,234,this.div_Cont,function(_b){_b.set_taborder("13");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("15");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",800,526,this,function(_b){_b.set_classname("AUD040102_P05");_b.set_titletext("청렴교육조회");});this.addLayout(_a.name,_a);_a=new BindItem("item12","Div00.edt_UPLMT_SCORE","value","DS_INTGTY_MLG_REGIST","UPLMT_SCORE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","Div00.edt_SCORE","value","DS_INTGTY_MLG_REGIST","SCORE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.edt_CSBY_ALLOT","value","DS_INTGTY_MLG_REGIST","CSBY_ALLOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Div00.cal_APPLC_DE","value","DS_INTGTY_MLG_REGIST","APPLC_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Div00.edt_ATCH_FILE","value","DS_INTGTY_MLG_REGIST","ATCH_FILE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","Div00.edt_RM","value","DS_INTGTY_MLG_REGIST","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Div00.edt_MLG_DETAIL","value","DS_INTGTY_MLG_REGIST","MLG_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Div00.edt_MLG_KND","value","DS_INTGTY_MLG_REGIST","MLG_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div00.edt_MLG_SE","value","DS_INTGTY_MLG_REGIST","MLG_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Div00.cmb_JSSFC_SE","value","DS_INTGTY_MLG_REGIST","JSSFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Div00.cmb_RSPOFC_SE","value","DS_INTGTY_MLG_REGIST","RSPOFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Div00.cmb_DEPT_CODE","value","DS_INTGTY_MLG_REGIST","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Div00.edt_RSPOFC_SE","value","DS_REGIST_INFO","RSPOFC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cal_de1","value","ds_cond","STDR_DE1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_de2","value","ds_cond","STDR_DE2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_search.edt_edcCrseㅊm","value","ds_cond","EDC_CRSE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_search.edt_edcNm","value","ds_cond","EDC_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("AUD040102_P05.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD040102_P05.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD040102_P05.xfdl",function(){this.AUD040102_P05_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.AUD040102_P05_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_emp.fn_setBind("ds_cond","EMPNO","EMPNM");this.ds_cond.setColumn(0,"STDR_DE1",this.parent.arg_1);this.ds_cond.setColumn(0,"STDR_DE2",this.parent.arg_1);this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.fn_transaction("selectEdcTraingComplList");};this.fn_transaction=function(_a){switch(_a){case "selectEdcTraingComplList":var _b="hsco/mis/hrm/HRM080201/edcTraingComplList.do";var _c="input1=ds_cond";var _d="ds_edcTraingComplList=output1";break;break;case "selectEmpnoList":var _b="hsco/mis/aud/AUD040102_P05/selectEmpInfo.do";var _c="input01=ds_search";var _d="ds_close=output01";break;break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectEdcTraingComplList":this.ds_edcTraingComplList.filter("CRTFC_AT == '1'");break;case "selectEmpnoList":trace(this.ds_close.rowcount);this.close(this.ds_close.saveXML());break;}}};this.div_SearchArea_btn_Close_onclick=function(_a,_b){this.close();};this.fn_confirm=function(_a,_b){this.ds_search.clearData();this.ds_edcTraingComplList.filter("CHK == 1");this.ds_search.copyData(this.ds_edcTraingComplList,true);if(this.ds_search.rowcount>0){this.fn_transaction("selectEmpnoList");}else{this.close();}};this.div_Cont_grd_edcTraingCompl_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else{this.gfn_gridSort(_a,_b);}};this.div_Cont_grd_edcTraingCompl_oncelldblclick=function(_a,_b){var _c=(this.ds_edcTraingComplList.getColumn(_b.row,"CHK")==0)?1:0;this.ds_edcTraingComplList.setColumn(_b.row,"CHK",_c);};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond00_oncolumnchanged,this);this.addEventHandler("onload",this.AUD040102_P05_onload,this);this.addEventHandler("oninit",this.AUD040102_P05_oninit,this);this.btn_Close.addEventHandler("onclick",this.div_SearchArea_btn_Close_onclick,this);this.sta_AUDIT_PLAN.addEventHandler("onclick",this.Static00_onclick,this);this.div_Cont.grd_edcTraingCompl.addEventHandler("oncelldblclick",this.div_Cont_grd_edcTraingCompl_oncelldblclick,this);this.div_Cont.grd_edcTraingCompl.addEventHandler("onheadclick",this.div_Cont_grd_edcTraingCompl_onheadclick,this);this.div_search.cal_de1.addEventHandler("onchanged",this.cal_DT1_onchanged,this);this.div_search.cal_de1.addEventHandler("oneditclick",this.div_search_cal_ACQS_DE1_oneditclick,this);this.btn_Search.addEventHandler("onclick",this.fn_search,this);this.btn_Confirm.addEventHandler("onclick",this.fn_confirm,this);};this.loadIncludeScript("AUD040102_P05.xfdl");this.loadPreloadList();};})();