﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN040201_P02");this.set_classname("FUN040201_P02");this.set_titletext("브랜치계좌 조회 팝업");this._setFormPosition(0,0,775,425);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_CHANGE_CPTAL_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_branchAcnut",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SUMRY\" type=\"STRING\" size=\"256\" sumtext=\"브래치은행코드\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\" sumtext=\"은행명\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\" sumtext=\"계좌번호\"/><Column id=\"ACNUT_NM\" type=\"STRING\" size=\"256\" sumtext=\"계좌명\"/><Column id=\"SYS_BANK_CODE\" type=\"STRING\" size=\"256\" sumtext=\"시스템은행코드\"/><Column id=\"SE\" type=\"STRING\" size=\"256\" sumtext=\"구분\"/><Column id=\"PRPOS_CHANGE_CPTAL_AT\" type=\"STRING\" size=\"256\" sumtext=\"용도변경자금여부\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\" sumtext=\"등록자ID\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\" sumtext=\"등록일시\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\" sumtext=\"수정자ID\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\" sumtext=\"수정일시\"/><Column id=\"CPTAL_BALC_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASIGN_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acnutSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fnncInsttCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","5",null,null,"15","15",this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","2","197","21",null,null,this.div_pop);_a.set_taborder("14");_a.set_text("브랜치계좌 목록");_a.set_cssclass("sta_WF_Title01");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search00","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("15");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Close00","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("17");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Grid("grd_branchAcnut","absolute","0","73",null,null,"0","0",this.div_pop);_a.set_taborder("19");_a.set_binddataset("ds_branchAcnut");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"270\"/><Column size=\"85\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"금융기관\"/><Cell col=\"2\" text=\"계좌번호\"/><Cell col=\"3\" text=\"브랜치계좌명\"/><Cell col=\"4\" text=\"계좌구분\"/><Cell col=\"5\" text=\"수입지출외&#13;&#10;계좌여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SYS_BANK_CODE\" wordwrap=\"char\" combodataset=\"ds_fnncInsttCode\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ACNUTNO\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ACNUT_NM\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SE\" wordwrap=\"char\" combodataset=\"ds_acnutSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:PRPOS_CHANGE_CPTAL_AT\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","30",null,"33","0",null,this.div_pop);_a.set_taborder("20");_a.set_cssclass("div_WFSA_Box");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_BSNS_CODE","absolute","16","5","106","21",null,null,this.div_pop.div_search);_a.set_taborder("18");_a.set_text("수입지출외계좌");_a.set_cssclass("sta_WFSA_Label");this.div_pop.div_search.addChild(_a.name,_a);_a=new Static("Static18","absolute","115","2","5","32",null,null,this.div_pop.div_search);_a.set_taborder("22");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_pop.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","120","6","100","21",null,null,this.div_pop.div_search);this.div_pop.div_search.addChild(_a.name,_a);var _b=new Dataset("Combo00_innerdataset",this.div_pop.div_search.Combo00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">포함</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미포함</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("23");_a.set_text("Combo00");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("Static00","absolute","0","25",null,"5","0",null,this.div_pop);_a.set_taborder("21");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","63",null,"10","0",null,this.div_pop);_a.set_taborder("22");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search01","absolute",null,"0","50","25","106",null,this.div_pop);_a.set_taborder("23");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_pop.div_search,function(_c){_c.set_taborder("20");_c.set_cssclass("div_WFSA_Box");});this.div_pop.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_pop,function(_c){_c.set_taborder("0");_c.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",775,425,this,function(_c){_c.set_classname("FUN040201_P02");_c.set_titletext("브랜치계좌 조회 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_pop.div_search.Combo00","value","ds_cond","PRPOS_CHANGE_CPTAL_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN040201_P02.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN040201_P02.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN040201_P02.xfdl",function(){this.fv_objForm;this.FUN040201_P02_oninit=function(_a,_b){this.fn_init_form();};this.FUN040201_P02_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SE",this.parent.arg_1);this.ds_cond.setColumn(0,"PRPOS_CHANGE_CPTAL_AT",'0');if(this.parent.arg_2=='ETC'){this.div_pop.div_search.Combo00.set_readonly(false);this.div_pop.div_search.Combo00.set_cssclass("");}else{this.div_pop.div_search.Combo00.set_readonly(true);this.div_pop.div_search.Combo00.set_cssclass("cmb_WF_Readonly");}var _c=[["ds_acnutSe","FUN034","Y",""]];var _d=function(_e,_f,_g){this.fnnc_instt_code();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_search=function(){this.fn_transaction("selectDpstAcnutList");};this.fnnc_instt_code=function(){this.fn_transaction("selectFnncInsttCodeList");};this.fn_transaction=function(_a){switch(_a){case "selectDpstAcnutList":var _b="hsco/mis/fun/FUN040201/selectBranchAcnutList.do";var _c="input1=ds_cond";var _d="ds_branchAcnut=output1";break;case "selectFnncInsttCodeList":var _b="hsco/mis/fun/FUN000000/selectFnncInsttCodeList.do";var _c="";var _d="ds_fnncInsttCode=output1";break;}switch(_a){case "selectFnncInsttCodeList":Ex.core.tran(this,_a,_b,_c,_d,"","",false,false);break;default:Ex.core.tran(this,_a,_b,_c,_d);break;}};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectPbncd":break;case "selectFnncInsttCodeList":this.fn_search();break;}}};this.div_pop_grd_branchAcnut_oncelldblclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_branchAcnut);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_branchAcnut,this.ds_branchAcnut.rowposition);this.close(_c.saveXML());};this.btn_Search_onclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_branchAcnut);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_branchAcnut,this.ds_branchAcnut.rowposition);this.close(_c.saveXML());};this.btn_Close_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.ds_branchAcnut.addEventHandler("onrowposchanged",this.ds_branchAcnut_onrowposchanged,this);this.addEventHandler("oninit",this.FUN040201_P02_oninit,this);this.addEventHandler("onload",this.FUN040201_P02_onload,this);this.div_pop.btn_Search00.addEventHandler("onclick",this.btn_Search_onclick,this);this.div_pop.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_pop.grd_branchAcnut.addEventHandler("oncelldblclick",this.div_pop_grd_branchAcnut_oncelldblclick,this);this.div_pop.btn_Search01.addEventHandler("onclick",this.fn_search,this);};this.loadIncludeScript("FUN040201_P02.xfdl");};})();