﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN020301_P04");this.set_classname("FUN020301_P04");this.set_titletext("이자납부 결재 팝업");this._setFormPosition(0,0,850,280);}_a=new Dataset("ds_approve",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"1000\"/><Column id=\"DATA_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"O_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_temp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"C01\" type=\"STRING\" size=\"256\"/><Column id=\"C02\" type=\"STRING\" size=\"256\"/><Column id=\"C03\" type=\"STRING\" size=\"256\"/><Column id=\"C04\" type=\"STRING\" size=\"256\"/><Column id=\"C05\" type=\"FLOAT\" size=\"256\"/><Column id=\"C06A\" type=\"STRING\" size=\"256\"/><Column id=\"C06B\" type=\"STRING\" size=\"256\"/><Column id=\"C07\" type=\"STRING\" size=\"256\"/><Column id=\"C08\" type=\"STRING\" size=\"256\"/><Column id=\"C09\" type=\"STRING\" size=\"256\"/><Column id=\"C10A\" type=\"STRING\" size=\"256\"/><Column id=\"C10B\" type=\"STRING\" size=\"256\"/><Column id=\"C11\" type=\"STRING\" size=\"256\"/><Column id=\"C12\" type=\"STRING\" size=\"256\"/><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CNRL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUT_BSIS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_SJ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fnncInsttCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_temp</Col><Col id=\"colId\">C01</Col><Col id=\"PK\">[Undefined]</Col><Col id=\"notNull\">Y</Col><Col id=\"type\">[Undefined]</Col><Col id=\"nlength\">[Undefined]</Col><Col id=\"from\">[Undefined]</Col><Col id=\"to\">[Undefined]</Col><Col id=\"lengthChkGb\">[Undefined]</Col><Col id=\"msgId\">결재제목</Col><Col id=\"expr\">[Undefined]</Col><Col id=\"func\">[Undefined]</Col></Row><Row><Col id=\"colId\">C03</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">채권명</Col></Row><Row><Col id=\"colId\">C07</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">산출기초</Col></Row><Row><Col id=\"colId\">C09</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지출일자</Col></Row><Row><Col id=\"colId\">C10A</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지출처</Col></Row><Row><Col id=\"colId\">C10B</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부계좌</Col></Row><Row><Col id=\"colId\">C11</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"func\"/><Col id=\"msgId\">지출과목</Col></Row><Row><Col id=\"colId\">C12</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사업명</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","15",null,"252","15",null,this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","2","197","21",null,null,this.div_pop);_a.set_taborder("14");_a.set_text("이자납부 결재");_a.set_cssclass("sta_WF_Title01");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search00","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("15");_a.set_text("결재");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Close00","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("17");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","25","738","5",null,null,this.div_pop);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","74",null,null,"31","521","355",this.div_pop);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","0","70","197","21",null,null,this.div_pop);_a.set_taborder("81");_a.set_text("지출내역 정보");_a.set_cssclass("sta_WF_Title02");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label13","absolute","106","30","714","31",null,null,this.div_pop);_a.set_taborder("99");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Edit("edt_sbjt","absolute","110","35","706","21",null,null,this.div_pop);_a.set_taborder("100");_a.set_autoselect("true");_a.style.set_align("left middle");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("50");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_RM05","absolute","0","30","107","31",null,null,this.div_pop);_a.set_taborder("101");_a.set_text("결재제목");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","90",null,"99","0",null,this.div_pop);_a.set_taborder("104");_a.set_autofittype("none");_a.set_binddataset("ds_temp");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"채권명\"/><Cell col=\"1\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사업명\"/><Cell col=\"2\" colspan=\"4\" text=\"차입조건\"/><Cell col=\"6\" rowspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"산출기초\"/><Cell col=\"7\" rowspan=\"2\" text=\"이자금액\"/><Cell row=\"1\" col=\"2\" text=\"금액\"/><Cell row=\"1\" col=\"3\" text=\"이율\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"차입기간\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:C03\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:C12\" editlimit=\"20\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C04\" mask=\"999,99\"/><Cell col=\"3\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C05\" mask=\"999.99%\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:C06A\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:C06B\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:C07\" editlimit=\"20\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C08\" mask=\"!###,###,###,###,###\" editlimitbymask=\"integer\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","106","189","159","31",null,null,this.div_pop);_a.set_taborder("105");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","106","219","159","31",null,null,this.div_pop);_a.set_taborder("106");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label05","absolute","370","219","450","31",null,null,this.div_pop);_a.set_taborder("107");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label06","absolute","370","189","450","31",null,null,this.div_pop);_a.set_taborder("108");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO02","absolute","0","189","107","31",null,null,this.div_pop);_a.set_taborder("109");_a.set_text("지급일자");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_RM03","absolute","0","219","107","31",null,null,this.div_pop);_a.set_taborder("110");_a.set_text("지출처");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Calendar("cal_BRRW_DE01","absolute","109","194","152","21",null,null,this.div_pop);this.div_pop.addChild(_a.name,_a);_a.set_taborder("111");_a.set_autoselect("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("sta_RM01","absolute","264","189","107","31",null,null,this.div_pop);_a.set_taborder("113");_a.set_text("지출과목");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","373","224","443","21",null,null,this.div_pop);_a.set_taborder("115");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.div_pop.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","373","194","443","21",null,null,this.div_pop);_a.set_taborder("116");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("30");this.div_pop.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","109","224","152","21",null,null,this.div_pop);this.div_pop.addChild(_a.name,_a);_a.set_taborder("118");_a.set_displaynulltext("선택");_a.set_innerdataset("ds_fnncInsttCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Static("Static00","absolute","0","85","738","5",null,null,this.div_pop);_a.set_taborder("119");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","61","738","10",null,null,this.div_pop);_a.set_taborder("120");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_bdgPopup","absolute","798","193","21","21",null,null,this.div_pop);_a.set_taborder("121");_a.set_cssclass("btn_WF_Search");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO01","absolute","264","219","107","31",null,null,this.div_pop);_a.set_taborder("114");_a.set_text("납부계좌");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"49","15","214","0",null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_color("black");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"43","15","214","835",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_color("black");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","8","265","800","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_color("black");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","-16","0","800","15",null,null,this);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_color("black");this.addChild(_a.name,_a);_a=new Calendar("cal_trans","absolute","512","15","118","24",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("8");_a.set_dateformat("yyyy.MM.dd (ddd)");_a.set_visible("false");_a.set_value("null");_a=new Layout("default","",0,252,this.div_pop,function(_b){_b.set_taborder("0");_b.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",850,280,this,function(_b){_b.set_classname("FUN020301_P04");_b.set_titletext("이자납부 결재 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item4","div_pop.cal_BRRW_DE01","value","ds_temp","C09");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_pop.Edit01","value","ds_temp","C10B");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_pop.Edit02","value","ds_temp","C11");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_pop.Combo00","value","ds_temp","C10A");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_pop.edt_sbjt","value","ds_temp","C01");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN020301_P04.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN020301_P04.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN020301_P04.xfdl",function(){this.fv_objForm;this.FUN020301_P04_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN020301_P04_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_temp.copyData(this.parent.arg_1);var _c=this.ds_temp.getColumn(0,"C01");var _d=this.ds_temp.getColumn(0,"C03");this.ds_temp.setColumn(0,"C01",_c+" 이자납부 ("+_d+")");this.fnnc_instt_code();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fnnc_instt_code=function(){this.fn_transaction("selectFnncInsttCodeList");};this.fn_sanction=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_temp,this.ds_validation)){return false;}var _a=this.ds_fnncInsttCode.findRow("CODE",this.ds_temp.getColumn(0,"C10A"));var _b=new Array(12);_b[0]="금"+this.comUtils.formatComma(this.ds_temp.getColumn(0,"C02"))+"원"+"(금"+this.ds_temp.getColumn(0,"C13")+")";_b[1]=this.ds_temp.getColumn(0,"C03");_b[2]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C04"));_b[3]=this.ds_temp.getColumn(0,"C05")+"%";var _c=this.ds_temp.getColumn(0,"C06A").substr(2,2)+"."+this.ds_temp.getColumn(0,"C06A").substr(4,2);var _d=this.ds_temp.getColumn(0,"C06B").substr(2,2)+"."+this.ds_temp.getColumn(0,"C06B").substr(4,2);_b[4]=_c+"~"+_d;_b[5]=this.ds_temp.getColumn(0,"C07");_b[6]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C08"));var _e=this.ds_temp.getColumn(0,"C09");this.cal_trans.set_value(_e);_b[7]=this.cal_trans.text;_b[8]=this.ds_fnncInsttCode.getColumn(_a,"CODE_NM")+"("+this.ds_temp.getColumn(0,"C10B")+")";_b[9]=this.ds_temp.getColumn(0,"C11")+".  끝.";_b[10]=this.ds_temp.getColumn(0,"C12");var _f=_b.join("|");var _g=this.ds_temp.getColumn(0,"C01");var _h=this.ds_temp.getColumn(0,"C01");this.ds_approve.clearData();this.ds_approve.addRow();this.ds_approve.setColumn(0,"TITLE",_h);this.ds_approve.setColumn(0,"DATA_TITLE",_g);this.ds_approve.setColumn(0,"DATA_VALUE",_f);this.ds_approve.setColumn(0,"DEPT_CD",this.gfn_getDeptId());this.ds_approve.setColumn(0,"EMP_CD",this.fn_getEmpno());this.ds_approve.setColumn(0,"SE","2");this.ds_approve.setColumn(0,"PBNCD_NO",this.ds_temp.getColumn(0,"PBNCD_NO"));this.ds_approve.setColumn(0,"RPAY_DE",this.ds_temp.getColumn(0,"RPAY_DE"));this.fn_transaction("approve");};this.fn_transaction=function(_a){switch(_a){case "approve":var _b="hsco/mis/fun/FUN020301/approve.do";var _c="input1=ds_approve";var _d="ds_approve=output1";break;case "selectFnncInsttCodeList":var _b="hsco/mis/fun/FUN000000/selectFnncInsttCodeList.do";var _c="";var _d="ds_fnncInsttCode=output1";break;case "intrRpayPlanSanctnU":this.ds_temp.setColumn(0,"COMPUT_BSIS",this.ds_temp.getColumn(0,"C07"));this.ds_temp.setColumn(0,"PYMNT_DE",this.ds_temp.getColumn(0,"C09"));this.ds_temp.setColumn(0,"FNNC_INSTT_CODE",this.ds_temp.getColumn(0,"C10A"));this.ds_temp.setColumn(0,"ACNUTNO",this.ds_temp.getColumn(0,"C10B"));var _b="hsco/mis/fun/FUN020301/intrRpayPlanSanctnU.do";var _c="input1=ds_temp";var _d="";break;}switch(_a){case "selectFnncInsttCodeList":Ex.core.tran(this,_a,_b,_c,_d,"","",false,false);break;default:Ex.core.tran(this,_a,_b,_c,_d);break;}};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "approve":var _d=this.ds_approve.getColumn(0,"O_URL");system.execBrowser(_d);this.close();break;case "selectFnncInsttCodeList":break;case "intrRpayPlanSanctnU":this.fn_sanction();break;}}};this.btn_Close_onclick=function(_a,_b){this.close();};this.ds_temp_oncolumnchanged=function(_a,_b){if(_a.name=="C08"){var _c=this.ds_temp.getColumn(0,"C08");this.ds_temp.setColumn(0,"C02",_c);}};this.div_work_btn_bdgPopup_onclick=function(_a,_b){this.gfn_popup("btn_bdgPopup",600,500,"계정과목 선택",{acntPopup:false},"com::bdgAcntPop.xfdl","fn_popupCallBack",true);};this.fn_popupCallBack=function(_a,_b){var _c=/\([^]+\)/g;var _d=new Dataset();nRowCnt=_d.loadXML(_b);if(!nRowCnt){}else{if(_a=="btn_bdgPopup"){var _e=_d.getColumn(0,"YEAR");var _f=_d.getColumn(0,"BSNS_SE");var _g=_d.getColumn(0,"BALC_SE");var _h=_d.getColumn(0,"BUDGET_ACNT_CODE");var _i=_d.getColumn(0,"BUDGET_ACNT_NM");var _j=_d.getColumn(0,"EXPNDTR_UNIT_CODE");var _k=_d.getColumn(0,"EXPNDTR_UNIT_NM");var _l=_d.getColumn(0,"BUDGET_CNRL_AT");this.ds_temp.setColumn(0,"BUDGET_YEAR",_e);this.ds_temp.setColumn(0,"BSNS_SE",_f);this.ds_temp.setColumn(0,"BALC_SE",_g);this.ds_temp.setColumn(0,"BUDGET_ACNT_CODE",_h);this.ds_temp.setColumn(0,"EXPNDTR_UNIT_CODE",_j);this.ds_temp.setColumn(0,"BUDGET_CNRL_AT",_l);var _m=_d.getColumn(0,"GWAN_NM");var _n=_d.getColumn(0,"HANG_NM");var _o=_d.getColumn(0,"SEHANG_NM").replace(_c,"");var _p=_d.getColumn(0,"MOK_NM");var _q=_d.getColumn(0,"SEMOK_NM");var _r=_d.getColumn(0,"BUDGET_ACNT_CODE2");var _s=_d.getColumn(0,"EXPNDTR_UNIT_CODE2");if(_q){var _t=_m+','+_n+','+_o+','+_p+', '+_r+'-'+_s;}else{var _t=_m+','+_n+','+_o+', '+_r+'-'+_s;}this.ds_temp.setColumn(0,"C11",_t);}}};this.fn_intrRpayPlanSanctnU=function(_a,_b){this.fn_transaction("intrRpayPlanSanctnU");};});this.on_initEvent=function(){this.ds_temp.addEventHandler("oncolumnchanged",this.ds_temp_oncolumnchanged,this);this.addEventHandler("oninit",this.FUN020301_P04_oninit,this);this.addEventHandler("onload",this.FUN020301_P04_onload,this);this.div_pop.btn_Search00.addEventHandler("onclick",this.fn_intrRpayPlanSanctnU,this);this.div_pop.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_pop.edt_sbjt.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.btn_bdgPopup.addEventHandler("onclick",this.div_work_btn_bdgPopup_onclick,this);};this.loadIncludeScript("FUN020301_P04.xfdl");};})();