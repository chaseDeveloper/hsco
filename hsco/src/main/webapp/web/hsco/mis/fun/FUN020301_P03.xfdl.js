﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FUN020301_P03");this.set_classname("FUN020301_P03");this.set_titletext("원리금납부 결재 팝업");this._setFormPosition(0,0,1000,308);}_a=new Dataset("ds_temp",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"C01\" type=\"STRING\" size=\"256\"/><Column id=\"C02\" type=\"STRING\" size=\"256\"/><Column id=\"C03\" type=\"STRING\" size=\"256\"/><Column id=\"C04\" type=\"STRING\" size=\"256\"/><Column id=\"C05\" type=\"FLOAT\" size=\"256\"/><Column id=\"C06A\" type=\"STRING\" size=\"256\"/><Column id=\"C06B\" type=\"STRING\" size=\"256\"/><Column id=\"C07\" type=\"STRING\" size=\"256\"/><Column id=\"C08\" type=\"STRING\" size=\"256\"/><Column id=\"C09\" type=\"STRING\" size=\"256\"/><Column id=\"C10\" type=\"STRING\" size=\"256\"/><Column id=\"C11A\" type=\"STRING\" size=\"256\"/><Column id=\"C11B\" type=\"STRING\" size=\"256\"/><Column id=\"C12\" type=\"STRING\" size=\"256\"/><Column id=\"C13A\" type=\"STRING\" size=\"256\"/><Column id=\"C13B\" type=\"STRING\" size=\"256\"/><Column id=\"C14\" type=\"STRING\" size=\"256\"/><Column id=\"C15\" type=\"STRING\" size=\"256\"/><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CNRL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUT_BSIS\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"RPAY_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR1\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE1\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_fnncInsttCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colId\">C01</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결재제목</Col></Row><Row><Col id=\"colId\">C03</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">구분</Col></Row><Row><Col id=\"colId\">C07</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">상환잔액</Col></Row><Row><Col id=\"colId\">C08</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">상환원금</Col></Row><Row><Col id=\"colId\">C09</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">상환이자</Col></Row><Row><Col id=\"colId\">C11A</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">이자산출 시작일</Col></Row><Row><Col id=\"colId\">C11B</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">이자산출 종료일</Col></Row><Row><Col id=\"colId\">C12</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지출일자</Col></Row><Row><Col id=\"colId\">C13A</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지출처</Col></Row><Row><Col id=\"colId\">C13B</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부계좌</Col></Row><Row><Col id=\"colId\">C14</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지출과목(원금)</Col></Row><Row><Col id=\"colId\">C15</Col><Col id=\"compId\">ds_temp</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">지출과목(이자)</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_trans",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"KR_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_pop","absolute","15","15",null,null,"15","15",this);_a.set_taborder("0");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label02","absolute","106","186","130","31",null,null,this.div_pop);_a.set_taborder("65");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label03","absolute","341","186","183","31",null,null,this.div_pop);_a.set_taborder("66");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","2","197","21",null,null,this.div_pop);_a.set_taborder("14");_a.set_text("원리금납부 결재");_a.set_cssclass("sta_WF_Title01");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Search00","absolute",null,"0","50","25","53",null,this.div_pop);_a.set_taborder("15");_a.set_text("결재");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_Close00","absolute",null,"0","50","25","0",null,this.div_pop);_a.set_taborder("17");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.div_pop.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","25","970","5",null,null,this.div_pop);_a.set_taborder("18");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label01","absolute","74",null,null,"31","521","355",this.div_pop);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label05","absolute","628","186","342","31",null,null,this.div_pop);_a.set_taborder("67");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label06","absolute","106","216","864","31",null,null,this.div_pop);_a.set_taborder("68");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO02","absolute","0","186","107","31",null,null,this.div_pop);_a.set_taborder("73");_a.set_text("지출일자");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_RM03","absolute","235","186","107","31",null,null,this.div_pop);_a.set_taborder("74");_a.set_text("지출처");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Calendar("cal_BRRW_DE01","absolute","109","191","110","21",null,null,this.div_pop);this.div_pop.addChild(_a.name,_a);_a.set_taborder("76");_a.set_autoselect("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a.style.set_align("center middle");_a=new Static("sta_WFDA_Label07","absolute","107","246","863","31",null,null,this.div_pop);_a.set_taborder("79");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_title02","absolute","0","67","197","21",null,null,this.div_pop);_a.set_taborder("81");_a.set_text("지출내역 정보");_a.set_cssclass("sta_WF_Title02");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_RM01","absolute","0","216","107","31",null,null,this.div_pop);_a.set_taborder("72");_a.set_text("지출과목(원금)");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_ACNUTNO01","absolute","522","186","107","31",null,null,this.div_pop);_a.set_taborder("71");_a.set_text("납부계좌");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_WFDA_Label13","absolute","123","30","847","31",null,null,this.div_pop);_a.set_taborder("99");_a.set_cssclass("sta_WF_Labelbg");this.div_pop.addChild(_a.name,_a);_a=new Edit("edt_sbjt","absolute","127","35","839","21",null,null,this.div_pop);_a.set_taborder("100");_a.set_autoselect("true");_a.style.set_align("left middle");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("50");this.div_pop.addChild(_a.name,_a);_a=new Static("sta_RM05","absolute","0","30","124","31",null,null,this.div_pop);_a.set_taborder("101");_a.set_text("결재제목");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","87","970","99",null,null,this.div_pop);_a.set_taborder("104");_a.set_binddataset("ds_temp");_a.set_cellsizingtype("col");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"110\"/><Column size=\"65\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" colspan=\"4\" text=\"차입조건\"/><Cell col=\"5\" rowspan=\"2\" text=\"상환잔액\"/><Cell col=\"6\" colspan=\"5\" text=\"금회상환내역\"/><Cell row=\"1\" col=\"1\" text=\"금액\"/><Cell row=\"1\" col=\"2\" text=\"이율\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"차입기간\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"이자산출기간\"/><Cell row=\"1\" col=\"8\" text=\"상환원금\"/><Cell row=\"1\" col=\"9\" text=\"상환이자\"/><Cell row=\"1\" col=\"10\" text=\"상환원리금\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:C03\" editdisplay=\"display\" autosizerow=\"limitmin\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C04\" mask=\"999,99\"/><Cell col=\"2\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C05\" mask=\"999.99%\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:C06A\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:C06B\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C07\" mask=\"!###,###,###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:C11A\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" text=\"bind:C11B\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C08\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C09\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 5 0 0;\" text=\"bind:C10\"/></Band></Format></Formats>");this.div_pop.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","631","191","336","21",null,null,this.div_pop);_a.set_taborder("106");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("30");_a.set_readonly("true");this.div_pop.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","109","221","858","21",null,null,this.div_pop);_a.set_taborder("107");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("50");_a.set_readonly("true");this.div_pop.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","109","251","858","21",null,null,this.div_pop);_a.set_taborder("108");_a.set_cssclass("edt_WF_Essential");_a.set_lengthunit("utf8");_a.set_maxlength("50");_a.set_readonly("true");this.div_pop.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","344","191","176","21",null,null,this.div_pop);this.div_pop.addChild(_a.name,_a);_a.set_taborder("109");_a.set_innerdataset("@ds_fnncInsttCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_displaynulltext("선택");_a.set_cssclass("cmb_WF_Essential");_a.set_readonly("true");_a=new Static("sta_RM04","absolute","0","246","107","31",null,null,this.div_pop);_a.set_taborder("78");_a.set_text("지출과목(이자)");_a.set_cssclass("sta_WF_Label");_a.style.set_padding("0 0 0 10");_a.style.set_align("left middle");this.div_pop.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","61","970","10",null,null,this.div_pop);_a.set_taborder("110");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","82","970","5",null,null,this.div_pop);_a.set_taborder("111");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_bdgPopup1","absolute","946","221","21","21",null,null,this.div_pop);_a.set_taborder("112");_a.set_cssclass("btn_WF_Search");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_bdgPopup2","absolute","946","251","21","21",null,null,this.div_pop);_a.set_taborder("113");_a.set_cssclass("btn_WF_Search");this.div_pop.addChild(_a.name,_a);_a=new Button("btn_branchAcnut","absolute","946","191","21","21",null,null,this.div_pop);_a.set_taborder("114");_a.set_cssclass("btn_WF_Search");this.div_pop.addChild(_a.name,_a);_a=new Static("Static00","absolute","985","49","15","257",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.style.set_background("aqua");_a.style.set_color("black");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","49","15","257",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.style.set_background("aqua");_a.style.set_color("black");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","56",null,"800","15",null,"0",this);_a.set_taborder("6");_a.set_text("15");_a.style.set_background("aqua");_a.style.set_color("black");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","1","0","984","15",null,null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("aqua");_a.style.set_color("black");this.addChild(_a.name,_a);_a=new Calendar("cal_trans","absolute","760","15","118","24",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("10");_a.set_dateformat("yyyy.MM.dd (ddd)");_a.set_visible("false");_a.set_value("null");_a=new Layout("default","",0,0,this.div_pop,function(_b){_b.set_taborder("0");_b.set_text("Div00");});this.div_pop.addLayout(_a.name,_a);_a=new Layout("default","",1000,308,this,function(_b){_b.set_classname("FUN020301_P03");_b.set_titletext("원리금납부 결재 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item4","div_pop.cal_BRRW_DE01","value","ds_temp","C12");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_pop.Combo00","value","ds_temp","C13A");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_pop.Edit01","value","ds_temp","C13B");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_pop.Edit02","value","ds_temp","C14");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_pop.Edit03","value","ds_temp","C15");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_pop.edt_sbjt","value","ds_temp","C01");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("FUN020301_P03.xfdl","lib::comInclude.xjs");this.addIncludeScript("FUN020301_P03.xfdl","mis_lib::misUtil.xjs");this.registerScript("FUN020301_P03.xfdl",function(){this.fv_objForm;this.FUN020301_P03_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.FUN020301_P03_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.ds_temp.copyData(this.parent.arg_1);var _c=this.ds_temp.getColumn(0,"C01");var _d=this.ds_temp.getColumn(0,"C03");this.ds_temp.setColumn(0,"C01",_c+" 원리금납부 ("+_d+")");this.fnnc_instt_code();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fnnc_instt_code=function(){this.fn_transaction("selectFnncInsttCodeList");};this.fn_sanction=function(){alert("준비중입니다.");return false;if(!this.gfn_checkValidation_NoUpdChk(this.ds_temp,this.ds_validation)){return false;}this.fn_transaction("selectAmtTrans");};this.fn_sanction2=function(){var _a=this.ds_fnncInsttCode.findRow("CODE",this.ds_temp.getColumn(0,"C13A"));var _b=this.ds_trans.getColumn(0,"KR_AMT");var _c=new Array();_c[0]="금"+this.comUtils.formatComma(this.ds_temp.getColumn(0,"C02"))+"원"+"(금"+_b+")";_c[1]=this.ds_temp.getColumn(0,"C03");_c[2]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C04"));_c[3]=this.ds_temp.getColumn(0,"C05")+"%";var _d=this.ds_temp.getColumn(0,"C06A").substr(2,2)+"."+this.ds_temp.getColumn(0,"C06A").substr(4,2)+"."+this.ds_temp.getColumn(0,"C06A").substr(6,2);var _e=this.ds_temp.getColumn(0,"C06B").substr(2,2)+"."+this.ds_temp.getColumn(0,"C06B").substr(4,2)+"."+this.ds_temp.getColumn(0,"C06B").substr(6,2);_c[4]=_d+String.fromCharCode(13)+String.fromCharCode(10)+"~"+String.fromCharCode(13)+String.fromCharCode(10)+_e;_c[5]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C07"));_c[6]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C08"));_c[7]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C09"));_c[8]=this.comUtils.formatComma(this.ds_temp.getColumn(0,"C10"));var _d=this.ds_temp.getColumn(0,"C11A").substr(2,2)+"."+this.ds_temp.getColumn(0,"C11A").substr(4,2)+"."+this.ds_temp.getColumn(0,"C11A").substr(6,2);var _e=this.ds_temp.getColumn(0,"C11B").substr(2,2)+"."+this.ds_temp.getColumn(0,"C11B").substr(4,2)+"."+this.ds_temp.getColumn(0,"C11B").substr(6,2);_c[9]=_d+String.fromCharCode(13)+String.fromCharCode(10)+"~"+String.fromCharCode(13)+String.fromCharCode(10)+_e;var _f=this.ds_temp.getColumn(0,"C12");this.cal_trans.set_value(_f);_c[10]=this.cal_trans.text;_c[11]=this.ds_fnncInsttCode.getColumn(_a,"CODE_NM")+"(납부계좌: "+this.ds_temp.getColumn(0,"C13B")+")";_c[12]=this.ds_temp.getColumn(0,"C14");_c[13]=this.ds_temp.getColumn(0,"C15")+".  끝.";_c[14]=this.ds_temp.getColumn(0,"C01");this.ds_approve.setColumn(0,"TITLE",title);this.ds_approve.setColumn(0,"DATA_TITLE",dataTitle);this.ds_approve.setColumn(0,"DATA_VALUE",dataValue);this.ds_approve.setColumn(0,"DEPT_CD",this.gfn_getDeptId());this.ds_approve.setColumn(0,"EMP_CD",this.fn_getEmpno());this.ds_approve.setColumn(0,"SE","1");this.ds_approve.setColumn(0,"PBNCD_NO",this.ds_temp.getColumn(0,"PBNCD_NO"));this.ds_approve.setColumn(0,"RPAY_DE",this.ds_temp.getColumn(0,"RPAY_DE"));this.ds_approve.setColumn(0,"RPAY_DE1",this.ds_temp.getColumn(0,"RPAY_DE1"));this.close(this.ds_temp.saveXML());};this.fn_transaction=function(_a){switch(_a){case "selectFnncInsttCodeList":var _b="hsco/mis/fun/FUN000000/selectFnncInsttCodeList.do";var _c="";var _d="ds_fnncInsttCode=output1";break;case "selectAmtTrans":var _b="/hsco/mis/mis/FUN020301/selectAmtTrans.do";var _c="input1=ds_temp";var _d="ds_trans=output1";break;case "intrRpayPlanSanctnU":this.ds_temp.setColumn(0,"PYMNT_DE",this.ds_temp.getColumn(0,"C12"));this.ds_temp.setColumn(0,"FNNC_INSTT_CODE",this.ds_temp.getColumn(0,"C13A"));this.ds_temp.setColumn(0,"ACNUTNO",this.ds_temp.getColumn(0,"C13B"));var _b="hsco/mis/fun/FUN020301/intrRpayPlanSanctnU.do";var _c="input1=ds_temp";var _d="";break;case "prncpalRpayPlanSanctnU":this.ds_temp.setColumn(0,"PYMNT_DE",this.ds_temp.getColumn(0,"C12"));this.ds_temp.setColumn(0,"FNNC_INSTT_CODE",this.ds_temp.getColumn(0,"C13A"));this.ds_temp.setColumn(0,"ACNUTNO",this.ds_temp.getColumn(0,"C13B"));var _b="hsco/mis/fun/FUN020301/prncpalRpayPlanSanctnU.do";var _c="input1=ds_temp";var _d="";break;}switch(_a){case "selectFnncInsttCodeList":Ex.core.tran(this,_a,_b,_c,_d,"","",false,false);break;default:Ex.core.tran(this,_a,_b,_c,_d);break;}};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectFnncInsttCodeList":break;case "selectAmtTrans":this.fn_transaction("intrRpayPlanSanctnU");break;case "intrRpayPlanSanctnU":this.fn_transaction("prncpalRpayPlanSanctnU");break;case "prncpalRpayPlanSanctnU":this.fn_sanction2();break;}}};this.btn_Close_onclick=function(_a,_b){this.close();};this.ds_temp_oncolumnchanged=function(_a,_b){if(_a.name=="C08"||_a.name=="C09"){var _c=this.ds_temp.getColumn(0,"C08");var _d=this.ds_temp.getColumn(0,"C09");this.ds_temp.setColumn(0,"C02",_c+_d);this.ds_temp.setColumn(0,"C10",_c+_d);}};this.div_work_btn_bdgPopup_onclick=function(_a,_b){var _c={arg_0:this,searchDs:null,strObj:"rdo_BALC_SE",year_S:null,bsnsSe_S:null,balcSe_S:"2",deptCode_S:null,acntPopup:false,acntCode_S:null,bAccPopup:false};switch(_a.name){case "btn_bdgPopup1":this.gfn_popup("btn_bdgPopup1",600,500,"계정과목 선택",_c,"com::bdgAcntPop.xfdl","fn_popupCallBack",true);break;case "btn_bdgPopup2":this.gfn_popup("btn_bdgPopup2",600,500,"계정과목 선택",_c,"com::bdgAcntPop.xfdl","fn_popupCallBack",true);break;case "btn_branchAcnut":_c={arg_0:this};this.gfn_popup("btn_branchAcnut",563,500,"브랜치계좌조회",_c,"mis_fun::FUN010103_P01.xfdl","fn_popupCallBack",true);default:break;}};this.fn_popupCallBack=function(_a,_b){var _c=/\([^]+\)/g;var _d=new Dataset();nRowCnt=_d.loadXML(_b);if(!nRowCnt){}else{if(_a=="btn_bdgPopup1"){var _e=_d.getColumn(0,"GWAN_NM");var _f=_d.getColumn(0,"HANG_NM");var _g=_d.getColumn(0,"SEHANG_NM").replace(_c,"");var _h=_d.getColumn(0,"MOK_NM");var _i=_d.getColumn(0,"SEMOK_NM");var _j=_d.getColumn(0,"BUDGET_ACNT_CODE2");var _k=_d.getColumn(0,"EXPNDTR_UNIT_CODE2");var _l=_d.getColumn(0,"YEAR");var _m=_d.getColumn(0,"BSNS_SE");var _n=_d.getColumn(0,"BALC_SE");var _o=_d.getColumn(0,"BUDGET_ACNT_CODE");var _p=_d.getColumn(0,"EXPNDTR_UNIT_CODE");this.ds_temp.setColumn(0,"BUDGET_YEAR",_l);this.ds_temp.setColumn(0,"BSNS_SE",_m);this.ds_temp.setColumn(0,"BALC_SE",_n);this.ds_temp.setColumn(0,"BUDGET_ACNT_CODE",_o);this.ds_temp.setColumn(0,"EXPNDTR_UNIT_CODE",_p);if(_i){var _q=_e+','+_f+','+_g+','+_h+', '+_j+'-'+_k;}else{var _q=_e+','+_f+','+_g+', '+_j+'-'+_k;}this.ds_temp.setColumn(0,"C14",_q);}if(_a=="btn_bdgPopup2"){var _e=_d.getColumn(0,"GWAN_NM");var _f=_d.getColumn(0,"HANG_NM");var _g=_d.getColumn(0,"SEHANG_NM").replace(_c,"");var _h=_d.getColumn(0,"MOK_NM");var _i=_d.getColumn(0,"SEMOK_NM");var _j=_d.getColumn(0,"BUDGET_ACNT_CODE2");var _k=_d.getColumn(0,"EXPNDTR_UNIT_CODE2");var _l=_d.getColumn(0,"YEAR");var _m=_d.getColumn(0,"BSNS_SE");var _n=_d.getColumn(0,"BALC_SE");var _o=_d.getColumn(0,"BUDGET_ACNT_CODE");var _p=_d.getColumn(0,"EXPNDTR_UNIT_CODE");this.ds_temp.setColumn(0,"BUDGET_YEAR1",_l);this.ds_temp.setColumn(0,"BSNS_SE1",_m);this.ds_temp.setColumn(0,"BALC_SE1",_n);this.ds_temp.setColumn(0,"BUDGET_ACNT_CODE1",_o);this.ds_temp.setColumn(0,"EXPNDTR_UNIT_CODE1",_p);if(_i){var _r=_e+','+_f+','+_g+','+_h+', '+_j+'-'+_k;}else{var _r=_e+','+_f+','+_g+', '+_j+'-'+_k;}this.ds_temp.setColumn(0,"C15",_r);}if(_a=="btn_branchAcnut"){this.ds_temp.setColumn(0,"C13A",_d.getColumn(0,"BANK_CODE"));this.ds_temp.setColumn(0,"C13B",_d.getColumn(0,"ACNUTNO"));}}};});this.on_initEvent=function(){this.ds_temp.addEventHandler("oncolumnchanged",this.ds_temp_oncolumnchanged,this);this.addEventHandler("oninit",this.FUN020301_P03_oninit,this);this.addEventHandler("onload",this.FUN020301_P03_onload,this);this.div_pop.btn_Search00.addEventHandler("onclick",this.fn_sanction,this);this.div_pop.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);this.div_pop.edt_sbjt.addEventHandler("onkeyup",this.edt_BSNS_CODE_onkeyup,this);this.div_pop.btn_bdgPopup1.addEventHandler("onclick",this.div_work_btn_bdgPopup_onclick,this);this.div_pop.btn_bdgPopup2.addEventHandler("onclick",this.div_work_btn_bdgPopup_onclick,this);this.div_pop.btn_branchAcnut.addEventHandler("onclick",this.div_work_btn_bdgPopup_onclick,this);};this.loadIncludeScript("FUN020301_P03.xfdl");};})();