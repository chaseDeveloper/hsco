﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL020103_P02");this.set_classname("SAL020103_P02");this.set_titletext("가족수당신청구분");this._setFormPosition(0,0,300,100);}_a=new Static("Static07","absolute","0","0","300","100",null,null,this);_a.set_taborder("10");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1","0",null,"15","1",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute","235","15","50","25",null,null,this);_a.set_taborder("2");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","148","21",null,null,this);_a.set_taborder("4");_a.set_text("가족수당신청구분");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","15","44","270","50",null,null,this);_a.set_taborder("5");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","16","15","72",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","285","18","15","78",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","16","60","65","19",null,null,this);_a.set_taborder("8");_a.set_text("구분선택");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Radio("gubun_se","absolute","112","59","165","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("gubun_se_innerdataset",this.gubun_se);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">취득</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상실</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("9");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_cssclass("rdo_WF_Essential");_a.set_index("0");_a=new Layout("default","",300,100,this,function(_c){_c.set_classname("SAL020103_P02");_c.set_titletext("가족수당신청구분");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAL020103_P02.xfdl","lib::comInclude.xjs");this.registerScript("SAL020103_P02.xfdl",function(){this.SAL020103_P02_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SAL020103_P02_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.btn_Confirm_onclick=function(_a,_b){this.close(this.gubun_se.value);};this.Button00_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SAL020103_P02_oninit,this);this.addEventHandler("onload",this.SAL020103_P02_onload,this);this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.gubun_se.addEventHandler("onitemclick",this.div_search_rad_excclcSe_onitemclick,this);};this.loadIncludeScript("SAL020103_P02.xfdl");};})();