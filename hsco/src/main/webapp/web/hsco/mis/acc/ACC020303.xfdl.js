﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020303");this.set_classname("UI_ACC020303");this.set_titletext("지출내역통보");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BPLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CPTAL_EXPNDTR_ACNTBK_DE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_NO_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_NO_ED\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_CHARGER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_expndtrDtlsDspth",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:+BUDGET_ACNT_CODE");_a._setContents("<ColumnInfo><Column id=\"DEPOSIT_FNNC_INSTT_CODE\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_FNNC_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_FNNC_INSTT_CODE\" type=\"string\" size=\"32\"/><Column id=\"PAYMENT_FNNC_INSTT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"RCPT_MAN\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"DECSN_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CHECK_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BCNC_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc003",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">CPTAL_EXPNDTR_ACNTBK_DE</Col><Col id=\"msgId\">지출일자</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","5","77","21",null,null,this.div_SEARCH);_a.set_taborder("13");_a.set_text("사업장구분");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","97","5","118","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("ds_acc001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_displayrowcount("20");_a=new Static("sta_EMPL_SE","absolute","230","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("15");_a.set_text("조회은행");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","230","31","89","21",null,null,this.div_SEARCH);_a.set_taborder("17");_a.set_text("수표(FROM)");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","546","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("2");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_EMPL_SE02","absolute","15","31","64","21",null,null,this.div_SEARCH);_a.set_taborder("33");_a.set_text("지출담당");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE03","absolute","477","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("36");_a.set_text("지출일자");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","324","5","138","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_acc003");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new MaskEdit("MaskEdit00","absolute","324","31","60","21",null,null,this.div_SEARCH);_a.set_taborder("4");this.div_SEARCH.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","402","31","60","21",null,null,this.div_SEARCH);_a.set_taborder("5");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static01","absolute","386","31","14","21",null,null,this.div_SEARCH);_a.set_taborder("42");_a.set_text("~");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","97","31","118","21",null,null,this.div_SEARCH);_a.set_taborder("3");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("17");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","59","1031","10",null,null,this);_a.set_taborder("23");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title00","absolute","0","69","132","19",null,null,this);_a.set_taborder("24");_a.set_text("지출내역통보");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","88","1031","5",null,null,this);_a.set_taborder("25");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelDn00","absolute",null,"69","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","93",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_expndtrDtlsDspth");_a.set_autofittype("col");_a.set_autosizingtype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"채주\"/><Cell col=\"2\" text=\"상호\"/><Cell col=\"3\" text=\"지급금액\"/><Cell col=\"4\" text=\"지급번호\"/><Cell col=\"5\" text=\"출금계좌\"/><Cell col=\"6\" text=\"입금은행\"/><Cell col=\"7\" text=\"입금계좌\"/></Band><Band id=\"body\"><Cell style=\"background:snow;\" text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;background:snow;\" text=\"bind:RCPT_MAN\"/><Cell col=\"2\" style=\"align:left;background:snow;\" text=\"bind:BCNC_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:snow;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:snow;\" text=\"bind:CHECK_NO\"/><Cell col=\"5\" style=\"background:snow;\" text=\"bind:PAYMENT_ACNUTNO\"/><Cell col=\"6\" style=\"background:snow;\" text=\"bind:DEPOSIT_FNNC_INSTT_NM\"/><Cell col=\"7\" style=\"background:snow;\" text=\"bind:DEPOSIT_ACNUTNO\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC020303");_b.set_titletext("지출내역통보");});this.addLayout(_a.name,_a);_a=new BindItem("item6","div_SEARCH.Combo00","value","ds_cond","BPLC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","CPTAL_EXPNDTR_ACNTBK_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Combo01","value","ds_cond","FNNC_INSTT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_SEARCH.MaskEdit00","value","ds_cond","CHECK_NO_ST");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_SEARCH.MaskEdit01","value","ds_cond","CHECK_NO_ED");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Edit00","value","ds_cond","EXPNDTR_CHARGER");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC020303.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC020303.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC020303.xfdl",function(){this.ACC020303_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();var _c=[["ds_acc001","ACC001","Y","A","B"],["ds_acc003","ACC003","Y","D","B"]];var _d=function(_e,_f,_g){};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"CPTAL_EXPNDTR_ACNTBK_DE",_a);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("SRCH");};this.fn_transaction=function(_a){switch(_a){case "SRCH":var _b="hsco/mis/acc/ACC020303/expndtrDtlsDspthList.do";var _c="input1=ds_cond";var _d="ds_expndtrDtlsDspth=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "SRCH":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "SRCH":break;default:break;}}};this.fn_insert=function(){var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"YEAR",_a.substr(0,4));this.ds_cond.setColumn(0,"SRCH_ST_DT",_a.substr(0,4)+"0101");this.ds_cond.setColumn(0,"SRCH_ED_DT",_a);this.ds_cond.setColumn(0,"CYFD_SE","0");};this.fn_print=function(){var _a=new this.cf_Opts();_a.setToolbar(false);_a.setScale(100);_a.setIsStreaming(true);_a.setScrollPage(true);_a.setReportPath("/mis/acc/ACC020303_R1.jrf");_a.setSaveFilename("지출내역통보");_a.setLocalDs(["ds_expndtrDtlsDspth",this.ds_expndtrDtlsDspth]);_a.setArgs("CPTAL_EXPNDTR_ACNTBK_DE",this.ds_cond.getOrgColumn(0,"CPTAL_EXPNDTR_ACNTBK_DE"));if(this.comUtils.isNotNull(this.ds_cond.getColumn(0,"EXPNDTR_CHARGER"))){_a.setArgs("EXPNDTR_CHARGER",this.ds_cond.getColumn(0,"EXPNDTR_CHARGER"));}else{_a.setArgs("EXPNDTR_CHARGER","");}var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",1200,800,"지출내역통보",_b,"common::frmReportPopup.xfdl","report_callback");};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};this.grd_onheadclick=function(_a,_b){this.gfn_gridSort(_a,_b);};});this.on_initEvent=function(){this.ds_acc001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_acc003.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC020303_onload,this);this.btn_excelDn00.addEventHandler("onclick",this.btn_excelDn_onclick,this);this.grd.addEventHandler("onheadclick",this.grd_onheadclick,this);};this.loadIncludeScript("ACC020303.xfdl");};})();