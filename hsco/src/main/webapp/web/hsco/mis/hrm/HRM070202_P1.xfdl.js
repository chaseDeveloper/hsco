﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM070202_P1");this.set_classname("HRM070202_P1");this.set_titletext("배차상세현황 팝업");this._setFormPosition(0,0,1200,700);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_cond</Col><Col id=\"colId\">BGNDE</Col><Col id=\"msgId\">조회일자</Col><Col id=\"notNull\">Y</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_vhcleList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_BEGIN_TM\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"CARALC_END_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRAT_PURPS\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DRVER_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"T0900\" type=\"STRING\" size=\"256\"/><Column id=\"T0910\" type=\"STRING\" size=\"256\"/><Column id=\"T0920\" type=\"STRING\" size=\"256\"/><Column id=\"T0930\" type=\"STRING\" size=\"256\"/><Column id=\"T0940\" type=\"STRING\" size=\"256\"/><Column id=\"T0950\" type=\"STRING\" size=\"256\"/><Column id=\"T1000\" type=\"STRING\" size=\"256\"/><Column id=\"T1010\" type=\"STRING\" size=\"256\"/><Column id=\"T1020\" type=\"STRING\" size=\"256\"/><Column id=\"T1030\" type=\"STRING\" size=\"256\"/><Column id=\"T1040\" type=\"STRING\" size=\"256\"/><Column id=\"T1050\" type=\"STRING\" size=\"256\"/><Column id=\"T1100\" type=\"STRING\" size=\"256\"/><Column id=\"T1110\" type=\"STRING\" size=\"256\"/><Column id=\"T1120\" type=\"STRING\" size=\"256\"/><Column id=\"T1130\" type=\"STRING\" size=\"256\"/><Column id=\"T1140\" type=\"STRING\" size=\"256\"/><Column id=\"T1150\" type=\"STRING\" size=\"256\"/><Column id=\"T1200\" type=\"STRING\" size=\"256\"/><Column id=\"T1210\" type=\"STRING\" size=\"256\"/><Column id=\"T1220\" type=\"STRING\" size=\"256\"/><Column id=\"T1230\" type=\"STRING\" size=\"256\"/><Column id=\"T1240\" type=\"STRING\" size=\"256\"/><Column id=\"T1250\" type=\"STRING\" size=\"256\"/><Column id=\"T1300\" type=\"STRING\" size=\"256\"/><Column id=\"T1310\" type=\"STRING\" size=\"256\"/><Column id=\"T1320\" type=\"STRING\" size=\"256\"/><Column id=\"T1330\" type=\"STRING\" size=\"256\"/><Column id=\"T1340\" type=\"STRING\" size=\"256\"/><Column id=\"T1350\" type=\"STRING\" size=\"256\"/><Column id=\"T1400\" type=\"STRING\" size=\"256\"/><Column id=\"T1410\" type=\"STRING\" size=\"256\"/><Column id=\"T1420\" type=\"STRING\" size=\"256\"/><Column id=\"T1430\" type=\"STRING\" size=\"256\"/><Column id=\"T1440\" type=\"STRING\" size=\"256\"/><Column id=\"T1450\" type=\"STRING\" size=\"256\"/><Column id=\"T1500\" type=\"STRING\" size=\"256\"/><Column id=\"T1510\" type=\"STRING\" size=\"256\"/><Column id=\"T1520\" type=\"STRING\" size=\"256\"/><Column id=\"T1530\" type=\"STRING\" size=\"256\"/><Column id=\"T1540\" type=\"STRING\" size=\"256\"/><Column id=\"T1550\" type=\"STRING\" size=\"256\"/><Column id=\"T1600\" type=\"STRING\" size=\"256\"/><Column id=\"T1610\" type=\"STRING\" size=\"256\"/><Column id=\"T1620\" type=\"STRING\" size=\"256\"/><Column id=\"T1630\" type=\"STRING\" size=\"256\"/><Column id=\"T1640\" type=\"STRING\" size=\"256\"/><Column id=\"T1650\" type=\"STRING\" size=\"256\"/><Column id=\"T1700\" type=\"STRING\" size=\"256\"/><Column id=\"T1710\" type=\"STRING\" size=\"256\"/><Column id=\"T1720\" type=\"STRING\" size=\"256\"/><Column id=\"T1730\" type=\"STRING\" size=\"256\"/><Column id=\"T1740\" type=\"STRING\" size=\"256\"/><Column id=\"T1750\" type=\"STRING\" size=\"256\"/><Column id=\"T1800\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BGNDE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VHCLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"0","15",null,"0","2",this);_a.set_taborder("23");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","15","0",null,"15","15",null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","15",null,null,"15","15","0",this);_a.set_taborder("25");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close02","absolute",null,"15","50","25","15",null,this);_a.set_taborder("26");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","0","15",null,null,"2",this);_a.set_taborder("75");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","15","40",null,"5","15",null,this);_a.set_taborder("79");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_title","absolute","17","17","197","21",null,null,this);_a.set_taborder("81");_a.set_text("배차 상세현황");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","15","45",null,"33","15",null,this);_a.set_taborder("84");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_EMPL_SE01","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("10");_a.set_text("조회일자");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Calendar("cal_useVhcleDe","absolute","84","5","100","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("11");_a.set_readonly("false");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("sta_purps","absolute","200","6","62","19",null,null,this.div_search);_a.set_taborder("18");_a.set_text("관리부서");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Div("div_DeptComp","absolute","272","5","194","21",null,null,this.div_search);_a.set_taborder("19");_a.set_async("false");_a.set_url("com::deptCode.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","185","0","15","33",null,null,this.div_search);_a.set_taborder("20");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_vhcleNm","absolute","481","5","51","21",null,null,this.div_search);_a.set_taborder("21");_a.set_text("차량명");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("edt_vhcleNm","absolute","532","5","200","21",null,null,this.div_search);_a.set_taborder("22");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_search.addChild(_a.name,_a);_a=new Button("btn_condVhcle","absolute","711","5","21","22",null,null,this.div_search);_a.set_taborder("23");_a.set_cssclass("btn_WF_Search");_a.style.set_background("repeat 5,5");this.div_search.addChild(_a.name,_a);_a=new Static("Static00","absolute","466","0","15","33",null,null,this.div_search);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static11","absolute","15","78",null,"5","15",null,this);_a.set_taborder("85");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_search","absolute",null,"15","50","25","69",null,this);_a.set_taborder("87");_a.set_text("조회");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Grid("grd_vhcleList","absolute","15","83",null,null,"15","15",this);_a.set_taborder("88");_a.set_binddataset("ds_vhcleList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"126\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"15\"/><Column size=\"26\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"40\"/><Column size=\"75\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"관리부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"차량번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"차량명\"/><Cell col=\"3\" rowspan=\"2\" text=\"대상일자\"/><Cell col=\"4\" colspan=\"3\" text=\"9시\"/><Cell col=\"7\" colspan=\"3\" text=\"10시\"/><Cell col=\"10\" colspan=\"3\" text=\"11시\"/><Cell col=\"13\" colspan=\"3\" text=\"12시\"/><Cell col=\"16\" colspan=\"3\" text=\"13시\"/><Cell col=\"19\" colspan=\"3\" text=\"14시\"/><Cell col=\"22\" colspan=\"3\" text=\"15시\"/><Cell col=\"25\" colspan=\"3\" text=\"16시\"/><Cell col=\"28\" colspan=\"3\" text=\"17시\"/><Cell col=\"31\" text=\"18시\"/><Cell col=\"32\" colspan=\"8\" text=\"배차신청정보\"/><Cell row=\"1\" col=\"4\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"5\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"6\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"7\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"8\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"9\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"10\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"11\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"12\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"13\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"14\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"15\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"16\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"17\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"18\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"19\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"20\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"21\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"22\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"23\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"24\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"25\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"26\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"27\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"28\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"29\" style=\"font:7 arial;\" text=\"20\"/><Cell row=\"1\" col=\"30\" style=\"font:7 arial;\" text=\"40\"/><Cell row=\"1\" col=\"31\" style=\"font:7 arial;\" text=\"00\"/><Cell row=\"1\" col=\"32\" colspan=\"2\" text=\"운전자\"/><Cell row=\"1\" col=\"34\" colspan=\"2\" text=\"배차시작일시\"/><Cell row=\"1\" col=\"36\" colspan=\"2\" text=\"배차종료일시\"/><Cell row=\"1\" col=\"38\" text=\"목적지\"/><Cell row=\"1\" col=\"39\" text=\"운행목적\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" text=\"bind:VHCLE_NO\" suppress=\"2\" suppressalign=\"middle,over\"/><Cell col=\"2\" text=\"bind:VHCLE_NM\" suppress=\"3\" suppressalign=\"middle,over\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:IN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T0900&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T0900&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T0900&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T0900\"/><Cell col=\"5\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T0920&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T0920&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T0920&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T0920\"/><Cell col=\"6\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T0940&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T0940&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T0940&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T0940\"/><Cell col=\"7\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1000&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1000&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1000&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1000\"/><Cell col=\"8\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1020&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1020&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1020&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1020\"/><Cell col=\"9\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1040&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1040&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1040&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1040\"/><Cell col=\"10\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1100&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1100&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1100&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1100\"/><Cell col=\"11\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1120&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1120&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1120&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1120\"/><Cell col=\"12\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1140&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1140&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1140&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1140\"/><Cell col=\"13\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1200&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1200&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1200&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1200\"/><Cell col=\"14\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1220&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1220&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1220&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1220\"/><Cell col=\"15\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1240&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1240&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1240&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1240\"/><Cell col=\"16\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1300&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1300&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1300&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1300\"/><Cell col=\"17\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1320&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1320&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1320&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1320\"/><Cell col=\"18\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1340&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1340&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1340&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1340\"/><Cell col=\"19\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1400&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1400&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1400&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1400\"/><Cell col=\"20\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1420&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1420&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1420&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1420\"/><Cell col=\"21\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1440&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1440&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1440&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1440\"/><Cell col=\"22\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1500&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1500&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1500&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1500\"/><Cell col=\"23\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1520&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1520&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1520&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1520\"/><Cell col=\"24\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1540&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1540&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1540&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1540\"/><Cell col=\"25\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1600&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1600&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1600&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1600\"/><Cell col=\"26\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1620&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1620&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1620&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1620\"/><Cell col=\"27\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1640&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1640&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1640&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1640\"/><Cell col=\"28\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1700&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1700&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1700&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1700\"/><Cell col=\"29\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1720&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1720&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1720&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1720\"/><Cell col=\"30\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1740&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1740&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1740&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1740\"/><Cell col=\"31\" style=\"background:EXPR(dataset.getColumn(currow, &quot;T1800&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);background2:EXPR(dataset.getColumn(currow, &quot;T1800&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);font:5 arial;selectbackground:EXPR(dataset.getColumn(currow, &quot;T1800&quot;) == &quot;O&quot; ? &quot;palegreen&quot; : &quot;pink&quot;);selectfont:5 arial;\" text=\"bind:T1800\"/><Cell col=\"32\" text=\"bind:DRVER_DEPT_NM\"/><Cell col=\"33\" text=\"bind:EMPNM\"/><Cell col=\"34\" displaytype=\"date\" text=\"bind:CARALC_BGNDE\" calendardisplaynulltype=\"none\"/><Cell col=\"35\" text=\"bind:CARALC_BEGIN_TM\" mask=\"##:##\"/><Cell col=\"36\" displaytype=\"date\" text=\"bind:CARALC_ENDDE\" calendardisplaynulltype=\"none\"/><Cell col=\"37\" text=\"bind:CARALC_END_TM\" mask=\"##:##\"/><Cell col=\"38\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DSTN_NM\" tooltiptext=\"bind:DSTN_NM\"/><Cell col=\"39\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OPRAT_PURPS\" tooltiptext=\"bind:OPRAT_PURPS\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("84");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1200,700,this,function(_b){_b.set_classname("HRM070202_P1");_b.set_titletext("배차상세현황 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item3","mae_SANCTN_RECOM_DE","value","DS_WRKCP","DRFT_DT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_search.cal_useVhcleDe","value","ds_cond","BGNDE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.edt_vhcleNm","value","ds_cond","VHCLE_NM");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","com::deptCode.xfdl");};this.addIncludeScript("HRM070202_P1.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM070202_P1.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM070202_P1.xfdl",function(){this.fv_objForm;this.isAuth=false;this.HRM070202_P1_onload=function(_a,_b){this.div_search.div_DeptComp.fn_setBind("ds_cond","DEPT_CODE","DEPT_NM");this.fv_objForm=this.parent.arg_0;this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"BGNDE",this.dateUtils.today());this.fn_search();};this.fn_search=function(_a,_b){this.fn_transaction("tbhrmVhcleList");};this.fn_transaction=function(_a){switch(_a){case "tbhrmVhcleList":var _b="hsco/mis/hrm/HRM070202/selectCarAlcList.do";var _c="input1=ds_cond";var _d="ds_vhcleList=output1";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}if(_b!=0){}else{switch(_a){case "tbhrmVhcleList":break;}}};this.btn_close_onclick=function(_a,_b){this.close();};this.ds_cond_oncolumnchanged=function(_a,_b){if(_b.columnid=="BGNDE"){_a.setColumn(_b.row,"ENDDE",_b.newvalue);}};this.div_search_btn_condVhcle_onclick=function(_a,_b){var _c={arg_0:this,arg_1:this.ds_cond.getColumn(0,"DEPT_CODE"),arg_2:this.ds_cond.getColumn(0,"DEPT_NM")};this.gfn_popup("condVhcle",500,450,"",_c,"mis_hrm::HRM090401_P1.xfdl","fn_PopCallback",true);};this.fn_PopCallback=function(_a,_b){var _c=new Dataset();nRowCnt=_c.loadXML(_b);if(_a=="condVhcle"){this.ds_cond.setColumn(0,"VHCLE_NM",_c.getColumn(0,"VHCLE_NM"));this.ds_cond.setColumn(0,"VHCLE_CODE",_c.getColumn(0,"VHCLE_CODE"));}};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.addEventHandler("onload",this.HRM070202_P1_onload,this);this.btn_close02.addEventHandler("onclick",this.btn_close_onclick,this);this.div_search.btn_condVhcle.addEventHandler("onclick",this.div_search_btn_condVhcle_onclick,this);this.btn_search.addEventHandler("onclick",this.fn_search,this);this.grd_vhcleList.addEventHandler("oncellclick",this.grd_vhcleList_oncellclick,this);this.grd_vhcleList.addEventHandler("oncelldblclick",this.grd_vhcleList_oncelldblclick,this);};this.loadIncludeScript("HRM070202_P1.xfdl");this.loadPreloadList();};})();