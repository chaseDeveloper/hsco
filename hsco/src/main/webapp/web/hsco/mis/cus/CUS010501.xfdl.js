﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CUS010501");this.set_classname("CUS010501");this.set_titletext("공지사항관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_noticeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTER\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_CO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REGIST_BGN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_END_DE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTER\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"SJ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">WRTER</Col><Col id=\"compId\">ds_noticeList</Col><Col id=\"msgId\">작성자</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/></Row><Row><Col id=\"colId\">SJ</Col><Col id=\"compId\">ds_noticeList</Col><Col id=\"msgId\">제목</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\"/><Col id=\"nlength\">50</Col><Col id=\"lengthChkGb\">LE</Col></Row><Row><Col id=\"compId\">ds_noticeList</Col><Col id=\"colId\">CN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">내용</Col><Col id=\"nlength\">500</Col><Col id=\"lengthChkGb\">LE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.style.set_color("transparent");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_registDe","absolute","15","5","60","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("작성일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_registBgnDe","absolute","77","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static04","absolute","192","5","10","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_registEndDe","absolute","207","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_wrter","absolute","332","5","50","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("작성자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_wrter","absolute","387","5","110","21",null,null,this.div_search);_a.set_taborder("4");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_sn","absolute","577","5","110","21",null,null,this.div_search);_a.set_taborder("6");this.div_search.addChild(_a.name,_a);_a=new Static("sta_sn","absolute","512","5","60","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("작성번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("sta_sj","absolute","15","31","40","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("제목");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_sj","absolute","77","31","400","21",null,null,this.div_search);_a.set_taborder("8");this.div_search.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","59",null,null,"28","0",this);_a.set_taborder("1");_a.style.set_border("0 solid #808080ff");this.addChild(_a.name,_a);_a=new Static("sta_noticeInfo","absolute","0","263","130","19",null,null,this.div_work);_a.set_taborder("11");_a.set_text("공지사항정보");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_noticeList","absolute","0","34",null,"222","0",null,this.div_work);_a.set_taborder("1");_a.set_binddataset("ds_noticeList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"700\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"공지번호\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:SN\"/><Cell col=\"3\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:SJ\" tooltiptext=\"bind:SJ\"/><Cell col=\"4\" text=\"bind:WRTER\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:REGIST_DE\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("sta_sn","absolute","0","282","80","27",null,null,this.div_work);_a.set_taborder("12");_a.set_text("공지번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label00","absolute","79","282",null,"27","511",null,this.div_work);_a.set_taborder("13");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_registDe","absolute","0","308","80","27",null,null,this.div_work);_a.set_taborder("14");_a.set_text("등록일자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","79","308",null,"27","511",null,this.div_work);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("sta_sj","absolute","0","360","80","27",null,null,this.div_work);_a.set_taborder("16");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","79","360",null,"27","511",null,this.div_work);_a.set_taborder("17");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_sj","absolute","82","363",null,"21","514",null,this.div_work);_a.set_taborder("5");_a.set_enable("true");_a.set_cssclass("edt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Static("sta_cn","absolute","0","386","80",null,null,"10",this.div_work);_a.set_taborder("18");_a.set_text("내용");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label07","absolute","79","386",null,null,"511","10",this.div_work);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new TextArea("txt_cn","absolute","82","389",null,null,"514","13",this.div_work);_a.set_taborder("6");_a.set_enable("true");_a.set_wordwrap("char");_a.set_cssclass("txt_WF_Essential");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_sn","absolute","82","285","110","21",null,null,this.div_work);_a.set_taborder("2");_a.set_enable("true");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Calendar("cal_registDe","absolute","82","311","110","21",null,null,this.div_work);this.div_work.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_enable("true");_a.set_value("null");_a.set_readonly("true");_a.set_cssclass("cal_WF_Readonly");_a=new Static("sta_noticeList","absolute","0","10","130","19",null,null,this.div_work);_a.set_taborder("20");_a.set_text("공지사항목록");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","29","1031","5",null,null,this.div_work);_a.set_taborder("21");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static21","absolute","-1","0","1031","10",null,null,this.div_work);_a.set_taborder("22");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","-1","256","1031","10",null,null,this.div_work);_a.set_taborder("23");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","277","1031","5",null,null,this.div_work);_a.set_taborder("24");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_wrter","absolute","0","334","80","27",null,null,this.div_work);_a.set_taborder("25");_a.set_text("작성자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("left middle");this.div_work.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","79","334",null,"27","511",null,this.div_work);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Edit("edt_wrter","absolute","82","337","110","21",null,null,this.div_work);_a.set_taborder("4");_a.set_enable("true");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_work.addChild(_a.name,_a);_a=new Button("Button00","absolute",null,"10","25","19","0",null,this.div_work);_a.set_taborder("0");_a.set_cssclass("btn_WF_Gridexceldn");this.div_work.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,"260","85","19","4",null,this.div_work);_a.set_taborder("9");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute",null,"260","68","19","92",null,this.div_work);_a.set_taborder("8");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_cmmnAtchmnfl","absolute",null,"282","500",null,"3","10",this.div_work);_a.set_taborder("10");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" celltype=\"head\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_EXTSN\"/><Cell col=\"3\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute",null,"260","67","19","163",null,this.div_work);_a.set_taborder("7");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Static("sta_atchFile","absolute",null,"263","113","19","389",null,this.div_work);_a.set_taborder("27");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");_a.getSetter("titletext").set("내외부감사실시관리");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("0");_b.style.set_color("transparent");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1039,736,this.div_work,function(_b){_b.set_taborder("1");_b.style.set_border("0 solid #808080ff");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CUS010501");_b.set_titletext("공지사항관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.edt_sn","value","ds_noticeList","SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.cal_registDe","value","ds_noticeList","REGIST_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.edt_wrter","value","ds_noticeList","WRTER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.edt_sj","value","ds_noticeList","SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.txt_cn","value","ds_noticeList","CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.cal_registBgnDe","value","ds_cond","REGIST_BGN_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_search.cal_registEndDe","value","ds_cond","REGIST_END_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_search.edt_wrter","value","ds_cond","WRTER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_search.edt_sn","value","ds_cond","SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_search.edt_sj","value","ds_cond","SJ");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("CUS010501.xfdl","lib::comInclude.xjs");this.addIncludeScript("CUS010501.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("CUS010501.xfdl","lib::comUpDownUtils.xjs");this.registerScript("CUS010501.xfdl",function(){this.checkDs=[this.ds_noticeList];var _a= -1;this.File_UpDownManager=null;this.CUS010501_oninit=function(_b,_c){this.fn_init_form();this.fn_init_dataset();};this.CUS010501_onload=function(_b,_c){this.div_search.cal_registBgnDe.setFocus(true);this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();this.ds_cond.addRow();this.div_search.cal_registBgnDe.set_value(this.gfn_today().substring(0,4)+'0101');this.div_search.cal_registEndDe.set_value(this.gfn_today());};this.fn_init_dataset=function(){var _b={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","CUS");this.File_UpDownManager.init(_b);};this.fn_search=function(){this.fn_transaction("selectNoticeList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_noticeList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("noticeListCUD");}};this.fn_transaction=function(_b){switch(_b){case "selectNoticeList":this.ds_fileList.clearData();var _c="hsco/mis/cus/CUS010501/selectNoticeList.do";var _d="input01=ds_cond";var _e="ds_noticeList=output01";break;case "noticeListCUD":var _c="hsco/mis/cus/CUS010501/noticeListCUD.do";var _d="input02=ds_noticeList:U";var _e="";break;case "selectAtchFile":this.div_work.grd_cmmnAtchmnfl.setCellProperty("head",0,"text","0");this.ds_fileList.clearData();this.ds_fileList.addRow();this.ds_fileList.setColumn(0,"FILE_SN",this.ds_noticeList.getColumn(this.ds_noticeList.rowposition,"ATCH_FILE"));var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_fileList";var _e="ds_fileList=output1";break;}var _f="";Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_b,_c,_d){if(_c!=0){this.gfn_callback_message(_b,_c,_d);}else{switch(_b){case "noticeListCUD":this.fn_search();break;ds_noticeList;case "selectNoticeList":this.div_work.grd_noticeList.setCellProperty("Head",0,"text","0");break;}}};this.fn_insert=function(){var _b=this.ds_noticeList.addRow();this.ds_noticeList.setColumn(_b,"REGIST_DE",this.gfn_today());this.ds_noticeList.setColumn(_b,"WRTER",this.fn_getEmpnm());};this.fn_delete=function(){var _b=this.ds_noticeList.rowcount-1;var _c=0;for(var _d=_b;_d>=0;_d-- ){if(this.ds_noticeList.getColumn(_d,"CHK")==1){_c=_c+1;}}if(_c==0){this.gfn_message("comm.데이터.선택.없음");}else{if(this.gfn_message("confirm.삭제여부")){for(var _d=_b;_d>=0;_d-- ){if(this.ds_noticeList.getColumn(_d,"CHK")==1){this.ds_noticeList.deleteRow(_d);}}}}this.div_work.grd_noticeList.setCellProperty("Head",0,"text","0");};this.fn_cancel=function(){if(!this.comUtils.isDatasetUpdated(this.ds_noticeList)){this.gfn_message("comm.내역.변경.없음");}else{if(this.gfn_message("confirm.취소여부")){this.ds_noticeList.reset();this.ds_noticeList.applyChange();return;}}};this.div_work_grd_noticeList_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};this.ds_noticeList_onrowposchanged=function(_b,_c){this.fn_transaction("selectAtchFile");};this.div_work_Button00_onclick=function(_b,_c){this.gfn_exportExcel(this.div_work.grd_noticeList,"NoticeList");};this.btn_delFiles_onclick=function(_b,_c){var _d=this.ds_fileList.findRow("CHK","1");if(_d<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _j=this.ds_fileList.getRowCount()-1;_j>=0;_j-- ){var _e=this.ds_fileList.getColumn(_j,"CHK");if(_e=='1'){this.ds_fileList.deleteRow(_j);}}var _f="deleteFile";var _g="hsco/cmm/file/deleteFile.do";var _h="input1=ds_fileList:U";var _i="ds_fileList=output1";Ex.core.tran(this,_f,_g,_h,_i);};this.btn_uploadFiles_onclick=function(_b,_c){this.fn_autoFileSn("MIS","CUS",this.File_UpDownManager,this.ds_fileList,this.ds_noticeList,"TBCUS_NOTICE","ATCH_FILE",["SN"]);};this.btn_downFiles_onclick=function(_b,_c){var _d=this.ds_fileList.findRow("CHK","1");if(_d<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _i=0;_i<this.ds_fileList.getRowCount();_i++ ){var _e=this.ds_fileList.getColumn(_i,"FILE_SN");var _f=this.ds_fileList.getColumn(_i,"FILE_ORDR");var _g=this.ds_fileList.getColumn(_i,"ORGINL_FILE_NM");var _h=this.ds_fileList.getColumn(_i,"CHK");if(_h=='1'){this.File_UpDownManager.download(_e,_f,_g);}}};this.grd_cmmnAtchmnfl_onheadclick=function(_b,_c){if(_c.col==0){this.gfn_setGridCheckAll(_b,_c);}else{this.gfn_gridSort(_b,_c);}};});this.on_initEvent=function(){this.ds_noticeList.addEventHandler("onrowposchanged",this.ds_noticeList_onrowposchanged,this);this.addEventHandler("onload",this.CUS010501_onload,this);this.addEventHandler("oninit",this.CUS010501_oninit,this);this.div_work.sta_noticeInfo.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.grd_noticeList.addEventHandler("onheadclick",this.div_work_grd_noticeList_onheadclick,this);this.div_work.sta_noticeList.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.Button00.addEventHandler("onclick",this.div_work_Button00_onclick,this);this.div_work.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.div_work.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.div_work.grd_cmmnAtchmnfl.addEventHandler("onheadclick",this.grd_cmmnAtchmnfl_onheadclick,this);this.div_work.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.div_work.sta_atchFile.addEventHandler("onclick",this.Static00_onclick,this);};this.loadIncludeScript("CUS010501.xfdl");};})();