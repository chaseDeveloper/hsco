﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD030102");this.set_classname("AUD030102");this.set_titletext("온라인신고접수관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_minwonList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CMPT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CONF_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"UPLOADCHK\" type=\"STRING\" size=\"256\"/><Column id=\"OPENCHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_statusSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDE</Col><Col id=\"msgId\">조회시작일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"msgId\">조회종료일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"PK\"/><Col id=\"notNull\"/><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\">BGNDE</Col><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">조회종료일자^조회시작일자</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"FLID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label15","absolute","592","623","439","111",null,null,this);_a.set_taborder("121");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label11","absolute","230","655","273","27",null,null,this);_a.set_taborder("115");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label10","absolute","56","681","446","27",null,null,this);_a.set_taborder("99");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_RCEPT_DE","absolute","15","5","60","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("신고일자");_a.style.set_align("right middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_BGN_RCEPT_DE","absolute","79","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_value("null");_a=new Static("Static04","absolute","194","5","10","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_END_RCEPT_DE","absolute","209","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_RCEPT_AT","absolute","334","5","60","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("접수상태");_a.style.set_align("right middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_statusSe","absolute","399","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_statusSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_index("-1");_a=new Grid("grd_online_cvpl_list_01","absolute","0","67",null,"340","28",null,this);_a.set_taborder("2");_a.set_binddataset("ds_minwonList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"700\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" text=\"민원번호\"/><Cell col=\"2\" text=\"신고일자\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" rowspan=\"2\" text=\"주소\"/><Cell col=\"5\" text=\"제목\"/><Cell row=\"1\" col=\"1\" text=\"접수상태\"/><Cell row=\"1\" col=\"2\" text=\"신고자\"/><Cell row=\"1\" col=\"3\" text=\"신고자ID\"/><Cell row=\"1\" col=\"5\" text=\"내용\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:MID\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:RGST_DATE\"/><Cell col=\"3\" text=\"bind:PHONE\"/><Cell col=\"4\" rowspan=\"2\" style=\"align:left;\" text=\"bind:ADDRESS\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:TITLE\"/><Cell row=\"1\" col=\"1\" displaytype=\"combo\" text=\"bind:STATUS\" combodataset=\"ds_statusSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell row=\"1\" col=\"2\" text=\"bind:USERNM\"/><Cell row=\"1\" col=\"3\" text=\"bind:USERID\"/><Cell row=\"1\" col=\"5\" style=\"align:left;\" text=\"bind:CONTENT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("31");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","43","178","19",null,null,this);_a.set_taborder("32");_a.set_text("홈페이지 신고 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("33");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0","15","735",null,null,this);_a.set_taborder("34");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("35");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_CVPL_RCEPT","absolute","0%","418","150","19",null,null,this);_a.set_taborder("36");_a.set_text("신고접수 및 처리");_a.set_cssclass("sta_WF_Title03");_a.getSetter("titletext").set("내외부감사실시관리");this.addChild(_a.name,_a);_a=new Static("sta_RCEPT_NO","absolute","0","442","70","27",null,null,this);_a.set_taborder("37");_a.set_text("민원번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","69","442","106","27",null,null,this);_a.set_taborder("38");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_RCEPT_NO","absolute","72","445","100","21",null,null,this);_a.set_taborder("39");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_STTEMNT_DE","absolute","174","442","70","27",null,null,this);_a.set_taborder("40");_a.set_text("신고일자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","243","443","260","27",null,null,this);_a.set_taborder("41");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Calendar("cal_STTEMNT_DE","absolute","246","445","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("42");_a.set_dateformat("yyyy-MM-dd");_a.set_readonly("true");_a=new Static("sta_RCEPT_SE","absolute","0","468","70","27",null,null,this);_a.set_taborder("43");_a.set_text("접수상태");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","69","468","106","27",null,null,this);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Combo("cmb_RCEPT_SE","absolute","72","471","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("45");_a.set_innerdataset("DS_RCEPT_SE");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_readonly("true");_a=new Static("sta_WFDA_Label05","absolute","243","468","260","27",null,null,this);_a.set_taborder("50");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label06","absolute","69","494","434","27",null,null,this);_a.set_taborder("55");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_SJ","absolute","0","494","70","27",null,null,this);_a.set_taborder("56");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Edit("edt_SJ","absolute","72","497","428","21",null,null,this);_a.set_taborder("57");_a.set_lengthunit("utf8");_a.set_maxlength("100");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_STTEMNT_CN","absolute","0","520","70","136",null,null,this);_a.set_taborder("58");_a.set_text("신고내용");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label07","absolute","69","520","434","136",null,null,this);_a.set_taborder("59");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new TextArea("txt_STTEMNT_CN","absolute","72","523","428","130",null,null,this);_a.set_taborder("60");_a.set_wordwrap("char");_a.set_lengthunit("utf8");_a.set_maxlength("1000");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_APLCNT","absolute","0","655","70","27",null,null,this);_a.set_taborder("61");_a.set_text("신고자ID");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label08","absolute","69","655","106","27",null,null,this);_a.set_taborder("62");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_APLCNT","absolute","72","658","100","21",null,null,this);_a.set_taborder("63");_a.set_lengthunit("utf8");_a.set_maxlength("30");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","0","707","70","27",null,null,this);_a.set_taborder("64");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label09","absolute","69","707","434","27",null,null,this);_a.set_taborder("65");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_ADRES","absolute","72","710","428","21",null,null,this);_a.set_taborder("66");_a.set_lengthunit("utf8");_a.set_maxlength("200");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label12","absolute","592","443","106","27",null,null,this);_a.set_taborder("73");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Calendar("cal_MANAGT_DE","absolute","595","446","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("74");_a.set_dateformat("yyyy-MM-dd");_a.set_readonly("true");_a=new Static("sta_MANGT_DE","absolute","513","443","80","27",null,null,this);_a.set_taborder("75");_a.set_text("조치일자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label13","absolute","776","443","255","27",null,null,this);_a.set_taborder("76");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_RPLY_AT","absolute","697","443","80","27",null,null,this);_a.set_taborder("78");_a.set_text("담당부서");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_PROCESS_RESULT","absolute","513","469","80","130",null,null,this);_a.set_taborder("79");_a.set_text("조치내용");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label14","absolute","592","469","439","130",null,null,this);_a.set_taborder("80");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new TextArea("txt_PROCESS_RESULT","absolute","595","472","433","124",null,null,this);_a.set_taborder("81");_a.set_wordwrap("char");_a.set_lengthunit("utf8");_a.set_maxlength("1000");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","-1","407","1031","10",null,null,this);_a.set_taborder("87");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","438","1031","5",null,null,this);_a.set_taborder("88");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","503","418","10",null,null,"0",this);_a.set_taborder("91");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_RCEPT_MTH","absolute","174","468","70","27",null,null,this);_a.set_taborder("96");_a.set_text("접수방법");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Edit("edt_CTTPC00","absolute","246","684","135","21",null,null,this);_a.set_taborder("98");_a.set_inputtype("digit");_a.set_lengthunit("utf8");_a.set_maxlength("30");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_CTTPC00","absolute","174","681","70","27",null,null,this);_a.set_taborder("97");_a.set_text("연락처");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_APLCNT00","absolute","0","681","70","27",null,null,this);_a.set_taborder("100");_a.set_text("성별");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Edit("edt_APLCNT00","absolute","72","684","100","21",null,null,this);_a.set_taborder("101");_a.set_lengthunit("utf8");_a.set_maxlength("30");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_CTTPC","absolute","174","655","70","27",null,null,this);_a.set_taborder("70");_a.set_text("신고자명");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Edit("edt_APLCNT01","absolute","246","658","100","21",null,null,this);_a.set_taborder("102");_a.set_lengthunit("utf8");_a.set_maxlength("30");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Edit("edt_RCEPT_NO00","absolute","246","471","100","21",null,null,this);_a.set_taborder("103");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_OTHBC_AT00","absolute","348","442","70","27",null,null,this);_a.set_taborder("106");_a.set_text("공개여부");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Edit("edt_RCEPT_NO01","absolute","420","445","80","21",null,null,this);_a.set_taborder("107");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_MANGT_DE00","absolute","513","598","80","27",null,null,this);_a.set_taborder("108");_a.set_text("답변평가");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","592","598","106","27",null,null,this);_a.set_taborder("109");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_evaluation","absolute","595","601","100","21",null,null,this);_a.set_taborder("110");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Edit("edt_RCEPT_NO03","absolute","779","446","157","21",null,null,this);_a.set_taborder("116");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","664","646","367","5",null,null,this);_a.set_taborder("120");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_ATCH_FILE","absolute","513",null,"80","111",null,"0",this);_a.set_taborder("122");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute","946","627","85","19",null,null,this);_a.set_taborder("123");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute","595","651","433","80",null,null,this);_a.set_taborder("124");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:FLNM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("AUD030102");_b.set_titletext("온라인신고접수관리");});this.addLayout(_a.name,_a);_a=new BindItem("item41","div_SearchArea.cal_BGN_RCEPT_DE","value","ds_cond","BGN_RCEPT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item42","div_SearchArea.cal_END_RCEPT_DE","value","ds_cond","END_RCEPT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item43","div_SearchArea.cmb_RCEPT_AT","value","ds_cond","RCEPT_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_statusSe","value","ds_cond","STATUS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_RCEPT_NO","value","ds_minwonList","MID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","cal_STTEMNT_DE","value","ds_minwonList","RGST_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","cmb_RCEPT_SE","value","ds_minwonList","STATUS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","edt_SJ","value","ds_minwonList","TITLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","txt_STTEMNT_CN","value","ds_minwonList","CONTENT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","edt_APLCNT","value","ds_minwonList","USERID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","edt_ADRES","value","ds_minwonList","ADDRESS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","cal_MANAGT_DE","value","ds_minwonList","CMPT_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","txt_PROCESS_RESULT","value","ds_minwonList","ANSWER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","edt_CTTPC00","value","ds_minwonList","PHONE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_APLCNT00","value","ds_minwonList","GENDER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","edt_APLCNT01","value","ds_minwonList","USERNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","edt_RCEPT_NO00","value","ds_minwonList","KIND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_RCEPT_NO01","value","ds_minwonList","OPENCHK");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","edt_evaluation","value","ds_minwonList","EVALUATION");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","edt_RCEPT_NO03","value","ds_minwonList","CONF_DEPTNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_search.cal_BGN_RCEPT_DE","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_search.cal_END_RCEPT_DE","value","ds_cond","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("AUD030102.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD030102.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("AUD030102.xfdl","lib::comUpDownUtils.xjs");this.registerScript("AUD030102.xfdl",function(){this.checkDs=[this.ds_minwonList];var _a= -1;this.AUD030102_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.AUD030102_onload=function(_b,_c){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"BGNDE",this.gfn_today().substring(0,4)+'0101');this.ds_cond.setColumn(0,"ENDDE",this.gfn_today());this.ds_cond.setColumn(0,"STATUS","");this.ds_statusSe.clearData();this.ds_statusSe.addRow();this.ds_statusSe.setColumn(0,"CODE","");this.ds_statusSe.setColumn(0,"CODE_NM","전체");this.ds_statusSe.addRow();this.ds_statusSe.setColumn(1,"CODE","완료");this.ds_statusSe.setColumn(1,"CODE_NM","완료");this.ds_statusSe.addRow();this.ds_statusSe.setColumn(2,"CODE","요청");this.ds_statusSe.setColumn(2,"CODE_NM","요청");this.ds_statusSe.addRow();this.ds_statusSe.setColumn(3,"CODE","접수중");this.ds_statusSe.setColumn(3,"CODE_NM","접수중");this.ds_statusSe.addRow();this.ds_statusSe.setColumn(4,"CODE","취하");this.ds_statusSe.setColumn(4,"CODE_NM","취하");this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(_b,_c){this.ds_minwonList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectOnCvplist");};this.div_Cont_AUD030102_T01_btn_Trfntf_onclick=function(_b,_c){if(this.ds_minwonList.rowposition> -1){if(this.ds_minwonList.getColumn(this.ds_minwonList.rowposition,'RCEPT_AT')==2){this.gfn_message("comm.접수.완료");}else{if(this.gfn_message("comm.행위여부","고객민원으로 이첩됩니다.\n진행")){this.ds_minwonList.setColumn(this.ds_minwonList.rowposition,'RCEPT_AT','2');this.ds_minwonList.setColumn(this.ds_minwonList.rowposition,'MANAGT_SE','5');this.fn_transaction("TrfntfCUD");}}}else{this.gfn_message("comm.데이터.선택.없음");}};this.fn_transaction=function(_b){switch(_b){case "selectOnCvplist":var _c="hsco/mis/aud/AUD030102/selectOnCvplist.do";var _d="input01=ds_cond";var _e="ds_minwonList=output01";break;case "selectFile":var _c="hsco/mis/aud/AUD030102/selectFile.do";var _d="input01=ds_cond2";var _e="ds_fileList=output01";break;case "TrfntfCUD":var _c="hsco/mis/aud/AUD030102/TrfntfCUD.do";var _d="input01=ds_minwonList:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "selectOnCvplist":break;case "TrfntfCUD":this.fn_search();break;}}};this.div_Cont_AUD030102_T01_grd_online_cvpl_list_01_onheadclick=function(_b,_c){this.gfn_gridSort(_b,_c);};this.ds_minwonList_onrowposchanged=function(_b,_c){var _d=this.ds_minwonList.rowposition;var _e=this.ds_minwonList.getColumn(_d,"MID");this.ds_cond2.clearData();this.ds_cond2.addRow();this.ds_cond2.setColumn(0,"MID",_e);this.fn_transaction("selectFile");};this.btn_downFiles_onclick=function(_b,_c){var _d=this.ds_fileList.findRow("CHK","1");if(_d<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _k=0;_k<this.ds_fileList.getRowCount();_k++ ){var _e=this.ds_fileList.rowposition;var _f=this.ds_fileList.getColumn(_e,"CHK");var _g=this.ds_fileList.getColumn(_e,"FLID");var _h=this.ds_fileList.getColumn(_e,"FLNM");var _i="https://minwon.hsuco.or.kr/FileDown.jsp?";var _j="FILEID="+_g+"&FILENM="+_h;if(_f=='1'){system.execBrowser(_i+_j);}}};this.grd_cmmnAtchmnfl_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("cancolumnchange",this.DS_SEARCH_cancolumnchange,this);this.ds_minwonList.addEventHandler("onrowposchanged",this.ds_minwonList_onrowposchanged,this);this.addEventHandler("onload",this.AUD030102_onload,this);this.addEventHandler("oninit",this.AUD030102_oninit,this);this.grd_online_cvpl_list_01.addEventHandler("onheadclick",this.div_Cont_AUD030102_T01_grd_online_cvpl_list_01_onheadclick,this);this.sta_CVPL_RCEPT.addEventHandler("onclick",this.Static00_onclick,this);this.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);};this.loadIncludeScript("AUD030102.xfdl");};})();