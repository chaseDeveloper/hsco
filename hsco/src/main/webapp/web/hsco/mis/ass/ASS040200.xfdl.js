﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ASS040100");this.set_classname("ASS040100");this.set_titletext("재물조사현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ODR</Col><Col id=\"msgId\">재물조사</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_list",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QY\" type=\"INT\" size=\"256\"/><Column id=\"ACINS_CO\" type=\"INT\" size=\"256\"/><Column id=\"MORE\" type=\"INT\" size=\"256\"/><Column id=\"LESS\" type=\"INT\" size=\"256\"/><Column id=\"QY2\" type=\"INT\" size=\"256\"/><Column id=\"ACINS_CO2\" type=\"INT\" size=\"256\"/><Column id=\"MORE2\" type=\"INT\" size=\"256\"/><Column id=\"LESS2\" type=\"INT\" size=\"256\"/><Column id=\"PRPTY_MDAT\" type=\"INT\" size=\"256\"/><Column id=\"DISUSE_CONFM_CNT\" type=\"INT\" size=\"256\"/><Column id=\"DISUSE_PROCESS_CNT\" type=\"INT\" size=\"256\"/><Column id=\"MANAGE_CNVRS_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condList",this);_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR\" type=\"STRING\" size=\"256\"/><Column id=\"PPTY_INVG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("26");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("27");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","13","735","0",null,this);_a.set_taborder("28");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62","1031","5",null,null,this);_a.set_taborder("29");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_sttus","absolute","1","43","316","19",null,null,this);_a.set_taborder("30");_a.set_text("재물조사 실시 현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_excelDn00","absolute",null,"43","25","19","28",null,this);_a.set_taborder("31");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("32");_a.set_text("Div01");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0",null,"5","0",null,this.div_search);_a.set_taborder("168");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0",null,null,"5","0","0",this.div_search);_a.set_taborder("169");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("176");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","14","5","71","21",null,null,this.div_search);_a.set_taborder("177");_a.set_text("재물조사");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_","absolute","79","5","300","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb__innerdataset",this.div_search.cmb_);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("178");_a.set_codecolumn("ODR");_a.set_datacolumn("PPTY_INVG_NM");_a.set_innerdataset("ds_condList");_a.set_cssclass("cmb_WF_Essential");_a=new Static("sta_de","absolute","391","5",null,"21","486",null,this.div_search);_a.set_taborder("179");_a.set_text("확정일자 : ");_a.style.set_color("red");_a.style.set_font("9 Gulim bold");this.div_search.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","64",null,null,"28","0",this);_a.set_taborder("33");_a.set_binddataset("ds_list");_a.set_summarytype("top");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서명\"/><Cell col=\"1\" colspan=\"4\" text=\"expr:comp.parent.fn_expr('lastYear');\"/><Cell col=\"5\" colspan=\"4\" text=\"expr:comp.parent.fn_expr('nowYear');\"/><Cell col=\"9\" colspan=\"4\" text=\"후속 조치사항\"/><Cell row=\"1\" col=\"1\" text=\"재물수\"/><Cell row=\"1\" col=\"2\" text=\"실사계\"/><Cell row=\"1\" col=\"3\" text=\"초과\"/><Cell row=\"1\" col=\"4\" text=\"부족\"/><Cell row=\"1\" col=\"5\" text=\"재물수\"/><Cell row=\"1\" col=\"6\" text=\"실사계\"/><Cell row=\"1\" col=\"7\" text=\"초과\"/><Cell row=\"1\" col=\"8\" text=\"부족\"/><Cell row=\"1\" col=\"9\" text=\"재물조정\"/><Cell row=\"1\" col=\"10\" text=\"불용완료\"/><Cell row=\"1\" col=\"11\" text=\"불용예정\"/><Cell row=\"1\" col=\"12\" text=\"관리전환\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:DEPT_NM\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:QY\" mask=\"###,###,###,###,##0\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:ACINS_CO\" mask=\"###,###,###,###,##0\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:MORE\" mask=\"###,###,###,###,##0\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:LESS\" mask=\"###,###,###,###,##0\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:QY2\" mask=\"###,###,###,###,##0\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:ACINS_CO2\" mask=\"###,###,###,###,##0\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:MORE2\" mask=\"###,###,###,###,##0\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:LESS2\" mask=\"###,###,###,###,##0\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:PRPTY_MDAT\" mask=\"###,###,###,###,##0\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:DISUSE_CONFM_CNT\" mask=\"###,###,###,###,##0\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:DISUSE_PROCESS_CNT\" mask=\"###,###,###,###,##0\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:MANAGE_CNVRS_CNT\" mask=\"###,###,###,###,##0\"/></Band><Band id=\"summary\"><Cell text=\"총 계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum('QY')\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('ACINS_CO')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('MORE')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('LESS')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('QY2')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('ACINS_CO2')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('MORE2')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('LESS2')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('PRPTY_MDAT')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('DISUSE_CONFM_CNT')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('DISUSE_PROCESS_CNT')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('MANAGE_CNVRS_CNT')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1025,41,this.div_search,function(_c){_c.set_taborder("32");_c.set_text("Div01");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("ASS040100");_c.set_titletext("재물조사현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_","value","ds_cond","ODR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ASS040200.xfdl","lib::comInclude.xjs");this.addIncludeScript("ASS040200.xfdl","mis_lib::misUtil.xjs");this.registerScript("ASS040200.xfdl",function(){this.ASS040100_oninit=function(_a,_b){};this.ASS040100_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_transaction("select1");};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_list.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("select2");};this.fn_transaction=function(_a){switch(_a){case "select1":var _b="hsco/mis/ass/ASS040200/select1.do";var _c="";var _d="ds_condList=output1";break;case "select2":var _b="hsco/mis/ass/ASS040200/select2.do";var _c="input1=ds_cond";var _d="ds_list=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "select1":this.div_search.cmb.set_index(0);var _d=this.ds_cond.getColumn(0,"YEAR");var _e=this.ds_cond.getColumn(0,"STDR_DE");var _f=this.ds_cond.getColumn(0,"ODR");break;case "select2":var _f=this.ds_cond.getColumn(0,"ODR");var _g=this.ds_condList.findRow("ODR",_f);var _h=this.ds_condList.getColumn(_g,"TEXT");this.sta_sttus.set_text(_h);break;}}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="ODR"){var _c=_b.newvalue;var _d=this.ds_condList.findRow("ODR",_c);var _e=this.ds_condList.getColumn(_d,"YEAR");var _f=this.ds_condList.getColumn(_d,"STDR_DE");var _c=this.ds_condList.getColumn(_d,"ODR");this.ds_cond.setColumn(0,"YEAR",_e);this.ds_cond.setColumn(0,"STDR_DE",_f);this.ds_cond.setColumn(0,"ODR",_c);var _g=_f.substr(0,4)+". "+_f.substr(4,2)+". "+_f.substr(6,2);this.div_search.sta_de.set_text("확정일자 : "+_g);this.fn_search();}};this.fn_expr=function(_a){var _b=this.ds_cond.getColumn(0,"YEAR");var _c="";if(_a=="lastYear"){_c=nexacro.toNumber(_b-1)+"년";}if(_a=="nowYear"){_c=_b+"년";}return _c;};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.ASS040100_onload,this);this.addEventHandler("oninit",this.ASS040100_oninit,this);this.btn_excelDn00.addEventHandler("onclick",this.btn_excelDn_onclick,this);};this.loadIncludeScript("ASS040200.xfdl");};})();