﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02010600");this.set_classname("FRM02010600");this.set_titletext("계좌정보관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_frmEndwAcnut",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_FNLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"256\"/><Column id=\"INCME_EXPNDTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUT_PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"ESTBL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FNLT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_incmeExpndtrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미사용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_schVal",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INCME_EXPNDTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_FNLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNLT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INCME_EXPNDTR_SE\"/><Col id=\"USE_AT\"/><Col id=\"ENDW_FNLT_CODE\"/><Col id=\"SPOT_CODE\"/><Col id=\"FNLT_NM\"/><Col id=\"SPOT_NM\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_popRtn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ENDW_FNLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNLT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_incmeExpndtrSeGrd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">수입</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">지출</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">공용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_popRtn00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ENDW_FNLT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNLT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_frmEndwAcnut</Col><Col id=\"colId\">ACNUTNO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">계좌번호</Col></Row><Row><Col id=\"compId\">ds_frmEndwAcnut</Col><Col id=\"colId\">ENDW_FNLT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">기금금융기관코드</Col></Row><Row><Col id=\"compId\">ds_frmEndwAcnut</Col><Col id=\"colId\">SPOT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지점코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","15","5","87","21",null,null,this.div_search);_a.set_taborder("27");_a.set_text("수입지출구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_incmeExpndtrSe","absolute","102","5","137","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("28");_a.set_innerdataset("@ds_incmeExpndtrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_text("전체");_a.set_index("0");_a=new Static("Static00","absolute","254","5","64","21",null,null,this.div_search);_a.set_taborder("29");_a.set_text("사용여부");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_useAt","absolute","318","5","80","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("30");_a.set_value("0");_a.set_text("전체");_a.set_innerdataset("@ds_useAt");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a=new Static("Static01","absolute","413","5","64","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("은행코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_endwfnltCode","absolute","477","5","80","21",null,null,this.div_search);_a.set_taborder("34");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_fnltNm","absolute","559","5","100","21",null,null,this.div_search);_a.set_taborder("35");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dpotNm","absolute","661","5","125","21",null,null,this.div_search);_a.set_taborder("36");_a.set_readonly("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","33",null,null,"28","0",this);_a.set_taborder("3");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_frmEndwAcnut","absolute","0","36",null,null,"0","0",this.Div00);_a.set_taborder("13");_a.set_binddataset("ds_frmEndwAcnut");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"은행명\" expandshow=\"hide\"/><Cell col=\"2\" text=\"지점명\"/><Cell col=\"3\" text=\"계좌번호\"/><Cell col=\"4\" text=\"예금주명\"/><Cell col=\"5\" text=\"계좌용도명\"/><Cell col=\"6\" text=\"개설일자\"/><Cell col=\"7\" text=\"구분\"/><Cell col=\"8\" text=\"사용\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:SN\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FNLT_NM\" expandshow=\"show\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:SPOT_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:ACNUTNO\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" style=\"align:left;\" text=\"bind:DPSTR\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left;\" text=\"bind:ACNUT_PRPOS\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:ESTBL_DE\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:INCME_EXPNDTR_SE\" combodataset=\"ds_incmeExpndtrSeGrd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.Div00);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.Div00);_a.set_taborder("15");_a.set_text("계좌정보");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.Div00);_a.set_taborder("16");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Button("Button67","absolute","535","5","21","21",null,null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_b){_b.set_taborder("3");_b.set_text("Div00");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM02010600");_b.set_titletext("계좌정보관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.cmb_incmeExpndtrSe","value","ds_schVal","INCME_EXPNDTR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_useAt","value","ds_schVal","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.edt_endwfnltCode","value","ds_schVal","ENDW_FNLT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_fnltNm","value","ds_schVal","FNLT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.edt_dpotNm","value","ds_schVal","SPOT_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FRM02010600.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02010600.xfdl",function(){this.FRM02010600_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM02010600_onload=function(_a,_b){this.fn_load_combo();};this.fn_search=function(){this.ds_frmEndwAcnut.clearData();this.fn_transaction("selectFrmEndwAcnut");};this.fn_load_combo=function(){this.fn_get_frmCmmCode(this.ds_incmeExpndtrSe,"전체",{grpCode:"FRM005"});this.fn_get_frmCmmCode(this.ds_incmeExpndtrSeGrd,"",{grpCode:"FRM005"});};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_insert=function(){var _a=this.ds_frmEndwAcnut.addRow();this.fn_snInit();};this.fn_snInit=function(){var _a=this.ds_frmEndwAcnut.getRowCount();for(i=0;i<_a;i++ ){this.ds_frmEndwAcnut.setColumn(i,"SN",i+1);}};this.fn_delete=function(){this.ds_frmEndwAcnut.deleteRow(this.ds_frmEndwAcnut.rowposition);this.fn_snInit();};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_frmEndwAcnut,this.ds_validation)==false){return;}if(this.ds_frmEndwAcnut.isUpdated()==true){if(this.gfn_message("comm.행위여부","저장")){this.fn_transaction("saveFrmEndwAcnut");}else{return;}}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectFrmEndwAcnut":var _c="/hsco/pms/frm/FRM02010600/selectFrmEndwAcnut.do";var _d="input1=ds_schVal";var _e="ds_frmEndwAcnut=output1";break;case "saveFrmEndwAcnut":var _c="/hsco/pms/frm/FRM02010600/saveFrmEndwAcnut.do";var _d="input1=ds_frmEndwAcnut:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){case "saveFrmEndwAcnut":this.fn_search();break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.div_search_Button67_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("popup_emdwFnlt",700,500,"금융기관팝업",_c,"pms_frm::FRM02010400_P01.xfdl","fn_emdwFnltCallback");};this.fn_emdwFnltCallback=function(_a,_b){this.ds_popRtn.loadXML(_b);var _c=this.ds_popRtn.getColumn(0,"ENDW_FNLT_CODE");var _d=this.ds_popRtn.getColumn(0,"FNLT_NM");var _e=this.ds_popRtn.getColumn(0,"SPOT_CODE");var _f=this.ds_popRtn.getColumn(0,"SPOT_NM");this.ds_schVal.setColumn(0,"ENDW_FNLT_CODE",_c);this.ds_schVal.setColumn(0,"FNLT_NM",_d);this.ds_schVal.setColumn(0,"SPOT_CODE",_e);this.ds_schVal.setColumn(0,"SPOT_NM",_f);};this.fn_emdwFnltGrdCallback=function(_a,_b){this.ds_popRtn.loadXML(_b);var _c=this.ds_popRtn.getColumn(0,"ENDW_FNLT_CODE");var _d=this.ds_popRtn.getColumn(0,"FNLT_NM");var _e=this.ds_popRtn.getColumn(0,"SPOT_CODE");var _f=this.ds_popRtn.getColumn(0,"SPOT_NM");this.ds_frmEndwAcnut.setColumn(this.ds_frmEndwAcnut.rowposition,"ENDW_FNLT_CODE",_c);this.ds_frmEndwAcnut.setColumn(this.ds_frmEndwAcnut.rowposition,"FNLT_NM",_d);this.ds_frmEndwAcnut.setColumn(this.ds_frmEndwAcnut.rowposition,"SPOT_CODE",_e);this.ds_frmEndwAcnut.setColumn(this.ds_frmEndwAcnut.rowposition,"SPOT_NM",_f);};this.Div00_grd_frmEndwAcnut_onexpanddown=function(_a,_b){if(_b.col==1){var _c={arg_0:this};this.gfn_popup("popup_emdwFnlt",700,500,"금융기관팝업",_c,"pms_frm::FRM02010400_P01.xfdl","fn_emdwFnltGrdCallback");}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM02010600_oninit,this);this.addEventHandler("onload",this.FRM02010600_onload,this);this.div_search.cmb_incmeExpndtrSe.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.div_search.cmb_useAt.addEventHandler("onitemchanged",this.div_search_cmb_houseSe_onitemchanged,this);this.Div00.grd_frmEndwAcnut.addEventHandler("onexpanddown",this.Div00_grd_frmEndwAcnut_onexpanddown,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Button67.addEventHandler("onclick",this.div_search_Button67_onclick,this);};this.loadIncludeScript("FRM02010600.xfdl");};})();