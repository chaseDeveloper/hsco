﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("Transaction_Basic");this.set_classname("form01");this.set_titletext("Transaction Basic");this._setFormPosition(0,0,760,430);}_a=new Dataset("ds_data",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"TECHHOMEPAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","16","39",null,"40","15",null,this);_a.set_taborder("14");_a.set_cssclass("sta_WFSA_BG");_a.getSetter("class").set("");_a.style.set_background("@gradation");_a.style.set_border("1 solid gray");_a.style.set_bordertype("round 4 4");_a.style.set_gradation("linear 0,50 #ffffffff 0,100 #f0f0f0ff");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","328","48","123","20",null,null,this);_a.set_taborder("6");_a.set_text("Communication Type:");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","16","113",null,null,"16","13",this);_a.set_taborder("0");_a.set_binddataset("ds_data");_a.set_cellsizingtype("col");_a.set_autosizingtype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"248\"/><Column size=\"153\"/><Column size=\"151\"/><Column size=\"174\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Seq\"/><Cell col=\"1\" text=\"Address\"/><Cell col=\"2\" text=\"Company Name\"/><Cell col=\"3\" text=\"HomePage\"/><Cell col=\"4\" text=\"Technical Support HomePage\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ADDRESS\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:HOMEPAGE\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:TECHHOMEPAGE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"47","53","22","18",null,this);_a.set_taborder("1");_a.set_text("Inquiry");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","408","87","152","22",null,null,this);_a.set_taborder("4");_a.set_text("The number of queries:");this.addChild(_a.name,_a);_a=new Combo("comType","absolute","469","48","117","20",null,null,this);this.addChild(_a.name,_a);var _b=new Dataset("comType_innerdataset",this.comType);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">XML</Col><Col id=\"datacolumn\">XML</Col></Row><Row><Col id=\"codecolumn\">SSV</Col><Col id=\"datacolumn\">SSV</Col></Row><Row><Col id=\"codecolumn\">CSV</Col><Col id=\"datacolumn\">CSV</Col></Row><Row><Col id=\"codecolumn\">ZLIB</Col><Col id=\"datacolumn\">ZLIB</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_index("-1");_a=new Static("Static03","absolute","185","87","178","22",null,null,this);_a.set_taborder("8");_a.set_text("Required Time (Seconds) :");this.addChild(_a.name,_a);_a=new Radio("rdCount","absolute","131","48","192","20",null,null,this);this.addChild(_a.name,_a);var _c=new Dataset("rdCount_innerdataset",this.rdCount);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">30000</Col><Col id=\"datacolumn\">30,000</Col></Row><Row><Col id=\"codecolumn\">50000</Col><Col id=\"datacolumn\">50,000</Col></Row><Row><Col id=\"codecolumn\">100000</Col><Col id=\"datacolumn\">100,000</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("10");_a.set_columncount("3");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("30000");_a.set_index("0");_a=new Static("Static00","absolute","25","48","107","20",null,null,this);_a.set_taborder("11");_a.set_text("Number of query :");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","13","164","20",null,null,this);_a.set_taborder("17");_a.set_text("Data Inquiry");_a.style.set_font("bold 9 Dotum");_a.set_cssclass("sta_WF_subtitP");this.addChild(_a.name,_a);_a=new MaskEdit("mk_cnt","absolute","565","87","82","22",null,null,this);_a.set_taborder("18");_a.style.set_background("transparent");_a.style.set_border("0 none #808080ff");_a.style.set_color("#cc5200ff");_a.style.set_align("left middle");_a.style.set_font("bold antialias 9 arial");_a.set_value("0");_a.set_mask("#,###");_a.set_enable("false");this.addChild(_a.name,_a);_a=new MaskEdit("mk_time","absolute","346","87","82","22",null,null,this);_a.set_taborder("21");_a.set_value("0");_a.set_enable("false");_a.style.set_background("transparent");_a.style.set_border("0 none #808080ff");_a.style.set_color("#cc5200ff");_a.style.set_align("left middle");_a.style.set_font("bold antialias 9 arial");this.addChild(_a.name,_a);_a=new CheckBox("ckCompress","absolute","597","48","91","20",null,null,this);_a.set_taborder("22");_a.set_text("Compressed");_a.set_enableevent("false");_a.set_value("false");this.addChild(_a.name,_a);_a=new Layout("default","",760,430,this,function(_d){_d.set_classname("form01");_d.set_titletext("Transaction Basic");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("np_Transaction_Basic.xfdl",function(){var _a;var _b="Svc::Service_Default.jsp";this.Button00_onclick=function(_c,_d){this.ds_data.clearData();var _e=new Date();_a=_e.getTime();this.mk_time.set_value(0);this.mk_cnt.set_value(0);var _f="row_cnt="+this.rdCount.value+" type="+this.comType.value+" compress="+this.ckCompress.value;if(this.comType.value=='CSV'){_b="Svc::Service_CSV.jsp?row_cnt="+this.rdCount.value;}else{_b="Svc::Service_Default.jsp";}this.transaction("select","http://support.tobesoft.co.kr/Next_JSP/nexacro/Service/Service_Default.jsp","","ds_data=output",_f,"fn_callback");};this.fn_callback=function(_c,_d,_e){if(_d<0){this.alert(_c+"=="+_d+"=="+_e);}else{var _f=new Date();this.mk_time.set_value(Math.floor((_f.getTime()-_a)/1000,1));this.mk_cnt.set_value(this.ds_data.rowcount);}};this.comType_onitemchanged=function(_c,_d){this.ckCompress.set_value(false);this.ckCompress.set_enable(false);if(_d.postvalue=='SSV'){this.ckCompress.set_enable(true);}else if(_d.postvalue=='CSV'){this.ckCompress.set_value(true);this.ckCompress.set_enable(false);}};this.Transaction_Basic_onload=function(_c,_d){this.comType.set_value("XML");this.ckCompress.set_value(false);this.ckCompress.set_enable(false);};});this.on_initEvent=function(){this.addEventHandler("onload",this.Transaction_Basic_onload,this);this.Button00.addEventHandler("onclick",this.Button00_onclick,this);this.comType.addEventHandler("onitemchanged",this.comType_onitemchanged,this);};this.loadIncludeScript("np_Transaction_Basic.xfdl");};})();