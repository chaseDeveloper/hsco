﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ComponentGuide_02");this.set_classname("ComponentGuide_02");this.set_titletext("GroupBox/ImageViewer/ListBox/MaskEdit/Div/ProgessBar");this._setFormPosition(0,0,858,955);}_a=new Static("Static60","absolute","0","0","858","30",null,null,this);_a.set_taborder("22");_a.set_text("GroupBox");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","27","49","62","18",null,null,this);_a.set_taborder("55");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","207","49","65","18",null,null,this);_a.set_taborder("56");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","221","858","30",null,null,this);_a.set_taborder("70");_a.set_text("ImageViewer");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","27","467","62","18",null,null,this);_a.set_taborder("84");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","207","467","65","18",null,null,this);_a.set_taborder("85");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","419","858","30",null,null,this);_a.set_taborder("88");_a.set_text("ListBox");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","613","858","30",null,null,this);_a.set_taborder("94");_a.set_text("MaskEdit");_a.set_cssclass("sta_GID_Title");_a.set_wordwrap("none");this.addChild(_a.name,_a);_a=new GroupBox("GroupBox00","absolute","27","61","115","115",null,null,this);_a.set_text("GroupBox");_a.set_taborder("106");this.addChild(_a.name,_a);_a=new GroupBox("GroupBox01","absolute","207","61","115","115",null,null,this);_a.set_text("GroupBox");_a.set_taborder("107");_a.set_enable("false");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer04","absolute","28","289","118","62",null,null,this);_a.set_taborder("108");_a.set_image("URL('theme://images/img_sample.png')");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","27","266","62","18",null,null,this);_a.set_taborder("109");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","207","266","65","18",null,null,this);_a.set_taborder("110");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","377","352","101","18",null,null,this);_a.set_taborder("111");_a.set_text("[stretch : none]");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer00","absolute","207","289","118","62",null,null,this);_a.set_taborder("112");_a.set_image("URL('theme://images/img_sample.png')");_a.set_enable("false");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer01","absolute","377","289","118","62",null,null,this);_a.set_taborder("113");_a.set_image("URL('theme://images/img_sample.png')");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","537","352","101","18",null,null,this);_a.set_taborder("114");_a.set_text("[stretch : fit]");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer02","absolute","537","289","118","62",null,null,this);_a.set_taborder("115");_a.set_image("URL('theme://images/img_sample.png')");_a.set_stretch("fit");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","685","352","153","18",null,null,this);_a.set_taborder("116");_a.set_text("[stretch : fixaspectratio]");_a.set_cssclass("sta_GID_txt02");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer03","absolute","685","289","118","62",null,null,this);_a.set_taborder("117");_a.set_image("URL('theme://images/img_sample.png')");_a.set_stretch("fixaspectratio");this.addChild(_a.name,_a);_a=new ListBox("ListBox00","absolute","28","490","128","86",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("ListBox00_innerdataset",this.ListBox00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">화성도시공사</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("118");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new ListBox("ListBox01","absolute","207","490","128","86",null,null,this);this.addChild(_a.name,_a);var _c=new Dataset("ListBox01_innerdataset",this.ListBox01);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">화성도시공사</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">화성도시공사</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("119");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_enable("false");_a=new Static("Static08","absolute","27","658","62","18",null,null,this);_a.set_taborder("120");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","207","658","65","18",null,null,this);_a.set_taborder("121");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","377","658","65","18",null,null,this);_a.set_taborder("122");_a.set_text("readonly");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","547","658","65","18",null,null,this);_a.set_taborder("123");_a.set_text("essential");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","27","681","110","21",null,null,this);_a.set_taborder("124");_a.set_value("124567");_a.set_mask("###,###");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","207","681","110","21",null,null,this);_a.set_taborder("125");_a.set_value("124567");_a.set_mask("###,###");_a.set_enable("false");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","377","681","110","21",null,null,this);_a.set_taborder("126");_a.set_value("124567");_a.set_mask("###,###");_a.set_cssclass("msk_WF_Readonly");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","547","681","110","21",null,null,this);_a.set_taborder("127");_a.set_value("124567");_a.set_mask("###,###");_a.set_cssclass("msk_WF_Essential");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit04","absolute","667","681","110","21",null,null,this);_a.set_taborder("128");_a.set_value("124567");_a.set_mask("###,###");_a.set_cssclass("msk_WF_Essential");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","0","733","858","30",null,null,this);_a.set_taborder("129");_a.set_text("Div");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","27","777","750","28",null,null,this);_a.set_taborder("130");_a.set_text("PopuoDiv는 일반적으로 Form을 로드할 때 사용한다. 디자인 요소가 필요 할 경우 Class로 지정해서 사용한다.");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","0","831","858","30",null,null,this);_a.set_taborder("131");_a.set_text("ProgressBar");_a.set_cssclass("sta_GID_Title");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","377","876","65","18",null,null,this);_a.set_taborder("132");_a.set_text("disabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","27","876","62","18",null,null,this);_a.set_taborder("133");_a.set_text("enabled");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar00","absolute","27","899","220","15",null,null,this);_a.set_taborder("134");_a.set_pos("50");this.addChild(_a.name,_a);_a=new ProgressBar("ProgressBar01","absolute","377","899","220","15",null,null,this);_a.set_taborder("135");_a.set_pos("50");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Layout("default","",858,955,this,function(_d){_d.set_classname("ComponentGuide_02");_d.set_titletext("GroupBox/ImageViewer/ListBox/MaskEdit/Div/ProgessBar");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){};this.loadIncludeScript("ComponentGuide_04.xfdl");};})();