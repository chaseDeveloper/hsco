﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("AUD020101_P02");this.set_classname("AUD020101_P02");this.set_titletext("법인카드모니터링설정");this._setFormPosition(0,0,700,700);}_a=new Dataset("ds_card_area_no",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"AREA_NO_SEQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHOISE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_card_bsis_estbs",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ESTBS_SE\" type=\"STRING\" size=\"1\"/><Column id=\"TIME_SE\" type=\"STRING\" size=\"1\"/><Column id=\"BEGIN_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESTDE_AT\" type=\"STRING\" size=\"1\"/><Column id=\"AREA_AT\" type=\"STRING\" size=\"1\"/><Column id=\"SAMENSS_BSSH_AT\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY_AT\" type=\"STRING\" size=\"1\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_card_induty_code",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"INDUTY_CODE_SEQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHOISE_SE\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDUSR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("false");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"ESTBS_SE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","0",null,null,"0","0",this);_a.set_taborder("1");_a.set_cssclass("sta_WF_PopupBg");this.addChild(_a.name,_a);_a=new Div("div_work","absolute","0","47",null,null,"0","0",this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Static("sta_timeSe","absolute","21","23","85","27",null,null,this.div_work);_a.set_taborder("1");_a.set_text("시간");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_samenssBsshAt","absolute","356","23","85","27",null,null,this.div_work);_a.set_taborder("2");_a.set_text("동일업소");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_beginTime","absolute","21","49",null,"27","594",null,this.div_work);_a.set_taborder("3");_a.set_text("시작시간");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_endTime","absolute","21","75","85","27",null,null,this.div_work);_a.set_taborder("12");_a.set_text("종료시간");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_restdtEstbs","absolute","22","109","130","20",null,null,this.div_work);_a.set_taborder("13");_a.set_text("휴일설정");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_restdeAt","absolute","21","130","85","27",null,null,this.div_work);_a.set_taborder("14");_a.set_text("휴일");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_areaEstbs","absolute","22","164","130","20",null,null,this.div_work);_a.set_taborder("15");_a.set_text("지역설정");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_areaAt","absolute","21","185","85","27",null,null,this.div_work);_a.set_taborder("16");_a.set_text("지역");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Static("sta_indutyEstbs","absolute","357","57","130","20",null,null,this.div_work);_a.set_taborder("17");_a.set_text("업종설정");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.div_work.addChild(_a.name,_a);_a=new Static("sta_indutyAt","absolute","356","78","85","27",null,null,this.div_work);_a.set_taborder("18");_a.set_text("업종");_a.set_cssclass("sta_WF_Label");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_card_area_no","absolute","21","222",null,null,"354","17",this.div_work);_a.set_taborder("8");_a.set_binddataset("ds_card_area_no");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_enable("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"지역\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHOISE_SE\"/><Cell col=\"1\" text=\"bind:AREA_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Grid("grd_card_induty_code","absolute","356","115",null,null,"17","17",this.div_work);_a.set_taborder("11");_a.set_binddataset("ds_card_induty_code");_a.set_autoenter("select");_a.set_autofittype("col");_a.set_enable("false");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"업종\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHOISE_SE\"/><Cell col=\"1\" text=\"bind:INDUTY_NM\"/></Band></Format></Formats>");this.div_work.addChild(_a.name,_a);_a=new Static("Static10","absolute","105","23","30","27",null,null,this.div_work);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static00","absolute","105","49","69","27",null,null,this.div_work);_a.set_taborder("20");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static01","absolute","105","75","69","27",null,null,this.div_work);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new CheckBox("chk_timeSe","absolute","114","24","25","25",null,null,this.div_work);_a.set_taborder("0");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_beginTime","absolute","108","52",null,"21","530",null,this.div_work);_a.set_taborder("4");_a.set_type("string");_a.set_mask("##:##");_a.set_enable("false");this.div_work.addChild(_a.name,_a);_a=new MaskEdit("msk_endTime","absolute","108","78",null,"21","530",null,this.div_work);_a.set_taborder("5");_a.set_type("string");_a.set_mask("##:##");_a.set_enable("false");this.div_work.addChild(_a.name,_a);_a=new Static("Static02","absolute","105","130","30","27",null,null,this.div_work);_a.set_taborder("22");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static04","absolute","105","185","30","27",null,null,this.div_work);_a.set_taborder("23");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new CheckBox("chk_restdeAt","absolute","114","131","25","25",null,null,this.div_work);_a.set_taborder("6");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new CheckBox("chk_areaAt","absolute","114","186","25","25",null,null,this.div_work);_a.set_taborder("7");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new Static("Static03","absolute","440","23","30","27",null,null,this.div_work);_a.set_taborder("24");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new Static("Static05","absolute","440","78","30","27",null,null,this.div_work);_a.set_taborder("25");_a.set_cssclass("sta_WF_Labelbg");this.div_work.addChild(_a.name,_a);_a=new CheckBox("chk_indutyAt","absolute","448","79","25","25",null,null,this.div_work);_a.set_taborder("10");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new CheckBox("chk_samenssBsshAt","absolute","448","24","25","25",null,null,this.div_work);_a.set_taborder("9");_a.set_value("0");_a.set_truevalue("1");_a.set_falsevalue("0");this.div_work.addChild(_a.name,_a);_a=new Static("Static12","absolute","17","212","322","10",null,null,this.div_work);_a.set_taborder("26");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_work.addChild(_a.name,_a);_a=new Button("btn_close","absolute",null,"17","50","25","17",null,this);_a.set_taborder("2");_a.set_text("닫기");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Button("btn_confirm","absolute",null,"17","50","25","70",null,this);_a.set_taborder("0");_a.set_text("확인");_a.set_cssclass("btn_WF_CRUD");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","1","2","15","496",null,null,this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_cardMonitoring","absolute","17","20","150","19",null,null,this);_a.set_taborder("9");_a.set_text("법인카드모니터링설정");_a.set_cssclass("sta_WF_Title01");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_time","absolute","22","50","130","19",null,null,this);_a.set_taborder("10");_a.set_text("시간설정");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("sta_sameness","absolute","357","50","130","19",null,null,this);_a.set_taborder("11");_a.set_text("동일업소설정");_a.set_cssclass("sta_WF_Title02");_a.style.set_font("bold 9 Dotum");this.addChild(_a.name,_a);_a=new Static("Static01","absolute","16","42","5","496",null,null,this);_a.set_taborder("12");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","346","58","10","496",null,null,this);_a.set_taborder("13");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static07","absolute","353","120","170","5",null,null,this);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static08","absolute","353","97","170","10",null,null,this);_a.set_taborder("15");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static11","absolute","22","204","66","10",null,null,this);_a.set_taborder("16");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.div_work,function(_b){_b.set_taborder("3");});this.div_work.addLayout(_a.name,_a);_a=new Layout("default","",700,700,this,function(_b){_b.set_classname("AUD020101_P02");_b.set_titletext("법인카드모니터링설정");});this.addLayout(_a.name,_a);_a=new BindItem("item0","div_Work.chk_estbsSe","value","ds_card_bsis_estbs","TIME_SE");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","div_Work.chk_restdeAt","value","ds_card_bsis_estbs","RESTD_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item4","div_Work.chk_samenssBsshAt","value","ds_card_bsis_estbs","SAMENSS_BSSH_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item5","div_Work.chk_indutyAt","value","ds_card_bsis_estbs","INDUTY_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item6","div_Work.chk_areaAt","value","ds_card_bsis_estbs","AREA_AT");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_Work.mks_beginTime","value","ds_card_bsis_estbs","BEGIN_TIME");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","div_Work.msk_endTime","value","ds_card_bsis_estbs","END_TIME");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("AUD020101_P02.xfdl","lib::comInclude.xjs");this.addIncludeScript("AUD020101_P02.xfdl","mis_lib::misUtil.xjs");this.registerScript("AUD020101_P02.xfdl",function(){this.AUD020101_P02_oninit=function(_a,_b){this.fn_init_form();this.fn_init_dataset();};this.fn_init_form=function(){this.gfn_initForm(this);this.fn_misFormInit(this);};this.fn_init_dataset=function(){};this.AUD020101_P02_onload=function(_a,_b){this.ds_card_area_no.clearData();this.ds_card_bsis_estbs.clearData();this.ds_card_induty_code.clearData();this.ds_cond.clearData();this.ds_cond.addRow();this.ds_cond.setColumn(0,"ESTBS_SE","1");this.fn_transaction("selectEstbsList");};this.btn_confirm_onclick=function(_a,_b){this.fn_transaction("estbsListCUD");};this.fn_transaction=function(_a){switch(_a){case "selectEstbsList":var _b="hsco/mis/aud/AUD020101_P02/selectEstbsList.do";var _c="input05=ds_cond";var _d="ds_card_bsis_estbs=output06 ds_card_area_no=output07 ds_card_induty_code=output08";break;case "estbsListCUD":var _b="hsco/mis/aud/AUD020101_P02/estbsListCUD.do";var _c="input06=ds_card_bsis_estbs:U input07=ds_card_area_no:U input08=ds_card_induty_code:U";var _d="";break;}var _e="";Ex.core.tran(this,_a,_b,_c,_d,_e);};this.fn_callBack=function(_a,_b,_c){if(_b!=0){this.gfn_callback_message(_a,_b,_c);}else{switch(_a){case "estbsListCUD":this.close();break;case "selectEstbsList":break;}}};this.btn_close_onclick=function(_a,_b){this.close();};this.div_work_chk_timeSe_onchanged=function(_a,_b){if(_a.value=='1'){this.div_work.msk_beginTime.set_enable(true);this.div_work.msk_endTime.set_enable(true);}else{this.div_work.msk_beginTime.set_enable(false);this.div_work.msk_endTime.set_enable(false);}};this.div_work_chk_areaAt_onchanged=function(_a,_b){if(_a.value=='1'){this.div_work.grd_card_area_no.set_enable(true);}else{this.div_work.grd_card_area_no.set_enable(false);}};this.div_work_chk_indutyAt_onchanged=function(_a,_b){if(_a.value=='1'){this.div_work.grd_card_induty_code.set_enable(true);}else{this.div_work.grd_card_induty_code.set_enable(false);}};});this.on_initEvent=function(){this.addEventHandler("onload",this.AUD020101_P02_onload,this);this.addEventHandler("oninit",this.AUD020101_P02_oninit,this);this.div_work.sta_restdtEstbs.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.sta_areaEstbs.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.sta_indutyEstbs.addEventHandler("onclick",this.Static00_onclick,this);this.div_work.chk_timeSe.addEventHandler("onchanged",this.div_work_chk_timeSe_onchanged,this);this.div_work.msk_beginTime.addEventHandler("ontextchanged",this.div_Work_mks_beginTime_ontextchanged,this);this.div_work.chk_areaAt.addEventHandler("onchanged",this.div_work_chk_areaAt_onchanged,this);this.div_work.chk_indutyAt.addEventHandler("onchanged",this.div_work_chk_indutyAt_onchanged,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);this.sta_cardMonitoring.addEventHandler("onclick",this.Static00_onclick,this);this.sta_time.addEventHandler("onclick",this.Static00_onclick,this);this.sta_sameness.addEventHandler("onclick",this.Static00_onclick,this);};this.loadIncludeScript("AUD020101_P02.xfdl");};})();