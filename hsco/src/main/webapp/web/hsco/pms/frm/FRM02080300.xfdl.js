﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FRM02080300");this.set_classname("FRM02080300");this.set_titletext("잡손익명세서");this._setFormPosition(0,0,1059,735);}_a=new Static("Static03","absolute","0","33","1031","10",null,null,this);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","188","19",null,null,this);_a.set_taborder("1");_a.set_text("잡손익명세서");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("2");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("4");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("5");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("회계년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","84","5","73","21",null,null,this.div_search);_a.set_taborder("11");_a.set_value("0");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Grid("grd_accNutStacnt","absolute","0","67",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_accNutStacnt");_a.set_autoenter("select");_a.set_extendsizetype("row");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_autosizingtype("row");_a.set_treeusecheckbox("false");_a.set_treeinitstatus("expand,null");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"과목\"/><Cell col=\"1\" text=\"기초잔액\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"당기증가액\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"당기감소액\"/><Cell col=\"4\" text=\"기말잔액\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"align:left;\" text=\"bind:ACCNUT_ACNT_NM\" wordwrap=\"char\" editdisplay=\"edit\" treestartlevel=\"1\" treelevel=\"bind:LVL\" autosizerow=\"limitmin\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:AMT1\" wordwrap=\"char\" editdisplay=\"edit\" autosizerow=\"limitmin\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:AMT2\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:AMT3\" editdisplay=\"edit\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" text=\"bind:AMT4\" editdisplay=\"edit\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getColumn(0, &quot;AMT1&quot;)\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getColumn(0, &quot;AMT2&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getColumn(0, &quot;AMT3&quot;)\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getColumn(0, &quot;AMT4&quot;)\"/><Cell col=\"5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("5");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("FRM02080300");_b.set_titletext("잡손익명세서");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("FRM02080300.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("FRM02080300.xfdl",function(){this.FRM02080300_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.FRM02080300_onload=function(_a,_b){var _c=this.gfn_today("NOW_YEAR");this.div_search.spn_year.set_value(_c);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.FRM02080300_oninit,this);this.addEventHandler("onload",this.FRM02080300_onload,this);this.sta_title01.addEventHandler("onclick",this.sta_title01_onclick,this);this.Static51.addEventHandler("onclick",this.Static51_onclick,this);this.grd_accNutStacnt.addEventHandler("oncloseup",this.grd_accNutStacnt_oncloseup,this);this.grd_accNutStacnt.addEventHandler("onexpanddown",this.grd_accNutStacnt_onexpanddown,this);this.grd_accNutStacnt.addEventHandler("ontextchange",this.grd_accNutStacnt_ontextchange,this);this.grd_accNutStacnt.addEventHandler("ondrag",this.grd_accNutStacnt_ondrag,this);};this.loadIncludeScript("FRM02080300.xfdl");};})();