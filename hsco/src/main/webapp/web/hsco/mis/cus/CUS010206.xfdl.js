﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS010206");this.set_classname("CUS010206");this.set_titletext("고객모니터단활동관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HRSMN\" type=\"STRING\" size=\"256\"/><Column id=\"MNTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mntrStgActList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MEMBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CTTPC\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_CN\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RCOGN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ACT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HRSMN\" type=\"STRING\" size=\"256\"/><Column id=\"MNTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DTRN\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_actSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mntrSeSerach",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcognAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_mntrStgActList</Col><Col id=\"colId\">RCOGN_AT</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">활동비지급여부</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_nm","absolute","509","5","38","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_hrsmn","absolute","15","5","38","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("기수");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","123","26","50","5",null,null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","547","5","110","21",null,null,this.div_search);_a.set_taborder("6");_a.set_lengthunit("utf8");_a.set_maxlength("20");this.div_search.addChild(_a.name,_a);_a=new Static("sta_mntrSe","absolute","118","5","77","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("알리미구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_mntrSe","absolute","195","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_text("전체");_a.set_innerdataset("ds_mntrSeSerach");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("0");_a=new Edit("edt_hrsmn","absolute","53","5","50","21",null,null,this.div_search);_a.set_taborder("0");_a.set_maxlength("3");_a.set_lengthunit("utf8");_a.set_inputtype("digit");this.div_search.addChild(_a.name,_a);_a=new Static("sta_actSe","absolute","320","5","64","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("활동구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_actSe","absolute","384","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_text("전체");_a.set_innerdataset("@ds_actSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("0");_a=new Static("Static01","absolute","103","0","15","32",null,null,this);_a.set_taborder("1");_a.set_text("1515");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("4");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_cstmrMntrStgList","absolute","0","10","150","19",null,null,this.div_work);_a.set_taborder("0");_a.set_text("고객모니터단활동목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_mntrStgActList","absolute","0","34",null,"326","0",null,this.div_work);_a.set_taborder("9");_a.set_autoenter("select");_a.set_autofittype("none");_a.set_binddataset("ds_mntrStgActList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"600\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"기수\"/><Cell col=\"2\" text=\"알리미구분\"/><Cell col=\"3\" text=\"활동구분\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"활동일자\"/><Cell col=\"6\" text=\"활동제목\"/><Cell col=\"7\" text=\"등록일자\"/><Cell col=\"8\" text=\"활동비인정여부\"/><Cell col=\"9\" text=\"지급금액\"/><Cell col=\"10\" text=\"지급여부\"/><Cell col=\"11\" text=\"삭제여부\"/><Cell col=\"12\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:HRSMN\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:MNTR_SE\" combodataset=\"ds_mntrSeSerach\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:ACT_SE\" combodataset=\"ds_actSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:ACT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:ACT_SJ\" tooltiptext=\"bind:ACT_SJ\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:REGIST_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:RCOGN_AT\" combodataset=\"ds_rcognAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:PYMNT_AMOUNT\"/><Cell col=\"10\" displaytype=\"checkbox\" style=\"background: ;\" text=\"expr:!PYMNT_SN ? '0' : '1'\"/><Cell col=\"11\" displaytype=\"checkbox\" style=\"controlborder:1 none #808080 ;\" text=\"bind:DELETE_AT\" tooltiptext=\"expr:DELETE_AT==&quot;1&quot;?DTRN:&quot;&quot;\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:VIEW_COUNT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_sendSms","absolute","0","368","130","19",null,null,this.div_work);_a.set_taborder("3");_a.set_text("활동정보");_a.set_cssclass("sta_WF_Title03");this.div_work.addChild(_a.name,_a);_a=new Static("sta_hrsmn","absolute","0","389","100","27",null,null,this.div_work);_a.set_taborder("4");_a.set_text("기수");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","99","389",null,"27","418",null,this.div_work);_a.set_taborder("5");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_hrsmn","absolute","102","392","50","21",null,null,this.div_work);_a.set_taborder("10");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Static("sta_actCn","absolute","0","467","100",null,null,"10",this.div_work);_a.set_taborder("6");_a.set_text("활동내용");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static14","absolute","99","467",null,null,"418","10",this.div_work);_a.set_taborder("8");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","384","1031","5",null,null,this.div_work);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new TextArea("txt_actCn","absolute","102","470",null,null,"421","13",this.div_work);_a.set_taborder("17");_a.set_wordwrap("char");_a.set_enable("true");_a.set_cssclass("txt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"10","25","19","0",null,this.div_work);_a.set_taborder("7");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Static("sta_actDe","absolute","0","415","100","27",null,null,this.div_work);_a.set_taborder("23");_a.set_text("활동일자");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","99","415",null,"27","418",null,this.div_work);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_actSe","absolute","0","441","100","27",null,null,this.div_work);_a.set_taborder("25");_a.set_text("활동제목");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static07","absolute","99","441",null,"27","418",null,this.div_work);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_actSe","absolute","102","444",null,"21","421",null,this.div_work);_a.set_taborder("16");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Calendar("cal_actDe","absolute","102","418","110","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("13");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_enable("true");_a.set_cssclass("cal_WF_Readonly");_a.set_readonly("true");_a.set_enableevent("true");_a=new Static("sta_pymntAt","absolute","378","389","100","27",null,null,this.div_work);_a.set_taborder("27");_a.set_text("활동비인정");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_rcognAt","absolute","480","392","110","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("12");_a.set_innerdataset("@ds_rcognAt");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_text("선택");_a.set_readonly("false");_a.set_enable("true");_a.set_cssclass("cmb_WF_Essential");_a.set_index("0");_a=new Static("Static01","absolute","0","360","1031","10",null,null,this.div_work);_a.set_taborder("28");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_cttpc","absolute","276","418","100","21",null,null,this.div_work);_a.set_taborder("14");_a.set_type("string");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("msk_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,"366","85","19","1",null,this.div_work);_a.set_taborder("18");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute",null,"389","412",null,"0","10",this.div_work);_a.set_taborder("19");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" celltype=\"head\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_EXTSN\"/><Cell col=\"3\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_atchFile","absolute",null,"368","113","19","298",null,this.div_work);_a.set_taborder("29");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title03");_a.getSetter("titletext").set("내외부감사실시관리");this.div_work.addChild(_a.name,_a);_a=new Static("sta_pymntAt00","absolute","378","415","100","27",null,null,this.div_work);_a.set_taborder("30");_a.set_text("지급금액");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","276","392","100","21",null,null,this.div_work);_a.set_taborder("11");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cttpc","absolute","214","415","60","27",null,null,this.div_work);_a.set_taborder("22");_a.set_text("연락처");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_nm","absolute","214","389","60","27",null,null,this.div_work);_a.set_taborder("21");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_cttpc00","absolute","480","418","110","21",null,null,this.div_work);_a.set_taborder("15");_a.set_readonly("true");_a.set_type("number");_a.set_mask("###,###,###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.set_limitbymask("both");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_excel","absolute","759","82",null,"261","32",null,this.div_work);_a.set_taborder("31");_a.set_binddataset("ds_mntrStgActList");_a.set_autoenter("select");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"600\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"61\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"11\" style=\"font:bold 24 맑은 고딕;\" text=\"고객모니터단 활동\"/><Cell row=\"1\" text=\"순번\"/><Cell row=\"1\" col=\"1\" text=\"기수\"/><Cell row=\"1\" col=\"2\" text=\"알리미구분\"/><Cell row=\"1\" col=\"3\" text=\"활동구분\"/><Cell row=\"1\" col=\"4\" text=\"성명\"/><Cell row=\"1\" col=\"5\" text=\"활동일자\"/><Cell row=\"1\" col=\"6\" text=\"활동제목\"/><Cell row=\"1\" col=\"7\" text=\"등록일자\"/><Cell row=\"1\" col=\"8\" text=\"활동비인정여부\"/><Cell row=\"1\" col=\"9\" text=\"지급금액\"/><Cell row=\"1\" col=\"10\" text=\"지급여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:HRSMN\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:MNTR_SE\" combodataset=\"ds_mntrSeSerach\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:ACT_SE\" combodataset=\"ds_actSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:ACT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:ACT_SJ\" tooltiptext=\"bind:ACT_SJ\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:REGIST_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:RCOGN_AT\" combodataset=\"ds_rcognAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:PYMNT_AMOUNT\"/><Cell col=\"10\" displaytype=\"checkbox\" text=\"expr:!PYMNT_SN ? '' : 'V'\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","305","0","15","32",null,null,this);_a.set_taborder("5");_a.set_text("1515");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","494","0","15","32",null,null,this);_a.set_taborder("7");_a.set_text("1515");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("4");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CUS010206");_b.set_titletext("고객모니터단활동관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.edt_hrsmn","value","ds_mntrStgActList","HRSMN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.edt_nm","value","ds_mntrStgActList","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.cmb_rcognAt","value","ds_mntrStgActList","RCOGN_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.cal_actDe","value","ds_mntrStgActList","ACT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.edt_actSe","value","ds_mntrStgActList","ACT_SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.txt_actCn","value","ds_mntrStgActList","ACT_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.msk_cttpc","value","ds_mntrStgActList","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.msk_cttpc00","value","ds_mntrStgActList","PYMNT_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CUS010206.xfdl","lib::comInclude.xjs");this.addIncludeScript("CUS010206.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("CUS010206.xfdl","lib::comUpDownUtils.xjs");this.registerScript("CUS010206.xfdl",function(){this.checkDs=[this.ds_mntrStgActList];var _a= -1;this.File_UpDownManager=null;this.CUS010206_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.CUS010206_onload=function(_b,_c){this.div_search.edt_hrsmn.setFocus(true);};this.fn_search=function(){this.fn_transaction("selectMntrStgActList");};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);var _b=[["ds_actSe","CUS022",1,"전체"],["ds_mntrSeSerach","CUS023",1,"전체"],["ds_rcognAt","CUS024",1,""],];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){var _b={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","CUS");this.File_UpDownManager.init(_b);};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_mntrStgActList,this.ds_validation)){return;}var _b=this.ds_mntrStgActList.rowcount;for(var _e=0;_e<_b;_e++ ){if(this.ds_mntrStgActList.getRowType(_e)==Dataset.ROWTYPE_UPDATE){var _c=this.ds_mntrStgActList.getColumn(_e,"RCOGN_AT");var _d=this.ds_mntrStgActList.getColumn(_e,"PYMNT_AMOUNT");if(_c=='1'&&!_d){this.gfn_message("comm.항목.입력.을","지급금액");return false;}}}if(this.gfn_message("confirm.저장.여부")){_a=this.ds_mntrStgActList.rowposition;this.fn_transaction("mntrStgActListU");}};this.fn_transaction=function(_b){switch(_b){case "selectMntrStgActList":this.ds_fileList.clearData();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"HRSMN",this.div_search.edt_hrsmn.value);this.ds_cond.setColumn(0,"MNTR_SE",this.div_search.cmb_mntrSe.value);this.ds_cond.setColumn(0,"ACT_SE",this.div_search.cmb_actSe.value);this.ds_cond.setColumn(0,"NM",this.div_search.edt_nm.value);var _c="hsco/mis/cus/CUS010206/selectMntrStgActList.do";var _d="input01=ds_cond";var _e="ds_mntrStgActList=output01";break;case "mntrStgActListU":var _c="hsco/mis/cus/CUS010206/mntrStgActListU.do";var _d="input02=ds_mntrStgActList:U";var _e="";break;case "selectAtchFile":this.div_work.grd_cmmnAtchmnfl.setCellProperty("head",0,"text","0");this.ds_fileList.clearData();this.ds_fileList.addRow();this.ds_fileList.setColumn(0,"FILE_SN",this.ds_mntrStgActList.getColumn(this.ds_mntrStgActList.rowposition,"ATCH_FILE"));var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_fileList";var _e="ds_fileList=output1";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "mntrStgActListU":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectMntrStgActList":if(_a!= -1){this.ds_mntrStgActList.set_rowposition(_a);_a= -1;}break;}}};this.div_work_Button00_onclick=function(_b,_c){this.gfn_exportExcel(this.div_work.grd_excel,"MntrStgActList");};this.div_work_grd_mntrStgActList_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};this.ds_mntrStgActList_onrowposchanged=function(_b,_c){switch(this.ds_mntrStgActList.getColumn(this.ds_mntrStgActList.rowposition,"CTTPC").length){case 11:this.div_work.msk_cttpc.set_mask('@@@-@@@@-@@@@');break;case 10:this.div_work.msk_cttpc.set_mask('@@@-@@@-@@@@');break;case 9:this.div_work.msk_cttpc.set_mask('@@-@@@-@@@@');break;case 8:this.div_work.msk_cttpc.set_mask('@@@@-@@@@');break;case 7:this.div_work.msk_cttpc.set_mask('@@@-@@@@');break;}var _d=_b.getColumn(_c.newrow,"PYMNT_SN");var _e=_b.getColumn(_c.newrow,"RCOGN_AT");if(!_d){this.div_work.cmb_rcognAt.set_readonly(false);this.div_work.cmb_rcognAt.set_cssclass("cmb_WF_Essential");if(_e=='1'){this.div_work.msk_cttpc00.set_readonly(false);this.div_work.msk_cttpc00.set_cssclass("msk_WF_Essential");}else{this.div_work.msk_cttpc00.set_readonly(true);this.div_work.msk_cttpc00.set_cssclass("msk_WF_Readonly");}}else{this.div_work.cmb_rcognAt.set_readonly(true);this.div_work.cmb_rcognAt.set_cssclass("cmb_WF_Readonly");this.div_work.msk_cttpc00.set_readonly(true);this.div_work.msk_cttpc00.set_cssclass("msk_WF_Readonly");}this.fn_transaction("selectAtchFile");};this.ds_mntrStgActList_oncolumnchanged=function(_b,_c){if(_c.columnid=="RCOGN_AT"){if(_b.getColumn(_c.row,"RCOGN_AT")=="1"){_b.setColumn(_c.row,"PYMNT_AMOUNT","10000");this.div_work.msk_cttpc00.set_readonly(false);this.div_work.msk_cttpc00.set_cssclass("msk_WF_Essential");}else{_b.setColumn(_c.row,"PYMNT_AMOUNT","");this.div_work.msk_cttpc00.set_readonly(true);this.div_work.msk_cttpc00.set_cssclass("msk_WF_Readonly");}}};this.btn_downFiles_onclick=function(_b,_c){var _d=this.ds_fileList.findRow("CHK","1");if(_d<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _i=0;_i<this.ds_fileList.getRowCount();_i++ ){var _e=this.ds_fileList.getColumn(_i,"FILE_SN");var _f=this.ds_fileList.getColumn(_i,"FILE_ORDR");var _g=this.ds_fileList.getColumn(_i,"ORGINL_FILE_NM");var _h=this.ds_fileList.getColumn(_i,"CHK");if(_h=='1'){this.File_UpDownManager.download(_e,_f,_g);}}};this.grd_cmmnAtchmnfl_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};});this.on_initEvent=function(){this.ds_mntrStgActList.addEventHandler("onrowposchanged",this.ds_mntrStgActList_onrowposchanged,this);this.ds_mntrStgActList.addEventHandler("oncolumnchanged",this.ds_mntrStgActList_oncolumnchanged,this);this.addEventHandler("onload",this.CUS010206_onload,this);this.addEventHandler("oninit",this.CUS010206_oninit,this);this.div_search.Static01.addEventHandler("onclick",this.Static47_onclick,this);this.div_search.cmb_mntrSe.addEventHandler("onitemchanged",this.div_search_cmb_inqryKnd_onitemchanged,this);this.div_search.cmb_actSe.addEventHandler("onitemchanged",this.div_search_cmb_inqryKnd_onitemchanged,this);this.div_work.sta_cstmrMntrStgList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_mntrStgActList.addEventHandler("onheadclick",this.div_work_grd_mntrStgActList_onheadclick,this);this.div_work.sta_sendSms.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.Button00.addEventHandler("onclick",this.div_work_Button00_onclick,this);this.div_work.Static07.addEventHandler("onclick",this.div_work_Static07_onclick,this);this.div_work.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.div_work.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);this.div_work.sta_atchFile.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_excel.addEventHandler("onheadclick",this.div_work_grd_mntrStgActList_onheadclick,this);};this.loadIncludeScript("CUS010206.xfdl");};})();