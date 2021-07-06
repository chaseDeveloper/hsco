﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SYM050700");this.set_classname("SYM050700");this.set_titletext("개인정보다운로드이력");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_dwlnHist",this);_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVONSH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"SRCH_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_IP\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_KEYWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SEARCH_KEYWORD</Col><Col id=\"nlength\">30</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">사용자아이디/사용자명</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">FILE_NM</Col><Col id=\"nlength\">200</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">파일명</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">DWLD_IP</Col><Col id=\"nlength\">34</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"msgId\">다운로드IP</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">검색시작일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ED_DT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">검색종료일자</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_ST_DT</Col><Col id=\"to\">SRCH_ED_DT</Col><Col id=\"msgId\">검색시작일자^검색종료일자</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_serchCombo",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">USER_NM</Col><Col id=\"CONTENT\">성명</Col></Row><Row><Col id=\"CODE\">USER_ID</Col><Col id=\"CONTENT\">사번</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("grd_DWLNLOG","absolute","0","94",null,null,"28","-5",this);_a.set_taborder("1");_a.set_binddataset("ds_dwlnHist");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_nodatatext("조회결과가 없습니다");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"350\"/><Column size=\"400\"/><Column size=\"180\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"다운로드파일명\"/><Cell col=\"4\" text=\"다운로드사유\"/><Cell col=\"5\" text=\"다운로드일시\"/><Cell col=\"6\" text=\"다운로드IP\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:FILE_NM\" tooltiptext=\"bind:FILE_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:PRVONSH_CN\" tooltiptext=\"bind:PRVONSH_CN\"/><Cell col=\"5\" text=\"bind:DWLD_DT\"/><Cell col=\"6\" text=\"bind:DWLD_IP\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"60","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_search00","absolute","15","5","38","21",null,null,this.div_search);_a.set_taborder("107");_a.set_text("기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","175","5","16","21",null,null,this.div_search);_a.set_taborder("109");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_search01","absolute","316","34","77","21",null,null,this.div_search);_a.set_taborder("111");_a.set_text("다운로드IP");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_search02","absolute","15","34","51","21",null,null,this.div_search);_a.set_taborder("112");_a.set_text("파일명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_FILE_NM","absolute","66","34","235","22",null,null,this.div_search);_a.set_taborder("113");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","313","0","15",null,null,"0",this.div_search);_a.set_taborder("115");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","562","0","15",null,null,"0",this.div_search);_a.set_taborder("119");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_DWLD_IP","absolute","393","34","169","22",null,null,this.div_search);_a.set_taborder("122");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","53","5","122","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("123");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_value("null");_a=new Calendar("Calendar01","absolute","191","5","122","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("124");_a.set_dateformat("yyyy-MM-dd ddd");_a.set_value("null");_a=new Static("Static08","absolute","788","0","15",null,null,"0",this.div_search);_a.set_taborder("125");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_USER","absolute","448","5","114","22",null,null,this.div_search);_a.set_taborder("126");this.div_search.addChild(_a.name,_a);_a=new Combo("SearchComboBox","absolute","328","5","117","22",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("127");_a.set_text("Combo00");_a.set_innerdataset("@ds_serchCombo");_a.set_codecolumn("CODE");_a.set_datacolumn("CONTENT");_a=new Static("Static02","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("128");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","60","1031","10",null,null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","70","175","19",null,null,this);_a.set_taborder("3");_a.set_text("개인정보다운로드이력 상세");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","0","89","1031","5",null,null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1020,41,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SYM050700");_b.set_titletext("개인정보다운로드이력");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.Calendar00","value","ds_cond","SRCH_ST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.Calendar01","value","ds_cond","SRCH_ED_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_FILE_NM","value","ds_cond","FILE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_DWLD_IP","value","ds_cond","DWLD_IP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.SearchComboBox","value","ds_cond","SEARCH_CONDITION");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.edt_USER","value","ds_cond","SEARCH_KEYWORD");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SYM050700.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("SYM050700.xfdl","lib::comInclude.xjs");this.registerScript("SYM050700.xfdl",function(){this.SYM050700_oninit=function(_a,_b){};this.SYM050700_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.ds_cond.clearData();this.ds_cond.addRow();var _c=this.dateUtils.today();this.ds_cond.setColumn(0,"SRCH_ST_DT",_c.substr(0,4)+"0101");this.ds_cond.setColumn(0,"SRCH_ED_DT",_c);this.div_search.SearchComboBox.set_index(0);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.ds_dwlnHist.clearData();this.fn_transaction("selectDwlnHistList");};this.fn_transaction=function(_a){switch(_a){case "selectDwlnHistList":var _b="/hsco/com/sym/lgm/SYM050700/selectDwlnHistList.do";var _c="input1=ds_cond";var _d="ds_dwlnHist=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectDwlnHistList":break;}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.SYM050700_onload,this);this.div_search.sta_search01.addEventHandler("onclick",this.div_search_sta_search01_onclick,this);this.Static07.addEventHandler("onclick",this.Static07_onclick,this);};this.loadIncludeScript("SYM050700.xfdl");};})();