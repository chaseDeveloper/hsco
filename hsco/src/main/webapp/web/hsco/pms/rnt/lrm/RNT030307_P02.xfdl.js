﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT030307_P02");this.set_classname("RNT030307_P02");this.set_titletext("소유물건 일괄 등록 팝업");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_excel",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">RENT_HOUSE_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택명</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">DONG</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">동</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">HO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">호</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">계약자</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">OWNER_NM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">소유자</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">OWNER_IHIDNUM</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주민번호</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">FAMILY_RELATE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">관계</Col></Row><Row><Col id=\"compId\">ds_rentPosesnThingList</Col><Col id=\"colId\">OWNER_ADRES</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">물건자주소</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_posesn_thing",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLCNT_CNTRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLCNT_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"LFSTS_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSFR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRESENTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REFER\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ex",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLCNT_CNTRCTR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLCNT_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"LFSTS_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAMILY_RELATE\" type=\"STRING\" size=\"256\"/><Column id=\"INQIRE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSFR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PRESENTN_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLN_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REFER\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ADRES\">화성시 달성군 옥포면 본리리 1149번지 102동 1709호</Col><Col id=\"PRPOS\">아파트</Col><Col id=\"AR\">124.76</Col><Col id=\"ACQS_DE\">20060623</Col><Col id=\"NM\">김신자</Col><Col id=\"IHIDNUM\">790107-1111111</Col></Row><Row><Col id=\"ADRES\">경북 안동시 임동면 갈전리 332번지 1동 1호</Col><Col id=\"PRPOS\">농어가주택</Col><Col id=\"AR\">86.88</Col><Col id=\"ACQS_DE\">20071124</Col><Col id=\"NM\">이수현</Col><Col id=\"IHIDNUM\">710305-2222222</Col></Row><Row><Col id=\"ADRES\">화성시 달서구 두류동 849번지 66호 1동 302호</Col><Col id=\"PRPOS\">다가구주택</Col><Col id=\"AR\">45.178</Col><Col id=\"ACQS_DE\">20070615</Col><Col id=\"NM\">이종원</Col><Col id=\"IHIDNUM\">950622-1111111</Col></Row><Row><Col id=\"PRPOS\">단독주택</Col><Col id=\"ADRES\">경상북도 영천시 화북면 자천리  1487-2  1동 102호</Col><Col id=\"AR\">29.75</Col><Col id=\"ACQS_DE\">20060308</Col><Col id=\"NM\">지은화</Col><Col id=\"IHIDNUM\">800205-2222222</Col></Row><Row><Col id=\"PRPOS\">다세대주택</Col><Col id=\"ADRES\">화성광역시 달서구 본동  1069-5 광진 1동     ,</Col><Col id=\"AR\">65.83</Col><Col id=\"TRNSFR_DE\">20000809</Col><Col id=\"NM\">이상진</Col><Col id=\"IHIDNUM\">740902-2222222</Col></Row><Row><Col id=\"PRPOS\">연립주택</Col><Col id=\"ADRES\">충청북도 음성군 맹동면 쌍정리  114-5  1동 407호</Col><Col id=\"AR\">30.5</Col><Col id=\"ACQS_DE\">20100330</Col><Col id=\"NM\">이승헌</Col><Col id=\"IHIDNUM\">990315-1111111</Col></Row><Row><Col id=\"PRPOS\">기타</Col><Col id=\"ADRES\">경상북도 경북구미시 형곡동 대지 256-3</Col><Col id=\"AR\">66.975</Col><Col id=\"TRNSFR_DE\">19950525</Col><Col id=\"NM\">권봉연</Col><Col id=\"IHIDNUM\">480117-2222222</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"0",this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("1");_a.set_text("소유물건 일괄 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","1022","9","20","20",null,null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","53","205","21",null,null,this);_a.set_taborder("5");_a.set_text("소유물건 일괄 등록");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","581","56","71","18",null,null,this);_a.set_taborder("6");_a.set_text("조회일자");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_inqireDeUpdate","absolute","754","51","134","26",null,null,this);_a.set_taborder("9");_a.set_text("조회일자 일괄 수정");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute","890","51","50","25",null,null,this);_a.set_taborder("11");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_cancel","absolute","942","51","50","25",null,null,this);_a.set_taborder("12");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","81",null,null,"15","0",this);_a.set_taborder("14");this.addChild(_a.name,_a);_a=new Grid("grd_tbrnt_lfsts_cntrct01","absolute","0","26","1029",null,null,"15",this.div_WORK);_a.set_taborder("0");_a.set_binddataset("ds_posesn_thing");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"순번\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"조회일자\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"소유자\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"주민번호\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"관계\"/><Cell col=\"5\" style=\"font:9 돋움;\" text=\"면적\"/><Cell col=\"6\" style=\"font:9 돋움;\" text=\"취득일자\"/><Cell col=\"7\" style=\"font:9 돋움;\" text=\"용도\"/><Cell col=\"8\" style=\"font:9 돋움;\" text=\"양도일자\"/><Cell col=\"9\" style=\"font:9 돋움;\" text=\"주소\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:INQIRE_DE\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:NM\"/><Cell col=\"3\" text=\"bind:IHIDNUM\" mask=\"######-#{######}\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:FAMILY_RELATE\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:AR\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:ACQS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:PRPOS\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:TRNSFR_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:ADRES\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_excel","absolute","0.78%","341",null,null,"0.58%","143",this.div_WORK);_a.set_taborder("1");_a.set_autofittype("col");_a.set_binddataset("ds_ex");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"순번\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"소유자\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"주민번호\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"면적\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"취득일자\"/><Cell col=\"5\" style=\"font:9 돋움;\" text=\"용도\"/><Cell col=\"6\" style=\"font:9 돋움;\" text=\"양도일자\"/><Cell col=\"7\" style=\"font:9 돋움;\" text=\"주소\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:NM\"/><Cell col=\"2\" text=\"bind:IHIDNUM\" mask=\"######-#{######}\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:AR\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:ACQS_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:PRPOS\" combodataset=\"ds_prpos\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:TRNSFR_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:ADRES\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_close00","absolute","994","51","50","25",null,null,this);_a.set_taborder("15");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_excelUpload","absolute",null,"51","25","26","843",null,this);_a.set_taborder("16");_a.set_cssclass("btn_WF_Gridexcelup");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Button("btn_excelDown","absolute",null,"51","25","26","816",null,this);_a.set_taborder("17");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Calendar("cal_dcsn_de02","absolute","644","51","102","26",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("18");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Button("Button12","absolute","78.47%","81",null,"21","11.61%",null,this);_a.set_taborder("19");_a.set_text("파일읽기");this.addChild(_a.name,_a);_a=new Button("Button00","absolute","88.67%","81",null,"21","1.42%",null,this);_a.set_taborder("20");_a.set_text("양식받기");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","-0.09%","102",null,"5","0.94%",null,this);_a.set_taborder("21");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("14");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT030307_P02");_b.set_titletext("소유물건 일괄 등록 팝업");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("RNT030307_P02.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT030307_P02.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT030307_P02.xfdl",function(){this.RNT030307_P02_oninit=function(_a,_b){this.fn_init();};this.RNT030307_P02_onload=function(_a,_b){var _c=this.gfn_today();this.cal_dcsn_de02.set_value(_c);};this.btn_inqireDeUpdate_onclick=function(_a,_b){if(this.cal_inqireDe.value==null){this.alert("조회일자가 선택되지 않았습니다.");return;}var _c=this.ds_rentPosesnThingList.rowcount;for(var _d=0;_d<_c;_d++ ){this.ds_posesn_thing.setColumn(_d,"INQIRE_DE",this.cal_inqireDe.value);}};this.btn_save_onclick=function(_a,_b){if(this.gfn_checkValidation(this.ds_rentPosesnThingList,this.ds_validation)==false){return;}if(this.ds_posesn_thing.isUpdated()==true){if(this.confirm("저장 하시겠습니까?")){this.fn_transaction("rentPosesnThingC");}}};this.btn_cancel_onclick=function(_a,_b){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_posesn_thing.cancel();}};this.btn_delete_onclick=function(_a,_b){this.ds_rentPosesnThingList.deleteSelectRow();};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_excelDown_onclick=function(_a,_b){this.gfn_exportExcel(this.div_WORK.grd_excel,"download");};this.btn_excelUpload_onclick=function(_a,_b){this.ds_posesn_thing.clearData();this.ds_excel.clearData();var _c=function(){var _e=this.ds_excel.rowcount;for(var _g=0;_g<=_e;_g++ ){if(1>(parseInt(this.ds_excel.getColumn(_g,'Column0'))||0)){continue;}var _f=this.ds_posesn_thing.addRow();this.ds_posesn_thing.setColumn(_f,"INQIRE_DE",this.cal_dcsn_de02.value);this.ds_posesn_thing.copyRow(_f,this.ds_excel,_g,'NM=Column1,'+'IHIDNUM=Column2,'+'AR=Column3,'+'ACQS_DE=Column4,'+'PRPOS=Column5,'+'TRNSFR_DE=Column6,'+'ADRES=Column7,');}};var _d={targetDs:this.ds_excel,headSet:false,callBack:_c};this.gfn_importExcel(_d);};this.fn_transaction=function(_a){var _b=true;switch(_a){case "rentPosesnThingC":var _c="/hsco/pms/rnt/rnt030307/listCUD.do";var _d="input3=ds_posesn_thing:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "rentPosesnThingC":if(this.gfn_message("success.처리.성공")){}this.fn_search();break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};});this.on_initEvent=function(){this.ds_excel.addEventHandler("onrowposchanged",this.DS_TBRNT_APPLCNT_onrowposchanged,this);this.addEventHandler("oninit",this.RNT030307_P02_oninit,this);this.addEventHandler("onload",this.RNT030307_P02_onload,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_inqireDeUpdate.addEventHandler("onclick",this.btn_inqireDeUpdate_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_excelUpload.addEventHandler("onclick",this.btn_excelUpload_onclick,this);this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);this.Button12.addEventHandler("onclick",this.btn_excelUpload_onclick,this);this.Button00.addEventHandler("onclick",this.btn_excelDown_onclick,this);};this.loadIncludeScript("RNT030307_P02.xfdl");};})();