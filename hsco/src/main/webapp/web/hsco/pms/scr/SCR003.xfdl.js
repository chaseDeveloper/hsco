﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SCR003");this.set_classname("SCR003");this.set_titletext("공지사항관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("Dataset00",this);_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">감리테스트</Col><Col id=\"Column1\">임창정</Col><Col id=\"Column2\">2017-08-10 09:10:11</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">4</Col><Col id=\"Column5\">2017-08-10 09:10:11</Col></Row><Row><Col id=\"Column0\">경기도시공사에서 알려드립니다.</Col><Col id=\"Column1\">따복이</Col><Col id=\"Column2\">2017-08-09 14:20:37</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">19</Col><Col id=\"Column5\">2017-08-09 14:20:37</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","477","0",null,"5","404",null,this.div_search);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","477",null,null,"5","404","0",this.div_search);_a.set_taborder("14");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CNTRCT_NO00","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("15");_a.set_text("작성기간");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CNTRCT_NO","absolute","314","5","38","21",null,null,this.div_search);_a.set_taborder("17");_a.set_text("검색");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","299","5","15","21",null,null,this.div_search);_a.set_taborder("21");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","352","5","90","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("Combo00_innerdataset",this.div_search.Combo00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("22");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("0");_a.set_text("전체");_a=new Edit("Edit00","absolute","444","5","350","21",null,null,this.div_search);_a.set_taborder("23");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","15",null,"13","0",this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13",null,"0","0",this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","-1","43","150","19",null,null,this);_a.set_taborder("4");_a.set_text("공지사항 내용");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","62",null,"5","28",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","79","5","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_value("20170801");_a=new Static("Static02","absolute","184","5","12","21",null,null,this);_a.set_taborder("7");_a.set_text("~");this.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","199","5","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.set_value("20170831");_a=new Button("btn_excelExport","absolute",null,"43","25","19","28",null,this);_a.set_taborder("9");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","67",null,"243","28",null,this);_a.set_taborder("10");_a.set_binddataset("Dataset00");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"게시일시\"/><Cell col=\"4\" text=\"게시여부\"/><Cell col=\"5\" text=\"조회수\"/><Cell col=\"6\" text=\"작성일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" style=\"align:right middle;\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Tab("Tab00","absolute","1","320",null,null,"28","0",this);_a.set_taborder("12");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.Tab00);_a.set_text("공지사항 상세 내용");_a.set_url("pms_scr::SCR003_T01.xfdl");this.Tab00.addChild(_a.name,_a);_a=new Tabpage("tabpage2",this.Tab00);_a.set_text("첨부파일");this.Tab00.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute","573","10","67","19",null,null,this.Tab00.tabpage2);_a.set_taborder("0");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute","644","10","68","19",null,null,this.Tab00.tabpage2);_a.set_taborder("1");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute","715","10","85","19",null,null,this.Tab00.tabpage2);_a.set_taborder("2");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute","0","34","800",null,null,"0",this.Tab00.tabpage2);_a.set_taborder("3");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","29",null,"5","0",null,this.Tab00.tabpage2);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,"10","0",null,this.Tab00.tabpage2);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Static("Static42","absolute","800","10","10",null,null,"0",this.Tab00.tabpage2);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.Tab00.tabpage2.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1030,385,this.Tab00.tabpage1,function(_c){_c.set_text("공지사항 상세 내용");_c.set_url("pms_scr::SCR003_T01.xfdl");});this.Tab00.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Tab00.tabpage2,function(_c){_c.set_text("첨부파일");});this.Tab00.tabpage2.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SCR003");_c.set_titletext("공지사항관리");});this.addLayout(_a.name,_a);_a=new BindItem("item4","cal_bgnDe","value","ds_cond","BGN_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","cal_endDe","value","ds_cond","END_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item28","Tab00.tabpage2.btn_delFiles","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item29","Tab00.tabpage2.btn_uploadFiles","enable","ds_edcAcmsltList","RESULT_ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_scr::SCR003_T01.xfdl");};this.on_initEvent=function(){this.addEventHandler("oninit",this.SCR003_oninit,this);this.addEventHandler("onload",this.SCR003_onload,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);this.Tab00.tabpage2.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.Tab00.tabpage2.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.Tab00.tabpage2.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.Tab00.tabpage2.grd_cmmnAtchmnfl.addEventHandler("oncellclick",this.grd_cmmnAtchmnfl_oncellclick,this);this.Tab00.tabpage2.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);};this.loadIncludeScript("SCR003.xfdl");this.loadPreloadList();};})();