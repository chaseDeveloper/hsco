﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM040302_P01");this.set_classname("HRM040302_P01");this.set_titletext("포상선택");this._setFormPosition(0,0,430,450);}_a=new Dataset("ds_rwardDtlsList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PZDCR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WNPZ_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNFER_INSTT\" type=\"STRING\" size=\"256\"/><Column id=\"WNPZ_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"RUDCT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"WNPZ_DE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("3");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","67",null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","119",null,this);_a.set_taborder("1");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1",null,null,"15","1","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_rwardDtlsList","absolute","15","45",null,null,"15","15",this);_a.set_taborder("12");_a.set_binddataset("ds_rwardDtlsList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_treeusebutton("no");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeinitstatus("expand,all");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"259\"/><Column size=\"55\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"포상종별\"/><Cell col=\"2\" text=\"수여기관\"/><Cell col=\"3\" text=\"공적개요\"/><Cell col=\"4\" text=\"감경여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PZDCR_NM\"/><Cell col=\"2\" text=\"bind:CNFER_INSTT\"/><Cell col=\"3\" text=\"bind:WNPZ_RESN\"/><Cell col=\"4\" displaytype=\"checkbox\" text=\"bind:RUDCT_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",430,450,this,function(_b){_b.set_classname("HRM040302_P01");_b.set_titletext("포상선택");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("HRM040302_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM040302_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM040302_P01.xfdl",function(){var _a=this.parent.empno;this.HRM040302_P01_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.HRM040302_P01_onload=function(_b,_c){this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.ds_cond.setColumn(_b,"EMPNO",_a);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_rwardDtlsList.clearData();this.fn_transaction("selectRwardDtlsList");};this.fn_transaction=function(_b){switch(_b){case "selectRwardDtlsList":var _c="hsco/mis/hrm/HRM040302_P01/selectRwardDtlsList.do";var _d="input1=ds_cond";var _e="ds_rwardDtlsList=output1";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_d){this.gfn_callback_message(_b,_c,_d);}if(_c==0){switch(_b){case "selectRwardDtlsList":break;}}};this.div_pop_grd_rwardDtlsList_oncelldblclick=function(_b,_c){if(_c.col!='0'){if(this.ds_rwardDtlsList.getColumn(this.ds_rwardDtlsList.rowposition,"RUDCT_AT")=="1"){alert("이미 감경받은 포상은 선택할 수 없습니다.");}else{var _d=new Dataset();_d.copyData(this.ds_rwardDtlsList);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_rwardDtlsList,this.ds_rwardDtlsList.rowposition);this.close(_d.saveXML());}}};this.div_pop_btn_Search_onclick=function(_b,_c){this.fn_search();};this.btn_Confirm_onclick=function(_b,_c){if(this.ds_rwardDtlsList.getColumn(this.ds_rwardDtlsList.rowposition,"RUDCT_AT")=="1"){alert("이미 감경받은 포상은 선택할 수 없습니다.");}else{var _d=new Dataset();_d.copyData(this.ds_rwardDtlsList);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_rwardDtlsList,this.ds_rwardDtlsList.rowposition);this.close(_d.saveXML());}};this.btn_Close_onclick=function(_b,_c){this.close();};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM040302_P01_onload,this);this.addEventHandler("oninit",this.HRM040302_P01_oninit,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Search.addEventHandler("onclick",this.div_pop_btn_Search_onclick,this);this.grd_rwardDtlsList.addEventHandler("onheadclick",this.grd_rwardDtlsList_onheadclick,this);this.grd_rwardDtlsList.addEventHandler("oncelldblclick",this.div_pop_grd_rwardDtlsList_oncelldblclick,this);};this.loadIncludeScript("HRM040302_P01.xfdl");};})();