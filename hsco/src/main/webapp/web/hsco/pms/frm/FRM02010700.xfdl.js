﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02010700");this.set_classname("FRM02010700");this.set_titletext("총괄기관계정코드매핑");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_frmAcntMapng",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRWK_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_param",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"acntYear\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"acntYear\">2016</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_popRtn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTCTGR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_frmAcntMapng</Col><Col id=\"colId\">ENDW_ACNT_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">기금계정코드</Col><Col id=\"PK\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("7");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0","1031","10",null,null,this);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","6","150","19",null,null,this);_a.set_taborder("9");_a.set_text("총괄기관계정코드");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","21","1031","5",null,null,this);_a.set_taborder("10");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","26",null,null,"28","7",this);_a.set_taborder("11");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_frmAcntMapng","absolute","0","0",null,null,"0","0",this.Div00);_a.set_taborder("17");_a.set_binddataset("ds_frmAcntMapng");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"17\" band=\"head\"/><Row size=\"17\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\"><Cell text=\"총괄기관\"/><Cell row=\"1\" text=\"계정코드\"/></Cell><Cell col=\"2\" rowspan=\"2\"><Cell text=\"총괄기관\"/><Cell row=\"1\" text=\"계정코드명\"/></Cell><Cell col=\"3\" rowspan=\"2\"><Cell text=\"공사\" expandshow=\"hide\"/><Cell row=\"1\" text=\"계정코드\"/></Cell><Cell col=\"4\" rowspan=\"2\"><Cell text=\"공사\"/><Cell row=\"1\" text=\"계정코드명\"/></Cell><Cell col=\"5\" rowspan=\"2\"><Cell text=\"은행\"/><Cell row=\"1\" text=\"계정코드\"/></Cell><Cell col=\"6\" rowspan=\"2\"><Cell text=\"은행\"/><Cell row=\"1\" text=\"계정코드명\"/></Cell></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:SN\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:center;\" text=\"bind:ENDW_ACNT_CODE\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:center;\" text=\"bind:ENDW_ACNT_NM\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:CNTRWK_ACNT_CODE\" expandshow=\"show\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:CNTRWK_ACNT_NM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:BANK_ACNT_CODE\" expandshow=\"show\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:BANK_ACNT_NM\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_b){_b.set_taborder("11");_b.set_text("Div00");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM02010700");_b.set_titletext("총괄기관계정코드매핑");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("FRM02010700.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02010700.xfdl",function(){this.FRM02010700_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM02010700_onload=function(_a,_b){};this.fn_search=function(){this.ds_frmAcntMapng.clearData();this.fn_transaction("selectFrmAcntMapng");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_insert=function(){var _a=this.ds_frmAcntMapng.addRow();this.fn_snInit();};this.fn_snInit=function(){var _a=this.ds_frmAcntMapng.getRowCount();for(i=0;i<_a;i++ ){this.ds_frmAcntMapng.setColumn(i,"SN",i+1);}};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_frmAcntMapng,this.ds_validation)==false){return;}if(this.ds_frmAcntMapng.isUpdated()==true){if(this.gfn_message("comm.행위여부","저장")){this.fn_transaction("saveFrmAcntMapng");}else{return;}}};this.fn_delete=function(){this.ds_frmAcntMapng.deleteRow(this.ds_frmAcntMapng.rowposition);this.fn_snInit();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectFrmAcntMapng":var _c="/hsco/pms/frm/FRM02010700/selectFrmAcntMapng.do";var _d="input1=ds_cond00";var _e="ds_frmAcntMapng=output1";break;case "saveFrmAcntMapng":var _c="/hsco/pms/frm/FRM02010700/saveFrmAcntMapng.do";var _d="input1=ds_frmAcntMapng:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;if(_d){switch(_a){case "saveFrmAcntMapng":this.fn_search();break;}}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.fn_acntCodeCallback=function(_a,_b){this.ds_popRtn.loadXML(_b);var _c=this.ds_popRtn.getColumn(0,"ACNT_CODE");var _d=this.ds_popRtn.getColumn(0,"ACNTCTGR_NM");this.ds_frmAcntMapng.setColumn(this.ds_frmAcntMapng.rowposition,"CNTRWK_ACNT_CODE",_c);this.ds_frmAcntMapng.setColumn(this.ds_frmAcntMapng.rowposition,"CNTRWK_ACNT_NM",_d);};this.fn_acntCodeCallback2=function(_a,_b){this.ds_popRtn.loadXML(_b);var _c=this.ds_popRtn.getColumn(0,"ACNT_CODE");var _d=this.ds_popRtn.getColumn(0,"ACNTCTGR_NM");this.ds_frmAcntMapng.setColumn(this.ds_frmAcntMapng.rowposition,"BANK_ACNT_CODE",_c);this.ds_frmAcntMapng.setColumn(this.ds_frmAcntMapng.rowposition,"BANK_ACNT_NM",_d);};this.Div00_grd_frmAcntMapng_onexpanddown=function(_a,_b){var _c=_a.getBindCellIndex("body","CNTRWK_ACNT_CODE");var _d=_a.getBindCellIndex("body","BANK_ACNT_CODE");if(_b.cell==_c||_b.cell==_d){this.ds_param.setColumn(0,"acntYear",this.comUtils.getClientDate("YYYY"));var _e="";if(_b.cell==_c){_e="fn_acntCodeCallback";}else{_e="fn_acntCodeCallback2";}var _f={arg_0:this,arg_1:this.ds_param};this.gfn_popup("popup_acntCode",351,176,"계정코드팝업",_f,"pms_frm::FRM02010100_P01.xfdl",_e);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM02010700_oninit,this);this.addEventHandler("onload",this.FRM02010700_onload,this);this.Div00.grd_frmAcntMapng.addEventHandler("onexpanddown",this.Div00_grd_frmAcntMapng_onexpanddown,this);};this.loadIncludeScript("FRM02010700.xfdl");};})();