﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS110104_T05");this.set_classname("SLS110104_T05");this.set_titletext("토지별명의변경");this._setFormPosition(0,0,1059,735);}this.getSetter("layoutautofittype").set("width");_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_FM\" type=\"STRING\" size=\"256\"/><Column id=\"BLT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNSHIP_BEFORE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE_FM\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM_STTUS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladNmChangeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AR\" type=\"FLOAT\" size=\"256\"/><Column id=\"DCSN_UNTPC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DCSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHANGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGHY\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO_BFCHG\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_ADRES_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"BFCHG_MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MBTLNO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cal_changeDeFm</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\">cal_changeDeTo</Col><Col id=\"msgId\">계약일</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","5",null,"33","0",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_schHouseSe","absolute","15","5","64",null,null,"5",this.div_search);_a.set_taborder("46");_a.set_text("계약일");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_changeDeFm","absolute","84","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a.set_autoselect("true");_a=new Static("Static10","absolute","189","5","16","21",null,null,this.div_search);_a.set_taborder("51");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_changeDeTo","absolute","205","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a.set_autoselect("true");_a=new Static("sta_grdTitle","absolute","0","43","169","19",null,null,this);_a.set_taborder("3");_a.set_text("명의변경내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_excelDown","absolute",null,"75","25","19","1",null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");_a.set_enable("false");this.addChild(_a.name,_a);_a=new Grid("grd_ladNmChange","absolute","1","67",null,null,"1","1",this);_a.set_taborder("1");_a.set_autofittype("none");_a.set_binddataset("ds_ladNmChangeList");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"10\" text=\"토지정보\"/><Cell col=\"10\" colspan=\"6\" text=\"당초분양자\"/><Cell col=\"16\" colspan=\"7\" text=\"명의변경자\"/><Cell col=\"23\" colspan=\"2\" text=\"변경전수납정보\"/><Cell row=\"1\" text=\"토지명\"/><Cell row=\"1\" col=\"1\" text=\"용도구분\"/><Cell row=\"1\" col=\"2\" text=\"블럭\"/><Cell row=\"1\" col=\"3\" text=\"롯트\"/><Cell row=\"1\" col=\"4\" text=\"구분\"/><Cell row=\"1\" col=\"5\" text=\"소재지\"/><Cell row=\"1\" col=\"6\" text=\"면적\"/><Cell row=\"1\" col=\"7\" text=\"분양금액(원)\"/><Cell row=\"1\" col=\"8\" text=\"계약일자\"/><Cell row=\"1\" col=\"9\" text=\"공급구분\"/><Cell row=\"1\" col=\"10\" text=\"성명\"/><Cell row=\"1\" col=\"11\" text=\"주민번호\"/><Cell row=\"1\" col=\"12\" text=\"우편번호\"/><Cell row=\"1\" col=\"13\" text=\"주소\"/><Cell row=\"1\" col=\"14\" text=\"전화\"/><Cell row=\"1\" col=\"15\" text=\"휴대전화\"/><Cell row=\"1\" col=\"16\" text=\"성명\"/><Cell row=\"1\" col=\"17\" text=\"주민번호\"/><Cell row=\"1\" col=\"18\" text=\"주소\"/><Cell row=\"1\" col=\"19\" text=\"전화\"/><Cell row=\"1\" col=\"20\" text=\"휴대전화\"/><Cell row=\"1\" col=\"21\" text=\"변경일자\"/><Cell row=\"1\" col=\"22\" text=\"변경구분\"/><Cell row=\"1\" col=\"23\" text=\"금액\"/><Cell row=\"1\" col=\"24\" text=\"최종수납일\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:LAD_NM\"/><Cell col=\"1\" text=\"bind:PRPOS_SE_NM\"/><Cell col=\"2\" text=\"bind:BLCK\"/><Cell col=\"3\" text=\"bind:LOT\"/><Cell col=\"4\" text=\"bind:LOT_TY\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:LAD_ADRES\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DCSN_AR\" mask=\"#,##0.00\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DCSN_AMOUNT\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:CNTRCT_DE\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'CNTRCT_DE'))\"/><Cell col=\"9\" text=\"bind:SUPLY_CODE_NM\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:BFCHG_NM\"/><Cell col=\"11\" text=\"bind:BFCHG_IHIDNUM\" mask=\"expr:BFCHG_IHIDNUM == null  ? &quot;&quot;  : '######-#######'\" tooltiptext=\"BFCHG_IHIDNUM.substr(0,6)+ '-' + BFCHG_IHIDNUM.substr(6)\"/><Cell col=\"12\" text=\"bind:BFCHG_ZIP\" expr=\"comp.parent.pmsUtil.formatZip(dataset.getColumn(currow,'BFCHG_ZIP'))\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:BFCHG_ADRES_ALL\"/><Cell col=\"14\" text=\"bind:BFCHG_TELNO\" expr=\"comp.parent.pmsUtil.formatPhone(dataset.getColumn(currow,'BFCHG_TELNO'))\"/><Cell col=\"15\" text=\"bind:BFCHG_MBTLNO\" expr=\"comp.parent.pmsUtil.formatPhone(dataset.getColumn(currow,'BFCHG_MBTLNO'))\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:CSTMR_NM\"/><Cell col=\"17\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#######'\" tooltiptext=\"expr:IHIDNUM.substr(0,6)+ '-' + IHIDNUM.substr(6)\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:ADRES_ALL\"/><Cell col=\"19\" text=\"bind:TELNO\" expr=\"comp.parent.pmsUtil.formatPhone(dataset.getColumn(currow,'TELNO'))\"/><Cell col=\"20\" text=\"bind:MBTLNO\" expr=\"comp.parent.pmsUtil.formatPhone(dataset.getColumn(currow,'MBTLNO'))\"/><Cell col=\"21\" text=\"bind:CHANGE_DE\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'CHANGE_DE'))\"/><Cell col=\"22\" text=\"bind:CHANGE_SE_NM\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYAMT\" mask=\"#,##0\"/><Cell col=\"24\" text=\"bind:RCIV_DE\" expr=\"comp.parent.pmsUtil.formatDate(dataset.getColumn(currow,'RCIV_DE'))\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SLS110104_T05");_b.set_titletext("토지별명의변경");_b.getSetter("layoutautofittype").set("width");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_changeDeFm","value","ds_cond00","CHANGE_DE_FM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_changeDeTo","value","ds_cond00","CHANGE_DE_TO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS110104_T05.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS110104_T05.xfdl",function(){this.DEFAULT_DATE=null;this.DEFAULT_DATE_FROM=null;this.DEFAULT_DATE_TO=null;this.PARENT_FORM=null;this.SEARCH_PARAM_SET=["LAD_CODE","BLCK_FM","LOT_FM","LOT_TY_FM","BLCK_TO","LOT_TO","LOT_TY_TO","CNTRCT_STTUS","LAD_SE","PRPOS_SE","SUPLY_CODE","REMNDR_LAD_SE","IHIDNUM_STTUS_AT"];this.USE_EXCEL_DOWN=false;this.SLS110104_T05_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.SLS110104_T05_onload=function(_a,_b){this.DEFAULT_DATE=this.gfn_today();this.DEFAULT_DATE_FROM=this.DEFAULT_DATE;this.DEFAULT_DATE_TO=this.DEFAULT_DATE;this.ds_cond00.setColumn(0,"CHANGE_DE_FM",this.DEFAULT_DATE_FROM);this.ds_cond00.setColumn(0,"CHANGE_DE_TO",this.DEFAULT_DATE_TO);this.fn_setDefaultInfo();};this.SLS110104_T05_onactivate=function(_a,_b){this.fn_setDefaultInfo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.pmsUtil.clearDataSet([this.ds_cond00]);};this.fn_loadCombo=function(){};this.fn_callbackAfter=function(){};this.fn_search=function(_a,_b){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.pmsUtil.clearDataSet([this.ds_ladNmChangeList]);if(this.PARENT_FORM==null){this.PARENT_FORM=_a;}var _c=this.pmsUtil.getDatasetItem(_b);this.pmsUtil.putMapToDataset(this.ds_cond00,_c);this.fn_transaction("selectLadNmChangeList");};this.fn_transaction=function(_a){var _b=true;var _c=null;var _d=null;var _e=null;switch(_a){case "selectLadNmChangeList":_c="hsco/pms/sls/lad/stt/SLS110104/selectLadNmChangeList.do";_d="input1=ds_cond00";_e="ds_ladNmChangeList=ladNmChangeList";break;default:break;}if(_c==null){return;}var _f=typeof (_d);if(_f=="object"){this.pmsUtil.pmsComTran(_a,_c,reqParam,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null,_b);}};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "selectLadNmChangeList":break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.fn_calendarOnkeyupHandler=function(_a,_b){var _c=_a.name;var _d=_b.keycode;switch(_c){case "cal_changeDeFm":case "cal_changeDeTo":if(_d=='13'){this.PARENT_FORM.fn_search();}break;default:break;}};this.fn_btnOnClickHandler=function(_a,_b){var _c=_a.name;switch(_c){case "btn_excelDown":this.PARENT_FORM.fn_downloadExcelFromGrid(this.grd_ladNmChange,this.ds_ladNmChangeList,"lad_nm_change");break;default:break;}};this.fn_setDefaultInfo=function(){var _a=this.parent.parent.fn_setSchLayout(this,this.SEARCH_PARAM_SET);if(_a){this.PARENT_FORM=_a;this.USE_EXCEL_DOWN=_a.USE_EXCEL_DOWN;this.btn_excelDown.set_visible(this.USE_EXCEL_DOWN);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS110104_T05_oninit,this);this.addEventHandler("onload",this.SLS110104_T05_onload,this);this.addEventHandler("onactivate",this.SLS110104_T05_onactivate,this);this.div_search.cal_changeDeFm.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.div_search.cal_changeDeTo.addEventHandler("onkeyup",this.fn_calendarOnkeyupHandler,this);this.btn_excelDown.addEventHandler("onclick",this.fn_btnOnClickHandler,this);};this.loadIncludeScript("SLS110104_T05.xfdl");};})();