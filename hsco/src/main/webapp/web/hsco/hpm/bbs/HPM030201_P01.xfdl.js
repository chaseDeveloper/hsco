﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM030201_P01");this.set_classname("Pattern_03");this.set_titletext("게시글 등록");this._setFormPosition(0,0,770,830);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BBS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_IDX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_boardKind",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_boardConfirmYn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BOARD_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONFIRM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_board",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BOARD_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"APP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SANCTNSTS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SANCTNSTS_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_WIDTH\" type=\"string\" size=\"16\"/><Column id=\"FILE_HEIGHT\" type=\"string\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_downfileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_WIDTH\" type=\"string\" size=\"16\"/><Column id=\"FILE_HEIGHT\" type=\"string\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_addfileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_WIDTH\" type=\"string\" size=\"16\"/><Column id=\"FILE_HEIGHT\" type=\"string\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"0","15","100%","0",null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","35","100%","10",null,null,this);_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","0","100%","35",null,null,this);_a.set_text("게시글 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_exit","absolute",null,"0","50","35","5",null,this);_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","100%",null,null,this);_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","69","100%","5",null,null,this);_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","16","40",null,null,"16","10",this);this.addChild(_a.name,_a);_a=new Button("btn_save","absolute",null,"3","80","25","0",null,this.div_work);_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","178",null,null,"0","0",this.div_work);_a.set_taborder("403");_a.set_cssclass("sta_WF_Labelbg");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","61",null,"27","0",null,this.div_work);_a.set_taborder("404");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","35",null,"27","0",null,this.div_work);_a.set_taborder("405");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","0","61","100","27",null,null,this.div_work);_a.set_taborder("415");_a.set_text("게시물구분");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","0","35","100","27",null,null,this.div_work);_a.set_taborder("416");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","500","35","100","27",null,null,this.div_work);_a.set_taborder("424");_a.set_text("작성자");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Edit("USER_NAME","absolute","605","38","127","21",null,null,this.div_work);_a.set_taborder("433");_a.set_readonly("false");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Edit("BOARD_TITLE","absolute","102","38","394","21",null,null,this.div_work);_a.set_taborder("434");_a.set_readonly("false");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Combo("BOARD_KIND","absolute","102","64","394","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("437");_a.set_innerdataset("@ds_boardKind");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_type("dropdown");_a.set_readonly("false");_a.set_cssclass("cmb_WF_Essential");_a=new Div("RichTextEditor","absolute","17","214","720","521",null,null,this.div_work);_a.set_taborder("16");_a.set_text("RichTextEditor");_a.set_scrollbars("autovert");_a.style.set_border("0 none #808080ff");_a.set_async("false");_a.set_url("common::RichTextEditor.xfdl");this.div_work.addChild(_a.name,_a);_a=new Div("RichTextEditorPreview","absolute","17","214","710","550",null,null,this.div_work);_a.set_taborder("16");_a.set_text("RichTextEditorPreview");_a.set_scrollbars("autovert");_a.style.set_border("0 none #808080ff");_a.set_async("false");_a.set_url("common::RichTextEditorPreview.xfdl");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","121",null,"88","0",null,this.div_work);_a.set_taborder("451");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_fileList","fixed","4",null,null,"80","91","575",this.div_work);_a.set_taborder("447");_a.set_binddataset("ds_fileList");_a.set_autofittype("col");_a.style.set_border("2 solid #3a7ab8ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff,1 solid #e0e0e0ff");_a.style.set_color("#444444ff");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"85\"/><Column size=\"65\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell celltype=\"head\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"파일형식\"/><Cell col=\"4\" text=\"확장자\"/><Cell col=\"5\" text=\"사이즈(KB)\"/></Band><Band id=\"body\"><Cell celltype=\"head\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"4\" text=\"bind:FILE_EXTSN\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:FILE_MG/1000\" mask=\"9,999\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_fileDownload","absolute",null,"184","75","21","8",null,this.div_work);_a.set_taborder("448");_a.set_text("다운로드");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_fileUpload","absolute",null,"125","75","21","8",null,this.div_work);_a.set_taborder("449");_a.set_text("파일추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("true");this.div_work.addChild(_a.name,_a);_a=new Button("btn_fileDelete","absolute",null,"155","75","21","8",null,this.div_work);_a.set_taborder("450");_a.set_text("파일삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("true");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","87",null,"27","0",null,this.div_work);_a.set_taborder("452");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","0","87","100","27",null,null,this.div_work);_a.set_taborder("456");_a.set_text("작성일자");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","30.76%","89",null,"23","28.46%",null,this.div_work);_a.set_taborder("457");_a.set_text("(입력시 게시물은 해당 일자부터 조회 됩니다.)");this.div_work.addChild(_a.name,_a);_a=new Calendar("INPUT_DATE","absolute","102","90","120","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("458");_a.set_dateformat("yyyy-MM-dd");_a=new Static("S_BOARD_CONFIRM","absolute","500","87","100","27",null,null,this.div_work);_a.set_taborder("428");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");_a.set_visible("false");this.div_work.addChild(_a.name,_a);_a=new CheckBox("BOARD_CONFIRM00","absolute","605","64","83","21",null,null,this.div_work);_a.set_taborder("459");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("false");this.div_work.addChild(_a.name,_a);_a=new Static("S_BOARD_CONFIRM00","absolute","500","61","100","27",null,null,this.div_work);_a.set_taborder("460");_a.set_text("공지여부");_a.set_cssclass("sta_WF_Label");_a.set_visible("false");this.div_work.addChild(_a.name,_a);_a=new CheckBox("BOARD_CONFIRM","absolute","605","90","83","21",null,null,this.div_work);_a.set_taborder("438");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_readonly("false");_a.set_text("사용");_a.set_visible("false");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",720,521,this.div_work.RichTextEditor,function(_b){_b.set_taborder("16");_b.set_text("RichTextEditor");_b.set_scrollbars("autovert");_b.style.set_border("0 none #808080ff");_b.set_url("common::RichTextEditor.xfdl");_b.set_async("false");});this.div_work.RichTextEditor.addLayout(_a.name,_a);_a=new Layout("default","",710,550,this.div_work.RichTextEditorPreview,function(_b){_b.set_taborder("16");_b.set_text("RichTextEditorPreview");_b.set_scrollbars("autovert");_b.style.set_border("0 none #808080ff");_b.set_url("common::RichTextEditorPreview.xfdl");_b.set_async("false");});this.div_work.RichTextEditorPreview.addLayout(_a.name,_a);_a=new Layout("default","",982,606,this.div_work,function(_b){});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",770,830,this,function(_b){_b.set_classname("Pattern_03");_b.set_titletext("게시글 등록");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.USER_NAME","value","ds_board","USER_NAME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.BOARD_TITLE","value","ds_board","BOARD_TITLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.BOARD_KIND","value","ds_board","BOARD_KIND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.BOARD_CONFIRM","value","ds_board","BOARD_CONFIRM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.INPUT_DATE","value","ds_board","INPUT_DATE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.BOARD_CONFIRM00","value","ds_board","NOTICE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::RichTextEditor.xfdl");this._addPreloadList("fdl","common::RichTextEditorPreview.xfdl");};this.addIncludeScript("HPM030201_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM030201_P01.xfdl","lib::comUpDownUtils.xjs");this.addIncludeScript("HPM030201_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM030201_P01.xfdl",function(){this.File_UpDownManager=null;this.RichTextEditor=this.div_work.RichTextEditor;this.RichTextEditorPreview=this.div_work.RichTextEditorPreview;this.bEditMode=false;this.hpmurl=application.gv_host;this.HPM030201_P01_oninit=function(_a,_b){this.gfn_initForm(this);var _c=this.parent.arg_1;var _d=this.parent.arg_2;var _e=this.parent.arg_3;if(""==_e||undefined==_e){this.bEditMode=true;}this.ds_cond.clearData();if(this.ds_cond.rowcount==0){this.ds_cond.addRow();}this.ds_cond.setColumn(0,"BBS_ID",_c);this.ds_cond.setColumn(0,"BOARD_IDX",_d);this.ds_board.clearData();if(this.ds_board.rowcount==0){this.ds_board.addRow();}if(""==_d||undefined==_d){this.ds_board.setColumn(0,"APP_ID",_c);this.ds_board.setColumn(0,"USER_NAME",application.gds_userInfo.getColumn(0,"DEPT_NM"));this.ds_board.setColumn(0,"BOARD_CONFIRM","0");}this.ds_fileList.clearData();var _f={useMultiUpload:true,downloadUrl:"hsco/hpm/bbs/HPM030201/downloadFile.do",uploadUrl:"hsco/hpm/bbs/HPM030201/uploadFile.do",onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.fn_Editor_onchangeView(_e);this.File_UpDownManager=new this.fileUpDownManager(this,"ETC","HPG/boardfile");this.File_UpDownManager.init(_f);};this.HPM030201_P01_onload=function(_a,_b){var _c=function(){};var _d=[["ds_boardKind","HPM011","1",""]];this.gfn_comboLoad(_d,_c);};this.RichTextEditorInit=function(){trace("### RichTextEditorInit");var _a={editor:{loadCallback:this.onloadEditor},image:{}};this.RichTextEditor.initialize(_a,this);};this.fn_transaction=function(_a){var _b=true;var _c="";var _d="";var _e="";switch(_a){case "selBoardKind":break;case "selBoardInfo":trace("### selBoardInfo");_c="hsco/hpm/bbs/HPM030201/selBoardInfo.do";_d="input1=ds_cond";_e="ds_board=output1 ds_fileList=fileList";break;case "saveBoard":if(this.bEditMode){_c="hsco/hpm/bbs/HPM030201/saveBoard.do";_d="input1=ds_board input2=ds_fileList";_e="";break;}else{this.ds_boardConfirmYn.clearData();if(this.ds_boardConfirmYn.rowcount==0){this.ds_boardConfirmYn.addRow();}this.ds_boardConfirmYn.setColumn(0,"BOARD_IDX",this.ds_board.getColumn(0,"BOARD_IDX"));this.ds_boardConfirmYn.setColumn(0,"BOARD_CONFIRM",this.ds_board.getColumn(0,"BOARD_CONFIRM"));_c="hsco/hpm/bbs/HPM030201/updateConfirmYn.do";_d="input1=ds_boardConfirmYn";_e="";}break;}Ex.core.tran(this,_a,_c,_d,_e,"","fn_callBack",true,_b);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "selBoardKind":break;case "selBoardInfo":break;case "saveBoard":break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selBoardKind":break;case "selBoardInfo":var _d=this.ds_board.getColumn(0,"BOARD_CONTENT");this.fn_Editor_setViewerContent(_d);break;case "saveBoard":this.gfn_message("success.처리.성공","정상적으로 처리되었습니다.","","",function(){this.close("0000");});break;}}if(this.bEditMode){switch(_a){case "selBoardKind":case "selBoardInfo":this.div_work.BOARD_KIND.set_readonly(true);break;default:break;}}};this.onloadEditor=function(){var _a=this.parent.arg_2;if(_a!=undefined&&_a!=""){this.fn_transaction("selBoardInfo");}else{this.ds_board.setColumn(0,"INPUT_DATE",this.dateUtils.format(this.gfn_today(),"yyyymmdd"));}};this.btn_fileDownload_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _i=0;_i<this.ds_fileList.getRowCount();_i++ ){var _d=this.ds_fileList.getColumn(_i,"CHK");if(_d=='1'){var _e=this.ds_fileList.getColumn(_i,"ORGINL_FILE_NM");this.ds_downfileList.clearData();this.ds_downfileList.addRow();this.ds_downfileList.copyRow(0,this.ds_fileList,_i);var _f="hsco/hpm/bbs/HPM030201/downloadFile.do";var _g="input1=ds_downfileList";var _h="";this.File_UpDownManager.dataFileDownload(_f,_g,_e);}}};this.btn_fileDelete_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _e=this.ds_fileList.getRowCount()-1;_e>=0;_e-- ){var _d=this.ds_fileList.getColumn(_e,"CHK");if(_d=='1'){this.ds_fileList.deleteRow(_e);}}};this.btn_fileUpload_onclick=function(_a,_b){this.File_UpDownManager.addFiles(this.File_UpDownManager._allowTypes,null);};this.fn_onFileSelected=function(_a,_b){if(_a==this.File_UpDownManager.TYPE_UPLOADER){var _c=this.comUtils.isArray(_b);if(_c){var _d=_b.length;for(var _j=0;_j<_d;_j++ ){var _e=this.ds_fileList.addRow();this.ds_fileList.setColumn(_e,"ORGINL_FILE_NM",_b[_j]);this.ds_fileList.setColumn(_e,"FILE_WH_YN","Y");}}else{var _f=this.ds_fileList.addRow();this.ds_fileList.setColumn(_f,"ORGINL_FILE_NM",_b);this.ds_fileList.setColumn(_f,"FILE_WH_YN","Y");}}this.ds_addfileList.clearData();if(this.ds_addfileList.rowcount==0){this.ds_addfileList.addRow();}var _g="hsco/hpm/bbs/HPM030201/uploadFile.do";var _h="input1=ds_addfileList";var _i="ds_addfileList=filelist";this.File_UpDownManager.upload(_g,_h,_i);};this.fn_onFileSuccess=function(_a,_b){if(_a==this.File_UpDownManager.TYPE_UPLOADER){for(var _d=0,_e=this.ds_fileList.rowcount;_d<_e;_d++ ){var _c=this.ds_addfileList.findRow("ORGINL_FILE_NM",this.ds_fileList.getColumn(_d,"ORGINL_FILE_NM"));this.ds_fileList.copyRow(_d,this.ds_addfileList,_c);}}if(_a==this.File_UpDownManager.TYPE_DOWNLOADER){}};this.div_work_grd_fileList_onheadclick=function(_a,_b){if(_b.col==1){this.gfn_setGridCheckAll(_a,_b);}};this.btn_exit_onclick=function(_a,_b){this.close("");};this.btn_save_onclick=function(_a,_b){var _c=this.RichTextEditor.getContent();var _d=this.RichTextEditor.getTextContent();var _e=application.services["svcurl"].url;_c=_c.split(_e).join("");_c=_c.split(this.hpmurl).join("");_c=_c.split('src="upload').join('src="/upload');this.ds_board.setColumn(0,"BOARD_CONTENT",_c);this.ds_board.setColumn(0,"SUMRY",this.fn_getStringCheckByte(_d,200));if(this.bEditMode){if(""==this.ds_board.getColumn(0,"BOARD_TITLE")||undefined==this.ds_board.getColumn(0,"BOARD_TITLE")){this.gfn_message("comm.항목.필수","제목");return false;}if(""==this.ds_board.getColumn(0,"USER_NAME")||undefined==this.ds_board.getColumn(0,"USER_NAME")){this.gfn_message("comm.항목.필수","작성자");return false;}if(""==_c){this.gfn_message("comm.항목.필수","내용");return false;}if(this.ds_boardKind.rowcount>0){var _f=this.ds_board.getColumn(0,"BOARD_KIND");if(_f==undefined||_f==""){this.gfn_message("comm.항목.필수","게시물구분");return false;}}}if(this.gfn_message("comm.행위여부","저장")){this.fn_transaction("saveBoard");}};this.fn_Editor_onchangeView=function(_a){this.RichTextEditor.set_visible(false);this.RichTextEditorPreview.set_visible(false);this.div_work.btn_save.set_enable(false);switch(_a){case undefined:case "":this.div_work.btn_save.set_enable(true);this.div_work.S_BOARD_CONFIRM.set_visible(false);this.div_work.BOARD_CONFIRM.set_visible(false);this.div_work.USER_NAME.set_readonly(false);this.div_work.USER_NAME.set_cssclass("edt_WF_Essential");this.div_work.BOARD_TITLE.set_readonly(false);this.div_work.BOARD_TITLE.set_cssclass("edt_WF_Essential");this.div_work.btn_fileUpload.set_enable(true);this.div_work.btn_fileDelete.set_enable(true);this.div_work.INPUT_DATE.set_readonly(false);this.div_work.INPUT_DATE.set_cssclass();this.RichTextEditor.set_visible(true);break;case "S01":this.div_work.S_BOARD_CONFIRM.set_visible(true);this.div_work.BOARD_CONFIRM.set_visible(true);this.div_work.btn_save.set_enable(true);default:this.div_work.USER_NAME.set_readonly(true);this.div_work.USER_NAME.set_cssclass("edt_WF_Readonly");this.div_work.BOARD_TITLE.set_readonly(true);this.div_work.BOARD_TITLE.set_cssclass("edt_WF_Readonly");this.div_work.BOARD_KIND.set_readonly(true);this.div_work.BOARD_KIND.set_cssclass("cmb_WF_Readonly");this.div_work.btn_fileUpload.set_enable(false);this.div_work.btn_fileDelete.set_enable(false);this.div_work.INPUT_DATE.set_readonly(true);this.div_work.INPUT_DATE.set_cssclass("cal_WF_Readonly");this.RichTextEditorPreview.set_visible(true);break;}};this.fn_Editor_setViewerContent=function(_a){if(Eco.isEmpty(_a)){_a="";}if(""!=_a&&undefined!=_a){_a=_a.split('/uploadfiledir/Image').join('/upload/ETC/HPG/boardfile/Image');_a=_a.split('src="//').join('src="/');_a=_a.split('src="/upload/ETC').join('src="'+this.hpmurl+'upload/ETC');}if(this.bEditMode){this.RichTextEditor.setContent(_a);}else{this.RichTextEditorPreview.web_preview.callMethod("setContent",_a);}};});this.on_initEvent=function(){this.addEventHandler("oninit",this.HPM030201_P01_oninit,this);this.addEventHandler("onload",this.HPM030201_P01_onload,this);this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);this.div_work.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.div_work.grd_fileList.addEventHandler("onheadclick",this.div_work_grd_fileList_onheadclick,this);this.div_work.btn_fileDownload.addEventHandler("onclick",this.btn_fileDownload_onclick,this);this.div_work.btn_fileUpload.addEventHandler("onclick",this.btn_fileUpload_onclick,this);this.div_work.btn_fileDelete.addEventHandler("onclick",this.btn_fileDelete_onclick,this);};this.loadIncludeScript("HPM030201_P01.xfdl");this.loadPreloadList();};})();