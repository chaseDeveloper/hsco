﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("excelExportPrvonshPopup");this.set_classname("excelExportPrvonshPopup");this.set_titletext("엑셀다운로드사유팝업");this._setFormPosition(0,0,500,300);}_a=new Dataset("ds_data",this);_a.set_firefirstcount("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DWLD_MANAGE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_PRVONSH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DWLD_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_data</Col><Col id=\"colId\">DWLD_PRVONSH_CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">다운로드사유</Col><Col id=\"nlength\">500</Col><Col id=\"lengthChkGb\">LE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"0","0",this);_a.set_taborder("3");_a.set_cssclass("sta_WF_PopupBg");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.getSetter("textAlign").set("center");_a.getSetter("verticalAlign").set("middle");_a.style.set_background("#dc143c3c 20");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.getSetter("textAlign").set("center");_a.getSetter("verticalAlign").set("middle");_a.style.set_background("#dc143c3c 20");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","2",null,"15","0",null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.getSetter("textAlign").set("center");_a.getSetter("verticalAlign").set("middle");_a.style.set_background("#dc143c3c 20");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","15",null,null,"15","0","0",this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.getSetter("textAlign").set("center");_a.getSetter("verticalAlign").set("middle");_a.style.set_background("#dc143c3c 20");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","15","42",null,"5","15",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.getSetter("textAlign").set("center");_a.getSetter("verticalAlign").set("middle");_a.style.set_background("#dc143c3c 20");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","19","197","21",null,null,this);_a.set_taborder("9");_a.set_cssclass("sta_WF_Title01");_a.set_text("엑셀 다운로드 사유");this.addChild(_a.name,_a);_a=new Button("btn_cnfirm","absolute",null,"17","50","25","68",null,this);_a.set_taborder("0");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"17","50","25","15",null,this);_a.set_taborder("1");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","15","47",null,null,"15","15",this);_a.set_taborder("10");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_incomeSeNm","absolute","15","47","90",null,null,"15",this);_a.set_taborder("11");_a.set_text("다운로드\r\n사유");_a.set_cssclass("sta_WF_Label");_a.getSetter("textAlign").set("center");this.addChild(_a.name,_a);_a=new TextArea("txt_excelExportPrvonshPopup","absolute","108","50",null,null,"18","18",this);_a.set_taborder("2");_a.set_cssclass("txt_WF_Essential");_a.set_wordwrap("char");this.addChild(_a.name,_a);_a=new Layout("default","",500,300,this,function(_b){_b.set_classname("excelExportPrvonshPopup");_b.set_titletext("엑셀다운로드사유팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item0","txt_excelExportPrvonshPopup","value","ds_data","DWLD_PRVONSH_CN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("excelExportPrvonshPopup.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("excelExportPrvonshPopup.xfdl","lib::comInclude.xjs");this.registerScript("excelExportPrvonshPopup.xfdl",function(){var _a=this.parent.pUsrId;var _b=this.parent.pFileName;var _c=this.parent.pConectIp;this.excelExportPrvonshPopup_onload=function(_d,_e){this.fn_init_form();this.ds_data.clearData();this.ds_data.addRow();if(!this.comUtils.isNull(_a)){this.ds_data.setColumn(0,"DWLD_USR_ID",_a);}if(!this.comUtils.isNull(_b)){this.ds_data.setColumn(0,"DWLD_FILE_NM",_b+".xlsx");}if(!this.comUtils.isNull(_c)){this.ds_data.setColumn(0,"DWLD_IP",_c);}};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_save=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_data,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveIndvdlinfoDwldHist");}};this.fn_transaction=function(_d){switch(_d){case "saveIndvdlinfoDwldHist":var _e="/cmm/indvdlinfoDwld/saveIndvdlinfoDwldHist.do";var _f="input1=ds_data:U";var _g="";break;}Ex.core.tran(this,_d,_e,_f,_g);};this.fn_callBack=function(_d,_e,_f){if(_e!='0'){this.gfn_callback_message(_d,_e,_f);}else{switch(_d){case "saveIndvdlinfoDwldHist":var _g=new Dataset();_g.copyData(this.ds_data);_g.clearData();var _h=_g.insertRow(0);_g.copyRow(_h,this.ds_data,this.ds_data.rowposition);this.close(_g.saveXML());break;}}};this.btn_cnfirm_onclick=function(_d,_e){this.fn_save();};this.btn_close_onclick=function(_d,_e){this.close();};});this.on_initEvent=function(){this.addEventHandler("onload",this.excelExportPrvonshPopup_onload,this);this.sta_title.addEventHandler("onclick",this.sta_title_onclick,this);this.btn_cnfirm.addEventHandler("onclick",this.btn_cnfirm_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("excelExportPrvonshPopup.xfdl");};})();