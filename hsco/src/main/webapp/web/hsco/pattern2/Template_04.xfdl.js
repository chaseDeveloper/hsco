﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern01");this.set_classname("pattern01");this.set_titletext("사업별인허가현황");this._setFormPosition(0,0,1059,735);}_a=new Radio("Radio00","absolute","0","-3","260","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">진행사업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">완료사업</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("6");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("0");_a=new Grid("Grid00","absolute","0","18","263","717",null,null,this);_a.set_taborder("11");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업코드\"/><Cell col=\"1\" text=\"사업명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","273","69","758","334",null,null,this);_a.set_taborder("39");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"181\"/><Column size=\"181\"/><Column size=\"181\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업무코드\"/><Cell col=\"1\" text=\"업무명(대분류)\"/><Cell col=\"2\" text=\"업무명(중분류)\"/><Cell col=\"3\" text=\"업무명(소분류)\"/><Cell col=\"4\" text=\"업무구분\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","273","413","492","322",null,null,this);_a.set_taborder("40");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"73\"/><Column size=\"73\"/><Column size=\"171\"/><Column size=\"68\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"심의일자\"/><Cell col=\"2\" text=\"완료일자\"/><Cell col=\"3\" text=\"심의협의결과내역\"/><Cell col=\"4\" text=\"유관기관\"/><Cell col=\"5\" text=\"등록담당\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid03","absolute","775","413","256","322",null,null,this);_a.set_taborder("41");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"217\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차수\"/><Cell col=\"1\" text=\"관련자료목록받기/보기\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","263","0","10","735",null,null,this);_a.set_taborder("48");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","13","263","5",null,null,this);_a.set_taborder("49");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","273","59","758","10",null,null,this);_a.set_taborder("50");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","273","403","758","10",null,null,this);_a.set_taborder("51");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static47","absolute","765","413","10","322",null,null,this);_a.set_taborder("52");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("59");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("60");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","273","0",null,"59","28",null,this);_a.set_taborder("61");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.Div00);_a.set_taborder("15");_a.set_text("사업유형");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","79","5","142","21",null,null,this.Div00);_a.set_taborder("16");this.Div00.addChild(_a.name,_a);_a=new Static("Static24","absolute","15","31","64","21",null,null,this.Div00);_a.set_taborder("17");_a.set_text("착공일자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar05","absolute","79","31","100","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("18");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static01","absolute","236","5","64","21",null,null,this.Div00);_a.set_taborder("19");_a.set_text("사업기간");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar08","absolute","300","5","93","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("20");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd ");_a=new Static("Static34","absolute","396","5","14","21",null,null,this.Div00);_a.set_taborder("21");_a.set_text("~");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar07","absolute","409","5","93","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("22");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static02","absolute","236","31","64","21",null,null,this.Div00);_a.set_taborder("23");_a.set_text("착공일자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","300","31","141","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("24");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static03","absolute","517","5","90","21",null,null,this.Div00);_a.set_taborder("25");_a.set_text("사업승인일자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","607","5","134","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("26");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd ");_a=new Static("Static04","absolute","517","31","90","21",null,null,this.Div00);_a.set_taborder("27");_a.set_text("입주일자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Calendar("Calendar02","absolute","607","31","134","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("28");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd ");_a=new Layout("default","",0,59,this.Div00,function(_c){_c.set_taborder("61");_c.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("pattern01");_c.set_titletext("사업별인허가현황");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.Static47.addEventHandler("onclick",this.Static47_onclick,this);};this.loadIncludeScript("Template_04.xfdl");};})();