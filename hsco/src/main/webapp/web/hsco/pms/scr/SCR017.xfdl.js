﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SCR017");this.set_classname("SCR017");this.set_titletext("저축순위검증결과");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"사업지구코드\" type=\"STRING\" size=\"256\"/><Column id=\"사업지구명\" type=\"STRING\" size=\"256\"/><Column id=\"블록\" type=\"STRING\" size=\"256\"/><Column id=\"모집회차\" type=\"STRING\" size=\"256\"/><Column id=\"공급구분\" type=\"STRING\" size=\"256\"/><Column id=\"접수번호\" type=\"STRING\" size=\"256\"/><Column id=\"신청자명\" type=\"STRING\" size=\"256\"/><Column id=\"부적격자여부\" type=\"STRING\" size=\"256\"/><Column id=\"주택관리번호\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업지구코드\">201711</Col><Col id=\"사업지구명\">수원광교, 안양관양, 화성진안1ㆍ2 따복하우스</Col><Col id=\"블록\">수원광교</Col><Col id=\"모집회차\">1</Col><Col id=\"공급구분\">전체</Col><Col id=\"주택관리번호\">DA120</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_main",this);_a._setContents("<ColumnInfo><Column id=\"공급구분\" type=\"STRING\" size=\"256\"/><Column id=\"주택형\" type=\"STRING\" size=\"256\"/><Column id=\"전용면적\" type=\"STRING\" size=\"256\"/><Column id=\"접수번호\" type=\"STRING\" size=\"256\"/><Column id=\"주민등록번호\" type=\"STRING\" size=\"256\"/><Column id=\"성명\" type=\"STRING\" size=\"256\"/><Column id=\"계좌개설은행\" type=\"STRING\" size=\"256\"/><Column id=\"계좌번호\" type=\"STRING\" size=\"256\"/><Column id=\"계좌종목\" type=\"STRING\" size=\"256\"/><Column id=\"청약통장순위\" type=\"STRING\" size=\"256\"/><Column id=\"경과기간\" type=\"STRING\" size=\"256\"/><Column id=\"납입횟수\" type=\"STRING\" size=\"256\"/><Column id=\"납입금액\" type=\"STRING\" size=\"256\"/><Column id=\"검증결과\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"공급구분\">신혼부부특별공급</Col><Col id=\"주택형\">36C</Col><Col id=\"전용면적\">51</Col><Col id=\"접수번호\">5985</Col><Col id=\"주민등록번호\">850925-1234567</Col><Col id=\"성명\">황승언</Col><Col id=\"계좌개설은행\">기업</Col><Col id=\"계좌번호\">123-45-6875</Col><Col id=\"계좌종목\">청약저축</Col><Col id=\"청약통장순위\">1순위</Col><Col id=\"경과기간\">3년</Col><Col id=\"납입횟수\">36</Col><Col id=\"납입금액\">5000000</Col><Col id=\"검증결과\">정상</Col></Row><Row><Col id=\"공급구분\">사회초년생</Col><Col id=\"주택형\">36A</Col><Col id=\"전용면적\">51</Col><Col id=\"접수번호\">6001</Col><Col id=\"주민등록번호\">760623-1234567</Col><Col id=\"성명\">홍수일</Col><Col id=\"계좌개설은행\">기업</Col><Col id=\"계좌번호\">123-45-6875</Col><Col id=\"계좌종목\">청약저축</Col><Col id=\"청약통장순위\">1순위</Col><Col id=\"경과기간\">4년</Col><Col id=\"납입횟수\">48</Col><Col id=\"납입금액\">5000000</Col><Col id=\"검증결과\">정상</Col></Row><Row><Col id=\"공급구분\">노부모부양특별공급</Col><Col id=\"주택형\">36C</Col><Col id=\"전용면적\">51</Col><Col id=\"접수번호\">6018</Col><Col id=\"주민등록번호\">770801-2234567</Col><Col id=\"성명\">박미자</Col><Col id=\"계좌개설은행\">국민</Col><Col id=\"계좌번호\">123-45-6875</Col><Col id=\"계좌종목\">주택청약종합저축</Col><Col id=\"청약통장순위\">2순위</Col><Col id=\"경과기간\">2년</Col><Col id=\"납입횟수\">24</Col><Col id=\"납입금액\">5000000</Col><Col id=\"검증결과\">정상</Col></Row><Row><Col id=\"공급구분\">사회초년생</Col><Col id=\"주택형\">36B</Col><Col id=\"전용면적\">66</Col><Col id=\"접수번호\">6022</Col><Col id=\"주민등록번호\">780322-2234567</Col><Col id=\"성명\">최미자</Col><Col id=\"계좌개설은행\">국민</Col><Col id=\"계좌번호\">123-45-6875</Col><Col id=\"계좌종목\">청약저축</Col><Col id=\"청약통장순위\">3순위</Col><Col id=\"경과기간\">1년</Col><Col id=\"납입횟수\">12</Col><Col id=\"납입금액\">5000000</Col><Col id=\"검증결과\">정상</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"FILE_IMAGE\">theme://images/fileUpDownload/file_icon_HWP.png</Col><Col id=\"ORGINL_FILE_NM\">수원광교 따복하우스 모집 안내문.hwp</Col><Col id=\"FILE_EXTSN\">hwp</Col><Col id=\"FILE_MG\">1183744</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_블록코드",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_CODE_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">수원광교</Col><Col id=\"CODE\">수원광교</Col></Row><Row><Col id=\"CODE_NM\">안양관양</Col><Col id=\"CODE\">안양관양</Col></Row><Row><Col id=\"CODE_NM\">화성진안1</Col><Col id=\"CODE\">화성진안1</Col></Row><Row><Col id=\"CODE_NM\">화성진안2</Col><Col id=\"CODE\">화성진안2</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_난방방식코드",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">개별난방</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE_NM\">중앙난방</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE_NM\">지역난방</Col><Col id=\"CODE\">3</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_공급구분",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\">전체</Col></Row><Row><Col id=\"CODE_NM\">사회초년생</Col><Col id=\"CODE\">사회초년생</Col></Row><Row><Col id=\"CODE_NM\">노령자</Col><Col id=\"CODE\">노부모부양특별공급</Col></Row><Row><Col id=\"CODE_NM\">신혼부부</Col><Col id=\"CODE\">신혼부부특별공급</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_모집회차",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">1 [행복주택]</Col><Col id=\"CODE\">1</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_접수구분",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">모두접수</Col><Col id=\"CODE\">모두접수</Col></Row><Row><Col id=\"CODE_NM\">인터넷접수</Col><Col id=\"CODE\">인터넷접수</Col></Row><Row><Col id=\"CODE_NM\">현장접수</Col><Col id=\"CODE\">현장접수</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_관계",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">분양(임대)중</Col><Col id=\"CODE\">분양(임대)중</Col></Row><Row><Col id=\"CODE_NM\">분양(임대)완료</Col><Col id=\"CODE\">분양(임대)완료</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_EMPMN_PBLANC_NM","absolute","171","5","186","21",null,null,this.div_search);_a.set_taborder("5");_a.set_readonly("true");_a.set_enableevent("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("사업지구");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("31");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","372","5","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("블록");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ODR_SE","absolute","436","5","136","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_블록코드");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_enableevent("true");_a=new Edit("edt_emplnm","absolute","79","5","91","21",null,null,this.div_search);_a.set_taborder("32");_a.set_cssclass("edt_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Button("search","absolute","149","7","21","17",null,null,this.div_search);_a.set_taborder("33");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("34");_a.set_text("공급구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_emplnm01","absolute","436","31","136","21",null,null,this.div_search);_a.set_taborder("36");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","372","31","64","21",null,null,this.div_search);_a.set_taborder("37");_a.set_text("접수번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","588","31","64","21",null,null,this.div_search);_a.set_taborder("38");_a.set_text("신청자명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_emplnm00","absolute","652","31","107","21",null,null,this.div_search);_a.set_taborder("39");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","588","5","64","21",null,null,this.div_search);_a.set_taborder("40");_a.set_text("모집회차");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_ODR_SE00","absolute","652","5","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("41");_a.set_innerdataset("@ds_모집회차");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Combo("cmb_ODR_SE01","absolute","79","31","171","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("42");_a.set_innerdataset("@ds_공급구분");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static06","absolute","572","0","15","33",null,null,this.div_search);_a.set_taborder("43");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","775","5","95","21",null,null,this.div_search);_a.set_taborder("44");_a.set_text("부적격자 여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","775","31","95","21",null,null,this.div_search);_a.set_taborder("45");_a.set_text("주택관리번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_emplnm02","absolute","870","31","107","21",null,null,this.div_search);_a.set_taborder("46");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static09","absolute","759","0","15","33",null,null,this.div_search);_a.set_taborder("47");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","870","5","16","21",null,null,this.div_search);_a.set_taborder("48");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("7");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1031","0","15","735",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","59","1031","10",null,null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","93",null,null,"28","0",this);_a.set_taborder("10");_a.set_binddataset("ds_main");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"150\"/><Column size=\"135\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"6\" text=\"청약신청 내용\"/><Cell col=\"7\" colspan=\"8\" text=\"입주자저축순위 확인 결과\"/><Cell row=\"1\" col=\"1\" text=\"공급구분\"/><Cell row=\"1\" col=\"2\" text=\"주택형\"/><Cell row=\"1\" col=\"3\" text=\"전용면적\"/><Cell row=\"1\" col=\"4\" text=\"접수번호\"/><Cell row=\"1\" col=\"5\" text=\"주민등록번호\"/><Cell row=\"1\" col=\"6\" text=\"성명\"/><Cell row=\"1\" col=\"7\" text=\"계좌개설은행\"/><Cell row=\"1\" col=\"8\" text=\"계좌번호\"/><Cell row=\"1\" col=\"9\" text=\"계좌종목\"/><Cell row=\"1\" col=\"10\" text=\"청약통장순위\"/><Cell row=\"1\" col=\"11\" text=\"경과기간\"/><Cell row=\"1\" col=\"12\" text=\"납입횟수\"/><Cell row=\"1\" col=\"13\" text=\"납입금액\"/><Cell row=\"1\" col=\"14\" text=\"검증 결과\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:공급구분\" combodataset=\"ds_공급구분\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:주택형\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:전용면적\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:접수번호\" combocodecol=\"CODE\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:주민등록번호\" mask=\"######-#******\" maskchar=\"*\"/><Cell col=\"6\" text=\"bind:성명\"/><Cell col=\"7\" text=\"bind:계좌개설은행\"/><Cell col=\"8\" text=\"bind:계좌번호\"/><Cell col=\"9\" text=\"bind:계좌종목\"/><Cell col=\"10\" text=\"bind:청약통장순위\"/><Cell col=\"11\" text=\"bind:경과기간\"/><Cell col=\"12\" text=\"bind:납입횟수\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:납입금액\"/><Cell col=\"14\" text=\"bind:검증결과\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult00","absolute","0","70","246","19",null,null,this);_a.set_taborder("11");_a.set_text("저축순위 검증 결과");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","88","1031","5",null,null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button117","absolute",null,"69","25","19","28",null,this);_a.set_taborder("16");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Button("btn_trnsfer","absolute",null,"69","82","19","56",null,this);_a.set_taborder("17");_a.set_text("중복신청검증");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_trnsfer00","absolute",null,"69","82","19","327",null,this);_a.set_taborder("18");_a.set_text("양식다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Radio("Radio00","absolute",null,"69","200","21","118",null,this);this.addChild(_a.name,_a);var _b=new Dataset("Radio00_innerdataset",this.Radio00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">금융결제원</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">국민은행</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("19");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_direction("vertical");_a.set_value("1");_a.set_index("0");_a=new Layout("default","",0,59,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SCR017");_c.set_titletext("저축순위검증결과");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.spn_EMPMN_YEAR","value","ds_cond00","EMPMN_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SearchArea.spn_ODR_SE","value","ds_cond00","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_SearchArea.cmb_APYEXM_REALM_SE","value","ds_cond00","APYEXM_REALM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SearchArea.cmb_APYEXM_SE","value","ds_cond00","APYEXM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_SearchArea.edt_NM_KOREAN","value","ds_cond00","NM_KOREAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item36","div_search.edt_EMPMN_PBLANC_NM","value","ds_cond","사업지구명");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_search.cmb_ODR_SE","value","ds_cond","블록");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.edt_emplnm","value","ds_cond","사업지구코드");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.edt_emplnm01","value","ds_cond","접수번호");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.edt_emplnm00","value","ds_cond","신청자명");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.cmb_ODR_SE00","value","ds_cond","모집회차");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.cmb_ODR_SE01","value","ds_cond","공급구분");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_search.edt_emplnm02","value","ds_cond","주택관리번호");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_search.CheckBox00","value","ds_cond","부적격자여부");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SCR017.xfdl","lib::comInclude.xjs");this.addIncludeScript("SCR017.xfdl","mis_lib::misUtil.xjs");this.registerScript("SCR017.xfdl",function(){this.SCR006_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.SCR006_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){};this.fn_callbackAfter=function(){};this.fn_search=function(){};this.fn_save=function(){};this.fn_transaction=function(_a){switch(_a){case "selectTbhrmEcnySportGnrlR":var _b="hsco/mis/hrm/HRM020201/tbhrmEcnySportGnrlR.do";var _c="input16=ds_cond00";var _d="ds_ecnySportGnrlList=output16";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectTbhrmEcnySportGnrlR":break;}}};this.fn_insert=function(){};this.fn_delete=function(){};this.fn_cancel=function(){};this.div_search_cmb_ODR_SE_onitemchanged=function(_a,_b){};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SCR006_oninit,this);this.addEventHandler("onload",this.SCR006_onload,this);this.div_search.cmb_ODR_SE.addEventHandler("onitemchanged",this.div_search_cmb_ODR_SE_onitemchanged,this);this.div_search.edt_emplnm.addEventHandler("onkeyup",this.edt_emplnm_onkeyup,this);this.div_search.search.addEventHandler("onclick",this.div_sear_search_onclick,this);this.div_search.edt_emplnm01.addEventHandler("onkeyup",this.edt_emplnm_onkeyup,this);this.div_search.edt_emplnm00.addEventHandler("onkeyup",this.edt_emplnm_onkeyup,this);this.div_search.cmb_ODR_SE00.addEventHandler("onitemchanged",this.div_search_cmb_ODR_SE_onitemchanged,this);this.div_search.cmb_ODR_SE01.addEventHandler("onitemchanged",this.div_search_cmb_ODR_SE_onitemchanged,this);this.div_search.edt_emplnm02.addEventHandler("onkeyup",this.edt_emplnm_onkeyup,this);this.Static07.addEventHandler("onclick",this.Static07_onclick,this);this.btn_trnsfer.addEventHandler("onclick",this.div_work_btn_trnsfer_onclick,this);this.btn_trnsfer00.addEventHandler("onclick",this.div_work_btn_trnsfer_onclick,this);};this.loadIncludeScript("SCR017.xfdl");};})();