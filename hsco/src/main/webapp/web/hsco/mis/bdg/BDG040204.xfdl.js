﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG040204");this.set_classname("BDG040204");this.set_titletext("이월예산결산보고서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"MTH\" type=\"STRING\" size=\"2\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cyfdIncme",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_AM_CNSTRC_IMPRV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_AM_ACDNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_AM_CTNU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_EXCUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_MIN_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cyfdExpndtr",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"STACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"CYFD_AM_CNSTRC_IMPRV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_AM_ACDNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_AM_CTNU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_EXCUT_AM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CYFD_MIN_AM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","450","0","38","5",null,null,this.div_search);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","450",null,"38","5",null,"0",this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_max("9999");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_BALC_SE00","absolute","154","5","53","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("결산 월");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_MTH","absolute","207","5","86","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_MTH_innerdataset",this.div_search.cmb_MTH);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("7");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("5");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Tab("tab","absolute","0","43",null,null,"28","0",this);_a.set_taborder("3");_a.set_preload("true");_a.set_tabindex("0");_a.set_scrollbars("autoboth");_a.style.set_showextrabutton("false");this.addChild(_a.name,_a);_a=new Tabpage("tp1",this.tab);_a.set_text("이월재원(수입) 결산");this.tab.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","0",null,null,"0","0",this.tab.tp1);_a.set_taborder("0");_a.set_binddataset("ds_incmeBudgetTot");_a.set_cellsizingtype("col");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"적요\"/><Cell col=\"1\" rowspan=\"2\" text=\"예산액\"/><Cell col=\"2\" rowspan=\"2\" text=\"추경\"/><Cell col=\"3\" rowspan=\"2\" text=\"예산현액\"/><Cell col=\"4\" rowspan=\"2\" text=\"결산액&#13;&#10;(징수결정액)\"/><Cell col=\"5\" colspan=\"3\" text=\"수입액\"/><Cell col=\"8\" text=\"미수금\"/><Cell row=\"1\" col=\"5\" text=\"수입액\"/><Cell row=\"1\" col=\"6\" text=\"과오납환불액\"/><Cell row=\"1\" col=\"7\" text=\"수납액\"/><Cell row=\"1\" col=\"8\" text=\"미수금\"/></Band><Band id=\"body\"><Cell text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ORIBDGT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RVSPBGT_ODR\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:TOT_BUDGET_AM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DET_DCSN_AM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:EXCUT_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"0\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:EXCUT_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:UNPAY_AM\"/></Band><Band id=\"summary\" style=\"cellpadding:0 0 0 0;\"><Cell style=\"align:center middle;\" text=\"합    계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;ORIBDGT&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;RVSPBGT_ODR&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;TOT_BUDGET_AM&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;DET_DCSN_AM&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;EXCUT_AM&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;EXCUT_AM&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;EXCUT_AM&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;UNPAY_AM&quot;)\"/></Band></Format></Formats>");this.tab.tp1.addChild(_a.name,_a);_a=new Tabpage("tp2",this.tab);_a.set_text("이월재원(지출) 결산");this.tab.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","0",null,null,"0","0",this.tab.tp2);_a.set_taborder("0");_a.set_binddataset("ds_cyfdExpndtr");_a.set_cellsizingtype("col");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"예산계정\"/><Cell col=\"1\" rowspan=\"2\" text=\"예산계정\"/><Cell col=\"2\" colspan=\"5\" text=\"이월재원충당액\"/><Cell col=\"7\" rowspan=\"2\" text=\"지출원인행위액\"/><Cell col=\"8\" rowspan=\"2\" style=\"color:red;\" text=\"결산액\"/><Cell col=\"9\" rowspan=\"2\" text=\"예산액대결산액\"/><Cell col=\"10\" rowspan=\"2\" style=\"color:red;\" text=\"지출액\"/><Cell col=\"11\" rowspan=\"2\" style=\"color:red;\" text=\"미지급금\"/><Cell col=\"12\" rowspan=\"2\" style=\"color:red;\" text=\"익년도이월액\"/><Cell col=\"13\" rowspan=\"2\" style=\"color:red;\" text=\"불용액\"/><Cell col=\"14\" text=\"이월재원충당액\"/><Cell row=\"1\" text=\"예산계정\"/><Cell row=\"1\" col=\"2\" text=\"건설개량이월\"/><Cell row=\"1\" col=\"3\" text=\"사고이월\"/><Cell row=\"1\" col=\"4\" text=\"계속비이월\"/><Cell row=\"1\" col=\"5\" style=\"color:red;\" text=\"미지급이월\"/><Cell row=\"1\" col=\"6\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"1\" style=\"align:left middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:BUDGET_ACNT_NM2\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_AM_CNSTRC_IMPRV\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_AM_ACDNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_AM_CTNU\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_EXCUT_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_EXCUT_AM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_MIN_AM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_EXCUT_AM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"0\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;font:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(STACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:CYFD_MIN_AM\"/></Band><Band id=\"summary\" style=\"cellpadding:0 5 0 0;\"><Cell/><Cell col=\"1\" text=\"합 계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_AM_CNSTRC_IMPRV&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_AM_ACDNT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_AM_CTNU&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;0&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_AM&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_EXCUT_AM&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_EXCUT_AM&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_MIN_AM&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_EXCUT_AM&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;0&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;0&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;STACNT_LEVEL==1&quot;, &quot;CYFD_MIN_AM&quot;)\"/></Band></Format></Formats>");this.tab.tp2.addChild(_a.name,_a);_a=new Button("btn_excelExport","absolute",null,"46","25","23","28",null,this);_a.set_taborder("2");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tp1,function(_c){_c.set_text("이월재원(수입) 결산");});this.tab.tp1.addLayout(_a.name,_a);_a=new Layout("default","",0,0,this.tab.tp2,function(_c){_c.set_text("이월재원(지출) 결산");});this.tab.tp2.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("BDG040204");_c.set_titletext("이월예산결산보고서");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_MTH","value","ds_cond","MTH");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG040204.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG040204.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG040204.xfdl",function(){this.BDG040204_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG040204_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_a,"MTH",'12');this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.ds_cyfdIncme.clearData();this.ds_cyfdExpndtr.clearData();this.fn_transaction("select");};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/mis/bdg/BDG040204/select.do";var _c="input1=ds_cond";var _d="ds_cyfdIncme=output1 ds_cyfdExpndtr=output2";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "select":break;}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.tab.tabpages[this.tab.tabindex].grd,"Excel File Download");};});this.on_initEvent=function(){this.addEventHandler("onload",this.BDG040204_onload,this);this.addEventHandler("oninit",this.BDG040204_oninit,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("BDG040204.xfdl");};})();