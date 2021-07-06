﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL010112");this.set_classname("");this.set_titletext("부서정보관리");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_dept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SALARY_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_his",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">SALARY_DEPT_CODE</Col><Col id=\"msgId\">부서코드</Col><Col id=\"notNull\">Y</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\">6</Col><Col id=\"compId\">ds_dept</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">SALARY_DEPT_NM</Col><Col id=\"msgId\">부서명</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_dept</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">BSNS_TY</Col><Col id=\"msgId\">사업유형</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_dept</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">OUTPT_SEQ</Col><Col id=\"msgId\">출력순번</Col><Col id=\"lengthChkGb\"/><Col id=\"nlength\"/><Col id=\"compId\">ds_dept</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_prj012",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","43",null,"21","845",null,this);_a.set_taborder("41");_a.set_text("부서목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_USE_ENNC","absolute","14","5","88","20",null,null,this.div_search);_a.set_taborder("4");_a.set_text("사용유무");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_USE_AT","absolute","81","5","184","20",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_useAt");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("%");_a.set_direction("vertical");_a.set_cssclass("rdo_WF_Essential");_a.set_index("0");_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static18","absolute","7.18%","0",null,"31","92.35%",null,this);_a.set_taborder("49");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Grid("grd_dept","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_dept");_a.set_treeuseexpandkey("true");_a.set_treeuseimage("true");_a.set_treeinitstatus("expand,all");_a.set_treeusecheckbox("false");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"부서코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"부서명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업유형\"/><Cell col=\"3\" text=\"사용\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"출력순번\"/></Band><Band id=\"body\"><Cell edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'mask' : 'none'\" style=\"align:center middle;\" text=\"bind:SALARY_DEPT_CODE\" mask=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? '@@@@@@' : ''\" editlimit=\"6\" editdisplay=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" editlengthunit=\"utf8\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:SALARY_DEPT_NM\" editdisplay=\"display\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BSNS_TY\" combodataset=\"ds_prj012\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/><Cell col=\"4\" edittype=\"masknumber\" text=\"bind:OUTPT_SEQ\" mask=\"######\" maskchar=\" \" editlimit=\"6\" editdisplay=\"display\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("62");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("63");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("부서정보관리");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","DS_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_search.rdo_USE_AT","value","ds_cond","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SAL010112.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL010112.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL010112.xfdl",function(){var _a= -1;this.SAL010112_oninit=function(_b,_c){};this.SAL010112_onload=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.ds_cond.setColumn(_b,"USE_AT",'1');var _c=[["ds_prj012","PRJ012","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_dept.clearData();this.fn_transaction("selectDeptList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_dept,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_dept.rowposition;this.fn_transaction("saveDeptList");}};this.fn_transaction=function(_b){switch(_b){case "selectDeptList":var _c="hsco/mis/sal/SAL010112/selectDeptList.do";var _d="input1=ds_cond";var _e="ds_dept=output1";break;case "saveDeptList":var _c="hsco/mis/sal/SAL010112/saveDept.do";var _d="input1=ds_dept:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "selectDeptList":if(this.ds_dept.rowcount>0&&_a> -1){this.ds_dept.set_rowposition(_a);_a= -1;}break;case "saveDeptList":this.fn_search();break;case "selectDeptHis":break;}}};this.fn_insert=function(){var _b=this.ds_dept.addRow();};this.fn_delete=function(){var _b=this.ds_dept.rowposition;var _c=this.ds_dept.getRowType(_b);var _d=this.ds_dept.getColumn(_b,"LOWER_DEPT");if(_d>'0'){this.alert("하위부서[ "+_d+" 개] 가 연결된 상태입니다. 삭제할 수 없습니다");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_dept.deleteRow(_b);};this.fn_cancel=function(){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}this.ds_dept.reset();this.ds_dept.applyChange();};this.ds_dept_oncolumnchanged=function(_b,_c){if(_c.columnid=="DEPT_CODE"){_b.setColumn(_c.row,_c.columnid,_c.newvalue.replace(/\s/g,'0'));}};});this.on_initEvent=function(){this.ds_dept.addEventHandler("oncolumnchanged",this.ds_dept_oncolumnchanged,this);this.addEventHandler("onload",this.SAL010112_onload,this);this.addEventHandler("oninit",this.SAL010112_oninit,this);};this.loadIncludeScript("SAL010112.xfdl");};})();