﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("ACC020201_P01");this.set_classname("UI_ACC020201_P01");this.set_titletext("원인행위정보");this.set_scrollbars("none");this._setFormPosition(0,0,914,247);}_a=new Dataset("ds_bdg001",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_bdg002",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cnsul",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CAUSE_ACTION_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_SJ\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CNSUL_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNSUL_RTRVL_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUMRY\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUKIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DECSN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNSUL_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDGET_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BSNS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SANCTN_KND\" type=\"STRING\" size=\"256\"/><Column id=\"EXPNDTR_UNIT_BLCE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EXECUT_BUDGET_JAN_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ASIGN_JAN_AMOUNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CAUSE_ACTION_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","0",null,"15","0",null,this);_a.set_taborder("25");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("Button02","absolute",null,"15","50","25","15",null,this);_a.set_taborder("1");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"0",this);_a.set_taborder("28");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","15",null,"0","0",this);_a.set_taborder("29");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","248","18","544","21",null,null,this);_a.set_taborder("56");_a.set_cssclass("sta_WF_Title02");_a.style.set_background("left middle");_a.style.set_color("red");_a.style.set_align("right middle");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","0","38",null,"10","0",null,this);_a.set_taborder("57");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_detail1","absolute","15","48","884","184",null,null,this);_a.set_taborder("58");_a.set_cssclass("div_detailBox");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","103","52","334","27",null,null,this.div_detail1);_a.set_taborder("86");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static11","absolute","103","26","334","27",null,null,this.div_detail1);_a.set_taborder("87");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static12","absolute","103","104","334","27",null,null,this.div_detail1);_a.set_taborder("88");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static06","absolute","551","104",null,"27","0",null,this.div_detail1);_a.set_taborder("89");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static05","absolute","103","78","334","27",null,null,this.div_detail1);_a.set_taborder("90");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static37","absolute","103","0","334","27",null,null,this.div_detail1);_a.set_taborder("91");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","104","27",null,null,this.div_detail1);_a.set_taborder("92");_a.set_text("원인행위번호");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static01","absolute","448","104","104","27",null,null,this.div_detail1);_a.set_taborder("93");_a.set_text("품의금액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","52","104","27",null,null,this.div_detail1);_a.set_taborder("94");_a.set_text("품의일자");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","78","104","27",null,null,this.div_detail1);_a.set_taborder("95");_a.set_text("부서");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit01","absolute","554","107","110","21",null,null,this.div_detail1);_a.set_taborder("96");_a.set_mask("#,###");_a.set_cssclass("msk_WF_Readonly");_a.set_readonly("true");this.div_detail1.addChild(_a.name,_a);_a=new Calendar("Calendar03","absolute","106","55","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("97");_a.set_readonly("true");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Readonly");_a.style.set_align("center");_a=new Edit("Edit00","absolute","106","3","110","21",null,null,this.div_detail1);_a.set_taborder("98");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","26","104","27",null,null,this.div_detail1);_a.set_taborder("99");_a.set_text("품의제목");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit10","absolute","106","29","328","21",null,null,this.div_detail1);_a.set_taborder("100");_a.set_lengthunit("utf8");_a.set_maxlength("100");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static03","absolute","448","0","104","27",null,null,this.div_detail1);_a.set_taborder("101");_a.set_text("계정구분");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static08","absolute","551","0",null,"27","0",null,this.div_detail1);_a.set_taborder("102");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static09","absolute","448","26","104","27",null,null,this.div_detail1);_a.set_taborder("103");_a.set_text("예산계정과목");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static10","absolute","551","26",null,"27","0",null,this.div_detail1);_a.set_taborder("104");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static13","absolute","448","52","104","27",null,null,this.div_detail1);_a.set_taborder("105");_a.set_text("부기코드");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static14","absolute","551","52",null,"27","0",null,this.div_detail1);_a.set_taborder("106");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Radio("rd_balcSe","absolute","775","3","105","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("107");_a.set_innerdataset("@ds_bdg002");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_readonly("true");_a.set_direction("vertical");_a=new Static("Static16","absolute","666","0","104","27",null,null,this.div_detail1);_a.set_taborder("108");_a.set_text("수/지구분");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","554","3","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("109");_a.set_readonly("true");_a.set_innerdataset("@ds_bdg001");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Readonly");_a=new Edit("Edit01","absolute","666","29","215","21",null,null,this.div_detail1);_a.set_taborder("110");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","555","29","110","21",null,null,this.div_detail1);_a.set_taborder("111");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","666","55","215","21",null,null,this.div_detail1);_a.set_taborder("112");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","555","55","110","21",null,null,this.div_detail1);_a.set_taborder("113");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static17","absolute","218","0","104","27",null,null,this.div_detail1);_a.set_taborder("114");_a.set_text("결재상태");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static18","absolute","448","78","104","27",null,null,this.div_detail1);_a.set_taborder("115");_a.set_text("사업코드");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static19","absolute","551","78",null,"27","0",null,this.div_detail1);_a.set_taborder("116");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","555","81","110","21",null,null,this.div_detail1);_a.set_taborder("117");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit06","absolute","666","81","215","21",null,null,this.div_detail1);_a.set_taborder("118");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static20","absolute","666","104","104","27",null,null,this.div_detail1);_a.set_taborder("119");_a.set_text("품의집행금액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit00","absolute","772","107","110","21",null,null,this.div_detail1);_a.set_taborder("120");_a.set_readonly("true");_a.set_mask("#,###");_a.set_cssclass("msk_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static21","absolute","448","130","104","27",null,null,this.div_detail1);_a.set_taborder("121");_a.set_text("품의회수금액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static22","absolute","551","130",null,"27","0",null,this.div_detail1);_a.set_taborder("122");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("msk_cnsulRtrvlAmount","absolute","554","133","110","21",null,null,this.div_detail1);_a.set_taborder("123");_a.set_readonly("true");_a.set_mask("#,###");_a.set_cssclass("msk_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static23","absolute","666","130","104","27",null,null,this.div_detail1);_a.set_taborder("124");_a.set_text("품의잔액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit03","absolute","772","133","110","21",null,null,this.div_detail1);_a.set_taborder("125");_a.set_readonly("true");_a.set_mask("#,###");_a.set_cssclass("msk_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static24","absolute","448","156","104","27",null,null,this.div_detail1);_a.set_taborder("126");_a.set_text("배정잔액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static25","absolute","551","156",null,"27","0",null,this.div_detail1);_a.set_taborder("127");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit04","absolute","554","159","110","21",null,null,this.div_detail1);_a.set_taborder("128");_a.set_readonly("true");_a.set_mask("#,###");_a.set_cssclass("msk_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","324","3","110","21",null,null,this.div_detail1);this.div_detail1.addChild(_a.name,_a);_a.set_taborder("129");_a.set_readonly("true");_a.set_cssclass("cmb_WF_Readonly");_a=new Static("Static26","absolute","0","104","104","27",null,null,this.div_detail1);_a.set_taborder("130");_a.set_text("사원");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static27","absolute","0","130","104","53",null,null,this.div_detail1);_a.set_taborder("131");_a.set_text("품의내역");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static28","absolute","103","130","334","53",null,null,this.div_detail1);_a.set_taborder("132");_a.set_cssclass("sta_WF_Labelbg");this.div_detail1.addChild(_a.name,_a);_a=new TextArea("TextArea00","absolute","106","134","327","46",null,null,this.div_detail1);_a.set_taborder("133");_a.set_lengthunit("utf8");_a.set_maxlength("200");_a.set_cssclass("txt_WF_Readonly");_a.set_readonly("true");_a.set_wordwrap("char");_a.set_scrollbars("none");this.div_detail1.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","106","107","328","21",null,null,this.div_detail1);_a.set_taborder("134");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit07","absolute","106","81","85","21",null,null,this.div_detail1);_a.set_taborder("135");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Edit("Edit08","absolute","193","81","241","21",null,null,this.div_detail1);_a.set_taborder("136");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static29","absolute","666","156","104","27",null,null,this.div_detail1);_a.set_taborder("137");_a.set_text("부기잔액");_a.set_cssclass("sta_WF_Label");this.div_detail1.addChild(_a.name,_a);_a=new MaskEdit("MaskEdit02","absolute","772","159","110","21",null,null,this.div_detail1);_a.set_taborder("138");_a.set_readonly("true");_a.set_mask("#,###");_a.set_cssclass("msk_WF_Readonly");this.div_detail1.addChild(_a.name,_a);_a=new Static("Static00","absolute","15","17","186","19",null,null,this);_a.set_taborder("59");_a.set_text("품의내역");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Layout("default","",476,122,this.div_detail1,function(_b){_b.set_taborder("58");_b.set_cssclass("div_detailBox");});this.div_detail1.addLayout(_a.name,_a);_a=new Layout("default","",914,247,this,function(_b){_b.set_classname("UI_ACC020201_P01");_b.set_titletext("원인행위정보");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item15","div_detail03.Edit04","value","ds_actMastr","PRMPC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_detail00.Edit00","value","ds_actMastr","BCNC_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item24","div_detail00.Edit01","value","ds_actMastr","BCNC_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item25","div_detail03.Edit00","value","ds_actMastr","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_detail1.MaskEdit01","value","ds_cnsul","CNSUL_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_detail1.Calendar03","value","ds_cnsul","CNSUL_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_detail1.Edit00","value","ds_cnsul","CAUSE_ACTION_NO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_detail1.Edit10","value","ds_cnsul","CNSUL_SJ");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item21","div_detail1.rd_balcSe","value","ds_cnsul","BALC_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_detail1.Combo00","value","ds_cnsul","BSNS_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","div_detail1.Edit01","value","ds_cnsul","BUDGET_ACNT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item10","div_detail1.Edit02","value","ds_cnsul","BUDGET_ACNT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item13","div_detail1.Edit03","value","ds_cnsul","BUKIP_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_detail1.Edit04","value","ds_cnsul","BUKIP_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_detail1.Edit05","value","ds_cnsul","BSNS_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_detail1.Edit06","value","ds_cnsul","BSNS_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_detail1.MaskEdit00","value","ds_cnsul","DECSN_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_detail1.msk_cnsulRtrvlAmount","value","ds_cnsul","CNSUL_RTRVL_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_detail1.MaskEdit03","value","ds_cnsul","CNSUL_BLCE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item9","div_detail1.MaskEdit04","value","ds_cnsul","ASIGN_JAN_AMOUNT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item17","div_detail1.TextArea00","value","ds_cnsul","SUMRY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item18","div_detail1.Edit07","value","ds_cnsul","DEPT_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item19","div_detail1.Edit08","value","ds_cnsul","DEPT_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item20","div_detail1.MaskEdit02","value","ds_cnsul","EXECUT_BUDGET_JAN_AM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("ACC020201_P01.xfdl","lib::comInclude.xjs");this.addIncludeScript("ACC020201_P01.xfdl","mis_lib::misUtil.xjs");this.registerScript("ACC020201_P01.xfdl",function(){this.ACC020201_P01_onload=function(_a,_b){this.div_detail1.div_EMP.fn_setBind("ds_cnsul","EMPNO","EMPNM");this.div_detail1.div_EMP.fn_set_enable(false);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"CAUSE_ACTION_NO",this.getOwnerFrame().causeActionNo);var _c=[["ds_bdg001","BDG001","Y","D","B"],["ds_bdg002","BDG002","Y","D","B"]];var _d=function(_e,_f,_g){this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_search=function(){this.fn_transaction("cnsul");};this.fn_transaction=function(_a){switch(_a){case "cnsul":var _b="hsco/mis/acc/ACC020201/cnsul.do";var _c="input1=ds_cond";var _d="ds_cnsul=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b==0){switch(_a){case "cnsul":break;default:break;}}else{this.gfn_callback_message(_a,_b,_c);}};this.fn_close=function(){this.close();};});this.on_initEvent=function(){this.ds_bdg001.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.ds_bdg002.addEventHandler("onrowposchanged",this.ds_frmtnPd_onrowposchanged,this);this.addEventHandler("onload",this.ACC020201_P01_onload,this);this.Button02.addEventHandler("onclick",this.fn_close,this);this.div_detail1.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);};this.loadIncludeScript("ACC020201_P01.xfdl");this.loadPreloadList();};})();