﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS010101");this.set_classname("CUS010101");this.set_titletext("오프라인민원접수관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cvplGrad",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">우호</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">보통</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">악성</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_hmpgCstmrCvpl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RCEPT_NO\" type=\"STRING\" size=\"20\"/><Column id=\"INQRY_KND\" type=\"STRING\" size=\"2\"/><Column id=\"INQRY_KND_DETAIL\" type=\"STRING\" size=\"2\"/><Column id=\"CSTMR_REGIST_DT\" type=\"STRING\" size=\"10\"/><Column id=\"CVPL_NO\" type=\"STRING\" size=\"10\"/><Column id=\"CVPL_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DT\" type=\"STRING\" size=\"10\"/><Column id=\"RCEPT_MTH\" type=\"STRING\" size=\"2\"/><Column id=\"HOPE_RICFLD_COURS\" type=\"STRING\" size=\"2\"/><Column id=\"SJ\" type=\"STRING\" size=\"100\"/><Column id=\"CN\" type=\"STRING\" size=\"1000\"/><Column id=\"NM\" type=\"STRING\" size=\"30\"/><Column id=\"GNRL_TLPHON\" type=\"STRING\" size=\"14\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"30\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"MVN_AT\" type=\"STRING\" size=\"2\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"100\"/><Column id=\"DELETE_DE\" type=\"STRING\" size=\"8\"/><Column id=\"DTRN\" type=\"STRING\" size=\"100\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"INQIRE_CO\" type=\"STRING\" size=\"10\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"10\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PRC_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INQRY_KND\" type=\"STRING\" size=\"256\"/><Column id=\"INQRY_KND_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_BGN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_inqryKnd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prcStatus",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rceptMth",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">전화</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">방문</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">이첩</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">우편</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_inqryKndDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hmpgCstmrInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"30\"/><Column id=\"ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"GNRL_TLPHON\" type=\"STRING\" size=\"14\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"10\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"10\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_inqryKndDetail2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_inqryKnd2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_inqryknd","absolute","15","5","60","21",null,null,this.div_search);_a.set_taborder("15");_a.set_text("문의종류");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_prcStatus","absolute","319","5","60","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("처리상태");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_prcStatus","absolute","384","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("17");_a.set_innerdataset("@ds_prcStatus");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("cmb_inqrykndDetail","absolute","182","5","130","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("19");_a.set_enable("false");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_inqryKndDetail");_a.set_index("-1");_a=new Static("sta_rceptDt","absolute","15","31","60","21",null,null,this.div_search);_a.set_taborder("20");_a.set_text("등록일시");_a.style.set_align("left middle");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_registBgnDt","absolute","77","31","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("21");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_value("null");_a=new Static("Static04","absolute","192","31","10","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_registEndDt","absolute","207","31","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("23");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Combo("cmb_inqryknd","absolute","77","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("26");_a.set_innerdataset("@ds_inqryKnd");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_text("전체");_a.set_index("0");_a=new Div("div_work","absolute","0","59",null,null,"28","0",this);_a.set_taborder("5");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_AUDIT_DEPT_TABLE","absolute","0","315","130","19",null,null,this.div_work);_a.set_taborder("0");_a.set_text("민원접수정보");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_hmpgCstmrCvpl","absolute","0","27",null,"280","0",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_hmpgCstmrCvpl");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"문의종류\"/><Cell col=\"2\" text=\"문의종류상세\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"민원인성명\"/><Cell col=\"5\" text=\"접수자\"/><Cell col=\"6\" text=\"고객등록일시\"/><Cell col=\"7\" text=\"처리상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:INQRY_KND\" combodataset=\"ds_inqryKnd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:INQRY_KND_DETAIL\" combodataset=\"ds_inqryKndDetail\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SJ\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:NM\" combodisplayrowcount=\"-1\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RCEPT_EMPNM\" combodisplayrowcount=\"-1\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:CSTMR_REGIST_DT\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" editfilter=\"none\" text=\"bind:PRC_STATUS\" combodataset=\"ds_prcStatus\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rceptDt","absolute","0","334","100","27",null,null,this.div_work);_a.set_taborder("3");_a.set_text("고객등록일시");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","98","334","116","27",null,null,this.div_work);_a.set_taborder("4");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_rceptMth","absolute","0","360","100","27",null,null,this.div_work);_a.set_taborder("5");_a.set_text("접수구분");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","98","360","76","27",null,null,this.div_work);_a.set_taborder("6");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_sj","absolute","0","438","100","27",null,null,this.div_work);_a.set_taborder("7");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","99","438","372","27",null,null,this.div_work);_a.set_taborder("8");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_rceptMth","absolute","101","363","70","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("9");_a.set_enable("true");_a.set_innerdataset("@ds_rceptMth");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_value("1");_a.set_text("전화");_a.set_cssclass("cmb_WF_Essential");_a.set_index("0");_a=new Static("sta_rceptEmpNm","absolute","0","386","100","27",null,null,this.div_work);_a.set_taborder("10");_a.set_text("접수자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label06","absolute","99","386","168","27",null,null,this.div_work);_a.set_taborder("11");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Calendar("cal_rceptDt","absolute","101","337","110","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("12");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_enable("true");_a=new Static("sta_inqryKnd","absolute","0","412","100","27",null,null,this.div_work);_a.set_taborder("13");_a.set_text("문의종류");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label04","absolute","99","412","106","27",null,null,this.div_work);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_inqryKnd","absolute","102","415","100","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("15");_a.set_innerdataset("@ds_inqryKnd2");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_enable("true");_a.set_index("-1");_a=new Static("sta_WFDA_Label05","absolute","204","412","136","27",null,null,this.div_work);_a.set_taborder("16");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_sj","absolute","102","441","365","21",null,null,this.div_work);_a.set_taborder("17");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cn","absolute","0","464","100","206",null,null,this.div_work);_a.set_taborder("18");_a.set_text("민원사항");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label07","absolute","99","464","372","206",null,null,this.div_work);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new TextArea("txt_cn","absolute","102","467","365","200",null,null,this.div_work);_a.set_taborder("20");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AUDIT_DEPT_TABLE00","absolute","480","315","130","19",null,null,this.div_work);_a.set_taborder("21");_a.set_text("민원접수정보");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cvplGrade","absolute","480","342","100","27",null,null,this.div_work);_a.set_taborder("22");_a.set_text("민원등급");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label08","absolute","579","342","166","27",null,null,this.div_work);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_atchFile","absolute","480","368","100","27",null,null,this.div_work);_a.set_taborder("24");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label09","absolute","579","368","351","27",null,null,this.div_work);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Radio("rdo_cvplGrade","absolute","587","346","160","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("26");_a.set_innerdataset("@ds_cvplGrad");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.set_direction("vertical");_a=new Edit("edt_atchFile","absolute","582","371","300","21",null,null,this.div_work);_a.set_taborder("27");this.div_work.addChild(_a.name,_a);_a=new Button("btn_attach","absolute","886","371","40","21",null,null,this.div_work);_a.set_taborder("28");_a.set_text("첨부");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AUDIT_DEPT_TABLE01","absolute","480","401","130","19",null,null,this.div_work);_a.set_taborder("29");_a.set_text("민원인정보");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_nm","absolute","480","422","100","27",null,null,this.div_work);_a.set_taborder("30");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label10","absolute","579","422","156","27",null,null,this.div_work);_a.set_taborder("31");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","582","425","150","21",null,null,this.div_work);_a.set_taborder("32");_a.set_enable("true");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Static("sta_gnrlTlphon","absolute","480","474","100","27",null,null,this.div_work);_a.set_taborder("33");_a.set_text("전화");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label11","absolute","579","474","156","27",null,null,this.div_work);_a.set_taborder("35");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_gnrlTlphon","absolute","582","477","150","21",null,null,this.div_work);_a.set_taborder("36");_a.set_enable("true");this.div_work.addChild(_a.name,_a);_a=new Static("sta_mbtlno","absolute","480","448","100","27",null,null,this.div_work);_a.set_taborder("37");_a.set_text("핸드폰번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label12","absolute","579","448","202","27",null,null,this.div_work);_a.set_taborder("38");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_mbtlno","absolute","582","451","150","21",null,null,this.div_work);_a.set_taborder("34");_a.set_enable("true");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Static("sta_email","absolute","480","500","100","27",null,null,this.div_work);_a.set_taborder("39");_a.set_text("이메일");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label13","absolute","579","500","256","27",null,null,this.div_work);_a.set_taborder("40");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_email","absolute","582","503","250","21",null,null,this.div_work);_a.set_taborder("41");_a.set_enable("true");this.div_work.addChild(_a.name,_a);_a=new Static("sta_adres","absolute","480","552","100","27",null,null,this.div_work);_a.set_taborder("42");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label14","absolute","579","552","256","27",null,null,this.div_work);_a.set_taborder("43");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_adres","absolute","582","555","250","21",null,null,this.div_work);_a.set_taborder("44");_a.set_enable("true");this.div_work.addChild(_a.name,_a);_a=new Static("sta_zipcode","absolute","480","526","100","27",null,null,this.div_work);_a.set_taborder("45");_a.set_text("우편번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label15","absolute","579","526","202","27",null,null,this.div_work);_a.set_taborder("46");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_zipcode","absolute","582","529","150","21",null,null,this.div_work);_a.set_taborder("47");_a.set_enable("true");this.div_work.addChild(_a.name,_a);_a=new Button("btn_zipcodeSearch","absolute","737","529","40","21",null,null,this.div_work);_a.set_taborder("48");_a.set_text("검색");this.div_work.addChild(_a.name,_a);_a=new Combo("cmb_inqryKndDetail","absolute","207","415","130","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("49");_a.set_enable("true");_a.set_innerdataset("@ds_inqryKndDetail2");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a=new Div("div_EMP","absolute","102","389","165","22",null,null,this.div_work);_a.set_taborder("50");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_work.addChild(_a.name,_a);_a=new Button("btn_custrSearch","absolute","737","451","40","21",null,null,this.div_work);_a.set_taborder("51");_a.set_text("검색");this.div_work.addChild(_a.name,_a);_a=new Static("sta_AUDIT_TABLE","absolute","0","7","130","19",null,null,this.div_work);_a.set_taborder("52");_a.set_text("오프라인민원목록");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("53");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","22","1031","5",null,null,this.div_work);_a.set_taborder("54");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","-1","307","1031","10",null,null,this.div_work);_a.set_taborder("55");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","329","1031","5",null,null,this.div_work);_a.set_taborder("56");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","480","395","487","10",null,null,this.div_work);_a.set_taborder("57");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","481","417","487","5",null,null,this.div_work);_a.set_taborder("58");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("5");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CUS010101");_b.set_titletext("오프라인민원접수관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.cmb_rceptMth","value","ds_hmpgCstmrCvpl","RCEPT_MTH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.cmb_inqryKnd","value","ds_hmpgCstmrCvpl","INQRY_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.cal_rceptDt","value","ds_hmpgCstmrCvpl","CSTMR_REGIST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.edt_sj","value","ds_hmpgCstmrCvpl","SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.txt_cn","value","ds_hmpgCstmrCvpl","CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_work.edt_atchFile","value","ds_hmpgCstmrCvpl","ATCH_FILE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_work.edt_nm","value","ds_hmpgCstmrCvpl","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_work.edt_gnrlTlphon","value","ds_hmpgCstmrCvpl","GNRL_TLPHON");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_work.edt_mbtlno","value","ds_hmpgCstmrCvpl","MBTLNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_work.edt_email","value","ds_hmpgCstmrCvpl","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_work.edt_adres","value","ds_hmpgCstmrCvpl","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.cmb_inqryKndDetail","value","ds_hmpgCstmrCvpl","INQRY_KND_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.edt_zipcode","value","ds_hmpgCstmrCvpl","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.rdo_cvplGrade","value","ds_hmpgCstmrCvpl","CVPL_GRAD");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("CUS010101_old.xfdl","lib::comInclude.xjs");this.registerScript("CUS010101_old.xfdl",function(){this.CUS010101_oninit=function(_a,_b){this.fn_loadCombo();};this.CUS010101_onload=function(_a,_b){this.div_search.cal_registBgnDt.set_value('20140101');this.div_search.cal_registEndDt.set_value(this.gfn_today());this.div_work.div_EMP.fn_setBind("ds_hmpgCstmrCvpl","RCEPT_EMPNO","RCEPT_EMPNM");this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_loadCombo=function(){var _a=[["ds_inqryKnd","CUS001",1,"전체"],["ds_inqryKndDetail","CUS003",1,"전체"],["ds_inqryKnd2","CUS001",1,""],["ds_inqryKndDetail2","CUS003",1,""],["ds_prcStatus","CUS002",1,"전체"],];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_init_dataset=function(){};this.fn_search=function(){this.fn_transaction("selectHmpgCvplList");};this.fn_save=function(){if(this.confirm("저장하시겠습니까?")){this.fn_transaction("hmpgCvplListCUD");}};this.fn_transaction=function(_a){switch(_a){case "selectHmpgCvplList":this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"INQRY_KND",this.div_search.cmb_inqryknd.value);this.ds_cond.setColumn(0,"PRC_STATUS",this.div_search.cmb_prcStatus.value);this.ds_cond.setColumn(0,"REGIST_BGN_DT",this.div_search.cal_registBgnDt.value);this.ds_cond.setColumn(0,"REGIST_END_DT",this.div_search.cal_registEndDt.value);if(this.div_search.cmb_inqrykndDetail.enable==true){this.ds_cond.setColumn(0,"INQRY_KND_DETAIL",this.div_search.cmb_inqrykndDetail.value);}var _b="hsco/mis/cus/CUS010101/selectHmpgCvplList.do";var _c="input01=ds_cond";var _d="ds_hmpgCstmrCvpl=output01";break;case "hmpgCvplListCUD":var _b="hsco/mis/cus/CUS010101/hmpgCvplListCUD.do";var _c="input02=ds_hmpgCstmrCvpl:U";var _d="";break;case "selectHmpgCstmrInfo":this.ds_cond02.clearData();this.ds_cond02.addRow();this.ds_cond02.setColumn(0,"CSTMR_NM",this.div_work.edt_nm.value);this.ds_cond02.setColumn(0,"MBTLNO",this.div_work.edt_mbtlno.value);var _b="hsco/mis/cus/CUS010101/selectHmpgCstmrInfo.do";var _c="input03=ds_cond02";var _d="ds_hmpgCstmrInfo=output03";break;break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "hmpgCvplListCUD":this.fn_search();break;case "selectHmpgCstmrInfo":if(this.ds_hmpgCstmrInfo.rowcount>0){this.div_work.edt_nm.set_value(this.ds_hmpgCstmrInfo.getColumn(0,"CSTMR_NM"));this.div_work.edt_mbtlno.set_value(this.ds_hmpgCstmrInfo.getColumn(0,"MBTLNO"));this.div_work.edt_gnrlTlphon.set_value(this.ds_hmpgCstmrInfo.getColumn(0,"GNRL_TLPHON"));this.div_work.edt_email.set_value(this.ds_hmpgCstmrInfo.getColumn(0,"EMAIL"));this.div_work.edt_zipcode.set_value(this.ds_hmpgCstmrInfo.getColumn(0,"ZIP"));this.div_work.edt_adres.set_value(this.ds_hmpgCstmrInfo.getColumn(0,"ADRES"));}else{this.alert('일치하는 고객정보가 없습니다');}break;}}};this.fn_insert=function(){var _a=this.ds_hmpgCstmrCvpl.addRow();this.ds_hmpgCstmrCvpl.setColumn(_a,"RCEPT_DT",this.gfn_today());this.ds_hmpgCstmrCvpl.setColumn(_a,"CSTMR_REGIST_DT",this.gfn_today());};this.fn_delete=function(){var _a=this.ds_hmpgCstmrCvpl.rowposition;this.ds_hmpgCstmrCvpl.deleteRow(_a);};this.fn_cancel=function(){if(this.confirm("모든 내용을 복원하시겠습니까?")){this.ds_hmpgCstmrCvpl.reset();this.ds_hmpgCstmrCvpl.applyChange();return;}};this.div_search_cmb_inqryknd1_onitemchanged=function(_a,_b){if(_b.posttext=='전체'){this.div_search.cmb_inqrykndDetail.set_enable(false);}else{this.div_search.cmb_inqrykndDetail.set_enable(true);this.ds_inqryKndDetail.filter("CODE.substr(0,1) == '"+_b.postvalue+"'");this.div_search.cmb_inqrykndDetail.set_index(0);}};this.div_work_cmb_inqryKnd_onitemchanged=function(_a,_b){if(_b.posttext=='전체'){this.div_work.cmb_inqryKndDetail.set_enable(false);}else{this.div_work.cmb_inqryKndDetail.set_enable(true);this.ds_inqryKndDetail2.filter("CODE.substr(0,1) == '"+_b.postvalue+"'");this.div_work.cmb_inqryKndDetail.set_index(0);}};this.div_work_btn_custrSearch_onclick=function(_a,_b){if(this.comUtils.isNull(this.div_work.edt_nm.value)||this.comUtils.isNull(this.div_work.edt_mbtlno.value)){this.alert('성명과 핸드폰번호를 입력하세요');}else{this.fn_transaction('selectHmpgCstmrInfo');}};this.div_work_grd_hmpgCstmrCvpl_onselectchanged=function(_a,_b){var _c=this.ds_hmpgCstmrCvpl.getColumn(this.ds_hmpgCstmrCvpl.rowposition,"INQRY_KND");this.ds_inqryKndDetail.filter("CODE.substr(0,1) =='"+_c+"'");};});this.on_initEvent=function(){this.addEventHandler("onload",this.CUS010101_onload,this);this.addEventHandler("oninit",this.CUS010101_oninit,this);this.div_search.cal_registBgnDt.addEventHandler("onchanged",this.div_SearchArea_cal_AUDIT_PLAN_BGNDE_onchanged,this);this.div_search.cal_registEndDt.addEventHandler("onchanged",this.div_SearchArea_cal_AUDIT_PLAN_ENDDE_onchanged,this);this.div_search.cmb_inqryknd.addEventHandler("onitemchanged",this.div_search_cmb_inqryknd1_onitemchanged,this);this.div_work.sta_AUDIT_DEPT_TABLE.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_hmpgCstmrCvpl.addEventHandler("onselectchanged",this.div_work_grd_hmpgCstmrCvpl_onselectchanged,this);this.div_work.cmb_inqryKnd.addEventHandler("onitemchanged",this.div_work_cmb_inqryKnd_onitemchanged,this);this.div_work.sta_AUDIT_DEPT_TABLE00.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.sta_AUDIT_DEPT_TABLE01.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.btn_zipcodeSearch.addEventHandler("onclick",this.div_work_btn_zipcodeSearch_onclick,this);this.div_work.cmb_inqryKndDetail.addEventHandler("onitemchanged",this.div_work_cmb_inqryKndDetail_onitemchanged,this);this.div_work.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.div_work.btn_custrSearch.addEventHandler("onclick",this.div_work_btn_custrSearch_onclick,this);this.div_work.sta_AUDIT_TABLE.addEventHandler("onclick",this.Static00_onclick,this);};this.loadIncludeScript("CUS010101_old.xfdl");this.loadPreloadList();};})();