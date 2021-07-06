﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CTR030100_P10");this.set_classname("CTR030100_P10");this.set_titletext("계약물품선택");this._setFormPosition(0,0,850,350);}_a=new Dataset("ds_cond_pop",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntrctThngDetail",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"5\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"11\"/><Column id=\"THNG_SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PRDNM\" type=\"STRING\" size=\"200\"/><Column id=\"STNDRD\" type=\"STRING\" size=\"200\"/><Column id=\"UNIT\" type=\"STRING\" size=\"5\"/><Column id=\"QY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PRSMP_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cmp002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_cntrctThngDetail","absolute","15","109",null,null,"15","15",this);_a.set_taborder("57");_a.set_binddataset("ds_cntrctThngDetail");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"추정액\"/><Cell col=\"7\" text=\"물품상세용도\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:PRDNM\" tooltiptext=\"bind:PRDNM\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:STNDRD\" tooltiptext=\"bind:STNDRD\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:UNIT\" combodataset=\"ds_cmp002\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" tooltiptext=\"bind:UNIT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:QY\" mask=\"#,###,###,###,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:UNTPC\" mask=\"#,###,###,###,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:PRSMP_AM\" mask=\"#,###,###,###,###\"/><Cell col=\"7\" style=\"align:left middle;\" text=\"bind:RM\" tooltiptext=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","16","104",null,"5","16",null,this);_a.set_taborder("60");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("61");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("62");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("65");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_Search","absolute",null,"15","50","25","67",null,this);_a.set_taborder("66");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("67");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","40",null,"5","15",null,this);_a.set_taborder("68");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"59","15",null,this);_a.set_taborder("69");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_BSNS_CODE","absolute","79","5","75","21",null,null,this.div_search);_a.set_taborder("170");_a.set_readonly("true");_a.style.set_align("center middle");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("171");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","230","0",null,"5","275",null,this.div_search);_a.set_taborder("172");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","230",null,null,"5","275","0",this.div_search);_a.set_taborder("174");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_CNTRCT_NO","absolute","15","31","64","21",null,null,this.div_search);_a.set_taborder("178");_a.set_text("계약번호");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_CNTRCT_NM","absolute","196","31","457","21",null,null,this.div_search);_a.set_taborder("180");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_BSNS_NM","absolute","156","5","497","21",null,null,this.div_search);_a.set_taborder("183");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("185");_a.set_text("사     업");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("msk_CNTRCT_NO","absolute","79","31","115","21",null,null,this.div_search);_a.set_taborder("189");_a.set_readonly("true");_a.set_type("string");_a.set_mask("####-###-###");_a.set_maskchar(" ");_a.style.set_align("center middle");_a.set_cssclass("msk_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","230","26",null,"5","275",null,this.div_search);_a.set_taborder("190");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Button("btn_Return","absolute",null,"15","50","25","119",null,this);_a.set_taborder("70");_a.set_text("선택");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("69");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",850,350,this,function(_b){_b.set_classname("CTR030100_P10");_b.set_titletext("계약물품선택");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.msk_CNTRCT_NO","value","ds_cond_pop","CNTRCT_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_BSNS_CODE","value","ds_cond_pop","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_CNTRCT_NM","value","ds_cond_pop","CNTRCT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_BSNS_NM","value","ds_cond_pop","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CTR030300_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("CTR030300_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("CTR030300_P01.xfdl",function(){var _a="";this.CTR030100_P10_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.CTR030100_P10_onload=function(_b,_c){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond_pop.clearData();var _b=this.ds_cond_pop.addRow();this.ds_cond_pop.setColumn(_b,"BSNS_CODE",this.parent.bsnsCode);this.ds_cond_pop.setColumn(_b,"BSNS_NM",this.parent.bsnsNm);this.ds_cond_pop.setColumn(_b,"CNTRCT_NO",this.parent.cntrctNo);this.ds_cond_pop.setColumn(_b,"CNTRCT_NM",this.parent.cntrctNm);var _c=[["ds_cmp002","CMP002","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_cntrctThngDetail.clearData();this.fn_transaction("select");};this.fn_transaction=function(_b){switch(_b){case "select":var _c="/hsco/mis/ctr/CTR030300_P01/selectCntrctThngDetail.do";var _d="input1=ds_cond_pop";var _e="ds_cntrctThngDetail=output1";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){if(_c!='0'){this.gfn_callback_message(_b,_c,_d);}if(_c=='0'){switch(_b){case "select":break;}}};this.grd_cntrctThngDetail_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}};this.grd_entrpsAcctoSubcntrCnt_oncelldblclick=function(_b,_c){var _d=new Dataset();_d.copyData(this.ds_cntrctThngDetail);_d.clearData();var _e=_d.addRow();_d.copyRow(_e,this.ds_cntrctThngDetail,this.ds_cntrctThngDetail.rowposition);this.close(_d.saveXML());};this.btn_Return_onclick=function(_b,_c){var _d=new Dataset();_d.copyData(this.ds_cntrctThngDetail);_d.clearData();for(var _g=0;_g<this.ds_cntrctThngDetail.getRowCount();_g++ ){var _e=this.ds_cntrctThngDetail.getColumn(_g,"CHK");if(_e=='1'){var _f=_d.addRow();_d.copyRow(_f,this.ds_cntrctThngDetail,_g);}}this.close(_d.saveXML());};this.btn_Search_onclick=function(_b,_c){this.fn_search();};this.btn_Close_onclick=function(_b,_c){this.close();};});this.on_initEvent=function(){this.ds_cntrctThngDetail.addEventHandler("oncolumnchanged",this.ds_cntrctThngDetail_oncolumnchanged,this);this.addEventHandler("onload",this.CTR030100_P10_onload,this);this.addEventHandler("oninit",this.CTR030100_P10_oninit,this);this.grd_cntrctThngDetail.addEventHandler("oncelldblclick",this.grd_entrpsAcctoSubcntrCnt_oncelldblclick,this);this.grd_cntrctThngDetail.addEventHandler("onheadclick",this.grd_cntrctThngDetail_onheadclick,this);this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);this.btn_Return.addEventHandler("onclick",this.btn_Return_onclick,this);};this.loadIncludeScript("CTR030300_P01.xfdl");};})();