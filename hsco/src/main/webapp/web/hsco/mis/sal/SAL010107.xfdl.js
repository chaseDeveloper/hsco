﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SAL010107");this.set_classname("SAL010107");this.set_titletext("고용보험관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond2",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emplyminsrncDate",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_emplyminsrnc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"INCOME_MT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMPLYMINSRNC_TARIFF\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLYMINSRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond3",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_soctyInsrncTariff",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"INSRNC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BPRPRR_BND\" type=\"STRING\" size=\"256\"/><Column id=\"LABRR_BND\" type=\"FLOAT\" size=\"256\"/><Column id=\"SM_RT\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_empno",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLSF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RSPOFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"JSSFC_SE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCLS\" type=\"STRING\" size=\"256\"/><Column id=\"ECNY_DE\" type=\"STRING\" size=\"256\"/><Column id=\"STDR_DE\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_emplyminsrnc</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">적용일자</Col></Row><Row><Col id=\"compId\">ds_emplyminsrnc</Col><Col id=\"colId\">EMPNO</Col><Col id=\"PK\">Y</Col><Col id=\"notNull\">Y</Col><Col id=\"msgId\">사번</Col></Row><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">APPLC_DE</Col><Col id=\"PK\"/><Col id=\"notNull\">Y</Col><Col id=\"type\"/><Col id=\"nlength\"/><Col id=\"from\"/><Col id=\"to\">APPLC_DE</Col><Col id=\"lengthChkGb\"/><Col id=\"msgId\">검색기간</Col><Col id=\"expr\"/><Col id=\"func\"/></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_import",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_year",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_jssfc",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrMastr",this);_a._setContents("<ColumnInfo><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_template",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"APPLC_DE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"INCOME_MT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMPLYMINSRNC_TARIFF\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLYMINSRNC_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APPLC_DE\">20190501</Col><Col id=\"EMPNM\">홍길동</Col><Col id=\"EMPLYMINSRNC_AMOUNT\">12000</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static16","absolute","15","5","65","21",null,null,this.div_search);_a.set_taborder("1");_a.set_text("검색기간");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static07","absolute","8.52%","26",null,"5","87.71%",null,this.div_search);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","9.32%","0",null,"5","87.02%",null,this.div_search);_a.set_taborder("5");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static06","absolute","0%","2",null,"20","98.61%",null,this.div_search);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","10.11%","53",null,"5","86.22%",null,this.div_search);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#fa794f66");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Div("div_EMP","absolute","452","5","163","21",null,null,this.div_search);_a.set_taborder("3");_a.set_text("Div00");_a.set_async("false");_a.set_url("com::empno.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static01","absolute","38.87%","5",null,"20","59.67%",null,this.div_search);_a.set_taborder("13");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static03","absolute","416","5","37","21",null,null,this.div_search);_a.set_taborder("14");_a.set_text("성명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static05","absolute","246","5","43","21",null,null,this.div_search);_a.set_taborder("15");_a.set_text("직종");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Combo("cmb_EMPL_SE","absolute","290","5","110","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("16");_a.set_innerdataset("ds_jssfc");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.style.set_font("10 Gulim");_a=new Static("Static04","absolute","22.55%","6",null,"20","76%",null,this.div_search);_a.set_taborder("17");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year","absolute","80","5","65","21",null,null,this.div_search);_a.set_taborder("18");_a.set_value("0");_a.set_max("2100");_a.set_min("1988");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static08","absolute","146","5","20","21",null,null,this.div_search);_a.set_taborder("19");_a.set_text("~");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_year2","absolute","167","5","65","21",null,null,this.div_search);_a.set_taborder("20");_a.set_value("0");_a.set_max("2100");_a.set_min("1988");_a.set_cssclass("spn_WF_Essential");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15",null,"13","0",this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","98.75%","0","13",null,null,"0",this);_a.set_taborder("6");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_EMPLYMINSRNC_DATE","absolute","0","58","180",null,null,"0",this);_a.set_taborder("7");_a.set_binddataset("ds_emplyminsrncDate");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"95\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"적용일자\"/><Cell col=\"2\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Grid("grd_EMPLYMINSRNC","absolute","190","58",null,null,"28","0",this);_a.set_taborder("8");_a.set_binddataset("ds_emplyminsrnc");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_summarytype("top");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"75\"/><Column size=\"120\"/><Column size=\"112\"/><Column size=\"95\"/><Column size=\"120\"/><Column size=\"81\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적용일자\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사번\"/><Cell col=\"4\" text=\"사원명\"/><Cell col=\"5\" text=\"기준소득월액\"/><Cell col=\"6\" text=\"고용보험요율\"/><Cell col=\"7\" text=\"고용보험금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'date':'none'\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"color:EXPR((dataset.getColumn(currow, &quot;EMPNO&quot;) == &quot;동명이인&quot;) || (dataset.getColumn(currow, &quot;EMPNO&quot;) == &quot;사번없음&quot;) ? &quot;red&quot; :&quot;&quot;);color2:EXPR((dataset.getColumn(currow, &quot;EMPNO&quot;) == &quot;동명이인&quot;) || (dataset.getColumn(currow, &quot;EMPNO&quot;) == &quot;사번없음&quot;) ? &quot;red&quot; :&quot;&quot;);\" text=\"bind:EMPNO\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\" expandshow=\"hide\" expandsize=\"13\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:INCOME_MT_AM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" text=\"bind:EMPLYMINSRNC_TARIFF\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:EMPLYMINSRNC_AMOUNT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('INCOME_MT_AM')\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('EMPLYMINSRNC_AMOUNT')\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0%","33",null,"10","2.6%",null,this);_a.set_taborder("9");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","0","39","173","19",null,null,this);_a.set_taborder("10");_a.set_text("고용보험적용내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","190","39","177","19",null,null,this);_a.set_taborder("11");_a.set_text("고용보험상세정보");_a.set_cssclass("sta_WF_Title03");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0%","53",null,"5","2.6%",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Edit("edt_year","absolute",null,"36","58","19","186",null,this);_a.set_taborder("1");_a.set_maxlength("4");_a.style.set_align("center middle");_a.set_cssclass("edt_WF_Essential");this.addChild(_a.name,_a);_a=new Button("btn_Cal","absolute",null,"36","40","19","144",null,this);_a.set_taborder("2");_a.set_text("계산");this.addChild(_a.name,_a);_a=new Button("Button25","absolute",null,"36","26","19","117",null,this);_a.set_taborder("4");_a.set_cssclass("btn_WF_Gridexcelup");this.addChild(_a.name,_a);_a=new Static("sta_CLSF_CODE","absolute",null,"36","92","19","247",null,this);_a.set_taborder("13");_a.set_text("요율적용년도");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Grid("grd_template","absolute","352","388",null,null,"108","255",this);_a.set_taborder("14");_a.set_binddataset("ds_template");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_summarytype("top");_a.set_visible("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"120\"/><Column size=\"112\"/><Column size=\"95\"/><Column size=\"120\"/><Column size=\"81\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_HeadEssential\" text=\"적용일자\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_HeadEssential\" text=\"사번\"/><Cell col=\"3\" text=\"사원명\"/><Cell col=\"4\" text=\"기준소득월액\"/><Cell col=\"5\" text=\"고용보험요율\"/><Cell col=\"6\" text=\"고용보험금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow)==Dataset.ROWTYPE_INSERT ? 'date':'none'\" text=\"bind:APPLC_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"color:EXPR(dataset.getColumn(currow, &quot;EMPNO&quot;) == &quot;동명이인&quot; ? &quot;red&quot; :&quot;&quot;);color2:EXPR(dataset.getColumn(currow, &quot;EMPNO&quot;) == &quot;동명이인&quot; ? &quot;red&quot; :&quot;&quot;);\" text=\"bind:EMPNO\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:EMPNM\" expandshow=\"hide\" expandsize=\"13\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:INCOME_MT_AM\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" text=\"bind:EMPLYMINSRNC_TARIFF\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align:right;\" text=\"bind:EMPLYMINSRNC_AMOUNT\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("Button_Download","absolute",null,"36","87","19","29",null,this);_a.set_taborder("15");_a.set_cssclass("btn_WF_Gridexcelup");_a.set_defaultbutton("true");_a.style.set_background("@gradation center middle");_a.set_text("양식다운로드");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("SAL010107");_b.set_titletext("고용보험관리");});this.addLayout(_a.name,_a);_a=new BindItem("item2","div_search.cmb_EMPL_SE","value","ds_cond","EMPL_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.spn_year","value","ds_cond","APPLC_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_search.spn_year2","value","ds_cond","APPLC_DE2");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::empno.xfdl");};this.addIncludeScript("SAL010107.xfdl","lib::comInclude.xjs");this.addIncludeScript("SAL010107.xfdl","mis_lib::misUtil.xjs");this.registerScript("SAL010107.xfdl",function(){this.checkDs=[this.ds_emplyminsrnc];this.SAL010107_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();this.ds_cond.clearData();var _c=this.ds_cond.addRow();this.div_search.div_EMP.fn_setBind("ds_cond","EMPNO","EMPNM");this.div_search.spn_year.setFocus(true);var _d=parseInt(this.dateUtils.format(this.gfn_today(),"yyyy"));this.div_search.spn_year.set_value(_d-5);this.div_search.spn_year2.set_value(_d+1);};this.SAL010107_onload=function(_a,_b){this.edt_year.set_value(this.dateUtils.format(this.gfn_today(),"yyyy"));this.fn_loadCombo();this.div_search.div_EMP.setFocus(true);this.div_search.spn_year.setFocus(true);var _c=parseInt(this.dateUtils.format(this.gfn_today(),"yyyy"));this.div_search.spn_year.set_value(_c-5);this.div_search.spn_year2.set_value(_c+1);this.fn_search();this.fn_searchHrMastr();};this.fn_init_form=function(){this.fn_misFormInit(this);this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_loadCombo=function(){var _a=[["ds_jssfc","HRM001",1,"전체"]];this.gfn_comboLoad(_a,this.fn_callbackAfter);};this.fn_search=function(){this.ds_emplyminsrncDate.clearData();this.ds_emplyminsrnc.clearData();if(!this.gfn_checkValidation(this.div_search,this.ds_validation)){return;}this.fn_transaction("selectEmplyminsrncList");};this.fn_searchHrMastr=function(){this.ds_hrMastr.clearData();this.fn_transaction("selectHrMastrList");};this.ds_emplyminsrncDate_onrowposchanged=function(_a,_b){if(_b.newrow> -1){var _c=this.ds_emplyminsrncDate.getRowCount();var _d=this.ds_emplyminsrncDate.rowposition;for(var _g=0;_g<=_c-1;_g++ ){if(_g==_d){}else{this.ds_emplyminsrncDate.setColumn(_g,"CHK","0");}}if(this.ds_emplyminsrncDate.getColumn(this.ds_emplyminsrncDate.rowposition,"APPLC_DE")){var _e="";if(this.div_search.div_EMP.GetValue("EMPNO")){_e=this.div_search.div_EMP.GetValue("EMPNO");}this.ds_cond2.clearData();var _f=this.ds_cond2.addRow();this.ds_cond2.setColumn(_f,"EMPNO",_e);this.ds_cond2.setColumn(_f,"EMPL_SE",this.div_search.cmb_EMPL_SE.value);this.ds_cond2.setColumn(_f,"APPLC_DE",this.ds_emplyminsrncDate.getColumn(this.ds_emplyminsrncDate.rowposition,"APPLC_DE"));this.fn_transaction("selectEmplyminsrncList2");}}else{this.ds_emplyminsrnc.clearData();}};this.fn_insert=function(){var _a=this.ds_emplyminsrnc.addRow();this.ds_emplyminsrnc.setColumn(_a,"APPLC_DE",this.gfn_today());var _b=this.grd_EMPLYMINSRNC.setFocus(true);var _c=this.grd_EMPLYMINSRNC.setCellPos(2);};this.fn_add=function(){var _a=this.ds_emplyminsrnc.insertRow(this.ds_emplyminsrnc.rowposition+1);this.ds_emplyminsrnc.setColumn(_a,"APPLC_DE",this.gfn_today());};this.fn_delete=function(){if(this.ds_emplyminsrncDate.getColumn(this.ds_emplyminsrncDate.rowposition,"CHK")=="1"){var _a;_a=application.confirm(this.ds_emplyminsrncDate.getColumn(this.ds_emplyminsrncDate.rowposition,"APPLC_DE")+"일자 전체내역을 삭제하시겠습니까?");if(_a==true){this.ds_cond2.clearData();var _b=this.ds_cond2.addRow();this.ds_cond2.setColumn(_b,"APPLC_DE",this.ds_emplyminsrncDate.getColumn(this.ds_emplyminsrncDate.rowposition,"APPLC_DE"));this.fn_transaction("delEmplyminsrncList");}}else{if(this.gfn_message("confirm.삭제여부")){var _b=this.ds_emplyminsrnc.rowposition;this.ds_emplyminsrnc.deleteRow(_b);}}};this.fn_cancel=function(){if(this.gfn_message("confirm.취소여부")){this.ds_emplyminsrnc.reset();this.ds_emplyminsrnc.applyChange();return;}};this.fn_save=function(){for(i=0;i<this.ds_emplyminsrnc.rowcount;i++ ){if(this.ds_emplyminsrnc.getColumn(i,"EMPNO")=="동명이인"){alert("동명이인이 있습니다. 사원을 선택해주세요.");return;}if(this.ds_emplyminsrnc.getColumn(i,"EMPNO")=="사번없음"){alert("사번이 검색되지 않는 사원이 있습니다.");return;}}if(!this.gfn_checkValidation(this.ds_emplyminsrnc,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveEmplyminsrncList");}};this.fn_transaction=function(_a){switch(_a){case "selectEmplyminsrncList":var _b="hsco/mis/sal/SAL010107/selectEmplyminsrncList.do";var _c="input1=ds_cond";var _d="ds_emplyminsrncDate=output1";break;case "selectEmplyminsrncList2":var _b="hsco/mis/sal/SAL010107/selectEmplyminsrncList2.do";var _c="input2=ds_cond2";var _d="ds_emplyminsrnc=output2";break;case "selectSoctyInsrncTariffList":var _b="hsco/mis/sal/SAL010104/selectSoctyInsrncTariffList2.do";var _c="input2=ds_cond3";var _d="ds_soctyInsrncTariff=output2";break;case "selectHrMastrList":var _b="hsco/mis/sal/SAL010105/selectHrMastrList.do";var _c="";var _d="ds_hrMastr=output3";break;case "saveEmplyminsrncList":var _b="hsco/mis/sal/SAL010107/emplyminsrncCUD.do";var _c="input3=ds_emplyminsrnc:U";var _d="";break;case "delEmplyminsrncList":var _b="hsco/mis/sal/SAL010107/delEmplyminsrnc.do";var _c="input3=ds_cond2";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "selectEmplyminsrncList":if(this.ds_emplyminsrncDate.rowcount>0){this.ds_emplyminsrncDate.rowposition=0;}break;case "selectEmplyminsrncList2":break;case "selectSoctyInsrncTariffList":if(this.ds_soctyInsrncTariff.rowcount>0){var _d=this.ds_soctyInsrncTariff.getColumn(0,"LABRR_BND");var _e=this.ds_emplyminsrnc.getRowCount();for(var _h=0;_h<=_e-1;_h++ ){var _f=this.ds_emplyminsrnc.getColumn(_h,"INCOME_MT_AM");var _g=parseInt(_f*_d/100);this.ds_emplyminsrnc.setColumn(_h,"EMPLYMINSRNC_TARIFF",_d);this.ds_emplyminsrnc.setColumn(_h,"EMPLYMINSRNC_AMOUNT",_g);}alert("계산이 완료되었습니다.");}else{alert(this.edt_year.value+" 년도 요율정보가 없습니다.");}break;case "saveEmplyminsrncList":this.fn_search();break;case "delEmplyminsrncList":this.fn_search();break;}}};this.btn_Cal_onclick=function(_a,_b){if(!this.edt_year.value){alert("적용년도를 입력하세요.");return;}if(this.ds_emplyminsrnc.rowcount>0){this.ds_soctyInsrncTariff.clearData();this.Socty_insrnc();}else{alert("계산할 내역이 없습니다.");}};this.Socty_insrnc=function(){this.ds_cond3.clearData();var _a=this.ds_cond3.addRow();this.ds_cond3.setColumn(_a,"APPLC_YEAR",this.edt_year.value);this.ds_cond3.setColumn(_a,"INSRNC_CODE","40");this.fn_transaction("selectSoctyInsrncTariffList");};this.grd_EMPLYMINSRNC_onexpandup=function(_a,_b){if(!this.ds_emplyminsrnc.getColumn(this.ds_emplyminsrnc.rowposition,"EMPNO")){var _c=system.clientToScreenX(this,10);var _d=system.clientToScreenY(this,10);var _e=new ChildFrame;_e.init("Popup1","absolute",_c,_d,400,400,null,null,"com::empno_P01.xfdl");_e.set_openalign("center middle");_e.set_dragmovetype("all");_e.set_showtitlebar(true);_e.showModal(this.getOwnerFrame(),{},this,"fn_callback2");}else if(this.ds_emplyminsrnc.getColumn(this.ds_emplyminsrnc.rowposition,"EMPNO")=="동명이인"||this.ds_emplyminsrnc.getColumn(this.ds_emplyminsrnc.rowposition,"EMPNO")=="사번없음"){var _f={arg_0:this,EMPNM:this.ds_emplyminsrnc.getColumn(this.ds_emplyminsrnc.rowposition,"EMPNM")};this.gfn_popup("Popup1",400,400,"사원 선택",_f,"com::empno_P01.xfdl","fn_callback2",true);}};this.fn_callback2=function(_a,_b){if(_a=="Popup1"){this.ds_empno.clearData();nRowCnt=this.ds_empno.loadXML(_b);if(this.ds_empno.getColumn(0,"EMPNO")){this.ds_emplyminsrnc.setColumn(this.ds_emplyminsrnc.rowposition,"EMPNO",this.ds_empno.getColumn(0,"EMPNO"));this.ds_emplyminsrnc.setColumn(this.ds_emplyminsrnc.rowposition,"EMPNM",this.ds_empno.getColumn(0,"EMPNM"));this.ds_emplyminsrnc.setColumn(this.ds_emplyminsrnc.rowposition,"DEPT_NAME",this.ds_empno.getColumn(0,"DEPT_NM"));var _c=this.grd_EMPLYMINSRNC.setFocus(true);var _d=this.grd_EMPLYMINSRNC.setCellPos(5);}}};this.Button25_onclick=function(_a,_b){this.ds_emplyminsrnc.clearData();var _c={targetDs:this.ds_import,headSet:false,callBack:this.excelImport_callBack};this.gfn_importExcel(_c);};this.excelImport_callBack=function(){if(this.ds_import.rowcount>1){var _a;this.ds_emplyminsrnc.updatecontrol=false;for(i=1;i<this.ds_import.rowcount;i++ ){_a=this.ds_emplyminsrnc.addRow();this.ds_emplyminsrnc.setColumn(_a,"APPLC_DE",this.ds_import.getColumn(i,"Column0"));var _b=this.ds_emplyminsrnc.getColumn(_a,"APPLC_DE");var _c=_b.replace(/[-]/g,"");this.ds_emplyminsrnc.setColumn(_a,"APPLC_DE",_c);this.ds_emplyminsrnc.setColumn(_a,"DEPT_NAME",this.ds_import.getColumn(i,"Column1"));this.ds_emplyminsrnc.setColumn(_a,"EMPNO",this.ds_import.getColumn(i,"Column2"));this.ds_emplyminsrnc.setColumn(_a,"EMPNM",this.ds_import.getColumn(i,"Column3"));this.ds_emplyminsrnc.setColumn(_a,"INCOME_MT_AM",this.ds_import.getColumn(i,"Column4"));this.ds_emplyminsrnc.setColumn(_a,"EMPLYMINSRNC_TARIFF",this.ds_import.getColumn(i,"Column5"));this.ds_emplyminsrnc.setColumn(_a,"EMPLYMINSRNC_AMOUNT",this.ds_import.getColumn(i,"Column6"));this.ds_emplyminsrnc.setRowType(_a,"I");}this.checkEmptyEmpNo();this.ds_emplyminsrnc.updatecontrol=true;}};this.Button24_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_EMPLYMINSRNC,"EMPLYMINSRNC");};this.checkEmptyEmpNo=function(){var _a= -1;var _b= -1;for(i=0;i<this.ds_emplyminsrnc.rowcount;i++ ){if(this.ds_emplyminsrnc.getColumn(i,"EMPNO")==""||this.ds_emplyminsrnc.getColumn(i,"EMPNO")==null){_a=this.ds_hrMastr.findRow("EMPNM",this.ds_emplyminsrnc.getColumn(i,"EMPNM"));if(_a!= -1){_b=this.ds_hrMastr.findRow("EMPNM",this.ds_emplyminsrnc.getColumn(i,"EMPNM"),_a+1);if(_b!= -1){this.ds_emplyminsrnc.setColumn(i,"EMPNO","동명이인");}else{this.ds_emplyminsrnc.setColumn(i,"EMPNO",this.ds_hrMastr.getColumn(_a,"EMPNO"));}}else{this.ds_emplyminsrnc.setColumn(i,"EMPNO","사번없음");}}}};this.Button_Download_onclick=function(_a,_b){this.gfn_exportExcel(this.grd_template,"EmployInsr_Template");};});this.on_initEvent=function(){this.ds_emplyminsrncDate.addEventHandler("onrowposchanged",this.ds_emplyminsrncDate_onrowposchanged,this);this.addEventHandler("onload",this.SAL010107_onload,this);this.addEventHandler("oninit",this.SAL010107_oninit,this);this.div_search.div_EMP.addEventHandler("onkeyup",this.div_SEARCH_div_EMP_onkeyup,this);this.div_search.cmb_EMPL_SE.addEventHandler("onitemchanged",this.div_search_cmb_EMPL_SE_onitemchanged,this);this.div_search.spn_year.addEventHandler("ontextchanged",this.div_search_year1_ontextchanged,this);this.div_search.spn_year2.addEventHandler("ontextchanged",this.div_search_year1_ontextchanged,this);this.grd_EMPLYMINSRNC.addEventHandler("onexpandup",this.grd_EMPLYMINSRNC_onexpandup,this);this.btn_Cal.addEventHandler("onclick",this.btn_Cal_onclick,this);this.Button25.addEventHandler("onclick",this.Button25_onclick,this);this.Button_Download.addEventHandler("onclick",this.Button_Download_onclick,this);};this.loadIncludeScript("SAL010107.xfdl");this.loadPreloadList();};})();