﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM030103_T7");this.set_classname("form");this.set_titletext("국외출장내역");this._setFormPosition(0,0,750,350);}_a=new Grid("Grid00","absolute","0","5",null,null,"0","2",this);_a.set_taborder("0");_a.set_binddataset("ds_hr_bsrp");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"350\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/><Cell col=\"3\" text=\"목적\"/><Cell col=\"4\" text=\"국가명\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:BSRP_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:BSRP_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BSRP_NM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NATION_NM\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",750,350,this,function(_b){_b.set_classname("form");_b.set_titletext("국외출장내역");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("HRM030103_T07.xfdl","lib::comInclude.xjs");this.registerScript("HRM030103_T07.xfdl",function(){});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM030103_P01_onload,this);this.Grid00.addEventHandler("oncellclick",this.div_work_div_detail00_tab_empInfo_tabpage9_Grid00_oncellclick,this);this.Grid00.addEventHandler("onheadclick",this.div_work_div_detail00_tab_empInfo_tabpage9_Grid00_onheadclick,this);};this.loadIncludeScript("HRM030103_T07.xfdl");};})();