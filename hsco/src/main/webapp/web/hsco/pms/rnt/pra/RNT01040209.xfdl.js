﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01040209");this.set_classname("RNT01040209");this.set_titletext("특별관리대상 등록");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"dfnntPymntDe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_speclManageTrgterList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NPYM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OVDINTR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_speclManageTrgterDetailList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"NPYM_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NPYM_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OVDINTR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PROCESS_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","295","5","199","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a=new Static("Static04","absolute","231","5","64","21",null,null,this.div_search);_a.set_taborder("151");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","509","5","51","21",null,null,this.div_search);_a.set_taborder("152");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","560","5","85","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_dongList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Combo("cmb_ho","absolute","658","5","85","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_hoList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_visible("false");_a=new Static("Static03","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("157");_a.set_text("주택구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","79","5","137","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_houseSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Static("Static07","absolute","647","5","12","21",null,null,this.div_search);_a.set_taborder("166");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","560","5","85","21",null,null,this.div_search);_a.set_taborder("167");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","658","5","85","21",null,null,this.div_search);_a.set_taborder("168");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","33",null,null,"28","0",this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("1");_a.set_text("특별대상 목록");_a.set_cssclass("sta_WF_Title01");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_speclManageTrgterList","absolute","0","36","666",null,null,"0",this.div_WORK);_a.set_taborder("3");_a.set_binddataset("ds_speclManageTrgterList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"63\"/><Column size=\"59\"/><Column size=\"69\"/><Column size=\"99\"/><Column size=\"76\"/><Column size=\"88\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"해약일자\"/><Cell col=\"6\" text=\"체납금액\"/><Cell col=\"7\" text=\"연체이자\"/></Band><Band id=\"body\"><Cell text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:NM\"/><Cell col=\"4\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#######'\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:CANCL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:NPYM_AMOUNT\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:OVDINTR\"/></Band><Band id=\"summary\"><Cell expr=\"expr:dataset.rowcount\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('NPYM_AMOUNT')\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('OVDINTR')\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_speclManageTrgterDetailList","absolute","676","36","355",null,null,"0",this.div_WORK);_a.set_taborder("4");_a.set_autofittype("col");_a.set_binddataset("ds_speclManageTrgterDetailList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"82\"/><Column size=\"87\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"납입기한\"/><Cell col=\"1\" text=\"체납금액\"/><Cell col=\"2\" text=\"연체이자\"/><Cell col=\"3\" text=\"수납일자\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:NPYM_AMOUNT\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:OVDINTR\"/><Cell col=\"3\"/></Band><Band id=\"summary\"><Cell expr=\"expr:dataset.rowcount\"/><Cell col=\"1\" displaytype=\"number\" expr=\"expr:dataset.getSum('NPYM_AMOUNT')\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('OVDINTR')\"/><Cell col=\"3\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static42","absolute","666","36","10",null,null,"-2",this.div_WORK);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_reg","absolute","917","10","114","21",null,null,this.div_WORK);_a.set_taborder("6");_a.set_text("특별관리 대상 등록");this.div_WORK.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT01040209");_b.set_titletext("특별관리대상 등록");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT01040209.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01040209.xfdl",function(){this.RNT01040209_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01040209_onload=function(_a,_b){this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_dong,"전체");this.fn_add_comboHeader(this,this.div_search.cmb_ho,"전체");this.fn_get_houseSe(this.ds_houseSeList,"전체");this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체");};this.div_search_cmb_houseSe_onitemchanged=function(_a,_b){this.fn_get_rentHouseCode(this.div_search.cmb_rentHouseCode,"전체",{HOUSE_SE:_b.postvalue});};this.div_search_cmb_rentHouseCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;this.fn_get_rentDong(this.div_search.cmb_dong,"전체",{rentHouseCode:_c});this.ds_hoList.clearData();this.fn_add_comboHeader(this,this.div_search.cmb_ho,"전체");};this.div_search_cmb_dong_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_rentHouseCode.value;var _d=this.div_search.cmb_dong.value;this.fn_get_rentHo(this.div_search.cmb_ho,"전체",{rentHouseCode:_c,dong:_d});};this.fn_search=function(){this.ds_speclManageTrgterList.clearData();this.ds_speclManageTrgterDetailList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("speclManageTrgterList");};this.fn_insert=function(){this.div_WORK_btn_reg_onclick();};this.fn_save=function(){if(this.confirm("s")==true){this.fn_transaction("ovdManDetailD");}};this.fn_delete=function(){if(this.confirm("d")==true){this.ds_speclManageTrgterList.deleteRow(this.ds_speclManageTrgterList.rowposition);}};this.fn_cancel=function(){if(this.confirm("c")==true){this.ds_speclManageTrgterList.cancel();}};this.div_WORK_grd_speclManageTrgterList_onselectchanged=function(_a,_b){this.ds_speclManageTrgterDetailList.clearData();this.ds_cond01.setColumn(0,"cntrctrNo",this.ds_speclManageTrgterList.getSelectColumn("CNTRCTR_NO"));this.fn_transaction("speclManageTrgterDetailList");};this.div_WORK_btn_reg_onclick=function(_a,_b){this.gfn_popup("RNT01040209_P01",825,705,"특별관리대상 등록",null,"pms_rnt_pra::RNT01040209_P01.xfdl");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "speclManageTrgterList":var _c="/hsco/pms/rnt/pra/RNT01040209/speclManageTrgterList.do";var _d="input1=ds_cond00";var _e="ds_speclManageTrgterList=output1";break;case "speclManageTrgterDetailList":var _c="/hsco/pms/rnt/pra/RNT01040209/speclManageTrgterDetailList.do";var _d="input1=ds_cond01";var _e="ds_speclManageTrgterDetailList=output1";break;case "ovdManDetailD":var _c="/hsco/pms/rnt/pra/RNT01040209/ovdManDetailD.do";var _d="input1=ds_speclManageTrgterList:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01040209_oninit,this);this.addEventHandler("onload",this.RNT01040209_onload,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.div_search_cmb_dong_onitemchanged,this);this.div_search.cmb_houseSe.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.grd_speclManageTrgterList.addEventHandler("onselectchanged",this.div_WORK_grd_speclManageTrgterList_onselectchanged,this);this.div_WORK.btn_reg.addEventHandler("onclick",this.div_WORK_btn_reg_onclick,this);};this.loadIncludeScript("RNT01040209.xfdl");};})();