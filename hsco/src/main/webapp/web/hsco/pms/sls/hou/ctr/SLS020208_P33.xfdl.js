﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020208_P33");this.set_classname("SLS020208_P33");this._setFormPosition(0,0,779,633);}_a=new Dataset("ds_houseRntchrgInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RATIO\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"TOTL_RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_REMAIN_PAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BASS_RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RENTAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIFFAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RETURN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">div_search</Col><Col id=\"colId\">cmb_houseCode</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">주택</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_rntchrgChangeList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IRDS_INTRT\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_IRDS_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INDVDL_IRDS_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"DIFFRENTPAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond09",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LON_SN\" type=\"STRING\" size=\"256\"/><Column id=\"TRNSFR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_TRNSFR_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CDIT_GRNTE_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"RELIS_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHARGER\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHRG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PRCAFS_CHRG_CTTPC\" type=\"STRING\" size=\"256\"/><Column id=\"LON_ATCHMNFL_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"LON_ATCHMNFL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LON_SE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINL_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBLS_SN\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_QUALF_SE\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_LTTOT_CNVRS_DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IRDS_INTRT\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_IRDS_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INDVDL_IRDS_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hcntrctrPayList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_SN\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"PAYAMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YRINS_SALE_INTR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ARRRG_DSCNT_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"POINT_DSCNT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NPYAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ARRRG_DSCNT_AMOUNT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ARRRG_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNCLAMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rntchrg",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RNTCHRG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LTTOT_RENT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_TY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond03",this);_a._setContents("<ColumnInfo><Column id=\"IN_CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_RNTCHRG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IN_IRDS_INTRT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_BASS_IRDS_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IN_ADD_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IN_RETURN_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"1","0",this);_a.set_taborder("0");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("sta_popupTitle","absolute","2","2",null,"34","3",null,this);_a.set_taborder("1");_a.set_text("환불처리");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Button("btn_popTitClose","absolute",null,"8","20","20","13",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Button("btn_end","absolute",null,"46","50","25","12",null,this);_a.set_taborder("11");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","104",null,"33","13",null,this);_a.set_taborder("16");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","302","104","69","33",null,null,this);_a.set_taborder("20");_a.set_text("동/호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","490","104","69","33",null,null,this);_a.set_taborder("21");_a.set_text("계약자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","15","104","81","33",null,null,this);_a.set_taborder("23");_a.set_text("주택코드");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","15","257","751","27",null,null,this);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","15","170","751","27",null,null,this);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","15","196","751","27",null,null,this);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","15","196","107","27",null,null,this);_a.set_taborder("31");_a.set_text("기본임대료");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","15","170","107","27",null,null,this);_a.set_taborder("32");_a.set_text("기본보증금");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","15","257","107","27",null,null,this);_a.set_taborder("33");_a.set_text("환불일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("edt_BASS_RNTCHRG","absolute","124","199","130","21",null,null,this);_a.set_taborder("37");_a.getSetter("lengthunit").set("utf8");_a.getSetter("maxlength").set("200");_a.set_mask("###,###,###,###,###");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","506","170","107","27",null,null,this);_a.set_taborder("41");_a.set_text("추가납부 보증금");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","260","257","107","27",null,null,this);_a.set_taborder("42");_a.set_text("환불금액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("edt_INDVDL_ADIT_AMT","absolute","617","173","130","21",null,null,this);_a.set_taborder("44");_a.getSetter("inputtype").set("number");_a.getSetter("lengthunit").set("utf8");_a.getSetter("maxlength").set("12");_a.set_mask("###,###,###,###,###");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","260","170","107","27",null,null,this);_a.set_taborder("48");_a.set_text("총 납부보증금");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_grdTitle01","absolute","16","84","197","19",null,null,this);_a.set_taborder("56");_a.set_text("계약정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("sta_grdTitle02","absolute","17","150","197","19",null,null,this);_a.set_taborder("57");_a.set_text("보증금/임대료 정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Combo("cmb_houseCodeSh","absolute","98","110","200","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("59");_a.set_autoselect("true");_a.set_readonly("true");_a.set_innerdataset("ds_houseCodeSh");_a.set_codecolumn("HOUSE_CODE");_a.set_datacolumn("ALL_HOUSE_NM");_a.set_type("filter");_a.set_cssclass("cmb_WF_Readonly");_a=new Edit("edt_dong","absolute","375","110","52","21",null,null,this);_a.set_taborder("60");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","434","110","51","21",null,null,this);_a.set_taborder("61");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_cntrctr_nm","absolute","569","110","190","21",null,null,this);_a.set_taborder("62");_a.set_inputtype("digit");_a.set_readonly("true");_a.set_maxlength("3");_a.set_autoselect("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Calendar("cal_applcDe","absolute","125","260","130","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("63");_a.set_dateformat("yyyy-MM-dd");_a.style.set_background("#fffcfbff URL('theme://images/img_WF_Essential.png') left top");_a=new MaskEdit("edt_BASS_LTTOT_AMOUNT","absolute","124","174","130","21",null,null,this);_a.set_taborder("65");_a.getSetter("inputtype").set("digit");_a.set_readonly("true");_a.getSetter("maxlength").set("3");_a.set_autoselect("true");_a.set_mask("###,###,###,###,###");_a.style.set_background("#ffffffff");this.addChild(_a.name,_a);_a=new MaskEdit("edt_PAYAMT","absolute","370","174","130","21",null,null,this);_a.set_taborder("66");_a.getSetter("inputtype").set("number");_a.getSetter("lengthunit").set("utf8");_a.getSetter("maxlength").set("12");_a.set_mask("###,###,###,###,###");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","505","257","107","27",null,null,this);_a.set_taborder("67");_a.set_text("환불 후 임대료");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","260","196","107","27",null,null,this);_a.set_taborder("68");_a.set_text("월임대료");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("edt_RENT_AMT","absolute","616","260","130","21",null,null,this);_a.set_taborder("69");_a.getSetter("inputtype").set("number");_a.getSetter("lengthunit").set("utf8");_a.getSetter("maxlength").set("12");_a.set_mask("###,###,###,###,###");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new MaskEdit("edt_RENT_CHA_AMT","absolute","370","200","130","21",null,null,this);_a.set_taborder("70");_a.getSetter("inputtype").set("number");_a.getSetter("lengthunit").set("utf8");_a.getSetter("maxlength").set("12");_a.set_mask("###,###,###,###,###");_a.set_readonly("true");this.addChild(_a.name,_a);_a=new Static("sta_grdTitle00","absolute","15","296","197","19",null,null,this);_a.set_taborder("72");_a.set_text("보증금내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Button("btn_Return","absolute","697","80","70","20",null,null,this);_a.set_taborder("74");_a.set_text("환불처리");_a.set_cssclass("btn_WF_Process");_a.set_visible("true");this.addChild(_a.name,_a);_a=new Static("sta_grdTitle03","absolute","17","237","197","19",null,null,this);_a.set_taborder("75");_a.set_text("환불정보");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Grid("grd_hcntrctrBsnmList","absolute","14","315",null,null,"14","21",this);_a.set_taborder("76");_a.set_binddataset("ds_hcntrctrPayList");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"40\"/><Column size=\"36\"/><Column size=\"77\"/><Column size=\"104\"/><Column size=\"74\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"납부코드\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"납부기한일\"/><Cell col=\"4\" text=\"납부금액\"/><Cell col=\"5\" text=\"연체(선납)\"/><Cell col=\"6\" text=\"미납금액\"/><Cell col=\"7\" text=\"수납일자\"/><Cell col=\"8\" text=\"수납금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:PAY_CODE\" combodataset=\"ds_payCode\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:PAY_SE\" combodataset=\"ds_paySe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:PAY_SN\" combodataset=\"ds_recSeq\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAY_TMLMT\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PAYAMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ARRRG_DSCNT_AMOUNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNCLAMT\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:right;\" text=\"bind:RCIV_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RCIV_AMOUNT\"/></Band><Band id=\"summary\"><Cell displaytype=\"number\" style=\"align:left;\" text=\"expr:dataset.getRowCount()\" mask=\"expr:dataset.getRowCount() == 0  ? &quot;0&quot;  : '#,###'\"/><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('PAYAMT')\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('ARRRG_DSCNT_AMOUNT')\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('UNCLAMT')\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('RCIV_AMOUNT')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","506","196","107","27",null,null,this);_a.set_taborder("77");_a.set_text("전환이율");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_ratio01","absolute","617","199","56","21",null,null,this);_a.set_taborder("78");_a.style.set_font("9 Gulim");this.addChild(_a.name,_a);_a=new MaskEdit("edt_returnamt","absolute","370","260","130","21",null,null,this);_a.set_taborder("79");_a.set_readonly("false");_a.set_mask("###,###,###,###,###");_a.getSetter("inputtype").set("number");_a.getSetter("lengthunit").set("utf8");_a.getSetter("maxlength").set("12");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("16");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",779,633,this,function(_b){_b.set_classname("SLS020208_P33");});this.addLayout(_a.name,_a);_a=new BindItem("item10","edt_BASS_RNTCHRG","value","ds_houseRntchrgInfo","BASS_RNTCHRG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_INDVDL_ADIT_AMT","value","ds_houseRntchrgInfo","BASS_REMAIN_PAY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item39","cmb_houseCodeSh","value","ds_cond09","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","edt_dong","value","ds_cond09","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","edt_ho","value","ds_cond09","HO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","edt_cntrctr_nm","value","ds_cond09","CNTRCTR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","edt_BASS_LTTOT_AMOUNT","value","ds_houseRntchrgInfo","BASS_GTN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_PAYAMT","value","ds_houseRntchrgInfo","TOTL_RCIV_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_RENT_AMT","value","ds_rntchrg","RNTCHRG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_RENT_CHA_AMT","value","ds_houseRntchrgInfo","RENTAMT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","edt_ratio01","value","ds_houseRntchrgInfo","RATIO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","cal_applcDe","value","ds_cond09","APPLC_DE");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS020208_P33.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("SLS020208_P33.xfdl","lib::comInnerSanct.xjs");this.registerScript("SLS020208_P33.xfdl",function(){this.OPENER=null;this.CALLBACK=null;this.RESET_MESSAGE="저장 처리되지 않은 지번정보가 있습니다.";this.READ_FILE=false;this.SAVE_DATA=false;this.HOUSE_SE="S2,S4";this.fv_objForm;this.CLOSE_CALLBACK=null;this.IS_MODIFYED=false;this.SLS020208_P33_oninit=function(_a,_b){this.fn_init(this);this.fn_init_form();this.fn_init_dataset();};this.SLS020208_P33_onload=function(_a,_b){this.fn_loadCombo();this.fv_objForm=this.parent.arg_0;this.ds_cond09.copyData(this.parent.arg_1);this.ds_hcntrctrPayList.copyData(this.parent.arg_2);this.ds_cond02.copyData(this.parent.arg_3);this.CLOSE_CALLBACK=this.parent._close_callback;this.IS_MODIFYED=false;this.cal_applcDe.set_value(this.dateUtils.today());this.edt_returnamt.set_value("0");this.fn_search();if(this.ds_cond09.getColumn(0,"RENT_LTTOT_CNVRS_DE")!=undefined){this.btn_Return.set_enable(false);}};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.checkDs.push(this.ds_houseRntchrgInfo,this.ds_rntchrgChangeList,this.ds_hcntrctrPayList);};this.fn_loadCombo=function(){var _a={};_a["USE_AT"]="1";_a["HOUSE_SE"]="S2,S4";this.pmsUtil.getHouseCode(_a,"ds_houseCodeSh");this.pmsUtil.getHouseCode(_a,"ds_houseCode");};this.fn_callbackAfter=function(){};this.fn_search=function(){this.fn_transaction("houseRntchrgInfo");};this.fn_transaction=function(_a){var _b=true;var _c=null;var _d=null;var _e=null;switch(_a){case "selectHcntrctrPayList":var _c="hsco/pms/sls/hou/ctr/SLS020208/selectHcntrctrPayList.do";var _f="input1=ds_cond02";var _e="ds_hcntrctrPayList=output1";break;case "houseRntchrgInfo":var _c="hsco/pms/sls/hou/ctr/SLS020206/houseRntchrgInfo.do";var _f="input1=ds_cond09";var _e="ds_houseRntchrgInfo=output1";break;case "getRntchrg":var _c="hsco/pms/sls/hou/ctr/SLS020206/getRntchrg.do";var _f="input1=ds_cond01";var _e="ds_rntchrg=output1";break;case "saveReturnGtn":var _c="hsco/pms/sls/hou/ctr/SLS020206/saveReturnGtn.do";var _f="input1=ds_cond03";var _e="";break;}Ex.core.tran(this,_a,_c,_f,_e);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){var _e=null;switch(_a){case "houseCodeList":_e={type:this.pmsUtil.PROMPT_SELECT,noNullText:"없음"};this.pmsUtil.setComboPrompt(this.div_search.cmb_houseCode,_e,true);break;case "houseRntchrgInfo":this.fn_transaction("rntchrgChangeList");break;case "rntchrgChangeList":break;case "saveRntchrg":this.fn_search();break;case "saveReturnGtn":this.alert("저장되었습니다");this.fn_transaction("selectHcntrctrPayList");break;default:break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.fn_btnOnClickHandler=function(_a,_b){this.close();};this.btn_chgRent_onclick=function(_a,_b){if(this.confirm("환불처리를 하시겠습니까?")){this.ds_cond03.clearData();var _c=this.ds_cond03.addRow();this.ds_cond03.setColumn(_c,"IN_CNTRCTR_NO",this.ds_cond09.getColumn(0,"CNTRCTR_NO"));this.ds_cond03.setColumn(_c,"IN_APPLC_DE",this.ds_cond09.getColumn(0,"APPLC_DE"));this.ds_cond03.setColumn(_c,"IN_RNTCHRG",this.ds_rntchrg.getColumn(0,"RNTCHRG"));this.ds_cond03.setColumn(_c,"IN_IRDS_INTRT",this.ds_houseRntchrgInfo.getColumn(0,"RATIO"));this.ds_cond03.setColumn(_c,"IN_BASS_IRDS_AM",this.ds_houseRntchrgInfo.getColumn(0,"BASS_RNTCHRG"));this.ds_cond03.setColumn(_c,"IN_ADD_AMT",this.ds_houseRntchrgInfo.getColumn(0,"BASS_REMAIN_PAY"));this.ds_cond03.setColumn(_c,"IN_RETURN_AMT",this.edt_returnamt.value);this.fn_transaction("saveReturnGtn");}};this.edt_returnamt_onchanged=function(_a,_b){trace("this.edt_returnamt.value"+ +this.edt_returnamt.value);if(this.edt_returnamt.value<=0){this.edt_returnamt.set_value("0");this.alert("환불금액을 입력하세요.");return;}if(this.edt_returnamt.value>this.ds_houseRntchrgInfo.getColumn(this.ds_houseRntchrgInfo.rowposition,"BASS_REMAIN_PAY")){this.alert("추가납부 보증금을 초과하였습니다.");this.edt_returnamt.set_value("0");return;}this.ds_cond01.clearData();var _c=this.ds_cond01.addRow();this.ds_cond01.setColumn(_c,"CNTRCTR_NO",this.ds_cond09.getColumn(0,"CNTRCTR_NO"));this.ds_cond01.setColumn(_c,"APPLC_DE",this.ds_cond09.getColumn(0,"APPLC_DE"));this.ds_cond01.setColumn(_c,"BASS_IRDS_AM",this.ds_houseRntchrgInfo.getColumn(0,"BASS_GTN"));var _d=this.ds_houseRntchrgInfo.getColumn(this.ds_houseRntchrgInfo.rowposition,"BASS_REMAIN_PAY")-this.edt_returnamt.value;this.ds_cond01.setColumn(_c,"INDVDL_IRDS_AM",_d);this.ds_cond01.setColumn(_c,"RNTCHRG",this.ds_houseRntchrgInfo.getColumn(0,"BASS_RNTCHRG"));this.fn_transaction("getRntchrg");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020208_P33_oninit,this);this.addEventHandler("onload",this.SLS020208_P33_onload,this);this.btn_popTitClose.addEventHandler("onclick",this.fn_btnOnClickHandler,this);this.btn_end.addEventHandler("onclick",this.fn_btnOnClickHandler,this);this.sta_grdTitle02.addEventHandler("onclick",this.sta_grdTitle02_onclick,this);this.cmb_houseCodeSh.addEventHandler("onitemchanged",this.fn_comboOnItemChangeHandler,this);this.cal_applcDe.addEventHandler("canchange",this.div_hcntCtrSeizrInfo_cal_endDeSubls_canchange,this);this.btn_Return.addEventHandler("onclick",this.btn_chgRent_onclick,this);this.sta_grdTitle03.addEventHandler("onclick",this.sta_grdTitle02_onclick,this);this.grd_hcntrctrBsnmList.addEventHandler("onexpandup",this.Tab00_tabpage3_grd_hcntrctrBsnmList_onexpandup,this);this.edt_returnamt.addEventHandler("onchanged",this.edt_returnamt_onchanged,this);};this.loadIncludeScript("SLS020208_P33.xfdl");};})();