﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC030110");this.set_classname("UI_ACC030110");this.set_titletext("매출세금계산서현황");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"PBLICTE_FROM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PBLICTE_TO_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BCNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PUCHAS_SELNG_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_vatSttus",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"REGS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"TOTL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_BUSS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_BUSS_CONS\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CHRG_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CHRG_POST1\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CHRG_TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUYR_CHRG_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"MODY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BFO_ISSU_SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc036",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc030",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">발행일자</Col><Col id=\"colId\">PBLICTE_FROM_DE</Col><Col id=\"from\">PBLICTE_FROM_DE</Col><Col id=\"to\">PBLICTE_TO_DE</Col><Col id=\"notNull\">Y</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"msgId\">발행일자</Col><Col id=\"colId\">PBLICTE_TO_DE</Col><Col id=\"from\">PBLICTE_FROM_DE</Col><Col id=\"to\">PBLICTE_TO_DE</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_acc037",this);_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">기재사항의 착오·정정</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">공급가액 변동</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">환입</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">계약의 해제</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">내국신용장 사후 개설</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NM\">착오에 의한 이중발급</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_SEARCH","absolute","0","0",null,"59","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.set_applystyletype("cascade,keep");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE00","absolute","15","31","77","21",null,null,this.div_SEARCH);_a.set_taborder("6");_a.set_text("사업자번호");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","5","77","21",null,null,this.div_SEARCH);_a.set_taborder("7");_a.set_text("작성일");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","97","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("0");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("Calendar01","absolute","214","5","100","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("1");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static00","absolute","199","5","13","21",null,null,this.div_SEARCH);_a.set_taborder("17");_a.set_text("~");_a.style.set_align("center");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE06","absolute","652","5","78","21",null,null,this.div_SEARCH);_a.set_taborder("22");_a.set_text("계산서 종류");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","745","5","234","21",null,null,this.div_SEARCH);this.div_SEARCH.addChild(_a.name,_a);_a.set_taborder("2");_a.set_innerdataset("ds_acc036");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Edit("Edit00","absolute","97","32","217","21",null,null,this.div_SEARCH);_a.set_taborder("23");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static09","absolute","419","0","15","57",null,null,this.div_SEARCH);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE05","absolute","329","32","78","21",null,null,this.div_SEARCH);_a.set_taborder("25");_a.set_text("거래처명");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","435","32","202","21",null,null,this.div_SEARCH);_a.set_taborder("26");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE02","absolute","329","5","94","21",null,null,this.div_SEARCH);_a.set_taborder("27");_a.set_text("수신자 이메일");_a.set_cssclass("sta_WFSA_Label");this.div_SEARCH.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","435","5","202","21",null,null,this.div_SEARCH);_a.set_taborder("28");this.div_SEARCH.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","735",null,null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","735","0",null,this);_a.set_taborder("17");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","59","1031","10",null,null,this);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title01","absolute","0","69","140","19",null,null,this);_a.set_taborder("19");_a.set_text("매출세금계산서 현황");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","0","88","1031","5",null,null,this);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","93",null,null,"28","0",this);_a.set_taborder("2");_a.set_binddataset("ds_vatSttus");_a.set_autofittype("none");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작성일\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"종사업장번호\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"대표자\"/><Cell col=\"5\" text=\"총 금액\"/><Cell col=\"6\" text=\"공급가액\"/><Cell col=\"7\" text=\"부가세액\"/><Cell col=\"8\" text=\"과세구분\"/><Cell col=\"9\" text=\"세금계산서종류\"/><Cell col=\"10\" text=\"업종\"/><Cell col=\"11\" text=\"업태\"/><Cell col=\"12\" text=\"주소\"/><Cell col=\"13\" text=\"담당자 명\"/><Cell col=\"14\" text=\"담당자 부서\"/><Cell col=\"15\" text=\"담당자 전화번호\"/><Cell col=\"16\" text=\"담당자이메일\"/><Cell col=\"17\" text=\"국세청 신고상태\"/><Cell col=\"18\" text=\"신고문서 수정사유\"/><Cell col=\"19\" text=\"신고문서 고유코드\"/><Cell col=\"20\" text=\"신고제외여부\"/><Cell col=\"21\" text=\"신고결과\"/></Band><Band id=\"body\"><Cell text=\"bind:REGS_DATE\"/><Cell col=\"1\" text=\"bind:BUYR_CORP_NO\" mask=\"expr:String(SELR_CORP_NO).length == 10 ? &quot;###-##-#####&quot; : (String(BIZRNO).length == 13 ? &quot;######-#######&quot; : &quot;&quot;)\"/><Cell col=\"2\" text=\"bind:BUYR_CODE\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:BUYR_CORP_NM\"/><Cell col=\"4\" text=\"bind:BUYR_CEO\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTL_AMT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHRG_AMT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAX_AMT\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:TAX_TYPE\" combodataset=\"ds_acc036\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:BUYR_BUSS_TYPE\"/><Cell col=\"11\" text=\"bind:BUYR_BUSS_CONS\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:BUYR_ADDR\"/><Cell col=\"13\" text=\"bind:BUYR_CHRG_NM1\"/><Cell col=\"14\" text=\"bind:BUYR_CHRG_POST1\"/><Cell col=\"15\" text=\"bind:BUYR_CHRG_TEL1\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:BUYR_CHRG_EMAIL1\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:TAX_TYPE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:MODY_CODE\" combodataset=\"ds_acc037\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"19\" text=\"bind:BFO_ISSU_SEQNO\"/><Cell col=\"20\" text=\"bind:ERR_CD\"/><Cell col=\"21\" text=\"bind:ERR_MSG\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_excelDn","absolute",null,"69","25","19","28",null,this);_a.set_taborder("1");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_SEARCH,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.set_applystyletype("cascade,keep");_b.set_cssclass("div_WFSA_Box");});this.div_SEARCH.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("UI_ACC030110");_b.set_titletext("매출세금계산서현황");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.Calendar00","value","ds_cond","PBLICTE_FROM_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SEARCH.Calendar01","value","ds_cond","PBLICTE_TO_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SEARCH.Combo01","value","ds_cond","PUCHAS_SELNG_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_SEARCH.Edit00","value","ds_cond","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_SEARCH.Edit02","value","ds_cond","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_SEARCH.Edit01","value","ds_cond","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC030110.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC030110.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC030110.xfdl",function(){this.ACC030110_oninit=function(_a,_b){this.fn_init_form();this.fn_misFormInit(this);this.fn_init_dataset();};this.ACC030110_onload=function(_a,_b){var _c=[["ds_acc036","ACC036","Y","A","B","전체"],["ds_acc037","ACC037","Y","A","B"]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.today();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"PBLICTE_FROM_DE",_a.substr(0,4)+"0101");this.ds_cond.setColumn(0,"PBLICTE_TO_DE",_a);};this.fn_init_dataset=function(){};this.fn_search=function(){if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return false;}this.fn_transaction("vatSttusList");};this.fn_print=function(){var _a=new this.cf_Opts;_a.setToolbar(false);_a.setScale(100);_a.setArgs("title","부가세현황");_a.setSaveFilename("부가세현황");_a.clearLocalDs();_a.setGrid(this.grd);_a.setReportPath("/common/hscoLandscapeA3.jrf");var _b={arg_0:this,opts:_a};this.gfn_popup("Popup_Report",884,735,"부가세현황",_b,"common::frmReportPopup.xfdl","");};this.fn_transaction=function(_a){switch(_a){case "vatSttusList":var _b="hsco/mis/acc/ACC030110/vatSttusList.do";var _c="input1=ds_cond";var _d="ds_vatSttus=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){switch(_a){case "vatSttusList":break;default:break;}this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "vatSttusList":break;default:break;}}};this.btn_excelDn_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"exportExl");};});this.on_initEvent=function(){this.ds_acc036.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_acc030.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC030110_onload,this);this.addEventHandler("oninit",this.ACC030110_oninit,this);this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);};this.loadIncludeScript("ACC030110.xfdl");};})();