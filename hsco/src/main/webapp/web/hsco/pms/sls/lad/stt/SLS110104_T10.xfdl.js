﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS110104_T10");this.set_classname("SLS110104_T10");this.set_titletext("잔금납부현황");this.set_visible("true");this._setFormPosition(0,0,1059,735);}this.getSetter("layoutautofittype").set("width");_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNSHIP_BEFORE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_FM\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladRemndrAmtPaySttusList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:BLCK_SUM");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AR\" type=\"FLOAT\" size=\"256\"/><Column id=\"DCSN_UNTPC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DCSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_rcivDeFm</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\">cal_rcivDeTo</Col><Col id=\"msgId\">수납일</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","5",null,"33","0",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schRcivDe","absolute","15","5","64",null,null,"5",this.div_search);_a.set_taborder("46");_a.set_text("수납일");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_rcivDeFm","absolute","84","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a.set_autoselect("true");_a=new Static("Static10","absolute","184","5","16","21",null,null,this.div_search);_a.set_taborder("51");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_rcivDeTo","absolute","200","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a.set_autoselect("true");_a=new Static("sta_schNm","absolute","315","5","50",null,null,"5",this.div_search);_a.set_taborder("54");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_cntrctrNm","absolute","370","5","100","21",null,null,this.div_search);_a.set_taborder("2");_a.set_autoselect("true");_a.set_imemode("hangul");this.div_search.addChild(_a.name,_a);_a=new Static("sta_grdTitle","absolute","0","43","100","19",null,null,this);_a.set_taborder("3");_a.set_text("잔금납부현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("sta_grdResultStatus","absolute","99","43",null,"19","30",null,this);_a.set_taborder("6");this.addChild(_a.name,_a);_a=new Button("btn_excelDown","absolute",null,"75","25","19","1",null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Grid("grd_ladRemndrAmtPaySttus","absolute","1","67",null,null,"1","1",this);_a.set_taborder("1");_a.set_autofittype("none");_a.set_binddataset("ds_ladRemndrAmtPaySttusList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"8\" text=\"토지정보\"/><Cell col=\"8\" colspan=\"4\" text=\"잔금정보\"/><Cell col=\"12\" colspan=\"3\" text=\"계약정보\"/><Cell row=\"1\" text=\"토지명\"/><Cell row=\"1\" col=\"1\" text=\"용도구분\"/><Cell row=\"1\" col=\"2\" text=\"블럭\"/><Cell row=\"1\" col=\"3\" text=\"롯트\"/><Cell row=\"1\" col=\"4\" text=\"구분\"/><Cell row=\"1\" col=\"5\" text=\"소재지\"/><Cell row=\"1\" col=\"6\" text=\"면적\"/><Cell row=\"1\" col=\"7\" text=\"분양금액\"/><Cell row=\"1\" col=\"8\" text=\"납부기한일\"/><Cell row=\"1\" col=\"9\" text=\"최종수납일\"/><Cell row=\"1\" col=\"10\" text=\"납부금액\"/><Cell row=\"1\" col=\"11\" text=\"수납금액\"/><Cell row=\"1\" col=\"12\" text=\"성명\"/><Cell row=\"1\" col=\"13\" text=\"주민번호\"/><Cell row=\"1\" col=\"14\" text=\"주소\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:LAD_NM\"/><Cell col=\"1\" text=\"bind:PRPOS_SE_NM\"/><Cell col=\"2\" text=\"bind:BLCK\"/><Cell col=\"3\" text=\"bind:LOT\"/><Cell col=\"4\" text=\"bind:LOT_TY\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:LAD_ADRES\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DCSN_AR\" mask=\"#,##0.00\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL_PAYAMT\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:PAY_TMLMT\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'PAY_TMLMT'))\"/><Cell col=\"9\" text=\"bind:RCIV_DE\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'RCIV_DE'))\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYAMT\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RCIV_AMOUNT\" mask=\"#,##0\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:CSTMR_NM\"/><Cell col=\"13\" text=\"bind:IHIDNUM\" mask=\"######-*******\" maskchar=\"*\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:ADRES_ALL\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('DCSN_AR')\" mask=\"#,##0.00\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TOTAL_PAYAMT')\" mask=\"#,##0\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PAYAMT')\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('RCIV_AMOUNT')\" mask=\"#,##0\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS110104_T10");_b.set_titletext("잔금납부현황");_b.getSetter("layoutautofittype").set("width");_b.set_visible("true");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_rcivDeFm","value","ds_cond00","RCIV_DE_FM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_rcivDeTo","value","ds_cond00","RCIV_DE_TO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_cntrctrNm","value","ds_cond00","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS110104_T10.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS110104_T10.xfdl",function(){this.DEFAULT_DATE=null;this.DEFAULT_DATE_FROM=null;this.DEFAULT_DATE_TO=null;this.PARENT_FORM=null;this.SEARCH_PARAM_SET=["LAD_CODE","CNTRCT_STTUS","PRPOS_SE","REMNDR_LAD_SE"];this.USE_EXCEL_DOWN=false;this.SLS110104_T10_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS110104_T10_onload=function(_a,_b){this.DEFAULT_DATE=this.gfn_today();this.DEFAULT_DATE_FROM=this.DEFAULT_DATE;this.DEFAULT_DATE_TO=this.DEFAULT_DATE;this.ds_cond00.setColumn(0,"RCIV_DE_FM",this.DEFAULT_DATE_FROM);this.ds_cond00.setColumn(0,"RCIV_DE_TO",this.DEFAULT_DATE_TO);this.fn_setDefaultInfo();};this.SLS110104_T10_onactivate=function(_a,_b){this.fn_setDefaultInfo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.pmsUtil.clearDataSet([this.ds_cond00]);};this.fn_loadCombo=function(){};this.fn_callbackAfter=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.pmsUtil.clearDataSet([this.ds_ladRemndrAmtPaySttusList]);if(this.PARENT_FORM==null){this.PARENT_FORM=_a;}var _c=this.pmsUtil.getDatasetItem(_b);this.pmsUtil.putMapToDataset(this.ds_cond00,_c);this.fn_transaction("selectLadRemndrAmtPaySttusList");};this.fn_transaction=function(_a){var _b=true;var _c=null;var _d=null;var _e=null;switch(_a){case "selectLadRemndrAmtPaySttusList":_c="hsco/pms/sls/lad/stt/SLS110104/selectLadRemndrAmtPaySttusList.do";_d="input1=ds_cond00";_e="ds_ladRemndrAmtPaySttusList=ladRemndrAmtPaySttusList";break;default:break;}if(_c==null){return;}var _f=typeof (_d);if(_f=="object"){this.pmsUtil.pmsComTran(_a,_c,reqParam,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null,_b);}};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "selectLadRemndrAmtPaySttusList":this.fn_setResultStatus();break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.fn_calendarOnkeyupHandler=function(_a,_b){var _c=_a.name;var _d=_b.keycode;switch(_c){case "cal_rcivDeFm":case "cal_rcivDeTo":if(_d=='13'){this.PARENT_FORM.fn_search();}break;default:break;}};this.fn_editOnKeyUpHandler=function(_a,_b){var _c=_a.name;var _d=_b.keycode;switch(_c){case "edt_cntrctrNm":if(_d==13){this.PARENT_FORM.fn_search();}break;default:break;}};this.fn_btnOnClickHandler=function(_a,_b){var _c=_a.name;switch(_c){case "btn_excelDown":this.PARENT_FORM.fn_downloadExcelFromGrid(this.grd_ladRemndrAmtPaySttus,this.ds_ladRemndrAmtPaySttusList,"lad_remndr_amt_pay_sttus");break;default:break;}};this.fn_setDefaultInfo=function(){var _a=this.parent.parent.fn_setSchLayout(this,this.SEARCH_PARAM_SET);if(_a){this.PARENT_FORM=_a;this.USE_EXCEL_DOWN=_a.USE_EXCEL_DOWN;this.btn_excelDown.set_visible(this.USE_EXCEL_DOWN);}};this.fn_setResultStatus=function(){this.pmsUtil.setListSizeStatus(this.ds_ladRemndrAmtPaySttusList,this.sta_grdResultStatus);};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS110104_T10_oninit,this);this.addEventHandler("onload",this.SLS110104_T10_onload,this);this.addEventHandler("onactivate",this.SLS110104_T10_onactivate,this);this.div_search.cal_rcivDeFm.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.div_search.cal_rcivDeTo.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.div_search.edt_cntrctrNm.addEventHandler("onkeyup",this.fn_editOnKeyUpHandler,this);this.btn_excelDown.addEventHandler("onclick",this.fn_btnOnClickHandler,this);};this.loadIncludeScript("SLS110104_T10.xfdl");};})();