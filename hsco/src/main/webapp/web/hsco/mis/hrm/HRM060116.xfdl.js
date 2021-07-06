﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060116");this.set_classname("HRM060116");this.set_titletext("교차평가결과관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_tbhrmCrsEvl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL1_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL1_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL2_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL2_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL2_3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL3_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL3_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL4_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL4_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL5_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL5_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL6_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL6_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL7_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVAL7_2\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("false");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rspofcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STDR_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("167");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear","absolute","15","6","64","19",null,null,this.div_search);_a.set_taborder("0");_a.set_text("평가년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear00","absolute","184","6","38","19",null,null,this.div_search);_a.set_taborder("2");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","222","6","90","19",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Spin("spn_year","absolute","79","6","90","19",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("2050");_a.set_min("1990");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","1","0","130","19",null,null,this.div_work);_a.set_taborder("0");_a.set_text("교차평가내역");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_tbhrmCrsEvl","absolute","0","19",null,null,"0","0",this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_tbhrmCrsEvl");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"21\"/><Column size=\"25\"/><Column size=\"91\"/><Column size=\"68\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"33\"/><Column size=\"32\"/><Column size=\"36\"/><Column size=\"42\"/><Column size=\"81\"/><Column size=\"42\"/><Column size=\"42\"/><Column size=\"44\"/><Column size=\"42\"/><Column size=\"57\"/><Column size=\"44\"/><Column size=\"39\"/><Column size=\"67\"/><Column size=\"44\"/><Column size=\"38\"/><Column size=\"64\"/><Column size=\"38\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"부서\"/><Cell col=\"3\" rowspan=\"2\" text=\"성명\"/><Cell col=\"4\" rowspan=\"2\" text=\"직책\"/><Cell col=\"5\" rowspan=\"2\" text=\"평균\"/><Cell col=\"6\" rowspan=\"2\" text=\"계\"/><Cell col=\"7\" rowspan=\"2\" text=\"인원\"/><Cell col=\"8\" colspan=\"2\" text=\"의사소통능력\"/><Cell col=\"10\" colspan=\"3\" text=\"대인관계능력\"/><Cell col=\"13\" colspan=\"2\" text=\"문제해결능력\"/><Cell col=\"15\" colspan=\"2\" text=\"동기부여능력\"/><Cell col=\"17\" colspan=\"2\" text=\"자기인식능력\"/><Cell col=\"19\" colspan=\"2\" text=\"관리능력\"/><Cell col=\"21\" colspan=\"2\" text=\"진실성\"/><Cell row=\"1\" col=\"8\" text=\"듣기\"/><Cell row=\"1\" col=\"9\" text=\"말하기\"/><Cell row=\"1\" col=\"10\" text=\"다른사람에게&#13;&#10;권한부여\"/><Cell row=\"1\" col=\"11\" text=\"영향력\"/><Cell row=\"1\" col=\"12\" text=\"관계&#13;&#10;관리\"/><Cell row=\"1\" col=\"13\" text=\"지적&#13;&#10;호기심\"/><Cell row=\"1\" col=\"14\" text=\"통합&#13;&#10;/통찰\"/><Cell row=\"1\" col=\"15\" text=\"솔선&#13;&#10;/주도력\"/><Cell row=\"1\" col=\"16\" text=\"회복력\"/><Cell row=\"1\" col=\"17\" text=\"자기&#13;&#10;평가\"/><Cell row=\"1\" col=\"18\" text=\"피드백에&#13;&#10;대한 대응\"/><Cell row=\"1\" col=\"19\" text=\"판단력\"/><Cell row=\"1\" col=\"20\" text=\"직무&#13;&#10;관리\"/><Cell row=\"1\" col=\"21\" text=\"직원에&#13;&#10;대한 존중\"/><Cell row=\"1\" col=\"22\" text=\"신뢰\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:(currow)+1\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"3\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EMPNM\"/><Cell col=\"4\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RSPOFC_SE\" combodataset=\"ds_rspofcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"expr:nexacro.round((nexacro.toNumber(EVAL1_1,0)+nexacro.toNumber(EVAL1_2,0)+nexacro.toNumber(EVAL2_1,0)+nexacro.toNumber(EVAL2_2,0)+nexacro.toNumber(EVAL2_3,0)+nexacro.toNumber(EVAL3_1,0)+nexacro.toNumber(EVAL3_2,0)+nexacro.toNumber(EVAL4_1,0)+nexacro.toNumber(EVAL4_2,0)+nexacro.toNumber(EVAL5_1,0)+nexacro.toNumber(EVAL5_2,0)+nexacro.toNumber(EVAL6_1,0)+nexacro.toNumber(EVAL6_2,0)+nexacro.toNumber(EVAL7_1,0)+nexacro.toNumber(EVAL7_2,0))/nexacro.toNumber(CNT),2)\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"expr:nexacro.toNumber(EVAL1_1,0)+nexacro.toNumber(EVAL1_2,0)+nexacro.toNumber(EVAL2_1,0)+nexacro.toNumber(EVAL2_2,0)+nexacro.toNumber(EVAL2_3,0)+nexacro.toNumber(EVAL3_1,0)+nexacro.toNumber(EVAL3_2,0)+nexacro.toNumber(EVAL4_1,0)+nexacro.toNumber(EVAL4_2,0)+nexacro.toNumber(EVAL5_1,0)+nexacro.toNumber(EVAL5_2,0)+nexacro.toNumber(EVAL6_1,0)+nexacro.toNumber(EVAL6_2,0)+nexacro.toNumber(EVAL7_1,0)+nexacro.toNumber(EVAL7_2,0)\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CNT\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL1_1\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL1_2\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL2_1\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL2_2\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL2_3\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL3_1\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL3_2\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL4_1\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL4_2\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL5_1\"/><Cell col=\"18\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL5_2\"/><Cell col=\"19\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL6_1\"/><Cell col=\"20\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL6_2\"/><Cell col=\"21\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL7_1\"/><Cell col=\"22\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVAL7_2\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM060116");_b.set_titletext("교차평가결과관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond00","DEVA_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_odrSe","value","ds_cond00","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM060116.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM060116.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM060116.xfdl",function(){this.checkDs=[this.ds_tbhrmCrsEvl];var _a="";this.HRM060116_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.HRM060116_onload=function(_b,_c){this.fn_loadCombo();this.fn_init_current();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_current=function(){this.ds_curInfo.clearData();this.fn_transaction("selectCurStdrOdrInfo");};this.fn_loadCombo=function(){this.gfn_loadCodeComboWithDs(this,"",this.ds_rspofcSe,"_HRM214","","Y","선택","N","");this.gfn_loadCodeComboWithDs(this,"",this.ds_odrSe,"_HRM223","","Y"," ","N","fn_callbackAfter");};this.fn_callbackAfter=function(){this.ds_cond00.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond00.set_enableevent(true);this.fn_search();};this.fn_search=function(){this.fn_transaction("seletTbhrmCrsEvl");};this.fn_transaction=function(_b){switch(_b){case "seletTbhrmCrsEvl":var _c="hsco/mis/hrm/HRM060116/seletTbhrmCrsEvl.do";var _d="input1=ds_cond00";var _e="ds_tbhrmCrsEvl=output1";break;case "selectCurStdrOdrInfo":var _c="hsco/mis/hrm/HRMCommon/selectCurStdrOdrInfo.do";var _d="";var _e="ds_curInfo=output1";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "seletTbhrmCrsEvl":break;case "selectCurStdrOdrInfo":this.fn_setCurInfo("stdrYear");this.fn_setCurInfo("odrSe");this.fn_setCurInfo("closAt");break;}}};this.ds_cond00_oncolumnchanged=function(_b,_c){this.fn_search();};this.div_work_grd_tbhrmCrsEvl_oncellclick=function(_b,_c){if(_c.cell==0){_b.setCellProperty("Head",_c.cell,"text","0");}};this.div_work_grd_tbhrmCrsEvl_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}this.gfn_gridSort(_b,_c);};this.fn_setCurInfo=function(_b){if(this.ds_curInfo.rowcount==1){if(_b=="stdrYear"){var _c=this.ds_curInfo.getColumn(0,"STDR_YEAR");this.div_search.spn_year.set_value(_c);}else if(_b=="odrSe"){var _d=this.ds_curInfo.getColumn(0,"ODR_SE");this.div_search.cmb_odrSe.set_value(_d);}else if(_b=="closAt"){_a=this.ds_curInfo.getColumn(0,"CLOS_AT");}}};});this.on_initEvent=function(){this.ds_cond00.addEventHandler("oncolumnchanged",this.ds_cond00_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM060116_oninit,this);this.addEventHandler("onload",this.HRM060116_onload,this);this.div_search.sta_stdrYear00.addEventHandler("onclick",this.div_search_sta_stdrYear00_onclick,this);this.Static04.addEventHandler("onclick",this.Static04_onclick,this);this.div_work.Static09.addEventHandler("onclick",this.Static03_onclick,this);this.div_work.grd_tbhrmCrsEvl.addEventHandler("oncellclick",this.div_work_grd_tbhrmCrsEvl_oncellclick,this);this.div_work.grd_tbhrmCrsEvl.addEventHandler("onheadclick",this.div_work_grd_tbhrmCrsEvl_onheadclick,this);};this.loadIncludeScript("HRM060116.xfdl");};})();