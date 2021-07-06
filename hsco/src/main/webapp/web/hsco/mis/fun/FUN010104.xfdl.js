﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN010104");this.set_classname("FUN010104");this.set_titletext("매칭비율관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("DS_MTCHG_RATE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EARTH_CODE\" type=\"STRING\" size=\"256\" sumtext=\"지구코드\"/><Column id=\"EARTH_NM\" type=\"STRING\" size=\"256\" sumtext=\"지구명\"/><Column id=\"NXNDR\" type=\"FLOAT\" size=\"256\" sumtext=\"국비\"/><Column id=\"DISP\" type=\"FLOAT\" size=\"256\" sumtext=\"시비\"/><Column id=\"POSES\" type=\"FLOAT\" size=\"256\" sumtext=\"구비\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\" sumtext=\"기타\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\" sumtext=\"등록자ID\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\" sumtext=\"등록일시\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\" sumtext=\"수정자ID\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\" sumtext=\"수정일시\"/><Column id=\"NEW_AT\" type=\"STRING\" size=\"256\" sumtext=\"신규여부\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">DS_MTCHG_RATE</Col><Col id=\"colId\">EARTH_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업지구코드</Col><Col id=\"PK\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_Cont","absolute","0","0",null,null,"28","0",this);_a.set_taborder("0");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","1038","10",null,null,this.div_Cont);_a.set_taborder("2");_a.set_text("10");_a.style.set_background("darkviolet");_a.style.set_color("black");_a.style.set_font("bold 11 Dotum");_a.style.set_opacity("50");_a.set_visible("false");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","788","98.85%","10",null,null,this.div_Cont);_a.set_taborder("3");_a.set_text("10");_a.style.set_background("darkviolet");_a.style.set_color("black");_a.style.set_font("bold 11 Dotum");_a.style.set_opacity("50");_a.set_visible("false");this.div_Cont.addChild(_a.name,_a);_a=new Grid("grd_MTCHG_RATE","absolute","0","26",null,null,"402","0",this.div_Cont);_a.set_taborder("0");_a.set_binddataset("DS_MTCHG_RATE");_a.set_autosizingtype("row");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"지구코드\"/><Cell col=\"1\" text=\"지구명\"/><Cell col=\"2\" text=\"국비(%)\"/><Cell col=\"3\" text=\"시비(%)\"/><Cell col=\"4\" text=\"구비(%)\"/><Cell col=\"5\" text=\"기타\"/></Band><Band id=\"body\"><Cell text=\"bind:EARTH_CODE\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EARTH_NM\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:NXNDR\" wordwrap=\"char\" mask=\"999%\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DISP\" wordwrap=\"char\" mask=\"999%\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:POSES\" wordwrap=\"char\" mask=\"999%\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ETC\" wordwrap=\"char\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/></Band></Format></Formats>");this.div_Cont.addChild(_a.name,_a);_a=new Div("div_detail_00","absolute",null,"5","392",null,"0","5",this.div_Cont);_a.set_taborder("1");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static04","absolute","-2","765","100.25%","11",null,null,this.div_Cont.div_detail_00);_a.set_taborder("63");_a.set_text("11");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_align("center middle");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Div("div_detail_01","absolute","0","22","392",null,null,"0",this.div_Cont.div_detail_00);_a.set_taborder("64");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Static("dtl_guide10","absolute","1","721","99.48%","9",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("586");_a.set_text("9");_a.set_visible("false");_a.style.set_background("bisque");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","118","0","274","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("593");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","118","30","274","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("594");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","118","60","274","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("595");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label04","absolute","118","90","274","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("596");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label05","absolute","118","120","274","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("597");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label06","absolute","118","150","274","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("598");_a.set_cssclass("sta_WF_Labelbg");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Edit("edt_EARTH_CODE","absolute","121","5","25.77%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("0");_a.set_maxlength("5");_a.style.set_align("left middle");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Edit("edt_EARTH_NM","absolute","121","35","62.76%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("1");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new MaskEdit("msk_NXNDR","absolute","121","65","25.77%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("2");_a.set_mask("!###");_a.set_limitbymask("integer");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new MaskEdit("msk_DISP","absolute","121","95","25.77%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("3");_a.set_mask("!###");_a.set_limitbymask("integer");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new MaskEdit("msk_POSES","absolute","121","125","25.77%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("4");_a.set_mask("!###");_a.set_limitbymask("integer");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Edit("edt_ETC","absolute","121","155","63.01%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("5");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_Percentage00","absolute","224","95","5.1%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("605");_a.set_text("%");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_Percentage01","absolute","224","65","5.1%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("606");_a.set_text("%");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_Percentage02","absolute","224","125","5.1%","21",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("607");_a.set_text("%");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_SYS_BANK_CODE","absolute","0","120","119","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("10");_a.set_text("구비");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_PRPOS_CHANGE_CPTAL_AT","absolute","0","150","119","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("11");_a.set_text("기타");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_BRANCH_BANK_CODE","absolute","0","0","119","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("6");_a.set_text("사업지구코드");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_BANK_NM","absolute","0","30","119","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("7");_a.set_text("사업지구명");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO","absolute","0","60","119","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("8");_a.set_text("국비");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("sta_ACNUT_SE","absolute","0","90","119","31",null,null,this.div_Cont.div_detail_00.div_detail_01);_a.set_taborder("9");_a.set_text("시비");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");this.div_Cont.div_detail_00.div_detail_01.addChild(_a.name,_a);_a=new Static("Static03","absolute","393","13","1.5%","583",null,null,this.div_Cont.div_detail_00);_a.set_taborder("65");_a.set_text("6");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_align("center middle");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","120","22",null,null,this.div_Cont.div_detail_00);_a.set_taborder("67");_a.set_text("기본정보");_a.style.set_font("bold 9 Dotum");_a.set_cssclass("sta_WF_Title02");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Static("dtl_guide01","absolute","0","17","413","5",null,null,this.div_Cont.div_detail_00);_a.set_taborder("68");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");this.div_Cont.div_detail_00.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","7","200","19",null,null,this.div_Cont);_a.set_taborder("4");_a.set_text("매칭비율관리 현황");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.div_Cont.addChild(_a.name,_a);_a=new Static("dtl_guide01","absolute","0","21","400","5",null,null,this.div_Cont);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("bisque");this.div_Cont.addChild(_a.name,_a);_a=new Static("Static01","absolute","629","108","10","500",null,null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("bisque");_a.style.set_border("0 none transparent");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","28","797","0",null,this);_a.set_taborder("3");_a.set_visible("false");_a.style.set_background("darkviolet");_a.style.set_color("black");_a.style.set_font("bold 11 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Layout("default","",389,245,this.div_Cont.div_detail_00.div_detail_01,function(_b){_b.set_taborder("64");});this.div_Cont.div_detail_00.div_detail_01.addLayout(_a.name,_a);_a=new Layout("default","",555,380,this.div_Cont.div_detail_00,function(_b){_b.set_taborder("1");});this.div_Cont.div_detail_00.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_Cont,function(_b){_b.set_taborder("0");});this.div_Cont.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FUN010104");_b.set_titletext("매칭비율관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_Cont.div_detail_00.div_detail_01.edt_EARTH_CODE","value","DS_MTCHG_RATE","EARTH_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_Cont.div_detail_00.div_detail_01.edt_EARTH_NM","value","DS_MTCHG_RATE","EARTH_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_Cont.div_detail_00.div_detail_01.msk_NXNDR","value","DS_MTCHG_RATE","NXNDR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_Cont.div_detail_00.div_detail_01.msk_DISP","value","DS_MTCHG_RATE","DISP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_Cont.div_detail_00.div_detail_01.msk_POSES","value","DS_MTCHG_RATE","POSES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_Cont.div_detail_00.div_detail_01.edt_ETC","value","DS_MTCHG_RATE","ETC");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN010104.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN010104.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN010104.xfdl",function(){this.saveRow= -1;this.checkDs=[this.DS_MTCHG_RATE];this.FUN010104_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN010104_onload=function(_a,_b){this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.DS_MTCHG_RATE.clearData();this.fn_transaction("selectMtchgRateList");};this.fn_save=function(){if(Ex.util.isUpdated(this.DS_MTCHG_RATE)){if(!this.gfn_checkValidation_NoUpdChk(this.DS_MTCHG_RATE,this.ds_validation)){return;}this.fn_transaction("saveMtchgRateList");}else{this.gfn_message("comm.데이터.변경.없음");}};this.fn_transaction=function(_a){switch(_a){case "selectMtchgRateList":var _b="hsco/mis/fun/FUN010104/selectMtchgRateList.do";var _c="";var _d="DS_MTCHG_RATE=output1";break;case "saveMtchgRateList":var _b="hsco/mis/fun/FUN010104/MtchgRateCUD.do";var _c="input1=DS_MTCHG_RATE:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectMtchgRateList":this.DS_MTCHG_RATE.applyChange();if(this.saveRow> -1){this.DS_MTCHG_RATE.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "saveMtchgRateList":this.gfn_message("success.처리.성공");this.fn_search();break;}}};this.DS_MTCHG_RATE_canrowposchange=function(_a,_b){};this.DS_MTCHG_RATE_cancolumnchange=function(_a,_b){var _c=0;var _d=this.DS_MTCHG_RATE.rowposition;if(_b.columnid=="NXNDR"||_b.columnid=="DISP"||_b.columnid=="POSES"){var _e=0;var _f=0;var _g=0;if(_b.columnid=="NXNDR"){_e=_b.newvalue;_f=_a.getColumn(_d,"DISP");_g=_a.getColumn(_d,"POSES");}if(_b.columnid=="DISP"){_e=_a.getColumn(_d,"NXNDR");_f=_b.newvalue;_g=_a.getColumn(_d,"POSES");}if(_b.columnid=="POSES"){_e=_a.getColumn(_d,"NXNDR");_f=_a.getColumn(_d,"DISP");_g=_b.newvalue;}_c=_e+_f+_g;if(_c>100){this.gfn_message("errors.항목값.범위.이하","국비,시비,구비의 총 비율|100");_a.set_updatecontrol(false);_a.setColumn(_b.row,_b.columnid,_b.oldvalue);_a.set_updatecontrol(true);return false;}else{return true;}}};this.DS_MTCHG_RATE_onrowposchanged=function(_a,_b){var _c=this.DS_MTCHG_RATE.rowposition;var _d=this.DS_MTCHG_RATE.getRowType(_c);if(_d==2){this.div_Cont.div_detail_00.div_detail_01.edt_EARTH_CODE.set_readonly(false);this.div_Cont.div_detail_00.div_detail_01.edt_EARTH_CODE.set_cssclass("edt_WF_Essential");}else{this.div_Cont.div_detail_00.div_detail_01.edt_EARTH_CODE.set_readonly(true);this.div_Cont.div_detail_00.div_detail_01.edt_EARTH_CODE.set_cssclass("edt_WF_Readonly");}};this.fn_insert=function(){var _a=this.DS_MTCHG_RATE.addRow();this.DS_MTCHG_RATE.setColumn(_a,"NXNDR",0);this.DS_MTCHG_RATE.setColumn(_a,"DISP",0);this.DS_MTCHG_RATE.setColumn(_a,"POSES",0);};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){var _a=this.DS_MTCHG_RATE.rowposition;this.DS_MTCHG_RATE.deleteRow(_a);this.DS_MTCHG_RATE_onrowposchanged();}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.DS_MTCHG_RATE.reset();this.DS_MTCHG_RATE.applyChange();return;}};});this.on_initEvent=function(){this.DS_MTCHG_RATE.addEventHandler("canrowposchange",this.DS_MTCHG_RATE_canrowposchange,this);this.DS_MTCHG_RATE.addEventHandler("onrowposchanged",this.DS_MTCHG_RATE_onrowposchanged,this);this.DS_MTCHG_RATE.addEventHandler("cancolumnchange",this.DS_MTCHG_RATE_cancolumnchange,this);this.addEventHandler("onload",this.FUN010104_onload,this);this.addEventHandler("oninit",this.FUN010104_oninit,this);};this.loadIncludeScript("FUN010104.xfdl");};})();