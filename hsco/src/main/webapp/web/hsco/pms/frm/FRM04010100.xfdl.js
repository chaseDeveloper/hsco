﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM04010100");this.set_classname("FRM04010100");this.set_titletext("연계목록관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cntcCycle",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntcTrsmrcvSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_frmCntcList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_CNTC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_TRSMRCV_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTC_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_frmCntcList</Col><Col id=\"colId\">CNTC_TRSMRCV_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">송수신구분</Col></Row><Row><Col id=\"colId\">ENDW_CNTC_ID</Col><Col id=\"compId\">ds_frmCntcList</Col><Col id=\"msgId\">연계아이디</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"compId\">ds_frmCntcList</Col><Col id=\"colId\">CNTC_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">연계명</Col></Row><Row><Col id=\"colId\">CNTC_CYCLE</Col><Col id=\"compId\">ds_frmCntcList</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">연계주기</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntcCycleSch",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cntcTrsmrcvSeSch",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","5","77","21",null,null,this.div_search);_a.set_taborder("27");_a.set_text("연계아이디");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_endwCntcId","absolute","92","5","109","21",null,null,this.div_search);_a.set_taborder("28");_a.set_readonly("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","216","5","64","21",null,null,this.div_search);_a.set_taborder("29");_a.set_text("연계주기");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cntcCycle","absolute","280","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("30");_a.set_innerdataset("@ds_cntcCycleSch");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static01","absolute","405","5","77","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("송수신구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_cntcTrsmrcvSe","absolute","482","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("32");_a.set_innerdataset("@ds_cntcTrsmrcvSeSch");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_frmCntcList","absolute","0","36",null,null,"0","0",this.Div00);_a.set_taborder("13");_a.set_binddataset("ds_frmCntcList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"87\"/><Column size=\"146\"/><Column size=\"173\"/><Column size=\"99\"/><Column size=\"424\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"송수신구분\"/><Cell col=\"2\" edittype=\"none\" text=\"연계아이디\"/><Cell col=\"3\" edittype=\"none\" text=\"연계명\"/><Cell col=\"4\" text=\"연계주기\"/><Cell col=\"5\" text=\"연계내역설명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CNTC_TRSMRCV_SE\" expandshow=\"hide\" combodataset=\"ds_cntcTrsmrcvSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:ENDW_CNTC_ID\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CNTC_NM\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:CNTC_CYCLE\" combodataset=\"ds_cntcCycle\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CNTC_DTLS\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.Div00);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.Div00);_a.set_taborder("15");_a.set_text("연계목록내역");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.Div00);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_b){_b.set_taborder("3");_b.set_text("Div00");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM04010100");_b.set_titletext("연계목록관리");});this.addLayout(_a.name,_a);_a=new BindItem("item10","div_search.edt_endwCntcId","value","ds_frmEndwInDecsn","ITNC_MAN_ID");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item23","div_search.cmb_cntcCycle","value","ds_frmEndwInDecsn","INCME_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_cntcTrsmrcvSe","value","ds_frmEndwInDecsn","INCME_SE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FRM04010100.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM04010100.xfdl",function(){this.FRM04010100_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM04010100_onload=function(_a,_b){this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_frmCmmCode(this.ds_cntcCycleSch,"전체",{grpCode:"FRM011"});this.fn_get_frmCmmCode(this.ds_cntcTrsmrcvSeSch,"전체",{grpCode:"FRM010"});this.fn_get_frmCmmCode(this.ds_cntcCycle,"",{grpCode:"FRM011"});this.fn_get_frmCmmCode(this.ds_cntcTrsmrcvSe,"",{grpCode:"FRM010"});};this.fn_search=function(){this.ds_frmCntcList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("selectFrmCntcList");};this.fn_insert=function(){var _a=this.ds_frmCntcList.addRow();this.fn_snInit();};this.fn_delete=function(){this.ds_frmCntcList.deleteRow(this.ds_frmCntcList.rowposition);this.fn_snInit();};this.fn_snInit=function(){var _a=this.ds_frmCntcList.getRowCount();for(i=0;i<_a;i++ ){this.ds_frmCntcList.setColumn(i,"SN",i+1);}};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_frmCntcList,this.ds_validation)==false){return;}if(this.ds_frmCntcList.isUpdated()==true){if(this.gfn_message("comm.행위여부","저장")){this.fn_transaction("saveFrmCntcList");}else{return;}}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectFrmCntcList":var _c="/hsco/pms/frm/FRM04010100/selectFrmCntcList.do";var _d="input1=ds_cond00";var _e="ds_frmCntcList=output1";break;case "saveFrmCntcList":var _c="/hsco/pms/frm/FRM04010100/saveFrmCntcList.do";var _d="input1=ds_frmCntcList:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){case "saveFrmCntcList":this.fn_search();break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM04010100_oninit,this);this.addEventHandler("onload",this.FRM04010100_onload,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("FRM04010100.xfdl");};})();