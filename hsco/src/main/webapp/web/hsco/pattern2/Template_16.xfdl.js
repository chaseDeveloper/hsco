﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern16");this.set_classname("pattern16");this.set_titletext("월별당직관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","978","43","53","21",null,null,this);_a.set_taborder("8");_a.set_text("초기화");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","840","43","66","21",null,null,this);_a.set_taborder("9");_a.set_text("자동생성");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","909","43","66","21",null,null,this);_a.set_taborder("10");_a.set_text("대직등록");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","69","1031","666",null,null,this);_a.set_taborder("14");_a.set_binddataset("ds_cal");_a.set_selecttype("area");_a.set_cssclass("grd_WF_calendar");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"147\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"147\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"26\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"26\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"26\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"cellgrd_WF_headsun\" text=\"일\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"화\"/><Cell col=\"3\" text=\"수\"/><Cell col=\"4\" text=\"목\"/><Cell col=\"5\" text=\"금\"/><Cell col=\"6\" cssclass=\"cellgrd_WF_headsat\" text=\"토\"/></Band><Band id=\"body\"><Cell rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"26\"/><Cell col=\"1\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"27\"/><Cell col=\"2\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"28\"/><Cell col=\"3\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"29\"/><Cell col=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"30\"/><Cell col=\"5\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"31\"/><Cell col=\"6\" rowspan=\"4\" style=\"color2: ;\" cssclass=\"cellgrd_WF_bodysat\" text=\"1\"/><Cell row=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysun\" text=\"2\"/><Cell row=\"4\" col=\"1\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"3\"/><Cell row=\"4\" col=\"2\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"4\"/><Cell row=\"4\" col=\"3\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"5\"/><Cell row=\"4\" col=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"6\"/><Cell row=\"4\" col=\"5\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"7\"/><Cell row=\"4\" col=\"6\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysat\" text=\"8\"/><Cell row=\"8\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysun\" text=\"9\"/><Cell row=\"8\" col=\"1\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"10\"/><Cell row=\"8\" col=\"2\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"11\"/><Cell row=\"8\" col=\"3\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"12\"/><Cell row=\"8\" col=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"13\"/><Cell row=\"8\" col=\"5\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"14\"/><Cell row=\"8\" col=\"6\" rowspan=\"4\" cssclass=\"cellgrd_WF_today\" text=\"15\"/><Cell row=\"12\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysun\" text=\"16\"/><Cell row=\"12\" col=\"1\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"17\"/><Cell row=\"12\" col=\"2\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"18\"/><Cell row=\"12\" col=\"3\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"19\"/><Cell row=\"12\" col=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"20\"/><Cell row=\"12\" col=\"5\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"21\"/><Cell row=\"12\" col=\"6\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysat\" text=\"22\"/><Cell row=\"16\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysun\" text=\"23\"/><Cell row=\"16\" col=\"1\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"24\"/><Cell row=\"16\" col=\"2\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"25\"/><Cell row=\"16\" col=\"3\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"26\"/><Cell row=\"16\" col=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"27\"/><Cell row=\"16\" col=\"5\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"28\"/><Cell row=\"16\" col=\"6\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysat\" text=\"29\"/><Cell row=\"20\" rowspan=\"4\" cssclass=\"cellgrd_WF_bodysun\" text=\"30\"/><Cell row=\"20\" col=\"1\" rowspan=\"4\" cssclass=\"cellgrd_WF_day\" text=\"31\"/><Cell row=\"20\" col=\"2\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"1\"/><Cell row=\"20\" col=\"3\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"2\"/><Cell row=\"20\" col=\"4\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"3\"/><Cell row=\"20\" col=\"5\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"4\"/><Cell row=\"20\" col=\"6\" rowspan=\"4\" cssclass=\"cellgrd_WF_trailingday\" text=\"5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","64","1031","5",null,null,this);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","13","735","0",null,this);_a.set_taborder("15");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","0",null,"33","28",null,this);_a.set_taborder("17");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.Div00);_a.set_taborder("31");_a.set_text("기준년월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","184","5","100","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("32");_a=new Calendar("Calendar00","absolute","79","5","103","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("33");_a.set_type("spin");_a=new Layout("default","",0,33,this.Div00,function(_b){_b.set_taborder("17");_b.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("pattern16");_b.set_titletext("월별당직관리");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){};this.loadIncludeScript("Template_16.xfdl");};})();