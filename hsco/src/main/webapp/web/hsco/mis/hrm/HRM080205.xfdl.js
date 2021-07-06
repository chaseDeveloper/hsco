﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("HRM080205");this.set_classname("HRM080205");this.set_titletext("의무이수시간관리");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond",this);_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_edcComplTime",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TIME_SE\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TIME_SE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDC_TIME_MNGER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EDC_TIME_MNGR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EDC_TIME_PRCAFS_GRAD_4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EDC_TIME_PRCAFS_GRAD_5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EDC_TIME_PRCAFS_GRAD_6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EDC_TIME_STOPRT_EMP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UPDT_POSBL_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hrm039",this);_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"ETC1\" type=\"string\" size=\"32\"/><Column id=\"VAL2\" type=\"string\" size=\"32\"/><Column id=\"CODE_CN\" type=\"string\" size=\"32\"/><Column id=\"VAL1\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"ETC3\" type=\"string\" size=\"32\"/><Column id=\"VAL4\" type=\"string\" size=\"32\"/><Column id=\"ETC2\" type=\"string\" size=\"32\"/><Column id=\"VAL3\" type=\"string\" size=\"32\"/><Column id=\"CODE_ORDR\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MSTK_VAL\" type=\"string\" size=\"32\"/><Column id=\"ALL_CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"CODE_NM\" type=\"string\" size=\"32\"/><Column id=\"INT_VAL\" type=\"string\" size=\"32\"/><Column id=\"GRP_CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"VAL0\" type=\"string\" size=\"32\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","1031","0","15","735",null,null,this);_a.set_taborder("2");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute",null,"0","13","735","0",null,this);_a.set_taborder("3");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("5");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("sta_YEAR","absolute","15","5","64","21",null,null,this.div_search);_a.set_taborder("31");_a.set_text("조회년도");_a.set_wordwrap("char");_a.set_cssclass("sta_WFSA_Label");this.div_search.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","5","15",null,null,"5",this.div_search);_a.set_taborder("38");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#00ffff66");this.div_search.addChild(_a.name,_a);_a=new Spin("spn_YEAR","absolute","79","5","68","21",null,null,this.div_search);_a.set_taborder("44");_a.set_value("0");_a.set_max("9999");_a.style.set_buttonsize("15");_a.style.set_align("center middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static36","absolute","0","49","1031","10",null,null,this);_a.set_taborder("6");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_gnfdList","absolute","0","35","85","19",null,null,this);_a.set_taborder("7");_a.set_text("이수내역");_a.set_cssclass("sta_WF_Title02");_a.style.set_align("left middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","33","1031","5",null,null,this);_a.set_taborder("8");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","0","58",null,null,"28","0",this);_a.set_taborder("9");_a.set_binddataset("ds_edcComplTime");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" text=\"경영자\"/><Cell col=\"2\" text=\"관리자\"/><Cell col=\"3\" colspan=\"3\" text=\"실무자\"/><Cell col=\"6\" rowspan=\"2\"><Cell text=\"현업직원\"/><Cell row=\"1\" text=\"(영양사, 청경,&#13;&#10;시설관리원 등)\"/></Cell><Cell row=\"1\" col=\"1\" text=\"2급\"/><Cell row=\"1\" col=\"2\" text=\"3급\"/><Cell row=\"1\" col=\"3\" text=\"4급\"/><Cell row=\"1\" col=\"4\" text=\"5급\"/><Cell row=\"1\" col=\"5\" text=\"6급\"/></Band><Band id=\"body\"><Cell text=\"bind:EDC_TIME_SE_NM\"/><Cell col=\"1\" edittype=\"expr:UPDT_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:center middle;\" text=\"bind:EDC_TIME_MNGER\" mask=\"expr:EDC_TIME_SE == 'D2' ? '999 h' : '999 h 이상'\" maskchar=\" \" editlimitbymask=\"both\"/><Cell col=\"2\" edittype=\"expr:UPDT_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:center middle;\" text=\"bind:EDC_TIME_MNGR\" mask=\"expr:EDC_TIME_SE == 'D2' ? '999 h' : '999 h 이상'\" maskchar=\" \" editlimitbymask=\"both\"/><Cell col=\"3\" edittype=\"expr:UPDT_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:center middle;\" text=\"bind:EDC_TIME_PRCAFS_GRAD_4\" mask=\"expr:EDC_TIME_SE == 'D2' ? '999 h' : '999 h 이상'\" maskchar=\" \" editlimitbymask=\"both\"/><Cell col=\"4\" edittype=\"expr:UPDT_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:center middle;\" text=\"bind:EDC_TIME_PRCAFS_GRAD_5\" mask=\"expr:EDC_TIME_SE == 'D2' ? '999 h' : '999 h 이상'\" maskchar=\" \" editlimitbymask=\"both\"/><Cell col=\"5\" edittype=\"expr:UPDT_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:center middle;\" text=\"bind:EDC_TIME_PRCAFS_GRAD_6\" mask=\"expr:EDC_TIME_SE == 'D2' ? '999 h' : '999 h 이상'\" maskchar=\" \" editlimitbymask=\"both\"/><Cell col=\"6\" edittype=\"expr:UPDT_POSBL_AT == '1' ? 'masknumber' : 'none'\" style=\"align:center middle;\" text=\"bind:EDC_TIME_STOPRT_EMP\" mask=\"expr:EDC_TIME_SE == 'D2' ? '999 h' : '999 h 이상'\" maskchar=\" \" editlimitbymask=\"both\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("5");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("HRM080205");_b.set_titletext("의무이수시간관리");});this.addLayout(_a.name,_a);_a=new BindItem("item14","div_search.spn_YEAR","value","ds_cond","YEAR");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("HRM080205.xfdl","lib::comInclude.xjs");this.addIncludeScript("HRM080205.xfdl","mis_lib::misUtil.xjs");this.registerScript("HRM080205.xfdl",function(){this.HRM080205_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.HRM080205_onload=function(_a,_b){var _c=[["ds_hrm039","HRM039","Y","D","B"]];var _d=function(_e,_f,_g){this.ds_cond.clearData();var _h=this.ds_cond.addRow();this.ds_cond.setColumn(_h,"YEAR",this.comUtils.getClientDate("YYYY"));this.fn_search();};this.gfn_comboLoad(_c,_d);};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.fn_search=function(){this.ds_edcComplTime.clearData();this.fn_transaction("selectEdcComplTime");};this.fn_save=function(){if(!this.comUtils.isDatasetUpdated(this.ds_edcComplTime)){this.gfn_message("comm.데이터.변경.없음");return false;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveEdcComplTime");}};this.fn_transaction=function(_a){switch(_a){case "selectEdcComplTime":var _b="hsco/mis/hrm/HRM080205/selectEdcComplTime.do";var _c="input1=ds_cond";var _d="ds_edcComplTime=output1";break;case "saveEdcComplTime":var _b="hsco/mis/hrm/HRM080205/saveEdcComplTime.do";var _c="input1=ds_edcComplTime:U";var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "saveEdcComplTime":this.fn_search();break;}}};this.ds_edcComplTime_oncolumnchanged=function(_a,_b){var _c=_a.getColumn(_b.row,"EDC_TIME_SE");if(_c=='D2'){var _d=_a.findRow("EDC_TIME_SE",'D3');if(_d> -1){var _e=Math.floor(nexacro.toNumber(_b.newvalue,0,0,0)*0.4);_a.setColumn(_d,_b.columnid,_e);}}};});this.on_initEvent=function(){this.ds_edcComplTime.addEventHandler("oncolumnchanged",this.ds_edcComplTime_oncolumnchanged,this);this.addEventHandler("oninit",this.HRM080205_oninit,this);this.addEventHandler("onload",this.HRM080205_onload,this);this.Static07.addEventHandler("onclick",this.Static07_onclick,this);};this.loadIncludeScript("HRM080205.xfdl");};})();