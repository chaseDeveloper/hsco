﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ASS011100");this.set_classname("ASS011100");this.set_titletext("물품수급관리실적(파일)");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_thngReciptManageTmpr",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"MNGR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"MNGR_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DTA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"3000\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"msgId\">조회년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_thngReciptManageTmpr</Col><Col id=\"msgId\">계획년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_thngReciptManageTmpr</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"msgId\">관리부서</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ass008",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condFile",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("47");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("48");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("49");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","488","0","38","5",null,null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","488",null,"38","5",null,"0",this.div_search);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_DEPT_CODE","absolute","164","5","38","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("부서");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute","202","5","179","21",null,null,this.div_search);_a.set_taborder("9");_a.set_async("false");_a.set_enable("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("조회년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","70","21",null,null,this.div_search);_a.set_taborder("11");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");_a.style.set_buttonsize("15");_a.style.set_padding("0 0 0 0");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","149","5","15","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("50");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title1","absolute","0","43","200","19",null,null,this);_a.set_taborder("51");_a.set_text("물품수급관리실적(파일) 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("52");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_bukipList","absolute","0","67",null,null,"516","0",this);_a.set_taborder("53");_a.set_binddataset("ds_thngReciptManageTmpr");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"년도\"/><Cell col=\"1\" colspan=\"2\" text=\"부서정보\"/><Cell col=\"3\" colspan=\"2\" text=\"관리자정보\"/><Cell row=\"1\" col=\"1\" text=\"부서코드\"/><Cell row=\"1\" col=\"2\" text=\"부서명\"/><Cell row=\"1\" col=\"3\" text=\"사원번호\"/><Cell row=\"1\" col=\"4\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:MNGR_EMPNO\"/><Cell col=\"4\" text=\"bind:MNGR_EMPNM\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static42","absolute",null,"33","10",null,"506","0",this);_a.set_taborder("54");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title2","absolute",null,"43","200","19","306",null,this);_a.set_taborder("55");_a.set_text("물품수급관리실적 상세");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("sta_mngr","absolute",null,"93","91","27","415",null,this);_a.set_taborder("56");_a.set_text("관리자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Static("Static10","absolute",null,"93","388","27","28",null,this);_a.set_taborder("57");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"67","388","27","28",null,this);_a.set_taborder("59");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_psitnNm01","absolute",null,"119","91","331","415",null,this);_a.set_taborder("60");_a.set_text("내용");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"119","388","331","28",null,this);_a.set_taborder("61");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_emplnm","absolute",null,"96","91","21","322",null,this);_a.set_taborder("63");this.addChild(_a.name,_a);_a=new Button("btn_searchEmpl","absolute",null,"96","21","22","322",null,this);_a.set_taborder("64");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Edit("edt_empno","absolute",null,"96","70","21","251",null,this);_a.set_taborder("65");_a.set_inputtype("number");_a.set_maxlength("8");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new TextArea("txt_cn","absolute",null,"122","382","325","31",null,this);_a.set_taborder("66");_a.set_wordwrap("char");_a.set_lengthunit("utf8");_a.set_maxlength("3000");this.addChild(_a.name,_a);_a=new Static("Static06","absolute",null,"450","480","10","28",null,this);_a.set_taborder("67");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title3","absolute",null,"460","100","19","406",null,this);_a.set_taborder("68");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"479","480","5","28",null,this);_a.set_taborder("69");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute",null,"460","67","19","185",null,this);_a.set_taborder("70");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute",null,"460","68","19","115",null,this);_a.set_taborder("71");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,"460","85","19","28",null,this);_a.set_taborder("72");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute",null,"484","478",null,"28","0",this);_a.set_taborder("73");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_dept","absolute",null,"67","91","27","212",null,this);_a.set_taborder("58");_a.set_text("관리부서");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Div("div_srchDept","absolute",null,"70","179","21","31",null,this);_a.set_taborder("62");_a.set_async("false");_a.set_enable("false");_a.set_url("com::deptCode.xfdl");this.addChild(_a.name,_a);_a=new Static("sta_year","absolute",null,"67","91","27","415",null,this);_a.set_taborder("74");_a.set_text("계획년도");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Edit("edt_year","absolute",null,"70","70","21","343",null,this);_a.set_taborder("75");_a.set_inputtype("number");_a.set_maxlength("4");_a.style.set_align("left middle");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("49");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("ASS011100");_b.set_titletext("물품수급관리실적(파일)");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_emplnm","value","ds_thngReciptManageTmpr","MNGR_EMPNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","edt_empno","value","ds_thngReciptManageTmpr","MNGR_EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","txt_cn","value","ds_thngReciptManageTmpr","CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item41","txt_cn","readonly","ds_requstCtrList","READONLY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item50","btn_delFiles","enable","ds_requstCtrList","ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item51","btn_uploadFiles","enable","ds_requstCtrList","ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","edt_year","value","ds_thngReciptManageTmpr","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("ASS011100.xfdl","lib::comInclude.xjs");this.addIncludeScript("ASS011100.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("ASS011100.xfdl","lib::comUpDownUtils.xjs");this.registerScript("ASS011100.xfdl",function(){var _a= -1;var _b=false;this.File_UpDownManager=null;this.ASS011100_oninit=function(_c,_d){this.fn_init_form();this.fn_init_dataset();};this.ASS011100_onload=function(_c,_d){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.div_search.div_srchDept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_srchDept.fn_setBind("ds_thngReciptManageTmpr","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"YEAR",this.comUtils.getClientDate("YYYY"));var _d=[["ds_ass008","ASS008","Y","A","B"]];var _e=function(_f,_g,_h){if(this.gfn_authGrpId("DEV_GRP")!= -1){this.chargerAt=true;}if(this.gfn_authGrpId("ASS_ADMIN")!= -1){this.chargerAt=true;}this.ds_cond.setColumn(_c,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_c,"DEPT_NM",this.gfn_getDeptName());if(this.chargerAt){this.div_search.div_srchDept.set_enable(true);this.div_search.div_srchDept.div_Search.edt_deptNm.set_readonly(true);this.div_srchDept.set_enable(true);this.div_srchDept.div_Search.edt_deptNm.set_readonly(true);}this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_dataset=function(){var _c={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","ASS");this.File_UpDownManager.init(_c);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_thngReciptManageTmpr.clearData();this.ds_fileList.clearData();this.fn_transaction("selectThngReciptManageTmpr");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_thngReciptManageTmpr)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_thngReciptManageTmpr,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_thngReciptManageTmpr.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_c){switch(_c){case "selectThngReciptManageTmpr":var _d="/hsco/mis/ass/ASS011100/selectThngReciptManageTmpr.do";var _e="input1=ds_cond";var _f="ds_thngReciptManageTmpr=output1";break;case "save":var _d="/hsco/mis/ass/ASS011100/save.do";var _e="input1=ds_thngReciptManageTmpr:U";var _f="";break;case "selectFileList":var _d="hsco/mis/ass/ASS011100/selectFileList.do";var _e="input1=ds_condFile";var _f="ds_fileList=output1";break;}Ex.core.tran(this,_c,_d,_e,_f);};this.fn_callBack=function(_c,_d,_e){if(_d!='0'){this.gfn_callback_message(_c,_d,_e);}if(_d=='0'){switch(_c){case "selectThngReciptManageTmpr":break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectFileList":this.ds_fileList.filter("USE_AT == '1'");break;}}};this.fn_popupCallBack=function(_c,_d){if(_c=="popEmp"){var _e=new Dataset();var _f=_e.loadXML(_d);if(_f){var _g=_e.getColumn(0,"EMPNO");var _h=_e.getColumn(0,"EMPNM");var _i=this.ds_thngReciptManageTmpr.rowposition;this.ds_thngReciptManageTmpr.setColumn(_i,"MNGR_EMPNO",_g);this.ds_thngReciptManageTmpr.setColumn(_i,"MNGR_EMPNM",_h);}}};this.ds_thngReciptManageTmpr_onrowposchanged=function(_c,_d){this.ds_fileList.clearData();if(_d.newrow> -1){var _e=_c.getRowType(_d.newrow);var _f=_c.getColumn(_d.newrow,"FILE_SN");this.ds_condFile.clearData();this.ds_condFile.addRow();this.ds_condFile.setColumn(0,"FILE_SN",_f);if(this.chargerAt){if(_e==Dataset.ROWTYPE_INSERT){this.div_srchDept.set_enable(true);this.div_srchDept.div_Search.edt_deptNm.set_readonly(true);}else{this.div_srchDept.set_enable(false);this.div_srchDept.div_Search.edt_deptNm.set_readonly(false);}}this.fn_transaction("selectFileList");}};this.btn_searchEmpl_onclick=function(_c,_d){var _e=this.ds_thngReciptManageTmpr.rowposition;var _f=this.ds_thngReciptManageTmpr.getColumn(_e,"DEPT_CODE");if(this.comUtils.isNull(_f)){this.gfn_message("info.처리불가","관리부서 정보를 입력하여 주십시오.");return false;}var _g={arg_0:this,deptCd:_f};this.gfn_popup("popEmp",0,0,"",_g,"com::empno_P01.xfdl","fn_popupCallBack",true);};this.fn_insert=function(){var _c=this.ds_thngReciptManageTmpr.addRow();var _d=this.gfn_getDeptId();var _e=this.gfn_getDeptName();var _f=this.ds_cond.getColumn(0,"YEAR");this.ds_thngReciptManageTmpr.setColumn(_c,"YEAR",_f);this.ds_thngReciptManageTmpr.setColumn(_c,"DEPT_CODE",_d);this.ds_thngReciptManageTmpr.setColumn(_c,"DEPT_NM",_e);this.ds_thngReciptManageTmpr.setColumn(_c,"DTA_SE","002");};this.fn_delete=function(){var _c=this.ds_thngReciptManageTmpr.rowposition;if(_c<0){this.gfn_message("comm.데이터.선택.없음");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_thngReciptManageTmpr.deleteRow(_c);};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_thngReciptManageTmpr)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}this.ds_thngReciptManageTmpr.reset();}};this.btn_delFiles_onclick=function(_c,_d){var _e=this.ds_fileList.findRow("CHK","1");if(_e<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _k=this.ds_fileList.getRowCount()-1;_k>=0;_k-- ){var _f=this.ds_fileList.getColumn(_k,"CHK");if(_f=='1'){this.ds_fileList.deleteRow(_k);}}var _g="deleteFile";var _h="hsco/cmm/file/deleteFile.do";var _i="input1=ds_fileList:U";var _j="ds_fileList=output1";Ex.core.tran(this,_g,_h,_i,_j);};this.btn_uploadFiles_onclick=function(_c,_d){var _e=this.ds_thngReciptManageTmpr.rowposition;var _f=this.ds_thngReciptManageTmpr.getRowType(_e);if(_e<0){this.gfn_message("comm.항목.선택.요청","대상 정보");return;}if(_f==2){this.gfn_message("info.진행가능","신규 정보를 저장");return;}this.mCallback=function(){this.fn_autoFileSn("MIS","ASS",this.File_UpDownManager,this.ds_fileList,this.ds_thngReciptManageTmpr,"TBASS_THNG_RECIPT_MANAGE_TMPR","FILE_SN",["YEAR","DEPT_CODE","SN"]);};this.mCallback();};this.btn_downFiles_onclick=function(_c,_d){var _e=this.ds_fileList.findRow("CHK","1");if(_e<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _j=0;_j<this.ds_fileList.getRowCount();_j++ ){var _f=this.ds_fileList.getColumn(_j,"FILE_SN");var _g=this.ds_fileList.getColumn(_j,"FILE_ORDR");var _h=this.ds_fileList.getColumn(_j,"ORGINL_FILE_NM");var _i=this.ds_fileList.getColumn(_j,"CHK");if(_i=='1'){this.File_UpDownManager.download(_f,_g,_h);}}};this.fn_onFileSuccess=function(){this.gfn_message("success.처리.성공");var _c=this.ds_thngReciptManageTmpr.rowposition;this.ds_condFile.setColumn(0,"FILE_SN",this.ds_thngReciptManageTmpr.getColumn(_c,"FILE_SN"));this.fn_transaction("selectFileList");};this.fn_onFileError=function(){};this.grd_cmmnAtchmnfl_onheadclick=function(_c,_d){if(_d.col==0){this.gfn_setGridCheckAll(_c,_d);}};this.grd_cmmnAtchmnfl_oncellclick=function(_c,_d){if(_d.cell==0){_c.setCellProperty("Head",_d.cell,"text","0");}};});this.on_initEvent=function(){this.ds_thngReciptManageTmpr.addEventHandler("onrowposchanged",this.ds_thngReciptManageTmpr_onrowposchanged,this);this.addEventHandler("onload",this.ASS011100_onload,this);this.addEventHandler("oninit",this.ASS011100_oninit,this);this.div_search.spn_YEAR.addEventHandler("onchanged",this.div_search_spn_YEAR_onchanged,this);this.edt_emplnm.addEventHandler("onkeyup",this.edt_emplnm_onkeyup,this);this.btn_searchEmpl.addEventHandler("onclick",this.btn_searchEmpl_onclick,this);this.edt_empno.addEventHandler("onkeyup",this.edt_empno_onkeyup,this);this.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);this.edt_year.addEventHandler("onkeyup",this.edt_empno_onkeyup,this);};this.loadIncludeScript("ASS011100.xfdl");this.loadPreloadList();};})();