﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS080201_P07");this.set_classname("SLS080201");this.set_titletext("토지정보");this._setFormPosition(0,0,500,537);}_a=new Dataset("ds_custCon",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO_COCNR\" type=\"STRING\" size=\"256\"/><Column id=\"COCNR_CNNC_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"QOTA\" type=\"STRING\" size=\"256\"/><Column id=\"RELIS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_RM\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_QOTA\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHGHY\" type=\"STRING\" size=\"256\"/><Column id=\"COCNR_SN\" type=\"STRING\" size=\"256\"/><Column id=\"SLER_COCNR_SN\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO_SLER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_custCon</Col><Col id=\"colId\">CSTMR_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공유자성명</Col></Row><Row><Col id=\"compId\">ds_custCon</Col><Col id=\"colId\">IHIDNUM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공유자주민번호</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_contCopy",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2","496","34",null,null,this);_a.set_taborder("1");_a.set_text("공유자 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15","535",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","483","2","15","535",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36","496","15",null,null,this);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1","473","496","10",null,null,this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","466","5",null,null,this);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"52","50","25","23",null,this);_a.set_taborder("17");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","-2","269","466","10",null,null,this);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute",null,"52","50","25","75",null,this);_a.set_taborder("19");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","13","523","466","10",null,null,this);_a.set_taborder("32");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","15","100","465","27",null,null,this);_a.set_taborder("33");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","15","230","465","27",null,null,this);_a.set_taborder("34");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","15","204","465","27",null,null,this);_a.set_taborder("35");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","15","178","465","27",null,null,this);_a.set_taborder("36");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","15","256","465","27",null,null,this);_a.set_taborder("37");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","15","100","90","27",null,null,this);_a.set_taborder("38");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static32","absolute","15","126","90","54",null,null,this);_a.set_taborder("39");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static35","absolute","15","204","90","27",null,null,this);_a.set_taborder("40");_a.set_text("이메일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","15","230","90","27",null,null,this);_a.set_taborder("41");_a.set_text("지분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","15","256","90","27",null,null,this);_a.set_taborder("42");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip00","absolute","107","103","139","22",null,null,this);_a.set_taborder("0");_a.set_lengthunit("utf8");_a.style.set_background("#ffffffff");_a.style.set_border("1 solid #f1b54dff");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","247","230","90","26",null,null,this);_a.set_taborder("43");_a.set_text("해제일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","54","164","21",null,null,this);_a.set_taborder("44");_a.set_text("공유자 정보");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","107","128","373","27",null,null,this);_a.set_taborder("45");_a.getSetter("readonly").set("true");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","107","152","373","27",null,null,this);_a.set_taborder("46");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static40","absolute","247","180","90","25",null,null,this);_a.set_taborder("47");_a.set_text("휴대번호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","15","178","90","27",null,null,this);_a.set_taborder("48");_a.set_text("전화번호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","247","102","90","25",null,null,this);_a.set_taborder("49");_a.set_text("주민번호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","67.8%","102",null,"22","4.6%",null,this);_a.set_taborder("4");_a.set_mask("######-#{######}");_a.style.set_background("#ffffffff");_a.style.set_border("1 solid #f1b54dff");_a.style.set_align("left middle");_a.set_type("string");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","21.4%","130",null,"22","60%",null,this);_a.set_taborder("5");_a.set_readonly("false");_a.set_mask("#####");_a.style.set_background("#ffffffff");_a.style.set_align("left middle");_a.set_type("number");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","17","80","164","21",null,null,this);_a.set_taborder("50");_a.set_text("토지고객 공유자");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","17","294","164","21",null,null,this);_a.set_taborder("51");_a.set_text("토지고객 매도자");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","-4","468","466","10",null,null,this);_a.set_taborder("52");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","16","315","465","27",null,null,this);_a.set_taborder("53");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","15","444","466","27",null,null,this);_a.set_taborder("54");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","16","368","465","27",null,null,this);_a.set_taborder("55");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","16","342","465","27",null,null,this);_a.set_taborder("56");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","470","466","27",null,null,this);_a.set_taborder("57");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","16","315","90","27",null,null,this);_a.set_taborder("58");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","16","391","90","54",null,null,this);_a.set_taborder("59");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","16","365","90","27",null,null,this);_a.set_taborder("60");_a.set_text("변경사유");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","16","444","90","27",null,null,this);_a.set_taborder("61");_a.set_text("전화번호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","16","469","90","27",null,null,this);_a.set_taborder("62");_a.set_text("이메일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip01","absolute","107","318","140","22",null,null,this);_a.set_taborder("20");_a.set_lengthunit("utf8");_a.style.set_background("#ffffffff");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","247","444","90","27",null,null,this);_a.set_taborder("63");_a.set_text("휴대번호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","108","394","373","27",null,null,this);_a.set_taborder("64");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static25","absolute","108","418","373","27",null,null,this);_a.set_taborder("65");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","248","342","90","27",null,null,this);_a.set_taborder("66");_a.set_text("지분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static33","absolute","16","339","90","27",null,null,this);_a.set_taborder("67");_a.set_text("변경일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static38","absolute","248","317","90","25",null,null,this);_a.set_taborder("68");_a.set_text("주민번호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit12","absolute","67.8%","317",null,"22","4.4%",null,this);_a.set_taborder("21");_a.set_mask("######-#{######}");_a.style.set_background("#ffffffff");_a.style.set_border("1 solid #bdbdbdff");_a.style.set_align("left middle");_a.set_type("string");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","16","84","466","10",null,null,this);_a.set_taborder("69");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","17","294","466","10",null,null,this);_a.set_taborder("70");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit17","absolute","21.6%","396",null,"22","60%",null,this);_a.set_taborder("25");_a.set_readonly("false");_a.set_mask("#####");_a.style.set_background("#ffffffff");_a.style.set_align("left middle");_a.set_type("number");this.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","67.8%","233",null,"22","4.6%",null,this);this.addChild(_a.name,_a);_a.set_taborder("12");_a.style.set_background("#ffffffff");_a=new Calendar("Calendar02","absolute","21.4%","344",null,"22","50.6%",null,this);this.addChild(_a.name,_a);_a.set_taborder("22");_a.style.set_background("#ffffffff");_a=new Static("Static43","absolute","15","496","466","27",null,null,this);_a.set_taborder("71");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static44","absolute","16","495","90","27",null,null,this);_a.set_taborder("72");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip02","absolute","107","206","370","22",null,null,this);_a.set_taborder("10");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip03","absolute","107","233","139","22",null,null,this);_a.set_taborder("11");_a.set_lengthunit("utf8");_a.set_maxlength("25");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip04","absolute","107","258","370","22",null,null,this);_a.set_taborder("13");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip05","absolute","107","498","370","22",null,null,this);_a.set_taborder("31");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip06","absolute","107","472","370","22",null,null,this);_a.set_taborder("30");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip07","absolute","339","346","139","22",null,null,this);_a.set_taborder("23");_a.set_lengthunit("utf8");_a.set_maxlength("25");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip08","absolute","107","370","370","22",null,null,this);_a.set_taborder("24");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edt_detailAdresDm","absolute","107","154","370","22",null,null,this);_a.set_taborder("7");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edt_detailSlerAdresDm","absolute","108","421","370","22",null,null,this);_a.set_taborder("27");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Button("btn_zipDmSearch","absolute","179","131","21","21",null,null,this);_a.set_taborder("73");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Button("btn_zipDmSearch00","absolute","179","397","21","21",null,null,this);_a.set_taborder("74");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Edit("edt_detailAdresDm00","absolute","205","130","272","22",null,null,this);_a.set_taborder("75");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edt_detailAdresDm01","absolute","205","396","273","22",null,null,this);_a.set_taborder("76");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip09","absolute","107","181","139","22",null,null,this);_a.set_taborder("77");_a.set_lengthunit("utf8");_a.set_inputtype("number");_a.set_maxlength("20");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip10","absolute","339","181","139","22",null,null,this);_a.set_taborder("78");_a.set_lengthunit("utf8");_a.set_inputmode("normal");_a.set_inputtype("number");_a.set_maxlength("20");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip11","absolute","108","446","138","22",null,null,this);_a.set_taborder("79");_a.set_lengthunit("utf8");_a.set_inputtype("number");_a.set_maxlength("20");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip12","absolute","339","446","139","22",null,null,this);_a.set_taborder("80");_a.set_lengthunit("utf8");_a.set_inputtype("number");_a.set_maxlength("20");this.addChild(_a.name,_a);_a=new Button("btn_del","absolute",null,"52","50","25","126",null,this);_a.set_taborder("81");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_add","absolute",null,"52","50","25","177",null,this);_a.set_taborder("82");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new CheckBox("chk_ContCopy","absolute","132","79","88","21",null,null,this);_a.set_taborder("83");_a.set_text("계약자 등록");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_tooltiptype("hover");this.addChild(_a.name,_a);_a=new Layout("default","",500,537,this,function(_b){_b.set_classname("SLS080201");_b.set_titletext("토지정보");});this.addLayout(_a.name,_a);_a=new BindItem("item1","edt_locplcZip00","value","ds_custCon","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","MaskEdit00","value","ds_custCon","IHIDNUM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","MaskEdit01","value","ds_custCon","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_locplcZip01","value","ds_custCon","SLER_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","MaskEdit12","value","ds_custCon","SLER_IHIDNUM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","MaskEdit17","value","ds_custCon","SLER_ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","Calendar00","value","ds_custCon","RELIS_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","Calendar02","value","ds_custCon","CHANGE_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","edt_locplcZip02","value","ds_custCon","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","edt_locplcZip03","value","ds_custCon","QOTA");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_locplcZip04","value","ds_custCon","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","edt_locplcZip05","value","ds_custCon","SLER_RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","edt_locplcZip06","value","ds_custCon","SLER_EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","edt_locplcZip07","value","ds_custCon","SLER_QOTA");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_locplcZip08","value","ds_custCon","CHGHY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_detailAdresDm","value","ds_custCon","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","edt_detailSlerAdresDm","value","ds_custCon","SLER_ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","edt_detailAdresDm00","value","ds_custCon","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","edt_detailAdresDm01","value","ds_custCon","SLER_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","edt_locplcZip09","value","ds_custCon","TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","edt_locplcZip10","value","ds_custCon","MBTLNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","edt_locplcZip11","value","ds_custCon","SLER_TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","edt_locplcZip12","value","ds_custCon","SLER_MBTLNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","chk_ContCopy","value","ds_ladLcntrctrCancl","PENLTY_APPLC_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS080201_P07.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("SLS080201_P07.xfdl","lib::comInnerSanct.xjs");this.registerScript("SLS080201_P07.xfdl",function(){this.cntrctr_no="";this.SLS080201_P07_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS080201_P07_onload=function(_a,_b){this.ds_custCon.clear();this.ds_custCon.copyData(this.parent.arg_1);var _c=this.ds_custCon.getColumn(0,"IHIDNUM");var _d=this.ds_custCon.getColumn(0,"SLER_IHIDNUM");if(_c!=undefined){this.MaskEdit00.set_tooltiptext(_c.substr(0,6)+'-'+_c.substr(6));}if(_d!=undefined){this.MaskEdit12.set_tooltiptext(_d.substr(0,6)+'-'+_d.substr(6));}this.ds_contCopy.clear();this.ds_contCopy.copyData(this.parent.arg_2);};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_save_onclick=function(_a,_b){this.fn_save();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_ladNmChangeList);};this.fn_save=function(){if(this.gfn_checkValidation_NoUpdChk(this.ds_custCon,this.ds_validation)==false){return;}if(this.comUtils.isJuminNo(this.ds_custCon.getColumn(0,"IHIDNUM"))==false){this.alert("공유자 주민등록번호 유효성이 맞지 않습니다");return;}trace("123123 ="+this.comUtils.isNullEmpty(this.ds_custCon.getColumn(0,"SLER_IHIDNUM")));if(this.comUtils.isNullEmpty(this.ds_custCon.getColumn(0,"SLER_IHIDNUM"))==false){if(this.comUtils.isJuminNo(this.ds_custCon.getColumn(0,"SLER_IHIDNUM"))==false){this.alert("매도자 주민등록번호 유효성이 맞지 않습니다");return;}}if(this.confirm("저장하시겠습니까?")){if(this.ds_custCon.getColumn(0,"CSTMR_NM")!=''&&this.ds_custCon.getColumn(0,"IHIDNUM")!=''){this.fn_transaction("saveCocnr");}}};this.fn_addCocnr=function(_a,_b){var _c=this.ds_custCon.getColumn(0,"CNTRCTR_NO");this.ds_custCon.clearData();var _d=this.ds_custCon.addRow();this.ds_custCon.setColumn(this.ds_custCon.rowposition,"CNTRCTR_NO",_c);this.MaskEdit00.set_mask("######-#######");this.MaskEdit12.set_mask("######-#######");};this.fn_delCocnr=function(_a,_b){if(this.confirm("삭제하시겠습니까?")){this.fn_transaction("removeCocnr");}};this.fn_transaction=function(_a){switch(_a){case "saveCocnr":var _b="hsco/pms/sls/lad/ctr/SLS080201/saveCocnr.do";var _c="input1=ds_custCon";var _d="";break;case "saveCocnrSler":var _b="hsco/pms/sls/lad/ctr/SLS080201/saveCocnrSler.do";var _c="input1=ds_custCon";var _d="";break;case "removeCocnr":var _b="hsco/pms/sls/lad/ctr/SLS080201/removeCocnr.do";var _c="input1=ds_custCon";var _d="";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;var _f=null;switch(_a){case "saveCocnr":if(this.ds_custCon.getColumn(0,"SLER_NM")!=undefined&&this.ds_custCon.getColumn(0,"SLER_IHIDNUM")!=undefined){this.fn_transaction("saveCocnrSler");}else{this.alert("공유자가 저장되었습니다");}this.MaskEdit00.set_mask("######-#{######}");this.MaskEdit12.set_mask("######-#{######}");var _g=this.ds_custCon.getColumn(this.ds_custCon.rowposition,"IHIDNUM");var _h=this.ds_custCon.getColumn(this.ds_custCon.rowposition,"SLER_IHIDNUM");if(_g!=undefined){this.MaskEdit00.set_tooltiptext(_g.substr(0,6)+'-'+_g.substr(6));}if(_h!=undefined){this.MaskEdit12.set_tooltiptext(_h.substr(0,6)+'-'+_h.substr(6));}break;case "saveCocnrSler":this.alert("공유자 및 매도자가 저장되었습니다");break;case "removeCocnr":this.alert("공유자가 삭제되었습니다.");break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.div_detail_btn_zipDmSearch_onclick=function(_a,_b){var _c=function(_e,_f){if(Eco.isEmpty(_f)){return;}trace('OK\n'+_f);var _g=new Dataset();nRowCnt=_g.loadXML(_f);if(nRowCnt<1){return;}var _h="ZIP=ZIPNO,"+"ADRES=ROADADDRPART1,"+"ADRES_DETAIL=ROADADDRPART2,";;var _i=this.ds_custCon;_i.copyRow(_i.rowposition,_g,0,_h);};var _d=this.edt_detailAdresDm.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_d},"common::frmZipAddressPopup.xfdl",_c);};this.div_detail_btn_zipDmSearch_onclick=function(_a,_b){var _c=function(_e,_f){if(Eco.isEmpty(_f)){return;}trace('OK\n'+_f);var _g=new Dataset();nRowCnt=_g.loadXML(_f);if(nRowCnt<1){return;}var _h="ZIP=ZIPNO,"+"ADRES=ROADADDRPART1,"+"ADRES_DETAIL=ROADADDRPART2,";;var _i=this.ds_custCon;_i.copyRow(_i.rowposition,_g,0,_h);};var _d=this.edt_detailAdresDm.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_d},"common::frmZipAddressPopup.xfdl",_c);};this.div_detail_btn_zipDmSlerSearch_onclick=function(_a,_b){var _c=function(_e,_f){if(Eco.isEmpty(_f)){return;}trace('OK\n'+_f);var _g=new Dataset();nRowCnt=_g.loadXML(_f);if(nRowCnt<1){return;}var _h="SLER_ZIP=ZIPNO,"+"SLER_ADRES=ROADADDRPART1,"+"SLER_ADRES_DETAIL=ROADADDRPART2,";;var _i=this.ds_custCon;_i.copyRow(_i.rowposition,_g,0,_h);};var _d=this.edt_detailSlerAdresDm.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_d},"common::frmZipAddressPopup.xfdl",_c);};this.chk_ContCopy_onclick=function(_a,_b){if(!application.confirm("계약자 정보를 공유자로 등록하시겠습니까?")){return;}this.ds_custCon.clearData();var _c=this.ds_custCon.addRow();this.ds_custCon.setColumn(_c,"CNTRCTR_NO",this.ds_contCopy.getColumn(0,"CNTRCTR_NO"));this.ds_custCon.setColumn(_c,"CSTMR_NM",this.ds_contCopy.getColumn(0,"CSTMR_NM"));this.ds_custCon.setColumn(_c,"IHIDNUM",this.ds_contCopy.getColumn(0,"IHIDNUM"));this.ds_custCon.setColumn(_c,"TELNO",this.ds_contCopy.getColumn(0,"TELNO"));this.ds_custCon.setColumn(_c,"MBTLNO",this.ds_contCopy.getColumn(0,"MBTLNO"));this.ds_custCon.setColumn(_c,"ZIP",this.ds_contCopy.getColumn(0,"ZIP"));this.ds_custCon.setColumn(_c,"ADRES",this.ds_contCopy.getColumn(0,"ADRES"));this.ds_custCon.setColumn(_c,"ADRES_DETAIL",this.ds_contCopy.getColumn(0,"ADRES_DETAIL"));this.ds_custCon.setColumn(_c,"EMAIL",this.ds_contCopy.getColumn(0,"EMAIL"));};});this.on_initEvent=function(){this.addEventHandler("onload",this.SLS080201_P07_onload,this);this.addEventHandler("oninit",this.SLS080201_P07_oninit,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_close00.addEventHandler("onclick",this.fn_save,this);this.Static26.addEventHandler("onclick",this.Static26_onclick,this);this.btn_zipDmSearch.addEventHandler("onclick",this.div_detail_btn_zipDmSearch_onclick,this);this.btn_zipDmSearch00.addEventHandler("onclick",this.div_detail_btn_zipDmSlerSearch_onclick,this);this.btn_del.addEventHandler("onclick",this.fn_delCocnr,this);this.btn_add.addEventHandler("onclick",this.fn_addCocnr,this);this.chk_ContCopy.addEventHandler("onclick",this.chk_ContCopy_onclick,this);};this.loadIncludeScript("SLS080201_P07.xfdl");};})();