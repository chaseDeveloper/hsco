﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM050601");this.set_classname("HPM050601");this.set_titletext("HPM050601_실내이미지관리");this.set_scrollbars("fixedboth");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_outlineList",this);_a._setContents("<ColumnInfo><Column id=\"CHUNG_MENU_CODE\" size=\"256\"/><Column id=\"BIZ_NAME\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CHUNG_MENU_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond_fileSn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_vrImgList",this);_a._setContents("<ColumnInfo><Column id=\"BIZ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHUNG_MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_IMG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_IMG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FILE_URL\" type=\"STRING\" size=\"25`6\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFY_USER\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fileList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGINL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXTSN\" type=\"string\" size=\"32\"/><Column id=\"FILE_STRE_COURS\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"SN\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SYS_SE_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"FILE_TY\" type=\"string\" size=\"32\"/><Column id=\"JOB_SE\" type=\"string\" size=\"32\"/><Column id=\"DELETE_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"STRE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_MG\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_CN\" type=\"string\" size=\"32\"/><Column id=\"FILE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"TRNSMIS_FILE_SIZE\" type=\"string\" size=\"32\"/><Column id=\"USE_AT\" type=\"string\" size=\"32\"/><Column id=\"STTUS\" type=\"string\" size=\"32\"/><Column id=\"FILE_SN\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_outlineList</Col><Col id=\"colId\">CHUNG_MENU_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업명</Col></Row><Row><Col id=\"compId\">ds_vrImgList</Col><Col id=\"colId\">TITLE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">제목</Col></Row><Row><Col id=\"compId\">ds_vrImgList</Col><Col id=\"colId\">FILE_SN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">이미지</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new ImageViewer("popImv","absolute","0","0",null,null,"10","32",this);_a.set_taborder("5");_a.set_stretch("fixaspectratio");_a.getSetter("style2").set("background:#8fffff1b;align:center;");_a.set_visible("0");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","1",null,null,"28","32",this);_a.set_taborder("13");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0%","0",null,"10","0%",null,this.div_WORK);_a.set_taborder("36");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0%","11",null,"21","85.55%",null,this.div_WORK);_a.set_taborder("37");_a.set_text("실내이미지관리");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","31",null,"5","0%",null,this.div_WORK);_a.set_taborder("38");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_right","absolute",null,null,"21","190","0","154",this.div_WORK);_a.set_taborder("41");_a.set_text(">");this.div_WORK.addChild(_a.name,_a);_a=new Div("div_imgSlide","absolute","20",null,null,"190","20","154",this.div_WORK);_a.set_taborder("42");_a.set_text("실내 이미지");_a.style.set_border("1 solid #808080ff");_a.set_scrollbars("none");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","0",null,null,"10","0","360",this.div_WORK);_a.set_taborder("44");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_left","absolute","0",null,"21","190",null,"154",this.div_WORK);_a.set_taborder("46");_a.set_text("<");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM17","absolute","0","123","121","185",null,null,this.div_WORK);_a.set_taborder("47");_a.set_text("이미지 업로드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_fileList","fixed","122","166","492","142",null,null,this.div_WORK);_a.set_taborder("48");_a.set_binddataset("ds_fileList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"242\"/><Column size=\"125\"/><Column size=\"119\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"게시판목록\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일형식\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ORGINL_FILE_NM\"/><Cell col=\"2\" displaytype=\"image\" text=\"bind:FILE_IMAGE\"/><Cell col=\"3\" text=\"bind:FILE_EXTSN\"/><Cell col=\"4\" text=\"bind:FILE_MG\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_uploadFiles","absolute","445","140","68","19",null,null,this.div_WORK);_a.set_taborder("49");_a.set_text("파일업로드");_a.set_cssclass("btn_WF_Process");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_downFiles","absolute","524","140","85","19",null,null,this.div_WORK);_a.set_taborder("50");_a.set_text("선택다운로드");_a.set_cssclass("btn_WF_Process");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_gud_v03","absolute","614","0","10","320",null,null,this.div_WORK);_a.set_taborder("51");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");this.div_WORK.addChild(_a.name,_a);_a=new Div("div_search00","absolute","0","80","614","45",null,null,this.div_WORK);_a.set_taborder("52");_a.set_cssclass("div_WFSA_Box");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_1","absolute","419","10","60","20",null,null,this.div_WORK.div_search00);_a.set_taborder("25");_a.set_text("사용여부");_a.set_cssclass("sta_WFSA_Label");this.div_WORK.div_search00.addChild(_a.name,_a);_a=new CheckBox("chk_useYn","absolute","496","12","53","15",null,null,this.div_WORK.div_search00);_a.set_taborder("26");_a.set_truevalue("1");_a.set_falsevalue("3");_a.set_text("사용");this.div_WORK.div_search00.addChild(_a.name,_a);_a=new Edit("title","absolute","123","9","250","25",null,null,this.div_WORK.div_search00);_a.set_taborder("27");_a.set_cssclass("edt_WF_Essential");this.div_WORK.div_search00.addChild(_a.name,_a);_a=new Static("sta_CL_SE00","absolute","11","10","51","20",null,null,this.div_WORK.div_search00);_a.set_taborder("28");_a.set_text("제목");_a.set_cssclass("sta_WFSA_Label");this.div_WORK.div_search00.addChild(_a.name,_a);_a=new Static("Static02","absolute","623","10",null,"21","257",null,this.div_WORK);_a.set_taborder("53");_a.set_text("실내이미지");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Grid("PlaneList","absolute","620","36",null,"273","0",null,this.div_WORK);_a.set_taborder("54");_a.set_binddataset("ds_vrImgList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"145\"/><Column size=\"98\"/><Column size=\"100\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업명\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:BIZ_NAME\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:ORG_IMG_NAME\"/><Cell col=\"3\" displaytype=\"checkbox\" text=\"expr:IS_CONFIRM=='1'?'1':'0'\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_gud_v01","absolute",null,"-32","28",null,"0","32",this);_a.set_taborder("15");_a.set_text("28");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","37","614","45",null,null,this);_a.set_taborder("17");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_CL_SE","absolute","12","10","60","20",null,null,this.div_search);_a.set_taborder("17");_a.set_text("사업명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_outline","absolute","123","8","450","25",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("18");_a.set_innerdataset("@ds_outlineList");_a.set_codecolumn("CHUNG_MENU_CODE");_a.set_datacolumn("BIZ_NAME");_a.set_displayrowcount("15");_a.set_displaynulltext("-");_a.set_cssclass("cmb_WF_Essential");_a.set_readonly("false");_a.set_index("-1");_a=new Layout("default","",991,190,this.div_WORK.div_imgSlide,function(_b){_b.set_taborder("42");_b.set_text("실내 이미지");_b.style.set_border("1 solid #808080ff");_b.set_scrollbars("none");});this.div_WORK.div_imgSlide.addLayout(_a.name,_a);_a=new Layout("default","",614,45,this.div_WORK.div_search00,function(_b){_b.set_taborder("52");_b.set_cssclass("div_WFSA_Box");});this.div_WORK.div_search00.addLayout(_a.name,_a);_a=new Layout("default","",1031,676,this.div_WORK,function(_b){_b.set_taborder("13");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",614,45,this.div_search,function(_b){_b.set_taborder("17");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HPM050601");_b.set_titletext("HPM050601_실내이미지관리");_b.set_scrollbars("fixedboth");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.div_search00.title","value","ds_vrImgList","TITLE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.div_search00.chk_useYn","value","ds_vrImgList","IS_CONFIRM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM050601.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM050601.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("HPM050601.xfdl","mis_lib::misUtil.xjs");this.addIncludeScript("HPM050601.xfdl","lib::comUpDownUtils.xjs");this.registerScript("HPM050601.xfdl",function(){this.FILE_MANAGER=null;var _a=this.gfn_today("NOW_YEAR");var _b=this.gfn_today("NOW_MONTH");this.HPM050601_oninit=function(_c,_d){this.fn_init();this.fn_init_dataset();};this.HPM050601_onload=function(_c,_d){var _e={useMultiUpload:false,onChange:this.fn_onFileSelected,onSuccess:this.fn_onFileSuccess};this.File_UpDownManager=new this.fileUpDownManager(this,"ETC","HPG/boardfile/");this.File_UpDownManager.init(_e);this.fn_search_outline();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){this.fn_bizChk();this.ds_vrImgList.clearData();this.ds_fileList.clearData();this.fn_transaction("selectVrimgList");};this.fn_transaction=function(_c){var _d="";var _e="";var _f="";switch(_c){case "selectOutline":_f="/hsco/hpm/ctm/HPM050601/selectOutlineList.do";_d="";_e="ds_outlineList=output1";break;case "selectVrimgList":_f="/hsco/hpm/ctm/HPM050601/selectVrimgList.do";_d="input1=ds_cond";_e="ds_vrImgList=output1";break;case "saveVrimgList":var _f="/hsco/hpm/ctm/HPM050601/saveVrimgList.do";var _d="input1=ds_vrImgList:U";var _e="";break;case "selectAtchFile":var _f="/hsco/cmm/file/selectAtchmnFileList.do";var _d="input1=ds_cond_fileSn";var _e="ds_fileList=output1";break;}Ex.core.tran(this,_c,_f,_d,_e);};this.fn_callBack=function(_c,_d,_e){var _f=_d==0?true:false;if(_f){switch(_c){case "saveVrimgList":this.gfn_message("success.처리.성공");this.fn_search();break;case "selectAtchFile":this.fn_fileExtChk();break;case "selectVrimgList":this.imgSlide();break;}}};this.imgSlide=function(){var _c=this.div_WORK.div_imgSlide;for(var _r=_c.components.length-1;_r>=0;_r-- ){var _d=_c.components[_r];_d.clearEventHandler("onclick");_d.destroy();}this.div_WORK.div_imgSlide.set_left(20);var _e=234;var _f=5;var _g=5;var _h=5;var _i=null;var _j=null;var _k=5;var _l=this.ds_vrImgList.rowcount;for(var _r=0;_r<_l;_r++ ){var _m=this.ds_vrImgList.getColumn(_r,'FILE_SN');var _n=this.ds_vrImgList.getColumn(_r,'FILE_ORDR');var _o=this.ds_vrImgList.getColumn(_r,'TITLE');var _p=(_e+_k)*_r+_f;var _q=new ImageViewer("img"+_r,"absolute",_p,_g,_e,_i,_j,_h,_c);if(_m!=null&&_n!=null){_q.set_text(_o);_q.set_stretch('fixaspectratio');_q.style.set_color('#ffffff');_q.style.set_font_type('bold');_q.addEventHandler("onclick",this.imv_onclick,this);_c.addChild(_q.name,_q);_q.show();this.fn_requestImg(_q,_m,_n);}else{_q.set_text(_o+'\nNo Image');_q.set_stretch('fixaspectratio');_q.style.set_color('#AAAAAA');_q.style.set_font_type('bold');_c.addChild(_q.name,_q);_q.show();}}if(_l==0){_c.set_text('평형 이미지');}else{_c.set_text('');}};this.div_WORK_btn_left_onclick=function(_c,_d){if(this.div_WORK.div_imgSlide.components.length==0){return;}var _e=parseInt(this.div_WORK.div_imgSlide.left)+239;_e=_e>20?20:_e;this.div_WORK.div_imgSlide.set_left(_e);};this.div_WORK_btn_right_onclick=function(_c,_d){var _e=this.div_WORK.div_imgSlide.components;var _f=_e.length;if(this.div_WORK.div_imgSlide.components.length==0){return;}var _g=_e[0];var _h=_g.width;var _i=this.div_WORK.btn_right.getOffsetLeft();var _j=this.div_WORK.div_imgSlide.left-239;var _k=_i-((parseInt(_g.width)+5)*_f+5);_j=_j<_k?_k:_j;this.div_WORK.div_imgSlide.set_left(_j);};this.imv_onclick=function(_c,_d){if(_c.name=='popImv'){_c.set_visible(false);return;}if(!_c.image){return;}var _e=this.popImv;_e.set_image(_c.image);_e.set_visible(true);_e.bringToFront();};this.imv_onmouseleave=function(_c,_d){_c.set_visible(false);};this.fn_requestImg=function(_c,_d,_e){var _f=application.gv_host+"hsco/cmm/download/viewImage.do";var _g="?FILE_SN="+_d+"&FILE_ORDR="+_e;_c.set_image(_f+_g);};this.fn_search_outline=function(){this.fn_transaction("selectOutline");};this.btn_uploadFiles_onclick=function(_c,_d){this.fn_autoFileSn("ETC","HPG",this.File_UpDownManager,this.ds_fileList,this.ds_vrImgList,"TBHPG_BIZ_CONTROL_VRIMG","FILE_SN",["CHUNG_MENU_CODE"]);};this.btn_downFiles_onclick=function(_c,_d){var _e=this.ds_fileList.findRow("CHK","1");if(_e<0){this.gfn_message("comm.데이터.선택.없음");return;}for(var _j=0;_j<this.ds_fileList.getRowCount();_j++ ){var _f=this.ds_fileList.getColumn(_j,"FILE_SN");var _g=this.ds_fileList.getColumn(_j,"FILE_ORDR");var _h=this.ds_fileList.getColumn(_j,"ORG_IMG_NAME");var _i=this.ds_fileList.getColumn(_j,"CHK");if(_i=='1'){this.File_UpDownManager.download(_f,_g,_h);}}};this.fn_outlineChanged=function(_c,_d){this.ds_cond.setColumn(0,"CHUNG_MENU_CODE",this.div_search.cmb_outline.value);this.fn_search();};this.ds_vrImgList_onrowposchanged=function(_c,_d){this.fn_search_fileList();};this.fn_search_fileList=function(){var _c=this.ds_vrImgList.rowposition;var _d=this.ds_vrImgList.getColumn(_c,"FILE_SN");this.ds_cond_fileSn.clearData();var _e=this.ds_cond_fileSn.addRow();this.ds_cond_fileSn.setColumn(_e,"FILE_SN",_d);this.ds_fileList.clearData();this.fn_transaction("selectAtchFile");};this.fn_insert=function(){this.fn_bizChk();var _c=this.ds_vrImgList.addRow();this.ds_vrImgList.setColumn(_c,"IS_CONFIRM","3");this.ds_fileList.clearData();this.ds_vrImgList.setColumn(_c,"CHUNG_MENU_CODE",this.div_search.cmb_outline.value);};this.fn_cancel=function(){if(application.confirm("모든 내용을 복원하시겠습니까?")){this.ds_vrImgList.reset();this.ds_vrImgList.applyChange();}};this.fn_save=function(){var _c=this.ds_vrImgList.rowposition;var _d=this.ds_fileList.rowposition;var _e=this.ds_fileList.getColumn(_d,"STRE_FILE_NM");var _f=this.ds_fileList.getColumn(_d,"FILE_EXTSN");var _g=this.ds_fileList.getColumn(_d,"ORGINL_FILE_NM");var _h=_a+"/"+mon+"/"+_e+"."+_f;if(_e==""||typeof _e=="undefined"){_h="";}this.ds_vrImgList.setColumn(_c,"SAVE_IMG_NAME",_h);this.ds_vrImgList.setColumn(_c,"ORG_IMG_NAME",_g);this.ds_vrImgList.setColumn(_c,"IMG_FILE_URL","/upload/ETC/HPG/boardfile/");this.ds_vrImgList.setColumn(_c,"FILE_SN",this.ds_fileList.getColumn(_d,"FILE_SN"));if(!this.gfn_checkValidation(this.ds_vrImgList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveVrimgList");}else{return;}};this.fn_fileExtChk=function(){var _c=this.ds_fileList.rowposition;var _d=this.ds_fileList.getColumn(_c,"FILE_EXTSN");if(_d=="undefined"){return;}if(_d.toLowerCase()!="jpg"&&_d.toLowerCase()!="jpeg"&&_d.toLowerCase()!="gif"&&_d.toLowerCase()!="png"&&_d.toLowerCase()!="bmp"){this.gfn_message("info.파일.업로드.타입.불가","이미지가 아닌|이미지 파일만 업로드 가능합니다.");this.ds_fileList.deleteRow(_c);return;}};this.fn_bizChk=function(){if(this.div_search.cmb_outline.value==null){this.gfn_message("comm.데이터.선택.없음");return;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.HPM050601_onload,this);this.addEventHandler("oninit",this.HPM050601_oninit,this);this.addEventHandler("onbeforeclose",this.HPM050601_onbeforeclose,this);this.popImv.addEventHandler("onclick",this.imv_onclick,this);this.popImv.addEventHandler("onmouseleave",this.imv_onmouseleave,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_right.addEventHandler("onclick",this.div_WORK_btn_right_onclick,this);this.div_WORK.btn_left.addEventHandler("onclick",this.div_WORK_btn_left_onclick,this);this.div_WORK.grd_fileList.addEventHandler("onheadclick",this.Div00_div_info_grd_fileList_onheadclick,this);this.div_WORK.btn_uploadFiles.addEventHandler("onclick",this.btn_uploadFiles_onclick,this);this.div_WORK.btn_downFiles.addEventHandler("onclick",this.btn_downFiles_onclick,this);this.div_WORK.Static02.addEventHandler("onclick",this.div_WORK_Static02_onclick,this);this.div_WORK.PlaneList.addEventHandler("oncellclick",this.ds_vrImgList_onrowposchanged,this);this.div_search.cmb_outline.addEventHandler("onitemchanged",this.fn_outlineChanged,this);};this.loadIncludeScript("HPM050601.xfdl");};})();