﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("EIS030203");this.set_classname("");this.set_titletext("공사현황");this._setFormPosition(0,0,1059,735);}this.getSetter("inheritanceid").set("");_a=new Div("div","absolute","0","0",null,null,"0","0",this);_a.set_taborder("0");_a.set_url("pms_prj04::PRJ040202.xfdl");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("");_b.getSetter("inheritanceid").set("");_b.set_titletext("공사현황");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_prj04::PRJ040202.xfdl");};this.addIncludeScript("EIS030203.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("EIS030203.xfdl",function(){this.EIS030203_oninit=function(_a,_b){this.fn_init();this.div.popImv.set_right(28);};this.EIS030203_onload=function(_a,_b){};this.fn_search=function(){this.div.fn_search();};});this.on_initEvent=function(){this.addEventHandler("onload",this.EIS030203_onload,this);this.addEventHandler("oninit",this.EIS030203_oninit,this);};this.loadIncludeScript("EIS030203.xfdl");this.loadPreloadList();};})();