﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020201_T01");this.set_classname("UI_ACC020201_T01");this.set_titletext("세부내용(지출)");this._setFormPosition(0,0,882,278);}_a=new Grid("grd_actDetailExpndtr","absolute","0","5","882","85",null,null,this);_a.set_taborder("0");_a.set_binddataset("ds_actDetailExpndtr");_a.set_autosizingtype("row");_a.set_extendsizetype("row");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"행위금액\"/><Cell col=\"2\" text=\"면세금액\"/><Cell col=\"3\" text=\"영수자\"/><Cell col=\"4\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACTION_AMOUNT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXXPT_AMOUNT\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:RCPT_MAN\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:ACNUTNO\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Div("div_detail1","absolute","0","95","882","183",null,null,this);_a.set_taborder("1");_a.set_cssclass("div_detailBox");this.addChild(_a.name,_a);_a=new Static("Static27","absolute","103","0",null,"27","0",null,this.div_detail1);_a.set_taborder("41");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static15","absolute","103","26",null,"27","0",null,this.div_detail1);_a.set_taborder("42");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static16","absolute","103","52",null,"27","0",null,this.div_detail1);_a.set_taborder("43");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static17","absolute","103","78",null,"27","0",null,this.div_detail1);_a.set_taborder("44");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static18","absolute","103","104",null,"27","0",null,this.div_detail1);_a.set_taborder("45");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static19","absolute","103","130",null,"27","0",null,this.div_detail1);_a.set_taborder("46");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static20","absolute","103","156",null,"27","0",null,this.div_detail1);_a.set_taborder("47");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","104","27",null,null,this.div_detail1);_a.set_taborder("27");_a.set_text("행위금액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static01","absolute","436","0","104","27",null,null,this.div_detail1);_a.set_taborder("28");_a.set_text("부가세행위금액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","26","104","27",null,null,this.div_detail1);_a.set_taborder("29");_a.set_text("거래처코드");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","78","104","27",null,null,this.div_detail1);_a.set_taborder("30");_a.set_text("영수일자");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static04","absolute","218","78","104","27",null,null,this.div_detail1);_a.set_taborder("31");_a.set_text("영수자");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","104","104","27",null,null,this.div_detail1);_a.set_taborder("32");_a.set_text("지급은행");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","106","3","110","21",null,null,this.div_detail1);_a.set_taborder("0");_a.set_mask("###,###,###,###,###");_a.set_cssclass("msk_WF_Essential");_a.set_limitbymask("integer");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","542","3","110","21",null,null,this.div_detail1);_a.set_taborder("2");_a.set_mask("###,###,###,###,###");_a.set_limitbymask("integer");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static06","absolute","218","0","104","27",null,null,this.div_detail1);_a.set_taborder("33");_a.set_text("면세금액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static07","absolute","654","26","104","27",null,null,this.div_detail1);_a.set_taborder("34");_a.set_text("공급가액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static09","absolute","654","104","104","27",null,null,this.div_detail1);_a.set_taborder("35");_a.set_text("기업구분");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static11","absolute","218","104","104","27",null,null,this.div_detail1);_a.set_taborder("36");_a.set_text("계좌번호");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static08","absolute","654","0","104","27",null,null,this.div_detail1);_a.set_taborder("37");_a.set_text("부가세여부");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static10","absolute","654","52","104","27",null,null,this.div_detail1);_a.set_taborder("38");_a.set_text("부가세액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static12","absolute","436","26","104","27",null,null,this.div_detail1);_a.set_taborder("39");_a.set_text("대표자");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","106","81","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("10");_a.set_dateformat("yyyy-MM-dd");_a.set_value("null");_a=new MaskEdit("MaskEdit02","absolute","324","3","110","21",null,null,this.div_detail1);_a.set_taborder("1");_a.set_mask("###,###,###,###,###");_a.set_limitbymask("integer");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","760","29","110","21",null,null,this.div_detail1);_a.set_taborder("3");_a.set_mask("###,###,###,###,###");_a.set_limitbymask("integer");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit04","absolute","760","55","110","21",null,null,this.div_detail1);_a.set_taborder("7");_a.set_mask("###,###,###,###,###");_a.set_limitbymask("integer");this.div_detail1.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","106","107","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("12");_a.set_innerdataset("ds_fnncInstt");_a.set_codecolumn("FNNC_INSTT_CODE");_a.set_datacolumn("FNNC_INSTT_CODE_NM");_a=new Combo("Combo01","absolute","760","107","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);var _b=new Dataset("Combo01_innerdataset",this.div_detail1.Combo01);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">대기업/기타</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중소기업</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("14");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Combo("Combo02","absolute","760","3","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("9");_a.set_innerdataset("ds_acc005");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a=new Edit("Edit00","absolute","542","29","110","21",null,null,this.div_detail1);_a.set_taborder("6");_a.set_maxlength("15");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","106","29","110","21",null,null,this.div_detail1);_a.set_taborder("4");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","218","29","216","21",null,null,this.div_detail1);_a.set_taborder("5");_a.set_cssclass("edt_WF_Readonly");_a.set_readonly("true");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","324","81","328","21",null,null,this.div_detail1);_a.set_taborder("11");_a.set_maxlength("15");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","324","107","328","21",null,null,this.div_detail1);_a.set_taborder("13");_a.set_maxlength("20");_a.set_inputtype("number");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static14","absolute","0","52","104","27",null,null,this.div_detail1);_a.set_taborder("40");_a.set_text("주소");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","106","55","546","21",null,null,this.div_detail1);_a.set_taborder("8");_a.set_maxlength("100");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox03","absolute","331","134","73","20",null,null,this.div_detail1);_a.set_taborder("15");_a.set_text("지역업체");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox04","absolute","406","134","73","20",null,null,this.div_detail1);_a.set_taborder("16");_a.set_text("여성기업");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox05","absolute","481","134","55","20",null,null,this.div_detail1);_a.set_taborder("17");_a.set_text("장애인");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox06","absolute","538","134","86","20",null,null,this.div_detail1);_a.set_taborder("18");_a.set_text("중증장애인");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox07","absolute","626","134","86","20",null,null,this.div_detail1);_a.set_taborder("19");_a.set_text("사회적기업");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox08","absolute","106","159","112","20",null,null,this.div_detail1);_a.set_taborder("20");_a.set_text("장애인생산시설");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox09","absolute","220","159","112","20",null,null,this.div_detail1);_a.set_taborder("21");_a.set_text("사회적협동조합");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox10","absolute","714","134","73","20",null,null,this.div_detail1);_a.set_taborder("22");_a.set_text("녹색제품");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox00","absolute","106","134","60","20",null,null,this.div_detail1);_a.set_taborder("23");_a.set_text("친환경");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox01","absolute","168","134","73","20",null,null,this.div_detail1);_a.set_taborder("24");_a.set_text("기술개발");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox02","absolute","243","134","86","20",null,null,this.div_detail1);_a.set_taborder("25");_a.set_text("공사용자재");_a.set_falsevalue("0");_a.set_truevalue("1");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox11","absolute","768","159","105","20",null,null,this.div_detail1);_a.set_taborder("26");_a.set_text("중기간경쟁제품");_a.set_falsevalue("0");_a.set_truevalue("1");_a.set_visible("false");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static21","absolute","0","130","104","53",null,null,this.div_detail1);_a.set_taborder("48");_a.set_text("제품구분");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Button("btn_bcncPopup2","absolute","195","29","21","21",null,null,this.div_detail1);_a.set_taborder("49");_a.set_cssclass("btn_WF_Search");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox12","absolute","334","159","125","20",null,null,this.div_detail1);_a.set_taborder("50");_a.set_text("장애인표준사업장");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox13","absolute","461","159","60","20",null,null,this.div_detail1);_a.set_taborder("51");_a.set_text("물산업");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox14","absolute","523","159","73","20",null,null,this.div_detail1);_a.set_taborder("52");_a.set_text("의료산업");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox15","absolute","598","159","73","20",null,null,this.div_detail1);_a.set_taborder("53");_a.set_text("농업산업");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_detail1.addChild(_a.name,_a);_a=new CheckBox("CheckBox16","absolute","673","159","86","20",null,null,this.div_detail1);_a.set_taborder("54");_a.set_text("에너지산업");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_detail1.addChild(_a.name,_a);_a=new Layout("default","",476,122,this.div_detail1,function(_c){_c.set_taborder("1");_c.set_cssclass("div_detailBox");});this.div_detail1.addLayout(_a.name,_a);_a=new Layout("default","",882,278,this,function(_c){_c.set_classname("UI_ACC020201_T01");_c.set_titletext("세부내용(지출)");});this.addLayout(_a.name,_a);_a=new BindItem("item23","div_detail1.Calendar00","value","ds_actDetailExpndtr","RCPT_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_detail1.MaskEdit00","value","ds_actDetailExpndtr","ACTION_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail1.MaskEdit02","value","ds_actDetailExpndtr","TAXXPT_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail1.Combo02","value","ds_actDetailExpndtr","VAT_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail1.MaskEdit01","value","ds_actDetailExpndtr","VAT_ACTION_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail1.MaskEdit03","value","ds_actDetailExpndtr","SUPLY_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail1.MaskEdit04","value","ds_actDetailExpndtr","VAT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_detail1.Edit01","value","ds_actDetailExpndtr","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail1.Edit00","value","ds_actDetailExpndtr","NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_detail1.Edit05","value","ds_actDetailExpndtr","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_detail1.Combo01","value","ds_actDetailExpndtr","ENTRPRS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_detail1.Edit03","value","ds_actDetailExpndtr","RCPT_MAN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item22","div_detail1.Combo00","value","ds_actDetailExpndtr","FNNC_INSTT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_detail1.Edit04","value","ds_actDetailExpndtr","ACNUTNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item42","div_detail1.CheckBox03","value","ds_actDetailExpndtr","AREA_ENTRPS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item43","div_detail1.CheckBox04","value","ds_actDetailExpndtr","FEMALE_ENTRPRS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item44","div_detail1.CheckBox05","value","ds_actDetailExpndtr","DSPSN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item45","div_detail1.CheckBox06","value","ds_actDetailExpndtr","SRSILL_DSPSN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item46","div_detail1.CheckBox07","value","ds_actDetailExpndtr","SOCTY_ENTRPRS");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item54","div_detail1.CheckBox08","value","ds_actDetailExpndtr","DSPSN_PRDCTN_FCLTY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item58","div_detail1.CheckBox09","value","ds_actDetailExpndtr","SOCTY_CPER_MXTR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item59","div_detail1.CheckBox10","value","ds_actDetailExpndtr","GREEN_PRDUCT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item47","div_detail1.CheckBox00","value","ds_actDetailExpndtr","EVRFRND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item48","div_detail1.CheckBox01","value","ds_actDetailExpndtr","TCNDVLP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item49","div_detail1.CheckBox02","value","ds_actDetailExpndtr","CNTRWK_PRPOS_MTRIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item66","div_detail1.CheckBox11","value","ds_actDetailExpndtr","MIDDL_PD_CMPET_PRDUCT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_detail1.Edit02","value","ds_actDetailExpndtr","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_detail1.CheckBox12","value","ds_actDetailExpndtr","DSPSN_STD_BPLC");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_detail1.CheckBox13","value","ds_actDetailExpndtr","WATER_INDUST");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_detail1.CheckBox14","value","ds_actDetailExpndtr","MDLC_INDUST");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_detail1.CheckBox15","value","ds_actDetailExpndtr","FARMNG_INDUST");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_detail1.CheckBox16","value","ds_actDetailExpndtr","ENERGY_INDUST");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("ACC020201_T01.xfdl","lib::comInclude.xjs");this.registerScript("ACC020201_T01.xfdl",function(){this.fn_onload=function(_a,_b){if(this.parent.parent.ds_cond.getRowCount()>0){this.fn_search();}};this.fn_search=function(){this.parent.parent.fn_transaction("caActDetailExpndtrList");};this.btn_addRow_onclick=function(_a,_b){var _c=this.parent.parent.ds_actDetailExpndtr.addRow();this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"ACTION_AMOUNT","0");this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"TAXXPT_AMOUNT","0");this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"VAT_AT","0");this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"VAT_ACTION_AMOUNT","0");this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"SUPLY_AMOUNT","0");this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"VAT","0");this.parent.parent.ds_actDetailExpndtr.setColumn(_c,"RCPT_DE",this.parent.parent.ds_actMastr.getColumn(0,"CAUSE_ACTION_DE"));};this.btn_delRow_onclick=function(_a,_b){if(this.parent.parent.ds_actDetailExpndtr.getRowCount()>0){if(this.gfn_message("confirm.삭제여부")){this.parent.parent.ds_actDetailExpndtr.deleteRow(this.parent.parent.ds_actDetailExpndtr.rowposition);}}};this.btn_cancel_onclick=function(_a,_b){if(this.gfn_message("confirm.취소여부")){this.parent.parent.ds_actDetailExpndtr.reset();this.parent.parent.ds_actDetailExpndtr.applyChange();return;}};this.fn_popup_onclick=function(_a,_b){var _c=system.clientToScreenX(this,0);var _d=system.clientToScreenY(this,0);var _e=new ChildFrame;switch(_a.name){case "btn_bcncPopup2":this.gfn_popup(_a.name,600,500,"거래처 선택",{searchStr:this.parent.parent.ds_actMastr.saveXML(),bAcnutPop:true},"mis_ctr::CTR010101_P02.xfdl","fn_popupCallBack",true);break;}};this.fn_popupCallBack=function(_a,_b){if(_b==null||_b.length==0){return;}var _c=new Dataset();_c.loadXML(_b);switch(_a){case "btn_bcncPopup2":var _d=this.parent.parent.ds_actDetailExpndtr.rowposition;this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"BCNC_CODE",_c.getColumn(0,"BCNC_CODE"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"BCNC_NM",_c.getColumn(0,"BCNC_NM"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"NM",_c.getColumn(0,"RPRSNTV"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"RCPT_MAN",_c.getColumn(0,"RPRSNTV"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"ENTRPRS_SE",_c.getColumn(0,"SMLPZ_SE"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"EVRFRND",_c.getColumn(0,"EVRFRND_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"TCNDVLP",_c.getColumn(0,"TCNDVLP"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"CNTRWK_PRPOS_MTRIL",_c.getColumn(0,"CNTRWK_PRPOS_MTRIL"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"AREA_ENTRPS",_c.getColumn(0,"AREA_ENTRPS_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"FEMALE_ENTRPRS",_c.getColumn(0,"FEMALE_ENTRPRS_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"DSPSN",_c.getColumn(0,"DSPSN_ENTRPRS_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"SRSILL_DSPSN",_c.getColumn(0,"SRSILL_DSPSN_ENTRPRS_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"SOCTY_ENTRPRS",_c.getColumn(0,"SOCENT_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"GREEN_PRDUCT",_c.getColumn(0,"GREEN_PRDUCT_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"DSPSN_PRDCTN_FCLTY",_c.getColumn(0,"DSPSN_PRDCTN_FCLTY_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"SOCTY_CPER_MXTR",_c.getColumn(0,"SOCTY_CPER_MXTR_AT"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"DSPSN_STD_BPLC",_c.getColumn(0,"DSPSN_STD_BPLC"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"WATER_INDUST",_c.getColumn(0,"WATER_INDUST"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"MDLC_INDUST",_c.getColumn(0,"MDLC_INDUST"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"FARMNG_INDUST",_c.getColumn(0,"FARMNG_INDUST"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"ENERGY_INDUST",_c.getColumn(0,"ENERGY_INDUST"));var _e="";if(!this.comUtils.isNull(_c.getColumn(0,"RN"))){_e+=_c.getColumn(0,"RN");if(!this.comUtils.isNull(_c.getColumn(0,"DETAIL_RDNMADR"))){_e+="";}}if(!this.comUtils.isNull(_c.getColumn(0,"DETAIL_RDNMADR"))){_e+=_c.getColumn(0,"DETAIL_RDNMADR");}if(this.comUtils.isNull(_e)){if(!this.comUtils.isNull(_c.getColumn(0,"ADRES"))){_e+=_c.getColumn(0,"ADRES");if(!this.comUtils.isNull(_c.getColumn(0,"DETAIL_ADRES"))){_e+="";}}if(!this.comUtils.isNull(_c.getColumn(0,"DETAIL_ADRES"))){_e+=_c.getColumn(0,"DETAIL_ADRES");}}this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"ADRES",_e);this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"FNNC_INSTT_CODE",_c.getColumn(0,"BANK_CODE"));this.parent.parent.ds_actDetailExpndtr.setColumn(_d,"ACNUTNO",_c.getColumn(0,"ACNUTNO"));if(_d==0){if(this.comUtils.isNull(this.parent.parent.ds_actMastr.getColumn(0,"BCNC_CODE"))){this.parent.parent.ds_actMastr.setColumn(0,"BCNC_CODE",_c.getColumn(0,"BCNC_CODE"));this.parent.parent.ds_actMastr.setColumn(0,"BCNC_NM",_c.getColumn(0,"BCNC_NM"));}}break;}};});this.on_initEvent=function(){this.addEventHandler("onload",this.fn_onload,this);this.div_detail1.btn_bcncPopup2.addEventHandler("onclick",this.fn_popup_onclick,this);};this.loadIncludeScript("ACC020201_T01.xfdl");};})();