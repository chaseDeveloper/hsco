﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM050701");this.set_classname("HPM050701");this.set_titletext("분양카다로그");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_outlineList",this);_a._setContents("<ColumnInfo><Column id=\"CHUNG_MENU_CODE\" size=\"256\"/><Column id=\"BIZ_NAME\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_catalogList</Col><Col id=\"colId\">CHUNG_MENU_CODE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업명</Col></Row><Row><Col id=\"compId\">ds_catalogList</Col><Col id=\"colId\">FILE_SN_IMG</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">이미지</Col></Row><Row><Col id=\"compId\">ds_catalogList</Col><Col id=\"colId\">FILE_SN_PDF</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">공급안내 문서</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_fileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_catalogList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BIZ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHUNG_MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CATALOG_ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATALOG_SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATALOG_FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFY_USER\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN_PDF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_fileSnDoc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","0",null,null,"28","0",this);_a.set_taborder("3");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Grid("grd_supply","absolute","0","345",null,null,"0","40",this.Div00);_a.set_taborder("162");_a.set_binddataset("ds_catalogList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"266\"/><Column size=\"224\"/><Column size=\"285\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"76\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업명\"/><Cell col=\"1\" text=\"이미지명\"/><Cell col=\"2\" text=\"PDF 파일명\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"등록인\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" text=\"bind:CHUNG_MENU_CODE\" combodataset=\"ds_outlineList\" combocodecol=\"CHUNG_MENU_CODE\" combodatacol=\"BIZ_NAME\"/><Cell col=\"1\" text=\"bind:ORG_FILE_NAME\"/><Cell col=\"2\" text=\"bind:CATALOG_ORG_FILE_NAME\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:INPUT_DATE\" mask=\"####-##-##\"/><Cell col=\"4\" text=\"bind:INPUT_USER\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"expr:IS_CONFIRM=='1'?'1':'0'\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.Div00);_a.set_taborder("164");_a.set_text("분양 카다로그");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.Div00);_a.set_taborder("165");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","314","148","21",null,null,this.Div00);_a.set_taborder("166");_a.set_text("카다로그 목록");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","312","1031","2",null,null,this.Div00);_a.set_taborder("167");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.Div00);_a.set_taborder("163");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Div("div_info","absolute","0","32","1030","260",null,null,this.Div00);_a.set_taborder("169");_a.style.set_border("1 solid #808080ff");this.Div00.addChild(_a.name,_a);_a=new Static("Static03","fixed","-1","-1","1","3",null,null,this.Div00.div_info);_a.set_taborder("292");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static01","absolute","-1","3","1027","27",null,null,this.Div00.div_info);_a.set_taborder("294");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM15","absolute","-1","3","138","27",null,null,this.Div00.div_info);_a.set_taborder("302");_a.set_text("사업명");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM17","absolute","-1","29","138","108",null,null,this.Div00.div_info);_a.set_taborder("304");_a.set_text("이미지 업로드");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Grid("grd_fileList","fixed","139","55","886","81",null,null,this.Div00.div_info);_a.set_taborder("322");_a.set_binddataset("ds_fileList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"242\"/><Column size=\"125\"/><Column size=\"119\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"게시판목록\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일형식\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.Div00.div_info.addChild(_a.name,_a);_a=new Combo("cmb_outline","absolute","139","6","390","21",null,null,this.Div00.div_info);this.Div00.div_info.addChild(_a.name,_a);_a.set_taborder("327");_a.set_displaynulltext("-");_a.set_innerdataset("@ds_outlineList");_a.set_codecolumn("CHUNG_MENU_CODE");_a.set_datacolumn("BIZ_NAME");_a.set_cssclass("cmb_WF_Essential");_a.set_index("-1");_a=new Static("sta_NM00","absolute","532","3","138","27",null,null,this.Div00.div_info);_a.set_taborder("328");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new CheckBox("chk_useYn","absolute","676","5","83","21",null,null,this.Div00.div_info);_a.set_taborder("329");_a.set_text("사용");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("3");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute","867","33","6.71%","19",null,null,this.Div00.div_info);_a.set_taborder("331");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute","938","33","8.37%","19",null,null,this.Div00.div_info);_a.set_taborder("332");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM18","absolute","-1","136","138","122",null,null,this.Div00.div_info);_a.set_taborder("333");_a.set_text("PDF 업로드");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_downFiles00","absolute","938","140","8.37%","19",null,null,this.Div00.div_info);_a.set_taborder("334");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_uploadFiles00","absolute","867","140","6.71%","19",null,null,this.Div00.div_info);_a.set_taborder("335");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.Div00.div_info.addChild(_a.name,_a);_a=new Grid("grd_fileList00","fixed","139","164","886","92",null,null,this.Div00.div_info);_a.set_taborder("337");_a.set_binddataset("ds_fileList00");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"242\"/><Column size=\"125\"/><Column size=\"119\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"게시판목록\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일형식\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","300",null,"4","0",null,this.Div00);_a.set_taborder("170");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",753,653,this.Div00.div_info,function(_b){_b.set_taborder("169");_b.style.set_border("1 solid #808080ff");});this.Div00.div_info.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.Div00,function(_b){_b.set_taborder("3");_b.set_text("Div00");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HPM050701");_b.set_titletext("분양카다로그");});this.addLayout(_a.name,_a);_a=new BindItem("item5","Div00.div_info.cmb_outline","value","ds_catalogList","CHUNG_MENU_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.div_info.chk_useYn","value","ds_catalogList","IS_CONFIRM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM050701.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM050701.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("HPM050701.xfdl","lib::comUpDownUtils.xjs");this.registerScript("HPM050701.xfdl",function(){this.File_UpDownManager=null;this.HPM050701_oninit=function(_a,_b){this.fn_init_form(this);};this.HPM050701_onload=function(_a,_b){var _c={useMultiUpload:false,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"ETC","/HPG/boardfile/webjin/catalog/img");this.File_UpDownManager.init(_c);this.fn_search_outline();this.fn_search();};this.fn_search=function(){this.ds_catalogList.clearData();this.ds_fileList.clearData();this.ds_fileList00.clearData();this.fn_transaction("selectCatalogList");};this.fn_search_fileList=function(){var _a=this.ds_catalogList.rowposition;var _b=this.ds_catalogList.getColumn(_a,"FILE_SN_IMG");this.ds_cond_fileSn.clearData();var _c=this.ds_cond_fileSn.addRow();this.ds_cond_fileSn.setColumn(_c,"FILE_SN",_b);this.ds_fileList.clearData();this.fn_transaction("selectAtchFile");};this.fn_docSearch_fileList=function(){var _a=this.ds_catalogList.rowposition;var _b=this.ds_catalogList.getColumn(_a,"FILE_SN_PDF");this.ds_cond_fileSnDoc.clearData();var _c=this.ds_cond_fileSnDoc.addRow();this.ds_cond_fileSnDoc.setColumn(_c,"FILE_SN",_b);this.ds_fileList00.clearData();this.fn_transaction("selectAtchFileDoc");};this.fn_insert=function(){var _a=this.ds_catalogList.addRow();this.ds_catalogList.setColumn(_a,"IS_CONFIRM","3");};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.ds_catalogList.reset();this.ds_catalogList.applyChange();}};this.fn_save=function(){var _a=this.ds_catalogList.rowposition;var _b=this.ds_fileList.rowposition;var _c=this.ds_fileList00.rowposition;var _d=this.ds_fileList.getColumn(_b,"STRE_FILE_NM");var _e=this.ds_fileList.getColumn(_b,"FILE_EXTSN");var _f=this.ds_fileList.getColumn(_b,"ORGINL_FILE_NM");var _g=this.ds_fileList00.getColumn(_c,"STRE_FILE_NM");var _h=this.ds_fileList00.getColumn(_c,"FILE_EXTSN");var _i=this.ds_fileList00.getColumn(_c,"ORGINL_FILE_NM");var _j=_d+"."+_e;var _k=_g+"."+_h;if(_d==""||typeof _d=="undefined"){_j="";}if(_g==""||typeof _g=="undefined"){_k="";}this.ds_catalogList.setColumn(_a,"SAVE_FILE_NAME",_j);this.ds_catalogList.setColumn(_a,"CATALOG_SAVE_FILE_NAME",_k);this.ds_catalogList.setColumn(_a,"ORG_FILE_NAME",_f);this.ds_catalogList.setColumn(_a,"CATALOG_ORG_FILE_NAME",_i);this.ds_catalogList.setColumn(_a,"FILE_URL","/upload/ETC/HPG/boardfile/webjin/catalog/img/");this.ds_catalogList.setColumn(_a,"CATALOG_FILE_URL","/app_files/upload/ETC/HPG/boardfile/webjin/catalog/");this.ds_catalogList.setColumn(_a,"FILE_SN_IMG",this.ds_fileList.getColumn(_b,"FILE_SN"));this.ds_catalogList.setColumn(_a,"FILE_SN_PDF",this.ds_fileList00.getColumn(_c,"FILE_SN"));if(!this.gfn_checkValidation(this.ds_catalogList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveCatalogList");}else{return;}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectOutline":var _c="/hsco/hpm/ctm/HPM050701/selectOutlineList.do";var _d="";var _e="ds_outlineList=output1";break;case "selectCatalogList":var _c="/hsco/hpm/ctm/HPM050701/selectCatalogList.do";var _d="";var _e="ds_catalogList=output1";break;case "saveCatalogList":var _c="/hsco/hpm/ctm/HPM050701/saveCatalogList.do";var _d="input1=ds_catalogList:U";var _e="";break;case "selectAtchFile":var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_cond_fileSn";var _e="ds_fileList=output1";break;case "selectAtchFileDoc":var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_cond_fileSnDoc";var _e="ds_fileList00=output1";break;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "saveCatalogList":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectAtchFile":this.fn_fileExtChk();break;}}};this.btn_uploadFiles_onclick=function(_a,_b){this.fn_autoFileSn("ETC","HPG",this.File_UpDownManager,this.ds_fileList,this.ds_catalogList,"TBHPG_BIZ_CONTROL_URL","FILE_SN_IMG",["CHUNG_MENU_CODE"]);};this.btn_uploadFiles00_onclick=function(_a,_b){this.fn_autoFileSn("ETC","HPG",this.File_UpDownManager,this.ds_fileList00,this.ds_catalogList,"TBHPG_BIZ_CONTROL_URL","FILE_SN_PDF",["CHUNG_MENU_CODE"]);};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList.getRowCount();_h++ ){var _d=this.ds_fileList.getColumn(_h,"FILE_SN");var _e=this.ds_fileList.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.btn_downFiles00_onclick=function(_a,_b){var _c=this.ds_fileList00.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList00.getRowCount();_h++ ){var _d=this.ds_fileList00.getColumn(_h,"FILE_SN");var _e=this.ds_fileList00.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList00.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList00.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.Div00_div_info_grd_fileList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else{this.gfn_gridSort(_a,_b);}};this.fn_fileExtChk=function(){var _a=this.ds_fileList.rowposition;var _b=this.ds_fileList.getColumn(_a,"FILE_EXTSN");if(_b=="undefined"){return;}if(_b.toLowerCase()!="jpg"&&_b.toLowerCase()!="jpeg"&&_b.toLowerCase()!="gif"&&_b.toLowerCase()!="png"&&_b.toLowerCase()!="bmp"){this.gfn_message("info.파일.업로드.타입.불가","이미지가 아닌|이미지 파일만 업로드 가능합니다.");this.ds_fileList.deleteRow(_a);return;}var _c=this.ds_fileList00.rowposition;var _d=this.ds_fileList00.getColumn(_c,"FILE_EXTSN");if(_d=="undefined"){return;}if(_d.toLowerCase()!="pdf"){this.gfn_message("info.파일.업로드.타입.불가","pdf 가 아닌|pdf 파일만 업로드 가능합니다.");this.ds_fileList00.deleteRow(_c);return;}};this.fn_search_outline=function(){this.fn_transaction("selectOutline");};this.ds_catalogList_onrowposchanged=function(_a,_b){this.fn_search_fileList();this.fn_docSearch_fileList();if(this.ds_catalogList.getRowType(this.ds_catalogList.rowposition)==Dataset.ROWTYPE_INSERT){this.Div00.div_info.cmb_outline.set_readonly("false");}else{this.Div00.div_info.cmb_outline.set_readonly("true");}};});this.on_initEvent=function(){this.ds_catalogList.addEventHandler("onrowposchanged",this.ds_catalogList_onrowposchanged,this);this.addEventHandler("oninit",this.HPM050701_oninit,this);this.addEventHandler("onload",this.HPM050701_onload,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.div_info.grd_fileList.addEventHandler("onheadclick",this.Div00_div_info_grd_fileList_onheadclick,this);this.Div00.div_info.cmb_outline.addEventHandler("onitemchanged",this.Div00_div_info_cmb_pblicteMonth_onitemchanged,this);this.Div00.div_info.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.Div00.div_info.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.Div00.div_info.sta_NM18.addEventHandler("onclick",this.Div00_div_info_sta_NM01_onclick,this);this.Div00.div_info.btn_downFiles00.addEventHandler("onclick",this.btn_downFiles00_onclick,this);this.Div00.div_info.btn_uploadFiles00.addEventHandler("onclick",this.btn_uploadFiles00_onclick,this);this.Div00.div_info.grd_fileList00.addEventHandler("onheadclick",this.Div00_div_info_grd_fileList_onheadclick,this);this.Div00.Static02.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("HPM050701.xfdl");};})();