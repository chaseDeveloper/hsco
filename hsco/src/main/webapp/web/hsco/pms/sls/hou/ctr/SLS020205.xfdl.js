﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020205");this.set_classname("SLS020205");this.set_titletext("분양전환");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cmbHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bank",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_housechange",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"2\"/><Column id=\"RENT_LTTOT_CNVRS_DE\" type=\"DATE\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LTTOT_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BASS_LTTOT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHA_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUPLY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KJF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALTRV_LON_DE\" type=\"DATE\" size=\"256\"/><Column id=\"GAE_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JAN_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"DATE\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"DATE\" size=\"256\"/><Column id=\"RENT_BGNDE\" type=\"DATE\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"DATE\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_AEA\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LTTOT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">cmb_houseSeSh</Col><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택구분</Col></Row><Row><Col id=\"colId\">cmb_houseCodeSh</Col><Col id=\"compId\">div_search</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond04",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SR_CHG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PAYEND_DATE_S1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PAYEND_DATE_S9\" type=\"STRING\" size=\"256\"/><Column id=\"IN_APPLY_DATE_S9\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"IN_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"IN_HO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CHK_KJF\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ALTRV_LON_DE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DELNG_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_KJF\" type=\"STRING\" size=\"256\"/><Column id=\"IN_RENT_LTTOT_CNVRS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PAY_TMLMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond05",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("Grid01","absolute","0","42",null,null,"28","13",this);_a.set_taborder("0");_a.set_binddataset("ds_housechange");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"130\"/><Column size=\"47\"/><Column size=\"51\"/><Column size=\"88\"/><Column size=\"84\"/><Column size=\"92\"/><Column size=\"87\"/><Column size=\"89\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"160\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"주택명\" wordwrap=\"char\"/><Cell col=\"2\" style=\"font:Verdana,9,bold;\" text=\"동\" wordwrap=\"char\"/><Cell col=\"3\" style=\"font:Verdana,9,bold;\" text=\"호\" wordwrap=\"char\"/><Cell col=\"4\" style=\"font:Verdana,9,bold;\" text=\"계약자\" wordwrap=\"char\"/><Cell col=\"5\" style=\"font:Verdana,9,bold;\" text=\"납부보증금\" wordwrap=\"char\"/><Cell col=\"6\" style=\"font:Verdana,9,bold;\" text=\"분양금액\" wordwrap=\"char\"/><Cell col=\"7\" text=\"잔금\" wordwrap=\"char\"/><Cell col=\"8\" style=\"font:Verdana,9,bold;\" text=\"국민주택기금\" wordwrap=\"char\"/><Cell col=\"9\" text=\"대환일자\" wordwrap=\"char\"/><Cell col=\"10\" style=\"font:Verdana,9,bold;\" text=\"잔금납기일\" wordwrap=\"char\"/><Cell col=\"11\" style=\"font:Verdana,9,bold;\" text=\"잔금수납일\" wordwrap=\"char\"/><Cell col=\"12\" style=\"font:Verdana,9,bold;\" text=\"분양전환일자\" wordwrap=\"char\"/><Cell col=\"13\" style=\"font:Verdana,9,bold;\" text=\"우편번호\" wordwrap=\"char\"/><Cell col=\"14\" style=\"font:Verdana,9,bold;\" text=\"주소\" wordwrap=\"char\"/><Cell col=\"15\" style=\"font:Verdana,9,bold;\" text=\"상세주소\" wordwrap=\"char\"/><Cell col=\"16\" style=\"font:Verdana,9,bold;\" text=\"전환유무\" wordwrap=\"char\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:HOUSE_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" text=\"bind:CSTMR_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYAMT\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LTTOT_AMOUNT\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:JAN_PAYAMT\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:KJF\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:ALTRV_LON_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:RENT_LTTOT_CNVRS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:ZIP_LNM\"/><Cell col=\"14\" text=\"bind:BASS_ADRES\"/><Cell col=\"15\" text=\"bind:DETAIL_ADRES\"/><Cell col=\"16\" text=\"EXPR((RENT_LTTOT_CNVRS_DE == undefined)?'미전환':'전환')\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYAMT')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('LTTOT_AMOUNT')\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('JAN_PAYAMT')\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('KJF')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","0%","32",null,"10","2.64%",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("7");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_houseCodeSh","absolute","11","5","64","21",null,null,this.div_search);_a.set_taborder("162");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCodeSh","absolute","75","5","195","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("163");_a.set_innerdataset("@ds_cmbHouseCodeList");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_displaynulltext("선택");_a=new Button("Button11","absolute",null,"5","120","21","208",null,this.div_search);_a.set_taborder("168");_a.set_text("분양금일괄등록");this.div_search.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"5","92","21","111",null,this.div_search);_a.set_taborder("169");_a.set_text("타입일괄적용");this.div_search.addChild(_a.name,_a);_a=new Button("Button01","absolute",null,"5","92","21","12",null,this.div_search);_a.set_taborder("170");_a.set_text("타입일괄복원");this.div_search.addChild(_a.name,_a);_a=new Layout("default","",865,130,this.div_search,function(_b){_b.set_taborder("7");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS020205");_b.set_titletext("분양전환");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SLS020205.xfdl","lib::comInclude.xjs");this.addIncludeScript("SLS020205.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020205.xfdl",function(){this.SLS020205_oninit=function(_a,_b){this.fn_init(this);this.fn_init_form();this.fn_init_dataset();};this.SLS020205_onload=function(_a,_b){this.fn_loadCombo();};this.fn_loadCombo=function(){var _a={};_a["HOUSE_SE"]="S2";_a["USE_AT"]="1";this.pmsUtil.getHouseCode(_a,"ds_cmbHouseCodeList");};this.fn_loadCombo_callback=function(){};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_search=function(){if(this.gfn_checkValidation(this.div_search,this.ds_validation)==false){return;}this.ds_cond01.clearData();var _a=this.ds_cond01.addRow();this.ds_cond01.setColumn(_a,"HOUSE_CODE",this.div_search.cmb_houseCodeSh.value);this.fn_transaction("changeHouseList");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "changeHouseList":var _c="hsco/pms/sls/hou/ctr/SLS020205/changeHouseList.do";var _d="input1=ds_cond01";var _e="ds_housechange=output1";break;case "typeCodeUpdate":var _c="hsco/pms/sls/hou/ctr/SLS020205/typeCodeUpdate.do";var _d="input1=ds_cond02";var _e="";break;case "typeCodeCancel":var _c="hsco/pms/sls/hou/ctr/SLS020205/typeCodeCancel.do";var _d="input1=ds_cond02";var _e="";break;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;this.fn_callback_message(_a,_b,_c);if(_d){var _e=null;switch(_a){case "changeHouseList":break;case "typeCodeUpdate":alert("처리완료");break;case "typeCodeCancel":alert("처리완료");break;}}else{}};this.div_search_Button11_onclick=function(_a,_b){var _c=this.div_search.cmb_houseCodeSh.value;var _d={arg_0:this,houseCode:_c};this.gfn_popup("Pop",800,800,"분양금일괄등록",_d,"pms_sls_hou_ctr::SLS020205_P01.xfdl");};this.div_search00_Button11_onclick=function(_a,_b){this.ds_cond02.clearData();var _c=this.ds_cond02.addRow();this.ds_cond02.setColumn(_c,"HOUSE_CODE",this.div_search.cmb_houseCodeSh.value);this.fn_transaction("typeCodeUpdate");};this.div_search00_Button00_onclick=function(_a,_b){this.ds_cond02.clearData();var _c=this.ds_cond02.addRow();this.ds_cond02.setColumn(_c,"HOUSE_CODE",this.div_search.cmb_houseCodeSh.value);this.fn_transaction("typeCodeCancel");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020205_oninit,this);this.addEventHandler("onload",this.SLS020205_onload,this);this.div_search.cmb_houseCodeSh.addEventHandler("onitemchanged",this.div_search_cmb_houseCodeSh_onitemchanged,this);this.div_search.Button11.addEventHandler("onclick",this.div_search_Button11_onclick,this);this.div_search.Button00.addEventHandler("onclick",this.div_search00_Button11_onclick,this);this.div_search.Button01.addEventHandler("onclick",this.div_search00_Button00_onclick,this);};this.loadIncludeScript("SLS020205.xfdl");};})();