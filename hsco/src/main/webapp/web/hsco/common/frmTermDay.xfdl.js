﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("frmTermDay");this.set_classname("frmTermDay");this.set_titletext("기간 설정");this._setFormPosition(0,0,229,21);}_a=new Calendar("cal_from","absolute","0","0","108","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("4");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Static("sta_gubun","absolute","110","0","17","21",null,null,this);_a.set_taborder("5");_a.set_text("~");this.addChild(_a.name,_a);_a=new Calendar("cal_to","absolute","121","0","108","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("6");_a.set_value("20151010");_a.set_dateformat("yyyy-MM-dd");_a=new Button("btn_openFrom","absolute","87","0","21","21",null,null,this);_a.set_taborder("1");_a.style.set_background("transparent center middle");_a.style.set_border("0 solid #8d8d8dff");this.addChild(_a.name,_a);_a=new Button("btn_openTo","absolute","208","0","21","21",null,null,this);_a.set_taborder("7");_a.style.set_background("transparent center middle");_a.style.set_border("0 solid #8d8d8dff");this.addChild(_a.name,_a);_a=new PopupDiv("pdiv_term","absolute","0","21","352","190",null,null,this);_a.set_visible("false");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Calendar("cal_from","absolute","0","0","168","164",null,null,this.pdiv_term);this.pdiv_term.addChild(_a.name,_a);_a.set_taborder("0");_a.set_type("monthonly");_a.set_dateformat("yyyy-MM-dd");_a.set_value("20150808");_a=new Calendar("cal_to","absolute","184","0","168","164",null,null,this.pdiv_term);this.pdiv_term.addChild(_a.name,_a);_a.set_taborder("1");_a.set_value("20150808");_a.set_type("monthonly");_a.set_dateformat("yyyy-MM-dd");_a=new Button("btn_ok","absolute","156","169","40","21",null,null,this.pdiv_term);_a.set_taborder("2");_a.set_text("확인");this.pdiv_term.addChild(_a.name,_a);_a=new Layout("default","",352,190,this.pdiv_term,function(_b){_b.set_visible("false");_b.set_scrollbars("none");});this.pdiv_term.addLayout(_a.name,_a);_a=new Layout("default","",229,21,this,function(_b){_b.set_classname("frmTermDay");_b.set_titletext("기간 설정");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("frmTermDay.xfdl","lib::comInclude.xjs");this.registerScript("frmTermDay.xfdl",function(){this.frmTermDay_oninit=function(_a,_b){};this.frmTermDay_onload=function(_a,_b){};this.pdiv_term_onpopup=function(_a,_b){this.pdiv_term.cal_from.set_value(this.cal_from.value);this.pdiv_term.cal_to.set_value(this.cal_to.value);};this.btn_openFrom_onclick=function(_a,_b){var _c;var _d;var _e=system.clientToScreenX(this,0-(system.clientToScreenX(application.gv_menuFrame.form,0)));var _f=system.clientToScreenY(this,0-(system.clientToScreenY(application.gv_topFrame.form,0))+this.getOffsetHeight());this.pdiv_term.trackPopup(_e,_f);};this.btn_openTo_onclick=function(_a,_b){var _c;var _d;var _e=system.clientToScreenX(this,0-(system.clientToScreenX(application.gv_menuFrame.form,0)));var _f=system.clientToScreenY(this,0-(system.clientToScreenY(application.gv_topFrame.form,0))+this.getOffsetHeight());this.pdiv_term.trackPopup(_e,_f);};this.pdiv_term_btn_ok_onclick=function(_a,_b){var _c=this.pdiv_term.cal_from.value;var _d=this.pdiv_term.cal_to.value;this.cal_from.set_value(_c);this.cal_to.set_value(_d);this.pdiv_term.closePopup();};this.getTerm=function(){var _a={from:this.cal_from.value,to:this.cal_to.value};return _a;};this.setTerm=function(_a,_b){this.cal_from.set_value(_a);this.cal_to.set_value(_b);};this.fn_setBind=function(_a,_b,_c){var _d=this.cal_from.value;var _e=this.cal_to.value;var _f=new BindItem();var _g=new BindItem();_f.init("BIND_FROMDATE_01","cal_from","value",_a,_b);this.addChild("BIND_FROMDATE_01",_f);_f.bind();_g.init("BIND_TODATE_01","cal_to","value",_a,_c);this.addChild("BIND_TODATE_01",_g);_g.bind();this.cal_from.set_value(_d);this.cal_to.set_value(_e);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.frmTermDay_oninit,this);this.addEventHandler("onload",this.frmTermDay_onload,this);this.btn_openFrom.addEventHandler("onclick",this.btn_openFrom_onclick,this);this.btn_openTo.addEventHandler("onclick",this.btn_openTo_onclick,this);this.pdiv_term.addEventHandler("onpopup",this.pdiv_term_onpopup,this);this.pdiv_term.btn_ok.addEventHandler("onclick",this.pdiv_term_btn_ok_onclick,this);};this.loadIncludeScript("frmTermDay.xfdl");};})();