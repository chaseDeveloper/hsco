﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM070100");this.set_classname("codeMng");this.set_titletext("SLA 항목");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"GRP_CODE_SN\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"255\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SLA_EVL_YEAR\" type=\"STRING\" size=\"4\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_grid02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"GRP_CODE_SN\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"255\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_grid03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SLA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"SLA_CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SLA_ALLOT\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"SLA_WGHTVAL\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"SLA_UNIT\" type=\"STRING\" size=\"3\"/><Column id=\"SLA_EVL_TOP_EXCLNC\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"SLA_EVL_EXCLNC\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"SLA_EVL_NRMLTY\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"SLA_EVL_INSFFC\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"SLA_EVL_BADN\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"RM\" type=\"STRING\" size=\"255\"/><Column id=\"SLA_EVL_YEAR\" type=\"STRING\" size=\"4\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dgit",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","0",null,"10","2.64%",null,this);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","0%","11","100","21",null,null,this);_a.set_taborder("1");_a.set_text("SLA평가기준");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","514","11","98","21",null,null,this);_a.set_taborder("2");_a.set_text("SLA단위");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","48.54%","29","500","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","0%","29","500","5",null,null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","34","505","158",null,null,this);_a.set_taborder("7");_a.set_binddataset("ds_grid");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"232\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"코드\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"코드명\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"점수\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:CODE\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:CODE_NM\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:INTGR_PREPAR_VALUE\"/><Cell col=\"3\" edittype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","47.59%","20",null,"158","51.46%",null,this);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","200",null,"33","2.64%",null,this);_a.set_taborder("10");_a.set_cssclass("div_WFSA_Box");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","6","63","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("기준년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bsisDtaCreat","absolute","215","6","100","19",null,null,this.div_search);_a.set_taborder("24");_a.set_text("기초자료생성");_a.set_cssclass("btn_WF_Link");this.div_search.addChild(_a.name,_a);_a=new Button("btn_iemManage","absolute","320","6","80","19",null,null,this.div_search);_a.set_taborder("25");_a.set_text("항목관리");_a.set_cssclass("btn_WF_Link");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_stdrYear","absolute","79","5","72","22",null,null,this.div_search);_a.set_taborder("27");_a.set_value("1900");_a.set_max("2999");_a.set_min("1900");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Grid("grd2","absolute","0%","268",null,null,"2.64%","7",this);_a.set_taborder("13");_a.set_binddataset("ds_grid03");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"font:9 돋움;\" text=\"구분\"/><Cell col=\"2\" colspan=\"3\"/><Cell col=\"5\" colspan=\"5\" style=\"font:9 돋움;\" text=\"평가기준\"/><Cell col=\"10\"/><Cell row=\"1\" style=\"font:9 돋움;\" text=\"코드\"/><Cell row=\"1\" col=\"1\" style=\"font:9 돋움;\" text=\"평가항목\"/><Cell row=\"1\" col=\"2\" style=\"font:9 돋움;\" text=\"배점\"/><Cell row=\"1\" col=\"3\" style=\"font:9 돋움;\" text=\"가중치\"/><Cell row=\"1\" col=\"4\" style=\"font:9 돋움;\" text=\"단위\"/><Cell row=\"1\" col=\"5\" style=\"font:9 돋움;\" text=\"S학점\"/><Cell row=\"1\" col=\"6\" style=\"font:9 돋움;\" text=\"A우수\"/><Cell row=\"1\" col=\"7\" style=\"font:9 돋움;\" text=\"B보통\"/><Cell row=\"1\" col=\"8\" style=\"font:9 돋움;\" text=\"C미흡\"/><Cell row=\"1\" col=\"9\" style=\"font:9 돋움;\" text=\"D불량\"/><Cell row=\"1\" col=\"10\" style=\"font:9 돋움;\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"background:darkgray;background2:darkgray;\" text=\"bind:SLA_CODE\"/><Cell col=\"1\" edittype=\"none\" style=\"background:darkgray;background2:darkgray;\" text=\"bind:SLA_CODE_NM\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"background:darkgray;background2:darkgray;\" text=\"bind:SLA_ALLOT\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"background:darkgray;background2:darkgray;\" text=\"bind:SLA_WGHTVAL\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" style=\"background:darkgray;background2:darkgray;\" text=\"bind:SLA_UNIT\" combodataset=\"ds_dgit\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"number\" text=\"bind:SLA_EVL_TOP_EXCLNC\" editlimit=\"3\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"number\" text=\"bind:SLA_EVL_EXCLNC\" editlimit=\"3\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"number\" text=\"bind:SLA_EVL_NRMLTY\" editlimit=\"3\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"number\" text=\"bind:SLA_EVL_INSFFC\" editlimit=\"3\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"number\" text=\"bind:SLA_EVL_BADN\" editlimit=\"3\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd1","absolute","514","34","517","158",null,null,this);_a.set_taborder("14");_a.set_binddataset("ds_grid02");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"249\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"코드\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"코드명\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"점수\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:CODE\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:CODE_NM\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:INTGR_PREPAR_VALUE\"/><Cell col=\"3\" edittype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","190",null,"10","2.64%",null,this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","233",null,"10","2.64%",null,this);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDown01","absolute",null,"243","26","19","28",null,this);_a.set_taborder("17");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("btn_excelDown00","absolute","1004","10","28","19",null,null,this);_a.set_taborder("18");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("btn_excelDown02","absolute","478","10","26","19",null,null,this);_a.set_taborder("19");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","49.29%","262",null,"5","3.49%",null,this);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("10");_b.set_cssclass("div_WFSA_Box");_b.set_scrollbars("none");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("codeMng");_b.set_titletext("SLA 항목");});this.addLayout(_a.name,_a);_a=new BindItem("item1","Div01.edt_EAYEAR","value","ds_cond","EA_YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM070100.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM070100.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM070100.xfdl",function(){this.ITM070100_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM070100_onload=function(_a,_b){var _c=this.Today().substr(0,4);this.div_search.spn_stdrYear.set_value(_c);this.fn_getCode();this.ds_cond.clearData();var _d=this.ds_cond.addRow();this.ds_cond.setColumn(_d,"SLA_EVL_YEAR",_c);this.fn_search();};this.Today=function(){var _a="";var _b=new Date();var _a=_b.getFullYear()+"";var _c=_b.getMonth()+1;var _d=_b.getDate();if(_c.toString().length==1){_c="0"+_c;}if(_d.toString().length==1){_d="0"+_d;}_a=_a+_c+_d;return _a;};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_getCode=function(){this.gfn_initCondDs(this,this.div_search);var _a=[['ds_dgit','ITMS02','Y','D','G']];var _b=function(_c,_d,_e){};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){if(this.div_search.spn_stdrYear.value==''){alert('기준년도를 입력 하세요.');return false;}this.ds_grid.clearData();this.fn_transaction("selectList");this.fn_transaction("selectTab2List");this.fn_transaction("selectTab3List");};this.fn_transaction=function(_a){this.ds_cond.setColumn(0,"SLA_EVL_YEAR",this.div_search.spn_stdrYear.value);switch(_a){case "selectList":var _b="/hsco/etc/itm/ITM070100/ITM070100List.do";var _c="input1=ds_cond";var _d="ds_grid=output1";break;case "selectTab2List":var _b="/hsco/etc/itm/ITM070100/ITM070100Tab2List.do";var _c="input1=ds_cond";var _d="ds_grid02=output1";break;case "selectTab3List":var _b="/hsco/etc/itm/ITM070100/ITM070100Tab3List.do";var _c="input1=ds_cond";var _d="ds_grid03=output1";break;case "saveList":var _b="/hsco/etc/itm/ITM070100/ITM070100CUD.do";var _e="input1=ds_grid:U";var _c=_e;var _d="";break;case "saveTab2List":var _b="/hsco/etc/itm/ITM070100/ITM070100Tab2CUD.do";var _e="input1=ds_grid02:U";var _c=_e;var _d="";break;case "saveTab3List":var _b="/hsco/etc/itm/ITM070100/ITM070100Tab3CUD.do";var _e="input1=ds_grid03:U";var _c=_e;var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":this.gfn_callBackMsg(_a,_b,_c);this.fn_transaction("selectList");break;case "saveTab2List":this.gfn_callBackMsg(_a,_b,_c);break;case "saveTab3List":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_grid)&&!this.comUtils.isDatasetUpdated(this.ds_grid02)&&!this.comUtils.isDatasetUpdated(this.ds_grid03)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){this.fn_transaction("saveList");this.fn_transaction("saveTab2List");this.fn_transaction("saveTab3List");}};this.div_search_Button00_onclick=function(_a,_b){this.fn_Popup(this,800,600,"SLA항목등록","etc_itm::ITM070100_P01.xfdl");};this.fn_Popup=function(_a,_b,_c,_d,_e,_f){var _g=new ChildFrame;_g.init("popup","absolute",0,0,_b,_c,null,null,_e);_g.set_titletext(_d);_g.set_showtitlebar(false);_g.set_autosize(true);_g.set_resizable(false);_g.set_openalign("center middle");_g.set_showtitlebar(true);_g.showModal("",this.getOwnerFrame(),_f,_a,"fn_PopupCallback",false);};this.btn_excel_down01_onclick=function(_a,_b){this.gfn_exportExcel(this.grd2,"exportExl");};this.btn_excel_down00_onclick=function(_a,_b){this.gfn_exportExcel(this.grd1,"exportExl");};this.btn_excel_down02_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};this.grd_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.Grid02_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.Grid01_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_search_btn_copy_onclick=function(_a,_b){if(application.confirm("기존데이타 삭제 후 복사 됩니다. 작업을 진행 하시겠습니까?")){var _c="/hsco/etc/itm/ITM070100/ITM070100Tab3P.do";var _d="input1=ds_cond";var _e="";this.ds_cond.setColumn(0,"SLA_EVL_YEAR",this.div_search.spn_stdrYear.value);Ex.core.tran(this,"copy",_c,_d,_e);this.fn_transaction("selectTab3List");}};this.div_search_spn_stdrYear_onspin=function(_a,_b){};});this.on_initEvent=function(){this.addEventHandler("oninit",this.ITM070100_oninit,this);this.addEventHandler("onload",this.ITM070100_onload,this);this.grd.addEventHandler("onheadclick",this.Grid02_onheadclick,this);this.div_search.btn_bsisDtaCreat.addEventHandler("onclick",this.div_search_btn_copy_onclick,this);this.div_search.btn_iemManage.addEventHandler("onclick",this.div_search_Button00_onclick,this);this.div_search.spn_stdrYear.addEventHandler("onspin",this.div_search_spn_stdrYear_onspin,this);this.grd2.addEventHandler("onheadclick",this.grd_onheadclick,this);this.grd1.addEventHandler("onheadclick",this.Grid01_onheadclick,this);this.btn_excelDown01.addEventHandler("onclick",this.btn_excel_down01_onclick,this);this.btn_excelDown00.addEventHandler("onclick",this.btn_excel_down00_onclick,this);this.btn_excelDown02.addEventHandler("onclick",this.btn_excel_down02_onclick,this);};this.loadIncludeScript("ITM070100.xfdl");};})();