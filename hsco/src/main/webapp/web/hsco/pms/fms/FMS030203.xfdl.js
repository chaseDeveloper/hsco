﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS030203");this.set_classname("form");this.set_titletext("중대결함사후관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_imprtnShrtcomAftfat",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_PLAN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_PLAN_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_PLAN_FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_OUTSET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_OUTSET_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_OUTSET_FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_COMPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_COMPT_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_COMPT_FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mastr",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_DGNSS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_DGNSS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"SAFE_GRAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SAFE_GRAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DGNSS_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_ARTCL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2017</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDetail",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2017</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">보고년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CNTRWK_SE</Col><Col id=\"compId\">ds_imprtnShrtcomAftfat</Col><Col id=\"msgId\">공사구분</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">CNTRWK_BGNDE</Col><Col id=\"compId\">ds_imprtnShrtcomAftfat</Col><Col id=\"msgId\">공사 시작일</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col><Col id=\"to\"/><Col id=\"from\"/></Row><Row><Col id=\"compId\">ds_imprtnShrtcomAftfat</Col><Col id=\"colId\">CNTRWK_ENDDE</Col><Col id=\"msgId\">공사 종료일</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_imprtnShrtcomAftfat</Col><Col id=\"colId\">CNTRWK_BGNDE</Col><Col id=\"msgId\">공사 시작일^공사 종료일</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"lengthChkGb\"/><Col id=\"type\"/><Col id=\"from\">CNTRWK_BGNDE</Col><Col id=\"to\">CNTRWK_ENDDE</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fms025",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fms028",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_filePlan",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileCompt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileOutset",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_file",this);_a._setContents("<ColumnInfo><Column id=\"MANAGT_PLAN_FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_OUTSET_FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGT_COMPT_FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static31","absolute",null,null,"414","131","28","289",this);_a.set_taborder("222");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static32","absolute",null,null,"414","131","28","145",this);_a.set_taborder("223");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static33","absolute",null,null,"414","131","28","0",this);_a.set_taborder("224");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","68",null,null,"27","441","367",this);_a.set_taborder("190");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","68",null,null,"27","441","393",this);_a.set_taborder("191");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","68",null,null,"79","441","289",this);_a.set_taborder("192");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("16");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("보고년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","84","5","71","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","208","5","195","21",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","170","5","38","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","155","2","15","34",null,null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("18");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("19");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","169","19",null,null,this);_a.set_taborder("20");_a.set_text("점검조치결과");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","286","1031","5",null,null,this);_a.set_taborder("22");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","310","1031","5",null,null,this);_a.set_taborder("23");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_zipAddress00","absolute","0","67",null,null,"28","449",this);_a.set_taborder("24");_a.set_binddataset("ds_mastr");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"시설구분\"/><Cell col=\"1\" text=\"시설명\"/><Cell col=\"2\" text=\"점검구분\"/><Cell col=\"3\" text=\"점검시작일\"/><Cell col=\"4\" text=\"점검종료일\"/><Cell col=\"5\" text=\"안전등급\"/><Cell col=\"6\" text=\"점검결과\"/><Cell col=\"7\" text=\"보수요강\"/></Band><Band id=\"body\"><Cell text=\"bind:FCLTS_SE\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:FCLTS_NM\"/><Cell col=\"2\" text=\"bind:CHCK_DGNSS_NM\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:CHCK_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:CHCK_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:SAFE_GRAD_NM\"/><Cell col=\"6\" style=\"align:left top;\" text=\"bind:DGNSS_RESULT\"/><Cell col=\"7\" style=\"align:left top;\" text=\"bind:MENDNG_ARTCL\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid08","absolute",null,null,"398","98","36","293",this);_a.set_taborder("100");_a.set_binddataset("ds_filePlan");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"339","398","5","36",null,this);_a.set_taborder("101");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute",null,null,"89","19","345","396",this);_a.set_taborder("102");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");_a.style.set_font("9 Gulim");this.addChild(_a.name,_a);_a=new Static("sta_title03","absolute",null,null,"89","19","345","107",this);_a.set_taborder("137");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");_a.style.set_font("9 Gulim");this.addChild(_a.name,_a);_a=new Static("Static16","absolute",null,"628","398","5","36",null,this);_a.set_taborder("138");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute",null,null,"398","98","36","4",this);_a.set_taborder("139");_a.set_binddataset("ds_fileCompt");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute",null,null,"398","98","36","149",this);_a.set_taborder("140");_a.set_binddataset("ds_fileOutset");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title04","absolute",null,null,"89","19","345","252",this);_a.set_taborder("151");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");_a.style.set_font("9 Gulim");this.addChild(_a.name,_a);_a=new Static("Static18","absolute",null,"483","397","5","37",null,this);_a.set_taborder("152");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_uploadFilesPlan","absolute",null,null,"68","19","123","396",this);_a.set_taborder("164");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFilesPlan","absolute",null,null,"85","19","36","396",this);_a.set_taborder("165");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_uploadFilesCompt","absolute",null,null,"68","19","123","107",this);_a.set_taborder("166");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFilesCompt","absolute",null,null,"85","19","36","107",this);_a.set_taborder("167");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_uploadFilesOutset","absolute",null,null,"68","19","123","252",this);_a.set_taborder("168");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFilesOutset","absolute",null,null,"85","19","36","252",this);_a.set_taborder("169");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_delFilesPlan","absolute",null,null,"67","19","193","396",this);_a.set_taborder("171");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_delFilesCompt","absolute",null,null,"67","19","193","107",this);_a.set_taborder("172");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_delFilesOutset","absolute",null,null,"67","19","193","252",this);_a.set_taborder("173");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","68",null,"100","27",null,"393",this);_a.set_taborder("184");_a.set_text("조치기한");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","68",null,"100","79",null,"289",this);_a.set_taborder("186");_a.set_text("조치내용");_a.set_cssclass("sta_WF_Label");_a.style.set_linespace("5");this.addChild(_a.name,_a);_a=new TextArea("TextArea00","absolute","170",null,null,"73","446","292",this);_a.set_taborder("187");_a.set_wordwrap("char");_a.set_lengthunit("utf8");_a.set_maxlength("450");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","68",null,"100","27",null,"367",this);_a.set_taborder("189");_a.set_text("조치일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","68",null,null,"27","441","223",this);_a.set_taborder("193");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","68",null,null,"27","441","249",this);_a.set_taborder("194");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","68",null,null,"79","441","145",this);_a.set_taborder("195");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","68",null,"100","27",null,"249",this);_a.set_taborder("196");_a.set_text("조치기한");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","68",null,"100","79",null,"145",this);_a.set_taborder("198");_a.set_text("조치내용");_a.set_cssclass("sta_WF_Label");_a.style.set_linespace("5");this.addChild(_a.name,_a);_a=new TextArea("TextArea01","absolute","170",null,null,"73","446","148",this);_a.set_taborder("199");_a.set_wordwrap("char");_a.set_lengthunit("utf8");_a.set_maxlength("450");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","68",null,"100","27",null,"223",this);_a.set_taborder("201");_a.set_text("조치일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","68",null,null,"27","441","78",this);_a.set_taborder("203");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","68",null,null,"27","441","104",this);_a.set_taborder("204");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","68",null,null,"79","441","0",this);_a.set_taborder("205");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","68",null,"100","27",null,"104",this);_a.set_taborder("206");_a.set_text("조치기한");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","68",null,"100","79",null,"0",this);_a.set_taborder("208");_a.set_text("조치내용");_a.set_cssclass("sta_WF_Label");_a.style.set_linespace("5");this.addChild(_a.name,_a);_a=new TextArea("TextArea02","absolute","170",null,null,"73","446","3",this);_a.set_taborder("209");_a.set_wordwrap("char");_a.set_lengthunit("utf8");_a.set_maxlength("450");this.addChild(_a.name,_a);_a=new Static("Static25","absolute","68",null,"100","27",null,"78",this);_a.set_taborder("211");_a.set_text("조치일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","0",null,"69","131",null,"289",this);_a.set_taborder("212");_a.set_text("계획");_a.set_cssclass("sta_WF_Label");_a.style.set_linespace("5");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","0",null,"69","131",null,"145",this);_a.set_taborder("213");_a.set_text("착수");_a.set_cssclass("sta_WF_Label");_a.style.set_linespace("5");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","0",null,"69","131",null,"0",this);_a.set_taborder("214");_a.set_text("완료");_a.set_cssclass("sta_WF_Label");_a.style.set_linespace("5");this.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","170",null,"130","21",null,"370",this);this.addChild(_a.name,_a);_a.set_taborder("216");_a=new Calendar("Calendar01","absolute","170",null,"130","21",null,"226",this);this.addChild(_a.name,_a);_a.set_taborder("217");_a=new Calendar("Calendar02","absolute","170",null,"130","21",null,"81",this);this.addChild(_a.name,_a);_a.set_taborder("218");_a=new Static("Static05","absolute","173",null,null,"21","480","396",this);_a.set_taborder("219");_a.set_text("(조치계획수립시)");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","173",null,null,"21","488","252",this);_a.set_taborder("220");_a.set_text("(점검진단종료일로부터 2년 이내)");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","173",null,null,"21","456","107",this);_a.set_taborder("221");_a.set_text("(점검진단종료일로부터 3년 이내)");this.addChild(_a.name,_a);_a=new Div("div_blind","absolute",null,null,"92","54","502","647",this);_a.set_taborder("179");_a.set_text("'중대결함 사후관리계획 추가' 버튼을 클릭 후, 내용을 입력하여 주시기 바랍니다");_a.style.set_background("#ffffffdc");_a.style.set_font("bold 12 Gulim");this.addChild(_a.name,_a);_a=new Button("btn_detail","absolute",null,null,"178","21","28","424",this);_a.set_taborder("215");_a.set_text("중대결함 사후관리계획 추가");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0",null,"113","19",null,"425",this);_a.set_taborder("25");_a.set_text("사후관리계획");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("16");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",92,54,this.div_blind,function(_b){_b.set_taborder("179");_b.set_text("'중대결함 사후관리계획 추가' 버튼을 클릭 후, 내용을 입력하여 주시기 바랍니다");_b.style.set_background("#ffffffdc");_b.style.set_font("bold 12 Gulim");});this.div_blind.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("form");_b.set_titletext("중대결함사후관리");});this.addLayout(_a.name,_a);_a=new BindItem("item16","TextArea00","value","ds_imprtnShrtcomAftfat","MANAGT_PLAN_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_SEARCH.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","TextArea01","value","ds_imprtnShrtcomAftfat","MANAGT_OUTSET_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","TextArea02","value","ds_imprtnShrtcomAftfat","MANAGT_COMPT_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Calendar00","value","ds_imprtnShrtcomAftfat","MANAGT_PLAN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Calendar01","value","ds_imprtnShrtcomAftfat","MANAGT_OUTSET_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Calendar02","value","ds_imprtnShrtcomAftfat","MANAGT_COMPT_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FMS030203.xfdl","lib::comInclude.xjs");this.addIncludeScript("FMS030203.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("FMS030203.xfdl","lib::comUpDownUtils.xjs");this.registerScript("FMS030203.xfdl",function(){this.File_UpDownManager=null;this.FMS030203_oninit=function(_a,_b){};this.FMS030203_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"YEAR",this.comUtils.getClientDate("YYYY"));this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(this.gfn_authGrpId("FMS_ADMIN")!= -1){}else{this.ds_cond.setColumn(_c,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_c,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_dept.fn_setReadonly(true);}this.div_blind.set_height(480);this.div_blind.set_left(0);this.div_blind.set_right(25);this.div_blind.set_bottom(0);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"PMS","FMS");this.File_UpDownManager.init(_a);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_mastr.clearData();this.fn_transaction("select");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_imprtnShrtcomAftfat,this.ds_validation)){return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_mastr.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/pms/fms/FMS030203/select.do";var _c="input1=ds_cond";var _d="ds_mastr=output1";break;case "selectSub":var _b="/hsco/pms/fms/FMS030203/selectSub.do";var _c="input1=ds_condDetail";var _d="ds_imprtnShrtcomAftfat=output1";break;case "selectFile":var _b="/hsco/pms/fms/FMS030203/selectFile.do";var _c="input1=ds_cond_file";var _d="ds_filePlan=output1 ds_fileOutset=output2 ds_fileCompt=output3";break;case "save":var _b="/hsco/pms/fms/FMS030203/save.do";var _c="input1=ds_imprtnShrtcomAftfat:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.saveRow> -1){this.ds_mastr.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "selectSub":if(this.ds_imprtnShrtcomAftfat.getRowCount()>0){this.btn_detail.set_text("중대결함 사후관리계획 삭제");this.div_blind.set_visible(false);}else{this.btn_detail.set_text("중대결함 사후관리계획 추가");this.div_blind.set_visible(true);}break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.ds_mastr_onrowposchanged=function(_a,_b){this.ds_imprtnShrtcomAftfat.clearData();if(_b.newrow> -1){var _c=_a.getColumn(_b.newrow,"YEAR");var _d=_a.getColumn(_b.newrow,"SN");this.ds_condDetail.clearData();var _e=this.ds_condDetail.addRow();this.ds_condDetail.setColumn(_e,"YEAR",_c);this.ds_condDetail.setColumn(_e,"FCLTS_MANAGE_SN",_d);this.fn_transaction("selectSub");}};this.ds_imprtnShrtcomAftfat_onrowposchanged=function(_a,_b){var _c=_a.getColumn(0,"MANAGT_PLAN_FILE_SN");var _d=_a.getColumn(0,"MANAGT_OUTSET_FILE_SN");var _e=_a.getColumn(0,"MANAGT_COMPT_FILE_SN");this.ds_cond_file.clearData();var _f=this.ds_cond_file.addRow();this.ds_cond_file.setColumn(_f,"MANAGT_PLAN_FILE_SN",_c);this.ds_cond_file.setColumn(_f,"MANAGT_OUTSET_FILE_SN",_d);this.ds_cond_file.setColumn(_f,"MANAGT_COMPT_FILE_SN",_e);this.fn_transaction("selectFile");};this.btn_detail_onclick=function(_a,_b){if(this.ds_imprtnShrtcomAftfat.getRowCount()>0){this.ds_imprtnShrtcomAftfat.deleteAll();this.btn_detail.set_text("중대결함 사후관리계획 추가");this.div_blind.set_visible(true);}else{var _c=this.ds_mastr.rowposition;var _d=this.ds_mastr.getColumn(_c,"FCLTS_MANAGE_SN");var _e=this.ds_mastr.getColumn(_c,"YEAR");var _f=this.ds_mastr.getColumn(_c,"SN");var _g=this.ds_imprtnShrtcomAftfat.addRow();this.ds_imprtnShrtcomAftfat.setColumn(_g,"FCLTS_MANAGE_SN",_d);this.ds_imprtnShrtcomAftfat.setColumn(_g,"YEAR",_e);this.ds_imprtnShrtcomAftfat.setColumn(_g,"SN",_f);this.btn_detail.set_text("중대결함 사후관리계획 삭제");this.div_blind.set_visible(false);}};this.btn_delFiles_onclick=function(_a,_b){switch(_a.name){case "btn_delFilesPlan":var _c=this.ds_filePlan.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _i=this.ds_filePlan.getRowCount()-1;_i>=0;_i-- ){var _d=this.ds_filePlan.getColumn(_i,"CHK");if(_d=='1'){this.ds_filePlan.deleteRow(_i);}}var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_filePlan:U";var _h="ds_filePlan=output1";Ex.core.tran(this,_e,_f,_g,_h);break;case "btn_delFilesOutset":var _c=this.ds_fileOutset.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _i=this.ds_fileOutset.getRowCount()-1;_i>=0;_i-- ){var _d=this.ds_fileOutset.getColumn(_i,"CHK");if(_d=='1'){this.ds_fileOutset.deleteRow(_i);}}var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_fileOutset:U";var _h="ds_fileOutset=output1";Ex.core.tran(this,_e,_f,_g,_h);break;case "btn_delFilesCompt":var _c=this.ds_fileCompt.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _i=this.ds_fileCompt.getRowCount()-1;_i>=0;_i-- ){var _d=this.ds_fileCompt.getColumn(_i,"CHK");if(_d=='1'){this.ds_fileCompt.deleteRow(_i);}}var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_fileCompt:U";var _h="ds_fileCompt=output1";Ex.core.tran(this,_e,_f,_g,_h);break;}};this.btn_uploadFiles_onclick=function(_a,_b){switch(_a.name){case "btn_uploadFilesPlan":this.fn_autoFileSn("PMS","FMS",this.File_UpDownManager,this.ds_filePlan,this.ds_imprtnShrtcomAftfat,"TBFMS_IMPRTN_SHRTCOM_AFTFAT","MANAGT_PLAN_FILE_SN",["FCLTS_MANAGE_SN","YEAR","SN"]);break;case "btn_uploadFilesOutset":this.fn_autoFileSn("PMS","FMS",this.File_UpDownManager,this.ds_fileOutset,this.ds_imprtnShrtcomAftfat,"TBFMS_IMPRTN_SHRTCOM_AFTFAT","MANAGT_OUTSET_FILE_SN",["FCLTS_MANAGE_SN","YEAR","SN"]);break;case "btn_uploadFilesCompt":this.fn_autoFileSn("PMS","FMS",this.File_UpDownManager,this.ds_fileCompt,this.ds_imprtnShrtcomAftfat,"TBFMS_IMPRTN_SHRTCOM_AFTFAT","MANAGT_COMPT_FILE_SN",["FCLTS_MANAGE_SN","YEAR","SN"]);break;}};this.btn_downFiles_onclick=function(_a,_b){switch(_a.name){case "btn_downFilesPlan":var _c=this.ds_filePlan.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_filePlan.getRowCount();_h++ ){var _d=this.ds_filePlan.getColumn(_h,"FILE_SN");var _e=this.ds_filePlan.getColumn(_h,"FILE_ORDR");var _f=this.ds_filePlan.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_filePlan.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}break;case "btn_downFilesOutset":var _c=this.ds_fileOutset.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileOutset.getRowCount();_h++ ){var _d=this.ds_fileOutset.getColumn(_h,"FILE_SN");var _e=this.ds_fileOutset.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileOutset.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileOutset.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}break;case "btn_downFilesCompt":var _c=this.ds_fileCompt.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileCompt.getRowCount();_h++ ){var _d=this.ds_fileCompt.getColumn(_h,"FILE_SN");var _e=this.ds_fileCompt.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileCompt.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileCompt.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}break;}};});this.on_initEvent=function(){this.ds_imprtnShrtcomAftfat.addEventHandler("onrowposchanged",this.ds_imprtnShrtcomAftfat_onrowposchanged,this);this.ds_mastr.addEventHandler("onrowposchanged",this.ds_mastr_onrowposchanged,this);this.addEventHandler("onload",this.FMS030203_onload,this);this.addEventHandler("oninit",this.FMS030203_oninit,this);this.Grid08.addEventHandler("oncelldblclick",this.tab_tbhrmEcnySport_tabpage0_Grid08_oncelldblclick,this);this.Grid00.addEventHandler("oncelldblclick",this.tab_tbhrmEcnySport_tabpage0_Grid08_oncelldblclick,this);this.Grid01.addEventHandler("oncelldblclick",this.tab_tbhrmEcnySport_tabpage0_Grid08_oncelldblclick,this);this.btn_uploadFilesPlan.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFilesPlan.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.btn_uploadFilesCompt.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFilesCompt.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.btn_uploadFilesOutset.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFilesOutset.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.btn_delFilesPlan.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.btn_delFilesCompt.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.btn_delFilesOutset.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.TextArea00.addEventHandler("oneditclick",this.TextArea00_oneditclick,this);this.TextArea01.addEventHandler("oneditclick",this.TextArea00_oneditclick,this);this.TextArea02.addEventHandler("oneditclick",this.TextArea00_oneditclick,this);this.btn_detail.addEventHandler("onclick",this.btn_detail_onclick,this);};this.loadIncludeScript("FMS030203.xfdl");this.loadPreloadList();};})();