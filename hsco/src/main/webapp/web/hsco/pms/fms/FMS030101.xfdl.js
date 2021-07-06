﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS030101");this.set_classname("form");this.set_titletext("점검진단계획");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2017</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_checkDgnssPlan",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_DGNSS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_DSPRS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fms022",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fcltsList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_SE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPET_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_NY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_NY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_NY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHCK_BY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_NY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_NY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_NY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_BY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_BY_CONFM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MENDNG_BY_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_NY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_BY_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">보고년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CHCK_DGNSS_SE</Col><Col id=\"compId\">ds_checkDgnssPlan</Col><Col id=\"msgId\">점검진단구분</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"colId\">OPERTN_DE</Col><Col id=\"compId\">ds_checkDgnssPlan</Col><Col id=\"msgId\">시행일</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDetail",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_MANAGE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2017</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fms023",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("보고년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","84","5","71","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","240","5","195","21",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","170","5","62","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("관리부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","155","2","15","34",null,null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","169","19",null,null,this);_a.set_taborder("4");_a.set_text("시설별 통계");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_zipAddress","absolute","0","67",null,"220","28",null,this);_a.set_taborder("6");_a.set_binddataset("ds_fcltsList");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"시설정보\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"관리부서\"/><Cell row=\"1\" col=\"2\" text=\"관리번호\"/><Cell row=\"1\" col=\"3\" text=\"시설명\"/><Cell row=\"1\" col=\"4\" text=\"종별\"/><Cell row=\"1\" col=\"5\" text=\"준공일\"/><Cell col=\"6\" colspan=\"3\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;) + &quot;년도 점검진단계획&quot;\"/><Cell col=\"9\" colspan=\"3\" text=\"expr:(comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;)-1) + &quot;년도 점검진단계획&quot;\"/><Cell row=\"1\" col=\"6\" text=\"등록\"/><Cell row=\"1\" col=\"7\" text=\"확정\"/><Cell row=\"1\" col=\"8\" text=\"점검금액\"/><Cell row=\"1\" col=\"9\" text=\"등록\"/><Cell row=\"1\" col=\"10\" text=\"확정\"/><Cell row=\"1\" col=\"11\" text=\"점검금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"2\" text=\"bind:MANAGE_NO\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:FCLTS_NM\"/><Cell col=\"4\" text=\"bind:ASORT_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:CHCK_NY_CNT\"/><Cell col=\"7\" text=\"bind:CHCK_NY_CONFM_CNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CHCK_NY_CONFM_AMOUNT\"/><Cell col=\"9\" text=\"bind:CHCK_BY_CNT\"/><Cell col=\"10\" text=\"bind:CHCK_BY_CONFM_CNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CHCK_BY_CONFM_AMOUNT\"/></Band></Format><Format id=\"default_copy\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"시설정보\"/><Cell col=\"6\" colspan=\"6\" text=\"점검진단계획\"/><Cell col=\"12\" colspan=\"4\" text=\"보수보강계획\"/><Cell col=\"16\" colspan=\"2\" text=\"유지관리계획\"/><Cell row=\"1\" rowspan=\"2\" text=\"No\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"관리부서\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"관리번호\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"시설명\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"종별\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"준공일\"/><Cell row=\"1\" col=\"6\" colspan=\"3\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;) + &quot;년도&quot;\"/><Cell row=\"1\" col=\"9\" colspan=\"3\" text=\"expr:(comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;)-1) + &quot;년도&quot;\"/><Cell row=\"1\" col=\"12\" colspan=\"2\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;) + &quot;년도&quot;\"/><Cell row=\"1\" col=\"14\" colspan=\"2\" text=\"expr:(comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;)-1) + &quot;년도&quot;\"/><Cell row=\"1\" col=\"16\" rowspan=\"2\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;) + String.fromCharCode(10) + &quot;년도&quot;\"/><Cell row=\"1\" col=\"17\" rowspan=\"2\" text=\"expr:(comp.parent.ds_cond.getColumn(0, &quot;YEAR&quot;)-1) + String.fromCharCode(10) + &quot;년도&quot;\"/><Cell row=\"2\" col=\"6\" text=\"등록\"/><Cell row=\"2\" col=\"7\" text=\"확정\"/><Cell row=\"2\" col=\"8\" text=\"점검금액\"/><Cell row=\"2\" col=\"9\" text=\"등록\"/><Cell row=\"2\" col=\"10\" text=\"확정\"/><Cell row=\"2\" col=\"11\" text=\"점검금액\"/><Cell row=\"2\" col=\"12\" text=\"건수\"/><Cell row=\"2\" col=\"13\" text=\"공사금액\"/><Cell row=\"2\" col=\"14\" text=\"건수\"/><Cell row=\"2\" col=\"15\" text=\"공사금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"2\" text=\"bind:MANAGE_NO\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:FCLTS_NM\"/><Cell col=\"4\" text=\"bind:ASORT_NM\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:COMPET_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:CHCK_NY_CNT\"/><Cell col=\"7\" text=\"bind:CHCK_NY_CONFM_CNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CHCK_NY_CONFM_AMOUNT\"/><Cell col=\"9\" text=\"bind:CHCK_BY_CNT\"/><Cell col=\"10\" text=\"bind:CHCK_BY_CONFM_CNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CHCK_BY_CONFM_AMOUNT\"/><Cell col=\"12\" text=\"bind:MENDNG_NY_CNT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:MENDNG_NY_AMOUNT\"/><Cell col=\"14\" text=\"bind:MENDNG_BY_CNT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:MENDNG_BY_AMOUN\"/><Cell col=\"16\" displaytype=\"checkbox\" text=\"bind:PLAN_NY_CNT\"/><Cell col=\"17\" displaytype=\"checkbox\" text=\"bind:PLAN_BY_CNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","297","169","19",null,null,this);_a.set_taborder("8");_a.set_text("점검진단계획");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Grid("grd_checkDgnssPlan","absolute","0","321",null,null,"28","0",this);_a.set_taborder("10");_a.set_binddataset("ds_checkDgnssPlan");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a.set_autoupdatetype("itemselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"점검진단구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시행일\"/><Cell col=\"3\" text=\"예산(천원)\"/><Cell col=\"4\" text=\"점검진단자\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"승인상태\"/><Cell col=\"7\" text=\"승인(반려)일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'combo' : 'none'\" text=\"bind:CHCK_DGNSS_SE\" combodataset=\"ds_fms022\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:OPERTN_DE\" calendardisplay=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'masknumber'\" style=\"align:right middle;\" text=\"bind:BUDGET_AMOUNT\" mask=\"###,###,###,###,###\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlimitbymask=\"both\" calendardisplay=\"display\"/><Cell col=\"4\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:center middle;\" text=\"bind:CHCK_DSPRS\" editlimit=\"150\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"5\" edittype=\"expr:CONFM_AT == '1' ? 'none' : 'text'\" style=\"align:left middle;\" text=\"bind:RM\" editlimit=\"450\" editdisplay=\"expr:CONFM_AT == '1' ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"expr:comp.parent.isAdmin == true ? 'combo' : 'none'\" text=\"bind:CONFM_AT\" editdisplay=\"display\" combodataset=\"ds_fms023\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"expr:comp.parent.isAdmin == true ? 'display' : 'edit'\" calendardisplay=\"edit\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"expr:comp.parent.isAdmin == true ? 'date' : 'none'\" style=\"align:center middle;\" text=\"bind:CONFM_DE\" calendardisplay=\"expr:comp.parent.isAdmin == true ? 'display' : 'edit'\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Add","absolute",null,"297","64","19","162",null,this);_a.set_taborder("11");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Delete","absolute",null,"297","64","19","95",null,this);_a.set_taborder("12");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.getSetter("cancolumnchange").set("ds_frmtnPdDept_cancolumnchange");this.addChild(_a.name,_a);_a=new Button("btn_Cancel","absolute",null,"297","64","19","28",null,this);_a.set_taborder("13");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","287","1031","10",null,null,this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","316","1031","5",null,null,this);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("form");_b.set_titletext("점검진단계획");});this.addLayout(_a.name,_a);_a=new BindItem("item9","div_SEARCH.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FMS030101.xfdl","lib::comInclude.xjs");this.addIncludeScript("FMS030101.xfdl","mis_lib::misUtil.xjs");this.registerScript("FMS030101.xfdl",function(){this.isAdmin=false;this.FMS030101_oninit=function(_a,_b){};this.FMS030101_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"YEAR",this.comUtils.getClientDate("YYYY"));this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(this.gfn_authGrpId("FMS_ADMIN")!= -1){this.isAdmin=true;}else{this.ds_cond.setColumn(_c,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_c,"DEPT_NM",this.gfn_getDeptName());this.div_search.div_dept.fn_setReadonly(true);}var _d=[["ds_fms022","FMS022","Y","D","B"],["ds_fms023","FMS023","Y","S","B"]];var _e=function(_f,_g,_h){this.fn_search();};this.gfn_comboLoad(_d,_e);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_fcltsList.clearData();this.fn_transaction("select");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_checkDgnssPlan,this.ds_validation)){return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_fcltsList.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/pms/fms/FMS030101/selectFcltsList.do";var _c="input1=ds_cond";var _d="ds_fcltsList=output1";break;case "selectSub":var _b="/hsco/pms/fms/FMS030101/selectCheckDgnssPlan.do";var _c="input1=ds_condDetail";var _d="ds_checkDgnssPlan=output1";break;case "save":var _b="/hsco/pms/fms/FMS030101/save.do";var _c="input1=ds_checkDgnssPlan:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.saveRow> -1){this.ds_fcltsList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "selectSub":this.ds_checkDgnssPlan.set_enableevent(false);this.ds_checkDgnssPlan.set_updatecontrol(false);for(var _e=0;_e<this.ds_checkDgnssPlan.getRowCount();_e++ ){var _d=this.ds_checkDgnssPlan.getColumn(_e,"CONFM_AT");if(this.comUtils.isNull(_d)){this.ds_checkDgnssPlan.setColumn(_e,"CONFM_AT","");}}this.ds_checkDgnssPlan.set_updatecontrol(true);this.ds_checkDgnssPlan.set_enableevent(true);break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.btn_Add_onclick=function(_a,_b){if(this.ds_fcltsList.rowposition> -1){var _c=this.ds_fcltsList.rowposition;var _d=this.ds_fcltsList.getColumn(_c,"SN");var _e=this.ds_fcltsList.getColumn(_c,"YEAR");var _f=this.comUtils.getClientDate("YYYYMMDD");var _g=this.ds_checkDgnssPlan.addRow();this.ds_checkDgnssPlan.setColumn(_g,"FCLTS_MANAGE_SN",_d);this.ds_checkDgnssPlan.setColumn(_g,"YEAR",_e);this.ds_checkDgnssPlan.setColumn(_g,"OPERTN_DE",_f);this.ds_checkDgnssPlan.setColumn(_g,"CONFM_AT","");}};this.btn_Delete_onclick=function(_a,_b){this.ds_checkDgnssPlan.deleteRow(this.ds_checkDgnssPlan.rowposition);};this.btn_Cancel_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_checkDgnssPlan)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_checkDgnssPlan.reset();this.ds_checkDgnssPlan.applyChange();};this.ds_fcltsList_onrowposchanged=function(_a,_b){this.ds_checkDgnssPlan.clearData();if(_b.newrow> -1){var _c=_a.getColumn(_b.newrow,"YEAR");var _d=_a.getColumn(_b.newrow,"SN");this.ds_condDetail.clearData();var _e=this.ds_condDetail.addRow();this.ds_condDetail.setColumn(_e,"YEAR",_c);this.ds_condDetail.setColumn(_e,"FCLTS_MANAGE_SN",_d);this.fn_transaction("selectSub");}};this.ds_checkDgnssPlan_cancolumnchange=function(_a,_b){var _c=_a.getColumn(_b.row,"CONFM_AT");if(_b.columnid=="CONFM_DE"){if(_c=='1'&&this.comUtils.isNull(_b.newvalue)){return false;}}};this.ds_checkDgnssPlan_oncolumnchanged=function(_a,_b){if(_b.columnid=="CONFM_AT"){if(!this.comUtils.isNull(_b.newvalue)){_a.setColumn(_b.row,"CONFM_DE",this.comUtils.getClientDate("YYYYMMDD"));}else{_a.setColumn(_b.row,_b.columnid,"");_a.setColumn(_b.row,"CONFM_DE","");}}};});this.on_initEvent=function(){this.ds_checkDgnssPlan.addEventHandler("oncolumnchanged",this.ds_checkDgnssPlan_oncolumnchanged,this);this.ds_checkDgnssPlan.addEventHandler("cancolumnchange",this.ds_checkDgnssPlan_cancolumnchange,this);this.ds_fcltsList.addEventHandler("onrowposchanged",this.ds_fcltsList_onrowposchanged,this);this.addEventHandler("onload",this.FMS030101_onload,this);this.addEventHandler("oninit",this.FMS030101_oninit,this);this.div_search.sta_YEAR.addEventHandler("onclick",this.sta_YEAR_onclick,this);this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);};this.loadIncludeScript("FMS030101.xfdl");this.loadPreloadList();};})();