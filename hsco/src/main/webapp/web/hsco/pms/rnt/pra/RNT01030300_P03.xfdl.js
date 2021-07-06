﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01030300_P03");this.set_classname("RNT01070300_P03");this.set_titletext("재계약정보 생성/삭제");this._setFormPosition(0,0,351,139);}this.style.set_border("0 none #808080ff");_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"stdrMt\" type=\"STRING\" size=\"256\"/><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentReCntrctCnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","0",null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","16","17","150","21",null,null,this);_a.set_taborder("8");_a.set_text("생성/삭제 정보");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","40",null,"5","0",null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","10","15",null,null,"19",this);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","336","10","15",null,null,"19",this);_a.set_taborder("18");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1","124",null,"15","1",null,this);_a.set_taborder("19");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_delete","absolute","234","15","50","25",null,null,this);_a.set_taborder("27");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","45",null,"79","15",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.style.set_background("transparent");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","0","52","321","27",null,null,this.div_WORK);_a.set_taborder("141");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON04","absolute","0","52","100","27",null,null,this.div_WORK);_a.set_taborder("142");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static19","absolute","0","0","321","27",null,null,this.div_WORK);_a.set_taborder("145");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON06","absolute","0","0","100","27",null,null,this.div_WORK);_a.set_taborder("146");_a.set_text("기준월");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static20","absolute","0","26","321","27",null,null,this.div_WORK);_a.set_taborder("147");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_TLPHON07","absolute","0","26","100","27",null,null,this.div_WORK);_a.set_taborder("148");_a.set_text("주택구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_houseSe","absolute","102","29","216","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_houseSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("search");_a.set_cssclass("cmb_WF_Essential");_a=new Div("cal_stdrMt","absolute","102","3","86","21",null,null,this.div_WORK);_a.set_taborder("0");_a.set_text("Div00");_a.style.set_border("0 none #808080ff");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","102","55","216","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_rentHouseCodeList");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_type("search");_a=new Button("btn_create","absolute","182","15","50","25",null,null,this);_a.set_taborder("31");_a.set_text("생성");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","286","15","50","25",null,null,this);_a.set_taborder("32");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Layout("default","",0,79,this.div_WORK,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.style.set_background("transparent");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",351,139,this,function(_b){_b.set_classname("RNT01070300_P03");_b.set_titletext("재계약정보 생성/삭제");_b.style.set_border("0 none #808080ff");});this.addLayout(_a.name,_a);_a=new BindItem("item3","div_WORK.cmb_houseSe","value","ds_cond01","houseSe");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.cmb_rentHouseCode","value","ds_cond01","rentHouseCode");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("RNT01030300_P03.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT01030300_P03.xfdl",function(){this.RNT01030300_P03_oninit=function(_a,_b){this.ds_cond00.addRow();this.ds_cond01.addRow();this.div_WORK.cal_stdrMt.msk_mon.style.set_border("1 solid #f1b54dff ");this.div_WORK.cal_stdrMt.btn_open.style.set_background_image("theme://images\\cal_WF_Essential_O.png");};this.RNT01030300_P03_onload=function(_a,_b){var _c=this.parent.objParam;this.ds_houseSeList.copyData(_c.ds_houseSeList);this.ds_rentHouseCodeList.copyData(_c.ds_rentHouseCodeList);this.div_WORK.cal_stdrMt.setValue(_c.stdrMt);this.div_WORK.cmb_houseSe.set_value(_c.houseSe);this.div_WORK.cmb_rentHouseCode.set_value(_c.rentHouseCode);if(_c.rentHouseCode==undefined){this.div_WORK.cmb_rentHouseCode.set_index(0);}};this.div_WORK_cmb_houseSe_onitemchanged=function(_a,_b){this.ds_cond00.setColumn(0,"HOUSE_SE",this.div_WORK.cmb_houseSe.value);this.fn_transaction("rentHouseCode");};this.btn_create_onclick=function(_a,_b){var _c=this.div_WORK.cal_stdrMt.getValue();var _d=this.div_WORK.cmb_houseSe.value;this.ds_cond01.setColumn(0,"stdrMt",_c);if(this.comUtils.isNull(_c)){this.alert("기준월 항목을 입력하세요.");return;}if(this.comUtils.isNull(_d)){this.alert("주택구분 항목을 선택하세요.");return;}this.fn_transaction("rentReCntrctCnt");};this.btn_delete_onclick=function(_a,_b){var _c=this.div_WORK.cal_stdrMt.getValue();var _d=this.div_WORK.cmb_houseSe.value;this.ds_cond01.setColumn(0,"stdrMt",_c);if(this.comUtils.isNull(_c)){this.alert("기준월 항목을 입력하세요.");return;}if(this.comUtils.isNull(_d)){this.alert("주택구분 항목을 선택하세요.");return;}var _e=_c.substring(0,4)+"년 "+_c.substring(4,6)+"월 ";_e+="재계약정보(미계약자료)를 삭제하시겠습니까?";if(this.confirm(_e)){this.fn_transaction("rentReCntrctAllD");}};this.btn_close_onclick=function(_a,_b){this.close();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "rentHouseCode":var _c="/hsco/pms/rnt/pra/RNT00000000/rentHouseCodeList.do";var _d="input1=ds_cond00";var _e="ds_rentHouseCodeList=output1";break;case "rentReCntrctCnt":var _c="/hsco/pms/rnt/pra/RNT01030300/rentReCntrctCnt.do";var _d="input1=ds_cond01";var _e="ds_rentReCntrctCnt=output1";break;case "rentReCntrctAllC":var _c="/hsco/pms/rnt/pra/RNT01030300/rentReCntrctAllC.do";var _d="input1=ds_cond01";var _e="";break;case "rentReCntrctAllD":var _c="/hsco/pms/rnt/pra/RNT01030300/rentReCntrctAllD.do";var _d="input1=ds_cond01";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "rentHouseCode":var _e=this.parent.objParam;var _f=this.ds_rentHouseCodeList.insertRow(0);this.ds_rentHouseCodeList.setColumn(_f,'CODE','');this.ds_rentHouseCodeList.setColumn(_f,'CODE_NM','전체');this.ds_rentHouseCodeList.setColumn(_f,'FULL_CODE_NM','전체');this.div_WORK.cmb_rentHouseCode.set_value('');break;case "rentReCntrctCnt":var _g=this.div_WORK.cal_stdrMt.msk_mon.value;var _h=this.ds_rentReCntrctCnt.getColumn(0,"CNT");var _i=_g.substring(0,4)+"년 "+_g.substring(4,6)+"월 ";if(_h==1){_i+="재계약정보(미계약자료)가 삭제됩니다. \\\\n";}else{_i+="재계약정보가 없습니다. \\\\n";}_i+="재계약정보를 생성하시겠습니까?";if(this.confirm(_i)){this.fn_transaction("rentReCntrctAllC");}break;case "rentReCntrctAllC":alert("재계약정보 생성이 완료되었습니다.");this.close('S');break;case "rentReCntrctAllD":alert("자료삭제가 정상적으로 완료되었습니다.");this.close('S');break;}}else{this.fn_callback_message(_a,_b,_c);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01030300_P03_oninit,this);this.addEventHandler("onload",this.RNT01030300_P03_onload,this);this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);this.div_WORK.cmb_houseSe.addEventHandler("onitemchanged",this.div_WORK_cmb_houseSe_onitemchanged,this);this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT01030300_P03.xfdl");this.loadPreloadList();};})();