﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern19");this.set_classname("pattern19");this.set_titletext("종합성과분석");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grd1",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_grd2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_grd3",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","54","508","5",null,null,this);_a.set_taborder("17");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","272","508","10",null,null,this);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","293","508","5",null,null,this);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","493","508","10",null,null,this);_a.set_taborder("22");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","514","508","5",null,null,this);_a.set_taborder("24");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","508","43","15","692",null,null,this);_a.set_taborder("25");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","523","54","508","5",null,null,this);_a.set_taborder("27");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","523","410","200","21",null,null,this);_a.set_taborder("29");_a.set_text("KPI : 수입금");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","0","39","404","21",null,null,this);_a.set_taborder("34");_a.set_text("전략관점별 달성률 TotalScore : 84.56%");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","278","162","21",null,null,this);_a.set_taborder("35");_a.set_text("부서성과 순위");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","0","499","294","21",null,null,this);_a.set_taborder("36");_a.set_text("전략관점별 달성률");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","523","39","404","21",null,null,this);_a.set_taborder("37");_a.set_text("주요성과지표 달성율 현황");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","298","508","195",null,null,this);_a.set_taborder("38");_a.set_binddataset("ds_grd1");_a.set_selecttype("area");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"127\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"성과평가조회\"/><Cell row=\"1\" text=\"팀\"/><Cell row=\"1\" col=\"1\" text=\"연간 달성율\"/><Cell row=\"1\" col=\"2\" text=\"누계 달성율\"/><Cell row=\"1\" col=\"3\" text=\"달성율 순위\"/></Band><Band id=\"body\"><Cell cssclass=\"cellgrd_WF_title\" text=\"거주자주차팀\"/><Cell col=\"1\" text=\"60.24\"/><Cell col=\"2\" text=\"94.13\"/><Cell col=\"3\" cssclass=\"cellgrd_WF_rankingtop\" text=\"2\"/><Cell row=\"1\" cssclass=\"cellgrd_WF_title\" text=\"경영지원팀\"/><Cell row=\"1\" col=\"1\" text=\"32.20\"/><Cell row=\"1\" col=\"2\" text=\"94.71\"/><Cell row=\"1\" col=\"3\" cssclass=\"cellgrd_WF_rankingtop\" text=\"1\"/><Cell row=\"2\" cssclass=\"cellgrd_WF_title\" text=\"기획혁신팀\"/><Cell row=\"2\" col=\"1\" text=\"19.90\"/><Cell row=\"2\" col=\"2\" text=\"92.67\"/><Cell row=\"2\" col=\"3\" cssclass=\"cellgrd_WF_rankingtop\" text=\"3\"/><Cell row=\"3\" cssclass=\"cellgrd_WF_title\" text=\"공영주차팀\"/><Cell row=\"3\" col=\"1\" text=\"53.71\"/><Cell row=\"3\" col=\"2\" text=\"83.92\"/><Cell row=\"3\" col=\"3\" cssclass=\"cellgrd_WF_ranking\" text=\"5\"/><Cell row=\"4\" cssclass=\"cellgrd_WF_title\" text=\"센터팀\"/><Cell row=\"4\" col=\"1\" text=\"58.23\"/><Cell row=\"4\" col=\"2\" text=\"84.39\"/><Cell row=\"4\" col=\"3\" cssclass=\"cellgrd_WF_ranking\" text=\"4\"/><Cell row=\"5\" cssclass=\"cellgrd_WF_title\" text=\"공영주차팀\"/><Cell row=\"5\" col=\"1\" text=\"53.71\"/><Cell row=\"5\" col=\"2\" text=\"83.92\"/><Cell row=\"5\" col=\"3\" cssclass=\"cellgrd_WF_ranking\" text=\"6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","523","59","508","267",null,null,this);_a.set_taborder("39");_a.set_binddataset("ds_grd2");_a.set_selecttype("area");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"212\"/><Column size=\"43\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"전략목표\"/><Cell col=\"1\" text=\"단위\"/><Cell col=\"2\" text=\"총목표\"/><Cell col=\"3\" text=\"총실적\"/><Cell col=\"4\" text=\"달성율\"/></Band><Band id=\"body\"><Cell cssclass=\"cellgrd_WF_title2\" text=\"매출극대화\"/><Cell col=\"1\" colspan=\"4\"/><Cell row=\"1\" cssclass=\"cellgrd_WF_subTitle\" text=\"수입료\"/><Cell row=\"1\" col=\"1\" text=\"천원\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"12904760\" mask=\"###,###.00\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"9952949\" mask=\"###,###.00\"/><Cell row=\"1\" col=\"4\" cssclass=\"cellgrd_WF_greenbox\" text=\"77.12\" mask=\"##.##%\"/><Cell row=\"2\" cssclass=\"cellgrd_WF_title2\" text=\"수익개선\"/><Cell row=\"2\" col=\"1\" colspan=\"4\"/><Cell row=\"3\" cssclass=\"cellgrd_WF_subTitle\" text=\"사업 수지비율\"/><Cell row=\"3\" col=\"1\" text=\"%\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"157\" mask=\"###,###.00\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"80\" mask=\"###,###.00\"/><Cell row=\"3\" col=\"4\" cssclass=\"cellgrd_WF_orangebox\" text=\"51.45\" mask=\"##.##%\"/><Cell row=\"4\" cssclass=\"cellgrd_WF_title2\" text=\"시설물관리철저\"/><Cell row=\"4\" col=\"1\" colspan=\"4\"/><Cell row=\"5\" cssclass=\"cellgrd_WF_subTitle\" text=\"고객 서비스 민원 발생건수\"/><Cell row=\"5\" col=\"1\" text=\"건\"/><Cell row=\"5\" col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"0\" mask=\"###,###.00\"/><Cell row=\"5\" col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"38\" mask=\"###,###.00\"/><Cell row=\"5\" col=\"4\" cssclass=\"cellgrd_WF_pinkbox\" text=\"0\" mask=\"#%\"/><Cell row=\"6\" cssclass=\"cellgrd_WF_title2\" text=\"시설물관리철저\"/><Cell row=\"6\" col=\"1\" colspan=\"4\"/><Cell row=\"7\" cssclass=\"cellgrd_WF_subTitle\" text=\"안전·환경 관련 민원 발생건수\"/><Cell row=\"7\" col=\"1\" text=\"건\"/><Cell row=\"7\" col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"0\" mask=\"###,###.00\"/><Cell row=\"7\" col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"0\" mask=\"#.00\"/><Cell row=\"7\" col=\"4\" cssclass=\"cellgrd_WF_pinkbox\" text=\"0\" mask=\"#%\"/><Cell row=\"8\" cssclass=\"cellgrd_WF_title2\" text=\"수익개선\"/><Cell row=\"8\" col=\"1\" colspan=\"4\"/><Cell row=\"9\" cssclass=\"cellgrd_WF_subTitle\" text=\"사업수지비율\"/><Cell row=\"9\" col=\"1\" text=\"%\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"157\" mask=\"###,###.00\"/><Cell row=\"9\" col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"80\" mask=\"###,###.00\"/><Cell row=\"9\" col=\"4\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_orangebox\" text=\"51.45\" mask=\"##.##%\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","589","108","11","24",null,null,this);_a.set_taborder("40");_a.set_cssclass("btn_WF_arrow");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","629","156","11","24",null,null,this);_a.set_taborder("41");_a.set_cssclass("btn_WF_arrow");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","697","204","11","24",null,null,this);_a.set_taborder("42");_a.set_cssclass("btn_WF_arrow");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","712","252","11","24",null,null,this);_a.set_taborder("43");_a.set_cssclass("btn_WF_arrow");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","625","301","11","24",null,null,this);_a.set_taborder("44");_a.set_cssclass("btn_WF_arrow");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","523","430","508","305",null,null,this);_a.set_taborder("45");_a.set_binddataset("ds_grd3");_a.set_selecttype("area");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"31\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"45\"/><Column size=\"104\"/><Column size=\"99\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"연도\"/><Cell col=\"1\" text=\"주기\"/><Cell col=\"2\" text=\"팀\"/><Cell col=\"3\" text=\"팀\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"목표\"/><Cell col=\"6\" text=\"실적\"/><Cell col=\"7\" text=\"달성율\"/></Band><Band id=\"body\"><Cell text=\"2015\"/><Cell col=\"1\" text=\"1\"/><Cell col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"공영주차..\"/><Cell col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"공영주차..\"/><Cell col=\"4\" text=\"천원\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2863316\" mask=\"###,###.00\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2863316\" mask=\"###,###.00\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_mintbox\" text=\"95.96\" mask=\"##.##%\"/><Cell row=\"1\" text=\"2015\"/><Cell row=\"1\" col=\"1\" text=\"1\"/><Cell row=\"1\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"거주자주..\"/><Cell row=\"1\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"거주자주..\"/><Cell row=\"1\" col=\"4\" text=\"천원\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"721452\" mask=\"###,###.00\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"721452\" mask=\"###,###.00\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_bluebox\" text=\"103.11\" mask=\"##.##%\"/><Cell row=\"2\" text=\"2015\"/><Cell row=\"2\" col=\"1\" text=\"1\"/><Cell row=\"2\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"2\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"2\" col=\"4\" text=\"천원\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"3853996\" mask=\"###,###.00\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"3853996\" mask=\"###,###.00\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_mintbox\" text=\"84.18\" mask=\"##.##%\"/><Cell row=\"3\" text=\"2015\"/><Cell row=\"3\" col=\"1\" text=\"1\"/><Cell row=\"3\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"3\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"3\" col=\"4\" text=\"천원\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2265996\" mask=\"###,###.00\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2265996\" mask=\"###,###.00\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_greenbox\" text=\"74.97\" mask=\"##.##%\"/><Cell row=\"4\" text=\"2015\"/><Cell row=\"4\" col=\"1\" text=\"1\"/><Cell row=\"4\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"기획혁신..\"/><Cell row=\"4\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"기획혁신..\"/><Cell row=\"4\" col=\"4\" text=\"천원\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2000000\" mask=\"###,###.00\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2000000\" mask=\"###,###.00\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_greenbox\" text=\"70.91\" mask=\"##.##%\"/><Cell row=\"5\" text=\"2015\"/><Cell row=\"5\" col=\"1\" text=\"1\"/><Cell row=\"5\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"공영주차..\"/><Cell row=\"5\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"공영주차..\"/><Cell row=\"5\" col=\"4\" text=\"천원\"/><Cell row=\"5\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"1200000\" mask=\"###,###.00\"/><Cell row=\"5\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"1200000\" mask=\"###,###.00\"/><Cell row=\"5\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_pinkbox\" text=\"32.37\" mask=\"##.##%\"/><Cell row=\"6\" text=\"2015\"/><Cell row=\"6\" col=\"1\" text=\"1\"/><Cell row=\"6\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"거주자주..\"/><Cell row=\"6\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"거주자주..\"/><Cell row=\"6\" col=\"4\" text=\"천원\"/><Cell row=\"6\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"1200000\" mask=\"###,###.00\"/><Cell row=\"6\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"1200000\" mask=\"###,###.00\"/><Cell row=\"6\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_pinkbox\" text=\"74.97\" mask=\"##.##%\"/><Cell row=\"7\" text=\"2015\"/><Cell row=\"7\" col=\"1\" text=\"1\"/><Cell row=\"7\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"7\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"7\" col=\"4\" text=\"천원\"/><Cell row=\"7\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2863316\" mask=\"###,###.00\"/><Cell row=\"7\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"2863316\" mask=\"###,###.00\"/><Cell row=\"7\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_mintbox\" text=\"70.91\" mask=\"##.##%\"/><Cell row=\"8\" text=\"2015\"/><Cell row=\"8\" col=\"1\" text=\"1\"/><Cell row=\"8\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"8\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"센터팀\"/><Cell row=\"8\" col=\"4\" text=\"천원\"/><Cell row=\"8\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"721452\" mask=\"###,###.00\"/><Cell row=\"8\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"721452\" mask=\"###,###.00\"/><Cell row=\"8\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_bluebox\" text=\"99.37\" mask=\"##.##%\"/><Cell row=\"9\" text=\"2015\"/><Cell row=\"9\" col=\"1\" text=\"1\"/><Cell row=\"9\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"공영주차..\"/><Cell row=\"9\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"공영주차..\"/><Cell row=\"9\" col=\"4\" text=\"천원\"/><Cell row=\"9\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"3853996\" mask=\"###,###.00\"/><Cell row=\"9\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"3853996\" mask=\"###,###.00\"/><Cell row=\"9\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_mintbox\" text=\"84.18\" mask=\"##.##%\"/><Cell row=\"10\" text=\"2015\"/><Cell row=\"10\" col=\"1\" text=\"1\"/><Cell row=\"10\" col=\"2\" cssclass=\"cellgrd_WF_team\" text=\"거주자주..\"/><Cell row=\"10\" col=\"3\" cssclass=\"cellgrd_WF_team\" text=\"거주자주..\"/><Cell row=\"10\" col=\"4\" text=\"천원\"/><Cell row=\"10\" col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"1200000\" mask=\"###,###.00\"/><Cell row=\"10\" col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_number\" text=\"1200000\" mask=\"###,###.00\"/><Cell row=\"10\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_greenbox\" text=\"70.96\" mask=\"##.##%\"/><Cell row=\"11\" text=\"2015\"/><Cell row=\"11\" col=\"1\" text=\"1\"/><Cell row=\"11\" col=\"2\" text=\"거주자주..\"/><Cell row=\"11\" col=\"3\" text=\"거주자주..\"/><Cell row=\"11\" col=\"4\" text=\"천원\"/><Cell row=\"11\" col=\"5\" displaytype=\"number\" edittype=\"mask\" text=\"3853996\" mask=\"###,###.00\"/><Cell row=\"11\" col=\"6\" displaytype=\"number\" edittype=\"mask\" text=\"3853996\" mask=\"###,###.00\"/><Cell row=\"11\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_bluebox\" text=\"84.18\" mask=\"##.##%\"/><Cell row=\"12\" text=\"2015\"/><Cell row=\"12\" col=\"1\" text=\"1\"/><Cell row=\"12\" col=\"2\" text=\"공영주차..\"/><Cell row=\"12\" col=\"3\" text=\"거주자주..\"/><Cell row=\"12\" col=\"4\" text=\"천원\"/><Cell row=\"12\" col=\"5\" displaytype=\"number\" edittype=\"mask\" text=\"721452\" mask=\"###,###.00\"/><Cell row=\"12\" col=\"6\" displaytype=\"number\" edittype=\"mask\" text=\"721452\" mask=\"###,###.00\"/><Cell row=\"12\" col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_bluebox\" text=\"79.58\" mask=\"##.##%\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" text=\"천원\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"mask\" text=\"12904750\" mask=\"###,###.00\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"mask\" text=\"9952043\" mask=\"###,###.00\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"cellgrd_WF_pinkbox\" text=\"77.12\" mask=\"##.##%\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","49.39%","425",null,"5","2.64%",null,this);_a.set_taborder("48");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","1046","0","13","735",null,null,this);_a.set_taborder("49");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","1031","0","15","735",null,null,this);_a.set_taborder("50");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div17","absolute","0","0",null,"33","28",null,this);_a.set_taborder("51");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.Div17);_a.set_taborder("46");_a.set_text("평가년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div17.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","197","5","103","21",null,null,this.Div17);this.Div17.addChild(_a.name,_a);_a.set_taborder("47");_a=new Calendar("Calendar05","absolute","79","5","65","21",null,null,this.Div17);this.Div17.addChild(_a.name,_a);_a.set_taborder("48");_a.set_value("20150710");_a.set_type("spin");_a.set_dateformat("yyyy");_a.set_editformat("yyyy");_a=new Static("Static00","absolute","159","5","38","21",null,null,this.Div17);_a.set_taborder("49");_a.set_text("구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div17.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.Div17,function(_b){_b.set_taborder("51");_b.set_cssclass("div_WFSA_Box");});this.Div17.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("pattern19");_b.set_titletext("종합성과분석");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("Template_19.xfdl",function(){this.Button02_onclick=function(_a,_b){};});this.on_initEvent=function(){this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.Button03.addEventHandler("onclick",this.Button02_onclick,this);this.Button04.addEventHandler("onclick",this.Button02_onclick,this);};this.loadIncludeScript("Template_19.xfdl");};})();