﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM020307_P1");this.set_classname("HRM020307_P1");this.set_titletext("결과집계표");this.set_scrollbars("none");this._setFormPosition(0,0,1080,750);}_a=new Dataset("ds_cond_pop",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SCRPRO_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_totalSheep",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_KOREAN\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"RNAK\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_EVL_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MIN_EVL_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXCEPT_EVL_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EPP_EVL_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVG_EVL_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_subSheep",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APYEXM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_KOREAN\" type=\"STRING\" size=\"256\"/><Column id=\"MFCMM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"MFCMM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALLOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_data",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"MFCMM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mfcmmList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"MFCMM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"MFCMM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PSITN\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC\" type=\"STRING\" size=\"256\"/><Column id=\"SCRPRO_SE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_scrproStdr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPMN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SCRPRO_SE\" type=\"STRING\" size=\"256\"/><Column id=\"WGHTVAL\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"SM_OPT1\" type=\"STRING\" size=\"256\"/><Column id=\"SM_OPT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","15","76",null,null,"15","15",this);_a.set_taborder("0");_a.set_binddataset("ds_data");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autoupdatetype("comboselect");_a.set_treeinitstatus("expand,all");_a.set_treeusecheckbox("false");_a.set_selecttype("cell");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"font: ;\" text=\"심사 결과 집계표\"/><Cell col=\"1\"/><Cell row=\"1\" style=\"align:right;\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"2\" style=\"align:right;\" text=\"O 작성자 :                (서명)\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"3\" style=\"align:right;\" text=\"O 확인자 :                (서명)\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"4\" colspan=\"2\" text=\"접수번호\"/><Cell row=\"5\" colspan=\"2\" text=\"성명\"/><Cell row=\"6\" colspan=\"2\" text=\"순위\"/><Cell row=\"7\" colspan=\"2\" text=\"평균\"/><Cell row=\"8\" colspan=\"2\" text=\"유효총득점(A-B)\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:COL1\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:MFCMM_NM\"/></Band><Band id=\"summary\"><Cell rowspan=\"3\" text=\"제외점수\"/><Cell col=\"1\" style=\"align:center;\" text=\"소계(B)\"/><Cell row=\"1\" col=\"1\" style=\"align:center;\" text=\"최상점수\"/><Cell row=\"2\" col=\"1\" style=\"align:center;\" text=\"최하점수\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"15","50","25","15",null,this);_a.set_taborder("18");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","15","40",null,"10","15",null,this);_a.set_taborder("19");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","50","92","21",null,null,this);_a.set_taborder("28");_a.set_text("집계표");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","15","71",null,"5","15",null,this);_a.set_taborder("29");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","15",null,null,"15","15","0",this);_a.set_taborder("30");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","15","20","400","19",null,null,this);_a.set_taborder("34");_a.set_text("심사결과 집계표");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_excel","absolute",null,"50","102","21","15",null,this);_a.set_taborder("35");_a.set_text("엑셀파일 전환");this.addChild(_a.name,_a);_a=new Layout("default","",1080,750,this,function(_b){_b.set_classname("HRM020307_P1");_b.set_titletext("결과집계표");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("HRM020307_P1.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM020307_P1.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM020307_P1.xfdl",function(){this.HRM020307_P1_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM020307_P1_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond_pop.clearData();var _a=this.ds_cond_pop.addRow();this.ds_cond_pop.setColumn(0,"EMPMN_YEAR",this.parent.EMPMN_YEAR);this.ds_cond_pop.setColumn(0,"ODR_SE",this.parent.ODR_SE);this.ds_cond_pop.setColumn(0,"SCRPRO_SE",this.parent.SCRPRO_SE);this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_totalSheep.clearData();this.ds_subSheep.clearData();this.ds_data.clearData();this.fn_transaction("select");};this.fn_transaction=function(_a){switch(_a){case "select":var _b="hsco/mis/hrm/HRM020307/selectSheet.do";var _c="input1=ds_cond_pop";var _d="ds_totalSheep=output1 ds_subSheep=output2 ds_mfcmmList=output3 ds_scrproStdr=output4";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "select":this.fn_makeGrid();break;}}};this.btn_search_onclick=function(_a,_b){this.fn_search();};this.btn_close_onclick=function(_a,_b){this.close();};this.fn_makeGrid=function(){this.ds_totalSheep.set_enableevent(false);this.ds_subSheep.set_enableevent(false);this.ds_data.set_enableevent(false);this.grd.set_enableevent(false);try{var _a=this.ds_cond_pop.getColumn(0,"SCRPRO_SE")=="002"?"서류":this.ds_cond_pop.getColumn(0,"SCRPRO_SE")=="004"?"면접":"";this.grd.setCellProperty("Head",0,"text",_a+"심사 결과 집계표");this.grd.setCellProperty("Head",2,"text",this.gfn_today().substr(0,4)+"년 "+this.gfn_today().substr(5,2)+"월 "+this.gfn_today().substr(7,2)+"일 ");this.sta_acntCode.set_text(_a+"심사 결과 집계표");var _b=this.ds_scrproStdr.getColumn(0,"SM_OPT1");for(var _h=0;_h<this.ds_totalSheep.getRowCount();_h++ ){var _c=this.grd.appendContentsCol();this.grd.setFormatColProperty(_c,"size","100");this.grd.setCellProperty("Head",_c+this.grd.getFormatColCount()*4-1,"text",this.ds_totalSheep.getColumn(_h,"APYEXM_NO"));this.grd.setCellProperty("Head",_c+this.grd.getFormatColCount()*5-2,"text",this.ds_totalSheep.getColumn(_h,"NM_KOREAN"));this.grd.setCellProperty("Head",_c+this.grd.getFormatColCount()*6-3,"text",this.ds_totalSheep.getColumn(_h,"RNAK"));this.grd.setCellProperty("Head",_c+this.grd.getFormatColCount()*7-4,"text",this.ds_totalSheep.getColumn(_h,"AVG_EVL_SCORE"));this.grd.setCellProperty("Head",_c+this.grd.getFormatColCount()*8-5,"text",this.ds_totalSheep.getColumn(_h,"EPP_EVL_SCORE"));this.grd.setCellProperty("Summ",_c,"text",this.ds_totalSheep.getColumn(_h,"EXCEPT_EVL_SCORE"));this.grd.setCellProperty("Summ",_c-1+this.grd.getFormatColCount(),"text",this.ds_totalSheep.getColumn(_h,"MAX_EVL_SCORE"));this.grd.setCellProperty("Summ",_c-2+this.grd.getFormatColCount()*2,"text",this.ds_totalSheep.getColumn(_h,"MIN_EVL_SCORE"));this.grd.setCellProperty("Summ",_c,"align","center");this.grd.setCellProperty("Summ",_c-1+this.grd.getFormatColCount(),"align","center");this.grd.setCellProperty("Summ",_c-2+this.grd.getFormatColCount()*2,"align","center");this.grd.setCellProperty("Body",_c,"text","bind:"+"d_"+this.ds_totalSheep.getColumn(_h,"APYEXM_NO"));this.ds_data.addColumn("d_"+this.ds_totalSheep.getColumn(_h,"APYEXM_NO"));}this.ds_data.addRow();this.ds_data.setColumn(0,"COL1",_a+"심사점수");this.ds_data.setColumn(0,"MFCMM_NM","소계(A)");for(var _i=0;_i<this.ds_mfcmmList.getRowCount();_i++ ){var _d=this.ds_data.addRow();this.ds_data.setColumn(_d,"COL1",_a+"심사점수");this.ds_data.setColumn(_d,"MFCMM_NM",this.ds_mfcmmList.getColumn(_i,"NM"));}var _e=0;for(var _j=0;_j<this.ds_totalSheep.getRowCount();_j++ ){var _f=this.ds_totalSheep.getColumn(_j,"APYEXM_NO");this.ds_data.setColumn(0,"d_"+_f,this.ds_totalSheep.getColumn(this.ds_totalSheep.findRowExpr("APYEXM_NO == '"+_f+"'"),"EVL_SCORE"));for(var _k=0;_k<this.ds_mfcmmList.getRowCount();_k++ ){var _g=this.ds_mfcmmList.getColumn(_k,"MFCMM_NO");this.ds_data.setColumn(_k+1,"d_"+_f,this.ds_subSheep.getColumn(this.ds_subSheep.findRowExpr("APYEXM_NO == '"+_f+"' && MFCMM_NO == '"+_g+"'"),"EVL_SCORE"));}}this.grd.mergeContentsCell("Head",3,0,3,this.grd.getFormatColCount()-1,this.grd.getFormatColCount()*3,false);this.grd.mergeContentsCell("Head",2,0,2,this.grd.getFormatColCount()-1,this.grd.getFormatColCount()*2,false);this.grd.mergeContentsCell("Head",1,0,1,this.grd.getFormatColCount()-1,this.grd.getFormatColCount(),false);this.grd.mergeContentsCell("Head",0,0,0,this.grd.getFormatColCount()-1,0,false);}catch(e){alert(e.message);}if(_b=="002"){this.grd.deleteContentsRow("head",8,true);this.grd.deleteContentsRow("Summ",0,true);this.grd.deleteContentsRow("Summ",0,true);this.grd.deleteContentsRow("Summ",0,true);}this.ds_totalSheep.set_enableevent(true);this.ds_subSheep.set_enableevent(true);this.ds_data.set_enableevent(true);this.grd.set_enableevent(true);this.ds_data.set_rowposition(0);};this.Button00_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"excelFile");};this.fn_expExcel=function(_a,_b){this.setWaitCursor(true,true);var _c="obj_commonExport";var _d=new ExcelExportObject();var _e=new Date();var _f;var _g=application.services["svcurl"].url+"XExportImport.do";_d.set_name(_c);_d.addEventHandler("onsuccess",this._gfn_exportExcelEnd,this);_d.addEventHandler("onerror",this._gfn_exportExcelEndError,this);_d.clearExportItems(nexacro.ExportTypes.EXCEL2007);if(!this.comUtils.isNullEmpty(_b)){_b=_e.getTime()+"_"+_b;}else{_b=_e.getTime();}if(_a instanceof Grid){_f="Sheet1!A1";_d.addExportItem(nexacro.ExportItemTypes.GRID,_a,_f,"allband","allrecord","suppress","onlyvalue","none","color","both","cellline");}else{for(var _i=0;_i<_a.length;_i++ ){_f="A"+(_i+1);oGrid=obj[_i];_d.addExportItem(nexacro.ExportItemTypes.GRID,_a,_f+"!A1","allband","allrecord","suppress","none","background","font","both");}}_d.set_exporttype(nexacro.ExportTypes.EXCEL2007);_d.set_exportfilename(_b);_d.set_exporturl(_g);var _h=_d.exportData();};this.fn_mergeCell=function(_a){var _b= -1;for(var _f=this.grd.getFormatColCount()*3-1;_f>=this.grd.getFormatColCount()*2;_f-- ){var _c=this.grd.getCellProperty("Head",_f-1,"text");var _d=this.grd.getCellProperty("Head",_f,"text");var _e=this.grd.getCellProperty("Head",_f+1,"text");if(this.comUtils.isNullEmpty(_e)&&_d==_c&&_b== -1){_b=_f;}if(this.comUtils.isNullEmpty(_c)&&_b!= -1){if(_a=='2'){this.grd.mergeContentsCell("Head",2,_f-this.grd.getFormatColCount()*2,2,_b-this.grd.getFormatColCount()*2,_f,false);}else if(_a=='3'){this.grd.mergeContentsCell("Head",3,_f-this.grd.getFormatColCount()*2,3,_b-this.grd.getFormatColCount()*2,_f+this.grd.getFormatColCount(),false);}_b= -1;}}};});this.on_initEvent=function(){this.addEventHandler("onload",this.HRM020307_P1_onload,this);this.addEventHandler("oninit",this.HRM020307_P1_oninit,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_excel.addEventHandler("onclick",this.Button00_onclick,this);};this.loadIncludeScript("HRM020307_P1.xfdl");};})();