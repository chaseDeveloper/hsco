﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM020202");this.set_classname("HRM020202");this.set_titletext("입사지원자현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_PBLANC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_REALM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CMPET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_KOREAN\" type=\"STRING\" size=\"256\"/><Column id=\"CHOISE_SBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"PROPER_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">EMPMN_YEAR</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">채용년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">ODR_SE</Col><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">차수</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_ecnySportGnrlList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CMPET_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_CLSF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_REALM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_KOREAN\" type=\"STRING\" size=\"256\"/><Column id=\"BRTHDY\" type=\"STRING\" size=\"256\"/><Column id=\"MTRSC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"SAMENSS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CTTPC_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTTPC_MOBLPHON\" type=\"STRING\" size=\"256\"/><Column id=\"CTTPC_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RCRIT_REALM_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPYMN_PRTC_SPORT_TRGET_AT\" type=\"STRING\" size=\"256\"/><Column id=\"YGMN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"EMPYMN_PRTC_SPORT_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROPER_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CHOISE_SBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"RL_APYEXM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPMN_PBLANC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_empmnYearList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm091",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm002_s",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm082_s",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm083_s",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm084_s",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm065",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_properSe",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">부적격</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">적격</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm099_s",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm099",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"INT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult00","absolute","0","93","100","19",null,null,this);_a.set_taborder("0");_a.set_text("지원자현황");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","83","1031","10",null,null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_ecnySportGnrlList","absolute","0","117",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_ecnySportGnrlList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"경쟁구분\"/><Cell col=\"2\" text=\"채용구분\"/><Cell col=\"3\" text=\"응시직급\"/><Cell col=\"4\" text=\"응시분야\"/><Cell col=\"5\" text=\"응시번호\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"선택과목\"/><Cell col=\"8\" text=\"생일\"/><Cell col=\"9\" text=\"적격여부\"/><Cell col=\"10\" text=\"병역구분\"/><Cell col=\"11\" text=\"현주소\"/><Cell col=\"12\" text=\"비상연락처\"/><Cell col=\"13\" text=\"휴대폰번호\"/><Cell col=\"14\" text=\"이메일주소\"/><Cell col=\"15\" text=\"응시자격&#13;&#10;결격사유\"/><Cell col=\"16\" text=\"취업보호·지원&#13;&#10;대상자\"/><Cell col=\"17\" text=\"취업보호·지원&#13;&#10;비율\"/><Cell col=\"18\" text=\"청년여부\"/><Cell col=\"19\" text=\"지원일자\"/><Cell col=\"20\" text=\"등록일시\"/><Cell col=\"21\" text=\"최종수정일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:CMPET_SE\" combodataset=\"ds_hrm082_s\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:EMPMN_SE\" combodataset=\"ds_hrm083_s\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:APYEXM_CLSF_SE\" combodataset=\"ds_hrm002_s\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:APYEXM_REALM_SE\" combodataset=\"ds_hrm084_s\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:RL_APYEXM_NO\"/><Cell col=\"6\" text=\"bind:NM_KOREAN\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:CHOISE_SBJECT\" combodataset=\"ds_hrm099\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" text=\"bind:BRTHDY\" mask=\"##월 ##일\" maskchar=\" \" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:PROPER_AT\" combodataset=\"ds_properSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:MTRSC_SE\" combodataset=\"ds_hrm065\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" style=\"align:left;\" text=\"bind:NOW_ADRES\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:CTTPC_TELNO\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:CTTPC_MOBLPHON\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:CTTPC_EMAIL\"/><Cell col=\"15\" displaytype=\"checkbox\" text=\"bind:SAMENSS_AT\"/><Cell col=\"16\" displaytype=\"checkbox\" style=\"align:center;padding: ;\" text=\"bind:EMPYMN_PRTC_SPORT_TRGET_AT\"/><Cell col=\"17\" text=\"bind:EMPYMN_PRTC_SPORT_RATE\"/><Cell col=\"18\" displaytype=\"checkbox\" text=\"bind:YGMN_AT\"/><Cell col=\"19\" displaytype=\"date\" text=\"bind:SPORT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"normal\" text=\"bind:USER_REGIST_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" displaytype=\"normal\" text=\"bind:USER_UPDT_DT\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","112",null,"5","28",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"83","28",null,this);_a.set_taborder("7");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_space","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("100");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("101");_a.set_text("채용년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","201","5","64","21",null,null,this.div_search);_a.set_taborder("102");_a.set_text("차수");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","387","5","77","21",null,null,this.div_search);_a.set_taborder("103");_a.set_text("채용공고명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_empmnYear","absolute","79","5","108","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("104");_a.set_innerdataset("@ds_empmnYearList");_a.set_codecolumn("EMPMN_YEAR");_a.set_datacolumn("EMPMN_YEAR");_a.set_cssclass("cmb_WF_Essential");_a=new Combo("cmb_odrSe","absolute","265","5","108","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("105");_a.set_innerdataset("@ds_odrSeList");_a.set_codecolumn("ODR_SE");_a.set_datacolumn("ODR_SE");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sta_space5","absolute","773","0","15",null,null,"0",this.div_search);_a.set_taborder("106");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_space2","absolute","187","0","15",null,null,"0",this.div_search);_a.set_taborder("107");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_space3","absolute","373","0","15",null,null,"0",this.div_search);_a.set_taborder("108");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_hori_space","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("109");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_hori_space1","absolute","0","26",null,"5","0",null,this.div_search);_a.set_taborder("110");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_hori_space2","absolute","0",null,null,"5","0","-40",this.div_search);_a.set_taborder("111");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_space4","absolute","574","31","15",null,null,"0",this.div_search);_a.set_taborder("112");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_cmpetSe","absolute","15","30","64","21",null,null,this.div_search);_a.set_taborder("113");_a.set_text("경쟁구분");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cmpetSe","absolute","80","31","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("114");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_hrm082_s");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_apyexmSe","absolute","202","30","64","21",null,null,this.div_search);_a.set_taborder("115");_a.set_text("채용구분");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_apyexmSe","absolute","266","31","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("116");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_hrm083_s");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_apyexmClsfSe","absolute","387","31","64","21",null,null,this.div_search);_a.set_taborder("117");_a.set_text("응시직급");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_apyexmClsfSe","absolute","467","31","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("118");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_hrm002_s");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_apyexmRealmSe","absolute","589","30","64","21",null,null,this.div_search);_a.set_taborder("119");_a.set_text("응시분야");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_apyexmRealmSe","absolute","667","31","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("120");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_hrm084_s");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_nmKorean","absolute","15","56","64","21",null,null,this.div_search);_a.set_taborder("121");_a.set_text("응시자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nmKorean","absolute","80","56","107","21",null,null,this.div_search);_a.set_taborder("122");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_empmnPblancNm","absolute","467","5","307","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("123");_a.set_readonly("true");_a.set_innerdataset("@ds_odrSeList");_a.set_codecolumn("ODR_SE");_a.set_datacolumn("EMPMN_PBLANC_NM");_a.set_cssclass("cmb_WF_Readonly");_a=new Static("sta_hori_space00","absolute","0","51",null,"5","0",null,this.div_search);_a.set_taborder("124");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_apyexmRealmSe00","absolute","788","30","64","21",null,null,this.div_search);_a.set_taborder("125");_a.set_text("선택과목");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_sbjectSn","absolute","860","31","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("126");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_hrm099_s");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_nmKorean00","absolute","202","56","64","21",null,null,this.div_search);_a.set_taborder("127");_a.set_text("적격여부");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_properSe","absolute","266","55","107","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("128");_a.set_displaynulltext("전체");_a.set_innerdataset("@ds_properSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("sta_hori_space03","absolute","0","76",null,"5","0",null,this.div_search);_a.set_taborder("129");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Layout("default","",0,83,this.div_search,function(_b){_b.set_taborder("7");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM020202");_b.set_titletext("입사지원자현황");});this.addLayout(_a.name,_a);_a=new BindItem("item23","div_search.cmb_empmnYear","value","ds_cond","EMPMN_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_search.cmb_odrSe","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item46","div_search.cmb_cmpetSe","value","ds_cond","CMPET_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_search.cmb_apyexmSe","value","ds_cond","EMPMN_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item40","div_search.cmb_apyexmClsfSe","value","ds_cond","APYEXM_CLSF_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item26","div_search.cmb_apyexmRealmSe","value","ds_cond","APYEXM_REALM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item27","div_search.edt_nmKorean","value","ds_cond","NM_KOREAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_search.cmb_empmnYear","value","ds_cond","EMPMN_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_search.cmb_odrSe","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item36","div_search.cmb_cmpetSe","value","ds_cond","CMPET_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item47","div_search.cmb_apyexmSe","value","ds_cond","CMPET_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item48","div_search.cmb_apyexmClsfSe","value","ds_cond","APYEXM_CLSF_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item49","div_search.cmb_apyexmRealmSe","value","ds_cond","APYEXM_REALM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item50","div_search.cmb_empmnPblancNm","value","ds_cond","ODR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item54","div_search.cmb_sbjectSn","value","ds_cond","CHOISE_SBJECT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item55","div_search.cmb_sbjectSn","value","ds_cond","APYEXM_REALM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item56","div_search.cmb_properSe","value","ds_cond","PROPER_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item57","div_search.cmb_properSe","value","ds_cond","CMPET_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM020202.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM020202.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM020202.xfdl",function(){this.HRM020202_oninit=function(_a,_b){};this.HRM020202_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_empmnYearList.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"EMPMN_PBLANC_NM","");this.ds_cond.setColumn(0,"CMPET_SE","");this.ds_cond.setColumn(0,"EMPMN_SE","");this.ds_cond.setColumn(0,"APYEXM_CLSF_SE","");this.ds_cond.setColumn(0,"APYEXM_REALM_SE","");this.ds_cond.setColumn(0,"DELETE_AT","0");var _a=[["ds_hrm002_s","HRM002","1","전체"],["ds_hrm082_s","HRM082","1","전체"],["ds_hrm083_s","HRM083","1","전체"],["ds_hrm084_s","HRM084","1","전체"],["ds_hrm091","HRM091","1",""],["ds_hrm065","HRM065","1",""],["ds_hrm099_s","HRM099","1","전체"],["ds_hrm099","HRM099","1",""]];var _b=function(_c,_d,_e){var _f=this.ds_hrm099.addRow();this.ds_hrm099.setColumn(_f,"CODE","999");this.ds_hrm099.setColumn(_f,"CODE_NM","-");this.fn_transaction("selectEmpmnYearCombo");};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_ecnySportGnrlList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectEcnySportGnrlList");};this.fn_transaction=function(_a){switch(_a){case "selectEmpmnYearCombo":var _b="hsco/mis/hrm/HRM020201/empmnYearComboList.do";var _c="";var _d="ds_empmnYearList=output1";break;case "selectOdrSeCombo":var _b="hsco/mis/hrm/HRM020201/odrSeComboList.do";var _c="input1=ds_cond";var _d="ds_odrSeList=output1";break;case "selectEcnySportGnrlList":var _b="hsco/mis/hrm/HRM020202/selectEcnySportGnrlList.do";var _c="input1=ds_cond";var _d="ds_ecnySportGnrlList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectEmpmnYearCombo":this.div_search.cmb_empmnYear.set_index(0);break;case "selectOdrSeCombo":this.div_search.cmb_odrSe.set_index(0);break;case "selectTbhrmEcnySportGnrlList":break;}}};this.grd_ecnySportGnrlList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}this.gfn_gridSort(_a,_b);};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="EMPMN_YEAR"){this.fn_transaction("selectOdrSeCombo");}else if(_b.columnid=="ODR_SE"){this.fn_search();}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_ecnySportGnrlList.addEventHandler("onrowposchanged",this.ds_ecnySportGnrlList_onrowposchanged,this);this.addEventHandler("onload",this.HRM020202_onload,this);this.addEventHandler("oninit",this.HRM020202_oninit,this);this.grd_ecnySportGnrlList.addEventHandler("onheadclick",this.grd_ecnySportGnrlList_onheadclick,this);};this.loadIncludeScript("HRM020202.xfdl");};})();