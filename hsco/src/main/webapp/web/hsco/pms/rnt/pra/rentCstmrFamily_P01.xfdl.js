﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("rentCstmrFamily");this.set_classname("rentCstmrFamily");this.set_titletext("임대고객가족 검색 및 등록 팝업");this._setFormPosition(0,0,640,830);}_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cntrctrCstmrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_familyRelate",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentCstmrFamilyList</Col><Col id=\"colId\">FAMILY_RELATE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">관계</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentCstmrList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"NM\" type=\"STRING\" size=\"255\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"prmanentCstmrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentCstmrFamilyList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"PRMANENT_CSTMR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PORTAL_REGIST_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"WAITR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"255\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES\" type=\"STRING\" size=\"255\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81",null,"33","15",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.style.set_background("#f9fbffff");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","17","5","38","22",null,null,this.div_search);_a.set_taborder("24");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","55","5","100","22",null,null,this.div_search);_a.set_taborder("0");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm00","absolute","495","5","100","22",null,null,this.div_search);_a.set_taborder("25");this.div_search.addChild(_a.name,_a);_a=new Div("div_DETAIL","absolute","15","114",null,"143","15",null,this);_a.set_taborder("1");_a.style.set_background("white");this.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","10","100","27",null,null,this.div_DETAIL);_a.set_taborder("47");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","0","36","100","27",null,null,this.div_DETAIL);_a.set_taborder("48");_a.set_text("전화번호");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","0","62","100","54",null,null,this.div_DETAIL);_a.set_taborder("49");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static06","absolute","-7","0",null,"10","0",null,this.div_DETAIL);_a.set_taborder("50");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static37","absolute","99","10","509","27",null,null,this.div_DETAIL);_a.set_taborder("51");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_NM","absolute","102","13","200","21",null,null,this.div_DETAIL);_a.set_taborder("0");_a.set_cssclass("edt_WF_Essential");_a.set_maxlength("10");this.div_DETAIL.addChild(_a.name,_a);_a=new MaskEdit("msk_IHIDNUM","absolute","406","13","199","21",null,null,this.div_DETAIL);_a.set_taborder("1");_a.set_type("string");_a.set_mask("######-#######");_a.set_cssclass("edt_essential");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static01","absolute","99","36","509","27",null,null,this.div_DETAIL);_a.set_taborder("54");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_TLPHON00","absolute","304","36","100","27",null,null,this.div_DETAIL);_a.set_taborder("56");_a.set_text("휴대폰번호");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static03","absolute","99","62","509","54",null,null,this.div_DETAIL);_a.set_taborder("58");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_ADRES","absolute","193","65","412","21",null,null,this.div_DETAIL);_a.set_taborder("59");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");_a.set_maxlength("200");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_ADRES_DETAIL","absolute","193","92","412","21",null,null,this.div_DETAIL);_a.set_taborder("4");_a.set_maxlength("200");this.div_DETAIL.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","-77","92",null,"21","489",null,this.div_DETAIL);_a.set_taborder("61");_a.set_text("상동");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","0","115","100","27",null,null,this.div_DETAIL);_a.set_taborder("62");_a.set_text("이메일");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("Static04","absolute","99","115","509","27",null,null,this.div_DETAIL);_a.set_taborder("63");_a.set_cssclass("sta_WF_Labelbg");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_EMAIL","absolute","102","118","503","21",null,null,this.div_DETAIL);_a.set_taborder("5");_a.set_maxlength("30");this.div_DETAIL.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM","absolute","304","10","100","27",null,null,this.div_DETAIL);_a.set_taborder("65");_a.set_text("주민등록번호");_a.set_cssclass("sta_WF_Label");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edi_zip","absolute","102","65","89","21",null,null,this.div_DETAIL);_a.set_taborder("66");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_DETAIL.addChild(_a.name,_a);_a=new Button("btn_ZIP","absolute","172","65","21","21",null,null,this.div_DETAIL);_a.set_taborder("67");_a.set_cssclass("btn_WF_Search");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_TELNO","absolute","102","39","200","21",null,null,this.div_DETAIL);_a.set_taborder("2");_a.set_maxlength("12");this.div_DETAIL.addChild(_a.name,_a);_a=new Edit("edt_MBTLNO","absolute","406","39","199","21",null,null,this.div_DETAIL);_a.set_taborder("3");_a.set_maxlength("20");this.div_DETAIL.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","257",null,null,"15","0",this);_a.set_taborder("2");_a.style.set_background("white");this.addChild(_a.name,_a);_a=new Grid("grd_houseCstmrList","absolute","0","34",null,"306","0",null,this.div_WORK);_a.set_cssclass("grd02_WF_blue");_a.set_taborder("17");_a.set_binddataset("ds_rentCstmrList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"55\"/><Column size=\"82\"/><Column size=\"105\"/><Column size=\"166\"/><Column size=\"98\"/><Column size=\"151\"/><Column size=\"157\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"고객번호\"/><Cell col=\"1\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"성명\"/><Cell col=\"2\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"주민번호\"/><Cell col=\"3\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"우편번호\"/><Cell col=\"4\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"주소\"/><Cell col=\"5\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"주소상세\"/><Cell col=\"6\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"전화번호\"/><Cell col=\"7\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"휴대폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:PRMANENT_CSTMR_NO\"/><Cell col=\"1\" text=\"bind:NM\"/><Cell col=\"2\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#######'\"/><Cell col=\"3\" text=\"bind:ZIP\"/><Cell col=\"4\" text=\"bind:ADRES\"/><Cell col=\"5\" text=\"bind:ADRES_DETAIL\"/><Cell col=\"6\" text=\"bind:TELNO\" mask=\"expr:TELNO == null  ? &quot;&quot;  : '###-####-####'\"/><Cell col=\"7\" text=\"bind:MBTLNO\" mask=\"expr:MBTLNO == null  ? &quot;&quot;  : '###-####-####'\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","0",null,"10","0",null,this.div_WORK);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static38","absolute","0","10","97","19",null,null,this.div_WORK);_a.set_taborder("19");_a.set_text("임대고객");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static18","absolute","0","29",null,"5","0",null,this.div_WORK);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","340",null,"10","0",null,this.div_WORK);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_family","absolute","0","350","300","19",null,null,this.div_WORK);_a.set_taborder("22");_a.set_text("임대고객 가족");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_saveFamily","absolute","337","350","38","19",null,null,this.div_WORK);_a.set_taborder("23");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_confirmFamily","absolute","377","350","38","19",null,null,this.div_WORK);_a.set_taborder("24");_a.set_text("확인");_a.set_cssclass("btn_WF_Grid");_a.style.set_font("8 Dotum");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_insertFamily","absolute","417","350","63","19",null,null,this.div_WORK);_a.set_taborder("25");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","369",null,"5","0",null,this.div_WORK);_a.set_taborder("26");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_hcntrctrFamilyList","absolute","0","374",null,"195","0",null,this.div_WORK);_a.set_cssclass("grd02_WF_blue");_a.set_taborder("27");_a.set_binddataset("ds_rentCstmrFamilyList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"82\"/><Column size=\"105\"/><Column size=\"166\"/><Column size=\"98\"/><Column size=\"151\"/><Column size=\"157\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"고객번호\"/><Cell col=\"1\" text=\"관계\"/><Cell col=\"2\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"성명\"/><Cell col=\"3\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"주민번호\"/><Cell col=\"4\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"우편번호\"/><Cell col=\"5\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"주소\"/><Cell col=\"6\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"주소상세\"/><Cell col=\"7\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"전화번호\"/><Cell col=\"8\" style=\"font:9 arial;\" cssclass=\".sta_WFDA_labelB\" text=\"휴대폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:PRMANENT_CSTMR_NO\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:FAMILY_RELATE\" combodataset=\"ds_familyRelate\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:NM\"/><Cell col=\"3\" text=\"bind:IHIDNUM\"/><Cell col=\"4\" text=\"bind:ZIP\"/><Cell col=\"5\" text=\"bind:ADRES\"/><Cell col=\"6\" text=\"bind:ADRES_DETAIL\"/><Cell col=\"7\" text=\"bind:TELNO\"/><Cell col=\"8\" text=\"bind:MBTLNO\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_save","absolute","442","10","38","19",null,null,this.div_WORK);_a.set_taborder("28");_a.set_text("저장");_a.set_cssclass("btn_WF_Process");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_insert","absolute","482","10","63","19",null,null,this.div_WORK);_a.set_taborder("29");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute","547","10","63","19",null,null,this.div_WORK);_a.set_taborder("30");_a.set_text("행취소");_a.set_cssclass("btn_WF_Griddel");_a.style.set_font("8 Dotum");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_cancelFamily","absolute","547","350","63","19",null,null,this.div_WORK);_a.set_taborder("31");_a.set_text("행취소");_a.set_cssclass("btn_WF_Griddel");_a.style.set_font("8 Dotum");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_deleteFamily","absolute","482","350","63","19",null,null,this.div_WORK);_a.set_taborder("32");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.style.set_font("8 Dotum");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("3");_a.set_text("임대고객가족 검색 및 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","600","9","20","20",null,null,this);_a.set_taborder("5");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","205","21",null,null,this);_a.set_taborder("8");_a.set_text("임대고객가족 검색 및 등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute","523","51","50","25",null,null,this);_a.set_taborder("10");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","575","51","50","25",null,null,this);_a.set_taborder("11");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.style.set_background("#f9fbffff");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,143,this.div_DETAIL,function(_b){_b.set_taborder("1");_b.style.set_background("white");});this.div_DETAIL.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("2");_b.style.set_background("white");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",640,830,this,function(_b){_b.set_classname("rentCstmrFamily");_b.set_titletext("임대고객가족 검색 및 등록 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_DETAIL.edt_TELNO","value","ds_rentCstmrList","TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_DETAIL.edt_MBTLNO","value","ds_rentCstmrList","MBTLNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_DETAIL.edt_NM","value","ds_rentCstmrList","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_DETAIL.msk_IHIDNUM","value","ds_rentCstmrList","IHIDNUM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_DETAIL.edi_zip","value","ds_rentCstmrList","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_DETAIL.edt_ADRES","value","ds_rentCstmrList","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_DETAIL.edt_ADRES_DETAIL","value","ds_rentCstmrList","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_DETAIL.edt_EMAIL","value","ds_rentCstmrList","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("rentCstmrFamily_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("rentCstmrFamily_P01.xfdl",function(){this.edtNm="";this.cntrctrCstmrNo=null;this.prmanentCstmrNm=null;this.bViewOnly=false;this.callback=null;this.rentCstmrFamily_oninit=function(_a,_b){this.fn_init(false);this.fn_init_form();this.fn_init_dataset();this.fn_load_combo();if(""!=this.cntrctrCstmrNo&&null!=this.cntrctrCstmrNo){this.div_search.edt_nm.value=this.prmanentCstmrNm;this.fn_divToDS(this.ds_cond00,this.div_search);this.ds_cond00.setColumn(0,"prmanentCstmrNo",this.cntrctrCstmrNo);this.fn_transaction("rentCstmrList");}this.fn_transaction("rentCstmrFamilyList");};this.rentCstmrFamily_onload=function(_a,_b){};this.fn_init_form=function(){this.cntrctrCstmrNo=this.parent.cntrctrCstmrNo;this.prmanentCstmrNm=this.parent.prmanentCstmrNm;this.bViewOnly=this.parent.bViewOnly;this.callback=this.parent.callback;if(this.bViewOnly==true){this.btn_Search.set_enable(false);this.div_search.set_enable(false);this.div_DETAIL.set_enable(false);this.div_WORK.set_enable(false);}if(this.comUtils.isNullEmpty(this.prmanentCstmrNm)==false){this.div_WORK.sta_family.set_text(this.prmanentCstmrNm+"님의 "+this.div_WORK.sta_family.text);}};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.ds_cond00.setColumn(0,"prmanentCstmrNo",this.cntrctrCstmrNo);this.ds_cond01.setColumn(0,"cntrctrCstmrNo",this.cntrctrCstmrNo);};this.fn_load_combo=function(){this.fn_get_cmmCode(this.ds_familyRelate,"",{grpCode:"HRM013"});};this.btn_search_onclick=function(_a,_b){this.ds_rentCstmrList.clearData();if(this.comUtils.isNullEmpty(this.edtNm)==false){this.div_search.edt_nm.set_value(this.edtNm);this.edtNm="";}this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("rentCstmrList");};this.btn_close_onclick=function(_a,_b){this.close();};this.div_WORK_btn_save_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_rentCstmrList)==true){if(this.confirm("저장 하시겠습니까?")){this.edtNm=this.div_DETAIL.edt_NM.value;this.fn_transaction("rentCstmrCUD");}}};this.div_WORK_grd_houseCstmrList_oncelldblclick=function(_a,_b){this.fn_insertFamily();};this.div_WORK_btn_insert_onclick=function(_a,_b){this.ds_rentCstmrList.addRow();};this.div_WORK_btn_cancel_onclick=function(_a,_b){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_rentCstmrList.cancel();}};this.div_WORK_btn_saveFamily_onclick=function(_a,_b){if(this.gfn_checkValidation(this.ds_rentCstmrFamilyList,this.ds_validation)==false){return;}if(Ex.util.isUpdated(this.ds_rentCstmrFamilyList)==true){if(this.confirm("임대고객 가족을 저장 하시겠습니까?")){this.fn_transaction("rentCstmrFamilyCUD");}}};this.div_WORK_btn_confirmFamily_onclick=function(_a,_b){if(this.fn_confirm()==true){this.close();}};this.div_WORK_btn_cancelFamily_onclick=function(_a,_b){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_rentCstmrFamilyList.cancel();}};this.div_WORK_btn_insertFamily_onclick=function(_a,_b){this.fn_insertFamily();};this.div_WORK_btn_deleteFamily_onclick=function(_a,_b){this.ds_rentCstmrFamilyList.deleteRow(this.ds_rentCstmrFamilyList.rowposition);};this.div_WORK_grd_hcntrctrFamilyList_oncelldblclick=function(_a,_b){if(this.fn_confirm()==true){this.close();}};this.div_DETAIL_btn_ZIP_onclick=function(_a,_b){var _c={};_c.zipField="ZIP";_c.jibunField="ADRES";this.pmsUtil.popupZipCode(this.ds_rentCstmrList,_c);};this.fn_confirm=function(){if(this.ds_rentCstmrFamilyList.rowcount>0){if(this.ds_rentCstmrFamilyList.getSelectColumn("FAMILY_RELATE")==null){this.alert("관계를 입력해 주세요.");return false;}}var _a=this.opener;if(_a[this.callback]==null){_a=this.opener.div_workFrame.div_main;}bResult=_a[this.callback](this.ds_rentCstmrFamilyList);return bResult;};this.fn_insertFamily=function(){if(this.ds_rentCstmrList.rowposition<0){this.alert("주택고객을 선택해주세요.");return;}if(this.fn_check_duplidateFamily()==true){return;}var _a=this.ds_rentCstmrFamilyList.addRow();this.ds_rentCstmrFamilyList.setColumn(_a,"CNTRCTR_CSTMR_NO",this.cntrctrCstmrNo);this.ds_rentCstmrFamilyList.copyRow(_a,this.ds_rentCstmrList,this.ds_rentCstmrList.rowposition);};this.fn_check_duplidateFamily=function(){var _a=this.ds_rentCstmrList.getColumn(this.ds_rentCstmrList.rowposition,"PRMANENT_CSTMR_NO");if(this.cntrctrCstmrNo==_a){this.alert("본인은 가족으로 등록할 수 없습니다.");return true;}var _b=this.ds_rentCstmrFamilyList.rowcount;for(var _c=0;_c<_b;_c++ ){if(this.ds_rentCstmrFamilyList.getColumn(_c,'PRMANENT_CSTMR_NO')==_a){this.alert("동일한 사람이 가족으로 이미 등록되어 있습니다.");return true;}}return false;};this.fn_transaction=function(_a){switch(_a){case "rentCstmrList":var _b="/hsco/pms/rnt/pra/rentCstmr/rentCstmrList.do";var _c="input1=ds_cond00";var _d="ds_rentCstmrList=output1";break;case "rentCstmrCUD":var _b="/hsco/pms/rnt/pra/rentCstmr/rentCstmrCUD.do";var _c="input1=ds_rentCstmrList:U";var _d="";break;case "rentCstmrFamilyList":var _b="/hsco/pms/rnt/pra/rentCstmr/rentCstmrFamilyList.do";var _c="input1=ds_cond01";var _d="ds_rentCstmrFamilyList=output1";break;case "rentCstmrFamilyCUD":var _b="/hsco/pms/rnt/pra/rentCstmr/rentCstmrFamilyCUD.do";var _c="input1=ds_rentCstmrFamilyList:U";var _d="";break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d==true){switch(_a){case "rentCstmrCUD":this.btn_search_onclick();break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.ds_rentCstmrFamilyList.addEventHandler("oncolumnchanged",this.ds_hcntrctrFamilyList_oncolumnchanged,this);this.addEventHandler("oninit",this.rentCstmrFamily_oninit,this);this.addEventHandler("onload",this.rentCstmrFamily_onload,this);this.div_DETAIL.btn_ZIP.addEventHandler("onclick",this.div_DETAIL_btn_ZIP_onclick,this);this.div_WORK.grd_houseCstmrList.addEventHandler("oncelldblclick",this.div_WORK_grd_houseCstmrList_oncelldblclick,this);this.div_WORK.sta_family.addEventHandler("onclick",this.div_WORK_Static01_onclick,this);this.div_WORK.btn_saveFamily.addEventHandler("onclick",this.div_WORK_btn_saveFamily_onclick,this);this.div_WORK.btn_confirmFamily.addEventHandler("onclick",this.div_WORK_btn_confirmFamily_onclick,this);this.div_WORK.btn_insertFamily.addEventHandler("onclick",this.div_WORK_btn_insertFamily_onclick,this);this.div_WORK.grd_hcntrctrFamilyList.addEventHandler("oncelldblclick",this.div_WORK_grd_hcntrctrFamilyList_oncelldblclick,this);this.div_WORK.btn_save.addEventHandler("onclick",this.div_WORK_btn_save_onclick,this);this.div_WORK.btn_insert.addEventHandler("onclick",this.div_WORK_btn_insert_onclick,this);this.div_WORK.btn_cancel.addEventHandler("onclick",this.div_WORK_btn_cancel_onclick,this);this.div_WORK.btn_cancelFamily.addEventHandler("onclick",this.div_WORK_btn_cancelFamily_onclick,this);this.div_WORK.btn_deleteFamily.addEventHandler("onclick",this.div_WORK_btn_deleteFamily_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("rentCstmrFamily_P01.xfdl");};})();