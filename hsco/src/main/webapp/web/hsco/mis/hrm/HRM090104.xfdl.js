﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM090104");this.set_classname("HRM090103");this.set_titletext("사규심의위원회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MTG_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"CMNL_SE\" type=\"STRING\" size=\"3\"/><Column id=\"REFORM_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CMNL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MTG_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm077",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm078",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm077G",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm078G",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cmitList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MTG_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"MTG_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MTG_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"DLBRT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CMNL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CMNL_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REFORM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_CN\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_ASEMBY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"COUNCIL_SBMISN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNCIL_SBMISN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GNFD_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mtgNmpr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MTG_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ATNDNC_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PSITN\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">MTG_YEAR</Col><Col id=\"msgId\">회의년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CMNL_SE</Col><Col id=\"compId\">ds_cmitList</Col><Col id=\"msgId\">사규구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">REFORM_SE</Col><Col id=\"compId\">ds_cmitList</Col><Col id=\"msgId\">개정구분</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">MTG_ODR</Col><Col id=\"msgId\">회의차수</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">MTG_DE</Col><Col id=\"msgId\">회의일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">DLBRT_NO</Col><Col id=\"msgId\">심의번호</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">CMNL_NM</Col><Col id=\"msgId\">사규명</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">DECSN_CN</Col><Col id=\"msgId\">의결내용</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">PROPSE_DEPT_CODE</Col><Col id=\"msgId\">제안부서코드</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cmitList</Col><Col id=\"colId\">NOW_ASEMBY_CO</Col><Col id=\"msgId\">의원현원</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">NM</Col><Col id=\"compId\">ds_mtgNmpr</Col><Col id=\"msgId\">성명</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">PSITN</Col><Col id=\"compId\">ds_mtgNmpr</Col><Col id=\"msgId\">소속</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_tempBi",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MTG_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"MTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FDRM_REPORT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"MTG_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MTG_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"BI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RE_DLBRT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROPSE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_ASEMBY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"CMNL_DLBRT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CMNL_DLBRT_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm076",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_mtgYear","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("회의년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_mtgYear","absolute","79","6","72","19",null,null,this.div_search);_a.set_taborder("0");_a.set_value("0");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","151","0","15","33",null,null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cmnlSe","absolute","166","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("사규구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_cmnlSe","absolute","230","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_hrm077");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","330","0","15","33",null,null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_reformSe","absolute","345","5","64","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("개정구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cbo_reformSe","absolute","409","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_hrm078");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static03","absolute","509","0","15","33",null,null,this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cmnlNm","absolute","524","5","51","21",null,null,this.div_search);_a.set_taborder("11");_a.set_text("사규명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_biNm","absolute","575","5","208","21",null,null,this.div_search);_a.set_taborder("3");_a.set_lengthunit("ascii");_a.set_maxlength("200");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("11");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_cmnlDlbrtCmitList","absolute","0","43","150","19",null,null,this);_a.set_taborder("13");_a.set_text("사규심의위원회 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62","1031","5",null,null,this);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_cmnlDlbrtCmitList","absolute","0","67",null,null,"400","0",this);_a.set_taborder("5");_a.set_binddataset("ds_cmitList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"회의차수\"/><Cell col=\"2\" text=\"회의일자\"/><Cell col=\"3\" text=\"의원현원\"/><Cell col=\"4\" text=\"심의번호\"/><Cell col=\"5\" text=\"사규명\"/><Cell col=\"6\" text=\"사규구분\"/><Cell col=\"7\" text=\"개정구분\"/><Cell col=\"8\" text=\"제안부서코드\"/><Cell col=\"9\" text=\"제안부서명\"/><Cell col=\"10\" text=\"의결내용\"/><Cell col=\"11\" text=\"이사회상정\"/><Cell col=\"12\" text=\"발령일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:MTG_ODR\" editlimit=\"20\" editdisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'date' : 'none'\" text=\"bind:MTG_DE\" calendardisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'normal' : 'none'\" editfilter=\"digit\" style=\"align:right middle;\" text=\"bind:NOW_ASEMBY_CO\" editlimit=\"2\" editdisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"4\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:DLBRT_NO\" editlimit=\"20\" editdisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"5\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:CMNL_NM\" editlimit=\"200\" editdisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'combo' : 'none'\" text=\"bind:CMNL_SE\" combodataset=\"ds_hrm077G\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'combo' : 'none'\" style=\"align:left middle;\" text=\"bind:REFORM_SE\" combodataset=\"ds_hrm078G\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\"/><Cell col=\"8\" text=\"bind:PROPSE_DEPT_CODE\" expandshow=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'show' : 'hide'\"/><Cell col=\"9\" style=\"align:left middle;\" text=\"bind:PROPSE_DEPT_NM\"/><Cell col=\"10\" edittype=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:DECSN_CN\" editlimit=\"200\" editdisplay=\"expr:comp.parent.parent.comUtils.isNull(COUNCIL_SBMISN_SE) ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"11\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:COUNCIL_SBMISN_NM\" combodataset=\"ds_hrm076\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:GNFD_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_AddCmit","absolute",null,"43","64","19","534",null,this);_a.set_taborder("2");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_DeleteCmit","absolute",null,"43","64","19","467",null,this);_a.set_taborder("3");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_CancelCmit","absolute",null,"43","64","19","400",null,this);_a.set_taborder("4");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","659","43","10",null,null,"0",this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_mtgNmpr","absolute",null,"67","362","452","28",null,this);_a.set_taborder("9");_a.set_binddataset("ds_mtgNmpr");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" edittype=\"expr:CONFM_SE == '0' ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:NM\" editlimit=\"30\" editdisplay=\"expr:CONFM_SE == '0' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/><Cell col=\"2\" edittype=\"expr:CONFM_SE == '0' ? 'normal' : 'none'\" style=\"align:left middle;\" text=\"bind:PSITN\" editlimit=\"100\" editdisplay=\"expr:CONFM_SE == '0' ? 'display' : 'edit'\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_AddNmst","absolute",null,"43","64","19","162",null,this);_a.set_taborder("6");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_DeleteNmst","absolute",null,"43","64","19","95",null,this);_a.set_taborder("7");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_CancelNmst","absolute",null,"43","64","19","28",null,this);_a.set_taborder("8");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("sta_mtgNmpr","absolute",null,"43","107","19","283",null,this);_a.set_taborder("16");_a.set_text("회의인원");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_creatBi","absolute",null,"43","66","19","601",null,this);_a.set_taborder("1");_a.set_text("의안생성");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList03","absolute",null,"527","100","19","290",null,this);_a.set_taborder("17");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute",null,"527","67","19","188",null,this);_a.set_taborder("18");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute",null,"527","68","19","116",null,this);_a.set_taborder("19");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,"527","85","19","28",null,this);_a.set_taborder("20");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"517","362","10","28",null,this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static22","absolute",null,"546","362","5","28",null,this);_a.set_taborder("22");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute",null,"551","362",null,"28","0",this);_a.set_taborder("23");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM090103");_b.set_titletext("사규심의위원회");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.spn_mtgYear","value","ds_cond","MTG_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_biNm","value","ds_cond","CMNL_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cbo_cmnlSe","value","ds_cond","CMNL_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cbo_reformSe","value","ds_cond","REFORM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","btn_delFiles","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","btn_uploadFiles","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM090104.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM090104.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("HRM090104.xfdl","lib::comUpDownUtils.xjs");this.registerScript("HRM090104.xfdl",function(){this.saveRow= -1;this.File_UpDownManager=null;this.HRM090104_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM090104_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"MTG_YEAR",this.comUtils.getClientDate("YYYY"));var _b=[["ds_hrm076","HRM076","Y","D","B"],["ds_hrm077","HRM077","Y","A","B"],["ds_hrm077G","HRM077","Y","D","B"],["ds_hrm078","HRM078","Y","A","B"],["ds_hrm078G","HRM078","Y","D","B"]];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","HRM");this.File_UpDownManager.init(_a);};this.fn_search=function(){this.ds_cmitList.clearData();this.ds_mtgNmpr.clearData();this.ds_fileList.clearData();this.fn_transaction("selectCmitList");};this.fn_searchSub=function(){this.ds_mtgNmpr.clearData();this.ds_fileList.clearData();this.fn_transaction("selectMtgNmpr");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_cmitList)&&!this.comUtils.isDatasetUpdated(this.ds_mtgNmpr)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_cmitList,this.ds_validation)){return;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_mtgNmpr,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_cmitList.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "selectCmitList":var _b="/hsco/mis/hrm/HRM090104/selectCmitList.do";var _c="input1=ds_cond";var _d="ds_cmitList=output1";break;case "selectMtgNmpr":var _b="/hsco/mis/hrm/HRM090104/selectMtgNmpr.do";var _c="input1=ds_condSub";var _d="ds_mtgNmpr=output1 ds_fileList=output2";break;case "save":var _b="/hsco/mis/hrm/HRM090104/save.do";var _c="input1=ds_cmitList:U input2=ds_mtgNmpr:U";var _d="";break;case "creatBi":var _b="/hsco/mis/hrm/HRM090104/creatBi.do";var _c="input1=ds_tempBi";var _d="";break;case "selectFileList":var _b="hsco/mis/hrm/HRM090104/selectFileList.do";var _c="input1=ds_condSub";var _d="ds_fileList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectCmitList":if(this.saveRow> -1){this.ds_cmitList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "selectMtgNmpr":this.ds_fileList.filter("USE_AT == '1'");break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;case "creatBi":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectFileList":this.ds_fileList.filter("USE_AT == '1'");break;}}};this.fn_popupCallBack=function(_a,_b){if(_a=="deptPop"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"DEPT_CODE");var _f=_c.getColumn(0,"DEPT_NM");var _g=this.ds_cmitList.rowposition;this.ds_cmitList.setColumn(_g,"PROPSE_DEPT_CODE",_e);this.ds_cmitList.setColumn(_g,"PROPSE_DEPT_NM",_f);}}};this.ds_cmitList_onrowposchanged=function(_a,_b){if(_b.newrow> -1){this.ds_condSub.clearData();var _c=this.ds_condSub.addRow();var _d=_a.getColumn(_b.newrow,"MTG_YEAR");var _e=_a.getColumn(_b.newrow,"SN");var _f=_a.getColumn(_b.newrow,"FILE_SN");this.ds_condSub.setColumn(_c,"MTG_YEAR",_d);this.ds_condSub.setColumn(_c,"SN",_e);this.ds_condSub.setColumn(_c,"FILE_SN",_f);this.fn_searchSub();}};this.btn_creatBi_onclick=function(_a,_b){var _c=this.ds_cmitList.rowposition;var _d=this.ds_cmitList.getRowType(_c);var _e=this.ds_cmitList.getColumn(_c,"COUNCIL_SBMISN_SE");if(_c<0){this.gfn_message("comm.항목.선택.요청","대상 정보");return;}if(_d==2){this.gfn_message("info.진행가능","신규 정보를 저장");return;}if(Ex.util.isUpdated(this.ds_cmitList)){this.gfn_message("info.처리불가","변경된 데이터가 존재합니다. 저장 후 다시 시도해주십시오.");}if(!this.comUtils.isNull(_e)){this.gfn_message("info.처리불가","이미 생성된 의안이 존재합니다. 생성할 수 없습니다.");return false;}if(this.gfn_message("comm.행위여부","선택한 사규심의위원회 정보를 기초로 의안을 생성합니다.\n계속")){var _f=this.ds_cmitList.getColumn(_c,"MTG_YEAR");var _g=this.ds_cmitList.getColumn(_c,"SN");var _h=this.ds_cmitList.getColumn(_c,"CMNL_NM");var _i=this.ds_cmitList.getColumn(_c,"DECSN_CN");var _j='001';var _k='0';var _l=this.ds_cmitList.getColumn(_c,"PROPSE_DEPT_CODE");this.ds_tempBi.clearData();var _m=this.ds_tempBi.addRow();this.ds_tempBi.setColumn(_m,"MTG_YEAR",_f);this.ds_tempBi.setColumn(_m,"BI_NM",_h);this.ds_tempBi.setColumn(_m,"DECSN_CN",_i);this.ds_tempBi.setColumn(_m,"MTR_SE",_j);this.ds_tempBi.setColumn(_m,"CONFM_SE",_k);this.ds_tempBi.setColumn(_m,"CMNL_DLBRT_YEAR",_f);this.ds_tempBi.setColumn(_m,"CMNL_DLBRT_SN",_g);this.ds_tempBi.setColumn(_m,"PROPSE_DEPT_CODE",_l);this.fn_transaction("creatBi");}};this.btn_AddCmit_onclick=function(_a,_b){var _c=this.ds_cmitList.addRow();var _d=this.ds_hrm077G.getColumn(0,"CODE");var _e=this.ds_hrm078G.getColumn(0,"CODE");var _f=this.ds_cond.getColumn(0,"MTG_YEAR");this.ds_cmitList.setColumn(_c,"MTG_YEAR",_f);this.ds_cmitList.setColumn(_c,"CMNL_SE",_d);this.ds_cmitList.setColumn(_c,"REFORM_SE",_e);};this.btn_DeleteCmit_onclick=function(_a,_b){var _c=this.ds_cmitList.rowposition;var _d=this.ds_cmitList.getColumn(_c,"COUNCIL_SBMISN_SE");if(!this.comUtils.isNull(_d)){this.gfn_message("info.처리불가","생성된 의안이 존재합니다. 수정할 수 없습니다.");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_cmitList.deleteRow(_c);};this.btn_CancelCmit_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_cmitList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_cmitList.reset();this.ds_cmitList.applyChange();};this.btn_AddNmst_onclick=function(_a,_b){var _c=this.ds_cmitList.rowposition;var _d=this.ds_cmitList.getColumn(_c,"COUNCIL_SBMISN_SE");var _e=this.ds_cmitList.getColumn(_c,"NOW_ASEMBY_CO");var _f=this.ds_mtgNmpr.rowcount;if(_c<0){this.gfn_message("info.처리불가","사규심의위원회가 존재하지 않습니다.");return false;}if(!this.comUtils.isNull(_d)){this.gfn_message("info.처리불가","생성된 의안이 존재합니다. 수정할 수 없습니다.");return false;}if(this.comUtils.isNull(_e)){this.gfn_message("info.처리불가","사규심의위원회 목록의 의원현원을 입력해 주십시오.");return false;}if(_e==_f){this.gfn_message("info.처리불가","회의인원 수는 의원현원 수보다 작거나 같아야 합니다.");return false;}var _g=this.ds_mtgNmpr.addRow();var _h=this.ds_cmitList.getColumn(_c,"MTG_YEAR");var _i=this.ds_cmitList.getColumn(_c,"SN");this.ds_mtgNmpr.setColumn(_g,"MTG_YEAR",_h);this.ds_mtgNmpr.setColumn(_g,"SN",_i);this.ds_mtgNmpr.setColumn(_g,"CONFM_SE",'0');};this.btn_DeleteNmst_onclick=function(_a,_b){var _c=this.ds_cmitList.rowposition;var _d=this.ds_cmitList.getColumn(_c,"COUNCIL_SBMISN_SE");if(!this.comUtils.isNull(_d)){this.gfn_message("info.처리불가","생성된 의안이 존재합니다. 수정할 수 없습니다.");return false;}if(!this.gfn_message("confirm.삭제여부")){return false;}this.ds_mtgNmpr.deleteRow(this.ds_mtgNmpr.rowposition);};this.btn_CancelNmst_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_mtgNmpr)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_mtgNmpr.reset();this.ds_mtgNmpr.applyChange();};this.grd_cmnlDlbrtCmitList_onexpandup=function(_a,_b){if(_b.cell=='8'){var _c={arg_0:this,deptCode:'',deptNm:'',onlySelectLast:true};this.gfn_popup("deptPop",400,400,"부서선택",_c,"com::deptCode_P01.xfdl","fn_popupCallBack",true);}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_cmitList)||Ex.util.isUpdated(this.ds_mtgNmpr)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}this.ds_cmitList.reset();this.ds_cmitList.applyChange();this.ds_mtgNmpr.reset();this.ds_mtgNmpr.applyChange();}};this.btn_delFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");var _d=this.ds_cmitList.getColumn(this.ds_cmitList.rowposition,"COUNCIL_SBMISN_SE");if(!this.comUtils.isNull(_d)){this.gfn_message("fail.수정.불가","이미 의안이 생성된 건은");return;}if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _j=this.ds_fileList.getRowCount()-1;_j>=0;_j-- ){var _e=this.ds_fileList.getColumn(_j,"CHK");if(_e=='1'){this.ds_fileList.deleteRow(_j);}}var _f="deleteFile";var _g="hsco/cmm/file/deleteFile.do";var _h="input1=ds_fileList:U";var _i="ds_fileList=output1";Ex.core.tran(this,_f,_g,_h,_i);};this.btn_uploadFiles_onclick=function(_a,_b){var _c=this.ds_cmitList.rowposition;var _d=this.ds_cmitList.getRowType(_c);var _e=this.ds_cmitList.getColumn(_c,"COUNCIL_SBMISN_SE");if(_c<0){this.gfn_message("comm.항목.선택.요청","대상 정보");return;}if(_d==2){this.gfn_message("info.진행가능","신규 정보를 저장");return;}if(!this.comUtils.isNull(_e)){this.gfn_message("fail.수정.불가","이미 의안이 생성된 건은");return;}this.mCallback=function(){this.fn_autoFileSn("MIS","HRM",this.File_UpDownManager,this.ds_fileList,this.ds_cmitList,"TBHRM_CMNL_DLBRT_CMIT","FILE_SN",["MTG_YEAR","SN"]);};this.mCallback();};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList.getRowCount();_h++ ){var _d=this.ds_fileList.getColumn(_h,"FILE_SN");var _e=this.ds_fileList.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.fn_onFileSuccess=function(){this.gfn_message("success.처리.성공");var _a=this.ds_cmitList.rowposition;this.ds_condSub.setColumn(0,"FILE_SN",this.ds_cmitList.getColumn(_a,"FILE_SN"));this.fn_transaction("selectFileList");};this.fn_onFileError=function(){};this.grd_cmmnAtchmnfl_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}};this.grd_cmmnAtchmnfl_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};});this.on_initEvent=function(){this.ds_cmitList.addEventHandler("onrowposchanged",this.ds_cmitList_onrowposchanged,this);this.addEventHandler("oninit",this.HRM090104_oninit,this);this.addEventHandler("onload",this.HRM090104_onload,this);this.grd_cmnlDlbrtCmitList.addEventHandler("onexpandup",this.grd_cmnlDlbrtCmitList_onexpandup,this);this.btn_AddCmit.addEventHandler("onclick",this.btn_AddCmit_onclick,this);this.btn_DeleteCmit.addEventHandler("onclick",this.btn_DeleteCmit_onclick,this);this.btn_CancelCmit.addEventHandler("onclick",this.btn_CancelCmit_onclick,this);this.btn_AddNmst.addEventHandler("onclick",this.btn_AddNmst_onclick,this);this.btn_DeleteNmst.addEventHandler("onclick",this.btn_DeleteNmst_onclick,this);this.btn_CancelNmst.addEventHandler("onclick",this.btn_CancelNmst_onclick,this);this.btn_creatBi.addEventHandler("onclick",this.btn_creatBi_onclick,this);this.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.grd_cmmnAtchmnfl.addEventHandler("oncellclick",this.grd_cmmnAtchmnfl_oncellclick,this);this.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);};this.loadIncludeScript("HRM090104.xfdl");};})();