﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM040500");this.set_classname("Pattern_03");this.set_titletext("서비스관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_SVC",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SVC_ID\" type=\"STRING\" size=\"100\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"200\"/><Column id=\"SVC_CLASS\" type=\"STRING\" size=\"300\"/><Column id=\"SVC_DC\" type=\"STRING\" size=\"500\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"24\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"24\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_OPRTIN",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SVC_ID\" type=\"STRING\" size=\"100\"/><Column id=\"OPRTIN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OPRTIN_SE_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"OPRTIN_DC\" type=\"STRING\" size=\"500\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"24\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"24\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_COND",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_OP_SEARCH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_PROCESS_SE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("3");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","70","21",null,null,this.div_search);_a.set_taborder("32");_a.set_text("서비스ID");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","90","4","131","21",null,null,this.div_search);_a.set_taborder("49");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","236","5","70","21",null,null,this.div_search);_a.set_taborder("50");_a.set_text("서비스명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","311","4","137","21",null,null,this.div_search);_a.set_taborder("51");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("56");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","1046","0","13","735",null,null,this);_a.set_taborder("57");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","22",this);_a.set_taborder("69");_a.style.set_padding("0 0 0 0");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","0",null,"19","904",null,this.div_work);_a.set_taborder("424");_a.set_text("서비스 목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Button("btn_svcAdd","absolute",null,"0","64","19","142",null,this.div_work);_a.set_taborder("430");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.addChild(_a.name,_a);_a=new Button("btn_svcDel","absolute",null,"0","64","19","75",null,this.div_work);_a.set_taborder("431");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.addChild(_a.name,_a);_a=new Static("Static09","absolute","570","429","136","21",null,null,this.div_work);_a.set_taborder("449");_a.set_text("오퍼레이션 상세");_a.set_cssclass("sta_WF_Title03");this.div_work.addChild(_a.name,_a);_a=new Static("Static14","absolute","570","420",null,"10","0",null,this.div_work);_a.set_taborder("451");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static15","absolute","670","454",null,"27","0",null,this.div_work);_a.set_taborder("462");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static20","absolute","570","449",null,"5","0",null,this.div_work);_a.set_taborder("455");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("GRD_SVC","absolute","0","24",null,"263","0",null,this.div_work);_a.set_taborder("457");_a.set_binddataset("DS_SVC");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"125\"/><Column size=\"165\"/><Column size=\"193\"/><Column size=\"253\"/><Column size=\"64\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" text=\"Column0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"서비스ID\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"서비스명\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"서비스클래스\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SVC_ID\"/><Cell col=\"2\" text=\"bind:SVC_NM\"/><Cell col=\"3\" text=\"bind:SVC_DC\"/><Cell col=\"4\" text=\"bind:SVC_CLASS\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static12","absolute","670","506",null,"27","0",null,this.div_work);_a.set_taborder("459");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static18","absolute","670","532",null,"27","0",null,this.div_work);_a.set_taborder("467");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_opNM","absolute","682","509","345","21",null,null,this.div_work);_a.set_taborder("460");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static26","absolute","570","454","110","27",null,null,this.div_work);_a.set_taborder("461");_a.set_text("서비스ID");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static22","absolute","670","558",null,"27","0",null,this.div_work);_a.set_taborder("471");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static16","absolute","570","506","110","27",null,null,this.div_work);_a.set_taborder("463");_a.set_text("오퍼레이션명");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit34","absolute","682","457","345","21",null,null,this.div_work);_a.set_taborder("464");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static17","absolute","570","532","110","27",null,null,this.div_work);_a.set_taborder("465");_a.set_text("오퍼레이션설명");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static19","absolute","570","558","110","27",null,null,this.div_work);_a.set_taborder("469");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","682","535","345","21",null,null,this.div_work);_a.set_taborder("472");this.div_work.addChild(_a.name,_a);_a=new Static("Static23","absolute","670","480",null,"27","0",null,this.div_work);_a.set_taborder("474");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","682","483","345","21",null,null,this.div_work);_a.set_taborder("475");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static24","absolute","570","480","110","27",null,null,this.div_work);_a.set_taborder("476");_a.set_text("서비스명");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Grid("GRD_OPTRIN","absolute","0","455","560",null,null,"-16",this.div_work);_a.set_taborder("478");_a.set_binddataset("DS_OPRTIN");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"94\"/><Column size=\"109\"/><Column size=\"180\"/><Column size=\"82\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"서비스ID\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"오퍼레이션명\"/><Cell col=\"3\" text=\"오퍼레이션설명\"/><Cell col=\"4\" text=\"버튼구분\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SVC_ID\"/><Cell col=\"2\" text=\"bind:OPRTIN_NM\"/><Cell col=\"3\" text=\"bind:OPRTIN_DC\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"bind:OPRTIN_SE_CODE\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","429","170","21",null,null,this.div_work);_a.set_taborder("482");_a.set_text("서비스 오퍼레이션 목록");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","449",null,"5","472",null,this.div_work);_a.set_taborder("483");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","420",null,"10","471",null,this.div_work);_a.set_taborder("484");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_opDel","absolute","423","430","64","19",null,null,this.div_work);_a.set_taborder("489");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.div_work.addChild(_a.name,_a);_a=new Button("btn_opAdd","absolute","356","430","64","19",null,null,this.div_work);_a.set_taborder("490");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_work.addChild(_a.name,_a);_a=new CheckBox("CheckBox02","absolute","685","561","120","21",null,null,this.div_work);_a.set_taborder("496");_a.set_text("사용");_a.set_value("true");_a.set_cssclass("chk_WF_Essential");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new Static("Static27","absolute","0","310",null,"5","0",null,this.div_work);_a.set_taborder("497");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static28","absolute","99","341",null,"27","0",null,this.div_work);_a.set_taborder("498");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static29","absolute","99","315",null,"27","0",null,this.div_work);_a.set_taborder("499");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static30","absolute","99","367",null,"27","0",null,this.div_work);_a.set_taborder("500");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static32","absolute","0","341","100","27",null,null,this.div_work);_a.set_taborder("503");_a.set_text("서비스설명");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static33","absolute","0","315","100","27",null,null,this.div_work);_a.set_taborder("504");_a.set_text("서비스ID");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static38","absolute","0","367","100","27",null,null,this.div_work);_a.set_taborder("505");_a.set_text("서비스클래스");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","102","344","926","21",null,null,this.div_work);_a.set_taborder("507");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit09","absolute","102","370","411","21",null,null,this.div_work);_a.set_taborder("508");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Static("Static61","absolute","515","315","100","27",null,null,this.div_work);_a.set_taborder("511");_a.set_text("서비스명");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static67","absolute","515","367","100","27",null,null,this.div_work);_a.set_taborder("512");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_svcID","absolute","102","318","411","21",null,null,this.div_work);_a.set_taborder("516");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit06","absolute","617","318","411","21",null,null,this.div_work);_a.set_taborder("517");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","620","370","120","21",null,null,this.div_work);_a.set_taborder("518");_a.set_text("사용");_a.set_value("true");_a.set_cssclass("chk_WF_Essential");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new Static("Static51","absolute","99","393",null,"27","0",null,this.div_work);_a.set_taborder("519");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit21","absolute","102","396","153","21",null,null,this.div_work);_a.set_taborder("520");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static84","absolute","0","393","100","27",null,null,this.div_work);_a.set_taborder("521");_a.set_text("등록자ID");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit24","absolute","359","396","154","21",null,null,this.div_work);_a.set_taborder("522");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static87","absolute","257","393","100","27",null,null,this.div_work);_a.set_taborder("523");_a.set_text("등록일시");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit27","absolute","617","396","153","21",null,null,this.div_work);_a.set_taborder("524");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static90","absolute","515","393","100","27",null,null,this.div_work);_a.set_taborder("525");_a.set_text("수정자ID");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","670","584",null,"27","0",null,this.div_work);_a.set_taborder("532");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static98","absolute","772","393","100","27",null,null,this.div_work);_a.set_taborder("526");_a.set_text("수정일시");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("Edit30","absolute","874","396","154","21",null,null,this.div_work);_a.set_taborder("527");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","285",null,"10","0",null,this.div_work);_a.set_taborder("528");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static34","absolute","1","295","136","21",null,null,this.div_work);_a.set_taborder("529");_a.set_text("서비스 상세");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Button("btn_rowSave","absolute","490","430","66","19",null,null,this.div_work);_a.set_taborder("530");_a.set_text("OP저장");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_mstSave","absolute",null,"0","69","19","2",null,this.div_work);_a.set_taborder("531");_a.set_text("서비스저장");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","19",null,"5","0",null,this.div_work);_a.set_taborder("533");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Combo("edt_process_se","absolute","682","630","150","22",null,null,this);this.addChild(_a.name,_a);_a.set_codecolumn("CODE");_a.set_innerdataset("@DS_PROCESS_SE");_a.set_datacolumn("CODE_NM");_a.set_taborder("70");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static17","absolute","570","627","110","27",null,null,this);_a.set_taborder("71");_a.set_text("버튼구분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("3");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("69");_b.style.set_padding("0 0 0 0");_b.set_scrollbars("none");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("서비스관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.Edit00","value","DS_COND","SVC_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.edt_svcID","value","DS_SVC","SVC_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.Edit06","value","DS_SVC","SVC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.Edit04","value","DS_SVC","SVC_DC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.Edit09","value","DS_SVC","SVC_CLASS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.CheckBox00","value","DS_SVC","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.CheckBox00","truevalue","1","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.CheckBox00","falsevalue","0","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_work.Edit21","value","DS_SVC","REGISTER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_work.Edit24","value","DS_SVC","REGIST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_work.Edit27","value","DS_SVC","UPDUSR_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_work.Edit30","value","DS_SVC","UPDT_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_work.Edit34","value","DS_OPRTIN","SVC_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_work.Edit05","value","DS_OPRTIN","SVC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_work.edt_opNM","value","DS_OPRTIN","OPRTIN_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_work.Edit02","value","DS_OPRTIN","OPRTIN_DC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_work.CheckBox02","value","DS_OPRTIN","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_work.CheckBox02","truevalue","1","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","edt_process_se","value","DS_OPRTIN","OPRTIN_SE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_search.Edit01","value","DS_COND","SVC_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SYM040500.xfdl","lib::comInclude.xjs");this.registerScript("SYM040500.xfdl",function(){this.form_oninit=function(_a,_b){this.fn_init_form();};this.form_onload=function(_a,_b){this.fn_initCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_initCombo=function(_a,_b){var _c=[["DS_PROCESS_SE","COM026","1",""]];this.gfn_comboLoad(_c,this.fn_callbackAfter);};this.fn_search=function(){this.div_work.edt_svcID.set_readonly("true");var _a="getSvcList";var _b="hsco/com/sym/mnm/SYM040500/getSvcList.do";var _c="input1=DS_COND";var _d="DS_SVC=output1";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);nRow=this.DS_SVC.rowposition();var _f=this.DS_SVC.getColumn(e.row,"SVC_ID");this.DS_OP_SEARCH.setColumn(0,"SVC_ID",_f);this.fn_oprtinSearch();};this.fn_oprtinSearch=function(){var _a="getOprtinList";var _b="hsco/com/sym/mnm/SYM040500/getOprtinList.do";var _c="input1=DS_OP_SEARCH";var _d="DS_OPRTIN=output1";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);this.div_work.edt_opNM.set_readonly("true");};this.fn_save=function(){this.fn_svcSave();};this.fn_svcSave=function(){if(this.utlf_necessaryParam(this.div_work.GRD_SVC,"SVC_ID,SVC_NM,SVC_CLASS,USE_AT")){return;}var _a="execSvc";var _b="hsco/com/sym/mnm/SYM040500/execSvc.do";var _c="input1=DS_SVC:U";var _d="";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_oprtinSave=function(){if(this.utlf_necessaryParam(this.div_work.GRD_OPTRIN,"OPRTIN_NM,OPRTIN_SE_CODE,USE_AT")){return;}var _a="execOprtin";var _b="hsco/com/sym/mnm/SYM040500/execOprtin.do";var _c="input1=DS_OPRTIN:U";var _d="";var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_insert=function(){var _a=this.DS_SVC.addRow();this.div_work.edt_svcID.set_readonly("false");};this.fn_delete=function(){this.gfn_delMultiRow(this.DS_SVC);};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.DS_SVC.reset();this.DS_SVC.applyChange();}};this.fn_callbackAfter=function(_a){switch(_a){case "":break;}};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "execSvc":case "execOprtin":this.gfn_callBackMsg(_a,_b,_c);break;}};this.btn_search_onclick=function(_a,_b){this.div_work.edt_svcID.set_readonly("true");this.fn_search();};this.div_work_GRD_SVC_onselectchanged=function(_a,_b){var _c=this.DS_SVC.getColumn(_b.row,"SVC_ID");this.DS_OP_SEARCH.setColumn(0,"SVC_ID",_c);this.fn_oprtinSearch();this.div_work.GRD_OPTRIN.setCellProperty("head",0,"text",'0');};this.div_work_btn_mstSave_onclick=function(_a,_b){this.fn_svcSave();};this.div_work_btn_rowSave_onclick=function(_a,_b){this.fn_oprtinSave();};this.div_work_btn_svcAdd_onclick=function(_a,_b){this.fn_insert();};this.div_work_btn_svcDel_onclick=function(_a,_b){this.fn_delete();};this.div_work_btn_opAdd_onclick=function(_a,_b){var _c=this.DS_SVC.rowposition;var _d=this.DS_SVC.getColumn(_c,"SVC_ID");var _e=this.DS_SVC.getColumn(_c,"SVC_NM");var _f=this.DS_OPRTIN.addRow();this.DS_OPRTIN.setColumn(_f,"SVC_ID",_d);this.DS_OPRTIN.setColumn(_f,"SVC_NM",_e);this.div_work.edt_opNM.set_readonly("false");};this.div_work_btn_opDel_onclick=function(_a,_b){this.gfn_delMultiRow(this.DS_OPRTIN);};this.div_work_GRD_SVC_oncellclick=function(_a,_b){if(this.DS_SVC.getRowType(this.DS_SVC.rowposition)==Dataset.ROWTYPE_INSERT){this.div_work.edt_svcID.set_readonly("false");}else{this.div_work.edt_svcID.set_readonly("true");}};this.div_work_GRD_OPTRIN_onheadclick=function(_a,_b){this.gfn_setGridCheckAll(_a,_b);};this.div_work_GRD_OPTRIN_oncellclick=function(_a,_b){if(this.DS_OPRTIN.getRowType(this.DS_OPRTIN.rowposition)==Dataset.ROWTYPE_INSERT){this.div_work.edt_opNM.set_readonly("false");}else{this.div_work.edt_opNM.set_readonly("true");}};});this.on_initEvent=function(){this.DS_SVC.addEventHandler("onrowposchanged",this.ds_Menu_onrowposchanged,this);this.DS_SVC.addEventHandler("cancolumnchange",this.ds_Menu_cancolumnchange,this);this.addEventHandler("oninit",this.form_oninit,this);this.addEventHandler("onload",this.form_onload,this);this.div_work.btn_svcAdd.addEventHandler("onclick",this.div_work_btn_svcAdd_onclick,this);this.div_work.btn_svcDel.addEventHandler("onclick",this.div_work_btn_svcDel_onclick,this);this.div_work.GRD_SVC.addEventHandler("onselectchanged",this.div_work_GRD_SVC_onselectchanged,this);this.div_work.GRD_SVC.addEventHandler("oncellclick",this.div_work_GRD_SVC_oncellclick,this);this.div_work.GRD_OPTRIN.addEventHandler("onheadclick",this.div_work_GRD_OPTRIN_onheadclick,this);this.div_work.GRD_OPTRIN.addEventHandler("oncellclick",this.div_work_GRD_OPTRIN_oncellclick,this);this.div_work.btn_opDel.addEventHandler("onclick",this.div_work_btn_opDel_onclick,this);this.div_work.btn_opAdd.addEventHandler("onclick",this.div_work_btn_opAdd_onclick,this);this.div_work.btn_rowSave.addEventHandler("onclick",this.div_work_btn_rowSave_onclick,this);this.div_work.btn_mstSave.addEventHandler("onclick",this.div_work_btn_mstSave_onclick,this);};this.loadIncludeScript("SYM040500.xfdl");};})();