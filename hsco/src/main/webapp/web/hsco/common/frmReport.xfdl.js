﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("frmReport");this.set_classname("frmReport");this.set_titletext("Report");this._setFormPosition(0,0,884,735);}_a=new Dataset("ds_saveType",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">PDF</Col><Col id=\"Name\">PDF</Col></Row><Row><Col id=\"Code\">XLS</Col><Col id=\"Name\">Excel</Col></Row><Row><Col id=\"Code\">DOC</Col><Col id=\"Name\">Word</Col></Row><Row><Col id=\"Code\">HWP</Col><Col id=\"Name\">아래한글</Col></Row><Row><Col id=\"Code\">HAN</Col><Col id=\"Name\">한셀</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","2","2","197","21",null,null,this);_a.set_taborder("3");_a.set_text("Reporter");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_print","absolute",null,"3","50","19","2",null,this);_a.set_taborder("5");_a.set_text("출력");_a.set_cssclass("btn_WF_Process");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","2","25",null,"5","2",null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new HTMLUbiViewer("ubi_viewer","absolute","2","30",null,null,"2","2",this);_a.set_taborder("14");_a.set_text("HTMLUbiViewer00");_a.set_resource("/ubireport/ajax/js4");_a.set_toolbar("false");this.addChild(_a.name,_a);_a=new Button("btn_scaleDown","absolute","63.01%","0",null,"25","34.16%",null,this);_a.set_taborder("15");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Spin("spn_scale","absolute","65.72%","0",null,"25","26.7%",null,this);_a.set_taborder("16");_a.set_value("100");_a.set_increment("20");_a.set_max("300");_a.style.set_align("middle");_a.set_visible("true");_a.set_min("60");this.addChild(_a.name,_a);_a=new Button("btn_scaleUp","absolute","73.19%","0",null,"25","23.98%",null,this);_a.set_taborder("17");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Combo("cmb_saveType","absolute","76.36%","0",null,"25","14.14%",null,this);this.addChild(_a.name,_a);_a.set_taborder("18");_a.set_value("PDF");_a.set_text("PDF");_a.set_innerdataset("ds_saveType");_a.set_codecolumn("Code");_a.set_datacolumn("Name");_a.style.set_align("middle");_a.set_visible("true");_a.set_index("0");_a=new Button("btn_saveFile","absolute","86.31%","2",null,"21","6.22%",null,this);_a.set_taborder("19");_a.set_text("파일저장");_a.set_cssclass("btn_WF_Process");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Layout("default","",884,735,this,function(_b){_b.set_classname("frmReport");_b.set_titletext("Report");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("frmReport.xfdl","lib::comInclude.xjs");this.registerScript("frmReport.xfdl",function(){this.showReport=function(_a){var _b=application.services["svcurl"].url;this.ubi_viewer.set_resource("http://"+_b+"/ubireport/ajax/js4");_a.setIsvoiceye(true);if(this.comUtils.isNullEmpty(_a.getGrid())){_a.setArgs("EMPNO",this.gfn_getUserId());_a.setArgs("EMPNM",this.gfn_getUserName());this.gfn_setLocalDs2Viewer(this.ubi_viewer,_a);}else{_a.setArgs("EMPNO",this.gfn_getUserId());_a.setArgs("EMPNM",this.gfn_getUserName());this.gfn_setGrid2Viewer(this.ubi_viewer,_a);}};this.btn_print_onclick=function(_a,_b){if(nexacro.Browser=="IE"){this.ubi_viewer.printPDF();}else if(nexacro.Browser=="Chrome"){this.ubi_viewer.printSet();}else{this.ubi_viewer.printPDF();}};this.btn_scaleDown_onclick=function(_a,_b){var _c=this.spn_scale.value-20;if(_c<60){_c=60;}if(_c>=60){this.spn_scale.set_value(_c);this.ubi_viewer.zoomOut();}};this.spn_scale_ontextchanged=function(_a,_b){nScale=parseInt(_b.posttext);if(nScale>=this.ubi_viewer.scale){this.ubi_viewer.scale=nScale;this.ubi_viewer.zoomIn();}else{this.ubi_viewer.scale=nScale;this.ubi_viewer.zoomOut();}};this.btn_scaleUp_onclick=function(_a,_b){var _c=this.spn_scale.value+20;if(_c>300){_c=300;}if(_c<=300){this.spn_scale.set_value(_c);this.ubi_viewer.zoomIn();}};this.btn_saveFile_onclick=function(_a,_b){switch(this.cmb_saveType.value){case "PDF":this.ubi_viewer.exportPdf();break;case "XLS":this.ubi_viewer.exportExcel();break;case "DOC":this.ubi_viewer.exportDocx();break;case "HWP":this.ubi_viewer.exportHwp();break;case "HAN":this.ubi_viewer.exportExcelNo();break;}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.frmReport_oninit,this);this.addEventHandler("onload",this.frmReport_onload,this);this.btn_print.addEventHandler("onclick",this.btn_print_onclick,this);this.btn_scaleDown.addEventHandler("onclick",this.btn_scaleDown_onclick,this);this.spn_scale.addEventHandler("ontextchanged",this.spn_scale_ontextchanged,this);this.btn_scaleUp.addEventHandler("onclick",this.btn_scaleUp_onclick,this);this.btn_saveFile.addEventHandler("onclick",this.btn_saveFile_onclick,this);};this.loadIncludeScript("frmReport.xfdl");};})();