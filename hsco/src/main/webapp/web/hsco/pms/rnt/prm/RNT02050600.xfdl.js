﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02050600");this.set_classname("RNT02050600");this.set_titletext("특별관리대상");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stdDe\" type=\"STRING\" size=\"256\"/><Column id=\"npymMonth\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_qualfSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_yn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">무</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">유</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_speclManage",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_POSESN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"GUAR_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GUAR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MAMT\" type=\"STRING\" size=\"256\"/><Column id=\"MCNT\" type=\"STRING\" size=\"256\"/><Column id=\"S_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe00","absolute","15","5","88","21",null,null,this.div_search);_a.set_taborder("57");_a.set_text("주택코드/명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","100","5","217","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_displayrowcount("15");_a.set_autoselect("true");_a=new Spin("cmb_npymMonth","absolute","603","5","71","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("1");_a.set_max("1000");_a.style.set_align("center middle");_a.set_min("1");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","527","5","76","21",null,null,this.div_search);_a.set_taborder("59");_a.set_text("체납개월수");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Div("div_stdDe","absolute","418","5","84","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("Div00");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","339","5","81","21",null,null,this.div_search);_a.set_taborder("61");_a.set_text("임대종료월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("dtl_guide00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_speclManageList","absolute","0","25",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_speclManage");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"자격구분\"/><Cell col=\"5\" text=\"연락처1\"/><Cell col=\"6\" text=\"연락처2\"/><Cell col=\"7\" text=\"계약일자\"/><Cell col=\"8\" text=\"임대종료일\"/><Cell col=\"9\" text=\"체납개월\"/><Cell col=\"10\" text=\"체납금액\"/><Cell col=\"11\" text=\"주택소유\"/><Cell col=\"12\" text=\"압류정보\"/><Cell col=\"13\" text=\"소송여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:NM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:QUALF_SE\" combodataset=\"ds_qualfSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:TELNO\"/><Cell col=\"6\" text=\"bind:MBTLNO\"/><Cell col=\"7\" displaytype=\"expr:CNTRCT_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CNTRCT_DE\"/><Cell col=\"8\" displaytype=\"expr:RENT_ENDDE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:RENT_ENDDE\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:MCNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MAMT\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:HOUSE_POSESN_AT\" combodataset=\"ds_yn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:GUAR_CHK\"/><Cell col=\"13\" text=\"bind:S_CHK\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(MCNT)||0')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(MAMT)||0')\"/><Cell col=\"11\" colspan=\"3\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","20",null,"5","0",null,this.div_work);_a.set_taborder("1");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","0",null,"21","85.55%",null,this.div_work);_a.set_taborder("2");_a.set_text("특별관리대상");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02050600");_b.set_titletext("특별관리대상");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT02050600.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02050600.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02050600.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02050600.xfdl",function(){this.RNT02050600_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02050600_onload=function(_a,_b){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체","");this.fn_get_cmmCode(this.ds_qualfSe,"선택/''",{grpCode:"RNT001"});this.div_search.div_stdDe.setValue(this.gfn_today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectSpeclManage");};this.fn_transaction=function(_a){switch(_a){case "selectSpeclManage":var _b="hsco/pms/rnt/prm/RNT02050600/selectSpeclManageList.do";var _c="input1=ds_cond00";var _d="ds_speclManage=output1";break;default:break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02050600_oninit,this);this.addEventHandler("onload",this.RNT02050600_onload,this);this.div_work.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("RNT02050600.xfdl");this.loadPreloadList();};})();