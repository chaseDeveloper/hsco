﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM050801");this.set_classname("HPM050801");this.set_titletext("인사말조회수정");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_greetingList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GREETING_REG_DT\" type=\"STRING\" size=\"14\"/><Column id=\"EXPIRE_DT\" type=\"STRING\" size=\"14\"/><Column id=\"GREETING_CONT\" type=\"STRING\" size=\"1000\"/><Column id=\"REGIST_USER\" type=\"STRING\" size=\"8\"/><Column id=\"IS_DELETE\" type=\"STRING\" size=\"1\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"SIGN_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"FILE_SN_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_greetingList</Col><Col id=\"colId\">GREETING_REG_DT</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">인사말 등록일자</Col></Row><Row><Col id=\"compId\">ds_greetingList</Col><Col id=\"colId\">EXPIRE_DT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">인사말 만료일자</Col></Row><Row><Col id=\"compId\">ds_greetingList</Col><Col id=\"colId\">GREETING_CONT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">내용</Col></Row><Row><Col id=\"compId\">ds_greetingList</Col><Col id=\"colId\">FILE_SN_IMG</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">상단이미지</Col></Row><Row><Col id=\"compId\">ds_greetingList</Col><Col id=\"colId\">FILE_SN_SIGN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">하단이미지</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_fileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("2");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","0","1",null,null,"28","10",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Grid("grd_greetingList","absolute","0","36","446",null,null,"5",this.Div00);_a.set_taborder("170");_a.set_binddataset("ds_greetingList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"134\"/><Column size=\"95\"/><Column size=\"82\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" displaytype=\"text\" text=\"인사말정보목록\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell row=\"1\" text=\"등록일시\"/><Cell row=\"1\" col=\"1\" text=\"만료일시\"/><Cell row=\"1\" col=\"2\" text=\"등록자\"/><Cell row=\"1\" col=\"3\" text=\"삭제여부\"/><Cell row=\"1\" col=\"4\" text=\"상단이미지\"/><Cell row=\"1\" col=\"5\" text=\"하단이미지\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:center;\" text=\"bind:GREETING_REG_DT\" mask=\"####-##-##  ##:##:##\" maskchar=\"_\"/><Cell col=\"1\" text=\"bind:EXPIRE_DT\" mask=\"####-##-##  ##:##:##\"/><Cell col=\"2\" text=\"bind:REGIST_USER\"/><Cell col=\"3\" text=\"bind:IS_DELETE\"/><Cell col=\"4\" text=\"bind:FILE_SN_IMG\"/><Cell col=\"5\" text=\"bind:FILE_SN_SIGN\"/></Band></Format></Formats>");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","10","148","21",null,null,this.Div00);_a.set_taborder("171");_a.set_text("인사말목록");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","450","10","148","21",null,null,this.Div00);_a.set_taborder("173");_a.set_text("인사말정보");_a.set_cssclass("sta_WF_Title02");this.Div00.addChild(_a.name,_a);_a=new Static("Static15","absolute","5",null,null,"5","-5","0",this.Div00);_a.set_taborder("174");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Div("div_info","absolute","449","36","581",null,null,"5",this.Div00);_a.set_taborder("275");_a.style.set_border("1 solid #c9ced9ff");this.Div00.addChild(_a.name,_a);_a=new Button("btn_fileDownload","absolute",null,"82","55","21","2",null,this.Div00.div_info);_a.set_taborder("271");_a.set_text("다운로드");_a.set_cssclass("btn_WF_Process");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_fileUpload","absolute",null,"55","56","21","2",null,this.Div00.div_info);_a.set_taborder("273");_a.set_text("업로드");this.Div00.div_info.addChild(_a.name,_a);_a=new Grid("grd_fileList","absolute","141","53","378","54",null,null,this.Div00.div_info);_a.set_taborder("274");_a.set_binddataset("ds_fileList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"240\"/><Column size=\"100\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"21\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"용량\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static05","absolute","-1","-1","577","30",null,null,this.Div00.div_info);_a.set_taborder("347");_a.set_cssclass("sta_WF_Labelbg");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM22","absolute","-1","28","138","27",null,null,this.Div00.div_info);_a.set_taborder("348");_a.set_text("삭제여부");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","-1","-1","138","30",null,null,this.Div00.div_info);_a.set_taborder("349");_a.set_text("인사말 등록일시");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new TextArea("txa_greetingCont","absolute","139","162","437",null,null,"2",this.Div00.div_info);_a.set_taborder("350");_a.set_wordwrap("char");_a.set_cssclass("txt_WF_Essential");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","-1","54","138","55",null,null,this.Div00.div_info);_a.set_taborder("352");_a.set_text("상단 이미지 업로드");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new CheckBox("chk_IsDelete","absolute","25.04%","29",null,"21","51.47%",null,this.Div00.div_info);_a.set_taborder("353");_a.set_text("삭제");_a.set_value("N");_a.set_truevalue("Y");_a.set_falsevalue("N");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM24","absolute","-1","162","138",null,null,"0",this.Div00.div_info);_a.set_taborder("354");_a.set_text("내용");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","-1","108","138","55",null,null,this.Div00.div_info);_a.set_taborder("355");_a.set_text("하단 이미지 업로드");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new Grid("grd_fileList00","absolute","141","109","378","51",null,null,this.Div00.div_info);_a.set_taborder("356");_a.set_binddataset("ds_fileList2");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"240\"/><Column size=\"100\"/></Columns><Rows><Row size=\"18\" band=\"head\"/><Row size=\"21\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"용량\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_fileDownload00","absolute",null,"137","55","21","2",null,this.Div00.div_info);_a.set_taborder("357");_a.set_text("다운로드");_a.set_cssclass("btn_WF_Process");this.Div00.div_info.addChild(_a.name,_a);_a=new Button("btn_fileUpload00","absolute",null,"111","55","21","2",null,this.Div00.div_info);_a.set_taborder("359");_a.set_text("업로드");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","296","-1","128","30",null,null,this.Div00.div_info);_a.set_taborder("360");_a.set_text("인사말 만료일시");_a.set_cssclass("sta_WF_Label");this.Div00.div_info.addChild(_a.name,_a);_a=new MaskEdit("calRegDt","absolute","140","2",null,"23","286",null,this.Div00.div_info);_a.set_taborder("365");_a.set_mask("####-##-##  ##:##:##");_a.set_cssclass("msk_WF_Essential");_a.set_type("string");_a.style.set_align("left middle");this.Div00.div_info.addChild(_a.name,_a);_a=new MaskEdit("calExpireDt","absolute","426","2",null,"23","6",null,this.Div00.div_info);_a.set_taborder("366");_a.set_type("string");_a.set_mask("####-##-##  ##:##:##");_a.set_cssclass("msk_WF_Essential");_a.style.set_align("left middle");this.Div00.div_info.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.Div00);_a.set_taborder("276");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",753,653,this.Div00.div_info,function(_b){_b.set_taborder("275");_b.style.set_border("1 solid #c9ced9ff");});this.Div00.div_info.addLayout(_a.name,_a);_a=new Layout("default","",1031,702,this.Div00,function(_b){_b.set_taborder("3");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HPM050801");_b.set_titletext("인사말조회수정");});this.addLayout(_a.name,_a);_a=new BindItem("item0","Div00.div_info.txa_greetingCont","value","ds_greetingList","GREETING_CONT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.div_info.chk_IsDelete","value","ds_greetingList","IS_DELETE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Div00.div_info.calRegDt","value","ds_greetingList","GREETING_REG_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div00.div_info.calExpireDt","value","ds_greetingList","EXPIRE_DT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM050801.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM050801.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("HPM050801.xfdl","lib::comUpDownUtils.xjs");this.registerScript("HPM050801.xfdl",function(){this.HPM050801_oninit=function(_a,_b){this.gfn_initForm(this);};this.HPM050801_onload=function(_a,_b){this.fn_init_dataset();this.fn_initCombo();var _c={useMultiUpload:false,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"HPM","CTM");this.File_UpDownManager.init(_c);this.fn_search();};this.fn_search=function(){this.ds_greetingList.clearData();this.ds_fileList.clearData();this.ds_fileList2.clearData();this.fn_transaction("selectGreetingList");this.Div00.div_info.calRegDt.set_readonly("true");};this.fn_save=function(){var _a=this.ds_greetingList.rowposition;var _b=this.ds_fileList.rowposition;var _c=this.ds_fileList.getColumn(_b,"STRE_FILE_NM");var _d=this.ds_fileList2.getColumn(_b,"STRE_FILE_NM");var _e=this.ds_fileList.getColumn(_b,"FILE_EXTSN");var _f=this.ds_fileList2.getColumn(_b,"FILE_EXTSN");var _g="/upload/HPM/CTM/"+_c+"."+_e;var _h="/upload/HPM/CTM/"+_d+"."+_f;var _i=this.ds_fileList.getColumn(_b,"FILE_SN");var _j=this.ds_fileList2.getColumn(_b,"FILE_SN");this.ds_greetingList.setColumn(_a,"IMG_PATH",_g);this.ds_greetingList.setColumn(_a,"SIGN_PATH",_h);this.ds_greetingList.setColumn(_a,"FILE_SN_IMG",_i);this.ds_greetingList.setColumn(_a,"FILE_SN_SIGN",_j);if(!this.gfn_checkValidation(this.ds_greetingList,this.ds_validation)){return;}var _k=this.ds_greetingList.getColumn(this.ds_greetingList.rowposition,"GREETING_REG_DT");var _l=this.ds_greetingList.getColumn(this.ds_greetingList.rowposition,"EXPIRE_DT");if(_k>_l){this.gfn_message("info.처리불가","등록일자가 만료일자 보다 이후 일 수 없습니다.");return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveGreetingList");}};this.fn_insert=function(){var _a=this.ds_greetingList.addRow();this.Div00.div_info.calRegDt.set_readonly("false");};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.ds_greetingList.reset();this.ds_greetingList.applyChange();}};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_initCombo=function(_a,_b){};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectGreetingList":var _c="/hsco/hpm/ctm/HPM050801/selectGreetingList.do";var _d="input1=DS_COND";var _e="ds_greetingList=output1";break;case "saveGreetingList":var _c="/hsco/hpm/ctm/HPM050801/saveGreetingList.do";var _d="input1=ds_greetingList:U";var _e="";break;case "selectAtchFile":var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_cond_fileSn";var _e="ds_fileList=output1";break;case "selectAtchFile2":var _c="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_cond_fileSn";var _e="ds_fileList2=output1";break;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){if(_b<0){this.gfn_callBackMsg(_a,_b,_c);return;}switch(_a){case "saveGreetingList":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectAtchFile":this.fn_fileExtChk();break;case "selectAtchFile2":this.fn_fileExtChk();break;}};this.fn_search_fileList=function(){var _a=this.ds_greetingList.rowposition;var _b=this.ds_greetingList.getColumn(_a,"FILE_SN_IMG");this.ds_cond_fileSn.clearData();var _c=this.ds_cond_fileSn.addRow();this.ds_cond_fileSn.setColumn(_c,"FILE_SN",_b);this.ds_fileList.clearData();this.fn_transaction("selectAtchFile");};this.fn_search_fileList2=function(){var _a=this.ds_greetingList.rowposition;var _b=this.ds_greetingList.getColumn(_a,"FILE_SN_SIGN");this.ds_cond_fileSn.clearData();var _c=this.ds_cond_fileSn.addRow();this.ds_cond_fileSn.setColumn(_c,"FILE_SN",_b);this.ds_fileList2.clearData();this.fn_transaction("selectAtchFile2");};this.div_work_btn_fileUpload_onclick=function(_a,_b){this.fn_autoFileSn("HPM","CTM",this.File_UpDownManager,this.ds_fileList,this.ds_greetingList,"TBHPG_GREETINGS","FILE_SN_IMG",["GREETING_REG_DT"]);};this.div_work_btn_fileUpload2_onclick=function(_a,_b){this.fn_autoFileSn("HPM","CTM",this.File_UpDownManager,this.ds_fileList2,this.ds_greetingList,"TBHPG_GREETINGS","FILE_SN_SIGN",["GREETING_REG_DT"]);};this.ds_greetingList_onrowposchanged=function(_a,_b){this.fn_search_fileList();this.fn_search_fileList2();if(this.ds_greetingList.getRowType(this.ds_greetingList.rowposition)==Dataset.ROWTYPE_INSERT){this.Div00.div_info.calRegDt.set_readonly("false");}else{this.Div00.div_info.calRegDt.set_readonly("true");}};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList.getRowCount();_h++ ){var _d=this.ds_fileList.getColumn(_h,"FILE_SN");var _e=this.ds_fileList.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.btn_downFiles00_onclick=function(_a,_b){var _c=this.ds_fileList2.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList2.getRowCount();_h++ ){var _d=this.ds_fileList2.getColumn(_h,"FILE_SN");var _e=this.ds_fileList2.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList2.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList2.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.fn_fileExtChk=function(){var _a=this.ds_fileList.rowposition;var _b=this.ds_fileList.getColumn(_a,"FILE_EXTSN");if(_b=="undefined"){return;}if(_b.toLowerCase()!="jpg"&&_b.toLowerCase()!="jpeg"&&_b.toLowerCase()!="gif"&&_b.toLowerCase()!="png"&&_b.toLowerCase()!="bmp"){this.gfn_message("info.파일.업로드.타입.불가","이미지가 아닌|이미지 파일만 업로드 가능합니다.");this.ds_fileList.deleteRow(_a);return;}var _c=this.ds_fileList2.rowposition;var _d=this.ds_fileList2.getColumn(_c,"FILE_EXTSN");if(_d=="undefined"){return;}if(_d.toLowerCase()!="jpg"&&_d.toLowerCase()!="jpeg"&&_d.toLowerCase()!="gif"&&_d.toLowerCase()!="png"&&_d.toLowerCase()!="bmp"){this.gfn_message("info.파일.업로드.타입.불가","이미지가 아닌|이미지 파일만 업로드 가능합니다.");this.ds_fileList2.deleteRow(_c);return;}};});this.on_initEvent=function(){this.ds_greetingList.addEventHandler("onrowposchanged",this.ds_greetingList_onrowposchanged,this);this.addEventHandler("oninit",this.HPM050801_oninit,this);this.addEventHandler("onload",this.HPM050801_onload,this);this.Div00.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);this.Div00.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);this.Div00.Static15.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.Div00.div_info.btn_fileDownload.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.Div00.div_info.btn_fileUpload.addEventHandler("onclick",this.div_work_btn_fileUpload_onclick,this);this.Div00.div_info.grd_fileList.addEventHandler("onheadclick",this.grd_fileList_onheadclick,this);this.Div00.div_info.sta_NM07.addEventHandler("onclick",this.Div00_div_info_sta_NM07_onclick,this);this.Div00.div_info.txa_greetingCont.addEventHandler("oneditclick",this.Div00_div_info_txa_greetingCont_oneditclick,this);this.Div00.div_info.sta_NM08.addEventHandler("onclick",this.Div00_div_info_sta_NM08_onclick,this);this.Div00.div_info.chk_IsDelete.addEventHandler("onclick",this.Div00_div_info_chk_IsDelete_onclick,this);this.Div00.div_info.sta_NM00.addEventHandler("onclick",this.Div00_div_info_sta_NM08_onclick,this);this.Div00.div_info.grd_fileList00.addEventHandler("onheadclick",this.grd_fileList_onheadclick,this);this.Div00.div_info.btn_fileDownload00.addEventHandler("onclick",this.btn_downFiles00_onclick,this);this.Div00.div_info.btn_fileUpload00.addEventHandler("onclick",this.div_work_btn_fileUpload2_onclick,this);this.Div00.div_info.sta_NM01.addEventHandler("onclick",this.Div00_div_info_sta_NM07_onclick,this);this.Div00.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);};this.loadIncludeScript("HPM050801.xfdl");};})();