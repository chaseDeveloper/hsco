﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM080100");this.set_classname("codeMng");this.set_titletext("월간지원내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SPORT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RLTPSN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"S_SPORT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"S_SPORT_MT_D\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_grid00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SPORT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN_IEM\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_PLAN_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_RLTPSN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","0",null,"33","2.64%",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","151","5","38","21",null,null,this.div_search);_a.set_taborder("23");_a.set_text("년월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Button("btn_planCopy","absolute",null,"5","95","21","29",null,this.div_search);_a.set_taborder("25");_a.set_text("계획복사");_a.set_cssclass("btn_WF_Link");this.div_search.addChild(_a.name,_a);_a=new Div("cal_dclzYm01","absolute","194","5","93","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0%","67",null,"291","2.64%",null,this);_a.set_taborder("3");_a.set_binddataset("ds_grid");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"150\"/><Column size=\"500\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"항목\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"날짜\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"지원내용\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"관련자\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:SPORT_PLAN_IEM\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:SPORT_PLAN\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left;\" text=\"bind:SPORT_PLAN_CN\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:SPORT_RLTPSN\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","49","6","100","18",null,null,this);_a.set_taborder("6");_a.set_text("<b v='true'><< 지원내역 >></b>");_a.set_usedecorate("true");_a.set_cssclass("sta_GID_txt");this.addChild(_a.name,_a);_a=new Div("div_search00","absolute","0%","368",null,"33","2.64%",null,this);_a.set_taborder("7");_a.set_cssclass("div_WFSA_Box");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","151","5","37","21",null,null,this.div_search00);_a.set_taborder("34");_a.set_text("년월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search00.addChild(_a.name,_a);_a=new Button("btn_lsmthPlanCopy","absolute",null,"5","95","21","29",null,this.div_search00);_a.set_taborder("36");_a.set_text("전월계획복사");_a.set_cssclass("btn_WF_Link");this.div_search00.addChild(_a.name,_a);_a=new Static("Static02","absolute","47","5","100","18",null,null,this.div_search00);_a.set_taborder("37");_a.set_text("<b v='true'><< 계획내역 >></b>");_a.set_usedecorate("true");_a.set_cssclass("sta_GID_txt");this.div_search00.addChild(_a.name,_a);_a=new Div("cal_dclzYm02","absolute","193","5","96","21",null,null,this.div_search00);_a.set_taborder("38");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search00.addChild(_a.name,_a);_a=new Button("Button23","absolute",null,"3","50","25","325",null,this.div_search00);_a.set_taborder("39");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.div_search00.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"3","50","25","269",null,this.div_search00);_a.set_taborder("40");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.div_search00.addChild(_a.name,_a);_a=new Button("Button01","absolute",null,"3","50","25","214",null,this.div_search00);_a.set_taborder("41");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.div_search00.addChild(_a.name,_a);_a=new Button("Button03","absolute",null,"3","50","25","158",null,this.div_search00);_a.set_taborder("42");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.div_search00.addChild(_a.name,_a);_a=new Grid("grd1","absolute","0%","435",null,null,"2.64%","2",this);_a.set_taborder("8");_a.set_binddataset("ds_grid00");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"150\"/><Column size=\"500\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"항목\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"날짜\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"지원내용\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"관련자\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:SPORT_PLAN_IEM\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:SPORT_PLAN\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left;\" text=\"bind:SPORT_PLAN_CN\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:SPORT_RLTPSN\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","33",null,"10","2.64%",null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static65","absolute","0%","358",null,"10","2.64%",null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","401",null,"10","2.64%",null,this);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDown01","absolute",null,"43","26","19","28",null,this);_a.set_taborder("14");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("btn_excelDown00","absolute",null,"411","26","19","28",null,this);_a.set_taborder("15");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","24.27%","62",null,"5","2.17%",null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","25.02%","430",null,"5","1.42%",null,this);_a.set_taborder("17");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");_b.set_scrollbars("none");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.div_search00,function(_b){_b.set_taborder("7");_b.set_cssclass("div_WFSA_Box");_b.set_scrollbars("none");});this.div_search00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("codeMng");_b.set_titletext("월간지원내역");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("ITM080100.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM080100.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM080100.xfdl",function(){this.ITM080100_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM080100_onload=function(_a,_b){this.div_search.cal_dclzYm01.setValue(this.dateUtils.format(this.dateUtils.today(),'yyyymm'));this.div_search00.cal_dclzYm02.setValue(this.dateUtils.format(this.dateUtils.today(),'yyyymm'));};this.fn_init_form=function(){this.gfn_initForm(this);this.checkDs.push(this.ds_grid);this.checkDs.push(this.ds_grid00);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){};this.fn_search=function(){this.fn_transaction("selectList");this.fn_transaction("selectList1");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grid)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check()){this.fn_transaction("saveList");}}};this.fn_transaction=function(_a){this.ds_cond.addRow();switch(_a){case "selectList":var _b="/hsco/etc/itm/ITM080100/ITM080100List.do";var _c="input1=ds_cond";var _d="ds_grid=output1";this.ds_cond.setColumn(0,"S_SPORT_MT",this.div_search.cal_dclzYm01.getValue());break;case "selectList1":var _b="/hsco/etc/itm/ITM080100/ITM080100DetailList.do";var _c="input1=ds_cond";var _d="ds_grid00=output1";this.ds_cond.setColumn(0,"S_SPORT_MT_D",this.div_search00.cal_dclzYm02.getValue());break;case "saveList":var _b="/hsco/etc/itm/ITM080100/ITM080100CUD.do";var _e="input1=ds_grid:U";var _c=_e;var _d="";break;case "saveList1":var _b="/hsco/etc/itm/ITM080100/ITM080100DetailCUD.do";var _e="input1=ds_grid00:U";var _c=_e;var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":this.gfn_callBackMsg(_a,_b,_c);break;case "saveList1":this.gfn_callBackMsg(_a,_b,_c);break;case "saveTab3List":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.fn_insert=function(_a,_b){if(this.fn_check()){var _c=this.ds_grid.getRowType(this.ds_grid.rowposition);var _d=this.ds_grid.addRow();this.ds_grid.setColumn(this.ds_grid.rowposition,"SPORT_MT",this.div_search.cal_dclzYm01.getValue());}};this.fn_delete=function(_a,_b){var _c=this.ds_grid.rowposition;var _d=this.ds_grid.getRowType(_c);this.ds_grid.deleteRow(_c);};this.div_search00_Button23_onclick=function(_a,_b){this.fn_transaction("selectList1");};this.div_search00_Button00_onclick=function(_a,_b){if(this.fn_check2()){var _c=this.ds_grid00.getRowType(this.ds_grid00.rowposition);var _d=this.ds_grid00.addRow();this.ds_grid00.setColumn(this.ds_grid00.rowposition,"SPORT_MT",this.div_search00.cal_dclzYm02.getValue());}};this.div_search00_Button01_onclick=function(_a,_b){var _c=this.ds_grid00.rowposition;var _d=this.ds_grid00.getRowType(_c);this.ds_grid00.deleteRow(_c);};this.div_search00_Button03_onclick=function(_a,_b){alert(11111111);if(!this.comUtils.isDatasetUpdated(this.ds_grid00)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check2()){this.fn_transaction("saveList1");}}};this.btn_excel_down00_onclick=function(_a,_b){this.gfn_exportExcel(this.grd1,"exportExl");};this.grd1_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.grd_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.fn_check=function(){var _a="";var _b="";var _c=this.ds_grid.rowposition;if(_c> -1){ck1=this.ds_grid.getColumn(_c,"SPORT_PLAN_IEM");ck2=this.ds_grid.getColumn(_c,"SPORT_PLAN");ck3=this.ds_grid.getColumn(_c,"SPORT_PLAN_CN");if(!ck1){alert("항목은 필수입력 사항입니다.");return false;}else if(!ck2){alert("날짜는 필수입력 사항입니다.");return false;}else if(!ck3){alert("지원내용은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.fn_check2=function(){var _a="";var _b="";var _c=this.ds_grid00.rowposition;if(_c> -1){ck1=this.ds_grid00.getColumn(_c,"SPORT_PLAN_IEM");ck2=this.ds_grid00.getColumn(_c,"SPORT_PLAN");ck3=this.ds_grid00.getColumn(_c,"SPORT_PLAN_CN");if(!ck1){alert("항목은 필수입력 사항입니다.");return false;}else if(!ck2){alert("날짜는 필수입력 사항입니다.");return false;}else if(!ck3){alert("지원내용은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.btn_excelDown01_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};this.div_search_btn_planCopy_onclick=function(_a,_b){if(application.confirm("기존데이타 삭제 후 복사 됩니다. 작업을 진행 하시겠습니까?")){var _c="/hsco/etc/itm/ITM080100/ITM080100P.do";var _d="input1=ds_cond";var _e="";this.ds_cond.setColumn(0,"S_SPORT_MT",this.div_search.cal_dclzYm01.getValue());Ex.core.tran(this,"copy",_c,_d,_e);this.fn_transaction("selectList");}};this.div_search00_btn_lsmthPlanCopy_onclick=function(_a,_b){if(application.confirm("기존데이타 삭제 후 복사 됩니다. 작업을 진행 하시겠습니까?")){var _c="/hsco/etc/itm/ITM080100/ITM080100DetailP.do";var _d="input1=ds_cond";var _e="";this.ds_cond.setColumn(0,"S_SPORT_MT_D",this.div_search00.cal_dclzYm02.getValue());Ex.core.tran(this,"copy1",_c,_d,_e);this.fn_transaction("selectList1");}};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.ds_grid00.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.addEventHandler("onload",this.ITM080100_onload,this);this.addEventHandler("oninit",this.ITM080100_oninit,this);this.div_search.btn_planCopy.addEventHandler("onclick",this.div_search_btn_planCopy_onclick,this);this.grd.addEventHandler("onheadclick",this.grd_onheadclick,this);this.div_search00.btn_lsmthPlanCopy.addEventHandler("onclick",this.div_search00_btn_lsmthPlanCopy_onclick,this);this.div_search00.Button23.addEventHandler("onclick",this.div_search00_Button23_onclick,this);this.div_search00.Button00.addEventHandler("onclick",this.div_search00_Button00_onclick,this);this.div_search00.Button01.addEventHandler("onclick",this.div_search00_Button01_onclick,this);this.div_search00.Button03.addEventHandler("onclick",this.div_search00_Button03_onclick,this);this.grd1.addEventHandler("onheadclick",this.grd1_onheadclick,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);this.btn_excelDown01.addEventHandler("onclick",this.btn_excelDown01_onclick,this);this.btn_excelDown00.addEventHandler("onclick",this.btn_excel_down00_onclick,this);};this.loadIncludeScript("ITM080100.xfdl");this.loadPreloadList();};})();