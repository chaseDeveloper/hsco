﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM101000_P12");this.set_classname("Pattern_03");this.set_titletext("단건결재처리");this._setFormPosition(0,0,500,280);}_a=new Dataset("ds_innerSanctnDtlsU",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPINION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_SantnSttusRadio",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S01</Col><Col id=\"CODE_NM\">완료</Col></Row><Row><Col id=\"CODE\">S09</Col><Col id=\"CODE_NM\">반송</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","100%","35",null,null,this);_a.set_text("결재처리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","100%",null,null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_exit","absolute",null,"0","50","30","5",null,this);_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","15","100%","0",null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","35","100%","15",null,null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","15","50",null,"185","15",null,this);this.addChild(_a.name,_a);_a=new Static("Static23","absolute","0","0",null,"30","0",null,this.div_work);_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29",null,"150","0",null,this.div_work);_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static25","absolute","0","29","130","150",null,null,this.div_work);_a.set_text("의견");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new TextArea("OPINION","absolute","133","33",null,"142","3",null,this.div_work);_a.set_maxlength("512");_a.set_wordwrap("char");this.div_work.addChild(_a.name,_a);_a=new Radio("SANCTN_STTUS","absolute","5","0","100","30",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_innerdataset("@ds_SantnSttusRadio");_a.set_taborder("33");_a.set_direction("vertical");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("S01");_a=new Button("btn_saveInnerSantnDtls","absolute",null,"240","80","25","100",null,this);_a.set_text("완료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_clsInnerSantnDtls","absolute",null,"240","80","25","15",null,this);_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD:disabled");_a.set_enable("true");_a.style.setStyleValue("background","disabled","#b9c0cbff");_a.style.setStyleValue("color","disabled","#7e8590ff");this.addChild(_a.name,_a);_a=new Layout("default","",982,606,this.div_work,function(_b){});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",500,280,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("단건결재처리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.SANCTN_STTUS","value","ds_innerSanctnDtlsU","SANCTN_STTUS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.OPINION","value","ds_innerSanctnDtlsU","OPINION");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SYM101000_P12.xfdl","lib::comInclude.xjs");this.addIncludeScript("SYM101000_P12.xfdl","lib::comInnerSanct.xjs");this.addIncludeScript("SYM101000_P12.xfdl","lib::comFile.xjs");this.addIncludeScript("SYM101000_P12.xfdl","lib::comUpDownUtils.xjs");this.registerScript("SYM101000_P12.xfdl",function(){this.SYM101000_P12_oninit=function(_a,_b){this.gfn_initForm(this);this.ds_innerSanctnDtlsU.clearData();if(this.ds_innerSanctnDtlsU.rowcount==0){this.ds_innerSanctnDtlsU.addRow();}};this.SYM101000_P12_onload=function(_a,_b){this.div_work.OPINION.setFocus();};this.fn_search=function(){};this.btn_exit_onclick=function(_a,_b){this.close("");};this.btn_clsInnerSantnDtls_onclick=function(_a,_b){this.close("");};this.btn_saveInnerSantnDtls_onclick=function(_a,_b){if(!this.gfn_message("comm.행위여부","결재처리")){return;}var _c=new Dataset();_c.copyData(this.ds_innerSanctnDtlsU);this.close(_c.saveXML());};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SYM101000_P12_oninit,this);this.addEventHandler("onload",this.SYM101000_P12_onload,this);this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);this.btn_saveInnerSantnDtls.addEventHandler("onclick",this.btn_saveInnerSantnDtls_onclick,this);this.btn_clsInnerSantnDtls.addEventHandler("onclick",this.btn_clsInnerSantnDtls_onclick,this);};this.loadIncludeScript("SYM101000_P12.xfdl");};})();