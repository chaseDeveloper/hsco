﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FMS020106_T01");this.set_classname("form");this.set_titletext("보수보강계획");this._setFormPosition(0,0,1031,307);}_a=new Static("Static03","absolute","0","29",null,"5","0",null,this);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","10","169","19",null,null,this);_a.set_taborder("2");_a.set_text("보수보강계획 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","1031","10",null,null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_보수보강계획목록","absolute","0","34",null,null,"0","0",this);_a.set_taborder("4");_a.set_binddataset("ds_보수보강계획목록");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"공사기간\"/><Cell col=\"2\" text=\"공사구분\"/><Cell col=\"3\" text=\"보수보강부위\"/><Cell col=\"4\" text=\"공사내역\"/><Cell col=\"5\" text=\"예산(천원)\"/><Cell col=\"6\" text=\"승인상태\"/><Cell col=\"7\" text=\"승인(반려)일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,307,this,function(_b){_b.set_classname("form");_b.set_titletext("보수보강계획");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){};this.loadIncludeScript("FMS020106_T03.xfdl");};})();