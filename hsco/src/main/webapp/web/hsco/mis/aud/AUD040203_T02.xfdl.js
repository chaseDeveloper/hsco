﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD040203_T02");this.set_classname("AUD040203_T02");this.set_titletext("문항별집계");this._setFormPosition(0,0,1031,638);}_a=new Static("Static61","absolute","0","0","1032","10",null,null,this);_a.set_taborder("0");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult00","absolute","0","10",null,"19","920",null,this);_a.set_taborder("1");_a.set_text("부서별 그래프");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","29",null,"5","0",null,this);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","340",null,"10","0",null,this);_a.set_taborder("4");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_empmnLastResult01","absolute","0","350",null,"19","937",null,this);_a.set_taborder("5");_a.set_text("부서별 결과");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","369",null,"5","0",null,this);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_empList","absolute","0","374",null,null,"0","0",this);_a.set_taborder("7");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"4\"/><Cell row=\"4\" col=\"1\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new WebBrowser("wb_graph","absolute","0","34",null,"307","0",null,this);_a.set_taborder("11");this.addChild(_a.name,_a);_a=new Layout("default","",1031,638,this,function(_b){_b.set_classname("AUD040203_T02");_b.set_titletext("문항별집계");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.spn_year","value","ds_cond","APPLC_YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_comp00.rdo_answer","value","ds_graphList2","ANSWER");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("AUD040203_T02.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD040203_T02.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD040203_T02.xfdl",function(){this.saveRow= -1;this.isChartLoad11=false;this.AUD040203_T02_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_drawChart1=function(){trace("fn_drawChart1");if(!this.comUtils.isNull(this.parent.parent.ds_graphList)){var _a=this.parent.parent.ds_cond.getColumn(0,"QUSTNR_MANAGE_SN");var _b=this.parent.parent.ds_qustnrSjList.getColumn(_a,"SJ");var _c=_b;var _d=[];var _e=[];var _f=nexacro.toNumber(this.parent.parent.ds_graphList.getColumn(0,"PARTCPTN_RATE"));var _g=nexacro.toNumber(this.parent.parent.ds_graphList.getColumn(i,"CNSR_RATE"));var _e=['4월',_f,_g];_d.push(_e);this.wb_graph.callMethod("drawChart",_d,_c);}};this.wb_graph_onloadcompleted=function(_a,_b){this.isChartLoad1=true;};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD040203_T02_onload,this);this.addEventHandler("oninit",this.AUD040203_T02_oninit,this);this.wb_graph.addEventHandler("onloadcompleted",this.wb_graph_onloadcompleted,this);};this.loadIncludeScript("AUD040203_T02.xfdl");};})();