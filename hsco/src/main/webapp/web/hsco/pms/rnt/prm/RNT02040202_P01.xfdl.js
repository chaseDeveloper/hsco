﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040202_P01");this.set_classname("RNT02040202_P01");this.set_titletext("일괄납부요청");this._setFormPosition(0,0,450,150);}_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"STR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_SETLE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ED_SETLE_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("0");_a.set_text("가상계좌 납부요청");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","409","9","20","20",null,null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","212","21",null,null,this);_a.set_taborder("3");_a.set_text("가상계좌 납부요청");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_payRequest","absolute","314","51","70","25",null,null,this);_a.set_taborder("5");_a.set_text("납부요청");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_save");this.addChild(_a.name,_a);_a=new Button("btn_print00","absolute","386","51","49","25",null,null,this);_a.set_taborder("6");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","81","420","27",null,null,this);_a.set_taborder("7");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_TLPHON","absolute","15","81","100","27",null,null,this);_a.set_taborder("8");_a.set_text("청구일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","107","420","27",null,null,this);_a.set_taborder("10");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_TLPHON01","absolute","15","107","100","27",null,null,this);_a.set_taborder("11");_a.set_text("결제기간");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Calendar("cal_rqestDe","absolute","117","84","105","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("14");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_stSetleDe","absolute","117","110","105","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("15");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("cal_edSetleDe","absolute","248","110","105","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("16");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static03","absolute","227","111","16","20",null,null,this);_a.set_taborder("17");_a.set_text("~");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","2","134",null,"15","0",null,this);_a.set_taborder("18");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",450,150,this,function(_b){_b.set_classname("RNT02040202_P01");_b.set_titletext("일괄납부요청");});this.addLayout(_a.name,_a);_a=new BindItem("item6","cal_rqestDe","value","ds_damdangjaList","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","cal_stSetleDe","value","ds_damdangjaList","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","cal_edSetleDe","value","ds_damdangjaList","");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT02040202_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040202_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT02040202_P01.xfdl",function(){this.RNT02040202_P01_oninit=function(_a,_b){};this.RNT02040202_P01_onload=function(_a,_b){this.cal_rqestDe.set_value(this.gfn_today());this.cal_stSetleDe.set_value(this.gfn_today());this.cal_edSetleDe.set_value(this.gfn_dateInfo('NOW_LAST_DATE'));};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_payRequest_onclick=function(_a,_b){this.ds_cond01.addRow();var _c=this.cal_rqestDe.value;var _d=this.cal_stSetleDe.value;var _e=this.cal_edSetleDe.value;var _f=this.gfn_dateInfo('NOW_YEAR_MONTH');this.ds_cond01.setColumn(0,"STR_DE",_f);this.ds_cond01.setColumn(0,"RQEST_DE",_c);this.ds_cond01.setColumn(0,"ST_SETLE_DE",_d);this.ds_cond01.setColumn(0,"ED_SETLE_DE",_e);if(this.confirm("기존 요청자료가 존재할 경우 삭제됩니다. 작업을 진행하시겠습니까?")==true){this.fn_transaction("SP_VA_BILL_UID_ALL");}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "SP_VA_BILL_UID_ALL":var _c="/hsco/pms/rnt/prm/RNT02040202/SP_VA_BILL_UID_ALL.do";var _d="input1=ds_cond01";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "SP_VA_BILL_UID_ALL":this.alert("결제요청이 정상적으로 처리되었습니다.");break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040202_P01_oninit,this);this.addEventHandler("onload",this.RNT02040202_P01_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_payRequest.addEventHandler("onclick",this.btn_payRequest_onclick,this);this.btn_print00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("RNT02040202_P01.xfdl");};})();