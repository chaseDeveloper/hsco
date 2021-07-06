﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC050303");this.set_classname("ACC050303");this.set_titletext("이익잉여금처분계산서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_accNutStacnt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEBTOR_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CRDIT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACCNUT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACCNUT_MT\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_PRMPC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_UPPER_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_DEBTOR_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_CRDIT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SE_ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_accNutSeCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SE_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ACCNUT_YM</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">결산회계년월</Col></Row><Row><Col id=\"colId\">ACCNUT_ACNT_CODE</Col><Col id=\"compId\">ds_accNutStacnt</Col><Col id=\"msgId\">회계계정</Col><Col id=\"notNull\">Y</Col><Col id=\"PK\">Y</Col></Row><Row><Col id=\"compId\">ds_accNutStacnt</Col><Col id=\"msgId\">당기차변금액</Col><Col id=\"notNull\">Y</Col><Col id=\"colId\">DEBTOR_AMOUNT</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">15</Col></Row><Row><Col id=\"compId\">ds_accNutStacnt</Col><Col id=\"msgId\">당기대변금액</Col><Col id=\"notNull\">Y</Col><Col id=\"colId\">CRDIT_AMOUNT</Col><Col id=\"lengthChkGb\">LE</Col><Col id=\"nlength\">15</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_conditionList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_DEBTOR_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAST_CRDIT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acntNMcombo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ACCNUT_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNUT_ACNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","33","1031","10",null,null,this);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","43","188","19",null,null,this);_a.set_taborder("7");_a.set_text("이익잉여금처분계산서");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","62","1031","5",null,null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excel_down","absolute",null,"43","25","19","28",null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("13");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","5","105","21",null,null,this.div_search);_a.set_taborder("2");_a.set_cssclass("sta_WFSA_Label");_a.set_text("결산회계년월");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","99","0","15",null,null,"0",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","198","0","15",null,null,"0",this.div_search);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","114","5","84","21",null,null,this.div_search);_a.set_taborder("0");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Button("btn_del","absolute",null,"43","64","19","122",null,this);_a.set_taborder("2");_a.set_text("행삭제");_a.set_cssclass("btn_WF_Griddel");this.addChild(_a.name,_a);_a=new Button("btn_add","absolute",null,"43","64","19","189",null,this);_a.set_taborder("1");_a.set_text("행추가");_a.set_cssclass("btn_WF_Gridadd");this.addChild(_a.name,_a);_a=new Button("btn_reset","absolute",null,"43","64","19","55",null,this);_a.set_taborder("3");_a.set_text("행취소");_a.set_cssclass("btn_WF_Gridcnl");this.addChild(_a.name,_a);_a=new Grid("grd_accNutStacnt","absolute","0","67",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_accNutStacnt");_a.set_autoenter("select");_a.set_extendsizetype("row");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a.set_autosizingtype("row");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"회계계정\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"2\" text=\"사업코드\"/><Cell col=\"4\" colspan=\"2\"><Cell displaytype=\"normal\" style=\"align:right middle;\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;ACCNUT_YEAR&quot;).substr(0,4)\" editautoselect=\"false\" editlimitbymask=\"decimal\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"년도(당기)\"/></Cell><Cell col=\"6\" colspan=\"2\"><Cell style=\"align:right middle;\" text=\"expr:comp.parent.ds_cond.getColumn(0, &quot;PAST_ACCNUT_YEAR&quot;)\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"년도(전기)\"/></Cell><Cell row=\"1\" col=\"4\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"금액(차변)\"/><Cell row=\"1\" col=\"5\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"금액(대변)\"/><Cell row=\"1\" col=\"6\" text=\"금액(차변)\"/><Cell row=\"1\" col=\"7\" text=\"금액(대변)\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:ACCNUT_ACNT_CODE\" wordwrap=\"char\" expandsize=\"20\" autosizerow=\"limitmin\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:ACCNUT_ACNT_CODE\" wordwrap=\"char\" combodataset=\"ds_acntNMcombo\" combocodecol=\"ACCNUT_ACNT_CODE\" combodatacol=\"ACCNUT_ACNT_NM\" autosizerow=\"limitmin\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"expand\" style=\"align:left;\" text=\"bind:BSNS_CODE\" wordwrap=\"char\" expandshow=\"show\" expandsize=\"20\" autosizerow=\"limitmin\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:BSNS_NM\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:DEBTOR_AMOUNT\" editdisplay=\"display\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" text=\"bind:CRDIT_AMOUNT\" editdisplay=\"display\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"expr:(PAST_ACCNUT_ACNT_CODE=='1') ? 'masknumber':'none'\" style=\"align:right middle;\" text=\"bind:PAST_DEBTOR_AMOUNT\" editdisplay=\"expr:(PAST_ACCNUT_ACNT_CODE=='1')  ? &quot;display&quot;  : &quot;edit&quot;\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"expr:(PAST_ACCNUT_ACNT_CODE=='1') ? 'masknumber':'none'\" style=\"align:right middle;\" text=\"bind:PAST_CRDIT_AMOUNT\" editdisplay=\"expr:(PAST_ACCNUT_ACNT_CODE=='1')  ? &quot;display&quot;  : &quot;edit&quot;\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",84,21,this.div_search.div_monCal,function(_b){_b.set_taborder("0");_b.set_url("common::frmMonCal.xfdl");_b.set_async("false");});this.div_search.div_monCal.addLayout(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("ACC050303");_b.set_titletext("이익잉여금처분계산서");});this.addLayout(_a.name,_a);_a=new BindItem("item1","div_search.div_monCal","cssclass","ds_cond","SRCH_YM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("ACC050303.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC050303.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC050303.xfdl",function(){this.ACC050303_onload=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.div_search.div_monCal.fn_setBind("ds_cond","ACCNUT_YM");this.div_search.div_monCal.msk_mon.set_cssclass("msk_WF_Essential");var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"ACCNUT_YM",_a.substr(0,6));};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.ds_cond.setColumn(0,"ACCNUT_YEAR",this.ds_cond.getColumn(0,"ACCNUT_YM").substr(0,4));this.ds_cond.setColumn(0,"ACCNUT_MT",this.ds_cond.getColumn(0,"ACCNUT_YM").substr(4,6));this.ds_cond.setColumn(0,"PAST_ACCNUT_YEAR",this.ds_cond.getColumn(0,"ACCNUT_YEAR")-1);this.fn_transaction("SRCH");};this.fn_save=function(){if(!this.gfn_checkValidation(this.ds_accNutStacnt,this.ds_validation)){return;}this.fn_transaction("SAVE");};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","이익잉여금처분계산서");_a.setSaveFilename("이익잉여금처분계산서");_a.clearLocalDs();_a.setGrid(this.grd_accNutStacnt);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"이익잉여금처분계산서",_b,"common::frmReportPopup.xfdl","");};this.fn_transaction=function(_a){switch(_a){case "addNM":var _b="hsco/mis/acc/ACC050303/conditionList.do";var _c="input1=ds_cond";var _d="ds_acntNMcombo=output1 ds_conditionList=output2";break;case "SRCH":var _b="hsco/mis/acc/ACC050303/accNutStacntList.do";var _c="input1=ds_cond";var _d="ds_accNutStacnt=output1";break;case "SAVE":var _b="hsco/mis/acc/ACC050303/accNutStacntCUD.do";var _c="input1=ds_accNutStacnt:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "addNM":break;case "SRCH":break;case "SAVE":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "addNM":break;case "SRCH":this.fn_transaction("addNM");break;case "SAVE":this.fn_transaction("SRCH");break;default:break;}}};this.fn_popupCallBack=function(_a,_b){var _c=new Dataset();_c.loadXML(_b);var _d=this.ds_accNutStacnt.rowposition;switch(_a){case "btn_bsnsPopup":this.ds_accNutStacnt.setColumn(_d,"BSNS_CODE",_c.getColumn(0,"BSNS_CODE"));this.ds_accNutStacnt.setColumn(_d,"BSNS_NM",_c.getColumn(0,"BSNS_NM"));break;}};this.grd_accNutStacnt_onexpanddown=function(_a,_b){this.gfn_popup("btn_bsnsPopup",500,500,"사업코드","","pms_prj::popBsns.xfdl","fn_popupCallBack",true);};this.btn_add_onclick=function(_a,_b){var _c=this.ds_accNutStacnt.addRow();this.ds_accNutStacnt.setColumn(_c,"ACCNUT_YEAR",this.ds_cond.getOrgColumn(0,"ACCNUT_YEAR"));this.ds_accNutStacnt.setColumn(_c,"ACCNUT_MT",this.ds_cond.getOrgColumn(0,"ACCNUT_MT"));this.ds_accNutStacnt.setColumn(_c,"PAST_ACCNUT_ACNT_CODE","0");};this.btn_del_onclick=function(_a,_b){if(this.gfn_message("confirm.삭제여부")){if(this.ds_accNutStacnt.getColumn(this.ds_accNutStacnt.rowposition,"PAST_ACCNUT_ACNT_CODE")==1){this.gfn_message("info.처리불가","당기 데이터만 삭제됩니다.");}this.ds_accNutStacnt.deleteRow(this.ds_accNutStacnt.rowposition);}};this.btn_reset_onclick=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.ds_accNutStacnt.reset();}};this.btn_excel_down_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_accNutStacnt,"exportExl");};this.btn_reset_onclick=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.ds_accNutStacnt.reset();}};this.ds_accNutStacnt_oncolumnchanged=function(_a,_b){var _c=this.ds_conditionList.findRow("PAST_ACCNUT_ACNT_CODE",_b.newvalue);switch(_b.columnid){case "ACCNUT_ACNT_CODE":var _c=this.ds_conditionList.findRow("PAST_ACCNUT_ACNT_CODE",_b.newvalue);if(_c> -1){this.ds_accNutStacnt.setColumn(_b.row,"PAST_ACCNUT_ACNT_CODE","1");}else{this.ds_accNutStacnt.setColumn(_b.row,"PAST_ACCNUT_ACNT_CODE","0");}if(this.comUtils.isNull(this.ds_accNutStacnt.getColumn(_b.row,"BSNS_CODE"))){this.ds_accNutStacnt.setColumn(_b.row,"BSNS_CODE","-");this.fn_pastAmountSrch();}break;case "BSNS_CODE":this.fn_pastAmountSrch();break;}};this.fn_pastAmountSrch=function(){var _a=this.ds_accNutStacnt.rowposition;var _b=this.ds_accNutStacnt.getColumn(_a,"BSNS_CODE");var _c=this.ds_conditionList.findRowExpr("ACCNUT_ACNT_CODE == '"+this.ds_accNutStacnt.getColumn(_a,"ACCNUT_ACNT_CODE")+"'&& BSNS_CODE == '"+_b+"'");if(_c> -1){this.ds_accNutStacnt.setColumn(_a,"PAST_DEBTOR_AMOUNT",this.ds_conditionList.getColumn(_c,"PAST_DEBTOR_AMOUNT"));this.ds_accNutStacnt.setColumn(_a,"PAST_CRDIT_AMOUNT",this.ds_conditionList.getColumn(_c,"PAST_CRDIT_AMOUNT"));}else{this.ds_accNutStacnt.setColumn(_a,"PAST_DEBTOR_AMOUNT","0");this.ds_accNutStacnt.setColumn(_a,"PAST_CRDIT_AMOUNT","0");}};});this.on_initEvent=function(){this.ds_accNutStacnt.addEventHandler("oncolumnchanged",this.ds_accNutStacnt_oncolumnchanged,this);this.addEventHandler("onload",this.ACC050303_onload,this);this.sta_title01.addEventHandler("onclick",this.sta_title01_onclick,this);this.Static51.addEventHandler("onclick",this.Static51_onclick,this);this.btn_excel_down.addEventHandler("onclick",this.btn_excel_down_onclick,this);this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);this.grd_accNutStacnt.addEventHandler("onexpanddown",this.grd_accNutStacnt_onexpanddown,this);this.grd_accNutStacnt.addEventHandler("ontextchange",this.grd_accNutStacnt_ontextchange,this);this.grd_accNutStacnt.addEventHandler("oncloseup",this.grd_accNutStacnt_oncloseup,this);this.grd_accNutStacnt.addEventHandler("ondrag",this.grd_accNutStacnt_ondrag,this);};this.loadIncludeScript("ACC050303.xfdl");this.loadPreloadList();};})();