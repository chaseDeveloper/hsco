﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern01");this.set_classname("pattern01");this.set_titletext("사업지구현황");this._setFormPosition(0,0,1059,735);}_a=new Radio("Radio00","absolute","0","-3","260","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">진행사업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">완료사업</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("6");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("0");_a=new Grid("Grid00","absolute","0","18","263","718",null,null,this);_a.set_taborder("11");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업코드\"/><Cell col=\"1\" text=\"사업명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","263","0","10","735",null,null,this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","13","263","5",null,null,this);_a.set_taborder("24");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("25");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("26");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","273","0","758","735",null,null,this);_a.set_taborder("27");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.Tab00);_a.set_text("사업개요");this.Tab00.addChild(_a.name,_a);_a=new Static("Static11","absolute","98","187","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("0");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static00","absolute","98","161","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("1");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static01","absolute","98","135","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("2");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static05","absolute","98","109","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("3");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static02","absolute","98","83","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("4");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static03","absolute","98","57","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("5");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static51","absolute","98","5","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("6");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static04","absolute","98","31","404","27",null,null,this.Tab00.tabpage1);_a.set_taborder("7");_a.set_cssclass("sta_WF_Labelbg");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","369","34","130","21",null,null,this.Tab00.tabpage1);_a.set_taborder("8");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","205","34","162","21",null,null,this.Tab00.tabpage1);_a.set_taborder("9");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","83","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("10");_a.set_text("사업승인일자");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static85","absolute","0","57","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("11");_a.set_text("총사업비");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static84","absolute","0","5","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("12");_a.set_text("사업유형");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static83","absolute","0","31","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("13");_a.set_text("사업위치");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","187","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("14");_a.set_text("입주일자");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","161","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("15");_a.set_text("준공일자");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","135","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("16");_a.set_text("착공일자");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static14","absolute","0","109","99","27",null,null,this.Tab00.tabpage1);_a.set_taborder("17");_a.set_text("보상공고일자");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static16","absolute","205","187","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("18");_a.set_text("유상면적");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static15","absolute","205","109","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("19");_a.set_text("연면적");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static17","absolute","205","83","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("20");_a.set_text("사업면적");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static18","absolute","205","57","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("21");_a.set_text("사업기간");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static22","absolute","355","135","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("22");_a.set_text("녹지율");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static21","absolute","355","109","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("23");_a.set_text("용적율");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static20","absolute","355","83","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("24");_a.set_text("건패율");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static19","absolute","205","135","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("25");_a.set_text("건축면적");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static23","absolute","205","161","71","27",null,null,this.Tab00.tabpage1);_a.set_taborder("26");_a.set_text("시행면적");_a.set_cssclass("sta_WF_Label");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit08","absolute","428","138","58","21",null,null,this.Tab00.tabpage1);_a.set_taborder("27");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static30","absolute","488","140","13","21",null,null,this.Tab00.tabpage1);_a.set_taborder("28");_a.set_text("%");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit07","absolute","428","112","58","21",null,null,this.Tab00.tabpage1);_a.set_taborder("29");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static29","absolute","488","114","13","21",null,null,this.Tab00.tabpage1);_a.set_taborder("30");_a.set_text("%");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static28","absolute","336","192","23","21",null,null,this.Tab00.tabpage1);_a.set_taborder("31");_a.set_text("m²");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static27","absolute","336","166","23","21",null,null,this.Tab00.tabpage1);_a.set_taborder("32");_a.set_text("m²");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static26","absolute","336","140","23","21",null,null,this.Tab00.tabpage1);_a.set_taborder("33");_a.set_text("m²");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static25","absolute","336","114","23","21",null,null,this.Tab00.tabpage1);_a.set_taborder("34");_a.set_text("m²");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static24","absolute","488","85","13","21",null,null,this.Tab00.tabpage1);_a.set_taborder("35");_a.set_text("%");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static31","absolute","336","85","23","21",null,null,this.Tab00.tabpage1);_a.set_taborder("36");_a.set_text("m²");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit06","absolute","278","164","56","21",null,null,this.Tab00.tabpage1);_a.set_taborder("37");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit05","absolute","278","190","56","21",null,null,this.Tab00.tabpage1);_a.set_taborder("38");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit04","absolute","278","138","56","21",null,null,this.Tab00.tabpage1);_a.set_taborder("39");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","428","85","58","21",null,null,this.Tab00.tabpage1);_a.set_taborder("40");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","278","112","56","21",null,null,this.Tab00.tabpage1);_a.set_taborder("41");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static32","absolute","378","60","17","21",null,null,this.Tab00.tabpage1);_a.set_taborder("42");_a.set_text("~");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Calendar("Calendar06","absolute","390","60","97","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("43");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd ");_a=new Calendar("Calendar05","absolute","278","60","97","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("44");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new MaskEdit("MaskEdit01","absolute","278","86","56","21",null,null,this.Tab00.tabpage1);_a.set_taborder("45");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static33","absolute","191","60","21","21",null,null,this.Tab00.tabpage1);_a.set_taborder("46");_a.set_text("원");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","101","60","88","21",null,null,this.Tab00.tabpage1);_a.set_taborder("47");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Calendar("Calendar04","absolute","101","86","102","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("48");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("Calendar03","absolute","101","112","102","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("49");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd ");_a=new Calendar("Calendar02","absolute","101","138","102","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("50");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd ");_a=new Calendar("Calendar01","absolute","101","164","102","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("51");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("Calendar00","absolute","101","190","102","21",null,null,this.Tab00.tabpage1);this.Tab00.tabpage1.addChild(_a.name,_a);_a.set_taborder("52");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Edit("Edit00","absolute","101","34","102","21",null,null,this.Tab00.tabpage1);_a.set_taborder("53");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Edit("Edit21","absolute","101","8","398","21",null,null,this.Tab00.tabpage1);_a.set_taborder("54");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","512","5","244","209",null,null,this.Tab00.tabpage1);_a.set_taborder("55");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"첨부파일명\"/><Cell col=\"1\" text=\"보기/받기\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static37","absolute","0","224","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("56");_a.set_text("구분");_a.set_cssclass("sta_WF_DataTitle");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static38","absolute","0","250","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("57");_a.set_text("공사개요");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static39","absolute","0","276","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("58");_a.set_text("대지위치");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static40","absolute","0","302","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("59");_a.set_text("대지면적");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","380","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("60");_a.set_text("설계업체");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static42","absolute","0","354","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("61");_a.set_text("형별세대수");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static43","absolute","0","328","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("62");_a.set_text("건립규모");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static44","absolute","139","224","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("63");_a.set_text("내역");_a.set_cssclass("sta_WF_DataTitle");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static45","absolute","379","224","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("64");_a.set_text("구분");_a.set_cssclass("sta_WF_DataTitle");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static46","absolute","379","250","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("65");_a.set_text("사업게획승인일");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static47","absolute","379","276","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("66");_a.set_text("시공업체");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static48","absolute","379","302","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("67");_a.set_text("감리업체");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static49","absolute","379","328","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("68");_a.set_text("공사기간");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static50","absolute","379","354","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("69");_a.set_text("현장대리인");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static52","absolute","379","380","140","27",null,null,this.Tab00.tabpage1);_a.set_taborder("70");_a.set_text("문의전화");_a.set_cssclass("sta_WF_DataTitle2");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static53","absolute","518","224","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("71");_a.set_text("내역");_a.set_cssclass("sta_WF_DataTitle");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static54","absolute","139","250","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("72");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static55","absolute","139","276","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("73");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static56","absolute","139","302","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("74");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static57","absolute","139","380","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("75");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static58","absolute","139","354","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("76");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static59","absolute","139","328","241","27",null,null,this.Tab00.tabpage1);_a.set_taborder("77");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static60","absolute","518","380","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("78");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static61","absolute","518","354","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("79");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static62","absolute","518","328","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("80");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static63","absolute","518","302","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("81");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static64","absolute","518","276","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("82");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static65","absolute","518","250","238","27",null,null,this.Tab00.tabpage1);_a.set_taborder("83");_a.set_cssclass("sta_WF_Data");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static34","absolute","0","414","130","19",null,null,this.Tab00.tabpage1);_a.set_taborder("84");_a.set_text("위치도 사진");_a.set_cssclass("sta_WF_Title02");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer00","absolute","0","433","246","270",null,null,this.Tab00.tabpage1);_a.set_taborder("85");_a.set_text("ImageViewer00");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static35","absolute","256","414","130","19",null,null,this.Tab00.tabpage1);_a.set_taborder("86");_a.set_text("배치도 사진");_a.set_cssclass("sta_WF_Title02");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer01","absolute","256","433","246","270",null,null,this.Tab00.tabpage1);_a.set_taborder("87");_a.set_text("ImageViewer00");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Static("Static36","absolute","512","414","130","19",null,null,this.Tab00.tabpage1);_a.set_taborder("88");_a.set_text("조감도 사진");_a.set_cssclass("sta_WF_Title02");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer02","absolute","512","433","244","270",null,null,this.Tab00.tabpage1);_a.set_taborder("89");_a.set_text("ImageViewer00");this.Tab00.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.Tab00);_a.set_text("공정현황");this.Tab00.addChild(_a.name,_a);_a=new Static("Static67","absolute","273","458","758","5",null,null,this);_a.set_taborder("28");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static66","absolute","273","437","758","10",null,null,this);_a.set_taborder("29");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","273","244","758","10",null,null,this);_a.set_taborder("30");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","273","30","758","5",null,null,this);_a.set_taborder("31");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","775","34","10","209",null,null,this);_a.set_taborder("32");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","519","448","10","287",null,null,this);_a.set_taborder("33");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","775","448","10","287",null,null,this);_a.set_taborder("34");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage1,function(_c){_c.set_text("사업개요");});this.Tab00.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage2,function(_c){_c.set_text("공정현황");});this.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("pattern01");_c.set_titletext("사업지구현황");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);};this.loadIncludeScript("Pattern_01.xfdl");};})();