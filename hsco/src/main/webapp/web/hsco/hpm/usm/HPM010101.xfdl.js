﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM010101");this.set_classname("HPM010101");this.set_titletext("회원관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"RDCXPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MBER_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">일자</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_mberList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MBER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"SEXDSTN\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MBER_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RDCXPT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RDCXPT_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"SRBDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mberSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_confmSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미승인</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">승인</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_confmSe_s",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미승인</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">승인</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_mberSe_s",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bizplcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"58","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9f9f9ff");_a.style.set_font("9 Gulim");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_mberId","absolute","520","5","64","21",null,null,this.div_search);_a.set_taborder("44");_a.set_text("회원검색");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","81","5","195","21",null,null,this.div_search);_a.set_taborder("0");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("48");_a.set_text("담당부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("49");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_mberNm","absolute","663","5","118","21",null,null,this.div_search);_a.set_taborder("2");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_mberSrh","absolute","586","5","75","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_mberSrh_innerdataset",this.div_search.cmb_mberSrh);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">회원ID</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">회원명</Col></Row><Row><Col id=\"codecolumn\">003</Col><Col id=\"datacolumn\">단체명</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Combo("cmb_rdcxptAt","absolute","862","5","75","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _c=new Dataset("cmb_rdcxptAt_innerdataset",this.div_search.cmb_rdcxptAt);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">감면</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">비감면</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("sta_mberSe","absolute","15","30","64","21",null,null,this.div_search);_a.set_taborder("57");_a.set_text("회원구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_confmSe","absolute","291","30","94","21",null,null,this.div_search);_a.set_taborder("59");_a.set_text("단체승인구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");_a.set_wordwrap("none");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_confmSe","absolute","383","30","83","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a.set_innerdataset("@ds_confmSe_s");_a=new Static("Static03","absolute","276","1","15",null,null,"0",this.div_search);_a.set_taborder("62");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_confmSe00","absolute","796","5","64","21",null,null,this.div_search);_a.set_taborder("63");_a.set_text("감면여부");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_mberSe","absolute","81","30","83","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("64");_a.set_innerdataset("ds_mberSe_s");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Static("Static04","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("65");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("66");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","0",null,null,"5","0","0",this.div_search);_a.set_taborder("67");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_bizplcCode","absolute","291","5","56","21",null,null,this.div_search);_a.set_taborder("68");_a.set_text("사업소");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","505","0","15",null,null,"0",this.div_search);_a.set_taborder("70");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_bizplcList","absolute","355","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("71");_a.set_innerdataset("@ds_bizplcList");_a.set_codecolumn("BIZPLC_CODE");_a.set_datacolumn("BIZPLC_NM");_a=new Static("Static01","absolute","781","0","15",null,null,"0",this.div_search);_a.set_taborder("72");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_mberList","absolute","0","67","148","21",null,null,this);_a.set_taborder("7");_a.set_text("회원목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_logInHistory","absolute",null,"67","100","21","28",null,this);_a.set_taborder("2");_a.set_text("로그인 기록");_a.set_enable("true");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","57","1031","10",null,null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","749","288","235","145",null,null,this);_a.set_taborder("14");_a.set_text("대관홈페이지(사용자)에서\r\n 증빙서류 첨부파일 형태로 받음\r\n ===> 관리자페이지에서는 조회 및 삭제만 가능");_a.style.set_background("#c0504dff");_a.style.set_font("10 Gulim");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_trnsfer","absolute",null,"67","104","21","28",null,this);_a.set_taborder("1");_a.set_text("초기데이터 갱신#1");_a.set_enable("true");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","568","255","342","101",null,null,this);_a.set_taborder("15");_a.set_binddataset("ds_cond");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"DEPT_CODE\"/><Cell col=\"1\" disptype=\"normal\" text=\"DEPT_NM\"/><Cell col=\"2\" disptype=\"normal\" text=\"SEARCH_IEM\"/><Cell col=\"3\" disptype=\"normal\" text=\"SEARCH_VAL\"/><Cell col=\"4\" disptype=\"normal\" text=\"RDCXPT_AT\"/><Cell col=\"5\" disptype=\"normal\" text=\"CONFM_SE\"/><Cell col=\"6\" disptype=\"normal\" text=\"MBER_SE\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:SEARCH_IEM\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:SEARCH_VAL\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:RDCXPT_AT\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:CONFM_SE\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:MBER_SE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_mberList","absolute","0","93",null,null,"28","0",this);_a.set_taborder("17");_a.set_binddataset("ds_mberList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"감면여부\"/><Cell col=\"3\" edittype=\"normal\" text=\"감면비율\" maskchar=\" \"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"단체명\"/><Cell col=\"6\" text=\"휴대폰번호\"/><Cell col=\"7\" text=\"가입일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"expr:currow+1\"/><Cell col=\"1\" style=\"background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:MBER_ID\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:RDCXPT_AT\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"mask\" style=\"align:right;background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:RDCXPT_RATE\" mask=\"### %\" maskchar=\" \" editdisplay=\"display\"/><Cell col=\"4\" style=\"background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:MBER_NM\"/><Cell col=\"5\" style=\"align:left;background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:GRP_NM\"/><Cell col=\"6\" style=\"background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:MBTLNUM\"/><Cell col=\"7\" displaytype=\"date\" style=\"background:EXPR(comp.parent.fn_changeBackground(currow));background2:EXPR(comp.parent.fn_changeBackground(currow));\" text=\"bind:SRBDE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","88",null,"5","28",null,this);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,33,this.div_search,function(_d){_d.set_taborder("0");_d.style.set_background("#f9f9f9ff");_d.style.set_font("9 Gulim");_d.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_d){_d.set_classname("HPM010101");_d.set_titletext("회원관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.edt_mberNm","value","ds_cond","SEARCH_VAL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_mberSrh","value","ds_cond","SEARCH_IEM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_rdcxptAt","value","ds_cond","RDCXPT_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_confmSe","value","ds_cond","CONFM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cmb_mberSe","value","ds_cond","MBER_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.cmb_bizplcList","value","ds_cond","BIZPLC_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HPM010101.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM010101.xfdl","lib::comUpDownUtils.xjs");this.registerScript("HPM010101.xfdl",function(){this.saveRow= -1;this.File_UpDownManager=null;this.HPM010101_oninit=function(_a,_b){};this.HPM010101_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SEARCH_IEM","");this.ds_cond.setColumn(0,"SEARCH_VAL","");this.ds_cond.setColumn(0,"RDCXPT_AT","");this.ds_cond.setColumn(0,"CONFM_SE","");this.ds_cond.setColumn(0,"MBER_SE","");this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");var _a=[["ds_mberSe","HPM005","1",""],["ds_mberSe_s","HPM005","1","전체"],["ds_confmSe","HPM001","1",""],["ds_confmSe_s","HPM001","1","전체"]];var _b=function(_c,_d,_e){if(this.gfn_authGrpId("HPM_ADMIN")!= -1){this.chargerAt=true;}if(this.chargerAt){this.div_search.div_dept.set_enable(true);this.ds_cond.setColumn(0,"AUTH_AT","1");}else{this.ds_cond.setColumn(0,"AUTH_AT","0");}this.fn_transaction("selectBizplcCode");};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_mberList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectMberList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_mberList)){this.gfn_message("comm.데이터.변경.없음");return false;}var _a=this.ds_mberList.getRowCount();var _b="";var _c="";for(var _d=0;_d<_a;_d++ ){_b=this.ds_mberList.getColumn(_d,"RDCXPT_AT");_c=this.ds_mberList.getColumn(_d,"RDCXPT_RATE");if((_b==1)&&this.comUtils.isNull(_c)){alert((_d+1)+"행의 감면비율을 입력해주세요.");return false;}else if((this.comUtils.isNull(_b)||_b==0)&&!this.comUtils.isNull(_c)){alert((_d+1)+"행의 감면여부를 체크해주세요.");return false;}}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_mberList.rowposition;this.fn_transaction("saveMberList");}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_mberList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_mberList.reset();this.ds_mberList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectBizplcCode":var _b="/hsco/hpm/usm/HPM010203/selectBizplcList.do";var _c="input1=ds_cond";var _d="ds_bizplcList=output1";break;case "selectMberList":var _b="hsco/hpm/usm/HPM010101/selectMberList.do";var _c="input1=ds_cond";var _d="ds_mberList=output1";break;case "initMberInfoU4Sports":var _b="hsco/hpm/usm/HPM010101/initMberInfoU4Sports.do";var _c="input1=ds_cond";var _d="";break;case "saveMberList":var _b="hsco/hpm/usm/HPM010101/saveMberList.do";var _c="input1=ds_cond input2=ds_mberList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectBizplcCode":if(this.ds_bizplcList.rowcount<1){this.ds_bizplcList.insertRow(0);this.ds_bizplcList.setColumn(0,"BIZPLC_CODE","9999");this.ds_bizplcList.setColumn(0,"BIZPLC_NM","해당없음");}this.div_search.cmb_bizplcList.set_index(0);break;case "selectMberList":if(this.saveRow!= -1){this.ds_mberList.set_rowposition(this.saveRow);this.saveRow= -1;}var _d=this.ds_cond.getColumn(0,"DEPT_CODE");var _e=this.ds_cond.getColumn(0,"BIZPLC_CODE");this.fn_dynamicCol(_d);this.ds_mberList.set_enableevent(false);this.ds_mberList.set_updatecontrol(false);for(var _j=0;_j<this.ds_mberList.rowcount;_j++ ){if(this.comUtils.isNull(this.ds_mberList.getColumn(_j,"DEPT_CODE"))){this.ds_mberList.setRowType(_j,2);}}this.ds_mberList.set_updatecontrol(true);this.ds_mberList.set_enableevent(true);var _f="";var _g=this.ds_cond.getColumn(0,"CONFM_SE");var _h=this.ds_cond.getColumn(0,"MBER_SE");var _i=this.ds_cond.getColumn(0,"RDCXPT_AT");if(!this.comUtils.isNull(_g)){_f="CONFM_SE == "+_g;}if(!this.comUtils.isNull(_h)){_f+=(_f==""?("MBER_SE == "+_h):(" && MBER_SE == "+_h));}if(!this.comUtils.isNull(_i)){_f+=(_f==""?("RDCXPT_AT == "+_i):(" && RDCXPT_AT == "+_i));}this.ds_mberList.filter(_f);break;case "saveMberList":this.fn_search();break;case "initMberInfoU4Sports":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectAtchFile":break;case "deleteAtchFile":break;}}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="DEPT_CODE"){trace("ds_cond_oncolumnchanged :: DEPT_CODE -- "+_b.newvalue);if(_b.newvalue=="050200"){this.div_search.sta_confmSe.set_visible(true);this.div_search.cmb_confmSe.set_visible(true);this.div_search.sta_mberSe.set_visible(true);this.div_search.cmb_mberSe.set_visible(true);this.div_search.set_height("58");this.sta_mberList.set_top("67");this.btn_trnsfer.set_top("67");this.grd_mberList.set_top("93");}else{this.div_search.sta_confmSe.set_visible(false);this.div_search.cmb_confmSe.set_visible(false);this.div_search.sta_mberSe.set_visible(false);this.div_search.cmb_mberSe.set_visible(false);this.ds_cond.setColumn(0,"CONFM_SE","");this.ds_cond.setColumn(0,"MBER_SE","");this.div_search.set_height("32");this.sta_mberList.set_top("41");this.btn_trnsfer.set_top("41");this.grd_mberList.set_top("67");}var _c=_b.newvalue;this.ds_bizplcList.set_filterstr("DEPT_CODE == '"+_c+"' || BIZPLC_CODE == '9999'");this.div_search.cmb_bizplcList.set_index(0);}else if(_b.columnid=="BIZPLC_CODE"){this.fn_search();}};this.btn_trnsfer_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"DEPT_CODE");if(!this.comUtils.isNull(_c)){if(application.confirm("화성도시공사 홈페이지 데이터로 갱신하시겠습니까?\n계속 진행하시면 기존 데이터는 삭제됩니다.")){this.fn_transaction("initMberInfoU4Sports");}}};this.Div00_btn_logInHistory_onclick=function(_a,_b){var _c=this.ds_mberList.getColumn(this.ds_mberList.rowposition,"MBER_ID");var _d={arg_0:this,arg_1:_c};this.gfn_popup("popup_loginLog",600,400,"로그인이력조회",_d,"hpm_usm::HPM010101_P01.xfdl","fn_loginLogCallback");};this.fn_dynamicCol=function(_a){this.grd_mberList.set_enableredraw(false);if(this.grd_mberList.getCellCount("Head")>9){this.grd_mberList.deleteContentsCol(3);this.grd_mberList.deleteContentsCol(2);}if(_a=="050200"){var _b=this.grd_mberList.insertContentsCol("body",2);this.grd_mberList.setCellProperty("Head",_b,"text","회원구분");this.grd_mberList.setCellProperty("Body",_b,"displaytype","combo");this.grd_mberList.setCellProperty("Body",_b,"edittype","combo");this.grd_mberList.setCellProperty("Body",_b,"text","bind:MBER_SE");this.grd_mberList.setCellProperty("Body",_b,"combocodecol","CODE");this.grd_mberList.setCellProperty("Body",_b,"combodatacol","CODE_NM");this.grd_mberList.setCellProperty("Body",_b,"combodataset","ds_mberSe");this.grd_mberList.setCellProperty("Body",_b,"combodisplay","display");this.grd_mberList.setFormatColProperty(_b,"size",100);_b=this.grd_mberList.insertContentsCol("body",3);this.grd_mberList.setCellProperty("Head",_b,"text","단체승인구분");this.grd_mberList.setCellProperty("Body",_b,"displaytype","combo");this.grd_mberList.setCellProperty("Body",_b,"edittype","combo");this.grd_mberList.setCellProperty("Body",_b,"text","bind:CONFM_SE");this.grd_mberList.setCellProperty("Body",_b,"combocodecol","CODE");this.grd_mberList.setCellProperty("Body",_b,"combodatacol","CODE_NM");this.grd_mberList.setCellProperty("Body",_b,"combodataset","ds_confmSe");this.grd_mberList.setCellProperty("Body",_b,"combodisplay","display");this.grd_mberList.setFormatColProperty(_b,"size",100);}this.grd_mberList.set_enableredraw(true);};this.fn_changeBackground=function(_a){var _b="white";var _c=this.ds_mberList.getColumn(_a,"RDCXPT_AT");var _d=this.ds_mberList.getColumn(_a,"RDCXPT_RATE");if((_c==1&&this.comUtils.isNull(_d))||_c!=1&&!this.comUtils.isNull(_d)){_b="cornsilk";}return _b;};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_mberList.addEventHandler("oncolumnchanged",this.ds_mberList_oncolumnchanged,this);this.ds_mberList.addEventHandler("onrowposchanged",this.ds_mberList_onrowposchanged,this);this.ds_bizplcList.addEventHandler("cancolumnchange",this.ds_bizplcList_cancolumnchange,this);this.addEventHandler("oninit",this.HPM010101_oninit,this);this.addEventHandler("onload",this.HPM010101_onload,this);this.div_search.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_search.Static05.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_search.Static07.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.btn_logInHistory.addEventHandler("onclick",this.Div00_btn_logInHistory_onclick,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);this.btn_trnsfer.addEventHandler("onclick",this.btn_trnsfer_onclick,this);this.grd_mberList.addEventHandler("oncellclick",this.grd_mberList_oncellclick,this);this.grd_mberList.addEventHandler("onheadclick",this.grd_mberList_oncellclick,this);this.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("HPM010101.xfdl");this.loadPreloadList();};})();