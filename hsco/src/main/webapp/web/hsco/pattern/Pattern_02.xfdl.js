﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern01");this.set_classname("pattern01");this.set_titletext("주택건설계획관리");this._setFormPosition(0,0,1059,735);}_a=new Static("Static32","absolute","799","656","232","27",null,null,this);_a.set_taborder("67");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static33","absolute","799","708","232","27",null,null,this);_a.set_taborder("68");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static35","absolute","799","682","232","27",null,null,this);_a.set_taborder("69");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","799","626","232","31",null,null,this);_a.set_taborder("66");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","799","600","232","31",null,null,this);_a.set_taborder("65");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","799","552","232","27",null,null,this);_a.set_taborder("63");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","799","578","232","27",null,null,this);_a.set_taborder("64");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","799","526","232","27",null,null,this);_a.set_taborder("56");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Radio("Radio00","absolute","0","-3","260","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">진행사업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">완료사업</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("6");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("0");_a=new Grid("Grid00","absolute","0","18","263","718",null,null,this);_a.set_taborder("11");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업코드\"/><Cell col=\"1\" text=\"사업명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Button117","absolute","982","0","25","19",null,null,this);_a.set_taborder("18");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("Button118","absolute","1006","0","25","19",null,null,this);_a.set_taborder("19");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","273","24","758","188",null,null,this);_a.set_taborder("21");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"94\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"20\"/><Column size=\"110\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주택코드\"/><Cell col=\"1\" text=\"주택코드명\"/><Cell col=\"2\" text=\"전용면적(m²)\"/><Cell col=\"3\" text=\"공용면적(m²)\"/><Cell col=\"4\" text=\"대지면적(m²)\"/><Cell col=\"5\" colspan=\"2\"><Cell text=\"주소(도로명)\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"주소(도로명)\"/></Cell><Cell col=\"7\" colspan=\"2\"><Cell text=\"주소(지번명)\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/></Cell></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" colspan=\"2\"/><Cell col=\"7\" colspan=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Button109","absolute","900","222","64","19",null,null,this);_a.set_taborder("22");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("Button110","absolute","967","222","64","19",null,null,this);_a.set_taborder("23");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","273","246","758","220",null,null,this);_a.set_taborder("24");_a.set_fillareatype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"94\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공급유형\"/><Cell col=\"1\" text=\"공급유형명\"/><Cell col=\"2\" text=\"전용면적(m²)\"/><Cell col=\"3\" text=\"공용면적(m²)\"/><Cell col=\"4\" text=\"대지면적(m²)\"/><Cell col=\"5\" text=\"내용인수\"/><Cell col=\"6\" text=\"건축구조\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid03","absolute","273","500","167","235",null,null,this);_a.set_taborder("25");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"59\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"동\"/><Cell col=\"1\" text=\"라인\"/><Cell col=\"2\" text=\"층수\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid04","absolute","450","500","269","235",null,null,this);_a.set_taborder("26");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"67\"/><Column size=\"48\"/><Column size=\"66\"/><Column size=\"51\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"호수\"/><Cell col=\"1\" text=\"타입코드\"/><Cell col=\"2\" text=\"타입명\"/><Cell col=\"3\" text=\"방향코드\"/><Cell col=\"4\" text=\"방향명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","729","476","130","19",null,null,this);_a.set_taborder("27");_a.set_text("호별 추가정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","802","555","56","21",null,null,this);_a.set_taborder("28");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","802","581","56","21",null,null,this);_a.set_taborder("32");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","952","554","57","21",null,null,this);_a.set_taborder("33");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit04","absolute","802","607","56","21",null,null,this);_a.set_taborder("34");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit05","absolute","802","659","56","21",null,null,this);_a.set_taborder("35");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit06","absolute","802","633","56","21",null,null,this);_a.set_taborder("36");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","860","554","23","21",null,null,this);_a.set_taborder("37");_a.set_text("m²");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","1011","554","23","21",null,null,this);_a.set_taborder("38");_a.set_text("m²");this.addChild(_a.name,_a);_a=new Static("Static25","absolute","860","581","23","21",null,null,this);_a.set_taborder("39");_a.set_text("m²");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","860","607","23","21",null,null,this);_a.set_taborder("40");_a.set_text("m²");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","860","633","23","21",null,null,this);_a.set_taborder("41");_a.set_text("m²");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","860","659","23","21",null,null,this);_a.set_taborder("42");_a.set_text("m²");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","1011","581","23","21",null,null,this);_a.set_taborder("43");_a.set_text("m²");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit07","absolute","952","581","57","21",null,null,this);_a.set_taborder("44");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","1011","607","23","21",null,null,this);_a.set_taborder("45");_a.set_text("m²");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit08","absolute","952","607","57","21",null,null,this);_a.set_taborder("46");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","799","500","232","27",null,null,this);_a.set_taborder("58");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","802","529","226","21",null,null,this);_a.set_taborder("61");this.addChild(_a.name,_a);_a=new Spin("Spin00","absolute","802","503","110","21",null,null,this);_a.set_taborder("62");_a.set_value("0");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","802","685","75","21",null,null,this);_a.set_taborder("74");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit09","absolute","802","711","75","21",null,null,this);_a.set_taborder("75");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit10","absolute","952","711","76","21",null,null,this);_a.set_taborder("76");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit11","absolute","971","659","57","21",null,null,this);_a.set_taborder("77");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit12","absolute","971","685","57","21",null,null,this);_a.set_taborder("78");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit13","absolute","952","633","76","21",null,null,this);_a.set_taborder("79");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","879","600","71","31",null,null,this);_a.set_taborder("51");_a.set_text("기타공용");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","879","626","71","31",null,null,this);_a.set_taborder("70");_a.set_text("대지지분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","879","656","90","27",null,null,this);_a.set_taborder("71");_a.set_text("건축비(주민)");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","879","682","90","27",null,null,this);_a.set_taborder("72");_a.set_text("부가세(주민)");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static40","absolute","879","708","71","27",null,null,this);_a.set_taborder("73");_a.set_text("공급금액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","879","552","71","27",null,null,this);_a.set_taborder("49");_a.set_text("법정초과");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","879","578","71","27",null,null,this);_a.set_taborder("50");_a.set_text("건축면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","729","578","71","27",null,null,this);_a.set_taborder("54");_a.set_text("공용면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","729","656","71","27",null,null,this);_a.set_taborder("55");_a.set_text("대지비");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","729","500","71","27",null,null,this);_a.set_taborder("57");_a.set_text("방수");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","729","708","71","27",null,null,this);_a.set_taborder("59");_a.set_text("부가세");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","729","682","71","27",null,null,this);_a.set_taborder("60");_a.set_text("건축비");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","729","626","71","31",null,null,this);_a.set_taborder("47");_a.set_text("계약면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","729","600","71","31",null,null,this);_a.set_taborder("48");_a.set_text("분양면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","729","526","71","27",null,null,this);_a.set_taborder("52");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","729","552","71","27",null,null,this);_a.set_taborder("53");_a.set_text("전용면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Button("Button06","absolute","588","476","64","19",null,null,this);_a.set_taborder("82");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("Button07","absolute","655","476","64","19",null,null,this);_a.set_taborder("83");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","13","263","5",null,null,this);_a.set_taborder("90");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","263","0","10","735",null,null,this);_a.set_taborder("91");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static43","absolute","273","19","758","5",null,null,this);_a.set_taborder("92");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static44","absolute","273","212","758","10",null,null,this);_a.set_taborder("93");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static45","absolute","273","241","758","5",null,null,this);_a.set_taborder("94");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static46","absolute","719","476","10","260",null,null,this);_a.set_taborder("95");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static47","absolute","440","476","10","260",null,null,this);_a.set_taborder("96");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static48","absolute","273","466","758","10",null,null,this);_a.set_taborder("97");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","273","495","758","5",null,null,this);_a.set_taborder("98");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("99");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0","15","735",null,null,this);_a.set_taborder("100");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","25.78%","222",null,"19","61.95%",null,this);_a.set_taborder("101");_a.set_text("Title");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","25.78%","0",null,"19","61.95%",null,this);_a.set_taborder("102");_a.set_text("Title");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","42.49%","476",null,"19","45.23%",null,this);_a.set_taborder("103");_a.set_text("Title");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static38","absolute","25.78%","476",null,"19","61.95%",null,this);_a.set_taborder("104");_a.set_text("Title");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("pattern01");_c.set_titletext("주택건설계획관리");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.Static47.addEventHandler("onclick",this.Static47_onclick,this);};this.loadIncludeScript("Pattern_02.xfdl");};})();