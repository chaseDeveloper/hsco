﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("cal_YYYY_MM_P01");this.set_classname("cal_YYYY_MM_P01");this.set_titletext("년월달력팝업");this._setFormPosition(0,0,149,144);}_a=new Dataset("ds_calendar",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"month0\" type=\"STRING\" size=\"256\"/><Column id=\"month1\" type=\"STRING\" size=\"256\"/><Column id=\"month2\" type=\"STRING\" size=\"256\"/><Column id=\"month3\" type=\"STRING\" size=\"256\"/><Column id=\"img0\" type=\"STRING\" size=\"256\"/><Column id=\"img1\" type=\"STRING\" size=\"256\"/><Column id=\"img2\" type=\"STRING\" size=\"256\"/><Column id=\"img3\" type=\"STRING\" size=\"256\"/><Column id=\"img0_1\" type=\"STRING\" size=\"256\"/><Column id=\"img1_1\" type=\"STRING\" size=\"256\"/><Column id=\"img2_1\" type=\"STRING\" size=\"256\"/><Column id=\"img3_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month0\">01</Col><Col id=\"month1\">02</Col><Col id=\"month2\">03</Col><Col id=\"month3\">04</Col><Col id=\"img0\">image::m_01.png</Col><Col id=\"img1\">image::m_02.png</Col><Col id=\"img2\">image::m_03.png</Col><Col id=\"img3\">image::m_04.png</Col><Col id=\"img0_1\">image::m_01_1.png</Col><Col id=\"img1_1\">image::m_02_1.png</Col><Col id=\"img2_1\">image::m_03_1.png</Col><Col id=\"img3_1\">image::m_04_1.png</Col></Row><Row><Col id=\"month0\">05</Col><Col id=\"month1\">06</Col><Col id=\"month2\">07</Col><Col id=\"month3\">08</Col><Col id=\"img0\">image::m_05.png</Col><Col id=\"img1\">image::m_06.png</Col><Col id=\"img2\">image::m_07.png</Col><Col id=\"img3\">image::m_08.png</Col><Col id=\"img0_1\">image::m_05_1.png</Col><Col id=\"img1_1\">image::m_06_1.png</Col><Col id=\"img2_1\">image::m_07_1.png</Col><Col id=\"img3_1\">image::m_08_1.png</Col></Row><Row><Col id=\"month0\">09</Col><Col id=\"month1\">10</Col><Col id=\"month2\">11</Col><Col id=\"month3\">12</Col><Col id=\"img0\">image::m_09.png</Col><Col id=\"img1\">image::m_10.png</Col><Col id=\"img2\">image::m_11.png</Col><Col id=\"img3\">image::m_12.png</Col><Col id=\"img0_1\">image::m_09_1.png</Col><Col id=\"img1_1\">image::m_10_1.png</Col><Col id=\"img2_1\">image::m_11_1.png</Col><Col id=\"img3_1\">image::m_12_1.png</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Grid("grd_calendar","absolute","0","0","149","144",null,null,this);_a.set_taborder("0");_a.set_selecttype("cell");_a.style.set_border("2 solid #b0c5e2ff");_a.style.set_color("#b0c5e2ff");_a.set_binddataset("ds_calendar");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"36\"/><Column size=\"36\"/><Column size=\"36\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell displaytype=\"image\" text=\"URL('image::m_pre.png')\"/><Cell col=\"1\" colspan=\"2\"/><Cell col=\"3\" displaytype=\"image\" text=\"URL('image::m_nex.png')\"/></Band><Band id=\"body\"><Cell displaytype=\"none\" style=\"background:EXPR('URL(\\''+ img0 +'\\')');background2:EXPR('URL(\\''+ img0 +'\\')');selectbackground:EXPR('URL(\\''+ img0_1 +'\\')');\" text=\"bind:month0\"/><Cell col=\"1\" displaytype=\"none\" style=\"background:EXPR('URL(\\''+ img1 +'\\')');background2:EXPR('URL(\\''+ img1 +'\\')');selectbackground:EXPR('URL(\\''+ img1_1 +'\\')');\" text=\"bind:month1\"/><Cell col=\"2\" displaytype=\"none\" style=\"background:EXPR('URL(\\''+ img2 +'\\')');background2:EXPR('URL(\\''+ img2 +'\\')');selectbackground:EXPR('URL(\\''+ img2_1 +'\\')');\" text=\"bind:month2\"/><Cell col=\"3\" displaytype=\"none\" style=\"background:EXPR('URL(\\''+ img3 +'\\')');background2:EXPR('URL(\\''+ img3 +'\\')');selectbackground:EXPR('URL(\\''+ img3_1 +'\\')');\" text=\"bind:month3\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",149,144,this,function(_b){_b.set_classname("cal_YYYY_MM_P01");_b.set_titletext("년월달력팝업");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("cal_YYYY_MM_P01.xfdl","lib::comInclude.xjs");this.registerScript("cal_YYYY_MM_P01.xfdl",function(){var _a;var _b;this.getCalendar=function(){return this.fa_Date;};this.setCalendar=function(_c){this.fa_Date=_c;this.fa_OldDate=_c;if(this.fa_Date==null||this.fa_Date.length==0){this.fa_Date=this.dateUtils.today();}var _d=this.fa_Date.substr(0,4);var _e=parseInt(this.fa_Date.substr(4,2));this.grd_calendar.setCellProperty("head",1,"text",_d);this.ds_calendar.set_rowposition((_e-1)/4);this.grd_calendar.setCellPos((_e-1)%4);};this.grd_calendar_oncellclick=function(_c,_d){var _e=this.fa_Date.substr(0,4);this.fa_Date=_e+_c.getCellValue(_d.row,_d.cell);this.closePopup(this.fa_Date);};this.grd_calendar_onheadclick=function(_c,_d){var _e=parseInt(this.fa_Date.substr(0,4));var _f=this.fa_Date.substr(4,2);var _g=_d.cell;if(_g==0){_e=_e-1;}else if(_g=2){_e=_e+1;}this.grd_calendar.setCellProperty("head",1,"text",_e);this.fa_Date=_e.toString()+_f;};this.cal_YYYY_MM_P01_onkeydown=function(_c,_d){if(_d.keycode==27){this.fa_Date=this.fa_OldDate;this.closePopup(this.fa_Date);}};});this.on_initEvent=function(){this.addEventHandler("onkeydown",this.cal_YYYY_MM_P01_onkeydown,this);this.grd_calendar.addEventHandler("oncellclick",this.grd_calendar_oncellclick,this);this.grd_calendar.addEventHandler("onheadclick",this.grd_calendar_onheadclick,this);};this.loadIncludeScript("cal_YYYY_MM_P01.xfdl");};})();