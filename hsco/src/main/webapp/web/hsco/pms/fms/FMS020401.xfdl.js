﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS020401");this.set_classname("");this.set_titletext("소모품관리대장");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_cmpds",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRHOUSNG_QY\" type=\"STRING\" size=\"256\"/><Column id=\"DLIVY_QY\" type=\"STRING\" size=\"256\"/><Column id=\"BNT\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFMER_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONFMER_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">관리부서</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","42","214","21",null,null,this);_a.set_taborder("41");_a.set_text("소모품 관리대장");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR00","absolute","15","5","70","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("관리부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","85","5","195","21",null,null,this.div_search);_a.set_taborder("7");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,null,"28","0",this);_a.set_taborder("51");_a.set_binddataset("ds_cmpds");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_treeinitstatus("collapse,all");_a.set_autoupdatetype("itemselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"관리일자\"/><Cell col=\"2\" text=\"품명\"/><Cell col=\"3\" text=\"입고량\"/><Cell col=\"4\" text=\"출고량\"/><Cell col=\"5\" text=\"잔량\"/><Cell col=\"6\" text=\"수령인명\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"승인\"/><Cell col=\"9\" text=\"승인자\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:MANAGE_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:PRDNM\" editlimit=\"200\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:WRHOUSNG_QY\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:DLIVY_QY\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:BNT\" mask=\"###,###,###,###,###\" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"6\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RECPTR_NM\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"7\" text=\"bind:REGISTER_EMPNM\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"expr:comp.parent.isAdmin == true ? 'checkbox' : 'none'\" text=\"bind:CONFM_AT\"/><Cell col=\"9\" text=\"bind:CONFMER_EMPNM\"/><Cell col=\"10\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("소모품관리대장");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FMS020401.xfdl","lib::comInclude.xjs");this.addIncludeScript("FMS020401.xfdl","mis_lib::misUtil.xjs");this.registerScript("FMS020401.xfdl",function(){this.nRowPos= -1;this.isAdmin=false;this.FMS020401_oninit=function(_a,_b){};this.FMS020401_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_search.div_dept.fn_setReadonly(true);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.set_enableevent(false);this.ds_cond.setColumn(_a,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_a,"DEPT_NM",this.gfn_getDeptName());this.ds_cond.set_enableevent(true);if(this.gfn_authGrpId("FMS_ADMIN")!= -1){this.isAdmin=true;this.div_search.div_dept.div_Search.btn_dept.set_enable(true);}this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_cmpds.clearData();this.fn_transaction("select");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_cmpds,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.nRowPos=this.ds_cmpds.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="hsco/pms/fms/FMS020401/select.do";var _c="input1=ds_cond";var _d="ds_cmpds=output1";break;case "save":var _b="hsco/pms/fms/FMS020401/save.do";var _c="input1=ds_cmpds:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.ds_cmpds.rowcount>0&&this.nRowPos> -1){this.ds_cmpds.set_rowposition(this.nRowPos);this.nRowPos= -1;}break;case "save":this.fn_search();break;}}};this.fn_popupCallback=function(_a,_b){var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(_a=="condVhcle"){this.ds_cond.setColumn(0,"DEPT_CODE",_c.getColumn(0,"DEPT_CODE"));this.ds_cond.setColumn(0,"DEPT_NM",_c.getColumn(0,"DEPT_NM"));this.fn_search();}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="DEPT_NM"){this.fn_search();}};this.fn_insert=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}var _a=this.ds_cond.getColumn(0,"DEPT_CODE");var _b=this.ds_cond.getColumn(0,"DEPT_NM");var _c=this.ds_cmpds.addRow();this.ds_cmpds.setColumn(_c,"DEPT_CODE",_a);this.ds_cmpds.setColumn(_c,"DEPT_NM",_b);this.ds_cmpds.setColumn(_c,"REGISTER_EMPNO",this.fn_getEmpno());this.ds_cmpds.setColumn(_c,"REGISTER_EMPNM",this.fn_getEmpnm());};this.fn_delete=function(){var _a=this.ds_cmpds.rowposition;this.ds_cmpds.deleteRow(_a);};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_cmpds)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_cmpds.reset();this.ds_cmpds.applyChange();};this.ds_cmpds_cancolumnchange=function(_a,_b){if(_b.columnid=="DLIVY_QY"){var _c=nexacro.toNumber(_b.newvalue,0,0,0);var _d=nexacro.toNumber(_a.getColumn(_b.row,"WRHOUSNG_QY"),0,0,0);if(_c>_d){alert("출고량은 입고량을 초과할 수 없습니다.");return false;}}else if(_b.columnid=="WRHOUSNG_QY"){var _c=nexacro.toNumber(_a.getColumn(_b.row,"DLIVY_QY"),0,0,0);var _d=nexacro.toNumber(_b.newvalue,0,0,0);if(_c>_d){alert("입고량은 출고량보다 작을 수 없습니다.");return false;}}};this.ds_cmpds_oncolumnchanged=function(_a,_b){if(_b.columnid=="CONFM_AT"){if(_b.newvalue=='1'){_a.setColumn(_b.row,"CONFMER_EMPNO",this.fn_getEmpno());_a.setColumn(_b.row,"CONFMER_EMPNM",this.fn_getEmpnm());}else{_a.setColumn(_b.row,"CONFMER_EMPNO","");_a.setColumn(_b.row,"CONFMER_EMPNM","");}}};});this.on_initEvent=function(){this.ds_cmpds.addEventHandler("oncolumnchanged",this.ds_cmpds_oncolumnchanged,this);this.ds_cmpds.addEventHandler("cancolumnchange",this.ds_cmpds_cancolumnchange,this);this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.FMS020401_onload,this);this.addEventHandler("oninit",this.FMS020401_oninit,this);};this.loadIncludeScript("FMS020401.xfdl");this.loadPreloadList();};})();