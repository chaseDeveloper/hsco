﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL010110_T01");this.set_classname("SAL010110_T01");this.set_titletext("기본사항");this._setFormPosition(0,0,658,440);}_a=new Static("Static27","absolute","105","411","410","27",null,null,this);_a.set_taborder("18");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static22","absolute","105","357","410","27",null,null,this);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static18","absolute","105","303","410","27",null,null,this);_a.set_taborder("20");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static14","absolute","105","277","410","27",null,null,this);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","105","62","410","27",null,null,this);_a.set_taborder("22");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","105","36","410","27",null,null,this);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static21","absolute","0","36","113","27",null,null,this);_a.set_taborder("24");_a.set_text("기본급");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","9","113","27",null,null,this);_a.set_taborder("25");_a.set_text("기본사항");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new MaskEdit("msk_bassAmount","absolute","115","39","140","21",null,null,this);_a.set_taborder("0");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","257","36","113","27",null,null,this);_a.set_taborder("26");_a.set_text("부양가족수");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_suportCnt","absolute","372","39","140","21",null,null,this);_a.set_taborder("1");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62","113","27",null,null,this);_a.set_taborder("27");_a.set_text("장애자수");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_troblCnt","absolute","115","65","140","21",null,null,this);_a.set_taborder("2");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","91","113","27",null,null,this);_a.set_taborder("28");_a.set_text("급여계좌정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","105","116","410","27",null,null,this);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","116","113","27",null,null,this);_a.set_taborder("30");_a.set_text("급여지급은행");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","257","116","113","27",null,null,this);_a.set_taborder("31");_a.set_text("급여지급계좌");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static13","absolute","0","251","113","27",null,null,this);_a.set_taborder("32");_a.set_text("건강보험정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","277","113","27",null,null,this);_a.set_taborder("33");_a.set_text("보수월액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_mendngMtAm","absolute","115","280","140","21",null,null,this);_a.set_taborder("11");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","257","277","113","27",null,null,this);_a.set_taborder("34");_a.set_text("건강보험료");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_hlthinsInsrncAmount","absolute","372","280","140","21",null,null,this);_a.set_taborder("12");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static17","absolute","0","303","113","27",null,null,this);_a.set_taborder("35");_a.set_text("요양보험료");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_odsnInsrncAmount","absolute","115","306","140","21",null,null,this);_a.set_taborder("13");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static19","absolute","0","331","113","27",null,null,this);_a.set_taborder("36");_a.set_text("국민연금정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static20","absolute","0","357","113","27",null,null,this);_a.set_taborder("37");_a.set_text("소득월액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_npnIncomeMtAm","absolute","115","360","140","21",null,null,this);_a.set_taborder("14");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static23","absolute","257","357","113","27",null,null,this);_a.set_taborder("38");_a.set_text("국민연금액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_npnAmount","absolute","372","360","140","21",null,null,this);_a.set_taborder("15");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static24","absolute","0","385","113","27",null,null,this);_a.set_taborder("39");_a.set_text("고용보험정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static25","absolute","0","411","113","27",null,null,this);_a.set_taborder("40");_a.set_text("소득월액");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_emplyminsrncIncomeMtAm","absolute","115","414","140","21",null,null,this);_a.set_taborder("16");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static26","absolute","257","411","113","27",null,null,this);_a.set_taborder("41");_a.set_text("고용보험료");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_emplyminsrncAmount","absolute","372","414","140","21",null,null,this);_a.set_taborder("17");_a.set_readonly("true");_a.set_mask("###,###,###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Combo("cmb_salaryBankCode","absolute","115","119","140","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("3");_a.set_innerdataset("ds_bankCode");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("10 Gulim");_a.style.setStyleValue("color","disabled","#333333ff");_a=new Edit("edt_salaryBankAcnut","absolute","372","119","140","21",null,null,this);_a.set_taborder("4");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","105","197","410","27",null,null,this);_a.set_taborder("42");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","105","171","410","27",null,null,this);_a.set_taborder("43");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","0","145","129","27",null,null,this);_a.set_taborder("44");_a.set_text("호봉/근속년수정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("sta_srcls","absolute","0","171","113","27",null,null,this);_a.set_taborder("45");_a.set_text("호봉");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_srcls","absolute","115","174","140","21",null,null,this);_a.set_taborder("5");_a.set_readonly("true");_a.set_mask("###");_a.set_cssclass("msk_WF_Readonly");_a.style.setStyleValue("color","disabled","#333333ff");_a.set_limitbymask("both");this.addChild(_a.name,_a);_a=new Static("sta_srclsPromtStdrMt","absolute","0","197","113","27",null,null,this);_a.set_taborder("46");_a.set_text("호봉승급\r\n기준월");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("sta_cnwkYycnt","absolute","257","171","113","27",null,null,this);_a.set_taborder("47");_a.set_text("근속년수");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_cnwkYycnt","absolute","372","174","140","21",null,null,this);_a.set_taborder("6");_a.set_readonly("false");_a.set_mask("###");_a.style.setStyleValue("color","disabled","#333333ff");_a.set_limitbymask("both");this.addChild(_a.name,_a);_a=new Static("sta_cnwkYycntStdrMt","absolute","257","197","113","27",null,null,this);_a.set_taborder("48");_a.set_text("근속기준월");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","105","223","410","27",null,null,this);_a.set_taborder("49");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("sta_srclsPromtStdrYy","absolute","0","223","113","27",null,null,this);_a.set_taborder("50");_a.set_text("호봉승급\r\n기준년");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_srclsPromtStdrYy","absolute","115","226","140","21",null,null,this);_a.set_taborder("9");_a.set_mask("####");_a.set_limitbymask("both");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new Static("sta_cnwkYycntStdrYy","absolute","257","223","113","27",null,null,this);_a.set_taborder("51");_a.set_text("근속년수\r\n기준년");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new MaskEdit("msk_cnwkYycntStdrYy","absolute","372","226","140","21",null,null,this);_a.set_taborder("10");_a.set_mask("####");_a.set_limitbymask("both");_a.style.setStyleValue("color","disabled","#333333ff");this.addChild(_a.name,_a);_a=new MaskEdit("msk_srclsPromtStdrMt","absolute","115","200","140","21",null,null,this);_a.set_taborder("54");_a.set_mask("99");_a.set_limitbymask("both");_a.style.setStyleValue("color","disabled","#333333ff");_a.set_type("string");_a.set_maskchar(" ");this.addChild(_a.name,_a);_a=new MaskEdit("msk_cnwkPromtStdrMt","absolute","372","200","140","21",null,null,this);_a.set_taborder("56");_a.set_type("string");_a.set_mask("99");_a.set_limitbymask("both");_a.style.setStyleValue("color","disabled","#333333ff");_a.set_maskchar(" ");this.addChild(_a.name,_a);_a=new Layout("default","",658,440,this,function(_b){_b.set_classname("SAL010110_T01");_b.set_titletext("기본사항");});this.addLayout(_a.name,_a);_a=new BindItem("item43","msk_bassAmount","value","ds_bassMatter","BASS_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item44","msk_suportCnt","value","ds_bassMatter","SUPORT_CNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item45","msk_troblCnt","value","ds_bassMatter","TROBL_CNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item48","msk_mendngMtAm","value","ds_bassMatter","MENDNG_MT_AM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item49","msk_hlthinsInsrncAmount","value","ds_bassMatter","HLTHINS_INSRNC_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item50","msk_odsnInsrncAmount","value","ds_bassMatter","ODSN_INSRNC_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item51","msk_npnIncomeMtAm","value","ds_bassMatter","NPN_INCOME_MT_AM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item52","msk_npnAmount","value","ds_bassMatter","NPN_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item53","msk_emplyminsrncIncomeMtAm","value","ds_bassMatter","EMPLYMINSRNC_INCOME_MT_AM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item54","msk_emplyminsrncAmount","value","ds_bassMatter","EMPLYMINSRNC_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item46","cmb_salaryBankCode","value","ds_bassMatter","SALARY_BANK_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item47","edt_salaryBankAcnut","value","ds_bassMatter","SALARY_BANK_ACNUT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","msk_srcls","value","ds_bassMatter","SRCLS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","msk_cnwkYycnt","value","ds_bassMatter","CNWK_YYCNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","msk_srclsPromtStdrYy","value","ds_bassMatter","SRCLS_PROMT_STDR_YY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","msk_cnwkYycntStdrYy","value","ds_bassMatter","CNWK_YYCNT_STDR_YY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","msk_srclsPromtStdrMt","value","ds_bassMatter","SRCLS_PROMT_STDR_MT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","msk_cnwkPromtStdrMt","value","ds_bassMatter","CNWK_YYCNT_STDR_MT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.on_initEvent=function(){this.addEventHandler("onload",this.SAL010110_T01_onload,this);this.addEventHandler("oninit",this.SAL010110_T01_oninit,this);};this.loadIncludeScript("SAL010110_T01.xfdl");};})();