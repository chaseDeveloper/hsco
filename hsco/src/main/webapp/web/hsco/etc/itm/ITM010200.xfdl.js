﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM010200");this.set_classname("codeMng");this.set_titletext("IT분류코드관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IT_CL\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SLA_EVL_APPLC_ENNC\" type=\"STRING\" size=\"255\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"255\"/><Column id=\"SORT_STDR\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_group",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_detail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IT_DETAIL_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"IT_DETAIL_CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CL\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"MT_CHCK_ENNC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_use",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sla",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_use00",this);_a._setContents("<ColumnInfo><Column id=\"CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE1\">1</Col><Col id=\"CODE_NM1\">사용</Col></Row><Row><Col id=\"CODE1\">0</Col><Col id=\"CODE_NM1\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_use01",this);_a._setContents("<ColumnInfo><Column id=\"CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE2\">1</Col><Col id=\"CODE_NM2\">사용</Col></Row><Row><Col id=\"CODE2\">0</Col><Col id=\"CODE_NM2\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"IT_CL\" type=\"STRING\" size=\"255\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"IT_CL\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CODE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_use02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE3\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE3\">1</Col><Col id=\"CODE_NM3\">점검</Col></Row><Row><Col id=\"CODE3\">0</Col><Col id=\"CODE_NM3\">미점검</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");_a.set_dragscrolltype("both");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Combo("cmb_cl","fixed","76","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_innerdataset("@ds_group");_a.set_index("-1");_a=new CheckBox("chk_useAt","absolute","247","6","109","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("사용여부(코드)");_a.set_value("true");_a.set_tooltiptype("hover");_a.set_tooltiptext("tklhytyty");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_search.addChild(_a.name,_a);_a=new Static("Static19","absolute","18","5","65","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("분류");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","33",null,"10","2.64%",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","27.01%","32",null,"703","72.05%",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67","286",null,null,"8",this);_a.set_taborder("6");_a.set_binddataset("ds_grid");_a.set_autofittype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"62\"/><Column size=\"60\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"코드\" editdisplay=\"edit\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"코드명\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"SLA평가\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"사용\"/></Band><Band id=\"body\" style=\"accessibility:disable none '' '' '' ;\"><Cell edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'normal' : 'none'\" text=\"bind:IT_CODE\" editlimit=\"3\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;\" text=\"bind:IT_CODE_NM\" editlimit=\"30\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:SLA_EVL_APPLC_ENNC\" combodataset=\"ds_use\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_AT\" combodataset=\"ds_use00\" combocodecol=\"CODE1\" combodatacol=\"CODE_NM1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","0%","43","130","21",null,null,this);_a.set_taborder("7");_a.set_text("IT분류코드");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0%","62",null,"5","72.99%",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","296","43","130","21",null,null,this);_a.set_taborder("9");_a.set_text("IT분류코드 상세");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","27.95%","62",null,"5","2.64%",null,this);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_detail","absolute","296","67",null,null,"28","8",this);_a.set_taborder("11");_a.set_binddataset("ds_detail");_a.set_autofittype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"62\"/><Column size=\"82\"/><Column size=\"350\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"코드\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"코드명\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"사용여부\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"월점검여부\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'normal' : 'none'\" text=\"bind:IT_DETAIL_CODE\" editlimit=\"3\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;\" text=\"bind:IT_DETAIL_CODE_NM\" editlimit=\"30\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_AT\" combodataset=\"ds_use01\" combocodecol=\"CODE2\" combodatacol=\"CODE_NM2\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:MT_CHCK_ENNC\" combodataset=\"ds_use02\" combocodecol=\"CODE3\" combodatacol=\"CODE_NM3\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute",null,"43","64","19","188",null,this);_a.set_taborder("12");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_Del_Row","absolute",null,"43","64","19","56",null,this);_a.set_taborder("14");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_Add_Row","absolute",null,"43","64","19","122",null,this);_a.set_taborder("15");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_excel_down00","absolute",null,"43","26","19","28",null,this);_a.set_taborder("16");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("btn_excel_down01","absolute","260","43","26","19",null,null,this);_a.set_taborder("17");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","727",null,"8","2.64%",null,this);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");_b.set_dragscrolltype("both");_b.set_scrollbars("none");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("codeMng");_b.set_titletext("IT분류코드관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.chk_useAt","value","ds_cond","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM010200.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM010200.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM010200.xfdl",function(){this.ITM010200_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM010200_onload=function(_a,_b){this.fn_loadCombo();this.fn_getCode();this.ds_cond.setColumn(0,"USE_AT","1");};this.ITM010200_ontimer=function(_a,_b){this.killTimer(1);this.div_search.cmb_cl.setFocus();};this.fn_getCode=function(){this.gfn_initCondDs(this,this.div_search);var _a=[['ds_sla','ITMS01','Y','D','G']];var _b=function(_c,_d,_e){};this.gfn_comboLoad(_a,_b);};this.fn_init_form=function(){this.gfn_initForm(this);this.checkDs.push(this.ds_grid);this.checkDs.push(this.ds_detail);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){this.gfn_initCondDs(this,this.div_search);var _a=[['ds_group','ITM001','Y','D','G']];var _b=function(_c,_d,_e){this.fn_search();trace("1111 ="+this.ds_group.saveXML());};this.gfn_comboLoad(_a,_b);};this.fn_search=function(){this.ds_grid.clearData();this.fn_transaction("selectList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grid)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check()){this.fn_transaction("saveList");}}};this.fn_transaction=function(_a){switch(_a){case "selectList":var _b="/hsco/etc/itm/ITM010200/ITM010200List.do";var _c="input1=ds_cond";var _d="ds_grid=output1";this.ds_cond.setColumn(0,"IT_CL",this.div_search.cmb_cl.value);break;case "selectList1":var _b="/hsco/etc/itm/ITM010200/ITM010200DetailList.do";var _c="input1=ds_cond1";var _d="ds_detail=output1";this.ds_cond1.setColumn(0,"IT_CODE",this.ds_grid.getColumn(this.ds_grid.rowposition,"IT_CODE"));this.ds_cond1.setColumn(0,"IT_CL",this.ds_grid.getColumn(this.ds_grid.rowposition,"IT_CL"));break;case "saveList":var _b="/hsco/etc/itm/ITM010200/ITM010200CUD.do";var _e="input1=ds_grid:U";var _c=_e;var _d="";break;case "saveList1":var _b="/hsco/etc/itm/ITM010200/ITM010200DetailCUD.do";var _e="input1=ds_detail:U";var _c=_e;var _d="";alert("저장완료했습니다.");break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":case "saveList1":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.fn_insert=function(_a,_b){if(this.div_search.cmb_cl.value==''){alert('분류를 선택후 신규를 하세요.');return false;}if(this.fn_check()){var _c=this.ds_grid.getRowType(this.ds_grid.rowposition);var _d=this.ds_grid.addRow();this.ds_grid.setColumn(this.ds_grid.rowposition,"IT_CL",this.div_search.cmb_cl.value);this.ds_grid.setColumn(this.ds_grid.rowposition,"USE_AT",'1');this.ds_grid.setColumn(this.ds_grid.rowposition,"SLA_EVL_APPLC_ENNC",'1');}};this.fn_delete=function(_a,_b){if(this.ds_detail.getRowCount()>0){alert('하위데이터가 있습니다. \n하위데이터를 삭제후 삭제하세요.');return false;}var _c=this.ds_grid.rowposition;var _d=this.ds_grid.getRowType(_c);this.ds_grid.deleteRow(_c);};this.ds_grid_onrowposchanged=function(_a,_b){this.ds_detail.clearData();if(this.ds_grid.getRowType(this.ds_grid.rowposition)!='2'){if(this.ds_grid.rowcount>0){this.fn_transaction("selectList1");}}};this.btn_Add_Row_onclick=function(_a,_b){var _c=this.ds_grid.getRowCount();if(_c==0){alert('조회후 신규를 선택하세요.');return false;}if(this.fn_check_detail()){this.ds_detail.addRow();this.ds_detail.setColumn(this.ds_detail.rowposition,"IT_CL",this.ds_grid.getColumn(this.ds_grid.rowposition,"IT_CL"));this.ds_detail.setColumn(this.ds_detail.rowposition,"IT_CODE",this.ds_grid.getColumn(this.ds_grid.rowposition,"IT_CODE"));this.ds_detail.setColumn(this.ds_detail.rowposition,"USE_AT",'1');}};this.btn_Del_Row_onclick=function(_a,_b){var _c=this.ds_detail.rowposition;var _d=this.ds_detail.getRowType(_c);this.ds_detail.deleteRow(_c);};this.btn_Save_onclick=function(_a,_b){if(!this.comUtils.isDatasetUpdated(this.ds_detail)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check_detail()){this.fn_transaction("saveList1");}}};this.fn_PopupCallback=function(_a,_b){if(_a=="popup"){this.fn_transaction("selectList");}};this.fn_check=function(){var _a="";var _b="";var _c=this.ds_grid.rowposition;trace("nRow ="+_c);if(_c> -1){ck1=this.ds_grid.getColumn(_c,"IT_CODE");ck2=this.ds_grid.getColumn(_c,"IT_CODE_NM");if(!ck1){alert("코드는 필수입력 사항입니다.");return false;}else if(!ck2){alert("코드명은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.fn_check_detail=function(){var _a="";var _b="";var _c=this.ds_detail.rowposition;trace("Detail_nRow ="+_c);if(_c> -1){ck1=this.ds_detail.getColumn(_c,"IT_DETAIL_CODE");ck2=this.ds_detail.getColumn(_c,"IT_DETAIL_CODE_NM");if(!ck1){alert("코드는 필수입력 사항입니다.");return false;}else if(!ck2){alert("코드명은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.btn_excel_down01_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};this.btn_excel_down00_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_detail,"exportExl");};this.grd_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.grd_detail_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_search_Combo00_onitemchanged=function(_a,_b){this.fn_search();};this.div_search_chk_useAt_onclick=function(_a,_b){this.fn_search();};this.grd_onkeydown=function(_a,_b){if(_b.keycode==13){var _c=_a.moveToNextCell();}};this.grd_detail_onkeydown=function(_a,_b){if(_b.keycode==13){var _c=_a.moveToNextCell();}};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.ds_detail.addEventHandler("onrowposchanged",this.ds_lfsts_cntrct_onrowposchanged,this);this.addEventHandler("onload",this.ITM010200_onload,this);this.addEventHandler("ontimer",this.ITM010200_ontimer,this);this.addEventHandler("oninit",this.ITM010200_oninit,this);this.div_search.cmb_cl.addEventHandler("onitemchanged",this.div_search_Combo00_onitemchanged,this);this.div_search.cmb_cl.addEventHandler("onkeydown",this.div_search_cmb_cl_onkeydown,this);this.div_search.chk_useAt.addEventHandler("onclick",this.div_search_chk_useAt_onclick,this);this.grd.addEventHandler("onheadclick",this.grd_onheadclick,this);this.grd.addEventHandler("oncellclick",this.grd_oncellclick,this);this.grd.addEventHandler("onkeydown",this.grd_onkeydown,this);this.grd_detail.addEventHandler("onheadclick",this.grd_detail_onheadclick,this);this.grd_detail.addEventHandler("onkeydown",this.grd_detail_onkeydown,this);this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);this.btn_Del_Row.addEventHandler("onclick",this.btn_Del_Row_onclick,this);this.btn_Add_Row.addEventHandler("onclick",this.btn_Add_Row_onclick,this);this.btn_excel_down00.addEventHandler("onclick",this.btn_excel_down00_onclick,this);this.btn_excel_down01.addEventHandler("onclick",this.btn_excel_down01_onclick,this);};this.loadIncludeScript("ITM010200.xfdl");};})();