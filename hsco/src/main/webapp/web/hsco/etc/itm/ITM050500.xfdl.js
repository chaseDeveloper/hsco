﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ITM050500");this.set_classname("codeMng");this.set_titletext("표준절차서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_grid",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"11\"/><Column id=\"PROCSS_CHANGE_DT\" type=\"DATE\" size=\"255\"/><Column id=\"PROCSS_CHANGE_DTLS\" type=\"STRING\" size=\"4000\"/><Column id=\"PROCSS_ATCH_FILE\" type=\"STRING\" size=\"100\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PROCSS_ATCH_FLTPH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PROCSS_CHANGE_DT_F\" type=\"STRING\" size=\"8\"/><Column id=\"PROCSS_CHANGE_DT_T\" type=\"STRING\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_files",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"FILE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"2000\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"20\"/><Column id=\"FILE_CN\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_MG\" type=\"INT\" size=\"8\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"INT\" size=\"5\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"INT\" size=\"5\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"DELETE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_File",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_failList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_ladCode</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">토지코드</Col></Row><Row><Col id=\"compId\">ds_ladDetailList</Col><Col id=\"colId\">LAD_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">토지코드</Col></Row><Row><Col id=\"compId\">ds_ladDetailList</Col><Col id=\"colId\">BLCK</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">블록</Col></Row><Row><Col id=\"compId\">ds_ladDetailList</Col><Col id=\"colId\">LOT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">롯트</Col></Row><Row><Col id=\"compId\">ds_ladDetailList</Col><Col id=\"colId\">LOT_TY</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">롯트구분</Col></Row><Row><Col id=\"compId\">ds_ladDetailList</Col><Col id=\"colId\">SUPLY_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">공급구분</Col></Row><Row><Col id=\"compId\">ds_ladDetailList</Col><Col id=\"colId\">PRPOS_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">용도구분</Col></Row><Row><Col id=\"compId\">ds_ladPayInfoList</Col><Col id=\"colId\">PAY_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부코드</Col></Row><Row><Col id=\"compId\">ds_ladPayInfoList</Col><Col id=\"colId\">PAY_TMLMT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부기한일</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PROCSS_ATCH_FLTPH\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0%","0",null,"33","2.64%",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","5","63","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("변경일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_changeDeBegin","absolute","86","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static05","absolute","206","5","37","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_changeDeEnd","absolute","222","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_value("20150710");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static84","absolute","0","43","71","27",null,null,this);_a.set_taborder("6");_a.set_text("변경일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","69","43","960","27",null,null,this);_a.set_taborder("7");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Calendar("cal_changeDe","absolute","72","46","100","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static11","absolute","69","69","960","160",null,null,this);_a.set_taborder("8");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","69","70","160",null,null,this);_a.set_taborder("9");_a.set_text("변경내역");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new TextArea("txt_procssChangeDtls","absolute","73","72","953","154",null,null,this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","228","71","27",null,null,this);_a.set_taborder("10");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","69","228","960","27",null,null,this);_a.set_taborder("11");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","97.36%","0",null,"735","1.23%",null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.77%","0",null,"735","0%",null,this);_a.set_taborder("13");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid02","absolute","0%","289",null,null,"2.64%","6",this);_a.set_taborder("14");_a.set_binddataset("ds_grid");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"242\"/><Column size=\"447\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"변경일자\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"표준절차서\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"변경내역\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:PROCSS_CHANGE_DT\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PROCSS_ATCH_FILE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PROCSS_CHANGE_DTLS\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","33",null,"10","2.64%",null,this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static65","absolute","0%","255",null,"10","2.64%",null,this);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excel_down01","absolute",null,"265","28","19","28",null,this);_a.set_taborder("17");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","284","1100","5",null,null,this);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Edit("edt_atchFile","absolute","72","231","407","21",null,null,this);_a.set_taborder("19");_a.set_readonly("true");_a.set_enableevent("false");this.addChild(_a.name,_a);_a=new Button("btn_viewAtchFile","absolute","535","231","53","21",null,null,this);_a.set_taborder("5");_a.set_text("보기");this.addChild(_a.name,_a);_a=new Button("btn_atchFile","absolute","453","231","24","21",null,null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Search");this.addChild(_a.name,_a);_a=new Button("btn_cancelAtchFile","absolute","480","231","53","21",null,null,this);_a.set_taborder("21");_a.set_text("취소");this.addChild(_a.name,_a);_a=new Button("btn_delAtchFile","absolute","480","231","53","21",null,null,this);_a.set_taborder("4");_a.set_text("삭제");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");_b.set_scrollbars("none");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("codeMng");_b.set_titletext("표준절차서");});this.addLayout(_a.name,_a);_a=new BindItem("item18","cal_changeDe","value","ds_grid","PROCSS_CHANGE_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","txt_procssChangeDtls","value","ds_grid","PROCSS_CHANGE_DTLS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_changeDeBegin","value","ds_cond","PROCSS_CHANGE_DT_F");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_changeDeEnd","value","ds_cond","PROCSS_CHANGE_DT_T");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item38","edt_atchFile","value","ds_grid","PROCSS_ATCH_FILE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ITM050500.xfdl","lib::comInclude.xjs");this.addIncludeScript("ITM050500.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("ITM050500.xfdl",function(){this.SELECTED_LAD_CODE=null;this.SELECTED_LAD_NM=null;this.SELECTED_LAD_DETAIL_INFO=null;this.FILE_MANAGER=null;this.ITM050500_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.fn_init();};this.ITM050500_onload=function(_a,_b){var _c=new String(this.dateUtils.today());this.div_search.cal_changeDeBegin.set_value(_c.substring(0,6)+"01");this.div_search.cal_changeDeEnd.set_value(this.dateUtils.today());this.ds_cond.clearData();var _d=this.ds_cond.addRow();this.ds_cond.setColumn(_d,"PROCSS_CHANGE_DT_F",_c.substring(0,6)+"01");this.ds_cond.setColumn(_d,"PROCSS_CHANGE_DT_T",this.dateUtils.today());var _e={onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.FILE_MANAGER=new this.fileManager(this,"ETC","ITM");this.FILE_MANAGER.init(_e);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.checkDs.push(this.ds_grid);};this.fn_init_dataset=function(){};this.fn_search=function(){this.SELECTED_LAD_DETAIL_INFO=null;if(this.div_search.cal_changeDeBegin.value==''){alert('변경일자를 입력 하세요.');return false;}if(this.div_search.cal_changeDeEnd.value==''){alert('변경일자를 입력 하세요.');return false;}this.ds_grid.clearData();this.fn_transaction("selectList");};this.fn_transaction=function(_a){var _b=null;switch(_a){case "selectList":var _c="/hsco/etc/itm/ITM050500/ITM050500List.do";var _d="input1=ds_cond";var _e="ds_grid=output1";break;case "saveList":var _c="/hsco/etc/itm/ITM050500/ITM050500CU.do";var _f="input1=ds_grid:U";var _d=_f;var _e="";break;case "deleteList":this.ds_cond00.clearData();var _g=this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"PROCSS_ATCH_FLTPH",this.ds_grid.getColumn(this.ds_grid.rowposition,"PROCSS_ATCH_FLTPH"));this.ds_cond00.setColumn(0,"SN",this.ds_grid.getColumn(this.ds_grid.rowposition,"SN"));this.ds_cond00.setColumn(0,"FILE_SN",this.ds_grid.getColumn(this.ds_grid.rowposition,"PROCSS_ATCH_FLTPH"));trace(this.ds_cond00.saveXML());var _c="/hsco/etc/itm/ITM050500/ITM050500D.do";var _f="input1=ds_cond00";var _d=_f;var _e="";break;case "deleteFile":var _h=this.pmsUtil.getGridSelectedItem(this.Grid02);this.SELECTED_LAD_DETAIL_INFO=_h;_b=this.SELECTED_LAD_DETAIL_INFO;_b["FILE_SN"]=this.ds_grid.getColumn(this.ds_grid.rowposition,"PROCSS_ATCH_FLTPH");var _c="/hsco/etc/itm/ITM050500/ITM050500DFILE.do";var _d=_b;var _e="";break;case "GetFileSn":var _c="hsco/cmm/file/getFileSn.do";var _d="";var _e="ds_fileSn=output_fsn";break;case "downloadAtchFile":_b=this.SELECTED_LAD_DETAIL_INFO;_b["FILE_SN"]=_b["PROCSS_ATCH_FLTPH"];_b["FILE_ORDR"]="1";_c="hsco/cmm/download/fileDownload.do";_d=_b;_e="";break;}var _i=typeof (_d);if(_i=="object"){this.pmsUtil.pmsComTran(_a,_c,_d,_e,null,null,false);}else{Ex.core.tran(this,_a,_c,_d,_e,null,null,null);}};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveList":this.gfn_callBackMsg(_a,_b,_c);break;case "saveDetailList":this.gfn_callBackMsg(_a,_b,_c);break;case "deleteList":this.gfn_callBackMsg(_a,_b,_c);this.fn_search();break;case "deleteFile":this.fn_search();break;default:break;}};this.fn_insert=function(_a,_b){if(this.fn_check()){var _c=this.ds_grid.getRowType(this.ds_grid.rowposition);var _d=this.ds_grid.addRow();}};this.fn_delete=function(){var _a=this.pmsUtil.getGridSelectedItem(this.Grid02);var _b=_a["DS_ROW_TYPE"];var _c=_a["DS_ROW"];var _d="";var _e="";if(_b==Dataset.ROWTYPE_INSERT){this.ds_grid.deleteRow(_c);}else{_d="comm.행위여부";_e="선택한 정보를 삭제합니다.\n진행";if(this.gfn_message(_d,_e)){this.fn_transaction("deleteList");}}};this.fn_save=function(){var _a=this.FILE_MANAGER.hasFile();if(_a){var _b=this.FILE_MANAGER.getfileCount();trace("첨부파일 있음!"+_b);var _c="/hsco/etc/itm/ITM050500/ITM050500CU.do";var _d="input1=ds_grid:U";var _e="ds_failList=failList";this.FILE_MANAGER.upload(_c,_d,_e);}else{if(application.confirm("변경된 내용을 저장하시겠습니까?")){if(this.fn_check()){this.fn_transaction("saveList");}}else{alert('저장할 정보가 존재하지 않습니다');}}};this.fn_check=function(){var _a="";var _b="";var _c=this.ds_grid.rowposition;if(_c> -1){dt=this.ds_grid.getColumn(_c,"PROCSS_CHANGE_DT");if(!dt){alert("변경일자는 필수입력 사항입니다.");return false;}else{return true;}}else{return true;}};this.btn_excel_down01_onclick=function(_a,_b){this.gfn_exportExcel(this.Grid02,"exportExl");};this.Grid02_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};this.div_work_btn_popupFile_onclick=function(_a,_b){this.fn_transaction("GetFileSn");if(!this.fn_ds_popUp_validate){return;}this.ds_fileSn.setColumn(0,"SYS_SE_CODE",this.sysSe);this.ds_fileSn.setColumn(0,"JOB_SE",this.jobSe);var _c={arg_0:this,arg_1:this.ds_files,arg_2:this.ds_fileSn};this.gfn_popup("Popup_2",694,528,"업로드파일 선택 / 다운로드",_c,"com::COM010300_P01.xfdl","div_work_btn_popupFile_callback");};this.fn_ds_popUp_validate=function(){var _a=true;if(this.ds_fileSn.getRowCount()==0){_a=false;return;}else{var _b=this.ds_fileSn.getColumn(0,"SYS_SE_CODE");var _c=this.ds_fileSn.getColumn(0,"JOB_SE");if(_b==""||_b==null||_b==undefined){_a=false;return;}if(_c==""||_c==null||_c==undefined){_a=false;return;}}return _a;};this.fn_btnOnClickHandler=function(_a,_b){var _c=_a.name;switch(_c){case "btn_atchFile":this.fn_addAtchFile();trace("11111");break;case "btn_cancelAtchFile":this.fn_canceAtchlFile();break;case "btn_delAtchFile":this.fn_deleteAtchFile();break;case "btn_viewAtchFile":this.fn_downloadAtchFile();break;default:break;}};this.fn_addAtchFile=function(){this.FILE_MANAGER.addFiles();};this.fn_canceAtchlFile=function(){this.ds_grid.setColumn(this.ds_grid.rowposition,"PROCSS_ATCH_FILE","");this.fn_setAtchFileView();};this.fn_deleteAtchFile=function(){var _a="첨부파일을 삭제하시겠습니까?";if(confirm(_a)){this.fn_transaction("deleteFile");}};this.fn_downloadAtchFile=function(){var _a=this.SELECTED_LAD_DETAIL_INFO==null?this.pmsUtil.getGridSelectedItem(this.Grid02):this.SELECTED_LAD_DETAIL_INFO;var _b=_a["PROCSS_ATCH_FLTPH"];var _c="1";var _d=_a["PROCSS_ATCH_FILE"];this.FILE_MANAGER.download(_b,_c,_d);};this.fn_onFileSelected=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){var _c=this.pmsUtil.isArray(_b);if(_c){}else{this.ds_grid.setColumn(this.ds_grid.rowposition,"PROCSS_ATCH_FILE",_b);this.fn_setAtchFileView();}}};this.fn_onFileSuccess=function(_a,_b){if(_a==this.FILE_MANAGER.TYPE_UPLOADER){this.fn_search();}if(_a==this.FILE_MANAGER.TYPE_DOWNLOADER){alert("파일 다운로드 완료");}};this.fn_setAtchFileView=function(){var _a=this.pmsUtil.getGridSelectedItem(this.Grid02,"PROCSS_ATCH_FLTPH");var _b=this.pmsUtil.getGridSelectedItem(this.Grid02,"PROCSS_ATCH_FILE");var _c=this.comUtils.isNullEmpty(_a)?false:true;var _d=this.comUtils.isNullEmpty(_b)?false:true;this.btn_atchFile.set_visible(!_d);this.btn_cancelAtchFile.set_visible(!_c);if(!_c){this.btn_cancelAtchFile.set_enable(_d);}this.btn_delAtchFile.set_visible(_c);this.btn_viewAtchFile.set_visible(_c);};this.ds_grid_onrowposchanged=function(_a,_b){this.fn_setAtchFileView();};});this.on_initEvent=function(){this.ds_grid.addEventHandler("onrowposchanged",this.ds_grid_onrowposchanged,this);this.addEventHandler("oninit",this.ITM050500_oninit,this);this.addEventHandler("onload",this.ITM050500_onload,this);this.Grid02.addEventHandler("onheadclick",this.Grid02_onheadclick,this);this.btn_excel_down01.addEventHandler("onclick",this.btn_excel_down01_onclick,this);this.btn_viewAtchFile.addEventHandler("onclick",this.fn_btnOnClickHandler,this);this.btn_atchFile.addEventHandler("onclick",this.fn_btnOnClickHandler,this);this.btn_cancelAtchFile.addEventHandler("onclick",this.fn_btnOnClickHandler,this);this.btn_delAtchFile.addEventHandler("onclick",this.fn_btnOnClickHandler,this);};this.loadIncludeScript("ITM050500.xfdl");};})();