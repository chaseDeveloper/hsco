﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD020101_P01");this.set_classname("AUD020101_P01");this.set_titletext("법인카드사용내역-상세");this._setFormPosition(0,0,500,515);}_a=new Dataset("ds_catsTmpApproval",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"READFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CARDNO\" type=\"STRING\" size=\"256\"/><Column id=\"APPRNO\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CARDTYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"CARDTYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"CURRCODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAMT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TIPS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRTOT\" type=\"STRING\" size=\"256\"/><Column id=\"APPREXCH\" type=\"STRING\" size=\"256\"/><Column id=\"USDAPPRTOT\" type=\"STRING\" size=\"256\"/><Column id=\"INSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"ABROAD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINALNO\" type=\"STRING\" size=\"256\"/><Column id=\"PURCH\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISSUER\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHBIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHTEL\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"MCCNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MCCCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTAPPRCANCYN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_tempDataset",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQNO\" type=\"STRING\" size=\"256\"/><Column id=\"READFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CARDNO\" type=\"STRING\" size=\"256\"/><Column id=\"APPRNO\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CARDTYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"CARDTYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"CURRCODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAMT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TIPS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRTOT\" type=\"STRING\" size=\"256\"/><Column id=\"APPREXCH\" type=\"STRING\" size=\"256\"/><Column id=\"USDAPPRTOT\" type=\"STRING\" size=\"256\"/><Column id=\"INSTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"ABROAD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINALNO\" type=\"STRING\" size=\"256\"/><Column id=\"PURCH\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISSUER\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHBIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHTEL\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"MERCHSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"MCCNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MCCCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTAPPRCANCYN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"0","0",this);_a.set_taborder("7");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_Work","absolute","0","32",null,null,"0","0",this);_a.set_taborder("8");this.addChild(_a.name,_a);_a=new Static("sta_instType","absolute","84","185","116","27",null,null,this.div_Work);_a.set_taborder("3");_a.set_text("상품구분");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_instMonth","absolute","84","211","116","27",null,null,this.div_Work);_a.set_taborder("4");_a.set_text("할부개월수");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchBizno","absolute","84","237","116","27",null,null,this.div_Work);_a.set_taborder("5");_a.set_text("가맹점 사업자번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchName","absolute","84","289","116","27",null,null,this.div_Work);_a.set_taborder("6");_a.set_text("가맹점명");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_master","absolute","84","315","116","27",null,null,this.div_Work);_a.set_taborder("7");_a.set_text("가맹점 대표자명");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchTel","absolute","84","341","116","27",null,null,this.div_Work);_a.set_taborder("8");_a.set_text("가맹점 전화번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchNo","absolute","84","263","116","27",null,null,this.div_Work);_a.set_taborder("9");_a.set_text("가맹점 번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchAddr2","absolute","84","393","116","27",null,null,this.div_Work);_a.set_taborder("10");_a.set_text("가맹점 상세주소");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_mccName","absolute","84","419","116","27",null,null,this.div_Work);_a.set_taborder("11");_a.set_text("업종명");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_mccCode","absolute","84","445","116","27",null,null,this.div_Work);_a.set_taborder("12");_a.set_text("업종코드");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchAddr1","absolute","84","367","116","27",null,null,this.div_Work);_a.set_taborder("13");_a.set_text("가맹점 주소");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_cardNo","absolute","84","3","116","27",null,null,this.div_Work);_a.set_taborder("14");_a.set_text("카드번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_transDate","absolute","84","55","116","27",null,null,this.div_Work);_a.set_taborder("15");_a.set_text("승인일자");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_class","absolute","84","107","116","27",null,null,this.div_Work);_a.set_taborder("16");_a.set_text("승인/취소 구분");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_appramt","absolute","84","133","116","27",null,null,this.div_Work);_a.set_taborder("17");_a.set_text("승인금액");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_vat","absolute","84","159","116","27",null,null,this.div_Work);_a.set_taborder("18");_a.set_text("부가세");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_transTime","absolute","84","81","116","27",null,null,this.div_Work);_a.set_taborder("19");_a.set_text("승인시간");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_apprNo","absolute","84","29","116","27",null,null,this.div_Work);_a.set_taborder("20");_a.set_text("승인번호");_a.set_cssclass("sta_WF_Label");_a.style.set_align("right middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_cardInfo","absolute","15","3","70","235",null,null,this.div_Work);_a.set_taborder("21");_a.set_text("카드정보");_a.set_cssclass("sta_WF_Label");_a.style.set_align("center middle");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_merchInfo","absolute","15","237","70","235",null,null,this.div_Work);_a.set_taborder("22");_a.set_text("가맹점정보");_a.set_cssclass("sta_WF_Label");_a.style.set_align("center middle");this.div_Work.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"19","4","27","504",null,this.div_Work);_a.set_taborder("23");_a.set_text("제목");_a.set_cssclass("sta_WF_Label");this.div_Work.addChild(_a.name,_a);_a=new Static("Static00","absolute","199","3","285","27",null,null,this.div_Work);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static02","absolute","199","29","285","27",null,null,this.div_Work);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static04","absolute","199","55","285","27",null,null,this.div_Work);_a.set_taborder("26");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static05","absolute","199","81","285","27",null,null,this.div_Work);_a.set_taborder("27");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static06","absolute","199","107","285","27",null,null,this.div_Work);_a.set_taborder("28");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static07","absolute","199","133","285","27",null,null,this.div_Work);_a.set_taborder("29");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static08","absolute","0px","0px","0px","0px",null,null,this.div_Work);_a.set_taborder("30");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static09","absolute","199","289","285","27",null,null,this.div_Work);_a.set_taborder("31");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static10","absolute","199","237","285","27",null,null,this.div_Work);_a.set_taborder("32");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static11","absolute","199","211","285","27",null,null,this.div_Work);_a.set_taborder("33");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static12","absolute","199","185","285","27",null,null,this.div_Work);_a.set_taborder("34");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static13","absolute","199","159","285","27",null,null,this.div_Work);_a.set_taborder("35");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static14","absolute","199","419","285","27",null,null,this.div_Work);_a.set_taborder("36");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static17","absolute","199","367","285","27",null,null,this.div_Work);_a.set_taborder("37");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static18","absolute","199","341","285","27",null,null,this.div_Work);_a.set_taborder("38");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static19","absolute","199","315","285","27",null,null,this.div_Work);_a.set_taborder("39");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static15","absolute","199","445","285","27",null,null,this.div_Work);_a.set_taborder("40");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static20","absolute","199","263","285","27",null,null,this.div_Work);_a.set_taborder("41");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Static("Static16","absolute","199","393","285","27",null,null,this.div_Work);_a.set_taborder("42");_a.set_cssclass("sta_WF_Labelbg");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_merchAddr2","absolute","203","396","277","21",null,null,this.div_Work);_a.set_taborder("43");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_mccCode","absolute","203","448","277","21",null,null,this.div_Work);_a.set_taborder("44");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_mccName","absolute","203","422","277","21",null,null,this.div_Work);_a.set_taborder("45");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_merchAddr1","absolute","203","370","277","21",null,null,this.div_Work);_a.set_taborder("46");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_merchTel","absolute","203","344","277","21",null,null,this.div_Work);_a.set_taborder("47");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_master","absolute","203","318","277","21",null,null,this.div_Work);_a.set_taborder("48");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_merchName","absolute","203","292","277","21",null,null,this.div_Work);_a.set_taborder("49");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_merchNo","absolute","203","266","277","21",null,null,this.div_Work);_a.set_taborder("50");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_merchBizno","absolute","203","240","277","21",null,null,this.div_Work);_a.set_taborder("51");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_instMonth","absolute","203","214","277","21",null,null,this.div_Work);_a.set_taborder("52");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_instType","absolute","203","188","277","21",null,null,this.div_Work);_a.set_taborder("53");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","203","162","277","21",null,null,this.div_Work);_a.set_taborder("54");_a.set_mask("999,999,999,999");_a.style.set_align("right middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new MaskEdit("msk_appramt","absolute","203","136","277","21",null,null,this.div_Work);_a.set_taborder("55");_a.set_mask("999,999,999,999");_a.style.set_align("right middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_class","absolute","203","110","277","21",null,null,this.div_Work);_a.set_taborder("56");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new MaskEdit("msk_transTime","absolute","203","84","277","21",null,null,this.div_Work);_a.set_taborder("57");_a.set_type("string");_a.set_mask("##:##");_a.style.set_align("right middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new MaskEdit("msk_transDate","absolute","203","58","277","21",null,null,this.div_Work);_a.set_taborder("2");_a.set_type("string");_a.set_mask("####-##-##");_a.style.set_align("right middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_apprNo","absolute","203","32","277","21",null,null,this.div_Work);_a.set_taborder("1");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Edit("edt_cardNo","absolute","203","6","277","21",null,null,this.div_Work);_a.set_taborder("0");_a.style.set_align("left middle");_a.set_enable("false");this.div_Work.addChild(_a.name,_a);_a=new Static("sta_cardDetail","absolute","17","16","200","19",null,null,this);_a.set_taborder("13");_a.set_text("법인카드사용 상세내역");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","39","15","440",null,null,this);_a.set_taborder("15");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"41","15","440","2",null,this);_a.set_taborder("16");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","17","30","330","5",null,null,this);_a.set_taborder("35");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","2","472","15",null,null,this);_a.set_taborder("36");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_Work,function(_b){_b.set_taborder("8");});this.div_Work.addLayout(_a.name,_a);_a=new Layout("default","",500,515,this,function(_b){_b.set_classname("AUD020101_P01");_b.set_titletext("법인카드사용내역-상세");});this.addLayout(_a.name,_a);_a=new BindItem("item3","Div00.edt_PRGN_CASE_SJ","value","DS_PRGN_CASE_LIST","PRGN_CASE_SJ");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("AUD020101_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD020101_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD020101_P01.xfdl",function(){var _a=this.parent.APP_ROW;var _b=this.parent.APP_INFO;this.AUD020101_P01_oninit=function(_c,_d){this.fn_init_form();this.fn_init_dataset();};this.AUD020101_P01_onload=function(_c,_d){this.ds_tempDataset.loadXML(_b);this.ds_catsTmpApproval.clearData();this.ds_catsTmpApproval.addRow();this.ds_catsTmpApproval.copyRow(0,this.ds_tempDataset,_a);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.selectCatsTmpApprovalR=function(){this.ds_cond01.clearData();var _c=this.ds_cond01.addRow();this.ds_cond01.setColumn(_c,"SEQ",this.approval_seq_no);this.fn_transaction("selectcatsTmpApporvalR");};this.fn_transaction=function(_c){switch(_c){case "selectcatsTmpApporvalR":var _d="hsco/mis/aud/AUD020101/selectcatsTmpApporvalR.do";var _e="input03=ds_cond01";var _f="ds_catsTmpApprovalR=output03";break;}var _g="";Ex.core.tran(this,_c,_d,_e,_f,_g);};this.btn_close_onclick=function(_c,_d){this.close();};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD020101_P01_onload,this);this.addEventHandler("oninit",this.AUD020101_P01_oninit,this);this.div_Work.sta_merchInfo.addEventHandler("onclick",this.div_Work_sta_merchInfo_onclick,this);this.sta_cardDetail.addEventHandler("onclick",this.Static00_onclick,this);};this.loadIncludeScript("AUD020101_P01.xfdl");};})();