(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("pattern01");this.set_classname("pattern01");this.set_titletext("용역기성요청관리");this._setFormPosition(0,0,1059,735);}_a=new Static("Static137","absolute","273","551","758","10",null,null,this);_a.set_taborder("174");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Radio("Radio00","absolute","0","-3","260","21",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">진행사업</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">완료사업</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("175");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_index("0");_a=new Static("Static41","absolute","0","13","263","5",null,null,this);_a.set_taborder("176");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","0","18","263","717",null,null,this);_a.set_taborder("177");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업코드\"/><Cell col=\"1\" text=\"사업명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","273","33","758","10",null,null,this);_a.set_taborder("194");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","263","0","10","735",null,null,this);_a.set_taborder("201");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","273","43","537","134",null,null,this);_a.set_taborder("202");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계약번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"계약구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"계약명\"/><Cell col=\"3\" rowspan=\"2\" text=\"계약금액\"/><Cell col=\"4\" rowspan=\"2\" text=\"계약일자\"/><Cell col=\"5\" colspan=\"2\" text=\"용역계획기간\"/><Cell row=\"1\" col=\"5\" text=\"착수일자\"/><Cell row=\"1\" col=\"6\" text=\"완성일자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid04","absolute","820","43","211","134",null,null,this);_a.set_taborder("203");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"59\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수급구분\"/><Cell col=\"2\" text=\"수입자\"/><Cell col=\"3\" text=\"대표자\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","273","177","758","10",null,null,this);_a.set_taborder("205");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","273","187","82","19",null,null,this);_a.set_taborder("208");_a.set_text("요청번호");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","458","187","63","19",null,null,this);_a.set_taborder("210");_a.set_text("요청일자");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","632","187","84","19",null,null,this);_a.set_taborder("211");_a.set_text("요청차수");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","273","210","82","21",null,null,this);_a.set_taborder("212");_a.set_text("검사업회자1");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","522","187","95","19",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("215");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static15","absolute","273","230","758","5",null,null,this);_a.set_taborder("222");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","350","187","5","43",null,null,this);_a.set_taborder("223");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","711","187","5","43",null,null,this);_a.set_taborder("228");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","355","187","88","19",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("229");_a=new Edit("Edit00","absolute","716","187","85","19",null,null,this);_a.set_taborder("231");_a.set_value("용역");this.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","355","211","88","19",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("233");_a=new Edit("Edit01","absolute","444","211","173","19",null,null,this);_a.set_taborder("234");this.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","803","211","173","19",null,null,this);_a.set_taborder("235");this.addChild(_a.name,_a);_a=new Combo("Combo02","absolute","716","211","85","19",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("236");_a=new Static("Static25","absolute","632","210","84","21",null,null,this);_a.set_taborder("237");_a.set_text("검사업회자2");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","273","235","758","129",null,null,this);_a.set_taborder("238");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"73\"/><Column size=\"73\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"113\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"차수\"/><Cell col=\"1\" rowspan=\"2\" text=\"기성&#13;&#10;검사일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"기성&#13;&#10;지출일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"전회기성액\"/><Cell col=\"4\" colspan=\"2\" text=\"금회기성액\"/><Cell col=\"6\" colspan=\"2\" text=\"누계기성액\"/><Cell col=\"8\" rowspan=\"2\" text=\"잔여기성액\"/><Cell row=\"1\" col=\"4\" text=\"금액\"/><Cell row=\"1\" col=\"5\" text=\"기성율(%)\"/><Cell row=\"1\" col=\"6\" text=\"금액\"/><Cell row=\"1\" col=\"7\" text=\"기성율(%)\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","273","364","758","10",null,null,this);_a.set_taborder("239");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid03","absolute","820","398","211","153",null,null,this);_a.set_taborder("240");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"119\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"공개\"/><Cell col=\"2\" text=\"관련자료첨부하기\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","536","398","10","153",null,null,this);_a.set_taborder("241");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button109","absolute","885","-1665","64","19",null,null,this);_a.set_taborder("242");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("Button110","absolute","952","-1665","64","19",null,null,this);_a.set_taborder("243");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","900","374","64","19",null,null,this);_a.set_taborder("244");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","967","374","64","19",null,null,this);_a.set_taborder("245");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","273","393","758","5",null,null,this);_a.set_taborder("246");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid05","absolute","273","398","263","153",null,null,this);_a.set_taborder("247");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"71\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"기술자격\"/><Cell col=\"3\" text=\"등급\"/><Cell col=\"4\" colspan=\"2\"><Cell text=\"선택\"/><Cell col=\"1\" displaytype=\"checkbox\"/></Cell></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"2\"><Cell/><Cell col=\"1\"/></Cell></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","810","398","10","153",null,null,this);_a.set_taborder("249");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid06","absolute","546","398","264","153",null,null,this);_a.set_taborder("250");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"57\"/><Column size=\"60\"/><Column size=\"55\"/><Column size=\"40\"/><Column size=\"20\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수급구분\"/><Cell col=\"2\" text=\"수급자\"/><Cell col=\"3\" text=\"대표자\"/><Cell col=\"4\" colspan=\"2\"><Cell text=\"선택\"/><Cell col=\"1\" displaytype=\"checkbox\"/></Cell></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"2\"><Cell/><Cell col=\"1\"/></Cell></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static32","absolute","273","561","90","19",null,null,this);_a.set_taborder("253");_a.set_text("결재양식구분");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","358","561","5","19",null,null,this);_a.set_taborder("255");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Combo("Combo03","absolute","363","561","63","19",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("256");_a=new Static("Static35","absolute","810","43","10","134",null,null,this);_a.set_taborder("257");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","809","561","10","174",null,null,this);_a.set_taborder("258");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","425","561","15","19",null,null,this);_a.set_taborder("259");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","441","561","38","19",null,null,this);_a.set_taborder("260");_a.set_text("제목");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","474","561","5","19",null,null,this);_a.set_taborder("261");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","479","561","141","19",null,null,this);_a.set_taborder("262");_a.set_value("용역감독관 감독조사(기성)");this.addChild(_a.name,_a);_a=new Static("Static40","absolute","620","561","15","19",null,null,this);_a.set_taborder("263");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Static("Static44","absolute","819","561","38","19",null,null,this);_a.set_taborder("265");_a.set_text("기타");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static46","absolute","852","561","5","19",null,null,this);_a.set_taborder("267");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","857","561","174","19",null,null,this);_a.set_taborder("268");_a.set_value("용역감독관 감독조사(기성)");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","678","561","64","19",null,null,this);_a.set_taborder("270");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("Button06","absolute","745","561","64","19",null,null,this);_a.set_taborder("271");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Static("Static48","absolute","273","580","758","5",null,null,this);_a.set_taborder("272");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid07","absolute","273","585","536","150",null,null,this);_a.set_taborder("274");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"404\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"내역\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("Grid08","absolute","819","585","212","150",null,null,this);_a.set_taborder("275");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"본문\"/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("277");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("278");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","991","211","40","19",null,null,this);_a.set_taborder("280");_a.set_text("조회");_a.set_cssclass("btn_WF_GridSearch");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","976","187","15","43",null,null,this);_a.set_taborder("281");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Button("Button01","absolute","635","561","40","19",null,null,this);_a.set_taborder("282");_a.set_text("조회");_a.set_cssclass("btn_WF_GridSearch");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","273","0",null,"33","28",null,this);_a.set_taborder("283");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","5","64","21",null,null,this.Div00);_a.set_taborder("2");_a.set_text("계약구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.Div00.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","79","5","137","21",null,null,this.Div00);_a.set_taborder("3");_a.set_value("용역");this.Div00.addChild(_a.name,_a);_a=new Static("Static23","absolute","617","187","15","43",null,null,this);_a.set_taborder("284");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.Div00,function(_c){_c.set_taborder("283");_c.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("pattern01");_c.set_titletext("용역기성요청관리");});this.addLayout(_a.name,_a);_a=null;};this.on_initEvent=function(){this.Radio00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);};this.loadIncludeScript("Template_03.xfdl");};})();