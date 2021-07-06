﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN020301_P01");this.set_classname("FUN020301_P01");this.set_titletext("공사채조회팝업");this._setFormPosition(0,0,1000,700);}_a=new Dataset("ds_pbncd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\" sumtext=\"공사채번호\"/><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\" sumtext=\"자금종료\"/><Column id=\"CPTAL_KND_NM\" type=\"STRING\" size=\"256\" sumtext=\"자금명\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\" sumtext=\"차입계좌명\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"금융기관코드\"/><Column id=\"FNNC_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\" sumtext=\"사업코드\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\" sumtext=\"사업코드명\"/><Column id=\"BRRW_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"차입금액\"/><Column id=\"BRRW_DE\" type=\"STRING\" size=\"256\" sumtext=\"차입일\"/><Column id=\"INTRT\" type=\"STRING\" size=\"256\" sumtext=\"이율\"/><Column id=\"RPAY_PD\" type=\"STRING\" size=\"256\" sumtext=\"상환기간\"/><Column id=\"RM\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"EXPRTN_AT\" type=\"STRING\" size=\"256\" sumtext=\"만기여부\"/><Column id=\"BRWOFC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"KR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OBJT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PBLICTE_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\"/><Column id=\"CPTAL_KND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRTN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRWOFC\" type=\"STRING\" size=\"256\"/><Column id=\"FUN_USER3_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fnncInsttCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fun00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">실물</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">등록</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">비등록</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","49",null,null,"15","15",this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_pbncd","absolute","0","73",null,null,"0","0",this.div_pop);_a.set_taborder("13");_a.set_binddataset("ds_pbncd");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"92\"/><Column size=\"180\"/><Column size=\"110\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"공사채번호\"/><Cell col=\"2\" text=\"채권명\"/><Cell col=\"3\" text=\"KR번호\"/><Cell col=\"4\" text=\"차입금액\"/><Cell col=\"5\" text=\"차입일\"/><Cell col=\"6\" text=\"만기일\"/><Cell col=\"7\" text=\"사업명\"/><Cell col=\"8\" text=\"자금종류\"/><Cell col=\"9\" text=\"차입처\"/><Cell col=\"10\" text=\"상환기간(월)\"/><Cell col=\"11\" text=\"만기여부\"/><Cell col=\"12\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PBNCD_NO\"/><Cell col=\"2\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:BRRW_ACNUT_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:KR_NO\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:BRRW_AMOUNT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:BRRW_DE\" calendardisplaynulltype=\"nulltext\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:EXPRTN_DE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"7\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:BSNS_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"8\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:CPTAL_KND_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"9\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:BRWOFC\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"10\" text=\"bind:RPAY_PD\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"11\" displaytype=\"checkbox\" text=\"bind:EXPRTN_AT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"12\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:RM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","0","197","21",null,null,this.div_pop);_a.set_taborder("14");_a.set_text("공사채 조회");_a.set_cssclass("sta_WF_Title01");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search00","absolute",null,"0","50","25","106",null,this.div_pop);_a.set_taborder("15");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Close00","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("17");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","25","738","5",null,null,this.div_pop);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","30",null,"33","0",null,this.div_pop);_a.set_taborder("19");_a.set_cssclass("div_WFSA_Box");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_CLSF_CODE00","absolute","15","5","64","21",null,null,this.div_pop.div_search);_a.set_taborder("23");_a.set_text("자금종류");_a.set_cssclass("sta_WFSA_Label");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("sta_CLSF_CODE01","absolute","326","5","64","21",null,null,this.div_pop.div_search);_a.set_taborder("24");_a.set_text("차입처");_a.set_cssclass("sta_WFSA_Label");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","4","15","20",null,null,this.div_pop.div_search);_a.set_taborder("26");_a.set_text("15");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","74","6","5","22",null,null,this.div_pop.div_search);_a.set_taborder("27");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","31",null,"7","0",null,this.div_pop.div_search);_a.set_taborder("28");_a.set_text("7");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("1 solid bisque");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND","absolute","510",null,null,"21","95","286",this.div_pop.div_search);_a.set_taborder("29");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND_NM","absolute","556",null,null,"21","13","286",this.div_pop.div_search);_a.set_taborder("30");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Button("btn_CPTAL_KND","absolute",null,null,"22","21","94","286",this.div_pop.div_search);_a.set_taborder("31");_a.set_cssclass("btn_WF_Search");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND00","absolute","518",null,null,"21","87","278",this.div_pop.div_search);_a.set_taborder("32");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND_NM01","absolute","161",null,"150","21",null,"5",this.div_pop.div_search);_a.set_taborder("33");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND_NM00","absolute","564",null,null,"21","5","278",this.div_pop.div_search);_a.set_taborder("34");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Button("btn_CPTAL_KND00","absolute",null,null,"22","21","86","278",this.div_pop.div_search);_a.set_taborder("35");_a.set_cssclass("btn_WF_Search");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND01","absolute","79","5","80","21",null,null,this.div_pop.div_search);_a.set_taborder("36");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Button("btn_CPTAL_KND01","absolute","137","5","22","21",null,null,this.div_pop.div_search);_a.set_taborder("37");_a.set_cssclass("btn_WF_Search");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","386","4","5","22",null,null,this.div_pop.div_search);_a.set_taborder("38");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_pop.div_search.addChild(_a.name,_a);_a=new Combo("cmb_exprtnAt","absolute","877","5","78","21",null,null,this.div_pop.div_search);this.div_pop.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_exprtnAt_innerdataset",this.div_pop.div_search.cmb_exprtnAt);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">만기</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미만기</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("39");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_text("전체");_a.set_index("0");_a=new Static("Static03","absolute","880","4","5","22",null,null,this.div_pop.div_search);_a.set_taborder("40");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("sta_CLSF_CODE02","absolute","812","5","64","21",null,null,this.div_pop.div_search);_a.set_taborder("41");_a.set_text("만기여부");_a.set_cssclass("sta_WFSA_Label");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("sta_CLSF_CODE03","absolute","550","5","72","21",null,null,this.div_pop.div_search);_a.set_taborder("42");_a.set_text("차입계좌명");_a.set_cssclass("sta_WFSA_Label");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","634","4","5","22",null,null,this.div_pop.div_search);_a.set_taborder("43");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_BRRW_ACNUT_NM","absolute","631",null,"166","21",null,"5",this.div_pop.div_search);_a.set_taborder("45");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_BRWOFC","absolute","391",null,"142","21",null,"5",this.div_pop.div_search);_a.set_taborder("47");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","63",null,"10","0",null,this.div_pop);_a.set_taborder("20");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Confirm","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("21");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0",null,"34","0",null,this);_a.set_taborder("2");_a.set_text("공사채 조회");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_exit","absolute",null,"7","20","20","13",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_pop.div_search,function(_c){_c.set_taborder("19");_c.set_cssclass("div_WFSA_Box");});this.div_pop.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_pop,function(_c){_c.set_taborder("0");_c.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",1000,700,this,function(_c){_c.set_classname("FUN020301_P01");_c.set_titletext("공사채조회팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_pop.div_search.edt_CPTAL_KND01","value","ds_cond","CPTAL_KND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_pop.div_search.edt_CPTAL_KND_NM01","value","ds_cond","CPTAL_KND_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_pop.div_search.cmb_exprtnAt","value","ds_cond","EXPRTN_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_pop.div_search.edt_BRRW_ACNUT_NM","value","ds_cond","BRRW_ACNUT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_pop.div_search.edt_BRWOFC","value","ds_cond","BRWOFC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN020301_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN020301_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN020301_P01.xfdl",function(){this.fv_objForm;this.FUN020301_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN020301_P01_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;if(this.gfn_authGrpId("FUN_USER3")> -1){this.ds_cond.setColumn(0,"FUN_USER3_AT","1");}else{this.ds_cond.setColumn(0,"FUN_USER3_AT","0");}this.fn_fnncInsttCode();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_transaction("selectPbncd");};this.fn_fnncInsttCode=function(){this.fn_transaction("selectfnncInsttCode");};this.fn_transaction=function(_a){switch(_a){case "selectPbncd":var _b="hsco/mis/fun/FUN020301/selectPbncdList.do";var _c="input1=ds_cond";var _d="ds_pbncd=output1";break;case "selectfnncInsttCode":var _b="hsco/mis/fun/FUN010201/selectFnncInsttCodeList.do";var _c="";var _d="ds_fnncInsttCode=output1";break;}switch(_a){case "selectfnncInsttCode":Ex.core.tran(this,_a,_b,_c,_d,"","",false,false);break;default:Ex.core.tran(this,_a,_b,_c,_d);break;}};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectPbncd":break;case "selectfnncInsttCode":var _d=this.ds_fnncInsttCode.insertRow(0);this.ds_fnncInsttCode.setColumn(_d,'CODE','');this.ds_fnncInsttCode.setColumn(_d,'CODE_NM','전체');this.ds_cond.setColumn(0,"FNNC_INSTT_CODE","");this.fn_search();break;}}};this.fn_PopCallback=function(_a,_b){if(_a=="fun020101_p02"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){this.ds_cond.setColumn(this.ds_cond.rowposition,"CPTAL_KND",_c.getColumn(0,"CODE"));this.ds_cond.setColumn(this.ds_cond.rowposition,"CPTAL_KND_NM",_c.getColumn(0,"CODE_NM"));}}};this.div_pop_grd_pbncd_oncelldblclick=function(_a,_b){this.btn_Confirm_onclick();};this.div_pop_grd_pbncd_onheadclick=function(_a,_b){LGV_COL_SORT=_b.col;this._gridSort(_a,_b);};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Close_onclick=function(_a,_b){this.close();};this.btn_Confirm_onclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_pbncd);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_pbncd,this.ds_pbncd.rowposition);this.close(_c.saveXML());};this.btn_CPTAL_KND_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("fun020101_p02",400,450,"자금구분코드조회",_c,"mis_fun::FUN020101_P02.xfdl","fn_PopCallback");};});this.on_initEvent=function(){this.ds_pbncd.addEventHandler("onrowposchanged",this.DS_PBNCD_onrowposchanged,this);this.ds_pbncd.addEventHandler("canrowposchange",this.DS_PBNCD_canrowposchange,this);this.addEventHandler("oninit",this.FUN020301_P01_oninit,this);this.addEventHandler("onload",this.FUN020301_P01_onload,this);this.div_pop.grd_pbncd.addEventHandler("oncelldblclick",this.div_pop_grd_pbncd_oncelldblclick,this);this.div_pop.grd_pbncd.addEventHandler("onheadclick",this.div_pop_grd_pbncd_onheadclick,this);this.div_pop.btn_Search00.addEventHandler("onclick",this.btn_Search_onclick,this);this.div_pop.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_pop.div_search.edt_CPTAL_KND.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.edt_CPTAL_KND_NM.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.btn_CPTAL_KND.addEventHandler("onclick",this.btn_CPTAL_KND_onclick,this);this.div_pop.div_search.edt_CPTAL_KND00.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.edt_CPTAL_KND_NM01.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.edt_CPTAL_KND_NM00.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.btn_CPTAL_KND00.addEventHandler("onclick",this.btn_CPTAL_KND_onclick,this);this.div_pop.div_search.edt_CPTAL_KND01.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.btn_CPTAL_KND01.addEventHandler("onclick",this.btn_CPTAL_KND_onclick,this);this.div_pop.div_search.edt_BRRW_ACNUT_NM.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.edt_BRWOFC.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);this.btn_exit.addEventHandler("onclick",this.btn_Close_onclick,this);};this.loadIncludeScript("FUN020301_P01.xfdl");};})();