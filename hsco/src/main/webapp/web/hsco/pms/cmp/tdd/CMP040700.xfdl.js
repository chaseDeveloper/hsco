﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("frm_CMP040700");this.set_classname("CMP020501");this.set_titletext("보상금지불조서");this._setFormPosition(0,0,1059,735);}this.style.set_background("#ffffffff");_a=new Dataset("DS_TBCMP_THING_WTNNC",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RQEST_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ST\" type=\"INT\" size=\"256\"/><Column id=\"FULL_LOCPLC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STRCT_STNDRD\" type=\"STRING\" size=\"256\"/><Column id=\"AR_LGSTR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AR_INCRPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RWMNY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RQEST_BLCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RQEST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"PYMNT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"BNDE_APPLC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"LNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLNO\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"THING_SN\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_RUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_RQEST_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NMASNM_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM_1\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM_2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_LOCPLC_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_THING_CL",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_LNDCGR_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_UNIT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_BSNS_AREA_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_BSNS_AREA_CODE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">사업지구</Col></Row><Row><Col id=\"compId\">DS_TBCMP_THING_WTNNC</Col><Col id=\"colId\">UNTPC</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">결정단가</Col></Row><Row><Col id=\"compId\">DS_TBCMP_THING_WTNNC</Col><Col id=\"colId\">RWMNY</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">결정금액</Col></Row><Row><Col id=\"compId\">DS_TBCMP_THING_OWNER</Col><Col id=\"colId\">RWMNY</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">금액</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_THING_CL2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION0\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"109","28",null,this);_a.set_taborder("0");_a.set_text("Div00");_a.style.set_background("#f9fbffff");_a.style.set_border("1 solid #a8c2e2ff");_a.set_cssclass("div_SearchBox");this.addChild(_a.name,_a);_a=new Static("sta_BSNS_AREA_CODE","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("8");_a.set_text("사업지구");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","276","5","51","21",null,null,this.div_search);_a.set_taborder("9");_a.set_text("소재지");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_RQEST_DE","absolute","15","80","64","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("청구일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ST_RQEST_DE","absolute","79","80","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("3");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new Static("sta_NM","absolute","15","30","51","21",null,null,this.div_search);_a.set_taborder("18");_a.set_text("소유자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_NM","absolute","79","30","182","21",null,null,this.div_search);_a.set_taborder("2");this.div_search.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM","absolute","276","30","64","21",null,null,this.div_search);_a.set_taborder("20");_a.set_text("주민번호");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_IHIDNUM","absolute","340","30","126","21",null,null,this.div_search);_a.set_taborder("7");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ED_RQEST_DE","absolute","196","80","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("4");_a.set_dateformat("yyyy-MM-dd");_a=new Static("sta_BSNS_AREA_CODE01","absolute","181","80","11","22",null,null,this.div_search);_a.set_taborder("23");_a.set_text("~");_a.set_cssclass("sta_Search");this.div_search.addChild(_a.name,_a);_a=new Static("sta_PYMNT_DE","absolute","15","55","64","21",null,null,this.div_search);_a.set_taborder("24");_a.set_text("지급일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ST_PYMNT_DE","absolute","79","55","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a=new Static("sta_BSNS_AREA_CODE03","absolute","181","55",null,"22","837",null,this.div_search);_a.set_taborder("26");_a.set_text("~");_a.set_cssclass("sta_Search");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_ED_PYMNT_DE","absolute","196","55","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a=new Combo("cmb_BSNS_AREA_CODE","absolute","79","5","182","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("0");_a.set_innerdataset("DS_BSNS_AREA_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("FULL_CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a=new Combo("cmb_LOCPLC_CODE","absolute","340","5","160","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("1");_a.set_innerdataset("@DS_LOCPLC_CODE");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new CheckBox("chk_SELECT","absolute","523","30","47","18",null,null,this.div_search);_a.set_taborder("28");_a.set_text("전체");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","508","5","67","21",null,null,this.div_search);_a.set_taborder("29");_a.set_text("물건분류");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_THING_CL","absolute","572","5","450",null,null,"5",this.div_search);_a.set_taborder("30");_a.style.set_border("1 solid #a8c2e2ff");_a.style.set_font("9 Dotum");_a.set_dragscrolltype("vert");_a.set_url("pms_cmp_formLib::CmpMultiCheckBar.xfdl");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chk_BIGO_YN","absolute","451","80","47","18",null,null,this.div_search);_a.set_taborder("31");_a.set_text("비고");_a.set_value("true");this.div_search.addChild(_a.name,_a);_a=new CheckBox("chk_TEL_YN","absolute","363","80","76","18",null,null,this.div_search);_a.set_taborder("32");_a.set_text("전화번호");_a.set_value("true");this.div_search.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0","109",null,null,"28","0",this);_a.set_taborder("1");_a.set_text("Div00");_a.style.set_background("#ffffffff");this.addChild(_a.name,_a);_a=new Grid("grd_DS_TBCMP_THING_WTNNC","absolute","0","36",null,null,"0","0",this.div_WORK);_a.set_taborder("4");_a.set_binddataset("DS_TBCMP_THING_WTNNC");_a.set_cssclass("grd02_WF_blue");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"230\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"73\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"소재지\"/><Cell col=\"2\" rowspan=\"2\" text=\"물건종류\"/><Cell col=\"3\" rowspan=\"2\" text=\"구조및규격\"/><Cell col=\"4\" colspan=\"3\" text=\"면적/수량\"/><Cell col=\"7\" rowspan=\"2\" text=\"단위\"/><Cell col=\"8\" colspan=\"2\" text=\"매수가격\"/><Cell col=\"10\" colspan=\"7\" text=\"지급액\"/><Cell col=\"17\" colspan=\"3\" text=\"소유자\"/><Cell col=\"20\" colspan=\"3\" text=\"결재\"/><Cell row=\"1\" col=\"4\" text=\"지적\"/><Cell row=\"1\" col=\"5\" text=\"편입\"/><Cell row=\"1\" col=\"6\" text=\"소유\"/><Cell row=\"1\" col=\"8\" text=\"단가\"/><Cell row=\"1\" col=\"9\" text=\"금액\"/><Cell row=\"1\" col=\"10\" text=\"계좌번호\"/><Cell row=\"1\" col=\"11\" text=\"은행\"/><Cell row=\"1\" col=\"12\" text=\"지급액\"/><Cell row=\"1\" col=\"13\" text=\"잔액\"/><Cell row=\"1\" col=\"14\" text=\"청구일자\"/><Cell row=\"1\" col=\"15\" text=\"지급일자\"/><Cell row=\"1\" col=\"16\" text=\"비고\"/><Cell row=\"1\" col=\"17\" text=\"성명\"/><Cell row=\"1\" col=\"18\" text=\"연락처\"/><Cell row=\"1\" col=\"19\" text=\"주소\"/><Cell row=\"1\" col=\"20\" text=\"담당\"/><Cell row=\"1\" col=\"21\" text=\"보상P/L\"/><Cell row=\"1\" col=\"22\" text=\"도시개발처장\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(dataset.getRowLevel(currow) == 1 ? 'lightblue' : '');background2:EXPR(dataset.getRowLevel(currow) == 1 ? 'lightblue' : '');\" expr=\"expr:dataset.getRowLevel(currow) == 1 ? '합계' : currow + 1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:FULL_LOCPLC_CODE_NM\" suppress=\"1\" suppressalign=\"first\" combodataset=\"DS_LOCPLC_CODE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" style=\"align:left;background: ;\" text=\"bind:CODE_NM\"/><Cell col=\"3\" style=\"align:left;background: ;\" text=\"bind:STRCT_STNDRD\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:AR_LGSTR\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:AR_INCRPR\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:AR\"/><Cell col=\"7\" displaytype=\"normal\" style=\"background: ;\" text=\"bind:UNIT\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:right;background: ;\" text=\"bind:UNTPC\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:RWMNY\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:ACNUTNO\"/><Cell col=\"11\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:BANK_NM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:RQEST_AMOUNT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;background: ;\" text=\"bind:RQEST_BLCE\"/><Cell col=\"14\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:RQEST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"date\" style=\"align:center;background: ;\" text=\"bind:PYMNT_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" style=\"align:left;background: ;\" text=\"bind:RM\"/><Cell col=\"17\" style=\"align:left;background: ;\" text=\"bind:OWNER_NM\" suppress=\"0\" suppressalign=\"first\"/><Cell col=\"18\" style=\"align:left;background: ;\" text=\"bind:TELNO_1\" suppress=\"0\"/><Cell col=\"19\" style=\"align:left;background: ;\" text=\"bind:ADRES\" suppress=\"0\"/><Cell col=\"20\" style=\"align:center;background2: ;\" text=\"bind:EMPNM_1\"/><Cell col=\"21\" style=\"align:center;background2: ;\" text=\"bind:EMPNM_2\"/><Cell col=\"22\" style=\"align:center;background2: ;\" text=\"bind:EMPNM_3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum('ST == 0',  'RWMNY')\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getCaseSum('ST == 0',  'RQEST_AMOUNT')\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getCaseSum('ST == 0',  'RQEST_BLCE')\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","0","1031","10",null,null,this.div_WORK);_a.set_taborder("5");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","10","119","21",null,null,this.div_WORK);_a.set_taborder("6");_a.set_text("기본조서현황");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","31",null,"5","0",null,this.div_WORK);_a.set_taborder("7");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_excelDown","absolute","97.48%","11",null,"19","0.1%",null,this.div_WORK);_a.set_taborder("8");_a.set_cssclass("btn_WF_Gridexceldn");_a.set_visible("false");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_changeInputTimePop","absolute",null,"10","119","21","28",null,this.div_WORK);_a.set_taborder("9");_a.set_text("입력회차일괄변경");_a.set_visible("false");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","1031","0","15","735",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","13","735","0",null,this);_a.set_taborder("11");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",1031,109,this.div_search,function(_b){_b.set_taborder("0");_b.set_text("Div00");_b.style.set_background("#f9fbffff");_b.style.set_border("1 solid #a8c2e2ff");_b.set_cssclass("div_SearchBox");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("1");_b.set_text("Div00");_b.style.set_background("#ffffffff");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("CMP020501");_b.set_titletext("보상금지불조서");_b.style.set_background("#ffffffff");});this.addLayout(_a.name,_a);_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","pms_cmp_formLib::CmpMultiCheckBar.xfdl");};this.addIncludeScript("CMP040700.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP040700.xfdl",function(){this.frm_CMP040700_onload=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();this.fn_load_combo();};this.fn_init_form=function(){var _a=this.gfn_today();this.div_search.cal_ST_RQEST_DE.set_value(this.fn_first_yyyymmdd("19000101"));this.div_search.cal_ED_RQEST_DE.set_value(_a);this.div_WORK.grd_DS_TBCMP_THING_WTNNC.removeEventHandler("onheadclick",this._fn_gidOnheadSortClickHandler,this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_add_comboHeader(this,this.div_search.cmb_BSNS_AREA_CODE,"선택");this.fn_add_comboHeader(this,this.div_search.cmb_LOCPLC_CODE,"전체");this.fn_get_userBsnsArea(this.DS_BSNS_AREA_CODE,"선택");this.fn_get_lndcgrCode(this.DS_TBCMP_LNDCGR_CODE);this.fn_get_cmmCode(this.DS_THING_CL,"",{grpCode:"CMP001"});this.fn_get_cmmCode(this.DS_UNIT,"",{grpCode:"CMP002"});this.fn_get_thingClChkBox(this.DS_THING_CL2,this.div_search.div_THING_CL,{grpCode:"CMP001"},true);var _a=this.div_search.div_THING_CL;_a.fn_init(3);_a.fn_set_DSColumn("CODE","CODE_NM");_a.fn_set_checkAll(this.div_search.chk_SELECT);};this.div_search_cmb_BSNS_AREA_CODE_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_BSNS_AREA_CODE.value;this.fn_get_locplcCode(this.DS_LOCPLC_CODE,"전체",{bsnsAreaCode:_c});};this.fn_search=function(){if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_clearAll_ds();this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("thingWtnncList");};this.fn_print=function(){var _a=application.gds_userInfo.getColumn(0,"USER_NM")+"("+application.gds_userInfo.getColumn(0,"USER_ID")+")";var _b=this.div_search.cmb_BSNS_AREA_CODE.text;var _c=new this.cf_Opts();_c.setToolbar(false);_c.setScale(100);_c.setArgs("userInfo",_a);_c.setArgs("bsnsAreaNm",_b);_c.setReportPath("/pms/cmp/CMP040700_R01.jrf");_c.setSaveFilename("보상금지불조서");_c.setLocalDs(["DS_TBCMP_THING_WTNNC",this.DS_TBCMP_THING_WTNNC]);var _d={arg_0:this,opts:_c};this.gfn_popup("Popup_Report",884,735,"보상금지불조서",_d,"common::frmReportPopup.xfdl","report_callback");};this.fn_close=function(){this.close();};this.div_search_cal_ST_RQEST_DE_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_ED_RQEST_DE.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_ED_RQEST_DE.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_ED_RQEST_DE_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_ST_RQEST_DE.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_ST_RQEST_DE.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.div_search_cal_ST_PYMNT_DE_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_ED_PYMNT_DE.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_ED_PYMNT_DE.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_ED_PYMNT_DE_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_ST_PYMNT_DE.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_ST_PYMNT_DE.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.fn_clearAll_ds=function(){this.DS_TBCMP_THING_WTNNC.clearData();};this.fn_transaction=function(_a){var _b=true;switch(_a){case "thingWtnncList":var _c="hsco/pms/cmp/tdd/CMP040700/thingWtnncList.do";var _d="input1=ds_cond00";var _e="DS_TBCMP_THING_WTNNC=output1";_b=false;break;case "selectBankCodeList":var _c="hsco/pms/cmp/CMP010100/selectBankCodeList.do";var _d="";var _e="ds_tbaccFnncInsttCode=output1";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;switch(_a){case "DS_THING_CL2":var _e;this.div_search.div_THING_CL.fn_create(this.DS_THING_CL2,false);for(var _f=0;_f<this.div_search.div_THING_CL.components.length;_f++ ){if("Y"==this.DS_THING_CL2.getColumn(_f,"OPTION0")){_e=this.div_search.div_THING_CL.components.get_item(_f).set_value(true);}}break;}};this.btn_excelDown_onclick=function(_a,_b){this.gfn_exportExcel(this.div_WORK.grd_DS_TBCMP_THING_WTNNC,"exportExl");};this.div_WORK_btn_changeInputTimePop_onclick=function(_a,_b){this.gfn_popup("CMP040700_P01",1054,708,"입력회차일괄변경",{},"pms_cmp_tdd::CMP040700_P01.xfdl");};this.div_search_chk_TEL_YN_onchanged=function(_a,_b){if(_a.value){this.div_WORK.grd_DS_TBCMP_THING_WTNNC.setFormatColProperty(19,"size",100);}else{this.div_WORK.grd_DS_TBCMP_THING_WTNNC.setFormatColProperty(19,"size",0);}};this.div_search_chk_BIGO_YN_onchanged=function(_a,_b){if(_a.value){this.div_WORK.grd_DS_TBCMP_THING_WTNNC.setFormatColProperty(17,"size",90);}else{this.div_WORK.grd_DS_TBCMP_THING_WTNNC.setFormatColProperty(17,"size",0);}};});this.on_initEvent=function(){this.DS_TBCMP_THING_WTNNC.addEventHandler("canrowposchange",this.DS_TBCMP_THING_WTNNC_canrowposchange,this);this.DS_TBCMP_THING_WTNNC.addEventHandler("oncolumnchanged",this.DS_TBCMP_THING_WTNNC_oncolumnchanged,this);this.addEventHandler("onload",this.frm_CMP040700_onload,this);this.div_search.cal_ST_RQEST_DE.addEventHandler("canchange",this.div_search_cal_ST_RQEST_DE_canchange,this);this.div_search.cal_ED_RQEST_DE.addEventHandler("canchange",this.div_search_cal_ED_RQEST_DE_canchange,this);this.div_search.cal_ST_PYMNT_DE.addEventHandler("canchange",this.div_search_cal_ST_PYMNT_DE_canchange,this);this.div_search.cal_ED_PYMNT_DE.addEventHandler("canchange",this.div_search_cal_ED_PYMNT_DE_canchange,this);this.div_search.cmb_BSNS_AREA_CODE.addEventHandler("onitemchanged",this.div_search_cmb_BSNS_AREA_CODE_onitemchanged,this);this.div_search.cmb_LOCPLC_CODE.addEventHandler("onitemchanged",this.div_search_cmb_LOCPLC_CODE_onitemchanged,this);this.div_search.chk_BIGO_YN.addEventHandler("onchanged",this.div_search_chk_BIGO_YN_onchanged,this);this.div_search.chk_TEL_YN.addEventHandler("onchanged",this.div_search_chk_TEL_YN_onchanged,this);this.div_search.chk_TEL_YN.addEventHandler("onclick",this.div_search_chk_TEL_YN_onclick,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);this.div_WORK.btn_changeInputTimePop.addEventHandler("onclick",this.div_WORK_btn_changeInputTimePop_onclick,this);};this.loadIncludeScript("CMP040700.xfdl");this.loadPreloadList();};})();