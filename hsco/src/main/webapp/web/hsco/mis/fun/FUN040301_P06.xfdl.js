﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN040301_P06");this.set_classname("FUN040301_P06");this.set_titletext("수입지출 비고");this._setFormPosition(0,0,587,222);}_a=new Dataset("ds_transfer",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INPUT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">DELNG_DE</Col><Col id=\"msgId\">이체일자</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">TRNSMIT_INSTT</Col><Col id=\"msgId\">제공(S)</Col><Col id=\"compId\">ds_transfer</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">RECPTN_INSTT</Col><Col id=\"msgId\">요구(R)</Col><Col id=\"compId\">ds_transfer</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_transfer</Col><Col id=\"colId\">AMOUNT</Col><Col id=\"msgId\">이체금액</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">RM</Col><Col id=\"msgId\">비고</Col><Col id=\"compId\">ds_transfer</Col><Col id=\"nlength\">66</Col><Col id=\"lengthChkGb\">LE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INPUT_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","15","45",null,null,"15","15",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0%","26",null,null,"1","0",this.div_work);_a.set_taborder("10");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","26","100",null,null,"0",this.div_work);_a.set_taborder("11");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0.71%","0",null,"27","0.24%",null,this.div_work);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static07","absolute","0%","0","100","27",null,null,this.div_work);_a.set_taborder("16");_a.set_text("기준일");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","102","3","105","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a=new TextArea("TextArea00","absolute","102","31","450","127",null,null,this.div_work);_a.set_taborder("17");this.div_work.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40","400","5",null,null,this);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","15","17","197","21",null,null,this);_a.set_taborder("15");_a.set_text("수입지출 비고");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"15","50","25","68",null,this);_a.set_taborder("1");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("2");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("19");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("20");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0",null,null,"15","0","0",this);_a.set_taborder("21");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",587,222,this,function(_b){_b.set_classname("FUN040301_P06");_b.set_titletext("수입지출 비고");});this.addLayout(_a.name,_a);_a=new BindItem("item7","div_work.Calendar01","value","ds_cond","INPUT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_work.TextArea00","value","ds_transfer","RM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN040301_P06.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN040301_P06.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN040301_P06.xfdl",function(){this.date;this.fv_objForm;this.FUN040301_P06_onload=function(_a,_b){this.ds_cond.clearData();this.ds_cond.addRow();this.date=this.getOwnerFrame().date;this.fv_objForm=this.parent.arg_0;this.ds_cond.setColumn(0,"INPUT_DE",this.date);this.fn_search();};this.fn_search=function(){this.fn_transaction("selectRm");};this.btn_Confirm_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_transfer)){this.fn_transaction("saveRm");}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_a){switch(_a){case "selectRm":var _b="hsco/mis/fun/FUN040301/selectRm.do";var _c="input1=ds_cond";var _d="ds_transfer=output1";break;case "saveRm":var _b="hsco/mis/fun/FUN040301/saveRm.do";var _c="input1=ds_transfer:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "selectRm":break;default:break;}}else{switch(_a){case "selectRm":var _d=this.ds_transfer.rowcount;if(_d==0){this.ds_transfer.set_updatecontrol(false);this.ds_transfer.addRow();this.ds_transfer.setColumn(0,"INPUT_DE",this.date);this.ds_transfer.set_updatecontrol(true);}break;case "saveRm":this.gfn_message("success.처리.성공");this.fn_transaction("selectRm");break;default:break;}}this.gfn_callback_message(_a,_b,_c);};this.btn_Close_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_transfer)){if(this.gfn_message("confirm.변경.취소.여부")){this.close();}else{return false;}}else{this.close();}};});this.on_initEvent=function(){this.addEventHandler("onload",this.FUN040301_P06_onload,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);};this.loadIncludeScript("FUN040301_P06.xfdl");};})();