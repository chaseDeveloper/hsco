﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070130");this.set_classname("HRM070130");this.set_titletext("재택근무신청");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEARCH_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_tlcomputList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFCPS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rspofcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ofcpsSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_clsfSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NM\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"CODE_NM\">07</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"CODE_NM\">09</Col></Row><Row><Col id=\"CODE\">3A</Col><Col id=\"CODE_NM\">3A</Col></Row><Row><Col id=\"CODE\">3B</Col><Col id=\"CODE_NM\">3B</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_gender",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">남</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">여</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSub",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IN_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_CANCEL_SE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"data\">정상</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">취소</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"START_DE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_tlcomputSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_tlcomputList</Col><Col id=\"notNull\">Y</Col><Col id=\"colId\">EMPNO</Col><Col id=\"msgId\">신청자</Col></Row><Row><Col id=\"compId\">ds_tlcomputList</Col><Col id=\"colId\">BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작일</Col></Row><Row><Col id=\"compId\">ds_tlcomputList</Col><Col id=\"colId\">ENDDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료일</Col></Row><Row><Col id=\"compId\">ds_tlcomputList</Col><Col id=\"colId\">BGNDE</Col><Col id=\"from\">BGNDE</Col><Col id=\"to\">ENDDE</Col><Col id=\"msgId\">시작일^종료일</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SEARCH_BGN_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SEARCH_END_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DEPT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">부서</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">EMPNO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">대상자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSanctn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("조회기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_reqstNm","absolute","318","5","50","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_searchBgnDe","absolute","81","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","186","5","10","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_searchEndDe","absolute","201","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static01","absolute","302","0","15","33",null,null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","350","0","5","33",null,null,this.div_search);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","76","0","5","33",null,null,this.div_search);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_DeptComp","absolute","355","5","194","21",null,null,this.div_search);_a.set_taborder("2");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","549","0","15","33",null,null,this.div_search);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_register","absolute","564","6","51","19",null,null,this.div_search);_a.set_taborder("12");_a.set_text("대상자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","615","5","166","21",null,null,this.div_search);_a.set_taborder("3");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("sta_tlcomputList","absolute","0","10","129","19",null,null,this.div_work);_a.set_taborder("13");_a.set_text("재택근무목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_tlcomputList","absolute","0","34",null,null,"0","0",this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_tlcomputList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"45\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"450\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"결재&#13;&#10;상태\"/><Cell col=\"1\" rowspan=\"2\" text=\"확인&#13;&#10;여부\"/><Cell col=\"2\" colspan=\"3\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"신청자\"/><Cell col=\"5\" colspan=\"2\" style=\"background:URL('theme://images/grd_WF_HeadEssential.png') left top;\" text=\"적용기간\"/><Cell col=\"7\" rowspan=\"2\" text=\"신청사유\"/><Cell row=\"1\" col=\"2\" text=\"소속\"/><Cell row=\"1\" col=\"3\" text=\"사번\"/><Cell row=\"1\" col=\"4\" text=\"성명\"/><Cell row=\"1\" col=\"5\" text=\"시작일\"/><Cell row=\"1\" col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell displaytype=\"image\" style=\"align: ;padding:0 0 0 5;\" text=\"expr:comp.parent.parent.gfn_getSanctnImgUrl(SANCTN_KND)\"/><Cell col=\"1\" displaytype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:DEPT_NM\" suppress=\"expr:dataset.getRowType(currow) == 2 ? '0' : '1'\" suppressalign=\"middle,over\"/><Cell col=\"3\" text=\"bind:EMPNO\" expandshow=\"expr:dataset.getRowType(currow) == 2 ? 'show' : 'hide'\" suppress=\"expr:dataset.getRowType(currow) == 2 ? '0' : '2'\"/><Cell col=\"4\" text=\"bind:EMPNM\" suppress=\"expr:dataset.getRowType(currow) == 2 ? '0' : '3'\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : (['0','2','3'].indexOf(SANCTN_KND) &gt; -1) ? 'date' : 'none'\" text=\"bind:BGNDE\" calendardisplay=\"expr:CNFIRM_AT == '1' ? 'none' : (['0','2','3'].indexOf(SANCTN_KND) &gt; -1) ? 'display' : 'none'\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : (['0','2','3'].indexOf(SANCTN_KND) &gt; -1) ? 'date' : 'none'\" text=\"bind:ENDDE\" calendardisplay=\"expr:CNFIRM_AT == '1' ? 'none' : (['0','2','3'].indexOf(SANCTN_KND) &gt; -1) ? 'display' : 'none'\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" edittype=\"expr:CNFIRM_AT == '1' ? 'none' : (['0','2','3'].indexOf(SANCTN_KND) &gt; -1) ? 'text' : 'none'\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:REQST_PRVONSH\" editdisplay=\"expr:CNFIRM_AT == '1' ? 'none' : (['0','2','3'].indexOf(SANCTN_KND) &gt; -1) ? 'display' : 'edit'\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0","1031","10",null,null,this.div_work);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_earlyConfmInfoupdt","absolute",null,"9","89","21","0",null,this.div_work);_a.set_taborder("0");_a.set_text("결재초기화");_a.style.set_background("lightsalmon");_a.style.set_border("1 solid #8d8d8dff");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070130");_b.set_titletext("재택근무신청");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.cal_searchEndDe","value","ds_cond","SEARCH_END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cal_searchBgnDe","value","ds_cond","SEARCH_BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM070130.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070130.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070130.xfdl",function(){this.checkDs=[this.ds_tlcomputList];this.HRM070130_oninit=function(_a,_b){};this.HRM070130_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.set_enableevent(false);this.ds_cond.setColumn(0,"SEARCH_BGN_DE",this.gfn_today().substring(0,6)+'01');this.ds_cond.setColumn(0,"SEARCH_END_DE",this.dateUtils.getLastDay(this.gfn_addDate(this.gfn_today(),'1','M'),'s'));this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.ds_cond.setColumn(0,"EMPNO",this.gfn_getEmpNo());this.ds_cond.setColumn(0,"EMPNM",this.gfn_getUserName());this.ds_cond.set_enableevent(true);this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");if(this.gfn_authGrpId("HRM_ADMIN")!= -1){this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(true);this.div_search.div_DeptComp.fn_setReadonly(false);this.div_search.div_DeptComp.fn_setCssclass("edt_WF_Essential");this.div_search.div_EMP.div_sear.search.set_visible(true);this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(false);this.div_search.div_EMP.div_sear.edt_empno.set_readonly(false);this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Essential");this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Essential");}else{this.div_search.div_DeptComp.div_Search.btn_dept.set_visible(false);this.div_search.div_DeptComp.fn_setReadonly(true);this.div_search.div_DeptComp.fn_setCssclass("edt_WF_Readonly");this.div_search.div_EMP.div_sear.search.set_visible(false);this.div_search.div_EMP.div_sear.edt_emplnm.set_readonly(true);this.div_search.div_EMP.div_sear.edt_empno.set_readonly(true);this.div_search.div_EMP.div_sear.edt_emplnm.set_cssclass("edt_WF_Readonly");this.div_search.div_EMP.div_sear.edt_empno.set_cssclass("edt_WF_Readonly");}var _a=[["ds_rspofcSe","_HRM214","Y","A","B"],["ds_ofcpsSe","HRM003","Y","A","B"],["ds_tlcomputSe","HRM018","Y","S","B"],];var _b=function(_c,_d,_e){};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_tlcomputList.clearData();this.fn_transaction("selectTlcomputList");};this.fn_delete=function(){if(this.ds_tlcomputList.getRowCount()==0){return false;}var _a=this.ds_tlcomputList.rowposition;var _b=this.ds_tlcomputList.getColumn(_a,"SANCTN_KND");var _c=this.ds_tlcomputList.getColumn(_a,"CNFIRM_AT");if(['1','4','5'].indexOf(_b)> -1){this.gfn_message("fail.삭제.불가","결재가 진행되어");}else{if(_c=="0"){if(this.gfn_message("confirm.삭제여부")){this.ds_tlcomputList.deleteRow(_a);}}else{this.gfn_message("fail.삭제.불가","확인이 완료되어");}}};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_tlcomputList,this.ds_validation)){return false;}this.fn_transaction("tlcomputListCUD");};this.fn_cancel=function(_a,_b){if(Ex.util.isUpdated(this.ds_tlcomputList)){if(this.gfn_message("confirm.취소여부")){this.ds_tlcomputList.reset();this.ds_tlcomputList.applyChange();return;}}else{this.gfn_message("comm.내역.변경.없음");}};this.fn_sanction=function(){var _a=this.ds_tlcomputList.rowposition;var _b=this.ds_tlcomputList.getColumn(_a,"CNFIRM_AT");var _c=this.ds_tlcomputList.getColumn(_a,"SANCTN_KND");if(this.comUtils.isDatasetUpdated(this.ds_tlcomputList)){this.gfn_message("comm.정보.저장.요청","재택근무목록");return;}if(_a<0){this.gfn_message("info.선택데이터.없음.선택.요청");return;}if(_c=="1"||_c=="4"||_c=="5"){this.gfn_message("info.처리불가","결재가 진행중이거나 완료된 재택근무는 결재할 수 없습니다.");return;}if(_b=="1"){this.gfn_message("info.처리불가","확인된 재택근무는 결재할 수 있습니다.");return;}var _d=this.ds_tlcomputList.getColumn(_a,"EMPNM");var _e=new Array();_e[0]="재택근무신청("+_d+")";_e[1]=this.ds_tlcomputList.getColumn(_a,"DEPT_NM");_e[2]=this.ds_tlcomputList.getColumn(_a,"HR_CLSF_NM");_e[3]=this.ds_tlcomputList.getColumn(_a,"EMPNM");_e[4]=this.dateUtils.format(this.ds_tlcomputList.getColumn(_a,"BGNDE"),"yyyy. mm. dd");_e[5]=this.dateUtils.format(this.ds_tlcomputList.getColumn(_a,"ENDDE"),"yyyy. mm. dd");_e[6]=this.ds_tlcomputList.getColumn(_a,"REQST_PRVONSH");this.fn_callHandySanc2(this,'0000000087',this.ds_tlcomputList,"TBHRM_TLCOMPUT",["EMPNO","SEQ"],_e,null,null,null);};this.fn_transaction=function(_a){switch(_a){case "selectTlcomputList":this.ds_tlcomputList.clearData();var _b="hsco/mis/hrm/HRM070130/selectTlcomputList.do";var _c="input01=ds_cond";var _d="ds_tlcomputList=output01";break;case "tlcomputListCUD":var _b="hsco/mis/hrm/HRM070130/tlcomputCUD.do";var _c="input01=ds_tlcomputList:U";var _d="";break;case "updateSanctnNo":var _b="hsco/mis/hrm/HRM070130/updateSanctnNo.do";var _c="input1=ds_condSanctn";var _d="";break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectTlcomputList":break;case "tlcomputListCUD":this.gfn_message("success.처리.성공");this.fn_search();break;case "updateSanctnNo":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_insert=function(){var _a=this.ds_tlcomputList.addRow();this.ds_tlcomputList.set_enableevent(false);this.ds_tlcomputList.setColumn(_a,"CNFIRM_AT","0");this.ds_tlcomputList.set_enableevent(true);this.ds_tlcomputList.setColumn(_a,"SANCTN_KND","0");this.ds_tlcomputList.setColumn(_a,"DEPT_CODE",this.gfn_getDeptId());this.ds_tlcomputList.setColumn(_a,"DEPT_NM",this.gfn_getDeptName());this.ds_tlcomputList.setColumn(_a,"EMPNO",this.gfn_getEmpNo());this.ds_tlcomputList.setColumn(_a,"EMPNM",this.gfn_getUserName());};this.ds_cond_cancolumnchange=function(_a,_b){if(_b.columnid=="SEARCH_BGN_DE"){if(_b.newvalue>this.div_search.cal_searchEndDe.value){this.gfn_message("errors.시작일자.종료일자.이하","|");return false;}}if(_b.columnid=="SEARCH_END_DE"){if(_b.newvalue<this.div_search.cal_searchBgnDe.value){this.gfn_message("errors.종료일자.시작일자.이상","|");return false;}}};this.div_work_grd_tlcomputList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_work_grd_tlcomputList_onexpandup=function(_a,_b){var _c={arg_0:this};this.gfn_popup("empPop",400,400,"사원조회팝업",_c,"com::empno_P01.xfdl","fn_PopupCallback",true);};this.fn_PopupCallback=function(_a,_b){if(_a=="empPop"){var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(nRowCnt){var _d=this.ds_tlcomputList.rowposition;this.ds_tlcomputList.setColumn(_d,"DEPT_CODE",_c.getColumn(0,"DEPT_CODE"));this.ds_tlcomputList.setColumn(_d,"DEPT_NM",_c.getColumn(0,"DEPT_NM"));this.ds_tlcomputList.setColumn(_d,"EMPNO",_c.getColumn(0,"EMPNO"));this.ds_tlcomputList.setColumn(_d,"EMPNM",_c.getColumn(0,"EMPNM"));this.ds_tlcomputList.setColumn(_d,"RSPOFC_SE",_c.getColumn(0,"RSPOFC_SE"));this.ds_tlcomputList.setColumn(_d,"OFCPS_SE",_c.getColumn(0,"OFCPS"));}}if(_a=="Popup2"){}};this.fn_get_imgUrl=function(_a){return this.gfn_getSanctnImgUrl(_a);};this.div_work_grd_tlcomputList_oncelldblclick=function(_a,_b){if(_b.col==1){var _c=this.ds_tlcomputList.rowposition;if(['1','2','3','4','5'].indexOf(this.ds_tlcomputList.getColumn(_c,"SANCTN_KND"))> -1){this.fn_openSanc(this.ds_tlcomputList.getColumn(_c,"SANCTN_NO"));}}};this.div_work_btn_earlyConfmInfoupdt_onclick=function(_a,_b){var _c=this.ds_tlcomputList.rowposition;if(_c> -1){if(this.gfn_message("comm.행위여부","현재 선택된 행의 결재정보를 초기화합니다.\n진행")){var _d=this.ds_tlcomputList.getColumn(_c,"EMPNO");var _e=this.ds_tlcomputList.getColumn(_c,"SEQ");this.ds_condSanctn.clearData();this.ds_condSanctn.addRow();this.ds_condSanctn.setColumn(0,"EMPNO",_d);this.ds_condSanctn.setColumn(0,"SEQ",_e);this.fn_transaction("updateSanctnNo");}}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("cancolumnchange",this.ds_cond_cancolumnchange,this);this.ds_cond00.addEventHandler("cancolumnchange",this.ds_cond_cancolumnchange,this);this.ds_condSanctn.addEventHandler("cancolumnchange",this.ds_cond_cancolumnchange,this);this.addEventHandler("oninit",this.HRM070130_oninit,this);this.addEventHandler("onload",this.HRM070130_onload,this);this.div_work.grd_tlcomputList.addEventHandler("onheadclick",this.div_work_grd_tlcomputList_onheadclick,this);this.div_work.grd_tlcomputList.addEventHandler("onexpandup",this.div_work_grd_tlcomputList_onexpandup,this);this.div_work.grd_tlcomputList.addEventHandler("oncelldblclick",this.div_work_grd_tlcomputList_oncelldblclick,this);this.div_work.btn_earlyConfmInfoupdt.addEventHandler("onclick",this.div_work_btn_earlyConfmInfoupdt_onclick,this);};this.loadIncludeScript("HRM070130.xfdl");this.loadPreloadList();};})();