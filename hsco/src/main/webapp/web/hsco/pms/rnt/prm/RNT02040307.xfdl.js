﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT02040307");this.set_classname("RNT02040307");this.set_titletext("수납처리(관리비)");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_rcivSe",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">자동이체</Col></Row><Row><Col id=\"CODE\">V</Col><Col id=\"CODE_NM\">가상계좌</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_dong",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_ho",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCode",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"NTIC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"rcivSe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcivCntList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNT_T\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_T\" type=\"STRING\" size=\"256\"/><Column id=\"CNT_J\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_J\" type=\"STRING\" size=\"256\"/><Column id=\"CNT_O\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_O\" type=\"STRING\" size=\"256\"/><Column id=\"CNT_H\" type=\"STRING\" size=\"256\"/><Column id=\"AMT_H\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rcivList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RENT_HOUSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HO\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERT_SE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT\" type=\"STRING\" size=\"256\"/><Column id=\"OVDINTR\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGECT_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FALT_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TMLMT\" type=\"STRING\" size=\"256\"/><Column id=\"RCIV_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RDCAMT_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"houseSe\" type=\"STRING\" size=\"256\"/><Column id=\"rentHouseCode\" type=\"STRING\" size=\"256\"/><Column id=\"cntrctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"stRcivDe\" type=\"STRING\" size=\"256\"/><Column id=\"dong\" type=\"STRING\" size=\"256\"/><Column id=\"ho\" type=\"STRING\" size=\"256\"/><Column id=\"edRcivDe\" type=\"STRING\" size=\"256\"/><Column id=\"NTIC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"houseCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0",null,"735","13",null,this);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","1046","0",null,"735","0",null,this);_a.set_taborder("1");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("2");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_atcngReqstYm","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("359");_a.set_text("납부방법");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_atcngReqstYm00","absolute","339","5","64","21",null,null,this.div_search);_a.set_taborder("361");_a.set_text("수납일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_houseCode","absolute","595","6","160","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("362");_a.set_displaynulltext("전체");_a.set_innerdataset("ds_houseCode");_a.set_codecolumn("CODE");_a.set_datacolumn("ALL_CODE_NM");_a=new Static("sta_schHouseSe00","absolute","531","6","64","21",null,null,this.div_search);_a.set_taborder("363");_a.set_text("주택코드");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static10","absolute","770","6","51","21",null,null,this.div_search);_a.set_taborder("364");_a.set_text("동/호");_a.set_cssclass("sta_WFSA_Label");_a.style.set_align("left middle");_a.style.set_font("bold 9 Verdana");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_dong","absolute","821","6","60","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("365");_a.set_innerdataset("ds_dong");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Combo("cmb_ho","absolute","885","6","59","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("366");_a.set_innerdataset("ds_ho");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_visible("false");_a=new Radio("ds_paymthd","absolute","79","5","245","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("367");_a.set_rowcount("1");_a.set_innerdataset("@ds_rcivSe");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_value("%");_a.set_index("0");_a=new Calendar("cal_rcivDe","absolute","403","5","113","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("368");_a.set_dateformat("yyyy-MM-dd");_a=new Edit("edt_dong","absolute","821","6","60","21",null,null,this.div_search);_a.set_taborder("369");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","885","6","59","21",null,null,this.div_search);_a.set_taborder("370");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","33",null,"10","28",null,this);_a.set_taborder("3");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","43",null,null,"28","0",this);_a.set_taborder("4");_a.set_text("Div00");this.addChild(_a.name,_a);_a=new Static("sta_titHcntrctrList","absolute","0","0",null,"19","860",null,this.div_work);_a.set_taborder("15");_a.set_text("관리비 수납처리");_a.set_cssclass("sta_WF_Title02");this.div_work.addChild(_a.name,_a);_a=new Button("btn_rcivProcess","absolute",null,"0","80","19","83",null,this.div_work);_a.set_taborder("17");_a.set_text("수납처리");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Button("btn_rcivCancle","absolute",null,"0","80","19","1",null,this.div_work);_a.set_taborder("18");_a.set_text("수납취소");_a.set_cssclass("btn_WF_Process");this.div_work.addChild(_a.name,_a);_a=new Static("sta_infoBg","absolute","1","24",null,"27","1",null,this.div_work);_a.set_taborder("19");_a.set_cssclass("sta_WF_Data");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","19",null,"5","0",null,this.div_work);_a.set_taborder("20");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Static("sts_totalCnt","absolute","0","24","60","27",null,null,this.div_work);_a.set_taborder("21");_a.set_text("전체");_a.set_cssclass("sta_WF_DataTitle2");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo00","absolute","62","27","83","21",null,null,this.div_work);_a.set_taborder("22");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("sts_totalAmt","absolute","251","24","60","27",null,null,this.div_work);_a.set_taborder("23");_a.set_text("정상");_a.set_cssclass("sta_WF_DataTitle2");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo","absolute","313","27","80","21",null,null,this.div_work);_a.set_taborder("24");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("sts_defrayCnt","absolute","496","24","60","27",null,null,this.div_work);_a.set_taborder("25");_a.set_text("과오납");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_DataTitle2");_a.style.set_align("center middle");_a.style.set_font("9 Gulim");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_cnclCo","absolute","558","27","80","21",null,null,this.div_work);_a.set_taborder("26");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","51",null,"10","-1",null,this.div_work);_a.set_taborder("27");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_rcivList","absolute","1","61",null,null,"1","1",this.div_work);_a.set_taborder("28");_a.set_binddataset("ds_rcivList");_a.set_cellsizingtype("col");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"82\"/><Column size=\"79\"/><Column size=\"83\"/><Column size=\"70\"/><Column size=\"105\"/><Column size=\"92\"/><Column size=\"93\"/><Column size=\"100\"/><Column size=\"104\"/><Column size=\"88\"/><Column size=\"106\"/><Column size=\"66\"/><Column size=\"91\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"7\"/><Cell col=\"7\" colspan=\"3\" text=\"납부예정내역\"/><Cell col=\"10\" colspan=\"3\" text=\"수납내역\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell row=\"1\" text=\"순번\"/><Cell row=\"1\" col=\"1\" text=\"주택명\"/><Cell row=\"1\" col=\"2\" text=\"동\"/><Cell row=\"1\" col=\"3\" text=\"호\"/><Cell row=\"1\" col=\"4\" text=\"계약자\"/><Cell row=\"1\" col=\"5\" text=\"납부구분\"/><Cell row=\"1\" col=\"6\" text=\"납부기한\"/><Cell row=\"1\" col=\"7\" text=\"납부금액\"/><Cell row=\"1\" col=\"8\" text=\"연체이자\"/><Cell row=\"1\" col=\"9\" text=\"계\"/><Cell row=\"1\" col=\"10\" text=\"수납금액\"/><Cell row=\"1\" col=\"11\" text=\"과오금액\"/><Cell row=\"1\" col=\"12\" text=\"차액\"/><Cell row=\"1\" col=\"13\" text=\"자료구분\"/><Cell row=\"1\" col=\"14\" text=\"처리구분\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:ROWNUM\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:RENT_HOUSE_NM\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:DONG\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:HO\"/><Cell col=\"4\" text=\"bind:NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:ACNUTNO\"/><Cell col=\"6\" displaytype=\"expr:PAY_TMLMT == null  ? &quot;nomal&quot;  : 'date'\" style=\"align:center;\" text=\"bind:PAY_TMLMT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:center;\" text=\"bind:MANAGECT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:center;\" text=\"bind:OVDINTR\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:center;\" text=\"bind:MANAGECT_TOTAL\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:left;\" text=\"bind:RCIV_AMOUNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:left;\" text=\"bind:FALT_AMOUNT\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:RDCAMT_AMOUNT\"/><Cell col=\"13\" text=\"bind:OPERT_SE_NM\"/><Cell col=\"14\" text=\"bind:PROCESS_STTUS_NM\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(MANAGECT)||0')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(OVDINTR)||0')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(MANAGECT_TOTAL)||0')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(RCIV_AMOUNT)||0')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(FALT_AMOUNT)||0')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('parseInt(RDCAMT_AMOUNT)||0')\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo01","absolute","162","27","83","21",null,null,this.div_work);_a.set_taborder("29");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","150","27","9","20",null,null,this.div_work);_a.set_taborder("30");_a.set_text("/");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo02","absolute","410","27","80","21",null,null,this.div_work);_a.set_taborder("31");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","398","27","9","20",null,null,this.div_work);_a.set_taborder("32");_a.set_text("/");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_cnclCo00","absolute","654","27","80","21",null,null,this.div_work);_a.set_taborder("33");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","643","27","9","20",null,null,this.div_work);_a.set_taborder("34");_a.set_text("/");this.div_work.addChild(_a.name,_a);_a=new Static("sts_defrayCnt00","absolute","740","24","60","27",null,null,this.div_work);_a.set_taborder("35");_a.set_text("확인요망");_a.set_wordwrap("char");_a.set_cssclass("sta_WF_DataTitle2");_a.style.set_align("center middle");_a.style.set_font("9 Gulim");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo03","absolute","802","27","80","21",null,null,this.div_work);_a.set_taborder("36");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static05","absolute","887","27","9","20",null,null,this.div_work);_a.set_taborder("37");_a.set_text("/");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_newCo04","absolute","899","27","80","21",null,null,this.div_work);_a.set_taborder("38");_a.set_readonly("true");_a.set_mask("#,##0");_a.set_cssclass("msk_WF_Readonly");_a.set_enableevent("false");this.div_work.addChild(_a.name,_a);_a=new Button("Button03","absolute",null,"0","105","19","165",null,this.div_work);_a.set_taborder("39");_a.set_text("영수필 바로가기");this.div_work.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("2");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("4");_b.set_text("Div00");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT02040307");_b.set_titletext("수납처리(관리비)");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_work.msk_newCo00","value","ds_rcivCntList","CNT_T");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_work.msk_newCo01","value","ds_rcivCntList","AMT_T");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_work.msk_newCo","value","ds_rcivCntList","CNT_J");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_work.msk_newCo02","value","ds_rcivCntList","AMT_J");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_work.msk_cnclCo","value","ds_rcivCntList","Cnt_O");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_work.msk_cnclCo00","value","ds_rcivCntList","AMT_O");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_work.msk_newCo03","value","ds_rcivCntList","Cnt_H");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","div_work.msk_newCo04","value","ds_rcivCntList","AMT_H");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT02040307.xfdl","pms_lib::pmsUtilInclude.xjs");this.addIncludeScript("RNT02040307.xfdl","pms_lib::rntUtilInclude.xjs");this.addIncludeScript("RNT02040307.xfdl","pms_lib::puchasUtilInclude.xjs");this.registerScript("RNT02040307.xfdl",function(){this.RNT02040307_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT02040307_onload=function(_a,_b){this.fn_get_houseCode(this.div_search.cmb_houseCode,"전체",{USE_AT:"1"});this.div_search.cal_rcivDe.set_value(this.gfn_today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.div_search_cmb_houseCode_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_houseCode.value;this.fn_get_Dong(this.div_search.cmb_dong,"전체",{houseCode:_c});this.ds_ho.clearData();this.fn_add_comboHeader(this,this.div_search.cmb_ho,"전체");};this.div_search_cmb_dong_onitemchanged=function(_a,_b){var _c=this.div_search.cmb_houseCode.value;var _d=this.div_search.cmb_dong.value;this.fn_get_Ho(this.div_search.cmb_ho,"전체",{houseCode:_c,dong:_d});};this.fn_search=function(){this.ds_rcivList.clearData();this.ds_rcivCntList.clearData();this.fn_divToDS(this.ds_cond00,this.div_search);this.ds_cond00.setColumn(0,"houseSe","R2");this.ds_cond00.setColumn(0,"NTIC_SE","2");this.ds_cond00.setColumn(0,"rcivSe",this.div_search.ds_paymthd.value);this.fn_transaction("sprntPuchasRecDescI");};this.div_work_btn_rcivProcess_onclick=function(_a,_b){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("SPRNT_REC_DESC_RECEIPT_DG");};this.div_work_btn_rcivCancle_onclick=function(_a,_b){this.fn_divToDS(this.ds_cond00,this.div_search);this.fn_transaction("SPRNT_REC_DESC_CANCEL_DG");};this.fn_transaction=function(_a){var _b=true;switch(_a){case "selectRcivList":var _c="/hsco/pms/rnt/prm/RNT02040307/selectRcivList.do";var _d="input1=ds_cond00";var _e="ds_rcivList=output1";break;case "sprntPuchasRecDescI":var _c="/hsco/pms/rnt/prm/RNT02040204/sprntPuchasRecDescI.do";var _d="input1=ds_cond00";var _e="";_b=false;break;case "selectRcivCntList":var _c="/hsco/pms/rnt/prm/RNT02040307/selectRcivCntList.do";var _d="input1=ds_cond00";var _e="ds_rcivCntList=output1";break;case "SPRNT_REC_DESC_RECEIPT_DG":var _c="/hsco/pms/rnt/prm/RNT02040307/SPRNT_REC_DESC_RECEIPT_DG.do";var _d="input1=ds_cond00";var _e="";break;case "SPRNT_REC_DESC_CANCEL_DG":var _c="/hsco/pms/rnt/prm/RNT02040307/SPRNT_REC_DESC_CANCEL_DG.do";var _d="input1=ds_cond00";var _e="";break;}if(this.fn_validate_tranasaction(_a,_c,_d,_e)==false){return;}Ex.core.tran(this,_a,_c,_d,_e,"",null,null,_b);};this.fn_callBack=function(_a,_b,_c){var _d=_b==0?true:false;if(_d){switch(_a){case "sprntPuchasRecDescI":this.fn_transaction("selectRcivList");break;case "selectRcivList":this.fn_transaction("selectRcivCntList");break;case "SPRNT_REC_DESC_RECEIPT_DG":this.alert("수납소인 처리가 완료되었습니다.");this.fn_search();break;case "SPRNT_REC_DESC_CANCEL_DG":this.alert("수납소인 취소가 완료되었습니다.");this.fn_search();break;}}else{this.gfn_callback_message(_a,_b,_c);}this.debug((_d==true?"Success : ":"Fail : ")+_a);};this.div_WORK_Button03_onclick=function(_a,_b){this.ds_cond02.clearData();var _c=this.ds_cond02.addRow();this.ds_cond02.setColumn(_c,"houseCode",this.ds_rcivList.getColumn(this.ds_rcivList.rowposition,"RENT_HOUSE_CODE"));this.ds_cond02.setColumn(_c,"dong",this.ds_rcivList.getColumn(this.ds_rcivList.rowposition,"DONG"));this.ds_cond02.setColumn(_c,"ho",this.ds_rcivList.getColumn(this.ds_rcivList.rowposition,"HO"));this.ds_cond02.setColumn(_c,"stRcivDe",this.div_search.cal_rcivDe.value);this.ds_cond02.setColumn(_c,"edRcivDe",this.div_search.cal_rcivDe.value);this.ds_cond02.setColumn(_c,"NTIC_SE","2");var _d={arg_0:this,arg_1:this.ds_cond02};this.gfn_popup("RcivPstmrkList",800,600,"수입관리",_d,"pms_rnt_prm::RNT02040205_P.xfdl","fn_PopupCallback");};});this.on_initEvent=function(){this.addEventHandler("oninit",this.RNT02040307_oninit,this);this.addEventHandler("onload",this.RNT02040307_onload,this);this.div_search.cmb_houseCode.addEventHandler("onitemchanged",this.div_search_cmb_houseCode_onitemchanged,this);this.div_search.cmb_dong.addEventHandler("onitemchanged",this.div_search_cmb_dong_onitemchanged,this);this.div_search.cal_rcivDe.addEventHandler("canchange",this.div_search_cal_stRceptDe_canchange,this);this.div_work.btn_rcivProcess.addEventHandler("onclick",this.div_work_btn_rcivProcess_onclick,this);this.div_work.btn_rcivCancle.addEventHandler("onclick",this.div_work_btn_rcivCancle_onclick,this);this.div_work.Static04.addEventHandler("onclick",this.Tab00_tabpage5_Static02_onclick,this);this.div_work.msk_newCo.addEventHandler("oneditclick",this.msk_newCo_oneditclick,this);this.div_work.msk_newCo02.addEventHandler("oneditclick",this.msk_newCo_oneditclick,this);this.div_work.msk_newCo03.addEventHandler("oneditclick",this.msk_newCo_oneditclick,this);this.div_work.msk_newCo04.addEventHandler("oneditclick",this.msk_newCo_oneditclick,this);this.div_work.Button03.addEventHandler("onclick",this.div_WORK_Button03_onclick,this);};this.loadIncludeScript("RNT02040307.xfdl");};})();