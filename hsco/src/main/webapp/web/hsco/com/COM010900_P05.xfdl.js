﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("COM010900_P05");this.set_classname("COM010900_P05");this.set_titletext("카드별 세부내역 조회");this._setFormPosition(0,0,1000,500);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dataM",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_CMPNY\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_CMPNY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dataD",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"APPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHAIN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REAL_USER\" type=\"STRING\" size=\"256\"/><Column id=\"PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITNC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","15",null,null,"15","15",this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_pbncd","absolute","0","30",null,null,"0","261",this.div_pop);_a.set_taborder("0");_a.set_binddataset("ds_dataM");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"카드사명\"/><Cell col=\"3\" text=\"카드명\"/><Cell col=\"4\" text=\"카드번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:CARD_CMPNY_NM\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CARD_NM\" tooltiptext=\"bind:CARD_NM\"/><Cell col=\"4\" text=\"bind:CARD_NO\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search00","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("2");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Close00","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("3");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","25","738","5",null,null,this.div_pop);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Grid("grd_pbncd00","absolute","0","236",null,null,"0","0",this.div_pop);_a.set_taborder("5");_a.set_binddataset("ds_dataD");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"승인일자\"/><Cell col=\"2\" text=\"승인시간\"/><Cell col=\"3\" text=\"가맹점\"/><Cell col=\"4\" text=\"사업자번호\"/><Cell col=\"5\" text=\"승인금액\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"사용내용\"/><Cell col=\"8\" text=\"결의번호\"/><Cell col=\"9\" text=\"결의일자\"/><Cell col=\"10\" text=\"결의자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:APPR_TIME\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CHAIN_NM\" tooltiptext=\"bind:CHAIN_NM\"/><Cell col=\"4\" text=\"bind:CHAIN_ID\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:APPR_AMT\"/><Cell col=\"6\" text=\"bind:REAL_USER\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:PRVONSH\" tooltiptext=\"bind:PRVONSH\"/><Cell col=\"8\" text=\"bind:DECSN_NO\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:ITNC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:DECSN_USER\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_tbfunDpstAcnutList00","absolute","0","214","185","19",null,null,this.div_pop);_a.set_taborder("6");_a.set_text("법인카드 사용내역 리스트");_a.set_cssclass("sta_WF_Title02");this.div_pop.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","231",null,"5","0",null,this.div_pop);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_tbfunDpstAcnutList01","absolute","0","5","185","19",null,null,this.div_pop);_a.set_taborder("8");_a.set_text("법인카드 현황 리스트");_a.set_cssclass("sta_WF_Title02");this.div_pop.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_pop,function(_b){_b.set_taborder("0");_b.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",1000,500,this,function(_b){_b.set_classname("COM010900_P05");_b.set_titletext("카드별 세부내역 조회");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("COM010900_P05.xfdl","lib::comInclude.xjs");this.addIncludeScript("COM010900_P05.xfdl","mis_lib::misUtil.xjs");this.registerScript("COM010900_P05.xfdl",function(){this.fv_objForm;this.COM010900_P05_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.COM010900_P05_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"EMPNO",this.parent.arg_1);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.ds_cond);};this.fn_search=function(){this.fn_transaction("selectM");};this.fn_transaction=function(_a){switch(_a){case "selectM":var _b="hsco/com/sttus/selectTemp7Popup01Master.do";var _c="input1=ds_cond";var _d="ds_dataM=output1";break;case "selectD":var _b="hsco/com/sttus/selectTemp7Popup01Detail.do";var _c="input1=ds_cond";var _d="ds_dataD=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectM":break;case "selectD":break;}}};this.div_pop_grd_pbncd_onheadclick=function(_a,_b){LGV_COL_SORT=_b.col;this._gridSort(_a,_b);};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Close_onclick=function(_a,_b){this.close();};this.ds_dataM_onrowposchanged=function(_a,_b){var _c=_a.getColumn(_b.newrow,"CARD_NO");this.ds_cond.setColumn(0,"CARD_NO",_c);this.fn_transaction("selectD");};});this.on_initEvent=function(){this.ds_dataM.addEventHandler("onrowposchanged",this.ds_dataM_onrowposchanged,this);this.addEventHandler("oninit",this.COM010900_P05_oninit,this);this.addEventHandler("onload",this.COM010900_P05_onload,this);this.div_pop.grd_pbncd.addEventHandler("onheadclick",this.div_pop_grd_pbncd_onheadclick,this);this.div_pop.btn_Search00.addEventHandler("onclick",this.btn_Search_onclick,this);this.div_pop.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_pop.grd_pbncd00.addEventHandler("onheadclick",this.div_pop_grd_pbncd_onheadclick,this);};this.loadIncludeScript("COM010900_P05.xfdl");};})();