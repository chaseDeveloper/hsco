﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM050201");this.set_classname("HPM050201");this.set_titletext("팝업정보관리");this._setFormPosition(0,0,1059,737);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBLANC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_BGNDE1\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_BGNDE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_bannerList</Col><Col id=\"colId\">BANNER_SJ</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"msgId\">제목</Col></Row><Row><Col id=\"colId\">APPLC_BGNDE</Col><Col id=\"compId\">ds_bannerList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작일자</Col></Row><Row><Col id=\"colId\">APPLC_ENDDE</Col><Col id=\"compId\">ds_bannerList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료일자</Col></Row><Row><Col id=\"colId\">USE_AT</Col><Col id=\"compId\">ds_bannerList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사용여부</Col></Row><Row><Col id=\"colId\">BANNER_TYPE</Col><Col id=\"compId\">ds_bannerList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">팝업종류</Col></Row><Row><Col id=\"colId\">APPLC_BGNTM</Col><Col id=\"compId\">ds_bannerList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작일시</Col></Row><Row><Col id=\"colId\">APPLC_ENDTM</Col><Col id=\"compId\">ds_bannerList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료일시</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_condDtl",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_use_ennc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">0</Col><Col id=\"CD_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_bannerList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_URL\" type=\"STRING\" size=\"256\"/><Column id=\"TMPLAT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"VRTICL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH_LC\" type=\"STRING\" size=\"256\"/><Column id=\"VRTICL_LC\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_AT\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SANCTNSTS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_BGNTM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_ENDTM\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_IMG_URL\" type=\"STRING\" size=\"4000\"/><Column id=\"ORDER_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"256\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"256\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"256\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"256\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"256\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_fileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_recomInfo",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"16\"/><Column id=\"INNER_SANCTN_MDL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STEP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ubiDataset",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BANNER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S1_SANCTNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S2_SANCTNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S3_SANCTNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S4_SANCTNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S5_SANCTNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S6_SANCTNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"S1_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"S2_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"S3_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"S4_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"S5_SANCTN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"S6_SANCTN_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sanctnSttus",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("gds_apprline",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"APPRLINE_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"APPRLINE_COL3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"256\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"256\"/><Column id=\"FILE_ID\" type=\"string\" size=\"256\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"256\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bannerType",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">001</Col><Col id=\"CODE_NM\">이미지</Col></Row><Row><Col id=\"CODE\">002</Col><Col id=\"CODE_NM\">텍스트</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0",null,"10","28",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","10","151","21",null,null,this);_a.set_taborder("5");_a.set_text("팝업정보관리");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","28",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","195",null,"5","28",null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","0","206","151","21",null,null,this);_a.set_taborder("8");_a.set_text("팝업목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","227",null,"10","28",null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_info","absolute","0","36",null,"159","28",null,this);_a.set_taborder("10");_a.style.set_border("1 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","553","27",null,null,this.div_info);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static05","absolute","550","130",null,"27","1",null,this.div_info);_a.set_taborder("42");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static06","absolute","564","0",null,"105","0",null,this.div_info);_a.set_taborder("30");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static04","absolute","550","104",null,"27","1",null,this.div_info);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static03","fixed","-1","26","0.1%","3",null,null,this.div_info);_a.set_taborder("0");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static02","absolute","-1","104","554","27",null,null,this.div_info);_a.set_taborder("1");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static01","absolute","-1","78","554","27",null,null,this.div_info);_a.set_taborder("2");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static00","absolute","-1","52","554","27",null,null,this.div_info);_a.set_taborder("3");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","26","553","27",null,null,this.div_info);_a.set_taborder("4");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM001","absolute","0","26","100","27",null,null,this.div_info);_a.set_taborder("5");_a.set_text("시작일시");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM003","absolute","0","52","100","27",null,null,this.div_info);_a.set_taborder("6");_a.set_text("가로사이즈");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM15","absolute","0","78","100","27",null,null,this.div_info);_a.set_taborder("7");_a.set_cssclass("sta_WF_Label");_a.set_text("가로위치");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM16","absolute","0","0","100","27",null,null,this.div_info);_a.set_taborder("8");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM17","absolute","552","0","100","105",null,null,this.div_info);_a.set_taborder("10");_a.set_text("이미지");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Edit("edt_bbsId00","absolute","102","3","448","21",null,null,this.div_info);_a.set_taborder("16");_a.set_readonly("false");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("750");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","276","78","100","27",null,null,this.div_info);_a.set_taborder("21");_a.set_text("세로위치");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Edit("edt_imgUrl","absolute","654","107",null,"21","3",null,this.div_info);_a.set_taborder("18");_a.set_readonly("false");_a.set_lengthunit("utf8");_a.set_maxlength("750");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","552","104","100","27",null,null,this.div_info);_a.set_taborder("22");_a.set_text("이미지\r\n링크URL");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","0","27","0","0",null,null,this.div_info);this.div_info.addChild(_a.name,_a);_a.set_taborder("26");_a=new Static("sta_NM002","absolute","276","26","100","27",null,null,this.div_info);_a.set_taborder("27");_a.set_text("종료일시");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Calendar("calEnd","absolute","378","29","110","21",null,null,this.div_info);this.div_info.addChild(_a.name,_a);_a.set_taborder("11");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_readonly("false");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_NM004","absolute","276","52","100","27",null,null,this.div_info);_a.set_taborder("28");_a.set_text("세로사이즈");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","276","104","100","27",null,null,this.div_info);_a.set_taborder("29");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Radio("rdo_USE_ENNC","absolute","381","109","169","21",null,null,this.div_info);this.div_info.addChild(_a.name,_a);_a.set_taborder("17");_a.set_innerdataset("@ds_use_ennc");_a.set_codecolumn("CD");_a.set_datacolumn("CD_NM");_a.set_value("1");_a.set_direction("vertical");_a.style.set_align("left");_a.set_cssclass("rdo_WF_Essential");_a.set_index("0");_a=new Calendar("calBgn","absolute","102","29","110","21",null,null,this.div_info);this.div_info.addChild(_a.name,_a);_a.set_taborder("9");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_editformat("yyyy-MM-dd");_a.set_readonly("false");_a.set_cssclass("cal_WF_Essential");_a=new Button("btn_uploadFiles","absolute",null,"2","80","19","167",null,this.div_info);_a.set_taborder("32");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.div_info.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,"2","80","19","85",null,this.div_info);_a.set_taborder("33");_a.set_text("다운로드");_a.set_cssclass("btn_WF_Process");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("shour","absolute","214","29","60","21",null,null,this.div_info);_a.set_taborder("34");_a.getSetter("maxlength").set("4");_a.getSetter("inputtype").set("number");_a.getSetter("imemode").set("none");_a.set_mask("##:##");_a.set_maskchar(" ");_a.set_type("string");_a.style.set_align("center");_a.set_cssclass("msk_WF_Essential");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("ehour","absolute","490","29","60","21",null,null,this.div_info);_a.set_taborder("35");_a.getSetter("maxlength").set("4");_a.getSetter("inputtype").set("number");_a.set_mask("##:##");_a.set_maskchar(" ");_a.set_type("string");_a.style.set_align("center");_a.set_cssclass("msk_WF_Essential");this.div_info.addChild(_a.name,_a);_a=new Static("Static07","absolute","-1","130","555","27",null,null,this.div_info);_a.set_taborder("36");_a.set_cssclass("sta_WF_Labelbg");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM06","absolute","0","104","100","27",null,null,this.div_info);_a.set_taborder("37");_a.set_text("순서");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","0","130","100","27",null,null,this.div_info);_a.set_taborder("39");_a.set_text("팝업종류");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Radio("rdo_USE_ENNC00","absolute","105","135","169","21",null,null,this.div_info);this.div_info.addChild(_a.name,_a);_a.set_taborder("40");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("1");_a.set_direction("vertical");_a.style.set_align("left");_a.set_cssclass("rdo_WF_Essential");_a.set_innerdataset("@ds_bannerType");_a=new Static("sta_NM08","absolute","552","130","100","27",null,null,this.div_info);_a.set_taborder("41");_a.set_text("텍스트");_a.set_cssclass("sta_WF_Label");this.div_info.addChild(_a.name,_a);_a=new Button("btn_textEdit","absolute","654","134","69","19",null,null,this.div_info);_a.set_taborder("43");_a.set_text("텍스트 편집");_a.set_cssclass("btn_WF_Process");this.div_info.addChild(_a.name,_a);_a=new Button("btn_deleteFile","absolute",null,"2","80","19","3",null,this.div_info);_a.set_taborder("45");_a.set_text("파일삭제");_a.set_cssclass("btn_WF_Process");_a.set_visible("true");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","102","55","150","21",null,null,this.div_info);_a.set_taborder("46");_a.set_mask("#,##0");_a.set_limitbymask("both");this.div_info.addChild(_a.name,_a);_a=new Static("Static09","absolute","256","54","17","21",null,null,this.div_info);_a.set_taborder("48");_a.set_text("px");this.div_info.addChild(_a.name,_a);_a=new Static("Static10","absolute","532","54","17","21",null,null,this.div_info);_a.set_taborder("49");_a.set_text("px");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","378","55","150","21",null,null,this.div_info);_a.set_taborder("50");_a.set_mask("#,##0");_a.set_limitbymask("both");this.div_info.addChild(_a.name,_a);_a=new Static("Static12","absolute","532","80","17","21",null,null,this.div_info);_a.set_taborder("51");_a.set_text("px");this.div_info.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","378","81","150","21",null,null,this.div_info);_a.set_taborder("52");_a.set_mask("#,##0");_a.set_limitbymask("both");this.div_info.addChild(_a.name,_a);_a=new Grid("grd_fileList","absolute","654","23",null,"79","2",null,this.div_info);_a.set_taborder("53");_a.set_binddataset("ds_fileList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"242\"/><Column size=\"125\"/><Column size=\"119\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"2\" text=\"bind:FILE_EXTSN\"/><Cell col=\"3\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.div_info.addChild(_a.name,_a);_a=new Grid("grd_bannerList","absolute","0","237",null,null,"28","1",this);_a.set_taborder("11");_a.set_binddataset("ds_bannerList");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"177\"/><Column size=\"62\"/><Column size=\"69\"/><Column size=\"100\"/><Column size=\"58\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"66\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"팝업순서\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" colspan=\"2\" text=\"시작일시\"/><Cell col=\"6\" colspan=\"2\" text=\"종료일시\"/><Cell col=\"8\" text=\"등록일자\"/><Cell col=\"9\" text=\"팝업종류\"/><Cell col=\"10\" text=\"미리보기\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:BANNER_SJ\"/><Cell col=\"2\" text=\"bind:ORDER_SEQ\"/><Cell col=\"3\" displaytype=\"checkbox\" text=\"bind:USE_AT\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:APPLC_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:APPLC_BGNTM\" mask=\"##:##\" maskchar=\" \"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:APPLC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:APPLC_ENDTM\" mask=\"##:##\" maskchar=\" \"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:REGIST_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:BANNER_TYPE\" combodataset=\"ds_bannerType\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" displaytype=\"image\" text=\"theme://images/btn_WF_Search.png\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","257","117","17","21",null,null,this);_a.set_taborder("13");_a.set_text("px");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","103","118","150","21",null,null,this);_a.set_taborder("14");_a.set_mask("#,##0");_a.set_limitbymask("both");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","103","144","172","21",null,null,this);_a.set_taborder("15");_a.set_mask("#,##0");_a.set_limitbymask("both");this.addChild(_a.name,_a);_a=new Layout("default","",1024,653,this.div_info,function(_b){_b.set_taborder("10");_b.style.set_border("1 solid #808080ff");});this.div_info.addLayout(_a.name,_a);_a=new Layout("default","",1059,737,this,function(_b){_b.set_classname("HPM050201");_b.set_titletext("팝업정보관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","Div00.div_info.spn_acntYear","value","ds_hpmWebzin","PBLICTE_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Div00.div_info.cmb_month","value","ds_hpmWebzin","PBLICTE_MONTH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.div_info.chk_inadqcEntrpsAt01","value","ds_hpmWebzin","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div00.div_info.edt_bbsId","value","ds_hpmWebzin","WEBZIN_SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Div00.div_info.edt_bbsId00","value","ds_hpmWebzin","PDF_URL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_info.rdo_USE_ENNC","value","ds_bannerList","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_info.calBgn","value","ds_bannerList","APPLC_BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_info.calEnd","value","ds_bannerList","APPLC_ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_info.edt_bbsId00","value","ds_bannerList","BANNER_SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_info.edt_imgUrl","value","ds_bannerList","BANNER_IMG_URL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_info.shour","value","ds_bannerList","APPLC_BGNTM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_info.ehour","value","ds_bannerList","APPLC_ENDTM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_info.rdo_USE_ENNC00","value","ds_bannerList","BANNER_TYPE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_info.MaskEdit00","value","ds_bannerList","WIDTH_SIZE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_info.MaskEdit02","value","ds_bannerList","VRTICL_SIZE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_info.MaskEdit03","value","ds_bannerList","VRTICL_LC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","MaskEdit02","value","ds_bannerList","WIDTH_LC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","MaskEdit00","value","ds_bannerList","ORDER_SEQ");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM050201.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM050201.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("HPM050201.xfdl","lib::comUpDownUtils.xjs");this.addIncludeScript("HPM050201.xfdl","lib::comInnerSanct.xjs");this.registerScript("HPM050201.xfdl",function(){this.nRowPos=0;this.File_UpDownManager=null;this.HPM050201_oninit=function(_a,_b){this.fn_misFormInit(this);this.fn_init_dataset();};this.HPM050201_onload=function(_a,_b){this.fn_init_form();this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_search();};this.fn_init_dataset=function(){var _a={useMultiUpload:false,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"HPM","CTM");this.File_UpDownManager.init(_a);};this.fn_loadCombo=function(){};this.fn_loadComboNonCodeTbl=function(_a,_b){};this.fn_callbackAfter=function(_a){};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_bannerList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_fileList.clearData();this.ds_bannerList.clearData();this.ds_condDtl.clearData();this.ds_condDtl.addRow();this.fn_transaction("selectBannerList");};this.fn_save=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_bannerList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){nRowPos=this.ds_bannerList.rowposition;var _a=this.ds_fileList.rowposition;var _b=this.ds_fileList.getColumn(0,"STRE_FILE_NM");var _c=this.ds_fileList.getColumn(0,"FILE_EXTSN");this.ds_bannerList.setColumn(nRowPos,"FILE_SN",this.ds_fileList.getColumn(_a,"FILE_SN"));this.fn_transaction("mainCUD");}};this.fn_search_fileList=function(){var _a=this.ds_bannerList.rowposition;var _b=this.ds_bannerList.getColumn(_a,"FILE_SN");this.ds_cond_fileSn.clearData();var _c=this.ds_cond_fileSn.addRow();this.ds_cond_fileSn.setColumn(_c,"FILE_SN",_b);this.ds_fileList.clearData();this.fn_transaction("selectAtchFile");};this.fn_etcSearch_fileList=function(){var _a=this.ds_bannerList.rowposition;var _b=this.ds_bannerList.getColumn(_a,"FILE_SN_PDF");this.ds_cond_fileSnEtc.clearData();var _c=this.ds_cond_fileSnEtc.addRow();this.ds_cond_fileSnEtc.setColumn(_c,"FILE_SN",_b);this.ds_fileList00.clearData();this.fn_transaction("selectAtchFileEtc");};this.fn_transaction=function(_a){switch(_a){case "selectBannerList":var _b="hsco/hpm/ctm/HPM050201/selectPopupList.do";var _c="input1=ds_condDtl";var _d="ds_bannerList=output1";break;case "selectPopup":var _b="hsco/hpm/ctm/HPM050201/selectPopup.do";var _c="input1=ds_condDtl";var _d="ds_bannerList=output1";break;case "mainCUD":var _b="hsco/hpm/ctm/HPM050201/mainCUD.do";var _c="input1=ds_bannerList:U";var _d="";break;case "selectAtchFile":var _b="/hsco/cmm/file/selectAtchmnFileList.do";var _c="input1=ds_cond_fileSn";var _d="ds_fileList=output1";break;case "selectAtchFileEtc":var _b="/hsco/cmm/file/selectAtchmnFileList.do";var _c="input1=ds_cond_fileSnEtc";var _d="ds_fileList00=output1";break;case "deleteFile":var _b="hsco/cmm/file/deleteFile.do";var _c="input1=ds_fileList:U";var _d="ds_fileList=output1";case "deleteFileEtc":var _b="hsco/cmm/file/deleteFile.do";var _c="input1=ds_fileList:U";var _d="ds_fileList00=output1";}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectBannerList":this.ds_bannerList.set_rowposition(nRowPos);nRowPos=0;break;case "mainCUD":this.gfn_message("success.처리.성공");this.fn_search();case "selectAtchFile":this.fn_fileExtChk();break;case "deleteFileEtc":trace("this.ds_bannerList.rowposition:"+this.ds_bannerList.rowposition);this.ds_bannerList.setColumn(this.ds_bannerList.rowposition,"BANNER_URL","");break;}}};this.fn_insert=function(){var _a=this.ds_bannerList.addRow();var _b=this.comUtils.getClientDate("YYYYMMDD");this.ds_bannerList.setColumn(_a,"APPLC_BGNDE",_b);this.ds_bannerList.setColumn(_a,"APPLC_BGNTM","0000");this.ds_bannerList.setColumn(_a,"APPLC_ENDDE",_b);this.ds_bannerList.setColumn(_a,"APPLC_ENDTM","2359");this.ds_bannerList.setColumn(_a,"WIDTH_SIZE","484");this.ds_bannerList.setColumn(_a,"VRTICL_SIZE","378");this.ds_bannerList.setColumn(_a,"VRTICL_LC","0");this.ds_bannerList.setColumn(_a,"WIDTH_LC","0");this.ds_bannerList.setColumn(_a,"WIDTH_LC","0");this.ds_bannerList.setColumn(_a,"USE_AT","1");};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_bannerList.reset();this.ds_bannerList.applyChange();}};this.fn_delete=function(){var _a=this.ds_bannerList.rowposition;if(this.gfn_message("confirm.삭제여부")){this.ds_bannerList.deleteRow(_a);this.fn_search_fileList();}};this.fn_prependZero=function(_a,_b){while(_a.toString().length<_b){_a="0"+_a;}return _a;};this.grd_bannerList_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.btn_delFiles_onclick=function(_a,_b){var _c=this.ds_fileList.rowposition;if(_c< -1){if(application.confirm("첨부파일을 삭제하시겠습니까?")){var _d=this.ds_fileList.getColumn(_c,"CHK");this.ds_fileList.deleteRow(_c);var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_fileList:U";var _h="ds_fileList=output1";Ex.core.tran(this,_e,_f,_g,_h);}}};this.btn_uploadFiles_onclick=function(_a,_b){if(this.ds_fileList.rowcount<1){this.fn_autoFileSn("HPM","CTM",this.File_UpDownManager,this.ds_fileList,this.ds_bannerList,"TBHPM_BANNER_INFO","FILE_SN",["BANNER_ID"]);this.gfn_message("info.저장.초과","이미지 파일만",null,null,mCallback);}else{this.gfn_message("info.저장.초과","최대 1개 까지만");}};this.btn_uploadFiles00_onclick=function(_a,_b){this.fn_autoFileSn("HPM","CTM",this.File_UpDownManager,this.ds_fileList00,this.ds_bannerList,"TBHPM_BANNER_INFO","FILE_SN_ETC",["BANNER_ID"]);};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.rowposition;if(_c> -1){var _d=this.ds_fileList.getColumn(_c,"FILE_SN");var _e=this.ds_fileList.getColumn(_c,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_c,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_c,"CHK");this.File_UpDownManager.download(_d,_e,_f);}};this.btn_fileDelete_onclick=function(_a,_b){if(this.ds_fileList.getRowCount()>0){if(application.confirm("첨부파일을 삭제하시겠습니까?")){this.ds_fileList.deleteRow(0);this.fn_transaction("deleteAtchFile");}}};this.div_info_grd_fileList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else{this.gfn_gridSort(_a,_b);}};this.ds_bannerList_onrowposchanged=function(_a,_b){this.fn_search_fileList();var _c=this.ds_bannerList.rowposition;if(_c> -1){var _d=this.ds_bannerList.getColumn(_c,"BANNER_TYPE");if(_d=="001"){this.div_info.btn_textEdit.set_enable(false);this.div_info.btn_deleteFile.set_enable(true);this.div_info.btn_downFiles.set_enable(true);this.div_info.btn_uploadFiles.set_enable(true);this.div_info.edt_imgUrl.set_enable(true);this.div_info.edt_imgUrl.set_readonly(false);this.div_info.edt_imgUrl.set_cssclass("");}else if(_d=="002"){this.div_info.btn_deleteFile.set_enable(false);this.div_info.btn_downFiles.set_enable(false);this.div_info.btn_uploadFiles.set_enable(false);this.div_info.edt_imgUrl.set_enable(false);this.div_info.edt_imgUrl.set_readonly(true);this.div_info.edt_imgUrl.set_cssclass("edt_WF_Readnly");this.div_info.btn_textEdit.set_enable(true);}}};this.fn_fileExtChk=function(){var _a=this.ds_fileList.rowposition;var _b=this.ds_fileList.getColumn(_a,"FILE_EXTSN");if(_b=="undefined"){return;}if(_b.toLowerCase()!="jpg"&&_b.toLowerCase()!="jpeg"&&_b.toLowerCase()!="gif"&&_b.toLowerCase()!="png"&&_b.toLowerCase()!="bmp"){this.gfn_message("info.파일.업로드.타입.불가","이미지가 아닌|이미지 파일만 업로드 가능합니다.");this.ds_fileList.deleteRow(_a);this.fn_transaction("deleteFile");return;}var _c=this.ds_fileList00.rowposition;var _d=this.ds_fileList00.getColumn(_c,"FILE_EXTSN");if(_d=="undefined"){return;}if(_b.toLowerCase()=="asp"&&_b.toLowerCase()=="php"&&_b.toLowerCase()=="jsp"&&_b.toLowerCase()=="aspx"&&_b.toLowerCase()=="cgi"&&_b.toLowerCase()=="exe"){this.gfn_message("info.파일.업로드.타입.불가","허용된 파일이 아닌|허용된 파일만 업로드 가능합니다.");this.ds_fileList00.deleteRow(_c);this.fn_transaction("deleteFileEtc");return;}};this.div_info_btn_textEdit_onclick=function(_a,_b){var _c=this.ds_bannerList.rowposition;var _d=this.ds_bannerList.getColumn(_c,"BANNER_ID");if(Ex.util.isUpdated(this.ds_bannerList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.comUtils.isNull(_d)){alert("팝업을 먼저 저장 후, 텍스트를 입력해주세요.");return false;}var _e={arg_0:this,popupId:_d};this.gfn_popup("popPopup",500,465,"팝업수정",_e,"hpm_ctm::HPM050201_P01.xfdl","fn_popPopupCallback",true);};this.ds_bannerList_oncolumnchanged=function(_a,_b){if(_b.columnid=="BANNER_TYPE"){if(_b.newvalue=="001"){this.div_info.btn_textEdit.set_enable(false);this.div_info.btn_deleteFile.set_enable(true);this.div_info.btn_downFiles.set_enable(true);this.div_info.btn_uploadFiles.set_enable(true);this.div_info.edt_imgUrl.set_enable(true);this.div_info.edt_imgUrl.set_readonly(false);this.div_info.edt_imgUrl.set_cssclass("");}else if(_b.newvalue=="002"){this.div_info.btn_deleteFile.set_enable(false);this.div_info.btn_downFiles.set_enable(false);this.div_info.btn_uploadFiles.set_enable(false);this.div_info.edt_imgUrl.set_enable(false);this.div_info.edt_imgUrl.set_readonly(true);this.div_info.edt_imgUrl.set_cssclass("edt_WF_Readnly");this.div_info.btn_textEdit.set_enable(true);}}};this.grd_bannerList_oncellclick=function(_a,_b){if(_b.col==10){var _c=this.ds_bannerList.rowposition;var _d=this.ds_bannerList.getColumn(_c,"BANNER_ID");system.execBrowser("https://yeyak.hsuco.or.kr/previewPopup.do?popupId="+_d);}};});this.on_initEvent=function(){this.ds_bannerList.addEventHandler("onrowposchanged",this.ds_bannerList_onrowposchanged,this);this.ds_bannerList.addEventHandler("oncolumnchanged",this.ds_bannerList_oncolumnchanged,this);this.addEventHandler("oninit",this.HPM050201_oninit,this);this.addEventHandler("onload",this.HPM050201_onload,this);this.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Static02.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_info.Static06.addEventHandler("onclick",this.div_info_Static06_onclick,this);this.div_info.calBgn.addEventHandler("oneditclick",this.div_info_calBgn_oneditclick,this);this.div_info.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.div_info.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.div_info.btn_textEdit.addEventHandler("onclick",this.div_info_btn_textEdit_onclick,this);this.div_info.btn_deleteFile.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.div_info.grd_fileList.addEventHandler("onheadclick",this.div_info_grd_fileList_onheadclick,this);this.grd_bannerList.addEventHandler("onheadclick",this.grd_bannerList_onheadclick,this);this.grd_bannerList.addEventHandler("oncellclick",this.grd_bannerList_oncellclick,this);};this.loadIncludeScript("HPM050201.xfdl");};})();