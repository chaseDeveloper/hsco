﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090211");this.set_classname("HRM090211");this.set_titletext("우편물발송대장[확인]");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_sndngList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDER_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDER_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDER_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDER_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTN_MAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SJ1\" type=\"STRING\" size=\"256\"/><Column id=\"PSTMTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"STRING\" size=\"256\"/><Column id=\"RETRN_CO\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTMTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_pstmtrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGN_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"from\">BGN_DE</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emp_sort",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_sndngDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("발송일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","79","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","204","5","12","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","219","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_pstmtrSe","absolute","850","5","38","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("종류");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_pstmtrSe","absolute","888","5","80","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_pstmtrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new CheckBox("chk_return","absolute","973","5","51","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("반송");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","354","5","64","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","418","5","195","21",null,null,this.div_search);_a.set_taborder("10");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","627","5","51","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("사번");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","675","5","166","21",null,null,this.div_search);_a.set_taborder("12");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_sndngList","absolute","0","43","64","19",null,null,this);_a.set_taborder("4");_a.set_text("발송내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","99",null,"932","105",null,"0",this.div_work);_a.set_taborder("1");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_reqstDtl","absolute","0",null,"120","19",null,"110",this.div_work);_a.set_taborder("2");_a.set_text("경조사 상세내용");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("sta_ctsnnDtl","absolute","0",null,"100","105",null,"0",this.div_work);_a.set_taborder("3");_a.set_text("경조상세");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new TextArea("txt_ctsnnDtl","absolute","102",null,"926","99",null,"3",this.div_work);_a.set_taborder("4");_a.set_wordwrap("char");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_sndngList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_sndngList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"발송일자\"/><Cell col=\"3\" text=\"확인\"/><Cell col=\"4\" rowspan=\"2\" text=\"확인자\"/><Cell col=\"5\" rowspan=\"2\" text=\"확인일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"부서\"/><Cell col=\"7\" rowspan=\"2\" text=\"성명\"/><Cell col=\"8\" rowspan=\"2\" text=\"수신자명\"/><Cell col=\"9\" rowspan=\"2\" text=\"제목\"/><Cell col=\"10\" rowspan=\"2\" text=\"종류\"/><Cell col=\"11\" rowspan=\"2\" text=\"수량\"/><Cell col=\"12\" rowspan=\"2\" text=\"반송개수\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:SNDNG_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CNFRMR_EMPNM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:CNFIRM_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SENDER_DEPT_CODE\" combodataset=\"ds_dept\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SENDER_EMPNM\" combodataset=\"ds_emp\" combocodecol=\"CODE_NM\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RECPTN_MAN_NM\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SJ1\"/><Cell col=\"10\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PSTMTR_SE\" combodataset=\"ds_pstmtrSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:QY\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RETRN_CO\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_excel","absolute",null,"46","25","19","28",null,this);_a.set_taborder("5");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",166,21,this.div_search.div_EMP,function(_b){_b.set_taborder("12");_b.set_url("com::empno.xfdl");_b.set_async("false");});this.div_search.div_EMP.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM090211");_b.set_titletext("우편물발송대장[확인]");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_pstmtrSe","value","ds_cond","PSTMTR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_bgnDe","value","ds_cond","BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_endDe","value","ds_cond","END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.chk_return","value","ds_cond","RETURN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM090211.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090211.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM090211.xfdl",function(){this.checkDs=[this.ds_sndngList];this.isAuth=false;this.HRM090211_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM090211_onload=function(_a,_b){this.isAuth=(this.gfn_authcode("005")> -1)||(this.gfn_authcode("112")> -1);this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_pstmtrSe","_HRM022","1","전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(!this.isAuth){this.div_search.div_DEPT.fn_set_enable(false);this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_EMP.fn_set_deptCode(this.gfn_getDeptId());}var _a=this.gfn_today();var _b=this.dateUtils.addMonth(_a, -1,'s');this.ds_cond.setColumn(0,"END_DE",_a);this.ds_cond.setColumn(0,"BGN_DE",_b);this.ds_cond.setColumn(0,"RETURN",0);this.fn_search();this.fn_transaction("selectdeptcodeList");};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_sndngList.clearData();this.fn_transaction("selectSndngList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_sndngList)){alert("저장할 내역이 없습니다.");return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_sndngList.rowposition;this.fn_transaction("saveSndngU");}};this.fn_transaction=function(_a){switch(_a){case "selectSndngList":var _b="/hsco/mis/hrm/HRM090211/selectSndngList.do";var _c="input1=ds_cond";var _d="ds_sndngList=output1";break;case "saveSndngU":var _b="/hsco/mis/hrm/HRM090211/saveSndngU.do";var _c="input1=ds_sndngList:U";var _d="";break;case "selectdeptcodeList":var _b="hsco/mis/sal/SAL030112/selectdeptcodeList.do";var _c="input1=ds_cond00";var _d="ds_dept=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectSndngList":if(this.saveRow> -1){this.ds_sndngList.set_rowposition(this.saveRow);this.saveRow= -1;}this.fn_filter_combo();break;case "saveSndngU":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.ds_sndngList_oncolumnchanged=function(_a,_b){if(_b.columnid=="CNFIRM_AT"){var _c="";var _d="";var _e="";var _f="";var _g=_a.getOrgColumn(_b.row,_b.columnid);if(_b.newvalue==_g){_c=_a.getOrgColumn(_b.row,"CNFRMR_EMPNO");_d=_a.getOrgColumn(_b.row,"CNFRMR_EMPNM");_e=_a.getOrgColumn(_b.row,"CNFRMR_DEPT_CODE");_f=_a.getOrgColumn(_b.row,"CNFIRM_DE");}else if(_b.newvalue=='1'){_c=this.fn_getEmpno();_d=this.fn_getEmpnm();_e=this.gfn_getDeptId();_f=this.gfn_today();}_a.setColumn(_b.row,"CNFRMR_EMPNO",_c);_a.setColumn(_b.row,"CNFRMR_EMPNM",_d);_a.setColumn(_b.row,"CNFRMR_DEPT_CODE",_e);_a.setColumn(_b.row,"CNFIRM_DE",_f);}};this.div_work_grd_sndngList_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};this.div_work_grd_sndngList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else if(_b.col==3){this.gfn_setGridCheckAll(_a,_b);for(var _i=0;_i<this.ds_sndngList.rowcount;_i++ ){var _c="";var _d="";var _e="";var _f="";var _g=this.ds_sndngList.getColumn(_i,"CNFIRM_AT");var _h=this.ds_sndngList.getOrgColumn(_i,"CNFIRM_AT");if(_g==_h){_c=this.ds_sndngList.getOrgColumn(_i,"CNFRMR_DEPT_CODE");_d=this.ds_sndngList.getOrgColumn(_i,"CNFRMR_EMPNO");_e=this.ds_sndngList.getOrgColumn(_i,"CNFRMR_EMPNM");_f=this.ds_sndngList.getOrgColumn(_i,"CNFIRM_DE");}else if(_g=='1'){_c=this.gfn_getDeptId();_d=this.fn_getEmpno();_e=this.fn_getEmpnm();_f=this.gfn_today();}this.ds_sndngList.setColumn(_i,"CNFRMR_DEPT_CODE",_c);this.ds_sndngList.setColumn(_i,"CNFRMR_EMPNO",_d);this.ds_sndngList.setColumn(_i,"CNFRMR_EMPNM",_e);this.ds_sndngList.setColumn(_i,"CNFIRM_DE",_f);}}this.gfn_gridSort(_a,_b);};this.div_work_btn_excel_onclick=function(_a,_b){this.gfn_exportExcel(this.div_work.grd_sndngList,"SndngList");};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_sndngList.reset();this.ds_sndngList.applyChange();return;}};this.fn_filter_combo=function(){var _a=this.ds_sndngList.getRowCount();var _b=0;for(var _g=0;_g<_a;_g++ ){_b=this.ds_emp_sort.addRow();this.ds_emp_sort.copyRow(_b,this.ds_sndngList,_g,"CODE=SENDER_EMPNO, CODE_NM=SENDER_EMPNM");}this.ds_emp_sort.set_keystring("S:+CODE_NM");var _c="";var _d="";var _e=this.ds_emp_sort.getRowCount();var _f=0;for(var _g=0;_g<_e;_g++ ){_c=this.ds_emp_sort.getColumn(_g,"CODE_NM");if(_c!=_d){_f=this.ds_emp.addRow();this.ds_emp.copyRow(_f,this.ds_emp_sort,_g,"CODE=CODE, CODE_NM=CODE_NM");_d=_c;}}};});this.on_initEvent=function(){this.ds_sndngList.addEventHandler("oncolumnchanged",this.ds_sndngList_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM090211_oninit,this);this.addEventHandler("onload",this.HRM090211_onload,this);this.div_work.grd_sndngList.addEventHandler("oncellclick",this.div_work_grd_sndngList_oncellclick,this);this.div_work.grd_sndngList.addEventHandler("onheadclick",this.div_work_grd_sndngList_onheadclick,this);this.btn_excel.addEventHandler("onclick",this.div_work_btn_excel_onclick,this);};this.loadIncludeScript("HRM090211.xfdl");this.loadPreloadList();};})();