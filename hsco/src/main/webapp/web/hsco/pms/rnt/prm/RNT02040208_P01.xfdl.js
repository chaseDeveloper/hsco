﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040208_P01");this.set_classname("RNT02040208_P01");this.set_titletext("특별관리대상 등록");this._setFormPosition(0,0,823,705);}_a=new Dataset("ds_ho",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dong",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCode</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">주택코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_arrearageNm",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_INT\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_arrearageNmDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_INT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81","795","59",null,null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","79","5","199","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("173");_a.set_innerdataset("@ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a=new Static("Static04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("174");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","293","5","51","21",null,null,this.div_search);_a.set_taborder("175");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","356","5","77","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("176");_a.set_innerdataset("@ds_dong");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Combo("cmb_ho","absolute","457","5","77","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("177");_a.set_innerdataset("@ds_ho");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Static("Static06","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("180");_a.set_text("체납개월");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_stOvdintrCnt","absolute","79","31","67","21",null,null,this.div_search);_a.set_taborder("181");_a.set_value("1");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","443","5","12","21",null,null,this.div_search);_a.set_taborder("182");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_edOvdintrCnt","absolute","170","31","67","21",null,null,this.div_search);_a.set_taborder("183");_a.set_value("9999");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","154","31","8","21",null,null,this.div_search);_a.set_taborder("184");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static09","absolute","292","31","64","21",null,null,this.div_search);_a.set_taborder("185");_a.set_text("체납금액");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static11","absolute","441","31","8","21",null,null,this.div_search);_a.set_taborder("186");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_stOvdintr","absolute","356","31","77","21",null,null,this.div_search);_a.set_taborder("187");_a.set_value("1");_a.set_mask("9,999");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_edOvdintr","absolute","457","31","77","21",null,null,this.div_search);_a.set_taborder("188");_a.set_value("999999999");_a.set_mask("9,999");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","356","5","77","21",null,null,this.div_search);_a.set_taborder("189");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","457","5","77","21",null,null,this.div_search);_a.set_taborder("190");this.div_search.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","140",null,"565","13",null,this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("9");_a.set_text("연체자 목록");_a.set_cssclass("sta_WF_Title01");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_arrearageNmList","absolute","0","36","445","514",null,null,this.div_WORK);_a.set_taborder("11");_a.set_binddataset("ds_arrearageNm");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"63\"/><Column size=\"59\"/><Column size=\"69\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"주민번호\"/></Band><Band id=\"body\"><Cell text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:NM\"/><Cell col=\"4\" text=\"bind:IHIDNUM\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_arrearageNmDetailList","absolute","455","36",null,null,"1","1",this.div_WORK);_a.set_taborder("12");_a.set_binddataset("ds_arrearageNmDetail");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"94\"/><Column size=\"82\"/><Column size=\"87\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"납입기한\"/><Cell col=\"2\" text=\"체납금액\"/><Cell col=\"3\" text=\"연체이자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"expr:PAY_TMLMT== null  ? &quot;nomal&quot;  : 'date'\" text=\"bind:PAY_TMLMT\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:DEL_AMT\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:DEL_INT\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"expr:dataset.getSum('parseInt(DEL_AMT)||0')\"/><Cell col=\"3\" text=\"expr:dataset.getSum('parseInt(DEL_INT)||0')\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static42","absolute","445","36","10",null,null,"-2",this.div_WORK);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","550",null,"15","0",null,this.div_WORK);_a.set_taborder("14");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_reg","absolute","680","10","114","21",null,null,this.div_WORK);_a.set_taborder("15");_a.set_text("특별관리 대상 등록");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("2");_a.set_text("특별관리 대상 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("3");_a.set_text("특별관리 대상 등록");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","810","8","15",null,null,"-8",this);_a.set_taborder("4");_a.set_text("특별관리 대상 등록");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","156","21",null,null,this);_a.set_taborder("6");_a.set_text("특별관리 대상 등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute","760","51","49","25",null,null,this);_a.set_taborder("8");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","787","9","20","20",null,null,this);_a.set_taborder("9");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Layout("default","",795,59,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,565,this.div_WORK,function(_b){_b.set_taborder("1");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",823,705,this,function(_b){_b.set_classname("RNT02040208_P01");_b.set_titletext("특별관리대상 등록");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02040208_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040208_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02040208_P01.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02040208_P01.xfdl",function(){this.RNT02040208_P01_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02040208_P01_onload=function(_a,_b){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체","");};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.div_search_cmb_houseCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_houseCode.value;this.fn_get_Dong(this.div_search.cmb_dong,"전체",{houseCode:_c});this.ds_ho.clearData();this.fn_add_comboHeader(this,this.div_search.cmb_ho,"전체");};this.div_search_cmb_dong_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_houseCode.value;var _d=this.div_search.cmb_dong.value;this.fn_get_Ho(this.div_search.cmb_ho,"전체",{houseCode:_c,dong:_d});};this.btn_search_onclick=function(_a,_b){this.ds_arrearageNm.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectArrearageNmList");};this.div_WORK_grd_arrearageNmList_onselectchanged=function(_a,_b){this.ds_arrearageNmDetail.clearData();this.ds_cond01.clearData();this.ds_cond01.addRow();this.ds_cond01.setColumn(0,"cntrctrNo",this.ds_arrearageNm.getSelectColumn("CNTRCTR_NO"));this.fn_transaction("selectArrearageNmDetailList");};this.div_WORK_btn_reg_onclick=function(_a,_b){if(this.ds_arrearageNm.rowcount==0){this.alert("선택된 연체자가 없습니다.");}else{if(application.confirm(this.ds_arrearageNm.getSelectColumn("NM")+"님을 특별관리대상자로 등록하시겠습니까?")){this.fn_transaction("saveArrearageNmC");}}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectArrearageNmList":var _c="/hsco/pms/rnt/prm/RNT02040208/selectArrearageNmList.do";var _d="input1=ds_cond00";var _e="ds_arrearageNm=output1";break;case "selectArrearageNmDetailList":var _c="/hsco/pms/rnt/prm/RNT02040208/selectArrearageNmDetailList.do";var _d="input1=ds_cond01";var _e="ds_arrearageNmDetail=output1";break;case "saveArrearageNmC":var _c="/hsco/pms/rnt/prm/RNT02040208/saveArrearageNmC.do";var _d="input1=ds_cond01";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "saveArrearageNmC":this.alert("특별관리대상자로 등록되었습니다.");break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.btn_close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040208_P01_oninit,this);this.addEventHandler("onload",this.RNT02040208_P01_onload,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.div_search_cmb_houseCode_onitemchanged,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.div_search_cmb_dong_onitemchanged,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.grd_arrearageNmList.addEventHandler("onselectchanged",this.div_WORK_grd_arrearageNmList_onselectchanged,this);this.div_WORK.btn_reg.addEventHandler("onclick",this.div_WORK_btn_reg_onclick,this);this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT02040208_P01.xfdl");};})();