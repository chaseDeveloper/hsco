﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SCR011");this.set_classname("SCR011");this.set_titletext("청약종합현황조회");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_단지명_검색",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">000</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE_NM\">수원 광교</Col><Col id=\"CODE\">001</Col></Row><Row><Col id=\"CODE\">002</Col><Col id=\"CODE_NM\">안양 관양</Col></Row><Row><Col id=\"CODE\">003</Col><Col id=\"CODE_NM\">화성 진안1</Col></Row><Row><Col id=\"CODE\">004</Col><Col id=\"CODE_NM\">화성 진안2</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_청약종합현황",this);_a._setContents("<ColumnInfo><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"공급유형\" type=\"STRING\" size=\"256\"/><Column id=\"공급구분\" type=\"STRING\" size=\"256\"/><Column id=\"주택형\" type=\"STRING\" size=\"256\"/><Column id=\"전용면적\" type=\"STRING\" size=\"256\"/><Column id=\"현장접수\" type=\"STRING\" size=\"256\"/><Column id=\"인터넷접수\" type=\"STRING\" size=\"256\"/><Column id=\"계\" type=\"STRING\" size=\"256\"/><Column id=\"모집호수\" type=\"STRING\" size=\"256\"/><Column id=\"중복신청자수\" type=\"STRING\" size=\"256\"/><Column id=\"저축_처리자수\" type=\"STRING\" size=\"256\"/><Column id=\"저축_부적격자수\" type=\"STRING\" size=\"256\"/><Column id=\"당첨_본사\" type=\"STRING\" size=\"256\"/><Column id=\"당첨_금융결제원\" type=\"STRING\" size=\"256\"/><Column id=\"서류_부적격자수\" type=\"STRING\" size=\"256\"/><Column id=\"서류_소명자수\" type=\"STRING\" size=\"256\"/><Column id=\"자산_부적격자수\" type=\"STRING\" size=\"256\"/><Column id=\"자산_소명자수\" type=\"STRING\" size=\"256\"/><Column id=\"계약대상자수\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"공급구분\">신혼부부</Col><Col id=\"주택형\">36A</Col><Col id=\"전용면적\">36.7</Col><Col id=\"현장접수\">2</Col><Col id=\"인터넷접수\">6</Col><Col id=\"계\">8</Col><Col id=\"모집호수\">38</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"주택형\">36B</Col><Col id=\"공급구분\">신혼부부</Col><Col id=\"전용면적\">36.7</Col><Col id=\"현장접수\">4</Col><Col id=\"계\">4</Col><Col id=\"인터넷접수\">0</Col><Col id=\"모집호수\">38</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row><Row><Col id=\"순번\">3</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"주택형\">38</Col><Col id=\"공급구분\">신혼부부</Col><Col id=\"전용면적\">38</Col><Col id=\"현장접수\">3</Col><Col id=\"계\">3</Col><Col id=\"인터넷접수\">0</Col><Col id=\"모집호수\">3</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row><Row><Col id=\"순번\">4</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"주택형\">44</Col><Col id=\"공급구분\">신혼부부</Col><Col id=\"전용면적\">44.89</Col><Col id=\"현장접수\">0</Col><Col id=\"인터넷접수\">3</Col><Col id=\"계\">3</Col><Col id=\"모집호수\">13</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row><Row><Col id=\"순번\">5</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"주택형\">36C</Col><Col id=\"공급구분\">고령자</Col><Col id=\"전용면적\">36.83</Col><Col id=\"현장접수\">0</Col><Col id=\"인터넷접수\">2</Col><Col id=\"계\">2</Col><Col id=\"모집호수\">6</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row><Row><Col id=\"순번\">6</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"주택형\">36C</Col><Col id=\"공급구분\">주거급여수급자</Col><Col id=\"전용면적\">36.83</Col><Col id=\"현장접수\">0</Col><Col id=\"인터넷접수\">2</Col><Col id=\"계\">2</Col><Col id=\"모집호수\">6</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row><Row><Col id=\"순번\">7</Col><Col id=\"공급유형\">공공분양</Col><Col id=\"주택형\">36D</Col><Col id=\"공급구분\">주거급여수급자</Col><Col id=\"전용면적\">36.3</Col><Col id=\"현장접수\">0</Col><Col id=\"인터넷접수\">1</Col><Col id=\"계\">1</Col><Col id=\"모집호수\">1</Col><Col id=\"중복신청자수\">0</Col><Col id=\"저축_처리자수\">0</Col><Col id=\"저축_부적격자수\">0</Col><Col id=\"당첨_본사\">0</Col><Col id=\"당첨_금융결제원\">0</Col><Col id=\"서류_부적격자수\">0</Col><Col id=\"서류_소명자수\">0</Col><Col id=\"자산_부적격자수\">0</Col><Col id=\"자산_소명자수\">0</Col><Col id=\"계약대상자수\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","0","43",null,"19","908",null,this);_a.set_taborder("6");_a.set_text("청약종합현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("sta_top","absolute","0","33",null,"10","28",null,this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0","15","735",null,null,this);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("39");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("73");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("108");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("109");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","82",null,"5","0",null,this.div_search);_a.set_taborder("110");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","280","0","15",null,null,"0",this.div_search);_a.set_taborder("111");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","496","0","17",null,null,"0",this.div_search);_a.set_taborder("112");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("113");_a.set_text("사업지구");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchCnd","absolute","295","5","87","21",null,null,this.div_search);_a.set_taborder("114");_a.set_text("단지명(블록)");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_searchCnd2","absolute","393","5","103","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("115");_a.set_innerdataset("ds_단지명_검색");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("001");_a.set_text("수원 광교");_a.set_index("1");_a=new Static("sta_","absolute","513","5","64","21",null,null,this.div_search);_a.set_taborder("116");_a.set_text("모집회차");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_setleSttusSe","absolute","585","5","135","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_setleSttusSe_innerdataset",this.div_search.cmb_setleSttusSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">1 [행복주택]</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("117");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("001");_a.set_text("1 [행복주택]");_a.set_index("0");_a=new Static("Static01","absolute","720","1","17",null,null,"-1",this.div_search);_a.set_taborder("118");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_Search","absolute","85","5","195","21",null,null,this.div_search);_a.set_taborder("121");_a.set_text("Div00");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_deptCode","absolute","0","0","76",null,null,"0",this.div_search.div_Search);_a.set_taborder("12");_a.set_maxlength("6");_a.set_cssclass("edt_WF_Essential");_a.set_value("201711");this.div_search.div_Search.addChild(_a.name,_a);_a=new Button("btn_dept","absolute","54","0","22",null,null,"0",this.div_search.div_Search);_a.set_taborder("13");_a.set_cssclass("btn_WF_Search");this.div_search.div_Search.addChild(_a.name,_a);_a=new Edit("edt_deptNm","absolute","78","0",null,null,"0","0",this.div_search.div_Search);_a.set_taborder("14");_a.set_cssclass("edt_WF_Essential");_a.set_value("수원광교,안양관양,화성진안1·2 따복하우스");this.div_search.div_Search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("61");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_inorgCtnuCntrwk00","absolute","0","68",null,null,"28","0",this);_a.set_taborder("82");_a.set_binddataset("ds_청약종합현황");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"공급구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"주택형\"/><Cell col=\"3\" rowspan=\"2\" text=\"전용면적\"/><Cell col=\"4\" colspan=\"3\" text=\"신청자\"/><Cell col=\"7\" rowspan=\"2\" text=\"모집호수\"/><Cell col=\"8\" rowspan=\"2\" text=\"중복신청자수\"/><Cell col=\"9\" colspan=\"2\" text=\"저축순위검증\"/><Cell col=\"11\" colspan=\"2\" text=\"당첨 처리자\"/><Cell col=\"13\" colspan=\"2\" text=\"서류검증결과\"/><Cell col=\"15\" colspan=\"2\" text=\"자산검증결과\"/><Cell col=\"17\" rowspan=\"2\" text=\"계약대상자수\"/><Cell row=\"1\" col=\"4\" text=\"현장접수\"/><Cell row=\"1\" col=\"5\" text=\"인터넷접수\"/><Cell row=\"1\" col=\"6\" text=\"계\"/><Cell row=\"1\" col=\"9\" text=\"처리자수\"/><Cell row=\"1\" col=\"10\" text=\"부적격자수\"/><Cell row=\"1\" col=\"11\" text=\"본사\"/><Cell row=\"1\" col=\"12\" text=\"금융결제원\"/><Cell row=\"1\" col=\"13\" text=\"부적격자수\"/><Cell row=\"1\" col=\"14\" text=\"소명자수\"/><Cell row=\"1\" col=\"15\" text=\"부적격자수\"/><Cell row=\"1\" col=\"16\" text=\"소명자수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"selectbackground:#ffffffff;\" text=\"bind:공급구분\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:주택형\"/><Cell col=\"3\" text=\"bind:전용면적\"/><Cell col=\"4\" text=\"bind:현장접수\"/><Cell col=\"5\" text=\"bind:인터넷접수\"/><Cell col=\"6\" text=\"bind:계\"/><Cell col=\"7\" text=\"bind:모집호수\"/><Cell col=\"8\" text=\"bind:중복신청자수\"/><Cell col=\"9\" text=\"bind:저축_처리자수\"/><Cell col=\"10\" text=\"bind:저축_부적격자수\"/><Cell col=\"11\" text=\"bind:당첨_본사\"/><Cell col=\"12\" text=\"bind:당첨_금융결제원\"/><Cell col=\"13\" text=\"bind:서류_부적격자수\"/><Cell col=\"14\" text=\"bind:서류_소명자수\"/><Cell col=\"15\" text=\"bind:자산_부적격자수\"/><Cell col=\"16\" text=\"bind:자산_소명자수\"/><Cell col=\"17\" text=\"bind:계약대상자수\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",195,21,this.div_search.div_Search,function(_c){_c.set_taborder("121");_c.set_text("Div00");});this.div_search.div_Search.addLayout(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_c){_c.set_taborder("73");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SCR011");_c.set_titletext("청약종합현황조회");});this.addLayout(_a.name,_a);_a=new BindItem("item4","div_search.edt_BSNS_CODE","value","ds_cntrct","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_BSNS_NM","value","ds_cntrct","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SCR031.xfdl","lib::comInclude.xjs");this.addIncludeScript("SCR031.xfdl","mis_lib::misUtil.xjs");this.registerScript("SCR031.xfdl",function(){this.SCR011_onload=function(_a,_b){this.div_고령자.set_visible(true);this.div_사회초년생.set_visible(false);this.div_신혼부부.set_visible(false);this.div_주거급여수급자.set_visible(false);this.div_사회초년생.set_top(this.div_고령자.top);this.div_신혼부부.set_top(this.div_고령자.top);this.div_주거급여수급자.set_top(this.div_고령자.top);this.div_사회초년생.set_left(this.div_고령자.left);this.div_신혼부부.set_left(this.div_고령자.left);this.div_주거급여수급자.set_left(this.div_고령자.left);};this.div_search_Combo01_onitemchanged=function(_a,_b){this.div_고령자.set_visible(false);this.div_사회초년생.set_visible(false);this.div_신혼부부.set_visible(false);this.div_주거급여수급자.set_visible(false);switch(_b.postvalue){case "1":this.tab_.set_top(257);this.div_고령자.set_visible(true);this.ds_fileList.setColumn(0,"ORGINL_FILE_NM","재능기부신청서.hwp");break;case "2":this.tab_.set_top(337);this.div_사회초년생.set_visible(true);this.ds_fileList.setColumn(0,"ORGINL_FILE_NM","재능기부신청서.hwp");break;case "3":this.tab_.set_top(337);this.div_신혼부부.set_visible(true);this.ds_fileList.setColumn(0,"ORGINL_FILE_NM","혼인관계증명서.hwp");break;case "4":this.tab_.set_top(257);this.div_주거급여수급자.set_visible(true);this.ds_fileList.setColumn(0,"ORGINL_FILE_NM","재능기부신청서.hwp");break;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.SCR011_onload,this);this.addEventHandler("oninit",this.SCR011_oninit,this);this.div_search.cmb_searchCnd2.addEventHandler("onitemchanged",this.div_search_cmb_searchCnd2_onitemchanged,this);this.div_search.div_Search.edt_deptCode.addEventHandler("onkeydown",this.edit_onkeydown,this);this.div_search.div_Search.edt_deptCode.addEventHandler("onchanged",this.edit_onchanged,this);this.div_search.div_Search.btn_dept.addEventHandler("onclick",this.div_Search_btn_dept_onclick,this);this.div_search.div_Search.edt_deptNm.addEventHandler("onkeydown",this.edit_onkeydown,this);this.div_search.div_Search.edt_deptNm.addEventHandler("onkeyup",this.edit_onkeyup,this);this.div_search.div_Search.edt_deptNm.addEventHandler("onchanged",this.edit_onchanged,this);};this.loadIncludeScript("SCR031.xfdl");};})();