﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02051300");this.set_classname("RNT02051300");this.set_titletext("동호변경현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ED_CHANGE_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongHoChanged",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("RENT_HOUSE_CODE_AFTCH");_a._setContents("<ColumnInfo><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHGHY\" type=\"STRING\" size=\"256\"/><Column id=\"GTN_DFNNT\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"HO_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"GTN_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE_AFTCH\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_AFTCH\" type=\"STRING\" size=\"256\"/><Column id=\"HO_AFTCH\" type=\"STRING\" size=\"256\"/><Column id=\"GTN_AFTCH\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG_AFTCH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("dtl_guide00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe00","absolute","15","5","88","21",null,null,this.div_search);_a.set_taborder("61");_a.set_text("주택코드/명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","103","5","195","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_displayrowcount("15");_a.set_autoselect("true");_a=new Static("sta_changeDe","absolute","318","5","64","21",null,null,this.div_search);_a.set_taborder("63");_a.set_text("변경일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stChangeDe","absolute","382","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Calendar("cal_edChangeDe","absolute","518","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_autoselect("true");_a=new Static("Static00","absolute","497","5","16","20",null,null,this.div_search);_a.set_taborder("66");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","42",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_dongHoChangedList","absolute","0","27",null,null,"0","0",this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_dongHoChanged");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"계약정보\"/><Cell col=\"2\" colspan=\"3\" text=\"변경정보\"/><Cell col=\"5\" colspan=\"5\" text=\"변경전\"/><Cell col=\"10\" colspan=\"5\" text=\"변경후\"/><Cell row=\"1\" text=\"계약자\"/><Cell row=\"1\" col=\"1\" text=\"주민번호\"/><Cell row=\"1\" col=\"2\" text=\"변경일자\"/><Cell row=\"1\" col=\"3\" text=\"변경사유\"/><Cell row=\"1\" col=\"4\" text=\"차액보조금\"/><Cell row=\"1\" col=\"5\" text=\"주택명\"/><Cell row=\"1\" col=\"6\" text=\"동\"/><Cell row=\"1\" col=\"7\" text=\"호\"/><Cell row=\"1\" col=\"8\" text=\"보증금\"/><Cell row=\"1\" col=\"9\" text=\"임대료\"/><Cell row=\"1\" col=\"10\" text=\"주택명\"/><Cell row=\"1\" col=\"11\" text=\"동\"/><Cell row=\"1\" col=\"12\" text=\"호\"/><Cell row=\"1\" col=\"13\" text=\"보증금\"/><Cell row=\"1\" col=\"14\" text=\"임대료\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(dataset.getRowLevel(rowidx)==1? 'red ' :  'black');color2:EXPR(dataset.getRowLevel(rowidx)==1? 'red ' :  'black');selectcolor:EXPR(dataset.getRowLevel(rowidx)==1? 'red ' :  'black');\" text=\"expr:dataset.getRowLevel(rowidx)==1? '소계 : ' :  NM\"/><Cell col=\"1\" style=\"color:EXPR(dataset.getRowLevel(rowidx)==1? 'red ' :  'black');color2:EXPR(dataset.getRowLevel(rowidx)==1? 'red ' :  'black');selectcolor:EXPR(dataset.getRowLevel(rowidx)==1? 'red ' :  'black');\" text=\"expr:dataset.getRowLevel(rowidx)==1?   dataset.getGroupRangeCount(currow) :  IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#{######}'\"/><Cell col=\"2\" displaytype=\"expr:CHANGE_DE == null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:CHANGE_DE\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CHGHY\" tooltiptext=\"bind:CHGHY\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN_DFNNT\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:RENT_HOUSE_CODE_BFCHG\"/><Cell col=\"6\" text=\"bind:DONG_BFCHG\"/><Cell col=\"7\" text=\"bind:HO_BFCHG\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN_BFCHG\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG_BFCHG\"/><Cell col=\"10\" style=\"align:left;\" text=\"expr:(dataset.getRowLevel(rowidx)==1? '' :  RENT_HOUSE_CODE_AFTCH)\"/><Cell col=\"11\" text=\"bind:DONG_AFTCH\"/><Cell col=\"12\" text=\"bind:HO_AFTCH\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GTN_AFTCH\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RNTCHRG_AFTCH\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" displaytype=\"number\" style=\"align:left;\" text=\"EXPR(dataset.getSum(dataset.getRowLevel(rowidx)==1? 0 : 1))\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN_DFNNT)||0')\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN_BFCHG)||0')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RNTCHRG_BFCHG)||0')\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(GTN_AFTCH)||0')\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;padding:0 2 0 0;\" text=\"expr:dataset.getSum('parseInt(RNTCHRG_AFTCH)||0')\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","22",null,"5","0",null,this.div_work);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_title","absolute","0","43","129","21",null,null,this);_a.set_taborder("5");_a.set_text("동호변경현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02051300");_b.set_titletext("동호변경현황");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02051300.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02051300.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02051300.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02051300.xfdl",function(){this.RNT02051300_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02051300_onload=function(_a,_b){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체",{USE_AT:"1"});this.div_search.cal_stChangeDe.set_value('19000101');this.div_search.cal_edChangeDe.set_value(this.gfn_today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.ds_cond00.addRow();var _a=this.div_search.cmb_houseCode.value;var _b=this.div_search.cal_stChangeDe.value;var _c=this.div_search.cal_edChangeDe.value;this.ds_cond00.setColumn(0,"HOUSE_CODE",_a);this.ds_cond00.setColumn(0,"ST_CHANGE_DE",_b);this.ds_cond00.setColumn(0,"ED_CHANGE_DE",_c);this.fn_transaction("selectDongHoChangedList");};this.fn_transaction=function(_a){switch(_a){case "selectDongHoChangedList":var _b="hsco/pms/rnt/prm/RNT02051300/selectDongHoChangedList.do";var _c="input1=ds_cond00";var _d="ds_dongHoChanged=output1";break;default:break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.gfn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){}}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02051300_oninit,this);this.addEventHandler("onload",this.RNT02051300_onload,this);};this.loadIncludeScript("RNT02051300.xfdl");};})();