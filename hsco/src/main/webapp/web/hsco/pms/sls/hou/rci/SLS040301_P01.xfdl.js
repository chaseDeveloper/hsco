﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS040301");this.set_classname("SLS040301");this.set_titletext("수납소인관리");this._setFormPosition(0,0,800,600);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_rentHouseCodeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bankList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcivSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">J</Col><Col id=\"CODE_NM\">정상</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"CODE_NM\">과오납</Col></Row><Row><Col id=\"CODE\">H</Col><Col id=\"CODE_NM\">확인요망</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rentSprmnyRcivList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMTHD\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FALT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OVERRPAY_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERRPAY_PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"VIRTL_ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIRTL_ACNUT_PROCESS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NHT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTMRK_OPERT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OVERRPAY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_CO\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">CNTRCTR_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">계약자</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">PAY_TMLMT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부기한</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">RCIV_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">수납일자</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">PAY_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부구분</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">PAY_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_payCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_odrSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_Rcivse",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","0","800",null,null,"0",this);_a.set_taborder("13");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81",null,"59","15",null,this);_a.set_taborder("14");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_scrollbars("none");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_rentHouseCode","absolute","10.42%","5",null,"21","57.68%",null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("106");_a.set_innerdataset("@ds_houseCodeSh");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_type("search");_a=new Static("Static04","absolute","2.18%","5",null,"21","89.5%",null,this.div_search);_a.set_taborder("108");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","44.79%","5",null,"21","48.57%",null,this.div_search);_a.set_taborder("109");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_edRcivDe","absolute","214","31","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("113");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static00","absolute","196","31","10","21",null,null,this.div_search);_a.set_taborder("116");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","59.64%","4",null,"21","39.06%",null,this.div_search);_a.set_taborder("117");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","51.3%","5",null,"21","40.89%",null,this.div_search);_a.set_taborder("118");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","61.33%","5",null,"21","30.86%",null,this.div_search);_a.set_taborder("119");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stRcivDe","absolute","80","31","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("120");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static05","absolute","2.18%","31",null,"21","90.14%",null,this.div_search);_a.set_taborder("121");_a.set_text("수납일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","98.13%","0",null,"600","0%",null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","0%","146",null,null,"15","2",this);_a.set_taborder("16");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0%","0",null,"10","0%",null,this.div_WORK);_a.set_taborder("41");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","10",null,"21","82.93%",null,this.div_WORK);_a.set_taborder("42");_a.set_text("계약자명");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","31",null,"5","0%",null,this.div_WORK);_a.set_taborder("43");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","31","36",null,"27","0",null,this.div_WORK);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","490","36","81","27",null,null,this.div_WORK);_a.set_taborder("45");_a.set_text("동/호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","252","36","81","27",null,null,this.div_WORK);_a.set_taborder("46");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","15","36",null,"27","88.03%",null,this.div_WORK);_a.set_taborder("47");_a.set_text("계약자명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","12.23%","39",null,"21","68.28%",null,this.div_WORK);_a.set_taborder("48");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","32","99",null,"27","0",null,this.div_WORK);_a.set_taborder("49");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","15","99",null,"27","88.03%",null,this.div_WORK);_a.set_taborder("50");_a.set_text("납부구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM03","absolute","32.1%","99",null,"27","57.58%",null,this.div_WORK);_a.set_taborder("51");_a.set_text("수납일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM04","absolute","490","99","81","27",null,null,this.div_WORK);_a.set_taborder("52");_a.set_text("수납금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","32","125",null,"27","0",null,this.div_WORK);_a.set_taborder("53");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM06","absolute","32.1%","125",null,"27","57.58%",null,this.div_WORK);_a.set_taborder("54");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","490","125","81","27",null,null,this.div_WORK);_a.set_taborder("55");_a.set_text("과오금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","15","125","79","27",null,null,this.div_WORK);_a.set_taborder("56");_a.set_text("수납처리");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","32","151",null,"27","0",null,this.div_WORK);_a.set_taborder("57");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","63",null,"10","-33.55%",null,this.div_WORK);_a.set_taborder("60");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","1.91%","73",null,"21","82.68%",null,this.div_WORK);_a.set_taborder("61");_a.set_text("수납정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","94",null,"5","0%",null,this.div_WORK);_a.set_taborder("62");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","96","102","153","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("63");_a.set_innerdataset("@ds_paySeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_readonly("true");_a=new Combo("Combo01","absolute","96","128","153","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("64");_a.set_innerdataset("@ds_rcivSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Calendar("Calendar00","absolute","42.68%","102",null,"21","37.83%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("66");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("Calendar01","absolute","42.68%","128",null,"21","37.83%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("67");_a.set_dateformat("yyyy-MM-dd");_a=new MaskEdit("MaskEdit00","absolute","573","102","153","21",null,null,this.div_WORK);_a.set_taborder("68");_a.set_mask("9,999");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","573","128","153","21",null,null,this.div_WORK);_a.set_taborder("69");_a.set_mask("9,999");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","0%","178",null,"10","-33.55%",null,this.div_WORK);_a.set_taborder("71");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_rentSprmnyRcivList","absolute","15","188",null,null,"0%","15",this.div_WORK);_a.set_taborder("72");_a.set_binddataset("ds_rentSprmnyRcivList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/><Column size=\"61\"/><Column size=\"62\"/><Column size=\"78\"/><Column size=\"95\"/><Column size=\"86\"/><Column size=\"91\"/><Column size=\"83\"/><Column size=\"77\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"납부구분\"/><Cell col=\"5\" text=\"수납구분\"/><Cell col=\"6\" text=\"납입기한\"/><Cell col=\"7\" text=\"수납일자\"/><Cell col=\"8\" text=\"수납금액\"/><Cell col=\"9\" text=\"과오금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:HOUSE_CODE\" combodataset=\"ds_houseCodeSh\" combocodecol=\"HOUSE_CODE\" combodatacol=\"HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:CSTMR_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:PAY_SE\" combodataset=\"ds_paySeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:PSTMRK_OPERT_SE\" combodataset=\"ds_rcivSeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:RCIV_AMOUNT\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:FALT_AMOUNT\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_rentHouseCode","absolute","335","39","153","21",null,null,this.div_WORK);_a.set_taborder("73");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","573","39","73","21",null,null,this.div_WORK);_a.set_taborder("74");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","652","39","73","21",null,null,this.div_WORK);_a.set_taborder("75");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_cntrctCstmrPop","absolute","29.17%","39",null,"21","68.15%",null,this.div_WORK);_a.set_taborder("76");_a.set_cssclass("btn_WF_Search");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","1.91%","151",null,"27","88.03%",null,this.div_WORK);_a.set_taborder("77");_a.set_text("납부코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Combo("Combo02","absolute","12.23%","155",null,"21","68.28%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("78");_a.set_innerdataset("@ds_payCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_readonly("false");_a=new Static("sta_NM09","absolute","252","151","81","27",null,null,this.div_WORK);_a.set_taborder("79");_a.set_text("수납구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM10","absolute","490","151","81","27",null,null,this.div_WORK);_a.set_taborder("80");_a.set_text("납부차수");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Combo("Combo03","absolute","42.68%","155",null,"21","37.83%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("81");_a.set_innerdataset("@ds_odrSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("Combo04","absolute","72.99%","155",null,"21","7.52%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("82");_a.set_innerdataset("@ds_Rcivse");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Static("Static02","absolute","0%","0",null,"34","0%",null,this);_a.set_taborder("17");_a.set_text("수납자료관리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","34",null,"15","1.75%",null,this);_a.set_taborder("18");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","1.88%","53",null,"21","73.5%",null,this);_a.set_taborder("19");_a.set_text("수납자료관리");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","64.13%","51",null,"25","29.63%",null,this);_a.set_taborder("20");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","566","51","60","25",null,null,this);_a.set_taborder("21");_a.set_text("기타수입");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","78.63%","51",null,"25","15.13%",null,this);_a.set_taborder("22");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button23","absolute","85.25%","51",null,"25","8.5%",null,this);_a.set_taborder("23");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","91.88%","51",null,"25","1.88%",null,this);_a.set_taborder("24");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","2.13%","76",null,"5","1.88%",null,this);_a.set_taborder("25");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1.13%","108",null,"5","2.88%",null,this);_a.set_taborder("26");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0.13%","0",null,"600","98.13%",null,this);_a.set_taborder("27");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("14");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_scrollbars("none");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("16");_b.set_scrollbars("none");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){_b.set_classname("SLS040301");_b.set_titletext("수납소인관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.edt_nm","value","ds_rentSprmnyRcivList","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.edt_rentHouseCode","value","ds_rentSprmnyRcivList","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.edt_dong","value","ds_rentSprmnyRcivList","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.edt_ho","value","ds_rentSprmnyRcivList","HO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.Combo00","value","ds_rentSprmnyRcivList","PAY_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.Calendar00","value","ds_rentSprmnyRcivList","RCIV_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.MaskEdit00","value","ds_rentSprmnyRcivList","RCIV_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_WORK.MaskEdit01","value","ds_rentSprmnyRcivList","OVERRPAY_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_WORK.Calendar01","value","ds_rentSprmnyRcivList","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_WORK.Combo01","value","ds_rentSprmnyRcivList","PSTMRK_OPERT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_search.cmb_rentHouseCode","value","ds_cond00","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_search.edt_dong","value","ds_cond00","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_search.edt_ho","value","ds_cond00","HO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_search.cal_stRcivDe","value","ds_cond00","RCIV_DE1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_search.cal_edRcivDe","value","ds_cond00","RCIV_DE1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_WORK.Combo02","value","ds_rentSprmnyRcivList","PAY_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_WORK.Combo03","value","ds_rentSprmnyRcivList","RCIV_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_WORK.Combo04","value","ds_rentSprmnyRcivList","RCIV_CO");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS040301_P01.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("SLS040301_P01.xfdl",function(){this.RNT01040206_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT01040206_onload=function(_a,_b){var _c=this.gfn_today();this.div_search.cal_edRcivDe.set_value(_c);this.div_search.cal_stRcivDe.set_value(this.fn_first_yyyymmdd(_c));this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){var _a={};_a["USE_AT"]="1";_a["HOUSE_SE"]="S1,S2,S3,S4,S5,S9,R1,R2,R3,R9";this.pmsUtil.getHouseCode(_a,"ds_houseCodeSh","fn_set");this.fn_get_cmmCode(this.ds_paySeList,"",{grpCode:"HOU0B5"});this.fn_get_cmmCode(this.ds_payCode,"",{grpCode:"HOU0A1"});this.fn_get_cmmCode(this.ds_bankList,"",{grpCode:"COM021"});this.fn_get_cmmCode(this.ds_Rcivse,"",{grpCode:"HOU0A9"});this.fn_get_cmmCode(this.ds_odrSe,"",{grpCode:"HOU0A8"});};this.fn_set=function(){var _a=this.ds_houseCodeSh;_a.insertRow(0);_a.setColumn(0,"HOUSE_NM","전체");_a.setColumn(0,"ALL_HOUSE_NM","전체");_a.set_rowposition(0);this.div_search.cmb_rentHouseCode.set_index(0);var _b=this.parent.arg_1;this.ds_cond00.copyData(_b);this.fn_search();};this.fn_search=function(){this.fn_transaction("rentSprmnyRcivList");};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_rentSprmnyRcivList,this.ds_validation)==false){return;}this.fn_transaction("rentSprmnyRcivCUD");};this.fn_insert=function(){var _a={arg_0:this,key:'2'};this.gfn_popup("popup1",900,600,"기타수입 관리",_a,"pms_sls_com::SLS000101.xfdl","fn_PopCallback");};this.fn_PopCallback=function(_a,_b){trace("11111111111111");};this.fn_delete=function(){if(this.confirm("D")){this.ds_rentSprmnyRcivList.deleteSelectRow();}};this.fn_cancel=function(){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_rentSprmnyRcivList.cancel();}};this.div_WORK_btn_cntrctCstmrPop_onclick=function(_a,_b){if(this.ds_rentSprmnyRcivList.rowcount>0){var _c={arg_0:this};this.gfn_popup("houseCntrctr",1059,700,"주택계약자",_c,"pms_sls_com::houseCntrctr_P01.xfdl");}};this.div_search_cal_stRcivDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_edRcivDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_edRcivDe.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_edRcivDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_stRcivDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_stRcivDe.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "rentSprmnyRcivList":var _c="hsco/pms/sls/hou/rci/SLS040301/selectHouseRcivPstmrkList.do";var _d="input1=ds_cond00";var _e="ds_rentSprmnyRcivList=output1";break;case "rentSprmnyRcivCUD":var _c="hsco/pms/sls/hou/rci/SLS040301/saveHouseRcivCUD.do";var _d="input1=ds_rentSprmnyRcivList:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "rentSprmnyRcivCUD":if(this.gfn_message("success.처리.성공")){this.fn_transaction("rentSprmnyRcivList");}break;}}else{this.gfn_callBackMsg(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);this.fn_callback_message(_a,_b,_c);};this.Button02_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT01040206_oninit,this);this.addEventHandler("onload",this.RNT01040206_onload,this);this.Static07.addEventHandler("onclick",this.Static00_onclick,this);this.div_search.cmb_rentHouseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cal_edRcivDe.addEventHandler("canchange",this.div_search_cal_edRcivDe_canchange,this);this.div_search.cal_stRcivDe.addEventHandler("canchange",this.div_search_cal_stRcivDe_canchange,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.Static06.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_cntrctCstmrPop.addEventHandler("onclick",this.div_WORK_btn_cntrctCstmrPop_onclick,this);this.Button05.addEventHandler("onclick",this.fn_search,this);this.Button04.addEventHandler("onclick",this.fn_insert,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button23.addEventHandler("onclick",this.fn_save,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);};this.loadIncludeScript("SLS040301_P01.xfdl");};})();