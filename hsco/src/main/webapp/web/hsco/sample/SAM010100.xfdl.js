﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAM010100");this.set_classname("SAM010100");this.set_titletext("Naming & Coding Sample");this._setFormPosition(0,0,1039,799);}_a=new Dataset("DS_COND",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"fromDate\" type=\"STRING\" size=\"256\"/><Column id=\"toDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_COND_0",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("DS_COND_1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("DS_OUTPUT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("DS_EXCEL",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">5</Col><Col id=\"Column5\">6</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column4\">6</Col><Col id=\"Column5\">7</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">5</Col><Col id=\"Column3\">6</Col><Col id=\"Column4\">7</Col><Col id=\"Column5\">8</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">6</Col><Col id=\"Column3\">7</Col><Col id=\"Column4\">8</Col><Col id=\"Column5\">9</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">6</Col><Col id=\"Column2\">7</Col><Col id=\"Column3\">8</Col><Col id=\"Column4\">9</Col><Col id=\"Column5\">10</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_GRIDCHK",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">2</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_SEARCH","absolute","192","9","100","22",null,null,this);_a.set_taborder("0");_a.set_text("검색조건");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");_a.style.set_border("0 none #808080ff");_a.style.set_padding("0 0 0 22");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_SEARCH_00","absolute","192","41","100","22",null,null,this);_a.set_taborder("1");_a.set_text("검색조건");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");_a.style.set_border("0 none #808080ff");_a.style.set_padding("0 0 0 22");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_SEARCH_01","absolute","296","41","100","22",null,null,this);_a.set_taborder("2");_a.set_text("검색조건");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");_a.style.set_border("0 none #808080ff");_a.style.set_padding("0 0 0 22");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Button("btn_SAMPLE","absolute","192","104","89","32",null,null,this);_a.set_taborder("3");_a.set_text("버튼 1");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Button("btn_SAMPLE2_00","absolute","192","144","89","32",null,null,this);_a.set_taborder("4");_a.set_text("버튼 1");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Button("btn_SAMPLE2_01","absolute","288","144","89","32",null,null,this);_a.set_taborder("5");_a.set_text("버튼 2");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Button("btn_SAMPLE2_02","absolute","384","144","89","32",null,null,this);_a.set_taborder("6");_a.set_text("버튼 3");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_00","absolute","8","9","176","22",null,null,this);_a.set_taborder("7");_a.set_text(" > 컴포넌트 Naming (개별)");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_01","absolute","8","41","176","22",null,null,this);_a.set_taborder("8");_a.set_text(" > 컴포넌트 Naming (연속)");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_02","absolute","8","104","176","32",null,null,this);_a.set_taborder("9");_a.set_text(" > 이벤트 함수 (개별)");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_03","absolute","8","144","176","32",null,null,this);_a.set_taborder("10");_a.set_text(" > 이벤트 함수 (공통 사용)");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_04","absolute","8","216","176","32",null,null,this);_a.set_taborder("11");_a.set_text(" > 팝업 샘플");this.addChild(_a.name,_a);_a=new Button("btn_POPUP","absolute","192","216","89","32",null,null,this);_a.set_taborder("12");_a.set_text("팝업 샘플");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_05","absolute","8","272","176","32",null,null,this);_a.set_taborder("13");_a.set_text(" > Grid Sort");this.addChild(_a.name,_a);_a=new Grid("grd_EXCEL","absolute","192","272","492","155",null,null,this);_a.set_taborder("14");_a.set_binddataset("DS_EXCEL");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_06","absolute","8","440","176","32",null,null,this);_a.set_taborder("15");_a.set_text(" > Message Popup");this.addChild(_a.name,_a);_a=new Button("btn_MESSAGE","absolute","192","440","89","32",null,null,this);_a.set_taborder("16");_a.set_text("Message");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_GUBUN_07","absolute","8","496","176","32",null,null,this);_a.set_taborder("17");_a.set_text(" > Grid (Un)Check All");this.addChild(_a.name,_a);_a=new Grid("grd_GRIDCHK","absolute","192","496","255","107",null,null,this);_a.set_taborder("18");_a.set_binddataset("DS_GRIDCHK");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_ROWTYPE","absolute","456","496","113","32",null,null,this);_a.set_taborder("19");_a.set_text("RowType 확인");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_COMMENT_00","absolute","456","538","228","81",null,null,this);_a.set_taborder("20");_a.set_text("* 첫번째 Row의 상태를 확인할수 있다. (1 : Normal, 2 : Insert, 4 : Update, 8 : Delete)\r\n*수정을 한 후, 원래의 값을 다시 입력하면, Row의 상태는 Normal로 바뀐다.");_a.set_wordwrap("char");_a.style.set_align("left top");this.addChild(_a.name,_a);_a=new Layout("default","",1039,799,this,function(_b){_b.set_classname("SAM010100");_b.set_titletext("Naming & Coding Sample");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAM010100.xfdl","lib::comInclude.xjs");this.registerScript("SAM010100.xfdl",function(){this.fv_strTest;this.fv_numTest;this.fv_vTest;this.SAM010100_onload=function(_a,_b){};this.SAM010100_onsize=function(_a,_b){};this.fn_search=function(){var _a="sexdstnCode";var _b="hsco/cmm/cmmCode/cmmCodeList.do";var _c="DS_COND=DS_COND";var _d="DS_OUTPUT=DS_OUTPUT";var _e="";var _f=this.DS_COND.addRow();this.DS_COND.setColumn(_f,"fromDate","20150101");this.DS_COND.setColumn(_f,"toDate","20150131");Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_save=function(){var _a="save";var _b="hsco/com/sym/usm/SYM010100/SYM010100CUD.do";var _c="DS_USER=DS_USER:U";var _d="";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b<0){return ExtNx.core.comMsg("alert",_c);}if(_a=="sexdstnCode"){}else if(_a=="save"){}else{}};this.btn_SAMPLE_onclick=function(_a,_b){var _c;_c=this.fn_add_date("20150708",10);alert(_c);};this.btn_SAMPLE2_onclick=function(_a,_b){switch(_a.name){case "btn_SAMPLE2_00":break;case "btn_SAMPLE2_01":break;case "btn_SAMPLE2_02":break;}};this.btn_POPUP_onclick=function(_a,_b){var _c={arg_1:"parm Test",arg_2:5,arg_3:this.DS_EXCEL};this.gfn_popup("Popup_0",800,600,"popup Title",_c,"sample::Sample_00_P00.xfdl","fn_popup_0_callback");};this.fn_popup_0_callback=function(_a,_b){if(Eco.isNull(_b)||Eco.isUndefined(_b)){return;}else{alert("Popup 0");}};this.grd_EXCEL_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.btn_MESSAGE_onclick=function(_a,_b){this.gfn_message("AA|BB","CO","fail.common.sql");};this.grd_GRIDCHK_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}};this.grd_GRIDCHK_oncellclick=function(_a,_b){if(_b.cell==0){_a.setCellProperty("Head",_b.cell,"text","0");}};this.btn_ROWTYPE_onclick=function(_a,_b){var _c=this.DS_GRIDCHK.getRowType(0);alert(_c);};this.fn_add_date=function(_a,_b){var _c;_c=this.gfn_addDate(_a,_b,"D");return _c;};});this.on_initEvent=function(){this.addEventHandler("onload",this.SAM010100_onload,this);this.addEventHandler("onsize",this.SAM010100_onsize,this);this.btn_SAMPLE.addEventHandler("onclick",this.btn_SAMPLE_onclick,this);this.btn_SAMPLE2_00.addEventHandler("onclick",this.btn_SAMPLE2_onclick,this);this.btn_SAMPLE2_01.addEventHandler("onclick",this.btn_SAMPLE2_onclick,this);this.btn_SAMPLE2_02.addEventHandler("onclick",this.btn_SAMPLE2_onclick,this);this.btn_POPUP.addEventHandler("onclick",this.btn_POPUP_onclick,this);this.grd_EXCEL.addEventHandler("onheadclick",this.grd_EXCEL_onheadclick,this);this.btn_MESSAGE.addEventHandler("onclick",this.btn_MESSAGE_onclick,this);this.grd_GRIDCHK.addEventHandler("onheadclick",this.grd_GRIDCHK_onheadclick,this);this.grd_GRIDCHK.addEventHandler("oncellclick",this.grd_GRIDCHK_oncellclick,this);this.btn_ROWTYPE.addEventHandler("onclick",this.btn_ROWTYPE_onclick,this);};this.loadIncludeScript("SAM010100.xfdl");};})();