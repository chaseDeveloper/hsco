﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("RNT040305");this.set_classname("RNT040305");this.set_titletext("일반수선등록(영구임대)");this.set_scrollbars("none");this._setFormPosition(0,0,1059,735);}_a=new Dataset("ds_cond02",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"ISSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_gnrl_rpairs",this);_a._setContents("<ColumnInfo><Column id=\"CNTRWK_KND\" type=\"STRING\" size=\"100\"/><Column id=\"CNSTRCT_ENTRPS\" type=\"STRING\" size=\"100\"/><Column id=\"RPAIRS_CN\" type=\"STRING\" size=\"200\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CONFM_SE_SANCTN\" type=\"STRING\" size=\"3\"/><Column id=\"RETURN_PRVONSH\" type=\"STRING\" size=\"200\"/><Column id=\"CONFM_DE\" type=\"STRING\" size=\"8\"/><Column id=\"OPERTN_DE\" type=\"STRING\" size=\"8\"/><Column id=\"RPAIRS_DE\" type=\"STRING\" size=\"8\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"12\"/><Column id=\"REGIST_DT\" type=\"DATE\" size=\"7\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"12\"/><Column id=\"UPDT_DT\" type=\"DATE\" size=\"7\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"DONG\" type=\"STRING\" size=\"4\"/><Column id=\"ISSNO\" type=\"STRING\" size=\"4\"/><Column id=\"SN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"3\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"11\"/><Column id=\"REQUST_DE\" type=\"STRING\" size=\"8\"/><Column id=\"NM\" type=\"STRING\" size=\"26\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_rpairs_photo",this);_a._setContents("<ColumnInfo><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"255\"/><Column id=\"PHOTO_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"COURS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"255\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"255\"/><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"DONG\" type=\"STRING\" size=\"255\"/><Column id=\"ISSNO\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"FILE_SE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"HOUSE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE1\" type=\"STRING\" size=\"256\"/><Column id=\"CONFM_SE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUST_DE2\" type=\"STRING\" size=\"256\"/><Column id=\"RPAIRS_SE\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","1031","0","15","723",null,null,this);_a.set_taborder("10");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static01","absolute",null,"0","13","723","0",null,this);_a.set_taborder("11");_a.set_text("스\r\n크\r\n롤\r\n13");_a.set_visible("false");_a.style.set_background("#d07b173c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static34","absolute","0","39","130","21",null,null,this);_a.set_taborder("12");_a.set_text("요청내역");_a.set_cssclass("sta_WF_Title02");this.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","33","1031","10",null,null,this);_a.set_taborder("132");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static41","absolute","0","55","263","5",null,null,this);_a.set_taborder("299");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Div("div_search","absolute","0","0",null,"33","28",null,this);_a.set_taborder("301");_a.set_cssclass("div_WFSA_Box");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","360","5","64","21",null,null,this.div_search);_a.set_taborder("12");_a.set_text("요청일자");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Static("Static17","absolute","532","5","17","21",null,null,this.div_search);_a.set_taborder("13");_a.set_text("~");this.div_search.addChild(_a.name,_a);_a=new Calendar("Calendar00","absolute","425","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("18");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Calendar("Calendar01","absolute","545","5","102","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("19");_a.set_dateformat("yyyy-MM-dd");_a.set_cssclass("cal_WF_Essential");_a=new Static("Static19","absolute","6","5","42","21",null,null,this.div_search);_a.set_taborder("22");_a.set_text("주택");_a.set_cssclass("sta_WFSA_Label");_a.style.set_background("URL('theme://images/sta_WFSA_Label.png') left middle");this.div_search.addChild(_a.name,_a);_a=new Combo("Combo00","absolute","54","5","300","21",null,null,this.div_search);this.div_search.addChild(_a.name,_a);_a.set_taborder("23");_a.set_innerdataset("ds_house_knd");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_cssclass("cmb_WF_Essential");_a.set_type("filter");_a.set_index("-1");_a=new Static("Static06","absolute","0","55","758","5",null,null,this);_a.set_taborder("302");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_gnrl_rpairs","absolute","0","60",null,"395","28",null,this);_a.set_taborder("382");_a.set_binddataset("ds_gnrl_rpairs");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"주택\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"동\"/><Cell col=\"3\" style=\"font:9 돋움;\" text=\"호\"/><Cell col=\"4\" style=\"font:9 돋움;\" text=\"계약자\"/><Cell col=\"5\" style=\"font:9 돋움;\" text=\"공종구분\"/><Cell col=\"6\" style=\"font:9 돋움;\" text=\"요청내역\"/><Cell col=\"7\" style=\"font:9 돋움;\" text=\"시행일자\"/><Cell col=\"8\" style=\"font:9 돋움;\" text=\"시공업체\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:HOUSE_CODE\"/><Cell col=\"2\" text=\"bind:DONG\"/><Cell col=\"3\" text=\"bind:ISSNO\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:NM\"/><Cell col=\"5\" text=\"bind:CNTRWK_KND\"/><Cell col=\"6\" text=\"bind:RPAIRS_CN\"/><Cell col=\"7\" text=\"bind:OPERTN_DE\"/><Cell col=\"8\" text=\"bind:CNSTRCT_ENTRPS\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static29","absolute","70","646","300","27",null,null,this);_a.set_taborder("384");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static30","absolute","70","594","300","27",null,null,this);_a.set_taborder("385");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static31","absolute","70","568","300","27",null,null,this);_a.set_taborder("386");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static37","absolute","70","542","300","27",null,null,this);_a.set_taborder("387");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static38","absolute","70","516","300","27",null,null,this);_a.set_taborder("388");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static39","absolute","70","464","300","27",null,null,this);_a.set_taborder("389");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static40","absolute","70","490","300","27",null,null,this);_a.set_taborder("3");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static48","absolute","-1","646","71","27",null,null,this);_a.set_taborder("391");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static49","absolute","-1","594","71","27",null,null,this);_a.set_taborder("392");_a.set_cssclass("sta_WF_Label");_a.set_text("요청내역");this.addChild(_a.name,_a);_a=new Static("Static50","absolute","-1","568","71","27",null,null,this);_a.set_taborder("393");_a.set_cssclass("sta_WF_Label");_a.set_text("시공업체");this.addChild(_a.name,_a);_a=new Static("Static52","absolute","-1","542","71","27",null,null,this);_a.set_taborder("394");_a.set_cssclass("sta_WF_Label");_a.set_text("공종구분");this.addChild(_a.name,_a);_a=new Static("Static60","absolute","-1","464","71","27",null,null,this);_a.set_taborder("395");_a.set_text("주택");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static75","absolute","70","672","300","27",null,null,this);_a.set_taborder("398");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static78","absolute","-1","672","71","27",null,null,this);_a.set_taborder("399");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static44","absolute","0","455","1031","10",null,null,this);_a.set_taborder("400");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static61","absolute","-1","490","71","27",null,null,this);_a.set_taborder("403");_a.set_text("동호");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static62","absolute","-1","516","71","27",null,null,this);_a.set_taborder("408");_a.set_cssclass("sta_WF_Label");_a.set_text("요청일자");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer04","absolute","700","465","331","234",null,null,this);_a.set_taborder("439");_a.set_image("URL('theme://images/img_sample.png')");this.addChild(_a.name,_a);_a=new Static("Static02","absolute","-1","620","71","27",null,null,this);_a.set_taborder("440");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","70","620","300","27",null,null,this);_a.set_taborder("441");_a.set_cssclass("sta_WF_Labelbg");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","320","484","758","5",null,null,this);_a.set_taborder("442");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Grid("grd_rpairs_photo","absolute","380","465","310","234",null,null,this);_a.set_taborder("443");_a.set_binddataset("ds_rpairs_photo");_a.set_autofittype("col");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:9 돋움;\" text=\"순번\"/><Cell col=\"1\" style=\"font:9 돋움;\" text=\"파일구분\"/><Cell col=\"2\" style=\"font:9 돋움;\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:PHOTO_NO\"/><Cell col=\"1\" text=\"bind:FILE_SE\"/><Cell col=\"2\" text=\"bind:FILE_NM\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","370",null,"10","400",null,"-41",this);_a.set_taborder("444");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static09","absolute","690",null,"10","400",null,"-49",this);_a.set_taborder("445");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new TextArea("txt_rpairs_cn","absolute","72","597","297","100",null,null,this);_a.set_taborder("9");_a.set_readonly("true");_a.set_linespace("3");_a.set_visible("false");this.addChild(_a.name,_a);_a=new Calendar("cal_requst_de","absolute","72","519","102","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("5");_a.set_dateformat("yyyy-MM-dd");_a=new Static("Static05","absolute","176","516","71","27",null,null,this);_a.set_taborder("449");_a.set_text("시행일자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Calendar("cal_requst_de00","absolute","249","519","102","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("6");_a.set_dateformat("yyyy-MM-dd");_a=new Combo("cmb_house_code","absolute","72","467","299","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("0");_a=new Edit("edt_dong","absolute","72","492","50","21",null,null,this);_a.set_taborder("1");this.addChild(_a.name,_a);_a=new Edit("edt_ho","absolute","124","492","50","21",null,null,this);_a.set_taborder("2");this.addChild(_a.name,_a);_a=new Static("Static10","absolute","176","490","71","27",null,null,this);_a.set_taborder("456");_a.set_text("계약자");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Edit("edt_nm","absolute","249","492","102","21",null,null,this);_a.set_taborder("4");this.addChild(_a.name,_a);_a=new Edit("edt_return_prvonsh00","absolute","72","571","297","21",null,null,this);_a.set_taborder("8");this.addChild(_a.name,_a);_a=new Combo("cmb_cntrwk_knd_code","absolute","72","545","298","21",null,null,this);this.addChild(_a.name,_a);_a.set_taborder("7");_a=new Layout("default","",0,33,this.div_search,function(_b){_b.set_taborder("301");_b.set_cssclass("div_WFSA_Box");});this.div_search.addLayout(_a.name,_a);_a=new Layout("default","",1059,735,this,function(_b){_b.set_classname("RNT040305");_b.set_titletext("일반수선등록(영구임대)");_b.set_scrollbars("none");});this.addLayout(_a.name,_a);_a=new BindItem("item0","cal_requst_de","value","ds_gnrl_rpairs","REQUST_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","txt_rpairs_cn","value","ds_gnrl_rpairs","RPAIRS_CN");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","cal_requst_de00","value","ds_gnrl_rpairs","REQUST_DE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","cmb_house_code","value","ds_gnrl_rpairs","HOUSE_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","edt_dong","value","ds_gnrl_rpairs","DONG");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","edt_nm","value","ds_gnrl_rpairs","");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","edt_ho","value","ds_gnrl_rpairs","ISSNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item7","cmb_cntrwk_knd_code","value","ds_gnrl_rpairs","CNTRWK_KND_CODE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_return_prvonsh00","value","ds_gnrl_rpairs","CNSTRCT_ENTRPS");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("RNT040305.xfdl","pms_lib::pmsUtilInclude.xjs");this.registerScript("RNT040305.xfdl",function(){this.RNT040305_oninit=function(_a,_b){this.fn_init();this.fn_init_form();this.fn_init_dataset();};this.RNT040305_onload=function(_a,_b){this.fn_loadCombo();var _c=new String(this.dateUtils.today());this.div_search.Calendar00.set_value(_c.substring(0,4)+"1");this.div_search.Calendar01.set_value(this.dateUtils.today());};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){};this.fn_loadCombo=function(){};this.fn_search=function(){this.ds_gnrl_rpairs.clearData();this.ds_rpairs_photo.clearData();if(this.ds_cond01.rowcount>1){this.ds_cond01.clearData();}var _a=this.ds_cond01.addRow();this.ds_cond01.setColumn(_a,"HOUSE_SE",this.div_Work.div_SearchArea.Combo01.value);this.ds_cond01.setColumn(_a,"REQUST_DE1",this.div_Work.div_SearchArea.Calendar00.value);this.ds_cond01.setColumn(_a,"REQUST_DE2",this.div_Work.div_SearchArea.Calendar01.value);this.ds_cond01.setColumn(_a,"RPAIRS_SE",1);this.fn_transaction("selectSlaryList2");};this.fn_save=function(){if(!this.gfn_checkValidation(this.div_work.grd_slaryList,this.ds_validation)){return;}if(this.gfn_message("confirm.저장.여부")){this.fn_transaction("saveSlaryList");}};this.fn_transaction=function(_a){switch(_a){case "selectSlaryList2":var _b="hsco/pms/rnt/rnt040305/getList.do";var _c="input1=ds_cond01";var _d="ds_gnrl_rpairs=output1";break;case "selectSlaryList3":var _b="hsco/pms/rnt/rnt040305/getListR1.do";var _c="input2=ds_cond01";var _d="ds_rpairs_photo=output2";break;case "saveSlaryList":var _b="hsco/pms/rnt/rnt040305/listCUD.do";var _e="input3=ds_gnrl_rpairs:U"+" input4=ds_rpairs_photo:U";var _c=_e;var _d="";break;}Ex.core.tran(this,_a,_b,_c,_d);};this.fn_callBack=function(_a,_b,_c){this.gfn_callback_message(_a,_b,_c);};this.ds_gnrl_rpairs_onrowposchanged=function(_a,_b){if(this.ds_cond02.rowcount>1){this.ds_cond02.clearData();}var _c=this.ds_cond02.addRow();this.ds_cond02.setColumn(_c,"HOUSE_CODE",this.ds_gnrl_rpairs.getColumn(this.ds_gnrl_rpairs.rowposition,"HOUSE_CODE"));this.ds_cond02.setColumn(_c,"DONG",this.ds_gnrl_rpairs.getColumn(this.ds_gnrl_rpairs.rowposition,"DONG"));this.ds_cond02.setColumn(_c,"HO",this.ds_gnrl_rpairs.getColumn(this.ds_gnrl_rpairs.rowposition,"HO"));this.ds_cond02.setColumn(_c,"SN",this.ds_gnrl_rpairs.getColumn(this.ds_gnrl_rpairs.rowposition,"SN"));this.ds_cond02.setColumn(_c,"RPAIRS_SE",1);this.fn_transaction("selectSlaryList3");};this.fn_cancel=function(){for(var _b=0;_b<this.checkDs.length;_b++ ){if(this.comUtils.isDatasetUpdated(this.checkDs[_b])){var _a=this.gfn_message("confirm.변경.취소.여부");if(_a){this.checkDs[_b].reset();}return _a;}}};});this.on_initEvent=function(){this.ds_gnrl_rpairs.addEventHandler("onrowposchanged",this.ds_gnrl_rpairs_onrowposchanged,this);this.addEventHandler("oninit",this.RNT040305_oninit,this);this.addEventHandler("onload",this.RNT040305_onload,this);this.txt_rpairs_cn.addEventHandler("oneditclick",this.TextArea03_oneditclick,this);};this.loadIncludeScript("RNT040305.xfdl");};})();