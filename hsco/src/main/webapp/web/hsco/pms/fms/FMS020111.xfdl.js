﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS020111");this.set_classname("form");this.set_titletext("간담회관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ifmgthdcsManage",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IFMGTHDCS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPMT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OPMT_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"INCDNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THEMA_CN\" type=\"STRING\" size=\"256\"/><Column id=\"IFMGTHDCS_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRTCPNT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ifmgthdcsPrtcpnt",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IFMGTHDCS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PRTCPNT_PSITN\" type=\"STRING\" size=\"256\"/><Column id=\"PRTCPNT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRTCPNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDtl",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IFMGTHDCS_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">조회년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">DEPT_CODE</Col><Col id=\"compId\">ds_ifmgthdcsManage</Col><Col id=\"notNull\">Y</Col><Col id=\"nlength\"/><Col id=\"PK\">Y</Col><Col id=\"msgId\">부서</Col></Row><Row><Col id=\"compId\">ds_ifmgthdcsManage</Col><Col id=\"colId\">OPMT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">개최일자</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"compId\">ds_ifmgthdcsManage</Col><Col id=\"colId\">OPMT_PLACE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">개최장소</Col></Row><Row><Col id=\"compId\">ds_ifmgthdcsManage</Col><Col id=\"colId\">INCDNT_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">간담회 명</Col></Row><Row><Col id=\"compId\">ds_ifmgthdcsPrtcpnt</Col><Col id=\"colId\">EMP_AT</Col><Col id=\"msgId\">직원여부</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\"/></Row><Row><Col id=\"colId\">PRTCPNT_NM</Col><Col id=\"compId\">ds_ifmgthdcsPrtcpnt</Col><Col id=\"msgId\">참여자 성명</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","169","19",null,null,this);_a.set_taborder("2");_a.set_text("간담회 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Grid("grd_ifmgthdcsManage","absolute","0","67",null,null,"488","0",this);_a.set_taborder("0");_a.set_binddataset("ds_ifmgthdcsManage");_a.set_autofittype("none");_a.set_autosizingtype("none");_a.set_extendsizetype("none");_a.set_cellsizebandtype("body");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"부서\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"개최일자\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"개최장소\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"건명\"/><Cell col=\"5\" text=\"주제내용\"/><Cell col=\"6\" text=\"간담회결과\"/><Cell col=\"7\" text=\"참여자수\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" expandshow=\"show\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:OPMT_DE\" calendardisplay=\"display\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:OPMT_PLACE\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\" tooltiptext=\"bind:개최장소\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left;\" text=\"bind:INCDNT_NM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\" tooltiptext=\"bind:건명\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:THEMA_CN\" editlimit=\"750\" editdisplay=\"display\" editlengthunit=\"utf8\" tooltiptext=\"bind:주제내용\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:IFMGTHDCS_RESULT\" editlimit=\"750\" editdisplay=\"display\" editlengthunit=\"utf8\" tooltiptext=\"bind:간담회결과\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PRTCPNT_CNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_ifmgthdcsPrtcpnt","absolute",null,"67","450",null,"27","0",this);_a.set_taborder("9");_a.set_binddataset("ds_ifmgthdcsPrtcpnt");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"직원여부\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"성명\"/><Cell col=\"3\" text=\"소속(주소)\"/><Cell col=\"4\" text=\"의견내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:EMP_AT\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PRTCPNT_EMPNO\" editlimit=\"150\" editlengthunit=\"ascii\" expandshow=\"expr:dataset.getColumn(currow, &quot;EMP_AT&quot;) == 1 ? 'show' : 'hide'\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"expr:dataset.getColumn(currow, &quot;EMP_AT&quot;) == 1 ? 'none' : 'text'\" text=\"bind:PRTCPNT_NM\" editlimit=\"150\" editdisplay=\"expr:dataset.getColumn(currow, &quot;EMP_AT&quot;) == 1 ? 'edit' : 'display'\" editlengthunit=\"utf8\"/><Cell col=\"3\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:PRTCPNT_PSITN\" editlimit=\"200\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:OPINION_CN\" editlimit=\"750\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute",null,"43","130","19","347",null,this);_a.set_taborder("10");_a.set_text("간담회참여자 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_add","absolute",null,"42","64","19","162",null,this);_a.set_taborder("11");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_delete","absolute",null,"42","64","19","95",null,this);_a.set_taborder("12");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute",null,"42","64","19","28",null,this);_a.set_taborder("16");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("17");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","78","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("조회년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_budgetAcntSe00","absolute","178","5","71","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("관리부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_dept","absolute","247","5","195","21",null,null,this.div_search);_a.set_taborder("6");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","163","-1","15",null,null,"1",this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","81","6","83","21",null,null,this);_a.set_taborder("18");_a.set_value("0");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("17");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("form");_b.set_titletext("간담회관리");});this.addLayout(_a.name,_a);_a=new BindItem("item9","div_SEARCH.Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Spin00","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("FMS020111.xfdl","lib::comInclude.xjs");this.addIncludeScript("FMS020111.xfdl","mis_lib::misUtil.xjs");this.registerScript("FMS020111.xfdl",function(){this.saveRow= -1;this.FMS020111_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FMS020111_onload=function(_a,_b){this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.ds_cond.setColumn(_c,"YEAR",this.comUtils.getClientDate("YYYY"));this.div_search.div_dept.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");if(this.gfn_authGrpId("FMS_ADMIN")!= -1){}else{this.ds_cond.setColumn(_c,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(_c,"DEPT_NM",this.gfn_getDeptName());}this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_ifmgthdcsManage.clearData();this.ds_ifmgthdcsPrtcpnt.clearData();this.fn_transaction("select");};this.fn_save=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_ifmgthdcsManage,this.ds_validation)){return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_ifmgthdcsPrtcpnt,this.ds_validation)){return false;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_ifmgthdcsPrtcpnt.rowposition;this.fn_transaction("save");}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/pms/fms/FMS020111/select.do";var _c="input1=ds_cond";var _d="ds_ifmgthdcsManage=output1";break;case "selectDetail":var _b="/hsco/pms/fms/FMS020111/selectDetail.do";var _c="input1=ds_condDtl";var _d="ds_ifmgthdcsPrtcpnt=output1";break;case "save":var _b="/hsco/pms/fms/FMS020111/save.do";var _c="input1=ds_ifmgthdcsManage:U input2=ds_ifmgthdcsPrtcpnt:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.saveRow> -1){this.ds_islndsUse.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "save":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_popupCallBack=function(_a,_b){if(!this.comUtils.isNull(_b)){var _c=new Dataset();_c.loadXML(_b);}switch(_a){case "btn_deptPopup":var _d=this.ds_ifmgthdcsManage.findRow("DEPT_CODE",_c.getColumn(0,"DEPT_CODE"));var _e=this.ds_ifmgthdcsManage.rowposition;this.ds_ifmgthdcsManage.setColumn(_e,"DEPT_CODE",_c.getColumn(0,"DEPT_CODE"));this.ds_ifmgthdcsManage.setColumn(_e,"DEPT_NM",_c.getColumn(0,"DEPT_NM"));break;case "btn_empPopup":var _e=this.ds_ifmgthdcsPrtcpnt.rowposition;this.ds_ifmgthdcsPrtcpnt.setColumn(_e,"PRTCPNT_EMPNO",_c.getColumn(0,"EMPNO"));this.ds_ifmgthdcsPrtcpnt.setColumn(_e,"PRTCPNT_NM",_c.getColumn(0,"EMPNM"));break;}};this.fn_insert=function(){var _a=this.ds_ifmgthdcsManage.addRow();this.ds_ifmgthdcsManage.setColumn(_a,"YEAR",this.ds_cond.getOrgColumn(0,"YEAR"));trace(this.comUtils.getClientDate("MMDD"));this.ds_ifmgthdcsManage.setColumn(_a,"DEPT_CODE",this.gfn_getDeptId());this.ds_ifmgthdcsManage.setColumn(_a,"DEPT_NM",this.gfn_getDeptName());this.ds_ifmgthdcsManage.setColumn(_a,"OPMT_DE",this.ds_cond.getOrgColumn(0,"YEAR")+this.comUtils.getClientDate("MMDD"));};this.fn_delete=function(){this.ds_ifmgthdcsManage.deleteRow(this.ds_ifmgthdcsManage.rowposition);};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_ifmgthdcsManage)||Ex.util.isUpdated(this.ds_ifmgthdcsPrtcpnt)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_ifmgthdcsManage.reset();this.ds_ifmgthdcsPrtcpnt.reset();};this.btn_add_onclick=function(_a,_b){var _c=this.ds_ifmgthdcsManage.rowposition;if(_c> -1){if(this.ds_ifmgthdcsManage.getRowType(_c)==Dataset.ROWTYPE_INSERT){alert("신규 간담회 저장 후 참여자를 추가하세요.");}else{var _d=this.ds_ifmgthdcsPrtcpnt.addRow();this.ds_ifmgthdcsPrtcpnt.setColumn(_d,"YEAR",this.ds_ifmgthdcsManage.getColumn(_c,"YEAR"));this.ds_ifmgthdcsPrtcpnt.setColumn(_d,"IFMGTHDCS_SN",this.ds_ifmgthdcsManage.getColumn(_c,"IFMGTHDCS_SN"));}}};this.btn_delete_onclick=function(_a,_b){this.ds_ifmgthdcsPrtcpnt.deleteRow(this.ds_ifmgthdcsPrtcpnt.rowposition);};this.btn_cancel_onclick=function(_a,_b){this.ds_ifmgthdcsPrtcpnt.reset();};this.ds_ifmgthdcsManage_onrowposchanged=function(_a,_b){if(_b.newrow> -1){this.ds_condDtl.clearData();this.ds_condDtl.addRow();this.ds_condDtl.setColumn(0,"YEAR",_a.getColumn(_b.newrow,"YEAR"));this.ds_condDtl.setColumn(0,"IFMGTHDCS_SN",_a.getColumn(_b.newrow,"IFMGTHDCS_SN"));this.fn_transaction("selectDetail");}};this.ds_ifmgthdcsPrtcpnt_oncolumnchanged=function(_a,_b){switch(_b.columnid){case "EMP_AT":break;case "":break;}};this.grd_ifmgthdcsManage_onexpanddown=function(_a,_b){var _c={arg_0:this};this.gfn_popup("btn_deptPopup",400,400,"부서 선택",_c,"com::deptCode_P01.xfdl","fn_popupCallBack",true);};this.grd_ifmgthdcsPrtcpnt_onexpanddown=function(_a,_b){var _c={arg_0:this};this.gfn_popup("btn_empPopup",400,400,"사원 선택",_c,"com::empno_P01.xfdl","fn_popupCallBack",true);};});this.on_initEvent=function(){this.ds_ifmgthdcsManage.addEventHandler("onrowposchanged",this.ds_ifmgthdcsManage_onrowposchanged,this);this.ds_ifmgthdcsPrtcpnt.addEventHandler("oncolumnchanged",this.ds_ifmgthdcsPrtcpnt_oncolumnchanged,this);this.addEventHandler("onload",this.FMS020111_onload,this);this.grd_ifmgthdcsManage.addEventHandler("onexpanddown",this.grd_ifmgthdcsManage_onexpanddown,this);this.grd_ifmgthdcsPrtcpnt.addEventHandler("onexpanddown",this.grd_ifmgthdcsPrtcpnt_onexpanddown,this);this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);};this.loadIncludeScript("FMS020111.xfdl");this.loadPreloadList();};})();