﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM040100");this.set_classname("codeMng");this.set_titletext("월점검항목관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"3\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"100\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"STRING\" size=\"10\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"STRING\" size=\"8\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_GRP_CODE\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_detail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"3\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"100\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"STRING\" size=\"10\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"STRING\" size=\"8\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_GRP_CODE\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond1",this);_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_itcode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IT_CL\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"IT_CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SLA_EVL_APPLC_ENNC\" type=\"STRING\" size=\"255\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"255\"/><Column id=\"SORT_STDR\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_use00",this);_a._setContents("<ColumnInfo><Column id=\"CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE1\">1</Col><Col id=\"CODE_NM1\">사용</Col></Row><Row><Col id=\"CODE1\">0</Col><Col id=\"CODE_NM1\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","31.73%","694",null,"27","19.64%",null,this);_a.set_taborder("47");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","39.19%","667",null,"27","19.64%",null,this);_a.set_taborder("46");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","39.19%","641",null,"27","19.64%",null,this);_a.set_taborder("45");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","39.19%","615",null,"27","19.64%",null,this);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","39.19%","589",null,"27","19.64%",null,this);_a.set_taborder("40");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","0%","27",null,null,"69.59%","391",this);_a.set_taborder("1");_a.set_binddataset("ds_grid");_a.set_autoenter("select");_a.set_selecttype("cell");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"192\"/><Column size=\"56\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"코드\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"코드명\"/><Cell col=\"2\" text=\"사용\"/></Band><Band id=\"body\"><Cell edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'normal' : 'none'\" text=\"bind:CODE\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:USE_AT\" combodataset=\"ds_use00\" combocodecol=\"CODE1\" combodatacol=\"CODE_NM1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excel_down01","absolute",null,"43","26","19","28",null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","0.19%","22",null,"10","69.59%",null,this);_a.set_taborder("6");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","0%","3",null,"21","87.72%",null,this);_a.set_taborder("7");_a.set_text("월점검항목");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","31.73%","3",null,"21","56%",null,this);_a.set_taborder("8");_a.set_text("월점검항목 상세");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","31.16%","22",null,"10","2.83%",null,this);_a.set_taborder("9");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","30.97%","27",null,"554","2.83%",null,this);_a.set_taborder("10");_a.set_binddataset("ds_detail");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"72\"/><Column size=\"248\"/><Column size=\"258\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"상세코드\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"상세코드명\"/><Cell col=\"2\" text=\"점검분류항목\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/><Cell col=\"2\" text=\"bind:CHRCTR_PREPAR_VALUE_1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","31.73%","615",null,"27","58.83%",null,this);_a.set_taborder("11");_a.set_text("상세코드");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("Edt_CODE","absolute","41.55%","618",null,"21","43.81%",null,this);_a.set_taborder("12");_a.set_maxlength("6");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","31.73%","641",null,"27","58.83%",null,this);_a.set_taborder("13");_a.set_text("상세코드명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("Edt_CODE_NM","absolute","41.55%","644",null,"21","20.11%",null,this);_a.set_taborder("14");_a.set_maxlength("100");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","31.73%","666",null,"27","58.83%",null,this);_a.set_taborder("17");_a.set_text("IT분류코드");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new CheckBox("Chk_USE_AT","absolute","41.74%","696",null,"21","46.93%",null,this);_a.set_taborder("18");_a.set_text("사용");_a.set_value("1");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_cssclass("chk_WF_Essential");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","31.73%","589",null,"27","58.83%",null,this);_a.set_taborder("19");_a.set_text("월점검항목");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("Edt_CHRCTR_PREPAR_VALUE_0","absolute","41.55%","592","70","21",null,null,this);_a.set_taborder("29");_a.set_cssclass("edt_W_Essential");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","31.73%","693",null,"27","58.83%",null,this);_a.set_taborder("43");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("Edt_CHRCTR_PREPAR_VALUE_1","absolute","41.55%","670",null,"21","20.11%",null,this);_a.set_taborder("48");_a.set_maxlength("100");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","347",null,"21","87.72%",null,this);_a.set_taborder("49");_a.set_text("IT분류코드");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","0.19%","366",null,"10","69.59%",null,this);_a.set_taborder("50");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","0%","371",null,null,"69.59%","14",this);_a.set_taborder("51");_a.set_binddataset("ds_itcode");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"221\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"코드\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:IT_CODE\"/><Cell col=\"1\" text=\"bind:IT_CODE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute","78.47%","1",null,"19","15.49%",null,this);_a.set_taborder("52");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_Add_Row","absolute","84.7%","1",null,"19","9.25%",null,this);_a.set_taborder("53");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_Del_Row","absolute","90.93%","1",null,"19","3.02%",null,this);_a.set_taborder("54");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Radio("rdo_useAt","absolute","7.84%","4",null,"21","76.2%",null,this);this.addChild(_a.name,_a);var _b=new Dataset("rdo_useAt_innerdataset",this.rdo_useAt);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("57");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("1");_a=new Radio("rdo_useAt1","absolute","42.59%","4",null,"21","41.45%",null,this);this.addChild(_a.name,_a);var _c=new Dataset("rdo_useAt1_innerdataset",this.rdo_useAt1);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("58");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("1");_a=new Layout("default","",1059,735,this,function(_d){_d.set_classname("codeMng");_d.set_titletext("월점검항목관리");});this.addLayout(_a.name,_a);_a=new BindItem("item9","Edt_CODE","value","ds_detail","CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Edt_CODE_NM","value","ds_detail","CODE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Chk_USE_AT","value","ds_detail","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Chk_USE_AT","truevalue","1","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","Chk_USE_AT","falsevalue","0","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","Edt_CHRCTR_PREPAR_VALUE_0","value","ds_detail","CHRCTR_PREPAR_VALUE_0");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Edt_CHRCTR_PREPAR_VALUE_1","value","ds_detail","CHRCTR_PREPAR_VALUE_1");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM040100.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM040100.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM040100.xfdl",function(){this.ITM040100_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM040100_onload=function(_a,_b){this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){var _a=[{OUT_PUT:"ds_prposSe",GRP_CODE:"ITM004",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_a);};this.fn_search=function(){this.fn_transaction("selectList");this.fn_transaction("selectITList");};this.fn_transaction=function(_a){switch(_a){case "selectList":this.ds_cond.addRow();var _b="/hsco/etc/itm/ITM040100/ITM040100List.do";var _c="input1=ds_cond";var _d="ds_grid=output1";this.ds_cond.setColumn(0,"GRP_CODE","ITM004");this.ds_cond.setColumn(0,"USE_AT",this.rdo_useAt.value);break;case "selectList1":this.ds_cond1.addRow();var _b="/hsco/etc/itm/ITM040100/ITM040100List.do";var _c="input1=ds_cond1";var _d="ds_detail=output1";this.ds_cond1.setColumn(0,"GRP_CODE","ITM005");this.ds_cond1.setColumn(0,"CHRCTR_PREPAR_VALUE_0",this.ds_grid.getColumn(this.ds_grid.rowposition,"CODE"));this.ds_cond1.setColumn(0,"USE_AT",this.rdo_useAt1.value);break;case "selectITList":var _b="/hsco/etc/itm/ITM040100/ITM040100ITList.do";var _c="input1=''";var _d="ds_itcode=output1";break;case "saveList":var _b="/hsco/etc/itm/ITM040100/ITM040100CUD.do";var _e="input1=ds_grid:U";var _c=_e;var _d="";break;case "saveList1":var _b="/hsco/etc/itm/ITM040100/ITM040100CUD.do";var _e="input1=ds_detail:U";var _c=_e;var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.btn_excel_down01_onclick=function(_a,_b){this.gfn_exportExcel(this.Grid02,"exportExl");};this.Grid02_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.ds_grid_onrowposchanged=function(_a,_b){this.ds_detail.clearData();if(this.ds_grid.getRowType(this.ds_grid.rowposition)!='2'){if(this.ds_grid.rowcount>0){this.fn_transaction("selectList1");}}};this.fn_insert=function(_a,_b){if(this.fn_check()){var _c=this.ds_grid.getRowType(this.ds_grid.rowposition);var _d=this.ds_grid.addRow();this.ds_grid.setColumn(this.ds_grid.rowposition,"GRP_CODE_SN",'2005');this.ds_grid.setColumn(this.ds_grid.rowposition,"GRP_CODE",'ITM004');this.ds_grid.setColumn(this.ds_grid.rowposition,"OLD_GRP_CODE",'004');this.ds_grid.setColumn(this.ds_grid.rowposition,"USE_AT",'1');}};this.fn_delete=function(_a,_b){if(this.ds_detail.getRowCount()>0){alert('하위데이터가 있습니다. \n하위데이터를 삭제후 삭제하세요.');return false;}var _c=this.ds_grid.rowposition;var _d=this.ds_grid.getRowType(_c);this.ds_grid.deleteRow(_c);};this.fn_check=function(){var _a="";var _b="";var _c=this.ds_grid.rowposition;trace("nRow ="+_c);if(_c> -1){ck1=this.ds_grid.getColumn(_c,"CODE");ck2=this.ds_grid.getColumn(_c,"CODE_NM");if(!ck1){alert("코드는 필수입력 사항입니다.");return false;}else if(!ck2){alert("코드명은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grid)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check()){this.fn_transaction("saveList");}}};this.btn_Add_Row_onclick=function(_a,_b){var _c=this.ds_grid.getRowCount();if(_c==0){alert('조회후 신규를 선택하세요.');return false;}if(this.fn_check_detail()){this.ds_detail.addRow();this.ds_detail.setColumn(this.ds_detail.rowposition,"GRP_CODE_SN",'2006');this.ds_detail.setColumn(this.ds_detail.rowposition,"GRP_CODE",'ITM005');this.ds_detail.setColumn(this.ds_detail.rowposition,"OLD_GRP_CODE",'005');this.ds_detail.setColumn(this.ds_detail.rowposition,"CHRCTR_PREPAR_VALUE_0",this.ds_grid.getColumn(this.ds_grid.rowposition,"CODE"));this.ds_detail.setColumn(this.ds_detail.rowposition,"USE_AT",'1');}};this.btn_Del_Row_onclick=function(_a,_b){var _c=this.ds_detail.rowposition;var _d=this.ds_detail.getRowType(_c);this.ds_detail.deleteRow(_c);};this.fn_check_detail=function(){var _a="";var _b="";var _c=this.ds_detail.rowposition;trace("Detail_nRow ="+_c);if(_c> -1){ck1=this.ds_detail.getColumn(_c,"CODE");ck2=this.ds_detail.getColumn(_c,"CODE_NM");if(!ck1){alert("코드는 필수입력 사항입니다.");return false;}else if(!ck2){alert("코드명은 필수입력 사항입니다.");return false;}else{return true;}return true;}else{return true;}};this.btn_Save_onclick=function(_a,_b){if(!this.comUtils.isDatasetUpdated(this.ds_detail)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check_detail()){this.fn_transaction("saveList1");}}};this.rdo_useAt_onitemchanged=function(_a,_b){this.fn_transaction("selectList");};this.rdo_useAt1_onitemchanged=function(_a,_b){this.fn_transaction("selectList1");};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.addEventHandler("onload",this.ITM040100_onload,this);this.addEventHandler("oninit",this.ITM040100_oninit,this);this.Grid02.addEventHandler("onheadclick",this.Grid02_onheadclick,this);this.btn_excel_down01.addEventHandler("onclick",this.btn_excel_down01_onclick,this);this.Grid00.addEventHandler("onheadclick",this.Grid02_onheadclick,this);this.Grid01.addEventHandler("onheadclick",this.Grid02_onheadclick,this);this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);this.btn_Add_Row.addEventHandler("onclick",this.btn_Add_Row_onclick,this);this.btn_Del_Row.addEventHandler("onclick",this.btn_Del_Row_onclick,this);this.rdo_useAt.addEventHandler("onitemchanged",this.rdo_useAt_onitemchanged,this);this.rdo_useAt1.addEventHandler("onitemclick",this.rdo_useAt1_onitemclick,this);this.rdo_useAt1.addEventHandler("onitemchanged",this.rdo_useAt1_onitemchanged,this);};this.loadIncludeScript("ITM040100.xfdl");};})();