﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080302");this.set_classname("HRM080302");this.set_titletext("교육실적총괄");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_edcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_CL\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"CRSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATE_DTY\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_BGNDE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_RCOGN_TIME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"APPN_LRN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년도</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_registDe","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("조회년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDept","absolute","172","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("대상부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DEPT","absolute","236","5","195","21",null,null,this.div_search);_a.set_taborder("5");_a.set_enable("false");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt","absolute","446","5","51","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("대상자");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","497","5","166","21",null,null,this.div_search);_a.set_taborder("7");_a.set_visible("true");_a.set_enable("false");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","79","5","78","21",null,null,this.div_search);_a.set_taborder("9");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Static("sta_applcnt00","absolute","678","5","90","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("지정학습여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","768","5","21","21",null,null,this.div_search);_a.set_taborder("11");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edcTyLclasEdcTySclas_s","absolute","79","31","370","21",null,null,this.div_search);_a.set_taborder("12");this.div_search.addChild(_a.name,_a);_a=new Button("btn_edcTy","absolute","429","31","21","22",null,null,this.div_search);_a.set_taborder("13");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("sta_de00","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("교육유형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_pblancList","absolute","0","68","150","19",null,null,this);_a.set_taborder("4");_a.set_text("교육실적총괄 현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_pblancList","absolute","0","88",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_edcList");_a.set_autoenter("select");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"370\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"350\"/><Column size=\"130\"/><Column size=\"210\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"확인\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"교육유형\"/><Cell col=\"3\" text=\"교육분류\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"교육기관\"/><Cell col=\"8\" text=\"교육과정\"/><Cell col=\"9\" text=\"교육장소\"/><Cell col=\"10\" text=\"교육기간\"/><Cell col=\"11\" text=\"교육일수\"/><Cell col=\"12\" text=\"교육시간\"/><Cell col=\"13\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CNFIRM_AT\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"expr:currow+1\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:EDC_TY_NM\" tooltiptext=\"bind:EDC_TY_NM\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:EDC_NM\" tooltiptext=\"bind:EDC_NM\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:HR_CLSF_NM\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"bind:EMPNM\"/><Cell col=\"7\" style=\"align:left middle;\" text=\"bind:EDC_INSTT\" tooltiptext=\"bind:EDC_INSTT\"/><Cell col=\"8\" style=\"align:left middle;\" text=\"bind:CRSE_NM\" wordwrap=\"none\" tooltiptext=\"bind:CRSE_NM\" autosizerow=\"limitmin\"/><Cell col=\"9\" style=\"align:left middle;\" text=\"bind:EDC_PLACE\" tooltiptext=\"bind:EDC_PLACE\"/><Cell col=\"10\" style=\"align:center middle;\" text=\"bind:EDC_BGNDE_TXT\"/><Cell col=\"11\" style=\"align:center middle;\" text=\"bind:EDC_DAYCNT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:EDC_RCOGN_TIME\"/><Cell col=\"13\" style=\"align:left middle;\" text=\"bind:RM\" tooltiptext=\"bind:RM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" colspan=\"2\" text=\"총 교육시간 :\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;EDC_RCOGN_TIME&quot;)\"/><Cell col=\"13\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","83","1031","5",null,null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","59","1031","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM080302");_b.set_titletext("교육실적총괄");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.spn_year","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_edcTyLclasEdcTySclas_s","value","ds_cond","EDC_TY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.CheckBox00","value","ds_cond","APPN_LRN_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("HRM080302.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM080302.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM080302.xfdl",function(){this.isAuth=false;this.HRM080302_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM080302_onload=function(_a,_b){if((this.gfn_authGrpId("HRM_ADMIN")!= -1)||(this.gfn_authGrpId("HRM_EDC")!= -1)){this.isAuth=true;}else{this.isAuth=false;}this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.div_DEPT.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();this.ds_cond.addRow();if(this.isAuth){this.div_search.div_DEPT.set_enable(true);this.div_search.div_EMP.set_enable(true);}else{this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());this.ds_cond.setColumn(0,"EMPNO",this.fn_getEmpno());this.ds_cond.setColumn(0,"EMPNM",this.fn_getEmpnm());}var _c=this.gfn_today().substr(0,4);this.ds_cond.setColumn(0,"YEAR",_c);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_edcList.clearData();this.fn_transaction("selectEdcList");};this.fn_save=function(){};this.fn_transaction=function(_a){switch(_a){case "selectEdcList":var _b="/hsco/mis/hrm/HRM080302/selectTbhrmEdcList.do";var _c="input1=ds_cond";var _d="ds_edcList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectEdcList":break;}}};this.div_work_grd_pblancList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.fn_insert=function(){};this.fn_delete=function(){};this.fn_cancel=function(){};this.fn_sanction=function(){};this.fn_popupCall=function(_a,_b){if(_a.name=="btn_edcTy"){var _c=this.ds_cond.getColumn(0,"YEAR");if(!this.comUtils.isNull(_c)){var _d={arg_0:this,year:_c};this.gfn_popup("popEdcTy",500,465,"",_d,"mis_hrm::HRM080207_P01.xfdl","fn_popupCallBack",true);}else{alert("조회년도를 입력하십시오.");}}};this.fn_popupCallBack=function(_a,_b){if(_a=="popEdcTy"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"SN");var _f=_c.getColumn(0,"EDC_TY_MLSFC");var _g=_c.getColumn(0,"EDC_TY_SCLAS");var _h=this.ds_cond.rowposition;this.ds_cond.setColumn(_h,"EDC_TY_SN",_e);this.ds_cond.setColumn(_h,"EDC_TY_NM",_f+" - "+_g);}}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="YEAR"){_a.setColumn(_b.row,"EDC_TY_SN",null);_a.setColumn(_b.row,"EDC_TY_NM",null);}};this.div_search_spn_year_onspin=function(_a,_b){this.ds_cond.setColumn(0,"EDC_TY_SN",null);this.ds_cond.setColumn(0,"EDC_TY_NM",null);};this.div_search_edt_edcTyLclasEdcTySclas_s_onchanged=function(_a,_b){if(this.comUtils.isNull()){this.div_search.edt_edcTyLclasEdcTySclas_s.set_value("");this.ds_cond.setColumn(0,"EDC_TY_SN","");this.ds_cond.setColumn(0,"EDC_TY_NM","");}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.HRM080302_onload,this);this.addEventHandler("oninit",this.HRM080302_oninit,this);this.div_search.spn_year.addEventHandler("onspin",this.div_search_spn_year_onspin,this);this.div_search.edt_edcTyLclasEdcTySclas_s.addEventHandler("onchanged",this.div_search_edt_edcTyLclasEdcTySclas_s_onchanged,this);this.div_search.btn_edcTy.addEventHandler("onclick",this.fn_popupCall,this);this.grd_pblancList.addEventHandler("onheadclick",this.div_work_grd_pblancList_onheadclick,this);};this.loadIncludeScript("HRM080302.xfdl");this.loadPreloadList();};})();