﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("codeMng");this.set_classname("codeMng");this.set_titletext("공통코드관리_최종");this._setFormPosition(0,0,1039,799);}_a=new Dataset("DS_SEARCH",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><ConstColumn id=\"pageIndex\" type=\"INT\" size=\"30\" value=\"1\"/><ConstColumn id=\"pageSize\" type=\"INT\" size=\"30\" value=\"5\"/><ConstColumn id=\"pageUnit\" type=\"INT\" size=\"30\" value=\"5\"/><Column id=\"SEARCH_CONDITION\" type=\"STRING\" size=\"100\"/><Column id=\"SEARCH_KEYWORD\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH_KEYWORD\"/><Col id=\"SEARCH_CONDITION\">0</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_GRP_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"UPPER_GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"SYS_SE_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"GRP_CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GRP_CODE_DC\" type=\"STRING\" size=\"1000\"/><Column id=\"GRP_CODE_LVL\" type=\"INT\" size=\"3\"/><Column id=\"GRP_CODE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"GRP_CODE_SN\" type=\"INT\" size=\"9\"/><Column id=\"CODE\" type=\"STRING\" size=\"6\"/><Column id=\"GRP_CODE\" type=\"STRING\" size=\"6\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CODE_CN\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ORDR\" type=\"INT\" size=\"3\"/><Column id=\"CHRCTR_PREPAR_VALUE_0\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_1\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_2\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_3\" type=\"STRING\" size=\"100\"/><Column id=\"CHRCTR_PREPAR_VALUE_4\" type=\"STRING\" size=\"100\"/><Column id=\"INTGR_PREPAR_VALUE\" type=\"INT\" size=\"10\"/><Column id=\"MSTK_PREPAR_VALUE\" type=\"FLOAT\" size=\"8\"/><Column id=\"CODE_ETC_1\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_2\" type=\"STRING\" size=\"1000\"/><Column id=\"CODE_ETC_3\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static43","absolute","1019","0","20","799",null,null,this);_a.set_taborder("11");_a.set_text("20");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.addChild(_a.name,_a);_a=new Div("div_SearchArea","absolute","0","0","1019","76",null,null,this);_a.set_taborder("13");_a.style.set_border("1 solid #767676ff,0 none #808080ff,1 solid #e0e0e0ff,0 none #808080ff");_a.set_cssclass("div_SearchBox");this.addChild(_a.name,_a);_a=new Edit("edt_searchKeyword","absolute","261","9","190","22",null,null,this.div_SearchArea);_a.set_taborder("96");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_searchCondition","absolute","103","10","81","22",null,null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);var _b=new Dataset("cmb_searchCondition_innerdataset",this.div_SearchArea.cmb_searchCondition);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("97");_a.set_displaynulltext("-전체-");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.style.set_border("2 solid #d8d8d8ff");_a=new Static("sta_Search","absolute","0","9","100","22",null,null,this.div_SearchArea);_a.set_taborder("98");_a.set_text("도로구분");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");_a.style.set_border("0 none #808080ff");_a.style.set_padding("0 0 0 22");_a.style.set_font("bold 9 Dotum");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static02","absolute","-6","31","1044","44",null,null,this.div_SearchArea);_a.set_taborder("99");_a.set_text("9");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0","1019","9",null,null,this.div_SearchArea);_a.set_taborder("100");_a.set_text("9");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static05","absolute","100","4","6","28",null,null,this.div_SearchArea);_a.set_taborder("101");_a.set_text("6");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_SearchArea.addChild(_a.name,_a);_a=new Static("Static01","absolute","31.4%","7",null,"24","63.69%",null,this.div_SearchArea);_a.set_taborder("102");_a.set_text("도로명");this.div_SearchArea.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","38.08%","10",null,"20","49.75%",null,this.div_SearchArea);_a.set_taborder("103");_a.set_displaynulltext("북성로");_a.style.set_border("2 solid #d8d8d8ff");this.div_SearchArea.addChild(_a.name,_a);_a=new Button("Button00","absolute","50.93%","12",null,"21","40.43%",null,this.div_SearchArea);_a.set_taborder("104");_a.set_text("검색");_a.style.set_border("3 solid #808080ff");this.div_SearchArea.addChild(_a.name,_a);_a=new Combo("cmb_searchCondition00","absolute","10.11%","48",null,"23","78.61%",null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);var _c=new Dataset("cmb_searchCondition00_innerdataset",this.div_SearchArea.cmb_searchCondition00);_c._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");_a.set_innerdataset(_c);_a.set_taborder("105");_a.set_displaynulltext("-전체-");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.style.set_border("2 solid #d8d8d8ff");_a=new Combo("cmb_searchCondition01","absolute","32.97%","51",null,"22","59.08%",null,this.div_SearchArea);this.div_SearchArea.addChild(_a.name,_a);var _d=new Dataset("cmb_searchCondition01_innerdataset",this.div_SearchArea.cmb_searchCondition01);_d._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");_a.set_innerdataset(_d);_a.set_taborder("106");_a.set_displaynulltext("-전체-");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a.style.set_border("2 solid #d8d8d8ff");_a=new Div("div_cont","absolute","0","41",null,null,"0","51",this);_a.set_taborder("12");_a.style.set_border("0 none #808080ff");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","407","1051","7",null,null,this.div_cont);_a.set_taborder("1");_a.set_text("7");_a.set_visible("false");_a.style.set_background("blueviolet");_a.style.set_align("center middle");_a.style.set_font("bold 9 Dotum");_a.style.set_opacity("50");this.div_cont.addChild(_a.name,_a);_a=new Grid("grd_GRP_CODE","absolute","-1","49",null,"318","7",null,this.div_cont);_a.set_taborder("2");_a.set_binddataset("gds_menu");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"163\"/><Column size=\"177\"/><Column size=\"111\"/><Column size=\"97\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"1\" text=\"도로명\"/><Cell col=\"2\" text=\"도로구분\"/><Cell col=\"3\" text=\"시점\"/><Cell col=\"4\" text=\"종점\"/><Cell col=\"5\" text=\"도로폭(m)\"/><Cell col=\"6\" text=\"도로길이(m)\"/><Cell col=\"7\" displaytype=\"none\" text=\"그룹코드순번\" autosizerow=\"none\" autosizecol=\"none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'normal' : 'none'\" text=\"bind:GRP_CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:GRP_CODE_NM\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:SYS_SE_CODE\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:GRP_CODE_DC\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_AT\" combodataset=\"ds_isvalid\" combocodecol=\"value\" combodatacol=\"code\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:REGIST_DT\" maskchar=\" \"/><Cell col=\"7\" displaytype=\"none\" text=\"bind:GROUP_CODE_SN\" editdisplay=\"display\" expandsize=\"0\"/></Band></Format></Formats>");this.div_cont.addChild(_a.name,_a);_a=new Static("Static01","absolute","5.64%","7",null,"26","90.76%",null,this.div_cont);_a.set_taborder("5");_a.set_text("구");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static00","absolute","24.06%","11",null,"22","68.43%",null,this.div_cont);_a.set_taborder("6");_a.set_text("도로구분");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static04","absolute","45.14%","5",null,"26","47.37%",null,this.div_cont);_a.set_taborder("7");_a.set_text("도로명");_a.set_cssclass("sta_WFSA_label");_a.style.set_background("#f2f3f7ff");this.div_cont.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","52.82%","5",null,"26","32.39%",null,this.div_cont);this.div_cont.addChild(_a.name,_a);_a.set_taborder("8");_a.set_text("-선택-");_a=new Button("Button00","absolute","73.15%","379",null,"28","20.04%",null,this.div_cont);_a.set_taborder("9");_a.set_text("행추가");_a.style.set_background("silver");_a.style.set_border("2 solid #808080ff");this.div_cont.addChild(_a.name,_a);_a=new Button("Button01","absolute","80.16%","379",null,"28","13.04%",null,this.div_cont);_a.set_taborder("10");_a.set_text("행삭제");_a.style.set_background("silver");_a.style.set_border("2 solid #808080ff");this.div_cont.addChild(_a.name,_a);_a=new Button("Button02","absolute","87.16%","379",null,"28","6.03%",null,this.div_cont);_a.set_taborder("11");_a.set_text("저장");_a.style.set_background("silver");_a.style.set_border("2 solid #808080ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static02","absolute","1.54%","416",null,"33","91.15%",null,this.div_cont);_a.set_taborder("12");_a.set_text("도로명");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","9.53%","415",null,"35","74.4%",null,this.div_cont);_a.set_taborder("13");_a.style.set_background("white");_a.style.set_border("2 solid #d8d8d8ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static05","absolute","1.92%","463",null,"33","90.76%",null,this.div_cont);_a.set_taborder("14");_a.set_text("도로구분");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Static("Static06","absolute","1.06%","496",null,"33","91.63%",null,this.div_cont);_a.set_taborder("16");_a.set_text("구");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Edit("Edit02","absolute","9.05%","495",null,"35","74.88%",null,this.div_cont);_a.set_taborder("17");_a.style.set_background("white");_a.style.set_border("2 solid #d8d8d8ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static07","absolute","29.74%","415",null,"33","62.95%",null,this.div_cont);_a.set_taborder("18");_a.set_text("시점");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Edit("Edit03","absolute","37.73%","414",null,"35","49.37%",null,this.div_cont);_a.set_taborder("19");_a.style.set_background("white");_a.style.set_border("2 solid #d8d8d8ff");this.div_cont.addChild(_a.name,_a);_a=new Combo("Combo01","absolute","9.05%","465",null,"31","82.68%",null,this.div_cont);this.div_cont.addChild(_a.name,_a);_a.set_taborder("20");_a.set_text("대로");_a=new Static("Static08","absolute","29.45%","462",null,"33","63.23%",null,this.div_cont);_a.set_taborder("21");_a.set_text("종점");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Edit("Edit01","absolute","37.44%","461",null,"35","49.37%",null,this.div_cont);_a.set_taborder("22");_a.style.set_background("white");_a.style.set_border("2 solid #d8d8d8ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static09","absolute","60.83%","425",null,"33","31.67%",null,this.div_cont);_a.set_taborder("23");_a.set_text("도로폭(m)");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Edit("Edit04","absolute","68.62%","423",null,"35","15.3%",null,this.div_cont);_a.set_taborder("24");_a.style.set_background("white");_a.style.set_border("2 solid #d8d8d8ff");this.div_cont.addChild(_a.name,_a);_a=new Static("Static10","absolute","60.64%","473",null,"33","31.18%",null,this.div_cont);_a.set_taborder("25");_a.set_text("도로길이(m)");_a.style.set_background("aliceblue");this.div_cont.addChild(_a.name,_a);_a=new Edit("Edit05","absolute","69.1%","471",null,"35","14.82%",null,this.div_cont);_a.set_taborder("26");_a.style.set_background("white");_a.style.set_border("2 solid #d8d8d8ff");this.div_cont.addChild(_a.name,_a);_a=new Layout("default","",1020,41,this.div_SearchArea,function(_e){_e.set_taborder("13");_e.style.set_border("1 solid #767676ff,0 none #808080ff,1 solid #e0e0e0ff,0 none #808080ff");_e.set_cssclass("div_SearchBox");});this.div_SearchArea.addLayout(_a.name,_a);_a=new Layout("default","",1039,707,this.div_cont,function(_e){_e.set_taborder("12");_e.style.set_border("0 none #808080ff");});this.div_cont.addLayout(_a.name,_a);_a=new Layout("default","",1039,799,this,function(_e){_e.set_classname("codeMng");_e.set_titletext("공통코드관리_최종");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SearchArea.cmb_searchCondition","value","DS_SEARCH","SEARCH_CONDITION");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_SearchArea.cmb_searchCondition00","value","DS_SEARCH","SEARCH_CONDITION");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_SearchArea.cmb_searchCondition01","value","DS_SEARCH","SEARCH_CONDITION");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SYM030300.xfdl","lib::comLib.xjs");this.registerScript("SYM030300.xfdl",function(){this.form_onload=function(_a,_b){Ex.core.init(_a,700);};this.form_init=function(_a){this.fn_search();};this.btn_Save_onclick=function(_a,_b){this.fn_save("groupCodeU");};this.fn_search=function(){var _a="SYM030100List";var _b="hsco/com/sym/cdm/SYM030100/SYM030100List.do";var _c="";var _d="DS_GRP_CODE=output1";var _e="";if(this.div_SearchArea.cmb_searchCondition.value==0){_e+=Ex.util.setParam("GRP_NM",this.div_SearchArea.edt_searchKeyword.value);}else if(this.div_SearchArea.cmb_searchCondition.value==1){_e+=Ex.util.setParam("GRP_CD",this.div_SearchArea.edt_searchKeyword.value);}Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_codeSearch=function(){var _a=this.DS_GRP_CODE.getColumn(this.DS_GRP_CODE.rowposition,"GRP_CODE");var _b=this.DS_GRP_CODE.getColumn(this.DS_GRP_CODE.rowposition,"GRP_CODE_SN");var _c="SYM030100CodeList";var _d="hsco/com/sym/cdm/SYM030100/SYM030100CodeList.do";var _e="";var _f="DS_CODE=output1";var _g="";_g+=Ex.util.setParam("GRP_CODE",_a);_g+=Ex.util.setParam("GRP_CODE_SN",_b);Ex.core.tran(this,_c,_d,_e,_f,_g);};this.fn_save=function(_a){var _b="save";var _c="hsco/com/sym/cdm/groupCodeU.do";var _d="";var _e="";var _f="";if(_a=="modifyCode"){_d="input1=DS_CODE_LIST:U";_e="";}else if(_a=="groupCodeU"){_d="input1=DS_GROUP_CODE_LIST:U";_e="";}Ex.core.tran(this,_b,_c,_d,_e,_f);};this.fn_callBack=function(_a,_b,_c){if(_b<0){return ExtNx.core.comMsg("alert",_c);}switch(strServiceId){case "saveAllUser":this.gfn_Alert("msg.save.success");this.fn_search();break;case "SYM030100List":this.fn_codeSearch();break;case "SYM030100CodeList":break;default:break;}};this.btn_Insert_onclick=function(_a,_b){var _c=this.DS_GROUP_CODE_LIST.addRow();this.DS_GROUP_CODE_LIST.setColumn(_c,"REGIST_DT",Ex.util.todayTime());this.DS_GROUP_CODE_LIST.setColumn(_c,"UPDT_DT",Ex.util.todayTime());this.DS_AUTH_GRP.setColumn(_c,"REGISTER_ID",application.gds_userInfo.getColumn(0,"USER_ID"));this.DS_AUTH_GRP.setColumn(_c,"UPDUSR_ID",application.gds_userInfo.getColumn(0,"USER_ID"));};this.DS_GRP_CODE_onrowposchanged=function(_a,_b){this.fn_codeSearch();};this.DS_GRP_CODE_cancolumnchange=function(_a,_b){};this.btn_Delete_onclick=function(_a,_b){var _c=this.DS_GRP_CODE.rowposition;var _d=this.DS_GRP_CODE.getRowType(_c);this.DS_GRP_CODE_LIST.deleteRow(_c);};this.fn_search_post=function(){var _a=this.DS_GROUP_CODE_LIST.rowcount;var _b=this.DS_GROUP_CODE_LIST.rowcount;var _c=this.DS_CODE_LIST.rowcount;var _d=this.DS_CODE_LIST.rowcount;};this.div_SearchArea_Static01_onclick=function(_a,_b){};this.div_SearchArea_Edit00_oneditclick=function(_a,_b){};this.div_cont_Static00_onclick=function(_a,_b){};this.div_cont_Button00_onclick=function(_a,_b){};});this.on_initEvent=function(){this.DS_GRP_CODE.addEventHandler("canrowposchange",this.DS_GRP_CODE_canrowposchange,this);this.DS_GRP_CODE.addEventHandler("onrowposchanged",this.DS_GRP_CODE_onrowposchanged,this);this.DS_GRP_CODE.addEventHandler("cancolumnchange",this.DS_GRP_CODE_cancolumnchange,this);this.div_SearchArea.Static01.addEventHandler("onclick",this.div_SearchArea_Static01_onclick,this);this.div_SearchArea.Edit00.addEventHandler("oneditclick",this.div_SearchArea_Edit00_oneditclick,this);this.div_cont.Static00.addEventHandler("onclick",this.div_cont_Static00_onclick,this);this.div_cont.Static04.addEventHandler("onclick",this.div_cont_Static00_onclick,this);this.div_cont.Button00.addEventHandler("onclick",this.div_cont_Button00_onclick,this);this.div_cont.Button01.addEventHandler("onclick",this.div_cont_Button00_onclick,this);this.div_cont.Button02.addEventHandler("onclick",this.div_cont_Button00_onclick,this);};this.loadIncludeScript("SYM030300.xfdl");};})();