﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020101_P01");this.set_classname("SLS020101_P01");this.set_titletext("분납처리");this._setFormPosition(0,0,1102,539);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"STRING\" size=\"256\"/><Column id=\"RATIO\" type=\"STRING\" size=\"256\"/><Column id=\"SL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_houPayBaisList</Col><Col id=\"colId\">CNTRCTR_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">계약번호</Col></Row><Row><Col id=\"compId\">ds_houPayBaisList</Col><Col id=\"colId\">PAY_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부코드</Col></Row><Row><Col id=\"compId\">ds_houPayBaisList</Col><Col id=\"colId\">PAYAMT</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">납부금액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houPayCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"256\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"256\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_PRARNDE\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"STRING\" size=\"256\"/><Column id=\"NPYAMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houPayBaisList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"STRING\" size=\"256\"/><Column id=\"NPYAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SUPLY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YRINS_SALE_INTR\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_PRARNDE\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTPT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMTHD\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OCR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LEV_DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRMNAT_UNUSED_AT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DECSN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LTTOT_RENT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"TMPR_RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TMPR_RCIV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_ODR\" type=\"STRING\" size=\"256\"/><Column id=\"POINT_DSCNT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_DSCNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_DSCNT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_DSCNT_SUPLY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_DSCNT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_DSCNT_DAYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"ARRRG_DSCNT_INTRT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_PREARNGE_DE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_payCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySn",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_InspyIntrInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PAYAMT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("sta_popTitle","absolute","4","2","1090","34",null,null,this);_a.set_taborder("0");_a.set_text("분납처리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","4","36","1090","15",null,null,this);_a.set_taborder("1");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","12","53","205","21",null,null,this);_a.set_taborder("2");_a.set_text("분납처리");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","4","76","1090","5",null,null,this);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_confirm","absolute","1044","51","50","25",null,null,this);_a.set_taborder("4");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","4","81","1090","33",null,null,this);_a.set_taborder("5");_a.set_text("Div00");_a.style.set_background("#f9fbffff");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","17","5","64","22",null,null,this.div_search);_a.set_taborder("44");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","314","5","53","21",null,null,this.div_search);_a.set_taborder("45");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","367","5","52","22",null,null,this.div_search);_a.set_taborder("46");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","421","5","52","22",null,null,this.div_search);_a.set_taborder("47");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","488","5","64","22",null,null,this.div_search);_a.set_taborder("48");_a.set_text("계약자명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_cstmrNm","absolute","552","5","120","22",null,null,this.div_search);_a.set_taborder("49");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chk_chk_grnt","absolute","711","5","98","21",null,null,this.div_search);_a.set_taborder("53");_a.set_text("분양가보장제");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","83","5","216","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("56");_a.set_readonly("true");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_cssclass("cmb_WF_Readonly");_a=new Button("btn_xClose","absolute","1067","9","20","20",null,null,this);_a.set_taborder("6");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute","988","51","50","25",null,null,this);_a.set_taborder("7");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_inspyCancl","absolute","904","51","78","25",null,null,this);_a.set_taborder("8");_a.set_text("분납취소");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","4","114","1090","10",null,null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","4","142","1090","5",null,null,this);_a.set_taborder("13");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","12","124","130","19",null,null,this);_a.set_taborder("14");_a.set_text("납부정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_ladPayStdrList","absolute","4","147","1090","385",null,null,this);_a.set_taborder("15");_a.set_binddataset("ds_houPayBaisList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"136\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"납부코드\"/><Cell col=\"3\" text=\"납부구분\"/><Cell col=\"4\" text=\"납부순번\"/><Cell col=\"5\" text=\"납부기한일\"/><Cell col=\"6\" text=\"납부예정일\"/><Cell col=\"7\" text=\"납부금액\"/><Cell col=\"8\" text=\"연부이자\"/><Cell col=\"9\" text=\"연체(-할인)\"/><Cell col=\"10\" text=\"POINT/차등선납할인\"/><Cell col=\"11\" text=\"미납금액\"/><Cell col=\"12\" text=\"참고사항\"/><Cell col=\"13\" text=\"조정일자\"/><Cell col=\"14\" text=\"최종수정자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" expr=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:PAY_CODE\" combodataset=\"ds_payCode\" combocodecol=\"CODE\" combodatacol=\"ALL_CODE_NM\" combodisplay=\"display\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PAY_SE\" combodataset=\"ds_paySe\" combocodecol=\"CODE\" combodatacol=\"ALL_CODE_NM\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PAY_SN\" combodataset=\"ds_paySn\" combocodecol=\"CODE\" combodatacol=\"ALL_CODE_NM\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:PAY_PRARNDE\" calendardisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PAYAMT\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:YRINS_SALE_INTR\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:ARRRG_AMOUNT\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:POINT_DSCNT_AM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NPYAMOUNT\"/><Cell col=\"12\" text=\"bind:RM\"/><Cell col=\"13\" text=\"bind:MDAT_DE\"/><Cell col=\"14\" text=\"bind:UPDUSR_ID\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_inspyProcess","absolute","820","51","78","25",null,null,this);_a.set_taborder("17");_a.set_text("분납처리");_a.set_cssclass("btn_WF_CRUD");_a.getSetter("userdata").set("fn_search");this.addChild(_a.name,_a);_a=new Button("btn_calc","absolute","958","123","135","19",null,null,this);_a.set_taborder("19");_a.set_text("납부금액계산 및 적용");_a.set_cssclass("btn_WF_Process");this.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","703","121","64","24",null,null,this);_a.set_taborder("20");_a.set_text("수납금액");_a.set_cssclass("sta_WFSA_Label");this.addChild(_a.name,_a);_a=new MaskEdit("mse_rcivAmount","absolute","769","123","183","21",null,null,this);_a.set_taborder("21");_a.set_mask("###,###,###,###,##0");_a.set_limitbymask("both");this.addChild(_a.name,_a);_a=new Layout("default","",1090,33,this.div_search,function(_b){_b.set_taborder("5");_b.set_text("Div00");_b.style.set_background("#f9fbffff");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1102,539,this,function(_b){_b.set_classname("SLS020101_P01");_b.set_titletext("분납처리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_search.cmb_houseCode","value","ds_cond00","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.edt_dong","value","ds_cond00","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_ho","value","ds_cond00","HO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.edt_cstmrNm","value","ds_cond00","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_search.chk_chk_grnt","value","ds_cond00","GRNT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS020208_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS020208_P01.xfdl",function(){this.callback=null;this.gPayamt=0;this.SLS020101_P01_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS020101_P01_onload=function(_a,_b){this.fn_loadCombo();};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[{OUT_PUT:"ds_payCode",GRP_CODE:"HOU0A1",USE_AT:"1"},{OUT_PUT:"ds_paySe",GRP_CODE:"HOU0A8",USE_AT:"1"},{OUT_PUT:"ds_paySn",GRP_CODE:"HOU0A9",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_a);var _b={};_b["USE_AT"]="1";_b["HOUSE_SE"]="S1,S3,S5,S9";this.pmsUtil.getHouseCode(_b,"ds_houseCode","fn_callbackAfter");};this.fn_callbackAfter=function(){this.callback=this.parent.callback;this.ds_cond00.setColumn(0,"CNTRCTR_NO",this.parent.cntrctrNo);this.ds_cond00.setColumn(0,"HOUSE_CODE",this.parent.houseCode);this.ds_cond00.setColumn(0,"DONG",this.parent.dong);this.ds_cond00.setColumn(0,"HO",this.parent.ho);this.ds_cond00.setColumn(0,"HOUSE_TY_CODE",this.parent.houseTyCode);this.ds_cond00.setColumn(0,"CSTMR_NM",this.parent.cntrctrNm);this.fn_search();};this.fn_search=function(){this.fn_transaction("selectInspyIntrList");};this.fn_transaction=function(_a){switch(_a){case "selectInspyIntrList":var _b="hsco/pms/sls/hou/ctr/SLS020101/selectInspyIntrList.do";var _c="input1=ds_cond00";var _d="ds_houPayBaisList=output1";break;case "saveInspyIntrList":var _b="hsco/pms/sls/hou/ctr/SLS020101/saveInspyIntrList.do";var _c="input1=ds_houPayBaisList:U";var _d="";break;case "selectInspyIntrInfo":var _b="hsco/pms/sls/hou/ctr/SLS020101/selectInspyIntrInfo.do";var _c="input1=ds_cond01";var _d="ds_InspyIntrInfo=output1";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;var _f=null;switch(_a){case "selectInspyIntrList":break;case "saveInspyIntrList":this.fn_search();break;case "selectInspyIntrInfo":this.btn_calc_onclick_callback();break;default:break;}}else{this.gfn_callBackMsg(_a,_b,_c);}};this.btn_inspyProcess_onclick=function(_a,_b){var _c={};_c["viewRow"]="expr:CHK == '1'";var _d=this.pmsUtil.datasetToObject(this.ds_houPayBaisList,_c,true);var _e=_d==null?0:_d.length;if(_e==0){this.alert("선택된 자료가없습니다.");return;}if(_e>=2){this.alert("분납처리 대상 1건만 선택하십시오.");return;}for(var _i=0;_i<_e;_i++ ){var _f=_d[_i];_f["CHK"]="0";_f["PAY_SE"]="2";_f["PAY_PRARNDE"]=this.gfn_today();_f["PAYAMT"]="";_f["YRINS_SALE_INTR"]="";_f["ARRRG_AMOUNT"]="";_f["POINT_DSCNT_AM"]="";_f["NPYAMOUNT"]="";_f["RM"]="";_f["MDAT_DE"]="";_f["UPDUSR_ID"]="";this.pmsUtil.addMapToDataset(this.ds_houPayBaisList,_f);}var _g=this.ds_houPayBaisList.findRow("CHK","1");var _h=this.ds_houPayBaisList.getColumn(_g,"PAY_SN");var _h=Number(_h)+1;this.ds_houPayBaisList.setColumn(_g,"PAY_SN",_h);this.gPayamt=this.ds_houPayBaisList.getColumn(_g,"PAYAMT");};this.btn_calc_onclick=function(_a,_b){var _c=this.ds_houPayBaisList.findRow("CHK","1");var _d=this.ds_houPayBaisList.getRowCount()-1;var _e=this.ds_houPayBaisList.getColumn(_c,"HOUSE_CODE");var _f=this.ds_houPayBaisList.getColumn(_d,"PAY_PRARNDE");var _g=this.ds_houPayBaisList.getColumn(_c,"PAY_TMLMT");var _h=this.mse_rcivAmount.value;this.ds_cond01.setColumn(0,"SE","A");this.ds_cond01.setColumn(0,"HOUSE_CODE",_e);this.ds_cond01.setColumn(0,"TO_DAY",_f);this.ds_cond01.setColumn(0,"PAY_TMLMT",_g);this.ds_cond01.setColumn(0,"PAYAMT",_h);this.ds_cond01.setColumn(0,"RATIO",0);this.ds_cond01.setColumn(0,"SL_SE","S");if(this.comUtils.isNull(_h)){this.alert("수납금액을 입력하십시오.");this.mse_rcivAmount.setFocus();return;}this.fn_transaction("selectInspyIntrInfo");};this.btn_calc_onclick_callback=function(){var _a=this.ds_houPayBaisList.findRow("CHK","1");var _b=this.ds_houPayBaisList.getRowCount()-1;var _c=Number(this.mse_rcivAmount.value);var _d=Number(this.ds_InspyIntrInfo.getColumn(0,"PAYAMT"));var _e=this.gPayamt-_c;var _f=_c-_d;this.ds_houPayBaisList.setColumn(_a,"PAYAMT",_e);this.ds_houPayBaisList.setColumn(_b,"PAYAMT",_d);this.ds_houPayBaisList.setColumn(_b,"ARRRG_AMOUNT",_f);for(var _l=0;_l<this.ds_houPayBaisList.rowcount;_l++ ){var _g=this.ds_houPayBaisList.getColumn(_l,"PAYAMT");var _h=this.ds_houPayBaisList.getColumn(_l,"YRINS_SALE_INTR");var _i=this.ds_houPayBaisList.getColumn(_l,"ARRRG_AMOUNT");var _j=this.ds_houPayBaisList.getColumn(_l,"POINT_DSCNT_AM");_g=this.comUtils.isNullEmpty(_g)?0:_g;_h=this.comUtils.isNullEmpty(_h)?0:_h;_i=this.comUtils.isNullEmpty(_i)?0:_i;_j=this.comUtils.isNullEmpty(_j)?0:_j;var _k=Number(_g)+Number(_h)+Number(_i)+Number(_j);this.ds_houPayBaisList.setColumn(_l,"NPYAMOUNT",_k);}};this.btn_inspyCancl_onclick=function(_a,_b){var _c={};_c["viewRow"]="expr:CHK == '1'";var _d=this.pmsUtil.datasetToObject(this.ds_houPayBaisList,_c,true);var _e=_d==null?0:_d.length;if(_e==0){this.alert("선택된 자료가없습니다.");return;}if(_e!=2){this.alert("분납대상자료, 분납취소자료 2건만 선택 하십시오.");return;}var _f=null;var _g=null;var _h=null;var _i=null;var _j=null;for(var _p=0;_p<_e;_p++ ){var _k=_d[_p];if(_p==0){_f=_k["PAY_NO"].substr(0,4);if(_k["PAY_NO"]==_f+"0"){_h=_k["PAY_NO"];_i=_p;}else{_j=_p;}continue;}if(_p==1){_g=_k["PAY_NO"].substr(0,4);if(_k["PAY_NO"]==_g+"0"){_h=_k["PAY_NO"];_i=_p;}else{_j=_p;}}if(_f!=_g){this.alert("동일한 납부코드가 아니면 [취소]할 수 없습니다");return;}}this.alert("orgPayNo = "+_h);this.alert("srcRow = "+_j);this.alert("trgRow = "+_i);var _l=this.ds_houPayBaisList.getColumn(_i,"PAY_SN");var _m=this.ds_houPayBaisList.getColumn(_j,"NPYAMOUNT");var _n=this.ds_houPayBaisList.getColumn(_i,"NPYAMOUNT");_l=Number(_l)-1;_m=this.comUtils.isNullEmpty(_m)?0:_m;_n=this.comUtils.isNullEmpty(_n)?0:_n;var _o=Number(_m)+Number(_n);this.ds_houPayBaisList.setColumn(_i,"PAY_SN",_l);this.ds_houPayBaisList.setColumn(_i,"PAYAMT",_o);this.ds_houPayBaisList.setColumn(_i,"NPYAMOUNT",_o);this.ds_houPayBaisList.deleteRow(_j);};this.btn_save_onclick=function(_a,_b){if(!this.gfn_checkValidation(this.ds_houPayBaisList,this.ds_validation00)){return;}this.fn_transaction("saveInspyIntrList");};this.btn_confirm_onclick=function(_a,_b){if(this.fn_confirm()==true){this.close();}};this.btn_xClose_onclick=function(_a,_b){this.close();};this.fn_confirm=function(){var _a=this.opener;if(_a[this.callback]==null){_a=this.opener.div_workFrame.div_main;}var _b=_a[this.callback]();return _b;};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020101_P01_oninit,this);this.addEventHandler("onload",this.SLS020101_P01_onload,this);this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);this.btn_xClose.addEventHandler("onclick",this.btn_xClose_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_inspyCancl.addEventHandler("onclick",this.btn_inspyCancl_onclick,this);this.btn_inspyProcess.addEventHandler("onclick",this.btn_inspyProcess_onclick,this);this.btn_calc.addEventHandler("onclick",this.btn_calc_onclick,this);};this.loadIncludeScript("SLS020208_P01.xfdl");};})();