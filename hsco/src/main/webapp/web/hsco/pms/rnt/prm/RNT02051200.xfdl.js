﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02051200");this.set_classname("RNT02051200");this.set_titletext("명의변경현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ED_CHANGE_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_familyRelate",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_nameChanged",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_CSTMR_NO_AFTCH\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_CSTMR_NO_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHGHY\" type=\"STRING\" size=\"256\"/><Column id=\"GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe00","absolute","15","5","88","21",null,null,this.div_search);_a.set_taborder("67");_a.set_text("주택코드/명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","103","5","199","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_displayrowcount("15");_a.set_autoselect("true");_a=new Static("sta_changeDe","absolute","318","5","64","21",null,null,this.div_search);_a.set_taborder("69");_a.set_text("변경일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stChangeDe","absolute","382","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Calendar("cal_edChangeDe","absolute","518","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static00","absolute","497","5","16","20",null,null,this.div_search);_a.set_taborder("72");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("dtl_guide00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","0","43","129","21",null,null,this);_a.set_taborder("5");_a.set_text("명의변경현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","64",null,"5","28",null,this);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","69",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_nameChangedList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_nameChanged");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"변경일자\"/><Cell col=\"1\" text=\"주택명\"/><Cell col=\"2\" text=\"동\"/><Cell col=\"3\" text=\"호\"/><Cell col=\"4\" text=\"계약자\"/><Cell col=\"5\" text=\"전계약자\"/><Cell col=\"6\" text=\"관계\"/><Cell col=\"7\" text=\"변경사유\"/><Cell col=\"8\" text=\"보증금\"/><Cell col=\"9\" text=\"임대료\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CHANGE_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CHANGE_DE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:HO\"/><Cell col=\"4\" text=\"bind:PUCHAS_CSTMR_NO_AFTCH\"/><Cell col=\"5\" text=\"bind:PUCHAS_CSTMR_NO_BFCHG\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:CNTRCTR_RELATE\" combodataset=\"ds_familyRelate\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CHGHY\" tooltiptext=\"bind:CHGHY\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(GTN)||0&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum(&quot;parseInt(RNTCHRG)||0&quot;)\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02051200");_b.set_titletext("명의변경현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02051200.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02051200.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02051200.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02051200.xfdl",function(){this.RNT02051200_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02051200_onload=function(_a,_b){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체",{USE_AT:"1"});this.div_search.cal_stChangeDe.set_value('19000101');this.div_search.cal_edChangeDe.set_value(this.gfn_today());this.fn_get_cmmCode(this.ds_familyRelate,"",{grpCode:"HRM013"});};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectNameChangedList");};this.fn_transaction=function(_a){switch(_a){case "selectNameChangedList":var _b="hsco/pms/rnt/prm/RNT02051200/selectNameChangedList.do";var _c="input1=ds_cond00";var _d="ds_nameChanged=output1";break;default:break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.gfn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02051200_oninit,this);this.addEventHandler("onload",this.RNT02051200_onload,this);};this.loadIncludeScript("RNT02051200.xfdl");};})();