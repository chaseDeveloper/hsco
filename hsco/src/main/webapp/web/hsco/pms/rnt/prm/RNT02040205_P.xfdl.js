﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040205");this.set_classname("RNT02040205");this.set_titletext("수납소인관리");this._setFormPosition(0,0,800,600);}_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"stRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"edRceptDe\" type=\"STRING\" size=\"256\"/><Column id=\"stWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"edWaitNo\" type=\"STRING\" size=\"256\"/><Column id=\"hopeAea\" type=\"STRING\" size=\"256\"/><Column id=\"NTIC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"houseCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_dongList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hoList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_paySeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bankList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcivSeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">J</Col><Col id=\"CODE_NM\">정상</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"CODE_NM\">과오납</Col></Row><Row><Col id=\"CODE\">H</Col><Col id=\"CODE_NM\">확인요망</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">CNTRCTR_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">계약자</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">PAY_TMLMT</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부기한</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">RCIV_DE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">수납일자</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">PAY_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부구분</Col></Row><Row><Col id=\"compId\">ds_rentSprmnyRcivList</Col><Col id=\"colId\">PAY_SE</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">납부구분</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_puchasRentRcvAmt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"NTIC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMTHD\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPOT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_DCODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FALT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_SE\" type=\"STRING\" size=\"256\"/><Column id=\"OVERRPAY_PROCESS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERRPAY_PROCESS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"VIRTL_ACNUTNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"VIRTL_ACNUT_PROCESS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"MDAT_DE\" type=\"STRING\" size=\"256\"/><Column id=\"NHT_SN\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","0","0","800",null,null,"0",this);_a.set_taborder("13");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","81",null,"59","15",null,this);_a.set_taborder("14");_a.style.set_background("#f9fbffff");_a.style.set_font("bold 9 Verdana");_a.set_scrollbars("none");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","10.24%","5",null,"21","67.73%",null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("106");_a.set_innerdataset("@ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_type("search");_a=new Static("Static04","absolute","2.18%","5",null,"21","89.5%",null,this.div_search);_a.set_taborder("108");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","33.29%","5",null,"21","60.05%",null,this.div_search);_a.set_taborder("109");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_edRcivDe","absolute","214","31","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("113");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static00","absolute","196","31","10","21",null,null,this.div_search);_a.set_taborder("116");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","48.14%","4",null,"21","50.58%",null,this.div_search);_a.set_taborder("117");_a.set_text("/");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","39.82%","5",null,"21","52.37%",null,this.div_search);_a.set_taborder("118");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","49.81%","5",null,"21","42.38%",null,this.div_search);_a.set_taborder("119");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_stRcivDe","absolute","80","31","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("120");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static05","absolute","2.18%","31",null,"21","90.14%",null,this.div_search);_a.set_taborder("121");_a.set_text("수납일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","98.13%","0",null,"600","0%",null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","15","146",null,null,"15","15",this);_a.set_taborder("16");_a.set_scrollbars("none");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0%","0",null,"10","0%",null,this.div_WORK);_a.set_taborder("41");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","10",null,"21","84.59%",null,this.div_WORK);_a.set_taborder("42");_a.set_text("계약자명");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static04","absolute","0%","31",null,"5","0%",null,this.div_WORK);_a.set_taborder("43");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","2","36",null,"27","0",null,this.div_WORK);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM01","absolute","60.62%","36",null,"27","29.02%",null,this.div_WORK);_a.set_taborder("45");_a.set_text("동/호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","30.31%","36",null,"27","59.33%",null,this.div_WORK);_a.set_taborder("46");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","2","36",null,"27","89.64%",null,this.div_WORK);_a.set_taborder("47");_a.set_text("계약자명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","10.62%","39",null,"21","69.95%",null,this.div_WORK);_a.set_taborder("48");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","2","99",null,"27","-1.55%",null,this.div_WORK);_a.set_taborder("49");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM02","absolute","2","99",null,"27","89.64%",null,this.div_WORK);_a.set_taborder("50");_a.set_text("납부구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM03","absolute","30.31%","99",null,"27","59.33%",null,this.div_WORK);_a.set_taborder("51");_a.set_text("수납일자");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM04","absolute","60.62%","99",null,"27","29.02%",null,this.div_WORK);_a.set_taborder("52");_a.set_text("수납금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","125",null,"27","-1.55%",null,this.div_WORK);_a.set_taborder("53");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM06","absolute","30.31%","125",null,"27","59.33%",null,this.div_WORK);_a.set_taborder("54");_a.set_text("납입기한");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM07","absolute","60.62%","125",null,"27","29.02%",null,this.div_WORK);_a.set_taborder("55");_a.set_text("과오금액");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM05","absolute","2","125",null,"27","89.64%",null,this.div_WORK);_a.set_taborder("56");_a.set_text("수납구분");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","2","151",null,"27","-1.55%",null,this.div_WORK);_a.set_taborder("57");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM08","absolute","2","151",null,"27","89.64%",null,this.div_WORK);_a.set_taborder("58");_a.set_text("은행코드");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM09","absolute","30.31%","151",null,"27","59.33%",null,this.div_WORK);_a.set_taborder("59");_a.set_text("비고");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","63",null,"10","-32.99%",null,this.div_WORK);_a.set_taborder("60");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","15","73",null,"21","84.33%",null,this.div_WORK);_a.set_taborder("61");_a.set_text("수납정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","94",null,"5","0%",null,this.div_WORK);_a.set_taborder("62");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","10.62%","102",null,"21","69.95%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("63");_a.set_innerdataset("@ds_paySeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("Combo01","absolute","10.62%","128",null,"21","69.95%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("64");_a.set_innerdataset("@ds_rcivSeList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Combo("Combo02","absolute","10.62%","154",null,"21","69.95%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("65");_a.set_innerdataset("@ds_bankList");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Calendar("Calendar00","absolute","40.93%","102",null,"21","39.64%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("66");_a.set_dateformat("yyyy-MM-dd");_a=new Calendar("Calendar01","absolute","40.93%","128",null,"21","39.64%",null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("67");_a.set_dateformat("yyyy-MM-dd");_a=new MaskEdit("MaskEdit00","absolute","71.24%","102",null,"21","9.33%",null,this.div_WORK);_a.set_taborder("68");_a.set_mask("9,999");this.div_WORK.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","71.24%","128",null,"21","9.33%",null,this.div_WORK);_a.set_taborder("69");_a.set_mask("9,999");this.div_WORK.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","40.93%","154",null,"21","39.64%",null,this.div_WORK);_a.set_taborder("70");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static07","absolute","0%","178",null,"10","-33.55%",null,this.div_WORK);_a.set_taborder("71");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Grid("grd_rentSprmnyRcivList","absolute","0","188",null,null,"0%","0",this.div_WORK);_a.set_taborder("72");_a.set_binddataset("ds_puchasRentRcvAmt");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/><Column size=\"61\"/><Column size=\"62\"/><Column size=\"78\"/><Column size=\"95\"/><Column size=\"86\"/><Column size=\"91\"/><Column size=\"83\"/><Column size=\"77\"/><Column size=\"84\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주택명\"/><Cell col=\"1\" text=\"동\"/><Cell col=\"2\" text=\"호\"/><Cell col=\"3\" text=\"계약자\"/><Cell col=\"4\" text=\"납부구분\"/><Cell col=\"5\" text=\"수납구분\"/><Cell col=\"6\" text=\"납입기한\"/><Cell col=\"7\" text=\"수납일자\"/><Cell col=\"8\" text=\"수납금액\"/><Cell col=\"9\" text=\"과오금액\"/><Cell col=\"10\" text=\"은행\"/></Band><Band id=\"body\"><Cell text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"1\" text=\"bind:DONG\"/><Cell col=\"2\" text=\"bind:HO\"/><Cell col=\"3\" text=\"bind:NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:PAY_SE\" combodataset=\"ds_paySeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:OPERT_SE_NM\" combodataset=\"ds_rcivSeList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:RCIV_AMOUNT\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:FALT_AMOUNT\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:BANK_CODE\" combodataset=\"ds_bankList\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_rentHouseCode","absolute","40.93%","39",null,"21","39.64%",null,this.div_WORK);_a.set_taborder("73");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_dong","absolute","71.24%","39",null,"21","19.43%",null,this.div_WORK);_a.set_taborder("74");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","81.22%","39",null,"21","9.46%",null,this.div_WORK);_a.set_taborder("75");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_cntrctCstmrPop","absolute","27.46%","39",null,"21","69.82%",null,this.div_WORK);_a.set_taborder("76");_a.set_cssclass("btn_WF_Search");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","0",null,"34","0%",null,this);_a.set_taborder("17");_a.set_text("수납처리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","34",null,"15","1.75%",null,this);_a.set_taborder("18");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","15","53",null,"21","75.13%",null,this);_a.set_taborder("19");_a.set_text("수납처리");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","65.38%","51",null,"25","28.38%",null,this);_a.set_taborder("20");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","72%","51",null,"25","21.75%",null,this);_a.set_taborder("21");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","78.63%","51",null,"25","15.13%",null,this);_a.set_taborder("22");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button23","absolute","85.25%","51",null,"25","8.5%",null,this);_a.set_taborder("23");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","91.88%","51",null,"25","1.88%",null,this);_a.set_taborder("24");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","2.13%","76",null,"5","1.88%",null,this);_a.set_taborder("25");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1.13%","108",null,"5","2.88%",null,this);_a.set_taborder("26");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.div_search,function(_b){_b.set_taborder("14");_b.style.set_background("#f9fbffff");_b.style.set_font("bold 9 Verdana");_b.set_scrollbars("none");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_WORK,function(_b){_b.set_taborder("16");_b.set_scrollbars("none");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){_b.set_classname("RNT02040205");_b.set_titletext("수납소인관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_WORK.edt_nm","value","ds_puchasRentRcvAmt","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.edt_rentHouseCode","value","ds_puchasRentRcvAmt","RENT_HOUSE_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_WORK.edt_dong","value","ds_puchasRentRcvAmt","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_WORK.edt_ho","value","ds_puchasRentRcvAmt","HO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_WORK.Combo00","value","ds_puchasRentRcvAmt","PAY_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_WORK.Calendar00","value","ds_puchasRentRcvAmt","RCIV_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_WORK.MaskEdit00","value","ds_puchasRentRcvAmt","RCIV_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_WORK.MaskEdit01","value","ds_puchasRentRcvAmt","FALT_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_WORK.Calendar01","value","ds_puchasRentRcvAmt","PAY_TMLMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_WORK.Combo01","value","ds_puchasRentRcvAmt","OPERT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_WORK.Combo02","value","ds_puchasRentRcvAmt","BANK_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_WORK.Edit01","value","ds_puchasRentRcvAmt","RM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT02040205_P.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040205_P.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02040205_P.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02040205_P.xfdl",function(){this.fv_objForm;this.RNT02040205_oninit=function(_a,_b){this.fn_init();this.fn_init_dataset();};this.RNT02040205_onload=function(_a,_b){var _c=this.gfn_today();this.div_search.cal_edRcivDe.set_value(_c);this.div_search.cal_stRcivDe.set_value(this.fn_first_yyyymmdd(_c));this.fn_load_combo();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_load_combo=function(){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체","");this.fn_get_cmmCode(this.ds_paySeList,"",{grpCode:"RNT009"});this.fn_get_cmmCode(this.ds_bankList,"",{grpCode:"COM021"});this.fv_objForm=this.parent.arg_0;var _a=this.parent.arg_1;this.div_search.cmb_houseCode.set_value(_a.getColumn(0,"houseCode"));this.div_search.edt_dong.set_value(_a.getColumn(0,"dong"));this.div_search.edt_ho.set_value(_a.getColumn(0,"ho"));this.div_search.cal_stRcivDe.set_value(_a.getColumn(0,"stRcivDe"));this.div_search.cal_edRcivDe.set_value(_a.getColumn(0,"edRcivDe"));this.fn_search();};this.fn_search=function(){this.fn_divToDS(this.ds_cond00,this.div_search);this.ds_cond00.setColumn(0,"NTIC_SE",this.parent.arg_1.getColumn(0,"NTIC_SE"));this.fn_transaction("selectPuchasRentRcvAmtList");};this.fn_save=function(){if(this.gfn_checkValidation(this.ds_rentSprmnyRcivList,this.ds_validation)==false){return;}this.fn_transaction("savePuchasRentRcvAmtCUD");};this.fn_insert=function(){var _a=this.ds_puchasRentRcvAmt.addRow();this.ds_puchasRentRcvAmt.setColumn(_a,"NTIC_SE",this.parent.arg_1.getColumn(0,"NTIC_SE"));};this.fn_delete=function(){if(this.confirm("D")){this.ds_rentSprmnyRcivList.deleteSelectRow();}};this.fn_cancel=function(){if(this.confirm("변경하신 모든 사항이 취소됩니다")){this.ds_rentSprmnyRcivList.cancel();}};this.div_WORK_btn_cntrctCstmrPop_onclick=function(_a,_b){this.gfn_popup("puchasRentCntrctCstmr",600,421,"임대계약자 검색",{callback:"fn_set_puchasRentCstmr"},"pms_rnt_prm::puchasRentCntrctCstmr_P01.xfdl");};this.fn_set_puchasRentCstmr=function(_a){this.fn_objToDs(_a,this.ds_puchasRentRcvAmt,this.ds_puchasRentRcvAmt.rowposition);return true;};this.div_search_cal_stRcivDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_edRcivDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue>this.div_search.cal_edRcivDe.value){this.alert("시작일자는 종료일자보다 클 수 없습니다.");return false;}};this.div_search_cal_edRcivDe_canchange=function(_a,_b){if(this.comUtils.isNullEmpty(this.div_search.cal_stRcivDe.value)==true||this.comUtils.isNullEmpty(_b.postvalue)==true){return true;}if(_b.postvalue<this.div_search.cal_stRcivDe.value){this.alert("종료일자는 시작일자보다 작을 수 없습니다.");return false;}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectPuchasRentRcvAmtList":var _c="hsco/pms/rnt/prm/RNT02040205/selectPuchasRentRcvAmtList.do";var _d="input1=ds_cond00";var _e="ds_puchasRentRcvAmt=output1";break;case "savePuchasRentRcvAmtCUD":var _c="hsco/pms/rnt/prm/RNT02040205/savePuchasRentRcvAmtCUD.do";var _d="input1=ds_puchasRentRcvAmt:U";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){this.fn_callback_message(_a,_b,_c);var _d=_b==0?true:false;this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.Button02_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040205_oninit,this);this.addEventHandler("onload",this.RNT02040205_onload,this);this.Static07.addEventHandler("onclick",this.Static00_onclick,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.div_search_cmb_rentHouseCode_onitemchanged,this);this.div_search.cal_edRcivDe.addEventHandler("canchange",this.div_search_cal_edRcivDe_canchange,this);this.div_search.cal_stRcivDe.addEventHandler("canchange",this.div_search_cal_stRcivDe_canchange,this);this.div_WORK.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.Static06.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_WORK.btn_cntrctCstmrPop.addEventHandler("onclick",this.div_WORK_btn_cntrctCstmrPop_onclick,this);this.Button05.addEventHandler("onclick",this.fn_search,this);this.Button04.addEventHandler("onclick",this.fn_insert,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button23.addEventHandler("onclick",this.fn_save,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);};this.loadIncludeScript("RNT02040205_P.xfdl");};})();