﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("GridFilterDiv");this.set_classname("GridFilterDiv");this.set_titletext("그리드필터링");this._setFormPosition(0,0,100,50);}_a=new Dataset("ds_codeOperator",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\"/><Col id=\"nm\">없음</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">equal</Col><Col id=\"nm\">=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">notEqual</Col><Col id=\"nm\">&lt;&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThan</Col><Col id=\"nm\">&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThanOrEqual</Col><Col id=\"nm\">&gt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThan</Col><Col id=\"nm\">&lt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThanOrEqual</Col><Col id=\"nm\">&lt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">startWith</Col><Col id=\"nm\">시작문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">endWith</Col><Col id=\"nm\">종료문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">contains</Col><Col id=\"nm\">포함</Col><Col id=\"group\">String</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_combo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Combo("cmb_operator","absolute","0","62","95","20",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("0");_a.set_tabstop("false");_a.set_innerdataset("@ds_codeOperator");_a.set_codecolumn("cd");_a.set_datacolumn("nm");_a.set_value("equal");_a.set_text("=");_a.set_index("1");_a=new Edit("edt_filter","absolute","1","15","76","20",null,null,this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new PopupDiv("pdiv_combo","absolute","2","131","150","120",null,null,this);_a.set_text("PopupDiv00");_a.set_visible("false");_a.set_scrollbars("none");_a.style.set_border("1px solid gray");this.addChild(_a.name,_a);_a=new Grid("grd_combo","absolute","0","0","150","120",null,null,this.pdiv_combo);_a.set_taborder("0");_a.set_binddataset("ds_combo");_a.set_autoenter("select");_a.set_autoupdatetype("itemselect");_a.set_selecttype("cell");_a.set_autofittype("col");_a.style.set_background("white");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:text\"/></Band></Format></Formats>");this.pdiv_combo.addChild(_a.name,_a);_a=new Calendar("cal_filter","absolute","0","90","94","20",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("4");_a.set_tabstop("false");_a=new ImageViewer("img_filter","absolute","79","15","19","19",null,null,this);_a.set_taborder("5");_a.style.set_background("transparent");_a.style.set_border("0 none #ffffffff");_a.style.set_cursor("hand");this.addChild(_a.name,_a);_a=new Layout("default","",150,120,this.pdiv_combo,function(_b){_b.set_text("PopupDiv00");_b.set_visible("false");_b.set_scrollbars("none");_b.style.set_border("1px solid gray");});this.pdiv_combo.addLayout(_a.name,_a);_a=new Layout("default","",100,50,this,function(_b){_b.set_classname("GridFilterDiv");_b.set_titletext("그리드필터링");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("GridFilterDiv.xfdl",function(){var _a=null;this.GridFilterDiv_onload=function(_b,_c){_a=Eco.XComp.getScriptForm(this.parent);var _d=_a.FILTER_ENABLE_IMAGE_SIZE;this.img_filter.resize(_d[0],_d[1]);this.img_filter.style.set_border("0px none #ffffff");this.img_filter.style.set_background("transparent URL('"+_a.FILTER_ENABLE_IMAGE_URL+"') center middle");this.cmb_operator.style.set_border("0px none #ffffff");this.cmb_operator.style.set_background("transparent");this.resizeComps(_b.getOffsetWidth(),_b.getOffsetHeight());};this.GridFilterDiv_onsetfocus=function(_b,_c){var _d=Eco.XComp.getUserProperty(this,"grid");Eco.XComp.setUserProperty(_d,"currentFocusDiv",this);};this.GridFilterDiv_onsize=function(_b,_c){this.resizeComps(_c.cx,_c.cy);};this.resizeComps=function(_b,_c){var _d,_e,_f,_g,_h=2;var _i=_a.FILTER_ENABLE_IMAGE_SIZE;_d=_h;_e=_h;_f=_b-(_h*2)-_i[0];_g=_c-(_h*2);this.edt_filter.move(_d,_e,_f,_g);this.cal_filter.move(_d,_e,_f,_g);_d=_d+_f+_h;_e=Math.round((_c-_i[1])/2);this.img_filter.move(_d,_e);_d=this.img_filter.getOffsetLeft();_e=this.img_filter.getOffsetTop();_f=this.img_filter.getOffsetWidth();_g=this.img_filter.getOffsetHeight();this.cmb_operator.move(_d+2,_e+2,_f-4,_g-4);this.cmb_operator.moveToNext(this.img_filter);};this.initValue=function(){this.edt_filter.set_value("");this.img_filter.style.set_border("0px none #ffffff");this.img_filter.style.set_background("transparent URL('"+_a.FILTER_ENABLE_IMAGE_URL+"') center middle");this.cmb_operator.set_index(1);this.cal_filter.set_value("");};this.setFilterInfo=function(){var _b=Eco.XComp.getUserProperty(this,"grid");var _c=Eco.XComp.getUserProperty(this,"displayType");var _d=Eco.XComp.getUserProperty(this,"filterColumnName");var _e=Eco.XComp.getUserProperty(this,"filterInfo");this.setFilterImage(_e);var _f=Eco.XComp.getUserProperty(this,"refCell");var _g=_a.getCellObjectIndex(_f);var _h=_a.getBodyCellIndex(_b,_g);if(_c=="combo"){this.edt_filter.set_visible(false);this.cal_filter.set_visible(false);var _i=_b.getCellProperty("body",_h,"combodataset");var _j=Eco.XComp.lookup(_b.parent,_i);var _k=_b.getCellProperty("body",_h,"combocodecol");var _l=_b.getCellProperty("body",_h,"combodatacol");this.ds_combo.set_enableevent(false);this.ds_combo.deleteAll();for(var _p=0,_q=_j.rowcount;_p<_q;_p++ ){this.ds_combo.addRow();this.ds_combo.setColumn(_p,"chk",0);this.ds_combo.setColumn(_p,"text",_j.getColumn(_p,_l));this.ds_combo.setColumn(_p,"val",_j.getColumn(_p,_k));}this.ds_combo.set_rowposition( -1);if(!Eco.isEmpty(_e)){var _m,_n;for(var _p=0,_q=_e.length;_p<_q;_p++ ){_n=_e[_p];_m=this.ds_combo.findRow("val",_n.value);if(_m> -1){this.ds_combo.setColumn(_m,"chk",1);}}}this.ds_combo.set_enableevent(true);}else if(_c=="date"){this.edt_filter.set_visible(false);this.cal_filter.set_visible(true);if(!Eco.isEmpty(_e)){var _o=_e[0].value;if(!Eco.isEmpty(_o)){this.cal_filter.set_value(_o);}this.setOperator(_e[0].operator);}}else if(_c=="number"){this.edt_filter.set_visible(true);this.cal_filter.set_visible(false);this.edt_filter.set_inputtype("number");if(!Eco.isEmpty(_e)){var _o=_e[0].value;if(!Eco.isEmpty(_o)){this.edt_filter.set_value(_o);}this.setOperator(_e[0].operator);}}else{this.edt_filter.set_visible(true);this.cal_filter.set_visible(false);this.edt_filter.set_inputtype("normal");if(!Eco.isEmpty(_e)){var _o=_e[0].value;if(!Eco.isEmpty(_o)){this.edt_filter.set_value(_o);}this.setOperator(_e[0].operator);}}};this.setOperator=function(_b){var _c=this.ds_codeOperator.findRow("cd",_b);if(_c> -1){this.cmb_operator.set_index(_c);}};this.setFilterImage=function(_b){var _c="transparent URL('";if(Eco.isEmpty(_b)){_c+=_a.FILTER_ENABLE_IMAGE_URL;}else{_c+=_a.FILTER_APPLY_IMAGE_URL;}_c+="') center middle";this.img_filter.style.set_background(_c);};this.ds_combo_oncolumnchanged=function(_b,_c){this.applyComboFilter(_b);};this.edt_filter_onkeydown=function(_b,_c){if(_c.keycode==13){this.applyNormalFilter(this.cmb_operator.value,_b.value);}};this.edt_filter_onsetfocus=function(_b,_c){Eco.XComp.setUserProperty(_b,"focusValue",_b.value);};this.edt_filter_onkillfocus=function(_b,_c){if(Eco.XComp.getUserProperty(_b,"focusValue")!=_b.value){this.applyNormalFilter(this.cmb_operator.value,_b.value);}};this.img_filter_onclick=function(_b,_c){var _d=Eco.XComp.getUserProperty(this,"grid");var _e=Eco.XComp.getUserProperty(this,"displayType");if(_e=="normal"){this.ds_codeOperator.filter("");this.cmb_operator.dropdown();}else if(_e=="number"||_e=="date"){this.ds_codeOperator.filter("group != 'String'");this.cmb_operator.dropdown();}else if(_e=="combo"){this.pdiv_combo.trackPopupByComponent(_b,0,_b.getOffsetHeight());}};this.cmb_operator_onitemchanged=function(_b,_c){var _d;var _e=Eco.XComp.getUserProperty(this,"displayType");if(_e=="normal"){_d=this.edt_filter.value;}else if(_e=="number"){_d=parseInt(this.edt_filter.value);}else if(_e=="date"){_d=this.cal_filter.value;}this.applyNormalFilter(_c.postvalue,_d);};this.cal_filter_onkeydown=function(_b,_c){if(_c.keycode==13){this.applyNormalFilter(this.cmb_operator.value,_b.value);}};this.cal_filter_onsetfocus=function(_b,_c){Eco.XComp.setUserProperty(_b,"focusValue",_b.value);};this.cal_filter_onkillfocus=function(_b,_c){if(Eco.XComp.getUserProperty(_b,"focusValue")!=_b.value){this.applyNormalFilter(this.cmb_operator.value,_b.value);}};this.cal_filter_oncloseup=function(_b,_c){if(_c.prevalue!=_c.postvalue){this.applyNormalFilter(this.cmb_operator.value,_c.postvalue);}};this.applyComboFilter=function(_b){var _c=Eco.XComp.getUserProperty(this,"grid");var _d=Eco.XComp.getUserProperty(this,"filterColumnName");var _b=this.ds_combo;var _e=_b.getCaseCount("chk==1");if(_e==0||_b.rowcount==_e){_a.removeFilterInfo(_c,_d);}else{var _f;var _g=[];for(var _j=0,_k=_b.rowcount;_j<_k;_j++ ){if(_b.getColumn(_j,"chk")==1){_f={};if(_g.length==0){_f.logic="";}else{_f.logic="or";}_f.operator="equal";_f.value=_b.getColumn(_j,"val");_g.push(_f);}}_a.setFilterInfo(_c,_d,_g);}var _h=_c.vscrollbar?_c.vscrollbar.visible:false;_a.executeFilter(_c);var _i=_c.vscrollbar?_c.vscrollbar.visible:false;if(_h!=_i){_a.arrangeAppendFilterComps(_c);}this.setFilterImage(_g);};this.applyNormalFilter=function(_b,_c){var _d=Eco.XComp.getUserProperty(this,"grid");var _e=Eco.XComp.getUserProperty(this,"filterColumnName");var _f=[];if(Eco.isEmpty(_b)){_a.removeFilterInfo(_d,_e);}else{_f.push({'logic':"",'operator':_b,'value':_c});_a.setFilterInfo(_d,_e,_f);}var _g=_d.vscrollbar?_d.vscrollbar.visible:false;_a.executeFilter(_d);var _h=_d.vscrollbar?_d.vscrollbar.visible:false;if(_g!=_h){_a.arrangeAppendFilterComps(_d);}this.setFilterImage(_f);};});this.on_initEvent=function(){this.ds_combo.addEventHandler("oncolumnchanged",this.ds_combo_oncolumnchanged,this);this.addEventHandler("onload",this.GridFilterDiv_onload,this);this.addEventHandler("onsize",this.GridFilterDiv_onsize,this);this.addEventHandler("onsetfocus",this.GridFilterDiv_onsetfocus,this);this.cmb_operator.addEventHandler("onitemchanged",this.cmb_operator_onitemchanged,this);this.edt_filter.addEventHandler("onsetfocus",this.edt_filter_onsetfocus,this);this.edt_filter.addEventHandler("onkillfocus",this.edt_filter_onkillfocus,this);this.edt_filter.addEventHandler("onkeydown",this.edt_filter_onkeydown,this);this.cal_filter.addEventHandler("oncloseup",this.cal_filter_oncloseup,this);this.cal_filter.addEventHandler("onkeydown",this.cal_filter_onkeydown,this);this.cal_filter.addEventHandler("onsetfocus",this.cal_filter_onsetfocus,this);this.cal_filter.addEventHandler("onkillfocus",this.cal_filter_onkillfocus,this);this.img_filter.addEventHandler("onclick",this.img_filter_onclick,this);};this.loadIncludeScript("GridFilterDiv.xfdl");};})();