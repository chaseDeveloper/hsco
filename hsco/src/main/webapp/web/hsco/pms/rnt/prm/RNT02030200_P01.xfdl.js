﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02030200_P01");this.set_classname("RNT02030200_P01");this.set_titletext("기거주자일괄등록");this._setFormPosition(0,0,1024,733);}_a=new Dataset("ds_yn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">○</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">×</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_POSBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");this.addChild(_a.name,_a);_a=new Dataset("ds_excel",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_format",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCT_POSBL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_CO\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">101</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140315</Col><Col id=\"RENT_BGNDE\">20140315</Col><Col id=\"RENT_ENDDE\">20150314</Col><Col id=\"GTN\">3000000</Col><Col id=\"RNTCHRG\">550000</Col><Col id=\"TELNO\">01041163030</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">102</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140325</Col><Col id=\"RENT_BGNDE\">20140325</Col><Col id=\"RENT_ENDDE\">20150324</Col><Col id=\"GTN\">3000000</Col><Col id=\"RNTCHRG\">500000</Col><Col id=\"TELNO\">01024824947</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">103</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140425</Col><Col id=\"RENT_BGNDE\">20140425</Col><Col id=\"RENT_ENDDE\">20150424</Col><Col id=\"GTN\">10000000</Col><Col id=\"RNTCHRG\">450000</Col><Col id=\"TELNO\">01040746075</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">105</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140317</Col><Col id=\"RENT_BGNDE\">20140317</Col><Col id=\"RENT_ENDDE\">20150516</Col><Col id=\"GTN\">4000000</Col><Col id=\"RNTCHRG\">550000</Col><Col id=\"TELNO\">01035406061</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">201</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140328</Col><Col id=\"RENT_BGNDE\">20140328</Col><Col id=\"RENT_ENDDE\">20150327</Col><Col id=\"GTN\">5000000</Col><Col id=\"RNTCHRG\">550000</Col><Col id=\"TELNO\">01028119171</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">202</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140510</Col><Col id=\"RENT_BGNDE\">20140510</Col><Col id=\"RENT_ENDDE\">20150509</Col><Col id=\"GTN\">5000000</Col><Col id=\"RNTCHRG\">450000</Col><Col id=\"TELNO\">01080089342</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">205</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140420</Col><Col id=\"RENT_BGNDE\">20140420</Col><Col id=\"RENT_ENDDE\">20150419</Col><Col id=\"GTN\">5000000</Col><Col id=\"RNTCHRG\">550000</Col><Col id=\"TELNO\">01074480333</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">301</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140330</Col><Col id=\"RENT_BGNDE\">20140330</Col><Col id=\"RENT_ENDDE\">20150319</Col><Col id=\"GTN\">12000000</Col><Col id=\"RNTCHRG\">950000</Col><Col id=\"TELNO\">01045243440</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">덕성골든빌</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">303</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20140523</Col><Col id=\"RENT_BGNDE\">20140523</Col><Col id=\"RENT_ENDDE\">20150523</Col><Col id=\"GTN\">5000000</Col><Col id=\"RNTCHRG\">520000</Col><Col id=\"TELNO\">01080082134</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">201</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20080117</Col><Col id=\"RENT_BGNDE\">20080117</Col><Col id=\"RENT_ENDDE\">20160116</Col><Col id=\"GTN\">20000000</Col><Col id=\"RNTCHRG\">100000</Col><Col id=\"TELNO\">01195631568</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">203</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20081117</Col><Col id=\"RENT_BGNDE\">20081117</Col><Col id=\"RENT_ENDDE\">20141116</Col><Col id=\"GTN\">35000000</Col><Col id=\"RNTCHRG\">60000</Col><Col id=\"TELNO\">0195229958</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">205</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">3</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20110210</Col><Col id=\"RENT_BGNDE\">20110210</Col><Col id=\"RENT_ENDDE\">20150209</Col><Col id=\"GTN\">60000000</Col><Col id=\"RNTCHRG\">0</Col><Col id=\"TELNO\">01026664778</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">302</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20100108</Col><Col id=\"RENT_BGNDE\">20100108</Col><Col id=\"RENT_ENDDE\">20150107</Col><Col id=\"GTN\">20000000</Col><Col id=\"RNTCHRG\">80000</Col><Col id=\"TELNO\">01071081145</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">303</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20120319</Col><Col id=\"RENT_BGNDE\">20120319</Col><Col id=\"RENT_ENDDE\">20160319</Col><Col id=\"GTN\">40000000</Col><Col id=\"RNTCHRG\">50000</Col><Col id=\"TELNO\">01088015838</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">305</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">3</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20120723</Col><Col id=\"RENT_BGNDE\">20120723</Col><Col id=\"RENT_ENDDE\">20140722</Col><Col id=\"GTN\">58000000</Col><Col id=\"RNTCHRG\">0</Col><Col id=\"TELNO\">01195840873</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">501</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">1</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20061119</Col><Col id=\"RENT_BGNDE\">20061119</Col><Col id=\"RENT_ENDDE\">20141118</Col><Col id=\"GTN\">20000000</Col><Col id=\"RNTCHRG\">190000</Col><Col id=\"TELNO\">01028112850</Col><Col id=\"RM\"/></Row><Row><Col id=\"RENT_HOUSE_NM\">골드하이츠</Col><Col id=\"DONG\">0001</Col><Col id=\"HO\">502</Col><Col id=\"NM\">홍길동</Col><Col id=\"IHIDNUM\">1111112222222</Col><Col id=\"FAMILY_CO\">4</Col><Col id=\"QUALF_NM\">기존계약자</Col><Col id=\"CNTRCT_DE\">20130410</Col><Col id=\"RENT_BGNDE\">20130410</Col><Col id=\"RENT_ENDDE\">20150410</Col><Col id=\"GTN\">80000000</Col><Col id=\"RNTCHRG\">150000</Col><Col id=\"TELNO\">01092545542</Col><Col id=\"RM\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctrPosblHouse",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AREA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_STRUCTURE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1","0",null,"15","1",null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","205","21",null,null,this);_a.set_taborder("4");_a.set_text("기거주자일괄등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute","906","15","50","25",null,null,this);_a.set_taborder("6");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","1","40",null,"5","-1",null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","959","15","50","25",null,null,this);_a.set_taborder("9");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Grid("grd_cntrctList","absolute","15","72",null,"646","15",null,this);_a.set_taborder("10");_a.set_binddataset("ds_cntrctList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"55\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"45\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계약가능여부\"/><Cell col=\"1\" text=\"주택명\"/><Cell col=\"2\" text=\"주택코드\"/><Cell col=\"3\" text=\"동\"/><Cell col=\"4\" text=\"호\"/><Cell col=\"5\" text=\"계약자\"/><Cell col=\"6\" text=\"주민번호\"/><Cell col=\"7\" text=\"가족수\"/><Cell col=\"8\" text=\"자격구분\"/><Cell col=\"9\" text=\"계약일자\"/><Cell col=\"10\" text=\"임대시작일\"/><Cell col=\"11\" text=\"임대종료일\"/><Cell col=\"12\" text=\"보증금\"/><Cell col=\"13\" text=\"임대료\"/><Cell col=\"14\" text=\"연락처\"/><Cell col=\"15\" text=\"비고(근저당설정)\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:CNTRCT_POSBL_AT\" combodataset=\"ds_yn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"2\" text=\"bind:RENT_HOUSE_CODE\"/><Cell col=\"3\" text=\"bind:DONG\"/><Cell col=\"4\" text=\"bind:HO\"/><Cell col=\"5\" text=\"bind:NM\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#{######}'\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FAMILY_CO\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:QUALF_NM\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:RENT_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:RENT_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG\"/><Cell col=\"14\" displaytype=\"normal\" text=\"bind:TELNO\"/><Cell col=\"15\" style=\"align:left;\" text=\"bind:RM\"/></Band><Band id=\"summary\"><Cell colspan=\"15\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"15\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1","67",null,"5","-1",null,this);_a.set_taborder("15");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1","718",null,"15","1",null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_dwld","absolute",null,"45","98","22","100",null,this);_a.set_taborder("17");_a.set_text("양식다운로드");this.addChild(_a.name,_a);_a=new Button("btn_upload","absolute",null,"45","82","22","15",null,this);_a.set_taborder("18");_a.set_text("파일불러오기");this.addChild(_a.name,_a);_a=new Grid("grd_format","absolute","12","798",null,null,"15","-208",this);_a.set_taborder("19");_a.set_binddataset("ds_format");_a.set_visible("false");_a.style.set_border("2 solid #3a7ab8ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"45\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연번\"/><Cell col=\"1\" text=\"주택명\"/><Cell col=\"2\" text=\"동\"/><Cell col=\"3\" text=\"호\"/><Cell col=\"4\" text=\"계약자\"/><Cell col=\"5\" text=\"주민번호\"/><Cell col=\"6\" text=\"가족수\"/><Cell col=\"7\" text=\"자격구분\"/><Cell col=\"8\" text=\"계약일자\"/><Cell col=\"9\" text=\"임대시작일\"/><Cell col=\"10\" text=\"임대종료일\"/><Cell col=\"11\" text=\"보증금\"/><Cell col=\"12\" text=\"임대료\"/><Cell col=\"13\" text=\"연락처\"/><Cell col=\"14\" text=\"비고(근저당설정)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#######'\"/><Cell col=\"6\" text=\"bind:FAMILY_CO\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:QUALF_NM\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:CNTRCT_DE\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RENT_BGNDE\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:RENT_ENDDE\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG\"/><Cell col=\"13\" text=\"bind:TELNO\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","9","779","233","21",null,null,this);_a.set_taborder("20");_a.set_text("기존계약자일괄등록 양식 그리드");_a.set_cssclass("sta_WF_Title01");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Layout("default","",1024,733,this,function(_b){_b.set_classname("RNT02030200_P01");_b.set_titletext("기거주자일괄등록");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02030200_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02030200_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02030200_P01.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02030200_P01.xfdl",function(){this.RNT02030200_P01_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();this.grd_cntrctList.clearEventHandler("onrbuttondown");this.grd_cntrctList.set_cellmovingtype('none');};this.RNT02030200_P01_onload=function(_a,_b){};this.fn_init_dataset=function(){};this.btn_save_onclick=function(_a,_b){if(this.ds_cntrctList.findRow("CNTRCT_POSBL_AT","1")== -1){this.alert("계약가능한 기존계약자 정보가 존재하지 않습니다.");return;}if(this.confirm("S")){this.fn_transaction("puchasCntrctAllC");}};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_dwld_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_format,"download");};this.btn_upload_onclick=function(_a,_b){this.ds_cntrctList.clearData();this.ds_excel.clearData();var _c=function(){this.fn_transaction("selectCntrctrPosblHouse");};var _d={targetDs:this.ds_excel,headSet:false,callBack:_c};this.gfn_importExcel(_d);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectCntrctrPosblHouse":var _c="hsco/pms/rnt/prm/RNT02030200/selectCntrctrPosblHouseList.do";var _d="";var _e="ds_cntrctrPosblHouse=output1";break;case "puchasCntrctAllC":var _c="hsco/pms/rnt/prm/RNT02030200/puchasCntrctAllC.do";var _d="input1=ds_cntrctList:U";var _e="ds_cntrctList=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){case "selectCntrctrPosblHouse":this.fn_setCntrctList();break;case "puchasCntrctAllC":this.fn_callback_message(_a,_b,_c);break;}}};this.fn_setCntrctList=function(){var _a=this.ds_cntrctrPosblHouse;var _b=this.ds_excel.rowcount;var _c="RENT_HOUSE_NM=Column1,"+"DONG=Column2,"+"HO=Column3,"+"NM=Column4,"+"IHIDNUM=Column5,"+"FAMILY_CO=Column6,"+"QUALF_NM=Column7,"+"CNTRCT_DE=Column8,"+"RENT_BGNDE=Column9,"+"RENT_ENDDE=Column10,"+"GTN=Column11,"+"RNTCHRG=Column12,"+"TELNO=Column13,"+"RM=Column14";for(var _t=0;_t<=_b;_t++ ){if(1>(parseInt(this.ds_excel.getColumn(_t,"Column0"))||0)){continue;}var _d=this.ds_excel.getColumn(_t,"Column1");var _e=this.fn_lpad(this.ds_excel.getColumn(_t,"Column2"),4,"0");var _f=this.fn_lpad(this.ds_excel.getColumn(_t,"Column3"),4,"0");var _g=this.ds_excel.getColumn(_t,"Column5").replace(/-/gi,"");var _h=this.ds_excel.getColumn(_t,"Column6")||1;var _i=this.ds_excel.getColumn(_t,"Column8").replace(/-/gi,"");var _j=this.ds_excel.getColumn(_t,"Column9").replace(/-/gi,"");var _k=this.ds_excel.getColumn(_t,"Column10").replace(/-/gi,"");var _l=this.ds_excel.getColumn(_t,"Column11").replace(/,/gi,"");var _m=this.ds_excel.getColumn(_t,"Column12").replace(/,/gi,"");var _n=this.ds_excel.getColumn(_t,"Column13").replace(/-/gi,"");var _o=_d+"-"+_e+"-"+_f;var _p=_a.findRow("KEY",_o);var _q=_a.getColumn(_p,"SUPLY_SE")||0;var _r=_a.getColumn(_p,"RENT_HOUSE_CODE");this.ds_excel.setColumn(_t,"Column2",_e);this.ds_excel.setColumn(_t,"Column2",_e);this.ds_excel.setColumn(_t,"Column3",_f);this.ds_excel.setColumn(_t,"Column5",_g);this.ds_excel.setColumn(_t,"Column6",_h);this.ds_excel.setColumn(_t,"Column8",_i);this.ds_excel.setColumn(_t,"Column9",_j);this.ds_excel.setColumn(_t,"Column10",_k);this.ds_excel.setColumn(_t,"Column11",_l);this.ds_excel.setColumn(_t,"Column12",_m);this.ds_excel.setColumn(_t,"Column13",_n);var _s=this.ds_cntrctList.addRow();this.ds_cntrctList.copyRow(_s,this.ds_excel,_t,_c);this.ds_cntrctList.setColumn(_s,"CNTRCT_POSBL_AT",_q);this.ds_cntrctList.setColumn(_s,"RENT_HOUSE_CODE",_r);}};this.fn_lpad=function(_a,_b,_c){_a=_a||"";var _d="";var _e=_b-_a.length;for(;_e>0;_e-- ){_d+="0";}return _d+_a;};});this.on_initEvent=function(){this.ds_excel.addEventHandler("onrowposchanged",this.DS_TBRNT_APPLCNT_onrowposchanged,this);this.addEventHandler("oninit",this.RNT02030200_P01_oninit,this);this.addEventHandler("onload",this.RNT02030200_P01_onload,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_dwld.addEventHandler("onclick",this.btn_dwld_onclick,this);this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);};this.loadIncludeScript("RNT02030200_P01.xfdl");};})();