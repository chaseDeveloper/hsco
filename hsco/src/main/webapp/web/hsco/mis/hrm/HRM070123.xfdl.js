﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070120");this.set_classname("HRM070120");this.set_titletext("시간외근무확인등록");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"OVTMWRK_YM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">OVTMWRK_DE</Col><Col id=\"msgId\">조회년월</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"OVTMWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ovtmworkDeList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"OVTMWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_OVTMWRK_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcognTm",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ovtmworkDtls",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"OVTMWRK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HR_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OVTMWRK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FLXWK_SE_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"RCOGN_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"RCOGN_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"RCOGN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"OVTIME_WORK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESTDE_WORK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"NIGHT_WORK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DRCTR\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"HOLY_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SANC_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND2\" type=\"STRING\" size=\"256\"/><Column id=\"RQTM\" type=\"STRING\" size=\"256\"/><Column id=\"RCTM\" type=\"STRING\" size=\"256\"/><Column id=\"SOTM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_flxwkSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hour",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0","15","33",null,null,this.div_search);_a.set_taborder("26");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","161","-1","15","33",null,null,this.div_search);_a.set_taborder("32");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_DeptComp","absolute","215","5","194","21",null,null,this.div_search);_a.set_taborder("33");_a.set_async("false");_a.set_enable("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_empnm","absolute","178","6","35","19",null,null,this.div_search);_a.set_taborder("34");_a.set_text("부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_workYm","absolute","78","5","85","21",null,null,this.div_search);_a.set_taborder("35");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("sta_gnfdDe","absolute","15","5","64","19",null,null,this.div_search);_a.set_taborder("36");_a.set_text("조회년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_bsrpDtls","absolute","0","43","120","19",null,null,this);_a.set_taborder("2");_a.set_text("근무일자");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","62","1031","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_ovtmwrkYmList","absolute","0","67","127",null,null,"0",this);_a.set_taborder("6");_a.set_binddataset("ds_ovtmworkDeList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/></Band><Band id=\"body\"><Cell text=\"bind:SHOW_OVTMWRK_DE\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_bsrpDtls01","absolute","140","43","110","19",null,null,this);_a.set_taborder("10");_a.set_text("시간외근무내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Grid("grd_ovtmworkDtls","absolute","137","67",null,null,"28","0",this);_a.set_taborder("11");_a.set_binddataset("ds_ovtmworkDtls");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"106\"/><Column size=\"297\"/><Column size=\"111\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"근무일자\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"expr:comp.parent.allChk\"/><Cell col=\"2\" colspan=\"2\" text=\"결재상태\"/><Cell col=\"4\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"5\" rowspan=\"2\" text=\"직급\"/><Cell col=\"6\" rowspan=\"2\" text=\"사원명\"/><Cell col=\"7\" rowspan=\"2\" text=\"근무기준일자\"/><Cell col=\"8\" colspan=\"2\" text=\"초과근무신청시간\"/><Cell col=\"10\" rowspan=\"2\" text=\"초과근무&#13;&#10;계획시간\"/><Cell col=\"11\" colspan=\"2\" text=\"근태기\"/><Cell col=\"13\" colspan=\"2\" text=\"인정시간\"/><Cell col=\"15\" rowspan=\"2\" text=\"인정시간 \"/><Cell col=\"16\" rowspan=\"2\" text=\"시간외&#13;&#10;근무시간\"/><Cell col=\"17\" rowspan=\"2\" text=\"휴일&#13;&#10;근무시간\"/><Cell col=\"18\" rowspan=\"2\" text=\"야간&#13;&#10;근무시간\"/><Cell col=\"19\" rowspan=\"2\" text=\"근무지시자\"/><Cell col=\"20\" rowspan=\"2\" text=\"용무\"/><Cell col=\"21\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"2\" text=\"계획\"/><Cell row=\"1\" col=\"3\" text=\"확인\"/><Cell row=\"1\" col=\"8\" text=\"시작시간\"/><Cell row=\"1\" col=\"9\" text=\"종료시간\"/><Cell row=\"1\" col=\"11\" text=\"시작시간\"/><Cell row=\"1\" col=\"12\" text=\"종료시간\"/><Cell row=\"1\" col=\"13\" text=\"시작시간\"/><Cell row=\"1\" col=\"14\" text=\"종료시간\"/></Band><Band id=\"body\"><Cell text=\"bind:OVTMWRK_DE\" mask=\"####-##-##\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"expr:SANCTN_KND == '5' &amp;&amp; ['0','2','3'].indexOf(SANCTN_KND2) &gt; -1 ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:SANC_CHK\"/><Cell col=\"2\" displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND)\"/><Cell col=\"3\" displaytype=\"image\" text=\"expr:comp.parent.fn_get_imgUrl(SANCTN_KND2)\"/><Cell col=\"4\" style=\"align: ;\" text=\"bind:DEPT_NM\" suppress=\"1\"/><Cell col=\"5\" text=\"bind:HR_CLSF_NM\" suppress=\"1\"/><Cell col=\"6\" text=\"bind:EMPNM\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:FLXWK_SE_DAY\" combodataset=\"ds_flxwkSe\" combocodecol=\"CODE\" combodatacol=\"ETC3\" combodisplay=\"edit\"/><Cell col=\"8\" text=\"bind:REQST_BEGIN_TM\" mask=\"expr:REQST_BEGIN_TM == null ? '' : '##:##'\"/><Cell col=\"9\" text=\"bind:REQST_END_TM\" mask=\"expr:REQST_BEGIN_TM == null ? '' : '##:##'\"/><Cell col=\"10\" text=\"bind:REQST_TIME\" mask=\"expr:REQST_TIME == null ? '' : '##:##'\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:WORK_BEGIN_TM\" mask=\"expr:WORK_BEGIN_TM == null ? '' : '##:##'\"/><Cell col=\"12\" edittype=\"none\" text=\"bind:WORK_END_TM\" mask=\"expr:WORK_END_TM == null ? '' : '##:##'\"/><Cell col=\"13\" edittype=\"none\" style=\"background2: ;\" text=\"bind:RCOGN_BEGIN_TM\" mask=\"expr:RCOGN_BEGIN_TM == null ? '' : '##:##'\"/><Cell col=\"14\" edittype=\"none\" style=\"background2: ;\" text=\"bind:RCOGN_END_TM\" mask=\"expr:RCOGN_END_TM == null ? '' : '##:##'\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" editfilter=\"digit\" style=\"background: ;\" text=\"bind:RCOGN_TIME\" mask=\"##:##\" editimemode=\"alpha\" editdisplay=\"edit\"/><Cell col=\"16\" displaytype=\"combo\" edittype=\"none\" style=\"background: ;\" text=\"bind:OVTIME_WORK_TIME\" expr=\"expr:OVTIME_WORK_TIME*1\" combodataset=\"ds_hour\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"edit\"/><Cell col=\"17\" displaytype=\"combo\" edittype=\"none\" style=\"background: ;\" text=\"bind:RESTDE_WORK_TIME\" expr=\"expr:RESTDE_WORK_TIME*1\" combodataset=\"ds_hour\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"edit\"/><Cell col=\"18\" displaytype=\"combo\" edittype=\"none\" style=\"background: ;\" text=\"bind:NIGHT_WORK_TIME\" expr=\"NIGHT_WORK_TIME*1\" combodataset=\"ds_hour\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodisplay=\"edit\"/><Cell col=\"19\" text=\"bind:WORK_DRCTR\"/><Cell col=\"20\" style=\"align:left;\" text=\"bind:WORK_PURPS\"/><Cell col=\"21\" style=\"align:left;\" text=\"bind:RM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","250","43","500","19",null,null,this);_a.set_taborder("12");_a.set_text("(시간외근무확인등록은 시간외근무확인등록(월별)화면에서 진행해 주십시오.)");_a.style.set_color("blue");_a.style.set_padding("0 0 0 0");_a.style.set_align("left middle");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM070120");_b.set_titletext("시간외근무확인등록");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("HRM070123.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070123.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070123.xfdl",function(){this.saveRow= -1;this.saveRow2= -1;this.allChk='0';this.HRM070123_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM070123_onload=function(_a,_b){this.fn_loadCombo();this.div_search.div_workYm.fn_setBind("ds_cond","OVTMWRK_YM");this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"OVTMWRK_YM",this.dateUtils.format(this.gfn_today(),"yyyymm"));this.ds_cond.setColumn(0,"DEPT_CODE",this.gfn_getDeptId());this.ds_cond.setColumn(0,"DEPT_NM",this.gfn_getDeptName());if(this.gfn_authGrpId("SAL_ADMIN")!= -1||this.gfn_authGrpId("HRM_ADMIN")!= -1||this.gfn_authGrpId("CTR_ADMIN")!= -1||this.gfn_authGrpId("HRM_NOMU")!= -1||this.gfn_authGrpId("HRM_SRVIC")!= -1){this.div_search.div_DeptComp.set_enable(true);}this.fn_search();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);var _a=[["ds_flxwkSe","HRM018","1",""]];var _b=function(_c,_d,_e){this.ds_flxwkSe.insertRow(0);this.ds_flxwkSe.setColumn(0,"CODE",99);this.ds_flxwkSe.setColumn(0,"ETC3","09:00~18:00");this.grd_ovtmworkDtls.setFormatColProperty(1,"size",0);this.ds_hour.clearData();var _f=0;for(var _g=0;_g<25;_g++ ){_f=this.ds_hour.addRow();this.ds_hour.setColumn(_f,"CODE",_g);this.ds_hour.setColumn(_f,"CODE_NM",_g+"시간");}};this.gfn_comboLoad(_a,_b);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.allChk='0';this.fn_transaction("selectOvtmworkYmList");};this.fn_save=function(){if(!this.fn_timeValidCheck(this.ds_ovtmworkDeList)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_ovtmworkDeList.rowposition;this.saveRow2=this.ds_ovtmworkDtls.rowposition;this.ds_ovtmworkDeList.set_enableevent(false);this.fn_transaction("saveOvtmworkYmList");}};this.fn_transaction=function(_a){switch(_a){case "selectOvtmworkYmList":var _b="hsco/mis/hrm/HRM070123/selectOvtmworkYmList.do";var _c="input1=ds_cond";var _d="ds_ovtmworkDeList=output1";break;case "selectOvtmworkDtls":var _b="hsco/mis/hrm/HRM070123/selectOvtmworkDtls.do";var _c="input1=ds_cond2";var _d="ds_ovtmworkDtls=output1";break;case "saveOvtmworkYmList":var _b="hsco/mis/hrm/HRM070123/ovtmworkDtlsU.do";var _c="input1=ds_ovtmworkDtls:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectOvtmworkYmList":if(saveRow> -1){this.ds_ovtmworkDeList.set_enableevent(true);this.ds_ovtmworkDeList.rowposition(saveRow);saveRow= -1;}break;case "selectOvtmworkDtls":if(saveRow2> -1){this.ds_ovtmworkDtls.rowposition(saveRow2);saveRow2= -1;}break;case "saveOvtmworkYmList":this.fn_search();break;}}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_ovtmworkDtls)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_ovtmworkDtls.reset();this.ds_ovtmworkDtls.applyChange();};this.ds_ovtmworkDeList_onrowposchanged=function(_a,_b){this.allChk='0';this.ds_cond2.clearData();this.ds_cond2.addRow();var _c=this.ds_ovtmworkDeList.rowposition;this.ds_cond2.setColumn(0,"OVTMWRK_DE",this.ds_ovtmworkDeList.getColumn(_c,"OVTMWRK_DE"));this.ds_cond2.setColumn(0,"DEPT_CODE",this.ds_cond.getColumn(0,"DEPT_CODE"));this.fn_transaction("selectOvtmworkDtls");};this.fn_timeValidCheck=function(_a){var _b=true;var _c;var _d;var _e=0;for(var _f=0;_f<this.ds_ovtmworkDtls.getColCount();_f++ ){if(this.ds_ovtmworkDtls.getRowType(_f)=="4"){if((this.ds_ovtmworkDtls.getColumn(_f,"OVTIME_WORK_TIME")*1+this.ds_ovtmworkDtls.getColumn(_f,"RESTDE_WORK_TIME")*1+this.ds_ovtmworkDtls.getColumn(_f,"NIGHT_WORK_TIME")*1)!=((this.ds_ovtmworkDtls.getColumn(_f,"RCOGN_TIME")+"").substr(0,2)*1)){alert((_f+1)+"행의 시간외근무시간, 휴일근무시간, 야간근무시간의 합은 인정시간과 동일해야 합니다.");_b=false;}}}return _b;};this.fn_sanction=function(){if(this.comUtils.isDatasetUpdated(this.ds_ovtmworkDtls)){this.gfn_message("comm.정보.저장.요청","초과근무확인");return;}var _a=0;var _b=new Array(10);var _c=new Array(103);var _d=new Array();for(var _f=0;_f<this.ds_ovtmworkDtls.getRowCount();_f++ ){if(this.ds_ovtmworkDtls.getColumn(_f,"SANC_CHK")=='1'){var _e=new Array();if(this.ds_ovtmworkDtls.getColumn(_f,"OVTIME_WORK_TIME")>0){_e.push("시간외");}if(this.ds_ovtmworkDtls.getColumn(_f,"RESTDE_WORK_TIME")>0){_e.push("휴일");}if(this.ds_ovtmworkDtls.getColumn(_f,"NIGHT_WORK_TIME")>0){_e.push("야간");}_b=[this.fn_dateStr(this.ds_ovtmworkDtls.getColumn(_f,"OVTMWRK_DE"),"."),this.ds_ovtmworkDtls.getColumn(_f,"HR_CLSF_NM"),this.ds_ovtmworkDtls.getColumn(_f,"EMPNM"),_e.join(","),this.fn_time(this.ds_ovtmworkDtls.getColumn(_f,"REQST_BEGIN_TM"))+"~"+this.fn_time(this.ds_ovtmworkDtls.getColumn(_f,"REQST_END_TM")),this.ds_ovtmworkDtls.getColumn(_f,"WORK_PURPS"),this.ds_ovtmworkDtls.getColumn(_f,"RQTM"),this.ds_ovtmworkDtls.getColumn(_f,"RCTM"),this.ds_ovtmworkDtls.getColumn(_f,"SOTM"),this.ds_ovtmworkDtls.getColumn(_f,"TOTM")];if(_a<10){_c[3+_a*10]=_b[0];_c[4+_a*10]=_b[1];_c[5+_a*10]=_b[2];_c[6+_a*10]=_b[3];_c[7+_a*10]=_b[4];_c[8+_a*10]=_b[5];_c[9+_a*10]=_b[6];_c[10+_a*10]=_b[7];_c[11+_a*10]=_b[8];_c[12+_a*10]=_b[9];}else{_d.push(_b[0]);_d.push(_b[1]);_d.push(_b[2]);_d.push(_b[3]);_d.push(_b[4]);_d.push(_b[5]);_d.push(_b[6]);_d.push(_b[7]);_d.push(_b[8]);_d.push(_b[9]);}_a++ ;}}if(_a==0){this.gfn_message("info.처리불가","시간외근무 내역이 선택되지 않았습니다.");return;}_c[0]="초과근무 확인("+this.fn_dateStr(this.ds_ovtmworkDeList.getColumn(this.ds_ovtmworkDeList.rowposition,"SHOW_OVTMWRK_DE"),".")+")";_c[1]=this.ds_cond.getColumn(0,"DEPT_NM");_c[2]=_c[3];this.fn_callHandySanc2(this,'0000000048',this.ds_ovtmworkDtls,"TBHRM_OVTMWRK",["OVTMWRK_DE","SEQ"],_c,_d,"SANC_CHK","SANCTN_NO2");};this.fn_time=function(_a){if(typeof _a=='undefined'||String(_a).length!=4){return "";}return String(_a).substr(0,2)+":"+String(_a).substr(2,2);};this.fn_get_imgUrl=function(_a){return this.gfn_getSanctnImgUrl(_a);};this.grd_ovtmworkDtls_oncellclick=function(_a,_b){if(_b.col==1){var _c=this.ds_ovtmworkDtls.rowposition;if(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_KND")=='5'&&['0','2','3'].indexOf(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_KND2"))> -1){var _d=this.ds_ovtmworkDtls.getColumn(_c,"SANC_CHK");_d=_d=='1'?'0':'1';this.ds_ovtmworkDtls.set_updatecontrol(false);this.ds_ovtmworkDtls.set_enableevent(false);this.ds_ovtmworkDtls.setColumn(_c,"SANC_CHK",_d);this.ds_ovtmworkDtls.set_enableevent(true);this.ds_ovtmworkDtls.set_updatecontrol(true);}}};this.grd_ovtmworkDtls_onheadclick=function(_a,_b){if(_b.cell==1){this.ds_ovtmworkDtls.set_updatecontrol(false);this.ds_ovtmworkDtls.set_enableevent(false);this.allChk=this.allChk=='1'?'0':'1';for(var _c=0;_c<this.ds_ovtmworkDtls.getRowCount();_c++ ){if(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_KND")=='5'&&['0','2','3'].indexOf(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_KND2"))> -1){this.ds_ovtmworkDtls.setColumn(_c,"SANC_CHK",this.allChk);}}this.ds_ovtmworkDtls.set_enableevent(true);this.ds_ovtmworkDtls.set_updatecontrol(true);}};this.grd_ovtmworkDtls_oncelldblclick=function(_a,_b){var _c=this.ds_ovtmworkDtls.rowposition;switch(_b.col){case 2:if(['1','2','3','4','5'].indexOf(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_KND"))> -1){this.fn_openSanc(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_NO"));}break;case 3:if(['1','2','3','4','5'].indexOf(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_KND2"))> -1){this.fn_openSanc(this.ds_ovtmworkDtls.getColumn(_c,"SANCTN_NO2"));}break;default:break;}};});this.on_initEvent=function(){this.ds_ovtmworkDeList.addEventHandler("onrowposchanged",this.ds_ovtmworkDeList_onrowposchanged,this);this.addEventHandler("oninit",this.HRM070123_oninit,this);this.addEventHandler("onload",this.HRM070123_onload,this);this.grd_ovtmworkDtls.addEventHandler("oncellclick",this.grd_ovtmworkDtls_oncellclick,this);this.grd_ovtmworkDtls.addEventHandler("onheadclick",this.grd_ovtmworkDtls_onheadclick,this);this.grd_ovtmworkDtls.addEventHandler("oncelldblclick",this.grd_ovtmworkDtls_oncelldblclick,this);};this.loadIncludeScript("HRM070123.xfdl");this.loadPreloadList();};})();