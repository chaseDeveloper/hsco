﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern01");this.set_classname("pattern01");this.set_titletext("토지분양가산정");this._setFormPosition(0,0,1059,735);}_a=new Static("Static08","absolute","0","85","1031","10",null,null,this);_a.set_taborder("50");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","462","1031","10",null,null,this);_a.set_taborder("51");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","900","472","64","19",null,null,this);_a.set_taborder("89");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","967","472","64","19",null,null,this);_a.set_taborder("90");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","0","491","1031","5",null,null,this);_a.set_taborder("91");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","471","259","21",null,null,this);_a.set_taborder("92");_a.set_text("토지분양가 변경관리");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","95","1031","367",null,null,this);_a.set_taborder("93");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"59\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"70\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"블럭\"/><Cell col=\"1\" rowspan=\"2\" text=\"LOT\"/><Cell col=\"2\" colspan=\"5\" text=\"토지이용계획(확정)\"/><Cell col=\"7\" colspan=\"5\" text=\"토지분양가산정\"/><Cell col=\"12\" rowspan=\"2\" colspan=\"2\"><Cell rowspan=\"2\" text=\"상세내역&#13;&#10;첨부\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/></Cell><Cell row=\"1\" col=\"2\" text=\"면적(m²)\"/><Cell row=\"1\" col=\"3\" text=\"면적(평)\"/><Cell row=\"1\" col=\"4\" text=\"구성비\"/><Cell row=\"1\" col=\"5\" text=\"단가\"/><Cell row=\"1\" col=\"6\" text=\"금액\"/><Cell row=\"1\" col=\"7\" text=\"면적(m²)\"/><Cell row=\"1\" col=\"8\" text=\"면적(평)\"/><Cell row=\"1\" col=\"9\" text=\"구성비\"/><Cell row=\"1\" col=\"10\" text=\"단가\"/><Cell row=\"1\" col=\"11\" text=\"금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" colspan=\"2\"><Cell/><Cell col=\"1\"/></Cell></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" colspan=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","0","496","1031","239",null,null,this);_a.set_taborder("94");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"59\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"변경&#13;&#10;차수\"/><Cell col=\"1\" rowspan=\"2\" text=\"변경일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"블럭\"/><Cell col=\"3\" rowspan=\"2\" text=\"LOT\"/><Cell col=\"4\" colspan=\"5\" text=\"토지분양가산정\"/><Cell col=\"9\" rowspan=\"2\" text=\"변경사유\"/><Cell col=\"10\" rowspan=\"2\" colspan=\"2\"><Cell rowspan=\"2\" text=\"상세내역&#13;&#10;첨부\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/></Cell><Cell row=\"1\" col=\"4\" text=\"면적(m²)\"/><Cell row=\"1\" col=\"5\" text=\"면적(평)\"/><Cell row=\"1\" col=\"6\" text=\"구성비\"/><Cell row=\"1\" col=\"7\" text=\"단가\"/><Cell row=\"1\" col=\"8\" text=\"금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" colspan=\"2\"><Cell/><Cell col=\"1\"/></Cell></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("95");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("96");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","0",null,"85","28",null,this);_a.set_taborder("97");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.Div00);_a.set_taborder("65");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static24","absolute","15","57","64","21",null,null,this.Div00);_a.set_taborder("66");_a.set_text("대지면적");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","79","5","101","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("67");_a=new Edit("Edit00","absolute","181","5","155","21",null,null,this.Div00);_a.set_taborder("68");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit08","absolute","79","57","101","21",null,null,this.Div00);_a.set_taborder("69");this.Div00.addChild(_a.name,_a);_a=new Static("Static23","absolute","183","57","24","21",null,null,this.Div00);_a.set_taborder("70");_a.set_text("m²");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","351","31","64","21",null,null,this.Div00);_a.set_taborder("71");_a.set_text("부서명");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","351","5","64","21",null,null,this.Div00);_a.set_taborder("72");_a.set_text("토지코드");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","415","5","100","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("73");_a=new Edit("Edit01","absolute","415","31","100","21",null,null,this.Div00);_a.set_taborder("74");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","517","5","156","21",null,null,this.Div00);_a.set_taborder("75");this.Div00.addChild(_a.name,_a);_a=new Static("Static03","absolute","688","5","64","21",null,null,this.Div00);_a.set_taborder("76");_a.set_text("용도코드");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","688","31","64","21",null,null,this.Div00);_a.set_taborder("77");_a.set_text("담당자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","752","5","262","21",null,null,this.Div00);_a.set_taborder("78");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","752","31","100","21",null,null,this.Div00);_a.set_taborder("79");this.Div00.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","31","64","21",null,null,this.Div00);_a.set_taborder("80");_a.set_text("등록일자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Combo("Combo02","absolute","79","31","101","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("81");_a=new Static("Static07","absolute","351","57","64","21",null,null,this.Div00);_a.set_taborder("82");_a.set_text("면적");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","518","57","23","21",null,null,this.Div00);_a.set_taborder("83");_a.set_text("평");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","415","57","100","21",null,null,this.Div00);_a.set_taborder("84");this.Div00.addChild(_a.name,_a);_a=new Static("Static05","absolute","856","57",null,"21","151",null,this.Div00);_a.set_taborder("85");_a.set_text("%");this.Div00.addChild(_a.name,_a);_a=new Static("Static02","absolute","688","57","64","21",null,null,this.Div00);_a.set_taborder("86");_a.set_text("구성비");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit06","absolute","752","57","100","21",null,null,this.Div00);_a.set_taborder("87");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,85,this.Div00,function(_b){_b.set_taborder("97");_b.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("pattern01");_b.set_titletext("토지분양가산정");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Div00.Static05.addEventHandler("onclick",this.Div00_Static02_onclick,this);};this.loadIncludeScript("Template_10.xfdl");};})();