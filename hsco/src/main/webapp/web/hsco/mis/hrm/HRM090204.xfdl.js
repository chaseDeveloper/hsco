﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090204");this.set_classname("HRM090204");this.set_titletext("실적증명발급내역[확인]");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_issuList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBHDG\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_CMPNY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRGET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISSU_NBFPS\" type=\"STRING\" size=\"256\"/><Column id=\"RECPTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNFRMR_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELF_CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_file",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"FILE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"2000\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"20\"/><Column id=\"FILE_CN\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_MG\" type=\"INT\" size=\"8\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"INT\" size=\"5\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"INT\" size=\"5\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"DELETE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGN_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">END_DE</Col><Col id=\"from\">BGN_DE</Col><Col id=\"msgId\">조회종료일자^조회시작일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_selectFileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_sndngDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("발송기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","79","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","204","5","12","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","219","5","120","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Div("div_EMP","absolute","699","5","166","21",null,null,this.div_search);_a.set_taborder("4");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","635","5","51","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("사번");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","418","5","195","21",null,null,this.div_search);_a.set_taborder("6");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","354","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("조회부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_issuList","absolute","0","43","150","19",null,null,this);_a.set_taborder("2");_a.set_text("실적증명 발급내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Grid("grd_issuList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_issuList");_a.set_autoenter("select");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"발급일자\"/><Cell col=\"3\" colspan=\"5\" text=\"확인\"/><Cell col=\"8\" colspan=\"2\" text=\"등록자\"/><Cell col=\"10\" rowspan=\"2\" text=\"건명\"/><Cell col=\"11\" colspan=\"3\" text=\"신청인\"/><Cell col=\"14\" rowspan=\"2\" text=\"통수\"/><Cell col=\"15\" rowspan=\"2\" text=\"수령인\"/><Cell col=\"16\" rowspan=\"2\" text=\"첨부\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell row=\"1\" col=\"4\" text=\"확인부서\"/><Cell row=\"1\" col=\"5\" text=\"사번\"/><Cell row=\"1\" col=\"6\" text=\"성명\"/><Cell row=\"1\" col=\"7\" text=\"확인일자\"/><Cell row=\"1\" col=\"8\" text=\"부서\"/><Cell row=\"1\" col=\"9\" text=\"성명\"/><Cell row=\"1\" col=\"11\" text=\"주소\"/><Cell row=\"1\" col=\"12\" text=\"회사명\"/><Cell row=\"1\" col=\"13\" text=\"성명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:ISSU_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SELF_CNFIRM_AT\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CNFRMR_DEPT_NM\"/><Cell col=\"5\" text=\"bind:CNFRMR_EMPNO\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CNFRMR_EMPNM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:CNFIRM_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:DEPT_NM\"/><Cell col=\"9\" text=\"bind:EMPNM\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SUBHDG\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TRGET_ADRES\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TRGET_CMPNY_NM\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TRGET_NM\"/><Cell col=\"14\" displaytype=\"number\" editfilter=\"digit\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ISSU_NBFPS\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RECPTR_NM\"/><Cell col=\"16\" displaytype=\"expr:FILE_CNT &gt; 0 ? 'button' :  'none'\" text=\"다운로드\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM090204");_b.set_titletext("실적증명발급내역[확인]");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_bgnDe","value","ds_cond","BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_endDe","value","ds_cond","END_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM090204.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090204.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("HRM090204.xfdl","lib::comUpDownUtils.xjs");this.registerScript("HRM090204.xfdl",function(){this.checkDs=[this.ds_issuList];this.File_UpDownManager=null;this.saveRow= -1;this.isAuth=false;this.HRM090204_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM090204_onload=function(_a,_b){this.isAuth=(this.gfn_authcode("005")> -1)||(this.gfn_authcode("112")> -1);this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(!this.isAuth){this.div_search.div_DEPT.fn_set_enable(false);this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_EMP.fn_set_enable(false);this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());this.div_work.grd_issuList.setCellProperty("Body",4,"expandshow","hide");}var _c=this.gfn_today();var _d=this.dateUtils.addMonth(_c, -1,'s');this.ds_cond.setColumn(0,"END_DE",_c);this.ds_cond.setColumn(0,"BGN_DE",_d);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);var _a={useMultiUpload:false,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","HRM");this.File_UpDownManager.init(_a);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_issuList.clearData();this.fn_transaction("tbhrmIssuList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_issuList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_issuList.rowposition;this.fn_transaction("tbhrmIssuSave");}};this.fn_transaction=function(_a){switch(_a){case "tbhrmIssuList":var _b="/hsco/mis/hrm/HRM090204/tbhrmIssuList.do";var _c="input1=ds_cond";var _d="ds_issuList=output1";break;case "tbhrmIssuSave":var _b="/hsco/mis/hrm/HRM090204/tbhrmIssuSave.do";var _c="input1=ds_issuList:U";var _d="";break;case "selectFileList":this.ds_fileList.clearData();var _b="hsco/mis/hrm/HRM020102/selectFileList.do";var _c="input1=ds_cond_file";var _d="ds_fileList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "tbhrmIssuList":if(this.ds_issuList.getRowCount()==0){this.gfn_message("info.데이터.없음");}this.ds_fileList.clearData();var _d=this.ds_issuList.rowposition;if(this.ds_issuList.getColumn(_d,"FILE_SN")){this.ds_cond_file.setColumn(0,"FILE_SN",this.ds_issuList.getColumn(_d,"FILE_SN"));this.fn_transaction("selectFileList");}break;case "tbhrmIssuSave":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.div_work_grd_issuList_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}if(_b.cell==14){var _c=this.ds_issuList.rowposition;var _d=this.ds_issuList.getColumn(_c,"FILE_CNT");if(_d!='1'){return false;}if(this.ds_issuList.getColumn(_c,"FILE_SN")){this.ds_cond_file.setColumn(0,"FILE_SN",this.ds_issuList.getColumn(_c,"FILE_SN"));var _e=this.ds_fileList.getColumn(this.ds_fileList.rowposition,"FILE_SN");var _f=this.ds_fileList.getColumn(this.ds_fileList.rowposition,"FILE_ORDR");var _g=this.ds_fileList.getColumn(this.ds_fileList.rowposition,"ORGINL_FILE_NM");this.File_UpDownManager.download(_e,_f,_g);}}};this.div_work_grd_issuList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else if(_b.col==3){this.gfn_setGridCheckAll(_a,_b);for(var _j=0;_j<this.ds_issuList.rowcount;_j++ ){var _c="";var _d="";var _e="";var _f="";var _g="";var _h=this.ds_issuList.getColumn(_j,"SELF_CNFIRM_AT");var _i=this.ds_issuList.getOrgColumn(_j,"SELF_CNFIRM_AT");if(_h==_i){_c=this.ds_issuList.getOrgColumn(_j,"CNFRMR_DEPT_CODE");_d=this.ds_issuList.getOrgColumn(_j,"CNFRMR_DEPT_NM");_e=this.ds_issuList.getOrgColumn(_j,"CNFRMR_EMPNO");_f=this.ds_issuList.getOrgColumn(_j,"CNFRMR_EMPNM");_g=this.ds_issuList.getOrgColumn(_j,"CNFIRM_DE");}else if(_h=='1'){_c=this.gfn_getDeptId();_d=this.gfn_getDeptName();_e=this.fn_getEmpno();_f=this.fn_getEmpnm();_g=this.gfn_today();}this.ds_issuList.setColumn(_j,"CNFRMR_DEPT_CODE",_c);this.ds_issuList.setColumn(_j,"CNFRMR_DEPT_NM",_d);this.ds_issuList.setColumn(_j,"CNFRMR_EMPNO",_e);this.ds_issuList.setColumn(_j,"CNFRMR_EMPNM",_f);this.ds_issuList.setColumn(_j,"CNFIRM_DE",_g);}}this.gfn_gridSort(_a,_b);};this.ds_issuList_onrowposchanged=function(_a,_b){var _c=_a.getColumn(_b.newrow,"FILE_SN");this.ds_fileList.clearData();this.ds_cond_file.clearData();this.ds_cond_file.addRow();if(this.comUtils.isNotNull(_c)){this.ds_cond_file.setColumn(0,"FILE_SN",_c);this.fn_transaction("selectFileList");}};this.ds_issuList_oncolumnchanged=function(_a,_b){if(_b.columnid=="SELF_CNFIRM_AT"){var _c="";var _d="";var _e="";var _f="";var _g="";var _h=this.ds_issuList.getOrgColumn(_b.row,"SELF_CNFIRM_AT");if(_b.newvalue==_h){_c=this.ds_issuList.getOrgColumn(_b.row,"CNFRMR_DEPT_CODE");_d=this.ds_issuList.getOrgColumn(_b.row,"CNFRMR_DEPT_NM");_e=this.ds_issuList.getOrgColumn(_b.row,"CNFRMR_EMPNO");_f=this.ds_issuList.getOrgColumn(_b.row,"CNFRMR_EMPNM");_g=this.ds_issuList.getOrgColumn(_b.row,"CNFIRM_DE");}else if(_b.newvalue=='1'){_c=this.gfn_getDeptId();_d=this.gfn_getDeptName();_e=this.fn_getEmpno();_f=this.fn_getEmpnm();_g=this.gfn_today();}this.ds_issuList.setColumn(_b.row,"CNFRMR_DEPT_CODE",_c);this.ds_issuList.setColumn(_b.row,"CNFRMR_DEPT_NM",_d);this.ds_issuList.setColumn(_b.row,"CNFRMR_EMPNO",_e);this.ds_issuList.setColumn(_b.row,"CNFRMR_EMPNM",_f);this.ds_issuList.setColumn(_b.row,"CNFIRM_DE",_g);}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_issuList.reset();this.ds_issuList.applyChange();return;}};});this.on_initEvent=function(){this.ds_issuList.addEventHandler("oncolumnchanged",this.ds_issuList_oncolumnchanged,this);this.ds_issuList.addEventHandler("onrowposchanged",this.ds_issuList_onrowposchanged,this);this.addEventHandler("onload",this.HRM090204_onload,this);this.addEventHandler("oninit",this.HRM090204_oninit,this);this.div_work.grd_issuList.addEventHandler("oncellclick",this.div_work_grd_issuList_oncellclick,this);this.div_work.grd_issuList.addEventHandler("onheadclick",this.div_work_grd_issuList_onheadclick,this);};this.loadIncludeScript("HRM090204.xfdl");this.loadPreloadList();};})();