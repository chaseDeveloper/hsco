﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02010800");this.set_classname("FRM02010800");this.set_titletext("유효이자율관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_frmValidintrt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"INTRT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_INTRT\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_frmIntrtChange",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"INTRT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_INTRT\" type=\"STRING\" size=\"256\"/><Column id=\"CHGHY\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_frmValidintrt</Col><Col id=\"colId\">ACCNUT_YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">회계년도</Col></Row><Row><Col id=\"compId\">ds_frmValidintrt</Col><Col id=\"colId\">VALID_INTRT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">유효이자율</Col></Row><Row><Col id=\"colId\">ACCNUT_YEAR</Col><Col id=\"compId\">ds_frmIntrtChange</Col><Col id=\"msgId\">회계년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">CHANGE_INTRT</Col><Col id=\"compId\">ds_frmIntrtChange</Col><Col id=\"msgId\">변경이자율</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"accnutYear\" type=\"STRING\" size=\"256\"/><Column id=\"intrtSn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("회계년도");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_acntYear","absolute","79","5","70","21",null,null,this.div_search);_a.set_taborder("33");_a.set_value("2016");_a.set_max("2100");_a.set_min("1900");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_frmValidintrt","absolute","0","36","450",null,null,"0",this.Div00);_a.set_taborder("18");_a.set_binddataset("ds_frmValidintrt");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"63\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"168\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"회계년도\"/><Cell col=\"2\" text=\"유효이자율\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:ACCNUT_YEAR\" expandshow=\"hide\" expandsize=\"13\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" text=\"bind:VALID_INTRT\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:REGIST_DE\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:RM\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.Div00);_a.set_taborder("19");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.Div00);_a.set_taborder("20");_a.set_text("유효이자율");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.Div00);_a.set_taborder("21");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Grid("grd_frmIntrtChange","absolute","455","36",null,null,"0","0",this.Div00);_a.set_taborder("22");_a.set_binddataset("ds_frmIntrtChange");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"328\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"변경일자\"/><Cell col=\"2\" text=\"유효이자율\"/><Cell col=\"3\" text=\"변경사유\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:CHANGE_DE\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:CHANGE_INTRT\" combodataset=\"ds_dbrtSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CHGHY\" expandshow=\"hide\" combodataset=\"ds_stacntSeGrd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Button("btn_insert","absolute",null,"12","64","19","65",null,this.Div00);_a.set_taborder("23");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.Div00.addChild(_a.name,_a);_a=new Button("btn_delete","absolute",null,"12","64","19","0",null,this.Div00);_a.set_taborder("24");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.style.set_font("8 Dotum");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","456","10","148","21",null,null,this.Div00);_a.set_taborder("25");_a.set_text("이자율변경내역");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_b){_b.set_taborder("3");_b.set_text("Div00");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM02010800");_b.set_titletext("유효이자율관리");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("FRM02010800.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02010800.xfdl",function(){this.FRM02010800_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM02010800_onload=function(_a,_b){var _c=this.gfn_today("NOW_YEAR");this.div_search.spn_acntYear.set_value(_c);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_frmValidintrt.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectFrmValidintrt");};this.fn_save=function(){if(this.ds_frmValidintrt.isUpdated()==true){if(this.gfn_checkValidation(this.ds_frmValidintrt,this.ds_validation)==false){return;}}if(this.ds_frmIntrtChange.isUpdated()==true){if(this.gfn_checkValidation(this.ds_frmIntrtChange,this.ds_validation)==false){return;}}if(this.ds_frmValidintrt.isUpdated()==false&&this.ds_frmIntrtChange.isUpdated()==false){this.gfn_message("comm.내역.변경.없음");return;}if(this.gfn_message("comm.행위여부","저장")){this.ds_frmValidintrt.setColumn(this.ds_frmValidintrt.rowposition,"CHK","Y");this.fn_transaction("saveFrmValidintrtAndChng");}else{return;}};this.fn_insert=function(){var _a=this.ds_frmValidintrt.addRow();var _b=this.div_search.spn_acntYear.value;this.ds_frmValidintrt.setColumn(_a,"ACCNUT_YEAR",_b);this.ds_frmValidintrt.setColumn(_a,"CHK","N");this.fn_snInit(this.ds_frmValidintrt);};this.fn_delete=function(){if(this.gfn_message("comm.행위여부","유효이자율 삭제시 해당 변경내역이 모두삭제됩니다. \n진행")){}else{return false;}this.ds_frmValidintrt.deleteRow(this.ds_frmValidintrt.rowposition);this.fn_snInit(this.ds_frmValidintrt);};this.fn_search=function(){this.ds_frmValidintrt.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectFrmValidintrt");};this.fn_snInit=function(_a){var _b=_a.getRowCount();for(i=0;i<_b;i++ ){_a.setColumn(i,"SN",i+1);}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectFrmValidintrt":var _c="/hsco/pms/frm/FRM02010800/selectFrmValidintrt.do";var _d="input1=ds_cond00";var _e="ds_frmValidintrt=output1";break;case "selectFrmIntrtChang":var _c="/hsco/pms/frm/FRM02010800/selectFrmIntrtChang.do";var _d="input1=ds_schVal";var _e="ds_frmIntrtChange=output1";break;case "saveFrmValidintrtAndChng":var _c="/hsco/pms/frm/FRM02010800/saveFrmValidintrtAndChng.do";var _d="input1=ds_frmValidintrt:U input2=ds_frmIntrtChange:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "saveFrmValidintrtAndChng":this.fn_callback_message(_a,_b,_c);this.fn_search();break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.Div00_btn_insert_onclick=function(_a,_b){if(this.ds_frmValidintrt.getRowCount()<1){this.gfn_message("info.항목.선택.알림","유효이자율");return;}var _c=this.ds_frmIntrtChange.addRow();var _d=this.ds_frmValidintrt.getColumn(this.ds_frmValidintrt.rowposition,"ACCNUT_YEAR");var _e=this.ds_frmValidintrt.getColumn(this.ds_frmValidintrt.rowposition,"INTRT_SN");var _f=this.ds_frmValidintrt.getColumn(this.ds_frmValidintrt.rowposition,"SN");this.ds_frmIntrtChange.setColumn(_c,"ACCNUT_YEAR",_d);this.ds_frmIntrtChange.setColumn(_c,"INTRT_SN",_e);this.ds_frmIntrtChange.setColumn(_c,"PRT_SN",_f);this.fn_snInit(this.ds_frmIntrtChange);};this.Div00_btn_delete_onclick=function(_a,_b){this.ds_frmIntrtChange.deleteRow(this.ds_frmIntrtChange.rowposition);this.fn_snInit(this.ds_frmIntrtChange);};this.ds_frmValidintrt_onrowposchanged=function(_a,_b){var _c=_a.getColumn(_b.newrow,"ACCNUT_YEAR");var _d=_a.getColumn(_b.newrow,"INTRT_SN");this.ds_schVal.setColumn(0,"accnutYear",_c);this.ds_schVal.setColumn(0,"intrtSn",_d);this.ds_frmIntrtChange.clearData();this.fn_transaction("selectFrmIntrtChang");};});this.on_initEvent=function(){this.ds_frmValidintrt.addEventHandler("onrowposchanged",this.ds_frmValidintrt_onrowposchanged,this);this.addEventHandler("oninit",this.FRM02010800_oninit,this);this.addEventHandler("onload",this.FRM02010800_onload,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.grd_frmIntrtChange.addEventHandler("oncellclick",this.Div00_grd_frmDelngTy_oncellclick,this);this.Div00.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);this.Div00.btn_delete.addEventHandler("onclick",this.Div00_btn_delete_onclick,this);};this.loadIncludeScript("FRM02010800.xfdl");};})();