﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAM000005");this.set_classname("Sample_07");this.set_titletext("Check Column 초기화");this._setFormPosition(0,0,1039,799);}_a=new Dataset("ds_chkTest",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"COL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COL_2\" type=\"STRING\" size=\"256\"/><Column id=\"COL_3\" type=\"STRING\" size=\"256\"/><Column id=\"COL_4\" type=\"STRING\" size=\"256\"/><Column id=\"COL_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/></Rows>");this.addChild(_a.name,_a);_a=new Button("btn_oper","absolute","32","21","251","35",null,null,this);_a.set_taborder("0");_a.set_text("동작 시연");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Grid("grd_chkTest","absolute","24","84","787","288",null,null,this);_a.set_taborder("1");_a.set_binddataset("ds_chkTest");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"COL_2\"/><Cell col=\"2\" text=\"COL_3\"/><Cell col=\"3\" text=\"COL_4\"/><Cell col=\"4\" text=\"COL_5\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_1\"/><Cell col=\"1\" text=\"bind:COL_2\"/><Cell col=\"2\" text=\"bind:COL_3\"/><Cell col=\"3\" text=\"bind:COL_4\"/><Cell col=\"4\" text=\"bind:COL_5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1039,799,this,function(_b){_b.set_classname("Sample_07");_b.set_titletext("Check Column 초기화");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAM000005.xfdl","lib::comInclude.xjs");this.registerScript("SAM000005.xfdl",function(){this.btn_oper_onclick=function(_a,_b){this.gfn_initChkCol(this.grd_chkTest,"1");};});this.on_initEvent=function(){this.btn_oper.addEventHandler("onclick",this.btn_oper_onclick,this);};this.loadIncludeScript("SAM000005.xfdl");};})();