﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020305");this.set_classname("SLS020305");this.set_titletext("주택별공가현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCodeSh</Col><Col id=\"notNull\">N</Col><Col id=\"msgId\">주택코드</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AEA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseAeaSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"AEA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseTyAeaSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"TY_AEA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AEA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_uninhbhousList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"DO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"AEA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_AEA\" type=\"STRING\" size=\"256\"/><Column id=\"CANCL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_MVN_PRARNDE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseCode","absolute","15","5","70","21",null,null,this.div_search);_a.set_taborder("20");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCodeSh","absolute","85","5","282","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("21");_a.set_displaynulltext("선택");_a.set_innerdataset("@ds_houseCodeSh");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a=new Static("sta_schHouseCode00","absolute","382","5","51","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("주택형");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_schHouseCode01","absolute","597","5","38","21",null,null,this.div_search);_a.set_taborder("23");_a.set_text("타입");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseAeaSh","absolute","433","5","149","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("24");_a.set_innerdataset("@ds_houseAeaSh");_a.set_codecolumn("AEA");_a.set_datacolumn("AEA_NM");_a.set_displaynulltext("전체");_a=new Combo("cmb_houseTyAeaSh","absolute","635","5","149","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("25");_a.set_innerdataset("@ds_houseTyAeaSh");_a.set_codecolumn("TY_AEA");_a.set_datacolumn("TY_AEA_NM");_a.set_displaynulltext("전체");_a=new Static("dtl_guide12","absolute","0","32",null,"10","28",null,this);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","41",null,"694","29",null,this);_a.set_taborder("6");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_uninhbhousList","absolute","0","0",null,null,"0","0",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_uninhbhousList");_a.set_autofittype("col");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"237\"/><Column size=\"122\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"주택명\"/><Cell col=\"3\" text=\"동.호수\"/><Cell col=\"4\" text=\"주택형\"/><Cell col=\"5\" text=\"타입\"/><Cell col=\"6\" text=\"해약일자\"/><Cell col=\"7\" text=\"공급금액\"/><Cell col=\"8\" text=\"계약일자\"/><Cell col=\"9\" text=\"입주일자\"/><Cell col=\"10\" text=\"조치내역\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" expr=\"expr:currow + 1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:HOUSE_CODE_NM\"/><Cell col=\"3\" text=\"bind:DO_HO\"/><Cell col=\"4\" text=\"bind:AEA\"/><Cell col=\"5\" text=\"bind:TY_AEA\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:CANCL_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYAMT\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:CNTRCT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RENT_MVN_PRARNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" text=\"bind:RM\" editdisplay=\"display\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;건수 : 0&quot;  : '건수 : #,###'\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("4");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,694,this.div_work,function(_b){_b.set_taborder("6");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS020305");_b.set_titletext("주택별공가현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_houseCodeSh","value","ds_cond00","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cmb_houseAeaSh","value","ds_cond00","AEA");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_houseTyAeaSh","value","ds_cond00","TY_AEA");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS020305.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020305.xfdl",function(){this.SLS020305_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS020305_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){var _a={};_a["USE_AT"]="1";_a["HOUSE_SE"]="S1,S2,S3";this.pmsUtil.getHouseCode(_a,"ds_houseCodeSh");this.pmsUtil.getHouseCode(_a,"ds_houseCode");};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.ds_uninhbhousList.clearData();this.fn_transaction("selectUninhbhousList");};this.fn_save=function(){if(this.ds_uninhbhousList.rowcount>0){if(this.confirm("저장하시겠습니까?")){this.fn_transaction("saveUninhbhousList");}}else{this.alert("선택된 주택별 공가 정보가 없습니다.");}};this.fn_transaction=function(_a){switch(_a){case "selectUninhbhousList":var _b="hsco/pms/sls/hou/ctr/SLS020305/selectUninhbhousList.do";var _c="input1=ds_cond00";var _d="ds_uninhbhousList=output1";break;case "saveUninhbhousList":var _b="hsco/pms/sls/hou/ctr/SLS020305/saveUninhbhousList.do";var _c="input1=ds_uninhbhousList:U";var _d="";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "selectUninhbhousList":break;case "saveUninhbhousList":this.fn_search();break;case "houseCodeSh":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"선택"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseCodeSh,_e);break;case "houseAeaSh":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"전체"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseAeaSh,_e);break;case "houseTyAeaSh":_e={type:this.pmsUtil.PROMPT_ALL,noNullText:"전체"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseTyAeaSh,_e);break;default:break;}}else{switch(_a){case "savetUninhbHousList":this.gfn_callBackMsg(_a,_b,_c);break;default:break;}}};this.fn_comboOnItemChangeHandler=function(_a,_b){var _c=_a.name;var _d=_b?_b.postvalue:_a.value;var _e=_b?_b.postindex:_a.index;var _f={};switch(_c){case "cmb_houseCodeSh":_f["HOUSE_CODE"]=_d;this.pmsUtil.getHouseAea(_f,"ds_houseAeaSh");this.pmsUtil.getHouseTyAea(_f,"ds_houseTyAeaSh");break;default:break;}};});this.on_initEvent=function(){this.ds_uninhbhousList.addEventHandler("onrowposchanged",this.ds_hcntrctrList_onrowposchanged,this);this.addEventHandler("oninit",this.SLS020305_oninit,this);this.addEventHandler("onload",this.SLS020305_onload,this);this.div_search.cmb_houseCodeSh.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);};this.loadIncludeScript("SLS020305.xfdl");};})();