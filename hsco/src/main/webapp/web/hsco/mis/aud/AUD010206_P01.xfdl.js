﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD010206_P01");this.set_classname("AUD010206_P01");this.set_titletext("일상감사결과완료");this._setFormPosition(0,0,900,450);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REQUST_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ADTOR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_edayAudit",this);_a._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RELATE_LRG_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_edayAuditCopy",this);_a._setContents("<ColumnInfo><Column id=\"EDAY_AUDIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_AUDIT_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RELATE_LRG_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EDAY_AUDIT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud014S",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud014",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud015S",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud015",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud016S",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud016",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud036",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_aud038",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctr030",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"0","0",this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","121",null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","179","21",null,null,this);_a.set_taborder("8");_a.set_text("일상감사결과");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","15","104",null,"10","15",null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","15","40",null,"5","15",null,this);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_edayAudit","absolute","15","114",null,null,"15","15",this);_a.set_taborder("16");_a.set_binddataset("ds_edayAudit");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"500\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요청번호\"/><Cell col=\"1\" text=\"요청일자\"/><Cell col=\"2\" text=\"소관부서\"/><Cell col=\"3\" text=\"공감법분류\"/><Cell col=\"4\" text=\"건명\"/><Cell col=\"5\" text=\"관련법규내용\"/><Cell col=\"6\" text=\"회신일자\"/><Cell col=\"7\" text=\"감사결과\"/><Cell col=\"8\" colspan=\"2\" text=\"의견내용\"/></Band><Band id=\"body\"><Cell style=\"padding: ;\" text=\"bind:EDAY_AUDIT_NO\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:REQUST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:PUBLIC_AUDIT_CL\" combodataset=\"ds_aud014\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_NM\" wordwrap=\"char\" tooltiptext=\"bind:EDAY_AUDIT_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:RELATE_LRG_CN\" wordwrap=\"char\" tooltiptext=\"bind:RELATE_LRG_CN\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:RPLY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:EDAY_AUDIT_RESULT\" combodataset=\"ds_aud016\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" colspan=\"2\" style=\"align:left middle;padding:0 0 0 5;\" text=\"bind:OPINION_CN\" wordwrap=\"char\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:OPINION_CN\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_SearchArea","absolute","15","45",null,"59","15",null,this);_a.set_taborder("17");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_year","absolute","15","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("20");_a.set_text("요청일시");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Calendar("cal_rceptBgnDe","absolute","79","5","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("21");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static02","absolute","194","5","10","21",null,null,this.div_SearchArea);_a.set_taborder("22");_a.set_text("~");this.div_SearchArea.addChild(_a.name,_a);_a=new Calendar("cal_rceptEndDe","absolute","209","5","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("23");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_dept","absolute","335","5","64","21",null,null,this.div_SearchArea);_a.set_taborder("24");_a.set_text("소관부서");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Edit("edt_edayAuditNm","absolute","78","31","241","21",null,null,this.div_SearchArea);_a.set_taborder("25");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_edayAuditNm","absolute","15","31","38","21",null,null,this.div_SearchArea);_a.set_taborder("26");_a.set_text("건명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Div("div_dept","absolute","399","5","200","22",null,null,this.div_SearchArea);_a.set_taborder("31");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("sta_dept00","absolute","335","32","51","21",null,null,this.div_SearchArea);_a.set_taborder("32");_a.set_text("감사자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_edayAuditResult","absolute","691","32","110","21",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);_a.set_taborder("33");_a.set_innerdataset("ds_aud016S");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_dept01","absolute","614","32","64","21",null,null,this.div_SearchArea);_a.set_taborder("34");_a.set_text("감사결과");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_SearchArea.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","399","32","162","21",null,null,this.div_SearchArea);_a.set_taborder("35");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("36");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static00","absolute","320","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("37");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static03","absolute","599","0","15",null,null,"0",this.div_SearchArea);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SearchArea.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_SearchArea,function(_b){_b.set_taborder("17");_b.set_cssclass("div_WFSA_Box");});this.div_SearchArea.addLayout(_a.name,_a);_a=new Layout("default","",900,450,this,function(_b){_b.set_classname("AUD010206_P01");_b.set_titletext("일상감사결과완료");});this.addLayout(_a.name,_a);_a=new BindItem("item6","div_SearchArea.cal_rceptBgnDe","value","ds_cond","REQUST_BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_SearchArea.cal_rceptEndDe","value","ds_cond","REQUST_END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_SearchArea.edt_edayAuditNm","value","ds_cond","EDAY_AUDIT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item27","div_SearchArea.cmb_edayAuditResult","value","ds_cond","EDAY_AUDIT_RESULT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("AUD010206_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD010206_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD010206_P01.xfdl",function(){this.AUD010206_P01_oninit=function(_a,_b){};this.AUD010206_P01_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();var _a=[["ds_aud014S","AUD014",1,"전체"],["ds_aud014","AUD014",1,""],["ds_aud015S","AUD015",1,"전체"],["ds_aud015","AUD015",1,""],["ds_aud016S","AUD016",1,"전체"],["ds_aud016","AUD016",1,""],["ds_aud036","AUD036",1,""],["ds_aud038","AUD038",1,""],["ds_ctr030","CTR030",1,""]];var _b=function(_c,_d,_e){this.div_SearchArea.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_SearchArea.div_EMP.fn_setBind("ds_cond","ADTOR_EMPNO","ADTOR_EMPNM");this.ds_cond.setColumn(0,"REQUST_BGN_DE",this.gfn_today().substring(0,4)+'0101');this.ds_cond.setColumn(0,"REQUST_END_DE",this.gfn_today());if(this.gfn_authGrpId("AUD_ADMIN")!= -1){this.chargerAt=true;}else{this.div_SearchArea.div_DeptComp.fn_setReadonly(true);this.div_SearchArea.div_DeptComp.div_Search.btn_dept.set_visible(false);this.div_SearchArea.div_DeptComp.fn_setCssclass("edt_WF_Readonly");this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());}this.fn_search();};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_edayAudit.clearData();this.fn_transaction("selectEdayAuditList");};this.fn_transaction=function(_a){switch(_a){case "selectEdayAuditList":var _b="/hsco/mis/aud/AUD010206/selectEdayAuditList.do";var _c="input1=ds_cond";var _d="ds_edayAudit=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectEdayAuditList":break;}}};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Confirm_onclick=function(_a,_b){this.ds_edayAuditCopy.clearData();var _c=this.ds_edayAuditCopy.addRow();var _d;_d=this.ds_edayAuditCopy.copyRow(_c,this.ds_edayAudit,this.ds_edayAudit.rowposition);this.close(this.ds_edayAuditCopy.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};this.grd_edayAudit_oncelldblclick=function(_a,_b){this.ds_edayAuditCopy.clearData();var _c=this.ds_edayAuditCopy.addRow();var _d;_d=this.ds_edayAuditCopy.copyRow(_c,this.ds_edayAudit,this.ds_edayAudit.rowposition);this.close(this.ds_edayAuditCopy.saveXML());};});this.on_initEvent=function(){this.addEventHandler("oninit",this.AUD010206_P01_oninit,this);this.addEventHandler("onload",this.AUD010206_P01_onload,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.grd_edayAudit.addEventHandler("oncelldblclick",this.grd_edayAudit_oncelldblclick,this);this.div_SearchArea.cmb_edayAuditResult.addEventHandler("onitemchanged",this.Div00_div_cmb_AUDIT_PLAN_KND_onitemchanged,this);this.div_SearchArea.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);};this.loadIncludeScript("AUD010206_P01.xfdl");this.loadPreloadList();};})();