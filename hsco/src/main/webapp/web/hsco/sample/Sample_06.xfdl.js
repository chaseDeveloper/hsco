﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("Sample_06");this.set_classname("Sample_06");this.set_titletext("체크버튼 그룹 동적 생성");this._setFormPosition(0,0,1039,799);}_a=new Dataset("ds_exam",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">A</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">B</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">C</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">D</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"CODE_NM\">E</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"CODE_NM\">F</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"CODE_NM\">GGGGGGGG</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"CODE_NM\">H</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"CODE_NM\">I</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NM\">J</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"CODE_NM\">K</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"CODE_NM\">L</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"CODE_NM\">M</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"CODE_NM\">N</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"CODE_NM\">O</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"CODE_NM\">P</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"CODE_NM\">Q</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"CODE_NM\">R</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"CODE_NM\">S</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","10","48","220","514",null,null,this);_a.set_taborder("0");_a.set_binddataset("ds_exam");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"CODE\"/><Cell col=\"1\" disptype=\"normal\" text=\"CODE_NM\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:CODE\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:CODE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_makeChkGroup","absolute","9","10","220","29",null,null,this);_a.set_taborder("1");_a.set_text("체크 그룹 만들기");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Div("div_chkGrp","absolute","251","10","773","774",null,null,this);_a.set_taborder("2");_a.style.set_border("1 solid #808080ff");this.addChild(_a.name,_a);_a=new Button("btn_makeSearchStr","absolute","9","578","220","29",null,null,this);_a.set_taborder("3");_a.set_text("조회 조건 값 만들기");_a.style.set_border("2 solid #808080ff");this.addChild(_a.name,_a);_a=new Layout("default","",773,774,this.div_chkGrp,function(_b){_b.set_taborder("2");_b.style.set_border("1 solid #808080ff");});this.div_chkGrp.addLayout(_a.name,_a);_a=new Layout("default","",1039,799,this,function(_b){_b.set_classname("Sample_06");_b.set_titletext("체크버튼 그룹 동적 생성");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("Sample_06.xfdl","lib::comInclude.xjs");this.registerScript("Sample_06.xfdl",function(){this.btn_makeChkGroup_onclick=function(_a,_b){this.gfn_makeCheckGroup(this.ds_exam,this.div_chkGrp,3);};this.btn_makeSearchStr_onclick=function(_a,_b){this.gfn_makeSearchStr(this.div_chkGrp);};this.cv_nTop=8;this.cv_nLeft=15;this.cv_nH=21;this.cv_nHGap=8;this.cv_nVGap=8;this.cv_nMaxWidth=50;this.cv_nAddPix=50;this.gfn_makeCheckGroup=function(_a,_b,_c){if(this.comUtils.isNullEmpty(_c)||_c==0){_c=1;}var _d=this.cv_nH+this.cv_nHGap;this.gfn_destroyAll(_b);this._makeCheckAll(_b);this._calcMaxWidth(_a);for(var _k=0;_k<_a.rowcount;_k++ ){var _e=new CheckBox();var _f="chk_"+_a.getColumn(_k,"CODE");var _g=_a.getColumn(_k,"CODE_NM");var _h;var _i;var _j=this.cv_nLeft+((this.cv_nMaxWidth+this.cv_nAddPix)*(_k%_c));_e.init(_f,"absolute",_j,this.cv_nTop+_d*(nexacro.floor(_k/_c)+1),100,this.cv_nH);_e.set_text(_g);_i=this.cv_nMaxWidth+this.cv_nAddPix;_e.set_width(_i);_e.addEventHandler("onclick",this._chk_onclick,this);_b.addChild(_f,_e);_e.show();}};this._chk_onclick=function(_a,_b){_a.parent.chk_all.set_value(false);this.gfn_makeSearchStr(_a.parent);};this._makeCheckAll=function(_a){var _b=new CheckBox();var _c="chk_all";var _d;var _e;_b.init(_c,"absolute",this.cv_nLeft,this.cv_nTop,100,this.cv_nH);_b.set_text("전체 선택");_d=this.comUtils.getTextSize("전체 선택",_b);_e=(_d[0]>this.cv_nMaxWidth?_d[0]:this.cv_nMaxWidth)+this.cv_nAddPix;this.cv_nMaxWidth=_e-this.cv_nAddPix;_b.set_width(_e);_b.addEventHandler("onclick",this._chk_all_onclick,this);_a.addChild(_c,_b);_b.show();};this._chk_all_onclick=function(_a,_b){this._checkAll(_a.parent,_a.value);this.gfn_makeSearchStr(_a.parent);};this._checkAll=function(_a,_b){var _c=_a.components;for(var _d=0;_d<_c.length;_d++ ){_c[_d].set_value(_b);}};this._calcMaxWidth=function(_a){var _b=new CheckBox();_b.init("chkTemp","absolute",this.cv_nLeft,this.cv_nTop,100,this.cv_nH);for(var _c=0;_c<_a.rowcount;_c++ ){_b.set_text(_a.getColumn(_c,"CODE_NM"));objSize=this.comUtils.getTextSize(_b.text,_b);this.cv_nMaxWidth=(objSize[0]>this.cv_nMaxWidth?objSize[0]:this.cv_nMaxWidth);}_b.destroy();_b=null;return this.cv_nMaxWidth;};this.gfn_destroyAll=function(_a){var _b=_a.components;var _c=_b.length;for(var _e=_c-1;_e>=0; --_e){var _d=_b[_e];_a.removeChild(_d.name);_d.destroy();_d=null;}};this.gfn_makeSearchStr=function(_a){var _b=_a.components;var _c=_b.length;var _d="";for(var _f=0;_f<_c;_f++ ){var _e=_b[_f];if(_e.name=="chk_all"){continue;}if(_e.value){_d+=nexacro.wrapQuote(_e.name.substr(4))+",";}}_a.set_text(_d.substr(0,_d.length-1));alert(_a.text);};});this.on_initEvent=function(){this.btn_makeChkGroup.addEventHandler("onclick",this.btn_makeChkGroup_onclick,this);this.btn_makeSearchStr.addEventHandler("onclick",this.btn_makeSearchStr_onclick,this);};this.loadIncludeScript("Sample_06.xfdl");};})();