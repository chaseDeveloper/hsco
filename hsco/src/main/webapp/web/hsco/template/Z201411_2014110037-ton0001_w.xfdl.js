﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ton0001_w");this.set_classname("ton0001_w");this.set_titletext("통계보고서");this._setFormPosition(0,0,1024,768);}_a=new Div("dv_layout","absolute","10","10",null,null,"10","10",this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Div("dv_search","absolute","5","5",null,"70","5",null,this.dv_layout);_a.set_taborder("1");_a.set_cssclass("search");this.dv_layout.addChild(_a.name,_a);_a=new Button("bt_rpt","absolute",null,null,"80","20","5","5",this.dv_layout.dv_search);_a.set_taborder("0");_a.set_text("보고서보기");this.dv_layout.dv_search.addChild(_a.name,_a);_a=new Edit("ed_rptname","absolute","5","5","140","20",null,null,this.dv_layout.dv_search);_a.set_taborder("1");_a.set_value("cissintra/template");this.dv_layout.dv_search.addChild(_a.name,_a);_a=new Edit("ed_p01","absolute","150","5","140","20",null,null,this.dv_layout.dv_search);_a.set_taborder("2");_a.set_value("10");this.dv_layout.dv_search.addChild(_a.name,_a);_a=new Edit("ed_p02","absolute","295","5","140","20",null,null,this.dv_layout.dv_search);_a.set_taborder("3");_a.set_value("20");this.dv_layout.dv_search.addChild(_a.name,_a);_a=new WebBrowser("wb","absolute","5","80",null,null,"5","5",this.dv_layout);_a.set_taborder("0");_a.set_url("http://172.10.11.168:9090/Say_main/projects/test.html");this.dv_layout.addChild(_a.name,_a);_a=new Layout("default","",0,70,this.dv_layout.dv_search,function(_b){_b.set_taborder("1");_b.set_cssclass("search");});this.dv_layout.dv_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.dv_layout,function(_b){_b.set_taborder("2");});this.dv_layout.addLayout(_a.name,_a);_a=new Layout("default","",1024,768,this,function(_b){_b.set_classname("ton0001_w");_b.set_titletext("통계보고서");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("Z201411_2014110037-ton0001_w.xfdl",function(){this.wbOnloadcompleted=function(_a,_b){trace("complete load ... "+_a.url);};this.btRptOnclick=function(_a,_b){var _c=this.dv_layout.dv_search.ed_rptname.value;var _d=[{"code":'sc1',"data":this.dv_layout.dv_search.ed_p01.value},{"code":'sc2',"data":this.dv_layout.dv_search.ed_p02.value}];alert(_d[0]["code"]);this.dv_layout.wb.callMethod("test",_c,_d);};this.wbOnusernotify=function(_a,_b){};this.formOnload=function(_a,_b){var _c=application.services;var _d="";for(var _f=0,_g=_c.length;_f<_g;_f++ ){if(_c[_f]["prefixid"]=='server_url'){_d=_c[_f]["url"];break;}}if(this.IsNotBlank(_d)){var _e=_d+"RexServer30/rexjs.jsp";trace(_e);this.dv_layout.wb.set_url(_e);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.formOnload,this);this.dv_layout.dv_search.bt_rpt.addEventHandler("onclick",this.btRptOnclick,this);this.dv_layout.wb.addEventHandler("onusernotify",this.wbOnusernotify,this);this.dv_layout.wb.addEventHandler("onloadcompleted",this.wbOnloadcompleted,this);};this.loadIncludeScript("Z201411_2014110037-ton0001_w.xfdl");};})();