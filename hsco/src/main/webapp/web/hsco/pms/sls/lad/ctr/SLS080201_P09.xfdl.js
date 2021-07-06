﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS080201_P09");this.set_classname("SLS080201");this.set_titletext("대출등록");this._setFormPosition(0,0,500,655);}_a=new Dataset("ds_seizeCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_lcntrctrSeize</Col><Col id=\"colId\">CRDTR_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">채권자명</Col></Row><Row><Col id=\"compId\">ds_lcntrctrSeize</Col><Col id=\"colId\">CDIT_RCEPT_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">채권접수일</Col></Row><Row><Col id=\"compId\">ds_lcntrctrSeize</Col><Col id=\"colId\">DET_AMOUNT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">채무금액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_lcntrctrSeize",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CRDTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRDTR_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"CRDTR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRDTR_TELNO_2\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_DECSN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"INCDNT_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_CN\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DET_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RELIS_RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RELIS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHARGER\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHRG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHRG_CTTPC\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHRG_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_ATCHMNFL_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_ATCHMNFL\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"255\"/><Column id=\"ATCH_FLPTH\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_outSeize",this);_a._setContents("<ColumnInfo><Column id=\"SEIZR_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rpairs_file",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_file_delete",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SEIZR_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2","496","34",null,null,this);_a.set_taborder("3");_a.set_text("압류 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15","446",null,null,this);_a.set_taborder("20");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","483","2","15","446",null,null,this);_a.set_taborder("21");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36","496","15",null,null,this);_a.set_taborder("22");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","466","5",null,null,this);_a.set_taborder("23");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_seizeClose","absolute",null,"70","50","25","25",null,this);_a.set_taborder("24");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","-2","269","466","10",null,null,this);_a.set_taborder("25");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_seizeSave","absolute",null,"70","50","25","133",null,this);_a.set_taborder("26");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","15","100","465","27",null,null,this);_a.set_taborder("27");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static28","absolute","15","204","465","27",null,null,this);_a.set_taborder("28");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","15","178","465","27",null,null,this);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","15","256","465","27",null,null,this);_a.set_taborder("30");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","15","100","90","27",null,null,this);_a.set_taborder("31");_a.set_text("채권자명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static35","absolute","15","126","90","27",null,null,this);_a.set_taborder("32");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","54","164","21",null,null,this);_a.set_taborder("33");_a.set_text("압류 정보");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","107","126","373","27",null,null,this);_a.set_taborder("34");_a.getSetter("readonly").set("true");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","107","152","373","27",null,null,this);_a.set_taborder("35");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","17","80","164","21",null,null,this);_a.set_taborder("36");_a.set_text("채권자 정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","16","84","466","10",null,null,this);_a.set_taborder("37");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip02","absolute","107","129","93","21",null,null,this);_a.set_taborder("4");_a.set_lengthunit("utf8");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new Button("btn_seizeDel","absolute",null,"70","50","25","79",null,this);_a.set_taborder("38");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","107","230","373","27",null,null,this);_a.set_taborder("39");_a.set_cssclass("sta_WF_Labelbg");_a.getSetter("readonly").set("true");this.addChild(_a.name,_a);_a=new Edit("edt_registerId00","absolute","398","103",null,"21","25",null,this);_a.set_taborder("41");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","15","152","90","27",null,null,this);_a.set_taborder("42");_a.set_text("연락처1");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip03","absolute","107","155","139","21",null,null,this);_a.set_taborder("5");_a.set_lengthunit("utf8");_a.set_inputtype("number");_a.set_maxlength("12");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","248","152","89","27",null,null,this);_a.set_taborder("43");_a.set_text("연락처2");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip10","absolute","341","155",null,"21","25",null,this);_a.set_taborder("6");_a.set_lengthunit("utf8");_a.set_inputtype("number");_a.set_maxlength("12");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","15","178","90","27",null,null,this);_a.set_taborder("44");_a.set_text("채권결정일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","248","178","89","27",null,null,this);_a.set_taborder("45");_a.set_text("채권접수일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Calendar("Calendar02","absolute","68.2%","181",null,"21","5%",null,this);this.addChild(_a.name,_a);_a.set_taborder("8");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a.style.set_border("1 solid #f1b54dff");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Calendar("Calendar03","absolute","21.4%","181",null,"21","50.8%",null,this);this.addChild(_a.name,_a);_a.set_taborder("7");_a.style.set_background("#ffffffff");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static23","absolute","15","204","90","27",null,null,this);_a.set_taborder("46");_a.set_text("사건및내용");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip01","absolute","107","207",null,"21","25",null,this);_a.set_taborder("9");_a.set_lengthunit("utf8");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","15","230","90","27",null,null,this);_a.set_taborder("47");_a.set_text("채권사항");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip11","absolute","107","233",null,"21","25",null,this);_a.set_taborder("10");_a.set_lengthunit("utf8");_a.set_maxlength("1000");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","15","254","90","27",null,null,this);_a.set_taborder("48");_a.set_text("압류구분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip04","absolute","107","103","289","21",null,null,this);_a.set_taborder("2");_a.set_lengthunit("utf8");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a.style.set_border("1 solid #f1b54dff");_a.set_maxlength("100");this.addChild(_a.name,_a);_a=new Static("Static25","absolute","248","254","90","27",null,null,this);_a.set_taborder("49");_a.set_text("채무금액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","15","571","164","21",null,null,this);_a.set_taborder("55");_a.set_text("실무담당정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new MaskEdit("msk_detAmount","absolute","341","259","134","21",null,null,this);_a.set_taborder("12");_a.set_mask("###,###,###,###,###");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a.style.set_border("1 solid #f1b54dff");this.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","21.4%","259",null,"21","50.8%",null,this);this.addChild(_a.name,_a);_a.set_taborder("11");_a.set_innerdataset("@ds_seizeCodeSh");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a=new Button("btn_zipDmSearch","absolute","179","128","21","21",null,null,this);_a.set_taborder("60");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Button("btn_fileAdd","absolute","251","398","75","19",null,null,this);_a.set_taborder("66");_a.set_text("파일추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_fileDel","absolute","328","398","75","19",null,null,this);_a.set_taborder("67");_a.set_text("파일삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_fileSave","absolute","405","398","75","19",null,null,this);_a.set_taborder("68");_a.set_text("다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_ladPayStdrList","absolute","17","421",null,null,"20","87",this);_a.set_taborder("69");_a.set_binddataset("ds_rpairs_file");_a.set_autoenter("select");_a.set_autoupdatetype("itemselect");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"파일명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_seizeAdd","absolute",null,"70","50","25","187",null,this);_a.set_taborder("70");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip08","absolute","202","129","273","21",null,null,this);_a.set_taborder("71");_a.set_lengthunit("utf8");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Static("Static32","absolute","15","282","465","27",null,null,this);_a.set_taborder("72");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","248","280","90","27",null,null,this);_a.set_taborder("54");_a.set_text("해제일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","68.2%","285",null,"21","5%",null,this);this.addChild(_a.name,_a);_a.set_taborder("14");_a.style.set_background("#ffffffff");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static16","absolute","15","280","90","27",null,null,this);_a.set_taborder("53");_a.set_text("해제접수일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","21.4%","285",null,"21","50.8%",null,this);this.addChild(_a.name,_a);_a.set_taborder("13");_a.style.set_background("#ffffffff");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("Static33","absolute","16","308","464","27",null,null,this);_a.set_taborder("73");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","15","306","90","27",null,null,this);_a.set_taborder("50");_a.set_text("참고사항");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip12","absolute","107","310",null,"21","25",null,this);_a.set_taborder("18");_a.set_lengthunit("utf8");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","16","334","464","27",null,null,this);_a.set_taborder("40");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","15","332","90","27",null,null,this);_a.set_taborder("51");_a.set_text("최초등록");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Edit("edt_updusrId00","absolute","341","336",null,"21","25",null,this);_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_registerId01","absolute","107","336","139","21",null,null,this);_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","248","334","90","27",null,null,this);_a.set_taborder("52");_a.set_text("최종수정");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","15","360","465","27",null,null,this);_a.set_taborder("75");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static38","absolute","15","358","90","27",null,null,this);_a.set_taborder("77");_a.set_text("등록일시");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static40","absolute","248","360","90","27",null,null,this);_a.set_taborder("80");_a.set_text("수정일시");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Calendar("Calendar04","absolute","21.4%","363",null,"21","50.8%",null,this);this.addChild(_a.name,_a);_a.set_taborder("81");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.style.set_background("#f0f0f0ff");_a.set_readonly("true");_a=new Static("Static34","absolute","16","594","464","27",null,null,this);_a.set_taborder("83");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","247","594","91","26",null,null,this);_a.set_taborder("59");_a.set_text("부서");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip06","absolute","341","597","134","21",null,null,this);_a.set_taborder("15");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","14","594","90","26",null,null,this);_a.set_taborder("57");_a.set_text("성명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip05","absolute","106","597","141","21",null,null,this);_a.set_taborder("19");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","14","620","466","27",null,null,this);_a.set_taborder("84");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","247","619","90","26",null,null,this);_a.set_taborder("58");_a.set_text("메일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip07","absolute","341","622","134","21",null,null,this);_a.set_taborder("17");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","14","619","90","26",null,null,this);_a.set_taborder("56");_a.set_text("연락처");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip00","absolute","106","622","141","21",null,null,this);_a.set_taborder("16");_a.set_lengthunit("utf8");_a.set_maxlength("12");this.addChild(_a.name,_a);_a=new Calendar("Calendar05","absolute","68.2%","363",null,"21","5%",null,this);this.addChild(_a.name,_a);_a.set_taborder("85");_a.set_readonly("true");_a.set_dateformat("yyyy-MM-dd");_a.style.set_background("#f0f0f0ff");_a=new Layout("default","",500,655,this,function(_b){_b.set_classname("SLS080201");_b.set_titletext("대출등록");});this.addLayout(_a.name,_a);_a=new BindItem("item15","edt_locplcZip02","value","ds_lcntrctrSeize","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_registerId00","value","ds_lcntrctrSeize","SEIZR_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","edt_locplcZip03","value","ds_lcntrctrSeize","CRDTR_TELNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","edt_locplcZip10","value","ds_lcntrctrSeize","CRDTR_TELNO_2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Calendar02","value","ds_lcntrctrSeize","CDIT_RCEPT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","Calendar03","value","ds_lcntrctrSeize","CDIT_DECSN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","edt_locplcZip01","value","ds_lcntrctrSeize","INCDNT_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","edt_locplcZip11","value","ds_lcntrctrSeize","CDIT_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","edt_locplcZip04","value","ds_lcntrctrSeize","CRDTR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","edt_locplcZip12","value","ds_lcntrctrSeize","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edt_registerId01","value","ds_lcntrctrSeize","REGISTER_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_updusrId00","value","ds_lcntrctrSeize","UPDUSR_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","Calendar00","value","ds_lcntrctrSeize","RELIS_RCEPT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","Calendar01","value","ds_lcntrctrSeize","RELIS_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","edt_locplcZip05","value","ds_lcntrctrSeize","PRCAFS_CHARGER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","edt_locplcZip00","value","ds_lcntrctrSeize","PRCAFS_CHRG_CTTPC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","edt_locplcZip06","value","ds_lcntrctrSeize","PRCAFS_CHRG_DEPT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","edt_locplcZip07","value","ds_lcntrctrSeize","PRCAFS_CHRG_EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item53","msk_detAmount","value","ds_lcntrctrSeize","DET_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Combo01","value","ds_lcntrctrSeize","SEIZR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_locplcZip08","value","ds_lcntrctrSeize","CRDTR_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","edt_updusrId01","value","ds_lcntrctrSeize","UPDT_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","edt_registerId02","value","ds_lcntrctrSeize","REGIST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","Calendar04","value","ds_lcntrctrSeize","REGIST_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","Calendar05","value","ds_lcntrctrSeize","UPDT_DT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS080201_P09.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("SLS080201_P09.xfdl","lib::comInnerSanct.xjs");this.registerScript("SLS080201_P09.xfdl",function(){this.SYS_SE="PMS";this.JOB_SE="LAD";this.FILE_MANAGER=null;var _a;this.SLS080201_P09_oninit=function(_b,_c){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS080201_P09_onload=function(_b,_c){this.ds_lcntrctrSeize.clear();this.ds_lcntrctrSeize.copyData(this.parent.arg_1);_a=this.ds_lcntrctrSeize.getColumn(0,"CNTRCTR_NO");var _d={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess,onError:this.fn_onFileError};this.FILE_MANAGER=new this.fileManager(this,this.SYS_SE,this.JOB_SE);this.FILE_MANAGER.init(_d);this.fn_loadCombo();};this.fn_loadCombo=function(){var _b=[{OUT_PUT:"ds_seizeCodeSh",GRP_CODE:"LAD006",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_b);var _c={};_c["UASE_AT"]="1";this.pmsUtil.getLadCodeList(_c,"ds_ladCodeSh");this.fn_transaction("selectLcntrctrSeizr");};this.btn_close_onclick=function(_b,_c){this.close();};this.btn_save_onclick=function(_b,_c){this.fn_save();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_ladNmChangeList);};this.fn_save=function(){var _b=this.fn_checkUpdate(this.ds_lcntrctrSeize);var _c=this.fn_checkUpdate(this.ds_rpairs_file);if(_b==false&&_c==false){this.alert("comm.데이터.변경.없음");return false;}if(this.gfn_checkValidation_NoUpdChk(this.ds_lcntrctrSeize,this.ds_validation)==false){return;}if(this.confirm("저장하시겠습니까?")){if(!this.ds_lcntrctrSeize.getColumn(0,"SEIZR_SN")){this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CNTRCTR_NO",_a);this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CRDTR_NM",this.ds_lcntrctrSeize.getColumn(0,"CRDTR_NM"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"SEIZR_SN",this.ds_lcntrctrSeize.getColumn(0,"SEIZR_SN"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CRDTR_ADRES",this.ds_lcntrctrSeize.getColumn(0,"CRDTR_ADRES"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CRDTR_TELNO",this.ds_lcntrctrSeize.getColumn(0,"CRDTR_TELNO"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CRDTR_TELNO_2",this.ds_lcntrctrSeize.getColumn(0,"CRDTR_TELNO_2"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CDIT_DECSN_DE",this.ds_lcntrctrSeize.getColumn(0,"CDIT_DECSN_DE"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CDIT_RCEPT_DE",this.ds_lcntrctrSeize.getColumn(0,"CDIT_RCEPT_DE"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"INCDNT_CN",this.ds_lcntrctrSeize.getColumn(0,"INCDNT_CN"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"CDIT_CN",this.ds_lcntrctrSeize.getColumn(0,"CDIT_CN"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"SEIZR_SE",this.ds_lcntrctrSeize.getColumn(0,"SEIZR_SE"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"DET_AMOUNT",this.ds_lcntrctrSeize.getColumn(0,"DET_AMOUNT"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"RELIS_RCEPT_DE",this.ds_lcntrctrSeize.getColumn(0,"RELIS_RCEPT_DE"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"RELIS_DE",this.ds_lcntrctrSeize.getColumn(0,"RELIS_DE"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"RM",this.ds_lcntrctrSeize.getColumn(0,"RM"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"PRCAFS_CHARGER",this.ds_lcntrctrSeize.getColumn(0,"PRCAFS_CHARGER"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"PRCAFS_CHRG_CTTPC",this.ds_lcntrctrSeize.getColumn(0,"PRCAFS_CHRG_CTTPC"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"PRCAFS_CHRG_DEPT",this.ds_lcntrctrSeize.getColumn(0,"PRCAFS_CHRG_DEPT"));this.ds_lcntrctrSeize.setColumn(this.ds_lcntrctrSeize.rowposition,"PRCAFS_CHRG_EMAIL",this.ds_lcntrctrSeize.getColumn(0,"PRCAFS_CHRG_EMAIL"));this.fn_transaction("saveLcntrctrSeizrList");}else{this.fn_transaction("saveLcntrctrSeizrList");}}};this.fn_remove=function(){var _b="선택한 이미지를 삭제하시겠습니까?";if(confirm(_b)){if(this.ds_lcntrctrSeize.rowcount>0){nRow=this.ds_lcntrctrSeize.rowposition;this.ds_lcntrctrSeize.deleteRow(nRow);this.fn_transaction("saveLcntrctrSeizrList");this.ds_rpairs_file.clear();}else{this.alert("삭제할 데이터가 없습니다.");}}};this.fn_transaction=function(_b){switch(_b){case "selectLcntrctrSeizr":var _c="hsco/pms/sls/lad/ctr/SLS080201/selectLcntrctrSeizr.do";var _d="input1=ds_lcntrctrSeize";var _e="ds_lcntrctrSeize=output1";break;case "saveLcntrctrSeizrList":var _c="hsco/pms/sls/lad/ctr/SLS080201/saveLcntrctrSeizrList.do";var _d="input1=ds_lcntrctrSeize:U";var _e="ds_outSeize=output1";break;case "selectSlaryList2":var _c="hsco/pms/sls/lad/std/SLS070102/getMultiFileList.do";var _d="input1=ds_cond";var _e="ds_rpairs_file=multifileList";break;case "deleteFile":var _c="hsco/pms/sls/lad/ctr/SLS080201/atchSeizeDelete.do";var _d="input1=ds_file_delete";var _e="";break;default:break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){var _e=_c==0?true:false;if(_e){var _f=null;var _g=null;switch(_b){case "selectLcntrctrSeizr":this.selectFileList();break;case "saveLcntrctrSeizrList":this.ds_lcntrctrSeize.clearData();var _h=this.ds_lcntrctrSeize.addRow();var _i=this.ds_lcntrctrSeize;_i.setColumn(_h,"CNTRCTR_NO",_a);_i.setColumn(_h,"SEIZR_SN",this.ds_outSeize.getColumn(0,"SEIZR_SN"));this.fn_transaction("selectLcntrctrSeizr");break;case "deleteFile":this.selectFileList();break;}}else{this.gfn_callBackMsg(_b,_c,_d);}};this.btn_atchFile_onclick=function(_b,_c){this.fn_addAtchFile(false);};this.btn_downAtchFile_onclick=function(_b,_c){this.fn_downloadAtchFile();};this.btn_cancelAtchFile_onclick=function(_b,_c){this.fn_cancelAtchFile();};this.fn_addAtchFile=function(_b){var _c=null;var _d=_b;var _e=this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"SEIZR_ATCHMNFL");if(this.comUtils.isNullEmpty(_e)){this.fn_getNewFileSn();}else{this.FILE_MANAGER.addFilesWithSn(_e,false,true,false,null);}};this.fn_addFile=function(_b,_c){if(this.ds_lcntrctrSeize.getRowType(this.ds_lcntrctrSeize.rowposition)==2){alert("저장 후 파일첨부가 가능합니다.");return;}this.FILE_MANAGER.addFiles(null,true);};this.fn_deleteFile=function(_b,_c){this.fn_deleteAtchFile();};this.fn_add=function(_b,_c){var _d=this.ds_lcntrctrSeize.addRow();this.ds_lcntrctrSeize.setColumn(_d,"CNTRCTR_NO",this.ds_lcntrctrSeize.getColumn(0,"CNTRCTR_NO"));this.ds_rpairs_file.clearData();};this.fn_downloadAtchFile=function(_b,_c){for(var _g=0;_g<this.ds_rpairs_file.getRowCount();_g++ ){if(this.ds_rpairs_file.getColumn(_g,"CHK")==1){var _d=this.ds_rpairs_file.getColumn(_g,"FILE_SN");if(_d==undefined){this.alert("저장 후에 다운로드가 가능합니다.");return;}var _e=this.ds_rpairs_file.getColumn(_g,"FILE_ORDR");var _f=this.ds_rpairs_file.getColumn(_g,"FILE_NM");this.FILE_MANAGER.download(_d,_e,_f);}else{this.alert("다운로드 받으실 파일을 1개 선택해주세요");}}};this.fn_deleteAtchFile=function(){this.ds_file_delete.clearData();var _b=0;var _c="선택한 이미지를 삭제하시겠습니까?";if(confirm(_c)){this.ds_file_delete.clearData();for(var _e=0;_e<this.ds_rpairs_file.rowcount;_e++ ){if(this.ds_rpairs_file.getColumn(_e,"CHK")=='1'){var _d=this.ds_file_delete.addRow();this.ds_file_delete.setColumn(_d,"FILE_SN",this.ds_rpairs_file.getColumn(_e,"FILE_SN"));this.ds_file_delete.setColumn(_d,"FILE_ORDR",this.ds_rpairs_file.getColumn(_e,"FILE_ORDR"));this.ds_file_delete.setColumn(_d,"CNTRCTR_NO",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"CNTRCTR_NO"));this.ds_file_delete.setColumn(_d,"SEIZR_SN",this.ds_lcntrctrSeize.getColumn(0,"SEIZR_SN"));_b+=1;}}if(_b==0){this.alert("선택된 자료가없습니다.");return;}this.fn_transaction("deleteFile");}};this.fn_save2=function(){var _b=this.FILE_MANAGER.hasFile();if(_b){var _c=this.FILE_MANAGER.getfileCount();var _d="hsco/pms/sls/lad/ctr/SLS080201/atchSeizeCUD.do";var _e="input1=ds_cond01:U";var _f="";this.FILE_MANAGER.upload(_d,_e,_f);}else{}this.alert("저장되었습니다");};this.selectFileList=function(){this.ds_rpairs_file.clearData();this.ds_cond.clearData();var _b=this.ds_cond.addRow();this.ds_cond.setColumn(_b,"CNTRCTR_NO",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"CNTRCTR_NO"));this.ds_cond.setColumn(_b,"FILE_SN",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"FILE_SN"));this.fn_transaction("selectSlaryList2");};this.fn_onFileSelected=function(_b,_c){if(_b==this.FILE_MANAGER.TYPE_UPLOADER){var _d=this.pmsUtil.isArray(_c);if(_d){var _e=_c.length;for(var _g=0;_g<_e;_g++ ){var _f=this.ds_cond01.addRow();this.ds_cond01.setColumn(_f,"CNTRCTR_NO",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"CNTRCTR_NO"));this.ds_cond01.setColumn(_f,"SEIZR_SN",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"SEIZR_SN"));this.ds_cond01.setColumn(_f,"FILE_SN",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"FILE_SN"));}}else{var _f=this.ds_cond01.addRow();this.ds_cond01.setColumn(_f,"CNTRCTR_NO",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"CNTRCTR_NO"));this.ds_cond01.setColumn(_f,"SEIZR_SN",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"SEIZR_SN"));this.ds_cond01.setColumn(_f,"FILE_SN",this.ds_lcntrctrSeize.getColumn(this.ds_lcntrctrSeize.rowposition,"FILE_SN"));}this.fn_save2();}};this.fn_onFileSuccess=function(_b,_c){if(_b==this.FILE_MANAGER.TYPE_UPLOADER){this.fn_transaction("selectLcntrctrSeizr");this.alert("저장되었습니다.");}if(_b==this.FILE_MANAGER.TYPE_DOWNLOADER){trace("파일 다운로드 완료");}};this.fn_onFileError=function(_b,_c){if(_b==this.FILE_MANAGER.TYPE_UPLOADER){trace("파일 업로드 오류");}if(_b==this.FILE_MANAGER.TYPE_DOWNLOADER){if(_c.errorcode=="404"){this.gfn_message("err.파일.없음","파일이 존재하지 않아 다운로드 할 수 없습니다.");}}};this.div_detail_btn_zipDmSearch_onclick=function(_b,_c){var _d=function(_f,_g){if(Eco.isEmpty(_g)){return;}trace('OK\n'+_g);var _h=new Dataset();nRowCnt=_h.loadXML(_g);if(nRowCnt<1){return;}var _i="CRDTR_ADRES=ROADADDRPART1,";;var _j=this.ds_lcntrctrSeize;_j.copyRow(_j.rowposition,_h,0,_i);};var _e=this.edt_locplcZip02.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_e},"common::frmZipAddressPopup.xfdl",_d);};});this.on_initEvent=function(){this.ds_rpairs_file.addEventHandler("onrowposchanged",this.ds_rpairs_photo_onrowposchanged,this);this.addEventHandler("onload",this.SLS080201_P09_onload,this);this.addEventHandler("oninit",this.SLS080201_P09_oninit,this);this.btn_seizeClose.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_seizeSave.addEventHandler("onclick",this.fn_save,this);this.Static39.addEventHandler("onclick",this.Static39_onclick,this);this.btn_seizeDel.addEventHandler("onclick",this.fn_remove,this);this.btn_zipDmSearch.addEventHandler("onclick",this.div_detail_btn_zipDmSearch_onclick,this);this.btn_fileAdd.addEventHandler("onclick",this.fn_addFile,this);this.btn_fileDel.addEventHandler("onclick",this.fn_deleteFile,this);this.btn_fileSave.addEventHandler("onclick",this.fn_downloadAtchFile,this);this.grd_ladPayStdrList.addEventHandler("oncelldblclick",this.Tab00_tabpage1_grd_ladPayStdrList_oncelldblclick,this);this.btn_seizeAdd.addEventHandler("onclick",this.fn_add,this);};this.loadIncludeScript("SLS080201_P09.xfdl");};})();