﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAM000006_P01");this.set_classname("SAM000006_P01");this.set_titletext("Dataset --><-- Var");this._setFormPosition(0,0,800,470);}_a=new Dataset("ds_popup01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"COL_0\" type=\"STRING\" size=\"256\"/><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_popup","absolute","20","20",null,"382","20",null,this);_a.set_taborder("0");_a.style.set_background("transparent");_a.set_binddataset("ds_popup01");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"COL_0\"/><Cell col=\"1\" disptype=\"normal\" text=\"COL_1\"/><Cell col=\"2\" disptype=\"normal\" text=\"COL_2\"/><Cell col=\"3\" disptype=\"normal\" text=\"COL_3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:COL_0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:COL_1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:COL_2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:COL_3\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","230","418",null,null,"230","20",this);_a.set_taborder("1");_a.set_text("닫기");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Layout("default","",800,470,this,function(_b){_b.set_classname("SAM000006_P01");_b.set_titletext("Dataset --><-- Var");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("SAM000006_P01.xfdl",function(){this.fv_objForm;this.SAM000006_P01_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_popup01.copyData(this.parent.arg_1);};this.btn_close_onclick=function(_a,_b){this.close(this.fn_makeReturnVal());};this.fn_makeReturnVal=function(){var _a;_a="";for(var _b=0;_b<this.ds_popup01.colcount;_b++ ){_a+=this.ds_popup01.getColumn(this.ds_popup01.rowposition,_b);}return _a;};});this.on_initEvent=function(){this.addEventHandler("onload",this.SAM000006_P01_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("SAM000006_P01.xfdl");};})();