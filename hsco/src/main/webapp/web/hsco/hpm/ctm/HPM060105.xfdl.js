﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM060105");this.set_classname("HPM060105");this.set_titletext("경기타운대관관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">조회년도</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">FCLTS_SN</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">시설명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_hscRentManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"MANAGE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_NMPR\" type=\"INT\" size=\"256\"/><Column id=\"APPLCNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTY_RNTFEE\" type=\"INT\" size=\"256\"/><Column id=\"PBLDUS\" type=\"INT\" size=\"256\"/><Column id=\"CMRC_RNTFEE\" type=\"INT\" size=\"256\"/><Column id=\"RLAY_BRDCST_CHRGE\" type=\"INT\" size=\"256\"/><Column id=\"ATACH_RNTFEE\" type=\"INT\" size=\"256\"/><Column id=\"ADTM_TCKET_FEE\" type=\"INT\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"SUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentFcltsManageList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"FCLTS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FCLTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MUMM_RESVE_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe01","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("조회년도");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","303","0","15",null,null,"0",this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe00","absolute","317","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("시설명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_fcltsCn","absolute","372","5","298","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("@ds_rentFcltsManageList");_a.set_codecolumn("FCLTS_SN");_a.set_datacolumn("FCLTS_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static02","absolute","670","0","15",null,null,"0",this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe02","absolute","685","5","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("금액구분");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_amSe","absolute","751","5","63","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_amSe_innerdataset",this.div_search.cmb_amSe);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">유료</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">무료</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("8");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_visible("true");_a=new Calendar("cal_bgnDe","absolute","83","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("9");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("cal_endDe","absolute","201","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("10");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static03","absolute","186","9","10","16",null,null,this.div_search);_a.set_taborder("11");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","43",null,"19","28",null,this);_a.set_taborder("22");_a.set_text("경기타운대관관리 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,"5","28",null,this);_a.set_taborder("23");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,null,"13","735","0","0",this);_a.set_taborder("25");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_instrctrManageList","absolute","0","67",null,null,"28","0",this);_a.set_taborder("1");_a.set_binddataset("ds_hscRentManageList");_a.set_cellsizingtype("col");_a.set_autofittype("none");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"시설명\"/><Cell col=\"2\" text=\"사용일자\"/><Cell col=\"3\" text=\"시작시각\"/><Cell col=\"4\" text=\"종료시각\"/><Cell col=\"5\" text=\"사용인원\"/><Cell col=\"6\" text=\"신청자(주관)\"/><Cell col=\"7\" text=\"사용목적\"/><Cell col=\"8\" text=\"시설사용료\"/><Cell col=\"9\" text=\"공과금\"/><Cell col=\"10\" text=\"상업사용료\"/><Cell col=\"11\" text=\"중계방송료\"/><Cell col=\"12\" text=\"부속사용료\"/><Cell col=\"13\" text=\"관람권수수료\"/><Cell col=\"14\" text=\"합계\"/><Cell col=\"15\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:FCLTS_SN\" combodataset=\"ds_rentFcltsManageList\" combocodecol=\"FCLTS_SN\" combodatacol=\"FCLTS_NM\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:USE_DE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"mask\" style=\"align:center;\" text=\"bind:USE_BEGIN_TM\" mask=\"##:##\" maskchar=\" \" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"mask\" style=\"align:center;\" text=\"bind:USE_END_TM\" mask=\"##:##\" maskchar=\" \" editdisplay=\"display\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:USE_NMPR\" mask=\"#,###\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"6\" edittype=\"normal\" style=\"align:left;\" text=\"bind:APPLCNT\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"ascii\"/><Cell col=\"7\" edittype=\"normal\" style=\"align:left;\" text=\"bind:USE_PURPS\" editlimit=\"500\" editdisplay=\"display\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:FCLTY_RNTFEE\" mask=\"!##,###,##9\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:PBLDUS\" mask=\"!##,###,##9\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:CMRC_RNTFEE\" mask=\"!##,###,##9\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:RLAY_BRDCST_CHRGE\" mask=\"!##,###,##9\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:ATACH_RNTFEE\" mask=\"!##,###,##9\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:ADTM_TCKET_FEE\" mask=\"!##,###,##9\" maskchar=\" \" editdisplay=\"display\" editlimitbymask=\"both\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SUM\" maskchar=\" \" editlimitbymask=\"both\"/><Cell col=\"15\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RM\" editlimit=\"500\" editdisplay=\"display\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("HPM060105");_c.set_titletext("경기타운대관관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.cmb_rentFcltsSe_s","value","ds_cond","SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_SEARCH.cmb_pchrgAt_s","value","ds_cond","CL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_SEARCH.edt_fcltyNm_s","value","ds_cond","FCLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cmb_fcltsCn","value","ds_cond","FCLTS_SN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.cmb_amSe","value","ds_cond","AM_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.cal_bgnDe","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_search.cal_endDe","value","ds_cond","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HPM060105.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM060105.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM060105.xfdl",function(){this.saveRow= -1;this.HPM060105_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HPM060105_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.getLastDay(this.dateUtils.today()).getDate();var _b=this.dateUtils.format(this.dateUtils.today(),"yyyymm")+_a;this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"DEPT_CODE","040100");this.ds_cond.setColumn(0,"BGNDE",this.dateUtils.format(this.gfn_today(),"yyyymm")+'0101');this.ds_cond.setColumn(0,"ENDDE",_b);this.ds_cond.setColumn(0,"AM_SE","");this.fn_transaction("selectRentFcltsManageList");};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_hscRentManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_hscRentManageList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectHscRentManageList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_hscRentManageList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_hscRentManageList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_hscRentManageList.rowposition;this.fn_transaction("saveHscRentManageList");}};this.fn_insert=function(){var _a=this.ds_cond.getColumn(0,"FCLTS_SN");var _b=this.ds_hscRentManageList.addRow();this.ds_hscRentManageList.setColumn(_b,"FCLTS_SN",_a);this.ds_hscRentManageList.setColumn(_b,"USE_DE",this.dateUtils.format(this.gfn_today(),"yyyymmdd"));};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){if(this.ds_hscRentManageList.getRowCount()>0){var _a=this.ds_hscRentManageList.rowposition;this.ds_hscRentManageList.deleteRow(_a);}}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_hscRentManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_hscRentManageList.reset();this.ds_hscRentManageList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectRentFcltsManageList":var _b="hsco/hpm/ctm/HPM060101/selectRentFcltsManageList.do";var _c="input1=ds_cond";var _d="ds_rentFcltsManageList=output1";break;case "selectHscRentManageList":var _b="hsco/hpm/ctm/HPM060105/selectHscRentManageList.do";var _c="input1=ds_cond";var _d="ds_hscRentManageList=output1";break;case "saveHscRentManageList":var _b="hsco/hpm/ctm/HPM060105/saveHscRentManageList.do";var _c="input1=ds_hscRentManageList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectRentFcltsManageList":var _d=this.ds_rentFcltsManageList.getColumn(0,"FCLTS_SN");this.ds_cond.setColumn(0,"FCLTS_SN",_d);this.fn_search();break;case "selectHscRentManageList":if(this.saveRow!= -1){this.ds_hscRentManageList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "saveHscRentManageList":this.fn_search();break;}}};this.ds_hscRentManageList_oncolumnchanged=function(_a,_b){if(_b.columnid=="USE_BEGIN_TM"||_b.columnid=="USE_END_TM"){var _c=_b.newvalue.replace(/\s/g,'0');var _d=nexacro.toNumber(_c.substr(0,2));var _e=nexacro.toNumber(_c.substr(2,2));if(_d>23||_e>59){alert("시각을 다시 확인해주세요.");_a.setColumn(_b.row,_b.columnid,_b.oldvalue);}else{_a.setColumn(_b.row,_b.columnid,_c);}}if(_b.columnid=="FCLTY_RNTFEE"||_b.columnid=="PBLDUS"||_b.columnid=="CMRC_RNTFEE"||_b.columnid=="RLAY_BRDCST_CHRGE"||_b.columnid=="ATACH_RNTFEE"||_b.columnid=="ADTM_TCKET_FEE"){var _f=!this.comUtils.isNull(_a.getColumn(_b.row,"FCLTY_RNTFEE"))?_a.getColumn(_b.row,"FCLTY_RNTFEE"):0;var _g=!this.comUtils.isNull(_a.getColumn(_b.row,"PBLDUS"))?_a.getColumn(_b.row,"PBLDUS"):0;var _h=!this.comUtils.isNull(_a.getColumn(_b.row,"CMRC_RNTFEE"))?_a.getColumn(_b.row,"CMRC_RNTFEE"):0;var _i=!this.comUtils.isNull(_a.getColumn(_b.row,"RLAY_BRDCST_CHRGE"))?_a.getColumn(_b.row,"RLAY_BRDCST_CHRGE"):0;var _j=!this.comUtils.isNull(_a.getColumn(_b.row,"ATACH_RNTFEE"))?_a.getColumn(_b.row,"ATACH_RNTFEE"):0;var _k=!this.comUtils.isNull(_a.getColumn(_b.row,"ADTM_TCKET_FEE"))?_a.getColumn(_b.row,"ADTM_TCKET_FEE"):0;var _l=0;_l=nexacro.toNumber(_f)+nexacro.toNumber(_g)+nexacro.toNumber(_h)+nexacro.toNumber(_i)+nexacro.toNumber(_j)+nexacro.toNumber(_k);_a.setColumn(_b.row,"SUM",_l);}};});this.on_initEvent=function(){this.ds_hscRentManageList.addEventHandler("oncolumnchanged",this.ds_hscRentManageList_oncolumnchanged,this);this.ds_rentFcltsManageList.addEventHandler("onrowposchanged",this.ds_rentFcltsManageList_onrowposchanged,this);this.ds_rentFcltsManageList.addEventHandler("oncolumnchanged",this.ds_rentFcltsManageList_oncolumnchanged,this);this.addEventHandler("oninit",this.HPM060105_oninit,this);this.addEventHandler("onload",this.HPM060105_onload,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);this.grd_instrctrManageList.addEventHandler("oncelldblclick",this.div_instrctrList_oncelldblclick,this);};this.loadIncludeScript("HPM060105.xfdl");};})();