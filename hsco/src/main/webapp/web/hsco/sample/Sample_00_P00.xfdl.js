﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("Sample_00_P00");this.set_classname("Sample_00_P00");this.set_titletext("New Form");this._setFormPosition(0,0,800,600);}_a=new Dataset("ds_rtn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_arg",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","24","9","220","30",null,null,this);_a.set_taborder("0");_a.set_text("팝업 화면");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","640","16","147","40",null,null,this);_a.set_taborder("1");_a.set_text("종료 (Simple Text)");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","640","80","147","40",null,null,this);_a.set_taborder("2");_a.set_text("종료 (Dataset)");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","25","56","287","30",null,null,this);_a.set_taborder("3");_a.style.set_border("1 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","25","104","287","30",null,null,this);_a.set_taborder("4");_a.style.set_border("1 solid #808080ff");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","25","152","547","155",null,null,this);_a.set_taborder("5");_a.set_binddataset("ds_arg");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){_b.set_classname("Sample_00_P00");_b.set_titletext("New Form");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("Sample_00_P00.xfdl",function(){this.Sample_00_P00_onload=function(_a,_b){this.Static01.set_text(this.parent.arg_1);this.Static02.set_text(this.parent.arg_2);this.ds_arg.copyData(this.parent.arg_3);alert(this.parent.arg_0.sta_01.text);};this.Button00_onclick=function(_a,_b){this.close("return Simple Text");};this.Button01_onclick=function(_a,_b){this.close(this.ds_rtn.saveXML());};});this.on_initEvent=function(){this.addEventHandler("onload",this.Sample_00_P00_onload,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.Button01.addEventHandler("onclick",this.Button01_onclick,this);};this.loadIncludeScript("Sample_00_P00.xfdl");};})();