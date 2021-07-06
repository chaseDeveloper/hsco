﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL060101_P01");this.set_classname("SAL060101_P01");this.set_titletext("가족수당신청");this._setFormPosition(0,0,624,297);}_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_file",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_SCHXPN_LOAN_ESTBS",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_trans",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0.32%","1","620","293",null,null,this);_a.set_taborder("94");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0.96%","1",null,"15","0.96%",null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","5","3","15","292",null,null,this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","603","3",null,"293","1",null,this);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","24","18","240","21",null,null,this);_a.set_taborder("43");_a.set_text("첨부파일 등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","24","43","81","27",null,null,this);_a.set_taborder("80");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0.96%","277",null,"15","0.96%",null,this);_a.set_taborder("93");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_delFiles","absolute",null,"45","67","19","182",null,this);_a.set_taborder("95");_a.set_text("선택삭제");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute",null,"45","68","19","111",null,this);_a.set_taborder("96");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute",null,"45","85","19","23",null,this);_a.set_taborder("97");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Grid("grd_fileList","absolute","2.72%","71",null,null,"3.04%","21",this);_a.set_taborder("98");_a.set_binddataset("ds_fileList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일형식\"/><Cell col=\"2\" celltype=\"head\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:FILE_IMAGE\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left middle;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_Close","absolute","552","17","50","25",null,null,this);_a.set_taborder("99");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Layout("default","",624,297,this,function(_b){_b.set_classname("SAL060101_P01");_b.set_titletext("가족수당신청");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("SAL060101_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL060101_P01.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("SAL060101_P01.xfdl","lib::comUpDownUtils.xjs");this.registerScript("SAL060101_P01.xfdl",function(){this.checkDs=[this.DS_FAMILY_ALLWNC_REQST_DTLS,this.DS_FAMILY_ALLWNC];this.File_UpDownManager=null;this.SAL060101_P01_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.DS_SCHXPN_LOAN_ESTBS.clearData();this.DS_SCHXPN_LOAN_ESTBS.addRow();this.DS_SCHXPN_LOAN_ESTBS.setColumn(0,"EMPNO",this.parent.empno);this.DS_SCHXPN_LOAN_ESTBS.setColumn(0,"SN",this.parent.sn);this.DS_SCHXPN_LOAN_ESTBS.setColumn(0,"FILE_SN",this.parent.fileSn);var _c={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"MIS","SAL");this.File_UpDownManager.init(_c);};this.SAL060101_P01_onload=function(_a,_b){this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_fileList.clearData();this.ds_cond_file.clearData();this.ds_cond_file.addRow();this.ds_cond_file.setColumn(0,"FILE_SN",this.DS_SCHXPN_LOAN_ESTBS.getColumn(0,"FILE_SN"));this.fn_transaction("selectAtchFile");};this.fn_transaction=function(_a){switch(_a){case "selectAtchFile":this.grd_fileList.setCellProperty("head",0,"text","0");var _b="/hsco/cmm/file/selectAtchmnFileList.do";var _c="input1=ds_cond_file";var _d="ds_fileList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=0;if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{}};this.btn_delFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}for(var _i=this.ds_fileList.getRowCount()-1;_i>=0;_i-- ){var _d=this.ds_fileList.getColumn(_i,"CHK");if(_d=='1'){this.ds_fileList.deleteRow(_i);}}var _e="deleteFile";var _f="hsco/cmm/file/deleteFile.do";var _g="input1=ds_fileList:U";var _h="ds_fileList=output1";Ex.core.tran(this,_e,_f,_g,_h);};this.btn_uploadFiles_onclick=function(_a,_b){this.fn_autoFileSn("MIS","SAL",this.File_UpDownManager,this.ds_fileList,this.DS_SCHXPN_LOAN_ESTBS,"TBSAL_SCHXPN_LOAN_ESTBS","FILE_SN",["EMPNO","SN"]);};this.btn_downFiles_onclick=function(_a,_b){var _c=this.ds_fileList.findRow("CHK","1");if(_c<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _h=0;_h<this.ds_fileList.getRowCount();_h++ ){var _d=this.ds_fileList.getColumn(_h,"FILE_SN");var _e=this.ds_fileList.getColumn(_h,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_h,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_h,"CHK");if(_g=='1'){this.File_UpDownManager.download(_d,_e,_f);}}};this.grd_fileList_onheadclick=function(_a,_b){if(_b.col==0){this.gfn_setGridCheckAll(_a,_b);}else{this.gfn_gridSort(_a,_b);}};this.btn_Close_onclick=function(_a,_b){var _c=this.DS_SCHXPN_LOAN_ESTBS.getColumn(0,"FILE_SN");var _d=this.ds_fileList.getRowCount();this.ds_trans.clearData();this.ds_trans.addRow();this.ds_trans.setColumn(0,"FILE_SN",_c);this.ds_trans.setColumn(0,"FILE_CNT",_d);this.close(this.ds_trans.saveXML());};});this.on_initEvent=function(){this.DS_SCHXPN_LOAN_ESTBS.addEventHandler("onrowposchanged",this.DS_ASSETS_MASTR_TABLE_onrowposchanged,this);this.addEventHandler("onload",this.SAL060101_P01_onload,this);this.addEventHandler("oninit",this.SAL060101_P01_oninit,this);this.btn_delFiles.addEventHandler("onclick",this.btn_delFiles_onclick,this);this.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.grd_fileList.addEventHandler("onheadclick",this.grd_fileList_onheadclick,this);this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);};this.loadIncludeScript("SAL060101_P01.xfdl");};})();