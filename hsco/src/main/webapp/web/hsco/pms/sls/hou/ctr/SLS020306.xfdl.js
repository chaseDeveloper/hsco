﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020306");this.set_classname("SLS020306");this.set_titletext("국민주택상환내역");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_DET\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_DEF\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_SPOT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_PRNCPAL\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_INTR\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cmbHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_kjfRpayList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBNCD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_ACNUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FNNC_INSTT_SPOT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRRW_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENDW_PRNCPAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ENDW_INTR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RCPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"KJF_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"37","28",null,this);_a.set_taborder("4");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_houseCodeSh","absolute","687","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_receipt_De","absolute","682","3","64","21",null,null,this.div_search);_a.set_taborder("7");_a.set_text("영수일자");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_contractNm","absolute","688","7","64","21",null,null,this.div_search);_a.set_taborder("2");_a.set_text("계좌번호");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_contractNm","absolute","752","7","247","21",null,null,this.div_search);_a.set_taborder("3");_a.set_lengthunit("utf8");_a.set_maxlength("20");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","830","2","21","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("~");_a.style.set_align("center middle");_a.style.set_font("bold 9 Verdana");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Static("sta_receipt_De00","absolute","707","5","64","21",null,null,this.div_search);_a.set_taborder("5");_a.set_text("상환년월");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Radio("rdo_00","absolute","855","2","174","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("rdo_00_innerdataset",this.div_search.rdo_00);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">주택코드별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">월별</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("4");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.set_value("1");_a.set_direction("vertical");_a.set_visible("false");_a.set_index("0");_a=new CheckBox("chk_01","absolute","895","2","120","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("잔액 0원 제외");_a.set_tooltiptype("hover");_a.set_tooltiptext("tklhytyty");_a.set_visible("false");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCal","absolute","771","5","84","21",null,null,this.div_search);_a.set_taborder("6");_a.set_visible("false");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCalSt","absolute","746","2","84","21",null,null,this.div_search);_a.set_taborder("8");_a.set_visible("false");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Div("div_monCalEn","absolute","851","2","84","21",null,null,this.div_search);_a.set_taborder("9");_a.set_visible("false");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","751","5","267","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@ds_cmbHouseCodeList");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_visible("false");_a.set_index("-1");_a=new Edit("edt_pbncdNo","absolute","84","6","162","21",null,null,this.div_search);_a.set_taborder("19");this.div_search.addChild(_a.name,_a);_a=new Button("btn_roadNameAddrPopup","absolute","220","6","26","21",null,null,this.div_search);_a.set_taborder("20");_a.set_cssclass("btn_WF_Search");this.div_search.addChild(_a.name,_a);_a=new Static("sta_receipt_De01","absolute","13","6","64","21",null,null,this.div_search);_a.set_taborder("21");_a.set_text("계좌번호");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","266","7","95","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("상환일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_bgnDeRcptDe","absolute","338","6","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("23");_a.set_dateformat("yyyy-MM-dd");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a=new Calendar("cal_endRcptDe","absolute","474","6","116","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("24");_a.set_dateformat("yyyy-MM-dd");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a=new Static("Static27","absolute","454","9","20","16",null,null,this.div_search);_a.set_taborder("25");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","68",null,null,"28","0",this);_a.set_taborder("7");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","0",null,null,"0","8",this.div_work);_a.set_taborder("0");_a.set_binddataset("ds_kjfRpayList");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"계좌번호\"/><Cell col=\"2\" text=\"계좌명\"/><Cell col=\"3\" text=\"상환일자\"/><Cell col=\"4\" text=\"상환구분\"/><Cell col=\"5\" text=\"원금\"/><Cell col=\"6\" text=\"이자\"/><Cell col=\"7\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ACNUTNO\"/><Cell col=\"2\" text=\"bind:BRRW_ACNUT_NM\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:RCPT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:KJF_GB\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ENDW_PRNCPAL\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ENDW_INTR\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:ENDW_PRNCPAL + ENDW_INTR\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;ENDW_PRNCPAL&quot;)\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;ENDW_INTR&quot;)\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;ENDW_PRNCPAL&quot;) + dataset.getSum(&quot;ENDW_INTR&quot;)\" mask=\"#,##0\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("dtl_guide12","absolute","0","43",null,"10","28",null,this);_a.set_taborder("8");_a.set_text("10");_a.set_visible("false");_a.style.set_background("hotpink");_a.style.set_color("#333333ff");_a.style.set_align("center middle");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Layout("default","",0,37,this.div_search,function(_c){_c.set_taborder("4");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_c){_c.set_taborder("7");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("SLS020306");_c.set_titletext("국민주택상환내역");});this.addLayout(_a.name,_a);_a=new BindItem("item23","div_search.edt_pbncdNo","value","ds_cond00","PBNCD_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_search.cal_bgnDeRcptDe","value","ds_cond00","RCPT_DEF");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.cal_endRcptDe","value","ds_cond00","RCPT_DET");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("SLS020306.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020306.xfdl",function(){this.HOUSE_SE="R1,R2,R3,R9";this.SLS020306_oninit=function(_a,_b){this.fn_init_allGrid(this);this.fn_init_form();this.fn_init_dataset();};this.SLS020306_onload=function(_a,_b){this.fn_loadComboNonCodeTbl();this.fn_setDefaultInfo();};this.fn_loadComboNonCodeTbl=function(_a,_b){this.DEFAULT_DATE_FIRST=this.dateUtils.format(this.gfn_today(),"yyyy")+"0101";this.ds_cond00.setColumn(0,"RCPT_DEF",this.DEFAULT_DATE_FIRST);this.ds_cond00.setColumn(0,"RCPT_DET",this.gfn_today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.fn_transaction("selectKjfRpayList");};this.fn_transaction=function(_a){switch(_a){case "selectKjfRpayList":var _b="hsco/pms/sls/hou/ctr/SLS020306/selectKjfRpayList.do";var _c="input1=ds_cond00";var _d="ds_kjfRpayList=output1";break;}if(this.fn_validate_tranasaction(_a,_b,_c,_d)==false){return;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "selectKjfRpayList":break;}}else{var _d=null;switch(_a){case "cmbHouseCodeList":_d={type:this.pmsUtil.PROMPT_ALL,noNullText:"코드없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseCode,_d,true);break;case "selectKjfRpayList":break;}}};this.fn_setDefaultInfo=function(){this.div_search.div_monCal.fn_setBindValue(this,"div_search.div_monCal","ds_cond00","REQST_YM",this.DEFAULT_YM);};this.div_search_btn_pbncd_onclick=function(_a,_b){var _c={arg_0:this};this.gfn_popup("fun020301_p01",1000,700,"공사채조회",_c,"mis_fun::FUN020301_P01.xfdl","fn_PopupPbncdCallback");};this.fn_PopupPbncdCallback=function(_a,_b){var _c=new Dataset();var _d=_c.loadXML(_b);if(_d){this.ds_cond00.setColumn(0,"PBNCD_NO",_c.getColumn(0,"PBNCD_NO"));this.ds_cond00.setColumn(0,"BRRW_ACNUT_NM",_c.getColumn(0,"BRRW_ACNUT_NM"));}};});this.on_initEvent=function(){this.addEventHandler("onload",this.SLS020306_onload,this);this.addEventHandler("oninit",this.SLS020306_oninit,this);this.div_search.rdo_00.addEventHandler("onitemclick",this.Radio00_onitemclick,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.div_search.btn_roadNameAddrPopup.addEventHandler("onclick",this.div_search_btn_pbncd_onclick,this);this.div_search.cal_bgnDeRcptDe.addEventHandler("canchange",this.div_hcntCtrSeizrInfo_cal_bgnDeSubls_canchange,this);this.div_search.cal_endRcptDe.addEventHandler("canchange",this.div_hcntCtrSeizrInfo_cal_endDeSubls_canchange,this);};this.loadIncludeScript("SLS020306.xfdl");this.loadPreloadList();};})();