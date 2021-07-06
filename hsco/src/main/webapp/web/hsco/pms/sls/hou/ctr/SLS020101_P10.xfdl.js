﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("SLS020101_P10");this.set_classname("rentCstmrBsnm");this.set_titletext("임대사업자 검색 및 등록 팝업");this._setFormPosition(0,0,640,555);}_a=new Dataset("ds_validation",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"PK\" type=\"STRING\" size=\"256\"/><Column id=\"notNull\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"nlength\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"lengthChkGb\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"compId\">ds_rentBsnmList</Col><Col id=\"colId\">CNTRCTR_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">계약자번호</Col></Row><Row><Col id=\"compId\">ds_rentBsnmList</Col><Col id=\"colId\">PRMANENT_CSTMR_NO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">고객번호</Col></Row><Row><Col id=\"compId\">ds_rentBsnmList</Col><Col id=\"colId\">MTLTY</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">상호명</Col></Row><Row><Col id=\"compId\">ds_rentBsnmList</Col><Col id=\"colId\">BIZRNO</Col><Col id=\"notNull\">Y</Col><Col id=\"to\"/><Col id=\"msgId\">사업자번호</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Dataset("ds_houseCstmrInfo",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNM_SN\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond00",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BSNM_SN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_hcntrctrBsnmList",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"BSNM_SN\" type=\"STRING\" size=\"256\"/><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_CONFM_DE\" type=\"STRING\" size=\"256\"/><Column id=\"BSNM_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_cond01",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_HouseCstmrListInfo",this);_a.set_useclientlayout("true");_a._setContents("<ColumnInfo><Column id=\"CNTRCTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZRNO\" type=\"STRING\" size=\"256\"/><Column id=\"MTLTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSTMR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IHIDNUM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCND\" type=\"STRING\" size=\"256\"/><Column id=\"INDUTY\" type=\"STRING\" size=\"256\"/><Column id=\"BDNBR\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES\" type=\"STRING\" size=\"256\"/><Column id=\"ADRES_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNM_SN\" type=\"STRING\" size=\"256\"/><Column id=\"LAD_CSTMR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("ds_useAt",this);_a.set_firefirstcount("0");_a.getSetter("firenextcount").set("0");_a.set_useclientlayout("true");_a.set_updatecontrol("true");_a.set_enableevent("true");_a.set_loadkeymode("keep");_a.set_loadfiltermode("keep");_a.set_reversesubsum("false");_a._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"CODE_NM\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미사용</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new Div("div_WORK","absolute","13","71",null,"220","0",null,this);_a.set_taborder("0");_a.style.set_background("white");this.addChild(_a.name,_a);_a=new Static("Static04","absolute","0","112","610","27",null,null,this.div_WORK);_a.set_taborder("20");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","138","610","27",null,null,this.div_WORK);_a.set_taborder("21");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static06","absolute","0","164","610","27",null,null,this.div_WORK);_a.set_taborder("22");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static01","absolute","0","86","610","27",null,null,this.div_WORK);_a.set_taborder("19");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static03","absolute","0","60","610","27",null,null,this.div_WORK);_a.set_taborder("15");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static15","absolute","0","0",null,"10","0",null,this.div_WORK);_a.set_taborder("2");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_Bsnm","absolute","0","10","300","19",null,null,this.div_WORK);_a.set_taborder("3");_a.set_text("사업자 정보");_a.set_cssclass("sta_WF_Title02");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static02","absolute","0","29",null,"5","0",null,this.div_WORK);_a.set_taborder("4");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static37","absolute","0","34","610","27",null,null,this.div_WORK);_a.set_taborder("5");_a.set_cssclass("sta_WF_Labelbg");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM","absolute","0","34","100","27",null,null,this.div_WORK);_a.set_taborder("11");_a.set_text("상호명");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","0","86","100","27",null,null,this.div_WORK);_a.set_taborder("12");_a.set_text("업태");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM01","absolute","304","86","100","27",null,null,this.div_WORK);_a.set_taborder("13");_a.set_text("업종");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_MTLTY_NM","absolute","102","38","200","21",null,null,this.div_WORK);_a.set_taborder("0");_a.set_cssclass("edt_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Static("Static00","absolute","0","239",null,"10","0",null,this.div_WORK);_a.set_taborder("14");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_ADRES","absolute","0","138","100","54",null,null,this.div_WORK);_a.set_taborder("16");_a.set_text("사업장주소");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edi_zip","absolute","102","141","115","21",null,null,this.div_WORK);_a.set_taborder("7");_a.set_readonly("true");_a.set_cssclass("edt_WF_Readonly");this.div_WORK.addChild(_a.name,_a);_a=new Button("btn_ZIP","absolute","193","141","24","21",null,null,this.div_WORK);_a.set_taborder("9");_a.set_cssclass("btn_WF_Search");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM00","absolute","0","60","100","27",null,null,this.div_WORK);_a.set_taborder("17");_a.set_text("사업자번호");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_BIZRNO","absolute","102","63","200","21",null,null,this.div_WORK);_a.set_taborder("1");_a.set_cssclass("edt_WF_Essential");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ADRES_DETAIL","absolute","102","167","506","21",null,null,this.div_WORK);_a.set_taborder("10");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_ADRES_DETAIL00","absolute","219","141","389","21",null,null,this.div_WORK);_a.set_taborder("8");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_email","absolute","0","112","100","27",null,null,this.div_WORK);_a.set_taborder("18");_a.set_text("이메일");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Edit("edt_email","absolute","102","115","198","21",null,null,this.div_WORK);_a.set_taborder("6");this.div_WORK.addChild(_a.name,_a);_a=new Static("sta_IHIDNUM02","absolute","304","112","100","27",null,null,this.div_WORK);_a.set_taborder("24");_a.set_text("사용여부");_a.set_cssclass("sta_WF_Label");this.div_WORK.addChild(_a.name,_a);_a=new Combo("cmb_useAt","absolute","406","115","201","21",null,null,this.div_WORK);this.div_WORK.addChild(_a.name,_a);_a.set_taborder("25");_a.set_innerdataset("ds_useAt");_a.set_codecolumn("CODE");_a.set_datacolumn("CODE_NM");_a.set_text("사용");_a.set_value("Y");_a.set_index("0");_a=new Static("sta_popTitle","absolute","2","2",null,"34","0",null,this);_a.set_taborder("1");_a.set_text("사업자 등록");_a.set_cssclass("sta_WF_PopupTitle");this.addChild(_a.name,_a);_a=new Static("Static02","absolute",null,"2","15",null,"0","-29",this);_a.set_taborder("6");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Button("btn_close","absolute","601","9","20","20",null,null,this);_a.set_taborder("7");_a.set_cssclass("btn_WF_PopupClose");this.addChild(_a.name,_a);_a=new Static("Static05","absolute","0","2","15",null,null,"-29",this);_a.set_taborder("8");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#1b3cd23c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static06","absolute","2","36",null,"15","0",null,this);_a.set_taborder("9");_a.set_text("15");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("sta_NM00","absolute","317","131","100","27",null,null,this);_a.set_taborder("10");_a.set_text("대표자명");_a.set_cssclass("sta_WF_Label");this.addChild(_a.name,_a);_a=new Static("Static15","absolute","2","276",null,"12","-2",null,this);_a.set_taborder("11");_a.set_text("10");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Static("Static12","absolute","0","76",null,"5","0",null,this);_a.set_taborder("12");_a.set_text("5");_a.set_visible("false");_a.style.set_background("#dc143c3c");_a.style.set_align("center middle");this.addChild(_a.name,_a);_a=new Edit("edt_item","absolute","419","160","202","21",null,null,this);_a.set_taborder("5");this.addChild(_a.name,_a);_a=new Button("btn_save","absolute",null,"51","50","25","68",null,this);_a.set_taborder("13");_a.set_text("저장");_a.set_cssclass("btn_WF_CRUD");_a.set_visible("true");_a.set_tooltiptext("단축키안내(Ctrl+F9)");_a.set_hotkey("CTRL+F9");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Button("btn_close00","absolute",null,"51","50","25","15",null,this);_a.set_taborder("14");_a.set_text("종료");_a.set_cssclass("btn_WF_CRUD");_a.set_tooltiptext("단축키정보(Crtl+F10)");_a.set_hotkey("CTRL+F10");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Edit("edt_NM00","absolute","419","133","202","21",null,null,this);_a.set_taborder("2");_a.set_cssclass("edt_WF_Essential");_a.set_readonly("true");_a.style.set_background("#f0f0f0ff URL('theme://images/img_WF_Essential.png') left top");this.addChild(_a.name,_a);_a=new Edit("edt_bizcnd","absolute","115","160","200","21",null,null,this);_a.set_taborder("4");this.addChild(_a.name,_a);_a=new Button("btn_ZIP00","absolute","599","134","21","19",null,null,this);_a.set_taborder("3");_a.set_cssclass("btn_WF_Search");_a.style.set_background("#f0f0f0ff");this.addChild(_a.name,_a);_a=new Grid("grd_hcntrctrBsnmList","absolute","13","287",null,null,"15","0",this);_a.set_taborder("15");_a.set_binddataset("ds_houseCstmrInfo");_a.set_autoenter("select");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상호명\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"대표자명\"/><Cell col=\"3\" text=\"업종\"/><Cell col=\"4\" text=\"업태\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:MTLTY_NM\"/><Cell col=\"1\" text=\"bind:BIZRNO\" mask=\"expr:String(BIZRNO).length == 10 ? &quot;###-##-#####&quot; : (String(BIZRNO).length == 13 ? &quot;######-#######&quot; : &quot;&quot;)\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:right;\" text=\"bind:CSTMR_NM\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:right;\" text=\"bind:INDUTY\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:right;\" text=\"bind:BIZCND\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:right;\" text=\"expr:USE_AT=='Y' ? '사용' : '미사용'\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btn_insert","absolute",null,"51","50","25","121",null,this);_a.set_taborder("16");_a.set_text("신규");_a.set_cssclass("btn_WF_CRUD");_a.set_tooltiptext("단축키안내(Ctrl+F3)");_a.set_hotkey("CTRL+F3");_a.style.set_font("bold 9 Gulim");this.addChild(_a.name,_a);_a=new Layout("default","",0,220,this.div_WORK,function(_b){_b.set_taborder("0");_b.style.set_background("white");});this.div_WORK.addLayout(_a.name,_a);_a=new Layout("default","",640,555,this,function(_b){_b.set_classname("rentCstmrBsnm");_b.set_titletext("임대사업자 검색 및 등록 팝업");});this.addLayout(_a.name,_a);_a=new BindItem("item18","div_WORK.edt_ADRES_DETAIL","value","ds_houseCstmrInfo","ADRES_DETAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item8","edt_NM00","value","ds_houseCstmrInfo","CSTMR_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item11","div_WORK.edt_MTLTY_NM","value","ds_houseCstmrInfo","MTLTY_NM");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item14","edt_bizcnd","value","ds_houseCstmrInfo","BIZCND");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item15","edt_item","value","ds_houseCstmrInfo","INDUTY");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item16","div_WORK.edi_zip","value","ds_houseCstmrInfo","ZIP");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item12","div_WORK.edt_BIZRNO","value","ds_houseCstmrInfo","BIZRNO");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item0","div_WORK.edt_ADRES_DETAIL00","value","ds_houseCstmrInfo","ADRES");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","div_WORK.edt_email","value","ds_houseCstmrInfo","EMAIL");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item35","div_WORK.cmb_useAt","value","ds_houseCstmrInfo","USE_AT");this.addChild(_a.name,_a);_a.bind();_a=null;};this.addIncludeScript("SLS020101_P10.xfdl","pms_lib::rntUtilInclude.xjs");this.registerScript("SLS020101_P10.xfdl",function(){this.edtNm="";var _a= -1;this.cntrctrNo=null;this.bsnm_sn=null;this.callback=null;this.SLS020101_P10_oninit=function(_b,_c){this.fn_init(false);this.fn_init_form();this.fn_init_dataset();};this.SLS020101_P10_onload=function(_b,_c){this.ds_cond01.clear();this.ds_cond01.copyData(this.parent.arg_1);this.fn_transaction("houseCstmrList");};this.fn_init_form=function(){this.gfn_initForm(this);};this.fn_init_dataset=function(){this.gfn_initCondDs(this,this.div_search);};this.btn_search_onclick=function(_b,_c){this.btn_search_onclick();this.ds_ladCstmrInfo.clearData();if(this.comUtils.isNullEmpty(this.edtNm)==false){this.alert(this.edtNm);}this.fn_divToDS(this.ds_cond01,this.div_search);this.fn_transaction("houseCstmrList");};this.btn_close_onclick=function(_b,_c){this.close();};this.btn_save_onclick=function(_b,_c){if(this.gfn_checkValidation(this.ds_ladCstmrInfo,this.ds_validation)==false){return;}if(this.edt_NM00.value==undefined||this.div_WORK.edt_BIZRNO.value==undefined||this.div_WORK.edt_MTLTY_NM.value==undefined){this.alert("필수 입력값을 확인해주세요");return;}if(this.fn_check_duplidateBsnm()==true){return;}if(Ex.util.isUpdated(this.ds_houseCstmrInfo)==true){if(this.confirm("주택 사업자를 저장 하시겠습니까?")){_a=this.ds_houseCstmrInfo.rowposition;this.fn_transaction("houseCstmrCUD");}}};this.fn_check_duplidateBsnm=function(){var _b=this.div_WORK.edt_BIZRNO.value;var _c=this.div_WORK.edt_MTLTY_NM.value;var _d=this.ds_houseCstmrInfo.rowcount;for(var _e=0;_e<_d;_e++ ){if(this.ds_houseCstmrInfo.getColumn(_e,'BIZCND')==_b){this.alert("동일한 사업자번호로 이미 등록되어 있습니다.");return true;}}return false;};this.fn_confirm=function(){var _b=this.opener;if(_b[this.callback]==null){_b=this.opener.div_workFrame.div_main;}bResult=_b[this.callback]();return bResult;};this.fn_transaction=function(_b){switch(_b){case "houseCstmrList":var _c="/hsco/pms/sls/hou/ctr/SLS020101/selectHouseLcntrctrBnsmList.do";var _d="input1=ds_cond01";var _e="ds_houseCstmrInfo=output1";break;case "selectHouseCstmrListInfo":var _c="/hsco/pms/sls/hou/ctr/SLS020101/selectHouseLcntrctrBnsmList.do";var _d="input1=ds_cond00";var _e="ds_HouseCstmrListInfo=output1";break;case "selectHouseCstmrBsnmList":var _c="hsco/pms/sls/hou/ctr/SLS020101/selectHouseCstmrBsnmList.do";var _d="input1=ds_cond01";var _e="ds_hcntrctrBsnmList=output1";break;case "houseCstmrCUD":var _c="/hsco/pms/sls/hou/ctr/SLS020101/saveHouseLcntrctrBsnmList.do";var _d="input1=ds_houseCstmrInfo:U";var _e="";break;}Ex.core.tran(this,_b,_c,_d,_e);};this.fn_callBack=function(_b,_c,_d){this.fn_callback_message(_b,_c,_d);var _e=_c==0?true:false;if(_e==true){switch(_b){case "houseCstmrList":if(_a!= -1){this.ds_houseCstmrInfo.set_rowposition(_a);_a= -1;}break;case "selectHouseCstmrListInfo":break;case "houseCstmrCUD":this.alert("저장 완료");this.fn_transaction("houseCstmrList");break;}}this.debug((_e==true?"Success : ":"Fail : ")+_b);};this.div_detail_btn_zipDmSearch_onclick=function(_b,_c){var _d=function(_f,_g){if(Eco.isEmpty(_g)){return;}trace('OK\n'+_g);var _h=new Dataset();nRowCnt=_h.loadXML(_g);if(nRowCnt<1){return;}var _i="ZIP=ZIPNO,"+"ADRES=ROADADDRPART1,"+"ADRES_DETAIL=ROADADDRPART2,";;var _j=this.ds_houseCstmrInfo;_j.copyRow(_j.rowposition,_h,0,_i);};var _e=this.div_WORK.edt_ADRES_DETAIL.value;this.gfn_popup('zipPopup',500,500,'',{arg_addr:_e},"common::frmZipAddressPopup.xfdl",_d);};this.div_detail_btn_ladCstmr_onclick=function(_b,_c){var _d=this.ds_houseCstmrInfo.getColumn(0,"LAD_CSTMR_NO");var _e=this.edt_NM00.value;if(_e==undefined){_e='';}this.gfn_popup("popup_ladCstmr",600,470,"주택계약자 검색 및 등록",{cstmrNm:_e,ladCstmrNo:_d,callback:"fn_houseCstmr_callBack"},"pms_sls_com::houseCstmr_P01.xfdl");};this.fn_houseCstmr_callBack=function(_b,_c,_d,_e,_f,_g,_h,_i,_j){var _k=this.ds_houseCstmrInfo.rowposition;this.ds_houseCstmrInfo.setColumn(_k,"HOUSE_CSTMR_NO",_b);this.ds_houseCstmrInfo.setColumn(_k,"CSTMR_NM",_c);this.ds_houseCstmrInfo.setColumn(_k,"IHIDNUM",_d);this.ds_houseCstmrInfo.setColumn(_k,"ZIP",_e);this.ds_houseCstmrInfo.setColumn(_k,"ADRES",_f);this.ds_houseCstmrInfo.setColumn(_k,"ADRES_DETAIL",_g);return true;};this.btn_insert_onclick=function(_b,_c){this.ds_HouseCstmrListInfo.addRow();var _d=this.ds_houseCstmrInfo.addRow();this.ds_houseCstmrInfo.setColumn(_d,"CNTRCTR_NO",this.ds_cond01.getColumn(0,"CNTRCTR_NO"));};});this.on_initEvent=function(){this.addEventHandler("oninit",this.SLS020101_P10oninit,this);this.addEventHandler("onload",this.SLS020101_P10_onload,this);this.div_WORK.sta_Bsnm.addEventHandler("onclick",this.div_WORK_Static01_onclick,this);this.div_WORK.btn_ZIP.addEventHandler("onclick",this.div_detail_btn_zipDmSearch_onclick,this);this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);this.btn_ZIP00.addEventHandler("onclick",this.div_detail_btn_ladCstmr_onclick,this);this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);};this.loadIncludeScript("SLS020101_P10.xfdl");};})();