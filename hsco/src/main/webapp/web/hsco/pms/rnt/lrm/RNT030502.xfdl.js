﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT030502");this.set_classname("RNT030502");this.set_titletext("재계약자현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_area",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_excel",this);_a._setContents("<ColumnInfo><Column id=\"APPLCNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_MTH\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_POTVALE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_STDPC\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_PC\" type=\"STRING\" size=\"256\"/><Column id=\"DFBT_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"FDLTR_ESTBS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RLDB_ESTBS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LEGACY_RENT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LFSTS_CONFM_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_PRESV_MTHD\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ANALS_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APPLCNT_NO\">123132</Col><Col id=\"NM\">테스트</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AREA_SE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">Calendar00</Col><Col id=\"notNull\">Y</Col><Col id=\"compId\">div_search</Col><Col id=\"msgId\">임대종료월</Col><Col id=\"from\"/><Col id=\"to\">Calendar01</Col></Row><Row><Col id=\"colId\">Calendar01</Col><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">임대종료월</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_lfsts_cntrct",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TRNSFRN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CNTRCT_CO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FAMILY_CO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"200\"/><Column id=\"ZIP_DM\" type=\"STRING\" size=\"6\"/><Column id=\"ADRES_DM\" type=\"STRING\" size=\"200\"/><Column id=\"ADRES_DETAIL_DM\" type=\"STRING\" size=\"200\"/><Column id=\"TELNO\" type=\"STRING\" size=\"12\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"12\"/><Column id=\"HOUSE_POSESN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"LAD_POSESN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"BILD_POSESN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"CAR_POSESN_AT\" type=\"STRING\" size=\"1\"/><Column id=\"BEFORE_ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"SCRT_INFO_EXAMIN_ID\" type=\"STRING\" size=\"30\"/><Column id=\"CDIT_PRESV_MTHD\" type=\"STRING\" size=\"3\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"11\"/><Column id=\"AREA_SE\" type=\"STRING\" size=\"3\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"HO\" type=\"STRING\" size=\"4\"/><Column id=\"NM\" type=\"STRING\" size=\"30\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"13\"/><Column id=\"FRST_CNTRCT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"8\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"8\"/><Column id=\"DCSN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"HOUSE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOUSE_KND\" type=\"STRING\" size=\"3\"/><Column id=\"ZIP_HOUSE\" type=\"STRING\" size=\"6\"/><Column id=\"ADRES_HOUSE\" type=\"STRING\" size=\"200\"/><Column id=\"ADRES_DETAIL_HOUSE\" type=\"STRING\" size=\"200\"/><Column id=\"HEAT_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FLOOR_SE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ALL_ROOM_CO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RENT_ROOM_CO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SPORT_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LFSTS_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SPORT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RENT_ALOTM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ADIT_ALOTM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RNTCHRG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RSVMNEY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RETURN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RETURN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ROW_NUM\" type=\"STRING\" size=\"5\"/><Column id=\"LFSTS_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_CO\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"SPORT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM\" type=\"STRING\" size=\"256\"/><Column id=\"RESCI_TRMNAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLCNT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_house",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DATA\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">1</Col><Col id=\"LABEL\">Y</Col></Row><Row><Col id=\"DATA\">0</Col><Col id=\"LABEL\">N</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("95");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("96");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_estate_code1","absolute","0","43","97.36%","650",null,null,this);_a.set_taborder("146");_a.set_binddataset("ds_lfsts_cntrct");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"93\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"250\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"font:9 돋움;\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" style=\"font:9 돋움;\" text=\"지역&#13;&#10;구분\"/><Cell col=\"2\" rowspan=\"2\" style=\"font:9 돋움;\" text=\"동\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:9 돋움;\" text=\"호\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:9 돋움;\" text=\"계약자\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:9 돋움;\" text=\"주민번호\"/><Cell col=\"6\" colspan=\"3\" style=\"font:9 돋움;\" text=\"계약기간\"/><Cell col=\"9\" colspan=\"4\" style=\"font:9 돋움;\" text=\"전세금액\"/><Cell col=\"13\" colspan=\"2\" style=\"font:9 돋움;\" text=\"주택가격\"/><Cell col=\"15\" colspan=\"4\" style=\"font:9 돋움;\" text=\"소유물건\"/><Cell col=\"19\" rowspan=\"2\" style=\"font:9 돋움;\" text=\"주소\"/><Cell row=\"1\" col=\"6\" style=\"font:9 돋움;\" text=\"계약일자\"/><Cell row=\"1\" col=\"7\" style=\"font:9 돋움;\" text=\"계약기간&#13;&#10;(From)\"/><Cell row=\"1\" col=\"8\" style=\"font:9 돋움;\" text=\"계약기간&#13;&#10;(To)\"/><Cell row=\"1\" col=\"9\" style=\"font:9 돋움;\" text=\"전세금액\"/><Cell row=\"1\" col=\"10\" style=\"font:9 돋움;\" text=\"지원금액\"/><Cell row=\"1\" col=\"11\" style=\"font:9 돋움;\" text=\"임대부담금\"/><Cell row=\"1\" col=\"12\" style=\"font:9 돋움;\" text=\"추가부담금\"/><Cell row=\"1\" col=\"13\" style=\"font:9 돋움;\" text=\"임대료\"/><Cell row=\"1\" col=\"14\" style=\"font:9 돋움;\" text=\"대손충당금\"/><Cell row=\"1\" col=\"15\" style=\"font:9 돋움;\" text=\"주택\"/><Cell row=\"1\" col=\"16\" style=\"font:9 돋움;\" text=\"토지\"/><Cell row=\"1\" col=\"17\" style=\"font:9 돋움;\" text=\"차량\"/><Cell row=\"1\" col=\"18\" style=\"font:9 돋움;\" text=\"건축물\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:AREA_SE\" combodataset=\"ds_area\" combocodecol=\"VAL1\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:IHIDNUM\" mask=\"######-#{######}\"/><Cell col=\"6\" text=\"bind:CNTRCT_DE\"/><Cell col=\"7\" text=\"bind:SPORT_BGNDE\"/><Cell col=\"8\" text=\"bind:SPORT_ENDDE\"/><Cell col=\"9\" text=\"bind:LFSTS_AMOUNT\"/><Cell col=\"10\" text=\"bind:SPORT_AMOUNT\"/><Cell col=\"11\" text=\"bind:RENT_ALOTM\"/><Cell col=\"12\" text=\"bind:ADIT_ALOTM\"/><Cell col=\"13\" text=\"bind:RENT_ALOTM\"/><Cell col=\"14\" text=\"bind:RSVMNEY\"/><Cell col=\"15\" displaytype=\"checkbox\" text=\"bind:HOUSE_POSESN_AT\"/><Cell col=\"16\" displaytype=\"checkbox\" text=\"bind:LAD_POSESN_AT\"/><Cell col=\"17\" displaytype=\"checkbox\" text=\"bind:CAR_POSESN_AT\"/><Cell col=\"18\" displaytype=\"checkbox\" text=\"bind:BILD_POSESN_AT\"/><Cell col=\"19\" text=\"bind:ADRES\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0","97.36%","33",null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","6","5","64","21",null,null,this.div_search);_a.set_taborder("24");_a.set_text("지역구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","70","5","91","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("@ds_area");_a.set_codecolumn("VAL1");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static02","absolute","167","5","75","21",null,null,this.div_search);_a.set_taborder("32");_a.set_text("임대종료월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","244","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static17","absolute","348","5","17","21",null,null,this.div_search);_a.set_taborder("34");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar01","absolute","364","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static08","absolute","0","33","1031","10",null,null,this);_a.set_taborder("151");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT030502");_b.set_titletext("재계약자현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT030502.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT030502.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT030502.xfdl",function(){this.RNT030502_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT030502_onload=function(_a,_b){this.fn_loadCombo();var _c=new String(this.dateUtils.today());this.div_search.Calendar00.set_value(_c.substring(0,4)+"1");this.div_search.Calendar01.set_value(this.dateUtils.today());Ex.core.init(_a);};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){var _a=[["ds_area","RNT004","1","전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.ds_cond00.clearData();var _a=this.ds_cond00.addRow();this.ds_cond00.setColumn(_a,"AREA_SE",this.div_search.Combo00.value);this.ds_cond00.setColumn(_a,"ENDDE1",this.div_search.Calendar00.value);this.ds_cond00.setColumn(_a,"ENDDE2",this.div_search.Calendar01.value);this.fn_transaction("selectSlaryList");};this.fn_transaction=function(_a){switch(_a){case "selectSlaryList":var _b="hsco/pms/rnt/rnt030502/getList.do";var _c="input1=ds_cond00";var _d="ds_lfsts_cntrct=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b==0){return;}this.gfn_callback_message(_a,_b,_c);if(_a=="saveSlaryList"){this.gfn_callback_message(_a,_b,_c);}};});this.on_initEvent=function(){this.ds_lfsts_cntrct.addEventHandler("onrowposchanged",this.ds_lfsts_cntrct_onrowposchanged,this);this.ds_lfsts_cntrct.addEventHandler("oncolumnchanged",this.ds_lfsts_cntrct_oncolumnchanged,this);this.ds_lfsts_cntrct.addEventHandler("canrowposchange",this.ds_lfsts_cntrct_canrowposchange,this);this.ds_house.addEventHandler("onrowposchanged",this.DS_TBRNT_APPLCNT_onrowposchanged,this);this.addEventHandler("oninit",this.RNT030502_oninit,this);this.addEventHandler("onload",this.RNT030502_onload,this);};this.loadIncludeScript("RNT030502.xfdl");};})();