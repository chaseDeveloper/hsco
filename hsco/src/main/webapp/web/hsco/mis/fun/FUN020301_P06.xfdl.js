﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN020301_P06");this.set_classname("FUN020301_P01");this.set_titletext("이자지급계획조회");this._setFormPosition(0,0,1000,356);}_a=new Dataset("ds_pbncd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\" sumtext=\"공사채번호\"/><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\" sumtext=\"자금종료\"/><Column id=\"CPTAL_KND_NM\" type=\"STRING\" size=\"256\" sumtext=\"자금명\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\" sumtext=\"차입계좌명\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"금융기관코드\"/><Column id=\"FNNC_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\" sumtext=\"사업코드\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\" sumtext=\"사업코드명\"/><Column id=\"BRRW_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\" sumtext=\"차입금액\"/><Column id=\"BRRW_BALANCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BRRW_DE\" type=\"STRING\" size=\"256\" sumtext=\"차입일\"/><Column id=\"INTRT\" type=\"STRING\" size=\"256\" sumtext=\"이율\"/><Column id=\"RPAY_PD\" type=\"STRING\" size=\"256\" sumtext=\"상환기간\"/><Column id=\"RM\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"EXPRTN_AT\" type=\"STRING\" size=\"256\" sumtext=\"만기여부\"/><Column id=\"BRWOFC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"KR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OBJT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PBLICTE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE3\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_INTRT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_STS\" type=\"STRING\" size=\"256\"/><Column id=\"DRFT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CPTAL_KND\" type=\"STRING\" size=\"256\"/><Column id=\"CPTAL_KND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRTN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRWOFC\" type=\"STRING\" size=\"256\"/><Column id=\"FUN_USER3_AT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BGN_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fnncInsttCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fun00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">실물</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">등록</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">비등록</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","49",null,null,"15","15",this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_pbncd","absolute","0","73",null,null,"0","0",this.div_pop);_a.set_taborder("13");_a.set_binddataset("ds_pbncd");_a.set_cellsizingtype("col");_a.set_autosizingtype("row");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"89\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"공사채번호\"/><Cell col=\"2\" text=\"발행유형\"/><Cell col=\"3\" text=\"차입계좌명\"/><Cell col=\"4\" text=\"KR/계좌번호\"/><Cell col=\"5\" text=\"차입금액\"/><Cell col=\"6\" text=\"차입일\"/><Cell col=\"7\" text=\"만기일\"/><Cell col=\"8\" text=\"사업지구명\"/><Cell col=\"9\" text=\"자금종류\"/><Cell col=\"10\" text=\"차입처\"/><Cell col=\"11\" text=\"상환기간(월)\"/><Cell col=\"12\" text=\"만기여부\"/><Cell col=\"13\" text=\"비고\"/><Cell col=\"14\" text=\"지급일자\"/><Cell col=\"15\" text=\"적용금리\"/><Cell col=\"16\" text=\"지급액\"/><Cell col=\"17\" text=\"적요\"/><Cell col=\"18\" text=\"기안상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PBNCD_NO\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:PBLICTE_SE\" combodataset=\"ds_fun00\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:BRRW_ACNUT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:KR_NO\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:BRRW_AMOUNT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:BRRW_DE\" calendardisplaynulltype=\"nulltext\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:EXPRTN_DE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"8\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:BSNS_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"9\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:CPTAL_KND_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"10\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:BRWOFC\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"11\" text=\"bind:RPAY_PD\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"12\" displaytype=\"checkbox\" text=\"bind:EXPRTN_AT\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"13\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:RM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"14\" displaytype=\"date\" style=\"align: ;\" text=\"bind:RPAY_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:RPAY_INTRT\" mask=\"99.999%\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:RPAY_AMOUNT\" mask=\"999,99\"/><Cell col=\"17\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:SUMRY\"/><Cell col=\"18\" displaytype=\"image\" text=\"bind:DRFT_STS_IMG\" tooltiptext=\"bind:DRFT_DT\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","0","197","21",null,null,this.div_pop);_a.set_taborder("14");_a.set_text("이자지급계획");_a.set_cssclass("sta_WF_Title01");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search00","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("15");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Close00","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("17");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","25","738","5",null,null,this.div_pop);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","30",null,"33","0",null,this.div_pop);_a.set_taborder("19");_a.set_cssclass("div_WFSA_Box");this.div_pop.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","4","15","20",null,null,this.div_pop.div_search);_a.set_taborder("26");_a.set_text("15");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","31",null,"7","0",null,this.div_pop.div_search);_a.set_taborder("28");_a.set_text("7");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("1 solid bisque");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND","absolute","510",null,null,"21","95","286",this.div_pop.div_search);_a.set_taborder("29");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND_NM","absolute","556",null,null,"21","13","286",this.div_pop.div_search);_a.set_taborder("30");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Button("btn_CPTAL_KND","absolute",null,null,"22","21","94","286",this.div_pop.div_search);_a.set_taborder("31");_a.set_cssclass("btn_WF_Search");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND00","absolute","518",null,null,"21","87","278",this.div_pop.div_search);_a.set_taborder("32");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Edit("edt_CPTAL_KND_NM00","absolute","564",null,null,"21","5","278",this.div_pop.div_search);_a.set_taborder("34");_a.set_maxlength("8");_a.style.set_align("left middle");this.div_pop.div_search.addChild(_a.name,_a);_a=new Button("btn_CPTAL_KND00","absolute",null,null,"22","21","86","278",this.div_pop.div_search);_a.set_taborder("35");_a.set_cssclass("btn_WF_Search");_a.style.set_background("URL('theme://images/search.gif') repeat 5,5");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","63",null,"10","0",null,this.div_pop);_a.set_taborder("20");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Calendar("cal_bgnDe","absolute","79","36","120","21",null,null,this.div_pop);this.div_pop.addChild(_a.name,_a);_a.set_taborder("21");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.set_readonly("true");_a=new Static("Static00","absolute","204","36","12","21",null,null,this.div_pop);_a.set_taborder("22");_a.set_text("~");this.div_pop.addChild(_a.name,_a);_a=new Calendar("cal_endDe","absolute","219","36","120","21",null,null,this.div_pop);this.div_pop.addChild(_a.name,_a);_a.set_taborder("23");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.set_readonly("true");_a=new Static("sta_applcDe","absolute","15","36","64","21",null,null,this.div_pop);_a.set_taborder("24");_a.set_text("지급일자");_a.set_cssclass("sta_WFSA_Label");this.div_pop.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0",null,"34","0",null,this);_a.set_taborder("2");_a.set_text("이자지급계획 조회");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_exit","absolute",null,"7","20","20","13",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_pop.div_search,function(_b){_b.set_taborder("19");_b.set_cssclass("div_WFSA_Box");});this.div_pop.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_pop,function(_b){_b.set_taborder("0");_b.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",1000,356,this,function(_b){_b.set_classname("FUN020301_P01");_b.set_titletext("이자지급계획조회");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_pop.cal_bgnDe","value","ds_cond","BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_pop.cal_endDe","value","ds_cond","END_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN020301_P06.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN020301_P06.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN020301_P06.xfdl",function(){this.fv_objForm;this.FUN020301_P06_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN020301_P06_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;if(this.gfn_authGrpId("FUN_USER3")> -1){this.ds_cond.setColumn(0,"FUN_USER3_AT","1");}else{this.ds_cond.setColumn(0,"FUN_USER3_AT","0");}this.ds_cond.setColumn(0,"END_DE",this.parent.pymntDe);this.ds_cond.setColumn(0,"BGN_DE",this.parent.pymntDe);this.fn_fnncInsttCode();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_transaction("selectIntrRpayPlan");};this.fn_fnncInsttCode=function(){this.fn_transaction("selectfnncInsttCode");};this.fn_transaction=function(_a){switch(_a){case "selectIntrRpayPlan":var _b="hsco/mis/fun/FUN020301/selectIntrRpayPlan2.do";var _c="input1=ds_cond";var _d="ds_pbncd=output1";break;case "selectfnncInsttCode":var _b="hsco/mis/fun/FUN000000/selectFnncInsttCodeList.do";var _c="";var _d="ds_fnncInsttCode=output1";break;}switch(_a){case "selectfnncInsttCode":Ex.core.tran(this,_a,_b,_c,_d,"","",false,false);break;default:Ex.core.tran(this,_a,_b,_c,_d);break;}};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectIntrRpayPlan":break;case "selectfnncInsttCode":var _d=this.ds_fnncInsttCode.insertRow(0);this.ds_fnncInsttCode.setColumn(_d,'CODE','');this.ds_fnncInsttCode.setColumn(_d,'CODE_NM','전체');this.ds_cond.setColumn(0,"FNNC_INSTT_CODE","");this.fn_search();break;}}};this.fn_PopCallback=function(_a,_b){if(_a=="fun020101_p02"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){this.ds_cond.setColumn(this.ds_cond.rowposition,"CPTAL_KND",_c.getColumn(0,"CODE"));this.ds_cond.setColumn(this.ds_cond.rowposition,"CPTAL_KND_NM",_c.getColumn(0,"CODE_NM"));}}};this.div_pop_grd_pbncd_oncelldblclick=function(_a,_b){if(this.ds_pbncd.getColumn(_b.row,"DRFT_STS")=="0"){var _c=new Dataset();_c.copyData(this.ds_pbncd);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_pbncd,this.ds_pbncd.rowposition);this.close(_c.saveXML());}else{this.gfn_message("info.처리불가","결재진행중인 내역은 \n선택 할 수 없습니다.");}};this.div_pop_grd_pbncd_onheadclick=function(_a,_b){LGV_COL_SORT=_b.col;this._gridSort(_a,_b);};this.btn_Search_onclick=function(_a,_b){this.fn_search();};this.btn_Close_onclick=function(_a,_b){this.close();};this.btn_CPTAL_KND_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("fun020101_p02",400,450,"자금구분코드조회",_c,"mis_fun::FUN020101_P02.xfdl","fn_PopCallback");};});this.on_initEvent=function(){this.ds_pbncd.addEventHandler("onrowposchanged",this.DS_PBNCD_onrowposchanged,this);this.ds_pbncd.addEventHandler("canrowposchange",this.DS_PBNCD_canrowposchange,this);this.addEventHandler("oninit",this.FUN020301_P06_oninit,this);this.addEventHandler("onload",this.FUN020301_P06_onload,this);this.div_pop.grd_pbncd.addEventHandler("oncelldblclick",this.div_pop_grd_pbncd_oncelldblclick,this);this.div_pop.grd_pbncd.addEventHandler("onheadclick",this.div_pop_grd_pbncd_onheadclick,this);this.div_pop.btn_Search00.addEventHandler("onclick",this.btn_Search_onclick,this);this.div_pop.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_pop.div_search.edt_CPTAL_KND.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.edt_CPTAL_KND_NM.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.btn_CPTAL_KND.addEventHandler("onclick",this.btn_CPTAL_KND_onclick,this);this.div_pop.div_search.edt_CPTAL_KND00.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.edt_CPTAL_KND_NM00.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.div_search.btn_CPTAL_KND00.addEventHandler("onclick",this.btn_CPTAL_KND_onclick,this);this.btn_exit.addEventHandler("onclick",this.btn_Close_onclick,this);};this.loadIncludeScript("FUN020301_P06.xfdl");};})();