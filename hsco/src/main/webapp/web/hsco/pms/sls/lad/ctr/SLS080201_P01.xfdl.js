﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS080201_P01");this.set_classname("SLS080201");this.set_titletext("토지정보");this._setFormPosition(0,0,500,368);}_a=new Dataset("ds_ladSeCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_prposSeCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladSeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladCodeSh",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_1\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACQS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERTN_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_1\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_CONFM_NTFC_DE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ladInfo",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_ZIP_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_BASS_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_DETAIL_ADRES_LNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRPOS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSIFICATION_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTNT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BGNN_AR\" type=\"STRING\" size=\"256\"/><Column id=\"BGNN_UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"BGNN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AR\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_UNTPC\" type=\"STRING\" size=\"256\"/><Column id=\"DCSN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REMVL_FLFL_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_GTN\" type=\"STRING\" size=\"256\"/><Column id=\"FYER_RNTCHRG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FLPTH\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"REMNDR_LAD_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPLY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCT_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_AR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLCK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_landCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"LAD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_LAD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","18","175","465","27",null,null,this);_a.set_taborder("56");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2","496","34",null,null,this);_a.set_taborder("3");_a.set_text("토지정보");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15","384",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","483","2","15","384",null,null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36","496","15",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","368","496","10",null,null,this);_a.set_taborder("7");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","76","466","5",null,null,this);_a.set_taborder("9");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"51","50","25","17",null,this);_a.set_taborder("10");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Div("Div01","absolute","17","81",null,"59","17",null,this);_a.set_taborder("11");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","6","64","21",null,null,this.Div01);_a.set_taborder("24");_a.set_text("토지코드");_a.set_cssclass("sta_WFSA_Label");this.Div01.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","31","64","21",null,null,this.Div01);_a.set_taborder("32");_a.set_text("B.L.T");_a.set_cssclass("sta_WFSA_Label");this.Div01.addChild(_a.name,_a);_a=new Edit("edt_block","absolute","79","31","40","21",null,null,this.Div01);_a.set_taborder("38");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div01.addChild(_a.name,_a);_a=new Edit("edt_lot","absolute","123","31","50","21",null,null,this.Div01);_a.set_taborder("39");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div01.addChild(_a.name,_a);_a=new Edit("edt_type","absolute","177","31","40","21",null,null,this.Div01);_a.set_taborder("40");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.Div01.addChild(_a.name,_a);_a=new Static("Static01","absolute","235","31","85","21",null,null,this.Div01);_a.set_taborder("41");_a.set_text("B.L.T(실제)");_a.set_cssclass("sta_WFSA_Label");this.Div01.addChild(_a.name,_a);_a=new Static("Static08","absolute","16","139","466","10",null,null,this);_a.set_taborder("12");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static51","absolute","17","149","465","27",null,null,this);_a.set_taborder("14");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","17","202","465","27",null,null,this);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","17","228","465","27",null,null,this);_a.set_taborder("16");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","17","306","465","27",null,null,this);_a.set_taborder("17");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","17","280","465","27",null,null,this);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","17","254","465","27",null,null,this);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","17","332","465","27",null,null,this);_a.set_taborder("20");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static84","absolute","17","149","90","54",null,null,this);_a.set_taborder("21");_a.set_text("주소");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","17","202","90","27",null,null,this);_a.set_taborder("22");_a.set_text("토지구분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","17","228","90","27",null,null,this);_a.set_taborder("24");_a.set_text("용도구분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","17","254","90","27",null,null,this);_a.set_taborder("25");_a.set_text("당초면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","17","280","90","27",null,null,this);_a.set_taborder("26");_a.set_text("당초금액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","17","306","90","27",null,null,this);_a.set_taborder("27");_a.set_text("참고사항");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","17","332","90","27",null,null,this);_a.set_taborder("28");_a.set_text("첨부파일");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_locplcBassAdres","absolute","206","152","272","21",null,null,this);_a.set_taborder("29");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip","absolute","109","152","92","21",null,null,this);_a.set_taborder("30");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_locplcDetailAdres","absolute","206","178","272","21",null,null,this);_a.set_taborder("31");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_rm","absolute","109","309","369","21",null,null,this);_a.set_taborder("36");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_atchFile","absolute","109","335","323","21",null,null,this);_a.set_taborder("37");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","269","202","90","27",null,null,this);_a.set_taborder("39");_a.set_text("토지상태");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","269","228","90","27",null,null,this);_a.set_taborder("40");_a.set_text("목차구분");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","269","254","90","27",null,null,this);_a.set_taborder("41");_a.set_text("확정면적");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","269","280","90","27",null,null,this);_a.set_taborder("42");_a.set_text("확정금액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_cntntSe","absolute","360","231","118","21",null,null,this);_a.set_taborder("44");_a.set_enable("true");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute","439","335","38","21",null,null,this);_a.set_taborder("47");_a.set_text("보기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Combo("cmb_suplyCode00","absolute","21.8%","231",null,"22","47.2%",null,this);this.addChild(_a.name,_a);_a.set_taborder("49");_a.set_cssclass("cmb_WF_Readonly");_a.set_datacolumn("ALL_CODE_NM");_a.set_codecolumn("CODE");_a.set_innerdataset("@ds_prposSeCodeSh");_a.set_readonly("true");_a=new Combo("cmb_lndCode01","absolute","21.8%","204",null,"22","47.2%",null,this);this.addChild(_a.name,_a);_a.set_taborder("50");_a.set_readonly("true");_a.set_innerdataset("@ds_ladSeCodeSh");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a.set_cssclass("cmb_WF_Readonly");_a.set_index("-1");_a=new MaskEdit("MaskEdit00","absolute","21.8%","282",null,"22","47.2%",null,this);_a.set_taborder("51");_a.set_readonly("true");_a.set_mask("9,999");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","72%","282",null,"22","4.4%",null,this);_a.set_taborder("52");_a.style.set_background("#f0f0f0ff");_a.set_mask("9,999");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","21.8%","256",null,"22","47.2%",null,this);_a.set_taborder("53");_a.set_readonly("true");_a.set_mask("9,999");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","72%","256",null,"22","4.4%",null,this);_a.set_taborder("54");_a.style.set_background("#f0f0f0ff");_a.set_mask("9,999");this.addChild(_a.name,_a);_a=new Combo("cmb_lndSts01","absolute","72%","204",null,"22","4.4%",null,this);this.addChild(_a.name,_a);_a.set_taborder("55");_a.set_innerdataset("@ds_ladSeSh");_a.set_datacolumn("CODE_NM");_a.set_codecolumn("CODE");_a.style.set_background("#f0f0f0ff");_a.set_readonly("true");_a.set_cssclass("cmb_WF_Readonly");_a=new Edit("edt_realBlck","absolute","340","113","40","21",null,null,this);_a.set_taborder("58");_a.set_inputtype("digit");_a.set_maxlength("3");_a.set_autoselect("true");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new Edit("edt_realLot","absolute","384","113","50","21",null,null,this);_a.set_taborder("59");_a.set_inputtype("digit");_a.set_maxlength("3");_a.set_autoselect("true");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new Edit("edt_realLotTy","absolute","438","113","40","21",null,null,this);_a.set_taborder("60");_a.set_inputmode("upper");_a.set_inputtype("number,english");_a.set_maxlength("3");_a.set_autoselect("true");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new Combo("cmb_ladCode","absolute","97","87","164","22",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("61");_a.set_readonly("true");_a.set_innerdataset("ds_landCode");_a.set_codecolumn("LAD_CODE");_a.set_datacolumn("ALL_LAD_NM");_a.set_cssclass("cmb_WF_Readonly");_a=new Edit("edt_locplcZip00","absolute","109","178","45","21",null,null,this);_a.set_taborder("62");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Edit("edt_locplcZip01","absolute","155","178","45","21",null,null,this);_a.set_taborder("63");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.addChild(_a.name,_a);_a=new Layout("default","",0,59,this.Div01,function(_b){_b.set_taborder("11");_b.set_cssclass("div_WFSA_Box");});this.Div01.addLayout(_a.name,_a);_a=new Layout("default","",500,368,this,function(_b){_b.set_classname("SLS080201");_b.set_titletext("토지정보");});this.addLayout(_a.name,_a);_a=new BindItem("item1","Div01.edt_block","value","ds_cond00","BLCK");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","Div01.edt_lot","value","ds_cond00","LOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","Div01.edt_type","value","ds_cond00","LOT_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","edt_locplcZip","value","ds_ladInfo","LOCPLC_ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_locplcBassAdres","value","ds_ladInfo","LOCPLC_BASS_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_locplcDetailAdres","value","ds_ladInfo","LOCPLC_DETAIL_ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","edt_cntntSe","value","ds_ladInfo","CNTNT_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","edt_rm","value","ds_ladInfo","RM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","edt_atchFile","value","ds_ladInfo","ATCH_FILE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","cmb_suplyCode00","value","ds_ladInfo","PRPOS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","cmb_lndCode01","value","ds_ladInfo","REMNDR_LAD_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","MaskEdit00","value","ds_ladInfo","BGNN_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","MaskEdit01","value","ds_ladInfo","DCSN_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","MaskEdit02","value","ds_ladInfo","BGNN_AR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","MaskEdit03","value","ds_ladInfo","DCSN_AR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","cmb_lndSts01","value","ds_ladInfo","LAD_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","edt_realBlck","value","ds_ladInfo","REAL_BLCK");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","edt_realLot","value","ds_ladInfo","REAL_LOT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","edt_realLotTy","value","ds_ladInfo","REAL_LOT_TY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","cmb_ladCode","value","ds_cond00","LAD_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","edt_locplcZip00","value","ds_ladInfo","LOCPLC_BASS_ADRES_LNM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","edt_locplcZip01","value","ds_ladInfo","LOCPLC_DETAIL_ADRES_LNM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS080201_P01.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("SLS080201_P01.xfdl",function(){this.callback=null;this.SLS080201_P01_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.SLS080201_P01_onload=function(_a,_b){this.callback=this.parent.callback;this.fn_loadCombo();this.ds_cond00.setColumn(0,"LAD_CODE",this.parent.ladCode);this.ds_cond00.setColumn(0,"BLCK",this.parent.blck);this.ds_cond00.setColumn(0,"LOT",this.parent.lot);this.ds_cond00.setColumn(0,"LOT_TY",this.parent.lotTy);this.fn_transaction("selectLadInfo");};this.fn_loadCombo=function(){var _a=[{OUT_PUT:"ds_prposSeCodeSh",GRP_CODE:"LAD003",USE_AT:"1"},{OUT_PUT:"ds_ladSeCodeSh",GRP_CODE:"LAD0A2",USE_AT:"1"},{OUT_PUT:"ds_ladSeSh",GRP_CODE:"LAD0A3",USE_AT:"1"}];this.pmsUtil.getCommonCode("selectCommonCode",_a);var _b={};_b["UASE_AT"]="1";this.pmsUtil.getLadCodeList(_b,"ds_landCode");};this.fn_init_form=function(){};this.fn_transaction=function(_a){switch(_a){case "selectLadInfo":var _b="hsco/pms/sls/lad/ctr/SLS080201/selectLadInfo.do";var _c="input1=ds_cond00";var _d="ds_ladInfo=output1";break;default:break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d==true){switch(_a){case "selectCommonCode":this.ds_suplyCode.copyData(this.ds_suplyCodeSh);targetCombo=this.div_search.cmb_ladSeCodeSh;comboOption={};comboOption["type"]=this.pmsUtil.PROMPT_ALL;comboOption["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,comboOption);targetCombo=this.div_search.cmb_prposSeCodeSh;comboOption={};comboOption["type"]=this.pmsUtil.PROMPT_ALL;comboOption["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,comboOption);targetCombo=this.div_search.cmb_ladSeSh;comboOption={};comboOption["type"]=this.pmsUtil.PROMPT_ALL;comboOption["noNullText"]="코드없음";this.pmsUtil.setComboPrompt(targetCombo,comboOption);break;case "selectLadInfo":break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.btn_close_onclick=function(_a,_b){this.close();};this.btn_save_onclick=function(_a,_b){};});this.on_initEvent=function(){this.addEventHandler("onload",this.SLS080201_P01_onload,this);this.addEventHandler("oninit",this.SLS080201_P01_oninit,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.cmb_ladCode.addEventHandler("onitemchanged",this.div_search_cmb_ladCodeSh_onitemchanged,this);};this.loadIncludeScript("SLS080201_P01.xfdl");};})();