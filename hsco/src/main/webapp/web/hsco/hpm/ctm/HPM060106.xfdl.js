﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HPM060106");this.set_classname("HPM060106");this.set_titletext("경기타운일자관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"256\"/><Column id=\"DAY\" type=\"STRING\" size=\"256\"/><Column id=\"DE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hscDeManageList",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"DE\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYWEK\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_day",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">1</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">2</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">3</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">4</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">5</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NM\">6</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"CODE_NM\">7</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"CODE_NM\">8</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"CODE_NM\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NM\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"CODE_NM\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"CODE_NM\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"CODE_NM\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"CODE_NM\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"CODE_NM\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"CODE_NM\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"CODE_NM\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"CODE_NM\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"CODE_NM\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"CODE_NM\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"CODE_NM\">21</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"CODE_NM\">22</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"CODE_NM\">23</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"CODE_NM\">24</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"CODE_NM\">25</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"CODE_NM\">26</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"CODE_NM\">27</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"CODE_NM\">28</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"CODE_NM\">29</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"CODE_NM\">30</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"CODE_NM\">31</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("0");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","0","15",null,null,"0",this.div_search);_a.set_taborder("3");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe01","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("0");_a.set_text("조회년월");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("sta_searchDe00","absolute","180","5","64","21",null,null,this.div_search);_a.set_taborder("6");_a.set_text("일자내용");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Edit("Edit00","absolute","244","5","587","21",null,null,this.div_search);_a.set_taborder("7");this.div_search.addChild(_a.name,_a);_a=new Div("div_ym","absolute","80","5","85","21",null,null,this.div_search);_a.set_taborder("8");_a.set_async("false");_a.set_url("common::frmMonCal.xfdl");this.div_search.addChild(_a.name,_a);_a=new Static("Static02","absolute","165","0","15",null,null,"0",this.div_search);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","33","1031","10",null,null,this);_a.set_taborder("21");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","43",null,"19","28",null,this);_a.set_taborder("22");_a.set_text("경기타운일자관리 목록");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","62",null,null,"28","0",this);_a.set_taborder("23");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static00","absolute",null,"0","15","735","13",null,this);_a.set_taborder("24");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,null,"13","735","0","0",this);_a.set_taborder("25");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_hscDeManageList","absolute","0","67",null,null,"28","0",this);_a.set_taborder("101");_a.set_binddataset("ds_hscDeManageList");_a.set_autoenter("select");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"40\"/><Column size=\"600\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"일자\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;date&quot; : &quot;none&quot;\" style=\"align:center middle;\" text=\"bind:DE\" suppress=\"1\" suppressalign=\"middle\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:DAYWEK\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:CN\" editlimit=\"500\" editdisplay=\"display\" editlengthunit=\"ascii\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left;\" text=\"bind:RM\" editlimit=\"500\" editimemode=\"none\" editdisplay=\"display\" editlengthunit=\"ascii\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_link","absolute",null,"43","200","19","28",null,this);_a.set_taborder("102");_a.set_text("경기타운회의실 예약현황 바로가기");_a.set_cssclass("btn_WF_Link");this.addChild(_a.name,_a);_a=new Layout("default","",1031,59,this.div_search,function(_b){_b.set_taborder("0");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HPM060106");_b.set_titletext("경기타운일자관리");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_SEARCH.cmb_rentFcltsSe_s","value","ds_cond","SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","div_SEARCH.cmb_pchrgAt_s","value","ds_cond","CL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","div_SEARCH.edt_fcltyNm_s","value","ds_cond","FCLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_search.Edit00","value","ds_cond","CN");this.addChild(_a.name,_a);_a.bind();_a=null;};this.loadPreloadList=function(){this._addPreloadList("fdl","common::frmMonCal.xfdl");};this.addIncludeScript("HPM060106.xfdl","lib::comInclude.xjs");this.addIncludeScript("HPM060106.xfdl","mis_lib::misUtil.xjs");this.registerScript("HPM060106.xfdl",function(){this.saveRow= -1;this.HPM060106_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HPM060106_onload=function(_a,_b){this.div_search.div_ym.fn_setBind("ds_cond","DE");};this.fn_init_form=function(){this.gfn_initForm(this);var _a=this.dateUtils.format(this.gfn_today(),"yyyymmdd");var _b=_a.substring(0,6);this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"DE",_b);this.fn_search();};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.fn_search=function(){if(Ex.util.isUpdated(this.ds_hscDeManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}this.ds_hscDeManageList.clearData();if(!this.gfn_checkValidation_NoUpdChk(this.ds_cond,this.ds_validation)){return;}this.fn_transaction("selectHscDeManageList");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_hscDeManageList)){this.gfn_message("comm.데이터.변경.없음");return false;}if(!this.gfn_checkValidation_NoUpdChk(this.ds_hscDeManageList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.saveRow=this.ds_hscDeManageList.rowposition;this.fn_transaction("saveHscDeManageList");}};this.fn_insert=function(){var _a=this.ds_hscDeManageList.addRow();var _b=this.dateUtils.format(this.gfn_today(),"yyyymmdd");var _c=new Date(this.dateUtils.format(_b,"yyyy/mm/dd"));var _d=['일','월','화','수','목','금','토'];this.ds_hscDeManageList.setColumn(_a,"DE",_b);this.ds_hscDeManageList.setColumn(_a,"DAYWEK",_d[_c.getDay()]);};this.fn_delete=function(){if(this.gfn_message("confirm.삭제여부")){if(this.ds_hscDeManageList.getRowCount()>0){var _a=this.ds_hscDeManageList.rowposition;this.ds_hscDeManageList.deleteRow(_a);}}};this.fn_cancel=function(){if(Ex.util.isUpdated(this.ds_hscDeManageList)){if(!this.gfn_message("confirm.변경.취소.여부")){return false;}}if(this.gfn_message("confirm.취소여부")){this.ds_hscDeManageList.reset();this.ds_hscDeManageList.applyChange();}};this.fn_transaction=function(_a){switch(_a){case "selectHscDeManageList":var _b="hsco/hpm/ctm/HPM060106/selectHscDeManageList.do";var _c="input1=ds_cond";var _d="ds_hscDeManageList=output1";break;case "saveHscDeManageList":var _b="hsco/hpm/ctm/HPM060106/saveHscDeManageList.do";var _c="input1=ds_hscDeManageList:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!='0'){this.gfn_callback_message(_a,_b,_c);}if(_b=='0'){switch(_a){case "selectHscDeManageList":if(this.saveRow!= -1){this.ds_hscDeManageList.set_rowposition(this.saveRow);this.saveRow= -1;}break;case "saveHscDeManageList":this.fn_search();break;}}};this.ds_hscDeManageList_oncolumnchanged=function(_a,_b){if(_b.columnid=="DE"){var _c=['일','월','화','수','목','금','토'];var _d=new Date(this.dateUtils.format(_b.newvalue,"yyyy/mm/dd"));this.ds_hscDeManageList.setColumn(_b.row,"DAYWEK",_c[_d.getDay()]);}};this.ds_cond_oncolumnchanged=function(_a,_b){};this.btn_link_onclick=function(_a,_b){var _c=this.ds_cond.getColumn(0,"DE");var _d="srchYm="+_c;var _e="http://yeyak.hsuco.or.kr/hstown/sisulDeInfo.do";_e+=("?"+_d);system.execBrowser(_e);};});this.on_initEvent=function(){this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);this.ds_hscDeManageList.addEventHandler("oncolumnchanged",this.ds_hscDeManageList_oncolumnchanged,this);this.addEventHandler("oninit",this.HPM060106_oninit,this);this.addEventHandler("onload",this.HPM060106_onload,this);this.Static02.addEventHandler("onclick",this.Static02_onclick,this);this.btn_link.addEventHandler("onclick",this.btn_link_onclick,this);};this.loadIncludeScript("HPM060106.xfdl");this.loadPreloadList();};})();