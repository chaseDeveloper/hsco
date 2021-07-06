﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS110104_T06");this.set_classname("SLS110104_T06");this.set_titletext("소유권이전현황");this._setFormPosition(0,0,1059,735);}this.getSetter("layoutautofittype").set("width");_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNSHIP_BEFORE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladOwnShipTransrSttusList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OWNSHIP_TRANSR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OWNSHIP_NOT_TRANSR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_LOT_CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_grdTitle","absolute","0","5","169","19",null,null,this);_a.set_taborder("0");_a.set_text("소유권이전현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_excelDown","absolute",null,"45","25","19","1",null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Grid("grd_ladOwnShipTransrSttus","absolute","1","29",null,null,"1","1",this);_a.set_taborder("3");_a.set_autofittype("col");_a.set_binddataset("ds_ladOwnShipTransrSttusList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"토지명\"/><Cell col=\"1\" text=\"용도구분\"/><Cell col=\"2\" text=\"총필수\"/><Cell col=\"3\" text=\"소유권이전수\"/><Cell col=\"4\" text=\"소유권미이전수\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:LAD_NM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" text=\"bind:PRPOS_SE_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL_LOT_CNT\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OWNSHIP_TRANSR_CNT\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OWNSHIP_NOT_TRANSR_CNT\" mask=\"#,##0\"/><Cell col=\"5\" text=\"bind:지번\"/></Band><Band id=\"summary\"><Cell colspan=\"2\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합 계\"/></Cell><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TOTAL_LOT_CNT')\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('OWNSHIP_TRANSR_CNT')\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('OWNSHIP_NOT_TRANSR_CNT')\" mask=\"#,##0\"/><Cell col=\"5\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS110104_T06");_b.set_titletext("소유권이전현황");_b.getSetter("layoutautofittype").set("width");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SLS110104_T06.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS110104_T06.xfdl",function(){this.DEFAULT_DATE=null;this.PARENT_FORM=null;this.SEARCH_PARAM_SET=["LAD_CODE","CNTRCT_STTUS"];this.USE_EXCEL_DOWN=false;this.SLS110104_T06_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS110104_T06_onload=function(_a,_b){this.DEFAULT_DATE=this.gfn_today();this.fn_setDefaultInfo();};this.SLS110104_T06_onactivate=function(_a,_b){this.fn_setDefaultInfo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.pmsUtil.clearDataSet([this.ds_cond00]);};this.fn_loadCombo=function(){};this.fn_callbackAfter=function(){};this.fn_search=function(_a,_b){this.pmsUtil.clearDataSet([this.ds_ladOwnShipTransrSttusList]);if(this.PARENT_FORM==null){this.PARENT_FORM=_a;}this.ds_cond00.copyData(_b);this.fn_transaction("selectLadOwnShipTransrSttusList");};this.fn_transaction=function(_a){var _b=true;var _c=null;var _d=null;var _e=null;switch(_a){case "selectLadOwnShipTransrSttusList":_c="hsco/pms/sls/lad/stt/SLS110104/selectLadOwnShipTransrSttusList.do";_d="input1=ds_cond00";_e="ds_ladOwnShipTransrSttusList=ladOwnShipTransrSttusList";break;default:break;}if(_c==null){return;}var _f=typeof (_d);if(_f=="object"){this.pmsUtil.pmsComTran(_a,_c,reqParam,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null,_b);}};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "selectLadOwnShipTransrSttusList":break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.fn_btnOnClickHandler=function(_a,_b){var _c=_a.name;switch(_c){case "btn_excelDown":this.PARENT_FORM.fn_downloadExcelFromGrid(this.grd_ladOwnShipTransrSttus,this.ds_ladOwnShipTransrSttusList,"lad_ownship_transr_sttus");break;default:break;}};this.fn_setDefaultInfo=function(){var _a=this.parent.parent.fn_setSchLayout(this,this.SEARCH_PARAM_SET);if(_a){this.PARENT_FORM=_a;this.USE_EXCEL_DOWN=_a.USE_EXCEL_DOWN;this.btn_excelDown.set_visible(this.USE_EXCEL_DOWN);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS110104_T06_oninit,this);this.addEventHandler("onload",this.SLS110104_T06_onload,this);this.addEventHandler("onactivate",this.SLS110104_T06_onactivate,this);this.btn_excelDown.addEventHandler("onclick",this.fn_btnOnClickHandler,this);};this.loadIncludeScript("SLS110104_T06.xfdl");};})();