﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("guide02_new");this.set_classname("guide02_new");this.set_titletext("ImageViewer/GroupBox/ProgressBar/Menu");this._setFormPosition(0,0,1070,665);}_a=new Dataset("ds_menu",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"idx\">1000</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1001</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1002</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1003</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1004</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1005</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1006</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1007</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1008</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1009</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1010</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1011</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1012</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1013</Col><Col id=\"enable\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("menu",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("true");_a._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"userdata\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1000</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">기준정보</Col><Col id=\"caption\">기준정보</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1001</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col></Row><Row><Col id=\"idx\">1002</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col></Row><Row><Col id=\"idx\">1003</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">상품정보</Col><Col id=\"caption\">상품정보</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+K</Col></Row><Row><Col id=\"idx\">1004</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col></Row><Row><Col id=\"idx\">1005</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col></Row><Row><Col id=\"idx\">1006</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴03</Col><Col id=\"caption\">서브메뉴03</Col></Row><Row><Col id=\"idx\">1007</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">수주업무</Col><Col id=\"caption\">수주업무</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">배송/반품</Col><Col id=\"caption\">배송/반품</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1010</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">실적정보</Col><Col id=\"caption\">실적정보</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1011</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1012</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col><Col id=\"idx\">1013</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">입찰정보</Col><Col id=\"caption\">입찰정보</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1014</Col><Col id=\"hotkey\">Alt+O</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1015</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">커뮤니티</Col><Col id=\"enable\">1</Col><Col id=\"caption\">커뮤니티</Col><Col id=\"idx\">1016</Col></Row><Row><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1017</Col><Col id=\"lev\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar00","absolute","542","528","160","15",null,null,this);_a.set_taborder("8");_a.set_pos("65");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar01","absolute","542","546","160","15",null,null,this);_a.set_taborder("9");_a.set_pos("100");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar02","absolute","542","596","271","15",null,null,this);_a.set_taborder("10");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","815","590","107","21",null,null,this);_a.set_taborder("11");_a.set_text("Progress Test");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar03","absolute","762","546","160","15",null,null,this);_a.set_taborder("12");_a.set_pos("100");_a.set_enable("false");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar04","absolute","762","528","160","15",null,null,this);_a.set_taborder("13");_a.set_pos("65");_a.set_enable("false");this.addChild(_a.name,_a);_a=new GroupBox("GroupBox00","absolute","542","93","205","115",null,null,this);_a.set_text("GroupBox");_a.set_taborder("14");this.addChild(_a.name,_a);_a=new GroupBox("GroupBox01","absolute","762","93","205","115",null,null,this);_a.set_text("GroupBox");_a.set_taborder("15");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","503","0","567","30",null,null,this);_a.set_taborder("21");_a.set_text("GroupBox");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","504","30",null,null,this);_a.set_taborder("22");_a.set_text("ImageViewer");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer00","absolute","230","195","118","62",null,null,this);_a.set_taborder("24");_a.set_image("URL('theme://images/img_sample.png')");_a.set_stretch("fit");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer01","absolute","30","315","270","73",null,null,this);_a.set_taborder("25");_a.set_image("URL('theme://images/img_sample.png')");_a.set_stretch("fixaspectratio");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","230","172","93","18",null,null,this);_a.set_taborder("26");_a.set_text("stretch =<b v='true'> \"fit\"</b>");_a.set_cssclass("sta_GID_txt02");_a.set_usedecorate("true");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","30","292","172","18",null,null,this);_a.set_taborder("27");_a.set_text("stretch =<b v='true'> \"fixaspectratio\"</b>");_a.set_cssclass("sta_GID_txt02");_a.set_usedecorate("true");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","542","56","62","18",null,null,this);_a.set_taborder("28");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new Static("Static32","absolute","762","56","65","18",null,null,this);_a.set_taborder("29");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","424","504","30",null,null,this);_a.set_taborder("30");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","503","424","567","30",null,null,this);_a.set_taborder("31");_a.set_text("ProgressBar");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","542","490","62","18",null,null,this);_a.set_taborder("32");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","762","490","65","18",null,null,this);_a.set_taborder("33");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer02","absolute","30","79","118","62",null,null,this);_a.set_taborder("36");_a.set_text("ImageViewer02");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","30","56","62","18",null,null,this);_a.set_taborder("37");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer03","absolute","230","79","118","62",null,null,this);_a.set_taborder("39");_a.set_text("ImageViewer02");_a.set_enable("false");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer04","absolute","30","195","118","62",null,null,this);_a.set_taborder("40");_a.set_image("URL('theme://images/img_sample.png')");_a.set_stretch("none");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","30","172","109","18",null,null,this);_a.set_taborder("41");_a.set_text("stretch =<b v='true'> \"none\"</b>");_a.set_usedecorate("true");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","230","56","65","18",null,null,this);_a.set_taborder("42");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new Static("Static117","absolute","503","0","1","664",null,null,this);_a.set_taborder("43");_a.set_cssclass("sta_GID_line");this.addChild(_a.name,_a);_a=new Layout("default","",1070,665,this,function(_b){_b.set_classname("guide02_new");_b.set_titletext("ImageViewer/GroupBox/ProgressBar/Menu");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("Guide_06.xfdl",function(){this.Button00_onclick=function(_a,_b){var _c=system.clientToScreenX(_a,0);var _d=system.clientToScreenY(_a,21);this.PopupMenu00.trackPopup(_c,_d);};});this.on_initEvent=function(){this.Button01.addEventHandler("onclick",this.Button01_onclick,this);};this.loadIncludeScript("Guide_06.xfdl");};})();