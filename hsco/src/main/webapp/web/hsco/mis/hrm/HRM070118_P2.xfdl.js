﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070118_P2");this.set_classname("HRM070118_P2");this.set_titletext("대체휴가신청");this._setFormPosition(0,0,466,338);}_a=new Dataset("ds_wrkcp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ASORT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNFIRM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_STS\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_REMNDR\" type=\"STRING\" size=\"256\"/><Column id=\"REWARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"WRKCP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_YM\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_TM\" type=\"STRING\" size=\"256\"/><Column id=\"TIME_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REWARD_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">ASORT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">보상휴가구분</Col></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">BGNDE</Col><Col id=\"from\">BGNDE</Col><Col id=\"to\">ENDDE</Col><Col id=\"expr\">시작일^종료일</Col><Col id=\"msgId\">시작일^종료일</Col></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">BGNDE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작일</Col><Col id=\"to\"/><Col id=\"from\"/><Col id=\"expr\"/></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">ENDDE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">BEGIN_TM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시작시간</Col></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">END_TM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">종료시간</Col></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">BEGIN_TM</Col><Col id=\"PK\"/><Col id=\"notNull\"/><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\">BEGIN_TM</Col><Col id=\"to\">2359</Col><Col id=\"lengthChkGb\"/><Col id=\"msgId\">시작시각^23:59</Col><Col id=\"expr\">시작시각^23:59</Col><Col id=\"func\"/></Row><Row><Col id=\"compId\">ds_wrkcp</Col><Col id=\"colId\">END_TM</Col><Col id=\"PK\"/><Col id=\"notNull\"/><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\">END_TM</Col><Col id=\"to\">2359</Col><Col id=\"lengthChkGb\"/><Col id=\"msgId\">종료시각^23:59</Col><Col id=\"expr\">종료시각^23:59</Col><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"REWARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_com022",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel00","absolute",null,"196","352","27","15",null,this);_a.set_taborder("63");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","15","61",null,"5","15",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","15",null,null,"15","15","0",this);_a.set_taborder("19");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","15",null,null,"0",this);_a.set_taborder("21");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("22");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_REGIST_NM00","absolute","17","46",null,"21","361",null,this);_a.set_taborder("25");_a.set_text("신청자");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Static("sta_DETAIL00","absolute","17","124",null,"21","362",null,this);_a.set_taborder("23");_a.set_text("상세내용");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","118",null,"10","15",null,this);_a.set_taborder("24");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute",null,"65","352","27","15",null,this);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Edit("edt_EMPNO","absolute","110","68","111","21",null,null,this);_a.set_taborder("27");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_EMPNM","absolute","223","68","137","21",null,null,this);_a.set_taborder("28");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Button("btn_Vrsc_man_search00","absolute","345","72","13","13",null,null,this);_a.set_taborder("30");_a.style.set_background("URL('theme://images/btn_WF_Search.png')");_a.style.set_border("0 solid #8d8d8dff");_a.style.set_cursor("default");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","139",null,"5","15",null,this);_a.set_taborder("31");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel03","absolute",null,"144","352","27","15",null,this);_a.set_taborder("33");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel08","absolute","0px","0px","0px","0px",null,null,this);_a.set_taborder("34");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_APYEXM_NO01","absolute","15","196","93","27",null,null,this);_a.set_taborder("39");_a.set_text("사유/용무");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Edit("edt_PRVONSH","absolute","110","199","336","21",null,null,this);_a.set_taborder("40");_a.set_lengthunit("ascii");_a.set_maxlength("200");this.addChild(_a.name,_a);_a=new Calendar("cal_BGNDE","absolute","110","147","117","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("41");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("sta_empTitle11","absolute","15","144","93","27",null,null,this);_a.set_taborder("43");_a.set_text("시작일");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_empTitle10","absolute","234","144","93","27",null,null,this);_a.set_taborder("44");_a.set_text("시작시각");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_backgroundLabel01","absolute",null,"170","352","27","15",null,this);_a.set_taborder("46");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_empTitle00","absolute","234","170","93","27",null,null,this);_a.set_taborder("47");_a.set_text("종료시각");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_empTitle06","absolute","15","170","93","27",null,null,this);_a.set_taborder("48");_a.set_text("종료일");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 4 0 12");_a.style.set_align("right middle");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Calendar("cal_ENDDE","absolute","110","173","117","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("49");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a.set_readonly("false");_a=new MaskEdit("msk_BEGIN_TM","absolute","329","147","71","21",null,null,this);_a.set_taborder("50");_a.set_type("string");_a.set_mask("##:##");_a.style.set_align("center middle");_a.set_cssclass("msk_WF_Essential");this.addChild(_a.name,_a);_a=new MaskEdit("msk_END_TM","absolute","329","173","71","21",null,null,this);_a.set_taborder("51");_a.set_type("string");_a.set_mask("##:##");_a.set_cssclass("msk_WF_Essential");_a.style.set_align("center middle");_a.set_readonly("false");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","15","40",null,"10","15",null,this);_a.set_taborder("54");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Save","absolute",null,"15","50","25","67",null,this);_a.set_taborder("55");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.style.set_background("#4563a1ff");_a.style.set_border("1 solid #2d4d8eff");_a.style.set_bordertype("round 2 2");_a.style.set_font("bold 9 Gulim");_a.getSetter("userdata").set("A:T;");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("56");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");_a.style.set_background("#4563a1ff");_a.style.set_border("1 solid #2d4d8eff");_a.style.set_bordertype("round 2 2");_a.style.set_font("bold 9 Gulim");_a.style.set_gradation("linear 0,0 #f4f4f4ff 0,100 #e2e7edff");_a.getSetter("userdata").set("A:T;");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","197","21",null,null,this);_a.set_taborder("57");_a.set_text("대체휴가 신청");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute",null,"91","352","27","15",null,this);_a.set_taborder("62");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new MaskEdit("msk_OVTIME_REMNDR","absolute","110","94","71","21",null,null,this);_a.set_taborder("64");_a.set_readonly("true");_a.set_type("string");_a.set_mask("##:##");_a.set_cssclass("rdo_WF_Essential");_a.style.set_color("tomato");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_EMP","absolute",null,"65","93","27","358",null,this);_a.set_taborder("29");_a.set_text("신청자");_a.set_cssclass("sta_WF_Label");_a.style.set_font("9 Dotum");_a.set_positionstep("-1");this.addChild(_a.name,_a);_a=new Static("sta_OVTIME_REMNDR","absolute",null,"91","93","27","358",null,this);_a.set_taborder("60");_a.set_text("휴일근무\r\n잔여시간");_a.set_cssclass("sta_WF_Label");_a.set_positionstep("-1");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_ACNT_LEVEL","absolute","22","225","433","104",null,null,this);_a.set_taborder("65");_a.set_text("- 대체휴가 신청 규정 -\r\n① 초과근무 사후결재 완료 시간으로 사용.\r\n② 일요일 초과근무건으로 한정.\r\n③ 초과근무한 시간 대비 1:1로 전환(사용).");_a.set_wordwrap("char");_a.style.set_linespace("8");_a.style.set_background("transparent");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_OVTMWRK_TM","absolute",null,"91","93","27","139",null,this);_a.set_taborder("66");_a.set_text("신청시간");_a.set_cssclass("sta_WF_Label");_a.set_positionstep("-1");_a.style.set_font("9 Dotum");this.addChild(_a.name,_a);_a=new MaskEdit("msk_OVTMWRK_TM","absolute","329","94","71","21",null,null,this);_a.set_taborder("67");_a.set_readonly("true");_a.set_type("string");_a.set_mask("##:##");_a.set_cssclass("msk_WF_Readonly");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Combo("cmb_SANCTN_STS","absolute","110","94","83","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("68");_a.set_readonly("true");_a.set_innerdataset("ds_com022");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Readonly");_a.set_visible("false");_a=new Layout("default","",466,338,this,function(_b){_b.set_classname("HRM070118_P2");_b.set_titletext("대체휴가신청");});this.addLayout(_a.name,_a);_a=new BindItem("item0","edt_EMPNO","value","ds_wrkcp","EMPNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edt_EMPNM","value","ds_wrkcp","EMPNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","edt_PRVONSH","value","ds_wrkcp","PRVONSH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","edt_PRVONSH","tooltiptext","ds_wrkcp","PRVONSH");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item33","cal_BGNDE","value","ds_wrkcp","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","cal_ENDDE","value","ds_wrkcp","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","msk_BEGIN_TM","value","ds_wrkcp","BEGIN_TM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","msk_END_TM","value","ds_wrkcp","END_TM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","msk_OVTIME_REMNDR","value","ds_wrkcp","OVTIME_REMNDR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","msk_OVTMWRK_TM","value","ds_wrkcp","OVTMWRK_TM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","cmb_SANCTN_STS","value","ds_wrkcp","SANCTN_STS");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM070118_P2.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070118_P2.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070118_P2.xfdl",function(){this.fv_objForm;this.ovtmwrkYm;this.maxRegYm;this.HRM070118_P2_onload=function(_a,_b){var _c=[["ds_com022","COM022","1",""],];var _d=function(_e,_f,_g){this.fv_objForm=this.parent.arg_0;this.ovtmwrkYm=this.parent.arg_6;this.maxRegYm=this.parent.arg_8;this.ds_wrkcp.clearData();this.ds_wrkcp.addRow();this.ds_wrkcp.setColumn(0,"DEPT_CODE",this.parent.arg_1);this.ds_wrkcp.setColumn(0,"DEPT_NM",this.parent.arg_2);this.ds_wrkcp.setColumn(0,"EMPNO",this.parent.arg_3);this.ds_wrkcp.setColumn(0,"EMPNM",this.parent.arg_4);this.ds_wrkcp.setColumn(0,"OVTIME_REMNDR",this.parent.arg_5);this.ds_wrkcp.setColumn(0,"OVTMWRK_YM",this.parent.arg_6);this.ds_wrkcp.setColumn(0,"ASORT_CODE","300");this.ds_wrkcp.setColumn(0,"REWARD_SE",2);var _h=this.parent.arg_7;if(this.comUtils.isNotNull(_h)){this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"REWARD_SEQ",_h);this.fn_transaction("selectRewordManage");}};this.gfn_comboLoad(_c,_d);};this.fn_save=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_wrkcp,this.ds_validation)){return;}var _a=this.ds_wrkcp.getColumn(0,"OVTIME_REMNDR");var _b=this.ds_wrkcp.getColumn(0,"OVTMWRK_TM");var _c=this.ds_wrkcp.getColumn(0,"BGNDE").substr(0,6);if(this.ovtmwrkYm>_c||this.maxRegYm<_c){this.gfn_message("info.처리불가","근무년월 기준으로 2개월 내에서 등록가능합니다.");return false;}if(nexacro.toNumber(_b,0,0,0)>nexacro.toNumber(_a,0,0,0)){this.gfn_message("errors.항목.입력값.이하","신청시간|잔여시간");return;}if(this.gfn_message("comm.행위여부","근무상황부와 대체휴가계획에 해당데이터를 저장합니다.\n계속")){this.fn_transaction("saveRewordManage");}};this.btn_Close_onclick=function(_a,_b){this.close();};this.fn_transaction=function(_a){switch(_a){case "selectRewordManage":var _b="hsco/mis/hrm/HRM070118/selectRewordManage.do";var _c="input1=ds_cond";var _d="ds_wrkcp=output1";break;case "saveRewordManage":var _b="hsco/mis/hrm/HRM070118/saveRewordManage.do";var _c="input1=ds_wrkcp";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectRewordManage":this.btn_Save.set_visible(false);this.sta_OVTIME_REMNDR.set_text("결재상태");this.cmb_SANCTN_STS.set_visible(true);this.edt_PRVONSH.set_readonly(true);this.cal_BGNDE.set_readonly(true);this.cal_ENDDE.set_readonly(true);this.msk_BEGIN_TM.set_readonly(true);this.msk_END_TM.set_readonly(true);this.btn_Save.set_visible(false);break;case "saveRewordManage":this.gfn_message("success.처리.성공");this.btn_Save.set_visible(false);break;}}};this.ds_wrkcp_cancolumnchange=function(_a,_b){if(_b.columnid=="BEGIN_TM"||_b.columnid=="END_TM"){if(nexacro.toNumber(_b.newvalue,0,0,0)<900){this.gfn_message("errors.항목.입력값.이상","휴가시간|09시");return false;}if(nexacro.toNumber(_b.newvalue,0,0,0)>1800){this.gfn_message("errors.항목.입력값.이하","휴가시간|18시");return false;}if(!this.comUtils.isTime(_b.newvalue)){this.gfn_message("errors.값확인.요청","시간형식|09:00~18:00 사이인지");return false;}}if(_b.columnid=="BGNDE"||_b.columnid=="ENDDE"){var _c=this.dateUtils.format(_b.newvalue,"E");if(_c=="토요일"||_c=="일요일"){this.gfn_message("comm.항목.선택.요청","평일");return false;}}if(_b.columnid=="BGNDE"){if(this.comUtils.isNotNull(_a.getColumn(_b.row,"ENDDE"))){if(this.dateUtils.between(_b.newvalue,_a.getColumn(_b.row,"ENDDE"))<0){this.gfn_message("errors.항목.입력값.이하","휴가시작일|휴가종료일");return false;}}}if(_b.columnid=="ENDDE"){if(this.comUtils.isNotNull(_a.getColumn(_b.row,"BGNDE"))){if(this.dateUtils.between(_a.getColumn(_b.row,"BGNDE"),_b.newvalue)<0){this.gfn_message("errors.항목.입력값.이하","휴가시작일|휴가종료일");return false;}}}};this.ds_wrkcp_oncolumnchanged=function(_a,_b){if(_b.columnid=="BGNDE"||_b.columnid=="ENDDE"||_b.columnid=="BEGIN_TM"||_b.columnid=="END_TM"){if(this.comUtils.isNotNull(_a.getColumn(_b.row,"BGNDE"))&&this.comUtils.isNotNull(_a.getColumn(_b.row,"ENDDE"))&&this.comUtils.isNotNull(_a.getColumn(_b.row,"BEGIN_TM"))&&this.comUtils.isNotNull(_a.getColumn(_b.row,"END_TM"))){var _c=this.ds_wrkcp.getColumn(0,"BGNDE");var _d=this.ds_wrkcp.getColumn(0,"ENDDE");var _e=this.ds_wrkcp.getColumn(0,"DAYCNT");var _f=this.ds_wrkcp.getColumn(0,"BEGIN_TM");var _g=this.ds_wrkcp.getColumn(0,"END_TM");var _h=0;var _i;if(_c==_d){if(nexacro.toNumber(_f,0,0,0)>=1300){_h=0;}else if(nexacro.toNumber(_g,0,0,0)<=1200){_h=0;}else if(nexacro.toNumber(_f,0,0,0)<=1200&&nexacro.toNumber(_g,0,0,0)>=1300){_h+=60;}else if(nexacro.toNumber(_f,0,0,0)>=1200&&nexacro.toNumber(_g,0,0,0)<=1300){_h+=(nexacro.toNumber(_g,0,0,0)-nexacro.toNumber(_f,0,0,0));}else if(nexacro.toNumber(_f,0,0,0)<=1200&&nexacro.toNumber(_g,0,0,0)<=1300){_h+=(nexacro.toNumber(_g,0,0,0)-1200);}else if(nexacro.toNumber(_f,0,0,0)>=1200&&nexacro.toNumber(_g,0,0,0)>=1300){_h+=(1260-nexacro.toNumber(_f,0,0,0));}var _j=this.fn_calTime(_f,_g,_h);this.ds_wrkcp.setColumn(0,"TIME",_j);this.ds_wrkcp.setColumn(0,"OVTMWRK_TM",_j);}else{var _k;var _l;if(nexacro.toNumber(_f,0,0,0)<1300){_i=(1260-nexacro.toNumber(_f,0,0,0));_h=(_i<=60?_i:60);}else{_h=0;}_k=this.fn_calTime(_f,"1800",_h);if(nexacro.toNumber(_g,0,0,0)>=1200){_i=(nexacro.toNumber(_g,0,0,0)-1200);_h=(_i>60?60:_i);}else{_h=0;}_l=this.fn_calTime("0900",_g,_h);var _m=nexacro.toNumber(_k.substr(0,2),0,0,0)+nexacro.toNumber(_l.substr(0,2),0,0,0);var _n=nexacro.toNumber(_k.substr(2,2),0,0,0)+nexacro.toNumber(_l.substr(2,2),0,0,0);if(_n>=60){_n-=60;_m++ ;}for(var _p=2;_p<this.dateUtils.between(_c,_d);_p++ ){var _o=this.dateUtils.format(this.dateUtils.addDate(_c,_p,'s'),"E");if(_o!="토요일"&&_o!="일요일"){_m+=8;}}this.ds_wrkcp.setColumn(0,"TIME",_m.toString().padLeft(2,"0")+_n.toString().padLeft(2,"0"));this.ds_wrkcp.setColumn(0,"OVTMWRK_TM",_m.toString().padLeft(2,"0")+_n.toString().padLeft(2,"0"));}}}};this.fn_calTime=function(_a,_b,_c){var _d=this.ds_wrkcp.rowposition;var _e=this.ds_wrkcp.getColumn(_d,"BGNDE");var _f=this.ds_wrkcp.getColumn(_d,"ENDDE");if(!this.comUtils.isNull(_e)&&!this.comUtils.isNull(_f)||!this.comUtils.isNull(_a)||!this.comUtils.isNull(_b)){var _g=_f-_e;if(_g<0){this.ds_wrkcp.setColumn(_d,"DAYCNT","");this.ds_wrkcp.setColumn(_d,"TIME","");}else{var _h=new Date(_e.substr(0,4)+"/"+_e.substr(4,2)+"/"+_e.substr(6,2)+" "+_a.substr(0,2)+":"+_a.substr(2,2)+":"+"00");var _i=new Date(_f.substr(0,4)+"/"+_f.substr(4,2)+"/"+_f.substr(6,2)+" "+_b.substr(0,2)+":"+_b.substr(2,2)+":"+"00");var _j=(_i.getTime()-_h.getTime())/60000;_j-=nexacro.toNumber(_c,0,0,0);var _k=parseInt(((_j%1440)/60)).toString().padLeft(2,"0");var _l=((_j%1440)%60).toString().padLeft(2,"0");var _m=_k.concat(_l);return _m;}}};});this.on_initEvent=function(){this.ds_wrkcp.addEventHandler("cancolumnchange",this.ds_wrkcp_cancolumnchange,this);this.ds_wrkcp.addEventHandler("oncolumnchanged",this.ds_wrkcp_oncolumnchanged,this);this.addEventHandler("onload",this.HRM070118_P2_onload,this);this.btn_Vrsc_man_search00.addEventHandler("onclick",this.div_detail00_btn_Vrsc_man_search_onclick,this);this.btn_Save.addEventHandler("onclick",this.fn_save,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.sta_ACNT_LEVEL.addEventHandler("onclick",this.sta_ACNT_LEVEL_onclick,this);};this.loadIncludeScript("HRM070118_P2.xfdl");};})();