﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM060403");this.set_classname("HRM060110");this.set_titletext("근무평정결과등록");this.set_name("HRM060403");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_clsfSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_jssfcSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_curOdrInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CUR_DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_ODR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_perevaResultList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_RANK\" type=\"INT\" size=\"256\"/><Column id=\"CNT\" type=\"INT\" size=\"256\"/><Column id=\"DCSN_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("false");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVA_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("152");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("평정년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear00","absolute","184","5","38","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_odrSe","absolute","222","5","90","20",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_enableevent("true");_a=new Spin("spn_year","absolute","79","5","90","21",null,null,this.div_search);_a.set_taborder("1");_a.set_value("0");_a.set_max("2050");_a.set_min("1990");_a.set_cssclass("spn_WF_Essential");_a.set_enableevent("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","312","0","15","33",null,null,this.div_search);_a.set_taborder("153");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear02","absolute","327","6","38","19",null,null,this.div_search);_a.set_taborder("154");_a.set_text("직급");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_clsfSe","absolute","365","6","90","19",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("155");_a.set_innerdataset("ds_clsfSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static02","absolute","455","0","15","33",null,null,this.div_search);_a.set_taborder("156");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_stdrYear01","absolute","470","6","38","19",null,null,this.div_search);_a.set_taborder("157");_a.set_text("직종");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_jssfcSe","absolute","508","6","114","19",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("158");_a.set_innerdataset("@ds_jssfcSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static00","absolute","169","0","15","33",null,null,this.div_search);_a.set_taborder("159");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","42",null,null,"28","0",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","1","1","138","19",null,null,this.div_work);_a.set_taborder("1");_a.set_text("근무평정결과");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_perevaResultList","absolute","0","21",null,null,"0","0",this.div_work);_a.set_taborder("2");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_binddataset("ds_perevaResultList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"77\"/><Column size=\"59\"/><Column size=\"38\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"소속\"/><Cell col=\"2\" rowspan=\"2\" text=\"직종\"/><Cell col=\"3\" rowspan=\"2\" text=\"직급\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"순위\"/><Cell col=\"6\" rowspan=\"2\" text=\"대상자\"/><Cell col=\"7\" rowspan=\"2\" text=\"확정여부\"/></Band><Band id=\"body\"><Cell text=\"expr:(currow)+1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:JSSFC_SE\" combodataset=\"ds_jssfcSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:CLSF_SE\" combodataset=\"ds_clsfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:EMPNM\"/><Cell col=\"5\" edittype=\"expr:DCSN_AT=='1' ? 'none':'masknumber'\" style=\"align:center;\" text=\"bind:LAST_RANK\" mask=\"##\" editlimitbymask=\"integer\"/><Cell col=\"6\" edittype=\"none\" style=\"align:center;\" text=\"bind:CNT\"/><Cell col=\"7\" edittype=\"none\" style=\"align:center;\" text=\"expr:DCSN_AT=='1'?'확정':'미확정'\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_dcsnAt","absolute",null,"1","84","19","0",null,this.div_work);_a.set_taborder("3");_a.set_text("일괄확정처리");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("2");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM060110");_b.set_titletext("근무평정결과등록");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond00","DEVA_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_odrSe","value","ds_cond00","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_clsfSe","value","ds_cond00","CLSF_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.cmb_jssfcSe","value","ds_cond00","JSSFC_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM060403.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM060403.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM060403.xfdl",function(){this.HRM060403_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM060403_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_init_current=function(){this.ds_curOdrInfo.clearData();this.fn_transaction("selectCurDevaOdrInfo");};this.fn_loadCombo=function(){var _a=[["ds_clsfSe","HRM002","1","전체"],["ds_jssfcSe","HRM001","1","전체"],["ds_odrSe","_HRM223","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_callbackAfter=function(){this.fn_init_current();};this.fn_search=function(){trace(this.ds_cond00.getColumn(0,"JSSFC_SE"));this.ds_perevaResultList.clearData();this.fn_transaction("selectPerevaResultList");};this.fn_transaction=function(_a){switch(_a){case "selectCurDevaOdrInfo":var _b="hsco/mis/hrm/HRMCommon/selectCurDevaOdrInfo.do";var _c="";var _d="ds_curOdrInfo=output1";break;case "selectPerevaResultList":var _b="hsco/mis/hrm/HRM060403/selectPerevaResultList.do";var _c="input1=ds_cond00";var _d="ds_perevaResultList=output1";break;case "savePerevaResult":var _b="hsco/mis/hrm/HRM060403/savePerevaResult.do";var _c="input1=ds_perevaResultList:U";var _d="";break;case "setDcsnList":var _b="hsco/mis/hrm/HRM060403/setDcsnList.do";var _c="input1=ds_perevaResultList";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectCurDevaOdrInfo":this.fn_setCurOdrInfo();break;case "selectPerevaResultList":break;case "savePerevaResult":this.gfn_message("success.처리.성공");this.fn_search();break;case "setDcsnList":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.fn_setCurOdrInfo=function(){if(this.ds_curOdrInfo.rowcount==1){var _a=this.ds_curOdrInfo.getColumn(0,"CUR_DEVA_YEAR");var _b=this.ds_curOdrInfo.getColumn(0,"CUR_ODR_SE");if(this.comUtils.isNull(_a)||this.comUtils.isNull(_b)){return false;}else{this.ds_cond00.set_enableevent(false);this.ds_cond00.setColumn(0,"DEVA_YEAR",_a);this.ds_cond00.setColumn(0,"ODR_SE",_b);this.ds_cond00.set_enableevent(true);}}else{return false;}this.ds_clsfSe.set_filterstr("CODE!='00'");this.div_search.cmb_clsfSe.set_value("");this.fn_search();};this.ds_cond00_cancolumnchange=function(_a,_b){if(_b.columnid=="DEVA_YEAR"){if(!this.fn_check()){return false;}}if(_b.columnid=="ODR_SE"){if(!this.fn_check()){return false;}}if(_b.columnid=="CLSF_SE"){if(!this.fn_check()){return false;}}if(_b.columnid=="JSSFC_SE"){if(!this.fn_check()){return false;}}this.ds_perevaResultList.clearData();};this.fn_check=function(){if(Ex.util.isUpdated(this.ds_perevaResultList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}else{return true;}}else{return true;}};this.ds_cond00_oncolumnchanged=function(_a,_b){if(_b.columnid=="DEVA_YEAR"){this.fn_search();}if(_b.columnid=="ODR_SE"){this.fn_search();}if(_b.columnid=="JSSFC_SE"){this.fn_search();}if(_b.columnid=="CLSF_SE"){var _c=_a.getColumn(_b.row,"CLSF_SE");if(_c=='01'){this.div_search.cmb_jssfcSe.set_readonly(true);this.div_search.cmb_jssfcSe.set_cssclass("cmb_WF_Readonly");}else{this.div_search.cmb_jssfcSe.set_readonly(false);this.div_search.cmb_jssfcSe.set_cssclass("cmb_WF_Essential");}this.fn_search();}};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_perevaResultList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("savePerevaResult");}};this.div_work_grd_perevaProgrsList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_work_btn_dcsnAt_onclick=function(_a,_b){var _c=0;for(var _d=0;_d<this.ds_perevaResultList.rowcount;_d++ ){if(!this.ds_perevaResultList.getColumn(_d,"LAST_RANK")||this.ds_perevaResultList.getColumn(_d,"LAST_RANK")==0){_c=_c+1;if(_c>0){this.ds_perevaResultList.set_rowposition(_d);this.gfn_message("info.처리불가","순위가 결정되지 않았습니다.");return false;}}}if(this.gfn_message("comm.행위여부","일괄확정")){this.fn_transaction("setDcsnList");}};this.ds_perevaResultList_oncolumnchanged=function(_a,_b){var _c=_a.getColumn(_b.row,"EMPNO");var _d=_a.getColumn(_b.row,"JSSFC_SE");var _e=_a.getColumn(_b.row,"CLSF_SE");var _f=_a.getColumn(_b.row,"CNT");var _g="";if(_b.newvalue!=""){if(_e=="01"&&(_d=="001"||_d=="002")){_g="EMPNO != '"+_c+"' && (JSSFC_SE == '001' || JSSFC_SE == '002') && CLSF_SE == '"+_e+"' && LAST_RANK == '"+_b.newvalue+"'";}else if(_e=="01"&&_d=="003"){_g="EMPNO != '"+_c+"' && JSSFC_SE == '"+_d+"' && CLSF_SE == '"+_e+"' && LAST_RANK == '"+_b.newvalue+"'";}else{_g="EMPNO != '"+_c+"' && JSSFC_SE == '"+_d+"' && CLSF_SE == '"+_e+"' && LAST_RANK == '"+_b.newvalue+"'";}var _h=_a.findRowExpr(_g);if(_h> -1){this.gfn_message("info.처리불가","동일한 순위가 있습니다. 순번("+(_h+1)+")");_a.setColumn(_b.row,"LAST_RANK","");}if(_b.newvalue>_f){this.gfn_message("info.처리불가","대상자보다 큰 순위는 입력할 수 없습니다.");_a.setColumn(_b.row,"LAST_RANK","");}}};});this.on_initEvent=function(){this.ds_perevaResultList.addEventHandler("oncolumnchanged",this.ds_perevaResultList_oncolumnchanged,this);this.ds_cond00.addEventHandler("cancolumnchange",this.ds_cond00_cancolumnchange,this);this.ds_cond00.addEventHandler("oncolumnchanged",this.ds_cond00_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM060403_oninit,this);this.addEventHandler("onload",this.HRM060403_onload,this);this.div_search.sta_stdrYear00.addEventHandler("onclick",this.div_search_sta_stdrYear00_onclick,this);this.Static04.addEventHandler("onclick",this.Static04_onclick,this);this.div_work.sta_title.addEventHandler("onclick",this.Static03_onclick,this);this.div_work.grd_perevaResultList.addEventHandler("onheadclick",this.div_work_grd_perevaProgrsList_onheadclick,this);this.div_work.btn_dcsnAt.addEventHandler("onclick",this.div_work_btn_dcsnAt_onclick,this);};this.loadIncludeScript("HRM060403.xfdl");};})();