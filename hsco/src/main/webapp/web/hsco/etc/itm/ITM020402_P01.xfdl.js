﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM020402_P01");this.set_classname("codeMng");this.set_titletext("IP 현황");this._setFormPosition(0,0,500,500);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"IP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IP_USE_TRGET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"S_WORD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","0",null,"500","0%",null,this);_a.set_taborder("3");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0.4%","2",null,"34","0.4%",null,this);_a.set_taborder("4");_a.set_text("IP 현황 - 기타 IP 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0.4%","2",null,"496","96.6%",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","93.6%","8",null,"20","2.4%",null,this);_a.set_taborder("6");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","96.6%","2",null,"496","0.4%",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0.4%","36",null,"15","0.4%",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0.4%","483",null,"15","0.4%",null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button50","absolute","88.6%","460",null,"23","3.4%",null,this);_a.set_taborder("10");_a.set_text("취소");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0.4%","450",null,"10","0.4%",null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","3.4%","76",null,"5","3.4%",null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","3.4%","178",null,"10","3.4%",null,this);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","3.4%","214",null,"236","3.4%",null,this);_a.set_taborder("23");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_binddataset("ds_grid");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"155\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"IP\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"사용대상\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:IP_NO\"/><Cell col=\"1\" text=\"bind:IP_USE_TRGET_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","88%","460",null,"24","11.4%",null,this);_a.set_taborder("26");_a.set_text("3");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","3.4%","53",null,"21","57.2%",null,this);_a.set_taborder("27");_a.set_text("기타 IP 등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("Div01","absolute","3.4%","81",null,"33","3.4%",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","3.23%","5",null,"21","77.37%",null,this.Div01);_a.set_taborder("1");_a.set_text("IP");_a.set_cssclass("sta_WFSA_Label");this.Div01.addChild(_a.name,_a);_a=new Edit("edt_ipNo","absolute","22.63%","5",null,"21","2.16%",null,this.Div01);_a.set_taborder("0");this.Div01.addChild(_a.name,_a);_a=new Div("Div00","absolute","3.4%","113",null,"33","3.4%",null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","3.23%","5",null,"21","77.37%",null,this.Div00);_a.set_taborder("1");_a.set_text("사용대상");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_ipUseTrgetNm","absolute","22.63%","5",null,"21","2.16%",null,this.Div00);_a.set_taborder("0");this.Div00.addChild(_a.name,_a);_a=new Div("Div02","absolute","3.4%","145",null,"33","3.4%",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","3.23%","5",null,"21","77.37%",null,this.Div02);_a.set_taborder("1");_a.set_text("비고");_a.set_cssclass("sta_WFSA_Label");this.Div02.addChild(_a.name,_a);_a=new Edit("edt_rm","absolute","22.63%","5",null,"21","2.16%",null,this.Div02);_a.set_taborder("0");this.Div02.addChild(_a.name,_a);_a=new Button("Button05","absolute",null,"51","50","25","176",null,this);_a.set_taborder("31");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button04","absolute",null,"51","50","25","123",null,this);_a.set_taborder("32");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button23","absolute",null,"51","50","25","14%",null,this);_a.set_taborder("34");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button02","absolute",null,"51","50","25","17",null,this);_a.set_taborder("35");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_excelDown","absolute",null,"190","28","21","17",null,this);_a.set_taborder("36");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.Div01,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.Div01.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.Div00,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",0,33,this.Div02,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.Div02.addLayout(_a.name,_a);_a=new Layout("default","",500,500,this,function(_b){_b.set_classname("codeMng");_b.set_titletext("IP 현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","Div01.edt_ipNo","value","ds_grid","IP_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.edt_ipUseTrgetNm","value","ds_grid","IP_USE_TRGET_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div02.edt_rm","value","ds_grid","RM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM020402_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM020402_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM020402_P01.xfdl",function(){this.ITM020402_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM020402_P01_onload=function(_a,_b){this.fn_transaction("selectList");};this.fn_getCode=function(){this.gfn_initCondDs(this,this.div_search);var _a=[];var _b=function(_c,_d,_e){};this.gfn_comboLoad(_a,_b);};this.fn_init_form=function(){this.gfn_initForm(this);this.checkDs.push(this.ds_grid);};this.fn_init_dataset=function(){};this.fn_transaction=function(_a){switch(_a){case "selectList":this.ds_cond.addRow();var _b="/hsco/etc/itm/ITM020402P1/ITM020402P1List.do";var _c="";var _d="ds_grid=output1";break;case "saveList":var _b="/hsco/etc/itm/ITM020402P1/ITM020402P1CUD.do";var _e="input1=ds_grid:U";var _c=_e;var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}};this.Button05_onclick=function(_a,_b){this.fn_transaction("selectList");};this.Button04_onclick=function(_a,_b){var _c=this.ds_grid.getRowType(this.ds_grid.rowposition);var _d=this.ds_grid.addRow();};this.Button23_onclick=function(_a,_b){if(!this.comUtils.isDatasetUpdated(this.ds_grid)){alert("저장할 내역이 없습니다.");return false;}if(application.confirm("변경된 내용을 저장하시겠습니까?")){for(var _e=0;_e<this.ds_grid.getRowCount();_e++ ){var _c=this.ds_grid.getColumn(_e,'IP_NO');var _d;if(_c=="undefined"||_c==undefined){_d='Y';}if(_d=='Y'){alert(_e+"열에 값이 없습니다. \n 값입력 후 저장하세요.");return false;}}this.fn_transaction("saveList");}};this.Button02_onclick=function(_a,_b){var _c=this.ds_grid.rowposition;var _d=this.ds_grid.getRowType(_c);this.ds_grid.deleteRow(_c);};this.Button00_onclick=function(_a,_b){this.close();};this.btn_excel_down_onclick=function(_a,_b){this.gfn_exportExcel(this.Grid01,"exportExl");};this.Grid01_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.addEventHandler("onload",this.ITM020402_P01_onload,this);this.addEventHandler("oninit",this.ITM020402_P01_oninit,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.Button50.addEventHandler("onclick",this.Button00_onclick,this);this.Grid01.addEventHandler("onheadclick",this.Grid01_onheadclick,this);this.Button05.addEventHandler("onclick",this.Button05_onclick,this);this.Button04.addEventHandler("onclick",this.Button04_onclick,this);this.Button23.addEventHandler("onclick",this.Button23_onclick,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.btn_excelDown.addEventHandler("onclick",this.btn_excel_down_onclick,this);};this.loadIncludeScript("ITM020402_P01.xfdl");};})();