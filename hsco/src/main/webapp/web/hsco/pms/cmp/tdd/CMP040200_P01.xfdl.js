﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("CMP040200_P01");this.set_classname("CMP040200_P01");this.set_titletext("공문대상자 팝업");this._setFormPosition(0,0,1050,450);}_a=new Dataset("DS_TBCMP_LNDCGR_CODE",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("DS_UNIT",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rqestAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미청구</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">청구</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("DS_TBCMP_THING_WTNNC",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("false");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"THING_SN\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_LOCPLC_CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOCPLC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"THING_CL\" type=\"STRING\" size=\"256\"/><Column id=\"THING_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LNDCGR_INCRPR\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_LNDCGR\" type=\"STRING\" size=\"256\"/><Column id=\"NOW_USE_STTUS\" type=\"STRING\" size=\"256\"/><Column id=\"AR_LGSTR\" type=\"STRING\" size=\"256\"/><Column id=\"AR_INCRPR\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"UNTPC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RWMNY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RM_1\" type=\"STRING\" size=\"256\"/><Column id=\"AR\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_RWMNY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"POSESN_QOTA\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SE\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_SN\" type=\"STRING\" size=\"255\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"255\"/><Column id=\"RQEST_DE\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNS_AREA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQEST_SN\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER_SN\" type=\"STRING\" size=\"256\"/><Column id=\"THING_SN\" type=\"STRING\" size=\"256\"/><Column id=\"INNER_SANCTN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","17","81",null,null,"17","15",this);_a.set_taborder("1");_a.set_text("Div01");_a.style.set_border("0 none crimson");this.addChild(_a.name,_a);_a=new Grid("grd_DS_TBCMP_THING_WTNNC","absolute","0","0",null,null,"0","0",this.div_work);_a.set_cssclass("grd02_WF_blue");_a.set_taborder("0");_a.set_binddataset("DS_TBCMP_THING_WTNNC");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"152\"/><Column size=\"85\"/><Column size=\"86\"/><Column size=\"68\"/><Column size=\"65\"/><Column size=\"77\"/><Column size=\"68\"/><Column size=\"64\"/><Column size=\"63\"/><Column size=\"40\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"60\"/><Column size=\"92\"/><Column size=\"51\"/><Column size=\"44\"/><Column size=\"79\"/><Column size=\"69\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"소재지\"/><Cell col=\"2\" rowspan=\"2\" text=\"물건분류\"/><Cell col=\"3\" rowspan=\"2\" text=\"물건종류\"/><Cell col=\"4\" rowspan=\"2\" text=\"지목\"/><Cell col=\"5\" rowspan=\"2\" text=\"용도\"/><Cell col=\"6\" rowspan=\"2\" text=\"현실적인&#13;&#10;이용현황\"/><Cell col=\"7\" colspan=\"3\" text=\"면적/수량\"/><Cell col=\"10\" rowspan=\"2\" text=\"단위\"/><Cell col=\"11\" rowspan=\"2\" text=\"단가\"/><Cell col=\"12\" rowspan=\"2\" text=\"금액\"/><Cell col=\"13\" rowspan=\"2\" text=\"지분\"/><Cell col=\"14\" rowspan=\"2\" text=\"보상금액\"/><Cell col=\"15\" rowspan=\"2\" text=\"비고\"/><Cell col=\"16\" rowspan=\"2\" text=\"청구&#13;&#10;순번\"/><Cell col=\"17\" rowspan=\"2\" text=\"청구&#13;&#10;일자\"/><Cell col=\"18\" rowspan=\"2\" text=\"청구여부\"/><Cell row=\"1\" col=\"7\" text=\"지적\"/><Cell row=\"1\" col=\"8\" text=\"편입\"/><Cell row=\"1\" col=\"9\" text=\"소유\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:left;background2:transparent;\" text=\"bind:FULL_LOCPLC_CODE_NM\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:THING_CL\" combodataset=\"DS_THING_CL\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:THING_NM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:LNDCGR_INCRPR\" combodataset=\"DS_TBCMP_LNDCGR_CODE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:REAL_LNDCGR\" combodataset=\"DS_TBCMP_LNDCGR_CODE\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:NOW_USE_STTUS\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AR_LGSTR\" mask=\"9,999.999\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AR_INCRPR\" mask=\"9,999.999\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AR\" mask=\"9,999.999\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:UNIT\" combodataset=\"DS_UNIT\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNTPC\" mask=\"9,999.999\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RWMNY\" mask=\"9,999.999\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:POSESN_QOTA\" mask=\"9,999.999\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:OWNER_RWMNY\" mask=\"9,999.999\"/><Cell col=\"15\" style=\"align:left;\" text=\"bind:RM_1\"/><Cell col=\"16\" text=\"bind:RQEST_SN\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:RQEST_DE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:RQEST_SE\" combodataset=\"ds_rqestAt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" displaytype=\"number\" style=\"align:center;\" text=\"expr:dataset.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('RWMNY')\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('OWNER_RWMNY')\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","2","2",null,"34","2",null,this);_a.set_taborder("2");_a.set_text("청구 조서 현황");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"2","15",null,"2","0",this);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","2","2","15",null,null,"0",this);_a.set_taborder("4");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","0.4%","36",null,"15","0.4%",null,this);_a.set_taborder("5");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("title","absolute","18","53","110","21",null,null,this);_a.set_taborder("6");_a.set_text("기본 조서 현황");_a.set_cssclass("sta_WF_Title01");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","977","51","56","25",null,null,this);_a.set_taborder("8");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","2",null,null,"15","2","0",this);_a.set_taborder("11");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","3.4%","76",null,"5","3.4%",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute",null,"8","22","20","22",null,this);_a.set_taborder("14");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("1");_b.set_text("Div01");_b.style.set_border("0 none crimson");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",1050,450,this,function(_b){_b.set_classname("CMP040200_P01");_b.set_titletext("공문대상자 팝업");});this.addLayout(_a.name,_a);_a=null;};this.addIncludeScript("CMP040200_P01.xfdl","pms_lib::cmpUtilInclude.xjs");this.registerScript("CMP040200_P01.xfdl",function(){var _a='G0100';var _b='1437';var _c=4;this.CMP040200_P01_oninit=function(_d,_e){this.fn_init();this.fn_init_dataset();};this.CMP040200_P01_onload=function(_d,_e){this.fn_load_combo();this.fn_data_set();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);this.fn_transaction("thingThingList");};this.fn_load_combo=function(){};this.fn_data_set=function(){var _d=this.parent.thing_sl_list.split(",");var _e=this.parent.owner_sn_list.split(",");var _f= -1;_f=this.DS_TBCMP_LNDCGR_CODE.copyData(this.parent.ds_code);_f=this.DS_UNIT.copyData(this.parent.us_unit);_f=this.ds_rqestAt.copyData(this.parent.ds_at);var _d=this.parent.thing_sl_list.split(",");var _g= -1;this.DS_TBCMP_LNDCGR_CODE.clearData();for(var _h=0;_h<_d.length;_h++ ){for(var _i=0;_i<this.parent.ds_data.rowcount;_i++ ){if(_d[_h]==this.parent.ds_data.getColumn(_i,"THING_SN")&&_e[_h]==this.parent.ds_data.getColumn(_i,"OWNER_SN")){_g=this.DS_TBCMP_THING_WTNNC.addRow();this.DS_TBCMP_THING_WTNNC.copyRow(_g,this.parent.ds_data,_i);continue;}}}};this.fn_transaction=function(_d){var _e=true;switch(_d){case "thingThingList":this.ds_cond01.clearData();this.ds_cond01.addRow();this.ds_cond01.copyData(this.parent.ds_cond);trace(this.ds_cond01.saveXML());var _f="hsco/pms/cmp/tdd/CMP040200/thingThingList.do";var _g="input1=ds_cond01";var _h="DS_TBCMP_THING_WTNNC=output1";break;}if(this.fn_validate_tranasaction(_d,_f,_g,_h)==false){return;}Ex.core.tran(this,_d,_f,_g,_h,"",null,null,_e);};this.btn_close_onclick=function(_d,_e){this.close();};});this.on_initEvent=function(){this.addEventHandler("oninit",this.CMP040200_P01_oninit,this);this.addEventHandler("onload",this.CMP040200_P01_onload,this);this.div_work.grd_DS_TBCMP_THING_WTNNC.addEventHandler("onselectchanged",this.div_DETAIL01_grd_DS_TBCMP_THING_WTNNC_onselectchanged,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);};this.loadIncludeScript("CMP040200_P01.xfdl");};})();