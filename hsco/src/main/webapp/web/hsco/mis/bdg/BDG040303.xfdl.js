﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("BDG040303");this.set_classname("BDG040303");this.set_titletext("예산전용액조서");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"MTH\" type=\"STRING\" size=\"2\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_mvmnBudget",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BALC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACNT_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_GWAN\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_HANG\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_SEHANG\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_MOK\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_BUDGET_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_DVR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PROVD_DET_DCSN_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_GWAN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_GWAN\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_HANG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_HANG\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_SEHANG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_SEHANG\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_MOK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_MOK\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_PRVONSH\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_BUDGET_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_DVR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MVMN_DET_DCSN_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("예산년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","450","0","38","5",null,null,this.div_search);_a.set_taborder("3");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static37","absolute","450",null,"38","5",null,"0",this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","60","21",null,null,this.div_search);_a.set_taborder("2");_a.set_value("0");_a.style.set_buttonsize("15");_a.set_max("9999");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_MTH","absolute","207","5","86","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);var _b=new Dataset("cmb_MTH_innerdataset",this.div_search.cmb_MTH);_b._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row></Rows>");_a.set_innerdataset(_b);_a.set_taborder("5");_a.set_codecolumn("codecolumn");_a.set_datacolumn("datacolumn");_a=new Static("sta_BALC_SE00","absolute","154","5","53","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("결산 월");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","139","5","15",null,null,"5",this.div_search);_a.set_taborder("7");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","1031","0","15","735",null,null,this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("7");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_excelExport","absolute",null,"43","25","19","28",null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Gridexceldn");this.addChild(_a.name,_a);_a=new Grid("grd","absolute","0","67",null,null,"28","0",this);_a.set_taborder("5");_a.set_binddataset("ds_mvmnBudget");_a.set_cellsizingtype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"7\" text=\"제공계정\"/><Cell col=\"9\" rowspan=\"2\" text=\"전용액\"/><Cell col=\"10\" rowspan=\"2\" text=\"전용사유\"/><Cell col=\"11\" colspan=\"7\" text=\"전용계정\"/><Cell row=\"1\" text=\"계정과목\"/><Cell row=\"1\" col=\"1\" text=\"계정과목\"/><Cell row=\"1\" col=\"2\" text=\"관\"/><Cell row=\"1\" col=\"3\" text=\"항\"/><Cell row=\"1\" col=\"4\" text=\"세항\"/><Cell row=\"1\" col=\"5\" text=\"목\"/><Cell row=\"1\" col=\"6\" text=\"전용액\"/><Cell row=\"1\" col=\"7\" text=\"예산액\"/><Cell row=\"1\" col=\"8\" text=\"기지출액\"/><Cell row=\"1\" col=\"11\" text=\"관\"/><Cell row=\"1\" col=\"12\" text=\"항\"/><Cell row=\"1\" col=\"13\" text=\"세항\"/><Cell row=\"1\" col=\"14\" text=\"목\"/><Cell row=\"1\" col=\"15\" text=\"전용액\"/><Cell row=\"1\" col=\"16\" text=\"예산액\"/><Cell row=\"1\" col=\"17\" text=\"기지출액\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" text=\"bind:BUDGET_ACNT_NM\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:BUDGET_ACNT_NM2\"/><Cell col=\"2\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_GWAN\" suppress=\"1\" tooltiptext=\"bind:PROVD_GWAN\"/><Cell col=\"3\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_HANG\" suppress=\"2\" tooltiptext=\"bind:PROVD_HANG\"/><Cell col=\"4\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_SEHANG\" suppress=\"3\" tooltiptext=\"bind:PROVD_SEHANG\"/><Cell col=\"5\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_MOK\" tooltiptext=\"bind:PROVD_MOK\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_DVR_AM\" tooltiptext=\"bind:PROVD_DVR_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_BUDGET_AM\" tooltiptext=\"bind:PROVD_BUDGET_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:PROVD_DET_DCSN_AM\" tooltiptext=\"bind:PROVD_DET_DCSN_AM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_AM\"/><Cell col=\"10\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_PRVONSH\"/><Cell col=\"11\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_GWAN\" tooltiptext=\"bind:MVMN_GWAN\"/><Cell col=\"12\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_HANG\" tooltiptext=\"bind:MVMN_HANG\"/><Cell col=\"13\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_SEHANG\" tooltiptext=\"bind:MVMN_SEHANG\"/><Cell col=\"14\" style=\"align:left middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_MOK\" tooltiptext=\"bind:MVMN_MOK\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_DVR_AM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_BUDGET_AM\" tooltiptext=\"bind:MVMN_BUDGET_AM\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right middle;font:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');selectfont:EXPR(ACNT_LEVEL=='1' ? '9 Gulim bold' : '');\" text=\"bind:MVMN_DET_DCSN_AM\" tooltiptext=\"bind:MVMN_DET_DCSN_AM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"4\" text=\"제공계정 계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;ACNT_LEVEL=='1'&quot;, &quot;PROVD_DVR_AM&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;ACNT_LEVEL=='1'&quot;, &quot;PROVD_BUDGET_AM&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;ACNT_LEVEL=='1'&quot;, &quot;PROVD_DET_DCSN_AM&quot;)\"/><Cell col=\"9\" colspan=\"6\" text=\"전용계정 계\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;ACNT_LEVEL=='1'&quot;, &quot;MVMN_DVR_AM&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;ACNT_LEVEL=='1'&quot;, &quot;MVMN_BUDGET_AM&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getCaseSum(&quot;ACNT_LEVEL=='1'&quot;, &quot;MVMN_DET_DCSN_AM&quot;)\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("sta_acntCode","absolute","0","43",null,"19","908",null,this);_a.set_taborder("2");_a.set_text("예산전용액조서");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","0","62",null,"5","28",null,this);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","33",null,"10","28",null,this);_a.set_taborder("1");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_c){_c.set_taborder("0");_c.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_c){_c.set_classname("BDG040303");_c.set_titletext("예산전용액조서");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_search.cmb_MTH","value","ds_cond","MTH");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("BDG040303.xfdl","lib::comInclude.xjs");this.addIncludeScript("BDG040303.xfdl","mis_lib::misUtil.xjs");this.registerScript("BDG040303.xfdl",function(){this.BDG040303_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.BDG040303_onload=function(_a,_b){};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);this.ds_cond.clearData();var _a=this.ds_cond.addRow();this.ds_cond.setColumn(_a,"YEAR",this.comUtils.getClientDate("YYYY"));this.ds_cond.setColumn(_a,"MTH","12");this.fn_search();};this.fn_init_dataset=function(){};this.fn_search=function(_a,_b){this.ds_mvmnBudget.clearData();this.fn_transaction("select");};this.fn_transaction=function(_a){switch(_a){case "select":var _b="/hsco/mis/bdg/BDG040303/select.do";var _c="input1=ds_cond";var _d="ds_mvmnBudget=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b==0){switch(_a){case "select":break;}}};this.btn_excelExport_onclick=function(_a,_b){this.gfn_exportExcel(this.grd,"Excel File Download");};});this.on_initEvent=function(){this.addEventHandler("onload",this.BDG040303_onload,this);this.addEventHandler("oninit",this.BDG040303_oninit,this);this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);};this.loadIncludeScript("BDG040303.xfdl");};})();