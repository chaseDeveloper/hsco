﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS030202");this.set_classname("form");this.set_titletext("보수보강실적");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_mendngReinfcAcmslt",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATE_CHCK_DGNSS\" type=\"STRING\" size=\"256\"/><Column id=\"RELATE_CHCK_DGNSS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DSGNR\" type=\"STRING\" size=\"256\"/><Column id=\"CNSTRTR\" type=\"STRING\" size=\"256\"/><Column id=\"RSPNSBL_TCNXPRT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_MANGR\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_REGN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_CT\" type=\"STRING\" size=\"256\"/><Column id=\"PRUF_FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fcltsList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_SE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_NY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_NY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_NY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_NY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_NY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_NY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_BY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_BY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_BY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_NY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_BY_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2017</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDetail",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2017</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">보고년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CNTRWK_SE</Col><Col id=\"compId\">ds_mendngReinfcAcmslt</Col><Col id=\"msgId\">공사구분</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"msgId\">공사명</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_mendngReinfcAcmslt</Col><Col id=\"colId\">CNTRWK_NM</Col></Row><Row><Col id=\"msgId\">공사비</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">ds_mendngReinfcAcmslt</Col><Col id=\"colId\">CNTRWK_CT</Col></Row><Row><Col id=\"colId\">CNTRWK_BGNDE</Col><Col id=\"compId\">ds_mendngReinfcAcmslt</Col><Col id=\"msgId\">공사 시작일</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_mendngReinfcAcmslt</Col><Col id=\"colId\">CNTRWK_ENDDE</Col><Col id=\"msgId\">공사 종료일</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fms025",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fms023",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_file",this);_a._setContents("<ColumnInfo><Column id=\"PRUF_FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("보고년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","84","5","71","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","208","5","195","21",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","170","5","38","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","155","2","15","34",null,null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","169","19",null,null,this);_a.set_taborder("4");_a.set_text("시설별 통계");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_mendngReinfcAcmslt","absolute","0","320",null,null,"268","0",this);_a.set_taborder("6");_a.set_binddataset("ds_mendngReinfcAcmslt");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a.set_autoupdatetype("itemselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"20\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" text=\"공사구분\"/><Cell col=\"2\" colspan=\"3\" text=\"공사명\"/><Cell col=\"5\" text=\"설계자\"/><Cell col=\"6\" text=\"시공자\"/><Cell col=\"7\" rowspan=\"2\" text=\"관련점검진단\"/><Cell col=\"8\" rowspan=\"2\" text=\"보수부위\"/><Cell col=\"9\" rowspan=\"2\" text=\"공사내역\"/><Cell col=\"10\" text=\"승인상태\"/><Cell row=\"1\" col=\"1\" text=\"공사비\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"공사기간\"/><Cell row=\"1\" col=\"5\" text=\"책임기술자\"/><Cell row=\"1\" col=\"6\" text=\"공사감독\"/><Cell row=\"1\" col=\"10\" text=\"승인(반려)일\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" style=\"line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'combo'\" text=\"bind:CNTRWK_SE\" combodataset=\"ds_fms025\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\"/><Cell col=\"2\" colspan=\"3\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:left middle;\" text=\"bind:CNTRWK_NM\" editlimit=\"150\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:left middle;\" text=\"bind:DSGNR\" editlimit=\"150\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:left middle;\" text=\"bind:CNSTRTR\" editlimit=\"150\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"text\" style=\"align:left middle;line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:RELATE_CHCK_DGNSS_NM\" wordwrap=\"char\" expandshow=\"expr:CONFM_AT == '1' ? 'hide' : 'show'\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"text\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'textarea'\" style=\"align:left middle;line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:MENDNG_REGN\" editlimit=\"750\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"text\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'textarea'\" style=\"align:left middle;line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:CNTRWK_DTLS\" editlimit=\"750\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"expr:comp.parent.isAdmin == true ? 'combo' : 'none'\" text=\"bind:CONFM_AT\" combodataset=\"ds_fms023\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.isAdmin == true ? 'display' : 'edit'\" calendardisplay=\"edit\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'masknumber'\" style=\"align:right middle;line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:CNTRWK_CT\" mask=\"###,###,###,###,###\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"2\" displaytype=\"date\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'date'\" style=\"line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:CNTRWK_BGNDE\" calendardisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"3\" style=\"line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"~\"/><Cell row=\"1\" col=\"4\" displaytype=\"date\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'date'\" style=\"line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:CNTRWK_ENDDE\" calendardisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"5\" displaytype=\"text\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:left middle;line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:RSPNSBL_TCNXPRT\" editlimit=\"150\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:left middle;line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:CNTRWK_MANGR\" editlimit=\"150\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell row=\"1\" col=\"10\" displaytype=\"date\" edittype=\"expr:comp.parent.isAdmin == true ? 'date' : 'none'\" style=\"line:1 solid black,1 solid #efececff;selectline:1 solid black,1 solid #ddddddff;\" text=\"bind:CONFM_DE\" calendardisplay=\"expr:comp.parent.isAdmin == true ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","286","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","296","169","19",null,null,this);_a.set_taborder("8");_a.set_text("보수보강실적");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","315","1031","5",null,null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_zipAddress00","absolute","0","66",null,"220","28",null,this);_a.set_taborder("10");_a.set_binddataset("ds_fcltsList");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"시설정보\"/><Cell col=\"6\" colspan=\"3\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;) + &quot;년도 보수보강실적&quot;\"/><Cell col=\"9\" colspan=\"3\" text=\"expr:(comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;)-1) + &quot;년도 보수보강실적&quot;\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"관리부서\"/><Cell row=\"1\" col=\"2\" text=\"관리번호\"/><Cell row=\"1\" col=\"3\" text=\"시설명\"/><Cell row=\"1\" col=\"4\" text=\"종별\"/><Cell row=\"1\" col=\"5\" text=\"준공일\"/><Cell row=\"1\" col=\"6\" text=\"등록\"/><Cell row=\"1\" col=\"7\" text=\"확정\"/><Cell row=\"1\" col=\"8\" text=\"공사금액\"/><Cell row=\"1\" col=\"9\" text=\"등록\"/><Cell row=\"1\" col=\"10\" text=\"확정\"/><Cell row=\"1\" col=\"11\" text=\"공사금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"2\" text=\"bind:MANAGE_NO\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:FCLTS_NM\"/><Cell col=\"4\" text=\"bind:ASORT_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:MENDNG_NY_CNT\"/><Cell col=\"7\" text=\"bind:MENDNG_NY_CONFM_CNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:MENDNG_NY_CONFM_AMOUNT\"/><Cell col=\"9\" text=\"bind:MENDNG_BY_CNT\"/><Cell col=\"10\" text=\"bind:MENDNG_BY_CONFM_CNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:MENDNG_BY_CONFM_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"296","64","19","402",null,this);_a.set_taborder("11");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"296","64","19","335",null,this);_a.set_taborder("12");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"296","64","19","268",null,this);_a.set_taborder("13");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Grid("Grid08","absolute",null,"320","230",null,"28","0",this);_a.set_taborder("14");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute",null,"296","49","19","209",null,this);_a.set_taborder("16");_a.set_text("증빙");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_uploadFilesPlan","absolute",null,"296","52","19","100",null,this);_a.set_taborder("17");_a.set_text("업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFilesPlan","absolute",null,"296","69","19","28",null,this);_a.set_taborder("18");_a.set_text("다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_delFilesPlan","absolute",null,"296","43","19","155",null,this);_a.set_taborder("19");_a.set_text("삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("form");_b.set_titletext("보수보강실적");});this.addLayout(_a.name,_a);_a=new BindItem("item9","div_SEARCH.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FMS030202.xfdl","lib::comInclude.xjs");this.addIncludeScript("FMS030202.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("FMS030202.xfdl","lib::comUpDownUtils.xjs");this.registerScript("FMS030202.xfdl",function(){this.File_UpDownManager=null;this.isAdmin=false;this.FMS030202_oninit=function(_a,_b){};this.FMS030202_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"YEAR",this.comUtils.getClientDate("YYYY"));this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(this.gfn_authGrpId("FMS_ADMIN")!= -1){this.isAdmin=true;}else{this.ds_cond.setColumn(_c,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_c,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_dept.fn_setReadonly(true);}var _d=[["ds_fms023","FMS023","Y","S","B"],["ds_fms025","FMS025","Y","D","B"]];var _e=function(_f,_g,_h){this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"PMS","FMS");this.File_UpDownManager.init(_a);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_fcltsList.clearData();this.fn_transaction("select");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_mendngReinfcAcmslt,this.ds_validation)){return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_fcltsList.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/pms/fms/FMS030202/selectFcltsList.do";var _c="input1=ds_cond";var _d="ds_fcltsList=output1";break;case "selectSub":var _b="/hsco/pms/fms/FMS030202/selectMendngReinfcAcmslt.do";var _c="input1=ds_condDetail";var _d="ds_mendngReinfcAcmslt=output1";break;case "selectFile":var _b="/hsco/pms/fms/FMS030202/selectFile.do";var _c="input1=ds_cond_file";var _d="ds_fileList=output1";break;case "save":var _b="/hsco/pms/fms/FMS030202/save.do";var _c="input1=ds_mendngReinfcAcmslt:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.saveRow> -1){this.ds_fcltsList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "selectSub":this.ds_mendngReinfcAcmslt.set_enableevent(false);this.ds_mendngReinfcAcmslt.set_updatecontrol(false);for(var _e=0;_e<this.ds_mendngReinfcAcmslt.getRowCount();_e++ ){var _d=this.ds_mendngReinfcAcmslt.getColumn(_e,"CONFM_AT");if(this.comUtils.isNull(_d)){this.ds_mendngReinfcAcmslt.setColumn(_e,"CONFM_AT","");}}this.ds_mendngReinfcAcmslt.set_updatecontrol(true);this.ds_mendngReinfcAcmslt.set_enableevent(true);break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.btn_Add_onclick=function(_a,_b){if(this.ds_fcltsList.rowposition> -1){var _c=this.ds_fcltsList.rowposition;var _d=this.ds_fcltsList.getColumn(_c,"SN");var _e=this.ds_fcltsList.getColumn(_c,"YEAR");var _f=this.comUtils.getClientDate("YYYYMMDD");var _g=this.ds_mendngReinfcAcmslt.addRow();this.ds_mendngReinfcAcmslt.setColumn(_g,"FCLTS_MANAGE_SN",_d);this.ds_mendngReinfcAcmslt.setColumn(_g,"YEAR",_e);this.ds_mendngReinfcAcmslt.setColumn(_g,"OPERTN_DE",_f);this.ds_mendngReinfcAcmslt.setColumn(_g,"CONFM_AT","");}};this.btn_Delete_onclick=function(_a,_b){this.ds_mendngReinfcAcmslt.deleteRow(this.ds_mendngReinfcAcmslt.rowposition);};this.btn_Cancel_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_mendngReinfcAcmslt)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_mendngReinfcAcmslt.reset();this.ds_mendngReinfcAcmslt.applyChange();};this.ds_fcltsList_onrowposchanged=function(_a,_b){this.ds_mendngReinfcAcmslt.clearData();if(_b.newrow> -1){var _c=_a.getColumn(_b.newrow,"YEAR");var _d=_a.getColumn(_b.newrow,"SN");this.ds_condDetail.clearData();var _e=this.ds_condDetail.addRow();this.ds_condDetail.setColumn(_e,"YEAR",_c);this.ds_condDetail.setColumn(_e,"FCLTS_MANAGE_SN",_d);this.fn_transaction("selectSub");}};this.ds_mendngReinfcAcmslt_cancolumnchange=function(_a,_b){var _c=_a.getColumn(_b.row,"CONFM_AT");if(_b.columnid=="CONFM_DE"){if(_c=='1'&&this.comUtils.isNull(_b.newvalue)){return false;}}};this.ds_mendngReinfcAcmslt_oncolumnchanged=function(_a,_b){if(_b.columnid=="CONFM_AT"){if(!this.comUtils.isNull(_b.newvalue)){_a.setColumn(_b.row,"CONFM_DE",this.comUtils.getClientDate("YYYYMMDD"));}else{_a.setColumn(_b.row,_b.columnid,"");_a.setColumn(_b.row,"CONFM_DE","");}}};this.ds_mendngReinfcAcmslt_onrowposchanged=function(_a,_b){var _c=_a.getColumn(_b.newrow,"PRUF_FILE_SN");this.ds_cond_file.clearData();var _d=this.ds_cond_file.addRow();this.ds_cond_file.setColumn(_d,"PRUF_FILE_SN",_c);this.fn_transaction("selectFile");};this.grd_mendngReinfcAcmslt_onexpandup=function(_a,_b){var _c=this.ds_mendngReinfcAcmslt.rowposition;var _d=this.ds_mendngReinfcAcmslt.getColumn(_c,"CONFM_AT");if(_d=='1'){return false;}var _e=this.ds_fcltsList.rowposition;var _f=this.ds_fcltsList.getColumn(_e,"SN");var _g=this.ds_fcltsList.getColumn(_e,"YEAR");var _h={arg_0:this,sn:_f,year:_g};this.gfn_popup("FMS030201_P01",620,200,"점검진단실적 선택",_h,"pms_fms::FMS030201_P01.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){if(_a=="FMS030201_P01"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"SN");var _f=_c.getColumn(0,"RELATE_CHCK_DGNSS_NM");var _g=this.ds_mendngReinfcAcmslt.rowposition;this.ds_mendngReinfcAcmslt.setColumn(_g,"RELATE_CHCK_DGNSS",_e);this.ds_mendngReinfcAcmslt.setColumn(_g,"RELATE_CHCK_DGNSS_NM",_f);}}};this.btn_delFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _i=this.ds_fileList.getRowCount()-1;_i>=0;_i-- ){var _d=this.ds_fileList.getColumn(_i,"CHK");if(_d=='1'){this.ds_fileList.deleteRow(_i);}}var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_fileList:U";var _h="ds_fileList=output1";Ex.core.tran(this,_e,_f,_g,_h);};this.btn_uploadFiles_onclick=function(_a,_b){this.fn_autoFileSn("PMS","FMS",this.File_UpDownManager,this.ds_fileList,this.ds_mendngReinfcAcmslt,"TBFMS_MENDNG_REINFC_ACMSLT","PRUF_FILE_SN",["FCLTS_MANAGE_SN","YEAR","SN"]);};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList.getRowCount();_h++ ){var _d=this.ds_fileList.getColumn(_h,"FILE_SN");var _e=this.ds_fileList.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};});this.on_initEvent=function(){this.ds_mendngReinfcAcmslt.addEventHandler("cancolumnchange",this.ds_mendngReinfcAcmslt_cancolumnchange,this);this.ds_mendngReinfcAcmslt.addEventHandler("oncolumnchanged",this.ds_mendngReinfcAcmslt_oncolumnchanged,this);this.ds_mendngReinfcAcmslt.addEventHandler("onrowposchanged",this.ds_mendngReinfcAcmslt_onrowposchanged,this);this.ds_fcltsList.addEventHandler("onrowposchanged",this.ds_fcltsList_onrowposchanged,this);this.addEventHandler("onload",this.FMS030202_onload,this);this.addEventHandler("oninit",this.FMS030202_oninit,this);this.div_search.sta_YEAR.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.grd_mendngReinfcAcmslt.addEventHandler("onexpandup",this.grd_mendngReinfcAcmslt_onexpandup,this);this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);this.btn_uploadFilesPlan.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFilesPlan.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.btn_delFilesPlan.addEventHandler("onclick",this.btn_delFiles_onclick,this);};this.loadIncludeScript("FMS030202.xfdl");this.loadPreloadList();};})();