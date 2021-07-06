﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL020106");this.set_classname("SAL020106");this.set_titletext("기술수당승인관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_clsfSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_confmSe",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_reqstSe",this);_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">취득</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">상실</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">변경</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_qualfAllwncConfmInfo",this);_a._setContents("<ColumnInfo><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRQFC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CRQFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CRQFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_OFFIC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_CONFM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_1\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_crqfc",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_CONFM_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_confmSes",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","2",null,"20","98.64%",null,this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","10.11%","53",null,"5","86.2%",null,this.div_search);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","487","5","40","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","523","5","168","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","5","68","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("신청일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_reqstDe","absolute","76","5","112","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static04","absolute","189","5","19","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_reqstDe2","absolute","207","5","112","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static02","absolute","31%","2",null,"20","67.64%",null,this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","334","5","68","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("승인구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","46.06%","2",null,"20","52.58%",null,this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","173","19",null,null,this);_a.set_taborder("2");_a.set_text("기술수당승인정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","33",null,"10","2.64%",null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","53",null,"5","2.64%",null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,null,"1.23%","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,null,"0%","0",this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_qualfAllwncConfm","absolute","0","58",null,null,"28","0",this);_a.set_taborder("7");_a.set_binddataset("ds_qualfAllwncConfmInfo");_a.style.set_cursor("hand");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"81\"/><Column size=\"59\"/><Column size=\"73\"/><Column size=\"94\"/><Column size=\"163\"/><Column size=\"119\"/><Column size=\"78\"/><Column size=\"81\"/><Column size=\"59\"/><Column size=\"170\"/><Column size=\"93\"/><Column size=\"106\"/><Column size=\"115\"/><Column size=\"99\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청일자\"/><Cell col=\"2\" text=\"신청구분\"/><Cell col=\"3\" text=\"승인여부\"/><Cell col=\"4\" text=\"승인일자\"/><Cell col=\"5\" text=\"반려내용\"/><Cell col=\"6\" text=\"부서명\"/><Cell col=\"7\" text=\"사번\"/><Cell col=\"8\" text=\"사원명\"/><Cell col=\"9\" text=\"직급\"/><Cell col=\"10\" text=\"자격증명칭\"/><Cell col=\"11\" text=\"자격증번호\"/><Cell col=\"12\" text=\"취득일자\"/><Cell col=\"13\" text=\"발급처기관\"/><Cell col=\"14\" text=\"만기일자\"/><Cell col=\"15\" text=\"갱신일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:REQST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:REQST_SE\" combodataset=\"ds_reqstSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:SALARY_CONFM_AT\" combodataset=\"ds_confmSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:SALARY_CONFM_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:RETURN_CN\"/><Cell col=\"6\" text=\"bind:DEPT_NM\"/><Cell col=\"7\" text=\"bind:EMPNO\"/><Cell col=\"8\" text=\"bind:EMPNM\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:HR_CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CRQFC_NM\"/><Cell col=\"11\" text=\"bind:CRQFC_NO\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:ACQS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:ISSU_OFFIC\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:EXPRTN_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"date\" text=\"bind:UPDT_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","135","38","303","20",null,null,this);_a.set_taborder("8");_a.set_text("(내역을 더블클릭하면 상세내역을 볼수 있습니다.)");_a.style.set_color("crimson");this.addChild(_a.name,_a);_a=new Combo("cmb_salaryConfmAt","absolute","396","6","79","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("9");_a.set_innerdataset("@ds_confmSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("true");_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL020106");_b.set_titletext("기술수당승인관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_reqstDe","value","ds_cond","REQST_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_reqstDe2","value","ds_cond","REQST_DE2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","cmb_salaryConfmAt","value","ds_cond","SALARY_CONFM_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("SAL020106.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL020106.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL020106.xfdl",function(){this.save_row= -1;this.checkDs=[];this.SAL020106_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_EMP.Empno_SetValue(this.fn_getEmpno());};this.SAL020106_onload=function(_a,_b){this.div_search.cal_reqstDe.set_value(this.dateUtils.format(this.gfn_today(),"yyyymmdd"));this.div_search.cal_reqstDe2.set_value(this.dateUtils.format(this.gfn_today(),"yyyymmdd"));this.fn_loadCombo();this.fn_search();};this.fn_init_form=function(){this.fn_misFormInit(this);this.gfn_initForm(this);this.ds_reqstSe.clearData();this.ds_confmSe.clearData();this.ds_confmSes.clearData();var _a=this.ds_cond.addRow();_a=this.ds_reqstSe.addRow();this.ds_reqstSe.setColumn(_a,"CODE","1");this.ds_reqstSe.setColumn(_a,"CODE_NM","취득");_a=this.ds_reqstSe.addRow();this.ds_reqstSe.setColumn(_a,"CODE","2");this.ds_reqstSe.setColumn(_a,"CODE_NM","상실");_a=this.ds_reqstSe.addRow();this.ds_reqstSe.setColumn(_a,"CODE","3");this.ds_reqstSe.setColumn(_a,"CODE_NM","변경");_a=this.ds_confmSe.addRow();this.ds_confmSe.setColumn(_a,"CODE","");this.ds_confmSe.setColumn(_a,"CODE_NM","전체");_a=this.ds_confmSe.addRow();this.ds_confmSe.setColumn(_a,"CODE","1");this.ds_confmSe.setColumn(_a,"CODE_NM","미승인");_a=this.ds_confmSe.addRow();this.ds_confmSe.setColumn(_a,"CODE","2");this.ds_confmSe.setColumn(_a,"CODE_NM","승인");_a=this.ds_confmSe.addRow();this.ds_confmSe.setColumn(_a,"CODE","3");this.ds_confmSe.setColumn(_a,"CODE_NM","반려");this.ds_cond.setColumn(0,"SALARY_CONFM_AT","");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_crqfc","HRM009",1,""],["ds_clsfSe","HRM002",1,""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_qualfAllwncConfmInfo)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_qualfAllwncConfmInfo.clearData();this.fn_transaction("selectQualfAllwncReqstList");};this.fn_insert=function(){};this.fn_delete=function(){if(this.ds_qualfAllwncConfmInfo.rowcount>0){var _a=this.ds_qualfAllwncConfmInfo.rowposition;if(this.ds_qualfAllwncConfmInfo.getColumn(_a,"SALARY_CONFM_AT")=="1"){if(this.gfn_message("confirm.삭제여부")){this.ds_qualfAllwncConfmInfo.deleteRow(_a);}}else{this.alert("승인, 반려된 건은 삭제할 수 없습니다.");}}};this.fn_save=function(){if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveQualfAllwncReqstInfo");}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_qualfAllwncConfmInfo.reset();this.ds_qualfAllwncConfmInfo.applyChange();return;}};this.fn_transaction=function(_a){switch(_a){case "selectQualfAllwncReqstList":var _b="/hsco/mis/sal/SAL020105/selectQualfAllwncReqstList.do";var _c="input1=ds_cond";var _d="ds_qualfAllwncConfmInfo=output1";break;case "saveQualfAllwncReqstInfo":var _b="/hsco/mis/sal/SAL020105/qualfAllwncReqstInfoD.do";var _c="input1=ds_qualfAllwncConfmInfo:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectQualfAllwncReqstList":if(this.save_row> -1){this.ds_qualfAllwncConfmInfo.set_rowposition(this.save_row);this.save_row= -1;}break;case "saveQualfAllwncReqstInfo":this.fn_search();break;}}};this.fn_popup_callback=function(_a,_b){this.fn_search();};this.grd_qualfAllwncConfm_oncelldblclick=function(_a,_b){if(this.ds_qualfAllwncConfmInfo.getColumn(this.ds_qualfAllwncConfmInfo.rowposition,"EMPNO")){this.save_row=this.ds_qualfAllwncConfmInfo.rowposition;var _c=system.clientToScreenX(this,10);var _d=system.clientToScreenY(this,10);var _e=new ChildFrame;_e.init("Popup1","absolute",_c,_d,600,600,null,null,"mis_sal::SAL020105_P01.xfdl");_e.set_openalign("center middle");_e.set_dragmovetype("all");_e.set_showtitlebar(true);var _f=this.ds_qualfAllwncConfmInfo.getColumn(_b.row,"EMPNO");var _g=this.ds_qualfAllwncConfmInfo.getColumn(_b.row,"REQST_SN");var _h=this.ds_qualfAllwncConfmInfo.getColumn(this.ds_qualfAllwncConfmInfo.rowposition,"SALARY_CONFM_AT");_e.showModal(this.getOwnerFrame(),{empno:_f,reqstSn:_g,confmAt:_h,popupSttus:"M"},this,"fn_popup_callback");}else{this.gfn_message("comm.항목.선택.요청","사원");}};});this.on_initEvent=function(){this.addEventHandler("onload",this.SAL020106_onload,this);this.addEventHandler("oninit",this.SAL020106_oninit,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.grd_qualfAllwncConfm.addEventHandler("oncelldblclick",this.grd_qualfAllwncConfm_oncelldblclick,this);};this.loadIncludeScript("SAL020106.xfdl");this.loadPreloadList();};})();