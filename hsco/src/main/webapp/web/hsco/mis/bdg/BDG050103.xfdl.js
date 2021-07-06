﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG050103");this.set_classname("BDG050103");this.set_titletext("조기집행대상현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"BGNDE\" type=\"STRING\" size=\"8\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_elpdExcutTrgetSttus",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_keystring("G:-BSNS_SE,S:BUDGET_ACNT_CODE");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ELPD_EXCUT_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ELPD_EXCUT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ELPD_EXCUT_TRGET_RT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEHANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_BUDGET_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ORIBDGT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXECUT_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRGET_CYFD_BUDGET_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRGET_ORIBDGT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TRGET_EXECUT_BUDGET_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_BUDGET_EXPNDTR_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ORIBDGT_EXPNDTR_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_sendMssage",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CALLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MMS_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">YEAR</Col><Col id=\"msgId\">예산년도</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">BGNDE</Col><Col id=\"msgId\">조회시작일</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"colId\">ENDDE</Col><Col id=\"msgId\">조회종료일</Col><Col id=\"compId\">ds_cond</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">ENDDE</Col><Col id=\"msgId\">조회종료일^조회시작일</Col><Col id=\"from\">BGNDE</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dept",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grd_elpdExcutTrgetSttus","absolute","0","67",null,null,"28","0",this);_a.set_taborder("4");_a.set_binddataset("ds_elpdExcutTrgetSttus");_a.set_cellsizingtype("col");_a.set_treeinitstatus("expand,all");_a.set_treeusecheckbox("false");_a.set_treeuseimage("false");_a.set_treeuseexpandkey("true");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"36\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" colspan=\"6\" text=\"예   산   과   목   정   보\"/><Cell col=\"7\" colspan=\"7\" text=\"예   산   액   정   보\"/><Cell row=\"1\" col=\"1\" text=\"예산과목코드\"/><Cell row=\"1\" col=\"2\" text=\"세항\"/><Cell row=\"1\" col=\"3\" text=\"목\"/><Cell row=\"1\" col=\"4\" text=\"세목\"/><Cell row=\"1\" col=\"5\" text=\"조기집행&#13;&#10;대상비율(%)\"/><Cell row=\"1\" col=\"6\" text=\"조기집행&#13;&#10;비율(%)\"/><Cell row=\"1\" col=\"7\" text=\"이월예산\"/><Cell row=\"1\" col=\"8\" text=\"본예산\"/><Cell row=\"1\" col=\"9\" text=\"예산액\"/><Cell row=\"1\" col=\"10\" text=\"조기집행&#13;&#10;목표액\"/><Cell row=\"1\" col=\"11\" text=\"이월예산&#13;&#10;지출액\"/><Cell row=\"1\" col=\"12\" text=\"본예산&#13;&#10;지출액\"/><Cell row=\"1\" col=\"13\" text=\"지출액\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;padding:0 0 0 5;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:SE_NM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" style=\"line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:BUDGET_ACNT_CODE2\"/><Cell col=\"2\" style=\"align:left middle;padding:0 0 0 5;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:SEHANG_NM\" tooltiptext=\"bind:SEHANG_NM\"/><Cell col=\"3\" style=\"align:left middle;padding:0 0 0 5;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:MOK_NM\" tooltiptext=\"bind:MOK_NM\"/><Cell col=\"4\" style=\"align:left middle;padding:0 0 0 5;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:SEMOK_NM\" tooltiptext=\"bind:SEMOK_NM\"/><Cell col=\"5\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'normal' : 'number'\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '' : ELPD_EXCUT_TRGET_RT\"/><Cell col=\"6\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? 'normal' : 'number'\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '소계' : ELPD_EXCUT_RT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CYFD_BUDGET_AMT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:ORIBDGT_AMT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:EXECUT_BUDGET_AM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:TRGET_EXECUT_BUDGET_AM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:CYFD_BUDGET_EXPNDTR_AM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:ORIBDGT_EXPNDTR_AM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;padding:0 5 0 0;line:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '');background:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');background2:EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '');\" text=\"bind:DECSN_AMOUNT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CYFD_BUDGET_AMT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ORIBDGT_AMT&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;EXECUT_BUDGET_AM&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;TRGET_EXECUT_BUDGET_AM&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CYFD_BUDGET_EXPNDTR_AM&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ORIBDGT_EXPNDTR_AM&quot;)\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;DECSN_AMOUNT&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_elpdExcutTrgetSttus","absolute","0","43","150","19",null,null,this);_a.set_taborder("2");_a.set_text("조기집행대상현황");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","450","0","38","5",null,null,this.div_search);_a.set_taborder("11");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","450",null,"38","5",null,"0",this.div_search);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_expndtrDe","absolute","154","5","64","21",null,null,this.div_search);_a.set_taborder("4");_a.set_text("지출일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnde","absolute","218","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a.style.set_align("center middle");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static01","absolute","318","5","13","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("~");_a.style.set_align("center");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_endde","absolute","331","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("7");_a.set_dateformat("yyyy-MM-dd");_a.style.set_align("center middle");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static02","absolute","431","5","15",null,null,"5",this.div_search);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_max("9999");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_sendMssage","absolute",null,"43","67","19","28",null,this);_a.set_taborder("8");_a.set_text("문자전송");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("BDG050103");_b.set_titletext("조기집행대상현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cal_bgnde","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.cal_endde","value","ds_cond","ENDDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG050103.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG050103.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG050103.xfdl",function(){this.chargerAt=false;this.BDG050103_oninit=function(_a,_b){};this.BDG050103_onload=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();var _b=this.comUtils.getClientDate("YYYY");var _c=this.comUtils.getClientDate("YYYYMMDD");this.ds_cond.setColumn(_a,"YEAR",_b);this.ds_cond.setColumn(_a,"BGNDE",_b+"0101");this.ds_cond.setColumn(_a,"ENDDE",_c);if(this.gfn_authGrpId("BDG_ADMIN")!= -1){this.chargerAt=true;}if(this.chargerAt){this.btn_sendMssage.set_visible(true);}else{this.btn_sendMssage.set_visible(false);}this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.ds_elpdExcutTrgetSttus.clearData();this.fn_transaction("selectElpdExcutTrgetSttus");};this.fn_transaction=function(_a){switch(_a){case "selectElpdExcutTrgetSttus":var _b="/hsco/mis/bdg/BDG050103/selectElpdExcutTrgetSttus.do";var _c="input1=ds_cond";var _d="ds_dept=output1 ds_elpdExcutTrgetSttus=output2";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "selectElpdExcutTrgetSttus":this.grd_elpdExcutTrgetSttus.set_enableredraw(false);for(var _i=this.grd_elpdExcutTrgetSttus.getCellCount("body");13<_i;_i-- ){this.grd_elpdExcutTrgetSttus.deleteContentsCol(_i);}var _d=this.ds_dept.rowcount;for(var _i=0;_i<_d;_i++ ){var _e=this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.appendContentsCol("body");this.grd_elpdExcutTrgetSttus.mergeContentsCell("head",0,_e,0,_e+6,(3+_i),false);var _f=this.ds_dept.getColumn(_i,"DEPT_NM");var _g=this.ds_dept.getColumn(_i,"DEPT_CODE");var _h="DC_"+_g;this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i,"text",_f);this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e,"text","이월예산");this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e+1,"text","본예산");this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e+2,"text","예산액");this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e+3,"text","조기집행\n목표액");this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e+4,"text","이월예산\n지출액");this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e+5,"text","본예산\n지출액");this.grd_elpdExcutTrgetSttus.setCellProperty("head",3+_i+_e+6,"text","지출액");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"text","bind:"+_h+"_CYFD_BUDGET_AMT");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"text","bind:"+_h+"_ORIBDGT_AMT");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"text","bind:"+_h+"_EXECUT_BUDGET_AM");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"text","bind:"+_h+"_TRGET_EXECUT_AM");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"text","bind:"+_h+"_CYFD_EXPNDTR_AM");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"text","bind:"+_h+"_ORI_EXPNDTR_AM");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"text","bind:"+_h+"_DECSN_AMOUNT");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"line","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '1 solid #f8e3d1ff' : '')");if(_i%2==0){this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : 'azure')");}else{this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+1,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+2,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+3,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+4,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+5,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"background","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");this.grd_elpdExcutTrgetSttus.setCellProperty("body",_e+6,"background2","EXPR(dataset.getRowType(currow) == Dataset.ROWTYPE_GROUP ? '#fff8f2ff' : '')");}this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e,"size",100);this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e+1,"size",100);this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e+2,"size",100);this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e+3,"size",100);this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e+4,"size",100);this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e+5,"size",100);this.grd_elpdExcutTrgetSttus.setFormatColProperty(_e+6,"size",100);this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e,"text","expr:dataset.getSum('"+_h+"_CYFD_BUDGET_AMT')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+1,"text","expr:dataset.getSum('"+_h+"_ORIBDGT_AMT')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+1,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+1,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+1,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+2,"text","expr:dataset.getSum('"+_h+"_EXECUT_BUDGET_AM')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+2,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+2,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+2,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+3,"text","expr:dataset.getSum('"+_h+"_TRGET_EXECUT_AM')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+3,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+3,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+3,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+4,"text","expr:dataset.getSum('"+_h+"_CYFD_EXPNDTR_AM')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+4,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+4,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+4,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+5,"text","expr:dataset.getSum('"+_h+"_ORI_EXPNDTR_AM')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+5,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+5,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+5,"padding","0 5 0 0");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+6,"text","expr:dataset.getSum('"+_h+"_DECSN_AMOUNT')");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+6,"displaytype","number");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+6,"align","right middle");this.grd_elpdExcutTrgetSttus.setCellProperty("Summ",_e+6,"padding","0 5 0 0");}this.grd_elpdExcutTrgetSttus.set_enableredraw(true);break;}}};this.div_Cont_btn_sendMssage_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("msgPopup",680,300,"",_c,"mis_bdg::BDG050102_P01.xfdl","fn_popupCallback",true);};});this.on_initEvent=function(){this.ds_elpdExcutTrgetSttus.addEventHandler("onrowposchanged",this.ds_executBudget_onrowposchanged,this);this.ds_elpdExcutTrgetSttus.addEventHandler("canrowposchange",this.ds_executBudget_canrowposchange,this);this.addEventHandler("onload",this.BDG050103_onload,this);this.addEventHandler("oninit",this.BDG050103_oninit,this);this.btn_sendMssage.addEventHandler("onclick",this.div_Cont_btn_sendMssage_onclick,this);};this.loadIncludeScript("BDG050103.xfdl");};})();