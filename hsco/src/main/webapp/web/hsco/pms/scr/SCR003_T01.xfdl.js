﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SCR003_T01");this.set_classname("SCR003_T01");this.set_titletext("공지사항 상세 내용");this._setFormPosition(0,0,1031,735);}_a=new Dataset("Dataset00",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">감리테스트</Col><Col id=\"Column1\">임창정</Col><Col id=\"Column2\">2017-08-10 09:10:11</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">4</Col><Col id=\"Column5\">2017-08-10 09:10:11</Col></Row><Row><Col id=\"Column0\">경기도시공사에서 알려드립니다.</Col><Col id=\"Column1\">따복이</Col><Col id=\"Column2\">2017-08-09 14:20:37</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">19</Col><Col id=\"Column5\">2017-08-09 14:20:37</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_back00","absolute","100","36",null,null,"0","0",this);_a.set_taborder("0");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_back4","absolute","107","10",null,"27","0",null,this);_a.set_taborder("2");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_year00","absolute","479","10","110","27",null,null,this);_a.set_taborder("3");_a.set_text("게시여부");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","112","13","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a.set_value("20170801");_a=new Calendar("cal_endDe","absolute","302","13","102","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.set_value("20170805");_a=new Static("Static04","absolute","288","17","10","16",null,null,this);_a.set_taborder("6");_a.set_text("~");this.addChild(_a.name,_a);_a=new Static("sta_year02","absolute","634","10","110","27",null,null,this);_a.set_taborder("7");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Static("sta_year01","absolute","0","10","110","27",null,null,this);_a.set_taborder("8");_a.set_text("게시기간");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","604","13","20","21",null,null,this);_a.set_taborder("9");_a.set_value("true");this.addChild(_a.name,_a);_a=new Edit("edt_searchVal02","absolute","746","13","282","21",null,null,this);_a.set_taborder("10");_a.set_cssclass("edt_WF_Essential");_a.set_value("감리테스트");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","214","13","71","21",null,null,this);_a.set_taborder("11");_a.set_type("string");_a.set_mask("##:##:##");_a.style.set_align("center");_a.set_value("090000");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","406","13","71","21",null,null,this);_a.set_taborder("12");_a.set_type("string");_a.set_mask("##:##:##");_a.style.set_align("center");_a.set_value("180000");this.addChild(_a.name,_a);_a=new Static("sta_year03","absolute","0","36","110",null,null,"0",this);_a.set_taborder("14");_a.set_text("내용");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","112","39","916",null,null,"0",this);_a.set_taborder("13");this.addChild(_a.name,_a);_a=new Static("st_editor","absolute","0","0",null,null,"0","-535",this.Div00);_a.set_taborder("7");_a.set_cssclass("WF_sta_editor");this.Div00.addChild(_a.name,_a);_a=new Button("btn_dragResizeContent","absolute","311","519","87","9",null,null,this.Div00);_a.set_taborder("8");_a.set_cssclass("Editor_btn_rsiz");_a.set_visible("false");_a.style.setStyleValue("cursor","mouseover","n-resize");_a.style.setStyleValue("cursor","pushed","n-resize");_a.style.setStyleValue("cursor","selected","n-resize");this.Div00.addChild(_a.name,_a);_a=new Div("div_toolbar","absolute","2","1","897","30",null,null,this.Div00);_a.set_taborder("9");_a.set_scrollbars("none");this.Div00.addChild(_a.name,_a);_a=new Button("btn_template","absolute","547","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("97");_a.set_cssclass("Editor_btn_layout");_a.set_tooltiptext("템플릿");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_highlight","absolute","617","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("98");_a.set_cssclass("Editor_btn_highlight");_a.set_tooltiptext("코드 하이라이트");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_left","absolute","330","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("99");_a.set_cssclass("Editor_btn_alignL");_a.set_tooltiptext("왼쪽 맞춤");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_center","absolute","353","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("100");_a.set_cssclass("Editor_btn_alignC");_a.set_tooltiptext("가운데 맞춤");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_right","absolute","376","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("101");_a.set_cssclass("Editor_btn_alignR");_a.set_tooltiptext("오른쪽 맞춤");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_full","absolute","399","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("102");_a.set_cssclass("Editor_btn_alignJ");_a.set_tooltiptext("양쪽 맞춤");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_indentout","absolute","422","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("103");_a.set_cssclass("Editor_btn_justL");_a.set_tooltiptext("내어쓰기");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_indentin","absolute","445","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("104");_a.set_cssclass("Editor_btn_justR");_a.set_tooltiptext("들여쓰기");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_numberlist","absolute","468","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("105");_a.set_cssclass("Editor_btn_listOdr");_a.set_tooltiptext("번호 매기기");_a.style.set_color("#555555ff");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_marklist","absolute","491","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("106");_a.set_cssclass("Editor_btn_list");_a.set_tooltiptext("글머리 기호");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_linkdel","absolute","640","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("107");_a.set_cssclass("Editor_btn_linkDel");_a.set_visible("false");_a.set_tooltiptext("링크 삭제");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_link","absolute","640","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("108");_a.set_cssclass("Editor_btn_link");_a.set_tooltiptext("링크");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_bkcolor","absolute","195","4","32","22",null,null,this.Div00.div_toolbar);_a.set_taborder("109");_a.set_text("■");_a.set_cssclass("Editor_btn_bgclr2");_a.set_tooltiptext("폰트 배경색");_a.style.set_color("#555555ff");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_color","absolute","162","4","32","22",null,null,this.Div00.div_toolbar);_a.set_taborder("110");_a.set_text("■");_a.set_cssclass("Editor_btn_ftclr");_a.set_tooltiptext("폰트색");_a.style.set_color("#555555ff");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_bold","absolute","228","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("111");_a.set_cssclass("Editor_btn_bold");_a.set_tooltiptext("굵게");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_italic","absolute","251","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("112");_a.set_cssclass("Editor_btn_italic");_a.set_tooltiptext("기울임꼴");_a.style.set_color("#555555ff");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_underline","absolute","274","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("113");_a.set_cssclass("Editor_btn_underline");_a.set_tooltiptext("밑줄");_a.style.set_gradation("linear 0,0 #ffffffff 0,100 #e4e4e4ff");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_strikechar","absolute","297","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("114");_a.set_cssclass("Editor_btn_strike");_a.set_tooltiptext("취소선");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_specialchar","absolute","594","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("115");_a.set_cssclass("Editor_btn_symbol");_a.set_tooltiptext("기호 넣기");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_layoutTable","absolute","524","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("116");_a.set_cssclass("Editor_btn_grid");_a.set_tooltiptext("표 추가");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_font","absolute","2","4","102","22",null,null,this.Div00.div_toolbar);_a.set_taborder("117");_a.set_text("FONT");_a.set_cssclass("Editor_btn_font");_a.set_tooltiptext("글꼴");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_fontsize","absolute","105","4","56","22",null,null,this.Div00.div_toolbar);_a.set_taborder("118");_a.set_text("SIZE");_a.set_cssclass("Editor_btn_size");_a.set_tooltiptext("크기");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_merge","absolute","4","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("119");_a.set_cssclass("Editor_btn_algn01");_a.set_tooltiptext("병합");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_resetMerge","absolute","29","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("120");_a.set_cssclass("Editor_btn_algn02");_a.set_tooltiptext("분할");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_insertRowAbove","absolute","54","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("121");_a.set_cssclass("Editor_btn_algn03");_a.set_tooltiptext("위로 추가");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_insertRowBelow","absolute","79","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("122");_a.set_cssclass("Editor_btn_algn04");_a.set_tooltiptext("아래로 추가");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_insertColLeft","absolute","104","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("123");_a.set_cssclass("Editor_btn_algn05");_a.set_tooltiptext("좌측으로 추가");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_insertColRight","absolute","129","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("124");_a.set_cssclass("Editor_btn_algn06");_a.set_tooltiptext("우측으로 추가");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_deleteRow","absolute","154","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("125");_a.set_cssclass("Editor_btn_algn07");_a.set_tooltiptext("행 삭제");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_deleteCol","absolute","179","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("126");_a.set_cssclass("Editor_btn_algn08");_a.set_tooltiptext("열 삭제");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_tablebgcolor","absolute","291","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("127");_a.set_cssclass("Editor_btn_bgclr");_a.set_tooltiptext("테이블 배경색");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_tablebdcolor","absolute","216","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("128");_a.set_cssclass("Editor_penclr");_a.set_tooltiptext("선색");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_tablebdheight","absolute","241","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("129");_a.set_cssclass("Editor_btn_bgclr");_a.set_tooltiptext("선두께");_a.style.set_image("URL('image::richTextEditor/Editor_btn_bold2.png')");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_tablebdrange","absolute","266","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("130");_a.set_cssclass("Editor_btn_grid2");_a.set_tooltiptext("선테두리");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_editTable","absolute",null,"1","20","29","0",null,this.Div00.div_toolbar);_a.set_taborder("131");_a.set_cssclass("Editor_btn_dn");_a.style.setStyleValue("border","selected","0 solid #f29335ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_image","absolute","663","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("132");_a.set_cssclass("Editor_btn_image");_a.set_tooltiptext("이미지");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_blockquote","absolute","570","4","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("133");_a.set_cssclass("Editor_btn_quo");_a.set_tooltiptext("인용구");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_verticaltop","absolute","322","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("134");_a.set_cssclass("Editor_btn_alignT");_a.set_visible("false");_a.set_tooltiptext("상단 정렬");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_verticalmiddle","absolute","345","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("135");_a.set_cssclass("Editor_btn_alignM");_a.set_visible("false");_a.set_tooltiptext("중단 정렬");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new Button("btn_verticalbottom","absolute","368","34","22","22",null,null,this.Div00.div_toolbar);_a.set_taborder("136");_a.set_cssclass("Editor_btn_alignB");_a.set_visible("false");_a.set_tooltiptext("하단 정렬");_a.style.setStyleValue("background","selected","#fff568ff");this.Div00.div_toolbar.addChild(_a.name,_a);_a=new TextArea("txt_htmlEditor","absolute","0","30",null,null,"0","3",this.Div00);_a.set_taborder("10");_a.set_wordwrap("char");_a.set_cssclass("Editor_tex_none");_a.set_value("감리테스트 내용입니다.");this.Div00.addChild(_a.name,_a);_a=new Div("div_mode","absolute","1","493","708","25",null,null,this.Div00);_a.set_taborder("11");_a.style.set_color("#ccccccff");_a.set_visible("false");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_focus","absolute","8","8","0","0",null,null,this.Div00);_a.set_taborder("12");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",897,30,this.Div00.div_toolbar,function(_b){_b.set_taborder("9");_b.set_scrollbars("none");});this.Div00.div_toolbar.addLayout(_a.name,_a);_a=new Layout("default","",672,27,this.Div00.div_mode,function(_b){_b.set_taborder("11");_b.style.set_color("#ccccccff");_b.set_visible("false");});this.Div00.div_mode.addLayout(_a.name,_a);_a=new Layout("default","",916,0,this.Div00,function(_b){_b.set_taborder("13");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1031,735,this,function(_b){_b.set_classname("SCR003_T01");_b.set_titletext("공지사항 상세 내용");});this.addLayout(_a.name,_a);_a=new BindItem("item0","cal_bgnDe","value","ds_masterList","게시시작일자");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","cal_endDe","value","ds_masterList","게시종료일자");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","CheckBox00","value","ds_masterList","게시여부");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_searchVal02","value","ds_masterList","질문");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","MaskEdit00","value","ds_masterList","게시시작시간");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","MaskEdit01","value","ds_masterList","게시종료시간");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","Div00.txt_htmlEditor","value","ds_masterList","답변");this.addChild(_a.name,_a);_a.bind();_a=null;};this.on_initEvent=function(){this.sta_year00.addEventHandler("onclick",this.sta_year00_onclick,this);this.Static04.addEventHandler("onclick",this.Static04_onclick,this);this.sta_year02.addEventHandler("onclick",this.sta_year00_onclick,this);this.sta_year03.addEventHandler("onclick",this.sta_year00_onclick,this);this.Div00.btn_dragResizeContent.addEventHandler("onlbuttondown",this.btn_dragResizeContent_onlbuttondown,this);this.Div00.btn_dragResizeContent.addEventHandler("onlbuttonup",this.btn_dragResizeContent_onlbuttonup,this);this.Div00.div_toolbar.btn_template.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_highlight.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_left.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_center.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_right.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_full.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_indentout.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_indentin.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_numberlist.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_marklist.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_linkdel.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_link.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_bkcolor.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_color.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_bold.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_italic.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_underline.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_strikechar.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_specialchar.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_layoutTable.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_font.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_fontsize.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_merge.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_resetMerge.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_insertRowAbove.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_insertRowBelow.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_insertColLeft.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_insertColRight.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_deleteRow.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_deleteCol.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_tablebgcolor.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_tablebdcolor.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_tablebdheight.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_tablebdrange.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_editTable.addEventHandler("onclick",this.div_toolbar_btn_editTable_onclick,this);this.Div00.div_toolbar.btn_image.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_blockquote.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_verticaltop.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_verticalmiddle.addEventHandler("onclick",this.toolbarButton_onclick,this);this.Div00.div_toolbar.btn_verticalbottom.addEventHandler("onclick",this.toolbarButton_onclick,this);};this.loadIncludeScript("SCR003_T01.xfdl");};})();