﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01051501");this.set_classname("RNT01051501");this.set_titletext("문자안내관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_infoType",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseSmsList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"GUIDANCE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sms",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VAL0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseSmsSendList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"GUIDANCE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseSe</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택구분</Col></Row><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_rentHouseCode</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\"/><Col id=\"lengthChkGb\"/><Col id=\"msgId\">주택코드</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","295","5","190","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static04","absolute","231","5","64","21",null,null,this.div_search);_a.set_taborder("106");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","500","5","51","21",null,null,this.div_search);_a.set_taborder("107");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","551","5","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_dongList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Combo("cmb_ho","absolute","643","5","84","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_hoList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Static("Static03","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("112");_a.set_text("주택구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","79","5","137","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_houseSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static01","absolute","636","5","10","21",null,null,this.div_search);_a.set_taborder("115");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","742","5","64","21",null,null,this.div_search);_a.set_taborder("117");_a.set_text("안내유형");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_infoType","absolute","806","5","150","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_innerdataset("@ds_infoType");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Edit("edt_deptCode","absolute","959","5","67","21",null,null,this.div_search);_a.set_taborder("118");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","643","5","85","21",null,null,this.div_search);_a.set_taborder("119");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","551","5","84","21",null,null,this.div_search);_a.set_taborder("120");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("1");_a.set_text("안내유형");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_sms","absolute","0","36","266",null,null,"0",this.div_WORK);_a.set_taborder("3");_a.set_binddataset("ds_sms");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"안내유형\"/><Cell col=\"2\" text=\"내용\" tooltiptext=\"bind:CODE_NM\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CODE_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:VAL0\" tooltiptext=\"bind:VAL0\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static42","absolute","266","34","10",null,null,"0",this.div_WORK);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_rentHouseSmsList","absolute","276","36",null,null,"0","0",this.div_WORK);_a.set_taborder("5");_a.set_binddataset("ds_rentHouseSmsList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"주택코드\"/><Cell col=\"3\" text=\"주택명\"/><Cell col=\"4\" text=\"동\"/><Cell col=\"5\" text=\"호\"/><Cell col=\"6\" text=\"계약자\"/><Cell col=\"7\" text=\"휴대전화번호\"/><Cell col=\"8\" text=\"안내유형\"/><Cell col=\"9\" text=\"발송일시\"/><Cell col=\"10\" text=\"발송내역\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:MBTLNO == null ? 'none' : 'checkbox'\" edittype=\"expr:MBTLNO == null ? 'none' : 'checkbox'\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:HOUSE_CODE\" suppress=\"0\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:HOUSE_NM\" suppress=\"0\"/><Cell col=\"4\" text=\"bind:DONG\" suppress=\"0\"/><Cell col=\"5\" text=\"bind:HO\" suppress=\"0\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:NM\"/><Cell col=\"7\" text=\"bind:MBTLNO\" mask=\"expr:MBTLNO == null  ? &quot;&quot;  : '###-####-####'\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:GUIDANCE_TY\" combodataset=\"ds_sms\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" text=\"bind:SNDNG_DT\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:SNDNG_DTLS\" tooltiptext=\"bind:SNDNG_DTLS\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_Popup2","absolute",null,"10","66","21","3",null,this.div_WORK);_a.set_taborder("6");_a.set_text("문자발송");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","276","10","159","21",null,null,this.div_WORK);_a.set_taborder("8");_a.set_text("문자메시지 발신목록");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01051501");_b.set_titletext("문자안내관리");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT01051501.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01051501.xfdl",function(){this.RNT01051501_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01051501_onload=function(_a,_b){this.fn_load_combo();};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_dong,"전체");this.fn_add_comboHeader(this,this.div_search.cmb_ho,"전체");this.fn_get_houseSe(this.ds_houseSeList,"선택");this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"선택");var _a=[["ds_infoType","HOU0B9","1","전체"],["ds_sms","HOU0B9","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);this.div_search.edt_deptCode.set_value(this.gfn_getDeptId());};this.fn_callbackAfter=function(){this.div_search.cmb_infoType.set_index(0);};this.div_search_cmb_houseSe_onitemchanged=function(_a,_b){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"선택",{HOUSE_SE:_b.postvalue});};this.div_search_cmb_rentHouseCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;this.fn_get_rentDong(this.div_search.cmb_dong,"전체",{rentHouseCode:_c});this.ds_hoList.clearData();this.fn_add_comboHeader(this,this.div_search.cmb_ho,"전체");};this.div_search_cmb_dong_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;var _d=this.div_search.cmb_dong.value;this.fn_get_rentHo(this.div_search.cmb_ho,"전체",{rentHouseCode:_c,dong:_d});};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectRentHouseSmsList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectRentHouseSmsList":var _c="/hsco/pms/rnt/pra/RNT01051501/selectRentHouseSmsList.do";var _d="input1=ds_cond00";var _e="ds_rentHouseSmsList=output1";break;case "rentHouseSmsCUD":var _c="/hsco/pms/rnt/pra/RNT01051501/saveRentHouseSmsList.do";var _d="input1=ds_rentHouseSmsList:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "selectRentHouseSmsList":if(this.ds_rentHouseSmsList.getRowCount()>0){}else{this.alert("조회된 데이터가 없습니다.");}break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.btn_Popup2_onclick=function(_a,_b){var _c=0;var _d=this.ds_sms.getColumn(this.ds_sms.rowposition,"CODE");this.ds_rentHouseSmsSendList.clearData();for(i=0;i<this.ds_rentHouseSmsList.rowcount;i++ ){var _e=this.ds_rentHouseSmsList.getColumn(i,"CHK");var _f=this.ds_rentHouseSmsList.getColumn(i,"MBTLNO");if(_e==1&&!this.comUtils.isNullEmpty(_f)){var _g=this.ds_rentHouseSmsSendList.addRow();this.ds_rentHouseSmsSendList.copyRow(_g,this.ds_rentHouseSmsList,i);this.ds_rentHouseSmsSendList.setColumn(_g,"GUIDANCE_TY",_d);_c++ ;}else{this.ds_rentHouseSmsList.setColumn(i,"CHK",0);}}var _h=this.ds_sms.getColumn(this.ds_sms.rowposition,"VAL0");this.gfn_popup("COM010700_P01.xfdl",800,500,"SMS발송",{CONTENT:_h,JOB_SE:"PRA",ds:this.ds_rentHouseSmsSendList},"com::COM010700_P01.xfdl","sms_callback");};this.sms_callback=function(){this.fn_search();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01051501_oninit,this);this.addEventHandler("onload",this.RNT01051501_onload,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.div_search_cmb_dong_onitemchanged,this);this.div_search.cmb_houseSe.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_Popup2.addEventHandler("onclick",this.btn_Popup2_onclick,this);};this.loadIncludeScript("RNT01051501.xfdl");};})();