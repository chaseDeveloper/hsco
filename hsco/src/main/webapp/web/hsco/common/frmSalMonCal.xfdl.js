﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("frmSalMonCal");this.set_classname("frmSalMonCal");this.set_titletext("급여월력");this._setFormPosition(0,0,84,21);}_a=new Button("Button11","absolute","15","282","40","47",null,null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Calendarmm12_S");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","63","296","151","18",null,null,this);_a.set_taborder("2");_a.set_text("* Selected 됐을 때 ");_a.set_cssclass("sta_GID_txt02");_a.style.set_color("darkred");_a.set_visible("false");this.addChild(_a.name,_a);_a=new MaskEdit("msk_mon","absolute","0","0","84","21",null,null,this);_a.set_taborder("3");_a.set_type("string");_a.set_mask("####-##");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Button("btn_open","absolute","63","0","21","21",null,null,this);_a.set_taborder("4");_a.style.set_background("transparent URL('theme://images/btn_CalDrop_D.png') center middle");_a.style.set_border("0 solid #8d8d8dff");this.addChild(_a.name,_a);_a=new PopupDiv("pdiv_monCal","absolute","0","21","189","244",null,null,this);_a.set_text("PopupDiv00");_a.set_visible("false");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","0","0","189","241",null,null,this.pdiv_monCal);_a.set_taborder("0");_a.set_scrollbars("none");_a.set_cssclass("div_WF_Calendar");this.pdiv_monCal.addChild(_a.name,_a);_a=new Button("btn_feb","absolute","52","35","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("59");_a.set_cssclass("btn_WF_Calendarmm2");_a.getSetter("month").set("2");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_mar","absolute","95","35","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("60");_a.set_cssclass("btn_WF_Calendarmm3");_a.getSetter("month").set("3");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_apr","absolute","138","35","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("61");_a.set_cssclass("btn_WF_Calendarmm4");_a.getSetter("month").set("4");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_jun","absolute","52","85","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("62");_a.set_cssclass("btn_WF_Calendarmm6");_a.getSetter("month").set("6");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_jul","absolute","95","85","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("63");_a.set_cssclass("btn_WF_Calendarmm7");_a.getSetter("month").set("7");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_aug","absolute","138","85","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("64");_a.set_cssclass("btn_WF_Calendarmm8");_a.getSetter("month").set("8");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_oct","absolute","52","135","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("65");_a.set_cssclass("btn_WF_Calendarmm10");_a.getSetter("month").set("10");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_nov","absolute","95","135","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("66");_a.set_cssclass("btn_WF_Calendarmm11");_a.getSetter("month").set("11");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_dec","absolute","138","135","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("67");_a.set_cssclass("btn_WF_Calendarmm12");_a.getSetter("month").set("12");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Static("sta_year","absolute","0","-1","187","27",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("68");_a.set_text("2015");_a.set_cssclass("sta_WF_Calendaryy");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_next","absolute","163","0","24","24",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("69");_a.set_cssclass("btn_WF_CalendarNext");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_prev","absolute","0","0","24","24",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("70");_a.set_cssclass("btn_WF_CalendarPrev");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_sep","absolute","9","135","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("71");_a.set_cssclass("btn_WF_Calendarmm9");_a.getSetter("month").set("9");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_may","absolute","9","85","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("72");_a.set_cssclass("btn_WF_Calendarmm5");_a.getSetter("month").set("5");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_jan","absolute","9","35","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("73");_a.set_cssclass("btn_WF_Calendarmm1");_a.getSetter("month").set("1");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Button("btn_13","absolute","9","186","40","47",null,null,this.pdiv_monCal.div_monCal);_a.set_taborder("74");_a.set_text("13");_a.set_cssclass("btn_WF_Calendarmm13");_a.style.set_background("#f8f8f8ff");_a.style.set_border("1 solid #d3d3d3ff");_a.style.set_bordertype("normal 0 0");_a.style.set_font("bold 11 바탕");_a.style.set_gradation("none 0,0 white 100,100 black");_a.getSetter("month").set("13");this.pdiv_monCal.div_monCal.addChild(_a.name,_a);_a=new Layout("default","",189,241,this.pdiv_monCal.div_monCal,function(_b){_b.set_taborder("0");_b.set_scrollbars("none");_b.set_cssclass("div_WF_Calendar");});this.pdiv_monCal.div_monCal.addLayout(_a.name,_a);_a=new Layout("default","",189,244,this.pdiv_monCal,function(_b){_b.set_text("PopupDiv00");_b.set_visible("false");_b.set_scrollbars("none");});this.pdiv_monCal.addLayout(_a.name,_a);_a=new Layout("default","",84,21,this,function(_b){_b.set_classname("frmSalMonCal");_b.set_titletext("급여월력");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("frmSalMonCal.xfdl","lib::comInclude.xjs");this.registerScript("frmSalMonCal.xfdl",function(){this.objCal=this.pdiv_monCal.div_monCal;this._form=null;this.onChange=null;this.essential=false;this.DEFAULT_YYYYMM=null;this.DEFAULT_YYYY=null;this.DEFAULT_MM=null;this.value=null;this.ON_CHANGE=false;this.frmMonCal_oninit=function(_a,_b){};this.frmMonCal_onload=function(_a,_b){};this.div_monCal_btn_prev_onclick=function(_a,_b){var _c=parseInt(this.objCal.sta_year.text);this.objCal.sta_year.set_text( --_c);};this.div_monCal_btn_next_onclick=function(_a,_b){var _c=parseInt(this.objCal.sta_year.text);this.objCal.sta_year.set_text( ++_c);};this.onmonthclick=function(_a,_b){var _c=this.objCal.sta_year.text;var _d=_a.month.toString().padLeft(2,"0");var _e=_c+_d;this.setValue(_e);this.pdiv_monCal.closePopup();};this.btn_open_onclick=function(_a,_b){var _c=system.clientToScreenX(this,0-(system.clientToScreenX(application.gv_menuFrame.form,0)));var _d=system.clientToScreenY(this,0-(system.clientToScreenY(application.gv_topFrame.form,0))+this.getOffsetHeight());this.pdiv_monCal.trackPopup(_c,_d);};this.pdiv_monCal_onpopup=function(_a,_b){var _c=_a.parent.msk_mon.value;this.fn_initMonth(_c);};this.msk_mon_onchanged=function(_a,_b){var _c=_b.prevalue;var _d=_b.postvalue;var _e=null;if(this.comUtils.isNullEmpty(_d)){_e=_d;}else{var _f=this._isValidData(_d);if(!_f){_e=_c;}else{_e=_d;}}this.setValue(_e);this.ON_CHANGE=false;};this.fn_initMonth=function(_a){var _b=null;var _c=null;if(this.comUtils.isNullEmpty(_a)){_b=this.DEFAULT_YYYY;_c=this.DEFAULT_MM;}else{_b=_a.toString().substr(0,4);_c=_a.toString().substr(4,2);}this.objCal.sta_year.set_text(_b);switch(_c){case "01":this.objCal.btn_jan.setFocus();break;case "02":this.objCal.btn_feb.setFocus();break;case "03":this.objCal.btn_mar.setFocus();break;case "04":this.objCal.btn_apr.setFocus();break;case "05":this.objCal.btn_may.setFocus();break;case "06":this.objCal.btn_jun.setFocus();break;case "07":this.objCal.btn_jul.setFocus();break;case "08":this.objCal.btn_aug.setFocus();break;case "09":this.objCal.btn_sep.setFocus();break;case "10":this.objCal.btn_oct.setFocus();break;case "11":this.objCal.btn_nov.setFocus();break;case "12":this.objCal.btn_dec.setFocus();break;}};this.getValue=function(_a){if(this.comUtils.isNullEmpty(this.msk_mon.value)){return null;}if(this.comUtils.isNullEmpty(_a)){_a="YYYYMM";}var _b;switch(_a.toUpperCase()){case "YYYYMM":_b=this.msk_mon.value.toString();break;case "YYYY":_b=this.msk_mon.value.toString().substr(0,4);break;case "MM":_b=this.msk_mon.value.toString().substr(4,2);break;case "TEXT":_b=this.msk_mon.text;break;}return _b;};this.setValue=function(_a){this.msk_mon.set_value(_a);this.set_value(_a);if(this.DEFAULT_YYYYMM==null&&!this.comUtils.isNullEmpty(_a)){this._setDefaultValue(_a);}};this.set_value=function(_a){if(this.value!=_a){this.set_text(_a);this.value=_a;}};this.set_essential=function(_a){this.essential=_a;var _b=_a==true?"msk_WF_Essential":"";this.msk_mon.set_cssclass(_b);};this.set_enable2=function(_a){this.msk_mon.set_enable(_a);};this._setDefaultValue=function(_a){this.DEFAULT_YYYYMM=_a;this.DEFAULT_YYYY=_a.substr(0,4);this.DEFAULT_MM=_a.substr(4,2);};this._isValidData=function(_a){var _b=/^(19|20)\d{2}(0[1-9]|1[0123])$/;return _b.test(_a);};this.fn_setBind=function(_a,_b){var _c=new BindItem();_c.init("BIND_YYYYMM_01","msk_mon","value",_a,_b);this.addChild("BIND_YYYYMM_01",_c);_c.bind();var _d=this._getLocalValue();this.setValue(_d);};this.fn_setBindValue=function(_a,_b,_c,_d,_e){this._form=_a;var _f=null;if(!this.comUtils.isNullEmpty(_e)){var _g=typeof _e;if(_g=="string"){_f=_e;}else{_f=_e&&_e["value"]?_e["value"]:null;this.onChange=_e&&_e["onchange"]?_e["onchange"]:null;var _h=_e&&_e["essential"]?_e["essential"]:false;this.set_essential(_h);}}var _i=_b?_b+".msk_mon":this.id+".msk_mon";var _j=new BindItem();var _k="BIND_YYYYMM_"+_d;_j.init(_k);_j.init(_k,_i,"value",_c,_d);_a.addChild(_k,_j);_j.bind();var _l=this;this.msk_mon.on_change_bindSource=function(_n,_o,_p,_q,_r){if(_n=="value"){var _s=_o.getColumn(_p,_q);var _t=_l._isValidData(_s);if(!_t){_l.ON_CHANGE=false;}else{_l.ON_CHANGE=true;}this._setValue(_s);_l.set_value(_s);_l.fn_onChange();return true;}return false;};var _m=null;if(this.comUtils.isNullEmpty(_f)){_m=this._getLocalValue();}else{_m=_f;}this.setValue(_m);};this.fn_onChange=function(){if(this.ON_CHANGE){if(this.onChange!=null){if(typeof this.onChange=="function"){this.onChange.call(this._form,this,this.value);}else{this._form[this.onChange](this,this.value);}this.ON_CHANGE=false;}}};this._getLocalValue=function(){var _a=this.dateUtils.today();return _a.toString().substr(0,6);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.frmMonCal_oninit,this);this.addEventHandler("onload",this.frmMonCal_onload,this);this.msk_mon.addEventHandler("onchanged",this.msk_mon_onchanged,this);this.btn_open.addEventHandler("onclick",this.btn_open_onclick,this);this.pdiv_monCal.addEventHandler("onpopup",this.pdiv_monCal_onpopup,this);this.pdiv_monCal.div_monCal.btn_feb.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_mar.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_apr.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_jun.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_jul.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_aug.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_oct.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_nov.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_dec.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_next.addEventHandler("onclick",this.div_monCal_btn_next_onclick,this);this.pdiv_monCal.div_monCal.btn_prev.addEventHandler("onclick",this.div_monCal_btn_prev_onclick,this);this.pdiv_monCal.div_monCal.btn_sep.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_may.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_jan.addEventHandler("onclick",this.onmonthclick,this);this.pdiv_monCal.div_monCal.btn_13.addEventHandler("onclick",this.onmonthclick,this);};this.loadIncludeScript("frmSalMonCal.xfdl");};})();