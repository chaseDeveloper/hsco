﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM010202");this.set_classname("");this.set_titletext("대관사업소관리");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Dataset("ds_rentBizplcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BIZPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentBizplcList</Col><Col id=\"colId\">BIZPLC_CODE</Col><Col id=\"msgId\">사업소코드</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_rentBizplcList</Col><Col id=\"colId\">BIZPLC_NM</Col><Col id=\"msgId\">사업소명</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BIZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","33",null,"10","28",null,this);_a.set_taborder("40");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","43",null,"21","845",null,this);_a.set_taborder("41");_a.set_text("사업소목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("42");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_BIZPLC_CDNM","absolute","15","5","102","20",null,null,this.div_search);_a.set_taborder("2");_a.set_text("사업소코드(명)");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_USE_ENNC","absolute","351","5","88","20",null,null,this.div_search);_a.set_taborder("4");_a.set_text("사용여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BIZPLC_CDNM","absolute","130","5","206","20",null,null,this.div_search);_a.set_taborder("0");_a.set_imemode("hangul");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_useEnnc","absolute","418","5","184","20",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("rdo_useEnnc_innerdataset",this.div_search.rdo_useEnnc);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("1");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_cssclass("rdo_WF_Essential");_a.set_index("1");_a=new Static("Static03","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","336","0","15","31",null,null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","602","0","15","31",null,null,this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","115","0","15","31",null,null,this.div_search);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static18","absolute","39%","0",null,"31","60.53%",null,this);_a.set_taborder("49");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Grid("grd_rentBizplcList","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_rentBizplcList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"300\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업소코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업소명\"/><Cell col=\"2\" colspan=\"2\" text=\"관리부서\"/><Cell col=\"4\" text=\"사업소코드\"/><Cell col=\"5\" text=\"사업소명\"/><Cell col=\"6\" text=\"사용여부\"/><Cell col=\"7\" text=\"비고\"/><Cell col=\"8\" text=\"출력순서\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'normal':'none'\" text=\"bind:BIZPLC_CODE\" maskchar=\" \" editlimit=\"4\" editautoselect=\"true\" editdisplay=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'display' :'edit'\" editlengthunit=\"utf8\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:BIZPLC_NM\" editlimit=\"45\" editautoselect=\"true\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" expandshow=\"show\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:BEFORE_BIZPLC_CODE\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:B_BIZPLC_NM\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:RM\" editlimit=\"300\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"8\" edittype=\"normal\" editfilter=\"number\" text=\"bind:OUTPT_ORDR\" editlimit=\"3\" editimemode=\"alpha\" editdisplay=\"display\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("52");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("53");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("");_c.getSetter("inheritanceid").set("");_c.set_titletext("대관사업소관리");});this.addLayout(_a.name,_a);_a=new BindItem("item7","Search00.D_EOPCHE_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Search00.D_DAEPYOJA_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Search00.D_POST_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Search00.D_JUSO_EDIT1","value","TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Search00.D_JUSO_EDIT2","value","TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Search00.D_TEL_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Search00.D_FAX_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Search00.D_SAYONG_RADIO","value","TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","Search00.D_BIGO_EDIT","value","TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Tab00.tabpage1.D_NAME_EDIT","value","TBITM_ENTRPS_EMP","ENTRPS_EMP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Tab00.tabpage1.D_JIKWI_EDIT","value","TBITM_ENTRPS_EMP","OFCPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Tab00.tabpage1.D_DAMDANG_EDIT","value","TBITM_ENTRPS_EMP","CHRG_JOB");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Tab00.tabpage1.D_JIWON_COMBO","value","TBITM_ENTRPS_EMP","SPORT_STLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Tab00.tabpage1.D_TEL_EDIT","value","TBITM_ENTRPS_EMP","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Tab00.tabpage1.D_EMAIL_EDIT","value","TBITM_ENTRPS_EMP","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL00.edt_ENTRPS_NM","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","ENTRPS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_DETAIL00.edt_REPRSNT_MAN","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","REPRSNT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_DETAIL00.mae_POST_NO","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","POST_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_DETAIL00.edt_ADRES","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_DETAIL00.edt_DETAIL_ADRES","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_DETAIL00.edt_CTTPC","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_DETAIL00.edt_FAX_NO","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","FAX_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_DETAIL00.edt_USE_ENNC","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","USE_ENNC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_DETAIL00.txt_RM","value","ds_TBITM_MNTNC_MENDNG_ENTRPS","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_search.edt_BIZPLC_CDNM","value","ds_cond","BIZPLC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_search.rdo_useEnnc","value","ds_cond","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM010202.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM010202.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM010202.xfdl",function(){this.saveRow= -1;this.HPM010202_oninit=function(_a,_b){};this.HPM010202_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"BIZPLC_NM","");this.ds_cond.setColumn(0,"USE_AT","");this.fn_search();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_rentBizplcList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("select");};this.fn_insert=function(){this.ds_rentBizplcList.addRow();};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_rentBizplcList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_rentBizplcList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_rentBizplcList.rowposition;this.fn_transaction("save");}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_rentBizplcList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_rentBizplcList.reset();this.ds_rentBizplcList.applyChange();}};this.fn_delete=function(){if(this.ds_rentBizplcList.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){var _a=this.ds_rentBizplcList.rowposition;this.ds_rentBizplcList.deleteRow(_a);}}};this.fn_transaction=function(_a){switch(_a){case "select":var _b="hsco/hpm/usm/HPM010202/selectRentBizplcManageList.do";var _c="input1=ds_cond";var _d="ds_rentBizplcList=output1";break;case "save":var _b="hsco/hpm/usm/HPM010202/rentBizplcManageCUD.do";var _c="input1=ds_rentBizplcList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "select":if(this.saveRow> -1){this.ds_rentBizplcList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "save":this.fn_search();}}};this.grd_rentBizplcList_onexpanddown=function(_a,_b){var _c="";if(_b.col=="2"){_c="deptPopup";}this.fn_popup(_c);};this.fn_popup=function(_a){if(_a=="deptPopup"){var _b={arg_0:this};this.gfn_popup(_a,400,400,"부서선택",_b,"mis_hrm::HRM010101_P1.xfdl","fn_popCallBack",true);}};this.fn_popCallBack=function(_a,_b){if(_a=="deptPopup"){var _c=new Dataset();var _d=_c.loadXML(_b);trace(_c.saveXML());if(_d){var _e=this.ds_rentBizplcList.rowposition;this.ds_rentBizplcList.setColumn(_e,"DEPT_CODE",_c.getColumn(0,"DEPT_CODE"));this.ds_rentBizplcList.setColumn(_e,"DEPT_NM",_c.getColumn(0,"DEPT_NM"));}}};});this.on_initEvent=function(){this.ds_rentBizplcList.addEventHandler("cancolumnchange",this.ds_bizplcList_cancolumnchange,this);this.addEventHandler("onload",this.HPM010202_onload,this);this.addEventHandler("oninit",this.HPM010202_oninit,this);this.div_search.edt_BIZPLC_CDNM.addEventHandler("onkeyup",this.div_search_edt_BIZPLC_CDNM_onkeyup,this);this.div_search.rdo_useEnnc.addEventHandler("onitemchanged",this.div_search_rdo_useEnnc_onitemchanged,this);this.grd_rentBizplcList.addEventHandler("onexpanddown",this.grd_rentBizplcList_onexpanddown,this);};this.loadIncludeScript("HPM010202.xfdl");};})();