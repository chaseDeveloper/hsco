﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SCR026_T05");this.set_classname("");this.set_titletext("과거당첨");this._setFormPosition(0,0,1059,636);}_a=new Static("Static36","absolute","0","0",null,"10","0",null,this);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","29",null,"5","0",null,this);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","34",null,null,"0","0",this);_a.set_taborder("3");_a.set_binddataset("ds_과거당첨");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"주민등록번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"성명\"/><Cell col=\"2\" colspan=\"3\" text=\"세대원\"/><Cell col=\"5\" colspan=\"5\" text=\"당첨주택\"/><Cell row=\"1\" col=\"2\" text=\"관계\"/><Cell row=\"1\" col=\"3\" text=\"주민등록번호\"/><Cell row=\"1\" col=\"4\" text=\"성명\"/><Cell row=\"1\" col=\"5\" text=\"주택명\"/><Cell row=\"1\" col=\"6\" text=\"동\"/><Cell row=\"1\" col=\"7\" text=\"호\"/><Cell row=\"1\" col=\"8\" text=\"당첨일\"/><Cell row=\"1\" col=\"9\" text=\"당첨구분\"/></Band><Band id=\"body\"><Cell text=\"bind:주민등록번호\" mask=\"######-#{@@@@@@}\"/><Cell col=\"1\" text=\"bind:성명\"/><Cell col=\"2\" text=\"bind:관계\"/><Cell col=\"3\" text=\"bind:주민등록번호2\" mask=\"######-#{@@@@@@}\" maskchar=\" \"/><Cell col=\"4\" text=\"bind:성명2\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:주택명\"/><Cell col=\"6\" text=\"bind:동\"/><Cell col=\"7\" text=\"bind:호\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:당첨일\"/><Cell col=\"9\" text=\"bind:당첨구분\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Radio("Radio00","absolute",null,"10","134","21","131",null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">Excel</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">Text</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("4");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_direction("vertical");_a.set_index("-1");_a=new Button("btn_demoDown","absolute",null,"10","84","19","27",null,this);_a.set_taborder("5");_a.set_text("양식 다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_excelUpload","absolute",null,"10","25","19","113",null,this);_a.set_taborder("6");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Button("Button117","absolute",null,"10","25","19","0",null,this);_a.set_taborder("7");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",1059,636,this,function(_c){_c.set_classname("");_c.set_titletext("과거당첨");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.btn_demoDown.addEventHandler("onclick",this.btn_demoDown_onclick,this);this.btn_excelUpload.addEventHandler("onclick",this.btn_excelUpload_onclick,this);};this.loadIncludeScript("SCR026_T05.xfdl");};})();