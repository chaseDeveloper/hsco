﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("frm_CMP040802");this.set_classname("CMP020501");this.set_titletext("수용확인발급대장");this._setFormPosition(0,0,1059,735);}this.style.set_background("#ffffffff");_a=new Dataset("DS_BSNS_AREA_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_ACEPTNC_CNFRMN",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ISSU_SN\" type=\"STRING\" size=\"255\"/><Column id=\"CNFRMN_ISSU_SE\" type=\"STRING\" size=\"255\"/><Column id=\"ISSU_PRPOS_SE\" type=\"STRING\" size=\"255\"/><Column id=\"ISSU_DE\" type=\"STRING\" size=\"255\"/><Column id=\"PYMNTAMT_LAD\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNTAMT_HOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"USGAMT_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"USGAMT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"BLCE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ISSU_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_CNFRMN_ISSU_SE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_ISSU_PRPOS_SE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_ST_ISSU_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">접수시작일자</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_ED_ISSU_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">접수종료일자</Col></Row><Row><Col id=\"compId\">DS_TBCMP_THING_WTNNC</Col><Col id=\"colId\">UNTPC</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">결정단가</Col></Row><Row><Col id=\"compId\">DS_TBCMP_THING_WTNNC</Col><Col id=\"colId\">RWMNY</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">결정금액</Col></Row><Row><Col id=\"compId\">DS_TBCMP_THING_OWNER</Col><Col id=\"colId\">RWMNY</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">금액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_LOCPLC_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_AREA_CODE","absolute","300","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("사업지구");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","524","5","51","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("소재지");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_LNM","absolute","719","5","38","21",null,null,this.div_search);_a.set_taborder("15");_a.set_text("지번");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_LNM","absolute","757","5","36","21",null,null,this.div_search);_a.set_taborder("4");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_SLNO","absolute","795","5","35","21",null,null,this.div_search);_a.set_taborder("5");this.div_search.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","845","5","51","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("소유자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_NM","absolute","896","5","107","21",null,null,this.div_search);_a.set_taborder("6");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ISSU_DE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("20");_a.set_text("접수일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ST_ISSU_DE","absolute","79","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_BSNS_AREA_CODE01","absolute","180","5","12","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("~");_a.set_cssclass("sta_Search");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ED_ISSU_DE","absolute","191","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Combo("cmb_BSNS_AREA_CODE","absolute","364","5","145","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("DS_BSNS_AREA_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a=new Combo("cmb_LOCPLC_CODE","absolute","575","5","129","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("DS_LOCPLC_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Div("div_WORK","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");_a.style.set_background("#ffffffff");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","36",null,null,"0","0",this.div_WORK);_a.set_taborder("4");_a.set_binddataset("DS_TBCMP_ACEPTNC_CNFRMN");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"216\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"230\"/><Column size=\"85\"/><Column size=\"73\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업지구\"/><Cell col=\"2\" text=\"발급순번\"/><Cell col=\"3\" text=\"발급일자\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"신청인\"/><Cell col=\"6\" text=\"발급구분\"/><Cell col=\"7\" text=\"용도\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:BSNS_AREA_NM\" combodataset=\"DS_BSNS_AREA_CODE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DOC_ISSU_NO\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:ISSU_DE\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:ADRES\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:NM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:CNFRMN_ISSU_SE\" combodataset=\"DS_CNFRMN_ISSU_SE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:ISSU_PRPOS_SE\" combodataset=\"DS_ISSU_PRPOS_SE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:RM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0",null,"10","0",null,this.div_WORK);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10",null,"21","866",null,this.div_WORK);_a.set_taborder("6");_a.set_text("기본조서현황");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("11");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("1");_b.set_text("Div00");_b.style.set_background("#ffffffff");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CMP020501");_b.set_titletext("수용확인발급대장");_b.style.set_background("#ffffffff");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CMP040802.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP040802.xfdl",function(){this.frm_CMP040802_onload=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.fn_load_combo();};this.fn_init_form=function(){var _a=this.gfn_today();this.div_search.cal_ST_ISSU_DE.set_value(this.fn_first_yyyymmdd(_a));this.div_search.cal_ED_ISSU_DE.set_value(_a);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_BSNS_AREA_CODE,"선택");this.fn_add_comboHeader(this,this.div_search.cmb_LOCPLC_CODE,"전체");this.fn_get_userBsnsArea(this.DS_BSNS_AREA_CODE,"선택");this.fn_get_cmmCode(this.DS_CNFRMN_ISSU_SE,"",{grpCode:"CMP004"});this.fn_get_cmmCode(this.DS_ISSU_PRPOS_SE,"",{grpCode:"CMP005"});};this.div_search_cmb_BSNS_AREA_CODE_onitemchanged=function(_a,_b){this.fn_get_locplcCode(this.DS_LOCPLC_CODE,"전체",{bsnsAreaCode:this.div_search.cmb_BSNS_AREA_CODE.value});};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_clearAll_ds();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("aceptncCnfrmnList");};this.fn_cancel=function(){};this.fn_close=function(){this.close();};this.div_search_cal_ST_ISSU_DE_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_ED_ISSU_DE.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_ED_ISSU_DE.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_ED_ISSU_DE_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_ST_ISSU_DE.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_ST_ISSU_DE.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.fn_clearAll_ds=function(){this.DS_TBCMP_ACEPTNC_CNFRMN.clearData();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "aceptncCnfrmnList":var _c="hsco/pms/cmp/tdd/CMP040802/aceptncCnfrmnList.do";var _d="input1=ds_cond00";var _e="DS_TBCMP_ACEPTNC_CNFRMN=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;};});this.on_initEvent=function(){this.DS_TBCMP_ACEPTNC_CNFRMN.addEventHandler("cancolumnchange",this.DS_TBCMP_ACEPTNC_CNFRMN_cancolumnchange,this);this.DS_TBCMP_ACEPTNC_CNFRMN.addEventHandler("oncolumnchanged",this.DS_TBCMP_ACEPTNC_CNFRMN_oncolumnchanged,this);this.addEventHandler("onload",this.frm_CMP040802_onload,this);this.div_search.cal_ST_ISSU_DE.addEventHandler("canchange",this.div_search_cal_ST_ISSU_DE_canchange,this);this.div_search.cal_ED_ISSU_DE.addEventHandler("canchange",this.div_search_cal_ED_ISSU_DE_canchange,this);this.div_search.cmb_BSNS_AREA_CODE.addEventHandler("onitemchanged",this.div_search_cmb_BSNS_AREA_CODE_onitemchanged,this);this.div_search.cmb_LOCPLC_CODE.addEventHandler("onitemchanged",this.div_search_cmb_LOCPLC_CODE_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("CMP040802.xfdl");};})();