﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ComponentGuide_02");this.set_classname("ComponentGuide_02");this.set_titletext("Radio/Spin/Static");this._setFormPosition(0,0,858,783);}_a=new Static("Static60","absolute","0","0","858","30",null,null,this);_a.set_taborder("22");_a.set_text("Radio");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","27","49","62","18",null,null,this);_a.set_taborder("55");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","207","49","65","18",null,null,this);_a.set_taborder("56");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","377","49","65","18",null,null,this);_a.set_taborder("57");_a.set_text("essential");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","27","167","62","18",null,null,this);_a.set_taborder("84");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","207","167","65","18",null,null,this);_a.set_taborder("85");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","377","167","65","18",null,null,this);_a.set_taborder("86");_a.set_text("readonly");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","547","167","65","18",null,null,this);_a.set_taborder("87");_a.set_text("essential");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","119","858","30",null,null,this);_a.set_taborder("88");_a.set_text("Spin");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Radio("Radio00","absolute","27","69","120","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("106");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("0");_a=new Radio("Radio02","absolute","377","69","120","21",null,null,this);this.addChild(_a.name,_a);var _c=new Dataset("Radio02_innerdataset",this.Radio02);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("107");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_cssclass("rdo_WF_Essential");_a.set_index("0");_a=new Radio("Radio01","absolute","207","69","120","21",null,null,this);this.addChild(_a.name,_a);var _d=new Dataset("Radio01_innerdataset",this.Radio01);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_taborder("108");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_enable("false");_a.set_index("0");_a=new Spin("Spin00","absolute","27","190","110","21",null,null,this);_a.set_taborder("109");_a.set_value("0");this.addChild(_a.name,_a);_a=new Spin("Spin01","absolute","207","190","110","21",null,null,this);_a.set_taborder("110");_a.set_value("0");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Spin("Spin02","absolute","377","190","110","21",null,null,this);_a.set_taborder("111");_a.set_value("0");_a.set_readonly("true");_a.set_cssclass("spn_WF_Readonly");this.addChild(_a.name,_a);_a=new Spin("Spin03","absolute","547","190","110","21",null,null,this);_a.set_taborder("112");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","247","858","30",null,null,this);_a.set_taborder("113");_a.set_text("Static");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","27","293","62","18",null,null,this);_a.set_taborder("114");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","377","293","65","18",null,null,this);_a.set_taborder("115");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","27","307","221","89",null,null,this);_a.set_taborder("116");_a.set_text("화성도시공사\r\n\r\n가나다라마바사아자차카타파하\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\n1234567890");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","377","307","221","89",null,null,this);_a.set_taborder("117");_a.set_text("화성도시공사\r\n\r\n가나다라마바사아자차카타파하\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\n1234567890");_a.set_enable("false");this.addChild(_a.name,_a);_a=new TextArea("TextArea03","absolute","27","429","503","113",null,null,this);_a.set_taborder("118");_a.set_value("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v='12'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v='red'></fc><fc v='#FF00FF'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v='굴림'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v='true'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v='true'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v='true'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v='true'></s>");_a.set_readonly("true");_a.set_linespace("3");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static62","absolute","27","405","265","21",null,null,this);_a.set_taborder("119");_a.set_text("usedecorate =\"<b v='true'>true</b>\"");_a.set_usedecorate("true");_a.set_visible("false");_a.getSetter("class").set("sta_WF_Info_Orange");_a.style.set_color("darkred");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new Static("Static38","absolute","27","584","130","21",null,null,this);_a.set_taborder("120");_a.set_text("1depth Title");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","207","584","130","21",null,null,this);_a.set_taborder("121");_a.set_text("2depth Title");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","377","584","130","21",null,null,this);_a.set_taborder("122");_a.set_text("3depth Title");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","27","564","199","21",null,null,this);_a.set_taborder("123");_a.set_text("* Bullet Title");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","27","622","199","21",null,null,this);_a.set_taborder("124");_a.set_text("* Label Static");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static35","absolute","27","642","80","21",null,null,this);_a.set_taborder("125");_a.set_text("조회label");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","27","680","199","21",null,null,this);_a.set_taborder("126");_a.set_text("* Label Static");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","136","704","128","29",null,null,this);_a.set_taborder("128");_a.set_text("Data ");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static33","absolute","27","704","110","29",null,null,this);_a.set_taborder("127");_a.set_text("출력Label");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Layout("default","",858,783,this,function(_e){_e.set_classname("ComponentGuide_02");_e.set_titletext("Radio/Spin/Static");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.Radio02.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.Radio01.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.TextArea03.addEventHandler("oneditclick",this.TextArea03_oneditclick,this);};this.loadIncludeScript("ComponentGuide_05.xfdl");};})();