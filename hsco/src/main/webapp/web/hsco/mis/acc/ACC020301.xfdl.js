﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020301");this.set_classname("UI_ACC020301");this.set_titletext("지출내역전송");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BPLC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_OPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc003",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_lqttTransfr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PAYMENT_FNNC_INSTT_CODE\" type=\"string\" size=\"32\"/><Column id=\"PAYMENT_ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\"/><Column id=\"ADRES\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_FNNC_INSTT_NM\" type=\"string\" size=\"32\"/><Column id=\"CHECK_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PAYMENT_FNNC_INSTT_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_FNNC_INSTT_CODE\" type=\"string\" size=\"32\"/><Column id=\"RCPT_MAN\" type=\"string\" size=\"32\"/><Column id=\"NM\" type=\"string\" size=\"32\"/><Column id=\"DECSN_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BCNC_NM\" type=\"string\" size=\"32\"/><Column id=\"DECSN_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bmnyTransfr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PAYMENT_FNNC_INSTT_CODE\" type=\"string\" size=\"32\"/><Column id=\"PAYMENT_ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_ACNUTNO\" type=\"string\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"DEPT_CODE\" type=\"string\" size=\"32\"/><Column id=\"ADRES\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_FNNC_INSTT_NM\" type=\"string\" size=\"32\"/><Column id=\"CHECK_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PAYMENT_FNNC_INSTT_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPOSIT_FNNC_INSTT_CODE\" type=\"string\" size=\"32\"/><Column id=\"RCPT_MAN\" type=\"string\" size=\"32\"/><Column id=\"NM\" type=\"string\" size=\"32\"/><Column id=\"DECSN_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BCNC_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_salaryTransfr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RCPT_MAN_DEPT_NM\" type=\"string\" size=\"32\"/><Column id=\"RCPT_MAN_DEPT_CODE\" type=\"string\" size=\"32\"/><Column id=\"BPLC_CODE\" type=\"string\" size=\"32\"/><Column id=\"RCPT_MAN\" type=\"string\" size=\"32\"/><Column id=\"PYMNT_SE\" type=\"string\" size=\"32\"/><Column id=\"DECSN_AMOUNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FNNC_INSTT_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"RM\" type=\"string\" size=\"32\"/><Column id=\"SALARY_SE\" type=\"string\" size=\"32\"/><Column id=\"PYMNT_ACNUTNO\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc011",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sal001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">SRCH_DT</Col><Col id=\"msgId\">지출일자</Col><Col id=\"notNull\">Y</Col><Col id=\"from\"/><Col id=\"to\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_SEARCH);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","84","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a=new Static("sta_EMPL_SE03","absolute","15","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("36");_a.set_text("지출일자");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","677","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("39");_a.set_text("지출구분");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo02","absolute","746","5","134","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("@ds_acc011");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Static("Static00","absolute","887","5","134","21",null,null,this.div_SEARCH);_a.set_taborder("40");_a.set_text("급여에서 사용할지 확인");_a.set_visible("false");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","268","5","150","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);var _b=new Dataset("Combo00_innerdataset",this.div_SEARCH.Combo00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">농협은행</Col></Row><Row><Col id=\"codecolumn\">004</Col><Col id=\"datacolumn\">국민은행</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("41");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("sta_EMPL_SE01","absolute","199","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("42");_a.set_text("지출은행");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","512","5","150","21",null,null,this.div_SEARCH);_a.set_taborder("43");_a.set_visible("false");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE02","absolute","432","5","64","21",null,null,this.div_SEARCH);_a.set_taborder("44");_a.set_text("계좌번호");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Tab("tab","absolute","0","43",null,null,"28","0",this);_a.set_taborder("1");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.addChild(_a.name,_a);_a=new Tabpage("tabpage1",this.tab);_a.set_text("대량이체");this.tab.addChild(_a.name,_a);_a=new Grid("grd_lqttTransfr","absolute","0","5",null,null,"0","0",this.tab.tabpage1);_a.set_taborder("0");_a.set_binddataset("ds_lqttTransfr");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"출금계좌\"/><Cell col=\"3\" text=\"입금은행\"/><Cell col=\"4\" text=\"입금계좌\"/><Cell col=\"5\" text=\"예금주\"/><Cell col=\"6\" text=\"지출액\"/><Cell col=\"7\" text=\"부서\"/><Cell col=\"8\" text=\"상호\"/><Cell col=\"9\" text=\"성명\"/><Cell col=\"10\" text=\"주소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:TRNS_AT\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:PAYMENT_ACNUTNO\"/><Cell col=\"3\" text=\"bind:DEPOSIT_FNNC_INSTT_NM\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPOSIT_ACNUTNO\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:RCPT_MAN\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"7\" text=\"bind:DEPT_NM\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:BCNC_NM\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:NM\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:ADRES\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");this.tab.tabpage1.addChild(_a.name,_a);_a=new Tabpage("tabpage3",this.tab);_a.set_text("급여이체");this.tab.addChild(_a.name,_a);_a=new Grid("grd_salaryTransfr","absolute","0","5",null,null,"0","0",this.tab.tabpage3);_a.set_taborder("0");_a.set_binddataset("ds_salaryTransfr");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"금액\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"은행\"/><Cell col=\"5\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:DECSN_AMOUNT\"/><Cell col=\"2\" text=\"bind:RCPT_MAN\"/><Cell col=\"3\" text=\"bind:RCPT_MAN_DEPT_NM\"/><Cell col=\"4\" text=\"bind:FNNC_INSTT_CODE_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:PYMNT_ACNUTNO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");this.tab.tabpage3.addChild(_a.name,_a);_a=new Button("btn_send","absolute",null,"53","60","19","28",null,this);_a.set_taborder("2");_a.set_text("자료전송");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_SEARCH,function(_c){_c.set_taborder("0");_c.set_text("Div00");_c.set_applystyletype("cascade,keep");_c.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage1,function(_c){_c.set_text("대량이체");});this.tab.tabpage1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tabpage3,function(_c){_c.set_text("급여이체");});this.tab.tabpage3.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("UI_ACC020301");_c.set_titletext("지출내역전송");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","SRCH_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Combo02","value","ds_cond","PYMNT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Combo00","value","ds_cond","FNNC_INSTT_CODE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC020301.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC020301.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC020301.xfdl",function(){this.ACC020301_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();var _c=[["ds_acc001","ACC001","Y","D","B"],["ds_acc003","ACC003","Y","D","B"],["ds_acc011","ACC011","Y","D","B"],["ds_sal001","SAL001","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_transaction("lqttTransfrList");this.fn_transaction("salaryTransfrList");};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"SRCH_DT",_a);this.ds_cond.setColumn(0,"FNNC_INSTT_CODE","011");};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}switch(this.tab.tabindex){case 0:this.fn_transaction("lqttTransfrList");break;case 1:this.fn_transaction("salaryTransfrList");break;}};this.fn_transaction=function(_a){switch(_a){case "lqttTransfrList":var _b="hsco/mis/acc/ACC020301/lqttTransfrList.do";var _c="input1=ds_cond";var _d="ds_lqttTransfr=output1";break;case "salaryTransfrList":var _b="hsco/mis/acc/ACC020301/salaryTransfrList.do";var _c="input1=ds_cond";var _d="ds_salaryTransfr=output1";break;case "expndtrBranchSend":var _b="hsco/mis/acc/ACC020301/expndtrBranchSend.do";var _c="input1=ds_cond input2=ds_lqttTransfr:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "lqttTransfrList":break;case "salaryTransfrList":break;case "expndtrBranchSend":this.fn_search();break;default:break;}}};this.btn_send_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"FNNC_INSTT_CODE");if(_c!='011'){this.gfn_message("info.처리불가","농협 계좌만 자료전송이 가능합니다.");return false;}this.ds_cond.reset();if(this.tab.tabindex==0){if(this.gfn_message("comm.행위여부","["+this.ds_cond.getColumn(0,"SRCH_DT")+"] 대량이체")){this.ds_cond.setColumn(0,"PAY_OPT","E2");this.fn_transaction("expndtrBranchSend");}}else if(this.tab.tabindex==1){if(this.gfn_message("comm.행위여부","["+this.ds_cond.getColumn(0,"SRCH_DT")+"] 급여이체")){this.ds_cond.setColumn(0,"PAY_OPT","E3");this.fn_transaction("expndtrBranchSend");}}};this.tab_tabpage1_grd_lqttTransfr_onheadclick=function(_a,_b){if(_b.cell==0){for(var _c=0;_c<this.ds_lqttTransfr.getRowCount();_c++ ){this.ds_lqttTransfr.setColumn(_c,"TRNS_AT","1");}}};});this.on_initEvent=function(){this.ds_acc001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_acc003.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_acc011.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_sal001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC020301_onload,this);this.tab.tabpage1.grd_lqttTransfr.addEventHandler("onheadclick",this.tab_tabpage1_grd_lqttTransfr_onheadclick,this);this.btn_send.addEventHandler("onclick",this.btn_send_onclick,this);};this.loadIncludeScript("ACC020301.xfdl");};})();