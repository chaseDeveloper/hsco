﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT01030900_P02");this.set_classname("RNT01030900_P02");this.set_titletext("소유물건 일괄 등록");this._setFormPosition(0,0,1059,704);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prpos_cd",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_targetChk",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_excel",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">INQIRE_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">조회일자</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">소유자</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">IHIDNUM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주민번호</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">AR</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">면적</Col></Row><Row><Col id=\"compId\">ds_posesnThingList</Col><Col id=\"colId\">PRPOS</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">용도</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_sample",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INQIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSFR_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"IHIDNUM\">740217-1111111</Col><Col id=\"NM\">김제남</Col><Col id=\"ADRES\">화성시 달성군 옥포면 본리리 1149번지 102동 1709호</Col><Col id=\"AR\">62.59</Col><Col id=\"PRPOS\">아파트</Col><Col id=\"ACQS_DE\">20160711</Col><Col id=\"TRNSFR_DE\">20160711</Col><Col id=\"INQIRE_DE\">20160711</Col></Row><Row><Col id=\"NM\">박귀남</Col><Col id=\"IHIDNUM\">621008-2222222</Col><Col id=\"ADRES\">경북 안동시 임동면 갈전리 332번지 1동 1호</Col><Col id=\"AR\">45.1</Col><Col id=\"PRPOS\">농어가주택</Col><Col id=\"INQIRE_DE\">20160713</Col><Col id=\"TRNSFR_DE\">20160711</Col><Col id=\"ACQS_DE\">20160711</Col></Row><Row><Col id=\"NM\">정효정</Col><Col id=\"IHIDNUM\">790930-2222222</Col><Col id=\"ADRES\">화성시 달서구 두류동 849번지 66호 1동 302호</Col><Col id=\"AR\">82.99</Col><Col id=\"PRPOS\">다가구주택</Col><Col id=\"INQIRE_DE\">20160711</Col><Col id=\"ACQS_DE\">20160711</Col><Col id=\"TRNSFR_DE\">20160711</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_posesnThingList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("false");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHKVAL\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSFR_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","0",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","17","205","21",null,null,this);_a.set_taborder("5");_a.set_text("소유물건 일괄 등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","21","52","71","18",null,null,this);_a.set_taborder("6");_a.set_text("조회일자");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Calendar("cal_inqireDe","absolute","92","51","100","19",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy-MM-dd");_a=new Button("btn_inqireDeUpdate1","absolute","194","51","134","19",null,null,this);_a.set_taborder("9");_a.set_text("조회일자 일괄 수정");_a.set_cssclass("btn_WF_Process");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute","835","15","50","25",null,null,this);_a.set_taborder("11");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute","888","15","50","25",null,null,this);_a.set_taborder("12");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_delete","absolute","941","15","50","25",null,null,this);_a.set_taborder("13");_a.set_text("삭제");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","75",null,"614","15",null,this);_a.set_taborder("14");this.addChild(_a.name,_a);_a=new Grid("grd_posesnThingList","absolute","0","0",null,null,"0","0",this.div_WORK);_a.set_taborder("2");_a.set_binddataset("ds_posesnThingList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자료상태\"/><Cell col=\"1\" text=\"조회일자\"/><Cell col=\"2\" text=\"소유자\"/><Cell col=\"3\" text=\"주민번호\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"면적\"/><Cell col=\"6\" text=\"용도\"/><Cell col=\"7\" text=\"취득일자\"/><Cell col=\"8\" text=\"양도일자\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(CHKVAL == '정상' ? 'black' : 'red');color2:EXPR(CHKVAL == '정상' ? 'black' : 'red');selectcolor:EXPR(CHKVAL == '정상' ? 'black' : 'red');\" text=\"bind:CHKVAL\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:INQIRE_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:NM\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:IHIDNUM\" mask=\"expr:IHIDNUM == null  ? &quot;&quot;  : '######-#######'\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:ADRES\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:AR\" mask=\"expr:AR == null  ? &quot;&quot;  : '999,999.000'\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:PRPOS\" combodataset=\"ds_prpos_cd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:ACQS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:TRNSFR_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","994","15","50","25",null,null,this);_a.set_taborder("15");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","70",null,"5","0",null,this);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","40",null,"10","0",null,this);_a.set_taborder("19");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDown00","absolute","857","49","92","21",null,null,this);_a.set_taborder("20");_a.set_text("양식다운로드");this.addChild(_a.name,_a);_a=new Button("btn_excelImport","absolute","952","49","92","21",null,null,this);_a.set_taborder("21");_a.set_text("파일불러오기");this.addChild(_a.name,_a);_a=new Grid("grd_posesnThingListDown","absolute","16","816",null,null,"14","-260",this);_a.set_taborder("22");_a.set_binddataset("ds_sample");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"106\"/><Column size=\"241\"/><Column size=\"59\"/><Column size=\"105\"/><Column size=\"70\"/><Column size=\"79\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소유자\"/><Cell col=\"1\" text=\"주민번호\"/><Cell col=\"2\" text=\"주소\"/><Cell col=\"3\" text=\"면적\"/><Cell col=\"4\" text=\"용도\"/><Cell col=\"5\" text=\"취득일자\"/><Cell col=\"6\" text=\"양도일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:NM\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:IHIDNUM\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ADRES\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" mask=\"999,999.000\" text=\"bind:AR\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:PRPOS\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:ACQS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:TRNSFR_DE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","19","794","205","21",null,null,this);_a.set_taborder("23");_a.set_text("양식다운로드 샘플 데이터");_a.set_cssclass("sta_WF_Title01");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2",null,null,"15","0","0",this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,614,this.div_WORK,function(_b){_b.set_taborder("14");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,704,this,function(_b){_b.set_classname("RNT01030900_P02");_b.set_titletext("소유물건 일괄 등록");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT02020300_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("RNT02020300_P01.xfdl",function(){this.RNT02020300_P01_oninit=function(_a,_b){this.fn_init();this.div_WORK.grd_posesnThingList.clearEventHandler("onrbuttondown");this.div_WORK.grd_posesnThingList.set_cellmovingtype('none');};this.RNT02020300_P01_onload=function(_a,_b){this.cal_inqireDe.set_value(this.gfn_today());this.fn_load_combo();};this.fn_load_combo=function(){this.fn_get_cmmCode(this.ds_prpos_cd,"",{grpCode:"RNT012"});};this.btn_inqireDeUpdate_onclick=function(_a,_b){var _c=this.ds_posesnThingList.rowcount;if(_c==0){this.alert("소유물건정보가 존재하지 않습니다.");return;}if(this.comUtils.isNull(this.cal_inqireDe.value)){this.alert("조회일자가 선택되지 않았습니다.");return;}for(var _d=0;_d<_c;_d++ ){this.ds_posesnThingList.setColumn(_d,"INQIRE_DE",this.cal_inqireDe.value);}};this.btn_save_onclick=function(_a,_b){if(this.gfn_checkValidation(this.ds_posesnThingList,this.ds_validation)==false){return;}if(this.ds_posesnThingList.isUpdated()==true){if(this.confirm("저장 하시겠습니까?")){this.fn_transaction("posesnThingCmulti");}}};this.btn_cancel_onclick=function(_a,_b){if(this.confirm("변경하신 모든 사항이 취소됩니다.")){this.ds_posesnThingList.cancel();}};this.btn_delete_onclick=function(_a,_b){this.ds_posesnThingList.deleteSelectRow();};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_excelDown_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_posesnThingListDown,"download");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "posesnThingCmulti":var _c="/hsco/pms/rnt/prm/RNT02020300/puchasPosesnThingCmulti.do";var _d="input3=ds_posesnThingList:U";var _e="";break;case "posesnThingChk":var _c="/hsco/pms/rnt/prm/RNT02020300/puchasPosesnThingChk.do";var _d="input1=ds_cond00";var _e="ds_targetChk=output1";_b=false;break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "posesnThingCmulti":if(this.gfn_message("success.처리.성공")){}break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.btn_excelImport_onclick=function(_a,_b){this.ds_posesnThingList.clearData();this.ds_excel.clearData();var _c=function(){var _e=this.ds_excel.rowcount;var _f="";var _g,_h,_i,_j;for(var _l=1;_l<=_e;_l++ ){if(this.ds_excel.getColumn(_l,"Column1")==null){continue;}_g=this.ds_excel.getColumn(_l,"Column0");_h=(this.ds_excel.getColumn(_l,"Column1")||'').replace(/-/gi,"");_i=(this.ds_excel.getColumn(_l,"Column5")||'').replace(/-/gi,"");_j=(this.ds_excel.getColumn(_l,"Column6")||'').replace(/-/gi,"");this.ds_cond00.clearData();this.ds_cond00.addRow();this.ds_cond00.setColumn(0,"NM",_g);this.ds_cond00.setColumn(0,"IHIDNUM",_h);this.ds_excel.setColumn(_l,"Column4",this.ds_prpos_cd.lookup("CODE_NM",this.ds_excel.getColumn(_l,"Column4"),"CODE"));this.ds_excel.setColumn(_l,"Column1",_h);this.ds_excel.setColumn(_l,"Column5",_i);this.ds_excel.setColumn(_l,"Column6",_j);this.ds_targetChk.clearData();this.fn_transaction("posesnThingChk");var _k=this.ds_posesnThingList.addRow();this.ds_posesnThingList.copyRow(_k,this.ds_excel,_l,'NM=Column0,'+'IHIDNUM=Column1,'+'ADRES=Column2,'+'AR=Column3,'+'PRPOS=Column4,'+'ACQS_DE=Column5,'+'TRNSFR_DE=Column6,');_f=this.ds_targetChk.getColumn(0,"CHKVAL");this.ds_posesnThingList.setColumn(_k,"CHKVAL",_f);if(_f!="정상"){this.ds_posesnThingList.setRowType(_k,Dataset.ROWTYPE_NORMAL);}else{this.ds_posesnThingList.setRowType(_k,Dataset.ROWTYPE_INSERT);}}};var _d={targetDs:this.ds_excel,headSet:false,callBack:_c};this.gfn_importExcel(_d);};});this.on_initEvent=function(){this.ds_targetChk.addEventHandler("onrowposchanged",this.DS_TBRNT_APPLCNT_onrowposchanged,this);this.ds_excel.addEventHandler("onrowposchanged",this.DS_TBRNT_APPLCNT_onrowposchanged,this);this.addEventHandler("oninit",this.RNT02020300_P01_oninit,this);this.addEventHandler("onload",this.RNT02020300_P01_onload,this);this.btn_inqireDeUpdate1.addEventHandler("onclick",this.btn_inqireDeUpdate_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_excelDown00.addEventHandler("onclick",this.btn_excelDown_onclick,this);this.btn_excelImport.addEventHandler("onclick",this.btn_excelImport_onclick,this);};this.loadIncludeScript("RNT02020300_P01.xfdl");};})();