﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("PRJ010122");this.set_classname("PRJ010122");this.set_titletext("시설물 인수인계 등록");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_fclsTovHovList</Col><Col id=\"colId\">FCLS_NM</Col><Col id=\"msgId\">시설물</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BSNS_CODE</Col><Col id=\"msgId\">사업코드</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_fclsTovHovList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FST_INP_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"FST_INP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LST_CHG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"LST_CHG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CTRT_YR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FCLS_STDD\" type=\"STRING\" size=\"256\"/><Column id=\"CON_ICPR_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOV_DEP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_SN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_condSub1",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DOC_SN\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLS_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ctgry_file",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DOC_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTGRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DPL_RGS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACTV_CS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CTGRY_FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLS_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_file",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"FILE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"FILE_STRE_COURS\" type=\"STRING\" size=\"2000\"/><Column id=\"STRE_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_EXTSN\" type=\"STRING\" size=\"20\"/><Column id=\"FILE_CN\" type=\"STRING\" size=\"4000\"/><Column id=\"FILE_MG\" type=\"INT\" size=\"8\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"INT\" size=\"5\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"JOB_SE\" type=\"STRING\" size=\"3\"/><Column id=\"FILE_TY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"INT\" size=\"5\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"INT\" size=\"256\"/><Column id=\"DELETE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","0",null,null,"0","26",this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","0","26",null,null,"0","0",this.div_search);_a.set_taborder("6");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe04","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("사업코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bsnsCode","absolute","82","5","75","21",null,null,this.div_search);_a.set_taborder("3");_a.set_tabstop("false");_a.style.set_color("black");_a.set_cssclass("edt_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_bsnsNm","absolute","159","5","200","21",null,null,this.div_search);_a.set_taborder("2");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");_a.style.set_color("black");this.div_search.addChild(_a.name,_a);_a=new Button("btn_bsnsCode","absolute","136","5","20","21",null,null,this.div_search);_a.set_taborder("1");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","1031","0","15","735",null,null,this);_a.set_taborder("39");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("40");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_top","absolute","0","33",null,"10","28",null,this);_a.set_taborder("41");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title1","absolute","0","43","151","19",null,null,this);_a.set_taborder("42");_a.set_text("시설물 인수인계 목록");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("43");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title2","absolute","0","477","151","19",null,null,this);_a.set_taborder("57");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","496",null,null,"28","0",this);_a.set_taborder("58");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_top00","absolute","0","467",null,"10","28",null,this);_a.set_taborder("59");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_detailDelete","absolute",null,"477","64","19","28",null,this);_a.set_taborder("5");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_detailAdd","absolute",null,"477","64","19","95",null,this);_a.set_taborder("4");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Grid("grd_fclsTovHovList","absolute","0","67",null,"400","28",null,this);_a.set_taborder("3");_a.set_binddataset("ds_fclsTovHovList");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a.set_autoupdatetype("dateselect");_a.set_autosizingtype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"시설물\"/><Cell col=\"2\" rowspan=\"2\" text=\"계약번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"계약명\"/><Cell col=\"4\" rowspan=\"2\" text=\"규격(세부정보)\"/><Cell col=\"5\" colspan=\"2\" text=\"공사담당자\"/><Cell col=\"7\" colspan=\"2\" text=\"인수자\"/><Cell col=\"9\" rowspan=\"2\" text=\"인수일자\"/><Cell row=\"1\" col=\"5\" text=\"사번\"/><Cell row=\"1\" col=\"6\" text=\"성명\"/><Cell row=\"1\" col=\"7\" text=\"기관명\"/><Cell row=\"1\" col=\"8\" text=\"과\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:FCLS_NM\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CNTRCT_NO\" mask=\"####-#-#####\" expandshow=\"show\"/><Cell col=\"3\" edittype=\"none\" style=\"align:left;\" text=\"bind:CNTRCT_NM\"/><Cell col=\"4\" edittype=\"normal\" style=\"align:left;\" text=\"bind:FCLS_STDD\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CON_ICPR_EMPNO\" editdisplay=\"edit\" expandshow=\"show\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:TOV_NM\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:left;\" text=\"bind:TOV_DEP_NM\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:TOV_DT\" editdisplay=\"display\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_masterDelete","absolute",null,"43","64","19","95",null,this);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_masterAdd","absolute",null,"43","64","19","162",null,this);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Grid("grd_ctgry_file","absolute","0","501",null,null,"28","0",this);_a.set_taborder("6");_a.set_binddataset("ds_ctgry_file");_a.set_autoenter("select");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"표준문서\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"복수등록허용\"/><Cell col=\"4\" colspan=\"4\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DOC_CS_NM\"/><Cell col=\"2\" displaytype=\"checkbox\" text=\"bind:ESN_YN\"/><Cell col=\"3\" displaytype=\"checkbox\" text=\"bind:DPL_RGS_YN\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"5\" displaytype=\"button\" text=\"업로드\"/><Cell col=\"6\" displaytype=\"button\" text=\"삭제\"/><Cell col=\"7\" displaytype=\"button\" text=\"다운로드\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_masterCancel","absolute",null,"43","64","19","28",null,this);_a.set_taborder("60");_a.set_text("취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("PRJ010122");_b.set_titletext("시설물 인수인계 등록");});this.addLayout(_a.name,_a);_a=new BindItem("item49","div_search.edt_bsnsCode","value","ds_cond","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item52","div_search.edt_bsnsNm","value","ds_cond","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item51","div_search.btn_bsnsCode","visible","ds_rqestEdayAuditList","ENABLE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("PRJ010122.xfdl","lib::comInclude.xjs");this.addIncludeScript("PRJ010122.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("PRJ010122.xfdl","lib::comUpDownUtils.xjs");this.registerScript("PRJ010122.xfdl",function(){this.saveRow= -1;this.File_UpDownManager=null;this.checkDs=[this.ds_fclsTovHovList];this.PRJ010122_oninit=function(_a,_b){};this.PRJ010122_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"PMS","PRJ");this.File_UpDownManager.init(_a);this.ds_cond.clearData();this.ds_cond.addRow();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.ds_fclsTovHovList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectFclsTovHovList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_fclsTovHovList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_fclsTovHovList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_fclsTovHovList.rowposition;this.fn_transaction("saveFclsTovHovRegistList");}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_fclsTovHovList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_fclsTovHovList.reset();this.ds_fclsTovHovList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectFclsTovHovList":var _b="hsco/pms/prj/PRJ010122/selectFclsTovHovList.do";var _c="input1=ds_cond";var _d="ds_fclsTovHovList=output1";break;case "saveFclsTovHovRegistList":var _b="hsco/pms/prj/PRJ010122/saveFclsTovHovRegistList.do";var _c="input1=ds_fclsTovHovList:U";var _d="";break;case "selectCtgryFile":var _b="/hsco/pms/prj/PRJ010122/selectCtgryFile.do";var _c="input1=ds_condSub1";var _d="ds_ctgry_file=output1";break;case "saveCtgryFile":var _b="/hsco/pms/prj/PRJ010122/saveCtgryFile.do";var _c="input1=ds_ctgry_file:A";var _d="ds_ctgry_file=output1";break;case "selectAtchFile":var _b="/hsco/cmm/file/selectAtchmnFileList.do";var _c="input1=ds_cond_file";var _d="ds_fileList=output1";break;case "deleteFile":var _b="hsco/cmm/file/deleteFile.do";var _c="input1=ds_fileList:U";var _d="ds_fileList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectFclsTovHovList":if(this.saveRow> -1){this.ds_fclsTovHovList.rowposition(saveRow);saveRow= -1;}break;case "saveFclsTovHovRegistList":this.fn_search();break;case "selectAtchFile":if(this.ds_fileList.getRowCount()>0){var _d=this.ds_fileList.rowposition;var _e=this.ds_fileList.getColumn(_d,"FILE_SN");var _f=this.ds_fileList.getColumn(_d,"ORGINL_FILE_NM");var _g=this.ds_fileList.getColumn(_d,"FILE_ORDR");var _h=this.ds_ctgry_file.rowposition;this.ds_ctgry_file.setColumn(_h,"FILE_SN",_e);this.ds_ctgry_file.setColumn(_h,"ORGINL_FILE_NM",_f);this.ds_ctgry_file.setColumn(_h,"FILE_ORDR",_g);var _i=this.ds_ctgry_file.getColumn(_h,"DOC_SN");var _j=this.ds_ctgry_file.getColumn(_h,"CTGRY_FILE_ID");if(this.comUtils.isNull(_i)||this.comUtils.isNull(_j)){this.fn_transaction("saveCtgryFile");}}break;case "deleteFile":this.fn_transaction("selectCtgryFile");break;case "saveCtgryFile":var _k=this.ds_ctgry_file.rowposition;var _i=this.ds_ctgry_file.getColumn(_k,"DOC_SN");this.ds_fclsTovHovList.set_enableevent(false);this.ds_fclsTovHovList.set_updatecontrol(false);var _d=this.ds_fclsTovHovList.rowposition;this.ds_fclsTovHovList.setColumn(_d,"DOC_SN",_i);this.ds_fclsTovHovList.set_updatecontrol(true);this.ds_fclsTovHovList.set_enableevent(true);break;}}};this.ds_fclsTovHovList_onrowposchanged=function(_a,_b){if(_b.newrow> -1){var _c=this.ds_fclsTovHovList.rowposition;this.ds_condSub1.clearData();var _d=this.ds_condSub1.addRow();var _e=_a.getColumn(_b.newrow,"DOC_SN");var _f=_a.getColumn(_b.newrow,"BSNS_CODE");var _g=_a.getColumn(_b.newrow,"FCLS_SN");this.ds_condSub1.setColumn(_d,"DOC_SN",_e);this.ds_condSub1.setColumn(_d,"BSNS_CODE",_f);this.ds_condSub1.setColumn(_d,"FCLS_SN",_g);this.fn_search_ctgryFile();}else{this.ds_ctgry_file.clearData();}};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="BSNS_CODE"){if(this.comUtils.isNull(_b.newvalue)){_a.setColumn(0,"BSNS_NM","");}}};this.btn_masterAdd_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"BSNS_CODE");if(this.comUtils.isNull(_c)){alert("사업코드를 선택하여 주세요.");return false;}var _d=this.ds_fclsTovHovList.addRow();this.ds_fclsTovHovList.setColumn(_d,"BSNS_CODE",_c);this.ds_fclsTovHovList.setColumn(_d,"TOV_DT",this.dateUtils.format(this.gfn_today(),"yyyymmdd"));};this.btn_masterDelete_onclick=function(_a,_b){if(this.ds_fclsTovHovList.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){var _c=this.ds_fclsTovHovList.rowposition;this.ds_fclsTovHovList.deleteRow(_c);}}};this.btn_masterCancel_onclick=function(_a,_b){if(Ex.util.isUpdated(this.ds_fclsTovHovList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_fclsTovHovList.reset();this.ds_fclsTovHovList.applyChange();};this.btn_detailAdd_onclick=function(_a,_b){};this.btn_detailDelete_onclick=function(_a,_b){};this.grd_fclsTovHov_onexpandup=function(_a,_b){if(_b.col=="2"){this.fn_popup("CTR030100_P08");}else if(_b.col=="5"){this.fn_popup("popEmpSearch");}};this.grd_ctgry_file_oncellclick=function(_a,_b){if(_b.cell=='5'){if(this.ds_fileList.getRowCount()>0){this.gfn_message("info.파일.업로드.허용건수초과","1");return false;}this.fn_autoFileSn("PMS","PRJ",this.File_UpDownManager,this.ds_fileList,this.ds_ctgry_file,"TBBH_CTGRY_FILE","FILE_SN",["CTGRY_FILE_ID"]);}if(_b.cell=='6'){if(this.ds_fileList.getRowCount==0){this.gfn_message("info.파일정보.없음");return false;}if(!this.gfn_message("confirm.선택파일.삭제여부","들")){return false;}this.ds_fileList.deleteAll();this.ds_cond_file.clearData();this.fn_transaction("deleteFile");var _c=this.ds_ctgry_file.rowposition;this.ds_ctgry_file.set_enableevent(false);this.ds_ctgry_file.deleteRow(_c);this.ds_ctgry_file.set_enableevent(true);this.fn_transaction("saveCtgryFile");}if(_b.cell=='7'){if(this.ds_fileList.getRowCount()==0){this.gfn_message("err.파일.다운로드.정보없음");return false;}for(var _g=0;_g<this.ds_fileList.getRowCount();_g++ ){var _d=this.ds_fileList.getColumn(_g,"FILE_SN");var _e=this.ds_fileList.getColumn(_g,"FILE_ORDR");var _f=this.ds_fileList.getColumn(_g,"ORGINL_FILE_NM");this.File_UpDownManager.download(_d,_e,_f);}}};this.div_search_btn_bsnsCode_onclick=function(_a){this.fn_popup("popUserBsns");};this.fn_popup=function(_a){if(_a=="CTR030100_P08"){var _b={arg_0:this,bsnsCode:this.ds_cond.getColumn(0,"BSNS_CODE"),bsnsNm:this.ds_cond.getColumn(0,"BSNS_NM")};this.gfn_popup(_a,800,530,"계약번호 선택",_b,"mis_ctr::CTR030100_P08.xfdl","fn_popupCallBack",true);}else if(_a=="popUserBsns"){var _b={EMPNPO:this.fn_getEmpno()};this.gfn_popup(_a,800,530,"사업코드 선택",_b,"pms_prj::popUserBsns.xfdl","fn_popupCallBack",true);}else if(_a=="popEmpSearch"){var _b={arg_0:this};this.gfn_popup(_a,500,465,"사원선택",_b,"com::empno_P01.xfdl","fn_popupCallBack",true);}};this.fn_popupCallBack=function(_a,_b){if(_a=="CTR030100_P08"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BSNS_CODE");var _f=this.ds_cond.getColumn(0,"BSNS_CODE");if(_f!=_e){alert("사업코드가 검색조건과 일치하지 않습니다.");return false;}var _g=this.ds_fclsTovHovList.rowposition;var _h=_c.getColumn(0,"CNTRCT_NO");var _i=_c.getColumn(0,"CNTRCT_NM");var _j=_h.substr(0,4);this.ds_fclsTovHovList.setColumn(_g,"CNTRCT_YEAR",_j);this.ds_fclsTovHovList.setColumn(_g,"CNTRCT_NO",_h);this.ds_fclsTovHovList.setColumn(_g,"CNTRCT_NM",_i);}}else if(_a=="popUserBsns"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _e=_c.getColumn(0,"BSNS_CODE");var _k=_c.getColumn(0,"BSNS_NM");this.ds_cond.setColumn(_g,"BSNS_CODE",_e);this.ds_cond.setColumn(_g,"BSNS_NM",_k);this.fn_search();}}else if(_a=="popEmpSearch"){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){var _g=this.ds_fclsTovHovList.rowposition;var _l=_c.getColumn(0,"EMPNO");var _m=_c.getColumn(0,"EMPNM");this.ds_fclsTovHovList.setColumn(_g,"CON_ICPR_EMPNO",_l);this.ds_fclsTovHovList.setColumn(_g,"EMPNM",_m);}}};this.fn_search_ctgryFile=function(){this.ds_ctgry_file.set_enableevent(false);this.ds_ctgry_file.clearData();this.ds_ctgry_file.set_enableevent(true);if(this.ds_fclsTovHovList.getRowCount()>0){this.fn_transaction("selectCtgryFile");}};this.ds_ctgry_file_onrowposchanged=function(_a,_b){this.ds_fileList.clearData();if(_b.newrow> -1){var _c=_a.getColumn(_b.newrow,"FILE_SN");this.ds_cond_file.clearData();var _d=this.ds_cond_file.addRow();this.ds_cond_file.setColumn(_d,"FILE_SN",_c);this.fn_transaction("selectAtchFile");}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_fclsTovHovList.addEventHandler("onrowposchanged",this.ds_fclsTovHovList_onrowposchanged,this);this.ds_fclsTovHovList.addEventHandler("canrowposchange",this.ds_fclsTovHovList_canrowposchange,this);this.ds_ctgry_file.addEventHandler("onrowposchanged",this.ds_ctgry_file_onrowposchanged,this);this.addEventHandler("oninit",this.PRJ010122_oninit,this);this.addEventHandler("onload",this.PRJ010122_onload,this);this.div_search.btn_bsnsCode.addEventHandler("onclick",this.div_search_btn_bsnsCode_onclick,this);this.btn_detailDelete.addEventHandler("onclick",this.btn_detailDelete_onclick,this);this.btn_detailAdd.addEventHandler("onclick",this.btn_detailAdd_onclick,this);this.grd_fclsTovHovList.addEventHandler("onexpandup",this.grd_fclsTovHov_onexpandup,this);this.btn_masterDelete.addEventHandler("onclick",this.btn_masterDelete_onclick,this);this.btn_masterAdd.addEventHandler("onclick",this.btn_masterAdd_onclick,this);this.grd_ctgry_file.addEventHandler("oncellclick",this.grd_ctgry_file_oncellclick,this);this.btn_masterCancel.addEventHandler("onclick",this.btn_masterCancel_onclick,this);};this.loadIncludeScript("PRJ010122.xfdl");};})();