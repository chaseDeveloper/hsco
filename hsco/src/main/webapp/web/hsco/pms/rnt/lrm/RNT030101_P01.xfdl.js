﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT030301_P01");this.set_classname("RNT030301_P01");this.set_titletext("법무사 코드등록");this._setFormPosition(0,0,800,600);}_a=new Dataset("ds_estate_code",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MDIATN_JCFFR_SE\" type=\"STRING\" size=\"3\"/><Column id=\"MDIATN_JCFFR_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"MTLTY\" type=\"STRING\" size=\"30\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"10\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"30\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"ADRES\" type=\"STRING\" size=\"200\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"200\"/><Column id=\"TELNO_1\" type=\"STRING\" size=\"12\"/><Column id=\"TELNO_2\" type=\"STRING\" size=\"12\"/><Column id=\"CNTRCT_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DPSTR\" type=\"STRING\" size=\"30\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"3\"/><Column id=\"ACNUTNO\" type=\"STRING\" size=\"20\"/><Column id=\"AREA_SE\" type=\"STRING\" size=\"3\"/><Column id=\"RM\" type=\"STRING\" size=\"200\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"INADQC_ENTRPS_AT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM\" type=\"STRING\" size=\"256\"/><Column id=\"AGENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"MTLTY\" type=\"STRING\" size=\"256\"/><Column id=\"MDIATN_JCFFR_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RPRSNTV\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bank",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_area",this);_a._setContents("");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">Div00</Col><Col id=\"colId\">edit_mtlty</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">상호</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","800","600",null,null,this);_a.set_taborder("67");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","800","34",null,null,this);_a.set_taborder("68");_a.set_text("법무사 선택");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","0","15","600",null,null,this);_a.set_taborder("69");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","785","-1","15","600",null,null,this);_a.set_taborder("70");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","34","786","15",null,null,this);_a.set_taborder("71");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_estate_code","absolute","17","124","768","292",null,null,this);_a.set_taborder("76");_a.set_binddataset("ds_estate_code");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" style=\"font:bold 9 돋움체;\" text=\"코드\"/><Cell col=\"2\" style=\"font:bold 9 돋움체;\" text=\"상호\"/><Cell col=\"3\" style=\"font:bold 9 돋움체;\" text=\"사업자번호\"/><Cell col=\"4\" style=\"font:bold 9 돋움체;\" text=\"대표자\"/><Cell col=\"5\" text=\"대리인\"/><Cell col=\"6\" style=\"font:bold 9 돋움체;\" text=\"연락처1\"/><Cell col=\"7\" style=\"font:bold 9 돋움체;\" text=\"연락처2\"/><Cell col=\"8\" style=\"font:bold 9 돋움체;\" text=\"우편번호\"/><Cell col=\"9\" style=\"font:bold 9 돋움체;\" text=\"주소1\"/><Cell col=\"10\" style=\"font:bold 9 돋움체;\" text=\"주소2\"/><Cell col=\"11\" style=\"font:bold 9 돋움체;\" text=\"은행\"/><Cell col=\"12\" style=\"font:bold 9 돋움체;\" text=\"계좌번호\"/><Cell col=\"13\" style=\"font:bold 9 돋움체;\" text=\"예금주\"/><Cell col=\"14\" style=\"font:bold 9 돋움체;\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:MDIATN_JCFFR_CODE\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:MTLTY\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:BIZRNO\" mask=\"###_##_#####\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:RPRSNTV\"/><Cell col=\"5\" text=\"bind:AGENT\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:TELNO_1\"/><Cell col=\"7\" style=\"align:left middle;\" text=\"bind:TELNO_2\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:left middle;\" text=\"bind:ZIP\" mask=\"###-###\"/><Cell col=\"9\" style=\"align:left middle;\" text=\"bind:ADRES\"/><Cell col=\"10\" style=\"align:left middle;\" text=\"bind:ADRES_DETAIL\"/><Cell col=\"11\" style=\"align:left middle;\" text=\"bind:BANK_CODE\"/><Cell col=\"12\" style=\"align:left middle;\" text=\"bind:ACNUTNO\"/><Cell col=\"13\" style=\"align:left middle;\" text=\"bind:DPSTR\"/><Cell col=\"14\" style=\"align:left middle;\" text=\"bind:USE_AT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","768","5",null,null,this);_a.set_taborder("77");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","17","81","768","33",null,null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","10","5","68","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("법무사명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","79","5","102","21",null,null,this.div_search);_a.set_taborder("0");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","190","5","64","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("대표자명");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","265","5","102","21",null,null,this.div_search);_a.set_taborder("15");_a.set_autoselect("true");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","382","5","83","21",null,null,this.div_search);_a.set_taborder("16");_a.set_text("사업자번호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new MaskEdit("edt_ihdnum","absolute","470","5","100","21",null,null,this.div_search);_a.set_taborder("17");_a.set_type("string");_a.set_mask("###-##-#####");_a.set_autoselect("true");_a.style.set_align("left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","114","768","10",null,null,this);_a.set_taborder("80");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","53","197","21",null,null,this);_a.set_taborder("82");_a.set_text("법무사 선택");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("Button05","absolute","523","51","50","25",null,null,this);_a.set_taborder("83");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button04","absolute","576","51","50","25",null,null,this);_a.set_taborder("84");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button03","absolute","629","51","50","25",null,null,this);_a.set_taborder("85");_a.set_text("취소");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button23","absolute","682","51","50","25",null,null,this);_a.set_taborder("86");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("Button02","absolute","735","51","50","25",null,null,this);_a.set_taborder("87");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("Div00","absolute","17","416","768","181",null,null,this);_a.set_taborder("1");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","-1","167","768","15",null,null,this.Div00);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static04","absolute","-1","134","768","5",null,null,this.Div00);_a.set_taborder("17");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static15","absolute","-1","-1","768","10",null,null,this.Div00);_a.set_taborder("18");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static09","absolute","196","9","71","21",null,null,this.Div00);_a.set_taborder("20");_a.set_text("상호");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static10","absolute","13","87","64","21",null,null,this.Div00);_a.set_taborder("21");_a.set_text("수수료");_a.set_cssclass("sta_WFSA_Label");_a.set_visible("false");this.Div00.addChild(_a.name,_a);_a=new Static("Static85","absolute","13","61","64","21",null,null,this.Div00);_a.set_taborder("22");_a.set_text("주소");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static83","absolute","13","35","64","21",null,null,this.Div00);_a.set_taborder("23");_a.set_text("관할지역");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static84","absolute","13","9","64","21",null,null,this.Div00);_a.set_taborder("24");_a.set_text("코드");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Combo("cmb_bank_code","absolute","256","87","101","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("10");_a.set_innerdataset("ds_bank");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.setStyleValue("align","disabled","left middle");_a=new Static("Static19","absolute","384","35","71","21",null,null,this.Div00);_a.set_taborder("25");_a.set_text("연락처1");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("edit_mtlty","absolute","256","9","102","21",null,null,this.Div00);_a.set_taborder("0");_a.set_autoselect("true");_a.set_cssclass("edt_WF_Essential");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static18","absolute","194","87","71","21",null,null,this.Div00);_a.set_taborder("26");_a.set_text("은행");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("edt_telno_1","absolute","453","35","102","21",null,null,this.Div00);_a.set_taborder("4");_a.set_limitbymask("integer");_a.set_mask("###########");_a.set_type("string");_a.set_maskchar(" ");_a.set_autoselect("true");_a.style.set_align("left middle");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static11","absolute","572","35","71","21",null,null,this.Div00);_a.set_taborder("27");_a.set_text("연락처2");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("edt_telno_2","absolute","653","35","102","21",null,null,this.Div00);_a.set_taborder("5");_a.set_mask("###########");_a.set_limitbymask("integer");_a.set_maskchar(" ");_a.set_type("string");_a.set_autoselect("true");_a.style.set_align("left middle");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static13","absolute","383","87","71","21",null,null,this.Div00);_a.set_taborder("28");_a.set_text("계좌번호");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static14","absolute","570","87","82","21",null,null,this.Div00);_a.set_taborder("29");_a.set_text("예금주");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("edt_acnutno","absolute","454","87","102","21",null,null,this.Div00);_a.set_taborder("11");_a.set_mask("####################");_a.set_limitbymask("integer");_a.set_autoselect("true");_a.style.set_align("left middle");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_dpstr","absolute","653","87","102","21",null,null,this.Div00);_a.set_taborder("12");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static16","absolute","13","139","64","21",null,null,this.Div00);_a.set_taborder("30");_a.set_text("비고");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_rprsntv","absolute","453","9","102","21",null,null,this.Div00);_a.set_taborder("1");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static17","absolute","384","9","71","21",null,null,this.Div00);_a.set_taborder("31");_a.set_text("대표자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Static("Static20","absolute","570","9","82","21",null,null,this.Div00);_a.set_taborder("32");_a.set_text("사업자번호");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("edt_bizno","absolute","653","9","102","21",null,null,this.Div00);_a.set_taborder("2");_a.set_mask("###-##-##### ");_a.set_type("string");_a.set_autoselect("true");_a.style.set_align("left middle");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("edt_zip","absolute","78","61","101","21",null,null,this.Div00);_a.set_taborder("6");_a.set_autoselect("true");_a.set_mask("#####");_a.set_type("number");_a.style.set_align("left middle");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_adres","absolute","182","61","271","21",null,null,this.Div00);_a.set_taborder("7");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_adres_detail","absolute","454","61","301","21",null,null,this.Div00);_a.set_taborder("8");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new MaskEdit("edt_cntrct_amount","absolute","78","87","102","21",null,null,this.Div00);_a.set_taborder("9");_a.set_mask("#,##0");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");_a.set_visible("false");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_rm","absolute","78","139","677","21",null,null,this.Div00);_a.set_taborder("13");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static21","absolute","-2","30","758","5",null,null,this.Div00);_a.set_taborder("34");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static22","absolute","-2","56","758","5",null,null,this.Div00);_a.set_taborder("35");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static23","absolute","-2","82","758","5",null,null,this.Div00);_a.set_taborder("36");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static24","absolute","-2","108","758","5",null,null,this.Div00);_a.set_taborder("37");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static25","absolute","-2","4","758","5",null,null,this.Div00);_a.set_taborder("38");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static26","absolute","-2","162","758","5",null,null,this.Div00);_a.set_taborder("39");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_estate_code","absolute","78","9","102","21",null,null,this.Div00);_a.set_taborder("40");_a.set_enable("false");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Combo("cmb_area_se","absolute","78","35","101","21",null,null,this.Div00);this.Div00.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_area");_a.set_codecolumn("VAL1");_a.set_datacolumn("CODE_NM");_a.style.setStyleValue("align","disabled","left middle");_a=new Button("Button04","absolute","159","60","21","21",null,null,this.Div00);_a.set_taborder("41");_a.set_cssclass("btn_WF_Search");this.Div00.addChild(_a.name,_a);_a=new Static("Static00","absolute","14","113","63","21",null,null,this.Div00);_a.set_taborder("42");_a.set_text("악성업체");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new CheckBox("CheckBox07","absolute","12.53%","114",null,"19","81.07%",null,this.Div00);_a.set_taborder("43");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");_a.set_visible("true");this.Div00.addChild(_a.name,_a);_a=new Static("Static01","absolute","195","113","64","21",null,null,this.Div00);_a.set_taborder("44");_a.set_text("사유");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_adres_detail00","absolute","256","113","499","21",null,null,this.Div00);_a.set_taborder("45");_a.set_autoselect("true");_a.style.set_align("left middle");this.Div00.addChild(_a.name,_a);_a=new Static("Static02","absolute","25.59%","35",null,"21","65.14%",null,this.Div00);_a.set_taborder("46");_a.set_text("대표자");_a.set_cssclass("sta_WFSA_Label");this.Div00.addChild(_a.name,_a);_a=new Edit("edt_rprsntv00","absolute","33.42%","35",null,"21","53.26%",null,this.Div00);_a.set_taborder("47");_a.set_autoselect("true");_a.style.setStyleValue("align","disabled","left middle");this.Div00.addChild(_a.name,_a);_a=new Layout("default","",768,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",768,181,this.Div00,function(_b){_b.set_taborder("1");_b.set_cssclass("div_WFSA_Box");});this.Div00.addLayout(_a.name,_a);_a=new Layout("default","",800,600,this,function(_b){_b.set_classname("RNT030301_P01");_b.set_titletext("법무사 코드등록");});this.addLayout(_a.name,_a);_a=new BindItem("item49","Div00.cmb_bank_code","value","ds_estate_code","BANK_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item42","Div00.edit_mtlty","value","ds_estate_code","MTLTY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item46","Div00.edt_telno_1","value","ds_estate_code","TELNO_1");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item47","Div00.edt_telno_2","value","ds_estate_code","TELNO_2");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item50","Div00.edt_acnutno","value","ds_estate_code","ACNUTNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item51","Div00.edt_dpstr","value","ds_estate_code","DPSTR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item43","Div00.edt_rprsntv","value","ds_estate_code","RPRSNTV");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","Div00.edt_bizno","value","ds_estate_code","BIZRNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item52","Div00.edt_zip","value","ds_estate_code","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item53","Div00.edt_adres","value","ds_estate_code","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item54","Div00.edt_adres_detail","value","ds_estate_code","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","Div00.edt_cntrct_amount","value","ds_estate_code","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div00.edt_rm","value","ds_estate_code","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Div00.edt_estate_code","value","ds_estate_code","MDIATN_JCFFR_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","Div00.cmb_area_se","value","ds_estate_code","AREA_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","Div00.edt_adres_detail00","value","ds_estate_code","CONFM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","Div00.CheckBox07","value","ds_estate_code","INADQC_ENTRPS_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","Div00.edt_rprsntv00","value","ds_estate_code","AGENT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT030101_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("RNT030101_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT030101_P01.xfdl",function(){this.fv_objForm;this.RNT030101_P01_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT030101_P01_onload=function(_a,_b){this.fv_objForm=this.parent.arg_0;this.fn_loadCombo();this.fn_transaction("selectSlaryList");};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){var _a=[["ds_area","RNT004","1",""],["ds_bank","COM021","1",""]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_isUpdate=function(){this.objDs=[this.ds_estate_code];for(var _a=0;_a<this.objDs.length;_a++ ){if(this.comUtils.isDatasetUpdated(this.objDs[_a])){return true;}}this.alert("objDs ="+this.objDs);};this.fn_search=function(){this.fn_transaction("selectSlaryList");};this.fn_save=function(){if(!this.gfn_checkValidation(this.Div00,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveSlaryList");}};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectSlaryList":var _c=this.ds_cond00.addRow();this.ds_cond00.setColumn(_c,"MTLTY",this.div_search.edt_nm.value);this.ds_cond00.setColumn(_c,"MDIATN_JCFFR_SE",'001');this.ds_cond00.setColumn(_c,"BIZRNO",this.div_search.edt_ihdnum.value);this.ds_cond00.setColumn(_c,"RPRSNTV",this.div_search.Edit01.value);var _d="hsco/pms/rnt/rnt030101/getList.do";var _e="input1=ds_cond00";var _f="ds_estate_code=output1";_b=false;break;case "saveSlaryList":var _d="hsco/pms/rnt/rnt030101/listCUD.do";var _e="input1=ds_estate_code:U";var _f="";break;}Ex.core.tran(this,_a,_d,_e,_f,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){if(_a=="saveSlaryList"){if(this.gfn_message("success.처리.성공")){}this.div_serach.edt_nm.set_value(this.ds_estate_code.getColumn(this.ds_estate_code.rowposition,"MTLTY"));this.fn_search();this.gfn_callback_message(_a,_b,_c);}if(_b==0){return;}this.gfn_callback_message(_a,_b,_c);};this.fn_insert=function(_a,_b){var _c=this.ds_estate_code.addRow();this.ds_estate_code.setColumn(_c,"MDIATN_JCFFR_SE",'001');this.Div00.edit_mtlty.setFocus();};this.fn_delete=function(_a,_b){if(this.gfn_message("confirm.삭제여부")){var _c=this.ds_estate_code.rowposition;var _d=this.ds_estate_code.getRowType(_c);this.ds_estate_code.deleteRow(_c);}this.fn_transaction("saveSlaryList");};this.grd_estate_code_oncelldblclick=function(_a,_b){var _c=new Dataset();_c.copyData(this.ds_estate_code);_c.clearData();var _d=_c.addRow();_c.copyRow(_d,this.ds_estate_code,this.ds_estate_code.rowposition);this.close(_c.saveXML());};this.Button01_onclick=function(_a,_b){this.grd_estate_code_oncelldblclick();};this.Button03_onclick=function(){for(var _b=0;_b<this.checkDs.length;_b++ ){if(this.comUtils.isDatasetUpdated(this.checkDs[_b])){var _a=this.gfn_message("confirm.변경.취소.여부");if(_a){this.checkDs[_b].reset();}return _a;}}};this.Div00_Button04_onclick=function(_a,_b){if(this.ds_estate_code.rowcount<0){return;}var _c=function(_e,_f){if(Eco.isEmpty(_f)){return;}trace('OK\n'+_f);var _g=new Dataset();nRowCnt=_g.loadXML(_f);if(nRowCnt<1){return;}var _h="ZIP=ZIPNO,"+"ADRES=ROADADDRPART1,"+"ADRES_DETAIL=ROADADDRPART2,";;var _i=this.ds_estate_code;_i.copyRow(_i.rowposition,_g,0,_h);};var _d=this.Div00.edt_zip.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_d},"common::frmZipAddressPopup.xfdl",_c);};this.Button50_onclick=function(_a,_b){this.Button03_onclic();};this.Button02_onclick=function(_a,_b){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT030101_P01_oninit,this);this.addEventHandler("onload",this.RNT030101_P01_onload,this);this.Static00.addEventHandler("onclick",this.Static00_onclick,this);this.grd_estate_code.addEventHandler("oncelldblclick",this.grd_estate_code_oncelldblclick,this);this.Button05.addEventHandler("onclick",this.fn_search,this);this.Button04.addEventHandler("onclick",this.fn_insert,this);this.Button03.addEventHandler("onclick",this.Button03_onclick,this);this.Button23.addEventHandler("onclick",this.fn_save,this);this.Button02.addEventHandler("onclick",this.Button02_onclick,this);this.Div00.Button04.addEventHandler("onclick",this.Div00_Button04_onclick,this);};this.loadIncludeScript("RNT030101_P01.xfdl");};})();