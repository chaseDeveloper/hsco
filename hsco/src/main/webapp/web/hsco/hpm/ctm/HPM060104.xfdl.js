﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM060104");this.set_classname("HPM060104");this.set_titletext("강사관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INSTRCTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSTRCTR_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_instrctrManageList</Col><Col id=\"colId\">INSTRCTR_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">강사명</Col></Row><Row><Col id=\"compId\">ds_instrctrManageList</Col><Col id=\"colId\">INSTRCTR_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">강사구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_instrctrManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"INSTRCTR_SN\" type=\"STRING\" size=\"256\"/><Column id=\"INSTRCTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSTRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREER_MATTER\" type=\"STRING\" size=\"256\"/><Column id=\"QUALF_ND_LCNS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_instrctrSe",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileCond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_instrctrSe_s",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("sta_back14","absolute",null,"301","126","143","261",null,this);_a.set_taborder("112");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_back11","absolute",null,"249","361","27","28",null,this);_a.set_taborder("113");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_back13","absolute",null,"275","138","27","261",null,this);_a.set_taborder("114");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_back00","absolute",null,"171","359","79","28",null,this);_a.set_taborder("103");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_back01","absolute",null,"93","359","79","28",null,this);_a.set_taborder("66");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_back1","absolute",null,"67","362","27","27",null,this);_a.set_taborder("84");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Edit("edt_instrctrNm","absolute","232","5","126","21",null,null,this.div_search);_a.set_taborder("0");this.div_search.addChild(_a.name,_a);_a=new Static("sta_instrctrNm","absolute","179","5","52","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("강사명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","165","0","15","31",null,null,this.div_search);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_instrctrSe","absolute","83","5","83","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_instrctrSe_innerdataset",this.div_search.cmb_instrctrSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">회원ID</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">성명</Col></Row><Row><Col id=\"codecolumn\">003</Col><Col id=\"datacolumn\">단체명</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("3");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_innerdataset("@ds_instrctrSe_s");_a=new Static("sta_instrctrSe","absolute","14","5","65","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("강사구분");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15","31",null,null,this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","43",null,"19","28",null,this);_a.set_taborder("22");_a.set_text("강사목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("23");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,null,"13","735","0","0",this);_a.set_taborder("25");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_trnsfer","absolute",null,"42","112","21","28",null,this);_a.set_taborder("2");_a.set_text("초기데이터 갱신#1");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static42","absolute","553","43","10",null,null,"0",this);_a.set_taborder("27");_a.set_text("상세정보");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList01","absolute",null,"43","120","19","376",null,this);_a.set_taborder("28");_a.set_text("상세정보");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Combo("cmb_gradSe","absolute",null,"70","120","21","30",null,this);this.addChild(_a.name,_a);_a.set_taborder("44");_a.set_innerdataset("@ds_instrctrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new TextArea("txt_mainFcltyDc","absolute",null,"96","354","73","30",null,this);_a.set_taborder("64");_a.set_lengthunit("ascii");_a.set_maxlength("300");this.addChild(_a.name,_a);_a=new Static("sta_careerNatter","absolute",null,"93","110","79","386",null,this);_a.set_taborder("65");_a.set_text("경력사항");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Static("sta_gradSe","absolute",null,"67","110","27","152",null,this);_a.set_taborder("79");_a.set_text("강사구분");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Static("sta_itemSe","absolute",null,"67","110","27","386",null,this);_a.set_taborder("80");_a.set_text("강사명");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Button("Button111","absolute",null,"754","64","19","28",null,this);_a.set_taborder("94");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("Button110","absolute",null,"754","64","19","95",null,this);_a.set_taborder("95");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("Button109","absolute",null,"754","64","19","162",null,this);_a.set_taborder("96");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static04","absolute",null,"773","585","5","28",null,this);_a.set_taborder("97");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute",null,"752","585","10","28",null,this);_a.set_taborder("98");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute",null,"778","584",null,"28","-245",this);_a.set_taborder("99");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"수강대상\"/><Cell col=\"1\" text=\"수강요금\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList00","absolute","447","754","120","19",null,null,this);_a.set_taborder("100");_a.set_text("수강대상 및 요금");_a.set_cssclass("sta_WF_Title02");_a.set_visible("false");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("sta_qualfNdLcns","absolute",null,"171","110","79","386",null,this);_a.set_taborder("101");_a.set_text("자격 및 면허");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new TextArea("txt_qualfNdLcns","absolute",null,"174","354","73","30",null,this);_a.set_taborder("102");_a.set_lengthunit("ascii");_a.set_maxlength("300");this.addChild(_a.name,_a);_a=new Edit("Edit00","absolute",null,"70","120","21","264",null,this);_a.set_taborder("104");_a.set_lengthunit("ascii");_a.set_maxlength("20");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Grid("grd_instrctrManageList","absolute","0","67",null,null,"504","0",this);_a.set_taborder("105");_a.set_binddataset("ds_instrctrManageList");_a.set_cellsizingtype("col");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"강사명\"/><Cell col=\"2\" text=\"강사구분\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSTRCTR_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:INSTRCTR_SE\" combodataset=\"ds_instrctrSe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_rm","absolute",null,"249","110","27","386",null,this);_a.set_taborder("106");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Edit("edt_rm","absolute",null,"252","354","21","30",null,this);_a.set_taborder("107");_a.set_lengthunit("ascii");_a.set_maxlength("300");this.addChild(_a.name,_a);_a=new Static("sta_img","absolute",null,"275","110","169","386",null,this);_a.set_taborder("108");_a.set_text("사진첨부");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Button("btn_fileUpload","absolute",null,"278","55","21","329",null,this);_a.set_taborder("109");_a.set_text("사진등록");this.addChild(_a.name,_a);_a=new Button("btn_fileDelete","absolute",null,"278","55","21","264",null,this);_a.set_taborder("110");_a.set_text("사진삭제");this.addChild(_a.name,_a);_a=new ImageViewer("img_photo","absolute",null,"304","120","137","264",null,this);_a.set_taborder("111");_a.style.set_background("#ffffffff");_a.set_stretch("fit");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("HPM060104");_c.set_titletext("강사관리");});this.addLayout(_a.name,_a);_a=new BindItem("item18","edt_rm","value","ds_instrctrManageList","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","txt_mainFcltyDc","value","ds_instrctrManageList","CAREER_MATTER");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","cmb_gradSe","value","ds_instrctrManageList","INSTRCTR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_SEARCH.cmb_rentFcltsSe_s","value","ds_cond","SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_SEARCH.cmb_pchrgAt_s","value","ds_cond","CL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_SEARCH.edt_fcltyNm_s","value","ds_cond","FCLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","txt_qualfNdLcns","value","ds_instrctrManageList","QUALF_ND_LCNS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_instrctrNm","value","ds_cond","INSTRCTR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_instrctrSe","value","ds_cond","INSTRCTR_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Edit00","value","ds_instrctrManageList","INSTRCTR_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM060104.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM060104.xfdl","lib::comUpDownUtils.xjs");this.addIncludeScript("HPM060104.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM060104.xfdl",function(){this.saveRow= -1;this.File_UpDownManager=null;this.HPM060104_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HPM060104_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"INSTRCTR_SE","");this.ds_cond.setColumn(0,"INSTRCTR_NM","");var _a={useMultiUpload:true,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess,allowTypes:["jpg","jpeg","gif","png"]};this.File_UpDownManager=new this.fileUpDownManager(this,"HPM","HPM");this.File_UpDownManager.init(_a);var _b=[["ds_instrctrSe_s","HPM014","1","전체"],["ds_instrctrSe","HPM014","1",""]];var _c=function(_d,_e,_f){this.fn_search();};this.gfn_comboLoad(_b,_c);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_instrctrManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_instrctrManageList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectInstrctrManageList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_instrctrManageList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_instrctrManageList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_instrctrManageList.rowposition;this.fn_transaction("saveInstrctrManageList");}};this.fn_insert=function(){this.ds_instrctrManageList.addRow();};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){if(this.ds_instrctrManageList.getRowCount()>0){var _a=this.ds_instrctrManageList.rowposition;this.ds_instrctrManageList.deleteRow(_a);}}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_instrctrManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_instrctrManageList.reset();this.ds_instrctrManageList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectInstrctrManageList":var _b="hsco/hpm/ctm/HPM060104/selectInstrctrManageList.do";var _c="input1=ds_cond";var _d="ds_instrctrManageList=output1";break;case "saveInstrctrManageList":var _b="hsco/hpm/ctm/HPM060104/saveInstrctrManageList.do";var _c="input1=ds_instrctrManageList:U";var _d="";break;case "trnsferInstrctrInfoList":var _b="hsco/hpm/ctm/HPM060104/trnsferInstrctrInfoList.do";var _c="input1=ds_cond";var _d="";break;case "selectAtchFile":var _b="/hsco/cmm/file/selectAtchmnFileList.do";var _c="input1=ds_fileCond";var _d="ds_fileList=output1";break;case "deleteAtchFile":var _b="hsco/cmm/file/deleteFile.do";var _c="input1=ds_fileList:U";var _d="ds_fileList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectInstrctrManageList":if(this.saveRow!= -1){this.ds_instrctrManageList.set_rowposition(this.saveRow);this.saveRow= -1;}this.fn_setObjectProperty();break;case "saveInstrctrManageList":this.fn_search();break;case "trnsferInstrctrInfoList":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectAtchFile":if(this.ds_fileList.rowcount>0){this.fn_photo_view();}else{this.img_photo.set_image("");}break;case "deleteAtchFile":this.img_photo.set_image("");break;}}};this.ds_instrctrManageList_oncolumnchanged=function(_a,_b){if(_b.columnid=="FCLTS_SE"){this.ds_mummResveTimeSe.set_filterstr("String(VAL0).indexOf("+_b.newvalue+") > -1");}};this.ds_instrctrManageList_onrowposchanged=function(_a,_b){this.ds_fileCond.clearData();this.ds_fileList.clearData();if(_b.newrow> -1){var _c=_a.rowposition;this.ds_fileCond.addRow();this.ds_fileCond.setColumn(0,"FILE_SN",this.ds_instrctrManageList.getColumn(_c,"FILE_SN"));this.fn_transaction("selectAtchFile");}else{this.img_photo.set_image("");}};this.btn_trnsfer_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"DEPT_CODE");if(!this.comUtils.isNull(_c)){if(application.confirm("초기데이터로 갱신하시겠습니까?\n계속 진행하시면 기존 데이터는 삭제됩니다.")){this.fn_transaction("trnsferInstrctrInfoList");}}};this.btn_fileUpload_onclick=function(_a,_b){if(this.ds_fileList.rowcount<1){mCallback=function(){this.fn_autoFileSn("HPM","HPM",this.File_UpDownManager,this.ds_fileList,this.ds_instrctrManageList,"TBHPM_INSTRCTR_MANAGE","FILE_SN",["INSTRCTR_SN"]);};this.gfn_message("info.저장.초과","이미지 파일만",null,null,mCallback);}else{this.gfn_message("info.저장.초과","최대 1개 까지만");}};this.btn_fileDelete_onclick=function(_a,_b){if(this.ds_fileList.getRowCount()>0){if(application.confirm("첨부파일을 삭제하시겠습니까?")){this.ds_fileList.deleteRow(0);this.fn_transaction("deleteAtchFile");}}};this.fn_photo_view=function(){var _a=this.ds_fileList.getColumn(0,"FILE_EXTSN");var _b=this.ds_fileList.getColumn(0,"FILE_SN");var _c=this.ds_fileList.getColumn(0,"FILE_ORDR");var _d=this.ds_fileList.getColumn(0,"ATCH_FILE");var _e=this.ds_fileList.getColumn(0,"FILE_TY");if(_e.indexOf("image/")> -1){var _f={};_f["FILE_SN"]=_b;_f["FILE_ORDR"]=_c;var _g=application.gv_host+"hsco/cmm/download/viewImage.do";var _h="?FILE_SN="+_b+"&FILE_ORDR="+_c;this.img_photo.set_image(_g+_h);this.img_photo.set_stretch(fixaspectratio);}};this.ds_instrctrManageList_onrowsetchanged=function(_a,_b){this.fn_setObjectProperty();};this.fn_setObjectProperty=function(){var _a=(this.ds_instrctrManageList.getRowCount()>0)?true:false;this.btn_fileUpload.set_enable(_a);this.btn_fileDelete.set_enable(_a);};});this.on_initEvent=function(){this.ds_instrctrManageList.addEventHandler("onrowposchanged",this.ds_instrctrManageList_onrowposchanged,this);this.ds_instrctrManageList.addEventHandler("onrowsetchanged",this.ds_instrctrManageList_onrowsetchanged,this);this.addEventHandler("oninit",this.HPM060104_oninit,this);this.addEventHandler("onload",this.HPM060104_onload,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);this.btn_trnsfer.addEventHandler("onclick",this.btn_trnsfer_onclick,this);this.grd_instrctrManageList.addEventHandler("oncelldblclick",this.div_instrctrList_oncelldblclick,this);this.sta_img.addEventHandler("onclick",this.sta_img_onclick,this);this.btn_fileUpload.addEventHandler("onclick",this.btn_fileUpload_onclick,this);this.btn_fileDelete.addEventHandler("onclick",this.btn_fileDelete_onclick,this);this.img_photo.addEventHandler("onclick",this.img_photo_onclick,this);};this.loadIncludeScript("HPM060104.xfdl");};})();